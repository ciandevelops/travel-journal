import { GlobeIcon } from "@heroicons/react/solid";

const Navbar = () => {
  return (
    <nav>
      <GlobeIcon className="nav--logo" />
      <h1 className="nav--title">my travel journal.</h1>
    </nav>
  );
};

export default Navbar;
