const initialState = {
  // token: typeof window !== "undefined" ? localStorage.getItem("token") : null,
  token: null,
  userId: null,
  cartId: null,
};

// ...

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_TOKEN":
      return {
        ...state,
        token: action.payload,
      };
    case "SET_USER_ID":
      return {
        ...state,
        userId: action.payload,
      };
    case "SET_CART_ID":
      return {
        ...state,
        cartId: action.payload,
      };
    case "CLEAR_USER_DATA":
      return {
        token: null,
        userId: null,
        cartId: null,
      };
    default:
      return state;
  }
};

export default authReducer;
