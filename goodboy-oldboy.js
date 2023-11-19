// Goodboy-Oldboy (A dog age calculator)

function printYears(dogYearOfBirth, dogYearFuture, shouldShowResultInDogYears) {
    const humanAge = dogYearFuture - dogYearOfBirth;

    if (shouldShowResultInDogYears) {
        console.log(`Your dog will be ${humanAge * 7} dog years old in ${dogYearFuture}`);
    } else {
        console.log(`Your dog will be ${humanAge} human years old in ${dogYearFuture}`);
    }
}

// Don't touch this line!
module.exports = printYears;
