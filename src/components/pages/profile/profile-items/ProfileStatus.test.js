import React from "react";
import { create } from "react-test-renderer"
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {

  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="status first" />)
    const instance = component.getInstance()
    expect(instance.state.status).toBe("status first")
  })

  test("after creation input shouldn't be displayed", () => {
    const component = create(<ProfileStatus status="status first" />)
    const root = component.root
    
    expect(() => {
      let input = root.findByType("input")
    }).toThrow()
  })

  test("after creation span should contain correct status", () => {
    const component = create(<ProfileStatus status="status first" />)
    const root = component.root
    let span = root.findByType("span")
    expect(span.children[0]).toBe('status first')
  })
})