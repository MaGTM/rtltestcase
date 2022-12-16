import green from '@/assets/images/Item Image.png'
import {Item} from "@/models/Items/Item";

export class ItemGreen extends Item {
    constructor(amount) {
        super(amount);
        this.logo = green
        this.name = 'green'
    }
}