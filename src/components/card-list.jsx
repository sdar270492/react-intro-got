import Card from "./card";
import React from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router";

function CardList() {
  const [episodes, setEpisodes] = React.useState([]);
  const params = useParams();
  const location = useLocation();
  const season = params.num;

  console.log("location", location);

  React.useEffect(() => {
    axios.get("http://localhost:3001/episodes").then((response) => {
      setEpisodes(response.data.episodes);
    });
  }, []);

  return (
    <div className="row">
      {episodes
        .filter((episode) => episode.season === season)
        .map((episode, i) => (
          <div className="col-3 mb-2" key={i}>
            <Card
              title={episode.name}
              description={episode.summary.slice(0, 50)}
              img={episode.image.medium}
              season={episode.season}
              number={episode.number}
            />
          </div>
        ))}
    </div>
  );
}

export default CardList;
