import styles from "./shows.module.css";
import { Link } from "react-router-dom";

const ShowsCard = ({ show }) => {
  const { id, name, image, status, rating, genres, language } = show;
  console.log(image?.original)
  
  return (
    <div key={id} className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={
              image
                ? image.original
                : ""
            }
            className={styles.cardImage}
            alt="Show Image"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h6 className="card-text">Rating: {rating.average || "NA"}</h6>
            <h6 className="card-text">
              <small>Status: {status}</small>
            </h6>
            <h6>Genre: {genres.join(",")}</h6>
            <h6>Language: {language}</h6>

            <Link to={`/show/${id}`}>
              <button>See Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowsCard;
