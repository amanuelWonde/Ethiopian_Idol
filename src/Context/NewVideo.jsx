import React, { createContext, useContext, useReducer } from "react";

const VideoContext = createContext(null);
const DispatchVideo = createContext(null);

export default function VideoProvider({ children }) {
  const [video, dispatch] = useReducer(videoReducer, currentVideo); // Fix the typo here
  // console.log(deliveryBoy)
  return (
    <VideoContext.Provider value={video}>
      <DispatchVideo.Provider value={dispatch}>
        {children}
      </DispatchVideo.Provider>
    </VideoContext.Provider>
  );
}

export function useVideo() {
  // Change the function name to useVideo
  return useContext(VideoContext);
}

export function useVideoDispatch() {
  return useContext(DispatchVideo);
}

function videoReducer(video, action) {
  // Rename userReducer to videoReducer
  switch (action.type) {
    case "video": {
      return {
        id: action.id,
        name: action.name,
        url: action.url,
        vote: action.vote,
        description: action.description,
      };
    }
    case "deleteVideo": {
      return {};
    }
    default: {
      return video;
    }
  }
}

const currentVideo = {};
