import {
  Image,
  Stack,
  Link,
  Heading,
  Flex,
  Text,
  Spacer,
  Tooltip,
  Wrap,
  Box,
} from "@chakra-ui/react";
import ExperienceCard from "../components/experience-card";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import Footer from "../components/footer";
import Header from "../components/header";

export default function ProjectPage() {
  return (
    <>
      <Flex
        mt="5rem !important"
        margin={"auto"}
        maxW={"680px"}
        direction="column"
        px="2rem"
      >
        <Flex paddingBottom={"1rem"} borderBottom={"1px"} direction="column">
          <Header />
          <Link href="./" maxW={"117px"} mx="1px">
            <Text>Return to Home</Text>
          </Link>
        </Flex>
      </Flex>
      <Heading
        pt="13px"
        px="2rem"
        margin={"auto"}
        maxW={"680px"}
        fontSize={"2xl"}
      >
        Work Experience
      </Heading>
      <Text
        px="2rem"
        margin={"auto"}
        maxW={"680px"}
        color="grey.200 !important"
        mt="6px"
      >
        Some of the organizations and companies I've worked on.
      </Text>
      <Wrap pt="16px" spacing="16px" px="2rem" margin={"auto"} maxW={"680px"}>
        <ExperienceCard
          dates={"January 2022 - Present"}
          position={"Founder & CEO"}
          company="Tech Optimum"
          descriptions={[
            "Managing a team of ~30 staff",
            "Built the website using NextJs and Chakra",
            "Hosted a virtual hackathon with 300+ members and $40k in prizes",
            "Grew a social media presence of over 500k+ impressions",
            "Spearheaded the development of our courses & internship website",
            "Initiated an effort to create all documents for the 501c3 status ",
          ]}
        />
        <ExperienceCard
          company="Aprim"
          dates="December 2020 - July 2021"
          position={"Co-founder & CTO"}
          descriptions={[
            "Collaborated closely with the CEO to acquire customers and build the hosting platform",
            "Co-founded and built a hosting company with over 50 global clients. ",
            "Provided web hosting, game hosting, bot hosting, and other services",
            "Gathered 50,000+ views.",
          ]}
        />
        <ExperienceCard
          position={"Web Developer"}
          company="School Simplified"
          dates="April 2022 - Present"
          descriptions={[
            "Writing code for the website in NextJs and Chakra",
            "Taking requests by other departments",
          ]}
        />
        <ExperienceCard
          dates="April 2020 - November 2021"
          position="Community Owner"
          company="Ace's Castle"
          descriptions={[
            "Founded Ace's Castle/Echo Circle",
            "Chat-space open to all topics of discussion",
            "Grew a community of 3,300+ members",
            "Managed a team of 20+ people",
            "Went through 200+ moderator applications",
            "Discord server got deleted in November 2021",
          ]}
        />
        <ExperienceCard
          dates="Dec. 2020 - April 2021"
          position={"Co-founder"}
          company="Launchpad Dev."
          descriptions={[
            "Developed websites, Minecraft servers, Discord bots, and more for over 50 clients. ",
            "Handled $400+ in revenue",
            "Used languages like Javascript, Java, and PHP",
          ]}
        />
      </Wrap>
      <Box px="2rem" maxW={"680px"} margin="auto">
        <Footer />
      </Box>
    </>
  );
}