export class Order {
    orderId:string;
    date:string;
    customerName:string;
    city:string;
    telephone:string;
    itemCode:string;
    itemName:string;
    orderQty:string;
    discount:string;
    price:string;


    constructor(orderId: string, date: string, customerName: string, city: string, telephone: string, itemCode: string, itemName: string, orderQty: string, discount: string, price: string) {
        this.orderId = orderId;
        this.date = date;
        this.customerName = customerName;
        this.city = city;
        this.telephone = telephone;
        this.itemCode = itemCode;
        this.itemName = itemName;
        this.orderQty = orderQty;
        this.discount = discount;
        this.price = price;
    }
}

