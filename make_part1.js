const fs = require('fs');

let part1 = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>STAGE - Digital Talent Arena</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: { sans: ['"Plus Jakarta Sans"', '-apple-system', 'sans-serif'] },
          colors: {
            stage: {
              black: '#05070D',
              surface: 'rgba(15, 23, 42, 0.65)',
              glass: 'rgba(255, 255, 255, 0.05)',
              glassBorder: 'rgba(255, 255, 255, 0.1)',
              blueGlass: 'rgba(37, 99, 235, 0.15)',
              blueBorder: 'rgba(59, 130, 246, 0.3)',
              accent: '#3B82F6',
              cyan: '#38BDF8'
            }
          }
        }
      }
    }
  </script>
  <style>
    * { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
    body { background-color: #000000; color: #F8FAFC; font-family: 'Plus Jakarta Sans', sans-serif; user-select: none; overflow: hidden; }
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    .glass-panel { background: rgba(13, 18, 30, 0.75); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.08); }
    .glass-pill { background: rgba(255, 255, 255, 0.07); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.1); }
    .glass-pill-blue { background: rgba(37, 99, 235, 0.18); backdrop-filter: blur(12px); border: 1px solid rgba(59, 130, 246, 0.35); }
    .glass-btn { background: rgba(255, 255, 255, 0.08); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.12); transition: all 0.2s ease; }
    .glass-btn:active { transform: scale(0.94); background: rgba(255, 255, 255, 0.15); }
    .btn-glow-blue { background: linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%); box-shadow: 0 4px 18px rgba(37, 99, 235, 0.4); }
    .btn-glow-blue:active { transform: scale(0.96); }
    .text-glow { text-shadow: 0 0 12px rgba(56, 189, 248, 0.4); }
  </style>
</head>
<body class="flex justify-center items-center min-h-screen bg-black p-0 md:p-4">
  <div id="app-container" class="relative w-full max-w-[420px] h-[100vh] md:h-[860px] bg-stage-black md:rounded-[36px] overflow-hidden shadow-2xl border-0 md:border border-white/10 flex flex-col justify-between">
`;

fs.writeFileSync('index.html', part1, 'utf8');
console.log('Part 1 written');
