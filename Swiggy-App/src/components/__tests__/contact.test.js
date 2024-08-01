import {render, screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should load contact us componenet" , () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    //Assertion
    expect(heading).toBeInTheDocument();
});

test("Should load button inside contact component" , () => {
    render(<Contact />);
    const button = screen.getByRole("button");

    //Assertion
    expect(button).toBeInTheDocument();
});

test("Should load button inside contact component" , () => {
    render(<Contact />);
    const textboxes = screen.getAllByRole("textbox");

    //Assertion
    expect(textboxes.length).toBe(2);
});