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
