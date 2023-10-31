let headquarters = 42;
function distanceFromHqInBlocks(distance) {
       return Math.abs(distance - headquarters);
    }

function distanceFromHqInFeet(distance2) {
    return distanceFromHqInBlocks(distance2) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
    let result = distanceTravelledInFeet(start, destination);
    if (result <= 400) {
        return 0;
    } else if (result <= 2000) {
        return (result - 400) * .02;
    } else if (result <= 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
}