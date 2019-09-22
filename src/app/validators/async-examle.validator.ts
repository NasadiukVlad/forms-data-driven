import {FormControl, ValidationErrors} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

export function asyncExample(control: FormControl): Observable<ValidationErrors> {
  console.log('HI SERVER!');
  return of(control.value === 'Vlad' ? {asyncExample: true} : null).pipe(delay(1000));
}

