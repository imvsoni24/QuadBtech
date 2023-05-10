import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShowsDetailsCard from "./ShowsDetailsCard";

const ShowsDetails = () => {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState({});
  const getShowDetails = async () => {
    let response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
    response = await response.data;
    setShowDetails(response);
  };

  useEffect(() => {
    getShowDetails();
  }, []);

  return <ShowsDetailsCard data={showDetails} />;
};

export default ShowsDetails;
