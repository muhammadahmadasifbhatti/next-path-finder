"use client";

import React, { Suspense, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Box, Button, Flex, Heading, Text } from "@radix-ui/themes";

const CORRECT_PASSWORD = "07031999";

function PasswordScreen({ onUnlock }: { onUnlock: () => void }) {
  const [password, setPassword] = useState("");
  const [shake, setShake] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      onUnlock();
    } else {
      setShake(true);
      setError(true);
      setTimeout(() => setShake(false), 600);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <Flex
      align="center"
      justify="center"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        backgroundColor: "black",
        overflow: "hidden",
      }}
    >
      <Box
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <Box
            key={i}
            style={{
              position: "absolute",
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              borderRadius: "50%",
              opacity: 0.2,
              background: `hsl(${Math.random() * 60 + 300}, 80%, 70%)`,
              animation: `floatParticle ${Math.random() * 6 + 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </Box>

      <form onSubmit={handleSubmit}>
        <Flex
          direction="column"
          align="center"
          gap="5"
          className={shake ? "animate-shake" : ""}
        >
          <Flex direction="column" align="center" gap="3" mb="2">
            <Text size="8">🔒</Text>
            <Text
              size="1"
              weight="light"
              style={{
                color: "rgba(255, 255, 255, 0.6)",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
              }}
            >
              This page is private
            </Text>
          </Flex>

          <Box style={{ position: "relative" }} className="group">
            <Box
              style={{
                position: "absolute",
                inset: "-4px",
                background:
                  "linear-gradient(to right, #ec4899, #a855f7, #ec4899)",
                borderRadius: "16px",
                filter: "blur(12px)",
                opacity: 0.4,
                transition: "opacity 0.5s",
              }}
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter the password"
              autoFocus
              style={{
                position: "relative",
                width: "320px",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(24px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "16px",
                color: "white",
                caretColor: "white",
                textAlign: "center",
                fontSize: "18px",
                padding: "20px 24px",
                outline: "none",
                transition: "border-color 0.3s",
              }}
            />
          </Box>

          {error && (
            <Text
              size="2"
              className="animate-fadeIn"
              style={{ color: "rgba(244, 114, 182, 0.8)" }}
            >
              Wrong password, try again
            </Text>
          )}

          <Button
            type="submit"
            variant="outline"
            size="3"
            style={{
              marginTop: "8px",
              padding: "12px 32px",
              background:
                "linear-gradient(to right, rgba(236, 72, 153, 0.2), rgba(168, 85, 247, 0.2))",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "9999px",
              color: "rgba(255, 255, 255, 0.7)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
          >
            Unlock
          </Button>
        </Flex>
      </form>
    </Flex>
  );
}

function PrankContent() {
  const [loaded, setLoaded] = useState(false);
  const [showPunchline, setShowPunchline] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const timer = setTimeout(() => setShowPunchline(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Flex
      align="center"
      justify="center"
      direction="column"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #0a0a0a, #1a0a2e, #0a0a0a)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background glow */}
      <Box
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "500px",
          height: "500px",
          background: "rgba(236, 72, 153, 0.08)",
          borderRadius: "50%",
          filter: "blur(120px)",
          pointerEvents: "none",
        }}
      />

      <Flex
        direction="column"
        align="center"
        gap="6"
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          padding: "0 24px",
          transition: "all 1s",
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(30px)",
        }}
      >
        <Text style={{ fontSize: "80px" }}>🎉</Text>

        <Heading
          size="9"
          weight="bold"
          style={{
            background: "linear-gradient(to right, #f9a8d4, #c4b5fd, #f9a8d4)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundSize: "200% auto",
            animation: "shimmer 4s linear infinite",
            lineHeight: 1.2,
          }}
        >
          Happy Birthday!
        </Heading>

        <Text
          size="5"
          style={{
            color: "rgba(255, 255, 255, 0.5)",
            maxWidth: "28rem",
            lineHeight: 1.7,
          }}
        >
          You actually thought there was going to be something special here...
        </Text>

        {/* Punchline */}
        <Flex
          direction="column"
          align="center"
          gap="4"
          style={{
            marginTop: "24px",
            transition: "all 0.8s",
            opacity: showPunchline ? 1 : 0,
            transform: showPunchline ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
          }}
        >
          <Text
            style={{
              fontSize: "100px",
              lineHeight: 1,
            }}
          >
            😂
          </Text>

          <Heading
            size="8"
            weight="bold"
            style={{
              color: "white",
            }}
          >
            IT WAS A PRANK LOL
          </Heading>

          <Text
            size="4"
            style={{
              color: "rgba(255, 255, 255, 0.35)",
              maxWidth: "24rem",
              lineHeight: 1.7,
            }}
          >
            Got you good didn&apos;t I? Don&apos;t worry, the real surprise is
            somewhere else. Maybe. Or maybe not. 😏
          </Text>

          <Flex gap="3" mt="4">
            <Text size="6">🤡</Text>
            <Text size="6">😜</Text>
            <Text size="6">🫣</Text>
            <Text size="6">💀</Text>
            <Text size="6">😂</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

function HbdaPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [unlocked, setUnlocked] = useState(
    searchParams.get("unlocked") === "true",
  );

  const handleUnlock = () => {
    setUnlocked(true);
    router.replace("?unlocked=true");
  };

  if (!unlocked) {
    return <PasswordScreen onUnlock={handleUnlock} />;
  }

  return <PrankContent />;
}

export default function Hbda() {
  return (
    <Suspense>
      <HbdaPage />
    </Suspense>
  );
}
