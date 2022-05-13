import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  selectedNumbers:number=0;
  showDialog:boolean=false;
  @ViewChild('ModalReference') modalReference!:ElementRef;
  numbersChanged(){

  }

  toggleDialog(){
    //this.showDialog = !this.showDialog;
    if(!this.modalReference.nativeElement.open){
      this.modalReference.nativeElement.showModal();
    }else{
      this.modalReference.nativeElement.close();
    }
  }

}
