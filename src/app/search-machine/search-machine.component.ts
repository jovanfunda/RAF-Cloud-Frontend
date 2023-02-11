import { AfterViewInit, Component } from '@angular/core';
import { Machine } from '../classes/machine';
import { SearchMachineService } from '../service/search-machine.service';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-search-machine',
  templateUrl: './search-machine.component.html',
  styleUrls: ['./search-machine.component.css']
})
export class SearchMachineComponent implements AfterViewInit {

  machines: Machine[] = [];
  values = ['Running', 'Stopped'];
  htmlToAdd = "";

  name: String;
  status: String[] = [];
  dateFrom: Date | undefined;
  dateTo: Date | undefined;

  subscription: Subscription;


  constructor(private searchMachineService: SearchMachineService) { }

  ngAfterViewInit(): void {
    this.getMachines();
    this.subscription = interval(1000).subscribe(val => this.getMachines());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
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

}
