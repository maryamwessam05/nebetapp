import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import "./nav.css";
import nav1 from "../assets/navicon01.svg";
import nav2 from "../assets/navicon02.svg";
import nav3 from "../assets/navicon03.svg";
import nav4 from "../assets/navicon04.svg";

const tabs = [
    { path: "/home",       icon: nav1, label: "Home"   },
    { path: "/ticket", icon: nav2, label: "Ticket"  },
    { path: "/map",    icon: nav3, label: "Map"     },
    { path: "/alerts", icon: nav4, label: "Alerts"  },
];

const Nav = () => {
    const { pathname } = useLocation();

    const isActive = (path) =>
        path === "/" ? pathname === "/" : pathname.startsWith(path);

    return (
        <div className="nav">
            {tabs.map(({ path, icon, label }) => (
                <Link
                    key={path}
                    to={path}
                    className={isActive(path) ? "navtab-active" : "navtab"}
                >
                    <img src={icon} alt="" />
                    <span>{label}</span>
                </Link>
            ))}
        </div>
    );
};

export default Nav;
