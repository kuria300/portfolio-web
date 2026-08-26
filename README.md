# EKM Portfolio

The EKM portfolio is a dark, terminal-inspired personal website for a full-stack software engineer based in Nairobi, Kenya. It presents selected work, technical experience, service offerings, writing, and a direct contact workflow.

## Features

- Responsive portfolio homepage with animated hero content, testimonials, stats, and calls to action.
- About page with experience timeline, skills, GitHub profile, email, and resume links.
- Projects page showcasing project work from GitHub, including technology details and project status.
- Service pages for API development, SEO, AI integration, MVP development, technical consulting, AI automation, DevOps and containerization, and mobile development.
- Blog listing with featured writing, tag filtering, progressive loading, and individual post pages.
- Contact form with client-side validation, hCaptcha protection, server-side validation, Web3Forms delivery, and a success state.
- Site-wide floating WhatsApp contact button with a pre-filled introductory message and dismissible prompt.
- SEO metadata, Open Graph and Twitter metadata, JSON-LD structured data, sitemap, robots configuration, and custom 404 handling.

## Tech Stack

- **Framework:** Next.js 16 App Router
- **Language:** TypeScript with strict type checking
- **UI:** React 19, Tailwind CSS 4, Lucide React, React Icons
- **Animation:** Motion
- **Forms:** React Hook Form, Zod, and `@hookform/resolvers`
- **Integrations:** hCaptcha, Web3Forms, Axios
- **Fonts:** DM Sans and JetBrains Mono via `next/font`
- **Package manager:** Yarn 4

## Project Structure

```text
app/                  App Router pages, metadata, sitemap, and global styles
components/           Reusable layout, UI, blog, data, and service components
public/               Project and service imagery
utils/                Contact validation and server action
next.config.ts        Next.js configuration
```

## Getting Started

### Prerequisites

- Node.js 20 or newer
- Yarn 4, or Corepack enabled

### Install dependencies

```bash
corepack enable
yarn install
```

### Configure environment variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_FORM_ACCESS_KEY=your_web3forms_access_key
```

`NEXT_PUBLIC_SITE_URL` is used for canonical URLs and structured metadata. `NEXT_PUBLIC_FORM_ACCESS_KEY` is required for contact form delivery through Web3Forms.

The contact page also provides direct email, GitHub, and LinkedIn links. A floating WhatsApp button is available throughout the site for quick enquiries.

### Run locally

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
yarn dev      # Start the development server with Webpack
yarn build    # Create a production build
yarn start    # Serve the production build
yarn lint     # Run ESLint
```

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Portfolio homepage |
| `/about` | Experience, skills, and profile information |
| `/projects` | Selected projects from GitHub |
| `/services/[slug]` | Service detail pages |
| `/blog` | Filterable technical writing archive |
| `/blog/[slug]` | Individual blog posts |
| `/contact` | Contact form and direct links |
| `/contact/success` | Successful contact submission state |

## Deployment

The application can be deployed to any platform that supports Next.js. For a typical production deployment:

```bash
yarn build
yarn start
```

Set `NEXT_PUBLIC_SITE_URL` to the public site URL and provide the Web3Forms access key in the deployment environment.

## Author and Owner

This project is authored and owned by **Eugene Kuria Maina**.

- GitHub: [@kuria300](https://github.com/kuria300)
- LinkedIn: [Eugene Kuria Maina](https://www.linkedin.com/in/eugene-maina-376177245/)

## Contributing

Contributions, suggestions, and improvements are welcome. To contribute:

1. Fork the repository.
2. Create a feature branch.
3. Make your changes and run `yarn lint`.
4. Open a pull request with a concise description of the update.

## License

This project is licensed under the [MIT License](LICENSE) and is Copyright (c) 2026 Eugene Kuria Maina.
