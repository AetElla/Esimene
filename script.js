(function() {
    //Range tööreziim, vigade leidmiseks
    "use strict";
    
    //clock
    // Kui DOM elemendid on kuvatud, siis alles funktsioon läheb tööle
    document.addEventListener("DOMContentLoaded", function() {
        
        let c = document.getElementById("clock");
       
      //  setTimeout(updateClock, 0);
        
        setInterval(updateClock, 0);
        
        function updateClock() {
            
            let date = new Date();
            let h = date.getHours();
            let m = date.getMinutes();
            let s = date.getSeconds();
            let p = " a.m."

            //If laused, et keskööl ei oleks kell 0:0:0
           /* if (h < 10) {
                h = "0" + h;
            } */

            if (h > 12){
                h = (h-12);
                p = " p.m.";
            }

            if (m < 10) {
                m = "0" + m;
            }

            if (s < 10) {
                s = "0" + s;
            }

            c.innerHTML = h + ":" + m + ":" + s + p;
            
        };
        
    });
    

    
    document.getElementById("form").addEventListener("submit", estimateDelivery);
    
    let e = document.getElementById("delivery");
    e.innerHTML = "0,00 &euro;";
    
    function estimateDelivery(event) {
        event.preventDefault();
        
        let linn = document.getElementById("linn");
        
        
        if (linn.value === "") {
            
            alert("Palun valige linn nimekirjast");
            
            linn.focus(); //Mis juhtub, kui ära kustutada..
            
            return;
        
        } else {
            
            let sum = 0.00;
            
            if (linn.value === "trt"){
                sum += 2.50;
             }
            if (linn.value === "nrv"){
                sum += 2.50;
             }
            
            if (linn.value === "prn"){
                sum += 3.00;
             }
            
            
            
            if (document.getElementById("v1").checked){
                sum += 5.00
            } 
            
            if(document.getElementById("v2").checked) {
                sum += 1.00
            }
            
            e.innerHTML = sum + " &euro;";
            
        }
        
        var eesnimi = document.getElementById("fname");
        
        if (eesnimi.value === ""){
            alert("Sisesta eesnimi!");
            
            return;
        }
        
        let perenimi = document.getElementById("lname");
        
        if (perenimi.value === ""){
            alert ("Sisesta perenimi!");

            
            return;
        }
        
        /* SIIN ON KOOD MIS VÕIKS EEMALDADA NUMBRID, KAKS varianti ja kumbki ei tööta*/
        //let sisaldabNumbrit = /\D/;
        /*
        if (/[^a-zA-Z]/.test(eesnimi)){
            alert ("Nimi ei tohi sisaldada numbrit!");
            
            focus.eesnimi;
            
            return;
        }*/
        
        /*  var regex = /^[a-zA-Z]+$/;
        
        if (regex.test(eesnimi){
            alert("Nimi ei tohi sisaldada numbreid!");
            
            return;
        }*/
        
        
        var kuller1 = document.getElementById("kuller1").checked;
        var kuller2 = document.getElementById("kuller2").checked; 
        var kuller3 = document.getElementById("kuller3").checked;
        
        if (!kuller1 && !kuller3 && !kuller2) {
            alert("Vali kulleri aeg");
            
        }
        

        
        console.log("Tarne hind on arvutatud");
    }
    
})();

// map
//VÕTI SRTINGINA 
let mapAPIKey = "AqLLRE37SJGqIxXEYxezPUa6fF2oCzl3cvG4n05FtFIVBrotBYxchpMYYpwuxBak";

// Väljapool funktsiooni määratud kaardi objekt, et saaks objekti poole korduvalt pöörduda
let map;

//Kaardi kood
function GetMap() {
    
    "use strict";

    //keskpunkti kordinaadid
    let centerPoint = new Microsoft.Maps.Location(
            59.4209976, 
            27.5127277
        );
    
    

    // Uus kaardi objekt, anda talle API võtmele ligipääs ja määrata keskpunkti kordinaadid, zoom ja kaardi tüüp
    // KUI tahta korduvalt pöörduda, siis "let map" deklareerida väljapoolt funktsiooni
    map = new Microsoft.Maps.Map("#map", {
        credentials: mapAPIKey,
        center: centerPoint, //KESKPUNKTi kordinaadid
        zoom:9,
        mapTypeId: Microsoft.Maps.MapTypeId.road, // Mapi tüüp
        disablePanning: true // Üles-alla, vaskule-paremale liigutamiseks kasutajale
    });
    
    /*
    infobox = new Microsoft.Maps.Infobox(map.getCenter(), {
        visible: false
    });
    
    infobox.setMap(map);*/
    
    // MARKER
    let pushpin = new Microsoft.Maps.Pushpin(centerPoint, {
            title: 'Toila, Ida-Virumaa',
            subTitle: 'Mõnus suvituspaik',
            text: 'Toila'
        });
    /*
    pushpin.metadata = {
        title: 'Külasta kindlasti',
        description: 'Oru parki!'
    };
    
    Microsoft.Maps.Events.addHandler(pushpin, 'click', pushpinClicked)*/
    

    map.entities.push(pushpin);

}
/*
function pushpinClicked (e) {
    if(e.target.mettadata){
        infobox.setOptions ({
            location: e.target.getLocation(),
            title: e.target.metadata.title,
            description: e.target.metadata.description,
            visable: true
        });
    }
}
*/
// https://dev.virtualearth.net/REST/v1/Locations?q=1000 Vin Scully Ave, Los Angeles,CA&key=YOUR_KEY_HERE

