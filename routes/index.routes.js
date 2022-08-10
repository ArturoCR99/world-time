import home from "../controllers/home.controller";
import seoul from "../controllers/seoul.controller";
import dubai from "../controllers/dubai.controller";
import monterrey from "../controllers/mty.controller";
import error from "../controllers/error.controller";

const routes = (route) => {
  switch (route) {
    case "":
      return $(document).ready(home());
    case "#/home":
      return $(document).ready(home());
    case "#/seoul":
      return $(document).ready(seoul());
    case "#/dubai":
      return $(document).ready(dubai());
    case "#/monterrey":
      return $(document).ready(monterrey());
    default:
      return $(document).ready(error());
  }
};

export { routes };
