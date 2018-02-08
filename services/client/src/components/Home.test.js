import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'

import Home from './Home'

test('Home renders properly', ()=> {
    const wrapper = shallow(<Home/>)
    const element = wrapper.find('h1')
    const button = wrapper.find('button')
    const container = wrapper.find('.slide')
    expect(element.length).toBe(3)
    expect(button.length).toBe(2)
    expect(container.length).toBe(1)
    //expect(element.text()).toBe('Add something relevant here.')
})