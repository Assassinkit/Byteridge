import { NgModule } from '@angular/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    imports: [
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule
    ], 
    exports: [
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule
    ]
})

export class MaterialModule {}