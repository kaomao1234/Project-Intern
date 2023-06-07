// In pages/api/search.js:
import { key } from "./key"
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const options: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search',
    params: {
      query: req.query.keyword as string,
      diet: req.query.diet as string,
      excludeIngredients: req.query.exclude as string,
      number: '20',
      offset: '0'
    },
    headers: {
      'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
      'x-rapidapi-key': key
    }
  };

  try {
    const response: AxiosResponse = await axios(options);
    res.status(200).json(response.data);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(error.response);
    } else {
      console.error(error);
    }
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
