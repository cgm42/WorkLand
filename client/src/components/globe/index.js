import Globe from 'react-globe.gl';

function GlobeComp() {
  const myData = [{ lat: 42, lng: 130, size: 20, color: 'red' }];
  return (
    <Globe
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      pointsData={myData}
    />
  );
}

export default GlobeComp;
