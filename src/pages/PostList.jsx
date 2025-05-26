import { createSignal, createResource, createMemo } from "solid-js";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

export default function PostList() {
  const [posts] = createResource(fetchPosts);
  const [query, setQuery] = createSignal("");

  const filtered = createMemo(() =>
    posts()?.filter((post) =>
      post.title.toLowerCase().includes(query().toLowerCase())
    ) || []
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Cari judul..."
        value={query()}
        onInput={(e) => setQuery(e.target.value)}
        class="border p-2 mb-4 block w-full"
      />
      <ul>
        {filtered().map((post) => (
          <li class="mb-2 border-b pb-2">
            <h3 class="font-semibold">{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
