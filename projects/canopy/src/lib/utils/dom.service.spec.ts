import { LgDomService } from './dom.service';

describe('LgErrorStateMatcher', () => {
  let service: LgDomService;

  beforeEach(() => {
    service = new LgDomService();
  });

  it('does nothing if there is not an id to add and the current property is null', () => {
    expect(service.toggleIdInStringProperty(null, { id: 'id-1' }, undefined)).toBe(null);
  });

  it('defaults the property to a string if it is undefined', () => {
    expect(service.toggleIdInStringProperty(undefined, { id: 'id-1' })).toBe('');
  });

  it('removes the id of the old element if there is one', () => {
    expect(service.toggleIdInStringProperty('id-1 id-2', { id: 'id-1' })).toBe('id-2');
  });

  it('adds the id of the new element if there is one', () => {
    expect(
      service.toggleIdInStringProperty('id-1 id-2', { id: 'id-1' }, { id: 'id-3' }),
    ).toContain('id-3');
  });

  it('trims any additional whitespace from the property value', () => {
    expect(
      service.toggleIdInStringProperty('id-1 id-2', { id: 'id-1' }, { id: 'id-3 ' }),
    ).toBe('id-2 id-3');
  });
});
