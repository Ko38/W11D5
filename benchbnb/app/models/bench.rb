class Bench < ApplicationRecord
  def self.in_bounds(bounds)
    benches = Bench.all
    north_east_lat = bounds[:northEast][:lat].to_f
    north_east_lng = bounds[:northEast][:lng].to_f
    south_west_lat = bounds[:southWest][:lat].to_f
    south_west_lng = bounds[:southWest][:lng].to_f
    result_benches = []

    (0...benches.length).each do |i|
      bench = benches[i]
      lat = bench[:lat]
      lng = bench[:lng]

      if lat > south_west_lat && lat < north_east_lat && lng > south_west_lng && lng < north_east_lng

        result_benches << bench
      end
    end
    result_benches
  end
end
