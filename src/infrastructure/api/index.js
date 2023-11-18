import { GET_ALL_SEARCH, POST_FIND_SEARCH } from "./api-list";
import instance from "../axios";

export default {
    getAllHistory: async () => {
        const response = await instance.get(GET_ALL_SEARCH);
        return response;
    },
    postFindAddress: async (data) => {
        const response = await instance.post(POST_FIND_SEARCH, data);
        return response;
    }
}