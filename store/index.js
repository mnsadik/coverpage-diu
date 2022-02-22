export const state = () => ({
  Data: {
    SubTo: null,
    Course: { name: null, value: null },
    ExpNo: null,
    ExpName: null,
    PerformenceDate: null,
    SubmissionDate: null,
    SubBy: null,
    IdNo: null,
    Dept: null,
    Section: null,
    Shift: null,
  },
});

export const actions = {
  NewInfos: ({ commit }, info) => {
    commit("UpdateInfos", info);
  },
};

export const mutations = {
  UpdateInfos(state, info) {
    state.Data = info;
  },
};
