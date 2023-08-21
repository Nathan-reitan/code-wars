const arrayDiff = (a, b) =>{
     return a.filter((el) => !b.includes(el));
}

const filter_list = (list) => {
     return list.filter((el)=> typeof el ==="number") 
}

const descendingOrder = (n) => {
     return parseInt(n.toString().split('').sort((a,b)=>{return b-a}).join(''))
}