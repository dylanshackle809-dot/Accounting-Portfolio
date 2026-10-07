// PHASE II: Additional Transaction, Analysis, and Cash Configuration
const PHASE2_CONFIG = {
    // Uninvested Cash on Hand (Liquid Capital available for purchases or interest earning)
    cashOnHand: 6000.00,

    // 1. Additional Buy / Sell Transactions Ledger
    secondaryTransactions: [
        {
            ticker: "AAPL",
            action: "BUY",
            shares: 5,
            transactionPrice: 190.50,
            transactionFee: 9.99,
            reason: "Added to position following strong quarterly services revenue expansion and defensive cash flow stability during market consolidation."
        },
        {
            ticker: "QQQ",
            action: "SELL",
            shares: 4,
            transactionPrice: 452.00,
            transactionFee: 9.99,
            reason: "Trimmed position to rebalance sector allocation weights and lock in capital gains following a semiconductor rally."
        }
    ],

    // 2. Focused Stock Analysis (e.g., Apple Inc. / AAPL)
    deepDiveStock: {
        name: "Apple Inc.",
        ticker: "AAPL",
        sector: "Technology / Consumer Electronics",

        // Four-Quarter Trend Data
        quarters: [
            { period: "Q1 FY2026", revenueGrowthYoy: "+4.8%", ebitdaChange: "+5.2%", debtToEquity: "145.2%" },
            { period: "Q2 FY2026", revenueGrowthYoy: "+5.5%", ebitdaChange: "+6.1%", debtToEquity: "142.8%" },
            { period: "Q3 FY2026", revenueGrowthYoy: "+6.1%", ebitdaChange: "+7.0%", debtToEquity: "140.5%" },
            { period: "Q4 FY2026 (Est.)", revenueGrowthYoy: "+7.0%", ebitdaChange: "+8.3%", debtToEquity: "138.1%" }
        ],

        // Price Prediction & Upside / Downside
        target1Year: 215.00,
        currentPriceForTarget: 188.20,
        upsidePotentialPct: "+14.2%",
        downsideRiskPct: "-8.5%",
        analystConsensus: "Moderate Buy",
        predictionRationale: "Driven by accelerated AI integration across edge devices (Apple Intelligence upgrade cycle) and high-margin recurring services growth offsetting hardware cyclicality.",

        // Technical Analysis Placeholders (Ichimoku Clouds & GoNoGo)
        ichimokuAnalysis: {
            status: "Bullish Tenkan-Kijun Cross",
            description: "Price is trading comfortably above the Kumo (cloud) with a rising Chikou Span (lagging line) confirming medium-term upward momentum. Support holds near the upper cloud boundary ($182.50)."
        },
        goNoGoAnalysis: {
            status: "Go (Strong Cyan / Blue Bar Continuation)",
            description: "GoNoGo Trend indicator displays consistent cyan continuation bars, signaling that institutional accumulation remains dominant with low momentum volatility."
        }
    }
};