import { createSignal, createEffect } from "solid-js";
import { Box, Button, Center, Heading, Text, HStack } from "@hope-ui/solid";

function Counter() {
  // 1. State counter
  const [count, setCount] = createSignal(0);

  // 2. Logging setiap kali count berubah
  createEffect(() => {
    console.log("Counter sekarang:", count());
  });

  // 3. UI dengan Hope UI
  return (
    <Center minH="60vh">
      <Box
        p="$8"
        borderRadius="$lg"
        boxShadow="$lg"
        bg="$neutral3"
        textAlign="center"
        minW="320px"
      >
        <Heading mb="$4" color="$primary9">
          Counter Reaktif SolidJS
        </Heading>
        <Text fontSize="$2xl" mb="$6">
          Nilai Counter: <b>{count()}</b>
        </Text>
        <HStack spacing="$4" justify="center">
          <Button
            colorScheme="danger"
            variant="solid"
            size="lg"
            onClick={() => setCount(count() - 1)}
          >
            -
          </Button>
          <Button
            colorScheme="success"
            variant="solid"
            size="lg"
            onClick={() => setCount(count() + 1)}
          >
            +
          </Button>
        </HStack>
      </Box>
    </Center>
  );
}

export default Counter;
