// pages/Layout.jsx
import { A } from "@solidjs/router";
import { Box, HStack, Container } from "@hope-ui/solid";

export default function Layout(props) {
  return (
    <Box>
      <Box bg="$neutral3" p="$4">
        <Container>
          <HStack spacing="$6">
            <A href="/" class="text-white hover:text-gray-300">Home</A>
            <A href="/todo" class="text-white hover:text-gray-300">ToDo</A>
            <A href="/posts" class="text-white hover:text-gray-300">Posts</A>
            <A href="/ag-grid" class="text-white hover:text-gray-300">AgGrid</A>
            <A href="/counter" class="text-white hover:text-gray-300">Counter</A>
            <A href="/am-chart" class="text-white hover:text-gray-300">AmChart</A>
          </HStack>
        </Container>
      </Box>
      <Container p="$4">
        {props.children}
      </Container>
    </Box>
  );
}
