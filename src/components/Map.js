import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';


const mapStyles = {
    width: '90%',
    height: '50%'
  };

  export class MapContainer extends Component {
    render() {
    return (
        <Map
          google={this.props.google}
          zoom={15}
          style={mapStyles}
          initialCenter={
            {
              lat: 52.58751994561562,
              lng: -0.23285824546493739
            }
          }
        />
      );
    }}

    export default GoogleApiWrapper({
      apiKey: 'AIzaSyCHULxIenqUhe1LBCHoxnHbxSOPWv2Wgkw'
    })(MapContainer);