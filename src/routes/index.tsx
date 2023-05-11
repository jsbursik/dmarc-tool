import Upload from "~/components/upload";
import Record from "~/components/record";
import { For } from "solid-js";

import { data } from "~/components/upload";

export default function Home() {
  return (
    <main class="flex flex-col">
      <div class="mx-auto">
        <p>Home</p>
        <Upload />
        <For each={data()}>{(d) => <Record info={d} />}</For>
      </div>
    </main>
  );
}
