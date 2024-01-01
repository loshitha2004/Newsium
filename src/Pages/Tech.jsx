import React, { useEffect, useState } from "react";
import Template from "../Components/Template";
import Heading from "../Components/Heading";
const Tech = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=technology&language=en&apiKey=447c15eae2f34dd0876ad722cde707f4"
    );
    if (!response.ok) {
      throw new Error("Data could not be fetched");
    } else {
      return response.json();
    }
  };
  useEffect(() => {
    fetchData()
      .then((res) => {
        setData(res.articles);
        console.log(res);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);
  return (
    <div className="min-h-screen bg-Secondary">
      <Heading Heading={"Technology"} title={"For Techies"}/>
      <Template Data={data} />
    </div>
  );
};

export default Tech;
