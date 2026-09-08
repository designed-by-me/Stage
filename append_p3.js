const fs = require('fs');

let p3 = `
    <!-- MAIN APP VIEWPORT -->
    <div id="main-viewport" class="flex-1 relative overflow-hidden flex flex-col">

      <!-- TAB 1: HOME (TikTok-Style Reels Feed) -->
      <div id="tab-home" class="tab-pane absolute inset-0 flex flex-col bg-black">
        <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/95 z-10 pointer-events-none"></div>
        <img id="reel-bg" src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop" class="w-full h-full object-cover">

        <!-- Top Header Overlay with Vector Logo -->
        <div class="absolute top-4 left-4 right-4 z-20 flex justify-between items-center pt-2">
          <div class="w-20">
            <img src="images/Vector.svg" alt="STAGE" class="w-full h-auto">
          </div>
          <div class="flex gap-4 font-heading font-bold text-sm">
            <button class="text-white border-b-2 border-cyan-400 pb-0.5 shadow-sm">For You</button>
            <button class="text-neutral-400">West Heat</button>
          </div>
          <button onclick="openLinkPayModal()" class="px-3 py-1.5 rounded-full blue-glow-btn text-white font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-blue-500/40">
            <i data-lucide="zap" class="w-3.5 h-3.5 fill-white"></i> Vote
          </button>
        </div>

        <!-- Right Side Action Bar -->
        <div class="absolute right-3 bottom-24 z-20 flex flex-col items-center gap-5">
          <div class="relative mb-2">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop" class="w-12 h-12 rounded-full border-2 border-cyan-400 object-cover shadow-[0_0_12px_rgba(0,210,255,0.4)]">
            <div class="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-cyan-400 text-black flex items-center justify-center text-xs font-black shadow">+</div>
          </div>

          <!-- Luminous Blue VOTE Button -->
          <button onclick="openLinkPayModal()" class="flex flex-col items-center group">
            <div class="w-12 h-12 rounded-full blue-glow-btn flex items-center justify-center text-white shadow-[0_0_20px_rgba(37,99,235,0.6)] group-active:scale-90 transition">
              <i data-lucide="wallet" class="w-6 h-6"></i>
            </div>
            <span class="text-[11px] font-black text-cyan-300 mt-1 tracking-wider">VOTE</span>
          </button>

          <button onclick="toggleLike(this)" class="flex flex-col items-center text-white">
            <div class="p-2.5 rounded-full bg-slate-900/60 backdrop-blur-md border border-slate-700/50">
              <i data-lucide="heart" class="w-6 h-6"></i>
            </div>
            <span class="text-[11px] font-semibold mt-0.5">14.2k</span>
          </button>

          <button onclick="alert('💬 Comments: 842 total comments from fans!')" class="flex flex-col items-center text-white">
            <div class="p-2.5 rounded-full bg-slate-900/60 backdrop-blur-md border border-slate-700/50">
              <i data-lucide="message-circle" class="w-6 h-6"></i>
            </div>
            <span class="text-[11px] font-semibold mt-0.5">842</span>
          </button>

          <button class="flex flex-col items-center text-white">
            <div class="p-2.5 rounded-full bg-slate-900/60 backdrop-blur-md border border-slate-700/50">
              <i data-lucide="share-2" class="w-6 h-6"></i>
            </div>
            <span class="text-[11px] font-semibold mt-0.5">Share</span>
          </button>
        </div>

        <div class="absolute left-4 right-20 bottom-20 z-20 text-left">
          <div class="flex items-center gap-2 mb-1">
            <span class="font-heading font-bold text-base text-white">@tola_vocals</span>
            <span class="px-2 py-0.5 rounded-full bg-blue-500/20 text-cyan-300 text-[10px] font-bold border border-cyan-400/40">ID: STAGE-4092</span>
          </div>
          <p class="text-xs text-neutral-200 line-clamp-2 mb-2">Acoustic cover of 'Essence' for Week 3 Task 🔥 Drop your votes to keep me in Top 10!</p>
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-1 rounded-full bg-stage-card/90 backdrop-blur-md text-[11px] text-neutral-300 border border-stage-blueBorder">🎤 Singing</span>
            <span class="px-2.5 py-1 rounded-full bg-stage-card/90 backdrop-blur-md text-[11px] text-cyan-300 border border-stage-blueBorder">📍 West Region</span>
          </div>
        </div>
      </div>

      <!-- TAB 2: DISCOVER SCREEN -->
      <div id="tab-discover" class="tab-pane absolute inset-0 hidden flex-col bg-stage-black p-4 overflow-y-auto no-scrollbar pb-24">
        <div class="flex items-center justify-between mb-4 pt-2">
          <div class="w-24">
            <img src="images/Vector.svg" alt="STAGE" class="w-full h-auto">
          </div>
          <button class="p-2 rounded-xl bg-stage-card border border-stage-border text-neutral-400">
            <i data-lucide="search" class="w-5 h-5"></i>
          </button>
        </div>

        <!-- Big Ad Hero Banner: Compete & Win $20,000 (Royal Blue Gradient) -->
        <div class="relative rounded-3xl overflow-hidden p-5 blue-gradient text-white mb-5 shadow-[0_4px_30px_rgba(37,99,235,0.35)] border border-blue-400/30">
          <div class="flex justify-between items-start">
            <div>
              <span class="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-cyan-300 font-bold text-[10px] uppercase tracking-wider border border-cyan-400/30">Weekly Task #3</span>
              <h2 class="font-heading text-2xl font-black mt-2 leading-tight">Compete & Win<br><span class="text-4xl font-extrabold text-white drop-shadow">$20,000</span></h2>
            </div>
            <div class="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
              <i data-lucide="trophy" class="w-7 h-7 text-cyan-300"></i>
            </div>
          </div>
          <p class="text-xs font-medium text-blue-100 mt-2">Submit your 60-second performance clip before Sunday 6:00 PM.</p>
          <button onclick="handleCreateClick()" class="mt-4 px-4 py-2 rounded-xl bg-black text-cyan-300 font-bold text-xs flex items-center gap-1.5 shadow-md border border-cyan-500/30">
            <span>Enter Task Now</span>
            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
          </button>
        </div>

        <!-- Live Show Card (Sunday 8:00 PM GMT+1 - Google Meet Style) -->
        <div onclick="openLiveShow()" class="glass-card rounded-2xl p-4 border-blue-500/40 mb-5 cursor-pointer active:scale-98 transition relative overflow-hidden">
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-2">
              <span class="flex h-2.5 w-2.5 relative">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              <span class="text-xs font-bold text-cyan-400 uppercase tracking-wide">Live Every Sunday</span>
            </div>
            <span class="px-2 py-0.5 rounded bg-stage-card border border-stage-border text-[11px] font-bold text-blue-200">8:00 PM GMT+1</span>
          </div>
          <h3 class="font-heading text-lg font-bold text-white">Sunday Judges Arena</h3>
          <p class="text-xs text-neutral-400 mt-1">Host & Judges review the National Top 10 live on stage with real-time fan voting.</p>
          <div class="flex items-center justify-between mt-3 pt-3 border-t border-slate-800">
            <div class="flex -space-x-2">
              <img class="w-7 h-7 rounded-full border border-blue-500 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80">
              <img class="w-7 h-7 rounded-full border border-blue-500 object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80">
              <img class="w-7 h-7 rounded-full border border-blue-500 object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80">
            </div>
            <span class="text-xs font-bold text-cyan-400 flex items-center gap-1">
              Join Live Stage <i data-lucide="video" class="w-3.5 h-3.5"></i>
            </span>
          </div>
        </div>

        <!-- 2 Below Cards: Top Winners & Categories -->
        <div class="space-y-4">
          <div>
            <div class="flex justify-between items-center mb-2.5">
              <h3 class="font-heading text-base font-bold flex items-center gap-2 text-white">
                <i data-lucide="award" class="w-4 h-4 text-cyan-400"></i> Top Winners
              </h3>
              <span class="text-xs text-neutral-400">Past Cycles</span>
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div class="glass-card rounded-2xl p-3 border-stage-border">
                <img src="https://images.unsplash.com/photo-1520523839898-50712825e3a7?w=300" class="w-full h-24 rounded-xl object-cover mb-2 border border-slate-800">
                <div class="font-bold text-xs text-white">David Kalu</div>
                <div class="text-[11px] text-cyan-300 font-semibold">$5,000 Round Winner</div>
                <div class="text-[10px] text-neutral-400">Week 2 • Singing</div>
              </div>
              <div class="glass-card rounded-2xl p-3 border-stage-border">
                <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300" class="w-full h-24 rounded-xl object-cover mb-2 border border-slate-800">
                <div class="font-bold text-xs text-white">Zara Daniels</div>
                <div class="text-[11px] text-cyan-300 font-semibold">$5,000 Round Winner</div>
                <div class="text-[10px] text-neutral-400">Week 1 • Poetry</div>
              </div>
            </div>
          </div>

          <div>
            <h3 class="font-heading text-base font-bold mb-2.5 flex items-center gap-2 text-white">
              <i data-lucide="layout-grid" class="w-4 h-4 text-cyan-400"></i> Categories
            </h3>
            <div class="grid grid-cols-2 gap-2.5">
              <div class="p-3.5 rounded-2xl bg-stage-card border border-stage-border flex items-center gap-3">
                <div class="w-9 h-9 rounded-xl bg-blue-500/20 text-cyan-400 flex items-center justify-center font-bold">🎤</div>
                <div>
                  <div class="font-bold text-xs text-white">Singing</div>
                  <div class="text-[10px] text-neutral-400">142 Entries</div>
                </div>
              </div>
              <div class="p-3.5 rounded-2xl bg-stage-card border border-stage-border flex items-center gap-3">
                <div class="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">🎬</div>
                <div>
                  <div class="font-bold text-xs text-white">Monologue</div>
                  <div class="text-[10px] text-neutral-400">89 Entries</div>
                </div>
              </div>
              <div class="p-3.5 rounded-2xl bg-stage-card border border-stage-border flex items-center gap-3">
                <div class="w-9 h-9 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">💃</div>
                <div>
                  <div class="font-bold text-xs text-white">Dancing</div>
                  <div class="text-[10px] text-neutral-400">210 Entries</div>
                </div>
              </div>
              <div class="p-3.5 rounded-2xl bg-stage-card border border-stage-border flex items-center gap-3">
                <div class="w-9 h-9 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold">📜</div>
                <div>
                  <div class="font-bold text-xs text-white">Poetry</div>
                  <div class="text-[10px] text-neutral-400">67 Entries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
`;
fs.appendFileSync('index.html', p3, 'utf8');
