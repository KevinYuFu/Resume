import { jsPDF } from "jspdf";
import '../css/pdfButton.css';


// Default export is a4 paper, portrait, using millimeters for units

function convertToPDF() {
  console.log("FWWEH");
  const delay = ms => new Promise(res => setTimeout(res, ms));

  const doc = new jsPDF("p", "pt", "a4");
  var pdfSource = window.document.getElementById("pdfSource");

  doc.html(
    pdfSource,
    {
      callback: function (pdf) {
        doc.save();
      },
      html2canvas:{scale:0.77}
    });
}

function PDFButton() {
  return (
    <button 
    id="pdfButton" 
    type="button"
    onClick={convertToPDF}
    enabled="true"
    >
      Download PDF
    </button>
  );
}

export default PDFButton;
