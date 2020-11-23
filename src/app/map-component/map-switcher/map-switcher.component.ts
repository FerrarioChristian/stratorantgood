import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { SettingsService } from 'src/app/store/settings/settings.service';
import mapList from "../../store/settings/map/mapList";
import { selectors as settingsSelectors } from '../../store/settings';

@Component({
  selector: 'app-map-switcher',
  templateUrl: './map-switcher.component.html',
  styleUrls: ['./map-switcher.component.scss']
})
export class MapSwitcherComponent implements OnInit {
  mapList = mapList
  selectedMap: string;
  constructor(private store: Store, private settings: SettingsService) {
    this.store.pipe(select(state => settingsSelectors.getSelectedMap(state)))
      .subscribe(el => this.selectedMap = el);
   }

  ngOnInit(): void {
  }

  onMapChange(map: string) {
    this.settings.selectMap(map);
  }

}
