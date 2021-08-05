import React from "react";

import { useGlobalContext } from "./Context";



const PhotoList = ({ urls, likes, user }) => {


    return (

        <div>
            <img src={urls.small} />
            <h3>{likes}</h3>
            <h3>{user.name}</h3>
        </div>
    )
}

export default PhotoList;