import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { fetchProductions, createProduction, updateProduction, destroyProduction } from "./productionApi"

const initialState = {
    all: [],
    status: "idle",
    errors: []
}

export const getProductionsAsync = createAsyncThunk(
    "production/fetchProductions",
    async () => {
        const resp = await fetchProductions()
        return resp
    }
)
export const createProductionAsync = createAsyncThunk(
    "production/createProduction",
    async (prod) => {
        const resp = await createProduction(prod)
        return resp
    }
)
export const updateProductionAsync = createAsyncThunk(
    "production/updateProduction",
    async (prod) => {
        const resp = await updateProduction(prod)
        return resp
    }
)
export const destroyProductionAsync = createAsyncThunk(
    "production/destroyProduction",
    async (id) => {
        const resp = await destroyProduction(id)
        return resp
    }
)

export const productionSlice = createSlice({
    name: "production",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(getProductionsAsync.pending, (state) => {
            state.status = 'loading'
          })
          .addCase(getProductionsAsync.fulfilled, (state, action) => {
              state.status = 'idle'
              state.all = action.payload
          })
          .addCase(getProductionsAsync.rejected, (state, action) => {
            debugger
            state.status = 'idle'
          })
          .addCase(createProductionAsync.pending, (state) => {
            state.status = 'loading'
          })
          .addCase(createProductionAsync.fulfilled, (state, action) => {
              state.status = 'idle'
              debugger
              state.all.push(action.payload)
          })
          .addCase(createProductionAsync.rejected, (state, action) => {
            debugger
            state.status = 'idle'
          })
          .addCase(updateProductionAsync.pending, (state) => {
            state.status = 'loading'
          })
          .addCase(updateProductionAsync.fulfilled, (state, action) => {
              state.status = 'idle'
              debugger
              const oldProdIndex = state.all.findIndex(prod => prod.id === action.payload.id)
              state.all[oldProdIndex] = action.payload
          })
          .addCase(updateProductionAsync.rejected, (state, action) => {
            debugger
            state.status = 'idle'
          })
          .addCase(destroyProductionAsync.pending, (state) => {
            state.status = 'loading'
          })
          .addCase(destroyProductionAsync.fulfilled, (state, action) => {
              state.status = 'idle'
            //   debugger
              if (action.payload.resp.status === 204){
                // const oldProdIndex = state.all.findIndex(prod => prod.id !== action.payload.id)
                state.all = state.all.filter(prod => prod.id !== action.payload.id)
              } else {
                state.errors = "Could not process destroyal"
              }
          })
          .addCase(destroyProductionAsync.rejected, (state, action) => {
            debugger
            state.status = 'idle'
          })
    }
})

export const productionSelector = (state) => state.production.all
export default productionSlice.reducer