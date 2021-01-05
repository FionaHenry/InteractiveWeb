import { Map, GoogleApiWrapper } from 'google-maps-react';


const mapStyles = {
    width: '100%',
    height: '100%'
  };

  export default function MapContainer() {
    return (
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={
            {
              lat: 52.58751994561562,
              lng: -0.23285824546493739
            }
          }
        />
        );
};

//export default GoogleApiWrapper({
 //   apiKey: 'AIzaSyCHULxIenqUhe1LBCHoxnHbxSOPWv2Wgkw'
 // })(MapContainer);