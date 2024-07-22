import { IoIosPlay } from "react-icons/io";
import { IoIosPause } from "react-icons/io";
import SecondaryButton from "../Root/SecondaryButton";
import { useRef, useState } from "react";

export default function VideoCTA() {
  const videoRef = useRef(null);
  const [videoState, setVideoState] = useState(false);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className="h-screen bg-gray-400 px-4 mt-8 relative overflow-hidden">
      <video
        ref={videoRef}
        id="cta-video"
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="./videos/videocta.mp4" type="video/mp4" />
        Your browser doesn't support MP4 videos.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70"></div>
      <div className="relative top-64 text-white z-10">
        <div className="flex flex-row justify-center items-center">
          {!videoState ? (
            <button
              onClick={() => {
                playVideo();
                setVideoState(true);
              }}
              className="text-white bg-blue-500 h-20 w-20 text-center rounded-full mx-auto text-5xl"
            >
              <IoIosPlay style={{ margin: "0 auto" }} />
            </button>
          ) : (
            <button
              onClick={() => {
                pauseVideo();
                setVideoState(false);
              }}
              className="text-white bg-blue-500 h-20 w-20 text-center rounded-full mx-auto text-5xl"
            >
              <IoIosPause style={{ margin: "0 auto" }} />
            </button>
          )}
        </div>
        <h2 className="mt-8 text-center text-2xl font-bold 2xl:text-8xl">
          ARE YOU READY TO TRAVEL? REMEMBER US!!
        </h2>
        <p className="text-center my-4 2xl:text-2xl 2xl:my-12">
          Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo,
          rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur,
          aptent.
        </p>
        <div className="flex flex-row justify-center items-center gap-12">
          <button className="bg-blue-500 text-white w-36 h-12 rounded-full">
            View Packages
          </button>
          <SecondaryButton label="Learn More" styles="w-36" />
        </div>
      </div>
    </div>
  );
}
