const tokenSets = [
  {
    "label": "Inline Message",
    "titlePrefix": "Components/Inline message (Alert)",
    "tokens": [
      {
        "name": "--inline-message-background-colour",
        "value": "#f4f4f4",
        "description": "Inline Message Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--inline-message-border-radius",
        "value": "0.75rem",
        "description": "Inline Message Border Radius",
        "presenter": "BorderRadius"
      },
      {
        "name": "--inline-message-gap",
        "value": "0.75rem",
        "description": "Inline Message Gap",
        "presenter": "Spacing"
      },
      {
        "name": "--inline-message-icon-colour",
        "value": "#1d1d1b",
        "description": "Inline Message Icon Colour",
        "presenter": "Color"
      },
      {
        "name": "--inline-message-padding-x",
        "value": "0.75rem",
        "description": "Inline Message Padding X",
        "presenter": "Spacing"
      },
      {
        "name": "--inline-message-padding-y",
        "value": "0.75rem",
        "description": "Inline Message Padding Y",
        "presenter": "Spacing"
      },
      {
        "name": "--inline-message-text-colour",
        "value": "#1d1d1b",
        "description": "Inline Message Text Colour",
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
        "description": "Banner Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--banner-gap",
        "value": "0.75rem",
        "description": "Banner Gap",
        "presenter": "Spacing"
      },
      {
        "name": "--banner-icon-colour",
        "value": "#ffffff",
        "description": "Banner Icon Colour",
        "presenter": "Color"
      },
      {
        "name": "--banner-padding-x",
        "value": "1rem",
        "description": "Banner Padding X",
        "presenter": "Spacing"
      },
      {
        "name": "--banner-padding-y",
        "value": "0.75rem",
        "description": "Banner Padding Y",
        "presenter": "Spacing"
      },
      {
        "name": "--banner-text-colour",
        "value": "#ffffff",
        "description": "Banner Text Colour",
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
        "description": "Breadcrumb Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--breadcrumb-border-width",
        "value": "0.0625rem",
        "description": "Breadcrumb Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--breadcrumb-gap",
        "value": "0.5rem",
        "description": "Breadcrumb Gap",
        "presenter": "Spacing"
      },
      {
        "name": "--breadcrumb-min-width",
        "value": "20rem",
        "description": "Breadcrumb Min Width",
        "presenter": "Spacing"
      },
      {
        "name": "--breadcrumb-padding-x",
        "value": "1rem",
        "description": "Breadcrumb Padding X",
        "presenter": "Spacing"
      },
      {
        "name": "--breadcrumb-padding-y",
        "value": "0.75rem",
        "description": "Breadcrumb Padding Y",
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
        "description": "Button Border Radius",
        "presenter": "BorderRadius"
      },
      {
        "name": "--button-border-width",
        "value": "0.09375rem",
        "description": "Button Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--button-border-width-focus",
        "value": "0.1875rem",
        "description": "Button Border Width Focus",
        "presenter": "Spacing"
      },
      {
        "name": "--button-common-icon-only-min-height",
        "value": "3rem",
        "description": "Button Common Icon Only Min Height",
        "presenter": "Spacing"
      },
      {
        "name": "--button-common-icon-only-min-width",
        "value": "3rem",
        "description": "Button Common Icon Only Min Width",
        "presenter": "Spacing"
      },
      {
        "name": "--button-common-icon-only-padding-x",
        "value": "0.75rem",
        "description": "Button Common Icon Only Padding X",
        "presenter": "Spacing"
      },
      {
        "name": "--button-common-icon-only-padding-y",
        "value": "0.75rem",
        "description": "Button Common Icon Only Padding Y",
        "presenter": "Spacing"
      },
      {
        "name": "--button-common-labelled-min-height",
        "value": "3rem",
        "description": "Button Common Labelled Min Height",
        "presenter": "Spacing"
      },
      {
        "name": "--button-common-labelled-min-width",
        "value": "3rem",
        "description": "Button Common Labelled Min Width",
        "presenter": "Spacing"
      },
      {
        "name": "--button-common-labelled-padding-x",
        "value": "1rem",
        "description": "Button Common Labelled Padding X",
        "presenter": "Spacing"
      },
      {
        "name": "--button-common-labelled-padding-y",
        "value": "0.75rem",
        "description": "Button Common Labelled Padding Y",
        "presenter": "Spacing"
      },
      {
        "name": "--button-gap",
        "value": "0.5rem",
        "description": "Button Gap",
        "presenter": "Spacing"
      },
      {
        "name": "--button-group-gap",
        "value": "1rem",
        "description": "Button Group Gap",
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
        "description": "Button Primary Active Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--button-primary-active-border-colour",
        "value": "#000039",
        "description": "Button Primary Active Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--button-primary-active-colour",
        "value": "#ffffff",
        "description": "Button Primary Active Colour",
        "presenter": "Color"
      },
      {
        "name": "--button-primary-disabled-background-colour",
        "value": "#d3d3d3",
        "description": "Button Primary Disabled Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--button-primary-disabled-border-colour",
        "value": "#d3d3d3",
        "description": "Button Primary Disabled Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--button-primary-disabled-colour",
        "value": "#7a7b7b",
        "description": "Button Primary Disabled Colour",
        "presenter": "Color"
      },
      {
        "name": "--button-primary-focus-background-colour",
        "value": "#005dba",
        "description": "Button Primary Focus Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--button-primary-focus-colour",
        "value": "#ffffff",
        "description": "Button Primary Focus Colour",
        "presenter": "Color"
      },
      {
        "name": "--button-primary-hover-background-colour",
        "value": "#001d6e",
        "description": "Button Primary Hover Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--button-primary-hover-border-colour",
        "value": "#001d6e",
        "description": "Button Primary Hover Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--button-primary-hover-colour",
        "value": "#ffffff",
        "description": "Button Primary Hover Colour",
        "presenter": "Color"
      },
      {
        "name": "--button-primary-rest-background-colour",
        "value": "#005dba",
        "description": "Button Primary Rest Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--button-primary-rest-border-colour",
        "value": "#005dba",
        "description": "Button Primary Rest Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--button-primary-rest-colour",
        "value": "#ffffff",
        "description": "Button Primary Rest Colour",
        "presenter": "Color"
      },
      {
        "name": "--button-secondary-active-background-colour",
        "value": "#000039",
        "description": "Button Secondary Active Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--button-secondary-active-border-colour",
        "value": "#000039",
        "description": "Button Secondary Active Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--button-secondary-active-colour",
        "value": "#ffffff",
        "description": "Button Secondary Active Colour",
        "presenter": "Color"
      },
      {
        "name": "--button-secondary-disabled-background-colour",
        "value": "#d3d3d3",
        "description": "Button Secondary Disabled Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--button-secondary-disabled-border-colour",
        "value": "#d3d3d3",
        "description": "Button Secondary Disabled Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--button-secondary-disabled-colour",
        "value": "#7a7b7b",
        "description": "Button Secondary Disabled Colour",
        "presenter": "Color"
      },
      {
        "name": "--button-secondary-focus-background-colour",
        "value": "#ffffff",
        "description": "Button Secondary Focus Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--button-secondary-focus-border-colour",
        "value": "#1d1d1b",
        "description": "Button Secondary Focus Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--button-secondary-focus-colour",
        "value": "#1d1d1b",
        "description": "Button Secondary Focus Colour",
        "presenter": "Color"
      },
      {
        "name": "--button-secondary-hover-background-colour",
        "value": "#001d6e",
        "description": "Button Secondary Hover Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--button-secondary-hover-border-colour",
        "value": "#001d6e",
        "description": "Button Secondary Hover Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--button-secondary-hover-colour",
        "value": "#ffffff",
        "description": "Button Secondary Hover Colour",
        "presenter": "Color"
      },
      {
        "name": "--button-secondary-rest-background-colour",
        "value": "#ffffff",
        "description": "Button Secondary Rest Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--button-secondary-rest-border-colour",
        "value": "#1d1d1b",
        "description": "Button Secondary Rest Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--button-secondary-rest-colour",
        "value": "#1d1d1b",
        "description": "Button Secondary Rest Colour",
        "presenter": "Color"
      },
      {
        "name": "--button-status-active-background-colour",
        "value": "#1d1d1b",
        "description": "Button Status Active Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--button-status-active-border-colour",
        "value": "#1d1d1b",
        "description": "Button Status Active Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--button-status-active-colour",
        "value": "#ffffff",
        "description": "Button Status Active Colour",
        "presenter": "Color"
      },
      {
        "name": "--button-status-disabled-background-colour",
        "value": "#bcbdbd",
        "description": "Button Status Disabled Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--button-status-disabled-border-colour",
        "value": "#bcbdbd",
        "description": "Button Status Disabled Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--button-status-disabled-colour",
        "value": "#858686",
        "description": "Button Status Disabled Colour",
        "presenter": "Color"
      },
      {
        "name": "--button-status-focus-background-colour",
        "value": "#4d4f4f",
        "description": "Button Status Focus Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--button-status-focus-colour",
        "value": "#ffffff",
        "description": "Button Status Focus Colour",
        "presenter": "Color"
      },
      {
        "name": "--button-status-hover-background-colour",
        "value": "#343634",
        "description": "Button Status Hover Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--button-status-hover-border-colour",
        "value": "#343634",
        "description": "Button Status Hover Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--button-status-hover-colour",
        "value": "#ffffff",
        "description": "Button Status Hover Colour",
        "presenter": "Color"
      },
      {
        "name": "--button-status-rest-background-colour",
        "value": "#4d4f4f",
        "description": "Button Status Rest Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--button-status-rest-border-colour",
        "value": "#4d4f4f",
        "description": "Button Status Rest Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--button-status-rest-colour",
        "value": "#ffffff",
        "description": "Button Status Rest Colour",
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
        "description": "Content Area Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--content-area-border-colour",
        "value": "#d3d3d3",
        "description": "Content Area Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--content-area-border-radius",
        "value": "1.75rem",
        "description": "Content Area Border Radius",
        "presenter": "BorderRadius"
      },
      {
        "name": "--content-area-border-width",
        "value": "0.0625rem",
        "description": "Content Area Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--content-area-colour",
        "value": "#1d1d1b",
        "description": "Content Area Colour",
        "presenter": "Color"
      },
      {
        "name": "--content-area-gap",
        "value": "1.75rem",
        "description": "Content Area Gap",
        "presenter": "Spacing"
      },
      {
        "name": "--content-area-padding-x",
        "value": "1.75rem",
        "description": "Content Area Padding X",
        "presenter": "Spacing"
      },
      {
        "name": "--content-area-padding-y",
        "value": "1.25rem",
        "description": "Content Area Padding Y",
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
        "description": "Data Point Gap",
        "presenter": "Spacing"
      },
      {
        "name": "--data-point-group-column-gap",
        "value": "2.25rem",
        "description": "Data Point Group Column Gap",
        "presenter": "Spacing"
      },
      {
        "name": "--data-point-group-row-gap",
        "value": "2.25rem",
        "description": "Data Point Group Row Gap",
        "presenter": "Spacing"
      },
      {
        "name": "--data-point-label-colour",
        "value": "#4d4f4f",
        "description": "Data Point Label Colour",
        "presenter": "Color"
      },
      {
        "name": "--data-point-value-colour",
        "value": "#1d1d1b",
        "description": "Data Point Value Colour",
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
        "description": "Details Active Padding Bottom",
        "presenter": "Spacing"
      },
      {
        "name": "--details-border-radius",
        "value": "0.75rem",
        "description": "Details Border Radius",
        "presenter": "BorderRadius"
      },
      {
        "name": "--details-focus-indicator-border-radius",
        "value": "0.5rem",
        "description": "Details Focus Indicator Border Radius",
        "presenter": "BorderRadius"
      },
      {
        "name": "--details-focus-indicator-border-width",
        "value": "0.1875rem",
        "description": "Details Focus Indicator Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--details-focus-indicator-colour",
        "value": "#1d1d1b",
        "description": "Details Focus Indicator Colour",
        "presenter": "Color"
      },
      {
        "name": "--details-gap",
        "value": "0.75rem",
        "description": "Details Gap",
        "presenter": "Spacing"
      },
      {
        "name": "--details-padding-x",
        "value": "0.75rem",
        "description": "Details Padding X",
        "presenter": "Spacing"
      },
      {
        "name": "--details-padding-y",
        "value": "0.75rem",
        "description": "Details Padding Y",
        "presenter": "Spacing"
      },
      {
        "name": "--details-status-background-colour",
        "value": "#f4f4f4",
        "description": "Details Status Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--details-status-icon-colour",
        "value": "#1d1d1b",
        "description": "Details Status Icon Colour",
        "presenter": "Color"
      },
      {
        "name": "--details-status-text-colour",
        "value": "#1d1d1b",
        "description": "Details Status Text Colour",
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
        "description": "Footer Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--footer-border-colour",
        "value": "#d3d3d3",
        "description": "Footer Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--footer-border-width",
        "value": "0.0625rem",
        "description": "Footer Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--footer-gap",
        "value": "1.75rem",
        "description": "Footer Gap",
        "presenter": "Spacing"
      },
      {
        "name": "--footer-link-group-link-gap",
        "value": "1rem",
        "description": "Footer Link Group Link Gap",
        "presenter": "Spacing"
      },
      {
        "name": "--footer-link-group-social-gap",
        "value": "0.75rem",
        "description": "Footer Link Group Social Gap",
        "presenter": "Spacing"
      },
      {
        "name": "--footer-logo-gap",
        "value": "2.25rem",
        "description": "Footer Logo Gap",
        "presenter": "Spacing"
      },
      {
        "name": "--footer-logo-size",
        "value": "5rem",
        "description": "Footer Logo Size",
        "presenter": "Spacing"
      },
      {
        "name": "--footer-min-width",
        "value": "20rem",
        "description": "Footer Min Width",
        "presenter": "Spacing"
      },
      {
        "name": "--footer-padding-x",
        "value": "1rem",
        "description": "Footer Padding X",
        "presenter": "Spacing"
      },
      {
        "name": "--footer-padding-y",
        "value": "1.75rem",
        "description": "Footer Padding Y",
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
        "description": "Text Input Common Addon Button Gap",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-common-border-radius",
        "value": "0.75rem",
        "description": "Text Input Common Border Radius",
        "presenter": "BorderRadius"
      },
      {
        "name": "--text-input-common-button-gap",
        "value": "0.5rem",
        "description": "Text Input Common Button Gap",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-common-height",
        "value": "3rem",
        "description": "Text Input Common Height",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-common-padding-x",
        "value": "1rem",
        "description": "Text Input Common Padding X",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-common-padding-y",
        "value": "0.5rem",
        "description": "Text Input Common Padding Y",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-common-text-gap",
        "value": "0.5rem",
        "description": "Text Input Common Text Gap",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-disabled-background-colour",
        "value": "#f4f4f4",
        "description": "Text Input Disabled Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--text-input-disabled-border-colour",
        "value": "#d3d3d3",
        "description": "Text Input Disabled Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--text-input-disabled-border-width",
        "value": "0.09375rem",
        "description": "Text Input Disabled Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-disabled-colour",
        "value": "#a6a7a7",
        "description": "Text Input Disabled Colour",
        "presenter": "Color"
      },
      {
        "name": "--text-input-error-background-colour",
        "value": "#ffffff",
        "description": "Text Input Error Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--text-input-error-border-colour",
        "value": "#c50b30",
        "description": "Text Input Error Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--text-input-error-border-width",
        "value": "0.09375rem",
        "description": "Text Input Error Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-error-colour",
        "value": "#1d1d1b",
        "description": "Text Input Error Colour",
        "presenter": "Color"
      },
      {
        "name": "--text-input-error-focus-border-width",
        "value": "0.1875rem",
        "description": "Text Input Error Focus Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-focus-background-colour",
        "value": "#ffffff",
        "description": "Text Input Focus Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--text-input-focus-border-colour",
        "value": "#1d1d1b",
        "description": "Text Input Focus Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--text-input-focus-border-width",
        "value": "0.1875rem",
        "description": "Text Input Focus Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-focus-colour",
        "value": "#1d1d1b",
        "description": "Text Input Focus Colour",
        "presenter": "Color"
      },
      {
        "name": "--text-input-hover-background-colour",
        "value": "#ffffff",
        "description": "Text Input Hover Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--text-input-hover-border-colour",
        "value": "#4d4f4f",
        "description": "Text Input Hover Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--text-input-hover-border-width",
        "value": "0.09375rem",
        "description": "Text Input Hover Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-hover-colour",
        "value": "#1d1d1b",
        "description": "Text Input Hover Colour",
        "presenter": "Color"
      },
      {
        "name": "--text-input-rest-background-colour",
        "value": "#ffffff",
        "description": "Text Input Rest Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--text-input-rest-border-colour",
        "value": "#858686",
        "description": "Text Input Rest Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--text-input-rest-border-width",
        "value": "0.09375rem",
        "description": "Text Input Rest Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-rest-colour",
        "value": "#1d1d1b",
        "description": "Text Input Rest Colour",
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
        "description": "Radio Common Border Radius",
        "presenter": "BorderRadius"
      },
      {
        "name": "--radio-common-colour",
        "value": "#1d1d1b",
        "description": "Radio Common Colour",
        "presenter": "Color"
      },
      {
        "name": "--radio-disabled-control-background-colour",
        "value": "#f4f4f4",
        "description": "Radio Disabled Control Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--radio-disabled-control-border-colour",
        "value": "#d3d3d3",
        "description": "Radio Disabled Control Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--radio-disabled-control-border-width",
        "value": "0.09375rem",
        "description": "Radio Disabled Control Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--radio-disabled-indicator-colour",
        "value": "#d3d3d3",
        "description": "Radio Disabled Indicator Colour",
        "presenter": "Color"
      },
      {
        "name": "--radio-disabled-label-colour",
        "value": "#a6a7a7",
        "description": "Radio Disabled Label Colour",
        "presenter": "Color"
      },
      {
        "name": "--radio-error-control-background-colour",
        "value": "#ffffff",
        "description": "Radio Error Control Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--radio-error-control-border-colour",
        "value": "#c50b30",
        "description": "Radio Error Control Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--radio-error-control-border-width",
        "value": "0.09375rem",
        "description": "Radio Error Control Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--radio-error-control-focus-border-width",
        "value": "0.1875rem",
        "description": "Radio Error Control Focus Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--radio-error-indicator-colour",
        "value": "#c50b30",
        "description": "Radio Error Indicator Colour",
        "presenter": "Color"
      },
      {
        "name": "--radio-focus-control-background-colour",
        "value": "#ffffff",
        "description": "Radio Focus Control Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--radio-focus-control-border-colour",
        "value": "#1d1d1b",
        "description": "Radio Focus Control Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--radio-focus-control-border-width",
        "value": "0.1875rem",
        "description": "Radio Focus Control Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--radio-focus-indicator-colour",
        "value": "#005dba",
        "description": "Radio Focus Indicator Colour",
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
        "description": "Radio Hover Control Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--radio-hover-control-border-colour",
        "value": "#4d4f4f",
        "description": "Radio Hover Control Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--radio-hover-control-border-width",
        "value": "0.09375rem",
        "description": "Radio Hover Control Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--radio-hover-indicator-colour",
        "value": "#001d6e",
        "description": "Radio Hover Indicator Colour",
        "presenter": "Color"
      },
      {
        "name": "--radio-rest-control-background-colour",
        "value": "#ffffff",
        "description": "Radio Rest Control Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--radio-rest-control-border-colour",
        "value": "#858686",
        "description": "Radio Rest Control Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--radio-rest-control-border-width",
        "value": "0.09375rem",
        "description": "Radio Rest Control Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--radio-rest-indicator-colour",
        "value": "#005dba",
        "description": "Radio Rest Indicator Colour",
        "presenter": "Color"
      },
      {
        "name": "--radio-scale-lg-control-size",
        "value": "1.75rem",
        "description": "Radio Scale Lg Control Size",
        "presenter": "Spacing"
      },
      {
        "name": "--radio-scale-lg-gap",
        "value": "2.25rem",
        "description": "Radio Scale Lg Gap",
        "presenter": "Spacing"
      },
      {
        "name": "--radio-scale-lg-indicator-size",
        "value": "1rem",
        "description": "Radio Scale Lg Indicator Size",
        "presenter": "Spacing"
      },
      {
        "name": "--radio-scale-sm-control-size",
        "value": "1rem",
        "description": "Radio Scale Sm Control Size",
        "presenter": "Spacing"
      },
      {
        "name": "--radio-scale-sm-gap",
        "value": "1.75rem",
        "description": "Radio Scale Sm Gap",
        "presenter": "Spacing"
      },
      {
        "name": "--radio-scale-sm-indicator-size",
        "value": "0.5rem",
        "description": "Radio Scale Sm Indicator Size",
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
        "description": "Segment Control Common Min Width",
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
        "description": "Segment Control Error Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--segment-control-error-focus-border-width",
        "value": "0.1875rem",
        "description": "Segment Control Error Focus Border Width",
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
        "description": "Select Common Border Radius",
        "presenter": "BorderRadius"
      },
      {
        "name": "--select-common-button-gap",
        "value": "1rem",
        "description": "Select Common Button Gap",
        "presenter": "Spacing"
      },
      {
        "name": "--select-common-height",
        "value": "3rem",
        "description": "Select Common Height",
        "presenter": "Spacing"
      },
      {
        "name": "--select-common-padding-x",
        "value": "1rem",
        "description": "Select Common Padding X",
        "presenter": "Spacing"
      },
      {
        "name": "--select-common-padding-y",
        "value": "0.5rem",
        "description": "Select Common Padding Y",
        "presenter": "Spacing"
      },
      {
        "name": "--select-common-text-gap",
        "value": "0.5rem",
        "description": "Select Common Text Gap",
        "presenter": "Spacing"
      },
      {
        "name": "--select-disabled-background-colour",
        "value": "#f4f4f4",
        "description": "Select Disabled Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--select-disabled-border-colour",
        "value": "#d3d3d3",
        "description": "Select Disabled Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--select-disabled-border-width",
        "value": "0.09375rem",
        "description": "Select Disabled Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--select-disabled-colour",
        "value": "#a6a7a7",
        "description": "Select Disabled Colour",
        "presenter": "Color"
      },
      {
        "name": "--select-error-background-colour",
        "value": "#ffffff",
        "description": "Select Error Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--select-error-border-colour",
        "value": "#c50b30",
        "description": "Select Error Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--select-error-border-width",
        "value": "0.09375rem",
        "description": "Select Error Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--select-error-colour",
        "value": "#1d1d1b",
        "description": "Select Error Colour",
        "presenter": "Color"
      },
      {
        "name": "--select-error-focus-border-width",
        "value": "0.1875rem",
        "description": "Select Error Focus Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--select-focus-background-colour",
        "value": "#ffffff",
        "description": "Select Focus Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--select-focus-border-colour",
        "value": "#1d1d1b",
        "description": "Select Focus Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--select-focus-border-width",
        "value": "0.1875rem",
        "description": "Select Focus Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--select-focus-colour",
        "value": "#1d1d1b",
        "description": "Select Focus Colour",
        "presenter": "Color"
      },
      {
        "name": "--select-hover-background-colour",
        "value": "#ffffff",
        "description": "Select Hover Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--select-hover-border-colour",
        "value": "#4d4f4f",
        "description": "Select Hover Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--select-hover-border-width",
        "value": "0.09375rem",
        "description": "Select Hover Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--select-hover-colour",
        "value": "#1d1d1b",
        "description": "Select Hover Colour",
        "presenter": "Color"
      },
      {
        "name": "--select-rest-background-colour",
        "value": "#ffffff",
        "description": "Select Rest Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--select-rest-border-colour",
        "value": "#858686",
        "description": "Select Rest Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--select-rest-border-width",
        "value": "0.09375rem",
        "description": "Select Rest Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--select-rest-colour",
        "value": "#1d1d1b",
        "description": "Select Rest Colour",
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
        "description": "Checkbox Common Border Radius",
        "presenter": "BorderRadius"
      },
      {
        "name": "--checkbox-common-colour",
        "value": "#1d1d1b",
        "description": "Checkbox Common Colour",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-common-gap",
        "value": "0.75rem",
        "description": "Checkbox Common Gap",
        "presenter": "Spacing"
      },
      {
        "name": "--checkbox-disabled-control-background-colour",
        "value": "#f4f4f4",
        "description": "Checkbox Disabled Control Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-disabled-control-border-colour",
        "value": "#d3d3d3",
        "description": "Checkbox Disabled Control Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-disabled-control-border-width",
        "value": "0.09375rem",
        "description": "Checkbox Disabled Control Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--checkbox-disabled-indicator-background-colour",
        "value": "#d3d3d3",
        "description": "Checkbox Disabled Indicator Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-disabled-indicator-colour",
        "value": "#d3d3d3",
        "description": "Checkbox Disabled Indicator Colour",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-disabled-label-colour",
        "value": "#a6a7a7",
        "description": "Checkbox Disabled Label Colour",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-error-control-background-colour",
        "value": "#ffffff",
        "description": "Checkbox Error Control Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-error-control-border-colour",
        "value": "#c50b30",
        "description": "Checkbox Error Control Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-error-control-border-width",
        "value": "0.09375rem",
        "description": "Checkbox Error Control Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--checkbox-error-control-focus-border-width",
        "value": "0.1875rem",
        "description": "Checkbox Error Control Focus Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--checkbox-error-indicator-colour",
        "value": "#c50b30",
        "description": "Checkbox Error Indicator Colour",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-focus-control-background-colour",
        "value": "#ffffff",
        "description": "Checkbox Focus Control Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-focus-control-border-colour",
        "value": "#1d1d1b",
        "description": "Checkbox Focus Control Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-focus-control-border-width",
        "value": "0.1875rem",
        "description": "Checkbox Focus Control Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--checkbox-focus-indicator-colour",
        "value": "#005dba",
        "description": "Checkbox Focus Indicator Colour",
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
        "description": "Checkbox Hover Control Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-hover-control-border-colour",
        "value": "#4d4f4f",
        "description": "Checkbox Hover Control Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-hover-control-border-width",
        "value": "0.09375rem",
        "description": "Checkbox Hover Control Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--checkbox-hover-indicator-colour",
        "value": "#001d6e",
        "description": "Checkbox Hover Indicator Colour",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-rest-control-background-colour",
        "value": "#ffffff",
        "description": "Checkbox Rest Control Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-rest-control-border-colour",
        "value": "#858686",
        "description": "Checkbox Rest Control Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-rest-control-border-width",
        "value": "0.09375rem",
        "description": "Checkbox Rest Control Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--checkbox-rest-indicator-colour",
        "value": "#005dba",
        "description": "Checkbox Rest Indicator Colour",
        "presenter": "Color"
      },
      {
        "name": "--checkbox-scale-lg-control-size",
        "value": "1.75rem",
        "description": "Checkbox Scale Lg Control Size",
        "presenter": "Spacing"
      },
      {
        "name": "--checkbox-scale-lg-gap",
        "value": "2.25rem",
        "description": "Checkbox Scale Lg Gap",
        "presenter": "Spacing"
      },
      {
        "name": "--checkbox-scale-lg-indicator-size",
        "value": "1.75rem",
        "description": "Checkbox Scale Lg Indicator Size",
        "presenter": "Spacing"
      },
      {
        "name": "--checkbox-scale-sm-control-size",
        "value": "1rem",
        "description": "Checkbox Scale Sm Control Size",
        "presenter": "Spacing"
      },
      {
        "name": "--checkbox-scale-sm-gap",
        "value": "1.75rem",
        "description": "Checkbox Scale Sm Gap",
        "presenter": "Spacing"
      },
      {
        "name": "--checkbox-scale-sm-indicator-size",
        "value": "1rem",
        "description": "Checkbox Scale Sm Indicator Size",
        "presenter": "Spacing"
      }
    ]
  },
  {
    "label": "Form Validation",
    "titlePrefix": "Components/Forms/Form validation",
    "tokens": []
  },
  {
    "label": "Header",
    "titlePrefix": "Components/Header",
    "tokens": [
      {
        "name": "--header-button-active-background-colour",
        "value": "#005dba",
        "description": "Header Button Active Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--header-button-active-colour",
        "value": "#ffffff",
        "description": "Header Button Active Colour",
        "presenter": "Color"
      },
      {
        "name": "--header-button-active-hover-indicator",
        "value": "#005dba",
        "description": "Header Button Active Hover Indicator",
        "presenter": "Empty"
      },
      {
        "name": "--header-button-border-radius",
        "value": "0.75rem",
        "description": "Header Button Border Radius",
        "presenter": "BorderRadius"
      },
      {
        "name": "--header-button-border-width-focus",
        "value": "0.1875rem",
        "description": "Header Button Border Width Focus",
        "presenter": "Spacing"
      },
      {
        "name": "--header-button-focus-background-colour",
        "value": "#ffffff",
        "description": "Header Button Focus Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--header-button-focus-border-colour",
        "value": "#ffffff",
        "description": "Header Button Focus Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--header-button-focus-colour",
        "value": "#1d1d1b",
        "description": "Header Button Focus Colour",
        "presenter": "Color"
      },
      {
        "name": "--header-button-gap",
        "value": "0.5rem",
        "description": "Header Button Gap",
        "presenter": "Spacing"
      },
      {
        "name": "--header-button-hover-background-colour",
        "value": "#aee1f7",
        "description": "Header Button Hover Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--header-button-hover-colour",
        "value": "#1d1d1b",
        "description": "Header Button Hover Colour",
        "presenter": "Color"
      },
      {
        "name": "--header-button-hover-hover-indicator",
        "value": "#001d6e",
        "description": "Header Button Hover Hover Indicator",
        "presenter": "Empty"
      },
      {
        "name": "--header-button-icon-size",
        "value": "1.5rem",
        "description": "Header Button Icon Size",
        "presenter": "Spacing"
      },
      {
        "name": "--header-button-min-height",
        "value": "3rem",
        "description": "Header Button Min Height",
        "presenter": "Spacing"
      },
      {
        "name": "--header-button-min-width",
        "value": "3rem",
        "description": "Header Button Min Width",
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
        "description": "Header Button Padding Default X",
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
        "description": "Header Button Padding Small X",
        "presenter": "Spacing"
      },
      {
        "name": "--header-button-padding-y",
        "value": "0.75rem",
        "description": "Header Button Padding Y",
        "presenter": "Spacing"
      },
      {
        "name": "--header-button-rest-background-colour",
        "value": "#ffffff",
        "description": "Header Button Rest Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--header-button-rest-colour",
        "value": "#1d1d1b",
        "description": "Header Button Rest Colour",
        "presenter": "Color"
      },
      {
        "name": "--header-button-rest-hover-indicator",
        "value": "#ffffff",
        "description": "Header Button Rest Hover Indicator",
        "presenter": "Empty"
      },
      {
        "name": "--header-button-text-icon-label-height",
        "value": "0.875rem",
        "description": "Header Button Text Icon Label Height",
        "presenter": "Spacing"
      },
      {
        "name": "--header-button-text-label-height",
        "value": "1.375rem",
        "description": "Header Button Text Label Height",
        "presenter": "Spacing"
      },
      {
        "name": "--header-container-background-colour",
        "value": "#ffffff",
        "description": "Header Container Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--header-container-gap",
        "value": "1.75rem",
        "description": "Header Container Gap",
        "presenter": "Spacing"
      },
      {
        "name": "--header-container-logo-gap-lg",
        "value": "1.25rem",
        "description": "Header Container Logo Gap Lg",
        "presenter": "Spacing"
      },
      {
        "name": "--header-container-logo-gap-sm",
        "value": "1rem",
        "description": "Header Container Logo Gap Sm",
        "presenter": "Spacing"
      },
      {
        "name": "--header-container-max-height",
        "value": "5.5625rem",
        "description": "Header Container Max Height",
        "presenter": "Spacing"
      },
      {
        "name": "--header-container-min-width",
        "value": "20rem",
        "description": "Header Container Min Width",
        "presenter": "Spacing"
      },
      {
        "name": "--header-container-padding-x",
        "value": "1rem",
        "description": "Header Container Padding X",
        "presenter": "Spacing"
      },
      {
        "name": "--header-container-padding-y",
        "value": "0.5rem",
        "description": "Header Container Padding Y",
        "presenter": "Spacing"
      },
      {
        "name": "--header-logo-container-max-height-lg",
        "value": "4rem",
        "description": "Header Logo Container Max Height Lg",
        "presenter": "Spacing"
      },
      {
        "name": "--header-logo-container-max-height-sm",
        "value": "2.75rem",
        "description": "Header Logo Container Max Height Sm",
        "presenter": "Spacing"
      },
      {
        "name": "--header-logo-container-max-width-lg",
        "value": "14.5rem",
        "description": "Header Logo Container Max Width Lg",
        "presenter": "Spacing"
      },
      {
        "name": "--header-logo-container-max-width-sm",
        "value": "10.3125rem",
        "description": "Header Logo Container Max Width Sm",
        "presenter": "Spacing"
      },
      {
        "name": "--header-logo-container-padding-bottom-lg",
        "value": "0.75rem",
        "description": "Header Logo Container Padding Bottom Lg",
        "presenter": "Spacing"
      },
      {
        "name": "--header-logo-container-padding-bottom-sm",
        "value": "0.5rem",
        "description": "Header Logo Container Padding Bottom Sm",
        "presenter": "Spacing"
      },
      {
        "name": "--header-logo-primary-max-height-lg",
        "value": "3.25rem",
        "description": "Header Logo Primary Max Height Lg",
        "presenter": "Spacing"
      },
      {
        "name": "--header-logo-primary-max-height-sm",
        "value": "2.25rem",
        "description": "Header Logo Primary Max Height Sm",
        "presenter": "Spacing"
      },
      {
        "name": "--header-logo-secondary-height-lg",
        "value": "2.25rem",
        "description": "Header Logo Secondary Height Lg",
        "presenter": "Spacing"
      },
      {
        "name": "--header-logo-secondary-height-sm",
        "value": "1.5625rem",
        "description": "Header Logo Secondary Height Sm",
        "presenter": "Spacing"
      },
      {
        "name": "--header-logo-secondary-max-width-lg",
        "value": "7.5rem",
        "description": "Header Logo Secondary Max Width Lg",
        "presenter": "Spacing"
      },
      {
        "name": "--header-logo-secondary-max-width-sm",
        "value": "5.25rem",
        "description": "Header Logo Secondary Max Width Sm",
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
        "description": "List Gap",
        "presenter": "Spacing"
      },
      {
        "name": "--list-item-common-gap",
        "value": "0.75rem",
        "description": "List Item Common Gap",
        "presenter": "Spacing"
      },
      {
        "name": "--list-item-common-padding-left",
        "value": "0.75rem",
        "description": "List Item Common Padding Left",
        "presenter": "Spacing"
      },
      {
        "name": "--list-item-negative-colour",
        "value": "#c50b30",
        "description": "List Item Negative Colour",
        "presenter": "Color"
      },
      {
        "name": "--list-item-positive-colour",
        "value": "#00633d",
        "description": "List Item Positive Colour",
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
        "description": "Pagination Colour",
        "presenter": "Color"
      },
      {
        "name": "--pagination-horizontal-gap",
        "value": "1.75rem",
        "description": "Pagination Horizontal Gap",
        "presenter": "Spacing"
      },
      {
        "name": "--pagination-inside-gap",
        "value": "0.5rem",
        "description": "Pagination Inside Gap",
        "presenter": "Spacing"
      },
      {
        "name": "--pagination-page-active-background-colour",
        "value": "#005dba",
        "description": "Pagination Page Active Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--pagination-page-active-colour",
        "value": "#ffffff",
        "description": "Pagination Page Active Colour",
        "presenter": "Color"
      },
      {
        "name": "--pagination-page-active-hover-indicator-colour",
        "value": "#005dba",
        "description": "Pagination Page Active Hover Indicator Colour",
        "presenter": "Color"
      },
      {
        "name": "--pagination-page-common-hover-indicator-width",
        "value": "0.125rem",
        "description": "Pagination Page Common Hover Indicator Width",
        "presenter": "Spacing"
      },
      {
        "name": "--pagination-page-disabled-background-colour",
        "value": "#f4f4f4",
        "description": "Pagination Page Disabled Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--pagination-page-disabled-colour",
        "value": "#d3d3d3",
        "description": "Pagination Page Disabled Colour",
        "presenter": "Color"
      },
      {
        "name": "--pagination-page-disabled-hover-indicator-colour",
        "value": "#f4f4f4",
        "description": "Pagination Page Disabled Hover Indicator Colour",
        "presenter": "Color"
      },
      {
        "name": "--pagination-page-focus-background-colour",
        "value": "#ffffff",
        "description": "Pagination Page Focus Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--pagination-page-focus-border-colour",
        "value": "#1d1d1b",
        "description": "Pagination Page Focus Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--pagination-page-focus-border-width",
        "value": "0.1875rem",
        "description": "Pagination Page Focus Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--pagination-page-focus-colour",
        "value": "#1d1d1b",
        "description": "Pagination Page Focus Colour",
        "presenter": "Color"
      },
      {
        "name": "--pagination-page-focus-hover-indicator-colour",
        "value": "#ffffff",
        "description": "Pagination Page Focus Hover Indicator Colour",
        "presenter": "Color"
      },
      {
        "name": "--pagination-page-hover-background-colour",
        "value": "#aee1f7",
        "description": "Pagination Page Hover Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--pagination-page-hover-colour",
        "value": "#1d1d1b",
        "description": "Pagination Page Hover Colour",
        "presenter": "Color"
      },
      {
        "name": "--pagination-page-hover-hover-indicator-colour",
        "value": "#001d6e",
        "description": "Pagination Page Hover Hover Indicator Colour",
        "presenter": "Color"
      },
      {
        "name": "--pagination-page-rest-background-colour",
        "value": "#ffffff",
        "description": "Pagination Page Rest Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--pagination-page-rest-colour",
        "value": "#1d1d1b",
        "description": "Pagination Page Rest Colour",
        "presenter": "Color"
      },
      {
        "name": "--pagination-page-rest-hover-indicator-colour",
        "value": "#ffffff",
        "description": "Pagination Page Rest Hover Indicator Colour",
        "presenter": "Color"
      },
      {
        "name": "--pagination-vertical-gap",
        "value": "1rem",
        "description": "Pagination Vertical Gap",
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
        "description": "Link Gap",
        "presenter": "Spacing"
      },
      {
        "name": "--link-group-gap",
        "value": "1rem",
        "description": "Link Group Gap",
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
        "description": "Link Mono Active Colour",
        "presenter": "Color"
      },
      {
        "name": "--link-mono-focus-border-radius",
        "value": "0.25rem",
        "description": "Link Mono Focus Border Radius",
        "presenter": "BorderRadius"
      },
      {
        "name": "--link-mono-focus-border-width",
        "value": "0.0625rem",
        "description": "Link Mono Focus Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--link-mono-focus-colour",
        "value": "#000000",
        "description": "Link Mono Focus Colour",
        "presenter": "Color"
      },
      {
        "name": "--link-mono-hover-colour",
        "value": "#000000",
        "description": "Link Mono Hover Colour",
        "presenter": "Color"
      },
      {
        "name": "--link-mono-rest-colour",
        "value": "#000000",
        "description": "Link Mono Rest Colour",
        "presenter": "Color"
      },
      {
        "name": "--link-mono-visited-colour",
        "value": "#000000",
        "description": "Link Mono Visited Colour",
        "presenter": "Color"
      },
      {
        "name": "--link-primary-active-colour",
        "value": "#000a52",
        "description": "Link Primary Active Colour",
        "presenter": "Color"
      },
      {
        "name": "--link-primary-focus-border-radius",
        "value": "0.25rem",
        "description": "Link Primary Focus Border Radius",
        "presenter": "BorderRadius"
      },
      {
        "name": "--link-primary-focus-border-width",
        "value": "0.0625rem",
        "description": "Link Primary Focus Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--link-primary-focus-colour",
        "value": "#005dba",
        "description": "Link Primary Focus Colour",
        "presenter": "Color"
      },
      {
        "name": "--link-primary-hover-colour",
        "value": "#001d6e",
        "description": "Link Primary Hover Colour",
        "presenter": "Color"
      },
      {
        "name": "--link-primary-rest-colour",
        "value": "#005dba",
        "description": "Link Primary Rest Colour",
        "presenter": "Color"
      },
      {
        "name": "--link-primary-visited-colour",
        "value": "#1d1d1b",
        "description": "Link Primary Visited Colour",
        "presenter": "Color"
      },
      {
        "name": "--link-status-bold-active-colour",
        "value": "#f4f4f4",
        "description": "Link Status Bold Active Colour",
        "presenter": "Color"
      },
      {
        "name": "--link-status-bold-focus-border-radius",
        "value": "0.25rem",
        "description": "Link Status Bold Focus Border Radius",
        "presenter": "BorderRadius"
      },
      {
        "name": "--link-status-bold-focus-border-width",
        "value": "0.0625rem",
        "description": "Link Status Bold Focus Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--link-status-bold-focus-colour",
        "value": "#f4f4f4",
        "description": "Link Status Bold Focus Colour",
        "presenter": "Color"
      },
      {
        "name": "--link-status-bold-hover-colour",
        "value": "#f4f4f4",
        "description": "Link Status Bold Hover Colour",
        "presenter": "Color"
      },
      {
        "name": "--link-status-bold-rest-colour",
        "value": "#f4f4f4",
        "description": "Link Status Bold Rest Colour",
        "presenter": "Color"
      },
      {
        "name": "--link-status-bold-visited-colour",
        "value": "#f4f4f4",
        "description": "Link Status Bold Visited Colour",
        "presenter": "Color"
      },
      {
        "name": "--link-status-subtle-active-colour",
        "value": "#000000",
        "description": "Link Status Subtle Active Colour",
        "presenter": "Color"
      },
      {
        "name": "--link-status-subtle-focus-border-radius",
        "value": "0.25rem",
        "description": "Link Status Subtle Focus Border Radius",
        "presenter": "BorderRadius"
      },
      {
        "name": "--link-status-subtle-focus-border-width",
        "value": "0.0625rem",
        "description": "Link Status Subtle Focus Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--link-status-subtle-focus-colour",
        "value": "#000000",
        "description": "Link Status Subtle Focus Colour",
        "presenter": "Color"
      },
      {
        "name": "--link-status-subtle-hover-colour",
        "value": "#000000",
        "description": "Link Status Subtle Hover Colour",
        "presenter": "Color"
      },
      {
        "name": "--link-status-subtle-rest-colour",
        "value": "#000000",
        "description": "Link Status Subtle Rest Colour",
        "presenter": "Color"
      },
      {
        "name": "--link-status-subtle-visited-colour",
        "value": "#000000",
        "description": "Link Status Subtle Visited Colour",
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
        "description": "Text Input Common Addon Button Gap",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-common-border-radius",
        "value": "0.75rem",
        "description": "Text Input Common Border Radius",
        "presenter": "BorderRadius"
      },
      {
        "name": "--text-input-common-button-gap",
        "value": "0.5rem",
        "description": "Text Input Common Button Gap",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-common-height",
        "value": "3rem",
        "description": "Text Input Common Height",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-common-padding-x",
        "value": "1rem",
        "description": "Text Input Common Padding X",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-common-padding-y",
        "value": "0.5rem",
        "description": "Text Input Common Padding Y",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-common-text-gap",
        "value": "0.5rem",
        "description": "Text Input Common Text Gap",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-disabled-background-colour",
        "value": "#f4f4f4",
        "description": "Text Input Disabled Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--text-input-disabled-border-colour",
        "value": "#d3d3d3",
        "description": "Text Input Disabled Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--text-input-disabled-border-width",
        "value": "0.09375rem",
        "description": "Text Input Disabled Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-disabled-colour",
        "value": "#a6a7a7",
        "description": "Text Input Disabled Colour",
        "presenter": "Color"
      },
      {
        "name": "--text-input-error-background-colour",
        "value": "#ffffff",
        "description": "Text Input Error Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--text-input-error-border-colour",
        "value": "#c50b30",
        "description": "Text Input Error Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--text-input-error-border-width",
        "value": "0.09375rem",
        "description": "Text Input Error Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-error-colour",
        "value": "#1d1d1b",
        "description": "Text Input Error Colour",
        "presenter": "Color"
      },
      {
        "name": "--text-input-error-focus-border-width",
        "value": "0.1875rem",
        "description": "Text Input Error Focus Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-focus-background-colour",
        "value": "#ffffff",
        "description": "Text Input Focus Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--text-input-focus-border-colour",
        "value": "#1d1d1b",
        "description": "Text Input Focus Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--text-input-focus-border-width",
        "value": "0.1875rem",
        "description": "Text Input Focus Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-focus-colour",
        "value": "#1d1d1b",
        "description": "Text Input Focus Colour",
        "presenter": "Color"
      },
      {
        "name": "--text-input-hover-background-colour",
        "value": "#ffffff",
        "description": "Text Input Hover Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--text-input-hover-border-colour",
        "value": "#4d4f4f",
        "description": "Text Input Hover Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--text-input-hover-border-width",
        "value": "0.09375rem",
        "description": "Text Input Hover Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-hover-colour",
        "value": "#1d1d1b",
        "description": "Text Input Hover Colour",
        "presenter": "Color"
      },
      {
        "name": "--text-input-rest-background-colour",
        "value": "#ffffff",
        "description": "Text Input Rest Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--text-input-rest-border-colour",
        "value": "#858686",
        "description": "Text Input Rest Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--text-input-rest-border-width",
        "value": "0.09375rem",
        "description": "Text Input Rest Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-rest-colour",
        "value": "#1d1d1b",
        "description": "Text Input Rest Colour",
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
        "description": "Text Input Common Addon Button Gap",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-common-border-radius",
        "value": "0.75rem",
        "description": "Text Input Common Border Radius",
        "presenter": "BorderRadius"
      },
      {
        "name": "--text-input-common-button-gap",
        "value": "0.5rem",
        "description": "Text Input Common Button Gap",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-common-height",
        "value": "3rem",
        "description": "Text Input Common Height",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-common-padding-x",
        "value": "1rem",
        "description": "Text Input Common Padding X",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-common-padding-y",
        "value": "0.5rem",
        "description": "Text Input Common Padding Y",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-common-text-gap",
        "value": "0.5rem",
        "description": "Text Input Common Text Gap",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-disabled-background-colour",
        "value": "#f4f4f4",
        "description": "Text Input Disabled Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--text-input-disabled-border-colour",
        "value": "#d3d3d3",
        "description": "Text Input Disabled Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--text-input-disabled-border-width",
        "value": "0.09375rem",
        "description": "Text Input Disabled Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-disabled-colour",
        "value": "#a6a7a7",
        "description": "Text Input Disabled Colour",
        "presenter": "Color"
      },
      {
        "name": "--text-input-error-background-colour",
        "value": "#ffffff",
        "description": "Text Input Error Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--text-input-error-border-colour",
        "value": "#c50b30",
        "description": "Text Input Error Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--text-input-error-border-width",
        "value": "0.09375rem",
        "description": "Text Input Error Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-error-colour",
        "value": "#1d1d1b",
        "description": "Text Input Error Colour",
        "presenter": "Color"
      },
      {
        "name": "--text-input-error-focus-border-width",
        "value": "0.1875rem",
        "description": "Text Input Error Focus Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-focus-background-colour",
        "value": "#ffffff",
        "description": "Text Input Focus Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--text-input-focus-border-colour",
        "value": "#1d1d1b",
        "description": "Text Input Focus Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--text-input-focus-border-width",
        "value": "0.1875rem",
        "description": "Text Input Focus Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-focus-colour",
        "value": "#1d1d1b",
        "description": "Text Input Focus Colour",
        "presenter": "Color"
      },
      {
        "name": "--text-input-hover-background-colour",
        "value": "#ffffff",
        "description": "Text Input Hover Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--text-input-hover-border-colour",
        "value": "#4d4f4f",
        "description": "Text Input Hover Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--text-input-hover-border-width",
        "value": "0.09375rem",
        "description": "Text Input Hover Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-hover-colour",
        "value": "#1d1d1b",
        "description": "Text Input Hover Colour",
        "presenter": "Color"
      },
      {
        "name": "--text-input-rest-background-colour",
        "value": "#ffffff",
        "description": "Text Input Rest Background Colour",
        "presenter": "Color"
      },
      {
        "name": "--text-input-rest-border-colour",
        "value": "#858686",
        "description": "Text Input Rest Border Colour",
        "presenter": "Color"
      },
      {
        "name": "--text-input-rest-border-width",
        "value": "0.09375rem",
        "description": "Text Input Rest Border Width",
        "presenter": "Spacing"
      },
      {
        "name": "--text-input-rest-colour",
        "value": "#1d1d1b",
        "description": "Text Input Rest Colour",
        "presenter": "Color"
      }
    ]
  }
];

export default tokenSets;
