import React from "react";
import { shallow } from "enzyme";
import Key from "./Key";

describe("Key", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Key keyAction={jest.fn()} keyType={""} keyValue={""} />);
  });

  // Generic tests first
  it("should render correctly", () => expect(wrapper).toMatchSnapshot());

  // Key should render a <div/> element
  it("should render a <div/>", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  // Key should render keyValue
  it("should render the value of keyValue", () => {
    wrapper.setProps({ keyValue: "test" });
    expect(wrapper.text()).toEqual("test");
  });
});
