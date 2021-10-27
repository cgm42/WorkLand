function MapTile({ map }) {
  return (
    <div
      id={map}
      style={{
        boxSizing: 'border-box',
        backgroundImage: `url(/maps/${map}.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0px 0px',
        backgroundSize: '100% 100%',
        width: '1024px',
        height: '704px',
      }}
    />
  );
}

export default MapTile;
