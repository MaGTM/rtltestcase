export class Item {
    amount
    logo
    name
    constructor(amount) {
        this.amount = amount
        this.logo = null
        this.name = null
    }

    deleteAmount(difference) {
        if(difference > this.amount || difference < 0) {
            return
        }
        this.amount -= difference
    }
}