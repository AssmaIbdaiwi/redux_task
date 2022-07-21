const init ={
    count :0 
}
const Math = (state = init, action)=>{
    switch (action.type) {
      case "Add":
        return {
        ...state,
          count: state.count + action.payload,
        };
      case "Sub":
        return {
          ...state,
          count: state.count - action.payload,
        };
        
      default:
        return state;
    }
}
export {Math}
