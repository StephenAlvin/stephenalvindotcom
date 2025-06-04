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
    date: "28 May 2025",
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
    id: 2,
    slug: "three-years-ten-pivots",
    title: "3 years, 10 pivots, and a final blow from Figma",
    excerpt: "My FireJet story",
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
    tags: ["Startup", "Lessons Learned", "Self-reflection"]
  },
  {
    id: 3,
    slug: "from-macritchie-to-bukit-timah",
    title: "From MacRitchie to Bukit Timah: Finding peace in 163 meters",
    excerpt: "How Singapore's trails taught me to slow down and breathe",
    date: "20 May 2025",
    readTime: 6,
    coverImage: "/from-macritchie-to-bukit-timah.webp",
    content: `

I never thought I'd become someone who wakes up at 6 AM on weekends to walk up a hill.

Yet here I am, three years later, with muddy shoes permanently by my door and a growing collection of trail maps scattered across my desk. What started as a desperate attempt to get some exercise has quietly become the thing that keeps me grounded.

## The accidental beginning

It was early 2021, and I was spending way too much time hunched over my laptop working on FireJet. My back ached, my eyes were tired, and I felt like I hadn't taken a proper breath in months. A friend mentioned MacRitchie Reservoir as a nice place to walk, so I figured I'd give it a shot.

That first trip was humbling. I took the boardwalk route—the easy one—and still felt winded after an hour. But something about being surrounded by green instead of screens felt... necessary. The quiet rustle of leaves, the occasional monkey sighting, the simple rhythm of putting one foot in front of the other.

I went back the following weekend. Then the weekend after that.

## Learning to see

What I didn't expect was how much there was to discover. Singapore has this reputation for being all concrete and shopping malls, but spend enough time on the trails and you realize how wrong that assumption is.

Each trail has its own personality. MacRitchie's TreeTop Walk feels like you're floating above the canopy. The Rail Corridor takes you through forgotten corners of Singapore's history. Bukit Timah—all 163 meters of it—might not be impressive by global standards, but those steel steps up Jungle Fall Path will humble you pretty quickly.

I started keeping notes. Not in any organized way, just observations: which trails were less crowded on Sunday mornings, where I'd spotted the most wildlife, which routes challenged me without completely destroying my knees.

## The unexpected community

One thing led to another, and I found myself documenting these trails more systematically. It started as simple notes for myself, then grew into something I thought might help other people discover what I'd stumbled into.

That's how HikeWithMe.sg came about. Not as a business plan or grand vision, but as a way to share the trails that had become such an important part of my routine. The response surprised me—turns out there are plenty of other people looking for an excuse to spend their weekends in the woods instead of the mall.

The website gets modest traffic, maybe a few hundred visitors a week. But every so often, someone emails to say they tried a trail I'd written about, or that they'd never known about Chestnut Nature Park's mountain biking trails. Those messages remind me why I started documenting these walks in the first place.

## What the trails taught me

There's something about hiking that cuts through the noise. No notifications, no urgent emails, just the immediate reality of the next step. It's meditative in a way I never expected.

During those intense FireJet months, the trails became my reset button. A weekend morning at Sungei Buloh would remind me there was a world beyond product-market fit and user retention. The physical challenge of climbing up to North View Hut helped clear the mental fog of endless pivots and strategy discussions.

I learned to appreciate the small victories: making it up Bukit Timah's main slope without stopping, spotting a kingfisher at Bishan-Ang Mo Kio Park, or finally completing the full Coast-to-Coast trail. These achievements felt more tangible than many of the metrics I was tracking in my startup.

## The rhythm of it all

Three years in, hiking has become less about fitness and more about rhythm. There's something grounding about having a weekend routine that exists entirely outside the digital world. My body knows the feeling of Bukit Timah's steep slopes, my mind recognizes the particular quiet of early morning at Coney Island.

It's made me more patient, I think. When you're used to measuring progress in steps up a hill, you start to understand that worthwhile things take time. You learn to appreciate the process, not just the summit.

The irony isn't lost on me that my most successful "side project" these days might be a simple website about walking around Singapore. No complex features, no growth hacking, just useful information about trails that exist whether anyone reads about them or not.

## Moving forward, one step at a time

I'm still that person who wakes up early on weekends to walk up hills. The difference now is that I know why I do it, and I'm grateful for the accident that led me here.

Singapore's trails won't solve your problems or change your life overnight. But they'll give you space to think, fresh air to breathe, and maybe—if you're paying attention—a reminder that some of the best discoveries happen when you're not trying so hard to find them.

Next weekend, I'll probably wake up early and head out to explore a new section of the Rail Corridor. Not because I have to, but because I can't imagine starting the week any other way.
    `,
    tags: ["Outdoors", "Singapore", "Self-reflection", "Side Project"]
  }
];