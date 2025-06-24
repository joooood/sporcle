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
  const style = document.createElement("link");
  style.rel = "stylesheet";
  style.href =
    "https://cdn.jsdelivr.net/npm/tailwindcss@3.3.2/dist/tailwind.min.css";
  document.head.appendChild(style);

  render(<Home />, container!);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mount);
} else {
  mount();
}
