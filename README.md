# README zu RYLC-TDD #

Beispielcode zum Kapitel 4: Testen im Buch [Mobile Web-Apps mit JavaScript](opitz-consulting.com/go_javascriptbuch).

*   Voraussetzungen:
    *   Java Development Kit 1.6 oder neuer.
    *   Apache Maven 3.0.4 oder neuer.
*   Bauen des Projekts inkl. Integrationstests: `mvn clean verify -Pintegration`.
    Dazu muss [Chrome](http://www.google.com/chrome) über den Kommandozeilen-Befehl `chrome` gestartet werden können.
    Alternativ kann die Property `browser` in `pom.xml` angepasst und dort der gewünschte Befehl zum Starten von Chrome
    eingetragen werden.
*   Manuelles Starten und Ausführen der Tests:
    1.   Jetty starten mittels `mvn jetty:run`.
    1.   In Chrome den [Unit Spec Runner](http://localhost:8585/rylc-tdd/UnitSpecRunner.html) aufrufen.
