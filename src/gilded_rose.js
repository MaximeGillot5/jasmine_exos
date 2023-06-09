class Item {
    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

class Shop {
    constructor(items = []) {
        this.items = items;
    }
    updateQuality() {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].name == "Sulfuras, Hand of Ragnaros") {
                this.items[i].quality = 80;
            }

            if (this.items[i].name == "Aged Brie" || this.items[i].name == "Backstage passes to a TAFKAL80ETC concert") {
                if (this.items[i].sellIn >= 0 && this.items[i].quality < 50) {
                    if (this.items[i].name == "Aged Brie") {
                        this.items[i].quality = this.items[i].quality + 1
                    } else {
                        if (this.items[i].name == "Backstage passes to a TAFKAL80ETC concert") {
                            if (this.items[i].sellIn > 10) {
                                this.items[i].quality = this.items[i].quality + 1
                            } else {
                                if (this.items[i].sellIn > 5) {
                                    if (this.items[i].quality <= 48) {
                                        this.items[i].quality = this.items[i].quality + 2
                                    } else {
                                        this.items[i].quality = 50
                                    }
                                } else {
                                    if (this.items[i].quality <= 47) {
                                        this.items[i].quality = this.items[i].quality + 3
                                    } else {
                                        this.items[i].quality = 50
                                    }
                                }
                            }
                        }
                    }
                } else {
                    if (this.items[i].quality < 0) {
                        this.items[i].quality = 0
                    }
                }
            }

            if (this.items[i].quality < 0) {
                this.items[i].quality = 0
            }

            if (this.items[i].sellIn >= 0) {
                if (this.items[i].name != "Aged Brie" && this.items[i].name != "Backstage passes to a TAFKAL80ETC concert" && this.items[i].name != "Sulfuras, Hand of Ragnaros") {
                    this.items[i].quality = this.items[i].quality - 1
                }
            } else {
                if (this.items[i].name != "Aged Brie" && this.items[i].name != "Backstage passes to a TAFKAL80ETC concert" && this.items[i].name != "Sulfuras, Hand of Ragnaros") {
                    this.items[i].quality = this.items[i].quality - 2
                }
            }

            if (this.items[i].name == "Backstage passes to a TAFKAL80ETC concert" && this.items[i].sellIn < 0) {
                this.items[i].quality = 0
            }



            return this.items;
        }
    }
}
module.exports = {
    Item,
    Shop
}