export const notes = `
# Modal Component


## Purpose
Provides a modal component for displaying content.

## Usage
~~~js
@NgModule({
  ...
  imports: [ ..., LgModalModule ],
})
~~~

and in your HTML:

~~~html
<button lgModalTrigger="modal-story" lg-button type="button" variant="outline-primary">Open modal</button>

<lg-modal id="modal-story">
  <lg-modal-header>Lorem ipsum</lg-modal-header>
  <lg-modal-body>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</lg-modal-body>
  <lg-modal-footer>
    <lg-button-group>
      <button lg-button lgMarginBottom="none" variant="solid-primary" type="button">Primary CTA</button>
      <button lg-button lgMarginBottom="none" variant="solid-primary" type="button">Cancel</button>
    </lg-button-group>
  </lg-modal-footer>
</lg-modal>
~~~

for a timout modal you can use the following structure:

~~~html
<button lgModalTrigger="modal-story" lg-button type="button" variant="outline-primary">Open modal</button>

<lg-modal id="modal-story">
  <lg-modal-header>Logout</lg-modal-header>
  <lg-modal-body>
    For your security, we'll log yuo out in:
    <lg-modal-body-timer timer="0:58"></lg-modal-body-timer>
  </lg-modal-body>
  <lg-modal-footer>
    <lg-button-group>
      <button lg-button lgMarginBottom="none" variant="solid-primary" type="button">Primary CTA</button>
      <button lg-button lgMarginBottom="none" variant="solid-primary" type="button">Cancel</button>
    </lg-button-group>
  </lg-modal-footer>
</lg-modal>
~~~

Opening and closing the modal is also possible by using the \`\`ModalService\`\`.
Import the service:

~~~js
  constructor(
    private modalService: LgModalService,
    ...
  ) {}
~~~

To open the modal:

~~~js
  this.modalService.open(<modal-id>)
~~~

and to close it:

~~~js
  this.modalService.close(<modal-id>)
~~~

## Inputs

### LgModalComponent
| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`id\`\` | The unique id of the modal | string | undefined | Yes |

### LgModalHeaderComponent
| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`headingLevel\`\` | The level of the modal heading: \`\`1\`\`, \`\`2\`\`, \`\`3\`\`, \`\`4\`\`, \`\`5\`\`, \`\`6\`\` | number | 2 | No |

### LgModalBodyTimerComponent
| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`timer\`\` | The timer value to apply the styles to | string | n/a | Yes |

### LgModalTriggerDirective
| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`lgModalTrigger\`\` | The unique id of the modal to trigger | string | undefined | Yes |

## Outputs

### LgModalComponent
| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`open\`\` | Event emitted when the modal is opened | EventEmitter<void> | n/a | No |
| \`\`closed\`\` | Event emitted when the modal is closed | EventEmitter<void> | n/a | No |

### LgModalHeaderComponent
| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`closed\`\` | Event emitted when the close button is clicked | EventEmitter<void> | n/a | No |

### LgModalTriggerDirective
| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`clicked\`\` | Event emitted when the trigger button is clicked | EventEmitter<void> | n/a | No |

`;
