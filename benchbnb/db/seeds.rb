# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  Bench.delete_all
  bench1 = Bench.create(description: "Bench1", lat: 37.785243, lng: -122.444797)
  bench2 = Bench.create(description: "Bench2", lat: 37.790502, lng: -122.409556)
  bench3 = Bench.create(description: "Bench3", lat: 37.794608, lng: -122.414916)
  bench4 = Bench.create(description: "Bench4", lat: 37.793195, lng: -122.458849)
  bench5 = Bench.create(description: "Bench5", lat: 37.777906, lng: -122.502115)
  bench6 = Bench.create(description: "Bench6", lat: 37.850248,  lng: -122.482939)
end