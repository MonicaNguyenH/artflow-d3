import axios from 'axios';

// Function to send message to OpenAI's API
export const sendMessageToGPT = async (message) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: 'text-davinci-003', // Choose the model you want to use
        prompt: message,
        max_tokens: 150,
        temperature: 0.7,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    // Return the generated response
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error sending message to GPT:', error);
    return 'Sorry, something went wrong.';
  }
};