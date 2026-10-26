import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16 md:py-24">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-8 text-3xl font-semibold tracking-tight text-foreground">
          Hassan El Mghari
        </h1>

        <div className="space-y-6 text-base leading-relaxed text-foreground">
          <p>
            I'm a developer living in New York City. I love building open source
            AI apps and teaching developers about AI – and I'm lucky enough that
            I get to do both for work.
          </p>

          <p>
            Currently, I lead Developer Experience at{" "}
            <Link
              href="https://togetherai.link/?utm_source=personal-site&utm_medium=referral&utm_campaign=example-app"
              target="_blank"
              className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
            >
              Together AI
            </Link>{" "}
            where I manage a talented team and work on demos, docs, and content.
            Before that, I worked at a few startups like Vercel and ran my own
            game marketing company for a while too.
          </p>

          <p>Some of my popular open source apps:</p>

          <ul className="ml-6 space-y-1 list-disc">
            <li>
              <Link
                href="https://roomgpt.io"
                className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
                target="_blank"
              >
                RoomGPT
              </Link>{" "}
              – AI interior designer (10k stars, 12M visitors)
            </li>
            <li>
              <Link
                href="https://restorephotos.io"
                className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
                target="_blank"
              >
                RestorePhotos
              </Link>{" "}
              – AI image restoration (4k stars, 5M visitors)
            </li>
            <li>
              <Link
                href="https://llamacoder.io/"
                className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
                target="_blank"
              >
                LlamaCoder
              </Link>{" "}
              – prompt to app generator (6k stars, 2M visitors)
            </li>
            <li>
              <Link
                href="https://blinkshot.io"
                className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
                target="_blank"
              >
                BlinkShot
              </Link>{" "}
              – realtime image generator (1k stars, 1.5M visitors)
            </li>
            <li>
              <Link
                href="https://self.so"
                className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
                target="_blank"
              >
                Self.so
              </Link>{" "}
              – LinkedIn to website generator (2k stars, 80k visitors)
            </li>
            <li>
              <Link
                href="https://github.com/nutlope/aicommits"
                className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
                target="_blank"
              >
                AI Commits
              </Link>{" "}
              – Commit messages with AI (8k stars, 40k on npm)
            </li>
          </ul>

          <p>
            In my spare time, I enjoy playing ping pong and hanging out with my
            wonderful wife.
          </p>

          <p>
            You can find me online on{" "}
            <Link
              href="https://x.com/nutlope"
              className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
              target="_blank"
            >
              X
            </Link>{" "}
            or{" "}
            <Link
              href="https://www.linkedin.com/in/nutlope/"
              className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
              target="_blank"
            >
              LinkedIn
            </Link>{" "}
            where I share my open source apps and tips for building with AI. I
            also{" "}
            <Link
              href="https://nutlope.substack.com/"
              className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
              target="_blank"
            >
              write
            </Link>
            ,{" "}
            <Link
              href="https://github.com/nutlope"
              className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
              target="_blank"
            >
              code
            </Link>
            , and{" "}
            <Link
              href="https://www.youtube.com/@HassanElMghari"
              className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
              target="_blank"
            >
              make videos
            </Link>{" "}
            about building with AI.
          </p>
        </div>
      </div>
    </main>
  )
}
