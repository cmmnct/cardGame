export class Card {

    set: string;
    card1: string;
    selected: Boolean = false;
    picked: Boolean = false;

    constructor(set: string, card1: string) {
        this.set = set;
        this.card1 = card1;

    }

}
