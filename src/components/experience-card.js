import data from "../data/experiences.json";
import React from "react";
// import { ReactComponent as Arrow } from "../images/arrow.svg";

/**
 * Function to create and show the project cards and popup
 * @return {div} the html code
 */
function ExperienceCards() {
  return (
    <div>
      <div className="pt-18 justify-left">
        {data.map((data) => {
          return (
            <div
              key={data.id}
              className="flex flex-col bg-dark-pink shadow-md w-8/10 h-auto m-12 lg:m-24 items-start justify-left"
            >
              <div className="text-brown font-heading text-2xl lg:text-4xl flex pl-5 lg:pl-10 pt-10">
                {" "}
                {data.title}{" "}
              </div>
              <div className="text-brown font-body text-sm lg:text-lg flex px-10 lg:px-24 py-10">
                <ul className="list-disc list-outside">
                  {data.description.map((point) => {
                    return <li key={point.length + data.id}>{point}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExperienceCards;
