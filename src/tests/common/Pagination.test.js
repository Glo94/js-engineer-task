import React from 'react';
import "../../setupTests"
import { shallow } from 'enzyme';
import Pagination from '../../routes/Home/components/Pagination/Pagination'

it('function movePage has called', () => {
  let movePageFunction = jest.fn();
  const paginationComponent = shallow(<Pagination movePage={movePageFunction}/>)

  expect(paginationComponent.find("button").length).toEqual(4)
  for(let i=0; i<4; i++)
    paginationComponent.find('button').at(i).simulate('click')
  expect(movePageFunction).toHaveBeenCalled();
});