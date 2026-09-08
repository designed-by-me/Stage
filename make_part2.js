const fs = require('fs');

let part2 = `
    <!-- 1. SPLASH SCREEN -->
    <div id="screen-splash" class="screen absolute inset-0 z-50 flex flex-col justify-between p-6 bg-gradient-to-b from-[#070D1B] via-stage-black to-black text-center">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-600/15 blur-[80px] pointer-events-none"></div>

      <div class="relative pt-12 flex flex-col items-center">
        <div class="w-36 mb-2">
          <img src="images/Vector.svg" alt="STAGE" class="w-full h-auto drop-shadow-[0_0_12px_rgba(59,130,246,0.3)]">
        </div>
        <p class="text-[11px] font-semibold tracking-widest text-slate-400 uppercase">Talent Competition Arena</p>
      </div>

      <div class="relative py-2">
        <div class="glass-panel p-6 rounded-3xl relative overflow-hidden border-blue-500/20">
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-pill-blue text-cyan-300 text-[10px] font-bold uppercase tracking-wider mb-2">
            <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            Season 1 Active
          </div>
          <p class="text-[11px] font-medium text-slate-400 tracking-wide uppercase mt-1">Grand Cash Prize</p>
          <div class="text-4xl font-extrabold text-white tracking-tight mt-1 text-glow">$20,000</div>
          <p class="text-xs text-slate-300 mt-2 font-normal leading-relaxed">No auditions. Direct mobile entry. Backed by real fan votes.</p>
        </div>
      </div>

      <div class="space-y-2.5 pb-6 relative z-10">
        <button id="btn-splash-start" class="w-full py-3.5 rounded-2xl btn-glow-blue text-white font-semibold text-sm flex items-center justify-center gap-2">
          <span>Get Started</span>
          <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </button>
        <button id="btn-splash-guest" class="w-full py-3 rounded-2xl glass-btn text-slate-300 font-medium text-xs">
          Explore as Guest
        </button>
      </div>
    </div>

    <!-- 2. SIGN UP SCREEN -->
    <div id="screen-signup" class="screen absolute inset-0 z-40 hidden flex-col justify-between p-6 bg-stage-black overflow-y-auto no-scrollbar">
      <div>
        <div class="flex items-center gap-3 mb-6 pt-2">
          <button id="btn-signup-back" class="p-2 rounded-xl glass-btn text-slate-400">
            <i data-lucide="chevron-left" class="w-4 h-4"></i>
          </button>
          <h2 class="text-lg font-bold text-white">Create Account</h2>
        </div>

        <div class="space-y-3.5">
          <div>
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Your Name</label>
            <input id="inp-name" type="text" placeholder="e.g. Alex Morgan" class="w-full px-3.5 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-xs">
          </div>
          <div>
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Email Address</label>
            <input id="inp-email" type="email" placeholder="alex@example.com" class="w-full px-3.5 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-xs">
          </div>
          <div>
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Phone Number</label>
            <input id="inp-phone" type="tel" placeholder="+234 800 000 0000" class="w-full px-3.5 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-xs">
          </div>
          <div>
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Competition Region</label>
            <select id="inp-region" class="w-full px-3.5 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white focus:outline-none focus:border-blue-500 text-xs">
              <option value="WEST">West Region</option>
              <option value="EAST">East Region</option>
              <option value="SOUTH">South Region</option>
              <option value="NORTH">North Region</option>
            </select>
          </div>

          <div class="pt-1">
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Select Role</label>
            <div class="grid grid-cols-2 gap-2.5">
              <button type="button" id="role-aud-btn" class="p-3 rounded-2xl border-2 border-blue-500 bg-blue-500/10 text-left transition">
                <div class="text-cyan-400 font-bold text-xs flex items-center gap-1.5">
                  <i data-lucide="eye" class="w-3.5 h-3.5"></i> Audience
                </div>
                <div class="text-[10px] text-slate-400 mt-0.5">Watch & vote</div>
              </button>
              <button type="button" id="role-con-btn" class="p-3 rounded-2xl border border-white/10 bg-slate-900/50 text-left transition">
                <div class="text-slate-300 font-bold text-xs flex items-center gap-1.5">
                  <i data-lucide="mic" class="w-3.5 h-3.5"></i> Contestant
                </div>
                <div class="text-[10px] text-slate-500 mt-0.5">Compete for $20k</div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="pt-4 pb-4">
        <button id="btn-submit-signup" class="w-full py-3.5 rounded-2xl btn-glow-blue text-white font-bold text-xs">
          Join Stage
        </button>
      </div>
    </div>
`;

fs.appendFileSync('index.html', part2, 'utf8');
console.log('Part 2 written');
