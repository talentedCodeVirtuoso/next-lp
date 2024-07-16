export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-between pb-24 pt-40 gap-y-32">
      <header className="min-h-[60vh] flex flex-col items-start gap-6 px-7 pb-8 text-center md:px-10">
        <div className="relative flex flex-col gap-4 md:items-center lg:flex-row">
          <h1 className="relative mx-0 max-w-[40rem] text-balance bg-gradient-to-br from-black from-45% to-netural-200/60 bg-clip-text pt-5 text-left text-5xl font-semibold tracking-tighter text-transparent sm:text-7xl md:mx-auto md:px-4 md:py-2 md:text-center md:text-7xl ld:text-7xl">
            AI for Everyone
          </h1>
        </div>
        <p className="max-w-xl text-balance text-left text-base tracking-tight text-black dark:font-medium dark:text-white md:text-center md:text-lg">
          Be a part of the future with our cutting-edge AI solutions. We offer{" "}
        </p>
        <span className="font-bold text-black">Chatbots</span>,{" "}
        <span className="font-bold text-black">Anaytics</span>, and{" "}
        <span className="font-bold text-blac">Automations</span>
        <a
          className="inline-flex max-w-60 items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 px-8 whitespace-pre md:flex group relative w-full gap-1 overflow-hidden rounded-full text-sm font-semibold tracking-tighter transition-all duration-150 ease-in-out hover:ring-2 hover:ring-neutral-300 hover:ring-offset-2 hover:ring-offset-inherit dark:hover:ring-black dark:hover:ring-offset-black"
          href="/contact"
        >
          Book a call
        </a>
      </header>
    </main>
  );
}
