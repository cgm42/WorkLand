function MapTile({ map }) {
  return (
    <div
      id={map}
      style={{
        boxSizing: 'border-box',
        backgroundImage: `url(/maps/${map}.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0px 0px',
<<<<<<< Updated upstream
        backgroundSize: '100% 100%',
        width: '1024px',
        height: '704px',
=======
        display: 'inline-block',
        width: '1584px',
        height: '1584px',
>>>>>>> Stashed changes
      }}
    />
  );
}

export default MapTile;
