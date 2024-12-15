'use client'

import { useState } from 'react'
import { useChat } from 'ai/react'
import { Send, Paperclip, MoreVertical, ArrowLeft, Zap } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdminChatSupport() {
  const [activeChat, setActiveChat] = useState('chat1')
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat-support',
    id: activeChat,
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
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-4">
        <Zap className="h-6 w-6 text-yellow-500 mr-2" />
        <h1 className="text-2xl font-bold">Electrical Repair Admin Support</h1>
      </div>
      <Tabs value={activeChat} onValueChange={setActiveChat}>
        <TabsList className="grid w-full grid-cols-3 mb-4">
          <TabsTrigger value="chat1">John Doe</TabsTrigger>
          <TabsTrigger value="chat2">Jane Smith</TabsTrigger>
          <TabsTrigger value="chat3">Bob Johnson</TabsTrigger>
        </TabsList>
        <TabsContent value={activeChat}>
          <Card className="w-full h-[600px] flex flex-col shadow-xl">
            <div className="bg-blue-600 text-white p-4 flex items-center rounded-t-lg">
              <Button variant="ghost" size="icon" className="mr-2 text-white hover:text-blue-200">
                <ArrowLeft className="h-6 w-6" />
              </Button>
              <Avatar className="h-10 w-10 mr-3">
                <AvatarImage src="/client-avatar.png" alt="Client" />
                <AvatarFallback>CL</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="text-lg font-semibold">Client</h2>
                <p className="text-sm opacity-90">Appliance: Refrigerator</p>
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
                      message.role === 'assistant' ? 'justify-end' : 'justify-start'
                    } mb-4`}
                  >
                    <div
                      className={`max-w-[80%] py-2 px-3 rounded-lg ${
                        message.role === 'assistant'
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200 text-gray-800'
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-end mb-4">
                    <div className="max-w-[80%] py-2 px-3 rounded-lg bg-blue-500 text-white">
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
                  placeholder="Type your response..."
                  className="flex-grow"
                />
                <Button type="submit" size="icon" disabled={isTyping || !input.trim()}>
                  <Send className="h-5 w-5" />
                </Button>
              </form>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

