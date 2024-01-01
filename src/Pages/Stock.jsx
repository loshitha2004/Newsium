import React, { useEffect, useState } from "react";
import Template from "../Components/Template";

const Stock = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=stock&language=en&apiKey=9ec978a1e3994be79f7eae170068665a"
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
      <Template Data={data} />
    </div>
  );
}

export default Stock