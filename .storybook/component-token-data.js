const tokenSets = [
  {
    "label": "Inline Message",
    "titlePrefix": "Components/Inline message (Alert)",
    "tokens": [
      {
        "name": "--inline-message-padding-x",
        "value": "0.75rem",
        "description": "Horizontal padding",
        "presenter": "Spacing"
      },
      {
        "name": "--inline-message-padding-y",
        "value": "0.75rem",
        "description": "Vertical padding",
        "presenter": "Spacing"
      },
      {
        "name": "--inline-message-border-radius",
        "value": "0.75rem",
        "description": "Corner radius",
        "presenter": "BorderRadius"
      },
      {
        "name": "--inline-message-gap",
        "value": "0.75rem",
        "description": "Gap between icon and content",
        "presenter": "Spacing"
      },
      {
        "name": "--inline-message-text-colour",
        "value": "#1d1d1b",
        "description": "Text colour",
        "presenter": "Color"
      },
      {
        "name": "--inline-message-background-colour",
        "value": "#f4f4f4",
        "description": "Background colour",
        "presenter": "Color"
      },
      {
        "name": "--inline-message-icon-colour",
        "value": "#1d1d1b",
        "description": "Icon colour",
        "presenter": "Color"
      }
    ]
  },
  {
    "label": "Banner",
    "titlePrefix": "Components/Banner message",
    "tokens": [
      {
        "name": "--banner-padding-x",
        "value": "1rem",
        "description": "Horizontal padding",
        "presenter": "Spacing"
      },
      {
        "name": "--banner-padding-y",
        "value": "0.75rem",
        "description": "Vertical padding",
        "presenter": "Spacing"
      },
      {
        "name": "--banner-gap",
        "value": "0.75rem",
        "description": "Gap between banner content",
        "presenter": "Spacing"
      },
      {
        "name": "--banner-background-colour",
        "value": "#4d4f4f",
        "description": "Background colour",
        "presenter": "Color"
      },
      {
        "name": "--banner-text-colour",
        "value": "#ffffff",
        "description": "Text colour",
        "presenter": "Color"
      },
      {
        "name": "--banner-icon-colour",
        "value": "#ffffff",
        "description": "Icon colour",
        "presenter": "Color"
      }
    ]
  },
  {
    "label": "Breadcrumb",
    "titlePrefix": "Components/Breadcrumb",
    "tokens": [
      {
        "name": "--breadcrumb-gap",
        "value": "0.5rem",
        "description": "Gap between breadcrumb items",
        "presenter": "Spacing"
      },
      {
        "name": "--breadcrumb-padding-x",
        "value": "1rem",
        "description": "Horizontal padding",
        "presenter": "Spacing"
      },
      {
        "name": "--breadcrumb-padding-y",
        "value": "0.75rem",
        "description": "Vertical padding",
        "presenter": "Spacing"
      },
      {
        "name": "--breadcrumb-min-width",
        "value": "20rem",
        "description": "Minimum width",
        "presenter": "Spacing"
      },
      {
        "name": "--breadcrumb-border-width",
        "value": "0.0625rem",
        "description": "Border width",
        "presenter": "Spacing"
      },
      {
        "name": "--breadcrumb-border-colour",
        "value": "#d3d3d3",
        "description": "Border colour",
        "presenter": "Color"
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
        "description": "Button corner radius",
        "presenter": "BorderRadius"
      },
      {
        "name": "--button-border-width",
        "value": "0.09375rem",
        "description": "Default border width",
        "presenter": "Spacing"
      },
      {
        "name": "--button-border-width-focus",
        "value": "0.1875rem",
        "description": "Focus border width",
        "presenter": "Spacing"
      },
      {
        "name": "--button-gap",
        "value": "0.5rem",
        "description": "Gap between button content",
        "presenter": "Spacing"
      },
      {
        "name": "--button-common-labelled-min-height",
        "value": "3rem",
        "description": "Labelled button minimum height",
        "presenter": "Spacing"
      },
      {
        "name": "--button-common-labelled-min-width",
        "value": "3rem",
        "description": "Labelled button minimum width",
        "presenter": "Spacing"
      },
      {
        "name": "--button-common-labelled-padding-x",
        "value": "1rem",
        "description": "Labelled button horizontal padding",
        "presenter": "Spacing"
      },
      {
        "name": "--button-common-labelled-padding-y",
        "value": "0.75rem",
        "description": "Labelled button vertical padding",
        "presenter": "Spacing"
      },
      {
        "name": "--button-common-icon-only-min-height",
        "value": "3rem",
        "description": "Icon-only button minimum height",
        "presenter": "Spacing"
      },
      {
        "name": "--button-common-icon-only-min-width",
        "value": "3rem",
        "description": "Icon-only button minimum width",
        "presenter": "Spacing"
      },
      {
        "name": "--button-common-icon-only-padding-x",
        "value": "0.75rem",
        "description": "Icon-only button horizontal padding",
        "presenter": "Spacing"
      },
      {
        "name": "--button-common-icon-only-padding-y",
        "value": "0.75rem",
        "description": "Icon-only button vertical padding",
        "presenter": "Spacing"
      },
      {
        "name": "--button-icon-width",
        "value": "1.5rem",
        "description": "Icon width",
        "presenter": "Spacing"
      },
      {
        "name": "--button-primary-rest-background-colour",
        "value": "#005dba",
        "description": "Rest background colour",
        "presenter": "Color"
      },
      {
        "name": "--button-primary-rest-border-colour",
        "value": "#005dba",
        "description": "Rest border colour",
        "presenter": "Color"
      },
      {
        "name": "--button-primary-rest-colour",
        "value": "#ffffff",
        "description": "Rest text colour",
        "presenter": "Color"
      },
      {
        "name": "--button-primary-hover-background-colour",
        "value": "#001d6e",
        "description": "Hover background colour",
        "presenter": "Color"
      },
      {
        "name": "--button-primary-hover-border-colour",
        "value": "#001d6e",
        "description": "Hover border colour",
        "presenter": "Color"
      },
      {
        "name": "--button-primary-hover-colour",
        "value": "#ffffff",
        "description": "Hover text colour",
        "presenter": "Color"
      },
      {
        "name": "--button-primary-active-background-colour",
        "value": "#000039",
        "description": "Active background colour",
        "presenter": "Color"
      },
      {
        "name": "--button-primary-active-border-colour",
        "value": "#000039",
        "description": "Active border colour",
        "presenter": "Color"
      },
      {
        "name": "--button-primary-active-colour",
        "value": "#ffffff",
        "description": "Active text colour",
        "presenter": "Color"
      },
      {
        "name": "--button-primary-focus-background-colour",
        "value": "#005dba",
        "description": "Focus background colour",
        "presenter": "Color"
      },
      {
        "name": "--button-primary-focus-colour",
        "value": "#ffffff",
        "description": "Focus text colour",
        "presenter": "Color"
      },
      {
        "name": "--button-primary-disabled-background-colour",
        "value": "#d3d3d3",
        "description": "Disabled background colour",
        "presenter": "Color"
      },
      {
        "name": "--button-primary-disabled-border-colour",
        "value": "#d3d3d3",
        "description": "Disabled border colour",
        "presenter": "Color"
      },
      {
        "name": "--button-primary-disabled-colour",
        "value": "#7a7b7b",
        "description": "Disabled text colour",
        "presenter": "Color"
      },
      {
        "name": "--button-secondary-rest-background-colour",
        "value": "#ffffff",
        "description": "Rest background colour",
        "presenter": "Color"
      },
      {
        "name": "--button-secondary-rest-border-colour",
        "value": "#1d1d1b",
        "description": "Rest border colour",
        "presenter": "Color"
      },
      {
        "name": "--button-secondary-rest-colour",
        "value": "#1d1d1b",
        "description": "Rest text colour",
        "presenter": "Color"
      },
      {
        "name": "--button-secondary-hover-background-colour",
        "value": "#001d6e",
        "description": "Hover background colour",
        "presenter": "Color"
      },
      {
        "name": "--button-secondary-hover-border-colour",
        "value": "#001d6e",
        "description": "Hover border colour",
        "presenter": "Color"
      },
      {
        "name": "--button-secondary-hover-colour",
        "value": "#ffffff",
        "description": "Hover text colour",
        "presenter": "Color"
      },
      {
        "name": "--button-secondary-active-background-colour",
        "value": "#000039",
        "description": "Active background colour",
        "presenter": "Color"
      },
      {
        "name": "--button-secondary-active-border-colour",
        "value": "#000039",
        "description": "Active border colour",
        "presenter": "Color"
      },
      {
        "name": "--button-secondary-active-colour",
        "value": "#ffffff",
        "description": "Active text colour",
        "presenter": "Color"
      },
      {
        "name": "--button-secondary-focus-background-colour",
        "value": "#ffffff",
        "description": "Focus background colour",
        "presenter": "Color"
      },
      {
        "name": "--button-secondary-focus-border-colour",
        "value": "#1d1d1b",
        "description": "Focus border colour",
        "presenter": "Color"
      },
      {
        "name": "--button-secondary-focus-colour",
        "value": "#1d1d1b",
        "description": "Focus text colour",
        "presenter": "Color"
      },
      {
        "name": "--button-secondary-disabled-background-colour",
        "value": "#d3d3d3",
        "description": "Disabled background colour",
        "presenter": "Color"
      },
      {
        "name": "--button-secondary-disabled-border-colour",
        "value": "#d3d3d3",
        "description": "Disabled border colour",
        "presenter": "Color"
      },
      {
        "name": "--button-secondary-disabled-colour",
        "value": "#7a7b7b",
        "description": "Disabled text colour",
        "presenter": "Color"
      },
      {
        "name": "--button-status-rest-background-colour",
        "value": "#4d4f4f",
        "description": "Rest background colour",
        "presenter": "Color"
      },
      {
        "name": "--button-status-rest-border-colour",
        "value": "#4d4f4f",
        "description": "Rest border colour",
        "presenter": "Color"
      },
      {
        "name": "--button-status-rest-colour",
        "value": "#ffffff",
        "description": "Rest text colour",
        "presenter": "Color"
      },
      {
        "name": "--button-status-hover-background-colour",
        "value": "#343634",
        "description": "Hover background colour",
        "presenter": "Color"
      },
      {
        "name": "--button-status-hover-border-colour",
        "value": "#343634",
        "description": "Hover border colour",
        "presenter": "Color"
      },
      {
        "name": "--button-status-hover-colour",
        "value": "#ffffff",
        "description": "Hover text colour",
        "presenter": "Color"
      },
      {
        "name": "--button-status-active-background-colour",
        "value": "#1d1d1b",
        "description": "Active background colour",
        "presenter": "Color"
      },
      {
        "name": "--button-status-active-border-colour",
        "value": "#1d1d1b",
        "description": "Active border colour",
        "presenter": "Color"
      },
      {
        "name": "--button-status-active-colour",
        "value": "#ffffff",
        "description": "Active text colour",
        "presenter": "Color"
      },
      {
        "name": "--button-status-focus-background-colour",
        "value": "#4d4f4f",
        "description": "Focus background colour",
        "presenter": "Color"
      },
      {
        "name": "--button-status-focus-colour",
        "value": "#ffffff",
        "description": "Focus text colour",
        "presenter": "Color"
      },
      {
        "name": "--button-status-disabled-background-colour",
        "value": "#bcbdbd",
        "description": "Disabled background colour",
        "presenter": "Color"
      },
      {
        "name": "--button-status-disabled-border-colour",
        "value": "#bcbdbd",
        "description": "Disabled border colour",
        "presenter": "Color"
      },
      {
        "name": "--button-status-disabled-colour",
        "value": "#858686",
        "description": "Disabled text colour",
        "presenter": "Color"
      }
    ]
  },
  {
    "label": "Content Area",
    "titlePrefix": "Components/Content area",
    "tokens": [
      {
        "name": "--content-area-padding-x",
        "value": "1.75rem",
        "description": "Horizontal padding",
        "presenter": "Spacing"
      },
      {
        "name": "--content-area-padding-y",
        "value": "1.25rem",
        "description": "Vertical padding",
        "presenter": "Spacing"
      },
      {
        "name": "--content-area-border-radius",
        "value": "1.75rem",
        "description": "Corner radius",
        "presenter": "BorderRadius"
      },
      {
        "name": "--content-area-gap",
        "value": "1.75rem",
        "description": "Gap between content",
        "presenter": "Spacing"
      },
      {
        "name": "--content-area-background-colour",
        "value": "#ffffff",
        "description": "Background colour",
        "presenter": "Color"
      },
      {
        "name": "--content-area-border-colour",
        "value": "#d3d3d3",
        "description": "Border colour",
        "presenter": "Color"
      },
      {
        "name": "--content-area-border-width",
        "value": "0.0625rem",
        "description": "Border width",
        "presenter": "Spacing"
      },
      {
        "name": "--content-area-colour",
        "value": "#1d1d1b",
        "description": "Text colour",
        "presenter": "Color"
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
        "description": "Gap between data point elements",
        "presenter": "Spacing"
      },
      {
        "name": "--data-point-label-colour",
        "value": "#4d4f4f",
        "description": "Label colour",
        "presenter": "Color"
      },
      {
        "name": "--data-point-value-colour",
        "value": "#1d1d1b",
        "description": "Value colour",
        "presenter": "Color"
      },
      {
        "name": "--data-point-group-column-gap",
        "value": "2.25rem",
        "description": "Column gap",
        "presenter": "Spacing"
      },
      {
        "name": "--data-point-group-row-gap",
        "value": "2.25rem",
        "description": "Row gap",
        "presenter": "Spacing"
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
        "description": "Active panel bottom padding",
        "presenter": "Spacing"
      },
      {
        "name": "--details-border-radius",
        "value": "0.75rem",
        "description": "Corner radius",
        "presenter": "BorderRadius"
      },
      {
        "name": "--details-gap",
        "value": "0.75rem",
        "description": "Gap between details elements",
        "presenter": "Spacing"
      },
      {
        "name": "--details-padding-x",
        "value": "0.75rem",
        "description": "Horizontal padding",
        "presenter": "Spacing"
      },
      {
        "name": "--details-padding-y",
        "value": "0.75rem",
        "description": "Vertical padding",
        "presenter": "Spacing"
      },
      {
        "name": "--details-focus-indicator-colour",
        "value": "#1d1d1b",
        "description": "Focus indicator colour",
        "presenter": "Color"
      },
      {
        "name": "--details-focus-indicator-border-width",
        "value": "0.1875rem",
        "description": "Focus indicator border width",
        "presenter": "Spacing"
      },
      {
        "name": "--details-focus-indicator-border-radius",
        "value": "0.5rem",
        "description": "Focus indicator border radius",
        "presenter": "BorderRadius"
      },
      {
        "name": "--details-status-background-colour",
        "value": "#f4f4f4",
        "description": "Status background colour",
        "presenter": "Color"
      },
      {
        "name": "--details-status-icon-colour",
        "value": "#1d1d1b",
        "description": "Status icon colour",
        "presenter": "Color"
      },
      {
        "name": "--details-status-text-colour",
        "value": "#1d1d1b",
        "description": "Status text colour",
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
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--footer-border-colour",
        "value": "#d3d3d3",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--footer-border-width",
        "value": "0.0625rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--footer-min-width",
        "value": "20rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--footer-padding-x",
        "value": "1rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--footer-padding-y",
        "value": "1.75rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--footer-gap",
        "value": "1.75rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--footer-logo-gap",
        "value": "2.25rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--footer-logo-size",
        "value": "5rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--footer-link-group-social-gap",
        "value": "0.75rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--footer-link-group-link-gap",
        "value": "1rem",
        "description": "",
        "presenter": "Spacing"
      }
    ]
  },
  {
    "label": "Text Input",
    "titlePrefix": "Components/Forms/Text input",
    "tokens": [
      {
        "name": "--text-input-common-border-radius",
        "value": "0.75rem",
        "description": "",
        "presenter": "BorderRadius"
      },
      {
        "name": "--text-input-common-height",
        "value": "3rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-common-padding-x",
        "value": "1rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-common-padding-y",
        "value": "0.5rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-common-text-gap",
        "value": "0.5rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-common-button-gap",
        "value": "0.5rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-common-addon-button-gap",
        "value": "1rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-rest-background-colour",
        "value": "#ffffff",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--text-input-rest-border-colour",
        "value": "#858686",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--text-input-rest-colour",
        "value": "#1d1d1b",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--text-input-rest-border-width",
        "value": "0.09375rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-hover-background-colour",
        "value": "#ffffff",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--text-input-hover-border-colour",
        "value": "#4d4f4f",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--text-input-hover-colour",
        "value": "#1d1d1b",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--text-input-hover-border-width",
        "value": "0.09375rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-focus-background-colour",
        "value": "#ffffff",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--text-input-focus-border-colour",
        "value": "#1d1d1b",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--text-input-focus-colour",
        "value": "#1d1d1b",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--text-input-focus-border-width",
        "value": "0.1875rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-error-background-colour",
        "value": "#ffffff",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--text-input-error-border-colour",
        "value": "#c50b30",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--text-input-error-colour",
        "value": "#1d1d1b",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--text-input-error-border-width",
        "value": "0.09375rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-error-focus-border-width",
        "value": "0.1875rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-disabled-background-colour",
        "value": "#f4f4f4",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--text-input-disabled-border-colour",
        "value": "#d3d3d3",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--text-input-disabled-colour",
        "value": "#a6a7a7",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--text-input-disabled-border-width",
        "value": "0.09375rem",
        "description": "",
        "presenter": "Spacing"
      }
    ]
  },
  {
    "label": "Radio",
    "titlePrefix": "Components/Forms/Radio",
    "tokens": [
      {
        "name": "--radio-scale-sm-control-size",
        "value": "1rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--radio-scale-sm-indicator-size",
        "value": "0.5rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--radio-scale-sm-gap",
        "value": "1.75rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--radio-scale-lg-control-size",
        "value": "1.75rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--radio-scale-lg-indicator-size",
        "value": "1rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--radio-scale-lg-gap",
        "value": "2.25rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--radio-common-colour",
        "value": "#1d1d1b",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--radio-common-border-radius",
        "value": "1rem",
        "description": "",
        "presenter": "BorderRadius"
      },
      {
        "name": "--radio-group-sm-gap",
        "value": "1rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--radio-group-lg-gap",
        "value": "1.25rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--radio-rest-control-background-colour",
        "value": "#ffffff",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--radio-rest-control-border-colour",
        "value": "#858686",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--radio-rest-control-border-width",
        "value": "0.09375rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--radio-rest-indicator-colour",
        "value": "#005dba",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--radio-hover-control-background-colour",
        "value": "#ffffff",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--radio-hover-control-border-colour",
        "value": "#4d4f4f",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--radio-hover-control-border-width",
        "value": "0.09375rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--radio-hover-indicator-colour",
        "value": "#001d6e",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--radio-focus-control-background-colour",
        "value": "#ffffff",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--radio-focus-control-border-colour",
        "value": "#1d1d1b",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--radio-focus-control-border-width",
        "value": "0.1875rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--radio-focus-indicator-colour",
        "value": "#005dba",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--radio-error-control-background-colour",
        "value": "#ffffff",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--radio-error-control-border-colour",
        "value": "#c50b30",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--radio-error-control-border-width",
        "value": "0.09375rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--radio-error-control-focus-border-width",
        "value": "0.1875rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--radio-error-indicator-colour",
        "value": "#c50b30",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--radio-disabled-label-colour",
        "value": "#a6a7a7",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--radio-disabled-control-background-colour",
        "value": "#f4f4f4",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--radio-disabled-control-border-colour",
        "value": "#d3d3d3",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--radio-disabled-control-border-width",
        "value": "0.09375rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--radio-disabled-indicator-colour",
        "value": "#d3d3d3",
        "description": "",
        "presenter": "Color"
      }
    ]
  },
  {
    "label": "Segment",
    "titlePrefix": "Components/Forms/Segment",
    "tokens": [
      {
        "name": "--segment-control-common-background-colour",
        "value": "#f4f4f4",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--segment-control-common-border-colour",
        "value": "#858686",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--segment-control-common-border-radius",
        "value": "0.75rem",
        "description": "",
        "presenter": "BorderRadius"
      },
      {
        "name": "--segment-control-common-border-width",
        "value": "0.09375rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--segment-control-common-gap",
        "value": "0.25rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--segment-control-common-min-width",
        "value": "14.5rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--segment-control-common-padding-x",
        "value": "0.25rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--segment-control-common-padding-y",
        "value": "0.25rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--segment-control-focus-border-colour",
        "value": "#1d1d1b",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--segment-control-focus-border-width",
        "value": "0.1875rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--segment-control-error-border-colour",
        "value": "#c50b30",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--segment-control-error-border-width",
        "value": "0.09375rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--segment-control-error-focus-border-width",
        "value": "0.1875rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--segment-button-common-padding-x",
        "value": "0.5rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--segment-button-common-padding-y",
        "value": "0.5rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--segment-button-common-border-radius",
        "value": "0.5rem",
        "description": "",
        "presenter": "BorderRadius"
      },
      {
        "name": "--segment-button-common-min-height",
        "value": "2.25rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--segment-button-rest-background-colour",
        "value": "#ffffff",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--segment-button-rest-colour",
        "value": "#1d1d1b",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--segment-button-hover-background-colour",
        "value": "#aee1f7",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--segment-button-hover-colour",
        "value": "#1d1d1b",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--segment-button-active-background-colour",
        "value": "#005dba",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--segment-button-active-colour",
        "value": "#ffffff",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--segment-button-focus-background-colour",
        "value": "#ffffff",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--segment-button-focus-colour",
        "value": "#1d1d1b",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--segment-button-focus-border-colour",
        "value": "#1d1d1b",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--segment-button-focus-border-width",
        "value": "0.1875rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--segment-button-error-background-colour",
        "value": "#4d4f4f",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--segment-button-disabled-background-colour",
        "value": "#d3d3d3",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--segment-button-disabled-colour",
        "value": "#a6a7a7",
        "description": "",
        "presenter": "Color"
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
        "description": "",
        "presenter": "BorderRadius"
      },
      {
        "name": "--select-common-height",
        "value": "3rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--select-common-padding-x",
        "value": "1rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--select-common-padding-y",
        "value": "0.5rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--select-common-text-gap",
        "value": "0.5rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--select-common-button-gap",
        "value": "1rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--select-rest-background-colour",
        "value": "#ffffff",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--select-rest-border-colour",
        "value": "#858686",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--select-rest-colour",
        "value": "#1d1d1b",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--select-rest-border-width",
        "value": "0.09375rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--select-hover-background-colour",
        "value": "#ffffff",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--select-hover-border-colour",
        "value": "#4d4f4f",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--select-hover-colour",
        "value": "#1d1d1b",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--select-hover-border-width",
        "value": "0.09375rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--select-focus-background-colour",
        "value": "#ffffff",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--select-focus-border-colour",
        "value": "#1d1d1b",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--select-focus-colour",
        "value": "#1d1d1b",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--select-focus-border-width",
        "value": "0.1875rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--select-error-background-colour",
        "value": "#ffffff",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--select-error-border-colour",
        "value": "#c50b30",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--select-error-colour",
        "value": "#1d1d1b",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--select-error-border-width",
        "value": "0.09375rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--select-error-focus-border-width",
        "value": "0.1875rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--select-disabled-background-colour",
        "value": "#f4f4f4",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--select-disabled-border-colour",
        "value": "#d3d3d3",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--select-disabled-colour",
        "value": "#a6a7a7",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--select-disabled-border-width",
        "value": "0.09375rem",
        "description": "",
        "presenter": "Spacing"
      }
    ]
  },
  {
    "label": "Checkbox",
    "titlePrefix": "Components/Forms/Checkbox",
    "tokens": [
      {
        "name": "--checkbox-scale-sm-gap",
        "value": "1.75rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--checkbox-scale-sm-control-size",
        "value": "1rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--checkbox-scale-sm-indicator-size",
        "value": "1rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--checkbox-scale-lg-gap",
        "value": "2.25rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--checkbox-scale-lg-control-size",
        "value": "1.75rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--checkbox-scale-lg-indicator-size",
        "value": "1.75rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--checkbox-common-gap",
        "value": "0.75rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--checkbox-common-colour",
        "value": "#1d1d1b",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-common-border-radius",
        "value": "0.25rem",
        "description": "",
        "presenter": "BorderRadius"
      },
      {
        "name": "--checkbox-group-sm-gap",
        "value": "1rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--checkbox-group-lg-gap",
        "value": "1.25rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--checkbox-rest-control-background-colour",
        "value": "#ffffff",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-rest-control-border-colour",
        "value": "#858686",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-rest-control-border-width",
        "value": "0.09375rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--checkbox-rest-indicator-colour",
        "value": "#005dba",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-hover-control-background-colour",
        "value": "#ffffff",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-hover-control-border-colour",
        "value": "#4d4f4f",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-hover-control-border-width",
        "value": "0.09375rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--checkbox-hover-indicator-colour",
        "value": "#001d6e",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-focus-control-background-colour",
        "value": "#ffffff",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-focus-control-border-colour",
        "value": "#1d1d1b",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-focus-control-border-width",
        "value": "0.1875rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--checkbox-focus-indicator-colour",
        "value": "#005dba",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-error-control-background-colour",
        "value": "#ffffff",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-error-control-border-colour",
        "value": "#c50b30",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-error-control-border-width",
        "value": "0.09375rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--checkbox-error-control-focus-border-width",
        "value": "0.1875rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--checkbox-error-indicator-colour",
        "value": "#c50b30",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-disabled-label-colour",
        "value": "#a6a7a7",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-disabled-control-background-colour",
        "value": "#f4f4f4",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-disabled-control-border-colour",
        "value": "#d3d3d3",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-disabled-control-border-width",
        "value": "0.09375rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--checkbox-disabled-indicator-colour",
        "value": "#d3d3d3",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-disabled-indicator-background-colour",
        "value": "#d3d3d3",
        "description": "",
        "presenter": "Color"
      }
    ]
  },
  {
    "label": "Form Validation",
    "titlePrefix": "Components/Forms/Form validation",
    "tokens": [
      {
        "name": "--form-field-gap",
        "value": "1rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--label-and-hint-validation-message-colour",
        "value": "#1d1d1b",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--content-icon-size-sm",
        "value": "1.5rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--content-gap-inside-md",
        "value": "0.75rem",
        "description": "",
        "presenter": "Spacing"
      }
    ]
  },
  {
    "label": "Header",
    "titlePrefix": "Components/Header",
    "tokens": [
      {
        "name": "--header-container-background-colour",
        "value": "#ffffff",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--header-container-gap",
        "value": "1.75rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--header-container-logo-gap-sm",
        "value": "1rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--header-container-logo-gap-lg",
        "value": "1.25rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--header-container-min-width",
        "value": "20rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--header-container-padding-x",
        "value": "1rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--header-container-padding-y",
        "value": "0.5rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--header-container-max-height",
        "value": "5.5625rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--header-logo-container-max-width-sm",
        "value": "10.3125rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--header-logo-container-max-height-sm",
        "value": "2.75rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--header-logo-container-max-height-lg",
        "value": "4rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--header-logo-container-max-width-lg",
        "value": "14.5rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--header-logo-container-padding-bottom-lg",
        "value": "0.75rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--header-logo-container-padding-bottom-sm",
        "value": "0.5rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--header-logo-primary-max-height-sm",
        "value": "2.25rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--header-logo-primary-max-height-lg",
        "value": "3.25rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--header-logo-secondary-height-sm",
        "value": "1.5625rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--header-logo-secondary-height-lg",
        "value": "2.25rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--header-logo-secondary-max-width-sm",
        "value": "5.25rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--header-logo-secondary-max-width-lg",
        "value": "7.5rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--header-button-padding-default-x",
        "value": "0.75rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--header-button-padding-small-x",
        "value": "0.5rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--header-button-padding-right",
        "value": "0.75rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--header-button-padding-y",
        "value": "0.75rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--header-button-padding-bottom",
        "value": "0.75rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--header-button-border-radius",
        "value": "0.75rem",
        "description": "",
        "presenter": "BorderRadius"
      },
      {
        "name": "--header-button-border-width-focus",
        "value": "0.1875rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--header-button-icon-size",
        "value": "1.5rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--header-button-gap",
        "value": "0.5rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--header-button-text-label-height",
        "value": "1.375rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--header-button-text-icon-label-height",
        "value": "0.875rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--header-button-min-height",
        "value": "3rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--header-button-min-width",
        "value": "3rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--header-button-rest-background-colour",
        "value": "#ffffff",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--header-button-rest-colour",
        "value": "#1d1d1b",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--header-button-rest-hover-indicator",
        "value": "#ffffff",
        "description": "",
        "presenter": "Empty"
      },
      {
        "name": "--header-button-hover-background-colour",
        "value": "#aee1f7",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--header-button-hover-colour",
        "value": "#1d1d1b",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--header-button-hover-hover-indicator",
        "value": "#001d6e",
        "description": "",
        "presenter": "Empty"
      },
      {
        "name": "--header-button-active-background-colour",
        "value": "#005dba",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--header-button-active-colour",
        "value": "#ffffff",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--header-button-active-hover-indicator",
        "value": "#005dba",
        "description": "",
        "presenter": "Empty"
      },
      {
        "name": "--header-button-focus-background-colour",
        "value": "#ffffff",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--header-button-focus-border-colour",
        "value": "#ffffff",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--header-button-focus-colour",
        "value": "#1d1d1b",
        "description": "",
        "presenter": "Color"
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
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--link-menu-border-width",
        "value": "0.0625rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--link-menu-border-radius",
        "value": "1rem",
        "description": "",
        "presenter": "BorderRadius"
      },
      {
        "name": "--link-menu-item-padding-top",
        "value": "1rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--link-menu-item-padding-bottom",
        "value": "1rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--link-menu-item-padding-left",
        "value": "1rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--link-menu-item-padding-right",
        "value": "0.5rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--link-menu-item-gap",
        "value": "0.75rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--link-menu-item-rest-border-colour",
        "value": "#d3d3d3",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--link-menu-item-rest-border-width-bottom",
        "value": "0.0625rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--link-menu-item-rest-colour",
        "value": "#1d1d1b",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--link-menu-item-rest-colour-muted",
        "value": "#4d4f4f",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--link-menu-item-hover-background-colour",
        "value": "#aee1f7",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--link-menu-item-hover-border-colour",
        "value": "#001d6e",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--link-menu-item-hover-border-width-bottom",
        "value": "0.1875rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--link-menu-item-hover-colour",
        "value": "#1d1d1b",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--link-menu-item-hover-colour-muted",
        "value": "#1d1d1b",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--link-menu-item-hover-padding-right",
        "value": "0.5rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--link-menu-item-active-background-colour",
        "value": "#005dba",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--link-menu-item-active-border-width-bottom",
        "value": "0.0625rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--link-menu-item-active-border-colour",
        "value": "#ffffff",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--link-menu-item-active-colour",
        "value": "#ffffff",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--link-menu-item-active-colour-muted",
        "value": "#ffffff",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--link-menu-item-focus-border-colour",
        "value": "#1d1d1b",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--link-menu-item-focus-border-width",
        "value": "0.1875rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--link-menu-item-focus-colour",
        "value": "#1d1d1b",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--link-menu-item-focus-colour-muted",
        "value": "#1d1d1b",
        "description": "",
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
        "description": "",
        "presenter": "Spacing"
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
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--pagination-inside-gap",
        "value": "0.5rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--pagination-vertical-gap",
        "value": "1rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--pagination-horizontal-gap",
        "value": "1.75rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--pagination-page-common-hover-indicator-width",
        "value": "0.125rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--pagination-page-rest-background-colour",
        "value": "#ffffff",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--pagination-page-rest-colour",
        "value": "#1d1d1b",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--pagination-page-rest-hover-indicator-colour",
        "value": "#ffffff",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--pagination-page-hover-background-colour",
        "value": "#aee1f7",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--pagination-page-hover-hover-indicator-colour",
        "value": "#001d6e",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--pagination-page-hover-colour",
        "value": "#1d1d1b",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--pagination-page-active-background-colour",
        "value": "#005dba",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--pagination-page-active-colour",
        "value": "#ffffff",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--pagination-page-active-hover-indicator-colour",
        "value": "#005dba",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--pagination-page-focus-background-colour",
        "value": "#ffffff",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--pagination-page-focus-border-colour",
        "value": "#1d1d1b",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--pagination-page-focus-border-width",
        "value": "0.1875rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--pagination-page-focus-colour",
        "value": "#1d1d1b",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--pagination-page-focus-hover-indicator-colour",
        "value": "#ffffff",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--pagination-page-disabled-background-colour",
        "value": "#f4f4f4",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--pagination-page-disabled-colour",
        "value": "#d3d3d3",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--pagination-page-disabled-hover-indicator-colour",
        "value": "#f4f4f4",
        "description": "",
        "presenter": "Color"
      }
    ]
  },
  {
    "label": "Link",
    "titlePrefix": "Components/Link",
    "tokens": [
      {
        "name": "--link-primary-rest-colour",
        "value": "#005dba",
        "description": "Blue 600",
        "presenter": "Color"
      },
      {
        "name": "--link-primary-hover-colour",
        "value": "#003894",
        "description": "Blue 700",
        "presenter": "Color"
      },
      {
        "name": "--link-primary-visited-colour",
        "value": "#000a52",
        "description": "Blue 900",
        "presenter": "Color"
      },
      {
        "name": "--link-primary-active-colour",
        "value": "#000a52",
        "description": "Blue 900",
        "presenter": "Color"
      },
      {
        "name": "--link-primary-focus-colour",
        "value": "#000a52",
        "description": "Blue 900",
        "presenter": "Color"
      },
      {
        "name": "--link-primary-focus-border-width",
        "value": "0.1875rem",
        "description": "Focus border width",
        "presenter": "Spacing"
      },
      {
        "name": "--link-primary-focus-border-radius",
        "value": "0.125rem",
        "description": "Focus border radius",
        "presenter": "BorderRadius"
      },
      {
        "name": "--link-color",
        "value": "#005dba",
        "description": "Default link color",
        "presenter": "Color"
      },
      {
        "name": "--link-hover-color",
        "value": "#003894",
        "description": "Hover link color",
        "presenter": "Color"
      },
      {
        "name": "--link-visited-color",
        "value": "#000a52",
        "description": "Visited link color",
        "presenter": "Color"
      },
      {
        "name": "--link-active-color",
        "value": "#000a52",
        "description": "Active link color",
        "presenter": "Color"
      },
      {
        "name": "--link-focus-color",
        "value": "#000a52",
        "description": "Focus link color",
        "presenter": "Color"
      },
      {
        "name": "--link-gap",
        "value": "0.25rem",
        "description": "Gap between link text and icon",
        "presenter": "Spacing"
      },
      {
        "name": "--dark-foreground-link-color",
        "value": "#202020",
        "description": "Greyscale 900",
        "presenter": "Color"
      },
      {
        "name": "--dark-foreground-link-hover-color",
        "value": "#202020",
        "description": "Greyscale 900",
        "presenter": "Color"
      },
      {
        "name": "--dark-foreground-link-visited-color",
        "value": "#000000",
        "description": "Greyscale 1000",
        "presenter": "Color"
      },
      {
        "name": "--dark-foreground-link-active-color",
        "value": "#000000",
        "description": "Greyscale 1000",
        "presenter": "Color"
      },
      {
        "name": "--dark-foreground-link-active-bg-color",
        "value": "#000000",
        "description": "Greyscale 1000",
        "presenter": "Color"
      },
      {
        "name": "--dark-foreground-link-focus-color",
        "value": "#000000",
        "description": "Greyscale 1000",
        "presenter": "Color"
      },
      {
        "name": "--dark-foreground-link-focus-bg-color",
        "value": "#000000",
        "description": "Greyscale 1000",
        "presenter": "Color"
      },
      {
        "name": "--light-foreground-link-color",
        "value": "#ffffff",
        "description": "Greyscale 0",
        "presenter": "Color"
      },
      {
        "name": "--light-foreground-link-hover-color",
        "value": "#ffffff",
        "description": "Greyscale 0",
        "presenter": "Color"
      },
      {
        "name": "--light-foreground-link-visited-color",
        "value": "#ffffff",
        "description": "Greyscale 0",
        "presenter": "Color"
      },
      {
        "name": "--light-foreground-link-active-color",
        "value": "#ffffff",
        "description": "Greyscale 0",
        "presenter": "Color"
      },
      {
        "name": "--light-foreground-link-active-bg-color",
        "value": "#ffffff",
        "description": "Greyscale 0",
        "presenter": "Color"
      },
      {
        "name": "--light-foreground-link-focus-color",
        "value": "#ffffff",
        "description": "Greyscale 0",
        "presenter": "Color"
      },
      {
        "name": "--light-foreground-link-focus-bg-color",
        "value": "#ffffff",
        "description": "Greyscale 0",
        "presenter": "Color"
      },
      {
        "name": "--link-status-subtle-rest-colour",
        "value": "#202020",
        "description": "Greyscale 900",
        "presenter": "Color"
      },
      {
        "name": "--link-status-subtle-hover-colour",
        "value": "#202020",
        "description": "Greyscale 900",
        "presenter": "Color"
      },
      {
        "name": "--link-status-subtle-visited-colour",
        "value": "#000000",
        "description": "Greyscale 1000",
        "presenter": "Color"
      },
      {
        "name": "--link-status-subtle-active-colour",
        "value": "#000000",
        "description": "Greyscale 1000",
        "presenter": "Color"
      },
      {
        "name": "--link-status-subtle-focus-colour",
        "value": "#000000",
        "description": "Greyscale 1000",
        "presenter": "Color"
      },
      {
        "name": "--link-status-subtle-focus-border-width",
        "value": "0.1875rem",
        "description": "Focus border width",
        "presenter": "Spacing"
      },
      {
        "name": "--link-status-subtle-focus-border-radius",
        "value": "0.125rem",
        "description": "Focus border radius",
        "presenter": "BorderRadius"
      },
      {
        "name": "--link-status-bold-rest-colour",
        "value": "#ffffff",
        "description": "Greyscale 0",
        "presenter": "Color"
      },
      {
        "name": "--link-status-bold-hover-colour",
        "value": "#ffffff",
        "description": "Greyscale 0",
        "presenter": "Color"
      },
      {
        "name": "--link-status-bold-visited-colour",
        "value": "#ffffff",
        "description": "Greyscale 0",
        "presenter": "Color"
      },
      {
        "name": "--link-status-bold-active-colour",
        "value": "#ffffff",
        "description": "Greyscale 0",
        "presenter": "Color"
      },
      {
        "name": "--link-status-bold-focus-colour",
        "value": "#ffffff",
        "description": "Greyscale 0",
        "presenter": "Color"
      },
      {
        "name": "--link-status-bold-focus-border-width",
        "value": "0.1875rem",
        "description": "Focus border width",
        "presenter": "Spacing"
      },
      {
        "name": "--link-status-bold-focus-border-radius",
        "value": "0.125rem",
        "description": "Focus border radius",
        "presenter": "BorderRadius"
      }
    ]
  },
  {
    "label": "Text Input",
    "titlePrefix": "Patterns/Date input",
    "tokens": [
      {
        "name": "--text-input-common-border-radius",
        "value": "0.75rem",
        "description": "",
        "presenter": "BorderRadius"
      },
      {
        "name": "--text-input-common-height",
        "value": "3rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-common-padding-x",
        "value": "1rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-common-padding-y",
        "value": "0.5rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-common-text-gap",
        "value": "0.5rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-common-button-gap",
        "value": "0.5rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-common-addon-button-gap",
        "value": "1rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-rest-background-colour",
        "value": "#ffffff",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--text-input-rest-border-colour",
        "value": "#858686",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--text-input-rest-colour",
        "value": "#1d1d1b",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--text-input-rest-border-width",
        "value": "0.09375rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-hover-background-colour",
        "value": "#ffffff",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--text-input-hover-border-colour",
        "value": "#4d4f4f",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--text-input-hover-colour",
        "value": "#1d1d1b",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--text-input-hover-border-width",
        "value": "0.09375rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-focus-background-colour",
        "value": "#ffffff",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--text-input-focus-border-colour",
        "value": "#1d1d1b",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--text-input-focus-colour",
        "value": "#1d1d1b",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--text-input-focus-border-width",
        "value": "0.1875rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-error-background-colour",
        "value": "#ffffff",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--text-input-error-border-colour",
        "value": "#c50b30",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--text-input-error-colour",
        "value": "#1d1d1b",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--text-input-error-border-width",
        "value": "0.09375rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-error-focus-border-width",
        "value": "0.1875rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-disabled-background-colour",
        "value": "#f4f4f4",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--text-input-disabled-border-colour",
        "value": "#d3d3d3",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--text-input-disabled-colour",
        "value": "#a6a7a7",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--text-input-disabled-border-width",
        "value": "0.09375rem",
        "description": "",
        "presenter": "Spacing"
      }
    ]
  },
  {
    "label": "Text Input",
    "titlePrefix": "Patterns/Sort code",
    "tokens": [
      {
        "name": "--text-input-common-border-radius",
        "value": "0.75rem",
        "description": "",
        "presenter": "BorderRadius"
      },
      {
        "name": "--text-input-common-height",
        "value": "3rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-common-padding-x",
        "value": "1rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-common-padding-y",
        "value": "0.5rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-common-text-gap",
        "value": "0.5rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-common-button-gap",
        "value": "0.5rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-common-addon-button-gap",
        "value": "1rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-rest-background-colour",
        "value": "#ffffff",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--text-input-rest-border-colour",
        "value": "#858686",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--text-input-rest-colour",
        "value": "#1d1d1b",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--text-input-rest-border-width",
        "value": "0.09375rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-hover-background-colour",
        "value": "#ffffff",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--text-input-hover-border-colour",
        "value": "#4d4f4f",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--text-input-hover-colour",
        "value": "#1d1d1b",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--text-input-hover-border-width",
        "value": "0.09375rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-focus-background-colour",
        "value": "#ffffff",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--text-input-focus-border-colour",
        "value": "#1d1d1b",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--text-input-focus-colour",
        "value": "#1d1d1b",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--text-input-focus-border-width",
        "value": "0.1875rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-error-background-colour",
        "value": "#ffffff",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--text-input-error-border-colour",
        "value": "#c50b30",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--text-input-error-colour",
        "value": "#1d1d1b",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--text-input-error-border-width",
        "value": "0.09375rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-error-focus-border-width",
        "value": "0.1875rem",
        "description": "",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-disabled-background-colour",
        "value": "#f4f4f4",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--text-input-disabled-border-colour",
        "value": "#d3d3d3",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--text-input-disabled-colour",
        "value": "#a6a7a7",
        "description": "",
        "presenter": "Color"
      },
      {
        "name": "--text-input-disabled-border-width",
        "value": "0.09375rem",
        "description": "",
        "presenter": "Spacing"
      }
    ]
  }
];

export default tokenSets;
