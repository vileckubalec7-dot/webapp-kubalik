## Autor
Viliam Kubalík

# AI Workshop – Pracovný list

## ČASŤ 1: Setup a základy

### 1. CLI vs GUI

CLI znamená Command Line Interface a znamená to, že s nástrojom komunikujeme cez príkazový riadok.

GUI znamená Graphical User Interface – klasické okná, tlačidlá, myš.

**Výhody CLI:**

* Ľahko sa automatizuje
* Funguje cez terminál (SSH)
* Menej náročné na výkon

---

### 2. Sessions

**Dôvody pre novú session:**

* keď je konverzácia príliš dlhá a neprehľadná
* keď mením tému alebo projekt

---

## ČASŤ 2: Base usage a IDE integrácia

### 3. Konfigurácia

Lokálne nastavenia nie sú v Git repozitári, pretože sú špecifické pre používateľa a nemajú sa zdieľať s tímom.

---

### 4. Context Window a Tokeny

Compaction = automatické skrátenie (komprimácia) konverzácie.

Nevýhoda: niektoré detaily sa môžu stratiť.

---

### 5. IDE Integrácie

Ľahšie sa kontrolujú zmeny pred ich akceptovaním.

---

## ČASŤ 3: Permissions

### 7. Dangerous Mode

* AI môže prepísať git históriu
* AI môže zmazať súbory
* AI môže spustiť nebezpečné skripty

Použitie: v kombinácii so sandbox prostredím.

---

### 8. Sandbox

Sandbox je ako bezpečné testovacie prostredie oddelené od hlavného systému.

---

## ČASŤ 4: Git

 

Git je dôležitý pri práci s AI, pretože:

 

*  umožňuje vrátiť späť zmeny, ktoré AI urobila 
*  poskytuje kontrolu nad tým, čo AI upravila (história zmien, diff)

  

Pred väčšími zmenami je dobré urobiť commit.

---

## ČASŤ 5: Plan Mode

Použiť:

* pri zložitejších úlohách
* keď si nie som istý výsledkom
* pri úlohách ovplyvňujúcich celý projekt

Výhody:

* predídeš zbytočným chybám
* môžeš ovplyvniť riešenie pred implementáciou
* AI lepšie pochopí tvoje požiadavky

---

## ČASŤ 6: Context Engineering

### SPEC.md

Je lepšie, lebo oddelí detailnú špecifikáciu od inštrukcií a udrží prehľadnosť.

---

### CLAUDE.md

Stáva sa súčasťou context window.

Má byť stručný, aby nezaberal zbytočne tokeny.

---

### Context Engineering

* pridávame relevantné informácie
* šetríme tokeny
* používame formátovanie pre lepšiu čitateľnosť

XML tagy sú lepšie, lebo jasne oddeľujú štruktúru.

---

## ČASŤ 7: Nástroje

### Thinking Mode

* spotrebuje viac tokenov
* pomalšia odpoveď

Vypnúť pri jednoduchých úlohách.

---

### Dokumentácia

* šetrí tokeny
* lepšie sa spracováva

---

### MCP

Umožňuje AI efektívnejšie pracovať s externými zdrojmi.

---

## ČASŤ 8: Skills

Výhoda: šetrí čas a nemusíme všetko nastavovať od začiatku.

---

## ČASŤ 9: Hooks

Hook sa spustí po úprave súboru.

Vykoná napr. formátovanie kódu.

---

## ČASŤ 10: Feedback Loop

AI:

* otestuje výsledok
* opraví chyby

Playwright umožňuje testovať webstránku.

Nevýhoda: vyššia spotreba zdrojov.

AI má tendenciu písať testy, ktoré vždy prejdú.

Preto ich treba kontrolovať.

---

## Multi-Agent systémy

Vhodné pre automatizované úlohy.

Nevýhoda: menšia kontrola.

Potrebuje:

* jasné zadania
* testy
* sandbox
* dobrý plán

---

## Zhrnutie

* Context Window → C
* Compaction → A
* Sandbox → B
* Skills → E
* Custom Commands → D
* Hooks → F
* Feedback Loop → G
* Ralph Loop → H

---

## Reflexia

Najviac ma zaujalo, ako AI dokáže automatizovať vývoj a pracovať s kódom.

Výhody:

* zrýchlenie práce
* pomoc pri programovaní

Riziká:

* chyby AI
* slepé dôverovanie

Využitie:
AI môžem používať pri programovaní, debugovaní a učení nových technológií.
