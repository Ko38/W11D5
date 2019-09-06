class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }


  createMarkerFromBench(bench) {
    let lat = bench.lat;
    let lng = bench.lng;
    let myLatlng = new google.maps.LatLng(lat, lng);
    let marker = new google.maps.Marker({
      position: myLatlng,
      title: "Hello World!"
    });
    return marker;
  }

  updatemarkers(benches) {
    this.markers = {};
    for(let key of Object.keys(benches)){
      // if (this.markers[key]){
      //   continue;
      // }
      let bench = benches[key];

      let marker = this.createMarkerFromBench(bench);
      marker.setMap(this.map);
      this.markers[key] = marker;
    }
  }

}


export default MarkerManager;