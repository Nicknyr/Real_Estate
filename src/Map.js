import * as React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

function Map() {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100vh',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 10
  });

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_KEY}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapStyle="mapbox://styles/nicknyr/ckd6irpux09s61iqr0tbnw6lq"
    />
  );
}

export default Map;