"use client";

import React, { Suspense, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Box, Button, Flex, Heading, Text } from "@radix-ui/themes";

const CORRECT_PASSWORD = "07031999";

const images = [
  {
    src: "/images/birthday/IMG_6536.jpg",
    caption: "You are very good at TT and in fact I lost a game to you ✨",
  },
  {
    src: "/images/birthday/IMG_6538.jpg",
    caption: "Good day, that's why I have 2 pictures from this day💫",
  },
  {
    src: "/images/birthday/IMG_6550.jpg",
    caption: "I guess, this is our best picture together 🌸",
  },
  {
    src: "/images/birthday/IMG_6558.jpg",
    caption:
      "If there was a competition for cutest smile ever, you would win for sure 💕",
  },
  {
    src: "/images/birthday/IMG_6864.jpg",
    caption: "I like this sweater 🧥",
  },
  {
    src: "/images/birthday/IMG_6972.jpg",
    caption: "Look at that smile, I think I make you happy 🎂",
  },
  {
    src: "/images/birthday/IMG_6979.jpg",
    caption: "You are in your fav bakery, and I am with my fav person 🌟",
  },
  { src: "/images/birthday/IMG_6980.jpg", caption: "We look cute together 🥂" },
  {
    src: "/images/birthday/IMG_6981.jpg",
    caption: "Soon to be, Mr. and Mrs. Ahmad 🎉",
  },
  {
    src: "/images/birthday/IMG_6982.jpg",
    caption: "My heart melts when you tie your hair like this 🦋",
  },
  {
    src: "/images/birthday/IMG_6983.jpg",
    caption:
      "I love how you can sit anywhere with me. Be it roadside or in the car. 🌺",
  },
  {
    src: "/images/birthday/IMG_6984.jpg",
    caption: "Allah nazar se bchaye. Good day, it was. ✨",
  },
  {
    src: "/images/birthday/IMG_6985.jpg",
    caption: "Ye wali ankhen bohat pasand thin is liye use ki  🎀",
  },
];

const floatingEmojis = [
  "🎈",
  "🎂",
  "🎁",
  "🎉",
  "💖",
  "🌟",
  "✨",
  "🦋",
  "🌸",
  "💫",
  "🎀",
  "🥳",
];

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
      {/* Floating particles */}
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

function FloatingEmoji({
  emoji,
  delay,
  duration,
  left,
}: {
  emoji: string;
  delay: number;
  duration: number;
  left: number;
}) {
  return (
    <Text
      size="5"
      className="animate-floatUp"
      style={{
        position: "fixed",
        left: `${left}%`,
        pointerEvents: "none",
        zIndex: 10,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    >
      {emoji}
    </Text>
  );
}

function BirthdayContent() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Box
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #0a0a0a, #1a0a2e, #0a0a0a)",
        overflow: "hidden",
      }}
    >
      {/* Floating emojis */}
      {floatingEmojis.map((emoji, i) => (
        <FloatingEmoji
          key={i}
          emoji={emoji}
          delay={i * 1.5}
          duration={8 + Math.random() * 6}
          left={5 + ((i * 8) % 90)}
        />
      ))}

      {/* Hero Section */}
      <Flex
        direction="column"
        align="center"
        justify="center"
        px="4"
        style={{
          position: "relative",
          minHeight: "100vh",
          transition: "all 1s",
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(40px)",
        }}
      >
        {/* Background glow orbs */}
        <Box
          style={{
            position: "absolute",
            inset: 0,
            overflow: "hidden",
            pointerEvents: "none",
          }}
        >
          <Box
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "600px",
              height: "600px",
              background: "rgba(236, 72, 153, 0.1)",
              borderRadius: "50%",
              filter: "blur(120px)",
            }}
          />
          <Box
            style={{
              position: "absolute",
              top: "33%",
              left: "33%",
              width: "400px",
              height: "400px",
              background: "rgba(168, 85, 247, 0.1)",
              borderRadius: "50%",
              filter: "blur(100px)",
            }}
          />
        </Box>

        <Flex
          direction="column"
          align="center"
          style={{ position: "relative", zIndex: 10, textAlign: "center" }}
        >
          <Text
            size="2"
            className="animate-fadeIn"
            style={{
              color: "rgba(249, 168, 212, 0.6)",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            Happy Birthday
          </Text>

          <Heading
            size="9"
            weight="bold"
            style={{
              background:
                "linear-gradient(to right, #f9a8d4, #c4b5fd, #f9a8d4)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundSize: "200% auto",
              animation: "shimmer 4s linear infinite",
              lineHeight: 1.1,
              paddingBottom: "8px",
              fontSize: "clamp(3.5rem, 10vw, 8rem)",
            }}
          >
            Aiman
          </Heading>

          <Flex align="center" gap="4" justify="center" mt="6">
            <Box
              style={{
                height: "1px",
                width: "48px",
                background:
                  "linear-gradient(to right, transparent, rgba(236, 72, 153, 0.5))",
              }}
            />
            <Text size="5" style={{ color: "rgba(249, 168, 212, 0.4)" }}>
              🎂
            </Text>
            <Box
              style={{
                height: "1px",
                width: "48px",
                background:
                  "linear-gradient(to left, transparent, rgba(236, 72, 153, 0.5))",
              }}
            />
          </Flex>

          <Text
            size="4"
            weight="light"
            style={{
              color: "rgba(255, 255, 255, 0.4)",
              maxWidth: "28rem",
              lineHeight: 1.7,
              marginTop: "24px",
            }}
          >
            You are the bestest thing ever happened to me. You inpsire me in
            many ways. You are my best friend, my parru and my sonaa bacha.
          </Text>
        </Flex>

        <Box
          className="animate-bounce"
          style={{ position: "absolute", bottom: "40px" }}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="rgba(255,255,255,0.2)"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </Box>
      </Flex>

      {/* Photo Gallery */}
      <Box px={{ initial: "4", sm: "6", md: "8" }} pb="9">
        <Flex direction="column" align="center" mb="7">
          <Text
            size="1"
            style={{
              color: "rgba(249, 168, 212, 0.4)",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
            }}
          >
            A collection of
          </Text>
          <Heading
            size="7"
            weight="bold"
            mt="2"
            style={{ color: "rgba(255, 255, 255, 0.8)" }}
          >
            Beautiful Moments
          </Heading>
        </Flex>

        {/* Masonry grid */}
        <Box
          style={{
            columns: "1",
            gap: "16px",
            maxWidth: "72rem",
            margin: "0 auto",
          }}
          className="sm:!columns-2 lg:!columns-3 sm:!gap-6"
        >
          {images.map((img, index) => (
            <Box
              key={index}
              className="group"
              style={{
                position: "relative",
                breakInside: "avoid",
                marginBottom: "16px",
                animationDelay: `${index * 0.15}s`,
              }}
            >
              <Box
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "24px",
                }}
              >
                {/* Hover gradient overlay */}
                <Box
                  className="group-hover:!opacity-100"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.7), transparent, transparent)",
                    zIndex: 10,
                    opacity: 0,
                    transition: "opacity 0.5s",
                  }}
                />

                <Image
                  src={img.src}
                  alt={img.caption}
                  width={600}
                  height={800}
                  className="group-hover:scale-105"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    transition: "transform 0.7s",
                  }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Caption on hover */}
                <Flex
                  className="group-hover:!opacity-100 group-hover:!translate-y-0"
                  p="5"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: 20,
                    opacity: 0,
                    transform: "translateY(16px)",
                    transition: "all 0.5s",
                  }}
                >
                  <Text
                    size="2"
                    weight="light"
                    style={{
                      color: "white",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {img.caption}
                  </Text>
                </Flex>

                {/* Always-visible cute caption at the bottom */}
                {/* <Flex
                  align="center"
                  px="3"
                  py="1"
                  style={{
                    position: "absolute",
                    zIndex: 20,
                    bottom: "12px",
                    [index % 2 === 0 ? "left" : "right"]: "12px",
                    borderRadius: "8px",
                    background: "rgba(0, 0, 0, 0.45)",
                  }}
                >
                  <Text
                    size="1"
                    style={{
                      color: "rgba(255, 255, 255, 0.85)",
                      whiteSpace: "nowrap",
                      fontWeight: 400,
                    }}
                  >
                    {img.caption}
                  </Text>
                </Flex> */}
              </Box>
            </Box>
          ))}
        </Box>

        {/* Closing message */}
        <Flex
          direction="column"
          align="center"
          mt="9"
          mb="7"
          style={{ maxWidth: "32rem", margin: "96px auto 64px" }}
        >
          <Text size="8" mb="5">
            💖
          </Text>
          <Heading
            size="6"
            weight="bold"
            mb="4"
            style={{
              background: "linear-gradient(to right, #f9a8d4, #c4b5fd)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            May you live many more years!
          </Heading>
          <Text
            size="3"
            weight="light"
            align="center"
            style={{
              color: "rgba(255, 255, 255, 0.4)",
              lineHeight: 1.7,
            }}
          >
            May your days be painted in vibrant colors, your heart overflow with
            joy, and every dream you chase become your reality. You deserve all
            the beautiful things life has to offer. (Ye AI ne likha hai :P)
          </Text>
          <Flex align="center" gap="2" justify="center" mt="6">
            <Text size="5">🎈</Text>
            <Text size="5">🎂</Text>
            <Text size="5">🎁</Text>
            <Text size="5">🎉</Text>
            <Text size="5">💫</Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

function BirthdayPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [unlocked, setUnlocked] = useState(
    searchParams.get("unlocked") === "true"
  );

  const handleUnlock = () => {
    setUnlocked(true);
    router.replace("?unlocked=true");
  };

  if (!unlocked) {
    return <PasswordScreen onUnlock={handleUnlock} />;
  }

  return <BirthdayContent />;
}

export default function HappyBirthdayAiman() {
  return (
    <Suspense>
      <BirthdayPage />
    </Suspense>
  );
}
