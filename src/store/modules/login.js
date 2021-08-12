import * as service from '../../service/login.service';
export default {
  namespaced: true,
  state: {
    communityid: '', // 小区Id
  },
  mutations: {
    setCommunityid(state, payload) {
      state.communityid = payload.communityid;
    }
  },
  actions: {
    async getSessionKey(_, params) {
      const res = await service.getSessionKey(params);
      if (res) return res;
    },
    async wxPhone(_, params) {
      const res = await service.wxPhone(params);
      if (res) return res;
    },
    async getVerificationCode(_, params) {
      const res = await service.getVerificationCode(params);
      if (res) return res;
    },
    async loginIn({ commit }, params) {
      const res = await service.loginIn(params);
      if (res) {
        commit('setCommunityid', res.data);
        return res;
      }
    },
  }
};
