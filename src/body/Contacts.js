import email from '../icons/email-logo.jpg';
import linkedin from '../icons/linkedin.png';
import github from '../icons/github-logo.jpg';
import phone from '../icons/phone.png';
import '../css/contacts.css';

function Contacts() {
  const data = [
    { href: 'kevin.yu.fu@gmail.com', alt: 'email icon', src: email, txt: 'kevin.yu.fu@gmail.com' },
    { href: 'https://ca.linkedin.com/in/kevin-yu-fu', alt: 'linkedin link', src: linkedin, txt: 'linkedin.com/in/kevin-yu-fu' },
    { href: 'https://github.com/KevinYuFu', alt: 'github link', src: github, txt: 'github.com/kevinyufu' },
    { href: '416-903-2519', alt: 'phone number', src: phone, txt: '416-903-2519' },
  ]

  const contactsElement = data.map(c =>
    <p class="contact-item" href={c.href}>
      <img src={c.src} alt={c.alt}/>
      <span class="contact-text">
        {c.txt}
      </span>
    </p>
  );

  return (
    <div class="contacts">
      {contactsElement}
    </div>
  );
}

export default Contacts;
