import { TodoListService } from './todoList.services';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Importando o serviço
  todoListService: TodoListService = new TodoListService;
  construtor(todoListService: TodoListService){
    this.todoListService = todoListService;
  }
  title = 'servicos';
}
