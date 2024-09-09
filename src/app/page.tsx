import Image from 'next/image'

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark"
          src="/fulllogo.png"
          alt="Aztec Robotics logo"
          width={180}
          height={38}
          priority
        />
        <div className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]"></div>
        This website is under contruction. Check back in soon.
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full bg-foreground text-background border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#383838] dark:hover:bg-[#ccc] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://discord.gg/CjNWYkVkG3"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join the discord
          </a>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  )
}
