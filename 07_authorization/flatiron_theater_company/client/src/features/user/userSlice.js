import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import {fetchCurrentUser, loginUser, logoutUser, signupUser} from "./userApi"
const initialState = {
    user: null,
    status: "idle",
    errors: ""
}

export const getCurrentUser = createAsyncThunk(
    'user/fetchUser',
    async () => {
        const resp = await fetchCurrentUser()
        return resp
    }
)
export const loginAsync = createAsyncThunk(
    'user/login',
    async () => {
        const resp = await loginUser()
        return resp
    }
)
export const signupAsync = createAsyncThunk(
    'user/signup',
    async () => {
        const resp = await signupUser()
        return resp
    }
)
export const logoutAsync = createAsyncThunk(
    'user/logout',
    async () => {
        const resp = await logoutUser()
        return resp
    }
)

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
          .addCase(getCurrentUser.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(getCurrentUser.fulfilled, (state, action) => {
            if (action.payload.error) {
                state.status = 'idle';
                state.errors = action.payload.error;
                state.user = null
            } else {
                state.status = 'idle';
                state.errors = "";
                state.user = action.payload
            }
          })
          .addCase(getCurrentUser.rejected, (state, action) => {
            debugger
            state.status = 'idle';
            state.errors = action.payload;
            state.user = null
          })
          .addCase(loginAsync.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(loginAsync.fulfilled, (state, action) => {
            debugger
            if (action.payload.error) {
                state.status = 'idle';
                state.errors = action.payload.error;
                state.user = null
            } else {
                state.status = 'idle';
                state.errors = "";
                state.user = action.payload
            }
          })
          .addCase(loginAsync.rejected, (state, action) => {
            debugger
            state.status = 'idle';
            state.errors = action.payload;
            state.user = null
          })
          .addCase(signupAsync.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(signupAsync.fulfilled, (state, action) => {
            debugger
            if (action.payload.error) {
                state.status = 'idle';
                state.errors = action.payload.error;
                state.user = null
            } else {
                state.status = 'idle';
                state.errors = "";
                state.user = action.payload
            }
          })
          .addCase(signupAsync.rejected, (state, action) => {
            debugger
            state.status = 'idle';
            state.errors = action.payload;
            state.user = null
          })
          .addCase(logoutAsync.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(logoutAsync.fulfilled, (state, action) => {
            debugger
            if (action.payload.error) {
                state.status = 'idle';
                state.errors = action.payload.error;
                state.user = null
            } else {
                state.status = 'idle';
                state.errors = "";
                state.user = action.payload
            }
          })
          .addCase(logoutAsync.rejected, (state, action) => {
            debugger
            state.status = 'idle';
            state.errors = action.payload;
            state.user = null
          });
    }
});

// export {} = userSlice.actions
export default userSlice.reducer