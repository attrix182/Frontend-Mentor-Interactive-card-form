import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-credit-card',
  templateUrl: './form-credit-card.component.html',
  styleUrls: ['./form-credit-card.component.scss']
})
export class FormCreditCardComponent implements OnInit {
  creditCardForm: FormGroup = new FormGroup({});
  showError = true;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.creditCardForm = this.formBuilder.group({
      name: [''],
      cardNumber: [''],
      expirationDateMonth: [''],
      expirationDateYear: [''],
      cvc: ['']
    });
  }

  submitForm() {
    console.log(this.creditCardForm.value);
  }
}
