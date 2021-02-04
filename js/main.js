(function() {
    "use strict"
   
    
    
    document.addEventListener("DOMContentLoaded", function() {
        
       var map = L.map('mapa').setView([-34.719887, -58.53035], 13);
   
       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
           attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
       }).addTo(map);
       
       L.marker([-34.719887, -58.53035]).addTo(map)
           .bindPopup('Aqui estamos')
           .openPopup();


    }); //DOM CONTENT LOADED
})()