"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import "./navbar.css";
//import { MovieContext } from "../../context/movieContext/MovieContext";
//import { getMovies } from "../../context/movieContext/apiCalls";
import Link from "next/link";
import { MdLanguage } from "react-icons/md";

const Navbar: any = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolledWithCategory, setIsScrolledWithCategory] = useState(false);
  const [searchbar, setSearchbar] = useState(false);
  const [notiOpen, setNotiOpen] = useState(false);
  // const [isBangla, setIsBanga] = useState(false)
  //   var numbers = {
  //     0: "০",
  //     1: "১",
  //     2: "২",
  //     3: "৩",
  //     4: "৪",
  //     5: "৫",
  //     6: "৬",
  //     7: "৭",
  //     8: "৮",
  //     9: "৯",
  //   };

  //   function replaceNumbers(input) {
  //     var output = [];
  //     for (var i = 0; i < input.length; ++i) {
  //       if (numbers.hasOwnProperty(input[i])) {
  //         output.push(numbers[input[i]]);
  //       } else {
  //         output.push(input[i]);
  //       }
  //     }
  //     return output.join("");
  //   }

  const pathname = usePathname();

  const navigate = useRouter();

  const user = false;

  const [searchPlaceHolder, setSearchPlaceHolder] = useState("");

  // const { pathname } = useLocation();

  // useEffect(() => {
  //   if (pathname === "/music") {
  //     setSearchPlaceHolder("Search by Music");
  //   } else {
  //     setSearchPlaceHolder("Search by Movie/Series");
  //   }
  // }, [pathname]);

  // useEffect(() => {
  //   setSearchTerm(searchTerm);
  // }, [searchTerm]);

  // Change language
  //   const onLengChange = () => {
  //     // console.log(JSON.parse(localStorage.getItem("isBangla")))
  //     let len =
  //       JSON.parse(localStorage.getItem("isBangla")) !== null
  //         ? JSON.parse(localStorage.getItem("isBangla"))
  //         : false;
  //     userDispatch(getIsBangla(!len));
  //   };

  //   useEffect(() => {
  //     localStorage.setItem("isBangla", JSON.stringify(isBangla));
  //   }, [isBangla]);

  const searchMovie = (e: any, searchTerms: any) => {
    // setSearchTerms(e.target.value);
    navigate.push("/search");
    //console.log(searchTerms);
    // if (searchTerms === "") {
    //   navigate(-1);
    // }
  };

  //   window.onscroll = () => {
  //     if (pathname !== "/movies" && pathname !== "/series") {
  //       setIsScrolled(window.pageYOffset === 0 ? false : true);
  //       setIsScrolledWithCategory(false);
  //     } else {
  //       setIsScrolled(window.pageYOffset === 0 ? false : true);
  //       setIsScrolledWithCategory(window.pageYOffset === 0 ? false : true);
  //     }
  //     return () => (window.onscroll = null);
  //   };

  const [selectedId, setSelectedId] = useState(null);
  const [startVideo, setStartVideo] = useState(false);
  const [more_detail, setMoreDetail] = useState(null);

  //   const openScroll = () => {
  //     document.querySelector("body").style.overflowY = "auto";
  //   };

  if (selectedId !== null) {
    setTimeout(() => {
      setStartVideo(true);
    }, 0);
  }

  // const openModal = () => {
  //   setSelectedId(item_id);
  //   setMoreDetail(info);

  //   document.querySelector("body").style.overflow = "hidden";
  // };

  // console.log(user);
  const [content, setContent] = useState([]);

  const signOut = (e: any) => {
    e.preventDefault();

    // dispatch(logout());

    navigate.push("/");
  };

  const searchbarActive = (e: any) => {
    e.stopPropagation();
    setSearchbar(!searchbar);
    // document.getElementById("search_bar").focus();
  };

  //   setTimeout(() => {
  //     if (searchPlaceHolder !== "Search by Music") {
  //       document.querySelector(".home").onclick = () => {
  //         setSearchbar(false);
  //       };
  //     }
  //   }, 1000);

  // useEffect(() => {
  //   if (user) {
  //     document.querySelector(".options").style.pointerEvents = "none";
  //     document.querySelector(".notifications").style.pointerEvents = "none";
  //   }
  //   // document.querySelector(".notifications").style.opacity = 0;
  //   setNotiOpen(true);
  // }, []);

  // const closeOption = () => {
  //   // setTimeout(function () {
  //   //   document.querySelector(".options").style.visibility = "hidden";
  //   // }, 400);
  //   document.querySelector(".options").style.pointerEvents = "none";
  // };

  // const openOption = () => {
  //   // document.querySelector(".options").style.visibility = "visible";
  //   // document.querySelector(".options").style.transition = "0.5s";
  //   document.querySelector(".options").style.pointerEvents = "auto";
  // };

  // const toggleNoti = () => {
  //   setNotiOpen(!notiOpen);

  //   if (notiOpen === true) {
  //     document.querySelector(".notifications").style.pointerEvents = "auto";
  //     document
  //       .querySelector(".notifications")
  //       .classList.add("notifications_hover");
  //   } else {
  //     document.querySelector(".notifications").style.pointerEvents = "none";
  //     document
  //       .querySelector(".notifications")
  //       .classList.remove("notifications_hover");
  //   }
  // };

  // const closeNoti = () => {

  //   document.querySelector(".notifications").style.opacity = 0;
  //   document.querySelector(".notifications").style.pointerEvents = "none";
  // };

  // const openNoti = (e) => {
  //   // document.querySelector(".options").style.visibility = "visible";
  //   // document.querySelector(".options").style.transition = "0.5s";
  //   e.stopPropagation();
  //   setNotiOpen(!notiOpen);

  //   if (notiOpen === true) {
  //     document
  //       .querySelector(".notifications")
  //       .classList.add("notifications_active");
  //     document.querySelector(".noti_icon").classList.add("noti_icon_red");
  //     document.querySelector(".notifications").style.opacity = 1;
  //     document.querySelector(".notifications").style.pointerEvents = "auto";
  //     document.querySelector("body").addEventListener("click", () => {
  //       document
  //         .querySelector(".notifications")
  //         .classList.remove("notifications_active");
  //       document.querySelector(".noti_icon").classList.remove("noti_icon_red");
  //       document.querySelector(".notifications").style.opacity = 0;
  //       document.querySelector(".notifications").style.pointerEvents = "none";
  //       if (window.innerWidth <= 990) {
  //         document.querySelector("body").style.overflowY = "auto";
  //       }
  //       setNotiOpen(true);
  //     });
  //     if (window.innerWidth <= 990) {
  //       document.querySelector("body").style.overflowY = "hidden";
  //     }
  //   } else {
  //     document
  //       .querySelector(".notifications")
  //       .classList.remove("notifications_active");
  //     document.querySelector(".noti_icon").classList.remove("noti_icon_red");
  //     document.querySelector(".notifications").style.opacity = 0;
  //     document.querySelector(".notifications").style.pointerEvents = "none";
  //     if (window.innerWidth <= 990) {
  //       document.querySelector("body").style.overflowY = "auto";
  //     }
  //   }
  // };

  // const homeAnimate: any = () => {
  //   document.querySelector(".homes").classList.add("animate__pulse");
  // };
  // const homeAnimateClose = () => {
  //   document.querySelector(".homes").classList.remove("animate__pulse");
  // };

  // const seriesAnimate = () => {
  //   document.querySelector(".series").classList.add("animate__pulse");
  // };
  // const seriesAnimateClose = () => {
  //   document.querySelector(".series").classList.remove("animate__pulse");
  // };

  // const moviesAnimate = () => {
  //   document.querySelector(".movies").classList.add("animate__pulse");
  // };
  // const moviesAnimateClose = () => {
  //   document.querySelector(".movies").classList.remove("animate__pulse");
  // };

  // const popularAnimate = () => {
  //   document.querySelector(".popular").classList.add("animate__pulse");
  // };
  // const popularAnimateClose = () => {
  //   document.querySelector(".popular").classList.remove("animate__pulse");
  // };

  // const mylistAnimate = () => {
  //   document.querySelector(".mylists").classList.add("animate__pulse");
  // };
  // const mylistAnimateClose = () => {
  //   document.querySelector(".mylists").classList.remove("animate__pulse");
  // };

  // const musicAnimate = () => {
  //   document.querySelector(".music").classList.add("animate__pulse");
  // };
  // const musicAnimateClose = () => {
  //   document.querySelector(".music").classList.remove("animate__pulse");
  // };

  // const searchbarAnimate = () => {
  //   document.querySelector(".search_icon").classList.add("animate__pulse");
  // };
  // const searchbarAnimateClose = () => {
  //   document.querySelector(".search_icon").classList.remove("animate__pulse");
  // };

  // const notiAnimate = () => {
  //   document.querySelector(".noti_icon").classList.add("animate__swing");
  // };
  // const notiAnimateClose = () => {
  //   document.querySelector(".noti_icon").classList.remove("animate__swing");
  // };

  // const lenButtonAnimate = () => {
  //   document.querySelector(".leng_btn").classList.add("animate__pulse");
  // };
  // const lenButtonAnimateClose = () => {
  //   document.querySelector(".leng_btn").classList.remove("animate__pulse");
  // };

  // const subButtonAnimate = () => {
  //   document.querySelector(".sub_btn").classList.add("animate__pulse");
  // };
  // const subButtonAnimateClose = () => {
  //   document.querySelector(".sub_btn").classList.remove("animate__pulse");
  // };

  // const loginButtonAnimate = () => {
  //   document.querySelector(".login_btn").classList.add("animate__pulse");
  // };
  // const loginButtonAnimateClose = () => {
  //   document.querySelector(".login_btn").classList.remove("animate__pulse");
  // };

  return (
    <>
      <div
        className={
          isScrolled
            ? isScrolledWithCategory
              ? "navbar scrolled scrolledWithCategory"
              : "navbar scrolled"
            : "navbar"
        }
      >
        <div className="container">
          <div className="left">
            <Link href="/browse" className="navbar_logo">
              <img src="images/icinema_logo.png" alt="logo" />
              <span className="logo_text">Cinema Ghar</span>
            </Link>

            {user && (
              <>
                <Link
                  className="navbar_left_link animate__animated homes"
                  href="/browse"
                  style={{ textDecoration: "none", color: "white" }}
                  // onMouseEnter={homeAnimate}
                  // onMouseLeave={homeAnimateClose}
                >
                  <span>{"Home"}</span>
                </Link>
                <Link
                  className="navbar_left_link animate__animated series"
                  href="/series"
                  style={{ textDecoration: "none", color: "white" }}
                  // onMouseEnter={seriesAnimate}
                  // onMouseLeave={seriesAnimateClose}
                >
                  <span>{"Series"}</span>
                </Link>
                <Link
                  className="navbar_left_link animate__animated movies"
                  href="/movies"
                  style={{ textDecoration: "none", color: "white" }}
                  // onMouseEnter={moviesAnimate}
                  // onMouseLeave={moviesAnimateClose}
                >
                  <span>{"Movies"}</span>
                </Link>

                <Link
                  className="navbar_left_link animate__animated mylists"
                  href="/my-list"
                  style={{ textDecoration: "none", color: "white" }}
                  // onMouseEnter={mylistAnimate}
                  // onMouseLeave={mylistAnimateClose}
                >
                  <span>{"My List"}</span>
                </Link>
                <Link
                  className="navbar_left_link animate__animated music"
                  href="/music"
                  style={{ textDecoration: "none", color: "white" }}
                  // onMouseEnter={musicAnimate}
                  // onMouseLeave={musicAnimateClose}
                >
                  <span>{"Music"}</span>
                </Link>
              </>
            )}
          </div>
          <div className="right">
            {pathname !== "/" && (
              <>
                {/* <Search
                  className="search_icon animate__animated"
                  onClick={(e) => searchbarActive(e)}
                  onMouseEnter={searchbarAnimate}
                  onMouseLeave={searchbarAnimateClose}
                /> */}

                <input
                  type="text"
                  className={searchbar ? "search_bar_active" : "search_bar"}
                  id="search_bar"
                  placeholder={searchPlaceHolder}
                  autoComplete={"off"}
                  onClick={(e) => e.stopPropagation()}
                  // onChange={(e) => searchMovie(e, searchTerms)}
                />
              </>
            )}

            {/* <span>KID</span> */}
            {typeof window !== "undefined" && window.innerWidth <= 990 ? (
              <>
                {pathname !== "/" && (
                  <>
                    <MdLanguage
                      className="nav_btn leng_btn_mbl"
                      // onClick={() => onLengChange()}
                      // onMouseEnter={lenButtonAnimate}
                      // onMouseLeave={lenButtonAnimateClose}
                    />
                  </>
                )}
              </>
            ) : (
              <>
                <button
                  className="nav_btn leng_btn animate__animated "
                  // onClick={() => onLengChange()}
                  // onMouseEnter={lenButtonAnimate}
                  // onMouseLeave={lenButtonAnimateClose}
                >
                  {"BANGLA"}
                </button>
              </>
            )}

            {!user && (
              <>
                <button
                  className="btn-grad nav_btn sub_btn animate__animated "
                  // onMouseEnter={subButtonAnimate}
                  // onMouseLeave={subButtonAnimateClose}
                  onClick={() => navigate.push("/register")}
                >
                  {"SUBSCRIBE NOW"}
                </button>

                <Link href="/login">
                  <button
                    className="nav_btn login_btn animate__animated "
                    // onMouseEnter={loginButtonAnimate}
                    // onMouseLeave={loginButtonAnimateClose}
                  >
                    {"LOG IN"}
                  </button>
                </Link>
              </>
            )}
            {user && (
              <>
                <div
                  className="noti"
                  // onMouseLeave={closeNoti}
                  // onMouseEnter={openNoti}
                  //   onClick={(e) => openNoti(e)}
                >
                  {/* <Notifications
                    className="icon animate__animated noti_icon"
                    onMouseEnter={notiAnimate}
                    onMouseLeave={notiAnimateClose}
                  /> */}
                  {/* <div className="notifications">
                    {noti_data?.data.map((item, index) => (
                      <span
                        key={item._id}
                        onClick={() => {
                          setSelectedId(item._id);
                          setMoreDetail(item);
                          document.querySelector("body").style.overflow =
                            "hidden";
                          //console.log(item);
                        }}
                      >
                        <div className="noti_row" key={item._id}>
                          <img
                            src={AppUrl.file_url + item.imgSm}
                            alt="notification_pic"
                          />
                          <div className="noti_des">
                            <p>{"New Arrival"}</p>
                            <p>{item.title}</p>
                            <p>{item.createdAt.substr(0, 10)}</p>
                          </div>
                        </div>
                      </span>
                    ))}
                  </div> */}
                </div>

                <div
                  className="profile"
                  // onMouseLeave={closeOption}
                  // onMouseEnter={openOption}
                >
                  <img
                    className="user_small_img"
                    src="images/user.svg"
                    alt=""
                  />
                  {/* <ArrowDropDown className="arrow_icon" /> */}
                  <div className="options">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "0px",
                        fontSize: "16px",
                        backgroundColor: "#e72626",
                        padding: "10px 0px",
                      }}
                    >
                      {"User 1"}
                    </div>

                    <span>
                      <Link
                        href="/account"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        {"Account"}
                      </Link>
                    </span>

                    <span>
                      <Link
                        href="/"
                        style={{ color: "white", textDecoration: "none" }}
                        onClick={(e: any) => signOut(e)}
                      >
                        {"Sign out"}
                      </Link>
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {user &&
        {
          /* <ListModal
          key={selectedId}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          more_detail={more_detail}
          setMoreDetail={setMoreDetail}
          startVideo={startVideo}
          setStartVideo={setStartVideo}
          openScroll={openScroll}
          mov={noti_data?.data}
          singleUser={singleUser}
          list_id={more_detail?._id}
          musicId={musicId}
          setMusicId={setMusicId}
          musicAudio={musicAudio}
          setMusicAudio={setMusicAudio}
          audioPlayer={audioPlayer}
          isPlaying={isPlaying}
          setPlay={setPlay}
          musicImg={musicImg}
          setMusicImg={setMusicImg}
          showPlayer={showPlayer}
          currentlyPlayiing={currentlyPlayiing}
          changeProgress={changeProgress}
          progressBar={progressBar}
          changeCurrentTime={changeCurrentTime}
          duration={duration}
          setDuration={setDuration}
          currentTime={currentTime}
          setCurrenttime={setCurrenttime}
          changePlayPause={changePlayPause}
          animationRef={animationRef}
          whilePlaying={whilePlaying}
          calculateTime={calculateTime}
          changeSongLove={changeSongLove}
          isLove={isLove}
          setLove={setLove}
          repeat={repeat}
          setRepeat={setRepeat}
          createdAt={createdAt}
          setCreatedAt={setCreatedAt}
          setCurrentlyPlaying={setCurrentlyPlaying}
          setShowPlayer={setShowPlayer}
        /> */
        }}
    </>
  );
};

export default Navbar;
