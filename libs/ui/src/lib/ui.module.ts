import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestCompComponent } from './test-comp/test-comp.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TestCompComponent],
  exports: [TestCompComponent],
})
export class UiModule {}
