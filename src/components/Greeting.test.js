import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    //Arrange
    render(<Greeting />);

    //Act
    // ...nothing

    //Assert
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good to see if button was NOT clicked", () => {
    //Arrange
    render(<Greeting />);
    //Act
    // ...nothing
    //Assert
    const goodToSeeElement = screen.getByText("good to see", { exact: false });
    expect(goodToSeeElement).toBeInTheDocument();
  });

  test("renders Changed! if the button was clicked", () => {
    //Arrange
    render(<Greeting />);
    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //Assert
    const changedElement = screen.getByText("Changed!", { exact: true });
    expect(changedElement).toBeInTheDocument();
  });

  test("does not render Good to see you if the button was clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    //getByText will throw error if not found, queryByText will return null
    const goodToSeeElement = screen.queryByText("good to see", {
      exact: false,
    });
    expect(goodToSeeElement).toBeNull();
  });
});
