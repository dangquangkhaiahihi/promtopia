import api from "../api-service";

export const BlogService = {
    GetList: async (data = {}) => {
        try {
            const res = await api.get(`/news/get/${data.pageindex || 1}`);
            return res.data
        } catch (err) {
            throw err
        }
    },

    GetRecommended: async () => {
        try {
            const res = await api.get(`/news/GetRecomend`);
            return res.data
        } catch (err) {
            throw err
        }
    },

    GetHot: async () => {
        try {
            const res = await api.get(`/news/GetHot`);
            return res.data
        } catch (err) {
            throw err
        }
    },
    
    GetDetail: async (id) => {
        try {
            const res = await api.get(`/news/getdetail/${id}`);
            return res.data
        } catch (err) {
            throw err
        }
    }
}