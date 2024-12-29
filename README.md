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