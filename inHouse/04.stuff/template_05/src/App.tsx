import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "./store/store";
import Home from "./pages/Home";
import VideoHome from "./pages/VideoHome";

const App: React.FC = () => {
  const videoSelector = useSelector(
    (state: RootState) => state.videoScreenIsClickedApp.clickedVideo
  );

  let screen;
  if (!videoSelector) {
    screen = <Home />;
  } else {
    screen = <VideoHome />;
  }
  return <div className="w-full h-screen pt-3 dark:bg-black">{screen}</div>;
};

export default App;
