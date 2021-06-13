import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

// Define a type for the slice state
interface CarState {
  cars: [];
}

// Define the initial state using that type
const initialState: CarState = {
  cars: [],
};

export const carSlice = createSlice({
  name: "car",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      //state.car += 1;
    },
    decrement: (state) => {
      //state.car -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      //state.car += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = carSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCar = (state: RootState) => state.car.cars;

export default carSlice.reducer;
