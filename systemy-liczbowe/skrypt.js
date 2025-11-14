function przeliczNaBinarny () {
        // Pobranie wartości z pola edycyjnego
    const decimalNumber = parseInt(document.getElementById('decimalNumber').value);
    const resultParagraph = document.getElementById('result');
   // Sprawdzenie czy wprowadzono poprawną liczbę
    if (isNaN(decimalNumber) || decimalNumber < 0) {
        resultParagraph.innerHTML = 'Brak obliczeń';
        return;
    }
// Algorytm zamiany liczby dziesiętnej na binarną
    // K1: Czytaj liczba dziesiętna (L)
    let L = decimalNumber;
     // K2: Liczba binarna (B) przypisz pusty napis ""
    let B = "";
// K3-K5: Pętla konwersji
    do {
          // K3: B przypisz L mod 2
        B = (L % 2 ) + B;
         // K4: L = L/2 (zaokrąglona do niższej całkowitej)
        L = Math.floor(L / 2);
    } while (L > 0); // K5: Jeśli L = 0 idź do K6; w przeciwnym razie idź do K3

     // K6: Odwróć napis B - już odwrócony w pętli (dodajemy na początku)

       // Formatowanie: rozdzielenie spacją co cztery cyfry od prawej strony
        let formatted = "";
        let length = B.length;

     // Dodajemy spację co 4 cyfry od prawej strony
     for (let i = 0; i < length; i++){
         // Jeśli to nie pierwsza cyfra i jesteśmy na pozycji wielokrotności 4 od prawej
         if (i > 0 && (length - i) % 4 === 0){
            formatted += " ";
         }
         formatted += B[i];
     }

       // Dodanie oznaczenia (2) w indeksie dolnym
       resultParagraph.innerHTML = formatted + '<sub>(2)</sub>';
}