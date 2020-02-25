import {NgModule} from '@angular/core';
import {ClassroomInfoCardComponent} from './classroom-info-card/classroom-info-card.component';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';

@NgModule({
    imports: [
        CommonModule,
        IonicModule
    ],
    declarations: [
        ClassroomInfoCardComponent
    ],
    exports: [
        ClassroomInfoCardComponent
    ]
})
export class SharedModule {}