function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}

const shuvoHeight = inchToFeet(75);
// console.log(shuvoHeight);

// ignore
function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining =  inch % 12;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch.';
    return result;
}
const shdsds = inchToFeet2(75);
console.log(shdsds);

function mileToKilometer(mile){
    const kilo = mile * 1.60934;
    return kilo;
}
const sfsdsfsd = mileToKilometer(34);
// console.log(sfsdsfsd);

function kiloMeterMiles(kilo){
    const mile = kilo * 0.621371;
    return mile;
}
const rerer = kiloMeterMiles(20);
// console.log(rerer);