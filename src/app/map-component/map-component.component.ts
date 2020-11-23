import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Settings } from '../store/settings/settings.model';

import { selectors as settingsSelectors } from '../store/settings';

@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.scss']
})
export class MapComponentComponent implements OnInit {
  selectedMap: string;

  constructor(private store: Store) {
    this.store.pipe(select(state => settingsSelectors.getSelectedMap(state)))
      .subscribe(el => this.selectedMap = el);
   }

  ngOnInit(): void {

  }

}
