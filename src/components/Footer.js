import '../styling/Footer.css';
import moment from 'moment';

function Footer() {
  const currentYear = moment().format('YYYY');
  return (
    <div className="footer">
      <span className="first-footer" dangerouslySetInnerHTML={{ "__html": "&copy;" }} /><span> {currentYear} Art by Natasha Studio</span>
    </div>
  );
}

export default Footer;