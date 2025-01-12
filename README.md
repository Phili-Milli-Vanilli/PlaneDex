# Paar nützliche Commands:

Alle npm-Packages installiern. Der Command installiert alles automatisch im Frontend und Backend

`npm run install`

---

Nachdem alles installiert ist. Die Datenbank aktualisieren.

`npm run updateDB`

---

Bei Änderungen im Prisma Schema. Im Backend.

1. `cd backend`

2. `npx prisma migrate dev`

Die Datenbank wird automatisch mit dem Command erstellt und mit Seedwerten ausgefüllt. Diese könnt ihr also kaputt spielen.
