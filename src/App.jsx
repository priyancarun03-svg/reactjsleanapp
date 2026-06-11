import { useState, useEffect, useRef } from "react";

/* ─────────────────────────────────────────────
   TRANSLATIONS
───────────────────────────────────────────── */
const translations = {
  en: {
    nav_rsv: "RSV", nav_why: "Why Lean", nav_features: "Features",
    nav_pricing: "Pricing", nav_about: "About Us", nav_support: "Get Support",
    nav_lang_label: "Svenska",
    hero_tag: "Available on iOS & Android",
    hero_h1_1: "Transform", hero_h1_2: "Every", hero_h1_3: "Process.",
    hero_p: "Walk through process components and unravel inefficiencies fully. Observe, capture, and improve — value-flow's LEAN APP puts powerful process intelligence in your hands.",
    hero_btn_apple: "App Store", hero_btn_google: "Google Play",
    stat_modules: "Modules", stat_platform: "Platform", stat_founded: "Founded",
    observe_tag: "Methodology", observe_h2_1: "Observe and", observe_h2_2: "Capture",
    observe_p: "Walk through the various components and unravel the process fully. Know the hidden elements of the process that are usually taken for granted despite suffering the excruciating process pain.",
    observe_sub: "Learn and look for the",
    feat1: "VALUE added moments in a process", feat2: "What stalls the continuation of an activity",
    feat3: "Choking situations in the free flow of the process", feat4: "Are the activities spread out seamlessly",
    feat5: "The discrete situations", feat6: "Easy to capture unsafe moments",
    feat7: "Unbiased process capture through comparisons", feat8: "Historical process shift observation",
    devices_tag: "Cross-Platform", devices_h2_1: "Available on all", devices_h2_2: "Your Devices",
    devices_p1: "Wherever you go, the lean apps in your hands can make you shape up the fabric nature of the process by truly observing and highlighting it — with visuals, audios, and video grabbing, all in your hand.",
    devices_p2: "Define the strength of your assembly or business process by detailed analysis right at your hand and work on corrective steps.",
    devices_p3: "PROJECT helps to connect all the members and gives the status completion anywhere, anytime. Status updates simultaneously at all places. No need for meetings or follow-ups —",
    devices_p3_em: " You do, you say, you are seen.",
    rsv_tag: "Right Simple Visuals", rsv_h2: "Words are always good.",
    rsv_p: "Alternatively, the Right Simple Visuals (RSV) make an impact on the mind. This will help and surely trigger a Response from the user for every module. The visuals connect the process reality in front of the eyes.",
    why_tag: "Methodology", why_h2: "Why",
    why_p: "Lean thinking transforms the way your business operates — eliminating waste and focusing on what truly adds value.",
    why_btn: "Watch: Why Lean Matters",
    feat_tag: "What's Inside", feat_h2_1: "Features In", feat_h2_2: "This App",
    feat_desc: "As a project lead for every collaborative work big or small, empower and enable people to work in a Team environment using the PROJECT Module.",
    card1_title: "Free Trial", card1_p: "Start with zero cost. Explore all core features for 30 days before committing.",
    card2_title: "Custom Modules", card2_p: "Tailor the app's modules to match your specific industry and workflow needs.",
    card3_title: "Projects", card3_p: "Connect all team members with real-time status updates from anywhere, anytime.",
    card4_title: "Fast Support", card4_p: "Get prompt expert assistance whenever you need guidance on the platform.",
    pricing_tag: "Plans", pricing_h2_1: "Move Ahead with", pricing_h2_2: "Hands On",
    pricing_p: "Choose the plan that fits your observation and analysis needs.",
    plan_free: "Lean Free", plan_silver: "Lean Silver", plan_gold: "Lean Gold",
    plan_platinum: "Lean Platinum", plan_monthly: "Lean Monthly", plan_popular: "Popular",
    period_trial: "/ 30 days trial", period_30: "/ 30 days", period_60: "/ 60 days",
    period_90: "/ 90 days", period_monthly: "/ monthly",
    feat_img: "Image capture", feat_vid: "Video capture", feat_extvid: "Extended video capture",
    feat_va: "Value added activity", feat_nva: "Non Value added activity", feat_ova: "Operational value activity",
    feat_unsafe: "Unsafe Observation", feat_user: "User section", feat_compare: "Compare", feat_projects: "Projects",
    about_tag: "Who We Are", about_h2_1: "About", about_h2_2: "Us",
    about_p: "Value-flow Sweden is a consultancy company that develops apps for a more efficient industry, where our mission is that our customers should see their opportunities to improve. Founded in 2017, the company has since been working to achieve higher efficiency, safer production and more equality in industry.",
    about_quote: '"Contrary to what many consulting companies do, we do not want to talk about what you should do, but instead we want to help you do this. We are working on developing apps that use modern technology to help our customers achieve their goals."',
    contact_tag: "Support", contact_h2_1: "Looking For", contact_h2_2: "Support?",
    contact_p: "Got a question? We'd love to hear from you. Send us a message and we will respond as soon as possible.",
    contact_email_label: "Email Us", contact_web_label: "Website", contact_loc_label: "Location",
    form_name: "Your Name *", form_email: "Email Address *",
    form_subject: "This question is about...",
    form_opt0: "Select a topic", form_opt1: "Registering / Authorising",
    form_opt2: "Using Application", form_opt3: "Other",
    form_msg_label: "Your Message *", form_submit: "Send Your Message",
    news_h3: "Stay up to date with our news, ideas and updates", news_btn: "Subscribe",
    footer_desc: "Lean Apps walks through process components & transforms them to efficient process.",
    footer_privacy: "Privacy Policy", footer_terms: "Terms of Use",
  },
  sv: {
    nav_rsv: "RSV", nav_why: "Varför Lean", nav_features: "Funktioner",
    nav_pricing: "Priser", nav_about: "Om Oss", nav_support: "Få Support",
    nav_lang_label: "English",
    hero_tag: "Tillgänglig på iOS & Android",
    hero_h1_1: "Förvandla", hero_h1_2: "Varje", hero_h1_3: "Process.",
    hero_p: "Gå igenom processkomponenter och avslöja ineffektivitet fullt ut. Observera, fånga och förbättra — value-flows LEAN APP ger kraftfull processintelligens i dina händer.",
    hero_btn_apple: "App Store", hero_btn_google: "Google Play",
    stat_modules: "Moduler", stat_platform: "Plattform", stat_founded: "Grundat",
    observe_tag: "Metodik", observe_h2_1: "Observera och", observe_h2_2: "Fånga",
    observe_p: "Gå igenom de olika komponenterna och avslöja processen fullt ut. Lär känna de dolda elementen i processen som vanligtvis tas för givet trots att man lider av den plågsamma processpinen.",
    observe_sub: "Lär dig och leta efter",
    feat1: "VÄRDESKAPANDE ögonblick i en process", feat2: "Vad som stoppar fortsättningen av en aktivitet",
    feat3: "Kväljande situationer i processens fria flöde", feat4: "Om aktiviteterna är sömlöst utspridda",
    feat5: "De diskreta situationerna", feat6: "Enkelt att fånga osäkra ögonblick",
    feat7: "Opartigt processfångande genom jämförelser", feat8: "Historisk processskiftesobservation",
    devices_tag: "Multiplattform", devices_h2_1: "Tillgänglig på alla", devices_h2_2: "Dina Enheter",
    devices_p1: "Var du än går kan lean-apparna i dina händer hjälpa dig att forma processens natur genom att verkligen observera och lyfta fram den — med visuella, ljud- och videoinspelningar, allt i din hand.",
    devices_p2: "Definiera styrkan i din monterings- eller affärsprocess genom detaljerad analys direkt i din hand och arbeta med korrigerande åtgärder.",
    devices_p3: "PROJEKT hjälper till att koppla samman alla medlemmar och ger statusavslutningen var som helst, när som helst. Statusuppdateringar sker simultant på alla ställen. Inget behov av möten eller uppföljningar —",
    devices_p3_em: " Du gör, du säger, du syns.",
    rsv_tag: "Rätt Enkla Visuella", rsv_h2: "Ord är alltid bra.",
    rsv_p: "Alternativt gör de Rätta Enkla Visuella (RSV) ett intryck på sinnet. Detta hjälper och triggar säkert ett svar från användaren för varje modul. De visuella kopplar processverkligheten framför ögonen.",
    why_tag: "Metodik", why_h2: "Varför",
    why_p: "Lean-tänkande förvandlar hur ditt företag fungerar — eliminerar slöseri och fokuserar på vad som verkligen skapar värde.",
    why_btn: "Titta: Varför Lean Är Viktigt",
    feat_tag: "Vad Som Finns", feat_h2_1: "Funktioner I", feat_h2_2: "Den Här Appen",
    feat_desc: "Som projektledare för varje samarbetsarbete, stort eller litet, stärk och möjliggör för människor att arbeta i en teammiljö med hjälp av PROJEKT-modulen.",
    card1_title: "Gratis Provperiod", card1_p: "Börja utan kostnad. Utforska alla kärnfunktioner i 30 dagar innan du bestämmer dig.",
    card2_title: "Anpassade Moduler", card2_p: "Skräddarsy appens moduler för att matcha din specifika bransch och arbetsflödesbehov.",
    card3_title: "Projekt", card3_p: "Koppla samman alla teammedlemmar med realtidsstatusuppdateringar var som helst, när som helst.",
    card4_title: "Snabb Support", card4_p: "Få snabb experthjälp när du behöver vägledning på plattformen.",
    pricing_tag: "Planer", pricing_h2_1: "Gå Framåt med", pricing_h2_2: "Hands On",
    pricing_p: "Välj den plan som passar dina observations- och analysbehov.",
    plan_free: "Lean Gratis", plan_silver: "Lean Silver", plan_gold: "Lean Guld",
    plan_platinum: "Lean Platina", plan_monthly: "Lean Månadsvis", plan_popular: "Populär",
    period_trial: "/ 30 dagars provperiod", period_30: "/ 30 dagar", period_60: "/ 60 dagar",
    period_90: "/ 90 dagar", period_monthly: "/ månadsvis",
    feat_img: "Bildinspelning", feat_vid: "Videoinspelning", feat_extvid: "Utökad videoinspelning",
    feat_va: "Värdeskapande aktivitet", feat_nva: "Icke-värdeskapande aktivitet", feat_ova: "Operativt värdeaktivitet",
    feat_unsafe: "Osäker observation", feat_user: "Användarsektion", feat_compare: "Jämför", feat_projects: "Projekt",
    about_tag: "Vilka Vi Är", about_h2_1: "Om", about_h2_2: "Oss",
    about_p: "Value-flow Sverige är ett konsultbolag som utvecklar appar för en mer effektiv industri, där vårt uppdrag är att våra kunder ska se sina möjligheter att förbättra. Grundat 2017 har företaget sedan dess arbetat för att uppnå högre effektivitet, säkrare produktion och mer jämlikhet i industrin.",
    about_quote: '"I motsats till vad många konsultbolag gör vill vi inte prata om vad du ska göra, utan istället vill vi hjälpa dig att göra detta. Vi arbetar med att utveckla appar som använder modern teknik för att hjälpa våra kunder att nå sina mål."',
    contact_tag: "Support", contact_h2_1: "Letar Du Efter", contact_h2_2: "Support?",
    contact_p: "Har du en fråga? Vi vill gärna höra från dig. Skicka ett meddelande till oss så svarar vi så snart som möjligt.",
    contact_email_label: "Maila Oss", contact_web_label: "Webbplats", contact_loc_label: "Plats",
    form_name: "Ditt Namn *", form_email: "E-postadress *",
    form_subject: "Den här frågan handlar om...",
    form_opt0: "Välj ett ämne", form_opt1: "Registrering / Auktorisering",
    form_opt2: "Använda Applikationen", form_opt3: "Annat",
    form_msg_label: "Ditt Meddelande *", form_submit: "Skicka Ditt Meddelande",
    news_h3: "Håll dig uppdaterad med våra nyheter, idéer och uppdateringar", news_btn: "Prenumerera",
    footer_desc: "Lean Apps går igenom processkomponenter och omvandlar dem till effektiv process.",
    footer_privacy: "Integritetspolicy", footer_terms: "Användarvillkor",
  },
};

/* ─────────────────────────────────────────────
   EMAILJS CONFIG  — replace with your values
───────────────────────────────────────────── */
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";

/* ─────────────────────────────────────────────
   GLOBAL STYLES (injected once)
───────────────────────────────────────────── */
const globalCSS = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
:root {
  --green:#00c46a; --green-dim:#00a857; --green-glow:rgba(0,196,106,0.35);
  --dark:#04080f; --dark-2:#0a1020; --dark-3:#111927;
  --glass:rgba(255,255,255,0.04); --glass-border:rgba(255,255,255,0.08);
  --text:#e8edf5; --text-muted:#7a8ba0;
  --font-display:'Syne',sans-serif; --font-body:'DM Sans',sans-serif;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;}
body{font-family:var(--font-body);background:var(--dark);color:var(--text);overflow-x:hidden;cursor:none;}
@media(hover:none){body{cursor:auto;}.cursor,.cursor-follower{display:none;}}
.cursor{width:12px;height:12px;background:var(--green);border-radius:50%;position:fixed;top:0;left:0;pointer-events:none;z-index:99999;transition:transform 0.15s ease;mix-blend-mode:screen;}
.cursor-follower{width:36px;height:36px;border:1px solid rgba(0,196,106,0.5);border-radius:50%;position:fixed;top:0;left:0;pointer-events:none;z-index:99998;transition:all 0.12s ease;}
#bg-canvas{position:fixed;top:0;left:0;width:100%;height:100%;z-index:0;pointer-events:none;opacity:0.6;}
::-webkit-scrollbar{width:4px;}
::-webkit-scrollbar-track{background:var(--dark);}
::-webkit-scrollbar-thumb{background:var(--green);border-radius:2px;}
/* PRELOADER */
.preloader{position:fixed;inset:0;background:var(--dark);z-index:100000;display:flex;align-items:center;justify-content:center;transition:opacity 0.6s ease,visibility 0.6s ease;}
.preloader.hidden{opacity:0;visibility:hidden;pointer-events:none;}
.pre-logo{font-family:var(--font-display);font-size:clamp(2rem,5vw,4rem);font-weight:800;letter-spacing:-0.02em;color:var(--text);text-align:center;}
.pre-logo span{color:var(--green);}
.pre-bar{position:absolute;bottom:0;left:0;height:2px;background:linear-gradient(90deg,transparent,var(--green),transparent);animation:preBar 1.8s ease forwards;}
@keyframes preBar{0%{width:0}100%{width:100%}}
/* HEADER */
.site-header{position:fixed;top:0;left:0;right:0;z-index:1000;padding:1.2rem 0;transition:all 0.4s ease;}
.site-header.scrolled{background:rgba(4,8,15,0.95);backdrop-filter:blur(20px);border-bottom:1px solid var(--glass-border);padding:0.8rem 0;}
.nav-inner{max-width:1280px;margin:0 auto;padding:0 1.25rem;display:flex;align-items:center;justify-content:space-between;position:relative;}
.nav-logo img{height:32px;}
.nav-links{display:flex;gap:2rem;list-style:none;align-items:center;}
.nav-links a{color:var(--text-muted);text-decoration:none;font-size:0.85rem;font-weight:500;letter-spacing:0.1em;text-transform:uppercase;position:relative;transition:color 0.3s;white-space:nowrap;}
.nav-links a::after{content:'';position:absolute;bottom:-4px;left:0;width:0;height:1px;background:var(--green);transition:width 0.3s ease;}
.nav-links a:hover{color:var(--green);}
.nav-links a:hover::after{width:100%;}
.nav-cta{padding:0.6rem 1.2rem!important;border:1px solid var(--green);border-radius:4px;color:var(--green)!important;font-size:0.82rem!important;transition:all 0.3s ease!important;}
.nav-cta:hover{background:var(--green)!important;color:var(--dark)!important;}
.nav-cta::after{display:none!important;}
.lang-btn{display:inline-flex;align-items:center;gap:0.45rem;background:var(--glass);border:1px solid var(--glass-border);border-radius:100px;padding:0.3rem 0.75rem 0.3rem 0.35rem;color:var(--text-muted);font-family:var(--font-body);font-size:0.78rem;font-weight:600;letter-spacing:0.06em;cursor:pointer;transition:all 0.3s ease;white-space:nowrap;}
.lang-btn:hover{border-color:var(--green);color:var(--green);background:rgba(0,196,106,0.08);}
.lang-flag-img{width:26px;height:26px;border-radius:50%;object-fit:cover;flex-shrink:0;box-shadow:0 2px 8px rgba(0,0,0,0.3);}
.lang-label{text-transform:uppercase;font-size:0.72rem;letter-spacing:0.1em;}
.nav-burger{display:none;flex-direction:column;gap:5px;cursor:pointer;padding:6px;z-index:1100;background:none;border:none;}
.nav-burger span{display:block;width:24px;height:2px;background:var(--text);border-radius:2px;transition:all 0.3s ease;}
.nav-burger.open span:nth-child(1){transform:translateY(7px) rotate(45deg);}
.nav-burger.open span:nth-child(2){opacity:0;}
.nav-burger.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg);}
/* HERO */
#hero{position:relative;min-height:100vh;display:flex;align-items:center;padding:7rem 1.25rem 4rem;overflow:hidden;z-index:2;}
.hero-grid{max-width:1280px;margin:0 auto;width:100%;display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center;}
.hero-tag{display:inline-flex;align-items:center;gap:0.5rem;background:rgba(0,196,106,0.1);border:1px solid rgba(0,196,106,0.25);border-radius:100px;padding:0.35rem 1rem;font-size:0.78rem;letter-spacing:0.12em;color:var(--green);text-transform:uppercase;margin-bottom:1.5rem;opacity:0;animation:fadeUp 0.8s 0.2s ease forwards;}
.hero-tag-dot{width:6px;height:6px;background:var(--green);border-radius:50%;animation:pulse 2s infinite;flex-shrink:0;}
@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.5;transform:scale(1.5)}}
.hero-h1{font-family:var(--font-display);font-size:clamp(2.4rem,5vw,5.5rem);font-weight:800;line-height:1.0;letter-spacing:-0.03em;margin-bottom:1.5rem;opacity:0;animation:fadeUp 0.8s 0.4s ease forwards;}
.line-green{color:var(--green);}
.line-outline{-webkit-text-stroke:1px rgba(255,255,255,0.3);color:transparent;}
.hero-p{font-size:1rem;color:var(--text-muted);line-height:1.75;max-width:480px;margin-bottom:2.5rem;opacity:0;animation:fadeUp 0.8s 0.6s ease forwards;}
.hero-btns{display:flex;gap:1rem;flex-wrap:wrap;opacity:0;animation:fadeUp 0.8s 0.8s ease forwards;}
.btn-primary{display:inline-flex;align-items:center;gap:0.5rem;padding:0.9rem 1.8rem;background:var(--green);color:var(--dark);font-family:var(--font-display);font-weight:700;font-size:0.9rem;letter-spacing:0.04em;border-radius:6px;text-decoration:none;transition:all 0.3s ease;position:relative;overflow:hidden;white-space:nowrap;border:none;cursor:pointer;}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 12px 40px var(--green-glow);}
.btn-ghost{display:inline-flex;align-items:center;gap:0.5rem;padding:0.9rem 1.8rem;border:1px solid var(--glass-border);color:var(--text);font-size:0.9rem;border-radius:6px;text-decoration:none;transition:all 0.3s ease;background:var(--glass);backdrop-filter:blur(10px);white-space:nowrap;}
.btn-ghost:hover{border-color:var(--green);color:var(--green);}
.hero-stats{display:flex;gap:2rem;margin-top:2.5rem;flex-wrap:wrap;opacity:0;animation:fadeUp 0.8s 1.2s ease forwards;}
.stat-num{font-family:var(--font-display);font-size:1.8rem;font-weight:800;color:var(--green);line-height:1;}
.stat-label{font-size:0.75rem;color:var(--text-muted);letter-spacing:0.05em;margin-top:2px;}
/* HERO VISUAL */
.hero-visual{position:relative;display:flex;align-items:center;justify-content:center;opacity:0;animation:fadeLeft 0.8s 0.5s ease forwards;}
.hero-img-wrap{position:relative;display:flex;align-items:center;justify-content:center;width:340px;height:420px;}
.hero-ring{position:absolute;border-radius:50%;border:1px solid rgba(0,196,106,0.2);pointer-events:none;}
.hero-ring-1{width:340px;height:340px;animation:spinRing 12s linear infinite;border-color:rgba(0,196,106,0.25);border-top-color:var(--green);border-right-color:transparent;}
.hero-ring-2{width:280px;height:280px;animation:spinRing 8s linear infinite reverse;border-color:rgba(0,196,106,0.15);border-bottom-color:var(--green);border-left-color:transparent;}
.hero-ring-3{width:390px;height:390px;animation:spinRing 16s linear infinite;border-color:rgba(0,196,106,0.08);border-top-color:rgba(0,196,106,0.3);border-left-color:transparent;}
@keyframes spinRing{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
.hero-img-card{position:relative;z-index:2;width:200px;border-radius:28px;overflow:hidden;box-shadow:0 0 0 1px rgba(0,196,106,0.2),0 20px 60px rgba(0,0,0,0.5),0 0 80px rgba(0,196,106,0.15);animation:floatY 5s ease-in-out infinite;background:var(--dark-3);}
.hero-img-card img{width:100%;height:auto;display:block;border-radius:28px;}
.hero-badge{position:absolute;display:flex;align-items:center;gap:0.4rem;background:rgba(10,16,32,0.92);border:1px solid rgba(0,196,106,0.35);border-radius:100px;padding:0.45rem 0.9rem;font-size:0.73rem;font-weight:600;color:var(--text);white-space:nowrap;backdrop-filter:blur(12px);z-index:3;box-shadow:0 8px 24px rgba(0,0,0,0.3),0 0 12px rgba(0,196,106,0.1);}
.hero-badge-1{left:-20px;top:18%;animation:badgeFloat1 4s ease-in-out infinite;}
.hero-badge-2{right:-20px;bottom:35%;animation:badgeFloat2 4s ease-in-out infinite 0.8s;}
.hero-badge-3{left:10px;bottom:12%;animation:badgeFloat1 4s ease-in-out infinite 1.6s;}
@keyframes badgeFloat1{0%,100%{transform:translateY(0) translateX(0)}50%{transform:translateY(-8px) translateX(3px)}}
@keyframes badgeFloat2{0%,100%{transform:translateY(0) translateX(0)}50%{transform:translateY(8px) translateX(-3px)}}
.hero-orb{position:absolute;border-radius:50%;filter:blur(60px);pointer-events:none;animation:orbPulse 4s ease-in-out infinite;}
.hero-orb-1{width:300px;height:300px;background:radial-gradient(circle,rgba(0,196,106,0.15) 0%,transparent 70%);top:-50px;left:-50px;}
.hero-orb-2{width:200px;height:200px;background:radial-gradient(circle,rgba(0,100,200,0.1) 0%,transparent 70%);bottom:-30px;right:-30px;animation-delay:2s;}
@keyframes orbPulse{0%,100%{opacity:0.5;transform:scale(1)}50%{opacity:1;transform:scale(1.1)}}
@keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-20px)}}
/* SECTIONS */
section{position:relative;z-index:2;}
.container{max-width:1280px;margin:0 auto;padding:0 1.25rem;}
.section-pad{padding:5rem 0;}
.section-tag{display:inline-block;font-size:0.72rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--green);margin-bottom:1rem;}
.section-h2{font-family:var(--font-display);font-size:clamp(1.6rem,3.5vw,3rem);font-weight:800;letter-spacing:-0.02em;line-height:1.15;margin-bottom:1rem;}
.section-p{color:var(--text-muted);font-size:0.96rem;line-height:1.75;max-width:560px;}
/* OBSERVE */
#observe{background:linear-gradient(180deg,var(--dark) 0%,var(--dark-2) 100%);border-top:1px solid var(--glass-border);}
.observe-grid{display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center;}
.observe-img-wrap{position:relative;}
.observe-img-wrap img{width:100%;border-radius:16px;filter:drop-shadow(0 20px 60px rgba(0,0,0,0.5));}
.observe-img-wrap::before{content:'';position:absolute;inset:-1px;border-radius:17px;background:linear-gradient(135deg,rgba(0,196,106,0.2),transparent 60%);pointer-events:none;}
.feature-list{margin-top:1.5rem;display:flex;flex-direction:column;gap:0.7rem;}
.feature-item{display:flex;align-items:flex-start;gap:0.9rem;padding:0.8rem 1.1rem;background:var(--glass);border:1px solid var(--glass-border);border-radius:10px;transition:all 0.3s ease;}
.feature-item:hover{border-color:rgba(0,196,106,0.3);background:rgba(0,196,106,0.05);transform:translateX(4px);}
.feature-dot{width:8px;height:8px;background:var(--green);border-radius:50%;margin-top:6px;flex-shrink:0;box-shadow:0 0 10px var(--green-glow);}
.feature-item p{font-size:0.88rem;color:var(--text-muted);line-height:1.5;}
/* DEVICES */
#devices{background:var(--dark-2);}
.devices-grid{display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center;}
.devices-img-wrap img{width:80%;max-width:340px;filter:drop-shadow(0 30px 80px rgba(0,196,106,0.15));animation:floatY 5s 1s ease-in-out infinite;}
.device-badges{display:flex;gap:0.8rem;flex-wrap:wrap;margin-top:1.5rem;}
.device-badge{display:flex;align-items:center;gap:0.6rem;padding:0.65rem 1.1rem;background:var(--glass);border:1px solid var(--glass-border);border-radius:100px;font-size:0.82rem;color:var(--text-muted);}
.hero-stores{display:flex;gap:1rem;margin-top:1.8rem;flex-wrap:wrap;}
.hero-stores img{height:40px;border-radius:6px;transition:transform 0.3s;}
.hero-stores img:hover{transform:translateY(-3px);}
/* RSV */
#rsv{background:var(--dark);overflow:hidden;}
.rsv-header{text-align:center;margin-bottom:3rem;}
.rsv-carousel-wrap{position:relative;height:320px;overflow:hidden;display:flex;align-items:center;}
.rsv-screens-track{display:flex;gap:1.2rem;animation:scrollTrack 30s linear infinite;width:max-content;will-change:transform;}
.rsv-screens-track img{height:280px;width:auto;border-radius:16px;opacity:0.7;transition:opacity 0.3s,transform 0.3s;flex-shrink:0;box-shadow:0 10px 40px rgba(0,0,0,0.4);}
.rsv-screens-track img:hover{opacity:1;transform:scale(1.04);}
@keyframes scrollTrack{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
/* WHY LEAN */
#why-lean{background:linear-gradient(135deg,var(--dark-2) 0%,var(--dark-3) 100%);border-top:1px solid var(--glass-border);border-bottom:1px solid var(--glass-border);text-align:center;}
.why-lean-inner{max-width:720px;margin:0 auto;}
.video-btn-wrap{margin:2.5rem 0 2rem;}
.video-play-btn{display:inline-flex;align-items:center;gap:1rem;padding:1rem 2rem;background:var(--glass);border:1px solid var(--glass-border);border-radius:100px;text-decoration:none;color:var(--text);font-family:var(--font-display);font-weight:600;font-size:0.9rem;transition:all 0.3s ease;}
.video-play-btn:hover{border-color:rgba(0,196,106,0.5);transform:scale(1.02);}
.play-icon{width:44px;height:44px;background:var(--green);border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 0 30px var(--green-glow);}
.store-badges{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;margin-top:2rem;}
.store-badges img{height:42px;border-radius:6px;transition:transform 0.3s,filter 0.3s;filter:brightness(0.8);}
.store-badges img:hover{transform:translateY(-3px);filter:brightness(1);}
/* FEATURES */
#features{background:var(--dark);}
.features-header{text-align:center;margin-bottom:3.5rem;}
.features-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.5rem;}
.feat-card{padding:1.8rem 1.4rem;background:var(--glass);border:1px solid var(--glass-border);border-radius:16px;transition:all 0.4s ease;position:relative;overflow:hidden;}
.feat-card::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,var(--green),transparent);opacity:0;transition:opacity 0.3s;}
.feat-card:hover{border-color:rgba(0,196,106,0.25);transform:translateY(-6px);}
.feat-card:hover::before{opacity:1;}
.feat-icon{width:48px;height:48px;background:rgba(0,196,106,0.1);border:1px solid rgba(0,196,106,0.2);border-radius:12px;display:flex;align-items:center;justify-content:center;margin-bottom:1.1rem;color:var(--green);}
.feat-icon svg{width:22px;height:22px;}
.feat-card h4{font-family:var(--font-display);font-size:0.95rem;font-weight:700;margin-bottom:0.5rem;}
.feat-card p{font-size:0.82rem;color:var(--text-muted);line-height:1.6;}
/* PRICING */
#pricing{background:var(--dark-2);}
.pricing-header{text-align:center;margin-bottom:3.5rem;}
.pricing-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:1.1rem;align-items:start;}
.price-card{background:var(--glass);border:1px solid var(--glass-border);border-radius:16px;padding:1.6rem 1.3rem;transition:all 0.4s ease;position:relative;overflow:hidden;}
.price-card:hover{border-color:rgba(0,196,106,0.3);transform:translateY(-6px);}
.price-card.featured{background:linear-gradient(135deg,rgba(0,196,106,0.12),rgba(0,196,106,0.04));border-color:rgba(0,196,106,0.4);}
.price-badge{position:absolute;top:0.9rem;right:0.9rem;background:var(--green);color:var(--dark);font-size:0.62rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;padding:0.2rem 0.6rem;border-radius:100px;}
.price-name{font-family:var(--font-display);font-size:0.75rem;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:var(--text-muted);margin-bottom:0.9rem;}
.price-amount{font-family:var(--font-display);font-size:2.2rem;font-weight:800;line-height:1;color:var(--text);}
.price-amount sup{font-size:1rem;vertical-align:top;margin-top:0.4rem;display:inline-block;}
.price-period{font-size:0.75rem;color:var(--text-muted);margin:0.4rem 0 1.3rem;}
.price-feats{list-style:none;display:flex;flex-direction:column;gap:0.55rem;}
.price-feats li{display:flex;align-items:center;gap:0.6rem;font-size:0.79rem;color:var(--text-muted);}
.price-feats li.yes{color:var(--text);}
.check{color:var(--green);flex-shrink:0;}
.cross{color:rgba(255,255,255,0.2);flex-shrink:0;}
/* ABOUT */
#about{background:var(--dark);}
.about-grid{display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center;}
.about-img-wrap{position:relative;}
.about-img-wrap img{width:100%;border-radius:20px;filter:grayscale(20%) drop-shadow(0 20px 60px rgba(0,0,0,0.5));}
.about-img-overlay{position:absolute;inset:0;border-radius:20px;background:linear-gradient(135deg,rgba(0,196,106,0.08),transparent);border:1px solid rgba(0,196,106,0.15);pointer-events:none;}
.about-quote{margin-top:1.8rem;padding:1.3rem 1.5rem;background:var(--glass);border-left:3px solid var(--green);border-radius:0 10px 10px 0;}
.about-quote p{font-size:0.92rem;color:var(--text-muted);line-height:1.7;font-style:italic;}
/* CONTACT */
#contact{background:var(--dark-2);border-top:1px solid var(--glass-border);}
.contact-grid{display:grid;grid-template-columns:1fr 1.5fr;gap:4rem;align-items:start;}
.contact-info-item{display:flex;gap:1rem;margin-bottom:1.4rem;align-items:flex-start;}
.contact-icon{width:40px;height:40px;background:rgba(0,196,106,0.1);border:1px solid rgba(0,196,106,0.2);border-radius:10px;display:flex;align-items:center;justify-content:center;color:var(--green);flex-shrink:0;}
.contact-info-item h5{font-size:0.85rem;font-weight:600;margin-bottom:0.2rem;}
.contact-info-item p{font-size:0.85rem;color:var(--text-muted);}
.contact-form{background:var(--glass);border:1px solid var(--glass-border);border-radius:20px;padding:2rem;}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1rem;}
.form-group{margin-bottom:1rem;}
.form-group label{display:block;font-size:0.75rem;letter-spacing:0.1em;text-transform:uppercase;color:var(--text-muted);margin-bottom:0.45rem;}
.form-control{width:100%;padding:0.8rem 1rem;background:rgba(255,255,255,0.04);border:1px solid var(--glass-border);border-radius:10px;color:var(--text);font-family:var(--font-body);font-size:0.9rem;transition:all 0.3s ease;outline:none;-webkit-appearance:none;appearance:none;}
.form-control:focus{border-color:rgba(0,196,106,0.5);background:rgba(0,196,106,0.04);box-shadow:0 0 0 3px rgba(0,196,106,0.08);}
.form-control::placeholder{color:var(--text-muted);}
select.form-control{cursor:pointer;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%237a8ba0' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 1rem center;padding-right:2.5rem;}
select.form-control option{background:var(--dark-3);color:var(--text);}
textarea.form-control{resize:vertical;min-height:110px;}
.form-submit{width:100%;padding:1rem;background:var(--green);color:var(--dark);font-family:var(--font-display);font-weight:700;font-size:0.95rem;letter-spacing:0.04em;border:none;border-radius:10px;cursor:pointer;transition:all 0.3s ease;margin-top:0.5rem;}
.form-submit:hover{transform:translateY(-2px);box-shadow:0 12px 40px var(--green-glow);}
.form-submit:disabled{opacity:0.6;cursor:not-allowed;transform:none!important;}
.form-msg{margin-top:1rem;font-size:0.88rem;padding:0.75rem 1rem;border-radius:8px;display:none;}
.form-msg.success{background:rgba(0,196,106,0.1);border:1px solid rgba(0,196,106,0.3);color:var(--green);display:block;}
.form-msg.error{background:rgba(220,50,50,0.1);border:1px solid rgba(220,50,50,0.3);color:#f66;display:block;}
/* NEWSLETTER */
#newsletter{background:linear-gradient(135deg,rgba(0,196,106,0.08) 0%,rgba(0,196,106,0.02) 100%);border-top:1px solid rgba(0,196,106,0.15);border-bottom:1px solid rgba(0,196,106,0.15);padding:3.5rem 0;position:relative;z-index:2;}
.newsletter-inner{display:flex;align-items:center;justify-content:space-between;gap:2rem;flex-wrap:wrap;}
.newsletter-inner h3{font-family:var(--font-display);font-size:clamp(1.1rem,2.5vw,1.4rem);font-weight:700;max-width:380px;flex:1;}
.newsletter-form-wrap{display:flex;gap:0.8rem;flex-wrap:wrap;flex:1;min-width:260px;}
.newsletter-input{padding:0.82rem 1.1rem;background:var(--glass);border:1px solid var(--glass-border);border-radius:8px;color:var(--text);font-family:var(--font-body);font-size:0.9rem;outline:none;flex:1;min-width:180px;transition:border-color 0.3s;-webkit-appearance:none;}
.newsletter-input:focus{border-color:rgba(0,196,106,0.5);}
.newsletter-input::placeholder{color:var(--text-muted);}
/* FOOTER */
footer{background:var(--dark);border-top:1px solid var(--glass-border);padding:2.5rem 0 2rem;position:relative;z-index:2;}
.footer-inner{display:flex;align-items:flex-start;justify-content:space-between;gap:2rem;flex-wrap:wrap;padding-bottom:2rem;border-bottom:1px solid var(--glass-border);}
.footer-logo img{height:28px;}
.footer-desc{font-size:0.82rem;color:var(--text-muted);margin-top:0.7rem;max-width:260px;line-height:1.6;}
.footer-links-list{display:flex;gap:1.5rem;flex-wrap:wrap;list-style:none;}
.footer-links-list a{font-size:0.82rem;color:var(--text-muted);text-decoration:none;transition:color 0.3s;white-space:nowrap;}
.footer-links-list a:hover{color:var(--green);}
.footer-bottom{display:flex;align-items:center;justify-content:space-between;padding-top:1.4rem;flex-wrap:wrap;gap:1rem;}
.footer-copy{font-size:0.8rem;color:var(--text-muted);}
.footer-copy span{color:var(--green);}
/* DIVIDER */
.glow-divider{height:1px;background:linear-gradient(90deg,transparent 0%,var(--green) 50%,transparent 100%);opacity:0.4;position:relative;z-index:2;}
/* ANIMATIONS */
@keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
@keyframes fadeLeft{from{opacity:0;transform:translateX(30px)}to{opacity:1;transform:translateX(0)}}
.reveal{opacity:0;transform:translateY(30px);transition:all 0.7s cubic-bezier(0.16,1,0.3,1);}
.reveal.visible{opacity:1;transform:translateY(0);}
.reveal-left{opacity:0;transform:translateX(-30px);transition:all 0.7s cubic-bezier(0.16,1,0.3,1);}
.reveal-left.visible{opacity:1;transform:translateX(0);}
.reveal-right{opacity:0;transform:translateX(30px);transition:all 0.7s cubic-bezier(0.16,1,0.3,1);}
.reveal-right.visible{opacity:1;transform:translateX(0);}
/* RESPONSIVE */
@media(max-width:1280px){.pricing-grid{grid-template-columns:repeat(3,1fr)}}
@media(max-width:1024px){
  .features-grid{grid-template-columns:repeat(2,1fr)}
  .pricing-grid{grid-template-columns:repeat(3,1fr)}
  .observe-grid,.devices-grid,.about-grid,.contact-grid{gap:3rem}
}
@media(max-width:900px){
  .nav-links{display:none;flex-direction:column;position:absolute;top:calc(100% + 1px);left:0;right:0;background:rgba(4,8,15,0.97);backdrop-filter:blur(20px);padding:1.5rem 1.25rem;gap:1rem;border-bottom:1px solid var(--glass-border);z-index:999;}
  .nav-links.open{display:flex;}
  .nav-burger{display:flex;}
  .hero-grid{grid-template-columns:1fr;gap:2.5rem;text-align:center;}
  .hero-text{display:flex;flex-direction:column;align-items:center;}
  .hero-p,.hero-btns,.hero-stats,.hero-stores{justify-content:center;}
  .hero-visual{opacity:1!important;animation:fadeUp 0.8s 0.5s ease both;}
  .hero-img-wrap{width:260px;height:340px;}
  .hero-img-card{width:160px;}
  .hero-ring-1{width:260px;height:260px;}
  .hero-ring-2{width:210px;height:210px;}
  .hero-ring-3{width:300px;height:300px;}
  .hero-badge-1{left:-10px;}
  .hero-badge-2{right:-10px;}
  .hero-badge-3{left:5px;font-size:0.65rem;}
  .observe-grid,.devices-grid,.about-grid{grid-template-columns:1fr;gap:2.5rem;}
  .contact-grid{grid-template-columns:1fr;gap:2.5rem;}
  .pricing-grid{grid-template-columns:repeat(2,1fr);}
}
@media(max-width:640px){
  #hero{padding:6.5rem 1.25rem 3rem;}
  .section-pad{padding:3.5rem 0;}
  .hero-btns{flex-direction:column;align-items:stretch;}
  .btn-primary,.btn-ghost{justify-content:center;}
  .features-grid{grid-template-columns:1fr;}
  .pricing-grid{grid-template-columns:1fr;}
  .form-row{grid-template-columns:1fr;}
  .rsv-screens-track img{height:220px;}
  .newsletter-inner{flex-direction:column;align-items:stretch;}
  .newsletter-form-wrap{flex-direction:column;}
  .contact-form{padding:1.5rem;}
}
img{-webkit-user-drag:none;user-select:none;}
`;

/* ─────────────────────────────────────────────
   CANVAS BACKGROUND
───────────────────────────────────────────── */
function CanvasBg() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.3;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.6 + 0.1;
        this.green = Math.random() > 0.7;
      }
      update() {
        this.x += this.speedX; this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
      }
      draw() {
        ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.green ? `rgba(0,196,106,${this.opacity})` : `rgba(255,255,255,${this.opacity * 0.3})`;
        ctx.fill();
      }
    }

    const particles = Array.from({ length: 80 }, () => new Particle());

    const drawGrid = () => {
      ctx.strokeStyle = "rgba(255,255,255,0.018)"; ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 80) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke(); }
      for (let y = 0; y < canvas.height; y += 80) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke(); }
    };

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.strokeStyle = `rgba(0,196,106,${(1 - dist / 120) * 0.15})`; ctx.lineWidth = 0.5;
            ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGrid(); particles.forEach(p => { p.update(); p.draw(); }); drawConnections();
      animId = requestAnimationFrame(animate);
    };
    animate();
    return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(animId); };
  }, []);
  return <canvas ref={canvasRef} id="bg-canvas" />;
}

/* ─────────────────────────────────────────────
   CUSTOM CURSOR
───────────────────────────────────────────── */
function Cursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  useEffect(() => {
    let mx = 0, my = 0, fx = 0, fy = 0, animId;
    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      cursorRef.current.style.left = mx - 6 + "px";
      cursorRef.current.style.top = my - 6 + "px";
    };
    const animate = () => {
      fx += (mx - fx - 18) * 0.12; fy += (my - fy - 18) * 0.12;
      followerRef.current.style.left = fx + "px";
      followerRef.current.style.top = fy + "px";
      animId = requestAnimationFrame(animate);
    };
    document.addEventListener("mousemove", onMove);
    animate();
    return () => { document.removeEventListener("mousemove", onMove); cancelAnimationFrame(animId); };
  }, []);
  return (<><div className="cursor" ref={cursorRef} /><div className="cursor-follower" ref={followerRef} /></>);
}

/* ─────────────────────────────────────────────
   REVEAL HOOK
───────────────────────────────────────────── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal,.reveal-left,.reveal-right");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } });
    }, { threshold: 0.15 });
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ─────────────────────────────────────────────
   SVG ICONS
───────────────────────────────────────────── */
const AppleIcon = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.15-2.21 1.3-2.19 3.87.03 3.07 2.7 4.09 2.73 4.1l-.09.15zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);
const AndroidIcon = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M3.18 23.76c.38.21.82.22 1.22.04L14.64 12 4.4.2C4 .02 3.56.03 3.18.24 2.41.69 2 1.58 2 2.54v18.92c0 .96.41 1.85 1.18 2.3zM16.54 9.9l2.31-2.31-9.77-5.47 7.46 7.78zM5.32 22.88l9.77-5.47-2.31-2.31-7.46 7.78zM22.1 10.82l-2.53-1.42-2.6 2.6 2.6 2.6 2.56-1.44c.73-.41 1.18-1.16 1.18-1.96 0-.79-.45-1.55-1.21-1.38z" />
  </svg>
);

/* ─────────────────────────────────────────────
   HEADER
───────────────────────────────────────────── */
function Header({ t, lang, onLangToggle }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const navLinks = [
    { href: "#rsv", label: t.nav_rsv }, { href: "#why-lean", label: t.nav_why },
    { href: "#features", label: t.nav_features }, { href: "#pricing", label: t.nav_pricing },
    { href: "#about", label: t.nav_about },
  ];
  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <nav className="nav-inner">
        <a href="#" className="nav-logo"><img src="https://value-flow.se/images/logo-white.png" alt="LEAN APP" draggable="false" /></a>
        <ul className={`nav-links${menuOpen ? " open" : ""}`}>
          <li>
            <button className="lang-btn" onClick={onLangToggle} aria-label="Switch language">
              <img className="lang-flag-img" src={lang === "en" ? "image/flag_sv.png" : "image/flag_en.png"} alt={lang === "en" ? "Svenska" : "English"} draggable="false" />
              <span className="lang-label">{t.nav_lang_label}</span>
            </button>
          </li>
          {navLinks.map((l) => (<li key={l.href}><a href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a></li>))}
          <li><a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>{t.nav_support}</a></li>
        </ul>
        <button className={`nav-burger${menuOpen ? " open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </nav>
    </header>
  );
}

/* ─────────────────────────────────────────────
   HERO
───────────────────────────────────────────── */
function Hero({ t }) {
  return (
    <section id="hero">
      <div className="hero-grid container">
        <div className="hero-text">
          <div className="hero-tag"><span className="hero-tag-dot" /><span>{t.hero_tag}</span></div>
          <h1 className="hero-h1">
            <span className="line-green">{t.hero_h1_1}</span><br />
            <span>{t.hero_h1_2}</span><br />
            <span className="line-outline">{t.hero_h1_3}</span>
          </h1>
          <p className="hero-p">{t.hero_p}</p>
          <div className="hero-btns">
            <a href="https://itunes.apple.com/in/app/value-lean/id1347795759?mt=8" className="btn-primary" target="_blank" rel="noopener noreferrer">
              <AppleIcon /><span>{t.hero_btn_apple}</span>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.leanvaluestream.app" className="btn-ghost" target="_blank" rel="noopener noreferrer">
              <AndroidIcon /><span>{t.hero_btn_google}</span>
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item"><div className="stat-num">4+</div><div className="stat-label">{t.stat_modules}</div></div>
            <div className="stat-item"><div className="stat-num">iOS &amp; And</div><div className="stat-label">{t.stat_platform}</div></div>
            <div className="stat-item"><div className="stat-num">2017</div><div className="stat-label">{t.stat_founded}</div></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className="hero-img-wrap">
            <div className="hero-ring hero-ring-1" />
            <div className="hero-ring hero-ring-2" />
            <div className="hero-ring hero-ring-3" />
            <div className="hero-img-card">
              <img src="image/top picture.png" alt="App preview" draggable="false" />
            </div>
            <div className="hero-badge hero-badge-1">
              <svg width="14" height="14" fill="var(--green)" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
              Value Added
            </div>
            <div className="hero-badge hero-badge-2">
              <svg width="14" height="14" fill="var(--green)" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" /></svg>
              LEAN Process
            </div>
            <div className="hero-badge hero-badge-3">
              <svg width="14" height="14" fill="var(--green)" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" /></svg>
              Safe &amp; Efficient
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   OBSERVE
───────────────────────────────────────────── */
function Observe({ t }) {
  const items = ["feat1","feat2","feat3","feat4","feat5","feat6","feat7","feat8"];
  return (
    <section id="observe" className="section-pad">
      <div className="container">
        <div className="observe-grid">
          <div className="observe-img-wrap reveal-left">
            <img src="https://value-flow.se/images/image-12.png" alt="Observe and Capture" draggable="false" />
          </div>
          <div className="reveal-right">
            <span className="section-tag">{t.observe_tag}</span>
            <h2 className="section-h2">{t.observe_h2_1}<br /><span style={{ color: "var(--green)" }}>{t.observe_h2_2}</span></h2>
            <p className="section-p">{t.observe_p}</p>
            <h5 style={{ fontSize: ".85rem", letterSpacing: ".15em", textTransform: "uppercase", color: "var(--text-muted)", margin: "2rem 0 .8rem", fontWeight: 600 }}>{t.observe_sub}</h5>
            <div className="feature-list">
              {items.map((k) => (
                <div className="feature-item" key={k}><div className="feature-dot" /><p>{t[k]}</p></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   DEVICES
───────────────────────────────────────────── */
function Devices({ t }) {
  return (
    <section id="devices" className="section-pad">
      <div className="container">
        <div className="devices-grid">
          <div className="reveal-left">
            <span className="section-tag">{t.devices_tag}</span>
            <h2 className="section-h2">{t.devices_h2_1}<br /><span style={{ color: "var(--green)" }}>{t.devices_h2_2}</span></h2>
            <p className="section-p">{t.devices_p1}</p>
            <p className="section-p" style={{ marginTop: "1rem" }}>{t.devices_p2}</p>
            <p className="section-p" style={{ marginTop: "1rem" }}>{t.devices_p3}<em style={{ color: "var(--text)" }}>{t.devices_p3_em}</em></p>
            <div className="device-badges" style={{ marginTop: "2rem" }}>
              <div className="device-badge">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.15-2.21 1.3-2.19 3.87.03 3.07 2.7 4.09 2.73 4.1l-.09.15zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
                iPhone &amp; iPad
              </div>
              <div className="device-badge">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31A5.983 5.983 0 0 0 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z" /></svg>
                Android 4.1+
              </div>
            </div>
            <div className="hero-stores">
              <a href="https://itunes.apple.com/in/app/value-lean/id1347795759?mt=8" target="_blank" rel="noopener noreferrer"><img src="https://value-flow.se/images/store_badges/appstore.png" alt="App Store" draggable="false" /></a>
              <a href="https://play.google.com/store/apps/details?id=com.leanvaluestream.app" target="_blank" rel="noopener noreferrer"><img src="https://value-flow.se/images/store_badges/googleplay.png" alt="Google Play" draggable="false" /></a>
            </div>
          </div>
          <div className="devices-img-wrap reveal-right" style={{ textAlign: "center" }}>
            <img src="https://value-flow.se/images/apple-watch.png" alt="Available on all devices" draggable="false" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   RSV CAROUSEL
───────────────────────────────────────────── */
function RSV({ t }) {
  const screens = Array.from({ length: 8 }, (_, i) => `https://value-flow.se/images/portfolio/screen-${i + 1}.jpg`);
  const allScreens = [...screens, ...screens];
  return (
    <section id="rsv" className="section-pad">
      <div className="container">
        <div className="rsv-header reveal">
          <span className="section-tag">{t.rsv_tag}</span>
          <h2 className="section-h2">{t.rsv_h2}</h2>
          <p className="section-p" style={{ margin: "0 auto", textAlign: "center" }}>{t.rsv_p}</p>
        </div>
      </div>
      <div className="rsv-carousel-wrap">
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 100, background: "linear-gradient(90deg,var(--dark),transparent)", zIndex: 5, pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 100, background: "linear-gradient(-90deg,var(--dark),transparent)", zIndex: 5, pointerEvents: "none" }} />
        <div className="rsv-screens-track">
          {allScreens.map((src, i) => (<img key={i} src={src} alt={`Screenshot ${(i % 8) + 1}`} draggable="false" />))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   WHY LEAN
───────────────────────────────────────────── */
function WhyLean({ t }) {
  return (
    <section id="why-lean" className="section-pad">
      <div className="container">
        <div className="why-lean-inner reveal">
          <span className="section-tag">{t.why_tag}</span>
          <h2 className="section-h2"><span>{t.why_h2}</span> <span style={{ color: "var(--green)" }}>Lean</span></h2>
          <p className="section-p" style={{ margin: "0 auto 2.5rem", textAlign: "center" }}>{t.why_p}</p>
          <div className="video-btn-wrap">
            <a href="https://www.youtube.com/watch?v=vdCMFpDziN8" className="video-play-btn" target="_blank" rel="noopener noreferrer">
              <div className="play-icon"><svg width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg></div>
              <span>{t.why_btn}</span>
            </a>
          </div>
          <div className="store-badges">
            <a href="https://itunes.apple.com/in/app/value-lean/id1347795759?mt=8" target="_blank" rel="noopener noreferrer"><img src="https://value-flow.se/images/store_badges/appstore.png" alt="App Store" draggable="false" /></a>
            <a href="https://play.google.com/store/apps/details?id=com.leanvaluestream.app" target="_blank" rel="noopener noreferrer"><img src="https://value-flow.se/images/store_badges/googleplay.png" alt="Google Play" draggable="false" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FEATURES
───────────────────────────────────────────── */
function Features({ t }) {
  const cards = [
    { title: t.card1_title, p: t.card1_p, icon: <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" /></svg> },
    { title: t.card2_title, p: t.card2_p, icon: <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /></svg> },
    { title: t.card3_title, p: t.card3_p, icon: <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg> },
    { title: t.card4_title, p: t.card4_p, icon: <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg> },
  ];
  return (
    <section id="features" className="section-pad">
      <div className="container">
        <div className="features-header reveal">
          <span className="section-tag">{t.feat_tag}</span>
          <h2 className="section-h2">{t.feat_h2_1} <span style={{ color: "var(--green)" }}>{t.feat_h2_2}</span></h2>
          <p className="section-p" style={{ margin: "0 auto" }}>{t.feat_desc}</p>
        </div>
        <div className="features-grid">
          {cards.map((c) => (
            <div className="feat-card" key={c.title}>
              <div className="feat-icon">{c.icon}</div>
              <h4>{c.title}</h4><p>{c.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PRICING
───────────────────────────────────────────── */
function PriceFeat({ yes, label }) {
  return (
    <li className={yes ? "yes" : ""}>
      <span className={yes ? "check" : "cross"}>{yes ? "✓" : "✗"}</span> {label}
    </li>
  );
}

function Pricing({ t }) {
  const f = (yes, key) => ({ yes, label: t[key] });
  const plans = [
    { name: t.plan_free, amount: "0", period: t.period_trial, featured: false,
      feats: [f(1,"feat_img"),f(0,"feat_vid"),f(0,"feat_extvid"),f(1,"feat_va"),f(1,"feat_nva"),f(1,"feat_ova"),f(1,"feat_unsafe"),f(0,"feat_user"),f(1,"feat_compare"),f(1,"feat_projects")] },
    { name: t.plan_silver, amount: "10", period: t.period_30, featured: false,
      feats: [f(1,"feat_img"),f(0,"feat_vid"),f(0,"feat_extvid"),f(1,"feat_va"),f(1,"feat_nva"),f(1,"feat_ova"),f(1,"feat_unsafe"),f(1,"feat_user"),f(1,"feat_compare"),f(1,"feat_projects")] },
    { name: t.plan_gold, amount: "18", period: t.period_60, featured: true,
      feats: [f(1,"feat_img"),f(1,"feat_vid"),f(0,"feat_extvid"),f(1,"feat_va"),f(1,"feat_nva"),f(1,"feat_ova"),f(1,"feat_unsafe"),f(1,"feat_user"),f(1,"feat_compare"),f(1,"feat_projects")] },
    { name: t.plan_platinum, amount: "24", period: t.period_90, featured: false,
      feats: [f(1,"feat_img"),f(1,"feat_vid"),f(1,"feat_extvid"),f(1,"feat_va"),f(1,"feat_nva"),f(1,"feat_ova"),f(1,"feat_unsafe"),f(1,"feat_user"),f(1,"feat_compare"),f(1,"feat_projects")] },
    { name: t.plan_monthly, amount: "8", period: t.period_monthly, featured: false,
      feats: [f(1,"feat_img"),f(1,"feat_vid"),f(1,"feat_extvid"),f(1,"feat_va"),f(1,"feat_nva"),f(1,"feat_ova"),f(1,"feat_unsafe"),f(1,"feat_user"),f(1,"feat_compare"),f(1,"feat_projects")] },
  ];
  return (
    <section id="pricing" className="section-pad">
      <div className="container">
        <div className="pricing-header reveal">
          <span className="section-tag">{t.pricing_tag}</span>
          <h2 className="section-h2">{t.pricing_h2_1} <span style={{ color: "var(--green)" }}>{t.pricing_h2_2}</span></h2>
          <p className="section-p" style={{ margin: "0 auto" }}>{t.pricing_p}</p>
        </div>
        <div className="pricing-grid">
          {plans.map((p) => (
            <div className={`price-card${p.featured ? " featured" : ""}`} key={p.name}>
              {p.featured && <div className="price-badge">{t.plan_popular}</div>}
              <div className="price-name">{p.name}</div>
              <div className="price-amount"><sup>$</sup>{p.amount}<small style={{ fontSize: "1rem" }}>.00</small></div>
              <div className="price-period">{p.period}</div>
              <ul className="price-feats">
                {p.feats.map((f, i) => <PriceFeat key={i} yes={f.yes} label={f.label} />)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   ABOUT
───────────────────────────────────────────── */
function About({ t }) {
  return (
    <section id="about" className="section-pad">
      <div className="container">
        <div className="about-grid">
          <div className="about-img-wrap reveal-left">
            <img src="https://value-flow.se/images/image-02.png" alt="About Value-flow" draggable="false" />
            <div className="about-img-overlay" />
          </div>
          <div className="reveal-right">
            <span className="section-tag">{t.about_tag}</span>
            <h2 className="section-h2">{t.about_h2_1} <span style={{ color: "var(--green)" }}>{t.about_h2_2}</span></h2>
            <p className="section-p">{t.about_p}</p>
            <div className="about-quote"><p>{t.about_quote}</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   CONTACT
───────────────────────────────────────────── */
function Contact({ t }) {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) { setStatus({ type: "error", msg: "Please fill in all required fields." }); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { setStatus({ type: "error", msg: "Please enter a valid email address." }); return; }
    setSending(true);
    try {
      await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: form.name, from_email: form.email,
        subject: form.subject || "General Enquiry",
        message: form.message, reply_to: form.email, to_name: "Value-flow Team",
      }, EMAILJS_PUBLIC_KEY);
      setStatus({ type: "success", msg: "✓ Message sent! We'll get back to you soon." });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus({ type: "error", msg: "Something went wrong. Please email us at support@value-flow.se" });
    }
    setSending(false);
    setTimeout(() => setStatus(null), 6000);
  };

  const infoItems = [
    { icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>, label: t.contact_email_label, val: "support@value-flow.se" },
    { icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>, label: t.contact_web_label, val: "value-flow.se" },
    { icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, label: t.contact_loc_label, val: "Sweden" },
  ];

  return (
    <section id="contact" className="section-pad">
      <div className="container">
        <div className="contact-grid">
          <div className="reveal-left">
            <span className="section-tag">{t.contact_tag}</span>
            <h2 className="section-h2">{t.contact_h2_1}<br /><span style={{ color: "var(--green)" }}>{t.contact_h2_2}</span></h2>
            <p className="section-p" style={{ marginBottom: "2.5rem" }}>{t.contact_p}</p>
            {infoItems.map((item) => (
              <div className="contact-info-item" key={item.label}>
                <div className="contact-icon">{item.icon}</div>
                <div><h5>{item.label}</h5><p>{item.val}</p></div>
              </div>
            ))}
          </div>
          <div className="reveal-right">
            <form className="contact-form" onSubmit={onSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label>{t.form_name}</label>
                  <input name="name" className="form-control" placeholder="enter your name" value={form.name} onChange={onChange} />
                </div>
                <div className="form-group">
                  <label>{t.form_email}</label>
                  <input name="email" type="email" className="form-control" placeholder="you@example.com" value={form.email} onChange={onChange} />
                </div>
              </div>
              <div className="form-group">
                <label>{t.form_subject}</label>
                <select name="subject" className="form-control" value={form.subject} onChange={onChange}>
                  <option value="">{t.form_opt0}</option>
                  <option value="registering">{t.form_opt1}</option>
                  <option value="using">{t.form_opt2}</option>
                  <option value="other">{t.form_opt3}</option>
                </select>
              </div>
              <div className="form-group">
                <label>{t.form_msg_label}</label>
                <textarea name="message" className="form-control" rows="5" placeholder="Tell us how we can help..." value={form.message} onChange={onChange} />
              </div>
              <button type="submit" className="form-submit" disabled={sending}>{sending ? "Sending..." : t.form_submit}</button>
              {status && <div className={`form-msg ${status.type}`}>{status.msg}</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   NEWSLETTER
───────────────────────────────────────────── */
function Newsletter({ t }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) { setDone(true); setEmail(""); setTimeout(() => setDone(false), 3000); }
  };
  return (
    <section id="newsletter">
      <div className="container">
        <div className="newsletter-inner">
          <h3>{t.news_h3}</h3>
          <form className="newsletter-form-wrap" onSubmit={onSubmit}>
            <input type="email" className="newsletter-input" placeholder={done ? "✓ Subscribed! Thank you." : "Your email address"} value={email} onChange={(e) => setEmail(e.target.value)} required />
            <button type="submit" className="btn-primary" style={{ whiteSpace: "nowrap" }}>
              <span>{t.news_btn}</span>
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" /></svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────── */
function Footer({ t }) {
  const links = [
    { href: "#rsv", label: t.nav_rsv }, { href: "#why-lean", label: t.nav_why },
    { href: "#features", label: t.nav_features }, { href: "#pricing", label: t.nav_pricing },
    { href: "#about", label: t.nav_about },
    { href: "https://leanadmin.valuestream.se/site/termsandconditions?cont=privacy", label: t.footer_privacy, ext: true },
    { href: "https://leanadmin.valuestream.se/site/termsandconditions?cont=terms", label: t.footer_terms, ext: true },
  ];
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div>
            <div className="footer-logo"><img src="https://value-flow.se/images/logo-grey.png" alt="LEAN APP" draggable="false" /></div>
            <p className="footer-desc">{t.footer_desc}</p>
          </div>
          <ul className="footer-links-list">
            {links.map((l) => (<li key={l.label}><a href={l.href} target={l.ext ? "_blank" : undefined} rel={l.ext ? "noopener noreferrer" : undefined}>{l.label}</a></li>))}
          </ul>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">© 2018 <span>value-flow.se</span> — All Rights Reserved</p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <a href="https://itunes.apple.com/in/app/value-lean/id1347795759?mt=8" target="_blank" rel="noopener noreferrer">
              <img src="https://value-flow.se/images/store_badges/appstore.png" alt="App Store" draggable="false" style={{ height: 28, borderRadius: 4, opacity: 0.6, transition: "opacity .3s" }} onMouseOver={(e) => (e.target.style.opacity = 1)} onMouseOut={(e) => (e.target.style.opacity = 0.6)} />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.leanvaluestream.app" target="_blank" rel="noopener noreferrer">
              <img src="https://value-flow.se/images/store_badges/googleplay.png" alt="Google Play" draggable="false" style={{ height: 28, borderRadius: 4, opacity: 0.6, transition: "opacity .3s" }} onMouseOver={(e) => (e.target.style.opacity = 1)} onMouseOut={(e) => (e.target.style.opacity = 0.6)} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────
   PRELOADER
───────────────────────────────────────────── */
function Preloader() {
  const [hidden, setHidden] = useState(false);
  useEffect(() => { const t = setTimeout(() => setHidden(true), 1800); return () => clearTimeout(t); }, []);
  return (
    <div className={`preloader${hidden ? " hidden" : ""}`}>
      <div>
        <div className="pre-logo">LEAN<span>APP</span></div>
        <div className="pre-bar" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   APP ROOT
───────────────────────────────────────────── */
export default function App() {
  const [lang, setLang] = useState(() => localStorage.getItem("lean_lang") || "en");
  const t = translations[lang];

  const toggleLang = () => {
    const next = lang === "en" ? "sv" : "en";
    setLang(next);
    localStorage.setItem("lean_lang", next);
  };

  // Inject global CSS once
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = globalCSS;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  // Scroll reveal
  useReveal();

  return (
    <>
      <Preloader />
      <CanvasBg />
      <Cursor />
      <Header t={t} lang={lang} onLangToggle={toggleLang} />
      <Hero t={t} />
      <div className="glow-divider" />
      <Observe t={t} />
      <Devices t={t} />
      <div className="glow-divider" />
      <RSV t={t} />
      <WhyLean t={t} />
      <div className="glow-divider" />
      <Features t={t} />
      <Pricing t={t} />
      <div className="glow-divider" />
      <About t={t} />
      <Contact t={t} />
      <Newsletter t={t} />
      <Footer t={t} />
    </>
  );
}