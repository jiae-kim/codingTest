const morse = {
    '.-':'a',
    '-...':'b',
    '-.-.':'c',
    '-..':'d',
    '.':'e',
    '..-.':'f',
    '--.':'g',
    '....':'h',
    '..':'i',
    '.---':'j',
    '-.-':'k',
    '.-..':'l',
    '--':'m',
    '-.':'n',
    '---':'o',
    '.--.':'p',
    '--.-':'q',
    '.-.':'r',
    '...':'s',
    '-':'t',
    '..-':'u',
    '...-':'v',
    '.--':'w',
    '-..-':'x',
    '-.--':'y',
    '--..':'z'
}

function solution(letter) {
    let answer = '';
    let currentMorse = '';
    /*
    for(let i=0; i<letter.length; i++) {
        const item = letter[i];
        
        if(item === ' ') {
            answer += morse[currentMorse];
            currentMorse = '';
        } else {// 공백이 아닌경우
            currentMorse += item;
        }
    }
    
    answer += morse[currentMorse];
    */
    
    // split 메서드 사용 
    const splittedLetter = letter.split(' ');
    for(let i=0; i < splittedLetter.length; i++) {
        answer += morse[splittedLetter[i]];
    }

    return answer;
}