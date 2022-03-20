## aplikacje-mobilne-22689-195IC
# Lab1 - Kalkulator

##### Pierwsze laboratoria skupiały się na rozpoczęciu pracy przy aplikacjach mobilnych. 

#### W celu utworzenia kalkulatora należy najpierw utworzyć nowy projekt - możemy to uczynić na parę sposób - ja korzystam z polecenia *expo init Calculator* który tworzy nowy projekt o nazwie Calculator
![screen1](/Calculator/img/1.PNG)
#### Następnie przy użyciu polecenia *npm run web* można uruchomić serwer dzięki któremu możemy sprawdzić jak prezentuje się nasza strona dzięki emulatorom lub użyć kodu QR na telefonie
![screen2](/Calculator/img/2.PNG)
#### Widok kalkulatora w przeglądarce przy użyciu ustawień przykładowego Iphone'a - dodatkowa funkcjonalność, którą dopisałem jest tryb nocny, którego można przełączać ikonką w górnym lewym rogu.
![screen3](/Calculator/img/3.PNG)
#### Domyślny widok to tryb nocny - widok trybu dziennego - zmienia się ikonka oraz odwracają się kolory poszczególnych sekcji.
![screen4](/Calculator/img/4.PNG)
#### Przykładowe działania na kalkulatorze:
![screen5](/Calculator/img/5.PNG)
![screen6](/Calculator/img/6.PNG)
#### Widok na przeglądarce bez emulowania rozmiarów telefonu - jak widać strona dalej jest dobrze wyskalowana.
![screen7](/Calculator/img/7.PNG)
#### Po ściągnieciu aplikacji Expo na telefon możemy skanować kody QR projektów.
![screen10](/Calculator/img/10.jpg)
#### Pogląd aplikacji na moim telefonie po zeskanowaniu kodu QR przy pomocy aplikacji Expo.
![screen8](/Calculator/img/8.jpg)
![screen9](/Calculator/img/9.jpg)
#### Podgląd funkcji render() wewnątrz głównego pliku aplikacji App.js. Dzięki stanowi darkMode sprawdzam czy tryb nocny jest włączony czy nie i na podstawie tego zmieniam odpowiednie style komponentom. Dodatkowo przekazuje kolejnym komponentom *Display* oraz *Buttons* (odpowiadające za sekcje wyświetlania wyników oraz przycisków numeracji i operacji) obecny stan, aby na podstawie tego mogły one zmienić kolor tekstów.
![screen11](/Calculator/img/11.PNG)
