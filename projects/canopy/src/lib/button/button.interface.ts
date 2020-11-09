// TODO: remove non prefixed enums as part of a larger breaking change
export type Variant =
  | 'solid-primary'
  | 'solid-secondary'
  | 'outline-primary'
  | 'outline-secondary'
  | 'reverse-primary'
  | 'reverse-secondary';
export type Behaviour = 'button' | 'reset' | 'submit' | 'link';

export type ButtonBehaviour = Behaviour;
export type ButtonVariant = Variant;
export type ButtonIconPosition = 'left' | 'right';
export type ButtonSize = 'md' | 'sm';
