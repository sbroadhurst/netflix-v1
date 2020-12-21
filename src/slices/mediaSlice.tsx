import { createSlice } from '@reduxjs/toolkit'

const mediaSlice = createSlice({
  name: 'media',
  initialState: {
    MediaType: 'movie',
  },
  reducers: {
    setMediaType: (state, action) => {
      state.MediaType = action.payload
    },
  },
})

const { actions, reducer } = mediaSlice
export const { setMediaType } = actions

export default reducer
