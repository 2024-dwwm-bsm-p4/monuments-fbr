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

// ----------------------------------------------------------------------------
// --------------- Création des variables -------------------------------------
// ----------------------------------------------------------------------------
let stylesImg = [eiffelTowerImg, notreDameImg, archOfTriumphImg, montSaintMichelImg, versaillesImg];


// -----------------------------------------------------------
// --------------- Affichages des informations ---------------
// -----------------------------------------------------------
monumentName.textContent="";
monumentLocation.textContent="";
monumentDesc.textContent="";
// --------------- Tour Eiffel ---------------
if (eiffelTowerBtn.addEventListener("click", function() {
    monumentName.textContent="Tour Eiffel";
    monumentLocation.innerHTML="Paris, <strong>France</strong>";
    monumentDesc.textContent="La Tour Eiffel est une célèbre structure en fer forgé située à Paris, en France. Conçue par l'ingénieur Gustave Eiffel et achevée en 1889, elle mesure environ 330 mètres de hauteur, ce qui en fait l'une des plus hautes tours du monde. Initialement critiquée par certains artistes et intellectuels, la tour est devenue un symbole emblématique de la France et un incontournable du paysage parisien. Elle est visitée par des millions de touristes chaque année et offre des vues panoramiques spectaculaires sur la ville depuis ses plateformes d'observation. La Tour Eiffel est également illuminée la nuit, créant un spectacle enchanteur.";
    eiffelTowerImg.style.filter = "none";
}));