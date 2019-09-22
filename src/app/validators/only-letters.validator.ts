import {FormControl, ValidationErrors} from '@angular/forms';

export function onlyLetters(control: FormControl): ValidationErrors {
  const onlyLetterRegexp = '^[a-zA-Z]+$';
  const regexp = new RegExp(onlyLetterRegexp);

  return regexp.test(control.value) ? null : {onlyLetters: true};
}


