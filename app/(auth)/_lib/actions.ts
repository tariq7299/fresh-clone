"use server";

import { LoginFormSchema, LoginFormState } from '@/(auth)/_lib/definitions'
import { redirect } from 'next/navigation'
import { createSession } from '@/(auth)/_lib/sessions';


async function authenticate(payload) {

    try {
        const response = await fetch('http://127.0.0.1:8000/api/auth/stakeholder/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        if (!response.ok) throw new Error('Failed to send data');

        const data = await response.json();
        console.log(data);
        // createSession
        return data;
    } catch (error) {
        console.error('Error sending data:', error);
        return error;
    }
}

export async function login(state: LoginFormState, formData: FormData) {

    // Validate form fields
    const validatedFields = LoginFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
    })

    // If any form fields are invalid, return early
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    // Replace this with autheticate function, that will be found in services file in (auth)/_lib/services
    // 

    // const response = await authenticate(validatedFields.data)
    try {
        const response = await fetch('http://127.0.0.1:8000/api/auth/stakeholder/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(validatedFields.data),
        });

        if (!response.ok) throw new Error('Failed to send data');

        const data = await response.json();
        console.log("data", data);
        console.log("data.data.token", data.data.token)

        await createSession(data.data.token)

        // return data;

    } catch (error) {
        console.error('Error sending data:', error);
        return { message: 'Error sending data' };
    }

    redirect("/for-who");

};