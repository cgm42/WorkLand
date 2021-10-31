import { useEffect, useState } from 'react';
import Globe from 'react-globe.gl';
import axios from 'axios';
import { useSelector } from 'react-redux';
function GlobeComp() {
  // const myData = [{ lat: 42, lng: 130, size: 20, color: 'red' }];
  const globeState = useSelector((state) => state.mapGuide.globe);
  const [data, setData] = useState();
  useEffect(() => {
    axios.get('/loc').then((res) => {
      // console.log('res :>> ', res.data);
      const userLoc = res.data.user;
      const dataToDisplay = [userLoc, ...res.data.others];
      setData(dataToDisplay);
    });
  }, [globeState]);
  return (
    <>
      <div></div>
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        pointsData={data}
      />
    </>
  );
}

export default GlobeComp;
