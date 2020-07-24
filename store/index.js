export const state = () => ({
  date: null,
  videoList: [],
})
export const mutations = {
  updateDate(state, date) {
    state.date = date
  },
  setVideoList(state, newlist) {
    state.videoList = newlist
  }
}
