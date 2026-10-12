// ============================================================
// GreatLark — Site Content Data Layer
// All copy, stats, services, testimonials, approach steps
// Single source of truth — edit here, reflects everywhere
// ============================================================

export const siteConfig = {
  name: 'GreatLark',
  tagline: 'Wealth Deserves a Considered Approach',
  description:
    'GreatLark is a premium wealth management and financial advisory firm serving high-net-worth families across Delhi NCR. We provide personalised strategies to protect, diversify, and grow your wealth — for the long term.',
  url: 'https://www.greatlark.com',
  portfolioUrl: 'https://portfolio.greatlark.com/client-login',
  consultationUrl: '/contact',
  dematUrl: 'https://onboarding.nuvamawealth.com/Partner?utm_source=PARTNER&utm_campaign=7122744-AP&utm_content=ELITE',
  address: 'Delhi NCR, India',
  email: 'hello@greatlark.com',
  phone: '+91 11 XXXX XXXX',
  socials: {
    linkedin: 'https://www.linkedin.com/company/greatlark-finserve-llp',
    facebook: 'https://www.facebook.com/greatlarkfinservellp/',
    instagram: 'https://www.instagram.com/greatlarkfinservellp/',
  },
};

export const stats = [
  { value: 150, suffix: '+', label: 'Active Clients' },
  { value: 20, suffix: '+', label: 'Financial Partners' },
  { value: 150, suffix: 'Cr+', label: 'Assets Under Management', prefix: '₹' },
  { value: 5, suffix: '', label: 'Awards Won' },
];

export const services = [
  {
    id: 'personalized-wealth',
    number: '01',
    title: 'Personalized Wealth Management',
    body: 'Designed to help you navigate the stock market and unlock potential growth opportunities tailored to your unique financial goals.',
    href: '/services/personalized-wealth',
    imageSrc: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600&h=800',
    detail: {
      tagline: 'Your goals. Our expertise. A strategy that belongs only to you.',
      description: 'Wealth management is not a product — it is a relationship. We begin by understanding what you want your wealth to accomplish across your lifetime and beyond. From there, we construct a bespoke investment strategy across equities, fixed income, alternatives and real assets that reflects your risk appetite, time horizon, tax position, and aspirations. Every decision is made with your complete picture in mind.',
      highlights: [
        { label: 'Bespoke Strategy', text: 'No templates. Every plan is built from the ground up for your specific situation.' },
        { label: 'Equity Access', text: 'Curated exposure to high-conviction equity opportunities — PMS, direct stocks, and global funds.' },
        { label: 'Continuous Oversight', text: 'Quarterly reviews, proactive rebalancing, and year-round advisor access.' },
        { label: 'Tax Efficiency', text: 'Asset placement and harvesting strategies to minimise your tax drag over time.' },
      ],
    },
  },
  {
    id: 'family-governance',
    number: '02',
    title: 'Family Governance',
    body: 'A single, trusted point of oversight for complex family financial structures — from governance to generational wealth transfer.',
    href: '/services/family-governance',
    imageSrc: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600&h=800',
    detail: {
      tagline: 'Cohesion, clarity and continuity across generations.',
      description: 'Multi-generational wealth requires more than good investments — it demands governance. We help families establish structures that define how wealth is held, managed and transferred, reducing conflict and preserving intent. From family constitutions to investment policy statements and trustee advisory, we bring institutional discipline to family financial life.',
      highlights: [
        { label: 'Family Constitution', text: 'Documenting values, decision-making rules, and shared financial goals.' },
        { label: 'Succession Planning', text: 'Structured wealth transfer frameworks that minimise friction and tax.' },
        { label: 'Trust Advisory', text: 'Guidance on trust structuring for asset protection and estate efficiency.' },
        { label: 'Next Generation', text: 'Financial education programmes to prepare heirs for stewardship.' },
      ],
    },
  },
  {
    id: 'portfolio-management',
    number: '03',
    title: 'Portfolio Management',
    body: 'Our expert team customizes and optimizes your investment portfolio to achieve your financial goals with precision and discipline.',
    href: '/services/portfolio-management',
    imageSrc: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=600&h=800',
    detail: {
      tagline: 'Disciplined portfolio construction for enduring wealth.',
      description: 'We manage concentrated and diversified investment portfolios with the rigour of an institutional investment office. Our approach combines top-down macro analysis with bottom-up security selection, spanning domestic equities, international funds, AIFs, and fixed income. Risk is managed actively — not just at inception — to protect and grow capital across market cycles.',
      highlights: [
        { label: 'PMS & AIFs', text: 'Access to institutional-grade Portfolio Management Services and Alternative Funds.' },
        { label: 'Asset Allocation', text: 'Dynamic allocation frameworks calibrated to your risk-return objectives.' },
        { label: 'Drawdown Protection', text: 'Tactical overlays and hedging to limit downside in adverse markets.' },
        { label: 'Performance Reporting', text: 'Transparent attribution reporting so you understand every basis point.' },
      ],
    },
  },
  {
    id: 'ncd',
    number: '04',
    title: 'Non-Convertible Debentures',
    body: 'Providing a reliable option to grow your investments while mitigating market volatility with fixed-income security.',
    href: '/services/ncd',
    imageSrc: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600&h=800',
    detail: {
      tagline: 'Fixed-income certainty in an uncertain world.',
      description: 'Non-Convertible Debentures offer investors a predictable coupon income backed by corporate issuers — typically offering significantly higher yields than traditional fixed deposits. We curate access to high-quality NCD issuances, conducting credit due diligence so you can invest with confidence in the issuer\'s ability to service and repay.',
      highlights: [
        { label: 'Enhanced Yield', text: 'Typically 2–4% higher than comparable bank FD rates for qualified issuers.' },
        { label: 'Credit Screening', text: 'Our team evaluates creditworthiness, collateral coverage and promoter track record.' },
        { label: 'Liquidity Options', text: 'Listed NCDs offer secondary market liquidity if needed before maturity.' },
        { label: 'Regular Income', text: 'Monthly, quarterly or annual coupon options to match your cash flow needs.' },
      ],
    },
  },
  {
    id: 'secondary-debt',
    number: '05',
    title: 'Secondary Debt',
    body: 'Potentially generating attractive yields and diversifying your fixed-income portfolio with curated secondary market opportunities.',
    href: '/services/secondary-debt',
    imageSrc: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=600&h=800',
    detail: {
      tagline: 'Higher yield. Curated credit. Disciplined access.',
      description: 'The secondary debt market offers sophisticated investors an opportunity to acquire discounted debt instruments — loans, bonds, and structured credit — typically at yields unavailable in primary markets. We provide curated access to select secondary debt opportunities, with rigorous assessment of underlying collateral quality, borrower health, and recovery prospects.',
      highlights: [
        { label: 'Attractive Entry Points', text: 'Secondary pricing often implies superior yield-to-maturity vs. primary issuance.' },
        { label: 'Collateral Analysis', text: 'Deep dive into asset quality and security coverage for every opportunity.' },
        { label: 'Portfolio Diversification', text: 'Uncorrelated returns that complement equity-heavy portfolios.' },
        { label: 'Experienced Sourcing', text: 'Proprietary deal flow from our network of banks, NBFCs, and fund managers.' },
      ],
    },
  },
  {
    id: 'goi-bonds',
    number: '06',
    title: 'GOI Bonds',
    body: 'A risk-free avenue providing fixed returns and backing from the nation\'s sovereign guarantee for capital preservation.',
    href: '/services/goi-bonds',
    imageSrc: 'https://images.unsplash.com/photo-1604594849809-dfedbc827105?auto=format&fit=crop&q=80&w=600&h=800',
    detail: {
      tagline: 'The nation\'s promise. Your capital\'s foundation.',
      description: 'Government of India Bonds represent the safest sovereign-backed investment in the Indian market. Ranging from short-duration treasury bills to long-dated gilt securities and the popular Sovereign Gold Bond scheme, GOI bonds serve as the bedrock of a conservative capital preservation strategy — offering guaranteed returns and zero credit risk.',
      highlights: [
        { label: 'Zero Credit Risk', text: 'Backed by the full faith and credit of the Government of India.' },
        { label: 'Sovereign Gold Bonds', text: 'Gold exposure with 2.5% guaranteed interest — superior to physical gold.' },
        { label: 'Capital Gains Benefits', text: 'Certain GOI bonds offer indexation and exemptions for long-term investors.' },
        { label: 'Inflation-Linked Options', text: 'CPI-linked bonds that protect real purchasing power over time.' },
      ],
    },
  },
  {
    id: 'aif',
    number: '07',
    title: 'Alternative Investment Funds',
    body: 'Offering sophisticated investors diverse opportunities and potentially higher returns beyond traditional asset classes.',
    href: '/services/aif',
    imageSrc: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=600&h=800',
    detail: {
      tagline: 'Institutional-grade alternatives for discerning investors.',
      description: 'Alternative Investment Funds (AIFs) in India span three categories — venture and private equity (Cat I), hedge-style strategies (Cat II), and long-short or leveraged structures (Cat III). We help eligible investors access category-appropriate AIFs managed by India\'s leading fund houses, providing genuine portfolio diversification away from listed markets.',
      highlights: [
        { label: 'Cat II Credit Funds', text: 'Private credit strategies delivering 14–18% targeted IRR.' },
        { label: 'Cat III L/S Equity', text: 'Long-short strategies that aim for market-independent returns.' },
        { label: 'Real Asset AIFs', text: 'Infrastructure and real estate-backed fund structures.' },
        { label: 'Due Diligence', text: 'Our team evaluates fund manager track record, strategy, and fee structures.' },
      ],
    },
  },
  {
    id: 'corporate-fd',
    number: '08',
    title: "Corporate FD's",
    body: 'Offering attractive interest rates and a stable avenue to grow your company\'s surplus funds with capital safety.',
    href: '/services/corporate-fd',
    imageSrc: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600&h=800',
    detail: {
      tagline: 'Put surplus capital to work — safely and productively.',
      description: 'Corporate Fixed Deposits offer businesses and HNIs an opportunity to earn superior returns on surplus funds versus savings accounts or bank FDs. We curate access to reputable NBFC and corporate FD programs offering competitive rates, with tenures and payout structures aligned to your liquidity needs — all backed by our credit screening process.',
      highlights: [
        { label: 'Higher Rates', text: 'Typically 150–300 bps above comparable bank fixed deposit rates.' },
        { label: 'Flexible Tenures', text: 'Options from 12 months to 60 months with monthly or cumulative payouts.' },
        { label: 'Credit Vetted', text: 'We only work with CRISIL/ICRA rated issuers with demonstrated track records.' },
        { label: 'Corporate Treasury', text: 'Ideal for companies seeking to deploy surplus cash productively and safely.' },
      ],
    },
  },
  {
    id: 'insurance',
    number: '09',
    title: 'Insurance',
    body: 'Secure your future and protect your loved ones with our comprehensive Insurance solutions tailored to your life stage.',
    href: '/services/insurance',
    imageSrc: 'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?auto=format&fit=crop&q=80&w=600&h=800',
    detail: {
      tagline: 'Protection that lets you live — and plan — without fear.',
      description: 'Insurance is the foundation of any sound financial plan. In partnership with Ideal Insurance, one of India\'s leading insurance broking firms, we provide objective, unbiased insurance advisory covering life, health, critical illness and general insurance. We analyse your existing cover, identify gaps, and recommend products that genuinely serve your needs — not commission targets.',
      highlights: [
        { label: 'Life Cover', text: 'Term plans calibrated to your income replacement and liability coverage needs.' },
        { label: 'Health Insurance', text: 'Comprehensive family floater and super top-up plans from leading insurers.' },
        { label: 'Critical Illness', text: 'Lump-sum payouts for defined illnesses that protect your financial plan.' },
        { label: 'Business Insurance', text: 'Key-man insurance, group health, and professional indemnity solutions.' },
      ],
    },
  },
  {
    id: 'real-estate',
    number: '10',
    title: 'Real Estate',
    body: 'Build wealth through property ownership and capitalize on tangible assets across premium residential and commercial markets.',
    href: '/services/real-estate',
    imageSrc: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600&h=800',
    detail: {
      tagline: 'Tangible wealth in a world of uncertainty.',
      description: 'Real estate remains one of the most enduring wealth-building vehicles. We provide advisory across residential and commercial property acquisition, REITs, and real estate-backed structured products. Our network across Delhi NCR\'s premium residential and commercial corridors gives clients access to curated off-market opportunities, pre-launch pricing, and developer relationships.',
      highlights: [
        { label: 'Residential Advisory', text: 'Curated premium residential opportunities in Delhi NCR and beyond.' },
        { label: 'Commercial Property', text: 'Office and retail assets offering 8–10% rental yields with capital appreciation.' },
        { label: 'REIT Access', text: 'Listed Real Estate Investment Trusts for liquid, institutional-grade real estate exposure.' },
        { label: 'Structured Products', text: 'Real estate-backed debt structures offering predictable 12–15% returns.' },
      ],
    },
  },
  {
    id: 'gold-silver',
    number: '11',
    title: 'Gold / Silver',
    body: 'Diversify your portfolio with precious metals\' stability and potential for long-term growth as a hedge against inflation.',
    href: '/services/gold-silver',
    imageSrc: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&q=80&w=600&h=800',
    detail: {
      tagline: 'Ancient wisdom. Modern access. Enduring value.',
      description: 'Precious metals have preserved wealth across civilisations and market cycles. We provide access to gold and silver across multiple formats — Sovereign Gold Bonds, Gold ETFs, digital gold, and physical storage — helping you choose the optimal form for your tax situation, liquidity needs, and investment horizon. A 10–15% allocation to precious metals meaningfully reduces portfolio volatility.',
      highlights: [
        { label: 'Sovereign Gold Bonds', text: 'Government-issued, interest-bearing gold bonds — the most tax-efficient gold format.' },
        { label: 'Gold & Silver ETFs', text: 'Exchange-traded precious metal funds offering daily liquidity.' },
        { label: 'Digital Gold', text: 'Fractional gold ownership with 24/7 liquidity through regulated platforms.' },
        { label: 'Inflation Hedge', text: 'Precious metals correlate negatively with equities in stress periods.' },
      ],
    },
  },
  {
    id: 'stockbroking',
    number: '12',
    title: 'Stockbroking',
    body: 'Seamless access to global markets and expert guidance to maximize your investment opportunities with confidence.',
    href: '/services/stockbroking',
    imageSrc: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=600&h=800',
    detail: {
      tagline: 'Markets made accessible. Execution made precise.',
      description: 'Our stockbroking service provides clients with seamless, low-friction access to Indian equity markets — both cash and derivatives — as well as curated international equity exposure through LRS-compliant platforms. Backed by our research capabilities and advisor guidance, clients can execute with conviction while managing risk through disciplined position sizing and stop-loss discipline.',
      highlights: [
        { label: 'Direct Equity', text: 'Advisor-guided stock selection with fundamental and technical analysis support.' },
        { label: 'F&O Strategies', text: 'Options overlay strategies for income generation and hedging.' },
        { label: 'International Equities', text: 'LRS-compliant access to US and global equity markets.' },
        { label: 'Research Coverage', text: 'In-house equity research and third-party analyst reports for informed decisions.' },
      ],
    },
  },
];


export const approachSteps = [
  {
    number: '01',
    title: 'Discovery',
    body: 'We begin by listening. A deep conversation about your life, goals, values and financial situation — not just your portfolio.',
  },
  {
    number: '02',
    title: 'Wealth Architecture',
    body: 'We design a comprehensive wealth structure across asset classes, tax strategy and risk management, tailored precisely to you.',
  },
  {
    number: '03',
    title: 'Execution',
    body: 'With a clear plan in place, we execute with precision — accessing institutional-quality investment opportunities on your behalf.',
  },
  {
    number: '04',
    title: 'Ongoing Advisory',
    body: 'Wealth management is not a one-time event. We review, rebalance and adapt your strategy as your life and markets evolve.',
  },
];

export const testimonials = [
  {
    id: 'aarav',
    quote:
      'GreatLark helped me see finance not just as a subject, but as a way to think. The structured learning, supportive community, and real-world exposure made all the difference.',
    name: 'Aarav Mehta',
    role: 'B.Com Student, Delhi University',
    imageSrc: '/testimonial-aarav.jpg',
    imageAlt: 'Aarav Mehta',
  },
  {
    id: 'priya',
    quote:
      'Before GreatLark, investing felt intimidating. After just a few months, I built my first SIP portfolio and finally understood how markets actually work. It changed how I think about money.',
    name: 'Priya Sharma',
    role: 'MBA Student, IIM Lucknow',
    imageSrc: '/testimonial-priya.jpg',
    imageAlt: 'Priya Sharma',
  },
  {
    id: 'kapil',
    quote:
      'The research sessions are unlike anything I have experienced. You do not just learn theory — you analyse live stocks, study real balance sheets, and leave with genuine conviction.',
    name: 'Kapil Khannah',
    role: 'Proprietor, Place Studio',
    imageSrc: 'https://cdn.prod.website-files.com/64bfb177368e3149d602e512/64d45f55551e901c69c8b3a5_Kapil.png',
    imageAlt: 'Kapil Khannah',
  },
  {
    id: 'mehak',
    quote:
      'I joined GreatLark to understand markets, but what I gained was a whole new lens for decision-making. The mentors are exceptional — they challenge you and believe in your potential.',
    name: 'Mehak Gupta',
    role: 'Contract Lawyer, Infosys',
    imageSrc: 'https://cdn.prod.website-files.com/64bfb177368e3149d602e512/64d37bd55e99e6ed02b52fd9_MehakNew.webp',
    imageAlt: 'Mehak Gupta',
  },
];

export const partners = [
  { name: 'HDFC Bank', logo: 'https://cdn.prod.website-files.com/64bfb177368e3149d602e512/64d370351bcc386d382b5088_image%2055.webp' },
  { name: 'Tata AIA Life Insurance', logo: 'https://cdn.prod.website-files.com/64bfb177368e3149d602e512/64d3708ae30b767e2a8e27ce_tata.webp' },
  { name: 'ICICI Bank', logo: 'https://cdn.prod.website-files.com/64bfb177368e3149d602e512/64d3703572ac700243a7eb11_image%2056-1.webp' },
  { name: 'Ideal Insurance', logo: 'https://cdn.prod.website-files.com/64bfb177368e3149d602e512/64d37034824cd458a517d015_image%2056.webp' },
];

export const navLinks = [
  { label: 'About', href: '/#about' },
  {
    label: 'Wealth',
    href: '#',
    dropdown: [
      { label: 'Private Wealth Management', href: '/wealth/private-wealth-management' },
      { label: 'Multi-Family Office', href: '/wealth/multi-family-office' },
      { label: 'Real Estate Investment', href: '/wealth/real-estate-investment' },
      { label: 'Estate Planning', href: '/wealth/estate-planning' },
      { label: 'Tax Planning', href: '/wealth/tax-planning' },
      { label: 'Protection & Risk', href: '/wealth/protection-risk-management' },
    ],
  },
  { label: 'Our Approach', href: '/#approach' },
  { label: 'Insights', href: '/insights' },
];

export const footerLinks = {
  company: [
    { label: 'About GreatLark', href: '/#about' },
    { label: 'Our Approach', href: '/#approach' },
    { label: 'Insights', href: '/insights' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'Private Wealth', href: '/wealth/private-wealth-management' },
    { label: 'Multi-Family Office', href: '/wealth/multi-family-office' },
    { label: 'Real Estate', href: '/wealth/real-estate-investment' },
    { label: 'Estate Planning', href: '/wealth/estate-planning' },
    { label: 'Tax Planning', href: '/wealth/tax-planning' },
    { label: 'Protection & Risk', href: '/wealth/protection-risk-management' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Disclaimer', href: '/disclaimer' },
  ],
};

export const articles = [
  {
    id: 'market-trends',
    category: 'Markets',
    title: 'What the latest market trends mean for you.',
    body: 'A simple breakdown of key market movements and what they indicate for long-term investors.',
    href: '/insights/market-trends',
    image: '/insight-markets.jpg',
    alt: 'Bombay Stock Exchange building',
    content: `The global market landscape has been shifting rapidly, driven by changing macroeconomic conditions and evolving monetary policies. For long-term investors, the noise can often be overwhelming, making it difficult to distinguish between temporary volatility and structural changes.

Understanding Market Cycles
Market cycles are inevitable. While corrections can be unsettling, they also create opportunities for disciplined investors to acquire quality assets at compelling valuations. The key is to maintain perspective and avoid emotional decision-making.

Strategic Asset Allocation
In the current environment, a robust asset allocation strategy is more important than ever. Diversification across equities, fixed income, and alternative investments provides a cushion against sector-specific shocks and ensures that your portfolio is positioned to capture growth across different market conditions.

Looking Ahead
We continue to see pockets of opportunity in sectors with strong pricing power and resilient balance sheets. By focusing on fundamental quality and maintaining a long-term horizon, investors can navigate these trends successfully.`,
    date: 'September 24, 2026',
    author: 'Investment Team'
  },
  {
    id: 'research-mindset',
    category: 'Learning',
    title: 'How to build a research mindset.',
    body: 'Practical ways to think clearly, ask better questions, and find stronger opportunities.',
    href: '/insights/research-mindset',
    image: '/insight-learning.jpg',
    alt: 'Student studying finance',
    content: `Building a research mindset is not just for professional analysts; it's a critical skill for anyone looking to make informed decisions in life and finance. It involves cultivating curiosity, demanding evidence, and remaining open to changing your mind when presented with new data.

Asking the Right Questions
The quality of your answers is directly proportional to the quality of your questions. Instead of asking "Is this a good investment?", a research mindset prompts you to ask "What are the structural tailwinds supporting this business, and what is the market currently mispricing?"

First Principles Thinking
Break down complex problems into their fundamental truths. This approach helps you cut through the noise and avoid the trap of relying solely on analogies or popular opinions. In finance, this means understanding the underlying cash flows and unit economics of a business before looking at its stock price.

Continuous Learning
The landscape is constantly evolving. A true research mindset embraces continuous learning, reading widely, and seeking out diverse perspectives. It's about being comfortable with uncertainty and recognizing that there is always more to learn.`,
    date: 'September 18, 2026',
    author: 'Research Team'
  },
  {
    id: 'finance-skills',
    category: 'Careers',
    title: 'The skills that matter in modern finance.',
    body: 'From analytical thinking to communication, here\'s what really makes a difference.',
    href: '/insights/finance-skills',
    image: '/insight-careers.jpg',
    alt: 'Finance professionals in discussion',
    content: `The finance industry has transformed dramatically over the past decade. While quantitative skills remain essential, the modern financial landscape demands a more holistic skill set. Success today requires a blend of technical expertise, emotional intelligence, and adaptability.

Analytical Rigor
The ability to analyze complex data sets, build robust financial models, and draw actionable insights is foundational. However, analytical rigor is not just about crunching numbers; it's about understanding the narrative behind the data and identifying the key drivers of value.

Communication and Empathy
Finance is ultimately a people business. The best technical analysis is useless if it cannot be communicated effectively to clients, stakeholders, or team members. Empathy allows you to understand the unique goals and concerns of your clients, enabling you to build lasting relationships built on trust.

Adaptability in a Digital World
Technological advancements are reshaping the industry. A willingness to embrace new tools, understand the implications of artificial intelligence, and continuously upskill is crucial for long-term career growth in modern finance.`,
    date: 'September 12, 2026',
    author: 'Careers Team'
  },
];
