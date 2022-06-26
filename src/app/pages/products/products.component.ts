import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/models/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productsFilter: string = '';
  showDrobDownList: boolean = false;
  showProductForm: boolean = false;
  showToastr: boolean = false;
  showPopup: boolean = false;
  toastrMessage: string = '';
  selectProductObj: any = {};
  products: IProduct[] = [
    {
      id: 1,
      name: 'product 1',
      productType: 1,
      productCategory: 'category 1',
      subCategory: false,
      referenceId: 1,
      password: '',
      deliveryFeesPrice: 0,
      deliveryFeesPercentage: 0,
    },
    {
      id: 2,
      name: 'product 2',
      productType: 2,
      productCategory: 'category 1',
      subCategory: false,
      referenceId: 2,
      password: '',
      deliveryFeesPrice: 0,
      deliveryFeesPercentage: 0,
    },
    {
      id: 3,
      name: 'product 3',
      productType: 1,
      productCategory: 'category 3',
      subCategory: true,
      referenceId: 3,
      password: '',
      deliveryFeesPrice: 0,
      deliveryFeesPercentage: 0,
    },
  ];
  defaultSelectProduct: IProduct = {
    id: 0,
    name: '',
    productType: 1,
    productCategory: '',
    subCategory: false,
    referenceId: 0,
    password: '',
    deliveryFeesPrice: 0,
    deliveryFeesPercentage: 0,
  };
  product: any = {};
  constructor() {}

  ngOnInit(): void {}

  showDrobDown() {
    this.showDrobDownList = !this.showDrobDownList;
    this.showProductForm = false;
  }

  selectNewEditProduct(product: any, addProduct: boolean) {
    this.showDrobDownList = false;
    this.showProductForm = true;
    addProduct
      ? (this.selectProductObj = this.defaultSelectProduct)
      : (this.selectProductObj = product);
  }

  showSaveConfirmPopup(product: any) {
    this.showPopup = true;
    this.product = product;
  }
  showDeleteConfirmPopup(product: any) {
    this.showPopup = true;
    this.product = product;
  }

  saveProduct(e: any) {
    this.product.type === 'update'
      ? this.editProduct(this.product)
      : this.addProduct(this.product);
    this.afterSubmit();
  }

  deleteProduct(e: any) {
    this.products = this.products.filter(
      (item) => item.id !== this.product.productValue.id
    );
    this.toastrMessage = 'Product delete successfully';
    this.afterSubmit();
  }

  addProduct(product: any) {
    this.products.push(product.productValue);
    this.toastrMessage = 'Changes saved successfully';
  }

  editProduct(product: any) {
    let productIndex = this.products.findIndex(
      (item) => item.id == product.productValue.id
    );
    this.products[productIndex] = product.productValue;
    this.toastrMessage = 'Product update successfully';
  }

  cancelAddEditProduct() {
    this.toastrMessage = 'Cancel successfully';
    this.afterSubmit();
  }

  afterSubmit() {
    this.showToastrFun();
    this.selectProductObj = this.defaultSelectProduct;
    this.showDrobDownList = false;
    this.showProductForm = false;
    this.showPopup = false;
  }

  showToastrFun() {
    this.showToastr = true;
    setTimeout(() => {
      this.showToastr = false;
    }, 3000);
  }

  closePopup() {
    this.showPopup = false;
  }
}
