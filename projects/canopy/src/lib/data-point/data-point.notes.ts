export const notes = `
# Data Point Component

## Purpose
To display data organised by heading and value. A Data Point can be used on it's own, or grouped into a Data Point List where each one will be displayed horizontally and given a list-item role.

## Usage
~~~js
@NgModule({
  ...
  imports: [ ..., LgDataPointModule ],
})
~~~

and in your HTML:

~~~html
<lg-data-point-list>
  <lg-data-point>
    <lg-data-point-label [headingLevel]="headingLevel">
      Name on account
    </lg-data-point-label>
    <lg-data-point-value>
      Joe Bloggs
    </lg-data-point-value>
  </lg-data-point>
  <lg-data-point>
    <lg-data-point-label [headingLevel]="headingLevel">
      Account number
    </lg-data-point-label>
    <lg-data-point-value>
      ***5678
    </lg-data-point-value>
  </lg-data-point>
  <lg-data-point>
    <lg-data-point-label [headingLevel]="headingLevel">
      Bank sort code
    </lg-data-point-label>
    <lg-data-point-value>
      00 - 00 - **
    </lg-data-point-value>
  </lg-data-point>
</lg-data-point-list>
~~~


## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| headingLevel | Allows the heading level to be set | number | n/a | Yes |
`;
