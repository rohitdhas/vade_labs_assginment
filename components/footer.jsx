export default function Footer() {
  return (
    <footer className="bg-slate-700 flex justify-around align items-center py-10 text-sm">
      <div className="text-white">
        <p>© 2022 Vade Labs Pvt. Ltd.</p>
        <div className="text-center mt-2">
          <i className="bi bi-twitter mr-4 cursor-pointer"></i>
          <i className="bi bi-linkedin cursor-pointer"></i>
        </div>
      </div>
      <div className="text-center">
        <div className="text-slate-400">About Us</div>
        <p className="text-white mt-2">
          <p>We&apos;re a group of enthusiasts who love </p>
          <p>helping creatives build software applications.</p>
        </p>
      </div>
      <div className="text-center">
        <div className="text-slate-400">Contact</div>
        <div className="text-white mt-2">
          <p>
            <i className="bi bi-globe mr-2"></i>
            <span>hello@vadelabs.com</span>
          </p>
          <p>
            <i className="bi bi-telephone-fill mr-2"></i>
            <span>+91-7829887887</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
