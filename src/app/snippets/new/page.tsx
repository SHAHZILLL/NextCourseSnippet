'use client'
import React, { useActionState } from 'react'
import { useFormState } from 'react-dom'
import * as actions from '@/actions'
// useActionState

const SnippetCreatePage = () => {

    const [formState, action] = useActionState(actions.createSnippet, { message: '' });

    return (
        <form action={action} className='flex flex-col gap-4'>
            <h3 className='font-bold m-3'>Create a snippet</h3>
            <div className='flex flex-col gap-4'>
                <div className='flex gap-4'>
                    <label className='w-12' htmlFor='title'>Title</label>
                    <input name="title" className='border rounded p-2 w-full' />
                </div>
                <div className='flex gap-4'>
                    <label className='w-12' htmlFor='code'>Code</label>
                    <textarea name="code" className='border rounded p-2 w-full' id='code' />
                </div>

                {
                    formState.message ? <div className='my-2 p-2 bg-red-200 border rounded border-red-400'>{formState.message}</div> : null
                }
                
                <button type='submit' className='rounded p-2 bg-blue-200 cursor-pointer'>
                    Create
                </button>
            </div>
        </form>
    )
}

export default SnippetCreatePage
