import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-data',
  templateUrl: './store-data.component.html',
  styleUrls: ['./store-data.component.css']
})
export class StoreDataComponent implements OnInit {

  dataAdded= [];
  elseBlock: String; 
  temp: String;
  
  constructor() { }

  add(args){  
    if(args){ 
      this.elseBlock= "";
      this.temp = args;
      
      return this.dataAdded.push(this.temp);
    }
    else
      return this.elseBlock="Please insert value"; 
  }
  
  delete(){
    return this.dataAdded.splice(0); 
  }

  remove(event){
    return event.target.parentElement.remove()
  }
  ngOnInit() {
  }

}
