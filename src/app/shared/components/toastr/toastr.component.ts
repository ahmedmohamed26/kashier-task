import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.scss'],
})
export class ToastrComponent implements OnInit {
  @Input() toastrMessage: string = '';

  constructor() {}

  ngOnInit(): void {}
}
