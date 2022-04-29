import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import {
  catchError,
  debounceTime,
  defer,
  EMPTY,
  map,
  merge,
  NEVER,
  Observable,
  Subject,
  switchMap,
  takeUntil,
  tap,
  throwError,
} from 'rxjs';
import { PokemonHttpService } from '../http/pokemon-http.service';
import { Pokemon } from '../model/pokemon.model';

interface AppState {
  pokemon: Pokemon | null;
  isLoading: boolean;
  idDirty: boolean;
}

@Injectable({ providedIn: 'root' })
export class AppStoreService extends ComponentStore<AppState> {
  onSearch = new Subject<string>();
  onSearchError = new Subject<any>();
  onSearchStart = new Subject<void>();
  onSearchComplete = new Subject<Pokemon>();

  isLoading$ = this.select((state) => state.isLoading);
  pokemon$ = this.select((state) => state.pokemon);

  readonly setLoading = this.updater((state, isLoading: boolean) => ({
    ...state,
    isLoading,
  }));

  readonly updateLoadingOnEvent = this.setLoading(
    merge(
      this.onSearch.pipe(map(() => true)),
      this.onSearchError.pipe(map(() => false)),
      this.onSearchComplete.pipe(map(() => false))
    )
  );

  readonly setPokemon = this.updater((state, pokemon: AppState['pokemon']) => ({
    ...state,
    pokemon,
  }));

  searchPokemonEffect = this.effect(() =>
    this.onSearch.pipe(
      debounceTime(400),
      switchMap((search) =>
        defer(() => {
          if (search.length > 3) {
            this.onSearchStart.next();
            return this.httpPokemon.getPokemonByName(search);
          }
          return throwError(
            () => new Error('please enter keyword search more than 3')
          );
        }).pipe(
          catchError((err) => {
            this.onSearchError.next(err);
            this.setPokemon(null);
            return NEVER;
          })
        )
      ),
      tap((response) => {
        this.onSearchComplete.next(response);
        this.setPokemon(response);
      })
    )
  );

  constructor(private httpPokemon: PokemonHttpService) {
    super({
      pokemon: null,
      isLoading: false,
      idDirty: false,
    });
  }

  searchPokemon(name: string) {
    this.onSearch.next(name);
  }
}
