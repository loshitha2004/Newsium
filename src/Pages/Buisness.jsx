import React, { useEffect, useState } from "react";
import Template from "../Components/Template";
import ScaleLoader from "react-spinners/ScaleLoader";
import Heading from "../Components/Heading";

const Buisness = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=business&language=en&apiKey=447c15eae2f34dd0876ad722cde707f4"
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
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState("");
  const [visible1, setVisible1] = useState("hidden");
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setVisible("hidden");
      setLoading(false);
      setVisible1("");
    }, 2000);
  }, []);
  return (
    <div>
      <div
        className={`bg-Primary flex items-center justify-center min-h-screen z-auto ${visible}`}
      >
        <ScaleLoader color={"white"} loading={loading} size={50} />
      </div>
      <div className={`min-h-screen bg-Secondary ${visible1}`}>
         <Heading Heading={"Business"} title={"Dynamic world of commerce"} />
        <Template Data={data} />
      </div>
    </div>
  );
};

export default Buisness;
