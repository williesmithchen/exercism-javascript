let namesPointer = -1;

class AllNames {
  constructor () {
    this.allNames = [];
    this.letter = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
    this.number = [...'0123456789'];
    this.generateAllName();
  }

  random (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  poker () {
    for (let i = 0; i < this.allNames.length; i++) {
      let j = this.random(0, this.allNames.length - 1);
      let temp = this.allNames[i];
      this.allNames[i] = this.allNames[j];
      this.allNames[j] = temp;
    }
  }

  generateAllName () {
    this.letter.forEach((a) => {
      this.letter.forEach((b) => {
        this.number.forEach((c) => {
          this.number.forEach((d) => {
            this.number.forEach((e) => {
              this.allNames.push([a, b, c, d, e].join(''));
            });
          });
        });
      });
    });
    this.poker();
  };

  get names () {
    return this.allNames;
  }
}

const usedNames = new AllNames().names;

export class Robot {

  constructor () {
    this.usedNames = usedNames;
    this.robotName = this.generateName();
  }

  generateName () {
    return this.usedNames[++namesPointer];
  };

  get name () {
    return this.robotName;
  }

  reset () {
    this.robotName = this.generateName();
  }

  static releaseNames () {
    namesPointer = -1;
  }
};
