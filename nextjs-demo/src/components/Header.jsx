import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header(){
    return(
        <header>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a href="/" className="navbar-brand">Social Media Posts</a>

                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a href="/about" className="nav-link">About</a>
                    </li>
                    <li className="nav-item active">
                        <a href="/posts" className="nav-link">Posts</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}