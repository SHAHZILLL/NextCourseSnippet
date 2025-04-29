"use client"
import React, { useState } from 'react'
import type { Snippet } from '../generated/prisma'
import { Editor } from '@monaco-editor/react'
import * as actions from '@/actions'

interface SnippetEditFormProps {
    snippet: Snippet
}

const SnippetEditForm = ({ snippet }: SnippetEditFormProps) => {

    const [code, setCode] = useState(snippet.code)

    const handleEditorChange = (value: string = "") => {
        setCode(value)
    }

    const editSnippetFunc = actions.editSnippet.bind(null, snippet.id, code)

    
    return (
        <div>
            <Editor
                height="50vh"
                defaultLanguage="javascript"
                defaultValue={snippet.code}
                theme='vs-dark'
                options={{
                    // minimap: { enabled: false },
                }}
                onChange={handleEditorChange}
            />
            <form action={editSnippetFunc}>
                <button type="submit" className='p-2 border rounded pointer'>Save</button>
            </form>
        </div>
    )
}

export default SnippetEditForm
