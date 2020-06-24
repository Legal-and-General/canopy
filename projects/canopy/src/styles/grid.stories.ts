import { storiesOf } from '@storybook/angular';

import { notes } from './grid.notes';

const stories = storiesOf('Grid', module);

stories.add(
  'Grid',
  () => {
    return {
      template: `
    <div>
      <div class="lg-container">
        <div class="lg-row">
          <div class="lg-col-xs-12">
            <h2>Responsive</h2>
            <p>Responsive modifiers enable specifying different column sizes, offsets, alignment and distribution at xs, sm, md & lg viewport widths.</p>    
          </div>
        </div>
        <div class="lg-row">
          <div class="lg-col-xs-12 lg-col-sm-3 lg-col-md-2 lg-col-lg-1">
            <div class="box"></div>
          </div>
          <div class="lg-col-xs-6 lg-col-sm-6 lg-col-md-8 lg-col-lg-10">
            <div class="box"></div>
          </div>
          <div class="lg-col-xs-6 lg-col-sm-3 lg-col-md-2 lg-col-lg-1">
            <div class="box"></div>
          </div>
        </div>

        <div class="lg-row">
          <div class="lg-col-xs-12 lg-col-sm-3 lg-col-md-2 lg-col-lg-1">
            <div class="box"></div>
          </div>
          <div class="lg-col-xs-12 lg-col-sm-9 lg-col-md-10 lg-col-lg-11">
            <div class="box"></div>
          </div>
        </div>

        <div class="lg-row">
          <div class="lg-col-xs-10 lg-col-sm-6 lg-col-md-8 lg-col-lg-10">
            <div class="box"></div>
          </div>
          <div class="lg-col-xs-2 lg-col-sm-6 lg-col-md-4 lg-col-lg-2">
            <div class="box"></div>
          </div>
        </div>
      </div>

      <div class="lg-container">
        <div class="lg-row">
          <div class="lg-col-xs-12">
            <h2>Fluid</h2>
            <p>Percent based widths allow fluid resizing of columns and rows.</p>    
          </div>
        </div>
        <div class="lg-row">
          <div class="lg-col-xs-3">
            <div class="box"></div>
          </div>
          <div class="lg-col-xs-9">
            <div class="box">
            </div>
          </div>
        </div>

        <div class="lg-row">
          <div class="lg-col-xs-4">
            <div class="box"></div>
          </div>
          <div class="lg-col-xs-8">
            <div class="box">
            </div>
          </div>
        </div>

        <div class="lg-row">
          <div class="lg-col-xs-5">
            <div class="box"></div>
          </div>
          <div class="lg-col-xs-7">
            <div class="box">
            </div>
          </div>
        </div>

        <div class="lg-row">
          <div class="lg-col-xs-6">
            <div class="box"></div>
          </div>
          <div class="lg-col-xs-6">
            <div class="box">
            </div>
          </div>
        </div>
      </div>

      <div class="lg-container">
        <div class="lg-row">
          <div class="lg-col-xs-12">
            <h2>Offsets</h2>
            <p>Offset a column</p>    
          </div>
        </div>
        <div class="lg-row">
          <div class="lg-col-xs-offset-11 lg-col-xs-1">
            <div class="box"></div>
          </div>
          <div class="lg-col-xs-offset-10 lg-col-xs-2">
            <div class="box"></div>
          </div>
          <div class="lg-col-xs-offset-9 lg-col-xs-3">
              <div class="box"></div>
          </div>
          <div class="lg-col-xs-offset-8 lg-col-xs-4">
            <div class="box"></div>
          </div>
          <div class="lg-col-xs-offset-7 lg-col-xs-5">
              <div class="box"></div>
          </div>
          <div class="lg-col-xs-offset-6 lg-col-xs-6">
            <div class="box"></div>
          </div>
          <div class="lg-col-xs-offset-5 lg-col-xs-7">
              <div class="box"></div>
          </div>
          <div class="lg-col-xs-offset-4 lg-col-xs-8">
            <div class="box"></div>
          </div>
          <div class="lg-col-xs-offset-3 lg-col-xs-9">
              <div class="box"></div>
          </div>
          <div class="lg-col-xs-offset-2 lg-col-xs-10">
            <div class="box"></div>
          </div>
          <div class="lg-col-xs-offset-1 lg-col-xs-11">
            <div class="box"></div>
          </div>
        </div>
      </div>

      <div class="lg-container">
        <div class="lg-row">
          <div class="lg-col-xs-12">
            <h2>Auto Width</h2>
            <p>Add any number of auto sizing columns to a row. Let the grid figure it out.</p>    
          </div>
        </div>
        <div class="lg-row">
          <div class="lg-col-xs">
            <div class="box"></div>
          </div>
          <div class="lg-col-xs">
            <div class="box"></div>
          </div>
          <div class="lg-col-xs">
            <div class="box"></div>
          </div>
        </div>
      </div>

      <div class="lg-container">
        <div class="lg-row">
          <div class="lg-col-xs-12">
            <h2>Nested Grid</h2>
            <p>Nest grids inside grids inside grids.</p>    
          </div>
        </div>
        <div class="lg-row nested">
          <div class="lg-col-xs-7">
            <div class="box">
              <div class="lg-row">
                <div class="lg-col-xs-9">
                  <div class="box">
                    <div class="lg-row">
                      <div class="lg-col-xs-4">
                        <div class="box">
                        </div>
                      </div>
                      <div class="lg-col-xs-8">
                        <div class="box">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="lg-col-xs-3">
                  <div class="box">
                    <div class="lg-row">
                      <div class="lg-col-xs">
                        <div class="box">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="lg-col-xs-5">
            <div class="box">
              <div class="lg-row">
                <div class="lg-col-xs-12">
                  <div class="box">
                    <div class="lg-row">
                      <div class="lg-col-xs-6">
                        <div class="box">
                        </div>
                      </div>
                      <div class="lg-col-xs-6">
                        <div class="box">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `,
      styles: [
        `
        .box {
          background-color: var(--color-super-blue);
          margin-bottom: var(--space-md);
          height: var(--space-lg);
        }

        .nested .box {
          background-color: var(--color-super-blue-lightest);
          height: auto;
          padding: var(--space-sm);
          margin-bottom: var(--space-md);
        }
        
        .nested .box .box {
          background-color: var(--color-super-blue-light);
          margin-bottom: 0;
        }

        .nested .box .box .box {
          background-color: var(--color-super-blue);
        }

        h2 {
          margin-top: var(--space-xl);
        }

        p:last-child {
          margin-bottom: var(--text-bottom-margin)
        }
      `
      ]
    };
  },
  {
    notes: {
      markdown: notes
    }
  }
);
