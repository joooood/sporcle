import { render } from "preact";
import { App } from "@/pages";
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
    "https://cdn.tailwindcss.com";
  document.head.appendChild(style);

  render(<App />, container!);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mount);
} else {
  mount();
}
