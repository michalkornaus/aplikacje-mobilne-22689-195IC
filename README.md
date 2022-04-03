## aplikacje-mobilne-22689-195IC
# Lab2 - Flexboxy + nawigacja

##### Drugie laboratoria pozwoliły zapoznać się z flexboxami oraz z metodami tworzenia nawigacji w aplikacji mobilnej.
#### Pierwszy ekran zawiera informację o spread operator, spread syntax. Pod nagłówkiem Spread Operator - 22689 dostępne są dwa przyciski które odnoszą do pozostałych ekranów.
![screen1](/Lab2/img/1.jpg)
#### Drugi ekran zawiera informacje o parametrach rest z innym ustawieniem flexboxów w ustawieniu grid 
![screen2](/Lab2/img/2.jpg)
#### Trzeci ekran zawiera informację o hook'u stanu, jak widać pod nagłówkiem mamy dostęp do pozostałych ekranów (zmieniają się dynamicznie zależnie od tego gdzie jesteśmy, oraz możemy się cofnąć do ostatniego ekranu na którym byliśmy)
![screen3](/Lab2/img/3.jpg)
#### Widok głównego skryptu App.js - tworzę stackNavigator który zarządza zmianą ekranów oraz importuje wszystkie ekrany
![screen4](/Lab2/img/4.PNG)
#### Widok ekranu 1 - pierwsze element to widok z przyciskami TouchableOpacity które odpowiadają za zmianę ekranów - najważniejszym elementem jest funkcja onPress oraz parametr navigation
#### Na samym dole widzimy Page1.navigationOptions które odpowiada za tytuł nagłówka który informuje nas na jakiej stronie aktualnie się znajdujemy.
![screen5](/Lab2/img/5.PNG)
