import { Link } from "react-router-dom";

function Filters({ season, onChangeSeason }) {
  return (
    <div
      className="btn-group mb-3"
      role="group"
      aria-label="Basic outlined example"
    >
      {[1, 2, 3, 4, 5, 6, 7, 8].map((el) => (
        // <button
        //   key={el}
        //   onClick={() => {
        //     onChangeSeason(el);
        //   }}
        //   className={`btn btn-outline-primary ${season === el ? "active" : ""}`}
        // >
        //   S{el}
        // </button>
        <Link
          key={el}
          to={`/episodes/${el}`}
          className={`btn btn-outline-primary ${season === el ? "active" : ""}`}
        >
          S{el}
        </Link>
      ))}
    </div>
  );
}

export default Filters;
