// Code your solution in this file!
distanceFromHqInBlocks(t)
function distanceFromHqInBlocks(t) {
    let distanceFromHqInBlocks=t
    if (t===42){
        return 1
    }
    if (t<42) {
        return 42-t
    }
  return t-42
    
    
}
    
distanceFromHqInFeet(y)  
function distanceFromHqInFeet(y) {
    let distanceFromHqInFeet=y
    if (y===42){
        return 264
    }
    if (y<42) {
        return (42-y)*264
    }
  return (y-42)*264
    

}
    
function distanceTravelledInFeet(x,z) {
    if (x-z===5){
        return 1320
    }
  if (x>z){
return (x-z)*264
  }
  return (z-x)*264
}
function calculatesFarePrice (x,z){
    let distance=distanceTravelledInFeet(x,z)
    if (distance < 400) {
        return 0 ;
    }
    if (distance> 400 && distance <2000) {
        return 0.02 * (distance-400);
    }
    if (distance> 2000 && distance <2500) {
        return 25;
    }
return 'cannot travel that far' ;
}
