import { Box, ChakraProvider, Container, Divider, Flex, Heading, IconButton, Input, Stack, Text, useColorMode, useColorModeValue, VStack, Wrap, WrapItem, Button, useDisclosure, FormControl, FormLabel, InputGroup, InputRightElement, Image, SimpleGrid, useToast } from "@chakra-ui/react";
import { FaMoon, FaSun, FaSearch, FaHeart, FaRedo } from "react-icons/fa";
import { useState, useEffect, useMemo } from "react";

const Index = () => {
  // State management
  const { colorMode, toggleColorMode } = useColorMode();
  const [posts, setPosts] = useState([]);
  const [likes, setLikes] = useState({});
  const [searchText, setSearchText] = useState("");
  const toast = useToast();

  // Fetch posts from HackerNews API
  const fetchPosts = async () => {
    try {
      const res = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json");
      const storyIds = await res.json();
      const stories = await Promise.all(
        storyIds.slice(0, 10).map(async (id) => {
          const storyRes = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
          return storyRes.json();
        }),
      );
      setPosts(stories);
    } catch (error) {
      toast({
        title: "Error fetching posts",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  // Fetch image for PostItem
  const fetchImage = async (title) => {
    // Replace this with actual image fetching logic using the webservice
    // For demonstration, we are using a placeholder image
    return `https://placehold.co/600x400[0]}')`;
  };

  // Handle like toggle
  const toggleLike = (id) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [id]: !prevLikes[id],
    }));
  };

  // Filtered posts based on search
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => post.title.toLowerCase().includes(searchText.toLowerCase()));
  }, [posts, searchText]);

  // Fetch posts on component mount
  useEffect(() => {
    fetchPosts();
  }, []);

  // Dynamically get the current year
  const currentYear = new Date().getFullYear();

  return (
    <ChakraProvider>
      <Box bg={useColorModeValue("gray.100", "gray.900")} minH="100vh">
        {/* Header */}
        <Box bg={useColorModeValue("gray.800", "gray.700")}>
          <Container maxW="940px">
            <Flex justify="space-between" align="center" py={4}>
              <Heading size="md">SheldonNews</Heading>
              <Stack direction="row" spacing={3}>
                <IconButton icon={colorMode === "light" ? <FaMoon color="white" /> : <FaSun color="white" />} onClick={toggleColorMode} variant="ghost" aria-label="Toggle dark mode" />
                <IconButton icon={<FaRedo color="white" />} onClick={fetchPosts} variant="ghost" aria-label="Refresh posts" />
              </Stack>
            </Flex>
          </Container>
          <Divider borderWidth={2} style={{ background: "linear-gradient(to right, #e66465, #9198e5, #42e695, #30d5c8, #f7ea00, #f76b8a)" }} />
          <Text textAlign="center" py={2} bg={useColorModeValue("gray.800", "gray.700")}>
            Discover the future of technology today and be part of the conversation that shapes our tomorrow.
          </Text>
        </Box>

        {/* Teaser */}
        <Box textAlign="center" py={8}>
          <Text fontSize="2xl" fontWeight="bold">
            Stay ahead of the curve with the latest tech buzz!⚡
          </Text>
        </Box>

        {/* SearchField */}
        <Container maxW="940px">
          <FormControl>
            <InputGroup size="lg" maxW="60%" mx="auto">
              <Input placeholder="Search for posts..." value={searchText} onChange={(e) => setSearchText(e.target.value)} bg={useColorModeValue("gray.200", "gray.700")} />
              <InputRightElement>
                <IconButton icon={<FaSearch />} variant="ghost" aria-label="Search posts" />
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </Container>

        {/* PostList */}
        <Container maxW="940px" py={8}>
          <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={10}>
            {filteredPosts.map((post) => (
              <Box key={post.id} bg={useColorModeValue("white", "gray.800")} p={5} shadow="md" borderRadius="md">
                <Image src={fetchImage(post.title)} alt="Post image" />
                <Heading size="md" mt={2}>
                  {post.title}
                </Heading>
                <Flex justify="space-between" align="center" mt={2}>
                  <Text fontSize="sm">{new Date(post.time * 1000).toLocaleDateString()}</Text>
                  <IconButton icon={<FaHeart />} variant="ghost" color={likes[post.id] ? "red.400" : undefined} onClick={() => toggleLike(post.id)} aria-label="Like post" />
                </Flex>
              </Box>
            ))}
          </SimpleGrid>
        </Container>

        {/* EmailOptin */}
        <Container maxW="940px" py={8}>
          <VStack bg="#005ce6" p={5} borderRadius="md" spacing={4}>
            <Heading size="md" color="white">
              Join our Newsletter 🌟
            </Heading>
            <Text color="white">Get the latest updates right in your inbox.</Text>
            <InputGroup size="md">
              <Input placeholder="Enter your email" bg="white" border="none" type="email" />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" bg="white" color="#005ce6">
                  Sign Up
                </Button>
              </InputRightElement>
            </InputGroup>
          </VStack>
        </Container>

        {/* Footer */}
        <Box bg={useColorModeValue("gray.800", "gray.700")} color="white" mt={10}>
          <Container maxW="940px" py={4}>
            <VStack spacing={1}>
              <Text>Created by 🤖 and proud of it!</Text>
              <Text>© {currentYear} Spectactulr News. All rights reserved.</Text>
            </VStack>
          </Container>
        </Box>

        {/* CookieConsent */}
        <Flex position="fixed" bottom="0" left="0" right="0" p={4} justifyContent="center" bg={useColorModeValue("gray.800", "gray.700")} color="white">
          <Text fontSize="sm">We use cookies to ensure you get the best experience on our website.</Text>
          <Button ml={4} bg="#005ce6" color="white" _hover={{ bg: "blue.700" }} onClick={() => toast({ title: "Cookies accepted", status: "success", duration: 3000, isClosable: true })}>
            Accept
          </Button>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
