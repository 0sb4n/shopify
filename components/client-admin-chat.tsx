'use client'

import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send } from 'lucide-react'

interface Message {
  id: number
  sender: 'client' | 'admin'
  content: string
  timestamp: string
}

export function ClientAdminChat() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: 'admin', content: 'Hello! How can I assist you today?', timestamp: '10:00 AM' },
    { id: 2, sender: 'client', content: 'Hi, I have a question about my recent order.', timestamp: '10:05 AM' },
    { id: 3, sender: 'admin', content: 'Of course! I\'d be happy to help. Could you please provide your order number?', timestamp: '10:07 AM' },
  ])

  const [newMessage, setNewMessage] = useState('')

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const message: Message = {
        id: messages.length + 1,
        sender: 'client',
        content: newMessage.trim(),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
      setMessages([...messages, message])
      setNewMessage('')
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Chat with Admin</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start mb-4 ${
                message.sender === 'client' ? 'justify-end' : 'justify-start'
              }`}
            >
              {message.sender === 'admin' && (
                <Avatar className="mr-2">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Admin" />
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
              )}
              <div
                className={`rounded-lg p-3 max-w-[80%] ${
                  message.sender === 'client'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted'
                }`}
              >
                <p className="text-sm">{message.content}</p>
                <p className="text-xs mt-1 opacity-70">{message.timestamp}</p>
              </div>
              {message.sender === 'client' && (
                <Avatar className="ml-2">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Client" />
                  <AvatarFallback>CL</AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSendMessage()
          }}
          className="flex w-full items-center space-x-2"
        >
          <Input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-grow"
          />
          <Button type="submit" size="icon">
            <Send className="h-4 w-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}