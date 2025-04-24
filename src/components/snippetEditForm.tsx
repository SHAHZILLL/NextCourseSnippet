"use client"
import React, { useState } from 'react'
import type { Snippet } from '../generated/prisma'
import { Editor } from '@monaco-editor/react'

interface SnippetEditFormProps {
    snippet: Snippet
}

const SnippetEditForm = ({ snippet }: SnippetEditFormProps) => {

    const [code, setCode] = useState(snippet.code)

    const handleEditorChange = (value: string = "") => {
        setCode(value)
    }

    // async function editSnippet() {
    //     'use server'
    // }

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
        </div>
    )
}

export default SnippetEditForm
