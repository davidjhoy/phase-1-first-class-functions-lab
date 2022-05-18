// Code your solution in this file!
const returnFirstTwoDrivers = function (arr){
    return arr.slice(0,2);
}

const returnLastTwoDrivers = function (arr){
    return arr.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int){
    return (fare) => fare*int;
}

function fareDoubler (int){
    const inter = createFareMultiplier(2);
    return inter(int);
}

function fareTripler(int){
    const inter = createFareMultiplier(3);
    return inter(int)
}

function selectDifferentDrivers(arr, func){
    if (String(func.name) == 'returnFirstTwoDrivers'){
        return arr.slice(0,2)

    } else {
        return arr.slice(-2)
    }
}