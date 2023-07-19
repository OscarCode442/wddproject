// function initMap() {
//   const map = new google.maps.Map(document.getElementById('map'), {
//     center: { lat: 33.1581, lng: -117.3506 }, // Replace with the actual coordinates
//     zoom: 12 // Adjust the zoom level as needed
//   });

//   const marker = new google.maps.Marker({
//     position: { lat: 33.1581, lng: -117.3506 }, // Replace with the actual coordinates
//     map: map,
//     title: 'Bountiful Foods'
//   });
// }

function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 33.1581, lng: -117.3506 }, // Replace with the actual coordinates
    zoom: 12 // Adjust the zoom level as needed
  });

  const marker = new google.maps.Marker({
    position: { lat: 33.1581, lng: -117.3506 }, // Replace with the actual coordinates
    map: map,
    title: 'Bountiful Foods'
  });
}