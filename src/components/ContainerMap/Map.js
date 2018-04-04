/* global google*/
import React from 'react';
const { compose, withProps, lifecycle } = require('recompose');
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
  Marker,
} = require('react-google-maps');

const Suc = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDKOv5tv0rN5Mih51I-c6XHKhxCqa-AEC8&libraries=places',
    loadingElement: <div style={{ height: '100vh' }} />,
    containerElement: <div style={{ height: '100vh' }} />,
    mapElement: <div style={{ height: '100vh' }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new google.maps.DirectionsService();
      DirectionsService.route({
        origin: new google.maps.LatLng(-12.0436238, -77.0840850),
        destination: new google.maps.LatLng(-12.0463, -77.0855),
        travelMode: google.maps.TravelMode.DRIVING,

      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      });
    }
  })
)(props =>
  <GoogleMap
    defaultZoom={19}
  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
    <Marker
      position={{ lat: -12.0402,
        lng: -77.0903}}
      animation={google.maps.Animation.BOUNCE}
      icon={'https://user-images.githubusercontent.com/32303322/38283468-89455a42-378c-11e8-8045-19b729bc2ac2.png'}
    /><Marker
      position={{ lat: -12.0397,
        lng: -77.0907}}
      animation={google.maps.Animation.BOUNCE}
      icon={'https://user-images.githubusercontent.com/32303322/38283468-89455a42-378c-11e8-8045-19b729bc2ac2.png'}
    /><Marker
      position={{ lat: -12.0506,
        lng: -77.087}}
      animation={google.maps.Animation.BOUNCE}
      icon={'https://user-images.githubusercontent.com/32303322/38283468-89455a42-378c-11e8-8045-19b729bc2ac2.png'}
    /><Marker
      position={{ lat: -12.0507,
        lng: -77.0871}}
      animation={google.maps.Animation.BOUNCE}
      icon={'https://user-images.githubusercontent.com/32303322/38283468-89455a42-378c-11e8-8045-19b729bc2ac2.png'}
    /><Marker
      position={{ lat: -12.0499,
        lng: -77.0786}}
      animation={google.maps.Animation.BOUNCE}
      icon={'https://user-images.githubusercontent.com/32303322/38283468-89455a42-378c-11e8-8045-19b729bc2ac2.png'}
    /><Marker
      position={{ lat: -12.0516,
        lng: -77.0822}}
      animation={google.maps.Animation.BOUNCE}
      icon={'https://user-images.githubusercontent.com/32303322/38283468-89455a42-378c-11e8-8045-19b729bc2ac2.png'}
    /><Marker
      position={{ lat: -12.0382,
        lng: -77.0867 }}
      animation={google.maps.Animation.BOUNCE}
      icon={'https://user-images.githubusercontent.com/32303322/38283468-89455a42-378c-11e8-8045-19b729bc2ac2.png'}
    />
  </GoogleMap>
);

export default Suc;
