import { Component, OnInit } from '@angular/core';
import { Task } from './/../Task';
import { TaskService } from './/../Task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  task:Task=new Task ();
  submitted=false;
  constructor(private taskservice:TaskService) { }

  ngOnInit() {
    // $.getScript('./node_modules/jquery/dist/jquery.min.js');
    // $.getScript('./node_modules/jquery-ui-dist/jquery-ui.min.js";
    // $.getScript('./node_modules/bootstrap/dist/js/bootstrap.min.js";
    // $.getScript('./src/assets/DatePickerDirective.js");
  }

  newTask(): void {
    this.submitted = false;
    this.task = new Task();
  }

  save() {
    this.taskservice.addTask(this.task)
      .subscribe(data => console.log(data), error => console.log(error));
    this.task = new Task();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}

