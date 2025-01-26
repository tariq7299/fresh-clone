// app/api/bookings/route.ts
import { Slot } from '@/business/_lib/definitions'
import { ApiResponse } from '@/lib/definitions/api'
import { fetchApi } from '@/lib/utils/api/fetch-utils-client'
import { NextRequest, NextResponse } from 'next/server'

// Define your request type (optional but recommended)
interface BookingRequest {
    date: string
    serviceId: number
    // ... other fields
}

export async function POST(request: NextRequest) {
    try {

        const body: {
            business_id: number,
            date: string,
            service_ids: number[]
        } = await request.json()

        // 2. Validate required fields
        if (!body.date || !body.business_id || (body.service_ids.length === 0 || !Array.isArray(body.service_ids))) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        const response = await fetchApi<ApiResponse<{ slots: Slot[] }>>(`/businesses/available-slots`, {
            method: "POST",
            body: {
                business_id: body.business_id,
                date: body.date,
                service_ids: body.service_ids
            }
        })


        // 3. Your business logic here
        // Example: Save to database
        const booking = {
            id: 1,
            ...body,
            createdAt: new Date()
        }

        // 4. Return success response
        return NextResponse.json(
            {
                message: 'Booking created successfully',
                data: booking
            },
            { status: 201 }
        )

    } catch (error) {
        // 5. Error handling
        console.error('Booking error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}