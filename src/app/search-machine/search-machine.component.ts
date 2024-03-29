import { AfterViewInit, Component } from '@angular/core';
import { Machine } from '../classes/machine';
import { SearchMachineService } from '../service/search-machine.service';

@Component({
  selector: 'app-search-machine',
  templateUrl: './search-machine.component.html',
  styleUrls: ['./search-machine.component.css']
})
export class SearchMachineComponent implements AfterViewInit {

  machines: Machine[] = [];
  values = ['RUNNING', 'STOPPED'];
  htmlToAdd = "";

  name: String;
  status: String[] = [];
  dateFrom: Date | undefined;
  dateTo: Date | undefined;
  scheduleTime: String = "";

  constructor(private searchMachineService: SearchMachineService) { }

  ngAfterViewInit(): void {
    this.getMachines();
  }

  getMachines(): void {
      this.searchMachineService.getMachines().subscribe((machines) => {
        this.machines = machines;
      })
  }

  filterMachines(): void {
    if((this.dateFrom != undefined && this.dateTo == undefined) || (this.dateFrom == undefined && this.dateTo != undefined)) {
      this.htmlToAdd = "Make sure you have both of your dates chosen.";
      return;
    }
    this.searchMachineService.filterMachines(this.name, this.status, this.dateFrom, this.dateTo).subscribe((machines) => {
      this.machines = machines;
    })
  }

  deleteMachine(machineID: BigInt): void {
    this.searchMachineService.deleteMachine(machineID).subscribe((successful) => {
      if(!successful) {
        this.htmlToAdd = "Machine not found!";
      }
    })
  }

  startMachine(machineID: BigInt): void {
    this.searchMachineService.startMachine(machineID).subscribe(() => {
        this.htmlToAdd = "Start machine called on machine " + machineID;
    })
  }

  stopMachine(machineID: BigInt): void {
    this.searchMachineService.stopMachine(machineID).subscribe(() => {
        this.htmlToAdd = "Stop machine called on machine " + machineID;
    })
  }

  restartMachine(machineID: BigInt): void {
    this.searchMachineService.restartMachine(machineID).subscribe(() => {
      this.htmlToAdd = "Restart machine called on machine " + machineID;
    })
  }

  scheduleJob(machineID: BigInt, job: String): void {
    if(this.scheduleTime == "") {
      this.callJobWithoutSchedule(machineID, job);
      return;
    }

    this.searchMachineService.scheduleJob(machineID, job, this.scheduleTime).subscribe(() => {
      this.htmlToAdd = "Scheduled job " + job + " on machine " + machineID +  " at " + this.scheduleTime;
    })    

  }

  callJobWithoutSchedule(machineID: BigInt, job:String): void {
    if(job == "start") {
      this.startMachine(machineID);
    } else if(job == "stop") {
      this.stopMachine(machineID);
    } else if(job == "restart") {
      this.restartMachine(machineID);
    }
  }

}
