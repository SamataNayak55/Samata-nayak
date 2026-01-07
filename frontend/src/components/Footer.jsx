import { Link } from "react-router-dom";
import { gmail } from "../assets/icons/index.js";
import { socialLinks } from "../constants/index.js";

const Footer = () => {
  return (
    <footer className='footer font-poppins'>
      <hr className='border-slate-200' />

      <div className='footer-container'>
        <p>
          © 2025 <strong>Samata Nayak</strong>
        </p>
        

        <div className='flex gap-3 justify-center items-center'>
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target='_blank'>
              <img
                src={link.iconUrl}
                alt={link.name}
                className='w-6 h-6 object-contain'
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2 text-[#cb3659] ">
          <img src={gmail} alt="" className="h-10 w-auto"/>
          <p>Samata.nayak55@gmail.com</p>
        </div>
    </footer>
  );
};

export default Footer;