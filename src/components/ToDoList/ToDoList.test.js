import React from "react";
import { shallow, mount } from "enzyme";

import ToDoList from "./ToDoList";

it("renders without crashing", () => {
    shallow(<ToDoList />);
});

it("should return an array when running receiveList()", () => {
    let wrapper = shallow(<ToDoList />);

    const result = wrapper.instance().receiveList();

    expect(Array.isArray(result)).toEqual(true);
});

it("should have the list when mounted", () => {
    let wrapper = mount(<ToDoList />);

    expect(wrapper.find(".ToDoList-list").exists()).toEqual(true);
});

it("should make that localStorage exists and has array after save()", () => {
    let wrapper = shallow(<ToDoList />);

    wrapper.instance().save();

    expect(localStorage.getItem("ToDoList-list") != null).toEqual(true);
    expect(Array.isArray(JSON.parse(localStorage.getItem("ToDoList-list")))).toEqual(true);
});

it("should add an item after running addItem()", () => {
    let wrapper = shallow(<ToDoList />);
    const instance = wrapper.instance();

    const countBefore = instance.state.list.length;

    wrapper.instance().addItem();

    const countAfter = instance.state.list.length;

    expect(countAfter > countBefore).toEqual(true);
});