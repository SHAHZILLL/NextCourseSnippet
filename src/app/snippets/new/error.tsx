'use client';
import React from 'react'

interface ErrorPageProps {
    error: Error
    reset: () => void
}

const ErrorPage = ({error} : ErrorPageProps) => {
  return (
    <div>
      {error.message}
    </div>
  )
}

export default ErrorPage
