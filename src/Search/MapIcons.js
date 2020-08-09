import * as React from 'react';
import {PureComponent} from 'react';
import {Marker} from 'react-map-gl';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const SIZE = 20;

export default class MapIcons extends PureComponent {
  render() {
    const {data, onClick} = this.props;

    return data.map((listing, index) => (
      <Marker key={`marker-${index}`} longitude={listing[8]} latitude={listing[7]}>
       <LocationOnIcon 
          height={SIZE}
          fill='#7778ed'
          onClick={() => onClick(listing)}
          onHover={() => alert('hovered over : ' + listing)}
       />
      </Marker>
    ));
  }
}




{/*
export default class MapIcons extends PureComponent {
  render() {
    const {data, onClick} = this.props;

    return data.map((city, index) => (
      <Marker key={`marker-${index}`} longitude={city.longitude} latitude={city.latitude}>
       <LocationOnIcon 
          height={SIZE}
          fill='#7778ed'
          onClick={() => onClick(city)}
       />
      </Marker>
    ));
  }
}
*/}