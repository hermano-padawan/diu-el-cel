# Diu el Cel

Web d'horòscop creada amb Astro.

## Actualitzar l'horòscop diari

Els dotze continguts són a `src/content/horoscopes/`. Cada signe té un fitxer Markdown propi.

Per actualitzar el dia:

1. Canvia `date` als dotze fitxers.
2. Substitueix els dos paràgrafs inicials i els textos sota `Amor`, `Feina` i `Benestar`.
3. Actualitza `color`, `number`, `moment` i `description` al bloc superior si cal.
4. Conserva el nom dels fitxers i els camps `name`, `symbol`, `element`, `dates` i `order`.

La portada llegeix automàticament la data i ordena els signes segons `order`.

```bash
npm run dev
npm run build
```
