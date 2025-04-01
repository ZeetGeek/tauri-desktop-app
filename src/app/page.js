import Image from 'next/image';

export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-[32px] row-start-2 items-center">
                <Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={180} height={38} priority />
                <code className="bg-black/[.05] dark:bg-white/[.06] px-3 py-1 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
                    This app version is 1.0.0 👏
                </code>

                <div className="flex gap-4 items-center flex-col sm:flex-row">
                    <button
                        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto cursor-pointer"
                        rel="noopener noreferrer"
                    >
                        <Image className="dark:invert" src="/vercel.svg" alt="Vercel logomark" width={20} height={20} />
                        Update App
                    </button>
                </div>
            </main>
        </div>
    );
}
