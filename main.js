
// Datos de los puestos de votación con latitud, longitud e información
const puestosDeVotacion = [
 {nombre: "I.E.TEC.JOSE CASTILLO BOLIVAR", latitud: 10.891466385672564, longitud: -74.80776362400663,  informacion:"958 Votos "},
{nombre: "I.E.BICENTENARIO DE SOLEDAD", latitud: 10.89272505339485, longitud: -74.79753806729623,  informacion:"799 Votos "},
{nombre: "I.E.JHON F. KENNEDY", latitud: 10.9132787121064, longitud: -74.77177488087351,  informacion:"752 Votos "},
{nombre: "I.E.NTRA.SRA LAS MISERICORDIAS", latitud: 10.91572006916898, longitud: -74.77063052757114,  informacion:"751 Votos "},
{nombre: "I.E.ANTONIO RAMON MORENO", latitud: 10.926660999820678, longitud: -74.76164856939681,  informacion:"612 Votos "},
{nombre: "I.E.TECNICA MANUELA BELTRAN", latitud: 10.903819549823458, longitud: -74.77712977026921,  informacion:"517 Votos "},
{nombre: "COLEGIO AGUSTIN CODAZZI E U", latitud: 10.90415544647503, longitud: -74.79362112738083,  informacion:"51 Votos "},
{nombre: "I.E. SAGRADO CORAZON S. MARGARITA", latitud: 10.934652134063114, longitud: -74.76895094666398,  informacion:"430 Votos "},
{nombre: "I.E.NOROCCIDENTAL DE SOLEDAD", latitud: 10.926528230561727, longitud: -74.79243196729783,  informacion:"409 Votos "},
{nombre: "I.E.INEM MIGUEL ANTONIO CARO", latitud: 10.932382532616312, longitud: -74.7799789135129,  informacion:"345 Votos "},
{nombre: "I.E.LICEO MAYOR DE SOLEDAD", latitud: 10.910534471688704, longitud: -74.80242572528836,  informacion:"337 Votos "},
{nombre: "COLEGIO LICEO NACIONAL", latitud: 10.906730282783743, longitud: -74.79556058293095,  informacion:"33 Votos "},
{nombre: "LICEO MIXTO SAN JOSE", latitud: 10.904648490224547, longitud: -74.7956156698381,  informacion:"325 Votos "},
{nombre: "C.ARQUIDIOCESANO SAN PANCRACIO", latitud: 10.921558368914022, longitud: -74.81177721169355,  informacion:"319 Votos "},
{nombre: "I.E.INOBASOL - SEDE 2", latitud: 10.916933368261965, longitud: -74.76532166977755,  informacion:"317 Votos "},
{nombre: "I.E.JESUS MAESTRO F.M.S.D", latitud: 10.902354576979178, longitud: -74.79099574088447,  informacion:"311 Votos "},
{nombre: "INSTITUTO MONSALVE NEWLOVE", latitud: 10.918097732748343, longitud: -74.79319086269366,  informacion:"305 Votos "},
{nombre: "I.E.DOLORES MARIA UCROS", latitud: 10.918443129490193, longitud: -74.77129259395446,  informacion:"297 Votos "},
{nombre: "I.E.TAJAMAR", latitud: 10.912356907043334, longitud: -74.78231879984116,  informacion:"295 Votos "},
{nombre: "NUEVO COLEGIO MARIA MONTESSORI", latitud: 10.907011250234968, longitud: -74.78239980047658,  informacion:"288 Votos "},
{nombre: "COL.METROPOLIT.DE SOLEDAD 2000", latitud: 10.907141918443775, longitud: -74.78892453386608,  informacion:"284 Votos "},
{nombre: "I.E.TEC.I.YCOMERCIAL SEDES 1Y2", latitud: 10.919161696390056, longitud: -74.79651243746059,  informacion:"273 Votos "},
{nombre: "IE ALBERTO PUMAREJO", latitud: 10.91401794127407, longitud: -74.76813176769991,  informacion:"25 Votos "},
{nombre: "IE TECNICO LA ENSEÑANZA", latitud: 10.920580742043922, longitud: -74.76258679158698,  informacion:"228 Votos "},
{nombre: "I.E.MARIA MONTESSORI", latitud: 10.917678567636038, longitud: -74.80973901197733,  informacion:"215 Votos "},
{nombre: "IE  IND.DE SOLEDAD SD 2 - ITISOL", latitud: 10.928697161139866, longitud: -74.7699333697769,  informacion:"213 Votos "},
{nombre: "I.E.TEC.MARIA AUXILIADORA", latitud: 10.924368123102834, longitud: -74.76577696176723,  informacion:"212 Votos "},
{nombre: "I.E.JOSEFA DONADO", latitud: 10.911557370892801, longitud: -74.76535256749378,  informacion:"201 Votos "},
{nombre: "IE FRANCISCO DE PAULA SANTANDER", latitud: 10.919017154579219, longitud: -74.7708257335077,  informacion:"20 Votos "},
{nombre: "COLEGIO SAGRADA SABIDURIA", latitud: 10.92995847252106, longitud: -74.78864881932127,  informacion:"197 Votos "},
{nombre: "I.E.FRANCISCO JOSE DE CALDAS", latitud: 10.931002546220048, longitud: -74.77893822361368,  informacion:"187 Votos "},
{nombre: "I.E.CONTINENTAL DEL CARIBE", latitud: 10.91340990971448, longitud: -74.79067056939932,  informacion:"173 Votos "},
{nombre: "LICEO SAN GABRIEL", latitud: 10.916195204341413, longitud: -74.8200938557562,  informacion:"168 Votos "},
{nombre: "I.E.FCO.JOSE CALDAS - COSTA H.", latitud: 10.938112199185001, longitud: -74.77768499107023,  informacion:"153 Votos "},
{nombre: "I.E.TEC.MICROEMPRES.DE SOLEDAD", latitud: 10.92915267985268, longitud: -74.76992473274026,  informacion:"143 Votos "},
{nombre: "INSTITUTO TECNICO EDGAR MORIN", latitud: 10.90193997775425, longitud: -74.79546241425717,  informacion:"141 Votos "},
{nombre: "I.E.VISTA HERMOSA", latitud: 10.941560285379927, longitud: -74.77590012534101,  informacion:"139 Votos "},
{nombre: "I.E. DOLORES MA.UCROS - SEDE 3", latitud: 10.918518502208848, longitud: -74.77130725637183,  informacion:"137 Votos "},
{nombre: "IE NOBEL JUAN MANUEL SANTOS", latitud: 10.892068802255231, longitud: -74.82198711646858,  informacion:"116 Votos "},
{nombre: "I.E.NUESTRA SEÑORA DEL CARMEN", latitud: 10.92754964346856, longitud: -74.79791904913482,  informacion:"104 Votos "},
{nombre: "I.E. INOBASOL", latitud: 10.91562538151329, longitud: -74.76378774460024,  informacion:"0 Votos "},
{nombre: "INST. EDUCATIVA POLICARPA SALAVARRIETA", latitud: 10.922606787562927, longitud: -74.77326023812522,  informacion:"0 Votos "},
{nombre: "I.E.SAGRADO CORAZON", latitud: 10.930327291874866, longitud: -74.76853092775904,  informacion:"0 Votos "},
{nombre: "INST EDUCATIVA NOROCCIDENTAL SEDE MUVDI", latitud: 10.922566468628895, longitud: -74.79148765618841,  informacion:"0 Votos "},
{nombre: "COLEGIO INETECODECOL", latitud: 10.918485340227889, longitud: -74.80136025370739,  informacion:"0 Votos "},
{nombre: "CENTRO EDUCATIVO MI NUEVA GENERACION", latitud: 10.901621694394779, longitud: -74.81251602771282,  informacion:"0 Votos "},
{nombre: "INSTI. EDUCATIVA SAN ANTONIO DE PADUA", latitud: 10.891018004928362, longitud: -74.79078966422021,  informacion:"0 Votos "},
{nombre: "CENTRO EDUCATIVO PRADO DE SOLEDAD", latitud: 10.895411279414471, longitud: -74.7834475913863,  informacion:"0 Votos "},
{nombre: "C PARA EL DES. AGROECOLO Y AGROINDUST NO", latitud: 10.921371465851436, longitud: -74.7848489681542,  informacion:"0 Votos "},
// ... Agrega más puestos de votación aquí
];

const map = L.map('map').setView([10.918435, -74.763495], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const markers = [];

// ... (resto del código previo)

// Agregar filas a la tabla con los datos de los puestos de votación
puestosDeVotacion.forEach((puesto, index) => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${puesto.nombre}</td>
    <td>${puesto.informacion}</td>
  `;
  const tableBody = document.querySelector('#puestos-table tbody');
  tableBody.appendChild(row);

  const marker = L.marker([puesto.latitud, puesto.longitud]).addTo(map);
  marker.bindPopup(`<b>${puesto.nombre}</b><br>${puesto.informacion}`);
  markers.push(marker);

  row.addEventListener('click', () => {
    map.setView([puesto.latitud, puesto.longitud], 15);
    markers[index].openPopup();

    tableRows.forEach((tableRow, tableRowIndex) => {
      if (tableRowIndex === index) {
        tableRow.classList.add('selected');
      } else {
        tableRow.classList.remove('selected');
      }
    });
  });
});