import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  session : any;

  //for storing data in local storage
saveData(){
  let data = { id: 1, name: 'xyz'};
  localStorage.setItem('session',JSON.stringify(data))
}
//for showing data in ui
loadData(){
  let data : any = localStorage.getItem('session');
  this.session = JSON.parse(data);
  alert(data);
}

//for remove data from local storage
remove(){
  localStorage.removeItem("session");
}

}
