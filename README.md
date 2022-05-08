### aplikacje-mobilne-22689-195IC
## Lab4 - Obsługa danych wprowadzanych przez użytkownika + modale

#### Pierwszym komponentem potrzebnym do obsługi danych użytkownika jest komponent TextInput dzięki któremu możemy wprowadzać dane.
![screen1](/Lab4/img/1.PNG)
#### Po zmianie w pierwszym inpucie, zmienia sie input trzeci, którego nie można edytować.
![screen2](/Lab4/img/2.PNG)
#### Drugi input jest inputem numerycznym, możemy wpisać do niego jedynie cyfry
![screen3](/Lab4/img/3.PNG)
![screen4](/Lab4/img/4.PNG)
#### Ostatni czwarty input zmienia rozkład klawiatury aby łatwiej wpisać adres e-mail ponieważ zmienia przecinek na znak małpy.
![screen5](/Lab4/img/5.PNG)
#### Na drugim ekranie mamy do dyspozycji 3 selecty w których mamy dostępne 3 różne opcje.
![screen6](/Lab4/img/6.PNG)
#### Po zmianie jednego w każdym innym również zmienia się ta opcja.
![screen7](/Lab4/img/7.PNG)
#### Na trzecim ekranie ukazany jest switch, który po przełączeniu on/off pokaże modal.
![screen8](/Lab4/img/8.PNG)
#### Po przełączeniu switcha widzimy nasz modal wraz z wygenerowaną liczbą pseudolosową. Możemy również ukryć modal.
![screen9](/Lab4/img/9.PNG)
#### Po zamknięciu modala i ponownym przełączeniu switcha ukazuje nam się znowu modal lecz tym razem z inną liczbą.
![screen10](/Lab4/img/10.PNG)
#### Na czwartym ekranie możemy przetestować działanie komponentu/pakietu DateTimePicker. Są dostępne trzy przyciski, w jednym z nich wybierzemy datę, w drugim czas, a trzeci pokaże nam alerta z całym terminem który wybraliśmy.
![screen11](/Lab4/img/11.PNG)
#### Widok wyboru daty
![screen12](/Lab4/img/12.PNG)
#### Widok wyboru czasu
![screen13](/Lab4/img/13.PNG)
#### Pokazany alert z terminem
![screen14](/Lab4/img/14.PNG)
#### Na ostatnim piątym ekranie mamy prawie to samo co na trzecim ekranie lecz tym razem z dodatkiem komponentu ToastAndroid - czyli pasywnego modalu/powiadomienia.
![screen15](/Lab4/img/15.PNG)
#### Po ukryciu modalu, po jednej sekundzie dostajemy komunikat o jego zamknięciu. Powiadomienie to samo zniknie nie musimy ingerować w stan komunikatu.
![screen16](/Lab4/img/16.PNG)
#### Zrzut ekranu kodu źródłowego ekranu pierwszego - różne wariacje komponentu TextInput
![screen17](/Lab4/img/17.PNG)
#### Zrzut ekranu trzeciego - jak widzimy mamy komponent Modal który zawiera w sobie cały kawałek strony który zostanie wyświetlony po ukazaniu. Niżej w komponencie Switch, po przełączeniu go, uruchamiają się 3 funkcje, która zmienia faktyczny stan switcha, generuje liczbę oraz zmienia stan modalu.
![screen18](/Lab4/img/18.PNG)
#### Zrzut czwartego ekranu, gdzie możemy wybrać datę oraz czas. Jak widać dzięki zaimportowanemu komponentowi nie zajmuje to dużo kodu i jest dość proste do zaimplelentowania.
![screen19](/Lab4/img/19.PNG)