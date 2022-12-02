/**
 * Créations des items stocker dans le navigateur
 */
localStorage.setItem("Points","0");
localStorage.setItem("spentPointsSidaction","0");
localStorage.setItem("spentPointsPasteur","0");
localStorage.setItem("spentPointsInsee","0");
localStorage.setItem("infected","0");
localStorage.setItem("deaths","0");
localStorage.setItem("letaly","0");
localStorage.setItem("transmission","1");
localStorage.setItem("data","0.2");
localStorage.setItem("tick","0");

/**
 * Récupération de l'objet
 */
Point:string=localStorage.getItem("Points");
spentPointsSidaction:string=localStorage.getItem("spentPointsSidaction");
spentPointsPasteur:string=localStorage.getItem("spentPointsPasteur");
spentPointsInsee:string=localStorage.getItem("spentPointsInsee");
infected:string=localStorage.getItem("infected");
deaths:string=localStorage.getItem("deaths");
letaly:string=localStorage.getItem("letaly");
transmission:string=localStorage.getItem("transmission");
data:string=localStorage.getItem("data");
tick:string=localStorage.getItem("tick");