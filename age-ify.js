// Age-ify (A future age calculator)

function calculateAge(yearOfBirth, futureYear) {
    console.log(`You will be ${futureYear - yearOfBirth} years old in ${futureYear}`);
}

calculateAge(1987, 2017);

// Don't touch this line!
module.exports = calculateAge;
