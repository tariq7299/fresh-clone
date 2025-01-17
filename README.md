This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Steps to init the project
    1. Use the guide in nextJS official docs
    2. 

## Some tips
- Try to use clxs lib with classNames to enable you for more contorl on conditional classNames
- Do this if you want to install a component in a certain path do this `pnpm dlx shadcn@latest add <componentName> --path <path>`
- `NEXT_PUBLIC_` This is the correct prefix for environment variables that need to be exposed to the browser/client-side code in Next.js and Without this prefix, the variable would only be available server-side


## Common commands
`pnpm dlx shadcn@latest add <componentName> --path ./app/ui/components`
pnpm dlx shadcn@latest add popover --path /app/ui/components/common
## Nice tip from AI on font families
I'll recommend three font families that would work well for a beauty and spa booking platform, considering both aesthetics and readability:

1. **Primary Font (Headers & Titles)**:
   - **Playfair Display**
   - Perfect for your main headings and hero text
   - Conveys elegance and luxury while remaining readable
   - Example usage:
   ```css
   font-family: 'Playfair Display', serif;
   ```

2. **Secondary Font (Navigation & Subheadings)**:
   - **Montserrat**
   - Great for navigation menus, buttons, and section headers
   - Clean, modern, and highly legible
   - Works well in various weights (light to bold)
   ```css
   font-family: 'Montserrat', sans-serif;
   ```

3. **Body Text Font**:
   - **Lato**
   - Perfect for body text, descriptions, and smaller content
   - Excellent readability at different sizes
   - Professional yet warm appearance
   ```css
   font-family: 'Lato', sans-serif;
   ```


These fonts work well together because:
- They create a clear visual hierarchy
- They balance elegance (Playfair Display) with modern cleanliness (Montserrat and Lato)
- They maintain excellent readability across different devices and screen sizes
- They're widely supported and available on Google Fonts
- They convey the luxurious, professional nature of beauty and spa services while remaining approachable

```
Logo: Libre Bodoni
big-Headers:  Lora
miduem headers: Montserrat
body: Quicksand
```

## Description of the app
I'll create compelling copy for both the Benefits and Features sections of your landing page:
BENEFITS
For Customers:
"Book your favorite services anytime, anywhere"
"Find and discover local salons and wellness spots near you"
"Say goodbye to phone tag – secure your appointments instantly"
"Read authentic reviews and make informed choices"
"Get reminders and never miss your beauty appointments"
For Business Owners:
"Transform your booking experience from chaos to clarity"
"Focus on your craft while we handle the scheduling"
"Fill empty slots and maximize your revenue"
"Build a stronger online presence effortlessly"
"Keep your clients coming back with seamless scheduling"
FEATURES
Business Management:
"Complete Business Control Hub
Take charge of your salon's digital presence. Update your business profile, showcase your best work, and manage your location details all in one place."
Booking Management:
"Smart Scheduling System
Effortlessly manage your calendar, set available time slots, and organize your service menu. Our intelligent system helps prevent double bookings and scheduling conflicts."
Service Customization:
"Flexible Service Setup
List your services, set pricing, and update availability in real-time. Add special offers and seasonal services with just a few taps."
Client Management:
"Customer Insights Dashboard
Track booking history, manage client preferences, and build lasting relationships with your customers through detailed analytics and booking patterns."
Real-Time Updates:
"Instant Calendar Sync
Keep your availability up-to-date across all platforms. Changes reflect immediately, ensuring perfect coordination between you and your clients."
Mobile Optimization:
"On-the-Go Management
Run your business from anywhere. Accept bookings, manage schedules, and update services right from your smartphone."
Automated Notifications:
"Smart Reminder System
Reduce no-shows with automated appointment reminders. Keep clients informed about their upcoming appointments without lifting a finger.


## Businessess categories
{
    "success": true,
    "code": 200,
    "message": "Categories retrieved successfully",
    "data": [
        {
            "id": 1,
            "name": "Salon",
            "description": "Hair and styling services",
            "is_active": true,
            "display_order": 1,
            "created_at": "2025-01-12 16:36:16",
            "updated_at": "2025-01-12 16:36:16"
        },
        {
            "id": 2,
            "name": "Spa",
            "description": "Massage and relaxation services",
            "is_active": true,
            "display_order": 2,
            "created_at": "2025-01-12 16:36:16",
            "updated_at": "2025-01-12 16:36:16"
        },
        {
            "id": 3,
            "name": "Beauty Center",
            "description": "Comprehensive beauty services",
            "is_active": true,
            "display_order": 3,
            "created_at": "2025-01-12 16:36:16",
            "updated_at": "2025-01-12 16:36:16"
        },
        {
            "id": 4,
            "name": "Dermatology Clinic",
            "description": "Skin treatment services",
            "is_active": true,
            "display_order": 4,
            "created_at": "2025-01-12 16:36:16",
            "updated_at": "2025-01-12 16:36:16"
        },
        {
            "id": 5,
            "name": "Nail Center",
            "description": "Nail care and manicure services",
            "is_active": true,
            "display_order": 5,
            "created_at": "2025-01-12 16:36:16",
            "updated_at": "2025-01-12 16:36:16"
        },
        {
            "id": 6,
            "name": "Massage Center",
            "description": "Therapeutic massage services",
            "is_active": true,
            "display_order": 6,
            "created_at": "2025-01-12 16:36:16",
            "updated_at": "2025-01-12 16:36:16"
        },
        {
            "id": 7,
            "name": "Men's Salon",
            "description": "Men's grooming services",
            "is_active": true,
            "display_order": 7,
            "created_at": "2025-01-12 16:36:16",
            "updated_at": "2025-01-12 16:36:16"
        },
        {
            "id": 8,
            "name": "Massage Therapy",
            "description": "Specialized massage sessions",
            "is_active": true,
            "display_order": 8,
            "created_at": "2025-01-12 16:36:16",
            "updated_at": "2025-01-12 16:36:16"
        },
        {
            "id": 9,
            "name": "Laser Center",
            "description": "Laser hair removal services",
            "is_active": true,
            "display_order": 9,
            "created_at": "2025-01-12 16:36:16",
            "updated_at": "2025-01-12 16:36:16"
        },
        {
            "id": 10,
            "name": "Dental Clinic",
            "description": "Cosmetic dental services",
            "is_active": true,
            "display_order": 10,
            "created_at": "2025-01-12 16:36:16",
            "updated_at": "2025-01-12 16:36:16"
        },
        {
            "id": 11,
            "name": "Slimming Center",
            "description": "Weight loss and fitness programs",
            "is_active": true,
            "display_order": 11,
            "created_at": "2025-01-12 16:36:16",
            "updated_at": "2025-01-12 16:36:16"
        },
        {
            "id": 12,
            "name": "Nail Art Center",
            "description": "Nail art and design services",
            "is_active": true,
            "display_order": 12,
            "created_at": "2025-01-12 16:36:16",
            "updated_at": "2025-01-12 16:36:16"
        },
        {
            "id": 13,
            "name": "Physiotherapy Center",
            "description": "Physical therapy services",
            "is_active": true,
            "display_order": 13,
            "created_at": "2025-01-12 16:36:16",
            "updated_at": "2025-01-12 16:36:16"
        },
        {
            "id": 14,
            "name": "Specialized Salon",
            "description": "Specialized beauty services",
            "is_active": true,
            "display_order": 14,
            "created_at": "2025-01-12 16:36:16",
            "updated_at": "2025-01-12 16:36:16"
        },
        {
            "id": 15,
            "name": "Hair Beauty Center",
            "description": "Advanced hair treatments",
            "is_active": true,
            "display_order": 15,
            "created_at": "2025-01-12 16:36:16",
            "updated_at": "2025-01-12 16:36:16"
        },
        {
            "id": 16,
            "name": "Makeup Center",
            "description": "Professional makeup services",
            "is_active": true,
            "display_order": 16,
            "created_at": "2025-01-12 16:36:16",
            "updated_at": "2025-01-12 16:36:16"
        },
        {
            "id": 17,
            "name": "Moroccan Bath Center",
            "description": "Traditional Moroccan bath services",
            "is_active": true,
            "display_order": 17,
            "created_at": "2025-01-12 16:36:16",
            "updated_at": "2025-01-12 16:36:16"
        },
        {
            "id": 18,
            "name": "Henna Center",
            "description": "Henna art and design services",
            "is_active": true,
            "display_order": 18,
            "created_at": "2025-01-12 16:36:16",
            "updated_at": "2025-01-12 16:36:16"
        },
        {
            "id": 19,
            "name": "Bridal Beauty Center",
            "description": "Bridal beauty services",
            "is_active": true,
            "display_order": 19,
            "created_at": "2025-01-12 16:36:16",
            "updated_at": "2025-01-12 16:36:16"
        },
        {
            "id": 20,
            "name": "Lash Center",
            "description": "Eyelash extension services",
            "is_active": true,
            "display_order": 20,
            "created_at": "2025-01-12 16:36:16",
            "updated_at": "2025-01-12 16:36:16"
        },
        {
            "id": 21,
            "name": "Eyebrow Center",
            "description": "Eyebrow design services",
            "is_active": true,
            "display_order": 21,
            "created_at": "2025-01-12 16:36:16",
            "updated_at": "2025-01-12 16:36:16"
        },
        {
            "id": 22,
            "name": "Facial Center",
            "description": "Facial cleaning services",
            "is_active": true,
            "display_order": 22,
            "created_at": "2025-01-12 16:36:16",
            "updated_at": "2025-01-12 16:36:16"
        },
        {
            "id": 23,
            "name": "Thai Massage Center",
            "description": "Thai massage services",
            "is_active": true,
            "display_order": 23,
            "created_at": "2025-01-12 16:36:16",
            "updated_at": "2025-01-12 16:36:16"
        },
        {
            "id": 24,
            "name": "Yoga Center",
            "description": "Yoga classes and sessions",
            "is_active": true,
            "display_order": 24,
            "created_at": "2025-01-12 16:36:16",
            "updated_at": "2025-01-12 16:36:16"
        },
        {
            "id": 25,
            "name": "Rehabilitation Center",
            "description": "Rehabilitation services",
            "is_active": true,
            "display_order": 25,
            "created_at": "2025-01-12 16:36:16",
            "updated_at": "2025-01-12 16:36:16"
        },
        {
            "id": 26,
            "name": "Acupuncture Center",
            "description": "Acupuncture treatment services",
            "is_active": true,
            "display_order": 26,
            "created_at": "2025-01-12 16:36:16",
            "updated_at": "2025-01-12 16:36:16"
        },
        {
            "id": 27,
            "name": "Sports Massage Center",
            "description": "Sports massage services",
            "is_active": true,
            "display_order": 27,
            "created_at": "2025-01-12 16:36:16",
            "updated_at": "2025-01-12 16:36:16"
        },
        {
            "id": 28,
            "name": "Foot Beauty Center",
            "description": "Foot care and pedicure services",
            "is_active": true,
            "display_order": 28,
            "created_at": "2025-01-12 16:36:16",
            "updated_at": "2025-01-12 16:36:16"
        },
        {
            "id": 29,
            "name": "Integrated Beauty Center",
            "description": "Comprehensive beauty services",
            "is_active": true,
            "display_order": 29,
            "created_at": "2025-01-12 16:36:16",
            "updated_at": "2025-01-12 16:36:16"
        },
        {
            "id": 30,
            "name": "Beauty Consultation Center",
            "description": "Beauty consultation services",
            "is_active": true,
            "display_order": 30,
            "created_at": "2025-01-12 16:36:16",
            "updated_at": "2025-01-12 16:36:16"
        },
        {
            "id": 31,
            "name": "Hair Treatment Center",
            "description": "Hair treatment services",
            "is_active": true,
            "display_order": 31,
            "created_at": "2025-01-12 16:36:16",
            "updated_at": "2025-01-12 16:36:16"
        },
        {
            "id": 32,
            "name": "Medical Beauty Center",
            "description": "Medical beauty services",
            "is_active": true,
            "display_order": 32,
            "created_at": "2025-01-12 16:36:16",
            "updated_at": "2025-01-12 16:36:16"
        }
    ],
    "errors": null
}

## Notes

### http-only cookies vs Bearer tokens

// Server-side (middleware.ts, server components, API routes)
✅ cookies()
✅ getSession()
❌ localStorage
❌ sessionStorage
❌ window
❌ document

// Client-side (client components)
✅ localStorage
✅ sessionStorage
✅ window
✅ document
❌ cookies() // Next.js server-only API

- As you can notice you can't access http-only cookies through client side !, and only you are able to do so in the api !
- So if your like for example using nextJS with already exsiting api that handlers your cookies and auth, and that api doesn't use http-only cookies and instead it used Bearer token, then you must attach that token sent to you when you login in the headers of the request ! (
   ```
    headers: {
        'Authorization': `Bearer ${token}`
    }
   ```
)

- As you won't be able to access the token if you store it in a cookie instead of like a localstorage, so you have to only use localStorage with Bearer tokens !
