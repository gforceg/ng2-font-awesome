    import {NgModule} from '@angular/core';
    import {CommonModule} from '@angular/common';
    
    import {FontAwesomeComponent } from './component/font-awesome.component';

    @NgModule({
        imports: [CommonModule],
        declarations: [FontAwesomeComponent],
        exports: [FontAwesomeComponent]
    })
    export class FontAwesomeModule { }
