/**
 * Partie création et ouverture de indexDB
 */
 
 var db;
 window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
 
 window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
 window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange
 
 // Ouverture de la BD
 var request = window.indexedDB.open("sidaClicker");
 
 request.onerror = function(event) {
     window.alert("Pourquoi ne permettez-vous pas à ma web app d'utiliser IndexedDB?!");
   };
 request.onsuccess = function(event) {
     db = event.target.result;
   };
 
 //Gestion des erreurs
 
 /**
  * Création de la structure
  */
 
 request.onupgradeneeded=function(event){
    var db=event.target.result;

    var objectStore=db.createObjectStore("player",{keyPath: "ssn"});

    /*On rajoute tous les attributs de la BD*/
    //Points du joueurs

    /**
     * let points:number;
      let spentPointsSidaction:number;
      let spentPoints2:number;
      let spentPoints3:number;
      let peopleSaved:number;
      let rank:number;
     */
    objectStore.createIndex("points",points,{unique:false});
    objectStore.createIndex("spentPointsSidaction",spentPointsSidaction,{unique:false});
    objectStore.createIndex("spentPoints2",spentPoints2)



 
 }