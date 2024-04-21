import {Component} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, provideNativeDateAdapter} from '@angular/material/core';
import {
    MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MomentDateAdapter,
} from '@angular/material-moment-adapter';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import moment from 'moment';
import 'moment/min/locales';

export const MY_FORMATS = {
  parse: {
    dateInput: ['YYYY-MM-DD'],
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    // dateInput: (date: any) => moment(date).format('YYYY-MM-DD'),
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};

export const MY_FORMATS2 = {
  parse: {
    dateInput: ['DD/MM/YYYY'],
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};

/** @title Datepicker start date */
@Component({
  selector: 'datepicker-start-view-example',
  templateUrl: 'datepicker-start-view-example.html',
  standalone: true,
  providers: [
    provideNativeDateAdapter(),
    //  { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    // { provide: DateAdapter, useClass: MomentDateAdapter },
   // { provide: MAT_DATE_FORMATS, useValue: MAT_DATE_FORMATS },

    // {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    { provide: DateAdapter, useClass: MomentDateAdapter },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
  ],
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule],
})
export class DatepickerStartViewExample {
  startDate = new Date(2024, 0, 1);

  form: FormGroup;

  contractStart = new FormControl(new Date());

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      contractStart: new FormControl(new Date()),
    });
  }

}


/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */