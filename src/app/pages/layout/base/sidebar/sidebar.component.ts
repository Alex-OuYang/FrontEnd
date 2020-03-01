import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() showBar: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
