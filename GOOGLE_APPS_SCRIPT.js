/**
 * INSTRUCCIONES:
 * 1. Abre tu Google Sheet (o crea uno nuevo en sheets.google.com)
 * 2. Ve a Extensiones > Apps Script
 * 3. Borra el código que viene por defecto
 * 4. Pega TODO este código
 * 5. Haz clic en "Guardar" (ícono de disco)
 * 6. Haz clic en "Implementar" > "Nueva implementación"
 * 7. Tipo: "Aplicación web"
 * 8. Ejecutar como: "Yo"
 * 9. Quién tiene acceso: "Cualquier usuario"
 * 10. Haz clic en "Implementar"
 * 11. Copia la URL que te entrega (empieza con https://script.google.com/macros/s/...)
 * 12. Pégala en app/api/submit/route.ts donde dice SCRIPT_URL
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    // Crear fila de encabezados si la hoja está vacía
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Fecha',
        'Nombre',
        'Empresa',
        'Rubro',
        'Email',
        'WhatsApp',
        'Mensaje',
        'Fuente'
      ]);

      // Formatear encabezados
      var headerRange = sheet.getRange(1, 1, 1, 8);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#7C3AED');
      headerRange.setFontColor('#FFFFFF');
      sheet.setFrozenRows(1);
    }

    // Agregar fila con los datos del lead
    sheet.appendRow([
      new Date().toLocaleString('es-CL', { timeZone: 'America/Santiago' }),
      data.nombre  || '',
      data.empresa || '',
      data.rubro   || '',
      data.email   || '',
      data.whatsapp|| '',
      data.mensaje || '',
      'Landing ClickBase'
    ]);

    // Autoajustar columnas
    sheet.autoResizeColumns(1, 8);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test: puedes correr esta función manualmente para verificar que el script funciona
function testDoPost() {
  var mockEvent = {
    postData: {
      contents: JSON.stringify({
        nombre:   'Test Usuario',
        empresa:  'Empresa Test',
        rubro:    'Clínica',
        email:    'test@test.com',
        whatsapp: '+56912345678',
        mensaje:  'Quiero cotizar el setup completo'
      })
    }
  };
  var result = doPost(mockEvent);
  Logger.log(result.getContent());
}
