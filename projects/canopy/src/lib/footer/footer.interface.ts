export interface Link {
  text: string;
  href: string;
  id?: string;
  target?: string;
}

export interface SecondaryLink extends Link {
  class?: string;
  type?: 'button';
}
