import { storiesOf } from '@storybook/angular';

const stories = storiesOf('Typography', module);

stories.add('Headings', () => ({
  template: `
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
  `
}));

stories.add('Page', () => ({
  template: `
      <h1 class="h1">Albert Camus</h1>
      <p class="standfirst">
        The Plague is a famous allegorical novel by Albert Camus, who's known
        for his existential works. The book was published in 1947 and is
        considered one of the most important works by Camus.
      </p>
      <p>
        The truth is that everyone is bored, and devotes himself to cultivating
        habits. <b>Our citizens work hard</b>, but solely with the object of
        getting rich. Their chief interest is commerce, and their chief aim in
        life is, as they call it, 'doing business.
      </p>
      <p>
        You must picture the consternation of our
        <a href="https://en.wikipedia.org/wiki/Oran">little town</a>, hitherto
        so tranquil, and now, out of the blue, shaken to its core, like a quite
        healthy man who all of a sudden feels his temperature shoot up and the
        blood seething like wildfire in his veins.
      </p>
      <p>
        <small>They fancied themselves free, and no one will ever be free so
        long as there are pestilences.</small>
      </p>
      <p class="legal">
        The Plague (French: La Peste) is a novel by Albert Camus, published in
        1947
      </p>
  `
}));
