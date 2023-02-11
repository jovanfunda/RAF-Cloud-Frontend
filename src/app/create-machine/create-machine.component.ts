import { Component, OnInit } from '@angular/core';
import { CreateMachineService } from '../service/create-machine.service';

@Component({
  selector: 'app-create-machine',
  templateUrl: './create-machine.component.html',
  styleUrls: ['./create-machine.component.css']
})
export class CreateMachineComponent implements OnInit {

  name: String = "";
  htmlToAdd: String = "";

  constructor(private createMachineService: CreateMachineService) { }

  ngOnInit(): void {
  }

  createMachine(): void {
    if(this.name == "") {
      this.htmlToAdd = '<p>Name field cannot be empty</p>';
      return;
    }
    
    this.createMachineService.createMachine(this.name).subscribe(() => {
      this.htmlToAdd = '<p>Machine successfully created!</p>';
    })
  }
}