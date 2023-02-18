import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidatorFormUtility } from 'src/app/shared/validator-form.utility';

@Component({
  selector: 'app-form-credit-card',
  templateUrl: './form-credit-card.component.html',
  styleUrls: ['./form-credit-card.component.scss']
})
export class FormCreditCardComponent extends ValidatorFormUtility implements OnInit {

  constructor(private formBuilder: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      cardNumber: ['', [Validators.required, Validators.pattern('[0-9 ]*'), Validators.minLength(13), Validators.maxLength(18)]],
      expirationDateMonth: ['', [Validators.required, Validators.pattern('[0-9 ]*'), Validators.minLength(2), Validators.maxLength(2)]],
      expirationDateYear: ['', [Validators.required, Validators.pattern('[0-9 ]*'), Validators.minLength(2), Validators.maxLength(2)]],
      cvc: ['', [Validators.required, Validators.pattern('[0-9 ]*'), Validators.minLength(3), Validators.maxLength(6)]],
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
  }
}
