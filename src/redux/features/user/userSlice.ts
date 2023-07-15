import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { api, useSignupMutation } from "../../api/apiSlice";


interface IUserState {
  token: string | null;
  isLoading: boolean;
  error: string | null;
}

interface ICredential {
  email: string;
  password: string;
  confirmPassword: string;
}

const initialState: IUserState = {
  token: null,
  isLoading: false,
  error: null,
};

// export const createUser = createAsyncThunk(
//   "user/createUser",
//   async (
//     { email, password, confirmPassword }: ICredential,
//     { rejectWithValue }
//   ) => {
//     try {
//       const response = await api.signup({
//         userData: { email, password, confirmPassword },
//       });
//       const token = response.data?.token;

//       if (!token) {
//         throw new Error("Failed to create user");
//       }

//       return token;
//     } catch (error: any) {
//       return rejectWithValue(error.response?.data || "Failed to create user");
//     }
//   }
// );


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // .addCase(createUser.pending, (state) => {
      //   state.isLoading = true;
      //   state.error = null;
      // })
      // .addCase(createUser.fulfilled, (state, action) => {
      //   state.token = action.payload;
      //   state.isLoading = false;
      //   state.error = null;
      // })
      // .addCase(createUser.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.error = action.error.message || "Failed to create user";
      // });
  },
});

export default userSlice.reducer;
