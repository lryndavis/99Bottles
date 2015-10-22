

// var noMore = 'No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.'
// var oneBottle = 'One bottle of beer on the wall, one bottle of beer. Take one down and pass it around, one bottle of beer on the wall.'


var bottlesOfBeer = function(number) {
  if (number === 0) { 
    return 'No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.'; 
  } else if (number === 1) { 
    return 'One bottle of beer on the wall, one bottle of beer. Take one down and pass it around, one bottle of beer on the wall.';
  } else if (number > 1 && number <= 99) { 
    return number + ' bottles of beer on the wall, ' + number + ' bottles of beer. Take one down and pass it around, ' + 
    (number - 1) + ' bottles of beer on the wall. ' + bottlesOfBeer(number - 1);
  } else {
    return "That's not a valid number! Please enter a number below 99.";
  }
}









