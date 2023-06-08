import exp from "constants"
import { key } from "./key"
import axios, { AxiosResponse, AxiosRequestConfig } from "axios"
import { NextApiRequest, NextApiResponse } from "next"
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
): Promise<void> {
    const options: AxiosRequestConfig = {
        method: 'GET',
        url: ` https://api.spoonacular.com/recipes/random?apiKey=${key}`,
        params: {
            limitLicense: req.query.limitLicense as string,
            tags: req.query.tags as string,
            number: req.query.number as string,
        },
    };

    try {
        const response: AxiosResponse = await axios(options);
        res.status(200).json(response.data);
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            console.error(error.response);
        } else {
            console.error(error);
        }
        res.status(500).json({ error: 'Internal Server Error' });
    }
}