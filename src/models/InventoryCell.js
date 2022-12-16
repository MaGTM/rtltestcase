export class InventoryCell {
    item
    id

    constructor(item, itemAmount) {
        this.item = item
        if(item) {
            this.item.amount = itemAmount
        }
        this.id = Math.random()
    }

    deleteItem() {
        this.item = null
    }
}