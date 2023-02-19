import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.scss']
})
export class CompleteComponent implements OnInit {
  @Output('continue') continue = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}
}
