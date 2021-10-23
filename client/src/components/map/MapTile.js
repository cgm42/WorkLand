function MapTile({ map }) {
  return (
    <div
      id={map}
      style={{
        boxSizing: "border-box",
        backgroundImage: `url(/maps/${map}.png)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0px 0px",
        display: "inline-block",
        width: "384px",
        height: "384px",
      }}
    />
  );
}

export default MapTile;
