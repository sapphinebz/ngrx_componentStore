import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { combineLatest, tap } from 'rxjs';
import { AppStoreService } from 'src/app/store/app-store.service';

@Component({
  selector: 'app-display-pokemon',
  templateUrl: './display-pokemon.component.html',
  styleUrls: ['./display-pokemon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplayPokemonComponent implements OnInit {
  pokemon$ = this.store.pokemon$;
  pokemonName$ = this.store.select(this.pokemon$, (state) => state?.name);
  pokemonSprites$ = this.store.select(this.pokemon$, (state) => state?.sprites);

  display$ = this.store.select(
    combineLatest([this.store.isLoading$, this.pokemon$]),
    ([isLoading, pokemon]) => !isLoading && pokemon !== null
  );

  constructor(public store: AppStoreService) {}

  ngOnInit(): void {}
}
