//Initialize these three variables
var a=5;
var b=10;
var c="I am a";
//Do not change code below this line
a-=1;
b+=5;
c=c+ " String!";
console.log(b);


var myStr = "I am a\"double quoted\" string inside  double quotes";
console.log(myStr);
var myStr = `'<a href="http://www.example.com" target="_blank">'`;
console.log(myStr);


/*****
 CODE OUTPUT
 \'  single quote
 \" double quote
 \\ backslash
 \n newline
 \r carriage return
 \tab
\b backspace
\f form feed
 *****/
var myStr = "FirstLine\n\t\\SecondLine\nThird Line";
console.log(myStr);
// Example
var ourStr = "I come first. " + "I come second.";
console.log(ourStr);

var ourStr = "I come 1st. ";
ourStr += "I come 2nd.";
console.log(ourStr);  
  
var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";
console.log(ourStr);

var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
console.log(ourStr);
console.log(ourStr);

var firstNameLength = 0;
var firstName = "Alina";
firstNameLength = firstName.length;
console.log(firstNameLength);

var firstLetterOfFirstName = "";
var firstName = "Alina";
firstLetterOfFirstName = firstName[0];
console.log(firstLetterOfFirstName);

var myStr = "Jello World";
myStr = "Hello World";//Fix Me
console.log(myStr);

var firstName = "Andrei";
var secondLetterOfFirstName=firstName[1];
console.log(secondLetterOfFirstName);
var lastName = "Iute";
var thirdLetterOfLastName = lastName[2];
console.log(thirdLetterOfLastName);

var firstName = "Alina";
var lastLetterOfFirstName = firstName[firstName.length - 1];
console.log(lastLetterOfFirstName);
var lastName = "Babileva";
var lastLetterOfLastName = lastName[lastName.length - 1];
console.log(lastLetterOfLastName)


function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + ".";
    return result;

} 
console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));

var ourArray = ["John", 23];

var ourArray = [["the universe",42], ["everything",010101]];


var baieti  = ['Andrei', 'Dorin', 'Lili']
var fete  = ['Alina', 'Alina2', 'Alina3']

console.log(baieti[0])
console.log(fete[0])


console.log(baieti[0] + " + " + fete[0] + " = " + "love")
console.log(baieti[1] + " + " + baieti[2] + " = " + "huinea")


// console.log(baieti)

// function add(n1, n2) {
//     var sum = n1 + n2
//     return sum
// }




// let sum = add(1, 1)

// console.log(sum)

// function div(n1, n2){
//     var res = n1 / n2
//     return res
// }
// let res = div(2, 4)
// console.log(res)

// function sqr(n){
//     return n*n
// }
// console.log(sqr(3))
 
// function sub(n1,n2){
//     return n1-n2
// }

// function pow3(x){
//     return x*x*x
// }

// function isLiliSmart(iq) {
//     if ( iq === 0 ) {
//         console.log("Lili, dulapul meu e mai destept ca tine")
//         return 0
//     } else if (iq > 0 && iq < 90) {
//         console.log("Lili, naruto da bacu mai bine ca tine ")
        
//     } else {
//         console.log("Lili, spala velesa")
//     }
// }


// console.log(isLiliSmart(0))



function add(n1, n2) {
    return n1+n2
}

add([1,2],[1,2])

function sub(n1, n2) {
    return n1-n2
}


nums = [1, 2, 3, 4, 5]


console.log(add(nums[0], nums[4]))


var ourArray = [50, 60, 70];
var ourData = ourArray[0]; //equals 50
console.log(ourData);

var ourArray = [29, 75, 96];
ourArray[1] = 43; //ourArray now equals [29, 43, 96]
console.log(ourArray);

var myArray = [
    [1, 2 ,3], 
    [4, 5, 6], 
    [7, 8, 9], 
    [[10, 11, 12], 13, 14], 
    [15, ["andrei", 16]]
];



var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [[7, 4, 28, 14], [[4, 10], 26, 7]]];

var myData0 = myArray[0][0]; // 1
var myData1 = myArray[2][2]; // 9

console.log(a[3][1][0][0])

var lst = [0,1,2,3,4,5,6,7,8,9,10]

// addNumsInList(index_1, index_2, lst)

// function addNumsInList (index_1, index_2,lst){
//     return lst[index_1] + lst[index_2]
// }



// console.log(addNumsInList(4 ,5 ,lst))


var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];
var myData = myArray[0][0];

var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]); //ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]


var ourArray = [1, 2, 3];
var removedFromOurArray = ourArray.pop(); // removedFromOurArray now equals 3, and ourArray now equals [1, 2]

var ourArray = [2, 3, 4];
var removedFromOurArray = ourArray.shift(); // removedFromOurArray now equals 2, and ourArray now equals [3, 4]


var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); //now ourArray equals ["J", "cat"]
ourArray.unshift("Happy"); //now ourArray equals ["Happy","J", "cat"];
console.log(ourArray);

var myList = [["cereal", 3], ["milk", 2], ["bananas", 4], ["juice", 1], ["eggs", 10]]; //shopping list
console.log(myList);

function ourReusableFunction() {
    console.log("Heyya, World");
}
ourReusableFunction();
ourReusableFunction();


function ourFunctionWithArgs(a, b) {
    console.log(a-b);
}
ourFunctionWithArgs(10, 5); //Outputs 5



