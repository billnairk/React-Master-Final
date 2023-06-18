import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import Popular from "./components/Popular";
import ComingSoon from "./components/ComingSoon";
import NowPlaying from "./components/NowPlaying";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Popular />,
      },
      {
        path: "/coming-soon",
        element: <ComingSoon />,
      },
      {
        path: "/now-playing",
        element: <NowPlaying />,
      },
    ],
  },
]);
