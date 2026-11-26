import { TestBed } from '@angular/core/testing';

import { SignalControlExampleComponent } from './signal-control-example';

describe('Signal control story examples', () => {
  it.each([
    [ 'select', { choice: 'Red' } ],
    [ 'radio', { choice: 'red' } ],
    [ 'segment', { choice: 'red' } ],
    [ 'checkbox', { checked: true } ],
    [ 'checkbox-group', { choices: [ 'red' ] } ],
    [ 'filter-single', { choice: 'red' } ],
    [ 'filter-multiple', { choices: [ 'red' ] } ],
    [ 'date', { date: '2000-01-01' } ],
    [ 'sort-code', { sortCode: '123456' } ],
  ])('validates and clears the error for %s', (kind, value) => {
    const fixture = TestBed.createComponent(SignalControlExampleComponent);

    fixture.componentRef.setInput('kind', kind);
    fixture.detectChanges();

    fixture.nativeElement
      .querySelector('form')
      .dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('lg-validation')).not.toBeNull();

    fixture.componentInstance.model.update(model => ({ ...model, ...value }));
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('lg-validation')).toBeNull();
  });

  it('updates optional and disabled states from story inputs', () => {
    const fixture = TestBed.createComponent(SignalControlExampleComponent);

    fixture.componentRef.setInput('kind', 'checkbox-group');
    fixture.componentRef.setInput('optional', true);
    fixture.detectChanges();

    expect(fixture.componentInstance.fields.choices().valid()).toBe(true);

    fixture.componentRef.setInput('optional', false);
    fixture.detectChanges();

    expect(fixture.componentInstance.fields.choices().invalid()).toBe(true);

    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();

    expect(fixture.componentInstance.fields.choices().disabled()).toBe(true);
    expect(fixture.nativeElement.querySelector('input').disabled).toBe(true);
  });
});
