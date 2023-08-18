const arrayDiff = (a, b) =>{
     const result = a.filter((el) => !b.includes(el));
     return result;
}