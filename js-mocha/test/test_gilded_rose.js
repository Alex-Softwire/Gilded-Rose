var {expect} = require('chai');
var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {
  it("Test 1: Quality & Sellin should lower by one for normal items", function()
  {
    const gildedRose = new Shop([new Item("Wooden Duck", 10, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(9);
    expect(items[0].quality).to.equal(9)
  })

  it("Test 2: Quality of the item is never negative", function()
  {
    const gildedRose = new Shop([new Item("Rubbish Wooden Duck", 10, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0)
  })
  it("Test 3: Once Sell Date has passed, Quality degrades twice as fast", function () {
    const gildedRose = new Shop([new Item("Old Wooden Duck", 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(8)
  });
  it("Test 4: Aged Brie actually increases in quality as it gets older", function() {
  const gildedRose = new Shop([new Item("Aged Brie", 5, 10)]);
  const items = gildedRose.updateQuality();
  expect(items[0].quality).to.equal(11)
})
  it("Test 5: Aged Brie quality never goes above 50", function()
{
  const gildedRose = new Shop([new Item("Aged Brie", 2, 50)]);
  const items = gildedRose.updateQuality();
  expect(items[0].quality).to.equal(50)
})
  it("Test 6: Sellin Date does affects Aged brie", function() {
    const gildedRose = new Shop([new Item("Aged Brie", -1, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(12)
  })
  it("Test 7: Sulfuras, never decreases in quality or decreases time to sell", function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 4, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(10)
  })
  it("Test 8: Backstage passes: Quality increases by 1 when more than 10 days", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 15, 45)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(46)
  })
  it("Test 9: Backstage passes: Quality increases by 2 when less than 10 days", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 7, 45)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(47)
    expect(items[0].sellIn).to.equal(6)
  })
  it("Test 10: Backstage passes: Quality increases by 3 when 5 days or less", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 4, 45)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(48)
    expect(items[0].sellIn).to.equal(3)
  })
  it("Test 11: Backstage passes: Quality drops to 0 after the concert", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 45)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0)
    expect(items[0].sellIn).to.equal(-1)

  })
  it("Test 12: Backstage passes: Quality never goes above 50 (sellin date < 5)", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 4, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(50)
    expect(items[0].sellIn).to.equal(3)
  })
  it("Test 13: Backstage passes: Quality never goes above 50 (sellin date > 5)", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 7, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(50)
    expect(items[0].sellIn).to.equal(6)
  })
  // it("Test 12: Conjured items degrade twice as fast as normal items", function() {
  //
  // }

});
