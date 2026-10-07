const STOCK_CONFIG = {
    businessName: "Apex Capital & Wealth Management Corp.",
    portfolioName: "Student Growth & Dividend Portfolio",
    studentAuthor: "Accounting Student Portfolio - Period 3",
    currentTheme: "emerald", // Options: "emerald", "midnight", "ocean", "sunset", "crimson", "purple", "slate"

    // Borrowed Capital Configuration
    borrowedPrincipal: 10000.00,        // Student borrowed investment capital (Configurable)
    borrowingInterestRatePct: 6.5,      // Annual borrowing interest rate (%)

    // 4 Selected Assets: Exactly 2 Stocks and 2 ETFs with photo, ticker, shares, pricing, transaction fee, monthly dividend, and reason
    holdings: [
        {
            name: "Apple Inc.",
            ticker: "AAPL",
            assetType: "Stock",
            shares: 15,
            purchasePrice: 175.50,
            transactionFee: 9.99,
            currentPrice: 188.20,
            monthlyDividendPerShare: 0.25, // Average monthly dividend per share equivalent
            photo: "stock1.png",
            reason: "Strong brand loyalty, consistent cash flow generation, and robust ecosystem expansion in hardware and recurring services."
        },
        {
            name: "Microsoft Corporation",
            ticker: "MSFT",
            assetType: "Stock",
            shares: 10,
            purchasePrice: 380.00,
            transactionFee: 9.99,
            currentPrice: 415.50,
            monthlyDividendPerShare: 0.65, // Average monthly dividend per share equivalent
            photo: "stock2.png",
            reason: "Dominant position in enterprise cloud infrastructure (Azure) and enterprise AI integration via Copilot partnerships."
        },
        {
            name: "Vanguard S&P 500 ETF",
            ticker: "VOO",
            assetType: "ETF",
            shares: 20,
            purchasePrice: 440.00,
            transactionFee: 9.99,
            currentPrice: 478.30,
            monthlyDividendPerShare: 0.80, // Average monthly dividend per share equivalent
            photo: "etf1.png",
            reason: "Core passive index holding providing instant diversification across the 500 largest US corporations with minimal expense ratios."
        },
        {
            name: "Invesco QQQ Trust (Nasdaq 100)",
            ticker: "QQQ",
            assetType: "ETF",
            shares: 12,
            purchasePrice: 410.00,
            transactionFee: 9.99,
            currentPrice: 445.80,
            monthlyDividendPerShare: 0.50, // Average monthly dividend per share equivalent
            photo: "etf2.png",
            reason: "Heavy exposure to top-tier innovation, technology, and semiconductor leaders driving long-term capital growth."
        }
    ],

    // SWOT Analysis Writeups (including cash flow comparison)
    swotAnalysis: {
        strengthsTitle: "Strengths",
        strengthsText: "Diversified mix of stable mega-cap cash cows and broad-market index ETFs offering resilience against sector-specific downturns.",
        weaknessesTitle: "Weaknesses",
        weaknessesText: "High concentration in technology and growth sectors. Currently, monthly cash inflows from dividends fall short of covering monthly borrowing cost expenses, creating a net monthly cash deficit that requires external funding.",
        opportunitiesTitle: "Opportunities",
        opportunitiesText: "Expanding dividend-yielding holdings or optimizing leverage rates to close the gap between monthly cash inflow and borrowing cost outflows.",
        threatsTitle: "Threats",
        threatsText: "Macroeconomic volatility, rising borrowing interest rates, and sudden market corrections affecting leveraged positions."
    }
};