window.addEventListener('scroll', function() {
    let header = document.querySelector('header');
  let scrollPosition = window.scrollY;
  
    if (scrollPosition > 530 ) { // Altezza di scorrimento da raggiungere
      header.style.backgroundColor = 'white'; // Cambia il colore di sfondo quando raggiunge l'altezza
      let bottoneNav = this.document.querySelector('nav button');
      bottoneNav.style.backgroundColor = 'green';
    } else {
      header.style.backgroundColor = '#ffc017'; // Ripristina il colore di sfondo iniziale
      let bottoneNav = document.querySelector('nav button');
      bottoneNav.style.backgroundColor = 'black';
    }
  });
  
  
  
  
  const lettereM = document.querySelectorAll('g > g path'); // Seleziona tutte le lettere "M"
  const numDaAnimare = 100; // Numero di lettere "M" da animare
  let lettereDaAnimare = []; // Array delle lettere "M" da animare
  let indiceCorrente = 0; // Indice corrente nell'array delle lettere animate
  
  function animazioneCiclica() {
    if (indiceCorrente < numDaAnimare) {
      const letteraCorrente = lettereDaAnimare[indiceCorrente];
      letteraCorrente.setAttribute('opacity', 1);
      indiceCorrente++;
      setTimeout(animazioneCiclica, 50);
    } else if (indiceCorrente >= numDaAnimare && indiceCorrente < lettereDaAnimare.length * 2) {
      const indiceScomparsa = lettereDaAnimare.length * 2 - indiceCorrente - 1;
      const letteraScomparsa = lettereDaAnimare[indiceScomparsa];
      letteraScomparsa.setAttribute('opacity', 0);
      indiceCorrente++;
      setTimeout(animazioneCiclica, 50);
    } else {
      indiceCorrente = 0; // Resetta l'indice per ricominciare l'animazione
      setTimeout(animazioneCiclica, 100); // Intervallo tra un ciclo e l'altro (1 secondo)
    }
  }
  
  while (lettereDaAnimare.length < numDaAnimare) {
    const indiceCasuale = Math.floor(Math.random() * lettereM.length);
    const lettera = lettereM[indiceCasuale];
    if (!lettereDaAnimare.includes(lettera)) {
      lettereDaAnimare.push(lettera);
      lettera.setAttribute('opacity', 0);
    }
  }
  
  animazioneCiclica();
  
  