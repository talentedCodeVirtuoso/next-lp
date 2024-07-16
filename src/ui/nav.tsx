import Link from "next/link";
import Logo from "@/ui/logo";

const Nav = () => {
  return (
    <nav className="sticky top-0 flex items-center justify-between px-6 py-8 border-b border-gray-200 bg-white/50 backdrop-bluer-xl z-50">
      <div className="flex gax-x-7 items-center">
        <Logo />
        <ul className="flex gap-x-2">
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#offer">Offer</Link>
          </li>
        </ul>
      </div>

      <a href="mailto:contact@techstart.inc" className="font-medium">
        Contact us
      </a>
    </nav>
  );
};

export default Nav;
