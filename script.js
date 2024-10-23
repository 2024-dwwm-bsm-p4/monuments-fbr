// -------------------------------------------------------------
// --------------- Déclaration des variables -------------------
// -------------------------------------------------------------
let eiffelTowerBtn = document.getElementById("eiffelTowerBtn");
let notreDameBtn = document.getElementById("notreDameBtn");
let archOfTriumphBtn = document.getElementById("archOfTriumphBtn");
let montSaintMichelBtn = document.getElementById("montSaintMichelBtn");
let versaillesBtn = document.getElementById("versaillesBtn");

let eiffelTowerImg = document.getElementById("eiffelTowerImg");
let notreDameImg = document.getElementById("notreDameImg");
let archOfTriumphImg = document.getElementById("archOfTriumphImg");
let montSaintMichelImg = document.getElementById("montSaintMichelImg");
let versaillesImg = document.getElementById("versaillesImg");

let monumentName = document.getElementById("monumentName");
let monumenLocation = document.getElementById("monumenLocation");
let monumentDesc = document.getElementById("monumentDesc");

let bottomPage = document.getElementsByClassName("bottomPage");

// ----------------------------------------------------------------------------
// --------------- Création des variables -------------------------------------
// ----------------------------------------------------------------------------
let stylesImg = [eiffelTowerImg, notreDameImg, archOfTriumphImg, montSaintMichelImg, versaillesImg];
var map = document.getElementById("map");
var eiffelTowerMarker;
var notreDameMarker;
var archOfTriumphMarker;
var montSaintMichelMarker;
var versaillesMarker;

// -----------------------------------------------------------
// --------------- Affichages des informations ---------------
// -----------------------------------------------------------
monumentName.textContent="";
monumentLocation.textContent="";
monumentDesc.textContent="";
// --------------- Tour Eiffel ---------------
if (eiffelTowerBtn.addEventListener("click", function() {
    
    monumentName.textContent="Tour Eiffel";
    monumentLocation.innerHTML="Paris, <b>France</b>";
    monumentDesc.textContent="La Tour Eiffel est une célèbre structure en fer forgé située à Paris, en France. Conçue par l'ingénieur Gustave Eiffel et achevée en 1889, elle mesure environ 330 mètres de hauteur, ce qui en fait l'une des plus hautes tours du monde. Initialement critiquée par certains artistes et intellectuels, la tour est devenue un symbole emblématique de la France et un incontournable du paysage parisien. Elle est visitée par des millions de touristes chaque année et offre des vues panoramiques spectaculaires sur la ville depuis ses plateformes d'observation. La Tour Eiffel est également illuminée la nuit, créant un spectacle enchanteur.";
    eiffelTowerImg.style.filter = "none";
    eiffelTowerMarker = L.marker([48.8584, 2.2945]).addTo(map);
    eiffelTowerMarker.bindPopup("<b>Tour Eiffel</b><br>Paris, <b>France</b>").openPopup();
    monumentName.classList.add('slidein');
    monumentLocation.classList.add('slidein');
    monumentDesc.classList.add('slidein');
}));

if (eiffelTowerImg.addEventListener("click", function() {
    
    monumentName.textContent="Tour Eiffel";
    monumentLocation.innerHTML="Paris, <b>France</b>";
    monumentDesc.textContent="La Tour Eiffel est une célèbre structure en fer forgé située à Paris, en France. Conçue par l'ingénieur Gustave Eiffel et achevée en 1889, elle mesure environ 330 mètres de hauteur, ce qui en fait l'une des plus hautes tours du monde. Initialement critiquée par certains artistes et intellectuels, la tour est devenue un symbole emblématique de la France et un incontournable du paysage parisien. Elle est visitée par des millions de touristes chaque année et offre des vues panoramiques spectaculaires sur la ville depuis ses plateformes d'observation. La Tour Eiffel est également illuminée la nuit, créant un spectacle enchanteur.";
    eiffelTowerImg.style.filter = "none";
    eiffelTowerMarker = L.marker([48.8584, 2.2945]).addTo(map);
    eiffelTowerMarker.bindPopup("<b>Tour Eiffel</b><br>Paris, <b>France</b>").openPopup();
    monumentName.classList.add('slidein');
    monumentLocation.classList.add('slidein');
    monumentDesc.classList.add('slidein');
}));

// --------------- Notre-Dame ---------------
if (notreDameBtn.addEventListener("click", function() {
    
    monumentName.textContent="Notre-Dame";
    monumentLocation.innerHTML="Paris, <b>France</b>";
    monumentDesc.textContent="Notre-Dame de Paris est un monument majeur de l'histoire de France, dont la construction débuta en 1163 sous l'impulsion de l'évêque Maurice de Sully et s'étendit sur près de deux siècles, jusqu'au milieu du 14e siècle. Ce chef-d'œuvre de l'architecture gothique a été le théâtre d'événements historiques marquants, tels que le couronnement de Napoléon Bonaparte en 1804 et la béatification de Jeanne d'Arc en 1909.";
    notreDameImg.style.filter = "none";
    notreDameMarker = L.marker([48.852968, 2.349902]).addTo(map);
    notreDameMarker.bindPopup("<b>Notre-Dame</b><br>Paris, <b>France</b>").openPopup();
    monumentName.classList.add('slidein');
    monumentLocation.classList.add('slidein');
    monumentDesc.classList.add('slidein');
}));

if (notreDameImg.addEventListener("click", function() {
    
    monumentName.textContent="Notre-Dame";
    monumentLocation.innerHTML="Paris, <b>France</b>";
    monumentDesc.textContent="Notre-Dame de Paris est un monument majeur de l'histoire de France, dont la construction débuta en 1163 sous l'impulsion de l'évêque Maurice de Sully et s'étendit sur près de deux siècles, jusqu'au milieu du 14e siècle. Ce chef-d'œuvre de l'architecture gothique a été le théâtre d'événements historiques marquants, tels que le couronnement de Napoléon Bonaparte en 1804 et la béatification de Jeanne d'Arc en 1909.";
    notreDameImg.style.filter = "none";
    notreDameMarker = L.marker([48.852968, 2.349902]).addTo(map);
    notreDameMarker.bindPopup("<b>Notre-Dame</b><br>Paris, <b>France</b>").openPopup();
    monumentName.classList.add('slidein');
    monumentLocation.classList.add('slidein');
    monumentDesc.classList.add('slidein');
}));

// --------------- Arc de Triomphe ---------------
if (archOfTriumphBtn.addEventListener("click", function() {
    
    monumentName.textContent="Arc de Triomphe";
    monumentLocation.innerHTML="Paris, <b>France</b>";
    monumentDesc.textContent="L'Arc de Triomphe, situé sur la place Charles-de-Gaulle à Paris, est un monument emblématique érigé en 1806 sur ordre de Napoléon Bonaparte pour célébrer les victoires de ses armées. Achevé en 1836, il mesure 50 mètres de haut et 45 mètres de large, offrant une vue imprenable sur la capitale depuis son sommet. Inspiré de l'architecture romaine, l'arc est orné de sculptures monumentales représentant des scènes de batailles et des figures allégoriques. Au pied de l'Arc se trouve la tombe du Soldat inconnu, commémorant les soldats morts pour la France, avec une flamme éternelle allumée chaque soir.";
    archOfTriumphImg.style.filter = "none";
    archOfTriumphMarker = L.marker([48.873791, 2.295027]).addTo(map);
    archOfTriumphMarker.bindPopup("<b>Arc de Triomphe</b><br>Paris, <b>France</b>").openPopup();
    monumentName.classList.add('slidein');
    monumentLocation.classList.add('slidein');
    monumentDesc.classList.add('slidein');
}));

if (archOfTriumphImg.addEventListener("click", function() {
    
    monumentName.textContent="Arc de Triomphe";
    monumentLocation.innerHTML="Paris, <b>France</b>";
    monumentDesc.textContent="L'Arc de Triomphe, situé sur la place Charles-de-Gaulle à Paris, est un monument emblématique érigé en 1806 sur ordre de Napoléon Bonaparte pour célébrer les victoires de ses armées. Achevé en 1836, il mesure 50 mètres de haut et 45 mètres de large, offrant une vue imprenable sur la capitale depuis son sommet. Inspiré de l'architecture romaine, l'arc est orné de sculptures monumentales représentant des scènes de batailles et des figures allégoriques. Au pied de l'Arc se trouve la tombe du Soldat inconnu, commémorant les soldats morts pour la France, avec une flamme éternelle allumée chaque soir.";
    archOfTriumphImg.style.filter = "none";
    archOfTriumphMarker = L.marker([48.873791, 2.295027]).addTo(map);
    archOfTriumphMarker.bindPopup("<b>Arc de Triomphe</b><br>Paris, <b>France</b>").openPopup();
    monumentName.classList.add('slidein');
    monumentLocation.classList.add('slidein');
    monumentDesc.classList.add('slidein');
}));

// --------------- Mont Saint-Michel ---------------
if (montSaintMichelBtn.addEventListener("click", function() {
    
    monumentName.textContent="Mont Saint-Michel";
    monumentLocation.innerHTML="Le Mont-Saint-Michel, <b>France</b>";
    monumentDesc.textContent="Le Mont-Saint-Michel est un îlot rocheux situé dans une vaste baie, célèbre pour ses marées spectaculaires, entre la Normandie et la Bretagne. Surmonté par une abbaye bénédictine fondée au 8e siècle, il est un chef-d'œuvre de l'architecture médiévale, avec ses murs fortifiés et ses rues étroites qui mènent à l'église abbatiale au sommet. L'îlot, autrefois accessible uniquement à marée basse, est aujourd'hui relié au continent par une passerelle. Classé au patrimoine mondial de l'UNESCO, le Mont-Saint-Michel est un site spirituel, historique et touristique majeur, attirant des millions de visiteurs chaque année.";
    montSaintMichelImg.style.filter = "none";
    montSaintMichelMarker = L.marker([48.6361, -1.5119]).addTo(map);
    montSaintMichelMarker.bindPopup("<b>Mont Saint-Michel</b><br>Le Mont-Saint-Michel, <b>France</b>").openPopup();
    monumentName.classList.add('slidein');
    monumentLocation.classList.add('slidein');
    monumentDesc.classList.add('slidein');
}));

if (montSaintMichelImg.addEventListener("click", function() {
    
    monumentName.textContent="Mont Saint-Michel";
    monumentLocation.innerHTML="Le Mont-Saint-Michel, <b>France</b>";
    monumentDesc.textContent="Le Mont-Saint-Michel est un îlot rocheux situé dans une vaste baie, célèbre pour ses marées spectaculaires, entre la Normandie et la Bretagne. Surmonté par une abbaye bénédictine fondée au 8e siècle, il est un chef-d'œuvre de l'architecture médiévale, avec ses murs fortifiés et ses rues étroites qui mènent à l'église abbatiale au sommet. L'îlot, autrefois accessible uniquement à marée basse, est aujourd'hui relié au continent par une passerelle. Classé au patrimoine mondial de l'UNESCO, le Mont-Saint-Michel est un site spirituel, historique et touristique majeur, attirant des millions de visiteurs chaque année.";
    montSaintMichelImg.style.filter = "none";
    montSaintMichelMarker = L.marker([48.6361, -1.5119]).addTo(map);
    montSaintMichelMarker.bindPopup("<b>Mont Saint-Michel</b><br>Le Mont-Saint-Michel, <b>France</b>").openPopup();
    monumentName.classList.add('slidein');
    monumentLocation.classList.add('slidein');
    monumentDesc.classList.add('slidein');
}));

// --------------- Versailles ---------------
if (versaillesBtn.addEventListener("click", function() {
    
    monumentName.textContent="Château de Versailles";
    monumentLocation.innerHTML="Versailles, <b>France</b>";
    monumentDesc.textContent="Le Château de Versailles, situé à une vingtaine de kilomètres de Paris, est l'un des plus célèbres monuments historiques de France. Construit au 17e siècle sous le règne de Louis XIV, il symbolise la grandeur de la monarchie absolue française. Initialement un modeste pavillon de chasse, il a été transformé en un somptueux palais avec des jardins à la française conçus par André Le Nôtre. Le château est célèbre pour sa Galerie des Glaces, une immense salle ornée de miroirs et de lustres, ainsi que pour ses appartements royaux et ses nombreuses fontaines. Le domaine a également été le théâtre de nombreux événements historiques, comme la signature du Traité de Versailles en 1919, mettant fin à la Première Guerre mondiale. Aujourd'hui, c'est un site touristique incontournable et un symbole de l'art et de l'architecture classique française.";
    versaillesImg.style.filter = "none";
    versaillesMarker = L.marker([48.8049, 2.1204]).addTo(map);
    versaillesMarker.bindPopup("<b>Château de Versailles</b><br>Versailles, <b>France</b>").openPopup();
    monumentName.classList.add('slidein');
    monumentLocation.classList.add('slidein');
    monumentDesc.classList.add('slidein');
}));

if (versaillesImg.addEventListener("click", function() {
    
    monumentName.textContent="Château de Versailles";
    monumentLocation.innerHTML="Versailles, <b>France</b>";
    monumentDesc.textContent="Le Château de Versailles, situé à une vingtaine de kilomètres de Paris, est l'un des plus célèbres monuments historiques de France. Construit au 17e siècle sous le règne de Louis XIV, il symbolise la grandeur de la monarchie absolue française. Initialement un modeste pavillon de chasse, il a été transformé en un somptueux palais avec des jardins à la française conçus par André Le Nôtre. Le château est célèbre pour sa Galerie des Glaces, une immense salle ornée de miroirs et de lustres, ainsi que pour ses appartements royaux et ses nombreuses fontaines. Le domaine a également été le théâtre de nombreux événements historiques, comme la signature du Traité de Versailles en 1919, mettant fin à la Première Guerre mondiale. Aujourd'hui, c'est un site touristique incontournable et un symbole de l'art et de l'architecture classique française.";
    versaillesImg.style.filter = "none";
    versaillesMarker = L.marker([48.8049, 2.1204]).addTo(map);
    versaillesMarker.bindPopup("<b>Château de Versailles</b><br>Versailles, <b>France</b>").openPopup();
    monumentName.classList.add('slidein');
    monumentLocation.classList.add('slidein');
    monumentDesc.classList.add('slidein');
}));

// -----------------------------------------------------------------------
// --------------- La Carte de France avec API & marqueurs ---------------
// -----------------------------------------------------------------------

// --------------- Initialisation de la carte, -----------------------
// --------------- Coordonnées centrées sur la France ----------------
map = L.map('map').setView([46.6034, 1.8883], 5);

// --------------- Charger les tuiles (tiles) de la carte via OpenStreetMap ---------------
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);