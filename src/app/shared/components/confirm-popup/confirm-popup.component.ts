import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-confirm-popup',
  templateUrl: './confirm-popup.component.html',
  styleUrls: ['./confirm-popup.component.scss'],
})
export class ConfirmPopupComponent implements OnInit {
  productItem: any;
  @Output() closePopupEmitter = new EventEmitter();
  @Output() saveProductEmitter = new EventEmitter();
  @Output() deleteProductEmitter = new EventEmitter();
  @Input() product: any;
  constructor() {}

  ngOnInit(): void {
    this.productItem = this.product;
    console.log(this.product);
  }

  closePopup() {
    this.closePopupEmitter.emit();
  }

  saveProduct() {
    this.saveProductEmitter.emit();
  }

  deleteProduct() {
    this.deleteProductEmitter.emit();
  }
}
