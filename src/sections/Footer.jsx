const Footer = () => {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-5 pb-3 border-t c-space pt-7 border-black-300">
      <div className="flex gap-2 text-white-500">
        <p>9152273204</p>
        <p>|</p>
        <p>work.ankush07@gmail.com</p>
      </div>

      <div className="flex gap-3">
        <a href="https://github.com/ankush-diwakar" target="_blank">
          <div className="social-icon">
            <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
          </div>
        </a>

        <a href="https://twitter.com/ankushhh_x07" target="_blank">
          <div className="social-icon">
            <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
          </div>
        </a>


        <a href="https://www.linkedin.com/in/ankush-diwakar-024181284/" target="_blank">
          <div className="social-icon">
            <img src="/assets/linkedin.png" alt="instagram" className="w-1/2 h-1/2" />
          </div>
        </a>
        
      </div>

      <p className="text-white-500">© 2024 Ankush Diwakar. All rights reserved.</p>
    </footer>
  );
};

export default Footer;