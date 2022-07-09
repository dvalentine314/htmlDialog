import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  selectedNumbers:number=0;
  @ViewChild('ModalReference') modalReference!:ElementRef;
  numbersChanged(){

  }

  toggleDialog(){
    //this.showDialog = !this.showDialog; // this works but makes it easier to click off the modal and dismiss it. 
    if(!this.modalReference.nativeElement.open){
      this.modalReference.nativeElement.showModal();
    }else{
      this.modalReference.nativeElement.close();
    }
  }

}
