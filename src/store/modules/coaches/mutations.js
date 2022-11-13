export default {
  registerCoach(state, payload) {
    state.coaches.unshift(payload);
  }
};