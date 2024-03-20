import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input() user:any = ''
  @Output() handleOnDelete = new EventEmitter()
  @Output() hanldeOnUpdate = new EventEmitter()
constructor(){

}
onDelete(_id:string){

  this.handleOnDelete.emit(_id)
}
onUpdate(_id:string){
  this.hanldeOnUpdate.emit(_id)
}
}
