'use client'

import { Card, CardContent } from "@/Components/ui/card"
import { useContactForm } from "../hooks/use-contact-form"
import { motion } from "motion/react"
import { Label } from "@/Components/ui/label"
import { Input } from "@/Components/ui/input"
import { Textarea } from "@/Components/ui/textarea"
import { CheckCircle, XCircle } from "lucide-react"
import { Button } from "@/Components/ui/button"

export function ContactForm() {
    const { form, isSubmitting, submitStatus, onSubmit } = useContactForm()
    const { register, formState: { errors } } = form

    return (
        <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
        >
            <Card className="bg-white/70 backdrop-blur-xl border border-white/20 shadow-2xl rounded-xl">
                <CardContent className="p-8 md:p-12">
                    <h2 className="font-headline text-3xl text-foreground mb-8">
                        Send an Inquiry
                    </h2>

                    <form onSubmit={onSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                                    Full Name
                                </Label>
                                <Input 
                                    id="name"
                                    placeholder="Enter your name"
                                    className="bg-surface-container-low border-none rounded-lg p-4 h-auto focus-visible:ring-primary/20"
                                    { ...register('name') }
                                />

                                {errors.name && (
                                    <p className="text-xs text-red-500 mt-1">
                                        {errors.name.message}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                                    Email Address
                                </Label>
                                <Input 
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    className="bg-surface-container-low border-none rounded-lg p-4 h-auto focus-visible:ring-primary/20"
                                    { ...register('email') }
                                />

                                {errors.email && (
                                    <p className="text-xs text-red-500 mt-1">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                                Email Address
                            </Label>
                            <Textarea 
                                id="email"
                                placeholder="Tell us about your project..."
                                rows={5}
                                className="bg-surface-container-low border-none rounded-lg p-4 h-auto focus-visible:ring-primary/20"
                                { ...register('message') }
                            />

                            {errors.message && (
                                <p className="text-xs text-red-500 mt-1">
                                    {errors.message.message}
                                </p>
                            )}
                        </div>

                        {submitStatus === 'success' && (
                            <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg">
                                <CheckCircle className="w-5 h-5" />
                                <span className="text-sm">
                                    Message sent successfully! We'll get back to you soon.
                                </span>
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg">
                                <XCircle className="w-5 h-5" />
                                <span className="text-sm">
                                    Something went wrong. Please try again.
                                </span>
                            </div>
                        )}

                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-6 bg-primary text-white hover:bg-primary/90 rounded-full font-semibold text-lg transition-transform hover:scale-[1.02] shadow-lg shadow-primary/20 cursor-pointer"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </motion.div>
    )
}