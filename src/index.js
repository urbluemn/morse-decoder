const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const symbolsArray = expr.match(/[\s\S]{1,10}/g);
    let morseStr = '';
    let result = [];

    for (let el of symbolsArray) {
        if(el === '**********') {
            result.push(' ');
            continue;
        }
        morseStr = el.match(/[\s\S]{1,2}/g).filter(e => e > 0).map(e => e == 10 ? '.' : '-').join('');
        result.push(MORSE_TABLE[morseStr]);
    }

    return result.join('');
}

module.exports = {
    decode
}

