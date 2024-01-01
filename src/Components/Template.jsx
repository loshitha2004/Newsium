import React from "react";
const Template = ({ Data }) => {
  return (
    <div>
      <div className="container mx-auto py-24 px-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Data.slice(9,50).filter(item=>item.urlToImage).map((dat)=> {
            return (
              <div key={dat.title} className="shadow-lg rounded-lg bg-Final">
                <div className="p-3">
                  <img  src={dat.urlToImage} className="rounded-lg object-fit" />
                </div>
                <div className="p-2">
                  <p className="text-lg md:text-2xl font-bold mb-2">{dat.title}</p>
                  <p className="text-sm">{dat.content}</p>
                  <p>
                    Author: <span>{dat.author}</span>
                  </p>
                  <div className="p-3 ">
                  <a href={dat.url} target="blank" className="bg-transparent border border-Primary hover:  p-2 rounded-md text-Primary">
                     Additional info
                  </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Template;
