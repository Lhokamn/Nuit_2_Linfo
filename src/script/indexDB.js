/**
 * Partie création et ouverture de indexDB
 */
 
 var db;
 window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
 
 window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
 window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange
 
 // Ouverture de la BD
 const  request = window.indexedDB.open("sidaClicker");
 
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
    const db=request.result;

    const objectStore=db.createObjectStore("player",{keyPath: "id"});

    /*On rajoute tous les attributs de la BD*/
    //Points du joueurs
    objectStore.createIndex("points",["points"],{unique:false});
    objectStore.createIndex("spentPointsSidaction",["spentPointsSidaction"],{unique:false});
    objectStore.createIndex("spentPointsPasteur",["spentPointsPasteur"],{unique:false});
    objectStore.createIndex("spentPointsInsee",["spentPointsInsee"],{unique:false});
    objectStore.createIndex("infected",["infected"],{unique:false});
    objectStore.createIndex("deaths",["deaths"],{unique:false});
    objectStore.createIndex("letality",["letality"],{unique:false});
    objectStore.createIndex("transmission",["transmission"],{unique:false});
    objectStore.createIndex("data",["data"],{unique:false});
    objectStore.createIndex("tick",["tick"],{unique:false}); 
 };

 request.onsuccess = function(){
  const db=request.result;
  const transaction = db.transaction("player","readwrite");

  const objectStore=transaction.objectStore("player");
  const pointsIndex = objectStore.index("points");
  const spentPointsSidactionIndex = objectStore.index("spentPointsSidaction");
  const spentPointsPasteurIndex = objectStore.index("spentPointsPasteur");
  const spentPointsInseeIndex = objectStore.index("spentPointsInsee");
  const infectedIndex = objectStore.index("infected");
  const deathsIndex = objectStore.index("deaths");
  const letalityIndex = objectStore.index("letality");
  const transmissionIndex = objectStore.index("transmission");
  const dataIndex = objectStore.index("data");
  const tickIndex = objectStore.index("tick");

  objectStore.put({id: 1,points: 0, spentPointsSidaction:0,spentPointsPasteur:0,spentPointsInsee:0,
    infected:0, deaths:0,letality:0,transmission:1,data:0.2,tick:0
  });

  const idQuery = objectStore.get(1);

  idQuery.onsuccess = function(){
    console.log('idQuery',idQuery.result);
  };

  //Fermeture de la connextion
  transaction.oncomplete =function(){
    db.close();
  };


 };