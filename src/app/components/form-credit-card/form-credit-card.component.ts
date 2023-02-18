import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidatorFormUtility } from 'src/app/shared/validator-form.utility';

@Component({
  selector: 'app-form-credit-card',
  templateUrl: './form-credit-card.component.html',
  styleUrls: ['./form-credit-card.component.scss']
})
export class FormCreditCardComponent extends ValidatorFormUtility implements OnInit {
  @Output('getCardForm') getCardForm = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {
    super();
  }

  emitCardFormChanges() {
    this.form.valueChanges.subscribe((value) => {
      this.getCardForm.emit(value);
    });
  }

  ngOnInit(): void {
    this.initForm();
    this.emitCardFormChanges();
  }

  ngOnChanges() {
    console.log(this.form.value);
    this.getCardForm.emit(this.form.value);
  }

  initForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      cardNumber: [
        '',
        [Validators.required, Validators.pattern('[0-9 ]*'), Validators.minLength(16), Validators.maxLength(18)]
      ],
      expirationDateMonth: [
        '',
        [Validators.required, Validators.pattern('[0-9 ]*'), Validators.minLength(2), Validators.maxLength(2)]
      ],
      expirationDateYear: [
        '',
        [Validators.required, Validators.pattern('[0-9 ]*'), Validators.minLength(2), Validators.maxLength(2)]
      ],
      cvc: ['', [Validators.required, Validators.pattern('[0-9 ]*'), Validators.minLength(3), Validators.maxLength(6)]]
    });
  }

  setErrorMessages() {
    this.errorMessages = {
      name: {
        required: 'Can´t be blank',
        pattern: 'Must be only letters'
      },
      cardNumber: {
        required: 'Can´t be blank',
        pattern: 'Must be only numbers',
        minlength: 'Must be at least 13 characters',
        maxlength: 'Must be at most 18 characters'
      },
      expirationDateMonth: {
        required: 'Can´t be blank',
        pattern: 'Must be only numbers'
      },
      expirationDateYear: {
        required: 'Can´t be blank',
        pattern: 'Must be only numbers'
      },
      cvc: {
        required: 'Can´t be blank',
        pattern: 'Must be only numbers'
      }
    };
  }

  submitForm() {
    console.log(this.form.value);
    this.getCardForm.emit(this.form.value);
    this.form.valid ? this.form.reset() : this.form.markAllAsTouched();
  }

  wordBreaker() {
    let breakpoints = [4, 9, 14];
    let cardNumber = this.form.get('cardNumber').value;
    if (breakpoints.includes(cardNumber.length)) this.form.get('cardNumber').setValue(cardNumber + ' ');
  }
}
