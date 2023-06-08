// In pages/api/search.js:
import { key } from "./key"
import axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const options: AxiosRequestConfig = {
    method: 'GET',
    url: `https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}`,
    params: {
      query: req.query.query as string,
      maxFat: req.query.maxFat as string,
      number: req.query.number as string,
      offset: '0'
    },
  };

  try {
    const response: AxiosResponse = await axios(options);
    res.status(200).json(response.data);
  } catch (error:any) {
    if (axios.isAxiosError(error)) {
      console.error(error.response);
    } else {
      console.error(error);
    }
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
