import React from 'react'
import { notFound } from 'next/navigation'
import { db } from '@/db'
import Link from 'next/link'

interface SnippetShowPageProps {
    params: {
        id: string
    }
}

const SnippetShowPage = async (props: SnippetShowPageProps) => {
    //   console.log(props)

    await new Promise((r) => setTimeout(r, 2000))

    const snippet = await db.snippet.findFirst({
        where: { id: parseInt(props.params.id) }
    })

    if (!snippet) {
        // if the snippet is not found, show a 404 page
        return notFound()
    }

    return (
        <div>
            <div className='flex m-4 justify-between items-center'>
                <h1 className='texl-xl font-bold'>{snippet?.title}</h1>
                <div className='flex gap-4'>
                    <Link href={`/snippets/${snippet.id}/edit`} className='p-2 border rounded bg-blue-200' >Edit</Link>
                    <Link href={`/snippets/${snippet.id}/edit`} className='p-2 border rounded bg-blue-200'>Delete</Link>
                </div>
            </div>
            <pre className='m-4 p-4 border rounded bg-gray-100 border-gray-300'>
                <code>{snippet.code}</code>
            </pre>
        </div>
    )
}

export default SnippetShowPage
