class WordProblem {
  constructor (question = '') {
    this.operators = {
      'numbers':        '[-+]?[\d]+',
      'plus':           '+',
      'minus':          '-',
      'multiplied by':  '*',
      'divided by':     '/',
    };
    this.question = question;
    this.format = new RegExp(`^What is (-?\\d+(?: (?:${Object.keys(this.operators).join("|")}) -?\\d+)+)\\?$`);
  }

  answer () {
    if(!this.question.match(this.format)) throw new ArgumentError();
    const tokens = this.tokenize();
    return this.process(tokens);
  }

  tokenize () {
    let question = this.question.match(this.format)[1];
    for(let operator in this.operators) {
      question = question.replace(new RegExp(operator, 'g'), this.operators[operator]);
    }
    return question.split(" ");
  }

  process (tokens) {
    let total = tokens.shift();
    while (tokens.length > 0) {
      total = eval(`${total} ${tokens.shift()} ${tokens.shift()}`);
    }
    return total;
  }
}

class ArgumentError extends Error {
  constructor (message, status) {
    super(message)
    this.name = this.constructor.name;
    this.status = status || 500;
    Error.captureStackTrace(this, this.constructor);
  }
}

export {
  WordProblem,
  ArgumentError,
};
