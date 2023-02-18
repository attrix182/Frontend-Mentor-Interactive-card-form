import { FormGroup, UntypedFormGroup } from '@angular/forms';

export abstract class ValidatorFormUtility {
  public form: UntypedFormGroup;
  public errorMessages: any;

  constructor() {
    this.setErrorMessages();
  }

  isValidField(field: string): string {
    const validateField = this.form.get(field);
    return !validateField.valid && validateField.touched
      ? 'is-invalid'
      : validateField.touched
      ? 'is-valid'
      : '';
  }

  showError(field: string): boolean {
    const validateField = this.form.get(field);

    return !validateField.valid && validateField.touched;
  }

  getErrorMessage(field: string) {
    const validateField = this.form.get(field);
    const first = Object.keys(validateField.errors)[0];
    return this.errorMessages[field] && this.errorMessages[field][first]
      ? this.errorMessages[field][first]
      : 'Invalid field';
  }

  abstract setErrorMessages(): void;
}


