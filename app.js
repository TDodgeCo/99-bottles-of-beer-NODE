function ninetyNineBottles() {
  for (i = 99; i >= 0; i--) {
    let bottles = i - 1
    if (i > 1) {
      console.log(i + ' bottles of beer on the wall ' + i + ' bottles of beer. Take one down pass it around, ' + bottles + ' bottles of beer on the wall!')
    }
    else if (i == 1) {
      console.log(i + ' more bottle of beer on the wall, ' + i + ' more bottle of beer! Take it down, pass it around, no more bottles of beer on the wall!')
    }
  }
}

ninetyNineBottles()
