export interface FocusArea {
  number: string;
  title: string;
  tagline: string;
  initiatives: string[];
}

export interface Pillar {
  id: string;
  name: string;
  pillarNumber: string;
  shortDesc: string;
  mission: string;
  vision: string;
  accentColor: string;
  badgeBg: string;
  focusAreas: FocusArea[];
}

export interface Leader {
  name: string;
  role: string;
  subtitle: string;
  bio: string[];
  credentials: string[];
}

export interface District {
  name: string;
  zone: string;
  focus: string;
  description: string;
  keyWork: string;
}

export const FOUNDATION_META = {
  name: "Dinabandhu Foundation",
  fullName: "Dinabandhu Foundation for Educational Research and Socio Economic Development",
  established: 1999,
  headquarters: "Bhubaneswar, Odisha, India",
  tagline: "Nurturing Healthy Communities, Resilient Ecosystems & Skilled Lives",
  subTagline: "Founded by Mrs. Shovana Devi in memory of (Late) Sri Dinabandhu Panigrahi to bridge world-standard education with grassroots socio-economic empowerment across Health, Environment, and Skill Development.",
  email: "info@dinbandhufoundation.org",
  phone: "+91 674 274 0812",
  hours: "Monday – Saturday | 10:00 AM – 6:00 PM IST",
  address: "Bhubaneswar, Odisha, India",
  certifications: [
    { title: "Registered Trust (1999)", desc: "Indian Trust Act 1882 • Bhubaneswar Registration" },
    { title: "12AA Certified", desc: "Indian Income Tax Act 1961 Tax-Exempt Status" },
    { title: "80G Certified", desc: "50% Tax Deduction on Corporate & Individual Donations" },
    { title: "CSR Apex Integrator", desc: "Transparent, Audited Grassroots Fund Implementation" },
    { title: "27+ Years of Legacy", desc: "Empowering Education, Health, Environment & Youth" }
  ],
  stats: [
    { value: "27+", label: "Years of Legacy", detail: "Since 1999 in Bhubaneswar" },
    { value: "10", label: "Odisha Districts", detail: "Active grassroots presence" },
    { value: "200+", label: "Villages Reached", detail: "Across rural & coastal belts" },
    { value: "10,000+", label: "Lives Impacted", detail: "Community members uplifted" },
    { value: "2,000+", label: "Youth Trained in Green Skills", detail: "Clean energy, waste & eco-livelihoods" },
    { value: "10,000+", label: "Graduates Produced", detail: "Via Trident Technical Education" }
  ]
};

export const FOUNDER_HERITAGE = {
  founder: "Mrs. Shovana Devi",
  tributeTo: "(Late) Sri Dinabandhu Panigrahi",
  lifespan: "1917–1997",
  story: "Dinabandhu Foundation was conceptualised and founded by Mrs. Shovana Devi in the memory of her late husband Mr. Dinabandhu Panigrahi in 1999. Mr. Panigrahi came from an extremely humble background in the district of Bhadrak in coastal Odisha, India. He was extremely passionate about getting educated to the highest level, although he had lost his parents in early childhood. His determination eventually enabled him to acquire a Master’s Degree in Education from Patna University and then another Master’s Degree in Education from the University of Leeds in the United Kingdom as a Commonwealth Scholar in 1946. He spent his career in educational administration, championing primary, secondary, and adult education, and establishing a benchmark school in his native village.",
  coreValues: [
    { title: "Educational Excellence", desc: "Delivering world-standard education that equips youth with knowledge and analytical capabilities." },
    { title: "Grassroots Empathy", desc: "Extending social welfare and preventive interventions to the most marginalized rural communities." },
    { title: "Absolute Transparency", desc: "Functioning as an accountable apex body for corporate CSR deployment with rigorous monitoring." },
    { title: "Sustainable Stewardship", desc: "Protecting Odisha's vulnerable coastal ecology through community-led green actions." }
  ]
};

export const LEADERSHIP: Leader[] = [
  {
    name: "Dr. B. B. Panigrahi, IRS (Retd.)",
    role: "Chief Mentor, Trident Group of Institutions",
    subtitle: "Chief Executive Officer, Dinabandhu Foundation (Indevin & SkillEM)",
    bio: [
      "The management of the foundation is presently led by Dr. B. B. Panigrahi, a retired senior bureaucrat of the Government of India with a distinguished career of 35 years in the Indian Revenue Service (IRS).",
      "A visionary philanthropist and successful strategist, Dr. Panigrahi has always been a pillar of support to the foundation on a pro-bono basis. Following his retirement, he has been directly leading the foundation's strategic initiatives.",
      "His vision has enabled nearly 10,000 technical and professional students to obtain university degrees in Engineering, Management, Biotechnology, and Computer Applications over the last 20 years, while driving the foundation's skill development and sustainable social intervention programs."
    ],
    credentials: [
      "Postgraduate Degree in Solid State Physics",
      "Graduate Degree in Law (LL.B.)",
      "Ph.D. in Business Administration",
      "35 Years Indian Revenue Service (IRS)"
    ]
  },
  {
    name: "Smt. Smitarani Panigrahi",
    role: "Chairperson, Trident Group of Institutions",
    subtitle: "Managing Trustee, Dinabandhu Foundation",
    bio: [
      "Mrs. Smitarani Panigrahi is one of the founding trustees of the foundation and has been leading its activities as Chairperson since its inception. She is a noted social activist directly responsible for building educational institutions under the Trident Group through an innovative self-financing model.",
      "She played a seminal role in conceptualising and establishing 'Indevin', the foundation's vertical for social re-engineering and innovative CSR implementation.",
      "She also serves as Director of M/s Trident Softech Private Limited, Director of Spatial Planning and Analysis Research Center (SPARC) Private Limited, and Managing Partner of EPC firm Inland Engineers."
    ],
    credentials: [
      "Postgraduate Degree in Life Sciences",
      "Pioneer in Biotechnology Education in Odisha",
      "Director, SPARC & Trident Softech",
      "Managing Partner, Inland Engineers"
    ]
  }
];

export const VERTICALS = [
  {
    name: "Trident Academy of Technology",
    category: "Higher & Technical Education",
    tagline: "Flagship College Under the Trust",
    description: "Offering premium undergraduate and postgraduate degrees in Engineering, Biotechnology, Computer Applications, and Management. Has graduated over 10,000 professionals driving innovation across global industries.",
    highlights: ["AICTE Approved & BPUT Affiliated", "Bio-technology & CSE Leadership", "10,000+ Alumni Network", "High-Tech Research Labs"]
  },
  {
    name: "SkillEM",
    category: "Skill Development & Livelihoods",
    tagline: "Empowering Rural & Urban Youth",
    description: "The dedicated vocational training vertical implementing flagship Central and State government schemes such as DDU-GKY and PMKVY. Connects youth with certified trades and sustainable employment linkages.",
    highlights: ["DDU-GKY Implementation", "PMKVY Certification", "Green Skills Training", "Industry Job Placements"]
  },
  {
    name: "Indevin",
    category: "Grassroots CSR Apex Body",
    tagline: "Social Re-engineering & Grassroots Welfare",
    description: "The grassroots welfare brand of Dinabandhu Foundation advancing primary & English education, public health, women empowerment, environmental stewardship, and community resilience.",
    highlights: ["CSR Fund Apex Integrator", "12AA & 80G Certified", "200+ Villages Network", "Impact Audits & Evidence"]
  }
];

export const PILLARS: Pillar[] = [
  {
    id: "health",
    name: "Public Health & Nutrition",
    pillarNumber: "01",
    shortDesc: "Delivering last-mile preventive medical awareness, mobile health & diagnostic screening camps, maternal & child nutrition drives, and community sanitation outreach.",
    mission: "To empower individuals and communities with practical health knowledge and preventive-care awareness for healthier and safer lives.",
    vision: "A society where everyone has access to reliable health information, preventive care, nutritious food, safe sanitation, and quality health support.",
    accentColor: "blue",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
    focusAreas: [
      {
        number: "01",
        title: "Community Health Awareness",
        tagline: "Promoting health literacy and encouraging early healthcare awareness through grassroots initiatives.",
        initiatives: ["Community health awareness programmes", "Free health check-up camps", "Health education campaigns", "Disease prevention awareness"]
      },
      {
        number: "02",
        title: "Preventive Healthcare",
        tagline: "Encouraging early detection and prevention of common diseases through screening and education.",
        initiatives: ["Health screening programmes", "Vaccination awareness drives", "Diabetes and blood pressure screening", "Healthy lifestyle education"]
      },
      {
        number: "03",
        title: "Nutrition & Food Security",
        tagline: "Promoting balanced nutrition, healthy eating habits, and household food security.",
        initiatives: ["Nutrition awareness programmes", "Maternal and child nutrition education", "Kitchen garden promotion", "Food safety & hygiene awareness"]
      },
      {
        number: "04",
        title: "Sanitation & Hygiene",
        tagline: "Encouraging safe hygiene practices, clean surroundings, and access to safe drinking water.",
        initiatives: ["Handwashing & personal hygiene drives", "Safe drinking-water education", "Community cleanliness & Swachhta drives", "Menstrual hygiene awareness & kits"]
      },
      {
        number: "05",
        title: "Maternal & Child Health",
        tagline: "Supporting maternal well-being and healthy child development through community education.",
        initiatives: ["Maternal health & prenatal care awareness", "Breastfeeding education", "Child nutrition & growth monitoring", "Immunization tracking awareness"]
      },
      {
        number: "06",
        title: "Mental Health Awareness",
        tagline: "Promoting emotional well-being, reducing social stigma, and encouraging access to support.",
        initiatives: ["Mental health awareness sessions", "Stress management education for youth", "Emotional well-being programmes", "Professional support and referral guidance"]
      },
      {
        number: "07",
        title: "Rural Health Outreach",
        tagline: "Extending health awareness and preventive education to remote and tribal communities.",
        initiatives: ["Village mobile health camps", "Community outreach vans", "Door-to-door health education", "Referral linkages with district hospitals"]
      },
      {
        number: "08",
        title: "Public Health Education",
        tagline: "Building community preparedness and awareness around endemic and seasonal health challenges.",
        initiatives: ["Communicable disease awareness (Malaria, Dengue)", "First-aid & emergency response education", "Seasonal disease prevention campaigns", "Public health awareness drives"]
      }
    ]
  },
  {
    id: "environment",
    name: "Environment & Climate Action",
    pillarNumber: "02",
    shortDesc: "Safeguarding local biodiversity through community-led native tree plantation, watershed & soil conservation, and climate-resilient natural resource stewardship.",
    mission: "To inspire and enable communities to protect natural resources, reduce waste, conserve water, restore green spaces, and adopt sustainable practices for a healthier planet.",
    vision: "A future where communities live in harmony with nature—where clean air, safe water, healthy soil, thriving biodiversity, and climate resilience are protected for present and future generations.",
    accentColor: "emerald",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
    focusAreas: [
      {
        number: "01",
        title: "Environmental Conservation",
        tagline: "Protecting forests, soil, wetlands, and shared community green spaces.",
        initiatives: ["Clean-up drives in parks, lakes, rivers, beaches & schools", "Protection of local forests, wetlands & village ponds", "Single-use plastic reduction & responsible consumption", "Degraded area restoration via native planting"]
      },
      {
        number: "02",
        title: "Climate Change Awareness",
        tagline: "Understanding coastal climate risks—cyclones, heatwaves, floods—and building local resilience.",
        initiatives: ["Climate-awareness workshops in schools & communities", "Energy-efficient appliances & LED lighting campaigns", "Low-carbon lifestyle, transport & composting promotion", "Local climate-resilience preparedness guidance"]
      },
      {
        number: "03",
        title: "Tree Plantation Initiatives",
        tagline: "Increasing green cover with native, climate-appropriate species and sustained nurturing.",
        initiatives: ["Tree-plantation drives with schools, residents & panchayats", "Community sapling nurseries & sapling distribution", "Tree-care workshops on watering, mulching & protection", "Adopt-a-tree geo-mapping & survival rate monitoring"]
      },
      {
        number: "04",
        title: "Waste Management & Recycling",
        tagline: "Reducing landfill pressure through source segregation, composting, and circular habits.",
        initiatives: ["Wet, dry, hazardous & e-waste segregation workshops", "Home & community composting hubs", "Plastic-reduction, reuse, repair & upcycling campaigns", "Responsible e-waste collection drives with recyclers"]
      },
      {
        number: "05",
        title: "Water Conservation",
        tagline: "Protecting freshwater sources and strengthening community resilience to water scarcity.",
        initiatives: ["Rooftop rainwater harvesting & groundwater recharge", "Rejuvenation & cleaning of local ponds, lakes & wells", "Household water audits & leaking tap/pipe repair", "Drip irrigation, mulching & water-saving education"]
      },
      {
        number: "06",
        title: "Biodiversity Protection",
        tagline: "Safeguarding native plants, pollinators, birds, and coastal ecological habitats.",
        initiatives: ["Butterfly & pollinator gardens in schools & communities", "Indigenous & native-species planting drives", "Biodiversity walks, bird-watching & citizen science", "Pesticide-free wetland & grassland protection"]
      },
      {
        number: "07",
        title: "Sustainable Agriculture Awareness",
        tagline: "Supporting climate-resilient, soil-friendly farming and local food security.",
        initiatives: ["Farmer workshops on bio-composting & crop rotation", "Integrated pest management & native seed preservation", "Agroforestry, kitchen gardens & efficient irrigation", "Connecting farmers with agricultural scientists & schemes"]
      },
      {
        number: "08",
        title: "Community-Based Initiatives",
        tagline: "Building lasting local ownership and eco-leadership beyond one-time campaigns.",
        initiatives: ["Eco-clubs in schools, colleges, offices & neighborhoods", "Green volunteer & environmental ambassador networks", "Panchayat level eco-action committees", "Youth environmental leadership fellowships"]
      }
    ]
  },
  {
    id: "skills",
    name: "Skill Development & Livelihoods",
    pillarNumber: "03",
    shortDesc: "Empowering rural and urban youth and women with government-aligned DDU-GKY & PMKVY vocational training, job linkages, and micro-enterprise self-employment.",
    mission: "To equip individuals with practical skills, digital knowledge, entrepreneurial capability, and career guidance so they can access dignified work, build sustainable livelihoods, and improve their quality of life.",
    vision: "A society where every person has the opportunity to learn, earn, grow, and contribute—regardless of gender, background, location, or economic circumstance.",
    accentColor: "amber",
    badgeBg: "bg-amber-50 text-amber-800 border-amber-200",
    focusAreas: [
      {
        number: "01",
        title: "Vocational & Technical Training",
        tagline: "Hands-on, demand-driven trade courses with certification and apprenticeship pathways.",
        initiatives: ["Tailoring, embroidery, fashion & boutique management", "Mobile repair, electronics, electrical, plumbing & carpentry", "Mushroom cultivation, nursery, poultry & food processing", "Handicrafts, retail sales, healthcare support & solar skills"]
      },
      {
        number: "02",
        title: "Digital Literacy",
        tagline: "Safe, confident use of computers, smartphones, and online tools for work and business.",
        initiatives: ["Basic computer, smartphone, email & office productivity", "Digital payments, online forms & cyber-safety awareness", "Social-media promotion, graphic design & online selling", "Job portals, freelancing readiness & AI productivity tools"]
      },
      {
        number: "03",
        title: "Entrepreneurship Development",
        tagline: "Guiding aspiring founders from business ideation to sustainable enterprise management.",
        initiatives: ["Business planning, costing, pricing & basic accounting", "Marketing, branding, packaging & digital promotion", "Linkages to banks, SHGs, microfinance & govt schemes (PMEGP)", "Market fairs, buyer-seller meets & follow-up mentoring"]
      },
      {
        number: "04",
        title: "Youth Skill Enhancement",
        tagline: "Bridging the gap between formal education and modern industry employment requirements.",
        initiatives: ["Communication, confidence, teamwork & problem-solving", "Resume writing, interview prep & workplace etiquette", "Internships, apprenticeships, industry visits & job fairs", "Digital & green-economy career counseling"]
      },
      {
        number: "05",
        title: "Women Empowerment Through Skills",
        tagline: "Strengthening women's economic independence, confidence, and community leadership.",
        initiatives: ["Flexible, local-language vocational & digital training", "Self-Help Group (SHG) & home-based enterprise support", "Financial literacy, savings, budgeting & digital payments", "Market exhibitions & successful women-mentor networks"]
      },
      {
        number: "06",
        title: "Self-Employment Awareness",
        tagline: "Helping individuals launch realistic, low-investment local micro-enterprises.",
        initiatives: ["Local demand assessments & low-investment business ideas", "Business registration, licensing, tax & compliance basics", "Catering, tailoring, retail, repair & agri-value ventures", "Product quality, packaging & customer-service coaching"]
      },
      {
        number: "07",
        title: "Career Guidance & Employability",
        tagline: "Helping job seekers make informed career choices and succeed in modern workplaces.",
        initiatives: ["One-to-one career counseling & aptitude identification", "Guidance on courses, scholarships & apprenticeships", "LinkedIn profiles, cover letters & mock interviews", "Employer placement connections & post-placement mentoring"]
      },
      {
        number: "08",
        title: "Livelihood Development",
        tagline: "Creating long-term, diversified income pathways through skill-to-market ecosystems.",
        initiatives: ["Household & community livelihood resource assessments", "Producer collectives, SHGs & cooperative enterprises", "Value addition in agriculture, handicrafts, food & textiles", "Green livelihoods (nurseries, composting, waste & solar repair)"]
      }
    ]
  }
];

export const ODISHA_DISTRICTS: District[] = [
  {
    name: "Bhadrak",
    zone: "Coastal Odisha",
    focus: "Heritage, Skill Development & Youth Livelihoods",
    description: "Ancestral birthplace of Founder Sri Dinabandhu Panigrahi. Active center for vocational skilling and educational outreach.",
    keyWork: "Vocational tailoring & computer training, community education camps, school eco-clubs."
  },
  {
    name: "Khordha",
    zone: "Central / Capital Zone",
    focus: "Apex Headquarters & Technical Education",
    description: "Bhubaneswar administrative base and location of flagship technical institutions including Trident Academy of Technology.",
    keyWork: "Engineering & biotech education, state-level CSR coordination, urban waste workshops."
  },
  {
    name: "Puri",
    zone: "Coastal Odisha",
    focus: "Coastal Ecology & Women SHGs",
    description: "Vulnerable coastal belt targeted for disaster preparedness, mangrove/tree plantation, and women micro-enterprise training.",
    keyWork: "Coastal greening, disaster resilience camps, SHG handicraft marketing."
  },
  {
    name: "Ganjam",
    zone: "Southern Coastal Odisha",
    focus: "Public Health & Safe Water Initiatives",
    description: "High migration rural zones receiving preventive health screenings, water sanitization, and livelihood skill training.",
    keyWork: "Water quality testing, preventive diabetes/BP screening, youth vocational placement."
  },
  {
    name: "Balasore",
    zone: "Northern Coastal Odisha",
    focus: "Green Skills & Agriculture Value Addition",
    description: "Agro-coastal community engagement with sustainable farming, solar technician training, and digital literacy.",
    keyWork: "Green skill certification, organic composting, youth job readiness."
  },
  {
    name: "Kendrapara",
    zone: "Coastal Wetlands",
    focus: "Mangrove & Wetland Conservation",
    description: "Ecologically sensitive river delta region focusing on climate adaptation and sustainable artisan livelihoods.",
    keyWork: "Biodiversity protection, clean drinking water drives, women tailoring SHGs."
  },
  {
    name: "Jagatsinghpur",
    zone: "Coastal Industrial Belt",
    focus: "Industrial Trades & Healthcare Outreach",
    description: "Coastal port district with focus on technical trades, industrial safety skills, and maternal nutrition camps.",
    keyWork: "Preventive health vans, youth electrical & welding skilling, tree plantation."
  },
  {
    name: "Jajpur",
    zone: "Mineral / Industrial Zone",
    focus: "Community Sanitation & Youth Employability",
    description: "Grassroots interventions addressing community sanitation, occupational health awareness, and youth placement.",
    keyWork: "Sanitation drives, free health screening camps, PMKVY trade courses."
  },
  {
    name: "Koraput",
    zone: "Southern Tribal Highlands",
    focus: "Tribal Livelihoods & Natural Resource Stewardship",
    description: "Highland indigenous communities supported through forest product value addition, agroforestry, and primary health education.",
    keyWork: "Agroforestry promotion, kitchen gardens, tribal youth vocational linkages."
  },
  {
    name: "Nuapada",
    zone: "Western Drylands",
    focus: "Water Harvesting & Drought Resilience",
    description: "Semi-arid western belt receiving dedicated water conservation, watershed protection, and digital self-employment coaching.",
    keyWork: "Rainwater harvesting structures, drought-resilient farming workshops, mobile literacy."
  }
];

export const UN_SDGS = [
  {
    sdg: "SDG 1",
    title: "No Poverty",
    description: "Giving young people market-linked technical and vocational skills that lead to steady, dignified income.",
    color: "#E5243B"
  },
  {
    sdg: "SDG 3",
    title: "Good Health & Well-being",
    description: "Extending preventive screening, maternal-child nutrition, safe drinking water, and hygiene education to rural families.",
    color: "#4C9F38"
  },
  {
    sdg: "SDG 10",
    title: "Reduced Inequalities",
    description: "Ensuring rural women, tribal youth, and underprivileged segments get equal access to world-standard opportunities.",
    color: "#DD1367"
  },
  {
    sdg: "SDG 13",
    title: "Climate Action",
    description: "Training youth in green skills, driving native afforestation, conserving water, and building coastal resilience.",
    color: "#3F7E44"
  }
];
