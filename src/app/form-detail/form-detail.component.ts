import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-detail',
  templateUrl: './form-detail.component.html',
  styleUrls: ['./form-detail.component.css']
})
export class FormDetailComponent implements OnInit {
  name;
  email;
  address;
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
      this.email = params['email'];
      this.address = params['address'];
    });
  }

  ngOnInit() {
  }

}
