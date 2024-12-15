'use client'

import { useState } from 'react'
import { useChat } from 'ai/react'
import { Send, Paperclip, MoreVertical, ArrowLeft, Zap } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function ChatSupport() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat-support',
  })
  const [isTyping, setIsTyping] = useState(false)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (input.trim()) {
      setIsTyping(true)
      handleSubmit(e).finally(() => setIsTyping(false))
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md h-[600px] flex flex-col shadow-xl">
        <div className="bg-blue-600 text-white p-4 flex items-center rounded-t-lg">
          <Button variant="ghost" size="icon" className="mr-2 text-white hover:text-blue-200">
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <Avatar className="h-10 w-10 mr-3">
            <AvatarImage src="/support-avatar.png" alt="Electrical Support" />
            <AvatarFallback>ES</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h2 className="text-lg font-semibold">Electrical Support</h2>
            <p className="text-sm opacity-90">Online | Quick Repairs</p>
          </div>
          <Button variant="ghost" size="icon" className="text-white hover:text-blue-200">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>
        <CardContent className="flex-1 overflow-hidden p-4">
          <ScrollArea className="h-full pr-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                } mb-4`}
              >
                <div
                  className={`max-w-[80%] py-2 px-3 rounded-lg ${
                    message.role === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start mb-4">
                <div className="max-w-[80%] py-2 px-3 rounded-lg bg-gray-200 text-gray-800">
                  Typing...
                </div>
              </div>
            )}
          </ScrollArea>
        </CardContent>
        <CardFooter className="border-t p-2">
          <form onSubmit={onSubmit} className="flex w-full space-x-2">
            <Button type="button" size="icon" variant="ghost">
              <Paperclip className="h-5 w-5" />
            </Button>
            <Input
              value={input}
              onChange={handleInputChange}
              placeholder="Describe your appliance issue..."
              className="flex-grow"
            />
            <Button type="submit" size="icon" disabled={isTyping || !input.trim()}>
              <Send className="h-5 w-5" />
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  )
}

