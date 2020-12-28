import { createSlice } from '@reduxjs/toolkit'

const mediaSlice = createSlice({
  name: 'media',
  initialState: {
    MediaType: 'movie',
    isUserModalOpen: false,
  },
  reducers: {
    setMediaType: (state, action) => {
      state.MediaType = action.payload
    },
    setUserModalOpen: (state) => {
      state.isUserModalOpen = !state.isUserModalOpen
    },
  },
})

const { actions, reducer } = mediaSlice
export const { setMediaType, setUserModalOpen } = actions

export default reducer
