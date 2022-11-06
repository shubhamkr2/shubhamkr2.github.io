import css from "./Navbar.module.css";
import AllNavigation from "../../Routing/AllNavigation";
import MobileNav from "./MobileNav/MobileNav";
import { HiMenu } from "react-icons/hi";


const Navbar = () => {
  return (
    <div className={css.nav}>
      <div className={css.normal}>
        <AllNavigation />
      </div>
      <div className={css.hamberger}>
        <HiMenu />
      </div>
        {/* <GiHamburgerMenu /> */}
      <div className={css.mob}>
        <MobileNav />
      </div>
    </div>
  );
};

export default Navbar;
