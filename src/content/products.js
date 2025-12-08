import i18n from '../services/i18n.js';
import {locale} from '../app.js';

var productCatalog = [{}];

const products = {

    loadProductCatalog : async() => {

        await i18n.loadStringsJSON(locale);
        console.log("Loaded locale strings for " + locale);

        productCatalog = [{
            "productID" : 1,
            "type": "droid",
            "class": 2,
            "title": i18n.getString("title", "1"),
            "price": i18n.getString("Price", "1"),
            "qty": 0,
            "imageURL": "img/3PO.png",
            "desc": i18n.getString("desc", "1")
        },
        {
            "productID" : 2,
            "type": "droid",
            "class": 4,
            "title": i18n.getString("title", "2"),
            "price": i18n.getString("Price", "2"),
            "qty": 0,
            "imageURL": "img/DUM-series.png",
            "desc": i18n.getString("desc", "2")
        },
        {
            "productID" : 3,
            "type": "droid",
            "class": 1,
            "title": i18n.getString("title", "3"),
            "price": i18n.getString("Price", "3"),
            "qty": 0,
            "imageURL": "img/2-1B.png",
            "desc": i18n.getString("desc", "3")
        },
        {
            "productID" : 4,
            "type": "droid",
            "title": i18n.getString("title", "4"),
            "price": i18n.getString("Price", "4"),
            "qty": 0,
            "imageURL": "img/IG-88.png",
            "desc": i18n.getString("desc", "4")
        },
        {
            "productID" : 5,
            "type": "vehicle",
            "title": i18n.getString("title", "5"),
            "price": i18n.getString("Price", "5"),
            "qty": 0,
            "imageURL": "img/Sphyrna_Corevette.png",
            "desc": i18n.getString("desc", "5")
        },
        {
            "productID" : 6,
            "type": "droid",
            "title": i18n.getString("title", "6"),
            "price": i18n.getString("Price", "6"),
            "qty": 0,
            "imageURL": "img/G2.png",
            "desc": i18n.getString("desc", "6")
        },
        {
            "productID" : 7,
            "type": "vehicle",
            "title": i18n.getString("title", "7"),
            "price": i18n.getString("Price", "7"),
            "qty": 0,
            "imageURL": "img/CR90.png",
            "desc": i18n.getString("desc", "7")
        },
        {
            "productID" : 8,
            "type": "vehicle",
            "title": i18n.getString("title", "8"),
            "price": i18n.getString("Price", "8"),
            "qty": 0,
            "imageURL": "img/74-Z.png",
            "desc": i18n.getString("desc", "8")
        },
        
        {
            "productID" : 9,
            "type": "vehicle",
            "title": i18n.getString("title", "9"),
            "price": i18n.getString("Price", "9"),
            "qty": 0,
            "imageURL": "img/ETA-2.png",
            "desc": i18n.getString("desc", "9")
        },
        {
            "productID" : 10,
            "type": "droid",
            "title": i18n.getString("title", "10"),
            "price": i18n.getString("Price", "10"),
            "qty": 0,
            "imageURL": "img/R3.png",
            "desc": i18n.getString("desc", "10")
        },
        {
            "productID" : 11,
            "type": "vehicle",
            "title": i18n.getString("title", "11"),
            "price": i18n.getString("Price", "11"),
            "qty": 0,
            "imageURL": "img/T70.png",
            "desc": i18n.getString("desc", "11")
        },
        {
            "productID" : 12,
            "type": "vehicle",
            "title": i18n.getString("title", "12"),
            "price": i18n.getString("Price", "12"),
            "qty": 0,
            "imageURL": "img/Y-Wing.png",
            "desc": i18n.getString("desc", "12")
        },
        {
            "productID" : 13,
            "type": "droid",
            "title": i18n.getString("title", "13"),
            "price": i18n.getString("Price", "13"),
            "qty": 0,
            "imageURL": "img/Super_Tactical.png",
            "desc": i18n.getString("desc", "13")
        }
        
        ];

        return productCatalog;
    }
}


export default products;