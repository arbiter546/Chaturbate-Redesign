/* Placeholder feedback data shared by feedback.html and feedback-category.html.
   v  = total ideas posted in the category (subcategory counts are derived and sum to it)
   Idea fields: t title, b body, v votes, c comments, s subcategory index, d days ago,
                st status (review | planned | progress | done), r staff response */
(function () {
  var cats = [
    { n: "Video & Streaming", v: 1962, c: "#1f7ae0,#6fc0ff", i: "📺", subs: ["Quality", "Latency", "Player", "Theater mode"], ideas: [
      { t: "Let viewers cap video quality on slow connections", b: "Auto quality often jumps to a setting that buffers. A manual cap per device, remembered between rooms, would make streams watchable on mobile data and on shared Wi-Fi.", v: 3412, c: 241, s: 0, d: 40, st: "progress", r: "Thanks for the detailed suggestion. We're testing a remembered quality setting and expect to roll it out to all viewers over the coming weeks." },
      { t: "Picture-in-picture while browsing other rooms", b: "Keep the current stream floating in a corner while I look through Discover, so I don't have to leave the room to find the next one.", v: 2057, c: 133, s: 2, d: 75, st: "planned", r: "Picture-in-picture is on our roadmap. We'll share more here once we have a release window." },
      { t: "Show stream latency next to the viewer count", b: "A small badge showing the delay would tell viewers how far behind the live action they are before they send a tip or a chat message.", v: 1188, c: 96, s: 1, d: 12, st: "review" }
    ] },
    { n: "Chat", v: 1547, c: "#d6336c,#ff8fb0", i: "💬", subs: ["Moderation", "Emotes", "Mentions & replies"], ideas: [
      { t: "Slow mode that creators can set per viewer tier", b: "Right now slow mode applies to everyone equally. Letting creators exempt tippers or moderators would keep busy rooms readable without silencing the people who support the room.", v: 2640, c: 188, s: 0, d: 55, st: "planned", r: "Tiered slow mode is something several creators have asked for. It's on our list and we'll post here when it moves into development." },
      { t: "Custom emotes for each creator's room", b: "Let creators upload a small set of room-specific emotes that viewers can use in chat, with a review step so nothing inappropriate gets through.", v: 1904, c: 142, s: 1, d: 120, st: "review" },
      { t: "Reply to a specific message in chat", b: "In a fast chat it's hard to tell who is answering whom. A reply button that quotes the original message above the response would fix most of the confusion.", v: 1377, c: 77, s: 2, d: 9 }
    ] },
    { n: "Site Design", v: 1284, c: "#7b4bd6,#b98cff", i: "🎨", subs: ["Layout", "Themes", "Navigation"], ideas: [
      { t: "A true dark theme across every page", b: "Dark mode works on some pages but the room chat and a few menus stay bright. A consistent dark theme would be much easier on the eyes at night.", v: 2215, c: 163, s: 1, d: 30, st: "progress", r: "We're working through the remaining pages now. Thanks for flagging the chat panel specifically, that's included." },
      { t: "Let me keep the sidebar collapsed by default", b: "I'd like the For You sidebar to stay collapsed and remember that choice, so the stream and chat get the full width every time I open a room.", v: 986, c: 54, s: 0, d: 18 },
      { t: "Breadcrumbs when browsing categories", b: "After opening a category and then a room, it's hard to get back to where I was. A simple breadcrumb trail at the top would help.", v: 612, c: 29, s: 2, d: 4, st: "review" }
    ] },
    { n: "Tipping & Tokens", v: 1103, c: "#e8590c,#ffb36b", i: "🪙", subs: ["Tip menu", "Goals", "Token pricing"], ideas: [
      { t: "Show tip goal progress in the browser tab title", b: "When I'm in another tab I can't tell how close the room is to its goal. Putting the progress in the tab title would let me check at a glance.", v: 1520, c: 91, s: 1, d: 62, st: "done", r: "This is now live. The tab title shows goal progress while you're in a room. Thank you for the idea." },
      { t: "Save my favorite tip amounts", b: "Typing the same amounts every time is slow. Let me pin a few quick-tip buttons that follow me across rooms.", v: 1244, c: 68, s: 0, d: 22, st: "planned", r: "Saved quick-tip amounts are planned. We'll share a timeline here as soon as we have one." },
      { t: "Show the price in my own currency before I buy tokens", b: "Token packs only show a USD price. Showing the local currency amount, including any fees, before checkout would remove surprises.", v: 833, c: 47, s: 2, d: 101, st: "review" }
    ] },
    { n: "Discovery & Search", v: 896, c: "#0c8599,#66d9e8", i: "🔎", subs: ["Filters", "Tags", "Recommendations"], ideas: [
      { t: "Mute tags I never want to see", b: "Let me mute tags the same way I can follow them, so Discover and the home page stop showing rooms I'm not interested in.", v: 2980, c: 204, s: 1, d: 80, st: "progress", r: "Muted tags are in development. We're building it so it applies across Discover, search and recommendations." },
      { t: "Sort by newest streamers", b: "Let me find newly started rooms, so smaller creators get seen before the same large rooms every time.", v: 1402, c: 85, s: 0, d: 35, st: "review" },
      { t: "Explain why a room is recommended", b: "A short line like \"because you follow similar rooms\" under recommended rooms would make the suggestions feel less random.", v: 705, c: 31, s: 2, d: 14 }
    ] },
    { n: "Creator Tools", v: 812, c: "#2b8a3e,#8ce99a", i: "🛠️", subs: ["Dashboard", "Overlays", "Analytics"], ideas: [
      { t: "Per-stream analytics, not just totals", b: "The dashboard shows monthly totals only. A breakdown for each broadcast (peak viewers, tips, new followers) would help me see what actually works.", v: 1731, c: 112, s: 2, d: 90, st: "planned", r: "Per-broadcast analytics are planned. We'll update this idea when design work begins." },
      { t: "Schedule streams on my profile", b: "A calendar that shows when I'll next be live, with an option for followers to get a reminder.", v: 1126, c: 74, s: 0, d: 27 },
      { t: "Reusable overlay presets", b: "I switch between a few looks. Let me save overlay layouts and swap between them with one click.", v: 598, c: 22, s: 1, d: 8, st: "review" }
    ] },
    { n: "Mobile App", v: 741, c: "#364fc7,#91a7ff", i: "📱", subs: ["iOS", "Android", "Mobile web"], ideas: [
      { t: "Keep audio playing when the screen is locked", b: "Let streams continue as audio only when I lock my phone or switch apps, so I can keep listening while I do something else.", v: 2290, c: 150, s: 0, d: 45, st: "progress", r: "Background audio is being built for iOS first, with Android following. Thanks for the suggestion." },
      { t: "Faster loading on the mobile site", b: "The mobile site takes a long time to show the first rooms on a slow connection. Loading the visible thumbnails first would help a lot.", v: 1018, c: 63, s: 2, d: 16, st: "review" },
      { t: "Split chat and video view on tablets", b: "On a tablet in landscape the chat covers the stream. A side-by-side layout like the desktop room would fit the screen much better.", v: 744, c: 35, s: 1, d: 60 }
    ] },
    { n: "Safety & Privacy", v: 688, c: "#c92a2a,#ffa8a8", i: "🛡️", subs: ["Reports", "Blocking", "Account security"], ideas: [
      { t: "Block a user from every room at once", b: "Blocking per room is tedious. A single account-level block would stop someone from following me from room to room.", v: 3105, c: 267, s: 1, d: 70, st: "done", r: "Account-level blocking is now available from a user's profile menu. Thank you for pushing for this." },
      { t: "Show the status of my report", b: "After I report someone I never hear back. A simple status like received, reviewed or actioned would show that the report counted.", v: 1860, c: 119, s: 0, d: 33, st: "planned", r: "Report status updates are planned. We can't share outcomes about other accounts, but we want you to know when a report has been reviewed." },
      { t: "Two-factor login with an authenticator app", b: "Email codes are fine, but an authenticator app would be safer and faster. Please add it as an option in account settings.", v: 1340, c: 88, s: 2, d: 140, st: "review" }
    ] },
    { n: "Wallet & Payments", v: 524, c: "#e67700,#ffd43b", i: "💳", subs: ["Checkout", "Refunds", "Receipts"], ideas: [
      { t: "A spending limit I can set for myself", b: "A monthly cap that I choose, with a reminder when I'm close to it, would help me keep track of what I spend.", v: 1560, c: 97, s: 0, d: 85, st: "progress", r: "We're building optional spending limits. Thanks for the suggestion." },
      { t: "Email receipts for every token purchase", b: "I need a record of each purchase for my own bookkeeping. An emailed receipt with the date, amount and tokens would be enough.", v: 1090, c: 52, s: 2, d: 50, st: "planned", r: "Email receipts are planned. We'll update this idea when they're ready." },
      { t: "Clearer refund status", b: "When I ask for a refund I can't tell whether it was received. A status page with an estimated date would remove the guesswork.", v: 420, c: 19, s: 1, d: 11 }
    ] },
    { n: "Accessibility", v: 455, c: "#5c940d,#c0eb75", i: "♿", subs: ["Captions", "Contrast", "Keyboard navigation"], ideas: [
      { t: "Live captions on streams", b: "Auto-generated captions that viewers can switch on would make streams usable for people who are deaf or hard of hearing, and in noisy places.", v: 1880, c: 140, s: 0, d: 130 },
      { t: "Keyboard shortcuts for the player", b: "Space to pause, arrow keys for volume, F for fullscreen. A short list of shortcuts would make the player usable without a mouse.", v: 1215, c: 61, s: 2, d: 66, st: "planned", r: "Player keyboard shortcuts are planned, along with a help dialog that lists them." },
      { t: "High-contrast chat colors", b: "Some username colors are hard to read against the chat background. A high-contrast setting would help.", v: 910, c: 40, s: 1, d: 28, st: "review" }
    ] },
    { n: "Notifications", v: 392, c: "#a61e4d,#faa2c1", i: "🔔", subs: ["Email", "Push", "In-app"], ideas: [
      { t: "Only notify me when my favorites go live", b: "I follow a lot of rooms but only want alerts for a few of them. A per-creator switch would cut the noise.", v: 1402, c: 78, s: 1, d: 40, st: "progress", r: "Per-creator notification settings are in development." },
      { t: "Weekly email digest instead of daily", b: "A single weekly summary of who was live and what changed would be plenty for me.", v: 640, c: 24, s: 0, d: 20 },
      { t: "Group notifications per creator", b: "If one room posts several updates they stack up in the notification list. Grouping them under one entry would keep it tidy.", v: 388, c: 15, s: 2, d: 6, st: "review" }
    ] },
    { n: "Private Shows", v: 361, c: "#6741d9,#d0bfff", i: "🔒", subs: ["Pricing", "Spy", "Scheduling"], ideas: [
      { t: "Show the price before I request a private show", b: "I'd like to see the per-minute price on the room before I send a request, not after.", v: 1120, c: 66, s: 0, d: 77, st: "done", r: "Private show pricing is now shown on the room page before you send a request." },
      { t: "Schedule a private show for later", b: "Let me book a time with a creator ahead of time instead of waiting for them to be free.", v: 842, c: 39, s: 2, d: 25, st: "planned", r: "Scheduled private shows are planned. More details will follow in this thread." },
      { t: "Warn me before a spy session ends", b: "A short countdown before a spy session ends would stop me from being cut off unexpectedly.", v: 355, c: 12, s: 1, d: 10 }
    ] },
    { n: "Languages", v: 274, c: "#862e9c,#e599f7", i: "🌐", subs: ["Translation", "Regions", "Chat translation"], ideas: [
      { t: "Translate chat messages on demand", b: "A small translate button on each chat message would let me follow rooms in languages I don't speak.", v: 1640, c: 90, s: 2, d: 58, st: "progress", r: "On-demand chat translation is in development. We'll share more as it nears release." },
      { t: "Interface in more languages", b: "The site is missing several languages that a lot of viewers use. Adding them would make it easier to get started.", v: 905, c: 44, s: 0, d: 100, st: "review" },
      { t: "Region-specific discovery", b: "Let me prioritize rooms from my region or time zone when I browse Discover.", v: 417, c: 18, s: 1, d: 15 }
    ] },
    { n: "Something Else", v: 148, c: "#1c2541,#5c6bc0", i: "💡", subs: ["General", "Other"], ideas: [
      { t: "A public roadmap page", b: "A simple page that shows what's planned, in progress and recently shipped would make it easier to see what's coming.", v: 1305, c: 71, s: 0, d: 95, st: "review", r: "We like the idea of a public roadmap and are discussing how to share one. Thanks for the suggestion." },
      { t: "Let me export my following list", b: "I'd like to download the list of rooms I follow in case I change accounts or want a backup.", v: 521, c: 26, s: 1, d: 38 },
      { t: "Option to hide my viewing history", b: "A setting to stop recently viewed rooms from showing up in my recommendations.", v: 466, c: 21, s: 1, d: 7 }
    ] }
  ];

  var weights = { 2: [0.6, 0.4], 3: [0.45, 0.33, 0.22], 4: [0.4, 0.27, 0.2, 0.13] };
  cats.forEach(function (cat) {
    cat.slug = cat.n.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    var w = weights[cat.subs.length], used = 0;
    cat.subs = cat.subs.map(function (name, i) {
      var count = i === cat.subs.length - 1 ? cat.v - used : Math.round(cat.v * w[i]);
      used += count;
      return { n: name, c: count };
    });
  });

  window.CB_FEEDBACK = { cats: cats };
})();
