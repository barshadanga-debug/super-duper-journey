'use client';

// Vercel Deployment Ready
// 1. Create a Next.js app:
//    npx create-next-app@latest arcane-focus-hub
//
// 2. Install Tailwind CSS:
//    npm install -D tailwindcss postcss autoprefixer
//    npx tailwindcss init -p
//
// 3. Replace app/page.js with this file.
//
// 4. Add Tailwind to globals.css:
//    @tailwind base;
//    @tailwind components;
//    @tailwind utilities;
//
// 5. Run locally:
//    npm run dev
//
// 6. Push project to GitHub.
//
// 7. Deploy free on Vercel:
//    https://vercel.com/new
//
// Recommended Future Features:
// - Firebase login
// - Real study analytics
// - Playable mini games
// - AI study assistant
// - Multiplayer focus rooms
// - Offline support (PWA)

export default function ADHDStudyHub() {
  const games = [
    {
      name: 'Memory Sparks',
      description: 'Flip glowing cards and match magical symbols.',
      emoji: '🪄',
    },
    {
      name: 'Potion Tap',
      description: 'Tap the correct potion before time runs out.',
      emoji: '🧪',
    },
    {
      name: 'Rune Recall',
      description: 'Memorize rune patterns and repeat them.',
      emoji: '📜',
    },
    {
      name: 'Focus Flight',
      description: 'Guide a floating lantern through obstacles.',
      emoji: '🕯️',
    },
    {
      name: 'Spell Sprint',
      description: 'Type magical words as fast as you can.',
      emoji: '✨',
    },
    {
      name: 'Star Sorting',
      description: 'Sort glowing stars by color and shape.',
      emoji: '🌟',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-slate-100 overflow-hidden relative transition-all duration-500">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518562180175-34a163b1a9a6?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center opacity-20" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-slate-950/80 to-black/90" />

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-amber-200 rounded-full animate-pulse" />
        <div className="absolute top-40 right-32 w-1 h-1 bg-blue-200 rounded-full animate-ping" />
        <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-purple-300 rounded-full animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full animate-ping" />
      </div>

      <audio autoPlay loop className="hidden">
        <source src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_9e5f6e9b57.mp3?filename=fantasy-medieval-background-112191.mp3" type="audio/mpeg" />
      </audio>

      <div className="relative z-10 px-6 py-8 lg:px-12">
        <header className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <h1 className="text-5xl font-black tracking-wide text-amber-100 drop-shadow-lg">
              Arcane Focus Hub
            </h1>
            <p className="mt-3 text-slate-300 max-w-2xl text-lg leading-relaxed">
              A magical-inspired ADHD study sanctuary with focus tracking,
              calming ambience, productivity tools, and relaxing mini games.
            </p>
          </div>

          <button className="bg-slate-900/70 border border-amber-200/30 hover:bg-slate-800 transition px-5 py-3 rounded-2xl shadow-xl backdrop-blur-lg">
            🌙 Dark Mode Enabled
          </button>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
          <div className="bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-amber-100">
                Study Tracker
              </h2>
              <span className="text-3xl">📚</span>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <div className="flex justify-between text-sm text-slate-300 mb-1">
                  <span>Daily Focus Goal</span>
                  <span>3 / 5 hrs</span>
                </div>
                <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full w-3/5 bg-gradient-to-r from-amber-300 to-orange-500 rounded-full" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-5">
                <div className="bg-black/30 rounded-2xl p-4 border border-white/5">
                  <p className="text-slate-400 text-sm">Pomodoros</p>
                  <h3 className="text-3xl font-bold mt-1">8</h3>
                </div>

                <div className="bg-black/30 rounded-2xl p-4 border border-white/5">
                  <p className="text-slate-400 text-sm">Tasks Done</p>
                  <h3 className="text-3xl font-bold mt-1">14</h3>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-500/20 to-purple-500/20 border border-amber-100/10 p-4 rounded-2xl mt-6">
                <p className="text-sm text-amber-100">
                  ✨ Focus Tip: Keep your phone away during deep study sessions.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-blue-100">
                Distraction Tracker
              </h2>
              <span className="text-3xl">📵</span>
            </div>

            <div className="mt-6 space-y-4">
              <div className="bg-black/30 rounded-2xl p-4 border border-white/5">
                <div className="flex justify-between items-center">
                  <span>Phone Pickups</span>
                  <span className="text-red-300 font-bold">12</span>
                </div>
              </div>

              <div className="bg-black/30 rounded-2xl p-4 border border-white/5">
                <div className="flex justify-between items-center">
                  <span>Social Media Time</span>
                  <span className="text-yellow-200 font-bold">48 mins</span>
                </div>
              </div>

              <div className="bg-black/30 rounded-2xl p-4 border border-white/5">
                <div className="flex justify-between items-center">
                  <span>Focus Streak</span>
                  <span className="text-green-300 font-bold">2h 18m</span>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-2xl bg-blue-500/10 border border-blue-200/10">
                <p className="text-sm text-slate-300">
                  🔔 Gentle Reminder: Try the 5-minute reset ritual when you feel distracted.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-purple-100">
                Focus Ambience
              </h2>
              <span className="text-3xl">🎵</span>
            </div>

            <div className="mt-6 space-y-4">
              <div className="bg-black/30 p-4 rounded-2xl border border-white/5">
                <p className="text-slate-400 text-sm">Currently Playing</p>
                <h3 className="text-xl font-semibold mt-1">
                  Soft Wizard Study Music
                </h3>
              </div>

              <button className="w-full py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:scale-[1.02] transition-all font-semibold shadow-lg">
                ▶ Play / Pause Music
              </button>

              <div className="grid grid-cols-2 gap-3 mt-4">
                <button className="bg-slate-800 hover:bg-slate-700 transition p-3 rounded-2xl">
                  Rain Ambience
                </button>
                <button className="bg-slate-800 hover:bg-slate-700 transition p-3 rounded-2xl">
                  Fireplace Sounds
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-4xl font-black text-amber-100">
              Magical Mini Games
            </h2>
            <span className="text-slate-400">Brain breaks designed for focus recovery</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {games.map((game, index) => (
              <div
                key={index}
                className="group bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:-translate-y-1 hover:border-amber-200/20 transition-all duration-300 shadow-2xl"
              >
                <div className="text-5xl mb-4">{game.emoji}</div>
                <h3 className="text-2xl font-bold text-slate-100">
                  {game.name}
                </h3>
                <p className="mt-3 text-slate-400 leading-relaxed">
                  {game.description}
                </p>

                <button className="mt-6 w-full py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold group-hover:scale-[1.02] transition-all shadow-lg">
                  Launch Game
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
            <h2 className="text-3xl font-bold text-amber-100">
              Daily Quest Board
            </h2>

            <div className="mt-6 space-y-4">
              {[
                'Complete 2 Pomodoro sessions',
                'Drink enough water',
                'Avoid distractions for 30 mins',
                'Review class notes',
              ].map((task, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-black/30 p-4 rounded-2xl border border-white/5"
                >
                  <input type="checkbox" className="w-5 h-5 accent-amber-400" />
                  <span>{task}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
            <h2 className="text-3xl font-bold text-blue-100">
              Focus Timer
            </h2>

            <div className="flex flex-col items-center justify-center mt-10">
              <div className="w-56 h-56 rounded-full border-8 border-amber-300/20 flex items-center justify-center bg-black/30 shadow-inner">
                <div className="text-center">
                  <div className="text-6xl font-black text-amber-100">25:00</div>
                  <p className="text-slate-400 mt-2">Deep Focus Session</p>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <button className="px-6 py-3 rounded-2xl bg-green-500/80 hover:bg-green-400 transition font-bold">
                  Start
                </button>
                <button className="px-6 py-3 rounded-2xl bg-yellow-500/80 hover:bg-yellow-400 transition font-bold text-black">
                  Pause
                </button>
                <button className="px-6 py-3 rounded-2xl bg-red-500/80 hover:bg-red-400 transition font-bold">
                  Reset
                </button>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-16 text-center text-slate-500 text-sm pb-8">
          Built for calmer studying, better focus, and magical productivity ✨
        </footer>
      </div>
    </div>
  );
}
