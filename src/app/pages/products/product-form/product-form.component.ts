import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  showPassWord: boolean = false;
  isSubmitted: boolean = false;
  productForm: FormGroup = new FormGroup({});
  statusProduct = 'update';
  productTypes = [
    {
      name: 'Type 1',
      value: 1,
    },
    {
      name: 'Type 2',
      value: 2,
    },
  ];

  @Input() selectedProduct: any;
  @Output() addEditProduct = new EventEmitter();
  @Output() cancelAddEditProduct = new EventEmitter();
  @Output() deleteProductEmit = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    this.setForm();
  }

  setForm() {
    this.productForm = new FormGroup({
      id: new FormControl(this.selectedProduct.id),
      name: new FormControl(this.selectedProduct.name, Validators.required),
      productType: new FormControl(this.selectedProduct.productType),
      productCategory: new FormControl(
        this.selectedProduct.productCategory,
        Validators.required
      ),
      subCategory: new FormControl(this.selectedProduct.subCategory),
      referenceId: new FormControl(this.selectedProduct.referenceId),
      password: new FormControl(this.selectedProduct.password, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8),
      ]),
      deliveryFeesPrice: new FormControl(
        this.selectedProduct.deliveryFeesPrice,
        [Validators.required, Validators.min(0), Validators.max(10000)]
      ),
      deliveryFeesPercentage: new FormControl(
        this.selectedProduct.deliveryFeesPercentage,
        [Validators.required, Validators.min(0), Validators.max(99)]
      ),
    });
  }

  showPass() {
    this.showPassWord = !this.showPassWord;
  }

  addUpdateProduct() {
    this.isSubmitted = true;
    if (this.productForm.valid) {
      let idValue = this.productForm.get('id')?.value;
      if (idValue === 0) {
        this.productForm.get('id')?.setValue(this.idGenerator());
        this.productForm.updateValueAndValidity();
        this.statusProduct = 'add';
      }
      this.addEditProduct.emit({
        productValue: this.productForm.value,
        type: this.statusProduct,
      });
    }
  }

  cancelProduct() {
    this.cancelAddEditProduct.emit();
  }

  deleteProduct() {
    this.deleteProductEmit.emit({
      productValue: this.productForm.value,
      type: 'delete',
    });
  }

  idGenerator() {
    return Math.floor(Math.random() * 100);
  }
}
