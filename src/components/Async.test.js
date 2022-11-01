import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async Component", () => {
  test("renders posts if request succeeds", async () => {
    //Arrange
    //Override the build in fetch function with my own one
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });
    render(<Async />);

    //Act - no need to act

    //Assert
    const listItemElement = await screen.findAllByRole(
      "li",

      { exact: false },
      { timeout: 3 }
    );
    expect(listItemElement).not.toHaveLength(0);
  });
});
