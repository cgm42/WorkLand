import { useEffect, useState } from 'react';
import Globe from 'react-globe.gl';
import axios from 'axios';
import { useSelector } from 'react-redux';
function GlobeComp() {
  // const myData = [{ lat: 42, lng: 130, size: 20, color: 'red' }];
  const globeState = useSelector((state) => state.mapGuide.globe);
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get('/loc')
      .then((res) => {
        // console.log('res :>> ', res.data);
        const userLoc = res.data.user;
        const dataToDisplay = [userLoc, ...res.data.others];
        setData(dataToDisplay);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [globeState]);
  return (
    <>
      <div className="nes-container is-rounded is-dark">
        <Globe
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          pointsData={data}
        />
      </div>
    </>
  );
}

export default GlobeComp;
