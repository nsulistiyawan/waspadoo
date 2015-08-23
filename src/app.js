var map = L.map('home').setView([-6.2528, 106.7178], 11);
L.Icon.Default.imagePath = "bower_components/leaflet/dist/images";
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  maxZoom: 18,
  id: 'nsulistiyawan.mf04olc2',
  accessToken: 'pk.eyJ1IjoibnN1bGlzdGl5YXdhbiIsImEiOiJ4UlVYbHc4In0.wknf3H5dvlJPUg1GT9YToQ'
}).addTo(map);

var markerClusters = L.markerClusterGroup({
  disableClusteringAtZoom: 14
});

var crimeLocation = null;

oboe('/data/crimelocation.json')
  .done(function(result) {
    var data = result.data;
    crimeLocation = data;
    for (var i = 0; i < data.length; i++) {
      var marker = new L.marker([parseFloat(data[i].latitude), parseFloat(data[i].longitude)])
        .bindPopup("<strong>" + data[i].title + "</strong><br>" + data[i].content + "<br><a  target='_blank' href=" + data[i].url + ">" + data[i].url + "</a>");
      markerClusters.addLayer(marker);
    }
    map.addLayer(markerClusters);
  })
  .fail(function() {
    console.log('fail');
    // we don't got it
  });

// oboe('/data/jabodetabek.geo.json')
//   .done(function(result) {
//     var points = {
//       "type": "FeatureCollection",
//       "features": []
//     };
//
//     console.log('iki data jabodetabek');
//     console.log(result);
//
//   })
//   .fail(function() {
//     console.log('fail');
//   });

//
// var toggle = L.easyButton({
//   states: [{
//     stateName: 'show-summary',
//     icon: '<strong>Show Summary</strong>',
//     title: 'show summary',
//     onClick: function(control) {
//       map.removeLayer(markerClusters);
//       control.state('show-points');
//     }
//   }, {
//     icon: '<strong>Show Points</strong>',
//     stateName: 'show-points',
//     onClick: function(control) {
//       map.addLayer(markerClusters);
//       control.state('show-summary');
//     },
//     title: 'show points'
//   }]
// });
// toggle.addTo(map);
