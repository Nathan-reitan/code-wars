const arrayDiff = (a, b) =>{
     return a.filter((el) => !b.includes(el));
}

const filter_list = (list) => {
     return list.filter((el)=> typeof el ==="number") 
}

const descendingOrder = (n) => {
     return parseInt(n.toString().split('').sort((a,b)=>{return b-a}).join(''))
}

const squareDigits = (num) => {
     return parseInt(num.toString().split('').map(x=>parseInt(x)*parseInt(x)).join(''))
}

const highAndLow = (numbers) => {
     const numsArry = numbers.split(" ").sort((a,b)=>{return a-b});
     let high = numsArry[numsArry.length-1];
     let low = numsArry[0];
     return high + " " + low;
}

const sumTwoSmallestNumbers = (numbers) => {  
     numbers = numbers.sort((a,b) => {return a-b});
     return numbers[0] + numbers[1];
}

const friend = (friends) => {
     return friends.filter((word)=>word.length===4);
}

const persistence = (num) => {
     let counter = 0;
     if(num<10){
          return counter
     } else {
          let string = num.toString();
          for (let i = 0; i<string.length; i++){
               
          }
          persistence(string)
     }
}