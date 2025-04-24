import { db } from "@/db";
import Link from "next/link";

export default async function Home() {

  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => {
    return (
      <Link href={`/snippets/${snippet.id}`} key={snippet.id} className="flex justify-between items-center border rounded p-2 m-2">
        <div>{snippet.title}</div>
        <div>View</div>
      </Link>
    )
  })

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center m-2">
        <h1 className="text-2xl font-bold m-3">Snippets</h1>
        <Link href="/snippets/new" className="rounded p-2 bg-blue-200">
          Create a new snippet
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        {snippets.length === 0 && <p>No snippets found</p>}
      </div>

      <div className="flex flex-col gap-2">{renderedSnippets}</div>
    </div>
  );
}
