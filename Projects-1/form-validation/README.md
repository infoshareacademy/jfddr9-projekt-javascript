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

12. If not all fields have been filled in, the `Submit form` button should be `disabled`
13. General rule - after the user fills in a given field, it must be validated and, in the event of an error, a message is displayed
14. `First Name` - the name should contain from 10 to a maximum of 100 characters (letters only)
15. `Last Name` - the name should contain from 10 to a maximum of 100 characters (letters only), and optionally one
    hyphen for names with two members
16. `Username` - username should contain from 10 to 30 characters (only numbers or letters)
17. `City` - we create the form only for people who live in Bydgoszcz, so this field should contain 1:1
    content 'Bydgoszcz'
18. `State` - name of the province, i.e. `Kujawsko-pomorskie`, `kuj-pom` or `kuj-pomorskie` other values ​​are not correct
19. `Zip` - zip code for Bydgoszcz, it covers the range from `85-000` to `85-980`. The entered value must be
    verified that it falls within the given range and that it is in the correct format.
20. `Agree to terms and conditions` - consent must be accepted
21. In case of breaking the rules for a given field, a message should appear for which field the error occurred, i.e. if I entered a name that has more than 100 characters, I should receive the message `First name invalid`
22. [For volunteers] you can customize the error message for each field and case of validation violation, e.g. `First name too long. Max length is 100 charts.` which appear directly below it
