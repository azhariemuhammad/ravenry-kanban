import React from 'react';
import ReactDOM from 'react-dom';
import CardComponent from './Card'
import { shallow } from 'enzyme';

it('renders title backlog', () => {
  const wrapper = shallow(<CardComponent title="Backlog" />);
  const title = <h2>Backlog</h2>
  expect(wrapper.contains(title)).toEqual(true)
});