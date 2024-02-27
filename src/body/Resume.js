import '../css/body.css';
import '../css/page.css';
import '../css/style.css';
import '../css/split.css';
import Header from './Header';
import LeftBody from './LeftBody';
import RightBody from './RightBody';

function Resume() {
  return (
    <div class="main">
      <div class="page">
        <div class="page-width-controller">
          <div class="page-ratio"></div>
          <div class="page-content-container">
            <div class="page-padding">
              <Header />
              <LeftBody />
              <RightBody />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
