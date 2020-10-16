import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestAnotherComponent } from './test-another/test-another.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TestAnotherComponent],
  exports: [TestAnotherComponent],
})
export class AnotherUiModule {}
