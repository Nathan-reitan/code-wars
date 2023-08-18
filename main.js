const arrayDiff = (a, b) =>{
     const result = a.filter((el) => !b.includes(el));
     return result;
}

const filter_list = (list) => {
     return list.filter((el)=> typeof el ==="number") 
}