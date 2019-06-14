import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})


export class HomeComponent implements OnInit {
  list:string[] = ['王国先','小四','王国先','小三','王国先','王国先','小三','王国先','王国先','小四','王国先','小三','王国先','马上','估算','王国先','小四','王国先',,'小四','王国先','小三','王国先','王国先','小四','王国先','小三','王国先','王国先','小四','王国先','小三','王国先','马上','估算','王国先','小四','王国先','小三','王国先'];
  constructor() { 
    
  }

  ngOnInit() {

  }

  

}
