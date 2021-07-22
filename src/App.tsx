import React from "react";
import "./App.css";
import { Model } from "./Model";
import { imgList } from "./ImageData";
import { ImageGallery } from "./components/ImageGallery";

function App() {
  const model = new Model(imgList);
  return (
    <div className="App">
      <ImageGallery model={model} />
    </div>
  );
}

export default App;
