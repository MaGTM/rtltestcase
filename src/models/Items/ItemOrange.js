import orange from '@/assets/images/Item Image-1.png'
import {Item} from "@/models/Items/Item";

export class ItemOrange extends Item {
    constructor(amount) {
        super(amount);
        this.logo = orange
        this.name = 'orange'
    }
}