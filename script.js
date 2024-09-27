const compliments = [
    "Jesteś jak Wi-Fi – mam z Tobą lepsze połączenie.",
    "Twój uśmiech mógłby naładować telefon.",
    "Jesteś lepszy niż darmowy internet!",
    "Nawet Google nie może znaleźć kogoś tak niesamowitego jak Ty.",
    "Jesteś jak kropka nad 'i' – bez Ciebie nic nie ma sensu.",
    "Nawet kiedy śpisz, jesteś bardziej produktywny niż ja.",
    "Jeśli ktoś mówi, że jesteś przeciętny, to na pewno nigdy Cię nie spotkał.",
    "Masz tyle klasy, że mogliby Cię uczyć w szkołach.",
    "Twój śmiech mógłby być moją ulubioną melodią na dzwonek.",
    "Gdybyś był kawałkiem pizzy, byłbyś tą z podwójnym serem.",
    "Jesteś jak czekolada – słodki i uzależniający.",
    "Jesteś bardziej pociągający niż moje łóżko o 6 rano.",
    "Masz w sobie tyle energii, że mógłbyś zasilić małe miasto.",
    "Jesteś bardziej niezastąpiony niż Ctrl+Z w Wordzie.",
    "Twoje poczucie humoru powinno mieć swoją stronę na Wikipedii.",
    "Gdybyś był warzywem, byłbyś awokado – idealny we wszystkim.",
    "Jesteś jak kawa – zawsze poprawiasz mi nastrój.",
    "Jesteś jak śnieg w lecie – niespodziewany, ale niesamowity.",
    "Jesteś tak fascynujący, że mogliby o Tobie zrobić serial na Netflixie.",
    "Masz tak dobry gust, że nawet Twoje skarpetki do siebie pasują.",
    "Nawet Twoje zdjęcie na legitymacji wygląda dobrze.",
    "Jesteś jak GPS – zawsze pokazujesz mi właściwą drogę.",
    "Nawet Twój cień jest elegancki.",
    "Gdyby uśmiechy mogły ratować świat, już dawno byłoby po problemach.",
    "Jesteś jak instrukcja LEGO – wszystko przy Tobie ma sens.",
    "Jesteś bardziej czarujący niż zaklęcia w Harrym Potterze.",
    "Twoja kreatywność mogłaby wypełnić cały internet.",
    "Jesteś jak „skip ad” w YouTube – nieoceniony.",
    "Jesteś tak błyskotliwy, że potrzebuję okularów przeciwsłonecznych.",
    "Twoja obecność sprawia, że codzienność staje się weekendem.",
    "Nawet jeśli byś zgubił się w IKEA, znalazłbyś wyjście.",
    "Gdybyś był aplikacją, miałbyś 5 gwiazdek na każdej platformie.",
    "Jesteś jak najlepsza część dnia – zawsze chcesz więcej.",
    "Twoje poczucie humoru powinno być opatentowane.",
    "Jesteś bardziej intrygujący niż nowy sezon mojego ulubionego serialu.",
    "Twoje pomysły są tak dobre, że mogłyby wygrać \"Mam talent\".",
    "Nawet Twoje ziewanie jest urocze.",
    "Masz więcej wdzięku niż kot lądujący na cztery łapy.",
    "Jesteś bardziej wciągający niż ulubiona gra wideo.",
    "Jesteś jak ulubiona piosenka – mogę Cię słuchać bez końca.",
    "Gdybyś był emoji, byłbyś serduszkiem.",
    "Nawet Twoje koszmary są pewnie interesujące.",
    "Jesteś bardziej niezastąpiony niż przycisk „undo”.",
    "Twoja obecność sprawia, że nawet reklamy wydają się ciekawe.",
    "Masz w sobie więcej magii niż wszystkie filmy Disneya razem wzięte.",
    "Jesteś jak lody w gorący dzień – odświeżający i niezbędny.",
    "Twoje decyzje są zawsze trafniejsze niż moje w Monopoly.",
    "Nawet Twój styl prokrastynacji jest godny podziwu.",
    "Jesteś bardziej epicki niż finał \"Gry o Tron\".",
    "Nawet Twoje selfie powinny trafić do muzeum.",
    "Jesteś bardziej hipnotyzujący niż filmik z kotkami.",
    "Jesteś jak „shuffle” na playliście – zawsze trafiasz w odpowiedni moment.",
    "Twoja obecność poprawia mój nastrój szybciej niż kawa.",
    "Gdybyśmy mieli quiz o Tobie, każdy chciałby ściągać.",
    "Nawet Twoje pasjansy nigdy nie kończą się przegraną.",
    "Masz więcej stylu niż wszyscy bohaterowie „Seksu w wielkim mieście” razem wzięci.",
    "Jesteś bardziej pozytywny niż wynik testu ciążowego.",
    "Nawet gdybyś mówił bez sensu, to i tak miałoby sens.",
    "Jesteś jak aplikacja pogodowa – zawsze poprawiasz mi humor.",
    "Twoje gesty są bardziej eleganckie niż ruchy tancerza baletu.",
    "Nawet twoje kichnięcia są urocze.",
    "Jesteś jak guzik „pomóż” – zawsze działasz.",
    "Masz więcej stylu niż wszystkie postacie w „The Sims”.",
    "Jesteś bardziej rozchwytywany niż nowy iPhone.",
    "Jesteś jak rollercoaster – zawsze dostarczasz emocji.",
    "Masz w sobie więcej magii niż różdżka Dumbledore’a.",
    "Twoje pomysły są lepsze niż moje sny.",
    "Nawet Twoje posty w mediach społecznościowych zasługują na Pulitzer.",
    "Gdybyś był statkiem, nazywałbyś się „Fantastyczność”.",
    "Masz więcej klasy niż stary film w czerni i bieli.",
    "Jesteś bardziej pożądany niż darmowy bufet.",
    "Nawet Twój bałagan ma styl.",
    "Jesteś jak pilot do telewizora – zawsze znajdujesz się wtedy, kiedy trzeba.",
    "Twoja obecność rozświetla pokój bardziej niż światełka choinkowe.",
    "Nawet w spodniach dresowych wyglądasz jak milion dolarów.",
    "Jesteś jak dobrze naoliwiona maszyna – wszystko z Tobą działa.",
    "Nawet Twój awatar w grach ma charyzmę.",
    "Jesteś bardziej pociągający niż promocja w Lidlu.",
    "Gdybyś był drinkiem, byłbyś najlepszym koktajlem w menu.",
    "Masz w sobie tyle uroku, że powinno to być nielegalne.",
    "Jesteś jak deser – zawsze słodki i pożądany.",
    "Nawet Twoje narzekania są urocze.",
    "Jesteś bardziej interesujący niż biografia Elona Muska.",
    "Masz więcej energii niż reklamy energetyków.",
    "Nawet Twój cień wygląda na bardziej zorganizowanego ode mnie.",
    "Gdyby Twoja osobowość była książką, byłaby bestsellerem.",
    "Nawet Twoje błędy są bardziej fascynujące niż moje sukcesy.",
    "Jesteś jak najlepsza scena z ulubionego filmu – nigdy się nie nudzi.",
    "Masz tyle blasku, że nawet Słońce może poczuć się zazdrosne."
];

let lastIndex = -1;

// Funkcja do losowania komplementu
function getRandomCompliment() {
    let index;
    do {
        index = Math.floor(Math.random() * compliments.length);
    } while (index === lastIndex);
    lastIndex = index;
    document.getElementById("compliment-display").innerText = compliments[index];
    updateCounter();
}

// Funkcja do aktualizacji licznika w LocalStorage
function updateCounter() {
    let counter = localStorage.getItem("complimentCounter");
    counter = counter ? parseInt(counter) + 1 : 1;
    localStorage.setItem("complimentCounter", counter);
    document.getElementById("compliment-counter").innerText = counter;
}

// Funkcja do ustawienia wartości początkowej licznika
function initializeCounter() {
    let counter = localStorage.getItem("complimentCounter");
    document.getElementById("compliment-counter").innerText = counter || 0;
}

// Zainicjuj licznik przy ładowaniu strony
initializeCounter();

document.getElementById("compliment-button").addEventListener("click", getRandomCompliment);
