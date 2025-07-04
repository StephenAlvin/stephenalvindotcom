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
    id: 2,
    slug: "life-after-firejet",
    title: "Life After FireJet",
    excerpt: "What's next for me?",
    date: "23 June, 2025",
    readTime: 4,
    coverImage: "/whats-next.png",
    content: `

It's been a month since I stopped working on FireJet full-time.

(for context FireJet was a B2C SAAS that I worked on for 3 years but didn't work out as well as I intended, you can see the full story [here](/blogs/three-years-ten-pivots))

I thought I'd feel more relieved. In some ways I do—there's more space in my head, fewer things on fire. But I also feel a bit aimless.

Right now I'm doing a small freelance gig, about 6 hours a week. It pays decently, and with the continued revenue still coming in from FireJet, I'm not exactly struggling. Which sounds like a good thing.

But I've come to realise that just _getting by_ is dangerous.

## The comfort trap

The problem isn't that I'm burnt out. It's that I'm _comfortable_. Too comfortable.

Some days I find myself taking too long a break. I'll blink and half the day's gone. Other days I try to build small tools—I made iamlockedin.com recently and somehow it made it to the front page of Hacker News. Now there are around 20 people using it every day, which is kind of wild.

That felt good. Like I was back in the game, even if just for a moment.

But then the next morning, I went back to doing… nothing.

## Considering the options

I've thought about a few paths. Starting a faceless social channel. Applying to programs like Iterative (their deadline for the next program is end of week). Going all-in on indie hacking—maybe launching more tools and seeing where that goes. What about just reading a bunch of books to upskill my business and marketing skills? Or maybe just getting a job as a PM somewhere and taking a year to breathe and figure things out.

I don't know. I'm in between things.

There's a part of me that misses the intensity of building FireJet. Even if it was hard, at least I knew what I was doing every day. Now I'm floating a bit.

## Being kind to myself

But I'm also trying to be kind to myself. Maybe this break is something I need. Maybe I don't need to have it all figured out right now.

We'll see.
    `,
    tags: ["Personal Update", "Self-reflection", "Career"],
  },
  {
    id: 1,
    slug: "three-years-ten-pivots",
    title: "3 years, 10 pivots, and a final blow from Figma",
    excerpt: "The full story of my journey with FireJet",
    date: "3 June, 2025",
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
    tags: ["Startup", "Lessons Learned", "Self-reflection"],
  },
];
