import axios, { AxiosRequestConfig } from "axios";




export default class FoodListViewModel {
    constructor() {

    }
    async readRandomfood(num: string, tags: string): Promise<any> {
        const option: AxiosRequestConfig = {
            params: {
                limitLicense: "",
                number: num,
                tags: tags,
            },
        };
        const res = await axios.get('api/random', option);
        // Process the response and return the desired result
        return res.data;

    }
}