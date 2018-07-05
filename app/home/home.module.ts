import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { SyneHomeComponent } from './components/syne-home.component';

@NgModule({
    imports: [CommonModule,RouterModule],
    exports: [SyneHomeComponent],
    declarations: [SyneHomeComponent]
})
export class HomeModule { }
