# névnapok.json

Magyar névnapok, json formátumban.🎉📅

## Az adatok forrása 📚

Az adatokat az Országos Széchenyi Könyvtár, Magyar Elektronikus Könyvtár [névnap gyűjteményéből](https://mek.oszk.hu/00000/00056/html/196.htm) szedtem össze az `index.js` fájlban található javascript kóddal.

## Az adatok formátuma 📝

Az adatok egy JSON fájlban vannak tárolva: `nevnapok.json`
Formátum:

```json

{
"12": { // hónap
  "30": { // nap
    "other": [ // nem fő névnapok
      "Alfréda",
      "Aniziusz",
      "Dénes",
      "Ervina",
      "Hermina",
      "Honóriusz",
      "Hunor",
      "Ignác",
      "Kardos",
      "Libériusz",
      "Lotár",
      "Margit",
      "Szabin",
      "Zalán",
      "Zoárd"
    ],
      "main": [ // fő névnapok
        "Dávid"
      ]
  },
},
...

```

Így ebből a következő módon lehet elérni adatot javascriptből:
```js

nevnapok[honap][nap]["main"] 

```

## ✨Köszi, hogy itt jártál!

