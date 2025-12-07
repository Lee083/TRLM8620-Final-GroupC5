import {featuredProducts} from "../../app.js";
import i18n from "../../services/i18n.js";

let Home = {
    render : async () => {

        let welcomeTitle = i18n.getString("Home", "welcomeTitle");
        let welcomeSubtitle = i18n.getString("Home", "welcomeSubtitle");

        let view = `
            <section class="welcome">
                <h1 class="center">${welcomeTitle}</h1>
                <h3 class="center white">${welcomeSubtitle}</h3>
            </section>
            <div class="browseGrid homeGrid">`;

        featuredProducts.forEach((product, key) => {
            let imageAlt = product.title + " image";
            view += `
                <article id="${product.productID}" class="${product.type}">
                    <img src="${product.imageURL}" class="gridImage" alt="${imageAlt}">
                    <div class="gridDes">
                        <h3>${product.title}</h3>
                        <div class="gridPrice">
                            ${i18n.formatCurrency(product.price, "b")}
                        </div>
                    </div>
                </article>`;
        });
            
        view += "</div>";
        return view;
    },

    after_render: async () => {
        let articles = document.querySelectorAll("article");

        for(let curProduct of articles) {
            curProduct.addEventListener("click", function() {
                location.href = `./#/${curProduct.classList[0]}s/` + curProduct.id;
            }, false);
            curProduct.classList.add("zoom");
        }
    }
}

export default Home;