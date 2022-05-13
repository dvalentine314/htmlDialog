import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss']
})
export class ModalContentComponent implements OnInit {

  constructor() { }
  @Output() closeDialogEvent = new EventEmitter<void>()
  ngOnInit(): void {
  }



  closeDialog(){
    this.closeDialogEvent.emit();
  }

}
