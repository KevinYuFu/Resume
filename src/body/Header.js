import email from '../icons/email-logo.jpg';
import linkedin from '../icons/linkedin.png';
import github from '../icons/github-logo.jpg';
import phone from '../icons/phone.png';
import '../css/header.css';
import '../css/split.css';

function Header() {
  const contacts = [
    { href: 'kevin.yu.fu@gmail.com', alt: 'email icon', src: email, txt: 'kevin.yu.fu@gmail.com' },
    { href: 'https://ca.linkedin.com/in/kevin-yu-fu', alt: 'linkedin link', src: linkedin, txt: 'linkedin.com/in/kevin-yu-fu' },
    { href: 'https://github.com/KevinYuFu', alt: 'github link', src: github, txt: 'github.com/kevinyufu' },
    { href: '416-903-2519', alt: 'phone number', src: phone, txt: '416-903-2519' },
  ]

  const contactsElement = contacts.map(c =>
    <p class="contact-item" href={c.href}>
      <img src={c.src} alt={c.alt}/>
      <span class="contact-text">
        {c.txt}
      </span>
    </p>
  );

  return (
    <div class="title-container">
      <div class="title">
        <h1>
          <span class="accent">Yu </span>
          Fu
        </h1>
      </div>
      <div class="contact-container">
        {contactsElement}
      </div>
    </div>
  );
}

export default Header;
