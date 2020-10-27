// Adobe InDesign CC/2020 script that exports all open documents as PDFs using text data from latest added text frame as file name.

if (app.documents.length == 0) {
    alert('Open documents first.');
} else {
    var documentsNumber = app.documents.length;
    var outputFolder = new Folder('G:/PDFbasket/');
    if (!outputFolder.exists) {
        outputFolder.create();
    }
    for (i = 0; i < documentsNumber; i++) {
        var fileName = app.activeDocument.textFrames[0].contents; // Get text frame content
        app.activeDocument.textFrames[0].remove();
        var myPDFExportPreset = app.pdfExportPresets.item("Press Quality Sportlife");
        app.activeDocument.exportFile(ExportFormat.pdfType, File(outputFolder + "/" + fileName + ".pdf"), false, myPDFExportPreset);
        app.activeDocument.close(SaveOptions.no);
    }
    alert("Exported into " + outputFolder.fsName);
}