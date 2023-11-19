// Housey pricey (A house price estimator)

function fairlyPriced(width, depth, height, gardenSizeInM2, actualHousePrice) {
    const volume = width * depth * height;
    const expectedPrice = volume * 2.5 * 1000 + gardenSizeInM2 * 300;

    if (actualHousePrice <= expectedPrice) {
        console.log('Peter and Julia are paying a fair price');
    } else {
        console.log('Peter and Julia are paying an unfair price');
    }
}

// Don't touch this line!
module.exports = fairlyPriced;
