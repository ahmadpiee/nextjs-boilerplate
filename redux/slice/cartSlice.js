import { LineAxisTwoTone } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    subTotal: 0,
    // counter: 0,
  },
  reducers: {
    addProducts(state, action) {
      if (
        state.products.findIndex(
          (item) =>
            item.product_id === action.payload.product_id &&
            item.roomType === action.payload.roomType &&
            item.departure === action.payload.departure
        ) === -1
      ) {
        return {
          ...state,
          products: [...state.products, action.payload],
          subTotal:
            state.subTotal + action.payload.price * action.payload.amount,
        };
      } else {
        return {
          ...state,
          products: state.products.map((product) => {
            if (
              product.product_id === action.payload.product_id &&
              product.roomType === action.payload.roomType &&
              product.departure === action.payload.departure
            ) {
              return {
                ...product,
                amount: product.amount + action.payload.amount,
              };
            }
            return product;
          }),
          subTotal:
            state.subTotal + action.payload.price * action.payload.amount,
        };
      }
    },
    setCounterProducts(state, action) {
      return {
        ...state,
        products: state.products.map((product) => {
          // console.log("payload", action.payload);
          // if (product.id === action.payload.id) {
          return {
            ...product,
            amount: action.payload,
          };
          // }
          // return product;
        }),
      };
    },
    removeItem(state, action) {
      return {
        ...state,
        products: state.products.filter((item) => item.id !== action.payload),
        subTotal: 0,
      };
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.cart,
      };
    },
  },
});

export const { addProducts, removeItem, setCounterProducts } =
  cartSlice.actions;
export default cartSlice;
