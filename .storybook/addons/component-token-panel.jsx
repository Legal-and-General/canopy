import React, { useEffect, useState } from 'react';
import { AddonPanel } from 'storybook/internal/components';
import { addons, types, useStorybookState } from 'storybook/manager-api';
import tokenSources from '../component-token-sources';

const ADDON_ID = 'canopy/component-tokens';
const PANEL_ID = `${ADDON_ID}/panel`;

// storybook-design-token's own webpack plugin already parses designTokenGlob into this
// file; reuse it instead of maintaining a separate parsing/generation pipeline.
function useTokenCategories() {
  const [categoryMap, setCategoryMap] = useState(null);

  useEffect(() => {
    let cancelled = false;

    fetch('./design-tokens.source.json')
      .then(response => response.json())
      .then(data => {
        if (cancelled) return;

        const map = new Map();
        for (const category of data?.cssTokens?.categories ?? []) {
          map.set(category.name, [...(map.get(category.name) ?? []), ...category.tokens]);
        }
        setCategoryMap(map);
      })
      .catch(() => setCategoryMap(new Map()));

    return () => {
      cancelled = true;
    };
  }, []);

  return categoryMap;
}

function ComponentTokenPanel({ active }) {
  const [searchText, setSearchText] = useState('');
  const { index, storyId } = useStorybookState();
  const story = index?.[storyId];
  const categoryMap = useTokenCategories();

  const source = tokenSources.find(({ titlePrefix }) =>
    story?.title === titlePrefix || story?.title?.startsWith(`${titlePrefix}/`),
  );
  const tokens = source && categoryMap
    ? source.categories.flatMap(category => categoryMap.get(category) ?? [])
    : [];

  const searchTerm = searchText.trim().toLowerCase();
  const filteredTokens = tokens.filter(token =>
    [ token.name, token.value, token.description, token.presenter ]
      .some(value => (value ?? '').toLowerCase().includes(searchTerm)),
  );

  return (
    <AddonPanel active={active}>
      {source ? (
        <div style={{ padding: '16px' }}>
          <h2 style={{ margin: '0 0 16px' }}>{source.label} tokens</h2>
          <input
            aria-label="Search design tokens"
            onChange={event => setSearchText(event.target.value)}
            placeholder="Search tokens"
            style={searchInputStyle}
            type="search"
            value={searchText}
          />
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr>
                <th style={cellStyle}>Token</th>
                <th style={cellStyle}>Value</th>
                <th style={cellStyle}>Preview</th>
                <th style={cellStyle}>Description</th>
              </tr>
            </thead>
            <tbody>
              {filteredTokens.map(token => (
                <tr key={token.name}>
                  <td style={cellStyle}><code>{token.name}</code></td>
                  <td style={cellStyle}>{token.value}</td>
                  <td style={cellStyle}><TokenPreview token={token} /></td>
                  <td style={cellStyle}>{token.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredTokens.length === 0 && (
            <p role="status">No tokens match “{searchText}”.</p>
          )}
        </div>
      ) : (
        <div style={{ padding: '16px' }}>No component tokens available.</div>
      )}
    </AddonPanel>
  );
}


function TokenPreview({ token }) {
  const { presenter, value } = token;

  if (presenter === 'Color') {
    return <span style={{ background: value, border: '1px solid #858686', display: 'inline-block', height: '24px', width: '48px' }} />;
  }

  if (presenter === 'Spacing') {
    return <span style={{ alignItems: 'center', display: 'inline-flex', gap: '8px' }}>
      <span style={{ background: '#005dba', display: 'inline-block', height: '16px', width: `clamp(8px, ${value}, 96px)` }} />
      <code>{value}</code>
    </span>;
  }

  if (presenter === 'BorderRadius' || presenter === 'Shadow') {
    return <span style={{ background: '#f4f4f4', border: '1px solid #858686', borderRadius: presenter === 'BorderRadius' ? value : undefined, boxShadow: presenter === 'Shadow' ? value : undefined, display: 'inline-block', height: '32px', width: '48px' }} />;
  }

  if (presenter === 'FontSize' || presenter === 'FontWeight' || presenter === 'FontFamily') {
    return <span style={{ fontFamily: presenter === 'FontFamily' ? value : undefined, fontSize: presenter === 'FontSize' ? value : undefined, fontWeight: presenter === 'FontWeight' ? value : undefined }}>Aa</span>;
  }

  if (presenter === 'Opacity') {
    return <span style={{ alignItems: 'center', display: 'inline-flex', gap: '8px' }}>
      <span style={{ background: '#005dba', display: 'inline-block', height: '16px', opacity: value, width: '48px' }} />
      <code>{value}</code>
    </span>;
  }

  if (presenter === 'LineHeight' || presenter === 'LetterSpacing') {
    return <span style={{ lineHeight: presenter === 'LineHeight' ? value : undefined, letterSpacing: presenter === 'LetterSpacing' ? value : undefined }}>Aa</span>;
  }

  return <code>{value}</code>;
}

const cellStyle = {
  borderBottom: '1px solid #e5e5e5',
  padding: '8px',
  textAlign: 'left',
  verticalAlign: 'top',
};

const searchInputStyle = {
  backgroundColor: '#ffffff',
  border: '1px solid #858686',
  borderRadius: '2px',
  boxSizing: 'border-box',
  color: '#1d1d1b',
  caretColor: '#1d1d1b',
  marginBottom: '16px',
  padding: '8px',
  width: '100%',
};

addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'Design tokens',
    match: ({ viewMode }) => viewMode === 'story',
    render: ({ active, key }) => <ComponentTokenPanel active={active} key={key} />,
  });
});
