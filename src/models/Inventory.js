import {InventoryCell} from "@/models/InventoryCell";
import {ItemGreen} from "@/models/Items/ItemGreen";
import {ItemOrange} from "@/models/Items/ItemOrange";
import {ItemBlue} from "@/models/Items/ItemBlue";
import inventory from "@/components/Inventory/Inventory";

export class Inventory {
    inventoryCells = []

    init() {
        let cachedData = JSON.parse(localStorage.getItem('inventory'))

        cachedData.forEach(item => {
            if(item.item) {
                if(item.item.name === 'green') {
                    this.inventoryCells.push(new InventoryCell(new ItemGreen(), item.item.amount))
                    return
                }
                if(item.item.name === 'blue') {
                    this.inventoryCells.push(new InventoryCell(new ItemBlue(), item.item.amount))
                    return
                }
                if(item.item.name === 'orange') {
                    this.inventoryCells.push(new InventoryCell(new ItemOrange(), item.item.amount))
                    return
                }
            }
            this.inventoryCells.push(new InventoryCell(null, null))
        })
    }

    initCells(cellsAmount) {
        this.inventoryCells = []
        for (let i = 0; i < cellsAmount; i++) {
            if (i === 0) {
                this.inventoryCells.push(new InventoryCell(new ItemGreen(), 4))
                continue
            } else if (i === 1) {
                this.inventoryCells.push(new InventoryCell(new ItemOrange(), 3))
                continue
            } else if (i === 2) {
                this.inventoryCells.push(new InventoryCell(new ItemBlue(), 5))
                continue
            }

            this.inventoryCells.push(new InventoryCell(null, null))
        }
        localStorage.setItem('inventory', JSON.stringify(this.inventoryCells))
    }

    changePosition(itemId, newCellId) {
        let itemIndex = this.inventoryCells.findIndex(i => i.id === Number(itemId));
        let newCellIndex = this.inventoryCells.findIndex(j => j.id === Number(newCellId));
        [this.inventoryCells[newCellIndex], this.inventoryCells[itemIndex]] = [this.inventoryCells[itemIndex], this.inventoryCells[newCellIndex]];
    }

    deleteItem(itemId) {
        this.inventoryCells[this.inventoryCells.findIndex(i => i.id === itemId)].item = null
    }

    save() {
        localStorage.setItem('inventory', JSON.stringify(this.inventoryCells))
    }
}