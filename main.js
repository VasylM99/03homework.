function deletLetter(string, letter) {
    str = '';
    for (i = 0; i < string.length; i++) {
        if (string[i] !== letter ) {
            str += string[i];
      }
    }
    return str;
}


function maxNumber(number) {
    number = number.toString();
    let max = 0;
    for (i = 0; i < number.length; i++) {
        if (max<number[i]) {
        max = number[i];
        }     
    }
    return max;   
}


function corectName(name) {
    
    if (name[0] !== name[0].toUpperCase() ) {
        name = name[0].toUpperCase() + name.slice( 1,name.length).toLowerCase(); 
    } else {
        name = name[0] + name.slice(1,name.length).toLowerCase();
    }
    return name;
}


function randomPass(passLength) {
    let pass='';
    for (i = 0; i < passLength; i++) {
        pass += Math.floor(Math.random()*10);
        
    }
    return pass;
}


function countLetter(str,letter) {
    str= str.toLowerCase();
    letter= letter.toLowerCase();
    let count = 0;
    for(i=0; i<str.length; i++){
        if(str[i] === letter){
            count++;
        }
    }
    return count;
}


function isPalyndrom(str) {
    str = str.toLowerCase();
    let palyndrom = str.split('').reverse().join('');
    if (str == palyndrom) {
        result = true;
    }else{
        result = false;
    }
    return result;
}
const myFunc = function result() {
    console.log('Функция №1(deletLetter):' ,deletLetter('blablabla','a'));
    console.log('Функция №2(maxNumber): ', maxNumber(1236));
    console.log('Функция №3(corectName): ', corectName('iVaN'));
    console.log('Функция №4(randomPass): ', randomPass(8));
    console.log('Функция №5(countLetter): ', countLetter('Асталависта', 'а'));
    console.log('Функция №6(isPalyndrom): ', isPalyndrom('мадам'));   
}
myFunc(); 
