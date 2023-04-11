const nevnapok = {};

const nevekEsNapok = document
  .getElementsByTagName("pre")[0]
  .innerText.replace(/  +/g, " ") // Legyen egy space az elválasztó
  .replace(/,\n /g, ",") // Fix Mária miatt
  .split("\n")
  .slice(4) // Az első négy sor felesleges információkat tartalmaz
  .slice(0, -1); // Az utolsó sor is bezavar

for (const nevEsNapok of nevekEsNapok) {
  const [nev, napok] = nevEsNapok.split(" ");

  for (const datum of napok.split(",")) {
    const [honap, nap, fo] = datum.split(".");
    const foVagySima = fo == "*" ? "main" : "other";
    
    nevnapok[honap] = nevnapok[honap] || {}; // ha még nincs a hónap létrehozva
    nevnapok[honap][nap] = nevnapok[honap][nap] || {}; // ha még nincs a nap létrehozva

    nevnapok[honap][nap][foVagySima] = nevnapok[honap][nap][foVagySima] || [];

    nevnapok[honap][nap][foVagySima].push(nev);
  }
}
