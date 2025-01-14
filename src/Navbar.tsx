import { useState } from "react";
import "./Navbar.css";

interface NavBarProps {
    brandName: string;
    imageSrcPath: string;
    navItems: string[];
}

function NavBar({ brandName, imageSrcPath, navItems }: NavBarProps) {
    const [selectedindex, setSelectedindex] = useState(-1);

    return (
        <nav className="navbaren">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={imageSrcPath} alt={brandName}
                        width={60}
                        height={60}
                        className="brand-image" />
                    <span className="brand-name">{brandName}</span>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav custom-navbar">
                        {navItems.map((items, index) => (
                            <li
                                key={items}
                                className="nav-item"
                                onClick={() => setSelectedindex(index)}>
                                <a
                                    className={
                                        selectedindex == index
                                            ? "nav-link active fw-bold"
                                            : "nav-link"
                                    }
                                    href="#">
                                    {items}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <form className="search-form">
                        <input
                            className="search-input"
                            type="search"
                            placeholder="Search"
                            aria-label="Search" />
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;