const fs = require('fs');

let p2 = `
    <!-- Screen 1: Splash / Onboard Screen with Vector.svg Logo -->
    <div id="screen-splash" class="absolute inset-0 z-50 flex flex-col justify-between p-6 bg-gradient-to-b from-[#060D1E] via-stage-black to-black text-center">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-blue-600/20 blur-[90px] pointer-events-none"></div>

      <div class="relative pt-12 flex flex-col items-center">
        <!-- Exact Vector Logo from images/Vector.svg -->
        <div class="w-44 mb-3 drop-shadow-[0_0_18px_rgba(0,210,255,0.4)]">
          <img src="images/Vector.svg" alt="STAGE" class="w-full h-auto">
        </div>
        <p class="text-blue-200/80 text-xs font-semibold tracking-wider uppercase">Digital Talent Arena</p>
      </div>

      <div class="relative py-4">
        <div class="glass-card p-6 rounded-3xl neon-border relative overflow-hidden">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-cyan-300 text-[11px] font-bold uppercase tracking-wider mb-2">
            <i data-lucide="sparkles" class="w-3.5 h-3.5 text-cyan-400"></i> Season 1 Live
          </span>
          <p class="text-xs uppercase tracking-widest text-neutral-400 font-semibold mt-1">Stand a chance to win</p>
          <div class="font-heading text-5xl font-black blue-glow-text tracking-tight mt-1">$20,000</div>
          <p class="text-xs text-neutral-300 mt-2">Zero auditions. Backed directly by fans with real-time Link Pay voting.</p>
        </div>
      </div>

      <div class="space-y-3 pb-8 relative z-10">
        <button onclick="goToScreen('screen-signup')" class="w-full py-4 rounded-2xl blue-glow-btn text-white font-bold text-base active:scale-98 transition flex items-center justify-center gap-2">
          <span>Get Started</span>
          <i data-lucide="arrow-right" class="w-5 h-5"></i>
        </button>
        <button onclick="quickGuest()" class="w-full py-3.5 rounded-2xl bg-stage-card text-neutral-300 font-medium text-sm border border-stage-border active:bg-stage-cardLight transition">
          Preview as Guest Audience
        </button>
      </div>
    </div>

    <!-- Screen 2: Sign Up & Role Selection -->
    <div id="screen-signup" class="absolute inset-0 z-40 hidden flex-col justify-between p-6 bg-stage-black overflow-y-auto no-scrollbar">
      <div>
        <div class="flex items-center gap-3 mb-6 pt-4">
          <button onclick="goToScreen('screen-splash')" class="p-2 rounded-xl bg-stage-card border border-stage-border text-neutral-400">
            <i data-lucide="chevron-left" class="w-5 h-5"></i>
          </button>
          <h2 class="font-heading text-2xl font-bold text-white">Create Account</h2>
        </div>

        <div class="space-y-4">
          <div>
            <label class="text-xs font-semibold text-neutral-400 uppercase tracking-wider block mb-1.5">Your Name</label>
            <input id="inp-name" type="text" placeholder="e.g. Alex Morgan" class="w-full px-4 py-3.5 rounded-xl bg-stage-card border border-stage-border text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 text-sm">
          </div>
          <div>
            <label class="text-xs font-semibold text-neutral-400 uppercase tracking-wider block mb-1.5">Email Address</label>
            <input id="inp-email" type="email" placeholder="alex@example.com" class="w-full px-4 py-3.5 rounded-xl bg-stage-card border border-stage-border text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 text-sm">
          </div>
          <div>
            <label class="text-xs font-semibold text-neutral-400 uppercase tracking-wider block mb-1.5">Phone Number</label>
            <input id="inp-phone" type="tel" placeholder="+234 800 000 0000" class="w-full px-4 py-3.5 rounded-xl bg-stage-card border border-stage-border text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 text-sm">
          </div>
          <div>
            <label class="text-xs font-semibold text-neutral-400 uppercase tracking-wider block mb-1.5">Select Region</label>
            <select id="inp-region" class="w-full px-4 py-3.5 rounded-xl bg-stage-card border border-stage-border text-white focus:outline-none focus:border-blue-500 text-sm">
              <option value="WEST">West Region</option>
              <option value="EAST">East Region</option>
              <option value="SOUTH">South Region</option>
              <option value="NORTH">North Region</option>
            </select>
          </div>

          <div class="pt-2">
            <label class="text-xs font-semibold text-neutral-400 uppercase tracking-wider block mb-2">Join as:</label>
            <div class="grid grid-cols-2 gap-3">
              <button type="button" onclick="selectRole('audience')" id="btn-role-audience" class="p-3.5 rounded-2xl border-2 border-blue-500 bg-blue-500/10 text-left transition">
                <div class="text-cyan-400 font-bold text-sm flex items-center gap-1.5"><i data-lucide="eye" class="w-4 h-4"></i> Audience</div>
                <div class="text-xs text-neutral-400 mt-1">Watch, vote & back favorites</div>
              </button>
              <button type="button" onclick="selectRole('contestant')" id="btn-role-contestant" class="p-3.5 rounded-2xl border-2 border-stage-border bg-stage-card text-left transition">
                <div class="text-neutral-300 font-bold text-sm flex items-center gap-1.5"><i data-lucide="mic" class="w-4 h-4"></i> Contestant</div>
                <div class="text-xs text-neutral-500 mt-1">Compete for $20,000</div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="pt-6 pb-4">
        <button onclick="finishSignUp()" class="w-full py-4 rounded-2xl blue-glow-btn text-white font-bold text-base shadow-lg shadow-blue-500/30 active:scale-98 transition">
          Enter Stage Arena
        </button>
      </div>
    </div>
`;
fs.appendFileSync('index.html', p2, 'utf8');
