import { useState } from "react";
import Menu from "../Menu";
import { ReactComponent as SearchIcon } from "./search-icon.svg";
export default ({topAlbums}) => {

  const [searchText, setSearchText] = useState("")
  const [filtered, setFiltered] = useState([])

  const searchResults=(val)=>{
    if(!val) {setFiltered([]); 
      setSearchText("")
      return;}
    val=val.toLowerCase()
    setSearchText(val)
    setFiltered(topAlbums.filter((album)=>album.title.toLowerCase().includes(val)))
  }
  return (
    <div style={{ position: 'relative' }}>
      <form style={{ display: "flex", minWidth: "570px" }}>
        <input
       
          style={{ flex: 1, borderRadius: "8px 0px 0px 8px", padding: "8px" }}
          placeholder="Search an album of your choice"
          onChange={(e)=>searchResults(e.target.value)}
        />

        <button
          style={{
            width: "66px",
            height: "48px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "0px 8px 8px 0px",
            padding: "8px",
          }}
        >
          <SearchIcon width={20} height={20} />
        </button>
      </form>
      <Menu searchText={searchText} data={filtered}/>
    </div>
  );
};
