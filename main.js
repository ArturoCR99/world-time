import { routes } from "./routes/index.routes";
import "./js/active";

function main() {
  window.addEventListener("load", () => {
    routes(window.location.hash);
    window.addEventListener("hashchange", () => {
      routes(window.location.hash);
    });
  });
}

main();
