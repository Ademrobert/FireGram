import React from 'react';
import Title from './comps/Title';
import UploadFrom from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Model from './comps/Modal';

function App() {
  return (
    <div className="App">
      <Title/>
      <UploadFrom />
      <ImageGrid />
      <Model />
    </div>
  );
}

export default App;
