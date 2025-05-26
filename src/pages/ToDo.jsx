import { createStore } from "solid-js/store";
import { createSignal, onMount, For } from "solid-js";
import { Box, Heading, Input, Button, VStack, HStack, Text, Container, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalCloseButton } from "@hope-ui/solid";

function ToDo() {
  const [todos, setTodos] = createStore([]);
  const [newTodo, setNewTodo] = createSignal("");
  const [isModalOpen, setIsModalOpen] = createSignal(false);

  const addTodo = () => {
    if (newTodo().trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo(), done: false }]);
      setNewTodo("");
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleDone = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo))
    );
  };

  return (
    <Container>
      <Heading mb="$4" color="$primary9">📋 To Do List</Heading>

      <HStack spacing="$2" mb="$4">
        <Input
          placeholder="Tambahkan todo..."
          value={newTodo()}
          onInput={(e) => setNewTodo(e.target.value)}
        />
        <Button colorScheme="primary" onClick={addTodo}>
          Tambah
        </Button>
      </HStack>
    
      <VStack spacing="$2" mb="$10">
        <For each={todos}>
          {(todo) => (
            <Box
              p="$4"
              bg="$neutral1"
              borderRadius="$md"
              shadow="$sm"
              width="100%"
            >
              <HStack justify="space-between">
                <Text
                  textDecoration={todo.done ? "line-through" : "none"}
                  color={todo.done ? "$neutral9" : "$neutral12"}
                >
                  {todo.text}
                </Text>
                <HStack spacing="$2">
                  <Button
                    size="sm"
                    colorScheme="success"
                    onClick={() => toggleDone(todo.id)}
                  >
                    Selesai
                  </Button>
                  <Button
                    size="sm"
                    colorScheme="danger"
                    onClick={() => removeTodo(todo.id)}
                  >
                    Hapus
                  </Button>
                </HStack>
              </HStack>
            </Box>
          )}
        </For>
      </VStack>

      <Button
        colorScheme="purple"
        onClick={() => setIsModalOpen(true)}
      >
        Info Modal
      </Button>

      <Modal opened={isModalOpen()} onClose={() => setIsModalOpen(false)}>
        <ModalContent>
          <ModalHeader>Info Modal</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Ini adalah contoh modal dari Hope UI.</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="primary" onClick={() => setIsModalOpen(false)}>
              Tutup
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
}

export default ToDo;
