import React from 'react';
import "../../setupTests"
import Select from '../../commons/Select/Select'
import { shallow } from 'enzyme';

it('Select resetSelect is called', () => {
    let resetSelectFunction = jest.fn();
    let list=[];
    let openSelect = {}

    const selectButton = shallow(<Select openSelect={openSelect} list={list} resetSelect={resetSelectFunction} />);

    selectButton.find('.select-company__select__toggle').simulate('click');
    expect(resetSelectFunction).toHaveBeenCalled();
});

it('Select options recive props and have correct value', () => {
    let props = {
        list:['option1'],
        openSelect: {}
    }
    const SelectComponent = shallow(<Select {...props}/>);
 
    expect(SelectComponent.find(".select-company__select__options__item").text()).toEqual('option1')
});
