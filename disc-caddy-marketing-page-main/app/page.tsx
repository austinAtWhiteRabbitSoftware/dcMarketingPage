import { CloserLook } from "@/components/closer-look";
import { FeatureBand } from "@/components/feature-band";
import { Hero } from "@/components/hero";
import { HighlightsScroll } from "@/components/highlights-scroll";
import { KeepExploring } from "@/components/keep-exploring";
import { LoveStatement } from "@/components/love-statement";
import { DiscFlyBy } from "@/components/remotion/disc-fly-by";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StatsBand } from "@/components/stats-band";
import { TechSpecs } from "@/components/tech-specs";
import { WhyDiscCaddy } from "@/components/why-disc-caddy";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />

        <HighlightsScroll />

        <LoveStatement />

        <CloserLook />

        <FeatureBand
          id="caddy"
          eyebrow="Smart caddy"
          headline={
            <>
              Optimize
              <br />
              every throw.
            </>
          }
          sub="Calling all players. Disc Caddy turns your bag, the hole in front of you, and the wind at your back into one clear recommendation — so you can commit to the line instead of second-guessing it."
          hero={{
            src: "/images/marketing/course-throw.png",
            alt: "Player setting up a throw on a wooded fairway",
            aspectClassName: "aspect-[16/9] md:aspect-[2.2/1]",
          }}
          features={[
            {
              title: "A caddy you can trust.",
              body: "Recommendations tuned to distance, line, and conditions — the story the hole is telling, translated into the plastic you actually bag.",
            },
            {
              title: "Learns how you throw.",
              body: "The caddy maps your arm, not a forum tier list. Good calls build confidence, and confidence builds rounds you want to repeat.",
            },
            {
              title: "Works with one hand.",
              body: "Open the app, see the disc, throw it. The card stays out of your way until you need to log the result.",
            },
            {
              title: "Always in context.",
              body: "Prompts timed to the shot you are about to take, not only the drive home. Less spreadsheet energy, more clarity.",
            },
            {
              title: "Reasons, not just picks.",
              body: "Every recommendation shows the why. You learn the game while you play it.",
            },
            {
              title: "Offline-first.",
              body: "Courses, your bag, and past rounds travel with you into the trees. No signal, no problem.",
            },
          ]}
        />

        <StatsBand />

        <DiscFlyBy direction="ltr" />

        <FeatureBand
          id="insights"
          eyebrow="Insights"
          headline={
            <>
              The story
              <br />
              of your round.
            </>
          }
          sub="Most apps hand you a recap. Disc Caddy stays with you for what happens next — the line you pick, the disc you trust, and the habits that are starting to pay off."
          hero={{
            src: "/images/marketing/tournament-putt.png",
            alt: "Competitive disc golf putt toward a basket",
            aspectClassName: "aspect-[16/9] md:aspect-[2.2/1]",
          }}
          tone="light"
          features={[
            {
              title: "Find your Power Zones.",
              body: "See where your bag is reliable and where it leaks strokes. Park it, punish it, or practice it — your call.",
            },
            {
              title: "Track your training load.",
              body: "Rounds, field work, and putting reps in one place. Know when to push and when the bag needs a rest.",
            },
            {
              title: "Watch your lines on iPhone.",
              body: "Start a round on your watch, finish the card on your phone, and see the whole map in one view afterward.",
            },
            {
              title: "Race your past self.",
              body: "Replay your best round on a course and see, hole by hole, where you are ahead or behind your last time.",
            },
            {
              title: "Streaks that matter.",
              body: "Up-shot saves, fairway hits, and C1 makes — the small wins that actually compound. Named the way you would.",
            },
            {
              title: "Plays well with others.",
              body: "Export to UDisc or your favorite stat tool. Your data is yours to take wherever you play next.",
            },
          ]}
        />

        <DiscFlyBy direction="rtl" delayMs={200} />

        <FeatureBand
          id="friends"
          eyebrow="Together"
          headline={
            <>
              The people who text you
              <br />
              about plastic.
            </>
          }
          sub="Disc golf is better with your crew. Keep rounds, leagues, and low-stakes competition in one place. Fun first, structure when you want it."
          hero={{
            src: "/images/marketing/group-selfie.png",
            alt: "A group of friends at an outdoor disc golf course",
            aspectClassName: "aspect-[16/9] md:aspect-[2.2/1]",
          }}
          features={[
            {
              title: "Shared cards, no logins.",
              body: "Send a link. Everyone sees the live scorecard, the hole, and the running banter — even friends who do not use the app.",
            },
            {
              title: "Leagues, without the ops.",
              body: "Spin up a season in minutes. Handicaps, divisions, and a round recap that writes itself.",
            },
            {
              title: "A group chat, not a feed.",
              body: "Keep the banter next to the score. No algorithm, no random pros, just your crew.",
            },
            {
              title: "Roll call.",
              body: "See who is in for the weekend with one tap. The app counts heads; you pick the course.",
            },
            {
              title: "Rematch energy.",
              body: "Course-specific head-to-heads, so the playful rivalries get the long memory they deserve.",
            },
            {
              title: "Low stakes. High fun.",
              body: "Keep score only when you want to. Some rounds are meant to be walks with your people.",
            },
          ]}
          tone="light"
        />

        <WhyDiscCaddy />

        <TechSpecs />

        <KeepExploring />
      </main>
      <SiteFooter />
    </>
  );
}
