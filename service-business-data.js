const SERVICE_BUSINESS_DATA = {
    // Top-left corner label configuration for students
    topBadge: "Service Business",

    companyName: "Apex Professional Services",
    tagline: "Your Trusted Partner for Quality Solutions",
    ownerName: "Mr. Chen",
    contactInfo: {
        phone: "(604) 555-0199",
        email: "contact@apexservice.local",
        address: "Richmond, BC"
    },
    // Background image paths for the 3 business info slides
    bizPic1: "poster-bg.jpg",
    bizPic2: "services-bg.jpg",
    bizPic3: "reviews-bg.jpg",
    services: [
        { name: "Consulting & Strategy", description: "Tailored business guidance and operational assessments.", price: "$150/hr" },
        { name: "Design & Development", description: "Custom web and digital asset creation.", price: "$1,200 pkg" },
        { name: "Maintenance & Support", description: "Ongoing optimization and system troubleshooting.", price: "$80/hr" }
    ],
    reviews: [
        { quote: "Exceptional service! Completely streamlined our workflow.", author: "Sarah L., Local Business Owner" },
        { quote: "Professional, fast, and thorough. Highly recommended.", author: "David M., Operations Manager" }
    ],
    // Dynamic business forms array
    businessForms: [
        {
            title: "Sales Invoice",
            description: "Issued to customers for services rendered on account or cash.",
            image: "invoice-form.jpg",
            badge: "Standard Form"
        },
        {
            title: "Cheque",
            description: "Payment instrument issued to creditors and suppliers.",
            image: "cheque-form.jpg",
            badge: "Banking"
        },
        {
            title: "Cash Slip",
            description: "Internal receipt documenting direct cash transactions.",
            image: "cashslip-form.jpg",
            badge: "Internal Control"
        },
        {
            title: "Purchase Order",
            description: "Commercial document issued to authorize a purchase (Acc12 only).",
            image: "po-form.jpg",
            badge: "Acc12 Advanced"
        },
        {
            title: "Debit Memorandum",
            description: "Notification of debit adjustment to customer or vendor accounts (Acc12 only).",
            image: "debitmemo-form.jpg",
            badge: "Acc12 Advanced"
        }
    ],
    // Purchases & transactions array
    purchases: [
        {
            title: "Purchase #1: Office Supplies (GnuCash Record)",
            description: "Ledger entry documenting purchase of general stationery and printing stock.",
            image: "gnucash-purchase1.jpg",
            badge: "Purchase 1 • GnuCash"
        },
        {
            title: "Purchase #1: Cheque Issued",
            description: "Cheque #104 issued to Office Depot for supplies purchase.",
            image: "cheque-purchase1.jpg",
            badge: "Purchase 1 • Cheque"
        },
        {
            title: "Purchase #1: Supplier Invoice Received",
            description: "Original vendor invoice documenting itemized office supply costs.",
            image: "invoice-purchase1.jpg",
            badge: "Purchase 1 • Invoice"
        },
        {
            title: "Purchase #2: Equipment Maintenance (GnuCash Record)",
            description: "Ledger entry for hardware servicing and repair expenses.",
            image: "gnucash-purchase2.jpg",
            badge: "Purchase 2 • GnuCash"
        },
        {
            title: "Purchase #2: Cheque Issued",
            description: "Cheque #105 issued to TechCare Solutions for maintenance contract.",
            image: "cheque-purchase2.jpg",
            badge: "Purchase 2 • Cheque"
        },
        {
            title: "Purchase #2: Cash Slip / Receipt Received",
            description: "Direct cash slip documenting emergency hardware repair components.",
            image: "cashslip-purchase2.jpg",
            badge: "Purchase 2 • Cash Slip"
        }
    ],
    // Service / Product Sold transactions array
    sales: [
        {
            title: "Sale #1: Consulting Service (GnuCash Record)",
            description: "Ledger entry recording revenue generated from strategic business consulting session.",
            image: "gnucash-sale1.jpg",
            badge: "Sale 1 • GnuCash"
        },
        {
            title: "Sale #1: Cheque Received",
            description: "Customer payment cheque received for completed consulting services.",
            image: "cheque-sale1.jpg",
            badge: "Sale 1 • Cheque Received"
        },
        {
            title: "Sale #1: Sales Invoice Issued",
            description: "Official sales invoice issued to client for professional consulting hours.",
            image: "invoice-sale1.jpg",
            badge: "Sale 1 • Invoice Issued"
        },
        {
            title: "Sale #2: Web Development Package (GnuCash Record)",
            description: "Ledger entry recording revenue for custom digital asset design and build.",
            image: "gnucash-sale2.jpg",
            badge: "Sale 2 • GnuCash"
        },
        {
            title: "Sale #2: Cheque Received",
            description: "Client payment cheque received upon web development milestone completion.",
            image: "cheque-sale2.jpg",
            badge: "Sale 2 • Cheque Received"
        },
        {
            title: "Sale #2: Cash Slip / Receipt Issued",
            description: "Cash slip issued for direct over-the-counter add-on graphic design service.",
            image: "cashslip-sale2.jpg",
            badge: "Sale 2 • Cash Slip Issued"
        }
    ],
    // Remit Tax transactions array
    taxRemittance: [
        {
            title: "Filled GST Return Form",
            description: "Completed government Goods and Services Tax return document reporting collected tax versus input tax credits.",
            image: "gst-filled-form.jpg",
            badge: "Tax Remit • Filled GST Form"
        },
        {
            title: "GnuCash Record to Remit GST",
            description: "General ledger entry documenting the payment transaction clearing the liability account for collected GST.",
            image: "gnucash-remit-gst.jpg",
            badge: "Tax Remit • GnuCash GST"
        },
        {
            title: "GnuCash Record to Remit PST",
            description: "General ledger entry documenting the payment transaction clearing the provincial sales tax liability account.",
            image: "gnucash-remit-pst.jpg",
            badge: "Tax Remit • GnuCash PST"
        }
    ]
};