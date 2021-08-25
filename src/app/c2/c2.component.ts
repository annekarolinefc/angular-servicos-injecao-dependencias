import { Component, Inject, OnInit } from '@angular/core';
import { TEMA } from '../app.module';
import { TodoListService } from '../todoList.services';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {

    //Importando o serviço
    todoListService: TodoListService = new TodoListService;
    //@Inject(TEMA) public tema: string
    construtor(todoListService: TodoListService){
      this.todoListService = todoListService;
    }


  ngOnInit(): void {
  }

}
