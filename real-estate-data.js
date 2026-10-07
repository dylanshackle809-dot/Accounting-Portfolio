const PROPERTY_CONFIG = {
    businessName: "Dylan & Andan Investment Group",
    propertyName: "4th Avenue Investment Property",
    propertyAddress: "25 10200 4TH AVENUE",
    studentAuthor: "Accounting Dylan Shackle Portfolio - Block D",

    // Choose matching theme variable (e.g., "emerald", "midnight", "ocean", "sunset", "crimson", "purple", "slate")
    currentTheme: "midnight",

    // Financial & Accounting Dollar Amounts & Rates
    marketValue: 574800,         // Current Market Purchase Value ($)
    bcAssessmentValue: 626200,   // Official BC Assessment Value ($)
    mortgageAmount: 348800,      // Initial Mortgage Loan Principal ($)
    annualInterestRate: 4.19,     // Annual Mortgage Interest Rate (%)
    loanTermYears: 25,           // Mortgage Duration (Years)
    monthlyRent: 2850,           // Gross Monthly Rental Income ($)
    vacancyRate: 5.0,            // Estimated Vacancy Allowance (%)

    // Simplified Monthly Expenses ($)
    monthlyPropertyTax: 155.99,     // Monthly Property Tax Allocation
    monthlyStrata: 514.59,          // Monthly Strata / Condo Maintenance Fee

    // SWOT Analysis Writeups & Configuration Variables
    swotAnalysis: {
        strengthsTitle: "Strengths",
        strengthsText: "Robust cash income potential derived from a consistent gross rental yield of $2,850 per month, combined with immediate equity value since the $574,800 market purchase price sits well below the $626,200 BC Assessment value.",
        weaknessesTitle: "Weaknesses",
        weaknessesText: "High total monthly outflows of $2,548 (comprising a $1,878 mortgage payment, $156 in property taxes, and a $515 strata/condo fee) create tight cash flow sensitivity and leave a narrow net monthly cash flow of just $159.",
        opportunitiesTitle: "Opportunities",
        opportunitiesText: "Capitalizing on the built-in property equity and future market value appreciation, while leveraging the 25-year mortgage amortization schedule to steadily pay down the $348,800 loan principal over time.",
        threatsTitle: "Threats",
        threatsText: "Exposure to evolving tenancy management regulations, legislative changes, and rising carrying costs where adjustments to the current 4.2% interest rate or increases to the $515 monthly strata fee could easily erase the slim $1,908 annualized net income."
    },
    // Exactly 6 carousel items: Slot 0 (Exterior), Slots 1-4 relative photo filenames in pics/ folder, Slot 5 (Location Map)
    photos: [
        "house.png", // Exterior Front
        "photo1.png",
        "photo2.png",
        "photo3.png",
        "photo4.png",
        "photo5.png"  // Location Map / Neighborhood View
    ]
};