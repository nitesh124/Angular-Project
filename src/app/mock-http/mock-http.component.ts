import { MockData } from './../service/mockData';
import { KickStarterService } from './../service/kickstarter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mock-http',
  templateUrl: './mock-http.component.html',
  styleUrls: ['./mock-http.component.css']
})
export class MockHttpComponent implements OnInit {

  mockData: any[];
  constructor(private kickStarterService: KickStarterService) { }

  ngOnInit() {
  }
  getData() {
    this.kickStarterService.getData().subscribe(res => { this.mockData = res as MockData[]; });
    console.log(this.mockData);
  }
  insertData(name, gender, phone) {
    const insertableMockData: MockData = { name, gender, phone };
    this.kickStarterService.insertData(insertableMockData).subscribe(mockdata => {
      this.mockData.push(mockdata);
    });
  }

}
