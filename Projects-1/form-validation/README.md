# Zadanie 3: Sprawdzamy, czy formularz został wypełniony poprawnie

## Wymagania

1. Jeżeli nie zostały wypełnione wszystkie pola, przycisk `Submit form` powinien być `disabled`
2. Zasada ogólna - po tym jak użytkownik wypełni dane pole musi nastąpić jego walidacja oraz w przypadku wystąpienia błedu, wyświetlenie komunikatu  
3. `First Name` - imie powinno zawierać od 10 do maksymalnie 100 znaków (wyłącznie liter)
4. `Last Name` - nazwisko powinno zawierać od 10 do maksymalnie 100 znaków (wyłącznie liter), oraz opcjonalnie jeden
   myślnik dla nazwisk z dwóch członów
5. `Username` - nazwa użytkownika powinna zawierać od 10 do 30 znaków (wyłącznie cyfr lub liter)
6. `City` - tworzymy formularz wyłącznie dla osób, które mieszkają w Bydgoszczy, dlatego to pole powinno zawierać 1:1
   treść `Bydgoszcz`
7. `State` - nazwa województwa tj. `Kujawsko-pomorskie`, `kuj-pom` lub `kuj-pomorskie` inne wartości nie są prawidłowe
8. `Zip` - kod pocztowy dla Bydgoszczy obejmuje on zakres od `85-000` do `85-980`. Wpisana wartość musi być
   zweryfikowana czy mieści się w podanym zakresie oraz, czy ma prawidłowy format.
9. `Agree to terms and conditions` - zgoda musi być zaakceptowana
10. W przypadku złamania zasad dla danego pola powinien pojawić się komunikat, dla którego pola wystąpił błąd tzn. jeżeli podałem imię, które ma więcej niż 100 znaków powinienem otrzymać komunikat `First name invalid`
11. [Dla chętnych] możecie dostosować wiadomość błędu dla każdego pola i przypadku złamania walidacji np. `First name too long. Max length is 100 charts.`, które pojawiają się bezpośrednio pod nim 
