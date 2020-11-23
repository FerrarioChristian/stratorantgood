import { Component, Input, OnInit, HostListener } from '@angular/core';
import { AgentService } from '../store/agents/agent.service';
import { selectors as agentsSelectors } from '../store/agents';
import { Agent, AgentSetting } from '../store/agents/agent.model';
import { select, Store } from '@ngrx/store';

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

  pos1 = 0; pos2 = 0; pos3 = 0; pos4 = 0;
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
    this.isMovable = false;
  }

  
  styleMap = {}

  constructor(private store: Store) { 
  }
  
  ngOnInit() {

    this.store.pipe(select(state => agentsSelectors.getAgentSettingsBySideAndIndex(state, this.isOffense, this.index)))
    .subscribe(el => {
      this.agent = el;
    });
    this.startingPositionOffsetY = this.agent.offsetY || this.index * 50 + this.headerOffset;
    this.startingPositionOffsetX = this.agent.offsetX || 0;
  }
  
  dragStart(e) {
    e.preventDefault();
    this.isMovable = true;
    this.target = e.target;
  }

  dragHandler(e) {
    e.preventDefault();
    this.agentPositionOffsetY = e.clientY - 35 - this.headerOffset + "px";
    this.agentPositionOffsetX = e.clientX - 26 + "px";
    this.target.style.top = this.agentPositionOffsetY
    this.target.style.left = this.agentPositionOffsetX;
  }

}
