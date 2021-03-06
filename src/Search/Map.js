import React, { useState }  from 'react';
import MapGL, {
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl
} from 'react-map-gl';

import MapIcons from './MapIcons';
import MapPopUp from './MapPopUp';

const TOKEN = process.env.REACT_APP_MAPBOX_KEY;

const geolocateStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};

const fullscreenControlStyle = {
  position: 'absolute',
  top: 36,
  left: 0,
  padding: '10px'
};

const navStyle = {
  position: 'absolute',
  top: 72,
  left: 0,
  padding: '10px'
};

const scaleControlStyle = {
  position: 'absolute',
  bottom: 36,
  left: 0,
  padding: '10px'
};


export default function Map({listings}) {
  const [location, setLocation] = useState({
    viewport: {
      latitude: 25.761681,
      longitude: -80.191788,
      zoom: 12,
      bearing: 0,
      pitch: 0,
    },
    //popupInfo: null
      popupInfo: {
        longitude: null,
        latitude: null
      }
  });

  function updateViewport(viewport) {
    setLocation({viewport});
  };

  function onClickMarker(longitude, latitude) {
    //setLocation({popupInfo: city});
    setLocation({
      popupInfo: {
        longitude: longitude,
        latitude: latitude
      }
    });
  };

  function renderPopup() {
    const popupInfo = location.popupInfo;

    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={false}
          onClose={() => setLocation({popupInfo: null})}
        >
          <MapPopUp info={popupInfo} />
        </Popup>
      )
    );
  }


  return (
    <MapGL
        {...location.viewport}
        width="100%"
        height="85vh"
        mapStyle="mapbox://styles/nicknyr/ckd6irpux09s61iqr0tbnw6lq"
        onViewportChange={updateViewport}
        mapboxApiAccessToken={TOKEN}
      >
        {/*<MapIcons data={CITIES} onClick={onClickMarker} />*/}
        <MapIcons data={listings} onClick={onClickMarker} />

        {renderPopup()}

        <div style={geolocateStyle}>
          <GeolocateControl />
        </div>
        <div style={fullscreenControlStyle}>
          <FullscreenControl />
        </div>
        <div style={navStyle}>
          <NavigationControl />
        </div>
        <div style={scaleControlStyle}>
          <ScaleControl />
        </div>
      </MapGL>
  );
}

