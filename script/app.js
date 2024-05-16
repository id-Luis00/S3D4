/* // crea il div della casella

const divCasella = document.createElement('div')
divCasella.classList.add('casella')

// crea l'alloggio del numeretto della casella

const elementCasella = document.createElement('p')

elementCasella.innerText = 'numero'

// inseriamo l'elemento dentro la casella

divCasella.appendChild(elementCasella)


// per inserire le caselle nel DOM dobbiamo metterle dentro la section con id='tabellone'

const sectionTabellone = document.getElementById('tabellone')

sectionTabellone.appendChild(divCasella)
 */
// inseriamo tot caselle grazie ad una funzione

function addCaselle() {

    for (i = 0; i < 77; i++) {
        
        // crea il div della casella
        const divCasella = document.createElement('div')
        divCasella.classList.add('casella')

        // crea l'alloggio del numeretto della casella
        const elementCasella = document.createElement('p')

        elementCasella.innerText = 'numero'

        // inseriamo l'elemento dentro la casella
        divCasella.appendChild(elementCasella)

        // per inserire le caselle nel DOM dobbiamo metterle dentro la section con id='tabellone'
        const sectionTabellone = document.getElementById('tabellone')

        sectionTabellone.appendChild(divCasella)
    }

}


// scriviamo un ciclo che stampi da 1 a 76 caselle

