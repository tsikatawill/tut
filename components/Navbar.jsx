import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/" passHref>
          <div className="logo">
            PEO<span>PLE</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};
