# Funkcionális specifikáció
## 1. Jelenlegi helyzet leírása
A cél egy egyszerű számológép létrehozása, amely lehetővé teszi alapvető matematikai műveletek elvégzését egy könnyen kezelhető és átlátható webes felületen. 
Az alkalmazás gyors és egyszerű megoldást kínál mindennapi számítási igények kielégítésére.

## 2. Vágyálomrendszer leírása
Az alkalmazás indításakor egy minimalista számológép jelenik meg a felhasználó számára. Az alkalmazás alapvető funkciói:

- Számok bevitele.
- Matematikai műveletek kiválasztása (összeadás, kivonás, szorzás, osztás).
- Az eredmény kiszámítása és megjelenítése.
- A kijelző tartalmának törlése. A felület letisztult és reszponzív, így különböző eszközökön egyaránt használható.

## 3. Jelenlegi üzleti folyamatok modellje
Számos felhasználó igényel egy gyors és egyszerű eszközt alapvető matematikai számítások elvégzésére. 
A bonyolult kalkulátorok helyett az egyszerű kezelhetőségre van szükség, különösen olyan helyzetekben, ahol időhatékony megoldásra van szükség.

## 4. Igényelt üzleti folyamatok modellje
Az alkalmazás könnyen kezelhető webes felületet biztosít a matematikai számításokhoz, amely:

- Az alapvető matematikai műveletekre koncentrál.
- Gyorsan elérhető és használható.
- Különböző eszközökön is megbízhatóan működik.

## 5. Követelménylista

| Id | Modul | Név | Leírás |
| :---: | --- | --- | --- |
| K1 | Főmenü | Cím | „Egyszerű számológép” cím megjelenítése a képernyő tetején. |
| K2 | Kijelző | Számok megjelenítése | Az aktuális bevitt számok és eredmények megjelenítése.|
| K3 | Gombok | Szám gombok | Számok (0-9) bevitelének lehetősége. |
| K4 | Gombok | Műveleti gombok | Matematikai műveletek kiválasztása: összeadás, kivonás, szorzás, osztás. |
| K5 | Gombok | Törlés | A kijelző tartalmának törlése. |
| K6 | Gombok | Eredmény kiszámítása | Az aktuális művelet eredményének megjelenítése. |
| K7 | Stílus | Megjelenés | Letisztult, reszponzív dizájn. |

## 6. Használati esetek
Az alkalmazás célközönsége minden olyan felhasználó, akinek gyors és egyszerű matematikai számításokra van szüksége, legyen az diák, irodai dolgozó, vagy bárki más.

Használati forgatókönyvek:
Számok bevitele és műveletek végrehajtása:

- A felhasználó rákattint egy számgombra, majd kiválaszt egy matematikai műveletet, például az összeadást, és megadja a következő számot.
- Az „=” gomb megnyomásával megjelenik az eredmény a kijelzőn.

Törlés funkció használata:

- A „C” gomb megnyomásával a kijelző tartalma törlődik.

## 7. Terjedelem
Az alkalmazás kódja HTML, CSS és JavaScript formájában valósul meg, a teljes kód terjedelme körülbelül 150-200 sor közé tehető.

