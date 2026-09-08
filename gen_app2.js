const fs = require('fs');

let code = `
    <!-- 1. SPLASH SCREEN (Using Figma images/Onboard.png & images/Vector.svg) -->
    <div id="screen-splash" class="absolute inset-0 z-50 flex flex-col justify-between bg-black text-center overflow-hidden">
      <!-- Background Image from Figma -->
      <div class="absolute inset-0 z-0">
        <img src="images/Onboard.png" alt="Onboard" class="w-full h-full object-cover opacity-90">
        <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/95"></div>
      </div>

      <!-- Top Logo Area -->
      <div class="relative z-10 pt-10 flex flex-col items-center">
        <div class="w-36 drop-shadow-[0_0_15px_rgba(0,210,255,0.4)]">
          <img src="images/Vector.svg" alt="STAGE" class="w-full h-auto">
        </div>
        <p class="text-[10px] font-bold tracking-widest text-cyan-300 uppercase mt-1">Digital Talent Arena</p>
      </div>

      <!-- Bottom Card Overlay -->
      <div class="relative z-10 p-6 space-y-3 pb-8">
        <div class="glass-panel p-4 rounded-2xl border-blue-500/30 text-center">
          <div class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full glass-pill-blue text-cyan-300 text-[10px] font-bold uppercase mb-1">
            <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
            Stand a chance to win
          </div>
          <div class="text-3xl font-extrabold text-white tracking-tight">$20,000</div>
          <p class="text-[11px] text-slate-300 mt-1">Direct mobile entry. Real fan votes via Link Pay.</p>
        </div>

        <button onclick="app.showScreen('screen-signup')" class="w-full py-3.5 rounded-xl btn-glow-blue text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-lg">
          <span>Get Started</span>
          <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </button>
        <button onclick="app.quickGuest()" class="w-full py-2.5 rounded-xl glass-btn text-slate-300 font-medium text-xs">
          Explore as Guest
        </button>
      </div>
    </div>

    <!-- 2. SIGN UP SCREEN -->
    <div id="screen-signup" class="absolute inset-0 z-40 hidden flex-col justify-between p-5 bg-[#05070D] overflow-y-auto no-scrollbar">
      <div>
        <div class="flex items-center gap-3 mb-5 pt-2">
          <button onclick="app.showScreen('screen-splash')" class="p-2 rounded-xl glass-btn text-slate-400">
            <i data-lucide="chevron-left" class="w-4 h-4"></i>
          </button>
          <h2 class="text-base font-bold text-white">Create Account</h2>
        </div>

        <div class="space-y-3">
          <div>
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Your Name</label>
            <input id="inp-name" type="text" placeholder="e.g. Alex Morgan" class="w-full px-3 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-xs">
          </div>
          <div>
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Email Address</label>
            <input id="inp-email" type="email" placeholder="alex@example.com" class="w-full px-3 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-xs">
          </div>
          <div>
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Phone Number</label>
            <input id="inp-phone" type="tel" placeholder="+234 800 000 0000" class="w-full px-3 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-xs">
          </div>
          <div>
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Competition Region</label>
            <select id="inp-region" class="w-full px-3 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white focus:outline-none focus:border-blue-500 text-xs">
              <option value="WEST">West Region</option>
              <option value="EAST">East Region</option>
              <option value="SOUTH">South Region</option>
              <option value="NORTH">North Region</option>
            </select>
          </div>

          <div class="pt-1">
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Select Role</label>
            <div class="grid grid-cols-2 gap-2">
              <button type="button" id="role-aud-btn" onclick="app.selectRole('audience')" class="p-2.5 rounded-xl border-2 border-cyan-400 bg-blue-500/10 text-left transition">
                <div class="text-cyan-400 font-bold text-xs flex items-center gap-1"><i data-lucide="eye" class="w-3.5 h-3.5"></i> Audience</div>
                <div class="text-[9px] text-slate-400 mt-0.5">Watch & vote</div>
              </button>
              <button type="button" id="role-con-btn" onclick="app.selectRole('contestant')" class="p-2.5 rounded-xl border border-white/10 bg-slate-900 text-left transition">
                <div class="text-slate-300 font-bold text-xs flex items-center gap-1"><i data-lucide="mic" class="w-3.5 h-3.5"></i> Contestant</div>
                <div class="text-[9px] text-slate-500 mt-0.5">Compete for $20k</div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="pt-4 pb-2">
        <button onclick="app.submitSignup()" class="w-full py-3 rounded-xl btn-glow-blue text-white font-bold text-xs shadow-md">
          Join Stage
        </button>
      </div>
    </div>
`;

fs.appendFileSync('index.html', code, 'utf8');
console.log('Appended part 2');
