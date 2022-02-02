$(document).ready(function(){
	$("#demosMenu").change(function(){
	  window.location.href = $(this).find("option:selected").attr("id") + '.html';
	});


var markeurs = [
	
	{
		name: Toulon,
		lat: 43,
		lng: 5
	},
	{
		name: Ibiza,
		lat: 43,
		lng: 5
	},
	{
		name: Cuitadella,
		lat: 43,
		lng: 5
	},
	{
		name: Barcelone,
		lat: 43,
		lng: 5
	},
	{
		name: Valenciana,
		lat: 43,
		lng: 5
	},
	{
		name: Tanger,
		lat: 43,
		lng: 5
	},
	{
		name: Biserte,
		lat: 43,
		lng: 5
	},
	{
		name: Tunis,
		lat: 43,
		lng: 5
	},
	{
		name: Cagliari,
		lat: 43,
		lng: 5
	},
	{
		name: Bonifaccio,
		lat: 43,
		lng: 5
	},
	{
		name: Ajaccio,
		lat: 43,
		lng: 5
	},
	{
		name: Calvi,
		lat: 43,
		lng: 5
	},
	{
		name: Bastia,
		lat: 43,
		lng: 5
	},
	{
		name: Gène,
		lat: 43,
		lng: 5
	},
	{
		name: La Spezia,
		lat: 43,
		lng: 5
	},
	{
		name: Toulon,
		lat: 43,
		lng: 5
	},
	{
		name: Toulon,
		lat: 43,
		lng: 5
	},
	{
		name: Toulon,
		lat: 43,
		lng: 5
	},
	{
		name: Toulon,
		lat: 43,
		lng: 5
	},
	{
		name: Toulon,
		lat: 43,
		lng: 5
	},
	{
		name: Toulon,
		lat: 43,
		lng: 5
	},
	{
		name: Toulon,
		lat: 43,
		lng: 5
	},
	{
		name: Toulon,
		lat: 43,
		lng: 5
	},
	{
		name: Toulon,
		lat: 43,
		lng: 5
	},
	{
		name: Toulon,
		lat: 43,
		lng: 5
	},
	{
		name: Toulon,
		lat: 43,
		lng: 5
	},
	{
		name: Toulon,
		lat: 43,
		lng: 5
	}
	

	
	
	
	
	
	
	
	
	
	
	["Toulon", ],
	["Alexandrie", ],
	["Le pirée", ],
	["Venise", ],
	["Trieste", ],
	["Slit", ],
	["La Canée", ],
	["Alger", ],
	["Tanger", ],
	["Bizerte", ],
	["Tunis", ],
	["Barcelone", ],
	["Ciutadella", ],
	["Ibiza", ],
	["Cagliari", ],
	["Ajaccio", ],
	["Palermo", ],
	["Catania", ],
	["Malta", ],
	["Bari", ],
	["Brindisi", ],
	["Taranto", ],
	["Napoli", ],
	["Civitavecchia", ],
	["La Spezia", ],
	["Genova", ],
	["Monopoli", ],
	["Venezia", ],
	["Trieste", ],
	["Corfou", ],
	["Çanakkale", ],
	["Istanbul", ],
	["Varna", ],
	["Constansa", ],
	["Bucarest", ],
	["Odessa", ],
	["Novorossiisk", ],
	["Antalya", ],
	["Beyrouth", ],
	["Haïfa", ],
	["Port Saïd", ],
	["Le Caire", ],
	["Suez", ],
	["Djibouti", ],
	["Nairobi", ],
	["Zanzibar", ],
	["Mauricius", ],
	["Salalah", ],
	["Mascate", ],
	["Dubaï", ],
	["Abu Dhabi", ],
	["Koweït", ],
	["Singapour", ],
	["Guadeloupe", ],
	["Nuuk", ],
	["Angmassalik", ],
	["Martinique", ]
]








	
		var map = L.map('map').setView([20, 40], 2);
                    L.tileLayer(' http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg').addTo(map);

		//var marker = L.marker([48.853056, 2.349722]).addTo(map);

		var marker;
		for (var i=0; i< markeurs.length; i++){
			marker = L.marker([markeurs[i].lat, markeurs[i].lng]).addTo(map);
		}
										


             



});