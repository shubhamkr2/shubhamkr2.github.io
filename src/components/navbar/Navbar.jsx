import css from "./Navbar.module.css";
import AllNavigation from "../../Routing/AllNavigation";
import MobileNav from "./MobileNav/MobileNav";
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const hamburger = (
    <div className={css.hamberger}>
      <HiMenu onClick={() => setOpen(!open)} />
    </div>
  );
  const closeIcon = (
    <div className={css.hamberger}>
      <MdClose onClick={() => setOpen(!open)} />
    </div>
  );
  // const closeSidebar = () => setOpen(false);
  return (
    <div className={css.nav}>
      <div className={css.normal}>
        <AllNavigation />
      </div>
      {open ? closeIcon : hamburger}
      {/* <GiHamburgerMenu /> */}
      <div className={css.mob}>{open && <MobileNav />}</div>
    </div>
  );
};

export default Navbar;
