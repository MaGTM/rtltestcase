import blue from '@/assets/images/Item Image-2.png'
import {Item} from "@/models/Items/Item";

export class ItemBlue extends Item {
    constructor(amount) {
        super(amount);
        this.logo = blue
        this.name = 'blue'
    }
}