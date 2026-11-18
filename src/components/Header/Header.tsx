import Link from "next/link";
import "./Header.css";
export default function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="site-logo">
        🎬Rulletekst<span>Filmklubben</span>
      </Link>
      <nav className="site-nav">
        <Link href="/">Home</Link>
        <Link href="/articles">Artikles</Link>
        <Link href="/reviews">Anmeldelser</Link>
        <Link href="/filmkvelder">Filmkvelder</Link>
      </nav>
    </header>
  );
}
