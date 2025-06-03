export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: number;
  coverImage: string;
  content: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "weekend-build-hacker-news-front-page",
    title: "My weekend project Hacker News front page",
    excerpt: "100+ upvotes and over 4k visitors in 12 hours",
    date: "March 15, 2024",
    readTime: 4,
    coverImage: "/weekend-build-hacker-news-front-page.jpeg",
    content: `

I've always struggled to stay focused. Most productivity tools felt too heavy or distracting — the irony wasn't lost on me.

Over the weekend, I decided to vibe code something simple for myself: a black-and-white timer with white noise. No login, no bells and whistles, just a quiet space to focus and track my hours.

I built it for me, but figured others might find it useful too.

I wasn't expecting much when I posted it, but it ended up making the front page of Hacker News with 100+ upvotes and over 4k visitors in 12 hours. 😳

Here's the hackernews link: https://news.ycombinator.com/item?id=44095176

The PostHog chart was wild to watch — traffic spiking like crazy from people who, like me, just wanted something simple to help them focus.

I spent years building complex tools, but this basic timer resonated with thousands of people.

I even had someone asking me if the online users feature was broken - The counter jumped from 50 to 100.

You can try it at https://iamlockedin.com — it's free.

If it helps even one more person stay focused, that's a win.
    `,
    tags: ["Side Project", "Productivity", "Hacker News"]
  },
  {
    id: 1,
    slug: "three-years-ten-pivots",
    title: "3 years, 10 pivots, and a final blow from Figma",
    excerpt: "My FireJet story",
    date: "March 20, 2024",
    readTime: 7,
    coverImage: "/three-years-ten-pivots.png",
    content: `

3 years ago, my co-founder and I tried to solve something we kept running into during freelance work: turning Figma designs into code was slower than we'd like.

We weren't the first to tackle this, but we thought we could do it differently. The existing plugins we found weren't quite meeting our needs, so we built a simple MVP and shared it on Reddit. To our surprise, someone actually paid for it within three days.

The first year was encouraging. We were gaining users steadily and seeing some revenue growth. It felt like we might be onto something, though we knew we had a long way to go.

## Learning the hard way

As we dug deeper, we realized the challenge was bigger than we'd anticipated. Figma's flexibility—which makes it great for designers—made it incredibly difficult to generate consistent, production-ready code. Everyone designs differently, and accounting for all those variations turned out to be quite the technical puzzle.

We also noticed that even when people liked what we built, they didn't use it regularly. Design-to-code seemed to be more of an occasional need than a daily workflow tool.

## The learning process

Over the next couple of years, we tried different approaches—maybe 10 different directions in total. Each pivot taught us something new about the problem space. One attempt was a no-code builder that let you design and code simultaneously. It showed promise but would have required years of development that we couldn't afford.

During this time, we were fortunate to build a small but engaged community of about 20 regular users who gave us honest feedback. Their insights were invaluable—they helped us understand what was working and what wasn't. These conversations kept us grounded and focused on real user needs rather than what we thought people wanted.

At our best, we reached around $7k MRR and had over 50k downloads, which felt good but we knew retention was still our biggest challenge.

## One last attempt

Our final approach was an AI chatbot within Figma that could answer design questions and modify components. It felt like a natural evolution of what we'd learned, and honestly, I was optimistic about the direction.

Then Figma announced they were building something very similar. While we'd been working on our version for months, it became clear that competing directly with the platform we were built on wasn't going to work out in our favor.

My co-founder decided to move on to a full-time role, and I took some time to reflect on what we'd learned.

## What I'm taking away

A few things I'll keep in mind for next time:

1. Building on someone else's platform comes with inherent risks that are worth planning for early on.

2. It's tempting to keep pushing when something "almost" works, but sometimes the honest answer is that the approach needs to change.

3. Consistent revenue can feel like progress, but it's not the same as finding true product-market fit.

4. Those 20 engaged users who gave us regular feedback were worth more than thousands of casual users. I should have focused more on building that community earlier.

## Moving forward

Despite how it ended, I'm grateful for the experience. We bootstrapped the entire journey—no external funding, no complicated cap tables. When we decided to wind down, it was a clean decision between two founders.

The product is still running and generating some revenue, which we'll maintain as a side project. As for me, I'm back to building solo and exploring new ideas, carrying these lessons forward.
    `,
    tags: ["Startup", "Lessons Learned", "Self-reflection"]
  },
];