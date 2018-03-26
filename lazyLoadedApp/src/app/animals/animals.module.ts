import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LionsComponent } from './lions/lions.component';
import { TigersComponent } from './tigers/tigers.component';
import { BearsComponent } from './bears/bears.component';

@NgModule({
    declarations: [
    LionsComponent,
    TigersComponent,
    BearsComponent],
    imports: [
        RouterModule.forChild([
            { path: 'lions', component: LionsComponent },
            { path: 'tigers', component: TigersComponent },
            { path: 'bears', component: BearsComponent }
        ])
    ],
    providers: [],
    bootstrap: []
})
export class AnimalsModule { }
