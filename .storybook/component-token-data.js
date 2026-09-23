const tokenSets = [
  {
    "label": "Inline Message",
    "titlePrefix": "Components/Inline message (Alert)",
    "tokens": [
      {
        "name": "--inline-message-background-colour",
        "value": "#f4f4f4",
        "description": "Inline message background colour",
        "presenter": "Color"
      },
      {
        "name": "--inline-message-border-radius",
        "value": "0.75rem",
        "description": "Inline message border radius",
        "presenter": "BorderRadius"
      },
      {
        "name": "--inline-message-gap",
        "value": "0.75rem",
        "description": "Gap between element inside an inline message",
        "presenter": "Spacing"
      },
      {
        "name": "--inline-message-icon-colour",
        "value": "#1d1d1b",
        "description": "Inline message icon colour",
        "presenter": "Color"
      },
      {
        "name": "--inline-message-padding-x",
        "value": "0.75rem",
        "description": "Inline message left and right padding",
        "presenter": "Spacing"
      },
      {
        "name": "--inline-message-padding-y",
        "value": "0.75rem",
        "description": "Inline message top and bottom padding",
        "presenter": "Spacing"
      },
      {
        "name": "--inline-message-text-colour",
        "value": "#1d1d1b",
        "description": "Inline message text colour",
        "presenter": "Color"
      }
    ]
  },
  {
    "label": "Banner",
    "titlePrefix": "Components/Banner message",
    "tokens": [
      {
        "name": "--banner-background-colour",
        "value": "#4d4f4f",
        "description": "Banner background colour",
        "presenter": "Color"
      },
      {
        "name": "--banner-gap",
        "value": "0.75rem",
        "description": "Gap between elements inside the banner",
        "presenter": "Spacing"
      },
      {
        "name": "--banner-icon-colour",
        "value": "#ffffff",
        "description": "Banner icon colour",
        "presenter": "Color"
      },
      {
        "name": "--banner-padding-x",
        "value": "1rem",
        "description": "Banner left and right padding",
        "presenter": "Spacing"
      },
      {
        "name": "--banner-padding-y",
        "value": "0.75rem",
        "description": "Banner top and bottom padding",
        "presenter": "Spacing"
      },
      {
        "name": "--banner-text-colour",
        "value": "#ffffff",
        "description": "Banner text colour",
        "presenter": "Color"
      }
    ]
  },
  {
    "label": "Breadcrumb",
    "titlePrefix": "Components/Breadcrumb",
    "tokens": [
      {
        "name": "--breadcrumb-border-colour",
        "value": "#d3d3d3",
        "description": "The border colour of the page-level breadcrumb",
        "presenter": "Color"
      },
      {
        "name": "--breadcrumb-border-width",
        "value": "0.0625rem",
        "description": "The border width of the page-level breadcrumb",
        "presenter": "Spacing"
      },
      {
        "name": "--breadcrumb-gap",
        "value": "0.5rem",
        "description": "The gap between links in the breadcrumb",
        "presenter": "Spacing"
      },
      {
        "name": "--breadcrumb-min-width",
        "value": "20rem",
        "description": "The min width of the page-level breadcrumb, matching page breakpoint min width",
        "presenter": "Spacing"
      },
      {
        "name": "--breadcrumb-padding-x",
        "value": "1rem",
        "description": "The left and right padding of the page-level breadcrumb, matching the page margin",
        "presenter": "Spacing"
      },
      {
        "name": "--breadcrumb-padding-y",
        "value": "0.75rem",
        "description": "The top and bottom padding of the page-level breadcrumb",
        "presenter": "Spacing"
      }
    ]
  },
  {
    "label": "Button",
    "titlePrefix": "Components/Button",
    "tokens": [
      {
        "name": "--button-border-radius",
        "value": "0.75rem",
        "description": "Button border radius",
        "presenter": "BorderRadius"
      },
      {
        "name": "--button-border-width",
        "value": "0.09375rem",
        "description": "Button border width",
        "presenter": "Spacing"
      },
      {
        "name": "--button-border-width-focus",
        "value": "0.1875rem",
        "description": "Button focus border width",
        "presenter": "Spacing"
      },
      {
        "name": "--button-common-icon-only-min-height",
        "value": "3rem",
        "description": "Button minimum height",
        "presenter": "Spacing"
      },
      {
        "name": "--button-common-icon-only-min-width",
        "value": "3rem",
        "description": "Button minimum width",
        "presenter": "Spacing"
      },
      {
        "name": "--button-common-icon-only-padding-x",
        "value": "0.75rem",
        "description": "Button padding left and right",
        "presenter": "Spacing"
      },
      {
        "name": "--button-common-icon-only-padding-y",
        "value": "0.75rem",
        "description": "Button padding top and bottom",
        "presenter": "Spacing"
      },
      {
        "name": "--button-common-labelled-min-height",
        "value": "3rem",
        "description": "Button minimum height",
        "presenter": "Spacing"
      },
      {
        "name": "--button-common-labelled-min-width",
        "value": "3rem",
        "description": "Button minimum width",
        "presenter": "Spacing"
      },
      {
        "name": "--button-common-labelled-padding-x",
        "value": "1rem",
        "description": "Button padding left and right",
        "presenter": "Spacing"
      },
      {
        "name": "--button-common-labelled-padding-y",
        "value": "0.75rem",
        "description": "Button padding top and bottom",
        "presenter": "Spacing"
      },
      {
        "name": "--button-gap",
        "value": "0.5rem",
        "description": "The gap between elements within a button",
        "presenter": "Spacing"
      },
      {
        "name": "--button-group-gap",
        "value": "1rem",
        "description": "The gap between buttons in a group",
        "presenter": "Spacing"
      },
      {
        "name": "--button-icon-width",
        "value": "1.5rem",
        "description": "Button Icon Width",
        "presenter": "Spacing"
      },
      {
        "name": "--button-primary-active-background-colour",
        "value": "#000039",
        "description": "Primary button active background",
        "presenter": "Color"
      },
      {
        "name": "--button-primary-active-border-colour",
        "value": "#000039",
        "description": "Primary button active border colour",
        "presenter": "Color"
      },
      {
        "name": "--button-primary-active-colour",
        "value": "#ffffff",
        "description": "Primary button active text and icon colour",
        "presenter": "Color"
      },
      {
        "name": "--button-primary-disabled-background-colour",
        "value": "#d3d3d3",
        "description": "Primary button disabled background",
        "presenter": "Color"
      },
      {
        "name": "--button-primary-disabled-border-colour",
        "value": "#d3d3d3",
        "description": "Primary button disabled border colour",
        "presenter": "Color"
      },
      {
        "name": "--button-primary-disabled-colour",
        "value": "#7a7b7b",
        "description": "Primary button disabled text and icon colour",
        "presenter": "Color"
      },
      {
        "name": "--button-primary-focus-background-colour",
        "value": "#005dba",
        "description": "Primary button focus background",
        "presenter": "Color"
      },
      {
        "name": "--button-primary-focus-colour",
        "value": "#ffffff",
        "description": "Primary button focus text and icon colour",
        "presenter": "Color"
      },
      {
        "name": "--button-primary-hover-background-colour",
        "value": "#001d6e",
        "description": "Primary button hover background",
        "presenter": "Color"
      },
      {
        "name": "--button-primary-hover-border-colour",
        "value": "#001d6e",
        "description": "Primary button hover border colour",
        "presenter": "Color"
      },
      {
        "name": "--button-primary-hover-colour",
        "value": "#ffffff",
        "description": "Primary button hover text and icon colour",
        "presenter": "Color"
      },
      {
        "name": "--button-primary-rest-background-colour",
        "value": "#005dba",
        "description": "Primary button default background",
        "presenter": "Color"
      },
      {
        "name": "--button-primary-rest-border-colour",
        "value": "#005dba",
        "description": "Primary button default border colour",
        "presenter": "Color"
      },
      {
        "name": "--button-primary-rest-colour",
        "value": "#ffffff",
        "description": "Primary button default text and icon colour",
        "presenter": "Color"
      },
      {
        "name": "--button-secondary-active-background-colour",
        "value": "#000039",
        "description": "Secondary button active background",
        "presenter": "Color"
      },
      {
        "name": "--button-secondary-active-border-colour",
        "value": "#000039",
        "description": "Secondary button active border colour",
        "presenter": "Color"
      },
      {
        "name": "--button-secondary-active-colour",
        "value": "#ffffff",
        "description": "Secondary button active text and icon colour",
        "presenter": "Color"
      },
      {
        "name": "--button-secondary-disabled-background-colour",
        "value": "#d3d3d3",
        "description": "Secondary button disabled background",
        "presenter": "Color"
      },
      {
        "name": "--button-secondary-disabled-border-colour",
        "value": "#d3d3d3",
        "description": "Secondary button disabled border colou",
        "presenter": "Color"
      },
      {
        "name": "--button-secondary-disabled-colour",
        "value": "#7a7b7b",
        "description": "Secondary button disabled text and icon colour",
        "presenter": "Color"
      },
      {
        "name": "--button-secondary-focus-background-colour",
        "value": "#ffffff",
        "description": "Secondary button focus background",
        "presenter": "Color"
      },
      {
        "name": "--button-secondary-focus-border-colour",
        "value": "#1d1d1b",
        "description": "Secondary button focus border colour",
        "presenter": "Color"
      },
      {
        "name": "--button-secondary-focus-colour",
        "value": "#1d1d1b",
        "description": "Secondary button focus text and icon colour",
        "presenter": "Color"
      },
      {
        "name": "--button-secondary-hover-background-colour",
        "value": "#001d6e",
        "description": "Secondary button hover background",
        "presenter": "Color"
      },
      {
        "name": "--button-secondary-hover-border-colour",
        "value": "#001d6e",
        "description": "Secondary button hover border colour",
        "presenter": "Color"
      },
      {
        "name": "--button-secondary-hover-colour",
        "value": "#ffffff",
        "description": "Secondary button hover text and icon colour",
        "presenter": "Color"
      },
      {
        "name": "--button-secondary-rest-background-colour",
        "value": "#ffffff",
        "description": "Secondary button default background",
        "presenter": "Color"
      },
      {
        "name": "--button-secondary-rest-border-colour",
        "value": "#1d1d1b",
        "description": "Secondary button default border colour",
        "presenter": "Color"
      },
      {
        "name": "--button-secondary-rest-colour",
        "value": "#1d1d1b",
        "description": "Secondary button default text and icon colour",
        "presenter": "Color"
      },
      {
        "name": "--button-status-active-background-colour",
        "value": "#1d1d1b",
        "description": "Status button active background",
        "presenter": "Color"
      },
      {
        "name": "--button-status-active-border-colour",
        "value": "#1d1d1b",
        "description": "Status button active border colour",
        "presenter": "Color"
      },
      {
        "name": "--button-status-active-colour",
        "value": "#ffffff",
        "description": "Status button active text and icon colour",
        "presenter": "Color"
      },
      {
        "name": "--button-status-disabled-background-colour",
        "value": "#bcbdbd",
        "description": "Status button disabled background",
        "presenter": "Color"
      },
      {
        "name": "--button-status-disabled-border-colour",
        "value": "#bcbdbd",
        "description": "Status button disabled border colour",
        "presenter": "Color"
      },
      {
        "name": "--button-status-disabled-colour",
        "value": "#858686",
        "description": "Status button disabled text and icon colour",
        "presenter": "Color"
      },
      {
        "name": "--button-status-focus-background-colour",
        "value": "#4d4f4f",
        "description": "Status button focus background",
        "presenter": "Color"
      },
      {
        "name": "--button-status-focus-colour",
        "value": "#ffffff",
        "description": "Status button focus text and icon colour",
        "presenter": "Color"
      },
      {
        "name": "--button-status-hover-background-colour",
        "value": "#343634",
        "description": "Status button hover background",
        "presenter": "Color"
      },
      {
        "name": "--button-status-hover-border-colour",
        "value": "#343634",
        "description": "Status button hover border colour",
        "presenter": "Color"
      },
      {
        "name": "--button-status-hover-colour",
        "value": "#ffffff",
        "description": "Status button hover text and icon colour",
        "presenter": "Color"
      },
      {
        "name": "--button-status-rest-background-colour",
        "value": "#4d4f4f",
        "description": "Status button default background",
        "presenter": "Color"
      },
      {
        "name": "--button-status-rest-border-colour",
        "value": "#4d4f4f",
        "description": "Status button default border colour",
        "presenter": "Color"
      },
      {
        "name": "--button-status-rest-colour",
        "value": "#ffffff",
        "description": "Status button default text and icon colour",
        "presenter": "Color"
      }
    ]
  },
  {
    "label": "Content Area",
    "titlePrefix": "Components/Content area",
    "tokens": [
      {
        "name": "--content-area-background-colour",
        "value": "#ffffff",
        "description": "Content area background colour",
        "presenter": "Color"
      },
      {
        "name": "--content-area-border-colour",
        "value": "#d3d3d3",
        "description": "Content area border colour",
        "presenter": "Color"
      },
      {
        "name": "--content-area-border-radius",
        "value": "1.75rem",
        "description": "Content area border radius",
        "presenter": "BorderRadius"
      },
      {
        "name": "--content-area-border-width",
        "value": "0.0625rem",
        "description": "Content area border width",
        "presenter": "Spacing"
      },
      {
        "name": "--content-area-colour",
        "value": "#1d1d1b",
        "description": "Content area foreground colour",
        "presenter": "Color"
      },
      {
        "name": "--content-area-gap",
        "value": "1.75rem",
        "description": "The row gap between items in a content area",
        "presenter": "Spacing"
      },
      {
        "name": "--content-area-padding-x",
        "value": "1.75rem",
        "description": "Content area padding left and right",
        "presenter": "Spacing"
      },
      {
        "name": "--content-area-padding-y",
        "value": "1.25rem",
        "description": "Content area padding top and bottom",
        "presenter": "Spacing"
      }
    ]
  },
  {
    "label": "Data Point",
    "titlePrefix": "Components/Data point",
    "tokens": [
      {
        "name": "--data-point-gap",
        "value": "0.25rem",
        "description": "The gap between the label and value",
        "presenter": "Spacing"
      },
      {
        "name": "--data-point-group-column-gap",
        "value": "2.25rem",
        "description": "The gap between data points",
        "presenter": "Spacing"
      },
      {
        "name": "--data-point-group-row-gap",
        "value": "2.25rem",
        "description": "The gap between data points",
        "presenter": "Spacing"
      },
      {
        "name": "--data-point-label-colour",
        "value": "#4d4f4f",
        "description": "The label text colour",
        "presenter": "Color"
      },
      {
        "name": "--data-point-value-colour",
        "value": "#1d1d1b",
        "description": "The value text colour",
        "presenter": "Color"
      }
    ]
  },
  {
    "label": "Details",
    "titlePrefix": "Components/Details",
    "tokens": [
      {
        "name": "--details-active-padding-bottom",
        "value": "1rem",
        "description": "Details component bottom padding applied when component is active (open)",
        "presenter": "Spacing"
      },
      {
        "name": "--details-border-radius",
        "value": "0.75rem",
        "description": "Details component border radius",
        "presenter": "BorderRadius"
      },
      {
        "name": "--details-focus-indicator-border-radius",
        "value": "0.5rem",
        "description": "Details component focus indicator border radius",
        "presenter": "BorderRadius"
      },
      {
        "name": "--details-focus-indicator-border-width",
        "value": "0.1875rem",
        "description": "Details component focus indicator border width",
        "presenter": "Spacing"
      },
      {
        "name": "--details-focus-indicator-colour",
        "value": "#1d1d1b",
        "description": "Details component focus indicator colour",
        "presenter": "Color"
      },
      {
        "name": "--details-gap",
        "value": "0.75rem",
        "description": "Gap between element inside an Details component",
        "presenter": "Spacing"
      },
      {
        "name": "--details-padding-x",
        "value": "0.75rem",
        "description": "Details component left and right padding",
        "presenter": "Spacing"
      },
      {
        "name": "--details-padding-y",
        "value": "0.75rem",
        "description": "Details component top and bottom padding",
        "presenter": "Spacing"
      },
      {
        "name": "--details-status-background-colour",
        "value": "#f4f4f4",
        "description": "Details component background colour",
        "presenter": "Color"
      },
      {
        "name": "--details-status-icon-colour",
        "value": "#1d1d1b",
        "description": "Details component icon colour",
        "presenter": "Color"
      },
      {
        "name": "--details-status-text-colour",
        "value": "#1d1d1b",
        "description": "Details component text colour",
        "presenter": "Color"
      }
    ]
  },
  {
    "label": "Footer",
    "titlePrefix": "Components/Footer",
    "tokens": [
      {
        "name": "--footer-background-colour",
        "value": "#ffffff",
        "description": "Footer background colour",
        "presenter": "Color"
      },
      {
        "name": "--footer-border-colour",
        "value": "#d3d3d3",
        "description": "Footer borders and separators colour",
        "presenter": "Color"
      },
      {
        "name": "--footer-border-width",
        "value": "0.0625rem",
        "description": "Footer borders and separators width",
        "presenter": "Spacing"
      },
      {
        "name": "--footer-gap",
        "value": "1.75rem",
        "description": "Gap between elements in the footer",
        "presenter": "Spacing"
      },
      {
        "name": "--footer-link-group-link-gap",
        "value": "1rem",
        "description": "The gap between links",
        "presenter": "Spacing"
      },
      {
        "name": "--footer-link-group-social-gap",
        "value": "0.75rem",
        "description": "The gap between social icons",
        "presenter": "Spacing"
      },
      {
        "name": "--footer-logo-gap",
        "value": "2.25rem",
        "description": "Gap between the logo and stickers in the footer",
        "presenter": "Spacing"
      },
      {
        "name": "--footer-logo-size",
        "value": "5rem",
        "description": "The size of the logo in the footer. Currently connected to the wrong variable and needs replacing with a structure that mimics the header",
        "presenter": "Spacing"
      },
      {
        "name": "--footer-min-width",
        "value": "20rem",
        "description": "The minimum width of the footer, matching page min-width",
        "presenter": "Spacing"
      },
      {
        "name": "--footer-padding-x",
        "value": "1rem",
        "description": "The left and right padding of the footer, matching page margin",
        "presenter": "Spacing"
      },
      {
        "name": "--footer-padding-y",
        "value": "1.75rem",
        "description": "The top and bottom padding of the footer",
        "presenter": "Spacing"
      }
    ]
  },
  {
    "label": "Text Input",
    "titlePrefix": "Components/Forms/Text input",
    "tokens": [
      {
        "name": "--text-input-common-addon-button-gap",
        "value": "1rem",
        "description": "The gap between text elements and the add-on button in the text input field",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-common-border-radius",
        "value": "0.75rem",
        "description": "The radius of the text input field",
        "presenter": "BorderRadius"
      },
      {
        "name": "--text-input-common-button-gap",
        "value": "0.5rem",
        "description": "The gap between the text input and external button",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-common-height",
        "value": "3rem",
        "description": "The height of the text input",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-common-padding-x",
        "value": "1rem",
        "description": "The left and right padding of the text input field",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-common-padding-y",
        "value": "0.5rem",
        "description": "The top and bottom padding of the text input field",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-common-text-gap",
        "value": "0.5rem",
        "description": "The gap between text elements in the text input field",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-disabled-background-colour",
        "value": "#f4f4f4",
        "description": "Text input background colour in disabled state",
        "presenter": "Color"
      },
      {
        "name": "--text-input-disabled-border-colour",
        "value": "#d3d3d3",
        "description": "Text input border colour in disabled state",
        "presenter": "Color"
      },
      {
        "name": "--text-input-disabled-border-width",
        "value": "0.09375rem",
        "description": "Text input border width in disabled state",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-disabled-colour",
        "value": "#a6a7a7",
        "description": "Text input text colour in disabled state",
        "presenter": "Color"
      },
      {
        "name": "--text-input-error-background-colour",
        "value": "#ffffff",
        "description": "Text input background colour in error state",
        "presenter": "Color"
      },
      {
        "name": "--text-input-error-border-colour",
        "value": "#c50b30",
        "description": "Text input border colour in error state",
        "presenter": "Color"
      },
      {
        "name": "--text-input-error-border-width",
        "value": "0.09375rem",
        "description": "Text input border width in error state",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-error-colour",
        "value": "#1d1d1b",
        "description": "Text input text colour in error state",
        "presenter": "Color"
      },
      {
        "name": "--text-input-error-focus-border-width",
        "value": "0.1875rem",
        "description": "The border width of the text input when it has an error and is focused",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-focus-background-colour",
        "value": "#ffffff",
        "description": "Text input background colour in focus state",
        "presenter": "Color"
      },
      {
        "name": "--text-input-focus-border-colour",
        "value": "#1d1d1b",
        "description": "Text input border colour in focus state",
        "presenter": "Color"
      },
      {
        "name": "--text-input-focus-border-width",
        "value": "0.1875rem",
        "description": "Text input border width in focus state",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-focus-colour",
        "value": "#1d1d1b",
        "description": "Text input text colour in focus state",
        "presenter": "Color"
      },
      {
        "name": "--text-input-hover-background-colour",
        "value": "#ffffff",
        "description": "Text input background colour in hover state",
        "presenter": "Color"
      },
      {
        "name": "--text-input-hover-border-colour",
        "value": "#4d4f4f",
        "description": "Text input border colour in hover state",
        "presenter": "Color"
      },
      {
        "name": "--text-input-hover-border-width",
        "value": "0.09375rem",
        "description": "Text input border width in hover state",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-hover-colour",
        "value": "#1d1d1b",
        "description": "Text input text colour in hover state",
        "presenter": "Color"
      },
      {
        "name": "--text-input-rest-background-colour",
        "value": "#ffffff",
        "description": "Text input background colour in rest state",
        "presenter": "Color"
      },
      {
        "name": "--text-input-rest-border-colour",
        "value": "#858686",
        "description": "Text input border colour in rest state",
        "presenter": "Color"
      },
      {
        "name": "--text-input-rest-border-width",
        "value": "0.09375rem",
        "description": "Text input border width in rest state",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-rest-colour",
        "value": "#1d1d1b",
        "description": "Text input text colour in rest state",
        "presenter": "Color"
      }
    ]
  },
  {
    "label": "Radio",
    "titlePrefix": "Components/Forms/Radio",
    "tokens": [
      {
        "name": "--radio-common-border-radius",
        "value": "1rem",
        "description": "The border radius of the radio control and indicator",
        "presenter": "BorderRadius"
      },
      {
        "name": "--radio-common-colour",
        "value": "#1d1d1b",
        "description": "Radio button label colour",
        "presenter": "Color"
      },
      {
        "name": "--radio-disabled-control-background-colour",
        "value": "#f4f4f4",
        "description": "Background colour of the radio control in disabled state",
        "presenter": "Color"
      },
      {
        "name": "--radio-disabled-control-border-colour",
        "value": "#d3d3d3",
        "description": "Border colour of the radio control in disabled state",
        "presenter": "Color"
      },
      {
        "name": "--radio-disabled-control-border-width",
        "value": "0.09375rem",
        "description": "Border width of the radio control in disabled state",
        "presenter": "Spacing"
      },
      {
        "name": "--radio-disabled-indicator-colour",
        "value": "#d3d3d3",
        "description": "Colour of the radio indicator in disabled state",
        "presenter": "Color"
      },
      {
        "name": "--radio-disabled-label-colour",
        "value": "#a6a7a7",
        "description": "Colour of the radio label in disabled state",
        "presenter": "Color"
      },
      {
        "name": "--radio-error-control-background-colour",
        "value": "#ffffff",
        "description": "Background colour of the radio control in error state",
        "presenter": "Color"
      },
      {
        "name": "--radio-error-control-border-colour",
        "value": "#c50b30",
        "description": "Border colour of the radio control in error state",
        "presenter": "Color"
      },
      {
        "name": "--radio-error-control-border-width",
        "value": "0.09375rem",
        "description": "Border width of the radio control in error state",
        "presenter": "Spacing"
      },
      {
        "name": "--radio-error-control-focus-border-width",
        "value": "0.1875rem",
        "description": "The border width of the radio when it has an error and is focused",
        "presenter": "Spacing"
      },
      {
        "name": "--radio-error-indicator-colour",
        "value": "#c50b30",
        "description": "Colour of the radio indicator in error state",
        "presenter": "Color"
      },
      {
        "name": "--radio-focus-control-background-colour",
        "value": "#ffffff",
        "description": "Background colour of the radio control in focus state",
        "presenter": "Color"
      },
      {
        "name": "--radio-focus-control-border-colour",
        "value": "#1d1d1b",
        "description": "Border colour of the radio control in focus state",
        "presenter": "Color"
      },
      {
        "name": "--radio-focus-control-border-width",
        "value": "0.1875rem",
        "description": "Border width of the radio control in focus state",
        "presenter": "Spacing"
      },
      {
        "name": "--radio-focus-indicator-colour",
        "value": "#005dba",
        "description": "Colour of the radio indicator in focus state",
        "presenter": "Color"
      },
      {
        "name": "--radio-group-lg-gap",
        "value": "1.25rem",
        "description": "Radio Group Lg Gap",
        "presenter": "Spacing"
      },
      {
        "name": "--radio-group-sm-gap",
        "value": "1rem",
        "description": "Radio Group Sm Gap",
        "presenter": "Spacing"
      },
      {
        "name": "--radio-hover-control-background-colour",
        "value": "#ffffff",
        "description": "Background colour of the radio control in hover state",
        "presenter": "Color"
      },
      {
        "name": "--radio-hover-control-border-colour",
        "value": "#4d4f4f",
        "description": "Border colour of the radio control in hover state",
        "presenter": "Color"
      },
      {
        "name": "--radio-hover-control-border-width",
        "value": "0.09375rem",
        "description": "Border width of the radio control in hover state",
        "presenter": "Spacing"
      },
      {
        "name": "--radio-hover-indicator-colour",
        "value": "#001d6e",
        "description": "Colour of the radio indicator in hover state",
        "presenter": "Color"
      },
      {
        "name": "--radio-rest-control-background-colour",
        "value": "#ffffff",
        "description": "Background colour of the radio control in rest state",
        "presenter": "Color"
      },
      {
        "name": "--radio-rest-control-border-colour",
        "value": "#858686",
        "description": "Border colour of the radio control in rest state",
        "presenter": "Color"
      },
      {
        "name": "--radio-rest-control-border-width",
        "value": "0.09375rem",
        "description": "Border width of the radio control in rest state",
        "presenter": "Spacing"
      },
      {
        "name": "--radio-rest-indicator-colour",
        "value": "#005dba",
        "description": "Colour of the radio indicator in rest state",
        "presenter": "Color"
      },
      {
        "name": "--radio-scale-lg-control-size",
        "value": "1.75rem",
        "description": "The width and height of the large radio button control",
        "presenter": "Spacing"
      },
      {
        "name": "--radio-scale-lg-gap",
        "value": "2.25rem",
        "description": "The gap between radio control and label",
        "presenter": "Spacing"
      },
      {
        "name": "--radio-scale-lg-indicator-size",
        "value": "1rem",
        "description": "The width and height of the large radio button indicator",
        "presenter": "Spacing"
      },
      {
        "name": "--radio-scale-sm-control-size",
        "value": "1rem",
        "description": "The width and height of the small radio button control",
        "presenter": "Spacing"
      },
      {
        "name": "--radio-scale-sm-gap",
        "value": "1.75rem",
        "description": "The gap between radio control and label",
        "presenter": "Spacing"
      },
      {
        "name": "--radio-scale-sm-indicator-size",
        "value": "0.5rem",
        "description": "The width and height of the small radio button inidcator",
        "presenter": "Spacing"
      }
    ]
  },
  {
    "label": "Segment",
    "titlePrefix": "Components/Forms/Segment",
    "tokens": [
      {
        "name": "--segment-button-active-background-colour",
        "value": "#005dba",
        "description": "Segment Button Active Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--segment-button-active-colour",
        "value": "#ffffff",
        "description": "Segment Button Active Colour",
        "presenter": "Color"
      },
      {
        "name": "--segment-button-common-border-radius",
        "value": "0.5rem",
        "description": "Segment Button Common Border Radius",
        "presenter": "BorderRadius"
      },
      {
        "name": "--segment-button-common-min-height",
        "value": "2.25rem",
        "description": "Segment Button Common Min Height",
        "presenter": "Spacing"
      },
      {
        "name": "--segment-button-common-padding-x",
        "value": "0.5rem",
        "description": "Segment Button Common Padding X",
        "presenter": "Spacing"
      },
      {
        "name": "--segment-button-common-padding-y",
        "value": "0.5rem",
        "description": "Segment Button Common Padding Y",
        "presenter": "Spacing"
      },
      {
        "name": "--segment-button-disabled-background-colour",
        "value": "#d3d3d3",
        "description": "Segment Button Disabled Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--segment-button-disabled-colour",
        "value": "#a6a7a7",
        "description": "Segment Button Disabled Colour",
        "presenter": "Color"
      },
      {
        "name": "--segment-button-error-background-colour",
        "value": "#4d4f4f",
        "description": "Segment Button Error Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--segment-button-focus-background-colour",
        "value": "#ffffff",
        "description": "Segment Button Focus Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--segment-button-focus-border-colour",
        "value": "#1d1d1b",
        "description": "Segment Button Focus Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--segment-button-focus-border-width",
        "value": "0.1875rem",
        "description": "Segment Button Focus Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--segment-button-focus-colour",
        "value": "#1d1d1b",
        "description": "Segment Button Focus Colour",
        "presenter": "Color"
      },
      {
        "name": "--segment-button-hover-background-colour",
        "value": "#aee1f7",
        "description": "Segment Button Hover Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--segment-button-hover-colour",
        "value": "#1d1d1b",
        "description": "Segment Button Hover Colour",
        "presenter": "Color"
      },
      {
        "name": "--segment-button-rest-background-colour",
        "value": "#ffffff",
        "description": "Segment Button Rest Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--segment-button-rest-colour",
        "value": "#1d1d1b",
        "description": "Segment Button Rest Colour",
        "presenter": "Color"
      },
      {
        "name": "--segment-control-common-background-colour",
        "value": "#f4f4f4",
        "description": "Segment Control Common Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--segment-control-common-border-colour",
        "value": "#858686",
        "description": "Segment Control Common Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--segment-control-common-border-radius",
        "value": "0.75rem",
        "description": "Segment Control Common Border Radius",
        "presenter": "BorderRadius"
      },
      {
        "name": "--segment-control-common-border-width",
        "value": "0.09375rem",
        "description": "Segment Control Common Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--segment-control-common-gap",
        "value": "0.25rem",
        "description": "Segment Control Common Gap",
        "presenter": "Spacing"
      },
      {
        "name": "--segment-control-common-min-width",
        "value": "14.5rem",
        "description": "The minimum width of a stacked segment control",
        "presenter": "Spacing"
      },
      {
        "name": "--segment-control-common-padding-x",
        "value": "0.25rem",
        "description": "Segment Control Common Padding X",
        "presenter": "Spacing"
      },
      {
        "name": "--segment-control-common-padding-y",
        "value": "0.25rem",
        "description": "Segment Control Common Padding Y",
        "presenter": "Spacing"
      },
      {
        "name": "--segment-control-error-border-colour",
        "value": "#c50b30",
        "description": "Segment Control Error Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--segment-control-error-border-width",
        "value": "0.09375rem",
        "description": "Border width of the segment control in error state",
        "presenter": "Spacing"
      },
      {
        "name": "--segment-control-error-focus-border-width",
        "value": "0.1875rem",
        "description": "The border width of the segment control when it has an error and is focused",
        "presenter": "Spacing"
      },
      {
        "name": "--segment-control-focus-border-colour",
        "value": "#1d1d1b",
        "description": "Segment Control Focus Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--segment-control-focus-border-width",
        "value": "0.1875rem",
        "description": "Segment Control Focus Border Width",
        "presenter": "Spacing"
      }
    ]
  },
  {
    "label": "Select",
    "titlePrefix": "Components/Forms/Select",
    "tokens": [
      {
        "name": "--select-common-border-radius",
        "value": "0.75rem",
        "description": "The radius of the text input field",
        "presenter": "BorderRadius"
      },
      {
        "name": "--select-common-button-gap",
        "value": "1rem",
        "description": "The gap between text elements and the add-on button in the text input field",
        "presenter": "Spacing"
      },
      {
        "name": "--select-common-height",
        "value": "3rem",
        "description": "The height of the select",
        "presenter": "Spacing"
      },
      {
        "name": "--select-common-padding-x",
        "value": "1rem",
        "description": "The left and right padding of the text input field",
        "presenter": "Spacing"
      },
      {
        "name": "--select-common-padding-y",
        "value": "0.5rem",
        "description": "The top and bottom padding of the text input field",
        "presenter": "Spacing"
      },
      {
        "name": "--select-common-text-gap",
        "value": "0.5rem",
        "description": "The gap between text elements in the text input field",
        "presenter": "Spacing"
      },
      {
        "name": "--select-disabled-background-colour",
        "value": "#f4f4f4",
        "description": "Text input background colour in disabled state",
        "presenter": "Color"
      },
      {
        "name": "--select-disabled-border-colour",
        "value": "#d3d3d3",
        "description": "Text input border colour in disabled state",
        "presenter": "Color"
      },
      {
        "name": "--select-disabled-border-width",
        "value": "0.09375rem",
        "description": "Text input border width in disabled state",
        "presenter": "Spacing"
      },
      {
        "name": "--select-disabled-colour",
        "value": "#a6a7a7",
        "description": "Text input text colour in disabled state",
        "presenter": "Color"
      },
      {
        "name": "--select-error-background-colour",
        "value": "#ffffff",
        "description": "Text input background colour in error state",
        "presenter": "Color"
      },
      {
        "name": "--select-error-border-colour",
        "value": "#c50b30",
        "description": "Text input border colour in error state",
        "presenter": "Color"
      },
      {
        "name": "--select-error-border-width",
        "value": "0.09375rem",
        "description": "Text input border width in error state",
        "presenter": "Spacing"
      },
      {
        "name": "--select-error-colour",
        "value": "#1d1d1b",
        "description": "Text input text colour in error state",
        "presenter": "Color"
      },
      {
        "name": "--select-error-focus-border-width",
        "value": "0.1875rem",
        "description": "The border width of the select input when it has an error and is focused",
        "presenter": "Spacing"
      },
      {
        "name": "--select-focus-background-colour",
        "value": "#ffffff",
        "description": "Text input background colour in focus state",
        "presenter": "Color"
      },
      {
        "name": "--select-focus-border-colour",
        "value": "#1d1d1b",
        "description": "Text input border colour in focus state",
        "presenter": "Color"
      },
      {
        "name": "--select-focus-border-width",
        "value": "0.1875rem",
        "description": "Text input border width in focus state",
        "presenter": "Spacing"
      },
      {
        "name": "--select-focus-colour",
        "value": "#1d1d1b",
        "description": "Text input text colour in focus state",
        "presenter": "Color"
      },
      {
        "name": "--select-hover-background-colour",
        "value": "#ffffff",
        "description": "Text input background colour in hover state",
        "presenter": "Color"
      },
      {
        "name": "--select-hover-border-colour",
        "value": "#4d4f4f",
        "description": "Text input border colour in hover state",
        "presenter": "Color"
      },
      {
        "name": "--select-hover-border-width",
        "value": "0.09375rem",
        "description": "Text input border width in hover state",
        "presenter": "Spacing"
      },
      {
        "name": "--select-hover-colour",
        "value": "#1d1d1b",
        "description": "Text input text colour in hover state",
        "presenter": "Color"
      },
      {
        "name": "--select-rest-background-colour",
        "value": "#ffffff",
        "description": "Text input background colour in rest state",
        "presenter": "Color"
      },
      {
        "name": "--select-rest-border-colour",
        "value": "#858686",
        "description": "Text input border colour in rest state",
        "presenter": "Color"
      },
      {
        "name": "--select-rest-border-width",
        "value": "0.09375rem",
        "description": "Text input border width in rest state",
        "presenter": "Spacing"
      },
      {
        "name": "--select-rest-colour",
        "value": "#1d1d1b",
        "description": "Text input text colour in rest state",
        "presenter": "Color"
      }
    ]
  },
  {
    "label": "Checkbox",
    "titlePrefix": "Components/Forms/Checkbox",
    "tokens": [
      {
        "name": "--checkbox-common-border-radius",
        "value": "0.25rem",
        "description": "The border radius of the checkbox control",
        "presenter": "BorderRadius"
      },
      {
        "name": "--checkbox-common-colour",
        "value": "#1d1d1b",
        "description": "Checkbox button label colour",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-common-gap",
        "value": "0.75rem",
        "description": "The gap between checkbox control and label",
        "presenter": "Spacing"
      },
      {
        "name": "--checkbox-disabled-control-background-colour",
        "value": "#f4f4f4",
        "description": "Background colour of the checkbox control in disabled state",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-disabled-control-border-colour",
        "value": "#d3d3d3",
        "description": "Border colour of the checkbox control in disabled state",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-disabled-control-border-width",
        "value": "0.09375rem",
        "description": "Border width of the checkbox control in disabled state",
        "presenter": "Spacing"
      },
      {
        "name": "--checkbox-disabled-indicator-background-colour",
        "value": "#d3d3d3",
        "description": "Colour of the checkbox indicator in disabled state",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-disabled-indicator-colour",
        "value": "#d3d3d3",
        "description": "Colour of the checkbox indicator in disabled state",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-disabled-label-colour",
        "value": "#a6a7a7",
        "description": "Colour of the checkbox label in disabled state",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-error-control-background-colour",
        "value": "#ffffff",
        "description": "Background colour of the checkbox control in error state",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-error-control-border-colour",
        "value": "#c50b30",
        "description": "Border colour of the checkbox control in error state",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-error-control-border-width",
        "value": "0.09375rem",
        "description": "Border width of the checkbox control in error state",
        "presenter": "Spacing"
      },
      {
        "name": "--checkbox-error-control-focus-border-width",
        "value": "0.1875rem",
        "description": "The border width of the checkbox when it has an error and is focused",
        "presenter": "Spacing"
      },
      {
        "name": "--checkbox-error-indicator-colour",
        "value": "#c50b30",
        "description": "Colour of the checkbox indicator in error state",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-focus-control-background-colour",
        "value": "#ffffff",
        "description": "Background colour of the checkbox control in focus state",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-focus-control-border-colour",
        "value": "#1d1d1b",
        "description": "Border colour of the checkbox control in focus state",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-focus-control-border-width",
        "value": "0.1875rem",
        "description": "Border width of the checkbox control in focus state",
        "presenter": "Spacing"
      },
      {
        "name": "--checkbox-focus-indicator-colour",
        "value": "#005dba",
        "description": "Colour of the checkbox indicator in focus state",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-group-lg-gap",
        "value": "1.25rem",
        "description": "Checkbox Group Lg Gap",
        "presenter": "Spacing"
      },
      {
        "name": "--checkbox-group-sm-gap",
        "value": "1rem",
        "description": "Checkbox Group Sm Gap",
        "presenter": "Spacing"
      },
      {
        "name": "--checkbox-hover-control-background-colour",
        "value": "#ffffff",
        "description": "Background colour of the checkbox control in hover state",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-hover-control-border-colour",
        "value": "#4d4f4f",
        "description": "Border colour of the checkbox control in hover state",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-hover-control-border-width",
        "value": "0.09375rem",
        "description": "Border width of the checkbox control in hover state",
        "presenter": "Spacing"
      },
      {
        "name": "--checkbox-hover-indicator-colour",
        "value": "#001d6e",
        "description": "Colour of the checkbox indicator in hover state",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-rest-control-background-colour",
        "value": "#ffffff",
        "description": "Background colour of the checkbox control in rest state",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-rest-control-border-colour",
        "value": "#858686",
        "description": "Border colour of the checkbox control in rest state",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-rest-control-border-width",
        "value": "0.09375rem",
        "description": "Border width of the checkbox control in rest state",
        "presenter": "Spacing"
      },
      {
        "name": "--checkbox-rest-indicator-colour",
        "value": "#005dba",
        "description": "Colour of the checkbox indicator in rest state",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-scale-lg-control-size",
        "value": "1.75rem",
        "description": "The width and height of the large checkbox button control",
        "presenter": "Spacing"
      },
      {
        "name": "--checkbox-scale-lg-gap",
        "value": "2.25rem",
        "description": "The gap between radio control and label",
        "presenter": "Spacing"
      },
      {
        "name": "--checkbox-scale-lg-indicator-size",
        "value": "1.75rem",
        "description": "The width and height of the large checkbox button indicator",
        "presenter": "Spacing"
      },
      {
        "name": "--checkbox-scale-sm-control-size",
        "value": "1rem",
        "description": "The width and height of the small checkbox button control",
        "presenter": "Spacing"
      },
      {
        "name": "--checkbox-scale-sm-gap",
        "value": "1.75rem",
        "description": "The gap between radio control and label",
        "presenter": "Spacing"
      },
      {
        "name": "--checkbox-scale-sm-indicator-size",
        "value": "1rem",
        "description": "The width and height of the small checkbox button inidcator",
        "presenter": "Spacing"
      }
    ]
  },
  {
    "label": "Form Validation",
    "titlePrefix": "Components/Forms/Form validation",
    "tokens": [
      {
        "name": "--label-and-hint-validation-message-colour",
        "value": "#1d1d1b",
        "description": "The colour of the the error message text and icon",
        "presenter": "Color"
      }
    ]
  },
  {
    "label": "Header",
    "titlePrefix": "Components/Header",
    "tokens": [
      {
        "name": "--header-button-active-colour",
        "value": "#001d6e",
        "description": "Hover state text colour of the nav button",
        "presenter": "Color"
      },
      {
        "name": "--header-button-active-hover-indicator",
        "value": "#001d6e",
        "description": "Hover state hover indicator colour of the nav button",
        "presenter": "Empty"
      },
      {
        "name": "--header-button-active-indicator-height",
        "value": "0.125rem",
        "description": "The height of the underline on the header button active state",
        "presenter": "Spacing"
      },
      {
        "name": "--header-button-border-radius",
        "value": "0.75rem",
        "description": "Border radius of the nav button",
        "presenter": "BorderRadius"
      },
      {
        "name": "--header-button-border-width-focus",
        "value": "0.1875rem",
        "description": "Border width of the focus state of the nav button",
        "presenter": "Spacing"
      },
      {
        "name": "--header-button-expanded-background-colour",
        "value": "#005dba",
        "description": "Active state background colour of the nav button",
        "presenter": "Color"
      },
      {
        "name": "--header-button-expanded-colour",
        "value": "#ffffff",
        "description": "Active state text colour of the nav button",
        "presenter": "Color"
      },
      {
        "name": "--header-button-expanded-hover-indicator",
        "value": "#005dba",
        "description": "Active state hover indicator colour of the nav button",
        "presenter": "Empty"
      },
      {
        "name": "--header-button-focus-border-colour",
        "value": "#ffffff",
        "description": "Focus state border colour of the nav button",
        "presenter": "Color"
      },
      {
        "name": "--header-button-focus-colour",
        "value": "#1d1d1b",
        "description": "Focus state text colour of the nav button",
        "presenter": "Color"
      },
      {
        "name": "--header-button-gap",
        "value": "0.5rem",
        "description": "Gap between elements inside the nav button",
        "presenter": "Spacing"
      },
      {
        "name": "--header-button-hover-colour",
        "value": "#1d1d1b",
        "description": "Hover state text colour of the nav button",
        "presenter": "Color"
      },
      {
        "name": "--header-button-hover-hover-indicator",
        "value": "#005dba",
        "description": "Hover state hover indicator colour of the nav button",
        "presenter": "Empty"
      },
      {
        "name": "--header-button-hover-indicator-height",
        "value": "0.125rem",
        "description": "The height of the underline on the header button hover state",
        "presenter": "Spacing"
      },
      {
        "name": "--header-button-icon-size",
        "value": "1.5rem",
        "description": "The width and height of the icon",
        "presenter": "Spacing"
      },
      {
        "name": "--header-button-min-height",
        "value": "3rem",
        "description": "Min height of the nav button",
        "presenter": "Spacing"
      },
      {
        "name": "--header-button-min-width",
        "value": "3rem",
        "description": "Min width of the nav button",
        "presenter": "Spacing"
      },
      {
        "name": "--header-button-padding-bottom",
        "value": "0.75rem",
        "description": "Header Button Padding Bottom",
        "presenter": "Spacing"
      },
      {
        "name": "--header-button-padding-default-x",
        "value": "0.75rem",
        "description": "Left and right padding of the nav button",
        "presenter": "Spacing"
      },
      {
        "name": "--header-button-padding-right",
        "value": "0.75rem",
        "description": "Header Button Padding Right",
        "presenter": "Spacing"
      },
      {
        "name": "--header-button-padding-small-x",
        "value": "0.5rem",
        "description": "Left and right padding of the nav button",
        "presenter": "Spacing"
      },
      {
        "name": "--header-button-padding-y",
        "value": "0.75rem",
        "description": "Top and bottom padding of the nav button",
        "presenter": "Spacing"
      },
      {
        "name": "--header-button-rest-colour",
        "value": "#1d1d1b",
        "description": "Rest state hover text colour of the nav button",
        "presenter": "Color"
      },
      {
        "name": "--header-button-rest-hover-indicator",
        "value": "#d3d3d3",
        "description": "Rest state hover indicator colour of the nav button",
        "presenter": "Empty"
      },
      {
        "name": "--header-button-text-icon-label-height",
        "value": "0.875rem",
        "description": "Ensures the label container height matches the text line height when the badge is visible",
        "presenter": "Spacing"
      },
      {
        "name": "--header-button-text-label-height",
        "value": "1.375rem",
        "description": "Ensures the label container height matches the text line height when the badge is visible",
        "presenter": "Spacing"
      },
      {
        "name": "--header-container-background-colour",
        "value": "#ffffff",
        "description": "Background colour of the nav container",
        "presenter": "Color"
      },
      {
        "name": "--header-container-gap",
        "value": "1.75rem",
        "description": "Gap between elements inside the nav container",
        "presenter": "Spacing"
      },
      {
        "name": "--header-container-logo-gap-lg",
        "value": "1.25rem",
        "description": "Gap between logos in the nav for LG+ breakpoint",
        "presenter": "Spacing"
      },
      {
        "name": "--header-container-logo-gap-sm",
        "value": "1rem",
        "description": "Gap between logos in the nav for SM breakpoint",
        "presenter": "Spacing"
      },
      {
        "name": "--header-container-max-height",
        "value": "5.5625rem",
        "description": "The overall max height of the nav bar",
        "presenter": "Spacing"
      },
      {
        "name": "--header-container-min-width",
        "value": "20rem",
        "description": "Min width of nav container",
        "presenter": "Spacing"
      },
      {
        "name": "--header-container-padding-x",
        "value": "1rem",
        "description": "Left and right padding of nav container",
        "presenter": "Spacing"
      },
      {
        "name": "--header-container-padding-y",
        "value": "0.5rem",
        "description": "Top and bottom padding of nav container",
        "presenter": "Spacing"
      },
      {
        "name": "--header-logo-container-max-height-lg",
        "value": "4rem",
        "description": "The max height of the logo slot for LG+ breakpoints",
        "presenter": "Spacing"
      },
      {
        "name": "--header-logo-container-max-height-sm",
        "value": "2.75rem",
        "description": "The max height of the logo slot for SM breakpoint",
        "presenter": "Spacing"
      },
      {
        "name": "--header-logo-container-max-width-lg",
        "value": "14.5rem",
        "description": "The max width of the logo slot for LG+ breakpoints",
        "presenter": "Spacing"
      },
      {
        "name": "--header-logo-container-max-width-sm",
        "value": "10.3125rem",
        "description": "The max width of the logo slot for SM breakpoint",
        "presenter": "Spacing"
      },
      {
        "name": "--header-logo-container-padding-bottom-lg",
        "value": "0.75rem",
        "description": "Padding to ensure that the logo optically aligns to other content in the nav",
        "presenter": "Spacing"
      },
      {
        "name": "--header-logo-container-padding-bottom-sm",
        "value": "0.5rem",
        "description": "Padding to ensure that the logo optically aligns to other content in the nav",
        "presenter": "Spacing"
      },
      {
        "name": "--header-logo-primary-max-height-lg",
        "value": "3.25rem",
        "description": "The max height of the primary logo for LG+ breakpoints",
        "presenter": "Spacing"
      },
      {
        "name": "--header-logo-primary-max-height-sm",
        "value": "2.25rem",
        "description": "The max height of the primary logo for SM breakpoint",
        "presenter": "Spacing"
      },
      {
        "name": "--header-logo-secondary-height-lg",
        "value": "2.25rem",
        "description": "The height of the secondary logo for LG+ breakpoints",
        "presenter": "Spacing"
      },
      {
        "name": "--header-logo-secondary-height-sm",
        "value": "1.5625rem",
        "description": "The height of the secondary logo for SM breakpoint",
        "presenter": "Spacing"
      },
      {
        "name": "--header-logo-secondary-max-width-lg",
        "value": "7.5rem",
        "description": "The max width of the secondary logo for LG+ breakpoints",
        "presenter": "Spacing"
      },
      {
        "name": "--header-logo-secondary-max-width-sm",
        "value": "5.25rem",
        "description": "The max width of the secondary logo for SM breakpoint",
        "presenter": "Spacing"
      }
    ]
  },
  {
    "label": "Link Menu",
    "titlePrefix": "Components/Link menu",
    "tokens": [
      {
        "name": "--link-menu-border-colour",
        "value": "#d3d3d3",
        "description": "Link Menu Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--link-menu-border-radius",
        "value": "1rem",
        "description": "Link Menu Border Radius",
        "presenter": "BorderRadius"
      },
      {
        "name": "--link-menu-border-width",
        "value": "0.0625rem",
        "description": "Link Menu Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--link-menu-item-active-background-colour",
        "value": "#005dba",
        "description": "Link Menu Item Active Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--link-menu-item-active-border-colour",
        "value": "#ffffff",
        "description": "Link Menu Item Active Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--link-menu-item-active-border-width-bottom",
        "value": "0.0625rem",
        "description": "Link Menu Item Active Border Width Bottom",
        "presenter": "Spacing"
      },
      {
        "name": "--link-menu-item-active-colour",
        "value": "#ffffff",
        "description": "Link Menu Item Active Colour",
        "presenter": "Color"
      },
      {
        "name": "--link-menu-item-active-colour-muted",
        "value": "#ffffff",
        "description": "Link Menu Item Active Colour Muted",
        "presenter": "Color"
      },
      {
        "name": "--link-menu-item-focus-border-colour",
        "value": "#1d1d1b",
        "description": "Link Menu Item Focus Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--link-menu-item-focus-border-width",
        "value": "0.1875rem",
        "description": "Link Menu Item Focus Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--link-menu-item-focus-colour",
        "value": "#1d1d1b",
        "description": "Link Menu Item Focus Colour",
        "presenter": "Color"
      },
      {
        "name": "--link-menu-item-focus-colour-muted",
        "value": "#1d1d1b",
        "description": "Link Menu Item Focus Colour Muted",
        "presenter": "Color"
      },
      {
        "name": "--link-menu-item-gap",
        "value": "0.75rem",
        "description": "Link Menu Item Gap",
        "presenter": "Spacing"
      },
      {
        "name": "--link-menu-item-hover-background-colour",
        "value": "#aee1f7",
        "description": "Link Menu Item Hover Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--link-menu-item-hover-border-colour",
        "value": "#001d6e",
        "description": "Link Menu Item Hover Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--link-menu-item-hover-border-width-bottom",
        "value": "0.1875rem",
        "description": "Link Menu Item Hover Border Width Bottom",
        "presenter": "Spacing"
      },
      {
        "name": "--link-menu-item-hover-colour",
        "value": "#1d1d1b",
        "description": "Link Menu Item Hover Colour",
        "presenter": "Color"
      },
      {
        "name": "--link-menu-item-hover-colour-muted",
        "value": "#1d1d1b",
        "description": "Link Menu Item Hover Colour Muted",
        "presenter": "Color"
      },
      {
        "name": "--link-menu-item-hover-padding-right",
        "value": "0.5rem",
        "description": "Link Menu Item Hover Padding Right",
        "presenter": "Spacing"
      },
      {
        "name": "--link-menu-item-padding-bottom",
        "value": "1rem",
        "description": "Link Menu Item Padding Bottom",
        "presenter": "Spacing"
      },
      {
        "name": "--link-menu-item-padding-left",
        "value": "1rem",
        "description": "Link Menu Item Padding Left",
        "presenter": "Spacing"
      },
      {
        "name": "--link-menu-item-padding-right",
        "value": "0.5rem",
        "description": "Link Menu Item Padding Right",
        "presenter": "Spacing"
      },
      {
        "name": "--link-menu-item-padding-top",
        "value": "1rem",
        "description": "Link Menu Item Padding Top",
        "presenter": "Spacing"
      },
      {
        "name": "--link-menu-item-rest-border-colour",
        "value": "#d3d3d3",
        "description": "Link Menu Item Rest Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--link-menu-item-rest-border-width-bottom",
        "value": "0.0625rem",
        "description": "Link Menu Item Rest Border Width Bottom",
        "presenter": "Spacing"
      },
      {
        "name": "--link-menu-item-rest-colour",
        "value": "#1d1d1b",
        "description": "Link Menu Item Rest Colour",
        "presenter": "Color"
      },
      {
        "name": "--link-menu-item-rest-colour-muted",
        "value": "#4d4f4f",
        "description": "Link Menu Item Rest Colour Muted",
        "presenter": "Color"
      }
    ]
  },
  {
    "label": "List",
    "titlePrefix": "Components/List with icons",
    "tokens": [
      {
        "name": "--list-gap",
        "value": "1.25rem",
        "description": "The gap between list items in a list",
        "presenter": "Spacing"
      },
      {
        "name": "--list-item-common-gap",
        "value": "0.75rem",
        "description": "The gap between icon or number and text in a list item",
        "presenter": "Spacing"
      },
      {
        "name": "--list-item-common-padding-left",
        "value": "0.75rem",
        "description": "Left padding applied to child list items to ident them",
        "presenter": "Spacing"
      },
      {
        "name": "--list-item-negative-colour",
        "value": "#c50b30",
        "description": "Sets the bullet colour to red for scenarios when negative information needs to be conveyed",
        "presenter": "Color"
      },
      {
        "name": "--list-item-positive-colour",
        "value": "#00633d",
        "description": "Sets the bullet colour to green for scenarios when positive information needs to be conveyed",
        "presenter": "Color"
      }
    ]
  },
  {
    "label": "Pagination",
    "titlePrefix": "Components/Pagination",
    "tokens": [
      {
        "name": "--pagination-colour",
        "value": "#1d1d1b",
        "description": "The colour of the text elements in the pagination component",
        "presenter": "Color"
      },
      {
        "name": "--pagination-horizontal-gap",
        "value": "1.75rem",
        "description": "The vertical gap between elements in the pagination component",
        "presenter": "Spacing"
      },
      {
        "name": "--pagination-inside-gap",
        "value": "0.5rem",
        "description": "The gap between page buttons in the pagination component",
        "presenter": "Spacing"
      },
      {
        "name": "--pagination-page-active-background-colour",
        "value": "#005dba",
        "description": "Pagination button active state background colour",
        "presenter": "Color"
      },
      {
        "name": "--pagination-page-active-colour",
        "value": "#ffffff",
        "description": "Pagination button active state colour",
        "presenter": "Color"
      },
      {
        "name": "--pagination-page-active-hover-indicator-colour",
        "value": "#005dba",
        "description": "Pagination button active state hover indicator colour",
        "presenter": "Color"
      },
      {
        "name": "--pagination-page-common-hover-indicator-width",
        "value": "0.125rem",
        "description": "Pagination button hover indicator width",
        "presenter": "Spacing"
      },
      {
        "name": "--pagination-page-disabled-background-colour",
        "value": "#f4f4f4",
        "description": "Pagination button disabled state background colour",
        "presenter": "Color"
      },
      {
        "name": "--pagination-page-disabled-colour",
        "value": "#d3d3d3",
        "description": "Pagination button disabled state colour",
        "presenter": "Color"
      },
      {
        "name": "--pagination-page-disabled-hover-indicator-colour",
        "value": "#f4f4f4",
        "description": "Pagination button active state disabled indicator colour",
        "presenter": "Color"
      },
      {
        "name": "--pagination-page-focus-background-colour",
        "value": "#ffffff",
        "description": "Pagination button focus state background colour",
        "presenter": "Color"
      },
      {
        "name": "--pagination-page-focus-border-colour",
        "value": "#1d1d1b",
        "description": "Pagination button focus state border colour",
        "presenter": "Color"
      },
      {
        "name": "--pagination-page-focus-border-width",
        "value": "0.1875rem",
        "description": "Pagination button focus state border width",
        "presenter": "Spacing"
      },
      {
        "name": "--pagination-page-focus-colour",
        "value": "#1d1d1b",
        "description": "Pagination button focus state colour",
        "presenter": "Color"
      },
      {
        "name": "--pagination-page-focus-hover-indicator-colour",
        "value": "#ffffff",
        "description": "Pagination button focus state hover indicator colour",
        "presenter": "Color"
      },
      {
        "name": "--pagination-page-hover-background-colour",
        "value": "#aee1f7",
        "description": "Pagination button hover state background colour",
        "presenter": "Color"
      },
      {
        "name": "--pagination-page-hover-colour",
        "value": "#1d1d1b",
        "description": "Pagination button hover state colour",
        "presenter": "Color"
      },
      {
        "name": "--pagination-page-hover-hover-indicator-colour",
        "value": "#001d6e",
        "description": "Pagination button hover state hover indicator colour",
        "presenter": "Color"
      },
      {
        "name": "--pagination-page-rest-background-colour",
        "value": "#ffffff",
        "description": "Pagination button rest state background colour",
        "presenter": "Color"
      },
      {
        "name": "--pagination-page-rest-colour",
        "value": "#1d1d1b",
        "description": "Pagination button rest state colour",
        "presenter": "Color"
      },
      {
        "name": "--pagination-page-rest-hover-indicator-colour",
        "value": "#ffffff",
        "description": "Pagination button rest state hover indicator colour",
        "presenter": "Color"
      },
      {
        "name": "--pagination-vertical-gap",
        "value": "1rem",
        "description": "The vertical gap between elements in the pagination component",
        "presenter": "Spacing"
      }
    ]
  },
  {
    "label": "Link",
    "titlePrefix": "Components/Link",
    "tokens": [
      {
        "name": "--link-gap",
        "value": "0.5rem",
        "description": "Gap between elements inside a link",
        "presenter": "Spacing"
      },
      {
        "name": "--link-group-gap",
        "value": "1rem",
        "description": "The gap between links in a link group",
        "presenter": "Spacing"
      },
      {
        "name": "--link-menu-border-colour",
        "value": "#d3d3d3",
        "description": "Link Menu Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--link-menu-border-radius",
        "value": "1rem",
        "description": "Link Menu Border Radius",
        "presenter": "BorderRadius"
      },
      {
        "name": "--link-menu-border-width",
        "value": "0.0625rem",
        "description": "Link Menu Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--link-menu-item-active-background-colour",
        "value": "#005dba",
        "description": "Link Menu Item Active Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--link-menu-item-active-border-colour",
        "value": "#ffffff",
        "description": "Link Menu Item Active Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--link-menu-item-active-border-width-bottom",
        "value": "0.0625rem",
        "description": "Link Menu Item Active Border Width Bottom",
        "presenter": "Spacing"
      },
      {
        "name": "--link-menu-item-active-colour",
        "value": "#ffffff",
        "description": "Link Menu Item Active Colour",
        "presenter": "Color"
      },
      {
        "name": "--link-menu-item-active-colour-muted",
        "value": "#ffffff",
        "description": "Link Menu Item Active Colour Muted",
        "presenter": "Color"
      },
      {
        "name": "--link-menu-item-focus-border-colour",
        "value": "#1d1d1b",
        "description": "Link Menu Item Focus Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--link-menu-item-focus-border-width",
        "value": "0.1875rem",
        "description": "Link Menu Item Focus Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--link-menu-item-focus-colour",
        "value": "#1d1d1b",
        "description": "Link Menu Item Focus Colour",
        "presenter": "Color"
      },
      {
        "name": "--link-menu-item-focus-colour-muted",
        "value": "#1d1d1b",
        "description": "Link Menu Item Focus Colour Muted",
        "presenter": "Color"
      },
      {
        "name": "--link-menu-item-gap",
        "value": "0.75rem",
        "description": "Link Menu Item Gap",
        "presenter": "Spacing"
      },
      {
        "name": "--link-menu-item-hover-background-colour",
        "value": "#aee1f7",
        "description": "Link Menu Item Hover Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--link-menu-item-hover-border-colour",
        "value": "#001d6e",
        "description": "Link Menu Item Hover Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--link-menu-item-hover-border-width-bottom",
        "value": "0.1875rem",
        "description": "Link Menu Item Hover Border Width Bottom",
        "presenter": "Spacing"
      },
      {
        "name": "--link-menu-item-hover-colour",
        "value": "#1d1d1b",
        "description": "Link Menu Item Hover Colour",
        "presenter": "Color"
      },
      {
        "name": "--link-menu-item-hover-colour-muted",
        "value": "#1d1d1b",
        "description": "Link Menu Item Hover Colour Muted",
        "presenter": "Color"
      },
      {
        "name": "--link-menu-item-hover-padding-right",
        "value": "0.5rem",
        "description": "Link Menu Item Hover Padding Right",
        "presenter": "Spacing"
      },
      {
        "name": "--link-menu-item-padding-bottom",
        "value": "1rem",
        "description": "Link Menu Item Padding Bottom",
        "presenter": "Spacing"
      },
      {
        "name": "--link-menu-item-padding-left",
        "value": "1rem",
        "description": "Link Menu Item Padding Left",
        "presenter": "Spacing"
      },
      {
        "name": "--link-menu-item-padding-right",
        "value": "0.5rem",
        "description": "Link Menu Item Padding Right",
        "presenter": "Spacing"
      },
      {
        "name": "--link-menu-item-padding-top",
        "value": "1rem",
        "description": "Link Menu Item Padding Top",
        "presenter": "Spacing"
      },
      {
        "name": "--link-menu-item-rest-border-colour",
        "value": "#d3d3d3",
        "description": "Link Menu Item Rest Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--link-menu-item-rest-border-width-bottom",
        "value": "0.0625rem",
        "description": "Link Menu Item Rest Border Width Bottom",
        "presenter": "Spacing"
      },
      {
        "name": "--link-menu-item-rest-colour",
        "value": "#1d1d1b",
        "description": "Link Menu Item Rest Colour",
        "presenter": "Color"
      },
      {
        "name": "--link-menu-item-rest-colour-muted",
        "value": "#4d4f4f",
        "description": "Link Menu Item Rest Colour Muted",
        "presenter": "Color"
      },
      {
        "name": "--link-mono-active-colour",
        "value": "#000000",
        "description": "Footer link active colour",
        "presenter": "Color"
      },
      {
        "name": "--link-mono-focus-border-radius",
        "value": "0.25rem",
        "description": "Link focus indicator border radius",
        "presenter": "BorderRadius"
      },
      {
        "name": "--link-mono-focus-border-width",
        "value": "0.0625rem",
        "description": "Link focus indicator border width",
        "presenter": "Spacing"
      },
      {
        "name": "--link-mono-focus-colour",
        "value": "#000000",
        "description": "Footer link focus colour",
        "presenter": "Color"
      },
      {
        "name": "--link-mono-hover-colour",
        "value": "#000000",
        "description": "Footer link hover colour",
        "presenter": "Color"
      },
      {
        "name": "--link-mono-rest-colour",
        "value": "#000000",
        "description": "Footer link rest colour",
        "presenter": "Color"
      },
      {
        "name": "--link-mono-visited-colour",
        "value": "#000000",
        "description": "Footer link visited colour",
        "presenter": "Color"
      },
      {
        "name": "--link-primary-active-colour",
        "value": "#000a52",
        "description": "Primary link active text and icon colour",
        "presenter": "Color"
      },
      {
        "name": "--link-primary-focus-border-radius",
        "value": "0.25rem",
        "description": "Link focus indicator border radius",
        "presenter": "BorderRadius"
      },
      {
        "name": "--link-primary-focus-border-width",
        "value": "0.0625rem",
        "description": "Link focus indicator border width",
        "presenter": "Spacing"
      },
      {
        "name": "--link-primary-focus-colour",
        "value": "#005dba",
        "description": "Primary link focus text and icon colour",
        "presenter": "Color"
      },
      {
        "name": "--link-primary-hover-colour",
        "value": "#001d6e",
        "description": "Primary link hover text and icon colour",
        "presenter": "Color"
      },
      {
        "name": "--link-primary-rest-colour",
        "value": "#005dba",
        "description": "Primary link rest text and icon colour",
        "presenter": "Color"
      },
      {
        "name": "--link-primary-visited-colour",
        "value": "#1d1d1b",
        "description": "Primary link visited text and icon colour",
        "presenter": "Color"
      },
      {
        "name": "--link-status-bold-active-colour",
        "value": "#f4f4f4",
        "description": "Bold status link active text and icon colour",
        "presenter": "Color"
      },
      {
        "name": "--link-status-bold-focus-border-radius",
        "value": "0.25rem",
        "description": "Link focus indicator border radius",
        "presenter": "BorderRadius"
      },
      {
        "name": "--link-status-bold-focus-border-width",
        "value": "0.0625rem",
        "description": "Link focus indicator border width",
        "presenter": "Spacing"
      },
      {
        "name": "--link-status-bold-focus-colour",
        "value": "#f4f4f4",
        "description": "Bold status link focus text and icon colour",
        "presenter": "Color"
      },
      {
        "name": "--link-status-bold-hover-colour",
        "value": "#f4f4f4",
        "description": "Bold status link hover text and icon colour",
        "presenter": "Color"
      },
      {
        "name": "--link-status-bold-rest-colour",
        "value": "#f4f4f4",
        "description": "Bold status link rest text and icon colour",
        "presenter": "Color"
      },
      {
        "name": "--link-status-bold-visited-colour",
        "value": "#f4f4f4",
        "description": "Bold status link visited text and icon colour",
        "presenter": "Color"
      },
      {
        "name": "--link-status-subtle-active-colour",
        "value": "#000000",
        "description": "Subtle status link active text and icon colour",
        "presenter": "Color"
      },
      {
        "name": "--link-status-subtle-focus-border-radius",
        "value": "0.25rem",
        "description": "Link focus indicator border radius",
        "presenter": "BorderRadius"
      },
      {
        "name": "--link-status-subtle-focus-border-width",
        "value": "0.0625rem",
        "description": "Link focus indicator border width",
        "presenter": "Spacing"
      },
      {
        "name": "--link-status-subtle-focus-colour",
        "value": "#000000",
        "description": "Subtle status link focus text and icon colour",
        "presenter": "Color"
      },
      {
        "name": "--link-status-subtle-hover-colour",
        "value": "#000000",
        "description": "Subtle status link hover text and icon colour",
        "presenter": "Color"
      },
      {
        "name": "--link-status-subtle-rest-colour",
        "value": "#000000",
        "description": "Subtle status link rest text and icon colour",
        "presenter": "Color"
      },
      {
        "name": "--link-status-subtle-visited-colour",
        "value": "#000000",
        "description": "Subtle status link visited text and icon colour",
        "presenter": "Color"
      }
    ]
  },
  {
    "label": "Text Input",
    "titlePrefix": "Patterns/Date input",
    "tokens": [
      {
        "name": "--text-input-common-addon-button-gap",
        "value": "1rem",
        "description": "The gap between text elements and the add-on button in the text input field",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-common-border-radius",
        "value": "0.75rem",
        "description": "The radius of the text input field",
        "presenter": "BorderRadius"
      },
      {
        "name": "--text-input-common-button-gap",
        "value": "0.5rem",
        "description": "The gap between the text input and external button",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-common-height",
        "value": "3rem",
        "description": "The height of the text input",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-common-padding-x",
        "value": "1rem",
        "description": "The left and right padding of the text input field",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-common-padding-y",
        "value": "0.5rem",
        "description": "The top and bottom padding of the text input field",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-common-text-gap",
        "value": "0.5rem",
        "description": "The gap between text elements in the text input field",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-disabled-background-colour",
        "value": "#f4f4f4",
        "description": "Text input background colour in disabled state",
        "presenter": "Color"
      },
      {
        "name": "--text-input-disabled-border-colour",
        "value": "#d3d3d3",
        "description": "Text input border colour in disabled state",
        "presenter": "Color"
      },
      {
        "name": "--text-input-disabled-border-width",
        "value": "0.09375rem",
        "description": "Text input border width in disabled state",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-disabled-colour",
        "value": "#a6a7a7",
        "description": "Text input text colour in disabled state",
        "presenter": "Color"
      },
      {
        "name": "--text-input-error-background-colour",
        "value": "#ffffff",
        "description": "Text input background colour in error state",
        "presenter": "Color"
      },
      {
        "name": "--text-input-error-border-colour",
        "value": "#c50b30",
        "description": "Text input border colour in error state",
        "presenter": "Color"
      },
      {
        "name": "--text-input-error-border-width",
        "value": "0.09375rem",
        "description": "Text input border width in error state",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-error-colour",
        "value": "#1d1d1b",
        "description": "Text input text colour in error state",
        "presenter": "Color"
      },
      {
        "name": "--text-input-error-focus-border-width",
        "value": "0.1875rem",
        "description": "The border width of the text input when it has an error and is focused",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-focus-background-colour",
        "value": "#ffffff",
        "description": "Text input background colour in focus state",
        "presenter": "Color"
      },
      {
        "name": "--text-input-focus-border-colour",
        "value": "#1d1d1b",
        "description": "Text input border colour in focus state",
        "presenter": "Color"
      },
      {
        "name": "--text-input-focus-border-width",
        "value": "0.1875rem",
        "description": "Text input border width in focus state",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-focus-colour",
        "value": "#1d1d1b",
        "description": "Text input text colour in focus state",
        "presenter": "Color"
      },
      {
        "name": "--text-input-hover-background-colour",
        "value": "#ffffff",
        "description": "Text input background colour in hover state",
        "presenter": "Color"
      },
      {
        "name": "--text-input-hover-border-colour",
        "value": "#4d4f4f",
        "description": "Text input border colour in hover state",
        "presenter": "Color"
      },
      {
        "name": "--text-input-hover-border-width",
        "value": "0.09375rem",
        "description": "Text input border width in hover state",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-hover-colour",
        "value": "#1d1d1b",
        "description": "Text input text colour in hover state",
        "presenter": "Color"
      },
      {
        "name": "--text-input-rest-background-colour",
        "value": "#ffffff",
        "description": "Text input background colour in rest state",
        "presenter": "Color"
      },
      {
        "name": "--text-input-rest-border-colour",
        "value": "#858686",
        "description": "Text input border colour in rest state",
        "presenter": "Color"
      },
      {
        "name": "--text-input-rest-border-width",
        "value": "0.09375rem",
        "description": "Text input border width in rest state",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-rest-colour",
        "value": "#1d1d1b",
        "description": "Text input text colour in rest state",
        "presenter": "Color"
      }
    ]
  },
  {
    "label": "Text Input",
    "titlePrefix": "Patterns/Sort code",
    "tokens": [
      {
        "name": "--text-input-common-addon-button-gap",
        "value": "1rem",
        "description": "The gap between text elements and the add-on button in the text input field",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-common-border-radius",
        "value": "0.75rem",
        "description": "The radius of the text input field",
        "presenter": "BorderRadius"
      },
      {
        "name": "--text-input-common-button-gap",
        "value": "0.5rem",
        "description": "The gap between the text input and external button",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-common-height",
        "value": "3rem",
        "description": "The height of the text input",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-common-padding-x",
        "value": "1rem",
        "description": "The left and right padding of the text input field",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-common-padding-y",
        "value": "0.5rem",
        "description": "The top and bottom padding of the text input field",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-common-text-gap",
        "value": "0.5rem",
        "description": "The gap between text elements in the text input field",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-disabled-background-colour",
        "value": "#f4f4f4",
        "description": "Text input background colour in disabled state",
        "presenter": "Color"
      },
      {
        "name": "--text-input-disabled-border-colour",
        "value": "#d3d3d3",
        "description": "Text input border colour in disabled state",
        "presenter": "Color"
      },
      {
        "name": "--text-input-disabled-border-width",
        "value": "0.09375rem",
        "description": "Text input border width in disabled state",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-disabled-colour",
        "value": "#a6a7a7",
        "description": "Text input text colour in disabled state",
        "presenter": "Color"
      },
      {
        "name": "--text-input-error-background-colour",
        "value": "#ffffff",
        "description": "Text input background colour in error state",
        "presenter": "Color"
      },
      {
        "name": "--text-input-error-border-colour",
        "value": "#c50b30",
        "description": "Text input border colour in error state",
        "presenter": "Color"
      },
      {
        "name": "--text-input-error-border-width",
        "value": "0.09375rem",
        "description": "Text input border width in error state",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-error-colour",
        "value": "#1d1d1b",
        "description": "Text input text colour in error state",
        "presenter": "Color"
      },
      {
        "name": "--text-input-error-focus-border-width",
        "value": "0.1875rem",
        "description": "The border width of the text input when it has an error and is focused",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-focus-background-colour",
        "value": "#ffffff",
        "description": "Text input background colour in focus state",
        "presenter": "Color"
      },
      {
        "name": "--text-input-focus-border-colour",
        "value": "#1d1d1b",
        "description": "Text input border colour in focus state",
        "presenter": "Color"
      },
      {
        "name": "--text-input-focus-border-width",
        "value": "0.1875rem",
        "description": "Text input border width in focus state",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-focus-colour",
        "value": "#1d1d1b",
        "description": "Text input text colour in focus state",
        "presenter": "Color"
      },
      {
        "name": "--text-input-hover-background-colour",
        "value": "#ffffff",
        "description": "Text input background colour in hover state",
        "presenter": "Color"
      },
      {
        "name": "--text-input-hover-border-colour",
        "value": "#4d4f4f",
        "description": "Text input border colour in hover state",
        "presenter": "Color"
      },
      {
        "name": "--text-input-hover-border-width",
        "value": "0.09375rem",
        "description": "Text input border width in hover state",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-hover-colour",
        "value": "#1d1d1b",
        "description": "Text input text colour in hover state",
        "presenter": "Color"
      },
      {
        "name": "--text-input-rest-background-colour",
        "value": "#ffffff",
        "description": "Text input background colour in rest state",
        "presenter": "Color"
      },
      {
        "name": "--text-input-rest-border-colour",
        "value": "#858686",
        "description": "Text input border colour in rest state",
        "presenter": "Color"
      },
      {
        "name": "--text-input-rest-border-width",
        "value": "0.09375rem",
        "description": "Text input border width in rest state",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-rest-colour",
        "value": "#1d1d1b",
        "description": "Text input text colour in rest state",
        "presenter": "Color"
      }
    ]
  }
];

export default tokenSets;
