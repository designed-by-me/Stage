const fs = require('fs');

let p1 = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>STAGE - Digital Talent Arena</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            heading: ['"Outfit"', 'sans-serif']
          },
          colors: {
            stage: {
              black: '#030712',
              dark: '#080E1E',
              card: '#0F172A',
              cardLight: '#1E293B',
              border: '#1E293B',
              blueBorder: 'rgba(59, 130, 246, 0.35)',
              primary: '#2563EB',
              cyan: '#00D2FF'
            }
          }
        }
      }
    }
  </script>
  <style>
    body { background-color: #02040A; color: #F8FAFC; font-family: 'Plus Jakarta Sans', sans-serif; user-select: none; }
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    .blue-gradient { background: linear-gradient(135deg, #00D2FF 0%, #2563EB 50%, #1D4ED8 100%); }
    .blue-glow-text { background: linear-gradient(135deg, #BAE6FD 0%, #60A5FA 50%, #38BDF8 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .glass-card { background: rgba(15, 23, 42, 0.75); backdrop-filter: blur(16px); border: 1px solid rgba(59, 130, 246, 0.25); }
    .neon-border { border: 1px solid rgba(0, 210, 255, 0.4); box-shadow: 0 0 15px rgba(0, 210, 255, 0.15); }
    .blue-glow-btn { background: linear-gradient(135deg, #00D2FF 0%, #2563EB 100%); box-shadow: 0 4px 20px rgba(37, 99, 235, 0.45); }
  </style>
</head>
<body class="flex justify-center items-center min-h-screen bg-black p-0 md:p-4">
  <div id="app-container" class="relative w-full max-w-[430px] h-[100vh] md:h-[880px] bg-stage-black md:rounded-[40px] overflow-hidden shadow-[0_0_50px_rgba(37,99,235,0.25)] border-0 md:border-[8px] border-neutral-900 flex flex-col justify-between">
`;
fs.writeFileSync('index.html', p1, 'utf8');
