export const keyName = {
  KEY_LEFT: 'ArrowLeft',
  KEY_UP: 'ArrowUp',
  KEY_RIGHT: 'ArrowRight',
  KEY_DOWN: 'ArrowDown',
  KEY_ESCAPE: 'Escape',
};

// event.key in IE and Edge return 'Left', 'Right', 'Up', 'Down' and 'Esc'
export const isKeyLeft = (event: KeyboardEvent) =>
  event.key === keyName.KEY_LEFT || event.key === 'Left';
export const isKeyUp = (event: KeyboardEvent) =>
  event.key === keyName.KEY_UP || event.key === 'Up';
export const isKeyRight = (event: KeyboardEvent) =>
  event.key === keyName.KEY_RIGHT || event.key === 'Right';
export const isKeyDown = (event: KeyboardEvent) =>
  event.key === keyName.KEY_DOWN || event.key === 'Down';
