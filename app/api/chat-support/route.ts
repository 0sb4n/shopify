import { openai } from '@ai-sdk/openai'
import { streamText } from 'ai'

export const maxDuration = 300 // 5 minutes

export async function POST(req: Request) {
  const { messages } = await req.json()

  // Here you can implement logic to handle different chat IDs
  // For example, you could use a database to store and retrieve chat history

  const result = streamText({
    model: openai('gpt-4-turbo'),
    messages: [
      { role: 'system', content: 'You are a helpful customer support agent for an electrical appliances repair service. Provide accurate and friendly assistance for various electrical appliance issues.' },
      ...messages
    ],
  })

  return result.toDataStreamResponse()
}

