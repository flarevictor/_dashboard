import { getStatisticsColumns } from 'containers/Inventory/Items/All/itemsHelpers';
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

const { describe, expect, it } = global;

describe('getStatisticsColumns', () => {
  it('renders the getStatisticsColumns component', () => {
    const component = shallow(<getStatisticsColumns />);

    expect(component.length).toEqual(1);
  });

  it('capturing Snapshot of getStatisticsColumns', () => {
    const component = shallow(<getStatisticsColumns />);
    const view = toJson(component);
    const actual = expect(view);

    actual.toMatchSnapshot();
  });
});
