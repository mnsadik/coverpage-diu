export const state = () => ({
  SubTo: null,
  Course: { name: null, value: null },
  ExpNo: null,
  ExpName: null,
  PerformenceDate: null,
  SubmissionDate: null,
  SubBy: null,
  IdNo: null,
});

export const actions = {
  NewInfos: ({ commit }, info) => {
    commit("UpdateInfos", info);
  },
};

export const mutations = {
  UpdateInfos(state, info) {
    state.SubTo = info.SubTo;
    state.Course = info.Course;
    state.ExpNo = info.ExpNo;
    state.ExpName = info.ExpName;
    state.PerformenceDate = info.PerformenceDate;
    state.SubmissionDate = info.SubmissionDate;
    state.SubBy = info.SubBy;
    state.IdNo = info.IdNo;
  },
};
