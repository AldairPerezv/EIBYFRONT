import { NgModule } from "@angular/core";   
import { CommonModule } from "@angular/common"; 
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EibyModaModule } from "../eiby-moda/eiby-moda.module";

@NgModule({
    declarations:[],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        EibyModaModule,
        HttpClientModule,
    ],

    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        EibyModaModule
    ]
})
export class SharedModule {}