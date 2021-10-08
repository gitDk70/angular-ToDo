import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string = 'ToDo';
  showAddTask: boolean = true;
  subscription: Subscription;

  constructor(private uiService: UiService, private router:Router) { //providers uiservice and router
    this.subscription = this.uiService.onToggle().subscribe((value) => this.showAddTask = value);
    
  }

  ngOnInit(): void {
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }
  hasRoute(route: string) {
    return this.router.url === route;
  }
}
