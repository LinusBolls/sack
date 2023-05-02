import OpenAI from 'openai';

async function askChatGpt(prompt: string) {
  try {
    const engine = 'text-davinci-002';
    const temperature = 0.5;
    const maxTokens = 50;

    const apiKey = 'YOUR_API_KEY';

    const openai = new OpenAI(apiKey);

    const options = {
      engine: engine,
      prompt: prompt,
      temperature: temperature,
      maxTokens: maxTokens
    }
    const response = openai.complete(options)

    const text = response.choices[0].text;

    return [null, text] as const
  } catch (err) {

    return [err, null] as const
  }
}
askChatGpt("").then(console.log)