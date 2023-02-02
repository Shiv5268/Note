import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  show:boolean=false;
  constructor() {
  }
  ngOnInit(): void {
  }
  toggle(){
    this.show=true;
  }
}
