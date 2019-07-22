import React from "react";
import Signin from "../../../components/signin/signin";
import { shallow } from "enzyme";

describe("sign in component", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<Signin />);
  });
});
