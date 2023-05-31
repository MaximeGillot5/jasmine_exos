const { Shop, Item } = require('../src/gilded_rose.js');

describe("Gilded Rose", function () {

    it("full test", () => {
        const items = [
            new Item("+5 Dexterity Vest", 10, 20),
            new Item("Aged Brie", 2, 0),
            new Item("Elixir of the Mongoose", 5, 7),
            new Item("Sulfuras, Hand of Ragnaros", 0, 80),
            new Item("Sulfuras, Hand of Ragnaros", -1, 80),
            new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
            new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
            new Item("Backstage passes to a TAFKAL80ETC concert", 5, 39),

            // This Conjured item does not work properly yet
            new Item("Conjured Mana Cake", 3, 6),
        ];

        const days = Number(process.argv[2]) || 2;;
        const gildedRose = new Shop(items);

        for (let day = 0; day < days; day++) {
            console.log(`\n-------- day ${day} --------`);
            console.log("name, sellIn, quality");
            items.forEach(item => console.log(`${item.name}, ${item.sellIn}, ${item.quality}`));
            gildedRose.updateQuality();
        }
    });


    it("Sulfuras Quality", function () {
        const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", -4, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(80)
    })

    it("Brie and Tickets quality", function () {
        const gildedRose = new Shop([new Item("Aged Brie", 2, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(11)
    })

    it("Less than 0", function () {
        const gildedRose = new Shop([new Item("Aged Brie", -2, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(0)
    })

    it("Random Object -1", function () {
        const gildedRose = new Shop([new Item("Antic Vest", 5, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(9)
    })

    it("Random Object -2", function () {
        const gildedRose = new Shop([new Item("Antic Vest", -2, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(8)
    })


    it("Brie and Tickets 50", function () {
        const gildedRose = new Shop([new Item("Aged Brie", 4, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(50)
    })

    it("Tickets +3", function () {
        const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", -1, 49)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(0)
    })



});