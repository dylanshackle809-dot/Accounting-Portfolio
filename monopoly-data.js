
const MONOPOLY_CONFIG = {
    theme: "emerald", // Options: "emerald", "indigo", "blue", "violet", "amber"
    businessName: "Monopoly Board Game Enterprises",
    portfolioName: "Monopoly Financial Accounting Showcase",
    studentAuthor: "Accounting Student Portfolio",



    // Transactions and effecting accounts
    transactions: [
        {
            id: "opening",
            title: "Opening Balance / Capital Investment",
            drAccount: "Cash",
            crAccount: "Owner's Equity / Capital",
            description: "Initial cash injection provided to start the game and fund all board game property investments and operational expenses.",
            photo: "opening-sample.png",
            samplePicText: "General Journal: Cash (Dr.) $1,500 | Capital (Cr.) $1,500"
        },
        {
            id: "purchase-land",
            title: "Purchase Land / Property",
            drAccount: "Land & Buildings (Property Asset)",
            crAccount: "Cash",
            description: "Acquiring unowned board game real estate (e.g., Boardwalk, Mediterranean Avenue) from the bank for future rental income generation.",
            photo: "purchase-land-sample.png",
            samplePicText: "General Journal: Property Asset (Dr.) $400 | Cash (Cr.) $400"
        },
        {
            id: "sell-land",
            title: "Sell Land / Property",
            drAccount: "Cash",
            crAccount: "Land & Buildings (Property Asset)",
            description: "Liquidating real estate holdings back to the bank or trading with opponents to unlock emergency liquidity during a cash crunch.",
            photo: "sell-land-sample.png",
            samplePicText: "General Journal: Cash (Dr.) $200 | Property Asset (Cr.) $200"
        },
        {
            id: "purchase-building",
            title: "Purchase Building (Houses / Hotels)",
            drAccount: "Land & Buildings (Improvements)",
            crAccount: "Cash",
            description: "Investing capital into property improvements (houses and hotels) to substantially escalate toll/rental charges on landed players.",
            photo: "purchase-building-sample.png",
            samplePicText: "General Journal: Property Improvements (Dr.) $150 | Cash (Cr.) $150"
        },
        {
            id: "sell-building",
            title: "Sell Building (Houses / Hotels)",
            drAccount: "Cash",
            crAccount: "Land & Buildings (Improvements)",
            description: "Mortgaging or selling back houses/hotels to the bank at half price to cover impending debt obligations or rent payments.",
            photo: "sell-building-sample.png",
            samplePicText: "General Journal: Cash (Dr.) $75 | Property Improvements (Cr.) $75"
        },
        {
            id: "collect-rent",
            title: "Collect Rent",
            drAccount: "Cash",
            crAccount: "Rental Revenue",
            description: "Receiving cash from opposing players who landed on your owned properties, recorded as operating revenue.",
            photo: "collect-rent-sample.png",
            samplePicText: "General Journal: Cash (Dr.) $50 | Rental Revenue (Cr.) $50"
        },
        {
            id: "paying-rent",
            title: "Paying Rent",
            drAccount: "Rent Expense / Operating Cost",
            crAccount: "Cash",
            description: "Disbursing cash to an opponent upon landing on their developed or undeveloped property spaces.",
            photo: "paying-rent-sample.png",
            samplePicText: "General Journal: Rent Expense (Dr.) $50 | Cash (Cr.) $50"
        },
        {
            id: "purchase-community-service",
            title: "Purchase - Community Service (Tax-Inclusive)",
            drAccount: "Community Expense (Cost + PST) & GST Recoverable",
            crAccount: "Cash",
            description: "Purchasing services or supplies between businesses, recording the base cost plus PST into expense while tracking recoverable GST.",
            photo: "paying-community-sample.png",
            samplePicText: "General Journal: Community Exp (Dr.) $105 | GST Recoverable (Dr.) $5 | Cash (Cr.) $110"
        },
        {
            id: "sales-community-service",
            title: "Sales - Community Service (Tax-Inclusive)",
            drAccount: "Cash",
            crAccount: "Community Income, GST Payable, PST Payable",
            description: "Providing a business service to another player/entity, recording community revenue alongside liabilities for GST and PST collected.",
            photo: "collect-rent-sample.png",
            samplePicText: "General Journal: Cash (Dr.) $112 | Community Income (Cr.) $100 | GST Payable (Cr.) $5 | PST Payable (Cr.) $7"
        },
        {
            id: "paying-community",
            title: "Paying Community Chest / Tax",
            drAccount: "Taxes / Penalties Expense",
            crAccount: "Cash",
            description: "Fulfilling mandatory board requirements such as Luxury Tax, Income Tax, or Community Chest penalty assessments.",
            photo: "paying-community-sample.png",
            samplePicText: "General Journal: Tax Expense (Dr.) $100 | Cash (Cr.) $100"
        },
        {
            id: "collect-community",
            title: "Collect Community Chest / Bank Error",
            drAccount: "Cash",
            crAccount: "Miscellaneous Income / Bank Error",
            description: "Receiving unexpected cash inflows from bank error in your favor, tax refunds, or inherited wealth cards.",
            photo: "collect-community-sample.png",
            samplePicText: "General Journal: Cash (Dr.) $200 | Miscellaneous Income (Cr.) $200"
        },
        {
            id: "collect-go",
            title: "Collect GO Salary",
            drAccount: "Cash",
            crAccount: "Salary / Operational Revenue",
            description: "Collecting standard operating salary income upon successfully completing a full circuit around the board past GO.",
            photo: "collect-go-sample.png",
            samplePicText: "General Journal: Cash (Dr.) $200 | Salary Revenue (Cr.) $200"
        }
    ],

    // Multi-page Journal Image List for the Slider Accordion
    journalPages: [
        "journal-page-1.png",
        "journal-page-2.png",
        "journal-page-3.png"
    ],



    // Ledger Accounts List (with accountNumber and accountType: "asset", "liability", "equity", "income", "expenses")
    accounts: [
        { id: "cash", accountNumber: "101", accountType: "asset", name: "Cash", photo: "account-cash.png", desc: "Tracks all physical cash inflows and outflows from bank transactions, rent payments, and capital injections." },
        { id: "properties", accountNumber: "120", accountType: "asset", name: "Properties", photo: "account-properties.png", desc: "Maintains book values for unbuilt land and site acquisitions across the board." },
        { id: "building", accountNumber: "125", accountType: "asset", name: "Building", photo: "account-building.png", desc: "Capitalized costs for houses and hotels constructed on owned properties." },
        { id: "gst-payable", accountNumber: "210", accountType: "liability", name: "GST Payable", photo: "account-gst-payable.png", desc: "Liability account tracking Goods and Services Tax collected from other players on business services." },
        { id: "gst-recoverable", accountNumber: "115", accountType: "liability", name: "GST Recoverable", photo: "account-gst-recoverable.png", desc: "Asset / Input Tax Credit account tracking GST paid on business purchases and community service expenses." },
        { id: "pst-payable", accountNumber: "215", accountType: "liability", name: "PST Payable", photo: "account-pst-payable.png", desc: "Liability account tracking Provincial Sales Tax collected on applicable taxable supplies." },
        { id: "player1-capital", accountNumber: "301", accountType: "equity", name: "Player1 Capital", photo: "account-player1-capital.png", desc: "Owner's equity and capital investments made by Player 1 into the enterprise." },
        { id: "player2-capital", accountNumber: "302", accountType: "equity", name: "Player2 Capital", photo: "account-player2-capital.png", desc: "Owner's equity and capital investments made by Player 2 into the enterprise." },
        { id: "rent-income", accountNumber: "401", accountType: "income", name: "Rent Income", photo: "account-rent-income.png", desc: "Operating revenue earned when opposing players land on owned properties." },
        { id: "community-income", accountNumber: "402", accountType: "income", name: "Community Income", photo: "account-community-income.png", desc: "Service revenue generated from business transactions and community service tasks." },
        { id: "property-income", accountNumber: "403", accountType: "income", name: "Property Income", photo: "account-property-income.png", desc: "Gains or operating yields associated with real estate holdings." },
        { id: "rent-expense", accountNumber: "501", accountType: "expenses", name: "Rent Expense", photo: "account-rent-expense.png", desc: "Operating expense incurred when paying rent on opponent-owned properties." },
        { id: "community-expense", accountNumber: "502", accountType: "expenses", name: "Community Expense", photo: "account-community-expense.png", desc: "Operating costs and supplies purchased for community services (cost + PST)." }
    ],

    // Trial Balance Versions List for Slider Accordion
    trialBalancePages: [
        { title: "Pre-Closing Trial Balance", file: "trial-balance-pre.png", desc: "Lists all general ledger account balances prior to closing temporary revenue and expense accounts." },
        { title: "Post-Closing Trial Balance", file: "trial-balance-post.png", desc: "Confirms permanent asset, liability, and equity account equilibrium after closing entries are posted." }
    ],

    // Income Statement Image
    incomeStatement: {
        file: "income-statement.png",
        desc: "Summarizes business revenues and expenses over the Monopoly simulation period to determine net income/loss."
    },

    // Balance Sheet Image
    balanceSheet: {
        file: "balance-sheet.png",
        desc: "Reports the enterprise's assets, liabilities, and owner's equity at the conclusion of the board game accounting cycle."
    }



};