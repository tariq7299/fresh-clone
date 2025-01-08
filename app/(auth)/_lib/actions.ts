"use server";

import { LoginFormSchema, LoginFormState } from '@/(auth)/_lib/definitions'
import { redirect } from 'next/navigation'
import { createSession } from '@/(auth)/_lib/sessions';
import { SessionData } from '@/(auth)/_lib/definitions';
import { authService } from '@/lib/utils/api-services';

export async function loginServerAction(state: LoginFormState, formData: FormData) {

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

        const response = await authService.login(validatedFields.data.email, validatedFields.data.password)

        console.log("response", response);

        // const response = await fetch('http://127.0.0.1:8000/api/auth/stakeholder/login', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(validatedFields.data),
        // });

        // if (!response.ok) throw new Error('Failed to send data');

        // const data = await response.json();
        // console.log("data.data.token", data.data.token)

        // Store the session in a secure http only cookie
        await createSession({
            userId: response.data.user.id,
            name: response.data.user.name,
            email: response.data.user.email,
            role: response.data.user.role,
            phone: response.data.user.phone_number,
            isVerified: response.data.user.is_verified,
            token: response.data.token
        })

        return { token: response.data.token }


    } catch (error) {
        console.error('Error sending data:', error);
        return { message: 'Error sending data' };
    }

    // redirect("/professional/dashboard");

};