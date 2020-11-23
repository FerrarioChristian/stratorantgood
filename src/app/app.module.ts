import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponentComponent } from './map-component/map-component.component';

import { StoreModule } from '@ngrx/store';
import reducers from "./store/reducers";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AgentComponentComponent } from './agent-component/agent-component.component';
import { AgentsHandlerComponent } from './agents-handler/agents-handler.component';
import { MapSwitcherComponent } from './map-component/map-switcher/map-switcher.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SettingsService } from './store/settings/settings.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MapComponentComponent,
    AgentComponentComponent,
    AgentsHandlerComponent,
    MapSwitcherComponent,
    NavigationComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({...reducers}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
