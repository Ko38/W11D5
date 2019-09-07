import React from "react";
import MarkerManager from "../util/marker_manager";
import {withRouter} from "react-router-dom";

class BenchMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // let bounds = {
    //   northEast: {
    //     // lat: 37.828805,
    //     // lng: - 122.404218 
    //     lat: 37.891198,
    //     lng: - 122.382541
    //   },
    //   southWest: {
    //     lat: 37.707435,
    //     lng: - 122.512154
    //   }
    // }
    // this.props.updateBounds(bounds);
    // set the map to show SF

    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13
    };


    // wrap this.mapNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    google.maps.event.addListener(this.map, "bounds_changed", () => {
      let bounds = this.map.getBounds();

      let northEastLat = bounds.getNorthEast().lat();
      let northEastLng = bounds.getNorthEast().lng();
      let southWestLat = bounds.getSouthWest().lat();
      let southWestLng = bounds.getSouthWest().lng();
      let tempBounds = {
        northEast: { lat: northEastLat, lng: northEastLng },
        southWest: { lat: southWestLat, lng: southWestLng }
      };

      this.props.updateFilterAction("bounds", tempBounds);
      // this.props.updateBounds(tempBounds);
      // this.props.fetchBenches(tempBounds);
    });

    google.maps.event.addListener(this.map, 'click', (e) => {
      let lat = e.latLng.lat();
      let lng = e.latLng.lng();
      this.props.history.push(`/benches/new?lat=${lat}&lng=${lng}`);
    });
    this.markerManager = new MarkerManager(this.map);
    // this.markerManager.updatemarkers(this.props.benches);
  }

  componentDidUpdate(prevProps) {
    this.markerManager.updatemarkers(this.props.benches);
  }

  render() {
    return (
      // <div id="map-container" ref="map">
      //   benchMap
      <div id="map-container" ref={map => this.mapNode = map}> 
          not working
      </div>

      // </div>
    );
  }
}

export default withRouter(BenchMap);