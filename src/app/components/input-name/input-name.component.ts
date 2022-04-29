import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AppStoreService } from 'src/app/store/app-store.service';

@Component({
  selector: 'app-input-name',
  templateUrl: './input-name.component.html',
  styleUrls: ['./input-name.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputNameComponent implements OnInit {
  constructor(public store: AppStoreService) {}

  ngOnInit(): void {}

  searchPokemon(search: string) {
    this.store.searchPokemon(search);
  }
}
