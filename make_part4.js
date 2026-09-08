const fs = require('fs');

let part4 = `
      <!-- TAB 3: LEADERBOARD SCREEN -->
      <div id="tab-leaderboard" class="tab-pane absolute inset-0 hidden flex-col bg-stage-black p-4 overflow-y-auto no-scrollbar pb-20">
        <div class="flex items-center justify-between mb-3 pt-1">
          <h1 class="text-base font-bold text-white">Leaderboard</h1>
          <div class="px-2.5 py-0.5 rounded-full glass-pill-blue text-cyan-400 text-[10px] font-bold">
            Cycle 3 Live
          </div>
        </div>

        <div class="flex gap-1.5 p-1 glass-panel rounded-xl mb-3 text-[11px] font-semibold">
          <button class="flex-1 py-1.5 rounded-lg btn-glow-blue text-white font-bold text-xs">National Top 10</button>
          <button class="flex-1 py-1.5 rounded-lg text-slate-400 hover:text-white text-xs">Regional Heats</button>
        </div>

        <div class="space-y-2">
          <!-- Rank 1 -->
          <div class="glass-panel rounded-2xl p-3 border-blue-500/40 flex items-center justify-between">
            <div class="flex items-center gap-2.5">
              <div class="w-6 h-6 rounded-full btn-glow-blue text-white font-extrabold text-[10px] flex items-center justify-center shadow-md">1</div>
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" class="w-9 h-9 rounded-full object-cover border border-cyan-400">
              <div>
                <div class="font-bold text-xs text-white">Tola Vocals <span class="text-[9px] text-cyan-400">STAGE-4092</span></div>
                <div class="text-[10px] text-slate-400">West • Singing</div>
              </div>
            </div>
            <div class="text-right">
              <div class="font-extrabold text-xs text-cyan-300">18,420</div>
              <div class="text-[9px] text-slate-400 uppercase">Votes</div>
            </div>
          </div>

          <!-- Rank 2 -->
          <div class="glass-panel rounded-2xl p-3 flex items-center justify-between">
            <div class="flex items-center gap-2.5">
              <div class="w-6 h-6 rounded-full bg-slate-800 text-slate-300 font-bold text-[10px] flex items-center justify-center">2</div>
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" class="w-9 h-9 rounded-full object-cover border border-slate-700">
              <div>
                <div class="font-bold text-xs text-white">Chuka Beats <span class="text-[9px] text-slate-400">STAGE-1102</span></div>
                <div class="text-[10px] text-slate-400">East • Dancing</div>
              </div>
            </div>
            <div class="text-right">
              <div class="font-bold text-xs text-slate-200">14,890</div>
              <div class="text-[9px] text-slate-400 uppercase">Votes</div>
            </div>
          </div>

          <!-- Rank 3 -->
          <div class="glass-panel rounded-2xl p-3 flex items-center justify-between">
            <div class="flex items-center gap-2.5">
              <div class="w-6 h-6 rounded-full bg-slate-800 text-slate-300 font-bold text-[10px] flex items-center justify-center">3</div>
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100" class="w-9 h-9 rounded-full object-cover border border-slate-700">
              <div>
                <div class="font-bold text-xs text-white">Amara Verse <span class="text-[9px] text-slate-400">STAGE-7731</span></div>
                <div class="text-[10px] text-slate-400">South • Poetry</div>
              </div>
            </div>
            <div class="text-right">
              <div class="font-bold text-xs text-slate-200">11,200</div>
              <div class="text-[9px] text-slate-400 uppercase">Votes</div>
            </div>
          </div>
        </div>
      </div>

      <!-- TAB 4: PROFILE SCREEN -->
      <div id="tab-profile" class="tab-pane absolute inset-0 hidden flex-col bg-stage-black p-4 overflow-y-auto no-scrollbar pb-20">
        <div class="flex items-center justify-between mb-3 pt-1">
          <h1 class="text-base font-bold text-white">Profile</h1>
          <button class="p-2 rounded-xl glass-btn text-slate-400">
            <i data-lucide="settings" class="w-4 h-4"></i>
          </button>
        </div>
        <div id="profile-content"></div>
      </div>
    </div>

    <!-- 4. GOOGLE MEET STYLE LIVE SHOW MODAL -->
    <div id="modal-live-show" class="absolute inset-0 z-50 hidden flex-col bg-neutral-950 p-4">
      <div class="flex justify-between items-center pb-2.5 border-b border-white/10">
        <div class="flex items-center gap-2">
          <span class="px-2 py-0.5 rounded-full bg-blue-600 text-white font-bold text-[9px] uppercase tracking-wider animate-pulse">LIVE STAGE</span>
          <span class="text-xs text-slate-400 font-semibold">Sunday Judges Arena</span>
        </div>
        <button id="btn-close-live" class="p-1.5 rounded-full glass-btn text-slate-300">
          <i data-lucide="x" class="w-4 h-4"></i>
        </button>
      </div>

      <div class="flex-1 flex flex-col gap-2.5 py-2.5 overflow-hidden">
        <div class="grid grid-cols-3 gap-2 h-24">
          <div class="relative rounded-xl overflow-hidden border border-blue-500/40 bg-slate-900">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300" class="w-full h-full object-cover">
            <div class="absolute bottom-1 left-1 px-1 rounded bg-black/70 text-[9px] font-bold text-white">Host Marcus</div>
          </div>
          <div class="relative rounded-xl overflow-hidden border border-white/10 bg-slate-900">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300" class="w-full h-full object-cover">
            <div class="absolute bottom-1 left-1 px-1 rounded bg-black/70 text-[9px] font-bold text-white">Judge Sarah</div>
          </div>
          <div class="relative rounded-xl overflow-hidden border border-white/10 bg-slate-900">
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300" class="w-full h-full object-cover">
            <div class="absolute bottom-1 left-1 px-1 rounded bg-black/70 text-[9px] font-bold text-white">Judge Kenny</div>
          </div>
        </div>

        <div class="relative flex-1 rounded-2xl overflow-hidden border border-blue-500/40 bg-black">
          <img src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800" class="w-full h-full object-cover">
          <div class="absolute top-2 left-2 px-2.5 py-1 rounded-full glass-panel text-[10px] font-bold text-cyan-300 border-blue-500/30">
            Live: Tola Vocals (#4092)
          </div>

          <div class="absolute bottom-2 left-2 right-2 space-y-1 max-h-24 overflow-y-auto no-scrollbar pointer-events-none">
            <div class="px-2.5 py-1 rounded-xl glass-panel text-[10px] text-white inline-block">
              <span class="text-cyan-400 font-bold">@fola:</span> Incredible vocals!! 🔥
            </div><br>
            <div class="px-2.5 py-1 rounded-xl glass-panel text-[10px] text-white inline-block">
              <span class="text-slate-300 font-bold">@chidi:</span> West region taking $20k!
            </div>
          </div>
        </div>
      </div>

      <div class="pt-1 flex gap-2">
        <input type="text" placeholder="Send live comment..." class="flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500">
        <button id="btn-live-vote" class="px-4 py-2 rounded-xl btn-glow-blue text-white font-bold text-xs flex items-center gap-1">
          <i data-lucide="zap" class="w-3.5 h-3.5 fill-white"></i> Vote
        </button>
      </div>
    </div>

    <!-- 5. LINK PAY MODAL -->
    <div id="modal-linkpay" class="absolute inset-0 z-50 hidden flex-col justify-end bg-black/80 backdrop-blur-md p-4">
      <div class="glass-panel rounded-3xl p-5 border-blue-500/40 animate-slide-up">
        <div class="flex justify-between items-center mb-3">
          <div class="flex items-center gap-2">
            <div class="w-7 h-7 rounded-lg btn-glow-blue text-white flex items-center justify-center font-black text-xs">LP</div>
            <div>
              <h3 class="text-sm font-bold text-white">Vote via Link Pay</h3>
              <p class="text-[10px] text-slate-400">Direct instant banking payment</p>
            </div>
          </div>
          <button id="btn-close-linkpay" class="p-1.5 rounded-full glass-btn text-slate-400"><i data-lucide="x" class="w-4 h-4"></i></button>
        </div>

        <div class="glass-panel p-2.5 rounded-xl mb-3">
          <div class="flex justify-between text-xs text-slate-300">
            <span>Contestant:</span>
            <span class="font-bold text-cyan-300">Tola Vocals (ID: STAGE-4092)</span>
          </div>
        </div>

        <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Select Vote Bundle</label>
        <div class="grid grid-cols-3 gap-2 mb-4">
          <button class="p-2.5 rounded-xl glass-panel border-cyan-400/50 text-center">
            <div class="font-bold text-cyan-300 text-sm">10</div>
            <div class="text-[9px] text-slate-400">$2.00</div>
          </button>
          <button class="p-2.5 rounded-xl glass-panel text-center">
            <div class="font-bold text-white text-sm">50</div>
            <div class="text-[9px] text-slate-400">$10.00</div>
          </button>
          <button class="p-2.5 rounded-xl glass-panel text-center">
            <div class="font-bold text-white text-sm">100</div>
            <div class="text-[9px] text-slate-400">$20.00</div>
          </button>
        </div>

        <button id="btn-authorize-linkpay" class="w-full py-3 rounded-xl btn-glow-blue text-white font-bold text-xs flex items-center justify-center gap-2">
          <span>Authorize in Link Pay App</span>
          <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    </div>

    <!-- 6. UPGRADE MODAL -->
    <div id="modal-upgrade" class="absolute inset-0 z-50 hidden flex-col justify-end bg-black/80 backdrop-blur-md p-4">
      <div class="glass-panel rounded-3xl p-5 border-blue-500/40">
        <div class="w-10 h-10 rounded-xl btn-glow-blue flex items-center justify-center text-white mb-2.5">
          <i data-lucide="sparkles" class="w-5 h-5"></i>
        </div>
        <h3 class="text-base font-bold text-white mb-1">Become a Contestant</h3>
        <p class="text-[11px] text-slate-300 mb-3">Switch to Contestant to receive your official Voting Code and compete for the $20,000 prize!</p>
        <div class="space-y-2">
          <button id="btn-confirm-upgrade" class="w-full py-3 rounded-xl btn-glow-blue text-white font-bold text-xs">Switch & Get Voting ID</button>
          <button id="btn-cancel-upgrade" class="w-full py-2.5 rounded-xl glass-btn text-slate-400 text-xs font-semibold">Cancel</button>
        </div>
      </div>
    </div>

    <!-- 7. BOTTOM NAVIGATION BAR -->
    <div class="h-16 bg-stage-black/95 backdrop-blur-md border-t border-white/10 px-4 flex justify-between items-center z-30">
      <button class="nav-tab-btn flex flex-col items-center gap-0.5 text-cyan-400" data-target="tab-home">
        <i data-lucide="home" class="w-4 h-4"></i>
        <span class="text-[9px] font-bold">Home</span>
      </button>

      <button class="nav-tab-btn flex flex-col items-center gap-0.5 text-slate-500" data-target="tab-discover">
        <i data-lucide="compass" class="w-4 h-4"></i>
        <span class="text-[9px] font-bold">Discover</span>
      </button>

      <button id="btn-nav-create" class="w-10 h-10 rounded-full btn-glow-blue text-white flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.5)] -mt-4 active:scale-95 transition">
        <i data-lucide="plus" class="w-5 h-5 stroke-[2.5]"></i>
      </button>

      <button class="nav-tab-btn flex flex-col items-center gap-0.5 text-slate-500" data-target="tab-leaderboard">
        <i data-lucide="trophy" class="w-4 h-4"></i>
        <span class="text-[9px] font-bold">Rankings</span>
      </button>

      <button class="nav-tab-btn flex flex-col items-center gap-0.5 text-slate-500" data-target="tab-profile">
        <i data-lucide="user" class="w-4 h-4"></i>
        <span class="text-[9px] font-bold">Profile</span>
      </button>
    </div>

  </div>

  <script>
    let state = {
      name: "Guest User",
      role: "audience",
      region: "WEST",
      contestantId: null
    };

    function refreshIcons() {
      if (window.lucide) {
        lucide.createIcons();
      }
    }

    function showScreen(screenId) {
      document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
      const target = document.getElementById(screenId);
      if (target) {
        target.classList.remove('hidden');
      }
      refreshIcons();
    }

    function switchTab(tabId) {
      document.querySelectorAll('.tab-pane').forEach(p => p.classList.add('hidden'));
      const activePane = document.getElementById(tabId);
      if (activePane) {
        activePane.classList.remove('hidden');
      }

      document.querySelectorAll('.nav-tab-btn').forEach(btn => {
        if (btn.getAttribute('data-target') === tabId) {
          btn.classList.remove('text-slate-500');
          btn.classList.add('text-cyan-400');
        } else {
          btn.classList.remove('text-cyan-400');
          btn.classList.add('text-slate-500');
        }
      });
      refreshIcons();
    }

    function renderProfile() {
      const container = document.getElementById('profile-content');
      if (!container) return;

      if (state.role === 'contestant') {
        container.innerHTML = '<div class="glass-panel p-4 rounded-2xl border-blue-500/30 mb-3 text-center">' +
          '<img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200" class="w-16 h-16 rounded-full mx-auto object-cover border-2 border-cyan-400 mb-2">' +
          '<h2 class="text-sm font-bold text-white">' + state.name + '</h2>' +
          '<div class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full glass-pill-blue text-cyan-300 text-[10px] font-bold my-1.5">' +
          'ID: ' + state.contestantId +
          '</div>' +
          '<p class="text-[10px] text-slate-400">Region: ' + state.region + ' • Singing</p>' +
          '<div class="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-white/5">' +
          '<div><div class="font-bold text-xs text-cyan-300">#4</div><div class="text-[9px] text-slate-500">Rank</div></div>' +
          '<div><div class="font-bold text-xs text-white">1,480</div><div class="text-[9px] text-slate-500">Votes</div></div>' +
          '<div><div class="font-bold text-xs text-white">3</div><div class="text-[9px] text-slate-500">Tasks</div></div>' +
          '</div></div>' +
          '<h3 class="font-bold text-xs text-white mb-2">Submissions</h3>' +
          '<div class="grid grid-cols-2 gap-2">' +
          '<div class="rounded-xl overflow-hidden glass-panel p-1">' +
          '<img src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300" class="h-24 w-full object-cover rounded-lg">' +
          '<div class="p-1.5"><div class="font-bold text-[10px] text-white">Task 3: Cover</div><div class="text-[9px] text-cyan-300">1,480 Votes</div></div>' +
          '</div></div>';
      } else {
        container.innerHTML = '<div class="glass-panel p-4 rounded-2xl border-white/10 mb-3 text-center">' +
          '<div class="w-14 h-14 rounded-full bg-slate-800 text-cyan-300 font-bold text-base flex items-center justify-center mx-auto mb-2 border border-slate-700">' +
          state.name.charAt(0) +
          '</div>' +
          '<h2 class="text-sm font-bold text-white">' + state.name + '</h2>' +
          '<div class="text-[10px] text-slate-400 mt-0.5">Audience Member • ' + state.region + ' Region</div>' +
          '<button id="btn-profile-upgrade" class="mt-3 px-3 py-2 rounded-xl btn-glow-blue text-white font-bold text-[10px] flex items-center justify-center gap-1 mx-auto">' +
          '<span>Switch to Contestant</span>' +
          '</button></div>' +
          '<h3 class="font-bold text-xs text-white mb-2">Your Voting History</h3>' +
          '<div class="space-y-1.5">' +
          '<div class="p-2.5 rounded-xl glass-panel flex justify-between items-center text-[10px]">' +
          '<div><div class="font-bold text-white">Voted for Tola Vocals</div><div class="text-slate-500">10 Votes • Link Pay</div></div>' +
          '<div class="font-bold text-cyan-300">$2.00</div>' +
          '</div></div>';

        const profileUpBtn = document.getElementById('btn-profile-upgrade');
        if (profileUpBtn) {
          profileUpBtn.onclick = () => {
            const modal = document.getElementById('modal-upgrade');
            if (modal) { modal.classList.remove('hidden'); modal.classList.add('flex'); refreshIcons(); }
          };
        }
      }
      refreshIcons();
    }

    document.addEventListener('DOMContentLoaded', () => {
      // 1. Splash Screen
      document.getElementById('btn-splash-start').onclick = () => showScreen('screen-signup');
      document.getElementById('btn-splash-guest').onclick = () => {
        state.name = "Audience Fan";
        state.role = "audience";
        showScreen('');
        renderProfile();
        switchTab('tab-home');
      };

      // 2. Sign Up
      document.getElementById('btn-signup-back').onclick = () => showScreen('screen-splash');

      const audBtn = document.getElementById('role-aud-btn');
      const conBtn = document.getElementById('role-con-btn');

      audBtn.onclick = () => {
        state.role = 'audience';
        audBtn.className = "p-3 rounded-2xl border-2 border-blue-500 bg-blue-500/10 text-left transition";
        conBtn.className = "p-3 rounded-2xl border border-white/10 bg-slate-900/50 text-left transition";
      };

      conBtn.onclick = () => {
        state.role = 'contestant';
        conBtn.className = "p-3 rounded-2xl border-2 border-blue-500 bg-blue-500/10 text-left transition";
        audBtn.className = "p-3 rounded-2xl border border-white/10 bg-slate-900/50 text-left transition";
      };

      document.getElementById('btn-submit-signup').onclick = () => {
        state.name = document.getElementById('inp-name').value || "Alex Morgan";
        state.region = document.getElementById('inp-region').value || "WEST";
        if (state.role === 'contestant') {
          state.contestantId = "STAGE-" + Math.floor(1000 + Math.random() * 9000);
        }
        showScreen('');
        renderProfile();
        switchTab('tab-home');
      };

      // 3. Tab Navigation
      document.querySelectorAll('.nav-tab-btn').forEach(btn => {
        btn.onclick = () => {
          const target = btn.getAttribute('data-target');
          if (target) switchTab(target);
        };
      });

      // 4. Center Create (+) Button
      document.getElementById('btn-nav-create').onclick = () => {
        if (state.role === 'audience') {
          const modal = document.getElementById('modal-upgrade');
          modal.classList.remove('hidden');
          modal.classList.add('flex');
        } else {
          alert("🎥 Opening Contestant Video Recorder for Week 3 Task!");
        }
        refreshIcons();
      };

      document.getElementById('btn-enter-task').onclick = () => {
        document.getElementById('btn-nav-create').click();
      };

      // 5. Upgrade Modal
      document.getElementById('btn-cancel-upgrade').onclick = () => {
        const modal = document.getElementById('modal-upgrade');
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      };

      document.getElementById('btn-confirm-upgrade').onclick = () => {
        state.role = 'contestant';
        state.contestantId = "STAGE-" + Math.floor(1000 + Math.random() * 9000);
        document.getElementById('btn-cancel-upgrade').click();
        renderProfile();
        alert("🎉 Congratulations! You are now a Contestant!\nYour Official Voting Code is: " + state.contestantId);
      };

      // 6. Live Show Arena Modal
      document.getElementById('card-live-arena').onclick = () => {
        const modal = document.getElementById('modal-live-show');
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        refreshIcons();
      };

      document.getElementById('btn-close-live').onclick = () => {
        const modal = document.getElementById('modal-live-show');
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      };

      // 7. Link Pay Modal
      const openPay = () => {
        const modal = document.getElementById('modal-linkpay');
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        refreshIcons();
      };
      const closePay = () => {
        const modal = document.getElementById('modal-linkpay');
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      };

      document.getElementById('quick-vote-btn').onclick = openPay;
      document.getElementById('bar-vote-btn').onclick = openPay;
      document.getElementById('btn-live-vote').onclick = openPay;
      document.getElementById('btn-close-linkpay').onclick = closePay;

      document.getElementById('btn-authorize-linkpay').onclick = () => {
        closePay();
        alert("✅ Link Pay Authenticated! 10 votes recorded for Tola Vocals (#4092).");
      };

      // 8. Like Button
      let isLiked = false;
      document.getElementById('bar-like-btn').onclick = function() {
        isLiked = !isLiked;
        const icon = this.querySelector('svg');
        const count = document.getElementById('like-count');
        if (isLiked) {
          icon.setAttribute('fill', '#EF4444');
          icon.classList.add('text-red-500');
          count.innerText = "14.3k";
        } else {
          icon.setAttribute('fill', 'none');
          icon.classList.remove('text-red-500');
          count.innerText = "14.2k";
        }
      };

      document.getElementById('bar-comment-btn').onclick = () => {
        alert("💬 842 Comments from Audience & Fans!");
      };

      document.getElementById('bar-share-btn').onclick = () => {
        alert("↗️ Sharing performance clip via Link!");
      };

      refreshIcons();
    });
  </script>
</body>
</html>
`;

fs.appendFileSync('index.html', part4, 'utf8');
console.log('Part 4 written & assembled');
