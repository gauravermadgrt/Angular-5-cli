import { Component,OnInit } from '@angular/core';
import * as action from './store/app.action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  city: any;
  category: any;
  resturants: any;
  title = 'app';
    users: any = [];
  constructor(private store: Store<any>){

  }

  ngOnInit(){ 

    this.store.select('counter').subscribe((data)=>{

        console.log(data,'sdds');
        if(data.users)
        {
          this.category = data.users.category;
          this.city = data.users.city;
        }
        
        
        // if(data.users)
        // this.users = data.users;
    })
let payload = {};
this.store.dispatch({
  type: action.GET_USERS,payload
});
    
  }
}
