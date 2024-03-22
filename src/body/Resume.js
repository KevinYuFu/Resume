import '../css/page.css';
import '../css/style.css';
import '../css/split.css';
import Header from './Header';
import ExperienceBody from './ExperienceBody';
import SkillBody from './SkillBody';
import PDFButton from '../pdf/pdfButton';

function Resume() {
  return (
    <div class="main">
      <PDFButton/>
      <div class="page">
        <div class="page-width-controller">
          <div class="page-ratio"></div>
          <div id="pdfSource" class="page-content-container">
            <div class="page-padding">
              <div>
                <Header />
                <ExperienceBody />
                <SkillBody />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
