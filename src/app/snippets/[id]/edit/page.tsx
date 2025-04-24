import SnippetEditForm from '@/components/snippetEditForm';
import { db } from '@/db';
import { notFound } from 'next/navigation';
import React from 'react'

interface SnippetShowPageProps {
    params: {
        id: string
    }
}

const SnippetEditPage = async (props: SnippetShowPageProps) => {

    const id = parseInt(props.params.id);
    const snippet = await db.snippet.findFirst({
        where: { id }
    })

    if (!snippet) {
        // if the snippet is not found, show a 404 page
        return notFound()
    }


    return (
        <div>
            <SnippetEditForm snippet={snippet} />
        </div>
    )
}

export default SnippetEditPage
