import React from "react";
import { mount, shallow } from "enzyme";
import Keypad from "./Keypad";

describe("Keypad", () => {
  let wrapper;

  // Create a shallow copy of <Keypad /> for each test
  beforeEach(() => {
    wrapper = shallow(
      <Keypad
        callOperator={jest.fn()}
        numbers={[]}
        operators={[]}
        setOperator={jest.fn()}
        updateDisplay={jest.fn()}
      />
    );
  });
  
  // Generic tests first
  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  // Test whether the keypad renders the correct # of <div />s
  it("should render 4 <div />s", () => {
    expect(wrapper.find("div").length).toEqual(4);
  });

  // Test whether the keypad renders a <Key/> component
  it("should render an instance of the Key component for each index of numbers, operators, and the submit Key", () => {
    const numbers = ['0', '1'];
    const operators = ['+', '-'];
    const submit = 1;
    const keyTotal = numbers.length + operators.length + submit;
    wrapper.setProps({ numbers, operators });
    expect(wrapper.find("Key").length).toEqual(keyTotal);
  });
});

/**
 * From: https://testdriven.io/blog/tdd-with-react-jest-and-enzyme-part-two/
 * As a rule for writing your rendering tests: 
 * 1. Always start with shallow (shallow render) 
 * 2. Use mount, when you want to test either - componentDidMount or componentDidUpdate - DOM rendering, component lifecycle, and the behavior of child components
 */
describe("mounted Keypad", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Keypad 
        callOperator={jest.fn()}
        numbers={[]}
        operators={[]}
        setOperator={jest.fn()}
        updateDisplay={jest.fn()}
      />
    );
  });

  // Test whether the keypad renders the operators
  it("renders the values of numbers to the DOM", () => {
    wrapper.setProps({ numbers: ['0', '1', '2'] });
    expect(wrapper.find(".numbers-container").text()).toEqual("012");
  });

  // Test whether the keypad renders the operators
  it("renders the values of operators to the DOM", () => {
    wrapper.setProps({ operators: ['+', '-', '*', '/'] });
    expect(wrapper.find(".operators-container").text()).toEqual("+-*/");
  });

})
