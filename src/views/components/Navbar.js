import Utils from "../../services/Utils.js";
import { locale, updateLocale, showCart } from "../../app.js";
import i18n from "../../services/i18n.js";

//global dropdown element reference
let drop;

let Navbar = {
    render: async () => {

        //fetch locale-sensitive strings via i18n method
        let searchPlaceholder = i18n.getString("Navbar", "searchPlaceholder");
        let searchButtonLabel = i18n.getString("Navbar", "searchButtonLabel");
        let logoAlt = i18n.getString("Navbar", "logoAlt");
        let searchIconAlt = i18n.getString("Navbar", "searchIconAlt");
        let historyLink = i18n.getString("Navbar", "historyLink");
        let arrowAlt = i18n.getString("Navbar", "arrowAlt");
        let greetingText = i18n.getString("Navbar", "greetingText");
        let cartAlt = i18n.getString("Navbar", "cartAlt");
        let navLinkHome = i18n.getString("Navbar", "navLinkHome");
        let navLinkDroids = i18n.getString("Navbar", "navLinkDroids");
        let navLinkVehicles = i18n.getString("Navbar", "navLinkVehicles");

        let localeLabel = i18n.getString("LocaleSelector", "localeLabel");
        let localeUS = i18n.getString("LocaleSelector", "localeUS");
        let localeCN = i18n.getString("LocaleSelector", "localeCN");
        let localeNL = i18n.getString("LocaleSelector", "localeNL");

        // ⭐ 动态决定 logo 图
        let logoPath = "img/logo.png";
        if (locale === "zh-CN") {
            logoPath = "img/logo_zh.png";
        }

        // ⭐ HTML 里只放变量，不放 JS 逻辑
        let view = `
        <header>
            <section>
                <img src="${logoPath}" id="logo" alt="${logoAlt}">
            </section>

            <section id="search">
                <div id="bar">
                    <input type="text" class="searchTerm" placeholder="${searchPlaceholder}" aria-label="${searchButtonLabel}">
                    <button type="submit" class="searchButton" aria-label="${searchButtonLabel}">
                        <img src="img/search.svg" id="searchIcon" alt="${searchIconAlt}">
                    </button>
                </div>
            </section>

            <section id="headOptions">
                <div class="dropdown">
                    <div class="dropbtn">
                        <h2 id="greetingText">${greetingText}</h2>
                        <img src="img/arrow-down.svg" id="downArrow" alt="${arrowAlt}">
                    </div>
                    <div class="dropdown-content">
                        <a href="./#/history">${historyLink}</a>
                    </div>
                </div>

                <img src="img/cart.svg" class="cartIcon" alt="${cartAlt}">

                <div class="localeSelector">
                    <label for="locale"><h3>${localeLabel}</h3></label>
                    <select id="locale" class="hamDrop">
                        <option value="en-US">${localeUS}</option>
                        <option value="zh-CN">${localeCN}</option>
                    </select>
                </div>
            </section>
        </header>

        <nav>
            <ul>
                <li><a href="./#/" class="navLink" id="">${navLinkHome}</a></li>
                <li><a href="./#/droids" class="navLink" id="droids">${navLinkDroids}</a></li>
                <li><a href="./#/vehicles" class="navLink" id="vehicles">${navLinkVehicles}</a></li>
            </ul>
        </nav>
        `;

        return view;
    },

    after_render: async () => {
        //cart
        var cartIcons = document.querySelectorAll(".cartIcon");
        for (let icon of cartIcons) {
            icon.addEventListener("click", showCart, false);
        }

        //hide cart
        var overlayBG = document.querySelector('.bg');
        overlayBG.addEventListener('click', hideCart, false);

        //logo click → home
        var logo = document.querySelector("#logo");
        logo.addEventListener("click", function () {
            location.href = "./#";
        }, false);

        //underline nav
        let request = Utils.parseRequestURL();
        let navLinks = document.querySelectorAll(".navLink");
        for (let cur of navLinks) {
            cur.classList.remove("activeLink");
            cur.classList.remove("inactiveLink");
            if (cur.id === request.resource) {
                cur.classList.add("activeLink");
            } else {
                cur.classList.add("inactiveLink");
            }
        }

        //locale selector
        drop = document.querySelector('#locale');
        drop.value = locale;
        drop.addEventListener("input", changeLocale, false);
    }
};

// hide cart
var hideCart = e => {
    var slider = document.querySelector(".cartSlider");
    var bg = document.querySelector('.bg');
    slider.classList.remove('showCart');
    bg.classList.remove('overlay');
};

var changeLocale = () => {
    updateLocale(drop.value);
}

export default Navbar;