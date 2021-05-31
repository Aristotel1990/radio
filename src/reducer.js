

export const initialState = {
    basket: ['https://www.youtube.com/watch?v=36YnV9STBqc&ab_channel=TheGoodLifeRadioxSensualMusique'],
    gif:"/images/chill1.gif",
  };
  
  // Selector
  
  const reducer = (state, action) => {

    switch (action.type) {
      case "ADD_TO_BASKET":
        return {
          ...state,
          basket:action.item,
          gif:action.anime,
        };
       
      default:
        return state;
    }
  };
  
  export default reducer;