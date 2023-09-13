# js-array-carousel

## Consegna:**
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

### MILESTONE 1**

Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un’immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.
### MILESTONE 2**

Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
### MILESTONE 3**

Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.


1. per prima cosa faccio la struttura di html contenente un carosello come lo screenshot.
2. faccio array delle immagini in js.
3. faccio delle variabili per dichiarare i bottoni e il slider-wrapper.
4. faccio un ciclo for per array delle immagini.
5. prendo tutti le classi item e le salvo in un array.
6. tolgo classe hide al primo elemento.
7. al click di next faccio sparire item corrente e faccio apparire il prossimo item.
8. faccio la stessa cosa del punto 7 per il bottone prev.(al contrario)
9. nascondo il bottone prev dopo il primo item.
10. nascondo il bottone next all'ultimo item.