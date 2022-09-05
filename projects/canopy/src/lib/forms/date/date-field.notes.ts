export const notes = `
Provides a component for capturing and validating a date. Output is a concatenation of individual string values into a valid ISO 8601 date format 'YYYY-MM-DD'.

## Usage
Import the Date Input Module into your application:

~~~js
@NgModule({
  ...
  imports: [ ..., LgDateFieldModule ],
})
~~~

and in your HTML:

~~~html
<form [formGroup]="form" (ngSubmit)="..." #validationForm="ngForm">
  <lg-date-field formControlName="date">
    Date of birth
    <lg-hint>For example, 12 06 1983</lg-hint>
    <lg-validation *ngIf="isControlInvalid(date, validationForm)">
      <ng-container *ngIf="date.hasError('invalidField')">
        Enter a valid {{ date.errors.invalidField }}
      </ng-container>
      <ng-container *ngIf="date.hasError('invalidFields')">
        Enter a valid {{ date.errors.invalidFields[0] }} and
        {{ date.errors.invalidFields[1] }}
      </ng-container>
      <ng-container *ngIf="date.hasError('requiredField')">
        Date of birth must include a {{ date.errors.requiredField }}
      </ng-container>
      <ng-container *ngIf="date.hasError('requiredFields')">
        Date of birth must include a {{ date.errors.requiredFields[0] }} and
        {{ date.errors.requiredFields[1] }}
      </ng-container>
      <ng-container *ngIf="date.hasError('invalidDate')">
        Enter a valid date of birth
      </ng-container>
      <ng-container *ngIf="date.hasError('futureDate')">
        Date must be in the past
      </ng-container>
      <ng-container *ngIf="date.hasError('required')">
        Enter a date of birth
      </ng-container>
    </lg-validation>
  </lg-date-field>

  <button type="submit">Submit</button>
</form>
~~~

**Note: for the validation to work properly it's very important to include the \`ngForm\` on the form tag and for the submit button to be within the form.**

## Inputs

### LgDateFieldComponent
| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`dateId\`\` | HTML ID attribute for the date input, auto generated if not provided | string | 'lg-input-date-\${nextUniqueId++}' | No |
| \`\`monthId\`\` | HTML ID attribute for the month input, auto generated if not provided | string | 'lg-input-month-\${nextUniqueId++}' | No |
| \`\`yearId\`\` | HTML ID attribute for the year input, auto generated if not provided | string | 'lg-input-year-\${nextUniqueId++}' | No |
| \`\`ariaDescribedBy\`\` | HTML ID for the corresponding element that describes the date field, if not provided it will use the hint field where appropriate | string | null | No |
| \`\`focus\`\` | Set the focus on the fieldset | boolean | null | No |

## Validation
Date validation is quite complex with a range of different validation errors, where possible we have encapsulated as much of that complexity into the components as we can.

Internally the date-field can determine if the entered date is a valid date. If additional validation is required such as checking for past or future dates this can be done with external validators.

For the validation to work properly it's very important to include the \`ngForm\` on the form tag and for the submit button to be within the form.

### Internal validation
In some scenarios there could be multiple fields that are incorrect, to help guide the users to the correct issue the date field only returns the most significant validation error. Only one error should be shown at a time.

Once the user has rectified the first error the next error will take it's place if there is one. This allows us to write linear lists of validation messages without the need to apply complex logic in the applications.

The current significance of errors with their recommended messages is as follows.

#### 1. Invalid fields

One field is invalid, this may be a non numerical character, or a number outside the valid range .e.g 13 for a month.
\`Enter a valid month\`

~~~json

{ invalidField: 'month'}

~~~


As above but with two fields displaying an error.
\`Enter a valid month and year\`

~~~json

{ invalidFields: ['day', 'month']}

~~~

If all three fields are invalid a generic 'invalidDate' message is provided.
\`Enter a valid date of birth\`

~~~json

{ invalidDate: true }

~~~

#### 2. Required fields

If one field is empty either through form submission or inline deletion of the content.
\`Date of birth must include month\`

~~~json

{ requiredField: 'month'}

~~~

As above but with two fields missing.
\`Date of birth must include a month and year\`


~~~json

{ invalidFields: ['day', 'month']}

~~~

If all three fields are missing an 'invalidDate' message is provided.
\`Enter a valid date of birth\`

~~~json

{ invalidDate: true }

~~~

#### 2. Invalid date

If all of the individual fields are correct but they do not concatenate to a valid date. e.g. 30 02 2020

~~~json

{ invalidDate: true }

~~~
\`Enter a valid date of birth\`

### External validation

It is also possible to provide your own custom validation messages using <a href="https://angular.io/guide/form-validation#custom-validators" target="_blank">custom validators</a>
and the validation component. This is particularly useful for checking things like wether the date is in the past or the future. Under the hood the date field uses the <a href="https://date-fns.org/" target="_blank">date-fns</a> library as a peer dependency, to keep build size to a minimum it may be worth considering using the same library in your application.

~~~js
function notMondayValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    return getDay(parseISO(control.value)) === 'monday' ? { notMonday: true } : null;
  };
}
...
const date = new FormControl('', [notMondayValidator()])
~~~

~~~html
<lg-date-field formControlName="date">
  Date of appointment
  <lg-hint>For example, 12 06 1983</lg-hint>
  <lg-validation *ngIf="isControlInvalid(date, validationForm) && date.hasError('notMonday')">
    Date cannot be a Monday
  </lg-validation>
 </lg-date-field>
~~~

### Additional validators

To aid with common validation needs some additional reactive form validators are provided.

#### Future date validator
This validator checks if the specified date is in the future, if not it returns a futureDate error

~~~js
import { futureDateValidator } from '@legal-and-general/canopy';

const control = new FormControl('', {
  validators: [futureDateValidator()]
});
~~~

~~~html
<ng-container *ngIf="date.hasError('futureDate')">
  Date must be in the future
</ng-container>
~~~

#### Past date validator
This validator checks if the specified date is in the past, if not it returns a pastDate error

~~~js
import { pastDateValidator } from '@legal-and-general/canopy';

const control = new FormControl('', {
  validators: [pastDateValidator()]
});
~~~

~~~html
<ng-container *ngIf="date.hasError('pastDate')">
  Date must be in the past
</ng-container>
~~~

#### Before date validator
This validator checks if the specified date is before another specified date, if not it returns a beforeDate error.
The beforeDate error contains the date that it was compared against.

~~~js
import { beforeDateValidator } from '@legal-and-general/canopy';
import { parseISO } from 'date-fns';

const control = new FormControl('', {
  validators: [beforeDateValidator(parseISO('2010-01-15'))]
});
~~~

~~~html
<ng-container *ngIf="date.hasError('beforeDate')">
  Date must be before {{ date.errors.beforeDate.required }}
</ng-container>
~~~

#### After date validator
This validator checks if the specified date is after another specified date, if not it returns a afterDate error.
The afterDate error contains the date that it was compared against.

~~~js
import { afterDateValidator } from '@legal-and-general/canopy';
import { parseISO } from 'date-fns';

const control = new FormControl('', {
  validators: [afterDateValidator(parseISO('2010-01-15'))]
});
~~~

~~~html
<ng-container *ngIf="date.hasError('afterDate')">
  Date must be after {{ date.errors.afterDate.required }}
</ng-container>
~~~
`;
