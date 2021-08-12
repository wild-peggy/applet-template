import * as service from '../../service/home.service';
export default {
  namespaced: true,
  state: {
    classifyData: [], // 分类查询数据
    classifyPage: {
      // 分类查询参数
      page: 1,
      num: 15,
      hasMore: true
    },
    payMoneyCodeData: {
      sctxm: '',
    }, // 付款码数据
    deliveryCodeData: {}, // 投递码数据
  },
  mutations: {
    setClassifyData(state, [payload, params]) {
      const { page } = params;
      if (page === 1) {
        state.classifyData = [];
      }
      state.classifyPage = {
        ...state.classifyPage,
        ...params,
        hasMore: payload.length > 0 ? true : false
      };
      state.classifyData = [...state.classifyData, ...payload];
    },
    setPayMoneyCode(state, payload) {
      state.payMoneyCodeData = payload;
    },
    setDeliveryCode(state, payload) {
      state.deliveryCodeData = payload;
    },
  },
  actions: {
    async classifySearch({ state, commit }, params) {
      const { hasMore } = state.classifyPage;
      const { page } = params;
      if (!hasMore && page > 1) return;
      const res = await service.classifySearch(params);
      if (res) {
        commit('setClassifyData', [res.newslist || [], params]);
      }
    },
    async getPayMoneyCode({ commit }, params) {
      const res = await service.getPayMoneyCode(params);
      if (res) {
        commit('setPayMoneyCode', res.data);
      }
    },
    async getDeliveryCode({ commit }, params) {
      const res = await service.getDeliveryCode(params);
      if (res) {
        commit('setDeliveryCode', res.data);
      }
    },
  }
};
