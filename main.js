const arrayDiff = (a, b) =>{
     const result = a.filter((el) => !b.includes(el));
     return result;
}

const listFiltering = (list) => {
     return list.filter((el)=> typeof el ==="number") 
}