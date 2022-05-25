### aplikacje-mobilne-22689-195IC
## Lab5 - Obsługa gestów użytkownika

#### Pierwszym komponenetem jest ScrollView dzięki któremu otrzymujemy łatwą i przejrzystą metodę przewijania elementów na naszej stronie. Na pierwszym ekranie znajduje się 10 boxów, na drugim zrzucie widzimy dół listy z widocznym scrollbarem.
<img src="/Lab5/img/1.jpg" width="360" height="800"> <img src="/Lab5/img/2.jpg" width="360" height="800">
#### Na drugim ekranie znajduje się 12 boxów, tym razem inaczej rozmieszczonych w dwie kolumny wraz z lekkimi zmianiamy z ekranu 1.
<img src="/Lab5/img/3.jpg" width="360" height="800"> <img src="/Lab5/img/4.jpg" width="360" height="800">
#### Na trzecim ekranie znajdują się elementy Touchable (Opacity i Highlight) wraz z komponentem WebView. Na poniższym zrzutach pokazane jest użycie komponentów Touchable. Różnią się od siebie stylem po naciśnieciu elementu; W przypadku Opacity przycisk zmienia swoją przeźroczystość, Highlight zmienia swój kolor lecz działanie mają takie same. Dodatkowo przyciski mają przypisane funkcje dodawania i odejmowania.
<img src="/Lab5/img/5.jpg" width="360" height="800"> <img src="/Lab5/img/6.jpg" width="360" height="800">
#### Na poniższym zrzucie ekranu ukazane jest działanie komponentu WebView który wyświetla wybraną przez nas stronę w specjalnym widoku. 
<img src="/Lab5/img/7.jpg" width="360" height="800">
#### W takim widoku możemy się swobodnie poruszać jak na normalnej stronie internetowej oraz dzięki przyciskowi możemy równie szybko zamknąć ten widok. 
<img src="/Lab5/img/8.jpg" width="360" height="800">
#### Na ostatnim czwartym ekranie zademonstrowane jest działanie komponentu Swipeable. 
<img src="/Lab5/img/9.jpg" width="360" height="800">
#### Z prawej strony elementu swipeable po przesunięciu palcem dostajemy dwa przyciski. 
<img src="/Lab5/img/10.jpg" width="360" height="800">
#### Z lewej strony po geście palcem możemy zmienić stan komponentu (w tym wypadku zmienieć kolor tła) 
<img src="/Lab5/img/11.jpg" width="360" height="800">
#### Po przesunięciu palcem widzimy że zmienił się kolor całego komponentu. 
<img src="/Lab5/img/12.jpg" width="360" height="800"> <img src="/Lab5/img/13.jpg" width="360" height="800">
 <img src="/Lab5/img/14.jpg" width="360" height="800">

#### Kod źródłowy generujący pudełka na pierwszym ekranie w widoku dzięki któremu zademonstruję działanie ScrollView
![kod1](/Lab5/img/1.png)
#### Kod generujący boxy na drugim ekranie, na którym są dwie kolumny.
![kod2](/Lab5/img/2.png)
#### CSS dla elementów na drugim ekranie, przy pomocy flexDirection + flexWrap jak i alignItems możemy uzyskać efekt dwóch kolumn.
![kod3](/Lab5/img/3.png)
#### Zmienne dla ekranu trzeciego z komponentem Touchable. setValueWeb zmienia stan bool'a który determiuje czy wyświetlić widok WebView. Const'y onPressMinus oraz onPressPlus pozwalają dodawać i odejmować od zmiennej aby przetestować przyciski.
![kod4](/Lab5/img/4.png)
#### Kod pokazujące komponenty Touchable wraz z WebView zawartym w ternany operatorze dzięki czemu wyświetla się wtedy kiedy chcemy.
![kod5](/Lab5/img/5.png)
#### Kod pokazujący element Swipeable z parametrami. leftContent oraz rightButtons określają co znajduje się z lewej jak i prawej strony głównego elementu. onLeftActionRelease pozwala zdefiniować akcję podczas gestu w lewą stronę (w tym wypadku zmienia się kolor).
![kod6](/Lab5/img/6.png)
#### Pokazane komponenty z których korzysta element Swipeable.
![kod7](/Lab5/img/7.png)