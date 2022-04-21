### aplikacje-mobilne-22689-195IC
## Lab3 - Renderowanie listy danych + obsługa progresu
##### Wszystkie zrzuty ekranu są z mojego telefonu podczas korzystania z aplikacji Expo

#### Pierwszy ekran zawiera sortowanie i filtrowanie 100 pseudolosowych liczb z zakresu 0-1000. Widać że lista jest posortowana rosnąco
![screen1](/Lab3/img/1.jpg)
#### Liczby posortowane malejąco
![screen2](/Lab3/img/2.jpg)
#### Widok listy danych na końcu ekranu z sortowaniem rosnącym
![screen3](/Lab3/img/3.jpg)
#### Filtrowanie odbywa się przy pomocy SearchBar'a w którym możemy wpisać liczbę lub część liczby którą chcemy znaleźć - w tym wypadku po wpisaniu 12 dostaje dwie liczby 121 oraz 512.
![screen4](/Lab3/img/4.jpg)
#### Po wpisaniu 33 dostałem cztery liczby zawierające ten ciąg cyfr.
![screen5](/Lab3/img/5.jpg)
#### Posortowany malejąco przefiltrowany zbiór danych
![screen6](/Lab3/img/6.jpg)
#### Drugi ekran zawiera "leniwy ładowanie" które wyświetlają ciągi pseudolowych liter w długich ciągach.
![screen7](/Lab3/img/7.jpg)
#### Po dojechaniu na koniec dostępnego ekranu wczytują się nowe dane.
![screen8](/Lab3/img/8.jpg)
![screen9](/Lab3/img/9.jpg)
#### Trzeci, czwarty i piąty ekran zawierają element ActivityIndicator który umożliwia wskazanie użytkownikowi że coś się wczytuje i powinien poczekać
![screen10](/Lab3/img/10.jpg)
#### Na czwartym ekranie ActivityIndicator jest mały i zielony
![screen11](/Lab3/img/11.jpg)
#### Na piątym ekranie element jest duży i czarny
![screen12](/Lab3/img/12.jpg)
#### Kawałek kodu z ekranu pierwszego, który pokazuje wypełnienie tabeli stoma pseudolosowymi liczbami przy pomocy metody fill() oraz map(). Metoda filterAndSort pozwala na jednoczesne filtrowanie i sortowanie całego zbioru danych liczbowego.
![screen13](/Lab3/img/13.png)
#### Widok ekranu drugiego w którym renderuje leniwe ładowanie przy pomocy metody fetchItems.
![screen14](/Lab3/img/14.png)
#### Metoda fetchItems korzysta z kolejnego komponentu api, który pokazany jest na kolejnym zrzucie ekranu
![screen15](/Lab3/img/15.png)
#### W pliku LazyListAPI generują się pseudolosowe ciągi i wysyłane są przy pomocy metody fetchItems oraz funkcji Promise.resolve.
![screen16](/Lab3/img/16.png)