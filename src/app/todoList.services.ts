import { Injectable } from "@angular/core";

//Foi importado corretamente em app.module.ts
//Injectable({
  //providedIn: 'root'
//})

export class TodoListService{
  items: string[] = ["item1"];

  add(newItem: string){
    this.items.push(newItem);
  }
}
