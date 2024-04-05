import { NgModule } from "@angular/core";   
import { CommonModule } from "@angular/common"; 
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EibyModaModule } from "../eiby-moda/eiby-moda.module";
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
    declarations:[],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        EibyModaModule,
        HttpClientModule,
        PaginationModule.forRoot()
    ],

    exports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        EibyModaModule,
        PaginationModule
    ]
})
export class SharedModule {}
