import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrComponent } from '../../components/toastr/toastr.component';
import { ConfirmPopupComponent } from '../../components/confirm-popup/confirm-popup.component';
import { ProductsPipe } from '../../pipes/products.pipe';

@NgModule({
  declarations: [ToastrComponent, ConfirmPopupComponent, ProductsPipe],
  imports: [CommonModule],
  exports: [ToastrComponent, ConfirmPopupComponent, ProductsPipe],
})
export class SharedModule {}
