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
    // console.log(iframeRef.current);
    // if (iframeRef.current && iframeRef.current.contentDocument) {
    //   const styleEl = iframeRef.current.contentDocument.createElement("style");
    //   styleEl.type = "text/css";
    //   styleEl.innerHTML = `div[button="vidsrc"] {display: none !important;}`;
    //   iframeRef.current.contentDocument.head.appendChild(styleEl);
    // }
    // document
    //   .querySelector("#iframe")
    //   ?.setAttribute(
    //     "sandbox",
    //     "allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation"
    //   );
  }, []);

  const appendSandbox = (event: any) => {
    // event.preventDefault();
    // event.stopPropagation();
    // //close the window
    // window.close();
    // window.top?.close();
    // // setSandbox(true);
    // document
    //   .querySelector("#iframe")
    //   ?.setAttribute(
    //     "sandbox",
    //     "allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation"
    //   );
  };

  // useEffect(() => {
  //   let h = window.innerHeight;
  //   let w = window.innerWidth;
  //   window.onresize = () => {
  //     if (h !== window.innerHeight || w !== window.innerWidth) {
  //       // If the user violates the rules, do anything u want :)
  //       router.push("/");
  //     }
  //   };
  // }, [window.innerHeight, window.innerWidth]);

  // useEffect(() => {
  //   console.log(navigator.userAgent.toLowerCase());
  //   console.log(process.env.NEXT_PUBLIC_IFRAME_URL);
  //   console.log(iframeRef.current.contentDocument);
  // }, []);

  return (
    <div
      id="video_div"
      className="flex justify-center items-center w-[100vw] h-[100vh]"
      style={{ overflowY: "hidden" }}
      onContextMenu={(e) => e.preventDefault()}
    >
      {window.innerWidth < 769 ? (
        <>
          {navigator.userAgent.toLowerCase().includes("firefox") ? (
            <>
              <iframe
                // src={`https://v2.vidsrc.me/embed/${id}`}
                // src={`https://2embed.org/embed/movie/${id}`}
                src={`https://cinemaghar-theta.vercel.app/api/movieLink/${id}`}
                // src={`https://multiembed.mov/directstream.php?video_id=${id}&tmdb=1`}
                ref={iframeRef}
                scrolling="no"
                sandbox={
                  "allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation"
                }
                id="iframe"
                allow="encrypted-media; autoplay"
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
                className="w-[100vw] h-[90vh]"
                style={{ overflowY: "hidden" }}
                onClick={(e) => appendSandbox(e)}
                onLoad={(e) => appendSandbox(e)}
                onContextMenu={(e) => e.preventDefault()}
              ></iframe>
            </>
          ) : (
            <>
              Please use mozilla firefox browser for better streaming experience
            </>
          )}
        </>
      ) : (
        <>
          {!navigator.userAgent.toLowerCase().includes("chrome") ? (
            <>
              <iframe
                src={`https://cinemaghar-theta.vercel.app/api/movieLink/${id}`}
                ref={iframeRef}
                scrolling="no"
                sandbox={
                  "allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation"
                }
                id="iframe"
                allow="encrypted-media; autoplay"
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
                className="w-[100vw] h-[100vh]"
                style={{ overflowY: "hidden" }}
                onClick={(e) => appendSandbox(e)}
                onLoad={(e) => appendSandbox(e)}
                onContextMenu={(e) => e.preventDefault()}
              ></iframe>
            </>
          ) : (
            <>
              Please use mozilla firefox browser for better streaming experience
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Movies;
