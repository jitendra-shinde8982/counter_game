import { Component } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']


  
})
export class ForgetPasswordComponent {
  title : string ="Counter "
 n=0
 counter(type:string){
  type==='add' ? this.n++:this.n--;
 }
  
}
