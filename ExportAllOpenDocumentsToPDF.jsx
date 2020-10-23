//InD script
    $.writeln('app.documents.length = ' + app.documents.length);
    var documentsNumber = app.documents.length;
for (i = 0; i < documentsNumber; i++) {
    $.writeln('i = ' + i);
    var fileName = app.activeDocument.textFrames[0].contents; // Get text frame content
    $.writeln('fileName = ' + fileName);
    app.activeDocument.textFrames[0].remove();

    var myPDFExportPreset = app.pdfExportPresets.item("Press Quality Sportlife");
    app.activeDocument.exportFile(ExportFormat.pdfType, File("C:/Users/User/Desktop/PDFCatcher/"+fileName + ".pdf"), false, myPDFExportPreset);
    $.writeln('app.activeDocument.name = ' + app.activeDocument.name);
    app.activeDocument.close(SaveOptions.no);

}