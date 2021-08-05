import React from "react";

import { useGlobalContext } from "./Context";

import Search from "./Search";
import PhotoList from "./PhotosList";


// eslint-disable-next-line react/display-name
const App = () => {

  const { photos } = useGlobalContext();

  console.log(photos);
  return (

    <div>
      <Search />
      {photos.map(photo => {
        return <PhotoList {...photo} key={photo.id} />
      })}
    </div>
  )

};

export default App;