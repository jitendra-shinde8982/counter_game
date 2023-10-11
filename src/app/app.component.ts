import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 show : boolean = true; 
 public employee : any =[
  {id:1, name:'jitendra shinde', role:'ui developer', Dateofbirth:'08-mar-2001'},
  {id:2, name:'jitendra shinde', role:'ui developer', Dateofbirth:'08-mar-2001'},
  {id:3, name:'jitendra shinde', role:'ui developer', Dateofbirth:'08-mar-2001'},
 ]
 
}
