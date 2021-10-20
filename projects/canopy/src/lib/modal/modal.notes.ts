export const notes = `
Provides a modal component for displaying content.

## Usage
~~~js
@NgModule({
  ...
  imports: [ ..., LgModalModule ],
})
~~~

Opening and closing the modal is possible by using the \`\`ModalService\`\`.
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
| \`\`timer\`\` | The timer value (in seconds) to apply the styles and formatting to e.g. '90' will be formatted as '1:30' | number | n/a | Yes |

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
