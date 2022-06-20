import React from "react";
import { render, waitFor } from "@testing-library/react";
import Button from "./index";
import { BrowserRouter as Router } from "react-router-dom";

test("Should not allowed click button if isDisabled is present", () => {
    const { container } = render(<Button isDisabled></Button>);

    waitFor(() => expect(container.querySelector("span.disabled")).toBeInTheDocument())
});

test("Should render loadin/spinner", () => {
    const { container,getByText } = render(<Button isLoading></Button>);

    waitFor(() => 
        expect(container.querySelector("span")).toBeInTheDocument()    
    )
});

test("Should render <a> tag ", () => {
    const { container } = render(<Button type="link" isExternal></Button>);

    waitFor(() => 
        expect(container.querySelector("a")).toBeInTheDocument()
    )
});

test("Should render <Link> component", () => {
    const { container } = render(
        <Router>
            <Button href="" type="link"></Button>
        </Router>
    );

    waitFor(() => 
        expect(container.querySelector("a")).toBeInTheDocument()
    )
});