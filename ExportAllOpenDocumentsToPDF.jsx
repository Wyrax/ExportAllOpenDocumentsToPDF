// Adobe InDesign CC/2020 script that exports all open documents as PDFs using text data from latest added text frame as file name.

if (app.documents.length == 0) {
    alert('Open documents first.');
} else {
    var documentsNumber = app.documents.length;
    var outputFolder = new Folder('G:/PDFbasket/');
    if (!outputFolder.exists) {
        outputFolder.create();
    }
    
        $.writeln('outputFolder.absoluteURI = ' + outputFolder.absoluteURI);
        $.writeln('outputFolder.alias = ' + outputFolder.alias);
        $.writeln('outputFolder.created = ' + outputFolder.created);
        $.writeln('outputFolder.displayName = ' + outputFolder.displayName);
        $.writeln('outputFolder.exist = ' + outputFolder.exist);
        $.writeln('outputFolder.fsName = ' + outputFolder.fsName);
        $.writeln('outputFolder.fullName = ' + outputFolder.fullName);
        $.writeln('outputFolder.modified = ' + outputFolder.modified);
        $.writeln('outputFolder.name = ' + outputFolder.name);
        $.writeln('outputFolder.parent = ' + outputFolder.parent);
        $.writeln('outputFolder.path = ' + outputFolder.path);
        $.writeln('outputFolder.relativeURI = ' + outputFolder.relativeURI);
        $.writeln('outputFolder.name = ' + outputFolder.name);
    

    for (i = 0; i < documentsNumber; i++) {
        var fileName = app.activeDocument.textFrames[0].contents; // Get text frame content
        app.activeDocument.textFrames[0].remove();

        var myPDFExportPreset = app.pdfExportPresets.item("Press Quality Sportlife");
        app.activeDocument.exportFile(ExportFormat.pdfType, File(outputFolder + "/" + fileName + ".pdf"), false, myPDFExportPreset);
        $.writeln(outputFolder + fileName + ".pdf");
        app.activeDocument.close(SaveOptions.no);
    }
    alert("Exported into " + outputFolder.fsName);

}