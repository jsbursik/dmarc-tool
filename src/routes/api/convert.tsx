import { APIEvent } from "solid-start";
import { xml2json } from "xml-js";

export async function POST({ request }: APIEvent) {
  const body = await new Response(request.body).json();
  const json = xml2json(body, { compact: true });

  return new Response(json);
}

export default function Convert() {
  return <h1 class="font-bold text-xl">Not a content route</h1>;
}
