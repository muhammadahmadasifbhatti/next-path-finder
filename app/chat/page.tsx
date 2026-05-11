"use client";

import { Button, Card, Flex, Heading, ScrollArea, Text, TextField } from "@radix-ui/themes";
import { FormEvent, useMemo, useState } from "react";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const MAX_PROMPTS = 3;

const ChatPage = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const userPromptCount = useMemo(
    () => messages.filter((message) => message.role === "user").length,
    [messages],
  );

  const isLocked = userPromptCount >= MAX_PROMPTS;

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const trimmedInput = input.trim();
    if (!trimmedInput || isLoading || isLocked) {
      return;
    }

    const nextMessages: ChatMessage[] = [...messages, { role: "user", content: trimmedInput }];

    setMessages(nextMessages);
    setInput("");
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      const data = (await response.json()) as { answer?: string; error?: string };
      if (!response.ok || !data.answer) {
        throw new Error(data.error ?? "Failed to get response.");
      }

      setMessages((previous) => [...previous, { role: "assistant", content: data.answer }]);
    } catch (submissionError) {
      setError(
        submissionError instanceof Error ? submissionError.message : "Unable to send your prompt.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const restartChat = () => {
    setMessages([]);
    setInput("");
    setError("");
    setIsLoading(false);
  };

  return (
    <Flex direction="column" gap="4" mx="auto" style={{ maxWidth: 900, minHeight: "80vh" }}>
      <Heading size="7">Chat with Ahmad&apos;s AI</Heading>
      <Text color="gray">You can send up to 3 prompts per session.</Text>

      <Card style={{ flex: 1, minHeight: 450 }}>
        <ScrollArea type="always" scrollbars="vertical" style={{ height: 420, padding: 16 }}>
          <Flex direction="column" gap="3">
            {messages.length === 0 ? (
              <Text color="gray">Ask anything about Muhammad Ahmad to get started.</Text>
            ) : (
              messages.map((message, index) => (
                <Card
                  key={`${message.role}-${index}`}
                  style={{
                    alignSelf: message.role === "user" ? "flex-end" : "flex-start",
                    maxWidth: "80%",
                    backgroundColor:
                      message.role === "user" ? "var(--lime-4)" : "var(--gray-3)",
                  }}
                >
                  <Text>{message.content}</Text>
                </Card>
              ))
            )}
            {isLoading ? <Text color="gray">Thinking...</Text> : null}
          </Flex>
        </ScrollArea>
      </Card>

      {error ? <Text color="red">{error}</Text> : null}

      <form onSubmit={onSubmit}>
        <Flex gap="3">
          <TextField.Root
            placeholder={isLocked ? "Session limit reached" : "Type your question and press Enter"}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            disabled={isLocked || isLoading}
            style={{ flex: 1 }}
          />
          <Button type="submit" disabled={isLocked || isLoading || !input.trim()}>
            Send
          </Button>
        </Flex>
      </form>

      {isLocked ? (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 30,
          }}
        >
          <Card style={{ maxWidth: 460, width: "90%" }}>
            <Flex direction="column" gap="3">
              <Heading size="5">Prompt limit reached</Heading>
              <Text>
                You have used 3 prompts in this session. Please restart the chat to continue.
              </Text>
              <Button onClick={restartChat}>Restart Chat</Button>
            </Flex>
          </Card>
        </div>
      ) : null}
    </Flex>
  );
};

export default ChatPage;
