import { Tooltip } from "@mui/material";
import "./card.css";
export default ({ imgSrc, followersCount, label, tooltip, songsCount, likesCount, isAlbum = false }) => {
  return (<>

    {isAlbum ?

      <div className="card-wrapper">
        <Tooltip title={`${songsCount} songs`} placement="top">
          <div className="card">
            <div className="card-img-frame">
              <img className="card-img" src={imgSrc}></img>
            </div>

            <div className="card-content">
              <span className="card-content-pill">
                <p>{followersCount} follows</p>
              </span>
            </div>
          </div>
          <p className="card-label">{label}</p>
        </Tooltip>

      </div> :


      <div className="card-wrapper">
        <Tooltip title={`${likesCount} likes`} placement="top">
          <div className="card">
            <div className="card-img-frame">
              <img className="card-img" src={imgSrc}></img>
            </div>

            <div className="card-content">
              <span className="card-content-pill">
                <p>{likesCount} likes</p>
              </span>
            </div>
          </div>
          <p className="card-label">{label}</p>
        </Tooltip>

      </div>
    }

  </>

  );



};
