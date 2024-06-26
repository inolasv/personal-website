import data from "../data/projects.json";
import React from "react";
// import { ReactComponent as Arrow } from "../images/arrow.svg";

/**
 * Function to create and show the project cards and popup
 * @return {div} the html code
 */
function ProjectCard() {
  const [showPopup, setShowPopup] = React.useState(false);
  const [popupData, setPopupData] = React.useState(null);

  const onShowPopup = (data) => {
    setShowPopup(true);
    setPopupData(data);
  };

  const onHidePopup = () => {
    setShowPopup(false);
    setPopupData(null);
  };

  const getImgUrl = (img) => {
    const images = require("../images/projects/" + img);
    return images;
  };

  const Popup = () => (
    <div>
      <div className="justify-center items-center flex fixed inset-0 z-50 lg:w-full lg:h-full w-fit h-fit">
        <div className="absolute w-screen h-screen" onClick={onHidePopup}></div>
        <div className="bg-dark-pink flex flex-col scrollbar-hide overflow-scroll outline outline-brown dark:outline-light-pink lg:outline-8 rounded-lg border-brown dark:border-light-pink border-4 lg:border-8 hover: relative w-2/3 h-96 my-6 mx-auto max-w-3xl">
          <div
            className="font-body text-brown text-2xl lg:text-3xl flex pt-2 pl-3 lg:pl-80 lg:ml-96"
            onClick={onHidePopup}
          >
            <button> X </button>
          </div>

          <div className="font-heading text-brown text-2xl lg:text-3xl flex lg:pt-4 pl-3 lg:pl-9 pb-3">
            {popupData.title}
          </div>

          {/* tags */}
          <div className="flex-basis">
            <div className="flex flex-row overflow-x-scrol scrollbar-hide justify-left pl-3 lg:pl-9 space-x-3">
              {popupData.tags.map((tag) => {
                return (
                  <div
                    key={tag + popupData.id}
                    className="bg-brown w-auto h-auto px-2 py-1 rounded-xl"
                  >
                    <div className="font-body text-light-pink text-xs lg:text-sm ">
                      {tag}{" "}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* body */}
          <div className="flex pt-5 px-9 grow">
            <div className="font-body text-brown text-sm lg:text-lg">
              {popupData.description}
            </div>
          </div>

          {/* arrow and "see it" link */}
          <div className="flex grow-0">
            <div className="flex items-center m-6 ml-10">
              <div className="flex underline items-center font-body text-brown text-2xl hover:text-light-pink">
                <a href={popupData.link} target="_blank" rel="noreferrer">
                  See it →
                </a>
                {/* <Arrow className="pl-3 text-[#ffffff] stroke-current hover:text-brown hover:stroke-current" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="flex flex-row pt-18 flex-wrap justify-center">
        {data.map((data) => {
          return (
            <div
              key={data.id}
              onClick={() => onShowPopup(data)}
              className="bg-dark-pink rounded-md outline outline-md outline-brown dark:outline-dark-pink hover:shadow-xl dark:shadow-[#FFEBEB33] shadow-md w-80 h-auto flex flex-col m-14 items-center justify-start"
            >
              <div className="text-brown font-heading text-2xl flex text-center px-2 py-10">
                {" "}
                {data.title}{" "}
              </div>
              <img
                className="flex object-contain w-auto max-h-64 aspect-auto px-2 pb-2"
                src={getImgUrl(data.image)}
                alt="project image"
              />
            </div>
          );
        })}
      </div>
      {/* Open card */}
      {showPopup ? <Popup /> : null}
    </div>
  );
}

export default ProjectCard;
