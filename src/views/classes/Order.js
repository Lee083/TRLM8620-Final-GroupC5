import i18n from "../../services/i18n.js";


class Order {
    constructor(total, newDate, number) {
        if(newDate == null) {
            this.orderDate = new Date(); //$NON-NLS-L$
        }else {
            this.orderDate = newDate;
        }
        if(number == null) {
            this.orderNumber = Math.floor(Math.random() * (99999999 - 10000000) + 10000);
        }
        else {
            this.orderNumber = number;
        }
        
        this.total = total;
    }

    getOrderDate() {
    const locale = localStorage.getItem("locale") || "en-US";

    // 带星期的中文格式
    if (locale === "zh-CN") {
        return new Intl.DateTimeFormat("zh-CN", {
            year: "numeric",
            month: "long",
            day: "numeric",
            weekday: "long"
        }).format(this.orderDate);
    }

    // 默认英文格式
    return new Intl.DateTimeFormat(locale, {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    }).format(this.orderDate);
}

    //create a dummy "order status" string
    getOrderStatus() {
        //calculate diff
        let oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
        let now = new Date(); //$NON-NLS-L$
        var diffDays = Math.floor(Math.abs((this.orderDate.getTime() - now.getTime())/(oneDay))); //$NON-NLS-L$

        if(diffDays < 2) {
            return i18n.getString("Order", "statusProcessing");
        }
        if(diffDays < 4) {
            return i18n.getString("Order",      "statusShipped");
        }
        else{
            return i18n.getString("Order", "statusDelivered");
        }
    }

}

export {Order};