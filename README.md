# Projekt-Readme: Nützliche Commands

## Voraussetzungen

### Node.js installieren

Falls Node.js noch nicht installiert ist, hole dir die neueste Version von der offiziellen [Node.js-Website](https://nodejs.org).

---

## Abhängigkeiten installieren

Mit dem folgenden Befehl werden alle benötigten Packages für das Root-, Frontend- und Backend-Verzeichnis installiert:

```bash
npm run install
```

---

## Datenbank-Setup & Migration

### Schritt 1: Prisma Migration ausführen

Nachdem alle Abhängigkeiten installiert sind und bei Änderungen im Prisma Schema, führe die folgenden Befehle aus, um die Datenbank zu initialisieren oder zu aktualisieren:

1. Navigiere in das Backend-Verzeichnis:
    ```bash
    cd backend
    ```
2. Führe die Migration aus:
    ```bash
    npx prisma migrate dev
    ```

Die Datenbank wird automatisch erstellt und mit Seed-Daten gefüllt.

---

## Zurücksetzen der Datenbank

Falls du die Datenbank auf den initialen Zustand zurücksetzen möchtest, verwende diesen Befehl:

```bash
npm run updateDB
```

### **Wichtige Hinweise:**

1. **Änderungen an der Datenbank werden dabei gelöscht.**  
   Alles, was nachträglich hinzugefügt oder geändert wurde, geht verloren.
2. **Nur die Seed-Daten werden wiederhergestellt.**  
   Es empfiehlt sich nach jedem Pull, den `updateDB`-Befehl auszuführen, da die Datenbank nicht über Git geteilt wird.
3. **Schema-Änderungen beachten:**  
   Falls jemand das `prisma.schema` geändert hat, musst du den Migration-Befehl (`npx prisma migrate dev`) erneut ausführen.

---

## Zusammenfassung der wichtigsten Commands

| Befehl                   | Beschreibung                                                                   |
| ------------------------ | ------------------------------------------------------------------------------ |
| `npm run install`        | Installiert alle Packages für Root, Frontend und Backend.                      |
| `npx prisma migrate dev` | Erstellt die Datenbank und wendet Schema-Änderungen an.                        |
| `npm run updateDB`       | Setzt die Datenbank auf den Initialzustand zurück (Seed-Daten werden geladen). |
