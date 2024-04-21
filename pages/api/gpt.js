import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  const body = await req.body;
  console.log(body);
  const completion = await openai.chat.completions.create({
    messages: [{"role": "system", "content": "You are an art teacher."},
    {"role": "user", "content": `I want a single creative and pretty detailed drawing prompt for the following tags: ${body}. In 3 separate messages, output the following: Message 1 is a drawing prompt title with a maximum of 3 words. Message 2 is the drawing prompt text describing it in a short sentence longer than 12 words but shorter than 15. Message 3 is a summary of the prompt and what the user can draw in a maximum of 2 sentences. Make sure that all the tags are included in the prompt. Send back these messages in one line separated by a percentage sign like this %. Don't include quotations on any of the messages.`}],
    model: "gpt-3.5-turbo",
  });

  // console.log(completion);
  console.log(completion.choices);
  res.json(completion.choices[0].message.content);
}

/*
Output this text like it should be displayed on a webpage, so non-conversational. Don't add a title, just output the prompt. No code included. I want a single creative and pretty detailed drawing prompt for the following tags

In 3 separate messages, output the following: Message 1 is a drawing prompt title with a maximum of 3 words. Message 2 is the prompt text describing it in a short sentence. Message 3 is a summary of the prompt and what the user can draw in a maximum of 2 sentences.
*/