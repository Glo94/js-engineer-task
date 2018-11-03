import React from 'react';
import Button from "../../commons/Button/Button";
import "../../setupTests"
import { shallow } from 'enzyme';

it('Button handleClik is called', () => {
    let onClikFunction = jest.fn();
    const buttonComponent = shallow(<Button handleClick={onClikFunction}/>);
 
    buttonComponent.find('.btn-company').simulate('click');
    expect(onClikFunction).toHaveBeenCalled();
});

it('Button has label', () => {
    let onClikFunction = jest.fn();
    const buttonComponent = shallow(<Button handleClick={onClikFunction} label={'test'} />);
    const label = <button onClick={onClikFunction} className="btn-company btn">test</button>
 
    expect(buttonComponent.contains(label)).toEqual(true)
});