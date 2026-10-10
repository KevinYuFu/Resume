import { jsPDF } from "jspdf";
import '../css/pdfButton.css';

// A4 portrait in points. The on-screen page is 21cm wide, so scale the
// HTML so its width maps exactly onto the PDF page width. (The old fixed
// 0.77 scale made the render taller than one A4 page, which produced an
// empty second page.)
function convertToPDF() {
  const doc = new jsPDF("p", "pt", "a4");
  const pdfSource = window.document.getElementById("pdfSource");
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const scale = pageWidth / pdfSource.offsetWidth;

  doc.html(
    pdfSource,
    {
      html2canvas: { scale: scale },
      callback: function (pdf) {
        // Drop trailing pages only when the content really fits on one page.
        if (pdfSource.scrollHeight * scale <= pageHeight + 1) {
          while (pdf.getNumberOfPages() > 1) {
            pdf.deletePage(pdf.getNumberOfPages());
          }
        }

        // jsPDF's html() draws text but not link annotations, so add a
        // clickable area over every <a href> inside the resume.
        const origin = pdfSource.getBoundingClientRect();
        pdfSource.querySelectorAll("a[href]").forEach(a => {
          const r = a.getBoundingClientRect();
          pdf.setPage(1);
          pdf.link(
            (r.left - origin.left) * scale,
            (r.top - origin.top) * scale,
            r.width * scale,
            r.height * scale,
            { url: a.href }
          );
        });

        pdf.save("YuFuResume.pdf");
      },
    });
}

function PDFButton() {
  return (
    <button
    id="pdfButton"
    type="button"
    onClick={convertToPDF}
    >
      Download PDF
    </button>
  );
}

export default PDFButton;
