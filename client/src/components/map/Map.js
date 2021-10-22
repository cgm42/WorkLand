import MapTile from "./MapTile";
import "./style.css";

function Map({ x }) {
  return (
    <div
      id="map"
      style={{
        zIndex: -1,
        position: "absolute",
        top: 0,
        left: -x,
      }}>
      <MapTile map={`officev0`} />
    </div>
  );
}

export default Map;
