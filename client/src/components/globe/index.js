import { useEffect, useState } from 'react';
import Globe from 'react-globe.gl';
import axios from 'axios';
import { useSelector } from 'react-redux';
import useWindowDimensions from '../../hooks/useWindowDimensions';
function GlobeComp() {
  // const myData = [{ lat: 42, lng: 130, size: 20, color: 'red' }];
  const globeState = useSelector((state) => state.mapGuide.globe);
  const [data, setData] = useState();
  const { width, height } = useWindowDimensions();
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
      <div>
        <h3>Locate your team on the globe!</h3>
        <Globe
          width={width - 50}
          height={height - 100}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          pointsData={data}
        />
      </div>
    </>
  );
}

export default GlobeComp;
