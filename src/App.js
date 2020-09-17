import React, { useState } from 'react';
import Title from './comps/Title';
import UploadFrom from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Model from './comps/Modal';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title/>
      <UploadFrom />
      <ImageGrid  setSelectedImg = {setSelectedImg} />
      { selectedImg &&<Model  selectedImg = {selectedImg} setSelectedImg = {setSelectedImg} /> }
    </div>
  );
}

export default App;
