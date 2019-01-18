class Sieve {
  constructor (number = 0) {
    this.number = number;
    this.numArray = [];
  }

  isPrime (num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  get primes() {
    for (let i = 2; i <= this.number; i++) {
      if (this.isPrime(i)){ this.numArray.push(i) };
    }
    return this.numArray;
  }
}

export default Sieve;
