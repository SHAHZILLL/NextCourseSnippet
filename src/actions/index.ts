'use server'

import { db } from "@/db"
import { Snippet } from "@/generated/prisma"
import { redirect } from "next/navigation"

export async function editSnippet(id: number, code: string) {
    console.log('edit snipped called')
    console.log(id, code, 'id and code')
    await db.snippet.update({
        where: { id },
        data: { code },
    })
    redirect(`/snippets/${id}`)
}

export async function deleteSnippet(id: number) {

    console.log('delete snipped called')
    await db.snippet.delete({
        where: { id },
    })
    redirect('/')
}


export const createSnippet = async (formState: { message: string }, formData: FormData) => {

    // return {
    //     message: 'Title must be longer'
    // }

    try {
        const title = formData.get('title');
        const code = formData.get('code');

        if (typeof title !== 'string' || title.length < 3) {
            return {
                message: 'Title must be longer'
            }
        }
        if (typeof code !== 'string' || code.length < 10) {
            return {
                message: 'Code must be longer'
            }

        }

        // create a new record in the database
        const snippet = await db.snippet.create({
            data: {
                title,
                code,
            }
        })
        console.log(snippet)
    } catch (error: unknown) {
        if (error instanceof Error) {
            // console.log(error.message)
            return {
                message: error.message
            }
        } else {
            // console.log('Unknown error', error)
            return {
                message: 'Something went wrong'
            }
        }

    }

    // chech the user's inputs and make sure they are valid


    redirect('/')
}