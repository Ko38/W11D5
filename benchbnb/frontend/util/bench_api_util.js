export const fetchBenches = (northEast , southWest ) => {
  if (!northEast){
    northEast = { lat: 37.828805, lng: - 122.404218 };
  }
  if (!southWest){
    southWest = { lat: 37.707435, lng: - 122.512154 };
  }
  return $.ajax({
    method: "GET",
    url: `/api/benches`,
    data: {
      bounds: {
        northEast: northEast,
        southWest: southWest
        // northEast: {
        //   lat: 37.828805, 
        //   lng: - 122.404218 
        // },
        // southWest: {
        //   lat: 37.707435, 
        //   lng: - 122.512154
        // }
      }
    },
    error: (err) => console.log(err)
  });
};

export const createBench = (bench) => {
  return $.ajax({
    method: "POST",
    url: "/api/benches",
    data: {
      bench: {
        description: bench.description,
        lat: bench.lat,
        lng: bench.lng,
        seating: bench.seating
      }
    }
  });
};

