import { Fragment } from "react";
import Head from "next/head";
import { getDatabase, getPage, getBlocks } from "../lib/notion";

import { databaseId } from "./posts.js";
import Footer from "../components/footer";
import styles from "./post.module.css";
import Image from "next/image";
import {
  Spacer,
  Wrap,
  Box,
  Flex,
  Breadcrumb,
  Heading,
  BreadcrumbLink,
  BreadcrumbItem,
  Button,
  SimpleGrid,
  Link,} from "@chakra-ui/react";
  import Header from "../components/header";



export const Text = ({ text }) => {
  if (!text) {
    return null;
  }
  
  return text.map((value) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;
    return (
        
      <span
      key={value.toString}
        className={[
          bold ? styles.bold : "",
          code ? styles.code : "",
          italic ? styles.italic : "",
          strikethrough ? styles.strikethrough : "",
          underline ? styles.underline : "",
        ].join(" ")}
        style={color !== "default" ? { color } : {}}
      >
        {text.link ? <Link isExternal _hover={{

          textDecoration: "none",
          color: "brand.900",
        }} color={"#fff"} fontWeight={"500"} href={text.link.url}>{text.content}</Link> : text.content}
      </span>
    );
  });
};

const renderNestedList = (block) => {
  const { type } = block;
  const value = block[type];
  if (!value) return null;

  const isNumberedList = value.children[0].type === "numbered_list_item";

  if (isNumberedList) {
    return <ol>{value.children.map((block) => renderBlock(block))}</ol>;
  }
  return <ul>{value.children.map((block) => renderBlock(block))}</ul>;
};

const renderBlock = (block) => {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case "paragraph":
      return (
        <Box color="whiteAlpha.700" fontSize="sm" mt="10px" >
          <Text text={value.rich_text} />
        </Box>
      );
    case "heading_1":
      return (
        <Heading color="whiteAlpha.800"  fontWeight="medium">
          <Text text={value.rich_text} />
        </Heading>
      );
    case "heading_2":
      return (
        <Heading  color="whiteAlpha.800"  fontWeight="medium"my="13px" fontSize={"xl"}>
          <Text text={value.rich_text} />
          </Heading>
      );
    case "heading_3":
      return (
        <Heading color="whiteAlpha.800"  fontWeight="medium"my="10px" fontSize={"lg"}>
          <Text text={value.rich_text} />
          </Heading>
      );
    case "bulleted_list_item":
    case "numbered_list_item":
      return (
        <li className="brand900">
          <Text className="customList" text={value.rich_text} />
          {!!value.children && renderNestedList(block)}
        </li>
      );
    case "to_do":
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} />{" "}
            <Text text={value.rich_text} />
          </label>
        </div>
      );
    case "toggle":
      return (
        <Box py="10px" color="brand.900">
        <details>
          <summary>
            <Text text={value.rich_text} />
          </summary>
          {value.children?.map((block) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
        </details>
        </Box>
      );
    
    case "image":
      const src =
        value.type === "external" ? value.external.url : value.file.url;
      const caption = value.caption ? value.caption[0]?.plain_text : "";
      return (
        <figure>
          <img src={src} alt={caption} />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      );
    case "divider":
      return <hr key={id} />;
    case "quote":
      return <blockquote key={id}>{value.rich_text[0].plain_text}</blockquote>;
    case "code":
      return (
        <pre className="code-block">
          <code className={styles.code_block} key={id}>
            {value.rich_text[0].plain_text}
          </code>
        </pre>
      );
      case "link_to_page": 
      return (
        <Box color={"brand.800 !important"} mt="50px">
        <Text  text={value.rich_text} />
        </Box>
      )
    case "file":
      const src_file =
        value.type === "external" ? value.external.url : value.file.url;
      const splitSourceArray = src_file.split("/");
      const lastElementInArray = splitSourceArray[splitSourceArray.length - 1];
      const caption_file = value.caption ? value.caption[0]?.plain_text : "";
      return (
        <figure>
          <div className={styles.file}>
            📎{" "}
            <Link href={src_file} passHref>
              {lastElementInArray.split("?")[0]}
            </Link>
          </div>
          {caption_file && <figcaption>{caption_file}</figcaption>}
        </figure>
      );
         
    case "bookmark":
      const href = value.url;
      const caption_bookmark = value.caption ? value.caption[0]?.plain_text : "";
     
      
      return (      
        <a href={href} target="_brank" className={styles.bookmark}>
          {href}
          {caption_bookmark && <figcaption>{caption_bookmark}</figcaption>}
        
        </a>  
      );
    default:
      return `❌ Unsupported block (${
        type === "unsupported" ? "unsupported by Notion API" : type
      })`;
  }
};

export default function Post({ page, blocks }) {
  if (!page || !blocks) {
    return <div />;
  }
  const date = new Date(page.last_edited_time).toLocaleString(
    "en-US",
    {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }
  );
  return (
    <div>
      <Head>
        <title>{page.properties.Name.title[0].plain_text}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        direction={"column"}
        mt="10rem !important"
        margin={"auto !important"}
        maxW={"400px !important"}
        mx="1rem !important"
      >
        <Header />
        <Flex
          direction="column"
          pb="10px"
          borderColor={"whiteAlpha.100 !important"}
          borderBottom={"1px"}
        >
          <Flex  pt="1rem"alignItems="center">
          <Heading
           fontWeight={400}
            color="whiteAlpha.500"
            fontSize="sm"
           
            
          >
            /posts</Heading>
            <Spacer/>
             
          <Heading fontWeight={400} color="whiteAlpha.500" fontSize="sm">
           Posted on {date}
          </Heading>
          </Flex>
          <Heading mt="6px" fontWeight="500" fontSize="xl" color="whiteAlpha.800"> <Text text={page.properties.Name.title} /></Heading>
        
        </Flex>
    <div >
     
      <article>
       
        <section>
          {blocks.map((block) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
        
       
        </section>
      </article>
      </div>
      <Button textDecor={"none !important"} as="a" href="/" size="sm" colorScheme="blue" variant="outline" 
      _hover={{
        background: "blue.900",
        color: "blue.500"
      }}>
        Return Home
      </Button>
      <Footer/>
      </Flex>
    </div>
    
  );
}

export const getStaticPaths = async () => {
  const database = await getDatabase(databaseId);
  return {
    paths: database.map((page) => ({ params: { id: page.id } })),
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const page = await getPage(id);
  const blocks = await getBlocks(id);

  // Retrieve block children for nested blocks (one level deep), for example toggle blocks
  // https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
  const childBlocks = await Promise.all(
    blocks
      .filter((block) => block.has_children)
      .map(async (block) => {
        return {
          id: block.id,
          children: await getBlocks(block.id),
        };
      })
  );
  const blocksWithChildren = blocks.map((block) => {
    // Add child blocks if the block should contain children but none exists
    if (block.has_children && !block[block.type].children) {
      block[block.type]["children"] = childBlocks.find(
        (x) => x.id === block.id
      )?.children;
    }
    return block;
  });

  return {
    props: {
      page,
      blocks: blocksWithChildren,
    },
    revalidate: 1,
  };
};