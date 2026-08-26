export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
  featured: boolean;
  content: Section[];
}

export interface Section {
  type: "paragraph" | "heading" | "subheading" | "code" | "callout" | "list" | "links";
  text?: string;
  language?: string;
  items?: string[];
  links?: { label: string; href: string }[];
}

export const POSTS: Post[] = [
  {
    slug: "mvp-development-guide-2026",
    title: "MVP Development for Startups: How to Build a Minimum Viable Product in 2026",
    excerpt:
      "Launching a product without validation is the fastest way to burn through a runway. Here's the step-by-step approach I use to help founders build an MVP that actually tests the right assumptions.",
    date: "2026-01-14",
    readTime: "11 min",
    tags: ["MVP", "Startups", "Product"],
    image: "/MVP.avif",
    featured: true,
    content: [
      {
        type: "paragraph",
        text: "In the fast-moving startup ecosystem of 2026, launching a product without validation is one of the most reliable ways to waste months of runway. Building a Minimum Viable Product is a deliberate strategy to test core functionality, gather real user feedback, and refine the product before you've spent your entire budget building the wrong thing.",
      },
      {
        type: "heading",
        text: "What is an MVP?",
      },
      {
        type: "paragraph",
        text: "A Minimum Viable Product is the simplest version of your product that still delivers real value to early adopters. It focuses only on the features required to solve one specific problem, so you can test your assumptions and collect feedback with the smallest possible investment of time and money.",
      },
      {
        type: "callout",
        text: "Lack of market need is consistently cited as one of the top reasons startups fail. An MVP exists specifically to catch that problem early, before it becomes an expensive one.",
      },
      {
        type: "heading",
        text: "Why MVP Development Matters for Startups",
      },
      {
        type: "subheading",
        text: "1. Faster market validation",
      },
      {
        type: "paragraph",
        text: "An MVP lets you put a real product in front of real users and watch what they actually do — not what they say they'd do in a survey. Founders who validate through an MVP are far better positioned to pivot quickly if the first idea doesn't land, instead of discovering the mismatch after a full build.",
      },
      {
        type: "subheading",
        text: "2. Cost efficiency",
      },
      {
        type: "paragraph",
        text: "Building only the must-have features means you're not spending months of development budget on functionality nobody has asked for yet. Teams that scope tightly around a single core problem consistently spend a fraction of what a full-scale build would cost.",
      },
      {
        type: "subheading",
        text: "3. Stronger investor conversations",
      },
      {
        type: "paragraph",
        text: "A working product ; even an imperfect one, with real usage data is a far stronger pitch than a deck full of projections. Investors want to see traction, and an MVP is the fastest legitimate way to generate it.",
      },
      {
        type: "subheading",
        text: "4. Room for agile iteration",
      },
      {
        type: "paragraph",
        text: "An MVP isn't a finished product, it's a starting point. Shipping something small means you can run short iteration cycles, react to what users actually need, and avoid locking yourself into assumptions made before launch.",
      },
      {
        type: "subheading",
        text: "5. A foundation for AI and automation features",
      },
      {
        type: "paragraph",
        text: "Early-stage products are the ideal place to experiment with AI-assisted features, recommendations, chat support, personalization; because you can test whether they actually improve retention before investing in a more complex implementation. [KingsLanding AI](/projects) is an example of exactly this kind of focused, local-first AI experimentation.",
      },
      {
        type: "heading",
        text: "Step-by-Step Guide to Building an MVP",
      },
      {
        type: "list",
        items: [
          "Identify the core problem — define the pain point narrowly enough to validate quickly, but meaningfully enough to matter.",
          "Conduct market research — study competitors, user behaviour, and current trends to pressure-test your assumptions.",
          "Define your target audience — build user personas around real needs and motivations, not guesses.",
          "Map the user journey — outline how someone moves from first contact to using the core feature.",
          "List essential features only — cut anything that isn't required to solve the primary problem.",
          "Build with speed in mind — use agile sprints and, where it makes sense, low-code tools to move fast.",
          "Launch to early adopters — collect feedback through direct conversations, analytics, and usage patterns.",
          "Iterate in short cycles — use real data to fix friction points and refine the product.",
          "Plan for what comes after validation — a roadmap for scaling features, team, and go-to-market.",
        ],
      },
      {
        type: "heading",
        text: "Common Pitfalls to Avoid",
      },
      {
        type: "list",
        items: [
          "Overcomplicating the MVP — too many features upfront dilutes the thing you're actually trying to test.",
          "Ignoring user feedback — building features nobody asked for because it felt safer than listening.",
          "Skipping research — launching on assumptions instead of evidence.",
          "Unclear value proposition — if users can't tell what the product does for them in seconds, adoption suffers.",
        ],
      },
      {
        type: "paragraph",
        text: "An MVP isn't about building less for the sake of it , it's about building the right thing first. If you're weighing how to scope your first version, I help founders turn a rough idea into a working, testable product through a [focused MVP development process](/services) without the overhead of a full build.",
      },
      {
        type: "links",
        text: "Explore more:",
        links: [
          { label: "See my projects", href: "/projects" },
          { label: "View my services", href: "/services" },
          { label: "Get in touch", href: "/contact" },
        ],
      },
    ],
  },
  {
    slug: "will-ai-take-my-job",
    title: "Will AI Take My Job? The Truth About the Future of Your Work",
    excerpt:
      "The honest answer isn't 'yes' or 'no' — it's more specific than that. Here's a grounded look at what AI actually changes about how we work, and what doesn't change at all.",
    date: "2026-02-02",
    readTime: "8 min",
    tags: ["AI", "Future of Work", "Careers"],
    image: "/ai.avif",
    featured: true,
    content: [
      {
        type: "paragraph",
        text: "It's a question I get asked constantly, in different forms: will AI take my job? Am I wasting my time learning this skill? Should I be worried? The honest answer isn't a clean yes or no — it depends heavily on what your job actually involves, and how you respond to the tools available to you right now.",
      },
      {
        type: "heading",
        text: "The question people are really asking",
      },
      {
        type: "paragraph",
        text: "Underneath 'will AI take my job' is usually a more specific fear: will the thing I'm good at stop mattering. That's a fair concern. But most jobs aren't a single task, they're a bundle of tasks, some routine, some judgment-heavy, some relational. AI is very good at some of those and genuinely bad at others.",
      },
      {
        type: "callout",
        text: "AI doesn't replace jobs wholesale nearly as often as it replaces specific tasks inside a job. The distinction matters more than the headlines suggest.",
      },
      {
        type: "heading",
        text: "What AI is actually good at replacing",
      },
      {
        type: "list",
        items: [
          "Repetitive, well-defined tasks with clear inputs and outputs — data entry, basic formatting, first-draft writing.",
          "Pattern recognition at scale — sorting, categorising, flagging anomalies in large datasets.",
          "First-pass research and summarisation — pulling together information that used to take hours manually.",
          "Routine customer support — answering common questions that don't require real judgment.",
        ],
      },
      {
        type: "heading",
        text: "What AI is still bad at replacing",
      },
      {
        type: "list",
        items: [
          "Judgment calls with incomplete or ambiguous information.",
          "Building trust and relationships with clients, teams, or stakeholders.",
          "Understanding context specific to your company, your customers, or your market.",
          "Creative direction — knowing what to make, not just how to make it faster.",
          "Accountability — someone still has to own the decision and its consequences.",
        ],
      },
      {
        type: "heading",
        text: "So what should you actually do about it?",
      },
      {
        type: "subheading",
        text: "1. Get hands-on with the tools, don't just read about them",
      },
      {
        type: "paragraph",
        text: "The gap isn't between people who use AI and people who don't, it's between people who understand its limits from direct experience and people who are guessing. Use it on real work. You'll learn faster what it's actually useful for than any explainer will tell you.",
      },
      {
        type: "subheading",
        text: "2. Move toward the judgment-heavy parts of your role",
      },
      {
        type: "paragraph",
        text: "If a chunk of your job is now faster because of AI, that's not a threat — it's freed-up time. The people who do well aren't the ones protecting the old way of working, they're the ones using the extra time to focus on the parts of the job that still need a human making a call.",
      },
      {
        type: "subheading",
        text: "3. Specialise in what's hard to automate",
      },
      {
        type: "paragraph",
        text: "Deep domain expertise, relationship management, and complex problem-solving in messy real-world situations remain hard to automate well. These are worth investing in regardless of how the tools evolve. If your business wants to explore where AI genuinely helps versus where it doesn't, that's exactly the kind of [practical automation assessment](/services) worth having before committing budget.",
      },
      {
        type: "heading",
        text: "The honest bottom line",
      },
      {
        type: "paragraph",
        text: "AI will change what your job looks like for most people, it already has. That's different from AI eliminating the need for you. The people most at risk aren't the ones in roles AI touches, they're the ones who refuse to learn how it works while everyone around them adapts. Curiosity, not panic, is the useful response here.",
      },
      {
        type: "links",
        text: "Explore more:",
        links: [
          { label: "See my projects", href: "/projects" },
          { label: "View my services", href: "/services" },
          { label: "Get in touch", href: "/contact" },
        ],
      },
    ],
  },
  {
    slug: "business-automation-ai-kenya",
    title: "Business Automation with AI: How I Can Help in Kenya",
    excerpt:
      "Most Kenyan SMEs don't need an enterprise AI strategy, they need three or four specific processes automated well. Here's what that actually looks like in practice.",
    date: "2026-02-20",
    readTime: "9 min",
    tags: ["AI", "Automation", "Kenya", "Business"],
    image: "/Automation.jpg",
    featured: false,
    content: [
      {
        type: "paragraph",
        text: "When business owners in Kenya hear 'AI automation', they often picture something built for a large enterprise with a dedicated tech team and a big budget. In reality, most of the highest-impact automation work I do is small, focused, and pays for itself within weeks, not massive systems, just the right processes handled well.",
      },
      {
        type: "heading",
        text: "Where automation actually makes sense for SMEs",
      },
      {
        type: "paragraph",
        text: "Not every process should be automated, and chasing automation for its own sake wastes money. The processes worth automating share a few traits: they're repetitive, they happen often, they're currently done manually, and mistakes in them cost time or money.",
      },
      {
        type: "list",
        items: [
          "Customer inquiries on WhatsApp or social media that follow predictable patterns — pricing questions, order status, common FAQs.",
          "Invoice generation, follow-ups, and payment reminders that currently rely on someone remembering to send them.",
          "Lead capture and qualification — sorting genuine buyers from browsers before a human spends time on the call.",
          "Inventory and stock alerts that are currently tracked in a spreadsheet someone updates inconsistently.",
          "Appointment or order scheduling that currently happens over back-and-forth phone calls or messages.",
        ],
      },
      {
        type: "callout",
        text: "The goal isn't to remove people from the process , it's to remove the repetitive parts of their job so they can spend time on the things that actually need a human: closing sales, handling exceptions, building relationships.",
      },
      {
        type: "heading",
        text: "What working together typically looks like",
      },
      {
        type: "list",
        items: [
          "A short conversation to map your actual day-to-day process — not a generic template, your specific bottlenecks.",
          "Identifying two or three high-impact automations rather than trying to overhaul everything at once.",
          "Building and testing with your team using real data, not a demo environment.",
          "Handover and training, so your team can run and adjust it without depending on me for every small change.",
        ],
      },
      {
        type: "heading",
        text: "Why start small",
      },
      {
        type: "paragraph",
        text: "A single well-built automation — say, an AI assistant that handles the first round of WhatsApp inquiries and only escalates genuine leads to a human — often changes a business's daily workload more than a large, complex system nobody fully understands. [KingsLanding AI](/projects) is a good example of this kind of focused, locally-run automation. Starting small also means you can see real results before committing more budget.",
      },
      {
        type: "heading",
        text: "Who this is for",
      },
      {
        type: "paragraph",
        text: "This work fits businesses that are busy enough to feel the pain of manual, repetitive processes, but not yet at the size where they have an internal tech team to build it themselves. If that sounds like where you are, I'd be glad to look at your specific process through a [free process review](/contact) and tell you honestly whether automation is worth it for you right now.",
      },
      {
        type: "links",
        text: "Explore more:",
        links: [
          { label: "See my projects", href: "/projects" },
          { label: "View my services", href: "/services" },
          { label: "Get in touch", href: "/contact" },
        ],
      },
    ],
  },
  {
    slug: "choosing-web-development-company-kenya",
    title: "How to Choose a Web Development Company or Freelancer in Kenya Without Falling for Hype",
    excerpt:
      "Flashy portfolios and big promises are everywhere. Here's what actually separates a developer who'll deliver from one who'll leave you with a broken site and a drained budget.",
    date: "2026-03-18",
    readTime: "9 min",
    tags: ["Web Development", "Kenya", "Business"],
    image: "/choose.avif",
    featured: false,
    content: [
      {
        type: "paragraph",
        text: "Nairobi's tech scene has no shortage of people who can build you a website, the harder part is telling apart the ones who'll actually deliver from the ones who talk a good game and disappear halfway through the project, or hand you something that breaks the moment real traffic hits it.",
      },
      {
        type: "heading",
        text: "Red flags to watch for",
      },
      {
        type: "list",
        items: [
          "No live examples of past work — a portfolio full of 'coming soon' links or screenshots instead of real, working sites.",
          "Prices that feel too good to be true for the scope you're describing — usually means corners get cut somewhere you won't notice until launch.",
          "Vague answers when you ask what tech stack they'll use, or why.",
          "No mention of hosting, maintenance, or what happens after launch — as if the relationship ends the day the site goes live.",
          "Heavy use of buzzwords ('AI-powered', 'next-gen') without being able to explain what that actually means for your specific business.",
        ],
      },
      {
        type: "callout",
        text: "A good developer can explain their decisions in plain language. If every answer to 'why this approach' is another buzzword, that's worth pausing on.",
      },
      {
        type: "heading",
        text: "What actually matters when evaluating someone",
      },
      {
        type: "subheading",
        text: "1. Ask to see live, working sites — not screenshots",
      },
      {
        type: "paragraph",
        text: "Open the actual site on your phone. Click around. Does it load quickly? Does it work on a slow connection, which is common across parts of Kenya? A polished screenshot tells you nothing about real-world performance. You can see [live, working projects](/projects) of mine for exactly this kind of check.",
      },
      {
        type: "subheading",
        text: "2. Ask who will actually do the work",
      },
      {
        type: "paragraph",
        text: "Some agencies sell the project then hand it to a junior developer or outsource it entirely. That's not automatically bad, but you should know upfront who you're really working with and who to contact when something needs fixing.",
      },
      {
        type: "subheading",
        text: "3. Get the scope in writing before any money changes hands",
      },
      {
        type: "paragraph",
        text: "What pages, what features, how many rounds of revisions, what happens if you want changes after launch — all of this should be written down. 'We'll build you a nice website' is not a scope, it's a way to have a disagreement later.",
      },
      {
        type: "subheading",
        text: "4. Ask about ongoing costs, not just the build price",
      },
      {
        type: "paragraph",
        text: "Domain renewal, hosting, SSL, and maintenance are recurring costs that some quotes conveniently leave out. A trustworthy developer tells you the full picture upfront, including what you'll need to budget for a year from now.",
      },
      {
        type: "subheading",
        text: "5. Check how they communicate before you commit",
      },
      {
        type: "paragraph",
        text: "How fast do they respond to your first inquiry? Do they ask clarifying questions about your business, or jump straight to a quote without understanding what you actually need? This is usually a preview of what working together will feel like, you're welcome to [test that out yourself](/contact) before committing to anything.",
      },
      {
        type: "heading",
        text: "Questions worth asking directly",
      },
      {
        type: "list",
        items: [
          "Can I see two or three live sites you've personally built, not just designed?",
          "What happens if I need a change three months after launch — is that included or billed separately?",
          "Who owns the code and the domain once the project is done?",
          "What's your timeline, and what happens if it slips?",
          "Will the site be built to load fast on mobile data, not just on your office WiFi?",
        ],
      },
      {
        type: "paragraph",
        text: "The cheapest option and the most expensive option are both risky for different reasons — the goal isn't finding the lowest price, it's finding someone who's clear, honest about tradeoffs, and has real, working proof of past delivery.",
      },
      {
        type: "links",
        text: "Explore more:",
        links: [
          { label: "See my projects", href: "/projects" },
          { label: "View my services", href: "/services" },
          { label: "Get in touch", href: "/contact" },
        ],
      },
    ],
  },
  {
    slug: "seo-rank-higher-increase-sales",
    title: "How SEO Can Rank Your Business Higher on Google and Increase Sales",
    excerpt:
      "Ranking on Google isn't magic — it's a set of specific, unglamorous things done consistently. Here's what actually moves the needle for a small or mid-sized business.",
    date: "2026-03-25",
    readTime: "9 min",
    tags: ["SEO", "Business", "Marketing"],
    image: "/seo.avif",
    featured: false,
    content: [
      {
        type: "paragraph",
        text: "Most business owners know they should 'do SEO' but aren't sure what that actually means beyond stuffing keywords into a page and hoping. Real SEO is a combination of technical setup, content that answers real questions, and consistent signals to Google that your site is trustworthy and it directly affects how much revenue comes through your site without paid ads.",
      },
      {
        type: "heading",
        text: "Why SEO matters for sales, not just traffic",
      },
      {
        type: "paragraph",
        text: "Ranking higher isn't the goal by itself, it's a means to an end. Someone searching 'web developer near me' or 'best catering services in Nairobi' is already looking to buy. Ranking for the right search terms puts you in front of people actively looking for what you sell, which converts far better than most other traffic sources.",
      },
      {
        type: "callout",
        text: "Paid ads stop the moment you stop paying. SEO compounds, a well-optimised page keeps bringing in traffic months and years after you published it.",
      },
      {
        type: "heading",
        text: "The core pillars of SEO that actually matter",
      },
      {
        type: "subheading",
        text: "1. Technical foundation",
      },
      {
        type: "paragraph",
        text: "Site speed, mobile responsiveness, and clean URL structure aren't optional extras  Google factors them directly into ranking. A slow site loses both search ranking and impatient visitors before they even see what you offer.",
      },
      {
        type: "subheading",
        text: "2. Content that actually answers a question",
      },
      {
        type: "paragraph",
        text: "Google's job is to serve the best answer to a search query. A page that genuinely, thoroughly answers 'how much does website design cost in Kenya' will outperform a page that vaguely mentions the topic in passing. Write for the person searching, not for a keyword count.",
      },
      {
        type: "subheading",
        text: "3. On-page optimisation",
      },
      {
        type: "paragraph",
        text: "Clear page titles, descriptive headings, and alt text on images help Google understand what a page is about and help it show your page for the right searches. This is unglamorous but consistently effective.",
      },
      {
        type: "subheading",
        text: "4. Local SEO for local businesses",
      },
      {
        type: "paragraph",
        text: "If you serve a specific area, a well-maintained Google Business Profile, consistent business name/address/phone details across the web, and location-specific content matter more than generic national keywords. Someone searching 'plumber in Kasarani' wants a local result, and Google knows that.",
      },
      {
        type: "subheading",
        text: "5. Internal linking and site structure",
      },
      {
        type: "paragraph",
        text: "Pages that link to each other in a sensible structure help both users and Google navigate your site, and pass authority between pages. A blog post linking to your services page tells Google that page is relevant and worth surfacing too this post links to my own [SEO and web development services](/services) for exactly that reason.",
      },
      {
        type: "heading",
        text: "What SEO progress actually looks like",
      },
      {
        type: "list",
        items: [
          "It's gradual — meaningful ranking improvements typically take a few months, not days.",
          "It compounds — each piece of good content and each fixed technical issue adds up over time.",
          "It's measurable — track rankings, organic traffic, and most importantly, conversions from organic visitors.",
          "It's ongoing — SEO isn't a one-time project, it's a habit built into how you publish and maintain your site.",
        ],
      },
      {
        type: "paragraph",
        text: "If your site currently gets little to no traffic from Google, the fastest wins are usually technical page speed, mobile usability, and basic on-page fixes — before investing heavily in new content. Fix the foundation first, then build on top of it.",
      },
      {
        type: "links",
        text: "Explore more:",
        links: [
          { label: "See my projects", href: "/projects" },
          { label: "View my services", href: "/services" },
          { label: "Get in touch", href: "/contact" },
        ],
      },
    ],
  },
  {
    slug: "landing-page-before-ads-nairobi-kasarani",
    title: "Running Google or Facebook Ads in Nairobi or Kasarani? Here's Why You Need a Landing Page First",
    excerpt:
      "Sending paid traffic to your homepage or Facebook page instead of a dedicated landing page is the single most common way businesses waste ad budget. Here's why it matters.",
    date: "2026-04-02",
    readTime: "7 min",
    tags: ["Ads", "Landing Pages", "Kenya", "Marketing"],
    image: "/ads.avif",
    featured: false,
    content: [
      {
        type: "paragraph",
        text: "I see the same pattern constantly with businesses running ads around Nairobi and Kasarani: they spend real money on Google or Facebook ads, then send that traffic to a generic homepage or a Facebook business page that wasn't built to convert. The ad does its job it gets clicks but the site does nothing with them.",
      },
      {
        type: "heading",
        text: "Why a homepage isn't enough",
      },
      {
        type: "paragraph",
        text: "A homepage is built to serve everyone ; new visitors, returning customers, people looking for different services. Someone who just clicked an ad for a specific offer has one intent, right now. A homepage forces them to hunt for what the ad promised, and most people won't bother they'll just leave.",
      },
      {
        type: "callout",
        text: "Every extra click or scroll between someone landing on your site and taking action loses a percentage of visitors. A landing page removes that friction entirely.",
      },
      {
        type: "heading",
        text: "What a proper landing page does differently",
      },
      {
        type: "list",
        items: [
          "Matches the ad exactly — the same offer, language, and image the person just clicked on, so there's no confusing mismatch.",
          "Has one clear action — call now, book a slot, fill a form — not five competing links pulling attention away.",
          "Removes navigation menus and distractions that let visitors wander off before converting.",
          "Loads fast on mobile data, since most ad traffic around Nairobi and Kasarani comes through phones on mobile networks.",
          "Includes trust signals — testimonials, past work, contact details — right where the decision is being made.",
        ],
      },
      {
        type: "heading",
        text: "A real-world comparison",
      },
      {
        type: "paragraph",
        text: "Picture two versions of the same ad campaign for a local service business. One sends clicks to the homepage, where visitors have to find the services page, then find contact details, then decide to reach out. The other sends clicks to a landing page with the exact service mentioned in the ad, a clear price range, and a single WhatsApp button. The second version consistently converts a far higher share of the same traffic same ad spend, meaningfully more customers.",
      },
      {
        type: "heading",
        text: "What to include on your landing page",
      },
      {
        type: "list",
        items: [
          "A headline that mirrors what the ad promised, word for word where possible.",
          "A short, specific description of the offer — not your whole company history.",
          "One obvious call-to-action, repeated at the top and bottom of the page.",
          "Proof — reviews, before/after examples, or recognisable past clients.",
          "A fast-loading, mobile-first layout with minimal distractions.",
        ],
      },
      {
        type: "paragraph",
        text: "If you're currently running or planning ads and sending that traffic anywhere other than a dedicated landing page built for that specific campaign, that's usually the fastest, cheapest fix available before spending another shilling on ad spend. I build [conversion-focused landing pages](/services) for exactly this situation.",
      },
      {
        type: "links",
        text: "Explore more:",
        links: [
          { label: "See my projects", href: "/projects" },
          { label: "View my services", href: "/services" },
          { label: "Get in touch", href: "/contact" },
        ],
      },
    ],
  },
  {
    slug: "mpesa-payment-integration-why-you-need-it",
    title: "M-Pesa Payment Integration: Why Your Business Needs One",
    excerpt:
      "If your customers are in Kenya, asking them to pay any other way than M-Pesa adds friction you don't need. Here's what integration actually involves and why it's worth it.",
    date: "2026-04-10",
    readTime: "8 min",
    tags: ["M-Pesa", "Payments", "Kenya", "Web Development"],
    image: "/currency.avif",
    featured: false,
    content: [
      {
        type: "paragraph",
        text: "M-Pesa is how the overwhelming majority of everyday payments happen in Kenya, from paying for groceries to settling invoices. If your website or app doesn't support it directly, you're asking customers to break their normal payment habit right at the exact moment they're ready to pay you, which is one of the easiest places to lose a sale.",
      },
      {
        type: "heading",
        text: "The problem with not having it",
      },
      {
        type: "paragraph",
        text: "Without direct M-Pesa integration, a common workaround is asking customers to pay via Paybill or Till number manually, then message you a screenshot or confirmation code for you to verify by hand. It technically works, but it's slow, error-prone, and doesn't scale past a handful of orders a day.",
      },
      {
        type: "callout",
        text: "Every manual step between 'I want to buy this' and 'I've paid' is a chance for the customer to change their mind or get distracted. Direct integration removes that gap entirely.",
      },
      {
        type: "heading",
        text: "What M-Pesa integration actually gives you",
      },
      {
        type: "list",
        items: [
          "Instant payment confirmation — no more manually checking messages and matching screenshots to orders.",
          "Automatic order or booking updates the moment payment clears, without anyone needing to check.",
          "A proper payment record and history you can search, export, and reconcile with your accounts.",
          "A faster, more trustworthy checkout experience that matches what customers already expect.",
          "Support for STK Push — the customer just gets a prompt on their phone to enter their PIN, no typing a till number manually.",
        ],
      },
      {
        type: "heading",
        text: "How the integration actually works",
      },
      {
        type: "paragraph",
        text: "It's built on Safaricom's Daraja API, which lets your website or app talk directly to M-Pesa. The most common flow for a website is STK Push: the customer enters their phone number, gets an instant payment prompt on their phone, enters their M-Pesa PIN, and your system receives a confirmation the moment it clears — all without leaving your site. [LegalEase](/projects) uses this exact STK Push flow in production.",
      },
      {
        type: "subheading",
        text: "What's needed to set it up",
      },
      {
        type: "list",
        items: [
          "A registered Paybill or Till number with Safaricom (business short code).",
          "Daraja API credentials from the Safaricom developer portal.",
          "A backend that can securely handle the API calls and callbacks — this isn't something that runs safely in the browser alone.",
          "A webhook or callback URL to receive and process payment confirmations automatically.",
        ],
      },
      {
        type: "heading",
        text: "Who this matters most for",
      },
      {
        type: "paragraph",
        text: "Any business taking repeated payments, e-commerce, bookings, subscriptions, service deposits,  benefits immediately. Even a business currently taking a handful of manual payments a week will notice the difference once verification stops being a manual, error-prone task.",
      },
      {
        type: "paragraph",
        text: "If you're building or already running a website that takes payments in Kenya, M-Pesa integration usually pays for itself quickly just in the time saved from manual reconciliation — before even counting the sales recovered from a smoother checkout. Have a look at my [M-Pesa integration service](/services) if you'd like this built into your own site.",
      },
      {
        type: "links",
        text: "Explore more:",
        links: [
          { label: "See my projects", href: "/projects" },
          { label: "View my services", href: "/services" },
          { label: "Get in touch", href: "/contact" },
        ],
      },
    ],
  },
  {
    slug: "full-stack-website-cost-kenya-2026",
    title: "How Much Does a Full-Stack Website Cost in Kenya? (Honest Full Guide 2026)",
    excerpt:
      "Prices in Kenya range from a few thousand shillings to well over a million, and the reasons why aren't always obvious. Here's an honest breakdown of what actually drives the cost.",
    date: "2026-04-18",
    readTime: "10 min",
    tags: ["Web Development", "Kenya", "Pricing"],
    image: "/website.avif",
    featured: true,
    content: [
      {
        type: "paragraph",
        text: "One of the most common questions I get is also the hardest to answer with a single number: how much should a website cost? The honest answer is 'it depends' — but that's not useful on its own, so here's what actually drives the price up or down, with realistic ranges for the Kenyan market in 2026.",
      },
      {
        type: "heading",
        text: "Why prices vary so much",
      },
      {
        type: "paragraph",
        text: "A basic template-based site and a custom full-stack web application with user accounts, payments, and a database are both technically 'a website', but they take wildly different amounts of time and skill to build. Price differences usually reflect real differences in complexity, not just who you're negotiating with.",
      },
      {
        type: "heading",
        text: "Rough price bands (2026, Kenyan market)",
      },
      {
        type: "list",
        items: [
          "Simple template-based site (a few pages, no custom features): lower end of the market, fastest turnaround, limited flexibility.",
          "Custom-designed business website (brand-matched design, contact forms, CMS for updating content): mid-range, most common choice for small and medium businesses.",
          "Full-stack web application (user accounts, database, custom logic, admin dashboard): significantly higher, reflects the engineering work involved, not just design.",
          "E-commerce with payment integration (M-Pesa, inventory, order management): similar to a full-stack application, often more depending on catalogue size and complexity.",
          "Ongoing maintenance and hosting: a recurring cost separate from the build price — budget for this regardless of which tier you choose.",
        ],
      },
      {
        type: "callout",
        text: "A quote with no breakdown of what's included is a red flag regardless of which price band it falls into. Ask exactly what pages, features, and revisions are covered before comparing numbers.",
      },
      {
        type: "heading",
        text: "What actually drives cost up",
      },
      {
        type: "subheading",
        text: "1. Custom functionality vs. templates",
      },
      {
        type: "paragraph",
        text: "A booking system, a custom dashboard, or an integration with M-Pesa or another API all require real backend development ; this is where most of the cost difference between a 'simple website' and a 'web application' comes from. [Creator-Lift](/projects) is a good real-world example of that level of complexity.",
      },
      {
        type: "subheading",
        text: "2. Design work",
      },
      {
        type: "paragraph",
        text: "A custom design built around your brand takes meaningfully longer than adapting an existing template, but it also results in a site that looks distinct rather than like dozens of others built off the same theme.",
      },
      {
        type: "subheading",
        text: "3. Content and copywriting",
      },
      {
        type: "paragraph",
        text: "If you need someone to also write the actual page content, not just build the structure, that's additional scope many quotes don't include by default.",
      },
      {
        type: "subheading",
        text: "4. Timeline",
      },
      {
        type: "paragraph",
        text: "Rushed timelines usually cost more , fitting a normal multi-week project into a few days means the developer is turning down other work or working unsustainable hours to hit your deadline.",
      },
      {
        type: "heading",
        text: "Questions to ask before comparing prices",
      },
      {
        type: "list",
        items: [
          "Does this price include hosting and domain setup, or are those separate?",
          "How many rounds of design revisions are included?",
          "Who writes the page content — is that included or extra?",
          "What happens after launch — is there a maintenance package, or am I on my own?",
          "Is this a fixed price for defined scope, or will it grow as we go?",
        ],
      },
      {
        type: "paragraph",
        text: "The cheapest quote and the most expensive quote for the 'same' website are rarely actually the same scope of work once you dig into what's included. The real question isn't 'what's the lowest price' — it's 'what am I actually getting for this price, and does it match what my business needs right now.' Happy to walk through your specific scope — [get in touch](/contact) and I'll give you a straight answer.",
      },
      {
        type: "links",
        text: "Explore more:",
        links: [
          { label: "See my projects", href: "/projects" },
          { label: "View my services", href: "/services" },
          { label: "Get in touch", href: "/contact" },
        ],
      },
    ],
  },
  {
    slug: "ai-automation-in-businesses",
    title: "AI Automation in Businesses: A Practical Overview",
    excerpt:
      "Not every business process should be automated with AI. Here's a grounded look at where it genuinely helps, where it doesn't, and how to tell the difference before you spend money finding out.",
    date: "2026-03-05",
    readTime: "10 min",
    tags: ["AI", "Automation", "Business Strategy"],
    image: "/aiauto.avif",
    featured: false,
    content: [
      {
        type: "paragraph",
        text: "AI automation gets talked about like a single thing you either 'have' or don't. In practice it's a toolkit — a set of techniques that solve very different problems, and applying the wrong one to the wrong process is how businesses end up with an expensive system nobody uses.",
      },
      {
        type: "heading",
        text: "The three categories that matter",
      },
      {
        type: "subheading",
        text: "1. Rule-based automation",
      },
      {
        type: "paragraph",
        text: "If a process follows clear, predictable logic ,if X happens, do Y,  you don't need AI at all. Simple rule-based automation is cheaper, more predictable, and easier to maintain. This covers things like automatic invoice reminders or status update emails.",
      },
      {
        type: "subheading",
        text: "2. AI-assisted automation",
      },
      {
        type: "paragraph",
        text: "This is where AI adds real value ; processes that involve unstructured input like natural language, images, or messy data that doesn't fit neat rules. Customer support chat, document summarisation, and lead qualification from free-form messages all fall here. [KingsLanding AI](/projects) is built entirely around this category, using a local RAG pipeline instead of a hosted API.",
      },
      {
        type: "subheading",
        text: "3. AI-augmented decision-making",
      },
      {
        type: "paragraph",
        text: "The most advanced tier , AI surfaces insights or recommendations, but a human still makes the final call. Demand forecasting, pricing suggestions, and fraud flagging are typical examples. This tier requires the most care, because the cost of a bad automated decision is highest here.",
      },
      {
        type: "heading",
        text: "How to evaluate whether a process is worth automating",
      },
      {
        type: "list",
        items: [
          "How often does this happen? Rare processes rarely justify the setup cost.",
          "How much does a mistake cost? High-stakes processes need more oversight built in, not less.",
          "Is the current process well understood? You can't automate a process nobody can clearly describe.",
          "Will this actually free up meaningful time, or just shift the work somewhere else?",
        ],
      },
      {
        type: "callout",
        text: "The most common automation failure isn't bad technology — it's automating a process that was broken in the first place. Fix the process, then automate it.",
      },
      {
        type: "heading",
        text: "What good AI automation looks like in practice",
      },
      {
        type: "paragraph",
        text: "It's boring, in the best way. It handles the repetitive 80% of a task reliably, flags the unusual 20% for a human, and gets quieter and more accurate over time as it sees more real cases. The businesses that get the most value treat it as an ongoing process to refine, not a one-time project to finish and forget.",
      },
      {
        type: "heading",
        text: "Getting started without overcommitting",
      },
      {
        type: "paragraph",
        text: "You don't need a full AI strategy to get value from automation. Pick the single most repetitive, most time-consuming process in your business right now, automate that one thing well, measure the actual time or cost saved, and decide from real evidence whether to expand from there. I offer a [focused automation audit](/services) if you'd rather start with a second opinion than guess.",
      },
      {
        type: "links",
        text: "Explore more:",
        links: [
          { label: "See my projects", href: "/projects" },
          { label: "View my services", href: "/services" },
          { label: "Get in touch", href: "/contact" },
        ],
      },
    ],
  },
  {
    slug: "jwt-oauth2-auth-patterns",
    title: "JWT vs sessions vs OAuth2: choosing the right auth pattern",
    excerpt:
      "Auth is one of those areas where the wrong choice compounds quietly until it's a crisis. I break down the tradeoffs with real examples from APIs I've built.",
    date: "2024-07-09",
    readTime: "10 min",
    tags: ["Security", "Node.js", "Auth"],
    image: "/authentication.avif",
    featured: false,
    content: [
      {
        type: "paragraph",
        text: "I've implemented authentication a dozen times across products of very different shapes — single-page apps, server-rendered sites, mobile backends, public APIs. The pattern that was right for one was wrong for another. Here's the framework I use to choose.",
      },
      {
        type: "heading",
        text: "Session-based auth",
      },
      {
        type: "paragraph",
        text: "Sessions store auth state on the server. The client gets a session ID cookie; the server looks up the session on every request. This is the oldest pattern and still the right one for traditional server-rendered web apps. Revocation is instant — delete the session and the user is logged out immediately. The downside: every request hits your session store (Redis or database), and horizontal scaling requires a shared store.",
      },
      {
        type: "callout",
        text: "Sessions are stateful — the server knows who is logged in. JWTs are stateless — the token itself carries the claim. That difference drives everything else.",
      },
      {
        type: "heading",
        text: "JWT (JSON Web Tokens)",
      },
      {
        type: "paragraph",
        text: "JWTs encode the user's claims in a signed token that the client stores and sends with every request. The server verifies the signature without a database lookup. This makes JWTs excellent for stateless, horizontally-scaled APIs and microservices — any server can verify any token without shared state. I use this exact pattern in [LegalEase](/projects), alongside OTP authentication for an added layer of verification.",
      },
      {
        type: "paragraph",
        text: "The well-known downside: you can't revoke a JWT before it expires. If a user's token is compromised, or you need to force-logout, you need a token blacklist — which reintroduces statefulness. For most applications, short expiry times (15 minutes) with refresh tokens is the right mitigation.",
      },
      {
        type: "code",
        language: "typescript",
        text: `// Signing a JWT with a short expiry + separate refresh token
const accessToken = jwt.sign(
  { userId: user.id, role: user.role },
  process.env.JWT_SECRET!,
  { expiresIn: '15m' }
);

const refreshToken = jwt.sign(
  { userId: user.id },
  process.env.REFRESH_SECRET!,
  { expiresIn: '7d' }
);`,
      },
      {
        type: "heading",
        text: "OAuth2 — for delegation, not just login",
      },
      {
        type: "paragraph",
        text: "OAuth2 is frequently misunderstood as just a 'login with Google' mechanism. It's actually an authorisation delegation protocol — it lets users grant your application access to their data on another service. If you're building a 'Sign in with Google' button, you want OAuth2 + OpenID Connect. If you're building a public API that other developers integrate against, you probably want OAuth2 for the API key/token flow. [Startup](/projects) uses GitHub OAuth2 for exactly this kind of frictionless sign-in.",
      },
      {
        type: "subheading",
        text: "Practical decision guide",
      },
      {
        type: "list",
        items: [
          "Server-rendered web app with a traditional backend: sessions.",
          "SPA or mobile app with your own API: JWT with short expiry + refresh tokens.",
          "Microservices architecture: JWT — services can verify tokens independently.",
          "Third-party login (Google, GitHub): OAuth2 + OpenID Connect.",
          "Public API for developer integrations: OAuth2 client credentials or API keys.",
          "Need instant revocation: sessions, or JWT with a blacklist (accepts the statefulness tradeoff).",
        ],
      },
      {
        type: "paragraph",
        text: "There's no universally correct answer. The pattern I see cause the most problems is using JWTs for a traditional web app where you actually need session semantics — instant revocation, server-side control — and then working backwards to add a blacklist that defeats the purpose of JWTs entirely.",
      },
      {
        type: "links",
        text: "Explore more:",
        links: [
          { label: "See my projects", href: "/projects" },
          { label: "View my services", href: "/services" },
          { label: "Get in touch", href: "/contact" },
        ],
      },
    ],
  },
  {
    slug: "react-performance-patterns",
    title: "React performance patterns I actually use in production",
    excerpt:
      "Not a theoretical overview — these are the patterns I reach for when profiling real apps. Covers memo, useMemo, code splitting, and a few less-obvious wins around context and state shape.",
    date: "2024-10-04",
    readTime: "9 min",
    tags: ["React", "Performance", "TypeScript"],
    image: "/react.avif",
    featured: false,
    content: [
      {
        type: "paragraph",
        text: "Performance optimisation in React has a reputation for being overengineered. Most of the time it is — the default rendering behaviour is fast enough and premature optimisation makes code harder to read. But there are situations where the profiler tells you something is genuinely slow, and you need to know what to reach for.",
      },
      {
        type: "callout",
        text: "Always profile before optimising. React DevTools Profiler will tell you which components are rendering, how often, and how long they take. Start there.",
      },
      {
        type: "heading",
        text: "memo — but only when the props are stable",
      },
      {
        type: "paragraph",
        text: "React.memo prevents a component from re-rendering when its props haven't changed. The catch: it only works if the props are referentially stable. Wrapping a component in memo while passing it a new object literal on every render does nothing.",
      },
      {
        type: "code",
        language: "tsx",
        text: `// memo does nothing here — new object every render
<ProductCard product={{ id, name, price }} />

// stable reference — memo works
const product = useMemo(() => ({ id, name, price }), [id, name, price]);
<ProductCard product={product} />`,
      },
      {
        type: "heading",
        text: "useMemo for expensive computations only",
      },
      {
        type: "paragraph",
        text: "useMemo is commonly overused. The overhead of memoization (cache lookup, dependency comparison) is real — for cheap computations, it's often slower than just running the function. I use it when the computation is genuinely expensive: filtering large arrays, running complex transformations, or building derived data structures.",
      },
      {
        type: "code",
        language: "tsx",
        text: `// Worth memoizing — expensive sort + filter on a large list
const sortedProducts = useMemo(() =>
  products
    .filter(p => p.category === activeCategory)
    .sort((a, b) => b.rating - a.rating),
  [products, activeCategory]
);`,
      },
      {
        type: "heading",
        text: "Context shape is the hidden performance lever",
      },
      {
        type: "paragraph",
        text: "Every component that consumes a context re-renders when any value in that context changes. If you put your entire app state in one context, every consumer re-renders on every state change. The fix is to split contexts by update frequency: auth state (rarely changes) in one context, UI state (changes often) in another.",
      },
      {
        type: "heading",
        text: "Code splitting with lazy and Suspense",
      },
      {
        type: "paragraph",
        text: "Route-level code splitting is the highest-leverage thing you can do for initial load performance. Each route becomes its own bundle, loaded only when the user navigates to it. Combined with a Suspense boundary and a skeleton loader, users see content faster and the app feels snappier.",
      },
      {
        type: "code",
        language: "tsx",
        text: `import { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Reports = lazy(() => import('./pages/Reports'));

function App() {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </Suspense>
  );
}`,
      },
      {
        type: "heading",
        text: "The one pattern that consistently surprises people",
      },
      {
        type: "paragraph",
        text: "Moving state down. When a piece of state only affects a subtree of components, keeping it at the top of the tree means every state change re-renders the whole tree. Pushing it down to the lowest common ancestor of the components that need it limits the re-render blast radius dramatically. It's not glamorous — no hooks, no memoization — but it's often the biggest win. It's the kind of detail-level work I apply across [my own production projects](/projects) too.",
      },
      {
        type: "list",
        items: [
          "Profile first — don't guess at what's slow.",
          "memo only helps with stable prop references.",
          "useMemo is worth it for genuinely expensive computations only.",
          "Split contexts by update frequency.",
          "Route-level code splitting is the highest-leverage initial load optimisation.",
          "Moving state down is underrated.",
        ],
      },
      {
        type: "links",
        text: "Explore more:",
        links: [
          { label: "See my projects", href: "/projects" },
          { label: "View my services", href: "/services" },
          { label: "Get in touch", href: "/contact" },
        ],
      },
    ],
  },
  {
    slug: "microservices-node-docker",
    title: "Microservices with Node.js and Docker: a practical guide",
    excerpt:
      "Breaking a monolith is easy. Breaking it well is hard. I walk through the decisions we made migrating a 80k-line Express app to microservices — what worked, what didn't, and what I'd do differently.",
    date: "2024-11-18",
    readTime: "12 min",
    tags: ["Node.js", "Docker", "Architecture"],
    image: "/docker.jpg",
    featured: true,
    content: [
      {
        type: "paragraph",
        text: "About eight months ago, our team inherited a Node.js monolith that had been growing for four years. 80,000 lines of Express code, a single PostgreSQL database, and a deployment process that required manual steps and a steady hand. It worked — but it was starting to crack under the weight of its own success.",
      },
      {
        type: "heading",
        text: "Why we decided to break it up",
      },
      {
        type: "paragraph",
        text: "The honest answer isn't 'microservices are better'. It's that the monolith had specific, concrete problems: a slow test suite (14 minutes), deploy anxiety because any change could break unrelated features, and two teams stepping on each other's code constantly. Microservices weren't the goal — solving those problems was.",
      },
      {
        type: "callout",
        text: "Don't migrate to microservices because they're fashionable. Migrate because you have a specific organisational or technical problem that the monolith is actively making worse.",
      },
      {
        type: "heading",
        text: "The strangler fig pattern",
      },
      {
        type: "paragraph",
        text: "We didn't rewrite. We used the strangler fig pattern — standing up new services alongside the monolith and routing traffic to them incrementally. The monolith stayed alive and serving requests while we carved pieces off it. This meant zero big-bang migrations and a path to roll back any service at any time.",
      },
      {
        type: "subheading",
        text: "Service boundaries: where we got it wrong first",
      },
      {
        type: "paragraph",
        text: "Our first instinct was to split by technical layer: a 'user service', a 'notification service', a 'data service'. This was a mistake. Services split by technical concern end up chatty and tightly coupled — our notification service had to call the user service for almost every operation. We reorganised around business domains instead: auth, billing, inventory, fulfilment. Each service owned its own data and its own domain logic.",
      },
      {
        type: "heading",
        text: "Docker setup that actually works in production",
      },
      {
        type: "paragraph",
        text: "Every service gets its own Dockerfile with a multi-stage build. The builder stage installs all dependencies and compiles TypeScript. The production stage copies only the compiled output and production node_modules. This kept our images under 150MB.",
      },
      {
        type: "code",
        language: "dockerfile",
        text: `FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS production
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["node", "dist/index.js"]`,
      },
      {
        type: "paragraph",
        text: "Docker Compose handles local development. Each service can be run in isolation or as part of the full stack. We use a shared network and internal DNS so services talk to each other by name rather than hardcoded ports.",
      },
      {
        type: "heading",
        text: "Inter-service communication",
      },
      {
        type: "paragraph",
        text: "We use HTTP for synchronous requests where the caller needs an immediate response (most reads) and a message queue (RabbitMQ) for async events where the caller doesn't need to wait. The rule: if you're changing state and don't need an immediate reply, publish an event. If you need data right now, make an HTTP call. The [WebSocket messaging system](/projects) I built uses a similar split, with Kafka handling the async event stream.",
      },
      {
        type: "subheading",
        text: "What I'd do differently",
      },
      {
        type: "list",
        items: [
          "Start with a shared library for common concerns (logging, error handling, auth middleware) earlier. We spent weeks solving the same problems in each service.",
          "Set up distributed tracing from day one. Debugging a request that touches four services is very different from debugging a monolith.",
          "Be more aggressive about defining service contracts upfront. Late-stage interface changes are painful when the consumer is another team's service.",
          "Don't migrate the database last. Data ownership boundaries are the hardest part — do that thinking early, even if you keep a shared DB temporarily.",
        ],
      },
      {
        type: "paragraph",
        text: "Six months after the first service went live, our test suite for the auth service runs in 90 seconds. Teams deploy independently three or four times a day. The monolith still serves some routes — and that's fine. A partial migration that solves the real problem is better than a complete migration that misses the point.",
      },
      {
        type: "links",
        text: "Explore more:",
        links: [
          { label: "See my projects", href: "/projects" },
          { label: "View my services", href: "/services" },
          { label: "Get in touch", href: "/contact" },
        ],
      },
    ],
  },
  {
    slug: "mongodb-schema-design",
    title: "MongoDB schema design: when to embed and when to reference",
    excerpt:
      "The most common mistake I see with MongoDB is treating it like a relational database — or the opposite, embedding everything. Here's the mental model I use to make that call.",
    date: "2024-08-21",
    readTime: "7 min",
    tags: ["MongoDB", "Database", "Architecture"],
    image: "/storage.jpg",
    featured: false,
    content: [
      {
        type: "paragraph",
        text: "MongoDB gives you a choice that relational databases don't: whether to store related data embedded inside a document or as a separate document with a reference. Most teams pick one approach and apply it everywhere. That's the mistake.",
      },
      {
        type: "heading",
        text: "The rule of thumb",
      },
      {
        type: "paragraph",
        text: "Embed when you almost always access the data together and the embedded data belongs to exactly one parent. Reference when the data is accessed independently, shared across multiple parents, or could grow without bound.",
      },
      {
        type: "callout",
        text: "Design your schema around your query patterns, not your data relationships. MongoDB rewards you for modelling data the way you read it.",
      },
      {
        type: "heading",
        text: "When to embed",
      },
      {
        type: "paragraph",
        text: "A blog post's comments — if you always load them with the post — are a good embed candidate. An order's line items belong entirely to that order and are always loaded together. A user profile's address is read every time you read the user. These are natural embeds.",
      },
      {
        type: "code",
        language: "javascript",
        text: `// Good embed — address is part of the user, always read together
{
  _id: ObjectId("..."),
  name: "Eugene Maina",
  email: "eugene@example.com",
  address: {
    street: "Ngong Road",
    city: "Nairobi",
    country: "KE"
  }
}`,
      },
      {
        type: "heading",
        text: "When to reference",
      },
      {
        type: "paragraph",
        text: "A blog post's author should be a reference — the author document is accessed independently, updated separately, and shared across many posts. If you embed the author inside every post, updating their profile means updating hundreds of documents. A reference means one update.",
      },
      {
        type: "code",
        language: "javascript",
        text: `// Good reference — author exists independently, shared across posts
{
  _id: ObjectId("..."),
  title: "MongoDB schema design",
  authorId: ObjectId("author-doc-id"), // reference
  tags: ["MongoDB", "Database"]        // small, bounded — embed fine
}`,
      },
      {
        type: "subheading",
        text: "The unbounded array problem",
      },
      {
        type: "paragraph",
        text: "MongoDB documents have a 16MB size limit. If you embed an array that can grow without bound — user activity events, chat messages — you'll eventually hit it. Reference those. A useful heuristic: if you can't predict the maximum number of items in an array, don't embed it.",
      },
      {
        type: "heading",
        text: "The hybrid approach",
      },
      {
        type: "paragraph",
        text: "Often the right answer is hybrid. Embed the fields you always need, reference the rest. A product document might embed the primary category name (displayed everywhere) but reference the full category document (only needed on the category page). You get the query performance of embedding without the data management overhead. [Creator-Lift](/projects) uses this exact hybrid pattern across its PostgreSQL and Redis layers.",
      },
      {
        type: "list",
        items: [
          "Embed when data is always accessed together and belongs to one parent.",
          "Reference when data is shared, accessed independently, or can grow without bound.",
          "Avoid embedding arrays that have no practical upper bound.",
          "Use the extended reference pattern: embed the fields you always need, reference the full document.",
          "Benchmark your actual queries — sometimes the 'wrong' choice performs fine for your access pattern.",
        ],
      },
      {
        type: "links",
        text: "Explore more:",
        links: [
          { label: "See my projects", href: "/projects" },
          { label: "View my services", href: "/services" },
          { label: "Get in touch", href: "/contact" },
        ],
      },
    ],
  },
  {
    slug: "ci-cd-github-actions",
    title: "CI/CD for Node.js apps with GitHub Actions",
    excerpt:
      "A step-by-step walkthrough of the pipeline setup I use across most of my projects — test, lint, build, Docker push, and zero-downtime deploy to a VPS.",
    date: "2024-05-30",
    readTime: "8 min",
    tags: ["DevOps", "Docker", "CI/CD"],
    image: "/pipeline.avif",
    featured: false,
    content: [
      {
        type: "paragraph",
        text: "A good CI/CD pipeline is one of the highest-leverage things you can set up at the start of a project. It catches issues before they reach production, removes the manual steps that cause deploy anxiety, and lets you ship with confidence at any point. Here's the setup I use on most Node.js projects, including [several of my own](/projects).",
      },
      {
        type: "heading",
        text: "Pipeline overview",
      },
      {
        type: "paragraph",
        text: "The pipeline has two stages. The CI stage runs on every push and pull request: it installs dependencies, runs the linter, runs tests, and builds the Docker image to verify it compiles. The CD stage runs only on pushes to main: it builds and pushes the Docker image to a registry, then deploys to the VPS with a zero-downtime rolling update.",
      },
      {
        type: "heading",
        text: "The CI workflow",
      },
      {
        type: "code",
        language: "yaml",
        text: `name: CI

on:
  push:
    branches: ["*"]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - run: npm ci
      - run: npm run lint
      - run: npm test
      - run: docker build -t app:test .`,
      },
      {
        type: "paragraph",
        text: "The Node setup action with cache: npm caches the node_modules between runs. On a typical project this drops install time from 45 seconds to under 5. Worth the one-line addition.",
      },
      {
        type: "heading",
        text: "The CD workflow",
      },
      {
        type: "code",
        language: "yaml",
        text: `name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Build and push image
        run: |
          echo \${{ secrets.REGISTRY_TOKEN }} | docker login ghcr.io -u \${{ github.actor }} --password-stdin
          docker build -t ghcr.io/kuria300/app:\${{ github.sha }} .
          docker push ghcr.io/kuria300/app:\${{ github.sha }}

      - name: Deploy to VPS
        uses: appleboy/ssh-action@v1
        with:
          host: \${{ secrets.VPS_HOST }}
          username: deploy
          key: \${{ secrets.VPS_SSH_KEY }}
          script: |
            docker pull ghcr.io/kuria300/app:\${{ github.sha }}
            docker stop app || true
            docker rm app || true
            docker run -d --name app -p 3000:3000 \\
              --env-file /etc/app/.env \\
              ghcr.io/kuria300/app:\${{ github.sha }}`,
      },
      {
        type: "subheading",
        text: "Zero-downtime with a reverse proxy",
      },
      {
        type: "paragraph",
        text: "The script above has a brief downtime window between stop and start. For zero-downtime, I run two containers behind Nginx and update them one at a time. Alternatively, if you're on Docker Compose, a docker compose up -d --no-deps app triggers a rolling replace with a configurable health check.",
      },
      {
        type: "heading",
        text: "Secrets management",
      },
      {
        type: "list",
        items: [
          "Store all secrets in GitHub Actions repository secrets — never in the workflow file.",
          "Use a dedicated deploy SSH key (no passphrase) with restricted permissions on the VPS.",
          "Environment variables on the VPS live in /etc/app/.env, readable only by the deploy user.",
          "Rotate the registry token and SSH key on a schedule, or on any team member departure.",
        ],
      },
      {
        type: "paragraph",
        text: "This pipeline covers 90% of Node.js projects. Add a staging deploy step between CI and production for anything customer-facing — deploy to staging on every merge to main, and promote to production via a manual workflow dispatch or tag. If you'd like this set up on your own project, [get in touch](/contact) and I can walk you through it.",
      },
      {
        type: "links",
        text: "Explore more:",
        links: [
          { label: "See my projects", href: "/projects" },
          { label: "View my services", href: "/services" },
          { label: "Get in touch", href: "/contact" },
        ],
      },
    ],
  },
];