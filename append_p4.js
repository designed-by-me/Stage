const fs = require('fs');

let p4 = `
      <!-- TAB 3: LEADERBOARD SCREEN -->
      <div id="tab-leaderboard" class="tab-pane absolute inset-0 hidden flex-col bg-stage-black p-4 overflow-y-auto no-scrollbar pb-24">
        <div class="flex items-center justify-between mb-4 pt-2">
          <h1 class="font-heading text-2xl font-black text-white">Leaderboard</h1>
          <div class="px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-cyan-400 text-xs font-bold">
            Cycle #3 Live
          </div>
        </div>

        <div class="flex gap-2 p-1 bg-stage-card rounded-xl border border-stage-border mb-4 text-xs font-semibold">
          <button class="flex-1 py-2 rounded-lg blue-glow-btn text-white font-bold">National Top 10</button>
          <button class="flex-1 py-2 rounded-lg text-neutral-400 hover:text-white">Regional Heats</button>
        </div>

        <div class="space-y-2.5">
          <!-- Rank 1 -->
          <div class="glass-card rounded-2xl p-3.5 neon-border flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-7 h-7 rounded-full blue-gradient text-white font-black text-xs flex items-center justify-center shadow-[0_0_10px_rgba(0,210,255,0.5)]">1</div>
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" class="w-11 h-11 rounded-full object-cover border-2 border-cyan-400">
              <div>
                <div class="font-bold text-sm text-white flex items-center gap-1.5">Tola Vocals <span class="text-[10px] text-cyan-400 font-semibold">STAGE-4092</span></div>
                <div class="text-xs text-neutral-400">West • Singing</div>
              </div>
            </div>
            <div class="text-right">
              <div class="font-heading font-black text-sm text-cyan-300">18,420</div>
              <div class="text-[10px] text-neutral-400 uppercase">Paid Votes</div>
            </div>
          </div>

          <!-- Rank 2 -->
          <div class="glass-card rounded-2xl p-3.5 border-stage-border flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-7 h-7 rounded-full bg-slate-800 text-white font-bold text-xs flex items-center justify-center">2</div>
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" class="w-11 h-11 rounded-full object-cover border border-slate-700">
              <div>
                <div class="font-bold text-sm text-white">Chuka Beats <span class="text-[10px] text-neutral-400">STAGE-1102</span></div>
                <div class="text-xs text-neutral-400">East • Dancing</div>
              </div>
            </div>
            <div class="text-right">
              <div class="font-heading font-bold text-sm text-neutral-200">14,890</div>
              <div class="text-[10px] text-neutral-400 uppercase">Paid Votes</div>
            </div>
          </div>

          <!-- Rank 3 -->
          <div class="glass-card rounded-2xl p-3.5 border-stage-border flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-7 h-7 rounded-full bg-slate-800 text-white font-bold text-xs flex items-center justify-center">3</div>
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100" class="w-11 h-11 rounded-full object-cover border border-slate-700">
              <div>
                <div class="font-bold text-sm text-white">Amara Verse <span class="text-[10px] text-neutral-400">STAGE-7731</span></div>
                <div class="text-xs text-neutral-400">South • Poetry</div>
              </div>
            </div>
            <div class="text-right">
              <div class="font-heading font-bold text-sm text-neutral-200">11,200</div>
              <div class="text-[10px] text-neutral-400 uppercase">Paid Votes</div>
            </div>
          </div>
        </div>
      </div>

      <!-- TAB 4: PROFILE SCREEN -->
      <div id="tab-profile" class="tab-pane absolute inset-0 hidden flex-col bg-stage-black p-4 overflow-y-auto no-scrollbar pb-24">
        <div class="flex items-center justify-between mb-4 pt-2">
          <h1 class="font-heading text-2xl font-black text-white">Profile</h1>
          <button class="p-2 rounded-xl bg-stage-card border border-stage-border text-neutral-400">
            <i data-lucide="settings" class="w-5 h-5"></i>
          </button>
        </div>
        <div id="profile-content"></div>
      </div>
    </div>

    <!-- GOOGLE MEET STYLE LIVE SHOW MODAL -->
    <div id="modal-live-show" class="absolute inset-0 z-50 hidden flex-col bg-neutral-950 p-4">
      <div class="flex justify-between items-center pb-3 border-b border-neutral-800">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 rounded-full bg-blue-600 text-white font-bold text-[10px] uppercase tracking-wider animate-pulse">LIVE STAGE</span>
          <span class="text-xs text-neutral-400 font-semibold">Sunday Judges Arena</span>
        </div>
        <button onclick="closeLiveShow()" class="p-2 rounded-full bg-neutral-800 text-neutral-300">
          <i data-lucide="x" class="w-4 h-4"></i>
        </button>
      </div>

      <div class="flex-1 flex flex-col gap-3 py-3 overflow-hidden">
        <div class="grid grid-cols-3 gap-2 h-28">
          <div class="relative rounded-2xl overflow-hidden border border-blue-500/40 bg-neutral-900">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300" class="w-full h-full object-cover">
            <div class="absolute bottom-1 left-1.5 px-1.5 py-0.5 rounded bg-black/70 text-[10px] font-bold text-white">Host Marcus</div>
          </div>
          <div class="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300" class="w-full h-full object-cover">
            <div class="absolute bottom-1 left-1.5 px-1.5 py-0.5 rounded bg-black/70 text-[10px] font-bold text-white">Judge Sarah</div>
          </div>
          <div class="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900">
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300" class="w-full h-full object-cover">
            <div class="absolute bottom-1 left-1.5 px-1.5 py-0.5 rounded bg-black/70 text-[10px] font-bold text-white">Judge Kenny</div>
          </div>
        </div>

        <div class="relative flex-1 rounded-3xl overflow-hidden border-2 border-blue-500 bg-black shadow-[0_0_30px_rgba(37,99,235,0.3)]">
          <img src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800" class="w-full h-full object-cover">
          <div class="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-xs font-bold text-cyan-300 border border-cyan-400/40">
            Now Performing: Tola Vocals (#4092)
          </div>

          <div class="absolute bottom-3 left-3 right-3 space-y-1.5 max-h-28 overflow-y-auto no-scrollbar pointer-events-none">
            <div class="px-3 py-1 rounded-xl bg-black/70 backdrop-blur-md text-xs text-white inline-block border border-slate-800">
              <span class="text-cyan-400 font-bold">@fola:</span> Incredible vocals!! Voting 50 votes 🔥
            </div><br>
            <div class="px-3 py-1 rounded-xl bg-black/70 backdrop-blur-md text-xs text-white inline-block border border-slate-800">
              <span class="text-neutral-400 font-bold">@chidi:</span> West region taking the $20k for sure!
            </div>
          </div>
        </div>
      </div>

      <div class="pt-2 flex gap-3">
        <input type="text" placeholder="Send live comment..." class="flex-1 px-4 py-3 rounded-2xl bg-stage-card border border-stage-border text-white text-xs focus:outline-none focus:border-blue-500">
        <button onclick="openLinkPayModal()" class="px-5 py-3 rounded-2xl blue-glow-btn text-white font-bold text-xs flex items-center gap-1 shadow-lg shadow-blue-500/30">
          <i data-lucide="zap" class="w-4 h-4 fill-white"></i> Live Vote
        </button>
      </div>
    </div>

    <!-- LINK PAY DEEP-LINK MODAL -->
    <div id="modal-linkpay" class="absolute inset-0 z-50 hidden flex-col justify-end bg-black/80 backdrop-blur-md p-4">
      <div class="glass-card rounded-3xl p-5 neon-border animate-slide-up">
        <div class="flex justify-between items-center mb-4">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-xl blue-gradient text-white flex items-center justify-center font-black text-xs shadow-md">LP</div>
            <div>
              <h3 class="font-heading text-base font-bold text-white">Vote via Link Pay</h3>
              <p class="text-[11px] text-neutral-400">Direct instant banking payment</p>
            </div>
          </div>
          <button onclick="closeLinkPayModal()" class="p-2 rounded-full bg-slate-800 text-neutral-400"><i data-lucide="x" class="w-4 h-4"></i></button>
        </div>

        <div class="bg-stage-card p-3 rounded-2xl border border-stage-border mb-4">
          <div class="flex justify-between text-xs text-neutral-300">
            <span>Beneficiary Contestant:</span>
            <span class="font-bold text-cyan-300">Tola Vocals (ID: STAGE-4092)</span>
          </div>
        </div>

        <label class="text-xs font-semibold text-neutral-400 uppercase tracking-wider block mb-2">Select Vote Bundle</label>
        <div class="grid grid-cols-3 gap-2.5 mb-5">
          <button class="p-3 rounded-2xl bg-stage-card border-2 border-cyan-500 text-center shadow-[0_0_15px_rgba(0,210,255,0.2)]">
            <div class="font-heading font-black text-cyan-300 text-lg">10</div>
            <div class="text-[10px] text-neutral-400 font-semibold">$2.00</div>
          </button>
          <button class="p-3 rounded-2xl bg-stage-card border border-stage-border text-center">
            <div class="font-heading font-black text-white text-lg">50</div>
            <div class="text-[10px] text-neutral-400 font-semibold">$10.00</div>
          </button>
          <button class="p-3 rounded-2xl bg-stage-card border border-stage-border text-center">
            <div class="font-heading font-black text-white text-lg">100</div>
            <div class="text-[10px] text-neutral-400 font-semibold">$20.00</div>
          </button>
        </div>

        <button onclick="simulateLinkPayAuth()" class="w-full py-4 rounded-2xl blue-glow-btn text-white font-bold text-sm shadow-xl shadow-blue-500/40 active:scale-98 transition flex items-center justify-center gap-2">
          <span>Authorize in Link Pay App</span>
          <i data-lucide="external-link" class="w-4 h-4"></i>
        </button>
      </div>
    </div>

    <!-- SWITCH TO CONTESTANT MODAL -->
    <div id="modal-upgrade" class="absolute inset-0 z-50 hidden flex-col justify-end bg-black/80 backdrop-blur-md p-4">
      <div class="glass-card rounded-3xl p-5 neon-border">
        <div class="w-12 h-12 rounded-2xl blue-gradient flex items-center justify-center text-white mb-3 shadow-md">
          <i data-lucide="sparkles" class="w-6 h-6"></i>
        </div>
        <h3 class="font-heading text-xl font-bold text-white mb-1">Become a Contestant</h3>
        <p class="text-xs text-neutral-300 mb-4">You're currently signed in as Audience. Switch to Contestant to receive your official Voting Code and compete for the $20,000 prize!</p>
        <div class="space-y-2">
          <button onclick="confirmUpgrade()" class="w-full py-3.5 rounded-2xl blue-glow-btn text-white font-bold text-sm shadow-lg shadow-blue-500/30">Switch & Get Contestant ID</button>
          <button onclick="closeUpgradeModal()" class="w-full py-3 rounded-2xl bg-stage-card text-neutral-400 text-xs font-semibold border border-stage-border">Cancel</button>
        </div>
      </div>
    </div>

    <!-- BOTTOM TAB NAVIGATION BAR -->
    <div class="h-18 bg-stage-dark/95 backdrop-blur-md border-t border-stage-border px-4 flex justify-between items-center z-30">
      <button onclick="switchTab('tab-home')" class="nav-btn flex flex-col items-center gap-1 text-cyan-400" data-tab="tab-home">
        <i data-lucide="home" class="w-5 h-5"></i>
        <span class="text-[10px] font-bold">Home</span>
      </button>

      <button onclick="switchTab('tab-discover')" class="nav-btn flex flex-col items-center gap-1 text-neutral-500" data-tab="tab-discover">
        <i data-lucide="compass" class="w-5 h-5"></i>
        <span class="text-[10px] font-bold">Discover</span>
      </button>

      <button onclick="handleCreateClick()" class="w-12 h-12 rounded-full blue-glow-btn text-white flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.6)] -mt-5 active:scale-95 transition">
        <i data-lucide="plus" class="w-6 h-6 stroke-[3]"></i>
      </button>

      <button onclick="switchTab('tab-leaderboard')" class="nav-btn flex flex-col items-center gap-1 text-neutral-500" data-tab="tab-leaderboard">
        <i data-lucide="trophy" class="w-5 h-5"></i>
        <span class="text-[10px] font-bold">Rankings</span>
      </button>

      <button onclick="switchTab('tab-profile')" class="nav-btn flex flex-col items-center gap-1 text-neutral-500" data-tab="tab-profile">
        <i data-lucide="user" class="w-5 h-5"></i>
        <span class="text-[10px] font-bold">Profile</span>
      </button>
    </div>
  </div>

  <script>
    let currentUser = { name: "Guest User", role: "audience", region: "WEST", contestantId: null };

    function initIcons() { lucide.createIcons(); }

    function goToScreen(screenId) {
      document.getElementById('screen-splash').classList.add('hidden');
      document.getElementById('screen-signup').classList.add('hidden');
      if (document.getElementById(screenId)) {
        document.getElementById(screenId).classList.remove('hidden');
      }
      initIcons();
    }

    function selectRole(role) {
      currentUser.role = role;
      const audBtn = document.getElementById('btn-role-audience');
      const conBtn = document.getElementById('btn-role-contestant');
      if (role === 'audience') {
        audBtn.className = "p-3.5 rounded-2xl border-2 border-blue-500 bg-blue-500/10 text-left transition";
        conBtn.className = "p-3.5 rounded-2xl border-2 border-stage-border bg-stage-card text-left transition";
      } else {
        conBtn.className = "p-3.5 rounded-2xl border-2 border-blue-500 bg-blue-500/10 text-left transition";
        audBtn.className = "p-3.5 rounded-2xl border-2 border-stage-border bg-stage-card text-left transition";
      }
    }

    function finishSignUp() {
      currentUser.name = document.getElementById('inp-name').value || "Alex Morgan";
      currentUser.region = document.getElementById('inp-region').value;
      if (currentUser.role === 'contestant') {
        currentUser.contestantId = "STAGE-" + Math.floor(1000 + Math.random() * 9000);
      }
      document.getElementById('screen-signup').classList.add('hidden');
      renderProfile();
      switchTab('tab-home');
    }

    function quickGuest() {
      currentUser.name = "Audience Fan";
      currentUser.role = "audience";
      document.getElementById('screen-splash').classList.add('hidden');
      renderProfile();
      switchTab('tab-home');
    }

    function switchTab(tabId) {
      document.querySelectorAll('.tab-pane').forEach(p => p.classList.add('hidden'));
      document.getElementById(tabId).classList.remove('hidden');

      document.querySelectorAll('.nav-btn').forEach(btn => {
        if (btn.getAttribute('data-tab') === tabId) {
          btn.classList.remove('text-neutral-500');
          btn.classList.add('text-cyan-400');
        } else {
          btn.classList.remove('text-cyan-400');
          btn.classList.add('text-neutral-500');
        }
      });
      initIcons();
    }

    function handleCreateClick() {
      if (currentUser.role === 'audience') {
        document.getElementById('modal-upgrade').classList.remove('hidden');
        document.getElementById('modal-upgrade').classList.add('flex');
      } else {
        alert("🎥 Opening Contestant Video Recorder for Week 3 Task!");
      }
      initIcons();
    }

    function confirmUpgrade() {
      currentUser.role = 'contestant';
      currentUser.contestantId = "STAGE-" + Math.floor(1000 + Math.random() * 9000);
      closeUpgradeModal();
      renderProfile();
      alert("🎉 Congratulations! You are now a Contestant!\nYour Official Voting Code is: " + currentUser.contestantId);
    }

    function closeUpgradeModal() {
      document.getElementById('modal-upgrade').classList.add('hidden');
      document.getElementById('modal-upgrade').classList.remove('flex');
    }

    function openLiveShow() {
      document.getElementById('modal-live-show').classList.remove('hidden');
      document.getElementById('modal-live-show').classList.add('flex');
      initIcons();
    }

    function closeLiveShow() {
      document.getElementById('modal-live-show').classList.add('hidden');
      document.getElementById('modal-live-show').classList.remove('flex');
    }

    function openLinkPayModal() {
      document.getElementById('modal-linkpay').classList.remove('hidden');
      document.getElementById('modal-linkpay').classList.add('flex');
      initIcons();
    }

    function closeLinkPayModal() {
      document.getElementById('modal-linkpay').classList.add('hidden');
      document.getElementById('modal-linkpay').classList.remove('flex');
    }

    function simulateLinkPayAuth() {
      closeLinkPayModal();
      alert("✅ Link Pay Authenticated! 10 votes recorded successfully for Tola Vocals (#4092).");
    }

    function toggleLike(btn) {
      const heart = btn.querySelector('svg');
      if (heart.getAttribute('fill') === 'currentColor') {
        heart.setAttribute('fill', 'none');
        btn.querySelector('span').innerText = "14.2k";
      } else {
        heart.setAttribute('fill', 'currentColor');
        heart.classList.add('text-cyan-400');
        btn.querySelector('span').innerText = "14.3k";
      }
    }

    function renderProfile() {
      const container = document.getElementById('profile-content');
      if (currentUser.role === 'contestant') {
        container.innerHTML = '<div class="glass-card p-5 rounded-3xl neon-border mb-4 text-center">' +
          '<img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200" class="w-20 h-20 rounded-full mx-auto object-cover border-2 border-cyan-400 mb-3 shadow-[0_0_15px_rgba(0,210,255,0.4)]">' +
          '<h2 class="font-heading text-lg font-bold text-white">' + currentUser.name + '</h2>' +
          '<div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-cyan-300 text-xs font-bold border border-cyan-400/40 my-2">' +
          '<i data-lucide="key" class="w-3.5 h-3.5"></i> ' + currentUser.contestantId +
          '</div>' +
          '<p class="text-xs text-neutral-400">Region: ' + currentUser.region + ' • Singing</p>' +
          '<div class="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-slate-800">' +
          '<div><div class="font-heading font-bold text-sm text-cyan-300">#4</div><div class="text-[10px] text-neutral-500">Rank</div></div>' +
          '<div><div class="font-heading font-bold text-sm text-white">1,480</div><div class="text-[10px] text-neutral-500">Votes</div></div>' +
          '<div><div class="font-heading font-bold text-sm text-white">3</div><div class="text-[10px] text-neutral-500">Tasks</div></div>' +
          '</div></div>' +
          '<h3 class="font-bold text-sm text-white mb-3">Submissions</h3>' +
          '<div class="grid grid-cols-2 gap-3">' +
          '<div class="rounded-2xl overflow-hidden bg-stage-card border border-stage-border">' +
          '<img src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300" class="h-32 w-full object-cover">' +
          '<div class="p-2.5"><div class="font-bold text-xs text-white">Task 3: Cover</div><div class="text-[10px] text-cyan-300 font-semibold">1,480 Votes</div></div>' +
          '</div></div>';
      } else {
        container.innerHTML = '<div class="glass-card p-5 rounded-3xl border-stage-border mb-4 text-center">' +
          '<div class="w-16 h-16 rounded-full bg-slate-800 text-cyan-300 font-black text-xl flex items-center justify-center mx-auto mb-3 border border-slate-700">' +
          currentUser.name.charAt(0) +
          '</div>' +
          '<h2 class="font-heading text-lg font-bold text-white">' + currentUser.name + '</h2>' +
          '<div class="text-xs text-neutral-400 mt-1">Audience Member • ' + currentUser.region + ' Region</div>' +
          '<button onclick="handleCreateClick()" class="mt-4 px-4 py-2.5 rounded-xl blue-glow-btn text-white font-bold text-xs flex items-center justify-center gap-1.5 mx-auto">' +
          '<i data-lucide="sparkles" class="w-3.5 h-3.5"></i> Switch to Contestant' +
          '</button></div>' +
          '<h3 class="font-bold text-sm text-white mb-3">Your Voting History</h3>' +
          '<div class="space-y-2">' +
          '<div class="p-3 rounded-2xl bg-stage-card border border-stage-border flex justify-between items-center text-xs">' +
          '<div><div class="font-bold text-white">Voted for Tola Vocals</div><div class="text-neutral-500">10 Votes • Link Pay</div></div>' +
          '<div class="font-bold text-cyan-300">$2.00</div>' +
          '</div></div>';
      }
      initIcons();
    }

    window.addEventListener('DOMContentLoaded', () => { initIcons(); });
  </script>
</body>
</html>
`;
fs.appendFileSync('index.html', p4, 'utf8');
console.log('Appended p4 successfully');
