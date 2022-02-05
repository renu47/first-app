import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  selector: '.app-servers',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowServers = false;
serverCreationStatus : string = "No server created";
serverName = '';
serverCreated = false;
servers = ['Testserver', 'testserver2']
  constructor() {
    setTimeout(() => {
      this.allowServers = true;
    }, 2000);
   }

  ngOnInit(): void {
  }

  onCreatedServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created "+this.serverName;
  }

  onUpdateServer(event: any){
    console.log('Event============');
   
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(event.target.value);
    
    
    

  }


}
