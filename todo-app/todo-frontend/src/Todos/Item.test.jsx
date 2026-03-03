import { render, screen } from "@testing-library/react";
import Item from "./Item";

test("todo item rendered", () => {
  render(
    <Item todo={{ done: true, text: "Some text", id: "123" }}
      doneInfo={null}
      notDoneInfo={null}
    />
  );
  expect(screen.getByText("Some text")).toBeVisible();
});
