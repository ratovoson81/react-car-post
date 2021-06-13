import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import { ItemCarType } from "../api/types";
import produce from "immer";

interface CarState {
  cars: ItemCarType[];
}

// Define the initial state using that type
const initialState: CarState = {
  cars: [] as any,
};

export const carSlice = createSlice({
  name: "car",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setAllCar: (state, action: PayloadAction<any>) => {
      state.cars = action.payload;
    },
    addCar: (state, action: PayloadAction<ItemCarType>) => {
      state.cars.push(action.payload);
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<CarState>) => {
      //state.car += action.payload;
    },
  },
});

export const { setAllCar, addCar, incrementByAmount } = carSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCar = (state: RootState) => state.car.cars;

export default carSlice.reducer;
