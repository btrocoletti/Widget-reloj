// Widget "Dos horarios" para Scriptable (iOS).
// Editá estas dos zonas a gusto (nombres IANA: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
const ZONAS = [
  { nombre: "Buenos Aires", zona: "America/Argentina/Buenos_Aires" },
  { nombre: "Madrid", zona: "Europe/Madrid" },
];

const ahora = new Date();

// Diferencia (ms) entre la hora de la zona y la hora local del celular.
function desfase(zona) {
  const p = {};
  new Intl.DateTimeFormat("en-US", {
    timeZone: zona, hourCycle: "h23",
    year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit", second: "2-digit",
  }).formatToParts(ahora).forEach(x => (p[x.type] = x.value));
  const enZona = Date.UTC(p.year, p.month - 1, p.day, p.hour, p.minute, p.second);
  const offsetZona = enZona - Math.floor(ahora.getTime() / 1000) * 1000;
  const offsetLocal = -ahora.getTimezoneOffset() * 60000;
  return offsetZona - offsetLocal;
}

function dia(zona) {
  return new Intl.DateTimeFormat("es-AR", {
    timeZone: zona, weekday: "short", day: "numeric",
  }).format(ahora);
}

const w = new ListWidget();
w.backgroundColor = new Color("#1c1c1e");
w.setPadding(12, 14, 12, 14);

ZONAS.forEach((z, i) => {
  if (i > 0) w.addSpacer(8);
  const nombre = w.addText(z.nombre.toUpperCase());
  nombre.font = Font.semiboldSystemFont(11);
  nombre.textColor = new Color("#8e8e93");

  const fila = w.addStack();
  fila.bottomAlignContent();
  // addDate + applyTimeStyle hace que iOS avance el reloj solo, minuto a minuto.
  const h = fila.addDate(new Date(ahora.getTime() + desfase(z.zona)));
  h.applyTimeStyle();
  h.font = Font.boldMonospacedSystemFont(30);
  h.textColor = Color.white();
  fila.addSpacer(6);
  const d = fila.addText(dia(z.zona));
  d.font = Font.systemFont(12);
  d.textColor = new Color("#8e8e93");
});

// La hora avanza sola; refrescamos de vez en cuando para el día y cambios de horario de verano.
w.refreshAfterDate = new Date(Date.now() + 15 * 60 * 1000);

if (config.runsInWidget) {
  Script.setWidget(w);
} else {
  w.presentSmall();
}
Script.complete();
