# Widget Reloj: dos horarios

Widget para la pantalla de inicio del celular que muestra la hora en dos lugares a la vez.

```
┌──────────────────────┐
│ BUENOS AIRES         │
│ 18:30  sáb 4         │
│ ──────────────────── │
│ MADRID               │
│ 23:30  sáb 4         │
└──────────────────────┘
```

Por defecto muestra **Buenos Aires** y **Madrid**. Abajo se explica cómo cambiarlos.

---

## iPhone (con la app Scriptable)

1. Instalá **Scriptable** (gratis) desde la App Store.
2. Abrí la app, tocá **+** y pegá el contenido de [`ios/DosHorarios.js`](ios/DosHorarios.js).
3. Arriba de todo, en `ZONAS`, cambiá los nombres y las zonas si querés otros lugares.
4. Ponele un nombre al script (por ejemplo "Dos horarios").
5. En la pantalla de inicio, mantené apretado → **+** → **Scriptable** → widget chico o mediano.
6. Mantené apretado el widget → **Editar widget** → en *Script* elegí "Dos horarios".

La hora avanza sola, minuto a minuto.

## Android

### Opción A: descargar el APK ya compilado
1. En GitHub, andá a la pestaña **Actions** → la última ejecución de **Compilar APK** que esté en verde.
2. Abajo, en *Artifacts*, descargá **DosRelojes-apk** (es un .zip con `app-debug.apk` adentro).
3. Pasá el APK al celular y abrilo (hay que permitir "instalar apps de origen desconocido").
4. Mantené apretada la pantalla de inicio → **Widgets** → **Dos Relojes** → arrastralo.

La app no tiene ícono propio en el cajón de apps: solo el widget.

### Cambiar los lugares (Android)
Editá [`android/app/src/main/res/values/config.xml`](android/app/src/main/res/values/config.xml):

```xml
<string name="nombre_1">Buenos Aires</string>
<string name="zona_1">America/Argentina/Buenos_Aires</string>
```

Hacé el commit y GitHub Actions compila un APK nuevo solo.

## Nombres de zonas útiles

| Lugar | Zona |
|---|---|
| Buenos Aires | `America/Argentina/Buenos_Aires` |
| Montevideo | `America/Montevideo` |
| Santiago de Chile | `America/Santiago` |
| Ciudad de México | `America/Mexico_City` |
| Nueva York | `America/New_York` |
| Miami | `America/New_York` |
| Los Ángeles | `America/Los_Angeles` |
| Madrid / Barcelona | `Europe/Madrid` |
| Londres | `Europe/London` |
| Roma | `Europe/Rome` |

Lista completa: <https://en.wikipedia.org/wiki/List_of_tz_database_time_zones>

El horario de verano se ajusta solo.
