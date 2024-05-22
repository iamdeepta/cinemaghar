"use client";

import { useState } from "react";

const Movies = ({ params }: any) => {
  const { id } = params;

  const [sandbox, setSandbox] = useState(false);

  // useEffect(() => {
  //   document.getElementById("video_div")?.requestFullscreen();
  // }, []);

  const appendSandbox = () => {
    setSandbox(true);
    document
      .querySelector("iframe")
      ?.setAttribute(
        "sandbox",
        "allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation"
      );
  };

  return (
    <div
      id="video_div"
      className="flex justify-center items-center"
      style={{ overflowY: "hidden" }}
    >
      <iframe
        src={`https://2embed.org/embed/movie/${id}`}
        scrolling="no"
        sandbox={
          "allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation"
        }
        id="iframe"
        allow="encrypted-media"
        allowFullScreen
        frameBorder="0"
        className="w-[100vw] h-[100vh]"
        style={{ overflowY: "hidden" }}
        onClick={() => appendSandbox()}
      ></iframe>

      {/* {!sandbox && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "red",
            width: "100px",
            height: "100px",
          }}
          onClick={() => appendSandbox()}
        ></div>
      )} */}

      {/* <div
        style={{
          position: "absolute",
          top: "90%",
          left: "70%",
          transform: "translate(-50%, -50%)",
          background: "red",
          width: "100px",
          height: "100px",
          zIndex: 2147483647,
        }}
        id="siteLogo"
        onClick={() => appendSandbox()}
      ></div> */}
      {/* <video
        src="https://2embed.org/embed/movie/tt17048514"
        width="400"
        controls
      >
        <source
          src="https://2embed.org/embed/movie/tt17048514"
          type="video/mp4"
        />
      </video> */}
    </div>
  );
};

export default Movies;
