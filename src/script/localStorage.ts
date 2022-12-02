if (localStorage.getItem("Points")==null){
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

}


while(true){
    setTimeout(() =>{
        save();
    }, 5000*60);
};

window.onbeforeunload = function(event){
    save();
};

function save(){
    /**
     * Récupération de l'objet
     */
     var Points=localStorage.getItem("Points") as string;
     var spentPointsSidaction=localStorage.getItem("spentPointsSidaction") as string;
     var spentPointsPasteur=localStorage.getItem("spentPointsPasteur") as string;
     var spentPointsInsee=localStorage.getItem("spentPointsInsee") as string;
     var infected=localStorage.getItem("infected") as string;
     var deaths=localStorage.getItem("deaths") as string;
     var letaly=localStorage.getItem("letaly") as string;
     var transmission=localStorage.getItem("transmission") as string;
     var data=localStorage.getItem("data") as string;
     var tick=localStorage.getItem("tick") as string;

     /**
      * Mise à jour des items
      */
     localStorage.setItem("Points",Points);
     localStorage.setItem("spentPointsSidaction",spentPointsSidaction);
     localStorage.setItem("spentPointsPasteur",spentPointsPasteur);
     localStorage.setItem("spentPointsInsee",spentPointsInsee);
     localStorage.setItem("infected",infected);
     localStorage.setItem("deaths",deaths);
     localStorage.setItem("letaly",letaly);
     localStorage.setItem("transmission",transmission);
     localStorage.setItem("data",data);
     localStorage.setItem("tick",tick);
}