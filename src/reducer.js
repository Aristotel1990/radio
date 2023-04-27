export const initialState = {
  basket: [
    "https://www.youtube.com/watch?v=3x3PK8qdH1w&ab_channel=NonstopMusic",
  ],
  gif: "/images/chill1.gif",
};

// Selector

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: action.item,
        gif: action.anime,
      };

    default:
      return state;
  }
};

export default reducer;
