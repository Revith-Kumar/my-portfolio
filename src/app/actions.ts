'use server';

import { z } from 'zod';
import nodemailer from 'nodemailer';

const contactSchema = z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    email: z.string().email({ message: 'Please enter a valid email' }),
    message: z.string().min(10, { message: 'Message must be at least 10 characters long' }),
});

export async function handleContactSubmit(formData: FormData) {
    const validatedFields = contactSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
    });

    if (!validatedFields.success) {
        return {
            success: false,
            message: 'Invalid form data. Please check the fields and try again.',
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const { name, email, message } = validatedFields.data;
    const toEmail = process.env.EMAIL_TO;
    const fromEmail = process.env.EMAIL_FROM;
    const emailHost = process.env.EMAIL_SERVER_HOST;

    if (!toEmail || !fromEmail || !emailHost) {
        console.error('Email server environment variables not configured.');
        return {
            success: false,
            message: 'Sorry, the server is not configured to send emails. Please contact the site administrator.',
            errors: {},
        };
    }

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_SERVER_HOST,
        port: Number(process.env.EMAIL_SERVER_PORT),
        secure: Number(process.env.EMAIL_SERVER_PORT) === 465,
        auth: {
            user: process.env.EMAIL_SERVER_USER,
            pass: process.env.EMAIL_SERVER_PASSWORD,
        },
    });

    try {
        await transporter.sendMail({
            from: `"${name}" <${fromEmail}>`,
            to: toEmail,
            replyTo: email,
            subject: `New message from ${name} via your portfolio`,
            text: message,
            html: `<p>You have a new contact form submission:</p>
                   <ul>
                     <li><strong>Name:</strong> ${name}</li>
                     <li><strong>Email:</strong> ${email}</li>
                   </ul>
                   <p><strong>Message:</strong></p>
                   <p>${message.replace(/\n/g, '<br>')}</p>`,
        });

        return { success: true, message: 'Thank you for your message! I will get back to you soon.', errors: {} };
    } catch (error) {
        console.error('Failed to send email:', error);
        return {
            success: false,
            message: 'Sorry, there was an error sending your message. Please try again later.',
            errors: {},
        };
    }
}
