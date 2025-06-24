import { render } from "preact";
import { Home } from "./app/page";
import "./index.css";

function mount() {
  let container = document.getElementById("home");
  if (!container) {
    container = document.createElement("main");
    container.id = "search";

    document.body.prepend(container);
  }

  render(<Home />, container!);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mount);
} else {
  mount();
}
