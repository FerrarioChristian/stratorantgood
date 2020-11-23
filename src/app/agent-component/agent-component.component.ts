import { Component, Input, OnInit, HostListener } from '@angular/core';
import { AgentService } from '../store/agents/agent.service';
import { selectors as agentsSelectors } from '../store/agents';
import { selectors as settingsSelectors } from '../store/settings';
import { AgentSetting } from '../store/agents/agent.model';
import { select, Store } from '@ngrx/store';
import { Coordinates } from '../store/settings/settings.model';

@Component({
  selector: 'app-agent-component',
  templateUrl: './agent-component.component.html',
  styleUrls: ['./agent-component.component.scss'],
  providers: [AgentService]
})
export class AgentComponentComponent implements OnInit {
  @Input() agent: AgentSetting;
  @Input() isOffense: boolean = false;
  @Input() index;

  isMovable: boolean = false;
  target;
  headerOffset = 50;

  agentPositionOffsetX;
  agentPositionOffsetY;
  startingPositionOffsetY = 0;
  startingPositionOffsetX = 0;
  @HostListener('document:mousemove', ['$event']) 
  onMouseMove(e) {
    if (this.isMovable) {
      this.dragHandler(e);
    }
  }

  @HostListener('document:mouseup', ['$event']) 
  function () {
    if(this.isMovable) {
      const agentCoordinates: Coordinates = {
        X: this.agentPositionOffsetX,
        Y: this.agentPositionOffsetY,
      }
      this.agentService.setAgentPosition(this.agent, agentCoordinates)
    }
    this.isMovable = false;
  }

  styleMap = {}

  constructor(private store: Store, private agentService: AgentService) { 
  }
  
  ngOnInit() {
    this.store.pipe(select(state => settingsSelectors.getAgentSettingsBySideAndIndex(state, this.isOffense, this.index)))
    .subscribe(el => {
      this.agent = el;
      this.updatePosition();
    });
    
    this.updatePosition();
  }

  updatePosition() {
    this.startingPositionOffsetY = this.agent.offsetY || this.index * 50 + this.headerOffset;
    this.startingPositionOffsetX = this.agent.offsetX || 0;

    this.styleMap = {
      top: this.startingPositionOffsetY + "px",
      left: this.isOffense && !this.startingPositionOffsetX ? window.innerWidth - 60 + "px" : this.startingPositionOffsetX + "px"
  }
  }
  
  dragStart(e) {
    e.preventDefault();
    this.isMovable = true;
    this.target = e.target;
  }

  dragHandler(e) {
    e.preventDefault();
    this.agentPositionOffsetY = e.clientY - 35 - this.headerOffset;
    this.agentPositionOffsetX = e.clientX - 26;
    this.target.style.top = this.agentPositionOffsetY + "px"
    this.target.style.left = this.agentPositionOffsetX + "px";
  }

}
