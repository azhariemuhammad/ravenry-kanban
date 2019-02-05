import React from 'react';
import ReactDOM from 'react-dom';
import ModalComponent from './Modal'
import { shallow } from 'enzyme';

it('renders Modal', () => {
  shallow(<ModalComponent />);
});