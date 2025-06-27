'use client';

import { useState, useRef, useTransition } from 'react';
import { handleContactSubmit } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

const initialState: {
    success?: boolean;
    message: string;
    errors: {
        name?: string[];
        email?: string[];
        message?: string[];
    }
} = {
    message: '',
    errors: {},
};

function SubmitButton({ pending }: { pending: boolean }) {
    return (
        <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
            {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
            Send Message
        </Button>
    );
}

export default function ContactSection() {
    const [state, setState] = useState(initialState);
    const [isPending, startTransition] = useTransition();
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        
        startTransition(async () => {
            const result = await handleContactSubmit(formData);
            setState(result);

            if (result.success) {
                formRef.current?.reset();
            }
        });
    };

    return (
        <section id="contact" className="py-16 md:py-24  ">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-headline font-bold text-primary dark:text-primary">Get In Touch</h2>
                    <p className="text-lg text-muted-foreground mt-2 font-body">Have a project in mind or just want to say hi? Let&apos;s connect.</p>
                </div>
                <div className="max-w-2xl mx-auto">
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <Label htmlFor="name" className="font-headline text-lg">Name</Label>
                            <Input id="name" name="name" type="text" placeholder="Your Name" required className="mt-2" />
                            {state.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name[0]}</p>}
                        </div>
                        <div>
                            <Label htmlFor="email" className="font-headline text-lg">Email</Label>
                            <Input id="email" name="email" type="email" placeholder="your.email@example.com" required className="mt-2" />
                            {state.errors?.email && <p className="text-sm text-destructive mt-1">{state.errors.email[0]}</p>}
                        </div>
                        <div>
                            <Label htmlFor="message" className="font-headline text-lg">Message</Label>
                            <Textarea id="message" name="message" placeholder="Your message here..." required rows={5} className="mt-2" />
                            {state.errors?.message && <p className="text-sm text-destructive mt-1">{state.errors.message[0]}</p>}
                        </div>
                        <SubmitButton pending={isPending} />
                    </form>
                    {state.message && Object.keys(state.errors).length === 0 && (
                        <p className={cn("text-sm font-medium mt-4 text-center", {
                            "text-green-500": state.success,
                            "text-destructive": !state.success,
                        })}>
                            {state.message}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}
