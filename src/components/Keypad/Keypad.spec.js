import React from "react";
import { shallow } from "enzyme";
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

  // Test whether the keypad renders the correct # of <div />s
  it("should render 3 <div />s", () => {
    expect(wrapper.find("div").length).toEqual(3);
  });

  // Test whether the keypad renders the numbers
  it("renders the values of numbers", () => {
    wrapper.setProps({ numbers: ["0", "1", "2"] });
    expect(wrapper.find(".numbers-container").text()).toEqual("012");
  });

  // Test whether the keypad renders the operators
  it("renders the values of operators", () => {
    wrapper.setProps({ operators: ["+", "-", "*", "/"] });
    expect(wrapper.find(".operators-container").text()).toEqual("+-*/");
  });
});
