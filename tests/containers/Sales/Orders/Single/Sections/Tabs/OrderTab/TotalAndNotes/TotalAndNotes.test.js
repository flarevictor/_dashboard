import { TotalAndNotes } from 'containers/Sales/Orders/Single/Sections/Tabs/OrderTab/TotalAndNotes/TotalAndNotes';
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

const { describe, expect, it } = global;

describe('TotalAndNotes', () => {
  const props = {
    data: [],
    shippingCharge: 1,
    customerCredit: 1,
    currency: 'currency',
    skuDetails: [],
    initialSkuDetails: [],
    promotionInfo: {},
    promotionDiscount: 1,
    promotion: {},
    disabled: false,
    promotionGetRequest: jest.fn(),
    onFieldChange: jest.fn(),
  };

  it('renders the TotalAndNotes component', () => {
    const component = shallow(<TotalAndNotes { ...props } />);

    expect(component.length).toEqual(1);
  });

  it('capturing Snapshot of TotalAndNotes', () => {
    const component = shallow(<TotalAndNotes { ...props } />);
    const view = toJson(component);
    const actual = expect(view);

    actual.toMatchSnapshot();
  });
});
