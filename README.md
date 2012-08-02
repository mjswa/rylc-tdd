# README zu RYLC-TDD #

Beispielcode zum Kapitel 4: "Testen" im Buch [Mobile Web-Apps mit JavaScript](opitz-consulting.com/go_javascriptbuch).

*   Voraussetzungen:
    *   Java Development Kit 1.6 oder neuer.
    *   Apache Maven 3.0.4 oder neuer.
    *   Die aktuelle Version von `JsTestDriver.jar` muss im lokalen Maven-Repository liegen.
        Dazu das Install-Skript `misc/install.sh` für Un*x-Systeme bzw. `misc\install.bat` für Windows ausführen.
*   Bauen des Projekts inkl. Integrationstests: `mvn clean verify -Pintegration`.
    Dazu muss [Chrome](http://www.google.com/chrome) über den Kommandozeilen-Befehl `chrome` gestartet werden können.
    Alternativ kann man Option `-Dbrowser=<Pfad zu Chrome>` beim Aufruf des mvn-Befehls angeben, beispielsweise wie folgt für OS X:

    <pre><code>$  mvn clean install -Pintegration -Dbrowser=/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome</code></pre>

*   Manuelles Ausführen der Tests via JsTestDriver (für Un*x-Systeme):
    1.   Jetty mittels `mvn jetty:run` starten.
    1.  `jstd-server.sh` ausführen
    1.   Einen Browser über die URL [http://localhost:9876](http://localhost:9876) mit JsTestDriver verbinden.
    1.   Zum Ausführen der Tests `jstd-unit.sh` aufrufen.
*   Manuelles Ausführen der Tests mit Hilfe der Spec Runner:
    1.   Jetty mittels `mvn jetty:run` starten.
    1.   Zum Ausführen von Unit Tests in Chrome den [Unit Spec Runner](http://localhost:8585/rylc-tdd/UnitSpecRunner.html) aufrufen.
