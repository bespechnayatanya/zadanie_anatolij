// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

for (let y = 1; y <=10; y++){
    console.log(2**y)
}

// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

let y = 1
 function checkNumber() {
     for  (;y <=10; y++) {
    console.log(2**y)
 }
}
checkNumber()

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

let x = ''
for(let i = 1; i <=5; i++) {
    x += ':)'
    console.log(x)
}

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)

let stroka = '<3'
let numberOfRows = 5
let x = ''
function printSmile(){
    for(let i = 1; i <= numberOfRows; i++){
        x += stroka
        console.log(x)
    }
}
printSmile()

// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв

let word = 'hello'
    function getWordStructure() {
        let count = 0
        let search = ['a','i','e','o','u']
        for (let i = 0; i < word.length; i++)
        for (let j = 0; j < search.length; j++)
            if (word[i] == search[j]) {
                ++count
                break
            }                    
        let count2 = 0
        let search2 = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']
        for (let x = 0; x < word.length; x++)
        for (let y = 0; y < search2.length; y++)
            if (word[x] == search2[y]) {
                ++count2
                break
            }
        console.log('Cлово ' + word, 'состоит из ', + count, 'гласных и ', + count2, ' согласных букв.')
    }
 getWordStructure()

// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)

let word = 'hello'
let reverse;
    function isPalindrom() {
        function reverse(word) {
            return word.split('').reverse().join('');
        }
            if (word== reverse(word)) {
                console.log('It is palindrom.')
            } else {
                console.log('It is not palindrom.')
            }
    }
isPalindrom()