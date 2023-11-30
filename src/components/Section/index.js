import { useState } from "react";
import Card from "../Card";
import Carousel from "../Carousel"
import "./section.css";
export default ({ navID, title, data, isAlbum }) => {

  const [isCollapsed, setIsCollapsed] = useState(false)
  return (
    <div className="section">
      <div className="section-header">

        <h1 className="title"> {title}</h1>
        <h1 className="section-toggle-btn"
          onClick={() => { setIsCollapsed(!isCollapsed) }}>{isCollapsed ? 'Show All' : 'Collapse'}</h1>

      </div>
      {isCollapsed ? <Carousel navID={navID} data={data} isAlbum={isAlbum}
      /> :
        <div className="card-container">
          {isAlbum ?
            data.map((cardData) => (

              <Card
                key={cardData.id}
                imgSrc={cardData.image}
                label={cardData.title}
                followersCount={cardData.follows}
                songsCount={cardData.songs.length}
                isAlbum

              />
            )) :
            data.map((cardData) => (

              <Card
                key={cardData.id}
                imgSrc={cardData.image}
                label={cardData.title}
                likesCount={cardData.likes}
              />
            ))
          }


        </div>
      }

    </div>
  );
};
