import { createSignal } from "solid-js";

export const [data, setData] = createSignal([]);

const convertXML = async (xml: string) => {
  const res = await fetch("api/convert", {
    method: "POST",
    headers: {
      "Content-Type": "text/plain",
    },
    body: JSON.stringify(xml),
  });
  const json = await res.json();
  setData(json.feedback.record);
};

export default function Upload() {
  const handleFile = (e: any) => {
    const file = e.target.files[0];
    if (file.type && file.type != "text/xml") {
      return;
    }
    const reader = new FileReader();
    reader.addEventListener("load", async (event) => {
      if (event.target && typeof event.target.result === "string") {
        convertXML(event.target.result);
      }
    });
    reader.readAsText(file);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input onChange={(e) => handleFile(e)} type="file" class="file-input file-input-bordered file-input-primary w-full max-w-xs" accept=".xml" />
    </form>
  );
}
