import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      console.log(action, "actioncoming");
      const isExisting = state.items.find(
        (eachProduct) => eachProduct.id == action.payload.id
      );
      if (!isExisting) {
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (eachProduct) => eachProduct.id !== action.payload.id
      );
    },

    addExtraItem: (state, action) => {
      console.log(action, "came");

      state.items = state.items.map((eachProduct) => {
        if (eachProduct.id === action.payload.id) {
          return {
            ...eachProduct,
            check: (eachProduct.check || 0) + 1,
            pay: eachProduct.pay + eachProduct.costForTwo,
          };
        } else {
          return eachProduct;
        }
      });
    },
    removeExtraItem: (state, action) => {
      console.log(action, "came");

      state.items = state.items.map((eachProduct) => {
        if (eachProduct.id === action.payload.id) {
          return {
            ...eachProduct,
            check: (eachProduct.check || 0) - 1,
            pay: eachProduct.pay - eachProduct.costForTwo,
          };
        } else {
          return eachProduct;
        }
      });
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

// Export the actions
export const { addItem, removeItem, clearCart, addExtraItem, removeExtraItem } =
  cartSlice.actions;

export default cartSlice.reducer;
