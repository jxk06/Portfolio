import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import bgHome from "../assets/bg-home-city.png";
import bgAbout from "../assets/bg-about-stars1.jpg";
import bgContact from "../assets/bg-contact-hands.png";

export default function Backgrounds() {
    const location = useLocation();
    const [activePage, setActivePage] = useState("/");
    const [prevPage, setPrevPage] = useState(null);

    useEffect(() => {
        if (location.pathname !== activePage) {
            setPrevPage(activePage);
            setActivePage(location.pathname);
        }
    }, [location.pathname, activePage]);

    // Helper to determine animation state
    const getClass = (pagePath) => {
        // Basic mapping of paths to simplistic names for CSS
        const current =
            activePage === "/" ? "home" :
                activePage === "/about" ? "about" :
                    activePage === "/contact" ? "contact" :
                        activePage.startsWith("/portfolio") ? "portfolio" : "";

        const target =
            pagePath === "home" ? "/" :
                pagePath === "about" ? "/about" :
                    pagePath === "contact" ? "/contact" : null;

        if (activePage === target) return "active enter"; // Current page entering
        if (prevPage === target) return "exit"; // Previous page exiting
        return "hidden";
    };

    return (
        <div className="bg-container">
            {/* HOME BG */}
            <div
                className={`bg-layer bg-home ${getClass("home")}`}
                style={{ backgroundImage: `url(${bgHome})` }}
            />

            {/* ABOUT BG */}
            <div
                className={`bg-layer bg-about ${getClass("about")}`}
                style={{ backgroundImage: `url(${bgAbout})` }}
            />

            {/* CONTACT BG */}
            <div
                className={`bg-layer bg-contact ${getClass("contact")}`}
                style={{ backgroundImage: `url(${bgContact})` }}
            />
        </div>
    );
}
