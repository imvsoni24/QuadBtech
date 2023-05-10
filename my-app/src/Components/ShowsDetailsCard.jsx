import { useState } from "react";
import styles from "./shows.module.css";

const ShowsDetailsCard = ({ data }) => {
  let user = JSON.parse(localStorage.getItem("loginDetails"));

  const [book, setBook] = useState(true);
  const [password, setPassword] = useState("");
  console.log("user");
  const openForm = () => {
    if (user) {
      setBook(false);
    } else {
      alert("You are not logged in");
    }
  };
  const handleChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === user.password) {
      alert(
        "Your ticket has been booked, you will recieve a confirmation message shortly"
      );
      setBook(true);
    } else {
      alert("Incorrect Password");
    }
  };
  return (
    <>
      {book ? (
        <div className={styles.detailsCard} key={data.id}>
          <img
            className={styles.detailsCardImage}
            src={data.image?.original}
            alt=""
          />
          <h3>
            Average Runtime:{" "}
            <span
              className={styles.span}
            >{`${data.averageRuntime} Minutes`}</span>
          </h3>
          <h3>
            Genre: <span className={styles.span}>{data.genres?.join(",")}</span>
          </h3>
          <h3>
            Title: <span className={styles.span}>{data.name}</span>
          </h3>
          <h3>
            Language: <span className={styles.span}>{data.language}</span>
          </h3>
          <h3>
            Premeried On: <span className={styles.span}>{data.premiered}</span>
          </h3>
          <h3>
            Rating:{" "}
            <span className={styles.span}>{data.rating?.average || "NA"}</span>
          </h3>
          <h3>
            Status: <span className={styles.span}>{data.status}</span>
          </h3>
          <h3>
            Summary:{" "}
            <span className={styles.span}>{data.summary?.substring(3)}</span>
          </h3>
          <button type="button" className="btn btn-primary" onClick={openForm}>
            Book Ticket
          </button>
        </div>
      ) : (
        <div>
          <form
            onSubmit={handleSubmit}
            style={{
              width: "20%",
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "2px solid",
            }}
            action=""
          >
            <img src={data.image?.medium} alt="" />
            <h3>
              Title: <span className={styles.span}>{data.name}</span>
            </h3>
            <h3>
              Language: <span className={styles.span}>{data.language}</span>
            </h3>
            <label htmlFor="">Enter your login password</label>
            <input
              value={password}
              onChange={handleChange}
              type="password"
              placeholder="Password"
            />
            <input type="submit" value="Book Ticket" />
          </form>
        </div>
      )}
    </>
  );
};

export default ShowsDetailsCard;
