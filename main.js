class Travelar {
    constructor(henrietta) {
        this.name = henrietta;
        this.food = 1; 
        this.ishealthy = true;
    }
    hunt() {
        this.food = +2;
    }
    eat() {
        this.food -= 1;
    if(this.food === 0) {
        this.ishealthy = false;
        }
    }

}

class Wagon {
  constructor(capacity) {
      this.capacity = capacity;
      this.passengers = []

      Travelar.hunt = function() {
        this.food = +2;
      }
  }
  getAvailableSeatCount() {
    return this.capacity - this.passengers.length;
  }
  join(traveler) {
      if (this.passengers.length < this.capacity){
    this.passengers.push(traveler);
    }
  }
  shouldQuarantine() {
      for( let i = 0; i < this.passengers.length; i++) {
        if (this.passengers[i].ishealthy === false) {
        return true;
        }
    }
    return false;
}

  totalFood() {
      let total = 0;
       for( let i = 0; i < this.passengers.length; i++) {
           total += this.passengers[i].food;
           console.log(this.passengers[i].food)
       }
       return total;
    }
}