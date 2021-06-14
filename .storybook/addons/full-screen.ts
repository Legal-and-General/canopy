export const fullScreen = (storyFn: () => any) => {
  const story = storyFn();

  story.template = `<div id="full-screen">${story.template}</div>`;
  return story;
};
