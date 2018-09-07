import React from "react";
import { shallow, mount } from "enzyme";

import Button from "./Button";

it("renders without crashing", () => {
    shallow(<Button />);
});

it("calls onClick event on click", () => {
    const onClick = jest.fn();
    let wrapper = mount(<Button onClick={onClick} />);

    wrapper.find("button").first().simulate("click");
    expect(onClick).toBeCalled();
});

it("to have .large as class name when setting large prop", () => {
    let wrapper = mount(<Button large />);
    expect(wrapper.find("button").first().hasClass("large")).toEqual(true);
});