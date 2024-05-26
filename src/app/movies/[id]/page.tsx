"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Movies = ({ params }: any) => {
  const { id } = params;

  const [sandbox, setSandbox] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);

  const router = useRouter();

  const iframeRef: any = useRef(null);

  // useEffect(() => {
  //   document.getElementById("video_div")?.requestFullscreen();
  // }, []);

  const toggleFullScreen = () => {
    setFullScreen(!fullScreen);
  };

  // useEffect(() => {
  //   if (fullScreen) {
  //     document.getElementById("video_div")?.requestFullscreen();
  //   } else {
  //     document?.exitFullscreen();
  //   }
  // }, [fullScreen]);

  useEffect(() => {
    // console.log(document.getElementById("#iframe")?.contentWindow.document);
    console.log(iframeRef.current);
    if (iframeRef.current && iframeRef.current.contentDocument) {
      const styleEl = iframeRef.current.contentDocument.createElement("style");
      styleEl.type = "text/css";
      styleEl.innerHTML = `div[button="vidsrc"] {display: none !important;}`;

      iframeRef.current.contentDocument.head.appendChild(styleEl);
    }
    document
      .querySelector("#iframe")
      ?.setAttribute(
        "sandbox",
        "allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation"
      );
  }, []);

  const appendSandbox = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    //close the window
    window.close();
    window.top?.close();
    // setSandbox(true);
    document
      .querySelector("#iframe")
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
        src={`https://v2.vidsrc.me/embed/${id}`}
        ref={iframeRef}
        scrolling="no"
        // sandbox={
        //   "allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation"
        // }
        id="iframe"
        allow="encrypted-media"
        allowFullScreen
        frameBorder="0"
        autoFocus
        referrerPolicy="origin"
        // title="CinemaGhar"
        // loading="eager"
        // onKeyDown={() => appendSandbox()}
        // onChange={() => appendSandbox()}
        // onCanPlay={() => appendSandbox()}
        // referrerPolicy="same-origin"
        // srcDoc="<style>div[button='vidsrc'] {display: none !important;}</style>"
        className="w-[100vw] h-[100vh]"
        style={{ overflowY: "hidden" }}
        onClick={(e) => appendSandbox(e)}
        onLoad={(e) => appendSandbox(e)}
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
        onClick={() => toggleFullScreen()}
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
