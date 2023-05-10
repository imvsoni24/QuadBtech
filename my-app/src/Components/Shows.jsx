import { useEffect, useState } from "react";
import axios from "axios";
import ShowsCard from "./ShowsCard";
import styles from "./shows.module.css";

const Shows = () => {
  const [showData, setShowData] = useState([]);
  const getData = async () => {
    let response = await axios.get("https://api.tvmaze.com/search/shows?q=all");
    setShowData(response.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={styles.container}>
      {showData.map((item) => (
        <ShowsCard key={item.show.id} {...item} />
      ))}
    </div>
  );
};

export default Shows;
