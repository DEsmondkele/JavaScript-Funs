var nums= [2,1,3,4,56,7,8]
var numarray=[2,3,4,78]
numarray.push(nums)
console.log(numarray)


var exampleSet = new Set([house,more,[house,more]]);
console.log(exampleSet.values)

function intersectionSet(setA, setB) {
    var intersection= new Set()
    for(var elem of setB) {
        if(setA.has(elem)){
            intersection.add(elem)
        }
    }
    return intersection;
}
var house=new Set([1,2,5,8]),
 more= new Set([5,4,2,1]);
var x=intersectionSet(house, more)
console.log(x)

function bSearch(array,index){
    var lowindex =0, highindex =array.length -1;
    while(lowindex<=highindex){
        var midindex = Math.floor((highindex+lowindex)/2)
        if(array[midindex]==index){
            return midindex;
        }
        else if(index<array[midindex]){
            lowindex = midindex;
        }
        else{
            highindex = midindex;
        }
    }
    return-1
}



function wordCount(sentence) {
        
         var wordsArray = sentence.replace(/[.]/g,"").split(" "),
             occurenceList = {}, answerList = {};
  
         for (var i=0, wordsLength=wordsArray.length; i<wordsLength; i++) {
             var currentWord = wordsArray[i];
             // doesn't exist, set as 1st occurrence
             if (!occurenceList[currentWord]) {
                occurenceList[currentWord] = 1;
  //     SearChing and Sorting
            } 
            else {
                occurenceList[currentWord]++; // add occurrences
             }
        }
  
         var arrayTemp = [];
         // push the value and key as fixed array
         for (var prop in occurenceList) {
           arrayTemp.push([occurenceList[prop], prop]);
         }
          function sortcomp(a, b) {
           return b[0] - a[0]; // compare the first element of the array
         }
           arrayTemp.sort(sortcomp); //sort
           for (var i = 0, arrlength = arrayTemp.length; i < arrlength; i++) {
            var current = arrayTemp[i];
            answerList[current[1]] = current[0]; // key value pairs
         }
         return answerList;
     }

    var words= { practice: 3, perfect: 2, makes: 1, get: 1, by: 1, just: 1 };
    
   // console.log(wordCount(words));

    function Stack(array){
        var index= 0;
        index++;
        this.array = [];
        if(array) this.array = array;
    }
    Stack.prototype.isEmpty = function(){
        return this.array.length == 0;
    }
    var stack1 = new Stack()
    console.log(stack1);

    Stack.prototype.peek = function(){
        return this.array[this.array.length-1]
    }
    Stack.prototype.push = function(value){
        var index=0;
        return this.array[index++]=value;
        
    }
    Stack.prototype.pop = function(value){
        var index = 0;
        return this.array[index]
    }
    stack1.push(10);
    console.log(stack1.peek());
    stack1.push(5)
    console.log(stack1.peek());
    stack1.pop(5)
    console.log(stack1.peek());