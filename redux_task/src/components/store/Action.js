const add = (pay)=> {

return{
    type: "Add",
    payload:pay,
}
}


const sub = (pay) => {
  return {
    type: "Sub",
    payload: pay,
  };
};
export {add, sub };