import { render, screen } from "@testing-library/react";
import { Button } from "../button";

describe("Button Component", () => {
  it("renders button with text", () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByRole("button", { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it("applies variant classes correctly", () => {
    render(<Button variant="destructive">Delete</Button>);
    const buttonElement = screen.getByRole("button", { name: /delete/i });
    expect(buttonElement).toHaveClass("bg-destructive");
  });

  it("handles click events", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    const buttonElement = screen.getByRole("button", { name: /click me/i });

    buttonElement.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("can be disabled", () => {
    render(<Button disabled>Disabled button</Button>);
    const buttonElement = screen.getByRole("button", {
      name: /disabled button/i,
    });
    expect(buttonElement).toBeDisabled();
  });
});
