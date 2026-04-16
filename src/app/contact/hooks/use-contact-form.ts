'use client'

import { useState } from "react"
import { useForm } from 'react-hook-form'
import { contactFormSchema, ContactFormValues } from "../schema/contact-schema"
import { zodResolver } from '@hookform/resolvers/zod'

export function useContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: '',
            email: '',
            message: ''
        }
    })

    const onSubmit = async (data: ContactFormValues) => {
        setIsSubmitting(true)
        setSubmitStatus('idle')

        try {
            await new Promise(resolve => setTimeout(resolve, 1500))
            setSubmitStatus('success')
            form.reset()

            setTimeout(() => setSubmitStatus('idle'), 3000)
        } catch (error) {
            setSubmitStatus('error')
            setTimeout(() => setSubmitStatus('idle'), 3000)
        } finally {
            setIsSubmitting(false)
        }
    }

    return {
        form,
        isSubmitting,
        submitStatus,
        onSubmit: form.handleSubmit(onSubmit)
    }
}