import { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, CreateChatCompletionResponse, OpenAIApi } from 'openai';
import { AxiosResponse } from 'axios';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    // Check if the request method is POST
    if (request.method !== 'POST') {
      return response.status(405).end(); // Method Not Allowed
    }

    const { title, role } = await request.body;

    const aiResponse: AxiosResponse<CreateChatCompletionResponse, any> =
      await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            // content: `Create small blog post with html tags based on this title: ${title}`,
            content: `Create a three line blog post with html tags based on this title: ${title}`,
          },
          {
            role: 'system',
            content: `${
              role || 'I am a helpful assistant'
            }. Write with html tags.`,
          },
        ],
      });

    return response.status(200).json({
      content: aiResponse.data.choices[0].message?.content,
    });
  } catch (error) {
    console.error('request error', error);
    return response.status(500).json({ error: 'Error updating post' });
  }
}
