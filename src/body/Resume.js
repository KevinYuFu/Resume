import '../css/page.css';
import '../css/style.css';
import Header from './Header';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import PDFButton from '../pdf/pdfButton';

function Resume() {
  return (
    <div class="main">
      <PDFButton/>
      <div class="page">
        <div class="page-width-controller">
          <div class="page-ratio"></div>
          <div class="page-content-container">
            <div id="pdfSource">
              <div class="page-padding">
                <div>
                  <div className="header-container">
                    <Header />
                  </div>
                  <Skills />
                  <Experience />
                  <Education />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
