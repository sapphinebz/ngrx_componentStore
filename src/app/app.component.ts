import { ChangeDetectorRef, Component } from '@angular/core';
import { AppStoreService } from './store/app-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngrx_componentStore';

  detectChanges() {
    console.count('detectChanges');
  }
  constructor(public store: AppStoreService) {}

  searchPokemon(search: string) {
    this.store.searchPokemon(search);
  }
}
