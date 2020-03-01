import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  isVisible: boolean;
  constructor() { }

  ngOnInit() {}

  visibleSidebar(visible: boolean) {
    this.isVisible = visible;
  }

}
