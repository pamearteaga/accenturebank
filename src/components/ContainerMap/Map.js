/* global google*/
import React from 'react';
const { compose, withProps, lifecycle, withState, withHandlers } = require('recompose');
// const FaAnchor = require('react-icons/lib/fa/anchor');
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  // InfoWindow,
  Marker,
} = require('react-google-maps');

const Suc = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDKOv5tv0rN5Mih51I-c6XHKhxCqa-AEC8&libraries=places',
    loadingElement: <div style={{ height: '80vh' }} />,
    containerElement: <div style={{ height: '80vh' }} />,
    mapElement: <div style={{ height: '80vh' }} />,
  }),
  withState('zoom', 'onZoomChange', 15.5),
  withHandlers(() => {
    const refs = {
      map: undefined,
    };
    return {
      onMapMounted: () => ref => {
        refs.map = ref;
      },
      onZoomChanged: ({ onZoomChange }) => () => {
        onZoomChange(refs.map.getZoom());
      }
    };
  }),
  withScriptjs,
  withGoogleMap,
  // lifecycle({
  //   componentDidMount() {
  //     const DirectionsService = new google.maps.DirectionsService();
  //     DirectionsService.route({
  //       origin: new google.maps.LatLng(-12.0436238, -77.0840850),
  //       destination: new google.maps.LatLng(-12.0490371, -77.087387),
  //       travelMode: google.maps.TravelMode.DRIVING,
  //
  //     }, (result, status) => {
  //       if (status === google.maps.DirectionsStatus.OK) {
  //         this.setState({
  //           directions: result,
  //         });
  //       } else {
  //         console.error(`error fetching directions ${result}`);
  //       }
  //     });
  //   }
  // })
)(props =>
  <GoogleMap
    defaultCenter={{ lat: -12.0436238,
      lng: -77.0840850 }}
    zoom={props.zoom}
    ref={props.onMapMounted}
    onZoomChanged={props.onZoomChanged}
  >
    <Marker
      position={{ lat: -12.0436238,
        lng: -77.0840850 }}
      onClick={props.onToggleOpen}
      animation={google.maps.Animation.DROP}
      icon={'https://user-images.githubusercontent.com/32303322/38289513-f9b8a6c4-37ac-11e8-996f-ac7ba1e6aa2e.png'}
    >
      {/* <InfoWindow onCloseClick={props.onToggleOpen}>
        <div>
          <FaAnchor />
          {" "}
          Controlled zoom: {props.zoom}
        </div>
      </InfoWindow> */}
    </Marker>
    <Marker
      position={{ lat: -12.0463,
        lng: -77.0855}}
      animation={google.maps.Animation.BOUNCE}
      icon={'https://user-images.githubusercontent.com/32303322/38283468-89455a42-378c-11e8-8045-19b729bc2ac2.png'}
    /><Marker
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
