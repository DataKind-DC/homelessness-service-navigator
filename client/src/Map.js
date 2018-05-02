import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import PropTypes from "prop-types";

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `600px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={props.defaultZoom}
    defaultCenter={props.defaultCenter}
  >
  </GoogleMap>
);


export class Map extends React.PureComponent {
  static defaultProps = {
    defaultZoom: 8,
    defaultCenter: {
      lat: 38.897957,
      lng: -77.036560
    }
  };

  static propTypes = {
    defaultZoom: PropTypes.number,
    defaultCenter: PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number
    })
  };

  render() {
    return (
      <MyMapComponent
        {...this.props}
      />
    )
  }
}