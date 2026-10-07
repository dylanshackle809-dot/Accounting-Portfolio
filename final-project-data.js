const PAGE_CONFIG = {
    businessName: "Pacific Horizon Enterprises",
    moduleTitle: "General Business Financial Portfolio",
    pageSubtitle: "Accounting Ledger & Financial Statement Analysis",
    studentAuthor: "Accounting Student Portfolio",

    // Student Reflection Cards Data (5 items including Tech Tip)
    reflections: [
        {
            title: "What is the most interesting",
            subtitle: "Key Takeaway & Highlight",
            content: "Discovering how minor variations in asset depreciation schedules and liability tracking can drastically shift a company's net operating income. Building out the automated ledger workflows provided a fascinating bridge between theoretical GAAP principles and real-world software tooling."
        },
        {
            title: "What is the most challenging",
            subtitle: "Obstacles & Hurdles",
            content: "Balancing the trial balance sheet accurately on the first iterative pass without running into rounding discrepancies or classification errors between current and long-term liabilities. Ensuring absolute alignment across multi-column journal entries required meticulous focus."
        },
        {
            title: "What have you learned (any tips to give?)",
            subtitle: "Insights & Pro Tips",
            content: "Always reconcile accounts sequentially rather than all at once. Tip: Color-code debit and credit categories during your initial rough drafts to catch transposition errors early before transferring data into final financial statement templates."
        },
        {
            title: "How does it tie to the lesson (which chapter?), which topics specifically",
            subtitle: "Curriculum Integration",
            content: "Directly correlates with Chapters 7 through 9 focusing on Advanced General Ledger Accounting, Adjusting Entries, and Preparing Multi-Step Income Statements. Specifically ties into internal control frameworks, accrual accounting concepts, and trial balance verification."
        },
        {
            title: "Tech Tip: Converting Screenshots into Video Presentations",
            subtitle: "Tools & Software Workflow",
            content: "To transform static storyboards and app screenshots into a polished walkthrough with voice-over, text overlays, and closed captions, the following tools were utilized: 1) OBS Studio or CapCut for screen recording and voice-over narration, 2) Adobe Premiere Pro or CapCut Auto-Captions for generating synchronized closed captions, and 3) Canva or Adobe Express for organizing image assets sequentially prior to export."
        }
    ],

    // Storyboard Carousel Items (Student Generated PNGs)
    storyboardSlides: [
        {
            title: "Storyboard Phase 1: Concept & Ideation",
            description: "Initial sketches and user persona mapping for the digital service workflow.",
            image: "storyboard-1.png",
            badge: "Phase 1 • Ideation"
        },
        {
            title: "Storyboard Phase 2: Wireframe & Layout",
            description: "Structural layout planning for user interaction points and interface hierarchy.",
            image: "storyboard-2.png",
            badge: "Phase 2 • Wireframing"
        },
        {
            title: "Storyboard Phase 3: Final Prototype & Polish",
            description: "High-fidelity visual design and integrated financial reporting dashboard preview.",
            image: "storyboard-3.png",
            badge: "Phase 3 • Prototype"
        }
    ],

    // YouTube / YouTube Short Video Integration Configuration
    // videoType options: 'auto', 'regular', or 'short'
    videoConfig: {
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        videoType: "auto",
        title: "Project Demonstration & Walkthrough",
        description: "Watch the student presentation explaining the financial ledger layout and accounting workflows."
    }
};
