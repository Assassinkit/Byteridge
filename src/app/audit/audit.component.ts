import { Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import { first } from 'rxjs/operators';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DatePipe } from '@angular/common';


import { Audit } from '@/_models';
import { AuditService, AuthenticationService } from '@/_services';

@Component({ templateUrl: 'audit.component.html' })
export class AuditComponent implements OnInit, AfterViewInit
{
    // audit1 = [];
  displayedColumns: string[] = ['user', 'id', 'loginTime', 'logoutTime', 'ip'];
  audits = new MatTableDataSource([]);
    // paginator: MatPaginator;
    // sort: MatSort;

    loginTime: number = Date.now();
    logoutTime: number = Date.now();

  @ViewChild(MatPaginator,{static:false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static:false}) sort: MatSort;


    constructor(
        private authenticationService: AuthenticationService,
        private auditService: AuditService
    )
    {}

    ngOnInit()
    {
        this.loadAllAudits();
    }

    ngAfterViewInit(): void {
        this.audits.paginator = this.paginator;
        this.audits.sort = this.sort;
    }

    private loadAllAudits()
    {
        this.auditService.getAll()
            .pipe(first())
            .subscribe((audits: any) =>        
                {
                    this.audits = new MatTableDataSource(audits);
                    this.audits.paginator = this.paginator;
                    this.audits.sort = this.sort;
                    console.log(this.audits)
                }
            );
        
    }

    // private loadAllAudits() {
    //     this.auditService.getAll()
    //         .pipe(first())
    //         .subscribe(audits => this.audits = audits => {
    //             this.audit = new MatTableDataSource(audits);
    //             this.audit.paginator = this.paginator;
    //             this.audit.sort = this.sort;
    //         }
    //         );

    // }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.audits.filter = filterValue.trim().toLowerCase();
        if(this.audits.paginator) {
            this.audits
    }

    }}