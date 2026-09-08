const fs = require('fs');

let part3 = `
    <!-- 3. MAIN APP VIEWPORT (5 TABS) -->
    <div id="main-viewport" class="flex-1 relative overflow-hidden flex flex-col">

      <!-- TAB 1: HOME (TikTok-Style Minimal Reels) -->
      <div id="tab-home" class="tab-pane absolute inset-0 flex flex-col bg-black">
        <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 z-10 pointer-events-none"></div>
        <img src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop" class="w-full h-full object-cover">

        <div class="absolute top-3 left-4 right-4 z-20 flex justify-between items-center pt-2">
          <div class="w-16">
            <img src="images/Vector.svg" alt="STAGE" class="w-full h-auto">
          </div>
          <div class="flex gap-4 font-bold text-xs">
            <button class="text-white border-b-2 border-cyan-400 pb-0.5">For You</button>
            <button class="text-slate-400 font-medium">West Heat</button>
          </div>
          <button id="quick-vote-btn" class="px-3 py-1 rounded-full btn-glow-blue text-white font-bold text-[11px] flex items-center gap-1 shadow-md">
            <i data-lucide="zap" class="w-3 h-3 fill-white"></i> Vote
          </button>
        </div>

        <div class="absolute right-3 bottom-20 z-20 flex flex-col items-center gap-4">
          <div class="relative mb-1">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop" class="w-10 h-10 rounded-full border-2 border-cyan-400 object-cover shadow-[0_0_10px_rgba(56,189,248,0.4)]">
            <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 text-black flex items-center justify-center text-[10px] font-black">+</div>
          </div>

          <button id="bar-vote-btn" class="flex flex-col items-center group">
            <div class="w-11 h-11 rounded-full btn-glow-blue flex items-center justify-center text-white shadow-[0_0_16px_rgba(37,99,235,0.5)]">
              <i data-lucide="wallet" class="w-5 h-5"></i>
            </div>
            <span class="text-[10px] font-extrabold text-cyan-300 mt-1">VOTE</span>
          </button>

          <button id="bar-like-btn" class="flex flex-col items-center text-white">
            <div class="p-2 rounded-full glass-btn">
              <i data-lucide="heart" class="w-5 h-5"></i>
            </div>
            <span id="like-count" class="text-[10px] font-semibold mt-0.5">14.2k</span>
          </button>

          <button id="bar-comment-btn" class="flex flex-col items-center text-white">
            <div class="p-2 rounded-full glass-btn">
              <i data-lucide="message-circle" class="w-5 h-5"></i>
            </div>
            <span class="text-[10px] font-semibold mt-0.5">842</span>
          </button>

          <button id="bar-share-btn" class="flex flex-col items-center text-white">
            <div class="p-2 rounded-full glass-btn">
              <i data-lucide="share-2" class="w-5 h-5"></i>
            </div>
            <span class="text-[10px] font-semibold mt-0.5">Share</span>
          </button>
        </div>

        <div class="absolute left-4 right-18 bottom-16 z-20 text-left">
          <div class="flex items-center gap-1.5 mb-1">
            <span class="font-bold text-sm text-white">@tola_vocals</span>
            <span class="px-2 py-0.5 rounded-full glass-pill-blue text-cyan-300 text-[9px] font-bold">ID: STAGE-4092</span>
          </div>
          <p class="text-[11px] text-slate-200 line-clamp-2 mb-1.5 font-normal">Acoustic cover for Week 3 Task 🔥 Vote to keep West Region #1!</p>
          <div class="flex items-center gap-1.5">
            <span class="px-2 py-0.5 rounded-full glass-pill text-[10px] text-slate-300">🎤 Singing</span>
            <span class="px-2 py-0.5 rounded-full glass-pill text-[10px] text-cyan-300">📍 West</span>
          </div>
        </div>
      </div>

      <!-- TAB 2: DISCOVER SCREEN -->
      <div id="tab-discover" class="tab-pane absolute inset-0 hidden flex-col bg-stage-black p-4 overflow-y-auto no-scrollbar pb-20">
        <div class="flex items-center justify-between mb-3 pt-1">
          <div class="w-20">
            <img src="images/Vector.svg" alt="STAGE" class="w-full h-auto">
          </div>
          <button class="p-2 rounded-xl glass-btn text-slate-400">
            <i data-lucide="search" class="w-4 h-4"></i>
          </button>
        </div>

        <div class="glass-panel rounded-2xl p-4 border-blue-500/30 mb-3.5 relative overflow-hidden">
          <div class="flex justify-between items-start">
            <div>
              <span class="px-2 py-0.5 rounded-full glass-pill-blue text-cyan-300 text-[9px] font-bold uppercase">Weekly Task #3</span>
              <h2 class="text-xl font-extrabold text-white mt-1.5 leading-tight">Compete & Win <span class="text-cyan-400">$20,000</span></h2>
            </div>
            <div class="w-9 h-9 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-400/30">
              <i data-lucide="trophy" class="w-4 h-4 text-cyan-400"></i>
            </div>
          </div>
          <p class="text-[11px] text-slate-400 mt-1">Submit your 60-second video before Sunday 6:00 PM.</p>
          <button id="btn-enter-task" class="mt-3 px-3 py-1.5 rounded-xl btn-glow-blue text-white font-bold text-[11px] flex items-center gap-1">
            <span>Enter Task</span>
            <i data-lucide="arrow-right" class="w-3 h-3"></i>
          </button>
        </div>

        <div id="card-live-arena" class="glass-panel rounded-2xl p-3.5 border-blue-500/30 mb-3.5 cursor-pointer active:scale-98 transition">
          <div class="flex items-center justify-between mb-1.5">
            <div class="flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
              <span class="text-[10px] font-bold text-red-400 uppercase tracking-wide">Live Every Sunday</span>
            </div>
            <span class="px-2 py-0.5 rounded glass-pill text-[9px] font-bold text-slate-300">8:00 PM GMT+1</span>
          </div>
          <h3 class="text-xs font-bold text-white">Sunday Judges Arena</h3>
          <p class="text-[10px] text-slate-400 mt-0.5">Host & Judges review the National Top 10 with live audience voting.</p>
          <div class="flex items-center justify-between mt-2.5 pt-2 border-t border-white/5">
            <div class="flex -space-x-1.5">
              <img class="w-6 h-6 rounded-full border border-blue-500 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80">
              <img class="w-6 h-6 rounded-full border border-blue-500 object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80">
              <img class="w-6 h-6 rounded-full border border-blue-500 object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80">
            </div>
            <span class="text-[10px] font-bold text-cyan-400 flex items-center gap-1">
              Join Stage <i data-lucide="video" class="w-3 h-3"></i>
            </span>
          </div>
        </div>

        <div class="space-y-3">
          <div>
            <div class="flex justify-between items-center mb-2">
              <h3 class="text-xs font-bold text-white flex items-center gap-1.5">
                <i data-lucide="award" class="w-3.5 h-3.5 text-cyan-400"></i> Top Winners
              </h3>
              <span class="text-[10px] text-slate-400">Past Rounds</span>
            </div>
            <div class="grid grid-cols-2 gap-2">
              <div class="glass-panel rounded-xl p-2.5">
                <img src="https://images.unsplash.com/photo-1520523839898-50712825e3a7?w=300" class="w-full h-20 rounded-lg object-cover mb-1.5">
                <div class="font-bold text-[11px] text-white">David Kalu</div>
                <div class="text-[10px] text-cyan-300 font-semibold">$5,000 Winner</div>
              </div>
              <div class="glass-panel rounded-xl p-2.5">
                <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300" class="w-full h-20 rounded-lg object-cover mb-1.5">
                <div class="font-bold text-[11px] text-white">Zara Daniels</div>
                <div class="text-[10px] text-cyan-300 font-semibold">$5,000 Winner</div>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xs font-bold text-white mb-2 flex items-center gap-1.5">
              <i data-lucide="layout-grid" class="w-3.5 h-3.5 text-cyan-400"></i> Categories
            </h3>
            <div class="grid grid-cols-2 gap-2">
              <div class="p-2.5 rounded-xl glass-panel flex items-center gap-2">
                <div class="w-7 h-7 rounded-lg bg-blue-500/20 text-cyan-400 flex items-center justify-center text-xs">🎤</div>
                <div>
                  <div class="font-bold text-[11px] text-white">Singing</div>
                  <div class="text-[9px] text-slate-400">142 Entries</div>
                </div>
              </div>
              <div class="p-2.5 rounded-xl glass-panel flex items-center gap-2">
                <div class="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs">🎬</div>
                <div>
                  <div class="font-bold text-[11px] text-white">Monologue</div>
                  <div class="text-[9px] text-slate-400">89 Entries</div>
                </div>
              </div>
              <div class="p-2.5 rounded-xl glass-panel flex items-center gap-2">
                <div class="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs">💃</div>
                <div>
                  <div class="font-bold text-[11px] text-white">Dancing</div>
                  <div class="text-[9px] text-slate-400">210 Entries</div>
                </div>
              </div>
              <div class="p-2.5 rounded-xl glass-panel flex items-center gap-2">
                <div class="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center text-xs">📜</div>
                <div>
                  <div class="font-bold text-[11px] text-white">Poetry</div>
                  <div class="text-[9px] text-slate-400">67 Entries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
`;

fs.appendFileSync('index.html', part3, 'utf8');
console.log('Part 3 written');
