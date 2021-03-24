import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input()
  public theme: 'dark' | 'light' = 'dark';

  public showSidebar = false;

  constructor() { }

  ngOnInit(): void {
  }

}
