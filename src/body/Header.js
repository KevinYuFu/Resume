import Contacts from './Contacts.js';
import Name from './Name.js';
import '../css/header.css';

function Header() {

  return (
    <div class="header">
      <div class="name-container">
        <Name />
      </div>
      <div class="contact-container">
        <Contacts />
      </div>
    </div>
  );
}

export default Header;
