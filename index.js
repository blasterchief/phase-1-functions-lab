const headQuarters = 42
function distanceFromHqInBlocks(location) {
   // return Math.abs(location - headQuarters)
    if (headQuarters > location){
        return headQuarters - location
    }
        else if (headQuarters < location){
            return location - headQuarters
    }
}
function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * 264
}
function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264
}
function calculatesFarePrice(start, destination) {
    if  (distanceTravelledInFeet(start, destination) < 400)
    {
        return 0
    }
    else if (distanceTravelledInFeet(start, destination) < 2000  ) {
        let price = (distanceTravelledInFeet(start, destination) -400 )* 0.02 
        return price
    }
    else if (distanceTravelledInFeet(start, destination) < 2500 ) {
        let price = 25
        return price
    }
    else if (distanceTravelledInFeet(start, destination) > 2500) {
        return "cannot travel that far"
    }
}