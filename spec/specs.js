describe('bottlesOfBeer', function() {
  it("will show that there are no more bottles of beer at 0", function() {
    expect(bottlesOfBeer(0)).to.equal('No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.')
  });

  it("will show the proper output for a single bottle of beer", function() {
    expect(bottlesOfBeer(1)).to.equal('One bottle of beer on the wall, one bottle of beer. Take one down and pass it around, one bottle of beer on the wall.')
  });
});