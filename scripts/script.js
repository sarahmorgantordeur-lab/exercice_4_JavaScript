let allPersos = [0,50]; //variable pour stocker tous les perso

async function chargerPersos() {
  // On crée une fonction pour charger les personnages
    const div = document.getElementById("persos");

    const res = await fetch("https://thesimpsonsapi.com/api/characters"); // On fetch les personnages
    // console.log(res);



    const data = await res.json(); // On récupère les données
    // console.log(data.results);
    //boucle pour afficher chaque personnage
    data.results.forEach(element => {const div = document.createElement('div');
        
        div.className = 'perso'
        let urlImg = "https://cdn.thesimpsonsapi.com/200" + element.portrait_path;
        if (element.age!==null && element.status === 'Alive'){
            div.innerHTML = `
            <img src = ${urlImg} alt="Description de l'image" class='caracter'>
            <h2>${element.name}</h2>
            <p>${element.occupation}</p>
            <div class='ageStatus'>
                <span class='age'>Age :${element.age}</span>
                <span class='statusAlive'>${element.status}</span>
            </div>
            `;
            document.getElementById('persos').appendChild(div);
        }else if (element.age!==null && element.status === 'Deceased'){
            div.innerHTML = `
            <img src = ${urlImg} alt="Description de l'image" class='caracter'>
            <h2>${element.name}</h2>
            <p>${element.occupation}</p>
            <div class='ageStatus'>
                <span class='age'>Age : ${element.age}</span>
                <span class='statusDeceased'>${element.status}</span>
            </div>
            `;
            document.getElementById('persos').appendChild(div);
        } else if (element.age===null && element.status === 'Alive') {
            div.innerHTML = `
            <img src = ${urlImg} alt="Description de l'image" class='caracter'>
            <h2>${element.name}</h2>
            <p>${element.occupation}</p>
            <div class='ageStatus'>
                <p> </p>
                <span class='statusAlive'>${element.status}</span>
            </div>
            `;
            document.getElementById('persos').appendChild(div);
        } else if (element.age===null && element.status === 'Deceased'){
            div.innerHTML = `
            <img src = ${urlImg} alt="Description de l'image" class='caracter'>
            <h2>${element.name}</h2>
            <p>${element.occupation}</p>
            <div class='ageStatus'>
                <p> </p>
                <span class='statusDeceased'>${element.status}</span>
            </div>
            `;
            document.getElementById('persos').appendChild(div);
        } 
    });
 };

chargerPersos();

