# ExportAllOpenDocumentsToPDF
Adobe InDesign CC/2020 script that exports all open documents as PDFs using text data from the latest added text frame as file name.

The text frame from which it takes the name will be deleted before the export.

This script is an addition to InDesign Data Merge functionality. It makes possible to automate file naming and saving of PDFs through corresponding fields in data tables.

## Before the first use:
- proper name of the PDF preset must be specified inside the script body (at line #7);
- must be specified disk and folder where the script will export PDF files (at line #8).

## Step 1. Make data source file
Save your data as CSV or TXT file with fields that contain 'file name' (without '.pdf' extension, it will be added automatically).

## Step 2. Prepare layout for data merge
Make all needed edits and place all the needed data fields in the document

## Step 3. Last add a text frame that contain file names
This text frame must be added as last so it takes index[0] in InDesign textFrames array. Text frame must be positioned at corresponding page layout. Don't worry that new text frame stays on top of your layout: after script take file name value it will delete this frame. Any text overflows is ignored by the script so make sure they all will fit by length (make font size not too big).

## Step 4. Create Data Merged documents
Make all the necessary edits, get rid of text overflows etc. Make sure text frame with file name is last added yet. If not, cut and paste it again on layout to make it last again.

## Step 5. Close original file with data fields
After the Data Merging is complete don't forget to close original file because it contains << data >> fields with chevrone brackets not valid as file name characters so they will cause PDF saving error when the script will reach this original file in a loop.

## Step 6. Run ExportAllOpenDocumentsToPDF script
Script will save new PDF files via PDF Preset specified at line #7 and into the folder specified at line 8 of it. If folder is not exists it will be created.