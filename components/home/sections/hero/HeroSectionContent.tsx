import { Code, Flex, Heading, Text } from "@radix-ui/themes";

export const HeroSectionContent = () => {
  return (
    <Flex direction="column" gap="5">
      <Heading size="9" color="lime" weight="bold">
        Hello World!
      </Heading>

      <Flex direction="column" gap="4">
        <Text size="3">
          It is me,{" "}
          <Text as="span" color="lime" weight="bold">
            Ahmad
          </Text>{" "}
          commonly known as{" "}
          <Code variant="soft" color="lime">
            `bhatti`
          </Code>{" "}
          in my friends circle, from{" "}
          <Text as="span" color="lime" weight="bold">
            Hafizabad
          </Text>{" "}
          an area of rich green Basmati rice fields. Studied in public(govt.)
          school and college. Played a lot of cricket, represented the district
          and region while captaining the team. At this point you are probably
          wondering that it is a professional portfolio of an engineer and what
          do we have to do with all the these irrelevant details. I do not want
          to be philosophical here and neither do I want to prove this, but{" "}
          <Text as="span" color="lime" weight="bold">
            background story matters
          </Text>
          . So, let me continue. I loved{" "}
          <Text as="span" color="lime" weight="bold">
            maths
          </Text>{" "}
          but sadly I still can not answer &quot;what is 245 times
          elephant?&quot;. I think there is some misunderstanding in
          understanding mathematics. The last thing I am, a human calculator.
          What I can answer is{" "}
          <Text as="span" color="lime" weight="bold">
            &quot;why the area under a curve can be obtained using
            integral?&quot;
          </Text>{" "}
          . You get the gist.
        </Text>

        <Text size="3">
          While playing an inter-district tournament I did not attempt my exams
          which were necessary for the admission in any university in Pakistan.
          So, I attempted the supplementary exams for all the failed subjects
          and got a remarkable 60% marks. There was only one university in
          Pakistan that was giving admission on such a low score, namely UCP
          where I went for my Bachelors. There are a of stories that I want to
          tell, but let me just fast forward. I graduated with a{" "}
          <Text as="span" color="lime" weight="bold">
            silver medal
          </Text>{" "}
          because computer science to me is the first cousin of maths. I thinks
          this a right time to replace the word maths with{" "}
          <Text as="span" color="lime" weight="bold">
            problem solving and curiosity
          </Text>
          . So, it happens to be that I love problem solving and being curious.
          To add some sugar, I have solved nearly{" "}
          <Text as="span" color="lime" weight="bold">
            200 leet code problems
          </Text>
          .
        </Text>

        <Text size="3">
          In my first job I got promotions, earlier than expected and got
          exceeds in all of my review cycles. And, now at this point in 2025
          when I am writing this, I know why that happened. I have, what a good
          engineer should have which is:
        </Text>

        <Flex asChild direction="column" gap="3" pl="5">
          <ul style={{ listStyleType: "disc" }}>
            <Text as="span">
              <li>
                <Text as="span" color="lime" weight="bold">
                  Street smartness
                </Text>{" "}
                (which I learned from public education sectors)
              </li>
            </Text>
            <Text as="span">
              <li>
                <Text as="span" color="lime" weight="bold">
                  Humbleness
                </Text>{" "}
                (which I got from my beautiful land)
              </li>
            </Text>
            <Text as="span">
              <li>
                <Text as="span" color="lime" weight="bold">
                  Problem Solving and Curiosity
                </Text>{" "}
                (which I think I got from the love of mathematics)
              </li>
            </Text>
            <Text as="span">
              <li>
                <Text as="span" color="lime" weight="bold">
                  People management
                </Text>{" "}
                (which I got by captaining the district team for more than 2
                years at the age of 15-17)
              </li>
            </Text>
          </ul>
        </Flex>

        <Text size="3">
          I like the way Mr. Jobs think about a product i.e. see and observe
          what a user wants and then back track from the point to the code
          itself to reflect each aspect of user needs and semantics.
        </Text>
      </Flex>
    </Flex>
  );
};
