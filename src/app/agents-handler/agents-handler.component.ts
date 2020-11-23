import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AgentService } from '../store/agents/agent.service';
import { selectors as agentsSelectors } from '../store/agents';
import { Agent } from '../store/agents/agent.model';
import { select, Store } from '@ngrx/store';
import { SettingsService } from '../store/settings/settings.service';

@Component({
  selector: 'app-agents-handler',
  templateUrl: './agents-handler.component.html',
  styleUrls: ['./agents-handler.component.scss'],
  providers: [AgentService, SettingsService]
})
export class AgentsHandlerComponent implements OnInit {

  agentListDefend: Agent[];
  agentListOffense: Agent[];

  @Output() reset = new EventEmitter<boolean>();

  constructor(private agentService: AgentService, private settingsService: SettingsService,
  private store: Store) {
    this.store.pipe(select(state => agentsSelectors.getAgentsList(state)))
      .subscribe(el => {
        this.agentListDefend = el;
        this.agentListOffense = el;
      });
   }

  ngOnInit(): void {
    this.agentService.loadAgents();
    this.settingsService.loadStartingSettings();
  }

}
