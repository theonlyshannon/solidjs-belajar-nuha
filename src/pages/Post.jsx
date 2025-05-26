import { createResource, For } from "solid-js";
import {
  Box,
  Heading,
  Text,
  VStack,
  Spinner,
  Container,
} from "@hope-ui/solid";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

export default function Post() {
  const [posts] = createResource(fetchPosts);

  return (
    <Container maxW="xl" py="$6">
      <Heading size="2xl" mb="$4">Daftar Postingan</Heading>

      {posts.loading && <Spinner size="lg" />}
      
      <VStack spacing="$4" align="stretch">
        <For each={posts()}>
          {(post) => (
            <Box p="$4" border="1px solid $neutral6" rounded="$md" shadow="$md">
              <Heading size="md">{post.title}</Heading>
              <Text>{post.body}</Text>
            </Box>
          )}
        </For>
      </VStack>
    </Container>
  );
}
