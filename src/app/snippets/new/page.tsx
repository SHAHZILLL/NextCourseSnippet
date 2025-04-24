import React from 'react'
import { db } from '@/db'
import { redirect } from 'next/navigation';

const SnippetCreatePage = () => {

    const createSnippet = async (formData: FormData) => {
        // this needs to be a server action
        'use server';

        // chech the user's inputs and make sure they are valid
        const title = formData.get('title') as string;
        const code = formData.get('code') as string;

        // const title = "Testing";
        // const code = "Testing1";

        // create a new record in the database
        const snippet = await db.snippet.create({
            data : {
                title,
                code,
            }
        })
        console.log(snippet)
        
        // redirect the user back to the root route 
        redirect('/')
    }

    return (
        <form action={createSnippet} className='flex flex-col gap-4'>
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

                <button type='submit' className='rounded p-2 bg-blue-200'>
                    Create
                </button>
            </div>
        </form>
    )
}

export default SnippetCreatePage
