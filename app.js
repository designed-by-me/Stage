const { useState, useEffect, useRef } = React;

// =========================================================
// BULLETPROOF LOGO COMPONENT
// =========================================================
function Logo({ className = "w-full h-auto" }) {
    const [useFallback, setUseFallback] = useState(false);
    const [srcIndex, setSrcIndex] = useState(0);
    const sources = [
        "/Images/Vector.svg"
    ];

    const handleError = () => {
        if (srcIndex < sources.length - 1) {
            setSrcIndex(prev => prev + 1);
        } else {
            setUseFallback(true);
        }
    };

    if (useFallback) {
        return (
            <div className={`flex flex-col items-center justify-center ${className}`}>
                <div className="flex items-center gap-1.5">
                    <svg className="w-8 h-8 text-white fill-current drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]" viewBox="0 0 24 24">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <span className="text-2xl font-black tracking-widest text-white uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
                        SPOTLIGHT
                    </span>
                </div>
            </div>
        );
    }

    return (
        <img
            src={sources[srcIndex]}
            alt="SPOTLIGHT"
            className={className}
            onError={handleError}
        />
    );
}

// =========================================================
// OFFICIAL APPLE VECTOR LOGO
// =========================================================
function AppleLogo({ className = "w-4 h-4 fill-current" }) {
    return (
        <svg viewBox="0 0 170 170" className={className}>
            <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.69-7.85-11.97-14.43-5.77-8.91-10.37-18.91-13.8-30-3.43-11.08-5.15-21.78-5.15-32.1 0-14.57 3.59-26.68 10.77-36.33 7.18-9.65 16.3-14.54 27.36-14.67 4.9.12 10.37 1.34 16.42 3.66 6.05 2.32 10.08 3.54 12.08 3.66 1.6-.12 5.76-1.39 12.49-3.81 6.73-2.43 12.59-3.52 17.58-3.29 13.5 1.08 24.16 6.35 31.98 15.82-11.85 7.19-17.65 17.06-17.41 29.6.24 9.87 4.04 18.06 11.4 24.57 7.37 6.51 16.27 10.08 26.71 10.7-2.22 6.64-4.83 13.1-7.83 19.38zM119.22 33.64c0-7.39 2.65-14.19 7.95-20.41 5.3-6.22 11.75-10.23 19.35-12.03.8 3.35 1.2 6.57 1.2 9.66 0 7.4-2.78 14.32-8.34 20.76-5.56 6.44-12.18 10.29-19.86 11.55-.2-.93-.3-2.58-.3-4.93z" />
        </svg>
    );
}

// =========================================================
// EXPANDED REELS DATA (FOR YOU & AUDITIONS)
// =========================================================

const sampleReels = [
    {
        id: "SPOTLIGHT-4092",
        name: "Tola Vocals",
        username: "@tola_vocals",
        email: "contact@tolavocals.com",
        category: "🎤 Singing & Music",
        region: "West Region",
        weekTag: "Week 3 Submission",
        representation: "Unsigned (Available)",
        askingRate: "$1,500 – $3,000",
        winnerBadge: "🏆 Season 2 Champion",
        fanClubCount: 14200,
        caption: "Acoustic live cover for Week 3 Task 🔥 Double-tap to like & invest in the Breakout Pool!",
        bgImg: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1080&h=1920&fit=crop",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300",
        likes: 18420,
        breakoutPool: {
            poolId: "POOL-4092",
            milestone: "Major Record Label Signing by Q4 2026",
            totalCredits: 38500,
            backers: 142,
            multiplier: "3.2x",
            closingDate: "Dec 31, 2026"
        },
        comments: [
            { user: "@sarah_k", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100", text: "Incredible vocal run at 0:24! 🔥", time: "2h" },
            { user: "@dami_west", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100", text: "West region representing! 🌟", time: "1h" }
        ]
    },
    {
        id: "SPOTLIGHT-6620",
        name: "Zainab Couture",
        username: "@zainab_couture",
        email: "atelier@zainabcouture.design",
        category: "👗 Fashion & Runway",
        region: "North Region",
        weekTag: "Week 3 Runway Drop",
        representation: "Independent Designer",
        askingRate: "$2,500 – $6,000",
        winnerBadge: "✨ Sustainable Award",
        fanClubCount: 22400,
        caption: "Hand-dyed indigo structural trench coat piece 🧵 Built over 3 weeks of atelier craft!",
        bgImg: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1080&h=1920&fit=crop",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300",
        likes: 21900,
        breakoutPool: {
            poolId: "POOL-6620",
            milestone: "Paris Fashion Week Emerging Showcase Placement",
            totalCredits: 62000,
            backers: 280,
            multiplier: "4.5x",
            closingDate: "Jan 15, 2027"
        },
        comments: [
            { user: "@vogue_insider", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100", text: "The draping at the collar is pure art!", time: "3h" }
        ]
    },
    {
        id: "SPOTLIGHT-8841",
        name: "Malik Sculpt",
        username: "@malik_sculpts",
        email: "studio@maliksculpts.art",
        category: "🗿 Sculpture & 3D",
        region: "East Region",
        weekTag: "Week 2 Sculpture Entry",
        representation: "Unrepresented Artist",
        askingRate: "$3,000 – $7,500",
        winnerBadge: "⭐ Biennale Pick",
        fanClubCount: 11800,
        caption: "Carved mahogany & bronze fusion 'Ancestral Frequency' 🪵 Behind-the-scenes timelapse on Stories!",
        bgImg: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=1080&h=1920&fit=crop",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300",
        likes: 16750,
        breakoutPool: {
            poolId: "POOL-8841",
            milestone: "Solo International Museum Exhibition",
            totalCredits: 28400,
            backers: 115,
            multiplier: "3.6x",
            closingDate: "Nov 30, 2026"
        },
        comments: [
            { user: "@art_curator", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100", text: "Texture and weight distribution is phenomenal.", time: "5h" }
        ]
    },
    {
        id: "SPOTLIGHT-7731",
        name: "Elena Storm",
        username: "@elena_storm",
        email: "bookings@elenastormdance.com",
        category: "💃 Dance & Choreo",
        region: "East Region",
        weekTag: "Week 3 Submission",
        representation: "Independent Talent",
        askingRate: "$2,000 – $4,000",
        winnerBadge: "⚡ Regional MVP",
        fanClubCount: 19500,
        caption: "Afrobeat fusion studio routine for Week 3! East Region to the world ⚡",
        bgImg: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1080&h=1920&fit=crop",
        avatar: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300",
        likes: 18500,
        breakoutPool: {
            poolId: "POOL-7731",
            milestone: "National Tour Lead Choreographer",
            totalCredits: 45000,
            backers: 210,
            multiplier: "4.0x",
            closingDate: "Jan 10, 2027"
        },
        comments: [
            { user: "@groove_boss", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100", text: "The footwork at the beat drop!! 🔥🔥", time: "1h" }
        ]
    },
    {
        id: "SPOTLIGHT-9120",
        name: "David Vance",
        username: "@david_monologues",
        email: "management@davidvance.actor",
        category: "🎭 Acting & Monologue",
        region: "South Region",
        weekTag: "Week 3 Dramatic Monologue",
        representation: "Unsigned",
        askingRate: "$1,800 – $3,500",
        winnerBadge: "🎬 Best Screen Delivery",
        fanClubCount: 16300,
        caption: "Original 60s dramatic scene 'The Verdict'. Double-tap to vote for South Region!",
        bgImg: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=1080&h=1920&fit=crop",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300",
        likes: 14900,
        breakoutPool: {
            poolId: "POOL-9120",
            milestone: "Feature Film Lead Role Placement",
            totalCredits: 31000,
            backers: 165,
            multiplier: "3.8x",
            closingDate: "Dec 15, 2026"
        },
        comments: [
            { user: "@cinema_critic", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100", text: "Chills at the final line delivery.", time: "4h" }
        ]
    },
    {
        id: "SPOTLIGHT-5401",
        name: "Faith Okafor",
        username: "@faith_canvas",
        email: "atelier@faithokafor.art",
        category: "🎨 Visual Art & Paint",
        region: "West Region",
        weekTag: "Week 3 Canvas Live",
        representation: "Independent Artist",
        askingRate: "$2,200 – $5,000",
        winnerBadge: "🎨 Palette Master",
        fanClubCount: 13900,
        caption: "Live palette knife oil work 'Golden Metropolis' 🌆 Completed in 60 minutes on stage!",
        bgImg: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=1080&h=1920&fit=crop",
        avatar: "https://images.unsplash.com/photo-1547153760-18fc86324498?w=300",
        likes: 19800,
        breakoutPool: {
            poolId: "POOL-5401",
            milestone: "London Gallery Exhibition Showcase",
            totalCredits: 39500,
            backers: 190,
            multiplier: "3.4x",
            closingDate: "Jan 20, 2027"
        },
        comments: [
            { user: "@gallery_view", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100", text: "The lighting reflection on oil is so vibrant!", time: "2h" }
        ]
    }
];

const auditionReels = [
    {
        id: "SPOTLIGHT-4092",
        name: "Tola Vocals",
        username: "@tola_vocals",
        email: "contact@tolavocals.com",
        category: "🎤 Singing & Music",
        region: "West Region",
        weekTag: "Week 3 Official Audition",
        representation: "Unsigned",
        askingRate: "$1,500 – $3,000",
        winnerBadge: "🏆 Season 2 Champion",
        fanClubCount: 14200,
        caption: "Official Week 3 Competitive Audition Entry! Cast your votes to advance West Region 🔥",
        bgImg: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1080&h=1920&fit=crop",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300",
        likes: 24500,
        breakoutPool: {
            poolId: "POOL-4092",
            milestone: "Major Record Label Signing by Q4 2026",
            totalCredits: 38500,
            backers: 142,
            multiplier: "3.2x"
        },
        comments: [
            { user: "@audition_judge", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100", text: "Verified competitive entry for voting 🌟", time: "12m" }
        ]
    },
    {
        id: "SPOTLIGHT-6620",
        name: "Zainab Couture",
        username: "@zainab_couture",
        email: "atelier@zainabcouture.design",
        category: "👗 Fashion & Runway",
        region: "North Region",
        weekTag: "Week 3 Official Audition",
        representation: "Independent Designer",
        askingRate: "$2,500 – $6,000",
        winnerBadge: "✨ Sustainable Award",
        fanClubCount: 22400,
        caption: "Official 60s Runway Audition Drop! Vote to secure North Region's placement at Fashion Week!",
        bgImg: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1080&h=1920&fit=crop",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300",
        likes: 27800,
        breakoutPool: {
            poolId: "POOL-6620",
            milestone: "Paris Fashion Week Emerging Showcase Placement",
            totalCredits: 62000,
            backers: 280,
            multiplier: "4.5x"
        },
        comments: [
            { user: "@scout_kenny", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100", text: "Stunning tailoring craftsmanship.", time: "30m" }
        ]
    },
    {
        id: "SPOTLIGHT-7731",
        name: "Elena Storm",
        username: "@elena_storm",
        email: "bookings@elenastormdance.com",
        category: "💃 Dance & Choreo",
        region: "East Region",
        weekTag: "Week 3 Official Audition",
        representation: "Independent Talent",
        askingRate: "$2,000 – $4,000",
        winnerBadge: "⚡ Regional MVP",
        fanClubCount: 19500,
        caption: "Official Choreo Battle Entry for Week 3! Support East Region with your votes ⚡",
        bgImg: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1080&h=1920&fit=crop",
        avatar: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300",
        likes: 21300,
        breakoutPool: {
            poolId: "POOL-7731",
            milestone: "National Tour Lead Choreographer",
            totalCredits: 45000,
            backers: 210,
            multiplier: "4.0x"
        },
        comments: [
            { user: "@judge_dance", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100", text: "Sync precision is unmatched.", time: "18m" }
        ]
    },
    {
        id: "SPOTLIGHT-8841",
        name: "Malik Sculpt",
        username: "@malik_sculpts",
        email: "studio@maliksculpts.art",
        category: "🗿 Sculpture & 3D",
        region: "East Region",
        weekTag: "Week 3 Official Audition",
        representation: "Unrepresented Artist",
        askingRate: "$3,000 – $7,500",
        winnerBadge: "⭐ Biennale Pick",
        fanClubCount: 11800,
        caption: "Week 3 3D Sculpture Contestant Entry! Vote for East Region craft representation 🪵",
        bgImg: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=1080&h=1920&fit=crop",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300",
        likes: 19400,
        breakoutPool: {
            poolId: "POOL-8841",
            milestone: "Solo International Museum Exhibition",
            totalCredits: 28400,
            backers: 115,
            multiplier: "3.6x"
        },
        comments: [
            { user: "@sculptor_pro", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100", text: "A masterpiece in the making.", time: "1h" }
        ]
    }
];

const creativeCategoriesList = [
    { name: "Fashion & Runway", icon: "👗", key: "Fashion", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=720&h=1280&fit=crop", count: "120 Drops" },
    { name: "Sculpture & 3D", icon: "🗿", key: "Sculpture", img: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=720&h=1280&fit=crop", count: "64 Exhibits" },
    { name: "Music & Singing", icon: "🎤", key: "Singing", img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=720&h=1280&fit=crop", count: "310 Clips" },
    { name: "Dance & Choreo", icon: "💃", key: "Dancing", img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=720&h=1280&fit=crop", count: "195 Routines" },
    { name: "Acting & Monologue", icon: "🎭", key: "Acting", img: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=720&h=1280&fit=crop", count: "88 Monologues" },
    { name: "Visual Art & Paint", icon: "🎨", key: "Art", img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=720&h=1280&fit=crop", count: "142 Works" },
    { name: "Spoken Word & Poetry", icon: "📜", key: "Poetry", img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=720&h=1280&fit=crop", count: "95 Poems" },
    { name: "Filmmaking & VFX", icon: "🎬", key: "Film", img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=720&h=1280&fit=crop", count: "72 Shorts" },
    { name: "Crafts & Jewelry", icon: "✂️", key: "Craft", img: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=720&h=1280&fit=crop", count: "50 Crafts" },
    { name: "DJing & Beatmaking", icon: "🎧", key: "Beats", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=720&h=1280&fit=crop", count: "110 Tracks" }
];

// Full 100 Leaderboard Dataset
const sampleContestantNames = ["Tola Vocals", "Zainab Couture", "Malik Sculpt", "Elena Storm", "Marcus Drake", "Joy Amadi", "Kofi Words", "Ollie Tailoring", "Chioma Clay", "Kemi Streetwear", "David Vance", "Samson Reed", "Zack Martin", "Faith Okafor", "Leroy Banks", "Nora Vance", "Maya Blaze", "Tariq Pulse", "Sonia Keys", "Grace Lyrik"];
const regionsList = ["West", "East", "South", "North"];
const categoriesList = ["Music", "Fashion", "Sculpture", "Dance", "Acting", "Painting", "Poetry", "Film"];
const avatarsList = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=200",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
    "https://images.unsplash.com/photo-1547153760-18fc86324498?w=200"
];

const top100LeaderboardData = Array.from({ length: 100 }, (_, index) => {
    const rank = index + 1;
    const name = rank <= sampleContestantNames.length ? sampleContestantNames[rank - 1] : `Contestant ${rank}`;
    const region = regionsList[rank % regionsList.length];
    const category = categoriesList[rank % categoriesList.length];
    const avatar = avatarsList[rank % avatarsList.length];
    const id = `SPOTLIGHT-${1000 + rank * 37}`;
    return {
        rank,
        name,
        id,
        email: `contact@${name.toLowerCase().replace(/\s+/g, '')}.com`,
        region,
        category,
        img: avatar,
        weekTag: `Week ${((rank % 3) + 1)} Challenge`,
        representation: rank % 3 === 0 ? "Signed" : "Unsigned",
        askingRate: `$${800 + (rank * 30)} – $${1800 + (rank * 50)}`,
        fanClubCount: Math.floor(28000 / (rank * 0.4 + 1)),
        votesCount: Math.floor(45000 / (rank * 0.35 + 1)),
        breakoutPool: {
            poolId: `POOL-${1000 + rank * 37}`,
            milestone: rank % 2 === 0 ? "Major Label Signing" : "Paris Runway Showcase",
            totalCredits: Math.floor(65000 / (rank * 0.3 + 1)),
            backers: Math.floor(320 / (rank * 0.3 + 1)),
            multiplier: `${(2.0 + (rank * 0.05)).toFixed(1)}x`,
            closingDate: "Dec 2026"
        }
    };
});

// =========================================================
// MAIN APPLICATION
// =========================================================

function StageApp() {
    const [screen, setScreen] = useState('splash'); // 'splash', 'signup', 'main', 'camera'
    const [activeTab, setActiveTab] = useState('home'); // 'home', 'discover', 'rankings', 'profile'
    const [feedMode, setFeedMode] = useState('forYou');
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Leaderboard 30-Min Daily Timer & State (8:00 PM – 8:30 PM GMT+1)
    const [isTop10GoldenHourUnlocked, setIsTop10GoldenHourUnlocked] = useState(true);
    const [goldenHourSeconds, setGoldenHourSeconds] = useState(1458);

    // ARKCESS & Staking
    const [investTarget, setInvestTarget] = useState(null);
    const [userCredits, setUserCredits] = useState(3500);
    const [stakeAmount, setStakeAmount] = useState(250);
    const [fanClubsJoined, setFanClubsJoined] = useState({ "SPOTLIGHT-4092": true });
    const [viewingContestant, setViewingContestant] = useState(null);

    // Leaderboard Filter
    const [leaderboardTab, setLeaderboardTab] = useState('national');
    const [selectedRegion, setSelectedRegion] = useState('All');

    // User Profile
    const [user, setUser] = useState({
        name: "Alex Morgan",
        username: "@alex_morgan",
        email: "alex@example.com",
        phone: "+234 800 000 0000",
        bio: "Visual Artist & Creative Director • West Region 🎨",
        region: "WEST",
        role: "creator",
        contestantId: "SPOTLIGHT-4092",
        stakedPoolsCount: 3,
        totalVotesReceived: 4280,
        fansCount: 8940
    });

    // Modals & Drawers
    const [showLinkPay, setShowLinkPay] = useState(false);
    const [payTarget, setPayTarget] = useState({ name: "Tola Vocals", id: "SPOTLIGHT-4092" });
    const [showLinkPayTopUp, setShowLinkPayTopUp] = useState(false);
    const [showTikTokComments, setShowTikTokComments] = useState(false);
    const [showSearchModal, setShowSearchModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [showLiveArena, setShowLiveArena] = useState(false);

    // Reels Feed
    const [reelsData, setReelsData] = useState(sampleReels);
    const [likedReels, setLikedReels] = useState({});
    const [floatingHearts, setFloatingHearts] = useState([]);
    const [centerHeartBurst, setCenterHeartBurst] = useState(null);
    const [commentInput, setCommentInput] = useState('');
    const [currentReelIndex, setCurrentReelIndex] = useState(0);

    // Sunday Live Arena Chat & Reactions
    const [liveReactions, setLiveReactions] = useState([]);
    const [liveChatMessages, setLiveChatMessages] = useState([
        { user: "@scout_universal", text: "Watching the West & North creative heat closely! 🎯" },
        { user: "@judge_sarah", text: "The garment structure and vocals tonight are world class 🔥" }
    ]);
    const [liveChatInput, setLiveChatInput] = useState('');

    // Live Camera Studio
    const [isRecording, setIsRecording] = useState(false);
    const [recordingSeconds, setRecordingSeconds] = useState(0);
    const [cameraFacing, setCameraFacing] = useState('user');
    const [selectedMusicTrack, setSelectedMusicTrack] = useState('🔥 Spotlight Beats 115 BPM');
    const [showSubmitModal, setShowSubmitModal] = useState(false);
    const [hasCameraStream, setHasCameraStream] = useState(false);
    const videoRef = useRef(null);
    const timerRef = useRef(null);

    // Safe Lucide Icon Initialization
    useEffect(() => {
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }, [screen, activeTab, feedMode, showTikTokComments, showSearchModal, viewingContestant, isTop10GoldenHourUnlocked, showLiveArena]);

    // Golden Hour 30-Min Countdown Timer
    useEffect(() => {
        const ghTimer = setInterval(() => {
            setGoldenHourSeconds(prev => (prev > 0 ? prev - 1 : 1800));
        }, 1000);
        return () => clearInterval(ghTimer);
    }, []);

    const formatCountdown = (secs) => {
        const m = Math.floor(secs / 60);
        const s = secs % 60;
        return `00:${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
    };

    // Camera Stream Hook
    useEffect(() => {
        let stream = null;
        if (screen === 'camera') {
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                navigator.mediaDevices.getUserMedia({
                    video: { facingMode: cameraFacing },
                    audio: false
                }).then(s => {
                    stream = s;
                    if (videoRef.current) {
                        videoRef.current.srcObject = s;
                        videoRef.current.play();
                    }
                    setHasCameraStream(true);
                }).catch(err => {
                    console.log("Using simulated camera viewfinder:", err);
                    setHasCameraStream(false);
                });
            }
        }
        return () => {
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
        };
    }, [screen, cameraFacing]);

    // Recording Timer
    useEffect(() => {
        if (isRecording) {
            timerRef.current = setInterval(() => {
                setRecordingSeconds(prev => {
                    if (prev >= 60) {
                        setIsRecording(false);
                        setShowSubmitModal(true);
                        return 60;
                    }
                    return prev + 1;
                });
            }, 1000);
        } else {
            clearInterval(timerRef.current);
        }
        return () => clearInterval(timerRef.current);
    }, [isRecording]);

    const handleStartRecording = () => {
        setRecordingSeconds(0);
        setIsRecording(true);
    };

    const handleStopRecording = () => {
        setIsRecording(false);
        setShowSubmitModal(true);
    };

    const handlePublishAudition = () => {
        setShowSubmitModal(false);
        setScreen('main');
        setActiveTab('home');
        setFeedMode('auditions');
        alert("🎉 60s Challenge Audition Published to Spotlight Live Feed!");
    };

    const triggerLike = (reelId) => {
        const isNowLiked = !likedReels[reelId];
        setLikedReels(prev => ({ ...prev, [reelId]: isNowLiked }));

        if (isNowLiked) {
            setCenterHeartBurst(reelId);
            setTimeout(() => setCenterHeartBurst(null), 800);
        }

        const heartId = Date.now() + Math.random();
        const randomX = (Math.random() * 40) - 20;
        setFloatingHearts(prev => [...prev, { id: heartId, x: randomX }]);
        setTimeout(() => {
            setFloatingHearts(prev => prev.filter(h => h.id !== heartId));
        }, 1100);
    };

    const toggleFanClub = (performerId) => {
        setFanClubsJoined(prev => ({ ...prev, [performerId]: !prev[performerId] }));
    };

    const handleStakeBreakoutPool = (e) => {
        e.preventDefault();
        if (userCredits < stakeAmount) {
            alert("Insufficient credits. Top up your ARKCESS wallet.");
            return;
        }
        setUserCredits(prev => prev - stakeAmount);
        setUser(prev => ({ ...prev, stakedPoolsCount: prev.stakedPoolsCount + 1 }));
        alert(`🎉 Invested ${stakeAmount} Credits into ${investTarget.name}'s Breakout Pool!`);
        setInvestTarget(null);
    };

    const handleSendComment = (e) => {
        e.preventDefault();
        if (!commentInput.trim()) return;
        const newComment = {
            user: `@${user.name.toLowerCase().replace(/\s+/g, '_')}`,
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100",
            text: commentInput,
            time: "Just now"
        };
        setReelsData(prev => prev.map((r, i) => i === currentReelIndex ? { ...r, comments: [newComment, ...(r.comments || [])] } : r));
        setCommentInput('');
    };

    const sendLiveReaction = (emoji) => {
        const rId = Date.now() + Math.random();
        const randomX = (Math.random() * 60) - 30;
        setLiveReactions(prev => [...prev, { id: rId, emoji, x: randomX }]);
        setTimeout(() => {
            setLiveReactions(prev => prev.filter(r => r.id !== rId));
        }, 1200);
    };

    const handleSendLiveChat = (e) => {
        e.preventDefault();
        if (!liveChatInput.trim()) return;
        setLiveChatMessages(prev => [...prev, { user: `@${user.name.toLowerCase().replace(/\s+/g, '_')}`, text: liveChatInput }]);
        setLiveChatInput('');
    };

    // Leaderboard Filtering & Slicing
    const filteredLeaderboard = top100LeaderboardData.filter(c => {
        if (leaderboardTab === 'national' || leaderboardTab === 'global') return true;
        if (selectedRegion === 'All') return true;
        return c.region.toLowerCase() === selectedRegion.toLowerCase();
    });

    const top10List = filteredLeaderboard.slice(0, 10);
    const top1 = top10List[0];
    const top2 = top10List[1];
    const top3 = top10List[2];
    const top4to10 = top10List.slice(3, 10);
    const ranks80to100 = filteredLeaderboard.slice(79, 100);

    const displayedReels = feedMode === 'forYou' ? reelsData : auditionReels;

    return (
        <div className="w-full h-full relative flex flex-col justify-between bg-black overflow-hidden select-none font-sans">

            {/* ========================================================= */}
            {/* 1. SPLASH SCREEN (40% Opacity + Deep Diffused Blur)       */}
            {/* ========================================================= */}
            {screen === 'splash' && (
                <div className="absolute inset-0 z-50 flex flex-col justify-between p-6 bg-black text-center overflow-hidden animate-fadeIn">

                    <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-72 h-20 bg-white/40 blur-3xl rounded-full z-10 pointer-events-none"></div>

                        <svg
                            viewBox="0 0 400 800"
                            className="absolute top-0 w-full h-[90%] preserve-3d animate-beam-sway"
                            style={{
                                opacity: 0.40,
                                filter: "blur(22px) drop-shadow(0 0 35px rgba(255, 255, 255, 0.4))"
                            }}
                        >
                            <defs>
                                <linearGradient id="softBeamGrad" x1="50%" y1="0%" x2="50%" y2="100%">
                                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                                    <stop offset="30%" stopColor="#ffffff" stopOpacity="0.4" />
                                    <stop offset="70%" stopColor="#ffffff" stopOpacity="0.12" />
                                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                                </linearGradient>
                                <linearGradient id="softCoreRay" x1="50%" y1="0%" x2="50%" y2="100%">
                                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                                    <stop offset="35%" stopColor="#ffffff" stopOpacity="0.5" />
                                    <stop offset="80%" stopColor="#ffffff" stopOpacity="0.08" />
                                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <polygon points="175,0 225,0 400,780 0,780" fill="url(#softBeamGrad)" />
                            <polygon points="190,0 210,0 320,720 80,720" fill="url(#softCoreRay)" />
                        </svg>

                        <div
                            className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[340px] h-[100px] rounded-full animate-pulse-glow pointer-events-none"
                            style={{
                                background: "radial-gradient(ellipse at center, rgba(255,255,255,0.40) 0%, rgba(255,255,255,0.15) 50%, transparent 80%)",
                                filter: "blur(28px)"
                            }}
                        ></div>
                    </div>

                    <div className="relative z-20 flex-1 flex flex-col items-center justify-center -mt-6">
                        <div className="w-56 max-w-[85vw] drop-shadow-[0_0_30px_rgba(255,255,255,0.85)] transition-all duration-300 transform hover:scale-105">
                            <Logo className="w-full h-auto" />
                        </div>
                        <p className="text-[11px] text-white/70 font-semibold tracking-widest uppercase mt-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                            The Global Stage Arena
                        </p>
                    </div>

                    <div className="relative z-20 pb-8">
                        <button
                            onClick={() => setScreen('signup')}
                            className="w-full py-4 rounded-full bg-white text-black font-extrabold text-xs flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.3)] whitespace-nowrap active:scale-95 transition"
                        >
                            <span>Enter Spotlight</span>
                            <i data-lucide="arrow-right" className="w-4 h-4 text-black stroke-[3]"></i>
                        </button>
                    </div>
                </div>
            )}

            {/* ========================================================= */}
            {/* 2. SIGN UP SCREEN                                         */}
            {/* ========================================================= */}
            {screen === 'signup' && (
                <div className="absolute inset-0 z-50 flex flex-col justify-start gap-3.5 p-5 bg-black overflow-y-auto pb-12 animate-fadeIn">
                    <div className="flex items-center gap-3 pt-1 shrink-0">
                        <button onClick={() => setScreen('splash')} className="p-2.5 rounded-full ios-glass text-white active:scale-95 transition">
                            <i data-lucide="chevron-left" className="w-4 h-4"></i>
                        </button>
                        <div>
                            <h2 className="text-base font-bold text-white tracking-tight">Create Account</h2>
                            <p className="text-[10px] text-zinc-400">Join the creative discovery arena</p>
                        </div>
                    </div>

                    <div className="relative rounded-[24px] overflow-hidden shrink-0 shadow-lg">
                        <img
                            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1080&h=480&fit=crop"
                            alt="Spotlight Stage"
                            className="w-full h-24 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-3 text-center">
                            <div className="inline-flex items-center justify-center gap-1 px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[8px] font-bold uppercase tracking-wider mx-auto mb-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                                Weekly Creative Tasks
                            </div>
                            <div className="text-base font-black text-white tracking-tight drop-shadow-md">
                                Win $20,000 & Get Discovered
                            </div>
                            <p className="text-[9px] text-zinc-300 font-medium drop-shadow">
                                Fashion • Art • Music • Dance • 3D Craft
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 shrink-0">
                        <button
                            type="button"
                            onClick={() => { setUser({ ...user, name: "Google Creator" }); setScreen('main'); }}
                            className="py-2.5 px-3 rounded-full bg-white text-black font-semibold text-xs flex items-center justify-center gap-2 whitespace-nowrap shadow-md active:scale-95 transition"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24">
                                <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.3 9 5 12 5z" />
                                <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z" />
                                <path fill="#FBBC05" d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 12.3 0 15.1c0 2.8.7 5.4 1.9 7.8l3.7-2.9z" />
                                <path fill="#34A853" d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.3-6.4-5.2L1.9 16c1.8 3.7 5.6 6.3 10.1 6.3z" />
                            </svg>
                            <span>Google</span>
                        </button>

                        <button
                            type="button"
                            onClick={() => { setUser({ ...user, name: "Apple Creator" }); setScreen('main'); }}
                            className="py-2.5 px-3 rounded-full ios-glass text-white font-semibold text-xs flex items-center justify-center gap-2 whitespace-nowrap active:scale-95 transition"
                        >
                            <AppleLogo className="w-4 h-4 fill-white" />
                            <span>Apple</span>
                        </button>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 my-0.5">
                        <div className="flex-1 h-px bg-white/10"></div>
                        <span className="text-[9px] text-zinc-400 font-bold uppercase tracking-wider">Or Email</span>
                        <div className="flex-1 h-px bg-white/10"></div>
                    </div>

                    <form onSubmit={(e) => { e.preventDefault(); setScreen('main'); }} className="space-y-2.5 shrink-0">
                        <input
                            type="text"
                            placeholder="Your Name or Brand"
                            value={user.name}
                            onChange={e => setUser({ ...user, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-2xl ios-glass text-white text-xs placeholder:text-zinc-500 focus:outline-none focus:border-white/40 transition"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={user.email}
                            onChange={e => setUser({ ...user, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-2xl ios-glass text-white text-xs placeholder:text-zinc-500 focus:outline-none focus:border-white/40 transition"
                            required
                        />

                        <div className="grid grid-cols-3 gap-1.5 pt-0.5">
                            <button
                                type="button"
                                onClick={() => setUser({ ...user, role: 'creator' })}
                                className={`p-2 rounded-2xl border text-center transition ${user.role === 'creator' ? 'border-white bg-white text-black font-bold shadow-md' : 'border-white/10 ios-glass text-zinc-400'}`}
                            >
                                <div className="font-bold text-[10px]"><i data-lucide="sparkles" className="w-3.5 h-3.5 mx-auto mb-0.5"></i> Creator</div>
                                <div className="text-[8px] mt-0.5 truncate">Post & Compete</div>
                            </button>
                            <button
                                type="button"
                                onClick={() => setUser({ ...user, role: 'audience' })}
                                className={`p-2 rounded-2xl border text-center transition ${user.role === 'audience' ? 'border-white bg-white text-black font-bold shadow-md' : 'border-white/10 ios-glass text-zinc-400'}`}
                            >
                                <div className="font-bold text-[10px]"><i data-lucide="trending-up" className="w-3.5 h-3.5 mx-auto mb-0.5"></i> Patron</div>
                                <div className="text-[8px] mt-0.5 truncate">Vote & Invest</div>
                            </button>
                            <button
                                type="button"
                                onClick={() => setUser({ ...user, role: 'scout' })}
                                className={`p-2.5 rounded-2xl border text-center transition ${user.role === 'scout' ? 'border-white bg-white text-black font-bold shadow-md' : 'border-white/10 ios-glass text-zinc-400'}`}
                            >
                                <div className="font-bold text-[10px]"><i data-lucide="briefcase" className="w-3.5 h-3.5 mx-auto mb-0.5"></i> Scout</div>
                                <div className="text-[8px] mt-0.5 truncate">A&R & Hire</div>
                            </button>
                        </div>

                        <button type="submit" className="w-full mt-1 py-3.5 rounded-full btn-electric text-white font-bold text-xs shadow-lg whitespace-nowrap active:scale-95 transition">
                            Enter Spotlight
                        </button>
                    </form>
                </div>
            )}

            {/* ========================================================= */}
            {/* 3. LIVE RECORDING CAMERA STUDIO                           */}
            {/* ========================================================= */}
            {screen === 'camera' && (
                <div className="absolute inset-0 z-50 flex flex-col justify-between bg-black overflow-hidden animate-fadeIn">
                    <div className="absolute inset-0 z-0 bg-slate-950">
                        {hasCameraStream ? (
                            <video
                                ref={videoRef}
                                autoPlay
                                playsInline
                                muted
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full relative">
                                <img
                                    src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1080&h=1920&fit=crop"
                                    className="w-full h-full object-cover opacity-75"
                                />
                                <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>
                            </div>
                        )}
                    </div>

                    <div className="relative z-20 p-4 pt-5 flex items-center justify-between">
                        <button
                            onClick={() => { setIsRecording(false); setScreen('main'); }}
                            className="p-2.5 rounded-full ios-glass text-white"
                        >
                            <i data-lucide="x" className="w-4 h-4"></i>
                        </button>

                        <div className="px-3.5 py-1.5 rounded-full ios-glass text-white text-xs font-semibold flex items-center gap-1.5 shadow">
                            <i data-lucide="music" className="w-3.5 h-3.5 text-blue-400"></i>
                            <span className="truncate max-w-[150px]">{selectedMusicTrack}</span>
                        </div>

                        <button
                            onClick={() => setCameraFacing(prev => prev === 'user' ? 'environment' : 'user')}
                            className="p-2.5 rounded-full ios-glass text-white"
                        >
                            <i data-lucide="refresh-cw" className="w-4 h-4"></i>
                        </button>
                    </div>

                    {isRecording && (
                        <div className="relative z-20 flex flex-col items-center">
                            <div className="px-4 py-1.5 rounded-full bg-red-600/90 text-white font-bold text-sm tracking-widest animate-pulse border border-white/30 shadow-lg">
                                00:{recordingSeconds < 10 ? `0${recordingSeconds}` : recordingSeconds} / 60s
                            </div>
                        </div>
                    )}

                    <div className="relative z-20 p-6 pb-8 flex items-center justify-around">
                        <div className="w-10"></div>

                        <div className="relative flex items-center justify-center">
                            <div className={`w-20 h-20 rounded-full border-4 ${isRecording ? 'border-red-500 animate-spin' : 'border-white'} flex items-center justify-center`}>
                                <button
                                    onClick={isRecording ? handleStopRecording : handleStartRecording}
                                    className={`rounded-full transition-all duration-200 ${isRecording ? 'w-8 h-8 rounded-lg bg-red-500' : 'w-14 h-14 bg-white shadow-xl'}`}
                                >
                                </button>
                            </div>
                        </div>

                        <button
                            onClick={() => alert("Effect: Stage Spotlight Filter ⚡")}
                            className="p-2.5 rounded-full ios-glass text-white"
                        >
                            <i data-lucide="sparkles" className="w-5 h-5 text-amber-300"></i>
                        </button>
                    </div>

                    {showSubmitModal && (
                        <div className="absolute inset-0 z-50 flex flex-col justify-end bg-black/80 backdrop-blur-md p-4 animate-fadeIn">
                            <div className="ios-glass-thick rounded-[32px] p-5 border-white/20">
                                <div className="w-9 h-1 rounded-full bg-white/25 mx-auto mb-3 shrink-0"></div>

                                <h3 className="text-base font-bold text-white mb-1">Publish Challenge Audition</h3>
                                <p className="text-[10px] text-zinc-300 mb-3">60s clip recorded • Ready for National Leaderboard</p>

                                <div className="space-y-2.5 mb-4">
                                    <input
                                        type="text"
                                        placeholder="Add a caption & tags (#WestRegion #Spotlight2026)..."
                                        defaultValue="Week 3 Official Challenge Submission 🔥"
                                        className="w-full px-4 py-3 rounded-2xl ios-glass text-white text-xs focus:outline-none"
                                    />
                                    <div className="flex justify-between text-xs text-zinc-300 px-1">
                                        <span>Category:</span>
                                        <strong className="text-white">🎤 Music & Vocal Run</strong>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-2">
                                    <button
                                        onClick={() => setShowSubmitModal(false)}
                                        className="py-3 rounded-full ios-glass text-white font-semibold text-xs"
                                    >
                                        Retake
                                    </button>
                                    <button
                                        onClick={handlePublishAudition}
                                        className="py-3 rounded-full btn-electric text-white font-bold text-xs shadow-lg"
                                    >
                                        Publish Entry 🚀
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* ========================================================= */}
            {/* 4. MAIN PORTAL                                            */}
            {/* ========================================================= */}
            {screen === 'main' && (
                <div className="flex-1 relative overflow-hidden flex flex-col h-full bg-black">

                    {/* TAB 1: HOME REELS */}
                    {activeTab === 'home' && (
                        <div className="absolute inset-0 flex flex-col bg-black">
                            <div className="absolute top-3 left-4 right-4 z-30 flex justify-between items-center pt-2">
                                <div className="w-16">
                                    <Logo className="w-full h-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
                                </div>

                                <div className="ios-segmented flex gap-1 p-0.5">
                                    <button
                                        onClick={() => setFeedMode('forYou')}
                                        className={`px-3 py-1 rounded-full text-xs transition whitespace-nowrap ${feedMode === 'forYou' ? 'ios-segmented-active' : 'text-zinc-400 font-medium'}`}
                                    >
                                        For You
                                    </button>
                                    <button
                                        onClick={() => setFeedMode('auditions')}
                                        className={`px-3 py-1 rounded-full text-xs transition whitespace-nowrap ${feedMode === 'auditions' ? 'ios-segmented-active' : 'text-zinc-400 font-medium'}`}
                                    >
                                        Auditions
                                    </button>
                                </div>

                                <div className="flex items-center gap-2">
                                    <button onClick={() => setShowSearchModal(true)} className="p-2 rounded-full ios-glass text-white">
                                        <i data-lucide="search" className="w-4 h-4"></i>
                                    </button>
                                </div>
                            </div>

                            <div
                                className="vertical-reels-slider"
                                onScroll={(e) => {
                                    const idx = Math.round(e.currentTarget.scrollTop / e.currentTarget.offsetHeight);
                                    setCurrentReelIndex(idx);
                                }}
                            >
                                {displayedReels.map((reel) => (
                                    <div
                                        key={reel.id}
                                        onDoubleClick={() => triggerLike(reel.id)}
                                        className="vertical-reel-slide"
                                    >
                                        <img src={reel.bgImg} className="absolute inset-0 w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 pointer-events-none"></div>

                                        {centerHeartBurst === reel.id && (
                                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30 animate-ping">
                                                <span className="text-7xl filter drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">❤️</span>
                                            </div>
                                        )}

                                        {floatingHearts.map(h => (
                                            <div key={h.id} className="floating-heart text-red-500 text-2xl right-6 bottom-40" style={{ left: `calc(80% + ${h.x}px)` }}>
                                                ❤️
                                            </div>
                                        ))}

                                        <div className="absolute right-3.5 bottom-24 z-20 flex flex-col items-center gap-3">
                                            <div onClick={() => setViewingContestant(reel)} className="relative mb-1 cursor-pointer">
                                                <img src={reel.avatar} className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-lg" />
                                                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white text-black flex items-center justify-center text-[10px] font-black">+</div>
                                            </div>

                                            {feedMode === 'auditions' && (
                                                <button onClick={() => { setPayTarget({ name: reel.name, id: reel.id }); setShowLinkPay(true); }} className="flex flex-col items-center group">
                                                    <div className="w-12 h-12 rounded-full btn-card-vote flex items-center justify-center shadow-lg">
                                                        <i data-lucide="zap" className="w-5 h-5 fill-white text-white"></i>
                                                    </div>
                                                    <span className="text-[10px] font-bold text-white mt-1 whitespace-nowrap">VOTE</span>
                                                </button>
                                            )}

                                            <button onClick={() => setInvestTarget(reel)} className="flex flex-col items-center text-white">
                                                <div className="p-2.5 rounded-full ios-glass">
                                                    <i data-lucide="trending-up" className="w-5 h-5 text-white"></i>
                                                </div>
                                                <span className="text-[9px] font-semibold text-white mt-0.5 whitespace-nowrap">INVEST</span>
                                            </button>

                                            <button onClick={() => triggerLike(reel.id)} className="flex flex-col items-center text-white">
                                                <div className="p-2.5 rounded-full ios-glass">
                                                    <i data-lucide="heart" className={`w-5 h-5 ${likedReels[reel.id] ? 'text-red-500 fill-red-500' : ''}`}></i>
                                                </div>
                                                <span className="text-[10px] font-semibold mt-0.5 whitespace-nowrap">
                                                    {(reel.likes + (likedReels[reel.id] ? 1 : 0)).toLocaleString()}
                                                </span>
                                            </button>

                                            <button onClick={() => setShowTikTokComments(true)} className="flex flex-col items-center text-white">
                                                <div className="p-2.5 rounded-full ios-glass">
                                                    <i data-lucide="message-circle" className="w-5 h-5"></i>
                                                </div>
                                                <span className="text-[10px] font-semibold mt-0.5 whitespace-nowrap">{reel.comments?.length || 0}</span>
                                            </button>
                                        </div>

                                        <div
                                            onClick={() => setShowTikTokComments(true)}
                                            className="absolute left-4 right-20 bottom-20 z-20 text-left cursor-pointer"
                                        >
                                            <div className="flex items-center gap-1.5 mb-1" onClick={(e) => { e.stopPropagation(); setViewingContestant(reel); }}>
                                                <span className="font-bold text-sm text-white hover:underline tracking-tight">{reel.username}</span>
                                                <span className="px-2 py-0.5 rounded-full ios-glass text-white text-[9px] font-semibold">ID: {reel.id}</span>
                                            </div>
                                            <p className="text-[11px] text-zinc-200 line-clamp-2 mb-1.5 font-normal">{reel.caption}</p>

                                            <div className="flex items-center gap-1.5 flex-wrap">
                                                <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-white font-semibold text-[9px] border border-white/20 whitespace-nowrap">
                                                    📅 {reel.weekTag}
                                                </span>
                                                <span className="px-2.5 py-0.5 rounded-full ios-glass text-[9px] text-zinc-300 whitespace-nowrap">{reel.category}</span>
                                                <span className="px-2.5 py-0.5 rounded-full ios-glass text-[9px] text-white whitespace-nowrap">{reel.region}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* TAB 2: DISCOVER / CATEGORIES (WITH PINNED SUNDAY LIVE STAGE ARENA) */}
                    {activeTab === 'discover' && (
                        <div className="absolute inset-0 flex flex-col bg-black p-4 overflow-y-auto pb-32 animate-fadeIn">
                            <div className="flex items-center justify-between mb-3 pt-1 shrink-0">
                                <div className="w-20">
                                    <Logo className="w-full h-auto" />
                                </div>
                            </div>

                            {/* SUNDAY LIVE STAGE ARENA BANNER TAB */}
                            <div
                                onClick={() => setShowLiveArena(true)}
                                className="ios-card rounded-[26px] p-4 mb-3 shrink-0 border-red-500/30 bg-gradient-to-r from-red-950/30 via-zinc-900/60 to-black cursor-pointer active:scale-98 transition shadow-lg relative overflow-hidden"
                            >
                                <div className="flex items-center justify-between mb-1">
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
                                        <span className="text-[10px] font-black text-red-400 uppercase tracking-widest">Sunday Live Arena</span>
                                    </div>
                                    <span className="px-2.5 py-0.5 rounded-full ios-glass text-[9px] font-bold text-white">8:00 PM GMT+1</span>
                                </div>
                                <h3 className="text-sm font-bold text-white tracking-tight">Judges Stage, Live Scoring & ARKCESS Multiplier</h3>
                                <div className="mt-2.5 flex items-center justify-between">
                                    <span className="text-[9px] text-zinc-300 font-medium">Broadcasts weekly with live audience vote power</span>
                                    <button className="px-3.5 py-1.5 rounded-full btn-electric text-white font-bold text-[9px] shadow whitespace-nowrap">
                                        Enter Live ➔
                                    </button>
                                </div>
                            </div>

                            {/* WEEKLY CHALLENGE CONTEST BANNER */}
                            <div
                                onClick={() => setScreen('camera')}
                                className="ios-card rounded-[26px] p-4 border-white/10 mb-3.5 shrink-0 relative overflow-hidden cursor-pointer active:scale-98 transition shadow-lg"
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/10 text-white text-[9px] font-bold uppercase border border-white/15 mb-1">
                                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                                            Weekly Challenge #3
                                        </div>
                                        <h2 className="text-base font-bold text-white tracking-tight">Win $20,000 Prize</h2>
                                    </div>
                                    <div className="w-9 h-9 rounded-2xl ios-glass flex items-center justify-center">
                                        <i data-lucide="trophy" className="w-4 h-4 text-white"></i>
                                    </div>
                                </div>
                                <p className="text-[10px] text-zinc-300 mt-0.5 font-normal">
                                    60s Challenge across Fashion, Art, Dance & Music
                                </p>
                            </div>

                            {/* 10 CREATIVE CATEGORIES GRID */}
                            <div className="shrink-0">
                                <h3 className="text-xs font-bold text-white mb-2 flex items-center gap-1.5 tracking-tight">
                                    <i data-lucide="package-open" className="w-4 h-4 text-white"></i> Creative Disciplines & Heat
                                </h3>
                                <div className="grid grid-cols-2 gap-2.5">
                                    {creativeCategoriesList.map((cat, idx) => (
                                        <div
                                            key={idx}
                                            onClick={() => setSelectedCategory(cat.key)}
                                            className="aspect-[9/16] relative rounded-[24px] overflow-hidden cursor-pointer border border-white/10 active:scale-95 transition shadow-lg group"
                                        >
                                            <img src={cat.img} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent flex flex-col justify-end p-3">
                                                <div className="font-bold text-xs text-white">{cat.icon} {cat.name}</div>
                                                <div className="text-[9px] text-zinc-300">{cat.count} • Ranked ➔</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* TAB 3: RANKINGS (Top 10 + 30-Min Window & Ranks 80–100 Constant) */}
                    {activeTab === 'rankings' && (
                        <div className="absolute inset-0 flex flex-col bg-black p-4 overflow-y-auto pb-28">
                            <div className="flex items-center justify-between mb-3 pt-1">
                                <div>
                                    <h1 className="text-base font-bold text-white tracking-tight">
                                        {leaderboardTab === 'national' ? 'National Leaderboard' : leaderboardTab === 'global' ? 'Global Super Rankings' : `${selectedRegion} Regional Heat`}
                                    </h1>
                                    <p className="text-[10px] text-zinc-400">Official Standings & Advancement</p>
                                </div>
                                <div className="px-3 py-1 rounded-full ios-glass text-white text-[10px] font-semibold">
                                    {isTop10GoldenHourUnlocked ? "⚡ Top 10 Live" : "🔒 Top 10 Locked"}
                                </div>
                            </div>

                            <div className="ios-segmented flex gap-1 p-0.5 mb-3">
                                <button onClick={() => setLeaderboardTab('national')} className={`flex-1 py-1.5 rounded-full text-xs transition whitespace-nowrap ${leaderboardTab === 'national' ? 'ios-segmented-active' : 'text-zinc-400 font-medium'}`}>
                                    National
                                </button>
                                <button onClick={() => setLeaderboardTab('regional')} className={`flex-1 py-1.5 rounded-full text-xs transition whitespace-nowrap ${leaderboardTab === 'regional' ? 'ios-segmented-active' : 'text-zinc-400 font-medium'}`}>
                                    Regional
                                </button>
                                <button onClick={() => setLeaderboardTab('global')} className={`flex-1 py-1.5 rounded-full text-xs transition whitespace-nowrap ${leaderboardTab === 'global' ? 'ios-segmented-active' : 'text-zinc-400 font-medium'}`}>
                                    Global
                                </button>
                            </div>

                            {/* 30-MINUTE DAILY GOLDEN WINDOW BANNER */}
                            <div className="ios-card rounded-[22px] p-3 border-amber-400/30 mb-3.5 bg-amber-950/20 flex items-center justify-between">
                                <div>
                                    <div className="text-[9px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"></span>
                                        Daily 30-Min Window (8:00 PM – 8:30 PM GMT+1)
                                    </div>
                                    <div className="text-xs font-bold text-white mt-0.5">
                                        {isTop10GoldenHourUnlocked
                                            ? `Top 10 Live (${formatCountdown(goldenHourSeconds)} Remaining)`
                                            : "Locked • Reveals 30 Mins Daily"}
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsTop10GoldenHourUnlocked(!isTop10GoldenHourUnlocked)}
                                    className={`px-3 py-1.5 rounded-full text-[9px] font-bold whitespace-nowrap transition shadow-md ${isTop10GoldenHourUnlocked
                                        ? 'bg-amber-400 text-black border border-amber-300'
                                        : 'bg-white text-black border border-white'
                                        }`}
                                >
                                    {isTop10GoldenHourUnlocked ? "Hide Top 10" : "Reveal Top 10"}
                                </button>
                            </div>

                            {/* TOP 10 PODIUM & LIST */}
                            {isTop10GoldenHourUnlocked ? (
                                <div className="mb-4 animate-fadeIn">
                                    <div className="text-[10px] font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                                        <i data-lucide="crown" className="w-3.5 h-3.5 text-amber-400"></i> Top 10 Standings
                                    </div>

                                    <div className="grid grid-cols-3 gap-2 mb-3 items-end pt-2">
                                        {top2 && (
                                            <div onClick={() => setViewingContestant(top2)} className="ios-card rounded-[22px] p-2 flex flex-col items-center text-center cursor-pointer active:scale-95 transition">
                                                <div className="w-4 h-4 rounded-full bg-zinc-300 text-black font-extrabold text-[9px] flex items-center justify-center mb-1">#2</div>
                                                <img src={top2.img} className="w-10 h-10 rounded-full object-cover border border-zinc-300 mb-1" />
                                                <div className="font-bold text-[10px] text-white truncate w-full">{top2.name}</div>
                                                <button onClick={(e) => { e.stopPropagation(); setPayTarget({ name: top2.name, id: top2.id }); setShowLinkPay(true); }} className="mt-1.5 w-full py-1 rounded-full btn-card-vote font-bold text-[8px] whitespace-nowrap">Vote</button>
                                            </div>
                                        )}
                                        {top1 && (
                                            <div onClick={() => setViewingContestant(top1)} className="ios-card rounded-[22px] p-2.5 flex flex-col items-center text-center cursor-pointer border-2 border-amber-400/80 -translate-y-2 shadow-[0_0_18px_rgba(251,191,36,0.35)] active:scale-95 transition relative">
                                                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-amber-400 text-black font-black text-[8px] uppercase">👑 1st</div>
                                                <img src={top1.img} className="w-12 h-12 rounded-full object-cover border-2 border-amber-400 mt-1 mb-1" />
                                                <div className="font-bold text-[11px] text-white truncate w-full">{top1.name}</div>
                                                <button onClick={(e) => { e.stopPropagation(); setPayTarget({ name: top1.name, id: top1.id }); setShowLinkPay(true); }} className="mt-1.5 w-full py-1 rounded-full btn-card-vote font-bold text-[9px] whitespace-nowrap shadow">Vote</button>
                                            </div>
                                        )}
                                        {top3 && (
                                            <div onClick={() => setViewingContestant(top3)} className="ios-card rounded-[22px] p-2 flex flex-col items-center text-center cursor-pointer active:scale-95 transition">
                                                <div className="w-4 h-4 rounded-full bg-amber-700 text-white font-extrabold text-[9px] flex items-center justify-center mb-1">#3</div>
                                                <img src={top3.img} className="w-10 h-10 rounded-full object-cover border border-amber-700 mb-1" />
                                                <div className="font-bold text-[10px] text-white truncate w-full">{top3.name}</div>
                                                <button onClick={(e) => { e.stopPropagation(); setPayTarget({ name: top3.name, id: top3.id }); setShowLinkPay(true); }} className="mt-1.5 w-full py-1 rounded-full btn-card-vote font-bold text-[8px] whitespace-nowrap">Vote</button>
                                            </div>
                                        )}
                                    </div>

                                    <div className="space-y-1 divide-y divide-white/5 ios-card rounded-[22px] p-1.5">
                                        {top4to10.map(c => (
                                            <div key={c.id} onClick={() => setViewingContestant(c)} className="py-2 px-1 flex items-center justify-between cursor-pointer hover:bg-white/5 rounded-xl transition">
                                                <div className="flex items-center gap-2.5">
                                                    <span className="w-5 text-center font-bold text-xs text-amber-400">#{c.rank}</span>
                                                    <img src={c.img} className="w-8 h-8 rounded-full object-cover border border-white/10" />
                                                    <div className="text-xs font-bold text-white">{c.name} <span className="text-[9px] text-zinc-400 font-normal">• {c.category}</span></div>
                                                </div>
                                                <button onClick={(e) => { e.stopPropagation(); setPayTarget({ name: c.name, id: c.id }); setShowLinkPay(true); }} className="px-3 py-1 rounded-full btn-card-vote font-bold text-[8px] whitespace-nowrap">Vote</button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div className="ios-card rounded-[22px] p-4 text-center border-white/10 mb-4">
                                    <i data-lucide="lock" className="w-6 h-6 text-zinc-400 mx-auto mb-1.5"></i>
                                    <div className="text-xs font-bold text-white">Top 10 Ranks Locked</div>
                                    <p className="text-[10px] text-zinc-400 mt-0.5">Reveals 30 minutes daily (GMT+1) to preserve suspense.</p>
                                </div>
                            )}

                            {/* CONSTANTLY EXPOSED RANKS 80 TO 100 */}
                            <div className="mt-3">
                                <div className="flex justify-between items-center mb-2">
                                    <div className="text-[10px] font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-1">
                                        <i data-lucide="compass" className="w-3.5 h-3.5 text-zinc-300"></i> Emerging Ranks 80 – 100
                                    </div>
                                    <span className="text-[9px] text-zinc-400">Always Visible</span>
                                </div>

                                <div className="space-y-1 divide-y divide-white/5">
                                    {ranks80to100.map((c) => (
                                        <div
                                            key={c.id}
                                            onClick={() => setViewingContestant(c)}
                                            className="py-2 px-1 flex items-center justify-between cursor-pointer hover:bg-white/5 rounded-2xl transition active:scale-98"
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="w-6 text-center font-bold text-xs text-red-400">
                                                    #{c.rank}
                                                </span>
                                                <img src={c.img} className="w-9 h-9 rounded-full object-cover border border-white/10" />
                                                <div>
                                                    <div className="font-bold text-xs text-white flex items-center gap-1.5">
                                                        <span>{c.name}</span>
                                                        <span className="text-[9px] text-zinc-400 font-medium">• {c.representation}</span>
                                                    </div>
                                                    <div className="text-[10px] text-zinc-400">{c.region} • {c.category} • {(c.fanClubCount || 1200).toLocaleString()} Fans</div>
                                                </div>
                                            </div>

                                            <button
                                                onClick={(e) => { e.stopPropagation(); setPayTarget({ name: c.name, id: c.id }); setShowLinkPay(true); }}
                                                className="px-3.5 py-1.5 rounded-full btn-card-vote font-bold text-[9px] whitespace-nowrap"
                                            >
                                                Vote
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* TAB 4: COMPLETE RICH PROFILE PAGE */}
                    {activeTab === 'profile' && (
                        <div className="absolute inset-0 flex flex-col bg-black p-4 overflow-y-auto pb-28 animate-fadeIn">
                            <div className="flex items-center justify-between mb-3 pt-1">
                                <h1 className="text-base font-bold text-white tracking-tight">Creator Profile</h1>
                                <button onClick={() => alert("Settings & Privacy")} className="p-2 rounded-full ios-glass text-white">
                                    <i data-lucide="settings" className="w-4 h-4"></i>
                                </button>
                            </div>

                            {/* Profile Card */}
                            <div className="ios-card p-4 rounded-[28px] border-white/10 mb-3 text-center shadow-lg relative overflow-hidden">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-400 text-white font-black text-xl flex items-center justify-center mx-auto mb-2 border-2 border-white/20 shadow-md">
                                    {user.name.charAt(0)}
                                </div>
                                <h2 className="text-base font-bold text-white tracking-tight">{user.name}</h2>
                                <div className="text-[11px] text-zinc-400 mt-0.5">{user.username} • {user.region} Region</div>
                                <p className="text-[10px] text-zinc-300 mt-1.5 px-4 leading-relaxed">{user.bio}</p>

                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full ios-glass text-white text-[10px] font-mono mt-2.5">
                                    <i data-lucide="shield-check" className="w-3 h-3 text-emerald-400"></i> ID: {user.contestantId}
                                </div>

                                {/* Performance Stats */}
                                <div className="grid grid-cols-3 gap-2 mt-3.5 pt-3 border-t border-white/10 text-center">
                                    <div>
                                        <div className="text-xs font-bold text-white font-mono">{user.totalVotesReceived.toLocaleString()}</div>
                                        <div className="text-[9px] text-zinc-400">Total Votes</div>
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-white font-mono">{user.fansCount.toLocaleString()}</div>
                                        <div className="text-[9px] text-zinc-400">Fan Club</div>
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-emerald-400 font-mono">Rank #14</div>
                                        <div className="text-[9px] text-zinc-400">West Standings</div>
                                    </div>
                                </div>
                            </div>

                            {/* ARKCESS Wallet Card */}
                            <div className="ios-card p-4 rounded-[28px] border-white/15 mb-3 flex items-center justify-between shadow-lg bg-gradient-to-r from-blue-950/40 via-zinc-900/60 to-black">
                                <div>
                                    <div className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1">
                                        <i data-lucide="wallet" className="w-3 h-3 text-blue-400"></i> ARKCESS Wallet
                                    </div>
                                    <div className="text-xl font-bold text-white font-mono mt-0.5">{userCredits.toLocaleString()} Credits</div>
                                    <div className="text-[9px] text-zinc-300 font-medium">{user.stakedPoolsCount} Active Breakout Investments</div>
                                </div>
                                <button onClick={() => setShowLinkPayTopUp(true)} className="px-3.5 py-2 rounded-full btn-electric text-white font-bold text-[10px] shadow whitespace-nowrap active:scale-95 transition">
                                    + Top Up
                                </button>
                            </div>

                            {/* Pinned Official Challenge Submission */}
                            <div className="mb-3">
                                <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                                    <i data-lucide="pin" className="w-3 h-3 text-amber-400"></i> Pinned Challenge Entry
                                </div>
                                <div className="ios-card rounded-[22px] p-3 border-amber-400/20 flex items-center gap-3">
                                    <div className="w-14 h-20 rounded-xl overflow-hidden relative shrink-0">
                                        <img src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300" className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                            <i data-lucide="play" className="w-4 h-4 fill-white text-white"></i>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-bold text-xs text-white">Week 3 Official Challenge Entry</div>
                                        <p className="text-[10px] text-zinc-300 mt-0.5">Acoustic Vocal Run & Melody #WestRegion</p>
                                        <div className="flex items-center gap-2 mt-1.5 text-[9px] text-zinc-400 font-semibold">
                                            <span>24.5k Views</span>
                                            <span>•</span>
                                            <span>1,420 Votes</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Personal Uploads Grid */}
                            <div>
                                <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                                    <span>Personal Studio Drops</span>
                                    <span className="text-[9px] text-zinc-400">6 Videos</span>
                                </div>
                                <div className="grid grid-cols-3 gap-1.5">
                                    <div className="aspect-[9/16] rounded-2xl overflow-hidden relative border border-white/10">
                                        <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300" className="w-full h-full object-cover" />
                                        <div className="absolute bottom-1.5 left-1.5 text-[8px] font-bold text-white bg-black/60 px-1.5 py-0.5 rounded-full">12.4k</div>
                                    </div>
                                    <div className="aspect-[9/16] rounded-2xl overflow-hidden relative border border-white/10">
                                        <img src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300" className="w-full h-full object-cover" />
                                        <div className="absolute bottom-1.5 left-1.5 text-[8px] font-bold text-white bg-black/60 px-1.5 py-0.5 rounded-full">8.1k</div>
                                    </div>
                                    <div className="aspect-[9/16] rounded-2xl overflow-hidden relative border border-white/10">
                                        <img src="https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=300" className="w-full h-full object-cover" />
                                        <div className="absolute bottom-1.5 left-1.5 text-[8px] font-bold text-white bg-black/60 px-1.5 py-0.5 rounded-full">15.9k</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* FLOATING NAVIGATION DOCK */}
                    <div className="absolute bottom-3 left-4 right-4 h-14 ios-tab-bar rounded-full px-5 flex justify-between items-center z-30">
                        <button onClick={() => setActiveTab('home')} className={`flex flex-col items-center gap-0.5 ${activeTab === 'home' ? 'text-white' : 'text-zinc-500'}`}>
                            <i data-lucide="home" className="w-4 h-4"></i>
                            <span className="text-[8px] font-bold whitespace-nowrap">Home</span>
                        </button>
                        <button onClick={() => setActiveTab('discover')} className={`flex flex-col items-center gap-0.5 ${activeTab === 'discover' ? 'text-white' : 'text-zinc-500'}`}>
                            <i data-lucide="package-open" className="w-4 h-4"></i>
                            <span className="text-[8px] font-bold whitespace-nowrap">Discover</span>
                        </button>

                        {/* Live Studio Camera Trigger */}
                        <button
                            onClick={() => setScreen('camera')}
                            className="w-10 h-10 rounded-full btn-electric text-white flex items-center justify-center shadow-[0_0_20px_rgba(10,132,255,0.45)] -mt-4 active:scale-95 transition"
                        >
                            <i data-lucide="plus" className="w-5 h-5 stroke-[2.5]"></i>
                        </button>

                        <button onClick={() => setActiveTab('rankings')} className={`flex flex-col items-center gap-0.5 ${activeTab === 'rankings' ? 'text-white' : 'text-zinc-500'}`}>
                            <i data-lucide="trophy" className="w-4 h-4"></i>
                            <span className="text-[8px] font-bold whitespace-nowrap">Rankings</span>
                        </button>
                        <button onClick={() => setActiveTab('profile')} className={`flex flex-col items-center gap-0.5 ${activeTab === 'profile' ? 'text-white' : 'text-zinc-500'}`}>
                            <i data-lucide="user" className="w-4 h-4"></i>
                            <span className="text-[8px] font-bold whitespace-nowrap">Profile</span>
                        </button>
                    </div>

                </div>
            )}

            {/* ========================================================= */}
            {/* 5. SUNDAY LIVE STAGE ARENA MODAL VIEW                     */}
            {/* ========================================================= */}
            {showLiveArena && (
                <div className="absolute inset-0 z-50 flex flex-col bg-black p-4 animate-fadeIn">
                    <div className="flex justify-between items-center pb-2.5 border-b border-white/10">
                        <div className="flex items-center gap-2">
                            <span className="px-2.5 py-0.5 rounded-full bg-red-600 text-white font-bold text-[9px] uppercase tracking-wider animate-pulse whitespace-nowrap">LIVE STAGE ARENA</span>
                            <span className="text-xs text-zinc-300 font-semibold truncate">Sunday Broadcast (8:00 PM GMT+1)</span>
                        </div>
                        <button onClick={() => setShowLiveArena(false)} className="p-1.5 rounded-full ios-glass text-white">
                            <i data-lucide="x" className="w-4 h-4"></i>
                        </button>
                    </div>

                    <div className="flex-1 flex flex-col gap-2 py-2 overflow-hidden relative">
                        {liveReactions.map(r => (
                            <div key={r.id} className="floating-reaction text-2xl right-6 bottom-36" style={{ left: `calc(75% + ${r.x}px)` }}>
                                {r.emoji}
                            </div>
                        ))}

                        {/* Judges Panel */}
                        <div className="grid grid-cols-3 gap-2 h-20 shrink-0">
                            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-950">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300" className="w-full h-full object-cover" />
                                <div className="absolute bottom-1 left-1 px-1.5 rounded-full bg-black/70 text-[8px] font-bold text-white">Host Marcus</div>
                            </div>
                            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-950">
                                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300" className="w-full h-full object-cover" />
                                <div className="absolute bottom-1 left-1 px-1.5 rounded-full bg-black/70 text-[8px] font-bold text-white">Judge Sarah</div>
                            </div>
                            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-950">
                                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300" className="w-full h-full object-cover" />
                                <div className="absolute bottom-1 left-1 px-1.5 rounded-full bg-black/70 text-[8px] font-bold text-white">A&R Kenny</div>
                            </div>
                        </div>

                        {/* Live Center Performer Stage */}
                        <div className="relative flex-1 rounded-[30px] overflow-hidden border border-white/15 bg-black flex flex-col justify-end p-3">
                            <img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1080&h=1920&fit=crop" className="absolute inset-0 w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40 pointer-events-none"></div>

                            <div className="absolute top-2.5 left-2.5 px-3 py-1 rounded-full ios-glass text-[10px] font-bold text-white">
                                Live: Zainab Couture
                            </div>

                            {/* Chat Messages */}
                            <div className="relative z-10 max-h-32 overflow-y-auto space-y-1.5 mb-2 pr-1">
                                {liveChatMessages.map((msg, idx) => (
                                    <div key={idx} className="flex items-start gap-1.5 text-[11px] ios-glass p-1.5 rounded-xl">
                                        <span className="font-bold text-white shrink-0">{msg.user}:</span>
                                        <span className="text-zinc-200">{msg.text}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Interaction Bar */}
                            <div className="relative z-10 flex items-center justify-between gap-1.5 pt-1">
                                <div className="flex gap-1">
                                    {['❤️', '🔥', '👏', '⭐'].map(emoji => (
                                        <button key={emoji} onClick={() => sendLiveReaction(emoji)} className="w-8 h-8 rounded-full ios-glass text-white flex items-center justify-center text-sm active:scale-90 transition">
                                            {emoji}
                                        </button>
                                    ))}
                                </div>

                                <button
                                    onClick={() => { setPayTarget({ name: "Zainab Couture", id: "SPOTLIGHT-6620" }); setShowLinkPay(true); }}
                                    className="px-3.5 py-1.5 rounded-full btn-card-vote text-white font-bold text-[10px] flex items-center gap-1.5 shadow whitespace-nowrap"
                                >
                                    <i data-lucide="zap" className="w-3.5 h-3.5"></i>
                                    <span>Cast Vote</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Live Chat Input */}
                    <form onSubmit={handleSendLiveChat} className="pt-2 flex gap-2 border-t border-white/10">
                        <input
                            type="text"
                            placeholder="Send live comment..."
                            value={liveChatInput}
                            onChange={e => setLiveChatInput(e.target.value)}
                            className="flex-1 px-4 py-2.5 rounded-full ios-glass text-white text-xs focus:outline-none"
                        />
                        <button type="submit" className="px-4 py-2.5 rounded-full btn-electric text-white font-bold text-xs whitespace-nowrap">
                            Send
                        </button>
                    </form>
                </div>
            )}

            {/* ========================================================= */}
            {/* 6. MODALS & POPUPS                                        */}
            {/* ========================================================= */}

            {/* SEARCH MODAL */}
            {showSearchModal && (
                <div className="absolute inset-0 z-50 flex flex-col bg-black p-4 overflow-y-auto animate-fadeIn">
                    <div className="flex items-center gap-2 mb-3 pt-1">
                        <div className="flex-1 relative">
                            <i data-lucide="search" className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2"></i>
                            <input
                                type="text"
                                autoFocus
                                placeholder="Search talent, categories, Stage ID..."
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 rounded-full ios-glass text-white text-xs focus:outline-none"
                            />
                        </div>
                        <button onClick={() => setShowSearchModal(false)} className="p-2 rounded-full ios-glass text-white">
                            <i data-lucide="x" className="w-4 h-4"></i>
                        </button>
                    </div>

                    <div className="space-y-1 divide-y divide-white/5">
                        {top100LeaderboardData
                            .filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.category.toLowerCase().includes(searchQuery.toLowerCase()))
                            .slice(0, 15)
                            .map(c => (
                                <div
                                    key={c.id}
                                    onClick={() => { setShowSearchModal(false); setViewingContestant(c); }}
                                    className="py-2.5 px-1 flex items-center justify-between cursor-pointer hover:bg-white/5 rounded-2xl transition"
                                >
                                    <div className="flex items-center gap-3">
                                        <img src={c.img} className="w-10 h-10 rounded-full object-cover border border-white/10" />
                                        <div>
                                            <div className="font-bold text-xs text-white">{c.name}</div>
                                            <div className="text-[10px] text-zinc-400">{c.region} • {c.category}</div>
                                        </div>
                                    </div>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); setShowSearchModal(false); setPayTarget({ name: c.name, id: c.id }); setShowLinkPay(true); }}
                                        className="px-3.5 py-1.5 rounded-full btn-card-vote font-bold text-[9px] whitespace-nowrap"
                                    >
                                        Vote
                                    </button>
                                </div>
                            ))}
                    </div>
                </div>
            )}

            {/* CREATOR PROFILE VIEW */}
            {viewingContestant && (
                <div className="absolute inset-0 z-50 flex flex-col bg-black p-4 overflow-y-auto animate-fadeIn">
                    <div className="flex items-center justify-between mb-3 pt-1">
                        <button onClick={() => setViewingContestant(null)} className="p-2 rounded-full ios-glass text-white">
                            <i data-lucide="chevron-left" className="w-4 h-4"></i>
                        </button>
                        <div className="text-xs font-bold text-white tracking-tight">Creator Track Record</div>
                        <div className="w-8"></div>
                    </div>

                    <div className="ios-card p-4 rounded-[28px] border-white/10 mb-3 text-center shadow-lg">
                        <img src={viewingContestant.img || viewingContestant.avatar} className="w-20 h-20 rounded-full mx-auto object-cover border-2 border-white mb-2 shadow" />
                        <h2 className="text-base font-bold text-white tracking-tight">{viewingContestant.name}</h2>
                        <div className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full ios-glass text-white text-[10px] font-semibold my-1">
                            ID: {viewingContestant.id}
                        </div>
                        <p className="text-[10px] text-zinc-400">{viewingContestant.region} • {viewingContestant.category}</p>

                        <div className="mt-3.5 p-3 rounded-2xl ios-glass flex items-center justify-between text-left">
                            <div className="truncate pr-2">
                                <div className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider">Sponsor & Booking Contact</div>
                                <div className="text-[11px] font-mono font-medium text-white truncate">
                                    {viewingContestant.email || `contact@${viewingContestant.name.toLowerCase().replace(/\s+/g, '')}.com`}
                                </div>
                            </div>
                            <a
                                href={`mailto:${viewingContestant.email}?subject=Spotlight Booking`}
                                className="px-3.5 py-1.5 rounded-full btn-electric text-white font-bold text-[9px] flex items-center gap-1 whitespace-nowrap shadow"
                            >
                                <i data-lucide="mail" className="w-3 h-3"></i> Contact
                            </a>
                        </div>

                        <div className="grid grid-cols-3 gap-2 mt-3.5">
                            <button
                                onClick={() => toggleFanClub(viewingContestant.id)}
                                className={`py-2.5 rounded-full text-xs font-semibold transition whitespace-nowrap ${fanClubsJoined[viewingContestant.id] ? 'ios-glass text-white' : 'bg-white text-black'}`}
                            >
                                {fanClubsJoined[viewingContestant.id] ? "✓ Fan Club" : "+ Fan Club"}
                            </button>
                            <button
                                onClick={() => setInvestTarget(viewingContestant)}
                                className="py-2.5 rounded-full ios-glass text-white font-semibold text-xs flex items-center justify-center gap-1 whitespace-nowrap"
                            >
                                <i data-lucide="trending-up" className="w-3.5 h-3.5"></i>
                                <span>Invest</span>
                            </button>
                            <button
                                onClick={() => { setPayTarget({ name: viewingContestant.name, id: viewingContestant.id }); setShowLinkPay(true); }}
                                className="py-2.5 rounded-full btn-card-vote font-bold text-xs flex items-center justify-center gap-1 whitespace-nowrap"
                            >
                                <i data-lucide="zap" className="w-3.5 h-3.5 fill-white"></i>
                                <span>Vote</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* COMMENTS DRAWER */}
            {showTikTokComments && (
                <div className="absolute inset-0 z-50 flex flex-col justify-end bg-black/70 backdrop-blur-md animate-fadeIn">
                    <div className="ios-glass-thick rounded-t-[36px] p-4 h-[65%] flex flex-col justify-between border-t border-white/20 shadow-2xl">
                        <div className="w-9 h-1 rounded-full bg-white/25 mx-auto mb-2 shrink-0"></div>

                        <div className="flex justify-between items-center pb-2.5 border-b border-white/10 shrink-0">
                            <span className="text-xs font-bold text-white">
                                {currentActiveReel?.comments?.length || 0} Comments
                            </span>
                            <button onClick={() => setShowTikTokComments(false)} className="p-1.5 rounded-full ios-glass text-zinc-300">
                                <i data-lucide="x" className="w-4 h-4"></i>
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto py-3 space-y-3">
                            {(currentActiveReel?.comments || []).map((c, i) => (
                                <div key={i} className="flex items-start gap-2.5">
                                    <img src={c.avatar} className="w-8 h-8 rounded-full object-cover border border-white/10" />
                                    <div className="flex-1">
                                        <div className="flex items-center gap-1.5">
                                            <span className="font-bold text-[11px] text-white">{c.user}</span>
                                            <span className="text-[9px] text-zinc-400">{c.time || "1h"}</span>
                                        </div>
                                        <p className="text-[11px] text-zinc-200 mt-0.5 leading-snug">{c.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <form onSubmit={handleSendComment} className="pt-2 border-t border-white/10 flex items-center gap-2 shrink-0">
                            <input
                                type="text"
                                placeholder="Add a comment..."
                                value={commentInput}
                                onChange={e => setCommentInput(e.target.value)}
                                className="flex-1 px-4 py-2.5 rounded-full ios-glass text-white text-xs focus:outline-none"
                            />
                            <button type="submit" className="px-4 py-2.5 rounded-full btn-electric text-white font-bold text-xs whitespace-nowrap">
                                Post
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* ARKCESS BREAKOUT POOL MODAL */}
            {investTarget && (
                <div className="absolute inset-0 z-50 flex flex-col justify-end bg-black/80 backdrop-blur-md p-4 animate-fadeIn">
                    <div className="ios-glass-thick rounded-[32px] p-5 border-white/20">
                        <div className="w-9 h-1 rounded-full bg-white/25 mx-auto mb-2 shrink-0"></div>

                        <div className="flex justify-between items-center mb-3">
                            <h3 className="text-sm font-bold text-white tracking-tight">Invest in Talent Breakout Pool</h3>
                            <button onClick={() => setInvestTarget(null)} className="p-1.5 rounded-full ios-glass text-white">
                                <i data-lucide="x" className="w-4 h-4"></i>
                            </button>
                        </div>

                        <div className="ios-glass p-3 rounded-2xl mb-3">
                            <div className="text-xs font-bold text-white mb-1">Target: {investTarget.name}</div>
                            <div className="text-[11px] text-zinc-300">Milestone: <strong>{investTarget.breakoutPool.milestone}</strong></div>
                        </div>

                        <form onSubmit={handleStakeBreakoutPool} className="space-y-3">
                            <div className="grid grid-cols-3 gap-2">
                                {[100, 250, 500].map(amt => (
                                    <button
                                        key={amt}
                                        type="button"
                                        onClick={() => setStakeAmount(amt)}
                                        className={`py-2 rounded-2xl text-xs font-semibold transition ${stakeAmount === amt ? 'bg-white text-black font-bold' : 'ios-glass text-white'}`}
                                    >
                                        {amt} Credits
                                    </button>
                                ))}
                            </div>

                            <button type="submit" className="w-full py-3.5 rounded-full btn-electric text-white font-bold text-xs flex items-center justify-center gap-1 shadow-lg whitespace-nowrap active:scale-95">
                                Confirm Investment ({stakeAmount} Credits)
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* LINK PAY VOTE MODAL */}
            {showLinkPay && (
                <div className="absolute inset-0 z-50 flex flex-col justify-end bg-black/80 backdrop-blur-md p-4 animate-fadeIn">
                    <div className="ios-glass-thick rounded-[32px] p-5 border-white/20">
                        <div className="w-9 h-1 rounded-full bg-white/25 mx-auto mb-2 shrink-0"></div>

                        <div className="flex justify-between items-center mb-3">
                            <h3 className="text-sm font-bold text-white tracking-tight">Vote for {payTarget.name}</h3>
                            <button onClick={() => setShowLinkPay(false)} className="p-1.5 rounded-full ios-glass text-white"><i data-lucide="x" className="w-4 h-4"></i></button>
                        </div>

                        <div className="grid grid-cols-3 gap-2 mb-4">
                            <button className="p-3 rounded-2xl bg-white text-black font-bold text-center">
                                <div className="text-sm">10</div>
                                <div className="text-[9px]">$2.00</div>
                            </button>
                            <button className="p-3 rounded-2xl ios-glass text-white text-center font-semibold">
                                <div className="text-sm">50</div>
                                <div className="text-[9px] text-zinc-400">$10.00</div>
                            </button>
                            <button className="p-3 rounded-2xl ios-glass text-white text-center font-semibold">
                                <div className="text-sm">100</div>
                                <div className="text-[9px] text-zinc-400">$20.00</div>
                            </button>
                        </div>

                        <button onClick={() => { setShowLinkPay(false); alert(`✅ 10 votes cast for ${payTarget.name}!`); }} className="w-full py-3.5 rounded-full btn-electric text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg whitespace-nowrap active:scale-95">
                            <span>Authorize Link Pay</span>
                            <i data-lucide="external-link" className="w-3.5 h-3.5"></i>
                        </button>
                    </div>
                </div>
            )}

            {/* LINK PAY TOP UP MODAL */}
            {showLinkPayTopUp && (
                <div className="absolute inset-0 z-50 flex flex-col justify-end bg-black/80 backdrop-blur-md p-4 animate-fadeIn">
                    <div className="ios-glass-thick rounded-[32px] p-5 border-white/20">
                        <div className="w-9 h-1 rounded-full bg-white/25 mx-auto mb-2 shrink-0"></div>

                        <div className="flex justify-between items-center mb-3">
                            <h3 className="text-sm font-bold text-white tracking-tight">Top Up ARKCESS Credits</h3>
                            <button onClick={() => setShowLinkPayTopUp(false)} className="p-1.5 rounded-full ios-glass text-white"><i data-lucide="x" className="w-4 h-4"></i></button>
                        </div>

                        <div className="grid grid-cols-3 gap-2 mb-4">
                            <button onClick={() => { setUserCredits(prev => prev + 500); setShowLinkPayTopUp(false); }} className="p-3 rounded-2xl ios-glass text-white text-center font-semibold">
                                <div className="text-sm">+500</div>
                                <div className="text-[9px] text-zinc-400">$10.00</div>
                            </button>
                            <button onClick={() => { setUserCredits(prev => prev + 1000); setShowLinkPayTopUp(false); }} className="p-3 rounded-2xl bg-white text-black font-bold text-center">
                                <div className="text-sm">+1,000</div>
                                <div className="text-[9px]">$20.00</div>
                            </button>
                            <button onClick={() => { setUserCredits(prev => prev + 2500); setShowLinkPayTopUp(false); }} className="p-3 rounded-2xl ios-glass text-white text-center font-semibold">
                                <div className="text-sm">+2,500</div>
                                <div className="text-[9px] text-zinc-400">$50.00</div>
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<StageApp />);
