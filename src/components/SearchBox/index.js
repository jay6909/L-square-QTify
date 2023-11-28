import { ReactComponent as SearchIcon } from "./search-icon.svg";
export default () => {
  return (
   <div>
     <form style={{ display: "flex", minWidth: "570px" }}>
      <input
        style={{ flex: 1, borderRadius: "8px 0px 0px 8px", padding: "8px" }}
        placeholder="Search an album of your choice"
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
    <div style={{position:'absolute', width:'570px',
    maxHeight:'550px', border:'5px solid red', overflowY: 'auto'}}>
    </div>
   </div>
  );
};
