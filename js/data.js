/* ═══════════════════════════════════════════════════════
   DOST CARAGA — Shared Data & Utilities
   ═══════════════════════════════════════════════════════ */

// ── NAVIGATION ACTIVE STATE ──
document.addEventListener('DOMContentLoaded', () => {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === current) a.classList.add('active');
  });
});

// ── CHART.JS GLOBAL DEFAULTS ──
if (typeof Chart !== 'undefined') {
  Chart.defaults.font.family = "'Manrope', system-ui, sans-serif";
  Chart.defaults.color = '#64748b';
  Chart.defaults.plugins.legend.labels.boxWidth = 12;
  Chart.defaults.plugins.legend.labels.padding = 14;
  Chart.defaults.plugins.tooltip.backgroundColor = '#0b1e3d';
  Chart.defaults.plugins.tooltip.titleColor = '#d4a017';
  Chart.defaults.plugins.tooltip.bodyColor = 'rgba(255,255,255,0.8)';
  Chart.defaults.plugins.tooltip.borderColor = '#1a3360';
  Chart.defaults.plugins.tooltip.borderWidth = 1;
  Chart.defaults.plugins.tooltip.padding = 12;
  Chart.defaults.plugins.tooltip.cornerRadius = 6;
  Chart.defaults.scale.grid.color = 'rgba(226,232,240,0.8)';
  Chart.defaults.scale.ticks.color = '#94a3b8';
  Chart.defaults.scale.ticks.font = { size: 11 };
}

// ── REFERENCE LOOKUPS ──
const PBBM_LABELS = {
  "PBBM-01": "Protect purchasing power of families",
  "PBBM-02": "Reduce vulnerability from the COVID-19 pandemic",
  "PBBM-03": "Ensure sound macroeconomy and accelerate economic recovery",
  "PBBM-04": "Create more jobs through digitalization and infrastructure development",
  "PBBM-05": "Invest in education, upskilling, and innovation",
  "PBBM-06": "Improve healthcare system",
  "PBBM-07": "Promote climate resilience and sustainable development",
  "PBBM-08": "Ensure food security and modernize agriculture"
};

const SDG_LABELS = {
  "SDG-01": "No Poverty",
  "SDG-02": "Zero Hunger",
  "SDG-03": "Good Health and Well-being",
  "SDG-04": "Quality Education",
  "SDG-05": "Gender Equality",
  "SDG-06": "Clean Water and Sanitation",
  "SDG-07": "Affordable and Clean Energy",
  "SDG-08": "Decent Work and Economic Growth",
  "SDG-09": "Industry, Innovation and Infrastructure",
  "SDG-10": "Reduced Inequalities",
  "SDG-11": "Sustainable Cities and Communities",
  "SDG-12": "Responsible Consumption and Production",
  "SDG-13": "Climate Action",
  "SDG-14": "Life Below Water",
  "SDG-15": "Life on Land",
  "SDG-16": "Peace, Justice and Strong Institutions",
  "SDG-17": "Partnerships for the Goals"
};

const SDG_COLORS = [
  "#E5243B","#DDA63A","#4C9F38","#C5192D","#FF3A21",
  "#26BDE2","#FCC30B","#A21942","#FD6925","#DD1367",
  "#FD9D24","#BF8B2E","#3F7E44","#0A97D9","#56C02B",
  "#00689D","#19486A"
];

const OUTCOME_LABELS = {
  "O1-HWBP": "Human Well-being Promoted",
  "O2-WCF":  "Wealth Creation Fostered",
  "O3-WPR":  "Wealth Protection Reinforced",
  "O4-SI":   "Sustainability Institutionalized"
};

const STRATEGY_LABELS = {
  "S-01": "Achieve quality science education and enhance S&T talent contributions",
  "S-02": "Ensure food security",
  "S-03": "Improve health and nutrition",
  "S-04": "Improve access to clean water, clothing, shelter, and efficient transport",
  "S-05": "Advance research, development and innovation",
  "S-06": "Scale-up technology adoption, utilization and commercialization",
  "S-07": "Strengthen provision of STI support for production and manufacturing sectors",
  "S-08": "Improve access to clean water, clothing, shelter, and transport (alt)",
  "S-09": "Advance disaster risk reduction management and processes",
  "S-10": "Improve monitoring and warning systems for risk reduction",
  "S-11": "Improve health and nutrition (supplementary)",
  "S-12": "Improve access to clean water, clothing, shelter (supplementary)",
  "S-13": "Intensify environmental sustainability",
  "S-14": "Enhance ecosystem resilience",
  "S-15": "Establish smart and sustainable communities",
  "S-16": "Improve access to clean and green energy",
  "S-17": "Institutionalize science communication",
  "S-18": "Build robust institutional capacity",
  "S-19": "Roll-out S&T-enabled systems for seamless operations",
  "S-20": "Enhance linkages for science, technology, innovation, and entrepreneurial cooperation"
};

const KR_LABELS = {
  "H1-KR1": "10,000 MSMEs modernized in 24 months",
  "H1-KR2": "30% productivity increase per engaged MSME",
  "H1-KR3": "200,000 jobs sustained or upgraded through technology adoption",
  "H2-KR1": "500 science-based ventures established in 24 months",
  "H2-KR2": "500 technologies ready for global market in 24 months",
  "H2-KR3": "7 KIST Parks covering distinct sectors established",
  "H2-KR4": "60,000 new jobs from science-based enterprises and startups",
  "H2-KR5": "15,000 professionals trained in tech commercialization and innovation management",
  "H3-KR1": "₱200 billion in pilot investments secured in 24 months",
  "H3-KR2": "100,000 high-skill jobs created in 24 months",
  "H3-KR3": "70% job placement rate into future-industry roles"
};

// ── FULL PROJECTS DATASET ──
const PROJECTS = [
  {id:"P-001",name:"Enhancing the Artrepreneurship Facility of Papelemento Visual Arts and Scenography through Technology Intervention",prog:"SETUP",year:"2024",prov:"Agusan del Norte",city:"Butuan City",cost:2192490,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-002",name:"Technology Advancement of Light and Heavy Repair Shop through S&T Intervention",prog:"SETUP",year:"2024",prov:"Surigao del Norte",city:"Dapa",cost:1926400,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-003",name:"Technology Upgrading for Increased Productivity and Food Safety Improvement of Sidewalk Refreshments",prog:"SETUP",year:"2024",prov:"Dinagat Islands",city:"San Jose",cost:288500,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-004",name:"Technology Upgrading of Renz Junkshop's Scrap Metal Material Management to Improve Efficiency, Productivity and Quality Output",prog:"SETUP",year:"2024",prov:"Surigao del Sur",city:"Tandag City",cost:523055,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-005",name:"Improvement of Productivity, Efficiency and Product Quality of Montenegro Arts Printing and Design through Science and Technology Intervention",prog:"SETUP",year:"2024",prov:"Surigao del Sur",city:"Tandag City",cost:1800000,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-006",name:"Elevating Excellence: Enhancing Efficiency and Capability of Berfab Arts and Craft's Manufacturing Facility through Science and Technology",prog:"SETUP",year:"2024",prov:"Agusan del Norte",city:"Butuan City",cost:1593000,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-007",name:"Advance Technology: Datatrend Internet Communication Services Adapting New Technologies for Better Connectivity",prog:"SETUP",year:"2024",prov:"Agusan del Norte",city:"Butuan City",cost:2984310,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-008",name:"Enhancing RN Machine Repair Services: Technological Upgrade through S&T Intervention",prog:"SETUP",year:"2024",prov:"Agusan del Sur",city:"San Francisco",cost:716800,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-009",name:"Sustainable Energy Transition: Integration of Grid-Tied Solar Power System at Surigao Meat Inn Shoppe's Processing and Storage Facility",prog:"SETUP",year:"2024",prov:"Surigao del Norte",city:"Surigao City",cost:5000000,outcomes:["O2-WCF","O4-SI"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03","PBBM-07"],sdg:["SDG-07","SDG-08","SDG-09"],strategies:["S-06","S-07","S-16"]},
  {id:"P-010",name:"Enhancing Sweet Hideaway Cafe: Enabling Success through S&T Intervention",prog:"SETUP",year:"2024",prov:"Surigao del Norte",city:"Surigao City",cost:800855,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-011",name:"Leveraging Technology for Improved Efficiency, Productivity and Service to R and J Graphic Design Services to its Textile Printing Service",prog:"SETUP",year:"2024",prov:"Surigao del Sur",city:"Hinatuan",cost:623600,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-012",name:"Tent Production Efficiency Improvement to Fruitful Enterprises through Science and Technology",prog:"SETUP",year:"2024",prov:"Surigao del Sur",city:"Lingig",cost:3976000,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-013",name:"Improving Product Quality of Juicy Sweets Mktg through Technology Upgrading",prog:"SETUP",year:"2024",prov:"Agusan del Norte",city:"Butuan City",cost:400000,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-014",name:"Boosting Productivity and Ensuring Food Safety Compliance of Legendary Takko Yakki atbp. through STI",prog:"SETUP",year:"2024",prov:"Agusan del Norte",city:"Butuan City",cost:1356900,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-015",name:"Enhancing Efficiency of T&M Ice Trading through Technology Upgrading",prog:"SETUP",year:"2024",prov:"Agusan del Norte",city:"Nasipit",cost:175000,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-016",name:"Enhance Productivity in Amaris Merav Corporation's Commissary Facility through Industry 4.0 Innovations",prog:"SETUP",year:"2024",prov:"Agusan del Norte",city:"Butuan City",cost:5000000,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-017",name:"Improving Production Facility of Chenel's Glass Supply through S&T Intervention",prog:"SETUP",year:"2024",prov:"Agusan del Sur",city:"Trento",cost:650000,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-018",name:"Enhancing Harvest Facility Operations of Riza's Store through S&T Intervention",prog:"SETUP",year:"2024",prov:"Agusan del Sur",city:"Bayugan City",cost:2175000,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-019",name:"Strategic Acquisition of Rice Mill Equipment of XYKRIS Rice and Corn Mill",prog:"SETUP",year:"2024",prov:"Agusan del Sur",city:"San Francisco",cost:1265600,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Agroforestry"],pbbm:["PBBM-03","PBBM-08"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-020",name:"S&T Intervention to Amplify Productivity of SLC Meubles Furniture Shop",prog:"SETUP",year:"2024",prov:"Surigao del Norte",city:"Surigao City",cost:493015,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Agroforestry"],pbbm:["PBBM-03"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-021",name:"Boosting Operational Efficiency through S&T Intervention and Equipment Modernization for Sean Kris Food Products",prog:"SETUP",year:"2024",prov:"Surigao del Norte",city:"Malimono",cost:650000,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-022",name:"Harnessing Technology to Drive Energy Efficiency and Productivity to Sarah Guarte Cakes and Pastries Shop",prog:"SETUP",year:"2024",prov:"Surigao del Sur",city:"Tandag City",cost:2184713,outcomes:["O2-WCF","O4-SI"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03","PBBM-07"],sdg:["SDG-07","SDG-08","SDG-09"],strategies:["S-06","S-07","S-16"]},
  {id:"P-023",name:"Enhancing Operational Efficiency and Productivity of Tresmarias Aqua Farm through S&T Intervention",prog:"SETUP",year:"2024",prov:"Surigao del Sur",city:"Bayabas",cost:557600,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Fishery"],pbbm:["PBBM-03","PBBM-08"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-024",name:"Accelerating Harvest Operations of VFS Trading through S&T Intervention",prog:"SETUP",year:"2024",prov:"Surigao del Sur",city:"Tago",cost:2310000,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-025",name:"Enhancing Food Safety and Technology Utilization at KR Corner Cafe through Science and Technology Interventions",prog:"SETUP",year:"2024",prov:"Surigao del Sur",city:"Bislig City",cost:1314790,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-026",name:"Cultivating an Innovative Ecosystem thru the Provincial Research Innovation and Science Museum",prog:"LGIA",year:"2024",prov:"Surigao del Norte",city:"Surigao City",cost:2290000,outcomes:["O1-HWBP","O2-WCF"],kr:[],fame:["Cross-Cutting"],pbbm:["PBBM-05"],sdg:["SDG-04","SDG-09"],strategies:["S-01","S-05"]},
  {id:"P-027",name:"Resilient Caraga through Research, Innovation, Safety, and Education (RISE)",prog:"LGIA",year:"2024",prov:"Regionwide",city:"",cost:958221,outcomes:["O3-WPR"],kr:[],fame:["Cross-Cutting"],pbbm:["PBBM-05","PBBM-07"],sdg:["SDG-04","SDG-09","SDG-13"],strategies:["S-09"]},
  {id:"P-028",name:"Accelerating Food Research and Innovation in Caraga: Safeguarding Food Security and Safety through technological advancements of the Food Innovation Centers",prog:"LGIA",year:"2024",prov:"Regionwide",city:"",cost:4900000,outcomes:["O1-HWBP","O2-WCF"],kr:["H2-KR1","H2-KR2","H2-KR5"],fame:["Fishery","Agroforestry"],pbbm:["PBBM-03","PBBM-05","PBBM-08"],sdg:["SDG-02","SDG-09","SDG-12"],strategies:["S-02","S-05","S-06"]},
  {id:"P-029",name:"Grassroots Innovation for Inclusive Development (GRIND) in Caraga Region",prog:"LGIA",year:"2024",prov:"Regionwide",city:"",cost:2000000,outcomes:["O2-WCF"],kr:[],fame:["Cross-Cutting"],pbbm:["PBBM-01","PBBM-03","PBBM-05"],sdg:["SDG-01","SDG-08","SDG-09"],strategies:["S-05","S-06"]},
  {id:"P-030",name:"Accelerating the Development of Caraga thru the Establishment of Smart and Sustainable Communities (ACCESS)",prog:"LGIA",year:"2024",prov:"Regionwide",city:"",cost:3000000,outcomes:["O4-SI"],kr:["H3-KR1","H3-KR2","H3-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-05","PBBM-07"],sdg:["SDG-09","SDG-11","SDG-17"],strategies:["S-15"]},
  {id:"P-031",name:"Igniting Innovation for Dynamic Market Expansion and Future-Ready Governance through the RDC-RRDIC",prog:"LGIA",year:"2024",prov:"Regionwide",city:"",cost:1811371,outcomes:["O2-WCF"],kr:["H2-KR5"],fame:["Cross-Cutting"],pbbm:["PBBM-05"],sdg:["SDG-09","SDG-16","SDG-17"],strategies:["S-05","S-20"]},
  {id:"P-032",name:"Driving Socioeconomic Transformation through Operationalization of the i2FAME Center in the Region",prog:"LGIA",year:"2024",prov:"Regionwide",city:"",cost:229028,outcomes:["O2-WCF"],kr:["H2-KR5"],fame:["Cross-Cutting"],pbbm:["PBBM-03","PBBM-05"],sdg:["SDG-09"],strategies:["S-05","S-20"]},
  {id:"P-033",name:"TechConnect: Facilitating Technology Transfer, Adoption, and Upgrading — Supporting FOB and SETUP",prog:"LGIA",year:"2024",prov:"Regionwide",city:"",cost:1424787,outcomes:["O2-WCF"],kr:["H2-KR2","H2-KR5"],fame:["Cross-Cutting"],pbbm:["PBBM-03","PBBM-05"],sdg:["SDG-09"],strategies:["S-06"]},
  {id:"P-034",name:"Innovations for Filipinos Working Distantly from the Philippines (iFWD PH)",prog:"LGIA",year:"2024",prov:"Regionwide",city:"",cost:646608,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03","PBBM-05"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-035",name:"Integrated Implementation of Project SARAI and AgriTech Caraga (SARAI Plus Project)",prog:"LGIA",year:"2024",prov:"Regionwide",city:"",cost:787355,outcomes:["O1-HWBP","O2-WCF","O3-WPR","O4-SI"],kr:["H2-KR2","H3-KR1","H3-KR2","H3-KR3"],fame:["Agroforestry"],pbbm:["PBBM-03","PBBM-04","PBBM-05","PBBM-08"],sdg:["SDG-02","SDG-08","SDG-09","SDG-11","SDG-15"],strategies:["S-02","S-06","S-07","S-10","S-13"]},
  {id:"P-036",name:"DOST Caraga's Programs and Projects Promotion through S&T Week Celebrations",prog:"LGIA",year:"2024",prov:"Regionwide",city:"",cost:3900000,outcomes:[],kr:[],fame:["Cross-Cutting"],pbbm:[],sdg:["SDG-09"],strategies:["S-17","S-20"]},
  {id:"P-037",name:"Establishing a Multifunctional Hub: The Caraga Integrated Gold Copper Mineral Processing Plant",prog:"LGIA",year:"2024",prov:"Agusan del Norte",city:"Cabadbaran City",cost:622853,outcomes:["O2-WCF"],kr:["H3-KR1","H3-KR2","H3-KR3"],fame:["Mining"],pbbm:["PBBM-03","PBBM-05"],sdg:["SDG-08","SDG-09"],strategies:["S-06"]},
  {id:"P-038",name:"Catalyzing Regional Development through STI Ecosystem Strengthening",prog:"LGIA",year:"2024",prov:"Regionwide",city:"",cost:1284981,outcomes:["O1-HWBP"],kr:["H2-KR5"],fame:["Cross-Cutting"],pbbm:["PBBM-05"],sdg:["SDG-09"],strategies:["S-03"]},
  {id:"P-039",name:"InnovATE: Innovating the AgroIndustry Sector through Technology-Based Economy Development",prog:"LGIA",year:"2024",prov:"Agusan del Norte",city:"Buenavista",cost:4000000,outcomes:["O2-WCF","O4-SI"],kr:["H3-KR1","H3-KR2"],fame:["Agroforestry"],pbbm:["PBBM-03","PBBM-05","PBBM-08"],sdg:["SDG-08","SDG-09","SDG-15"],strategies:["S-06","S-07","S-13"]},
  {id:"P-040",name:"Fostering Artisan Empowerment and Climate Resilience through Innovative Timber-based Handicraft Processing",prog:"LGIA",year:"2024-2025",prov:"Agusan del Sur",city:"Talacogon",cost:3604326,outcomes:["O2-WCF"],kr:["H3-KR1","H3-KR2","H3-KR3"],fame:["Agroforestry","Ecotourism"],pbbm:["PBBM-03","PBBM-05","PBBM-07"],sdg:["SDG-08","SDG-11","SDG-13","SDG-15"],strategies:["S-06"]},
  {id:"P-041",name:"SMART SDN: Science and Technology for Surigao del Norte toward Smart Province",prog:"LGIA",year:"2024-2025",prov:"Surigao del Norte",city:"Mainit",cost:3960000,outcomes:["O2-WCF"],kr:["H3-KR1","H3-KR2","H3-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03","PBBM-04","PBBM-05","PBBM-07"],sdg:["SDG-09","SDG-11","SDG-12"],strategies:["S-06"]},
  {id:"P-042",name:"Empowering Communities in Surigao del Sur through Technology Transfer and Adoption of Publicly-funded R&D Outputs",prog:"LGIA",year:"2024",prov:"Surigao del Sur",city:"Tagbina",cost:3369846,outcomes:["O1-HWBP","O2-WCF"],kr:["H2-KR2","H2-KR5"],fame:["Cross-Cutting"],pbbm:["PBBM-03","PBBM-05"],sdg:["SDG-08","SDG-09","SDG-17"],strategies:["S-02","S-05","S-06"]},
  {id:"P-043",name:"WISE Dinagat: Waste Innovations for Sustainable Environment",prog:"LGIA",year:"2024-2025",prov:"Dinagat Islands",city:"San Jose",cost:2293132,outcomes:["O2-WCF"],kr:["H3-KR1","H3-KR2"],fame:["Cross-Cutting"],pbbm:["PBBM-03","PBBM-07"],sdg:["SDG-09","SDG-11","SDG-13"],strategies:["S-06"]},
  {id:"P-044",name:"Empowering Communities in Dinagat Islands through Innovative Water Systems using Renewable Energy",prog:"LGIA",year:"2024-2025",prov:"Dinagat Islands",city:"Libjo",cost:1321927,outcomes:["O2-WCF","O4-SI"],kr:["H3-KR1","H3-KR2"],fame:["Cross-Cutting"],pbbm:["PBBM-05","PBBM-07"],sdg:["SDG-06","SDG-07","SDG-09","SDG-11","SDG-13"],strategies:["S-06","S-16"]},
  {id:"P-045",name:"Integrated Innovations: Smart Systems for Developing Agricultural Innovation and Resilient Communities and InnoWeave",prog:"LGIA",year:"2024-2025",prov:"Multi-Province",city:"",cost:4000000,outcomes:["O2-WCF","O3-WPR"],kr:["H3-KR1","H3-KR2","H3-KR3"],fame:["Agroforestry"],pbbm:["PBBM-03","PBBM-04","PBBM-05","PBBM-07"],sdg:["SDG-08","SDG-09","SDG-11","SDG-13","SDG-15"],strategies:["S-06","S-10"]},
  {id:"P-046",name:"Leveraging STI for Smart and Sustainable Communities in Caraga Region (STI for SMART Caraga)",prog:"LGIA",year:"2024",prov:"Regionwide",city:"",cost:2539978,outcomes:["O4-SI"],kr:["H3-KR1","H3-KR2","H3-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03","PBBM-04","PBBM-05","PBBM-07"],sdg:["SDG-09","SDG-11","SDG-17"],strategies:["S-15"]},
  {id:"P-047",name:"Innovating New Food Products for Healthier Options (InnovHealth)",prog:"LGIA",year:"2023-2024",prov:"Agusan del Norte",city:"Jabonga",cost:1211425,outcomes:["O1-HWBP"],kr:["H2-KR5"],fame:["Agroforestry"],pbbm:["PBBM-03","PBBM-05"],sdg:["SDG-02","SDG-03","SDG-09"],strategies:["S-02","S-03"]},
  {id:"P-048",name:"Research and Innovation towards achieving Sustainable Economies for Agusan Del Norte (RISE ADN)",prog:"LGIA",year:"2023-2024",prov:"Agusan del Norte",city:"Buenavista",cost:2666984,outcomes:["O1-HWBP","O2-WCF","O4-SI"],kr:["H2-KR2","H2-KR5"],fame:["Agroforestry"],pbbm:["PBBM-03","PBBM-05","PBBM-07"],sdg:["SDG-07","SDG-09","SDG-11"],strategies:["S-02","S-06","S-16"]},
  {id:"P-049",name:"Empowering LGU Bislig City and the Fisherfolks on Effective Caulerpa racemosa Farming",prog:"LGIA",year:"2023-2024",prov:"Surigao del Sur",city:"Bislig City",cost:896144,outcomes:["O2-WCF"],kr:["H2-KR2"],fame:["Fishery"],pbbm:["PBBM-03","PBBM-05","PBBM-07","PBBM-08"],sdg:["SDG-02","SDG-08","SDG-09","SDG-14"],strategies:["S-06"]},
  {id:"P-050",name:"OneISLAdinagat: Waste-to-worth Processing Facility Improvement through STI-based Interventions",prog:"LGIA",year:"2023-2024",prov:"Dinagat Islands",city:"San Jose",cost:1239022,outcomes:["O2-WCF","O4-SI"],kr:["H3-KR1","H3-KR2"],fame:["Cross-Cutting"],pbbm:["PBBM-03","PBBM-05","PBBM-07"],sdg:["SDG-09","SDG-11","SDG-12","SDG-13"],strategies:["S-06","S-13"]},
  {id:"P-051",name:"OneISLADinagat: Food Sustainability through Enhanced Collaborative Utilization of Research and Experimentation",prog:"LGIA",year:"2023-2024",prov:"Dinagat Islands",city:"San Jose",cost:716683,outcomes:["O1-HWBP","O2-WCF"],kr:["H2-KR2"],fame:["Fishery","Agroforestry"],pbbm:["PBBM-05","PBBM-07","PBBM-08"],sdg:["SDG-02","SDG-09","SDG-11","SDG-17"],strategies:["S-02","S-05","S-06"]},
  {id:"P-052",name:"OneISLAdinagat: Cassava Advancement through Methodological Adoption of New Technology (CAMANTING Project)",prog:"LGIA",year:"2023-2024",prov:"Dinagat Islands",city:"Cagdianao",cost:951641,outcomes:["O1-HWBP","O2-WCF"],kr:["H2-KR2"],fame:["Agroforestry"],pbbm:["PBBM-03","PBBM-05","PBBM-08"],sdg:["SDG-02","SDG-09","SDG-12"],strategies:["S-02","S-05","S-06"]},
  {id:"P-053",name:"Development of Innovative Sago Flour-Based Products for Food Industry Application",prog:"LGIA",year:"2023-2024",prov:"Agusan del Sur",city:"Bunawan",cost:720218,outcomes:["O1-HWBP","O2-WCF"],kr:["H2-KR2"],fame:["Agroforestry"],pbbm:["PBBM-03","PBBM-05","PBBM-08"],sdg:["SDG-02","SDG-09","SDG-12"],strategies:["S-02","S-05"]},
  {id:"P-054",name:"Food Research and Innovation to Enhance NEMSU-developed Dried Fish Ice Cream (FRIEND-FIC)",prog:"LGIA",year:"2023-2024",prov:"Surigao del Sur",city:"Lianga",cost:1075737,outcomes:["O1-HWBP","O2-WCF"],kr:["H2-KR2"],fame:["Fishery"],pbbm:["PBBM-03","PBBM-05","PBBM-08"],sdg:["SDG-02","SDG-09","SDG-14"],strategies:["S-02","S-05","S-06"]},
  {id:"P-055",name:"Support to the Field Testing and Commercialization of the Caraga Black Native Chicken in Del Carmen",prog:"LGIA",year:"2023-2024",prov:"Surigao del Norte",city:"Del Carmen",cost:400000,outcomes:["O2-WCF"],kr:["H2-KR2"],fame:["Agroforestry"],pbbm:["PBBM-03","PBBM-05","PBBM-08"],sdg:["SDG-02","SDG-08","SDG-09"],strategies:["S-05","S-07"]},
  {id:"P-056",name:"Accelerating Agripreneurship, Research and Development in Agusan del Sur through Agri-Based Business Incubator",prog:"LGIA",year:"2023-2024",prov:"Agusan del Sur",city:"Bunawan",cost:3000000,outcomes:["O1-HWBP","O2-WCF"],kr:["H2-KR1","H2-KR2","H2-KR5"],fame:["Agroforestry"],pbbm:["PBBM-03","PBBM-05","PBBM-08"],sdg:["SDG-02","SDG-08","SDG-09"],strategies:["S-01","S-05"]},
  {id:"P-057",name:"Integrated Futures: Advancing Sustainable Development of Key Commodity Sectors (I-FASST)",prog:"LGIA",year:"2023-2024",prov:"Agusan del Norte",city:"Las Nieves",cost:2133965,outcomes:["O2-WCF","O4-SI"],kr:["H3-KR1","H3-KR2","H3-KR3"],fame:["Agroforestry"],pbbm:["PBBM-03","PBBM-04","PBBM-05","PBBM-07","PBBM-08"],sdg:["SDG-09","SDG-11","SDG-12"],strategies:["S-02","S-06","S-15"]},
  {id:"P-058",name:"Technology Upgrading for Renewable Energy Adoption — A&C Yelosubmarine Corp.",prog:"SETUP",year:"2025",prov:"Agusan del Norte",city:"Butuan City",cost:1500000,outcomes:["O2-WCF","O4-SI"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03","PBBM-07"],sdg:["SDG-07","SDG-08","SDG-09"],strategies:["S-06","S-07","S-16"]},
  {id:"P-059",name:"Green Gastronomy: Enhancing Catering Services with Solar Energy and Safe Kitchen Solutions of Homer Catering Services",prog:"SETUP",year:"2025",prov:"Agusan del Norte",city:"Butuan City",cost:1030189,outcomes:["O2-WCF","O4-SI"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03","PBBM-07"],sdg:["SDG-07","SDG-08","SDG-09"],strategies:["S-06","S-07","S-16"]},
  {id:"P-060",name:"Enhancing Production Efficiency and Quality of Batchow's Food Hub through S&T Intervention",prog:"SETUP",year:"2025",prov:"Agusan del Sur",city:"Bayugan City",cost:201800,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-061",name:"Upgrading the Tailoring Facility of Khadj's Dry Goods Trading through S&T Intervention",prog:"SETUP",year:"2025",prov:"Agusan del Sur",city:"San Francisco",cost:1078922,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-062",name:"Technology Upgrading of Sublimation Technology for Customization and Production of Southland Tailoring",prog:"SETUP",year:"2025",prov:"Dinagat Islands",city:"San Jose",cost:662255,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-063",name:"Technology Upgrades to Boost Production of Sistah's Cakes and Party Essentials",prog:"SETUP",year:"2025",prov:"Dinagat Islands",city:"San Jose",cost:498000,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-064",name:"Leveraging Chme's Cakes and Pastries Shop Productivity through S&T Interventions",prog:"SETUP",year:"2025",prov:"Surigao del Norte",city:"General Luna",cost:200000,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-065",name:"Enhancing Operations Through S&T Intervention: Mechanization and GMP Compliance for Jovieltin Yemahaus",prog:"SETUP",year:"2025",prov:"Surigao del Norte",city:"Bacuag",cost:332500,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-066",name:"Advancing Operational Efficiency at Kan Menchie Food Products with S&T Integration",prog:"SETUP",year:"2025",prov:"Surigao del Norte",city:"Dapa",cost:188000,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-067",name:"Upgrading the Production Capability of Ohiman Food Processing through S&T Intervention",prog:"SETUP",year:"2025",prov:"Agusan del Sur",city:"San Francisco",cost:279800,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-068",name:"Upgrading Production Efficiency and Food Safety Compliance of Helen's Food Products",prog:"SETUP",year:"2025",prov:"Surigao del Norte",city:"Surigao City",cost:564000,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-069",name:"Harnessing S&T Intervention for Lab's Food Products Towards Optimized Productivity",prog:"SETUP",year:"2025",prov:"Surigao del Norte",city:"Surigao City",cost:453000,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-070",name:"Technology Upgrading to Improve Productivity and Efficiency of Moreno Bakeshop",prog:"SETUP",year:"2025",prov:"Surigao del Sur",city:"Marihatag",cost:252000,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-071",name:"Milling Process Improvement of DODJ Rice Mill through S&T Intervention",prog:"SETUP",year:"2025",prov:"Surigao del Sur",city:"Cantilan",cost:1512000,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Agroforestry"],pbbm:["PBBM-03"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-072",name:"Utilizing Renewable Energy for Resilient Internet and Cable TV Operations of RE Broadband Satellite Inc.",prog:"SETUP",year:"2025",prov:"Surigao del Sur",city:"Bislig City",cost:4836922,outcomes:["O2-WCF","O4-SI"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03","PBBM-07"],sdg:["SDG-07","SDG-08","SDG-09"],strategies:["S-06","S-07","S-16"]},
  {id:"P-073",name:"Enhancing Efficiency and Capability of Northmin Furniture and Fixture's Facility through Science and Technology",prog:"SETUP",year:"2025",prov:"Agusan del Norte",city:"Cabadbaran City",cost:1520000,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-074",name:"Productivity Enhancement of Genesis Bottle Buyer's Washing Operations Through Science, Technology and Innovation",prog:"SETUP",year:"2025",prov:"Agusan del Norte",city:"Butuan City",cost:3430162,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-075",name:"Enhancing the Operational Efficiency of VROSS Corporation's Meat Processing Operations",prog:"SETUP",year:"2025",prov:"Agusan del Norte",city:"Butuan City",cost:1979000,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-076",name:"Upgrading the Production Capabilities of Tims Sportswear Tailoring through S&T Intervention",prog:"SETUP",year:"2025",prov:"Agusan del Sur",city:"Trento",cost:1419995,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-077",name:"Upgrading the Operational Efficiency of Pan de Budik through S&T Intervention",prog:"SETUP",year:"2025",prov:"Agusan del Sur",city:"Bayugan City",cost:525800,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-078",name:"Technology Upgrading of Herbal Products Processing of NOVAH Herbal Product Manufacturing",prog:"SETUP",year:"2025",prov:"Dinagat Islands",city:"San Jose",cost:385000,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Agroforestry"],pbbm:["PBBM-03"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-079",name:"Boosting Operational Efficiency and Safety Improvements of Bluepink Cakeshop through Technology Intervention",prog:"SETUP",year:"2025",prov:"Dinagat Islands",city:"Tubajon",cost:758000,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-080",name:"Enhancing Operations of Osiang Welding Shop through Science and Technology Intervention",prog:"SETUP",year:"2025",prov:"Dinagat Islands",city:"Loreto",cost:600000,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-081",name:"Upgrading Technology Capability to Boost Productivity through Technology Upgrading of Larry Welding Shop",prog:"SETUP",year:"2025",prov:"Dinagat Islands",city:"San Jose",cost:660000,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-082",name:"Enhancing Operational Efficiency of Waterstar-Fresh Water Refilling Station through Technology Interventions",prog:"SETUP",year:"2025",prov:"Dinagat Islands",city:"San Jose",cost:350000,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-083",name:"Advancing Bart's Rice Mill through S&T for Better Quality and Higher Output",prog:"SETUP",year:"2025",prov:"Surigao del Norte",city:"Surigao City",cost:1200000,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Agroforestry"],pbbm:["PBBM-03"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-084",name:"Technology Upgrading of CG Machine Shop to Expand Services and Enhance Competitiveness",prog:"SETUP",year:"2025",prov:"Surigao del Norte",city:"Surigao City",cost:4100000,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-085",name:"Process and Equipment Optimization for Erlan Food Products through S&T Intervention",prog:"SETUP",year:"2025",prov:"Surigao del Norte",city:"Surigao City",cost:3864000,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-086",name:"Equipment Upgrading to Modernize Machining Capabilities of Guerta Enterprises and Machine Shop",prog:"SETUP",year:"2025",prov:"Surigao del Sur",city:"Cantilan",cost:1724391,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-087",name:"Technology Intervention and Upgrading of Merliz Food Products for Enhanced Productivity",prog:"SETUP",year:"2025",prov:"Surigao del Sur",city:"Bislig City",cost:454000,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-088",name:"Technology Upgrading of IPrint's Acrylic-based Arts and Crafts Production",prog:"SETUP",year:"2025",prov:"Surigao del Sur",city:"Tandag City",cost:765520,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-089",name:"InnovATE: Innovating the AgroIndustry Sector through Technology-Based Economy Development (CEST)",prog:"CEST",year:"2024-2025",prov:"Agusan del Norte",city:"Buenavista",cost:3549744,outcomes:["O2-WCF","O4-SI"],kr:["H3-KR1","H3-KR2"],fame:["Agroforestry"],pbbm:["PBBM-03","PBBM-05","PBBM-08"],sdg:["SDG-02","SDG-08","SDG-09","SDG-15"],strategies:["S-02","S-05","S-06"]},
  {id:"P-090",name:"Technological Solutions for Sustainable Water and Community Waterway Optimization (TECHFLOW)",prog:"CEST",year:"2024-2025",prov:"Surigao del Norte",city:"San Francisco",cost:1000000,outcomes:["O1-HWBP","O2-WCF"],kr:["H3-KR1"],fame:["Cross-Cutting"],pbbm:["PBBM-05","PBBM-07"],sdg:["SDG-06","SDG-09","SDG-11","SDG-12"],strategies:["S-04","S-06"]},
  {id:"P-091",name:"Accelerating Food Research and Innovation in Caraga: Establishment of Food Innovation Center in FSUU",prog:"LGIA",year:"2024-2025",prov:"Agusan del Norte",city:"Butuan City",cost:4900000,outcomes:["O1-HWBP","O2-WCF"],kr:["H2-KR1","H2-KR2","H2-KR5"],fame:["Fishery","Agroforestry"],pbbm:["PBBM-03","PBBM-05","PBBM-08"],sdg:["SDG-02","SDG-08","SDG-09","SDG-17"],strategies:["S-02","S-05","S-06"]},
  {id:"P-092",name:"Accelerating Entrepreneurship, Research and Development in Surigao del Sur — AFTBI in NEMSU",prog:"LGIA",year:"2024-2025",prov:"Surigao del Sur",city:"Tandag City",cost:2216583,outcomes:["O2-WCF"],kr:["H2-KR1","H2-KR2","H2-KR4","H2-KR5"],fame:["Fishery","Agroforestry"],pbbm:["PBBM-03","PBBM-05","PBBM-08"],sdg:["SDG-02","SDG-08","SDG-09","SDG-14","SDG-17"],strategies:["S-05","S-06","S-07"]},
  {id:"P-093",name:"Establishment of a Mulberry Demonstration Farm and Soil Amelioration Protocol for Mined-Out Lands",prog:"LGIA",year:"2024-2025",prov:"Agusan del Norte",city:"Butuan City",cost:1500000,outcomes:["O4-SI"],kr:["H3-KR1"],fame:["Mining"],pbbm:["PBBM-05","PBBM-07","PBBM-08"],sdg:["SDG-02","SDG-13","SDG-15"],strategies:["S-05","S-13","S-14"]},
  {id:"P-094",name:"SMARTER AGUSAN: Agusan del Norte's Development thru Value-Addition and Technology Commercialization (ADVANCE) — CEST",prog:"CEST",year:"2025",prov:"Agusan del Norte",city:"Buenavista",cost:2574861,outcomes:["O2-WCF","O4-SI"],kr:["H3-KR1","H3-KR2","H3-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03","PBBM-04","PBBM-05"],sdg:["SDG-08","SDG-09","SDG-11","SDG-17"],strategies:["S-06","S-15","S-19"]},
  {id:"P-095",name:"Project CLEANEST: Community and Localized Engagement for Advanced New Ecological Solutions and Sustainable Technologies",prog:"CEST",year:"2025",prov:"Agusan del Sur",city:"Prosperidad",cost:2666554,outcomes:["O1-HWBP","O2-WCF"],kr:["H3-KR1"],fame:["Cross-Cutting"],pbbm:["PBBM-05","PBBM-07"],sdg:["SDG-01","SDG-09","SDG-11","SDG-12"],strategies:["S-04","S-06","S-07"]},
  {id:"P-096",name:"InnoWEAVE: Innovating Weaving, Empowering Artisans, and Valuing Entrepreneurship",prog:"CEST",year:"2025",prov:"Agusan del Sur",city:"Sibagat",cost:263200,outcomes:["O2-WCF"],kr:["H3-KR1","H3-KR2","H3-KR3"],fame:["Agroforestry"],pbbm:["PBBM-03"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-097",name:"Smart Innovation Driving Local Advancement and Key Solutions in Surigao del Norte (SIDLAK) — CEST",prog:"CEST",year:"2025",prov:"Surigao del Norte",city:"Mainit",cost:1000000,outcomes:["O1-HWBP","O2-WCF"],kr:["H3-KR1","H3-KR2","H3-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03","PBBM-04","PBBM-05"],sdg:["SDG-09","SDG-11"],strategies:["S-02","S-06","S-07"]},
  {id:"P-098",name:"Project FARM: Facilitating Agricultural Resilience and Modernization in Smart Community of Surigao del Sur",prog:"CEST",year:"2025",prov:"Surigao del Sur",city:"San Miguel",cost:2000000,outcomes:["O1-HWBP","O2-WCF","O3-WPR","O4-SI"],kr:["H3-KR1","H3-KR2","H3-KR3"],fame:["Agroforestry"],pbbm:["PBBM-04","PBBM-05","PBBM-07","PBBM-08"],sdg:["SDG-02","SDG-12","SDG-13","SDG-15","SDG-17"],strategies:["S-02","S-06","S-10","S-13"]},
  {id:"P-099",name:"Sustainable Transformation and Response Innovations for Vulnerable Environments in Loreto, Dinagat Islands",prog:"CEST",year:"2025",prov:"Dinagat Islands",city:"Loreto",cost:1989466,outcomes:["O1-HWBP","O2-WCF"],kr:["H3-KR1","H3-KR2","H3-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03","PBBM-05","PBBM-07"],sdg:["SDG-01","SDG-09","SDG-11","SDG-12"],strategies:["S-04","S-06"]},
  {id:"P-100",name:"SMARTER AGUSAN: ADVANCE — SSCP Component",prog:"SSCP",year:"2025",prov:"Agusan del Norte",city:"Buenavista",cost:1421098,outcomes:["O2-WCF","O4-SI"],kr:["H3-KR1","H3-KR2","H3-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03","PBBM-04","PBBM-05"],sdg:["SDG-08","SDG-09","SDG-11","SDG-17"],strategies:["S-06","S-15","S-19"]},
  {id:"P-101",name:"STI for Smart and Sustainable Communities: Roadmap for Talacogon and Bayugan City",prog:"SSCP",year:"2025",prov:"Agusan del Sur",city:"Bayugan City",cost:898650,outcomes:["O4-SI"],kr:["H3-KR1","H3-KR2","H3-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-04","PBBM-05","PBBM-07"],sdg:["SDG-09","SDG-11","SDG-12","SDG-13","SDG-17"],strategies:["S-15"]},
  {id:"P-102",name:"SIDLAK: Smart Innovation Driving Local Advancement in Surigao del Norte — SSCP",prog:"SSCP",year:"2025",prov:"Surigao del Norte",city:"Mainit",cost:2594500,outcomes:["O2-WCF","O4-SI"],kr:["H3-KR1","H3-KR2","H3-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03","PBBM-04","PBBM-05","PBBM-07"],sdg:["SDG-09","SDG-11","SDG-13","SDG-17"],strategies:["S-06","S-15"]},
  {id:"P-103",name:"SMART Tandag: Building a Smart and Sustainable City through STI for Tandag City Waters",prog:"SSCP",year:"2025",prov:"Surigao del Sur",city:"Tandag City",cost:2000000,outcomes:["O2-WCF","O4-SI"],kr:["H3-KR1","H3-KR2","H3-KR3"],fame:["Fishery"],pbbm:["PBBM-04","PBBM-05","PBBM-07"],sdg:["SDG-02","SDG-06","SDG-09","SDG-11","SDG-13","SDG-14","SDG-17"],strategies:["S-06","S-15"]},
  {id:"P-104",name:"OASIS: Optimization of Agro-technological Solutions and Innovations for Food Security in San Jose",prog:"SSCP",year:"2025",prov:"Dinagat Islands",city:"San Jose",cost:1365560,outcomes:["O2-WCF","O4-SI"],kr:["H3-KR1","H3-KR2","H3-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03","PBBM-05","PBBM-07","PBBM-08"],sdg:["SDG-02","SDG-09","SDG-12","SDG-15"],strategies:["S-06","S-15"]},
  {id:"P-105",name:"SMARTER AGUSAN: FastCharge — Smart-eco city EV Charging Systems in Butuan",prog:"SSCP",year:"2025",prov:"Agusan del Norte",city:"Butuan City",cost:5000000,outcomes:["O2-WCF","O4-SI"],kr:["H3-KR1","H3-KR2","H3-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-04","PBBM-05","PBBM-07"],sdg:["SDG-07","SDG-09","SDG-11","SDG-13"],strategies:["S-06","S-15","S-16"]},
  {id:"P-106",name:"Artificial Intelligence Driven Innovation through Enhancing Makerspaces and Integration of Space Planetarium",prog:"LGIA",year:"2025",prov:"Regionwide",city:"",cost:3442632,outcomes:["O1-HWBP","O2-WCF"],kr:["H3-KR1","H3-KR2","H3-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-05"],sdg:["SDG-04","SDG-09"],strategies:["S-01","S-05"]},
  {id:"P-107",name:"Science for Prevention and Advanced Risk Knowledge",prog:"LGIA",year:"2025",prov:"Regionwide",city:"",cost:677216,outcomes:["O3-WPR"],kr:[],fame:["Cross-Cutting"],pbbm:["PBBM-03","PBBM-05","PBBM-07"],sdg:["SDG-04","SDG-09","SDG-11","SDG-13"],strategies:["S-09"]},
  {id:"P-108",name:"DOST TECHTALK: A Virtual Assistant for Technology Adoption Business Innovation",prog:"LGIA",year:"2025",prov:"Regionwide",city:"",cost:1322363,outcomes:["O2-WCF"],kr:["H2-KR1","H2-KR2","H2-KR5"],fame:["Cross-Cutting"],pbbm:["PBBM-05"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-19"]},
  {id:"P-109",name:"ASCEND: Advancing Sustainable Caraga Food Innovation Consortium Development",prog:"LGIA",year:"2025",prov:"Regionwide",city:"",cost:2374596,outcomes:["O1-HWBP","O2-WCF"],kr:["H2-KR1","H2-KR2","H2-KR5"],fame:["Fishery","Agroforestry"],pbbm:["PBBM-03","PBBM-05","PBBM-07","PBBM-08"],sdg:["SDG-02","SDG-09","SDG-12","SDG-17"],strategies:["S-02","S-05","S-06","S-20"]},
  {id:"P-110",name:"FICs Forward: R&D Boost and Support to Caraga Food Innovation Centers",prog:"LGIA",year:"2025",prov:"Regionwide",city:"",cost:2091726,outcomes:["O1-HWBP","O2-WCF"],kr:["H2-KR1","H2-KR2","H2-KR5"],fame:["Fishery","Agroforestry"],pbbm:["PBBM-03","PBBM-05","PBBM-07","PBBM-08"],sdg:["SDG-02","SDG-09","SDG-12","SDG-17"],strategies:["S-02","S-05","S-06"]},
  {id:"P-111",name:"Empowering Grassroots Innovation for Sustainable Transformation, Resilience, and Circular Economy",prog:"LGIA",year:"2025",prov:"Regionwide",city:"",cost:1313282,outcomes:["O2-WCF"],kr:["H3-KR1","H3-KR2"],fame:["Cross-Cutting"],pbbm:["PBBM-03","PBBM-05","PBBM-07"],sdg:["SDG-01","SDG-08","SDG-09"],strategies:["S-05","S-06"]},
  {id:"P-112",name:"Caraga FAME Innovation HUBS (iHUBS): Accelerating Local Solutions for Sustainable Industries",prog:"LGIA",year:"2025",prov:"Regionwide",city:"",cost:2995000,outcomes:["O2-WCF"],kr:["H2-KR1","H2-KR2","H2-KR4","H2-KR5"],fame:["Cross-Cutting"],pbbm:["PBBM-03","PBBM-05","PBBM-07"],sdg:["SDG-09","SDG-12","SDG-17"],strategies:["S-05","S-06"]},
  {id:"P-113",name:"IGNITE: Innovation Generation Nurturing Industry and Start-Up Ecosystem Transformation",prog:"LGIA",year:"2025",prov:"Regionwide",city:"",cost:4525361,outcomes:["O2-WCF"],kr:["H2-KR1","H2-KR2","H2-KR4","H2-KR5"],fame:["Cross-Cutting"],pbbm:["PBBM-03","PBBM-05"],sdg:["SDG-08","SDG-09","SDG-17"],strategies:["S-05","S-06"]},
  {id:"P-114",name:"Food Assurance and Safety through Science and Technology in Caraga Region (FASST CARAGA)",prog:"LGIA",year:"2025",prov:"Regionwide",city:"",cost:1054005,outcomes:["O1-HWBP"],kr:["H2-KR2","H2-KR5"],fame:["Cross-Cutting"],pbbm:["PBBM-05","PBBM-08"],sdg:["SDG-02","SDG-03","SDG-09","SDG-12"],strategies:["S-03","S-07"]},
  {id:"P-115",name:"Accelerating the Development of Caraga thru Smart and Sustainable Communities (ACCESS 2025)",prog:"LGIA",year:"2025",prov:"Regionwide",city:"",cost:1989117,outcomes:["O4-SI"],kr:["H3-KR1","H3-KR2","H3-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-05","PBBM-07"],sdg:["SDG-09","SDG-11","SDG-17"],strategies:["S-15"]},
  {id:"P-116",name:"Leveraging DOST Caraga's STI Initiatives through Strategic Communication and Promotion",prog:"LGIA",year:"2025",prov:"Regionwide",city:"",cost:4704702,outcomes:[],kr:[],fame:["Cross-Cutting"],pbbm:[],sdg:["SDG-04","SDG-09"],strategies:["S-17","S-20"]},
  {id:"P-117",name:"Techy Business Para sa Makabagong Bayani: Creating OFW Technopreneurs through iFWD PH",prog:"LGIA",year:"2025",prov:"Regionwide",city:"",cost:667013,outcomes:["O2-WCF"],kr:["H1-KR1","H1-KR2","H1-KR3"],fame:["Cross-Cutting"],pbbm:["PBBM-03","PBBM-05"],sdg:["SDG-08","SDG-09"],strategies:["S-06","S-07"]},
  {id:"P-118",name:"Implementation of SARAI Plus Project — AgriTech Caraga through R&D Output Commercialization (2025)",prog:"LGIA",year:"2025",prov:"Regionwide",city:"",cost:1278595,outcomes:["O1-HWBP","O2-WCF","O3-WPR","O4-SI"],kr:["H3-KR1","H3-KR2","H3-KR3"],fame:["Agroforestry"],pbbm:["PBBM-03","PBBM-05","PBBM-07","PBBM-08"],sdg:["SDG-02","SDG-08","SDG-09","SDG-11","SDG-15"],strategies:["S-02","S-06","S-07","S-10","S-13"]},
  {id:"P-119",name:"TechConnect: Facilitating Technology Transfer and Upgrading — FOB and SETUP (2025)",prog:"LGIA",year:"2025",prov:"Regionwide",city:"",cost:1115000,outcomes:["O2-WCF"],kr:["H2-KR1","H2-KR2","H2-KR5"],fame:["Cross-Cutting"],pbbm:["PBBM-03","PBBM-05"],sdg:["SDG-09"],strategies:["S-06"]},
  {id:"P-120",name:"Igniting Innovation for Dynamic Market Expansion through RDC-RRDIC (2025)",prog:"LGIA",year:"2025",prov:"Regionwide",city:"",cost:2625974,outcomes:["O2-WCF"],kr:["H2-KR5"],fame:["Cross-Cutting"],pbbm:["PBBM-05"],sdg:["SDG-08","SDG-09","SDG-16","SDG-17"],strategies:["S-05","S-20"]},
  {id:"P-121",name:"Driving Socioeconomic Transformation through Operationalization of the i2FAME Center (2025)",prog:"LGIA",year:"2025",prov:"Regionwide",city:"",cost:1182190,outcomes:["O2-WCF"],kr:["H2-KR5"],fame:["Cross-Cutting"],pbbm:["PBBM-05"],sdg:["SDG-08","SDG-09"],strategies:["S-05","S-20"]},
  {id:"P-122",name:"MinERAL Hub: Mineral Processing Innovation Hub, Expertise and Skills Training Center",prog:"LGIA",year:"2025",prov:"Agusan del Norte",city:"Cabadbaran City",cost:310849,outcomes:["O2-WCF"],kr:["H3-KR1","H3-KR2","H3-KR3"],fame:["Mining"],pbbm:["PBBM-03","PBBM-05"],sdg:["SDG-04","SDG-08","SDG-09"],strategies:["S-06","S-07"]}
];

// ── RDI CENTERS ──
const RDI = [
  {id:"RDI-001",name:"Action Towards Greater Advancement of Knowledge Center (AGAK)",host:"Caraga State University",prov:"Agusan del Norte",fame:["Cross-Cutting"],pbbm:["PBBM-05"],sdg:["SDG-04","SDG-09"]},
  {id:"RDI-002",name:"Caraga Center for Geo-informatics (CCGeo)",host:"Caraga State University",prov:"Agusan del Norte",fame:["Cross-Cutting"],pbbm:["PBBM-05"],sdg:["SDG-09"]},
  {id:"RDI-003",name:"Caraga Center for Peace and Development (CCPD)",host:"Caraga State University",prov:"Agusan del Norte",fame:["Cross-Cutting"],pbbm:["PBBM-05"],sdg:["SDG-09","SDG-16"]},
  {id:"RDI-004",name:"Center for Agricultural Research and Entrepreneurship (CaragaCARE)",host:"Caraga State University",prov:"Agusan del Norte",fame:["Agroforestry","Fishery"],pbbm:["PBBM-05","PBBM-08"],sdg:["SDG-02","SDG-09","SDG-12"]},
  {id:"RDI-005",name:"Center for Human Computer Interactions (CHCI)",host:"Caraga State University",prov:"Agusan del Norte",fame:["Cross-Cutting"],pbbm:["PBBM-05"],sdg:["SDG-09"]},
  {id:"RDI-006",name:"Center for Nanoscience and Technology for Research and Entrepreneurship (CeNTRE)",host:"Caraga State University",prov:"Agusan del Norte",fame:["Cross-Cutting"],pbbm:["PBBM-05"],sdg:["SDG-09"]},
  {id:"RDI-007",name:"Center for Research in Environmental Management and Eco-governance (CRÈME)",host:"Caraga State University",prov:"Agusan del Norte",fame:["Ecotourism","Agroforestry"],pbbm:["PBBM-05"],sdg:["SDG-09"]},
  {id:"RDI-008",name:"Center for Resource Assessment, Analytics and Emerging Technologies (CReATe)",host:"Caraga State University",prov:"Agusan del Norte",fame:["Agroforestry","Fishery"],pbbm:["PBBM-05"],sdg:["SDG-02","SDG-09"]},
  {id:"RDI-009",name:"Center for Robotics, Automation and Fabrication Technology (CRAFT)",host:"Caraga State University",prov:"Agusan del Norte",fame:["Cross-Cutting"],pbbm:["PBBM-05"],sdg:["SDG-09","SDG-11"]},
  {id:"RDI-010",name:"CSUCC Energy and Power Research and Innovation Center (CEPRIC)",host:"Caraga State University",prov:"Agusan del Norte",fame:["Cross-Cutting"],pbbm:["PBBM-05","PBBM-07"],sdg:["SDG-09"]},
  {id:"RDI-011",name:"Food Innovation Center — Caraga State University",host:"Caraga State University",prov:"Agusan del Norte",fame:["Fishery","Agroforestry"],pbbm:["PBBM-03","PBBM-05","PBBM-08"],sdg:["SDG-02","SDG-09","SDG-12"]},
  {id:"RDI-012",name:"Information and Communication Technology Center (ICTC)",host:"Caraga State University",prov:"Agusan del Norte",fame:["Cross-Cutting"],pbbm:["PBBM-04","PBBM-05"],sdg:["SDG-09"]},
  {id:"RDI-013",name:"Mathematical and Statistical Computing Research Center (MSCRC)",host:"Caraga State University",prov:"Agusan del Norte",fame:["Cross-Cutting"],pbbm:["PBBM-05"],sdg:["SDG-09"]},
  {id:"RDI-014",name:"Mineral Resources Management Research and Training Center (MinRES)",host:"Caraga State University",prov:"Agusan del Norte",fame:["Mining"],pbbm:["PBBM-05","PBBM-07"],sdg:["SDG-09"]},
  {id:"RDI-015",name:"Sustainable Mineral and Mining Operations using Industry 4.0 Center (SuMMO)",host:"Caraga State University",prov:"Agusan del Norte",fame:["Mining"],pbbm:["PBBM-05","PBBM-07"],sdg:["SDG-09"]},
  {id:"RDI-016",name:"Virtual Learning Research Center (VLRC)",host:"Caraga State University",prov:"Agusan del Norte",fame:["Cross-Cutting"],pbbm:["PBBM-05"],sdg:["SDG-04","SDG-09"]},
  {id:"RDI-017",name:"Center for Health Research and Innovations in Medicine and Bioengineering (CHIME)",host:"Caraga State University",prov:"Agusan del Norte",fame:["Cross-Cutting"],pbbm:["PBBM-05","PBBM-06"],sdg:["SDG-03","SDG-09"]},
  {id:"RDI-018",name:"Food Research Ideation and Entrepreneur Development HUB (CSUCC FRIED)",host:"Caraga State University",prov:"Agusan del Norte",fame:["Fishery","Agroforestry"],pbbm:["PBBM-03","PBBM-05","PBBM-08"],sdg:["SDG-02","SDG-09","SDG-12"]},
  {id:"RDI-019",name:"Center for Industrial Technology and Education Development (CITED)",host:"Caraga State University",prov:"Agusan del Norte",fame:["Cross-Cutting"],pbbm:["PBBM-05"],sdg:["SDG-09"]},
  {id:"RDI-020",name:"Food Innovation Center — Surigao del Norte State University",host:"Surigao del Norte State University",prov:"Surigao del Norte",fame:["Fishery","Agroforestry"],pbbm:["PBBM-03","PBBM-05","PBBM-08"],sdg:["SDG-02","SDG-09","SDG-12"]},
  {id:"RDI-021",name:"Digital Transformation Center",host:"Surigao del Norte State University",prov:"Surigao del Norte",fame:["Cross-Cutting"],pbbm:["PBBM-04","PBBM-05"],sdg:["SDG-09"]},
  {id:"RDI-022",name:"Water Testing Center",host:"Surigao del Norte State University",prov:"Surigao del Norte",fame:["Cross-Cutting"],pbbm:["PBBM-05","PBBM-07"],sdg:["SDG-06","SDG-09"]},
  {id:"RDI-023",name:"Smart Greenhouse Center",host:"Surigao del Norte State University",prov:"Surigao del Norte",fame:["Agroforestry"],pbbm:["PBBM-05","PBBM-07","PBBM-08"],sdg:["SDG-02","SDG-09","SDG-13"]},
  {id:"RDI-024",name:"Mushroom Research and Innovation Center",host:"Surigao del Norte State University",prov:"Surigao del Norte",fame:["Agroforestry"],pbbm:["PBBM-05","PBBM-08"],sdg:["SDG-02","SDG-09"]},
  {id:"RDI-025",name:"Bamboo Engineering and Research Innovation Center",host:"Surigao del Norte State University",prov:"Surigao del Norte",fame:["Agroforestry"],pbbm:["PBBM-03","PBBM-05","PBBM-07"],sdg:["SDG-09","SDG-13"]},
  {id:"RDI-026",name:"Metal Engineering and Innovation Center",host:"Surigao del Norte State University",prov:"Surigao del Norte",fame:["Mining"],pbbm:["PBBM-03","PBBM-05"],sdg:["SDG-09"]},
  {id:"RDI-027",name:"Technology and Business Incubation Center (WAVES TBI)",host:"Surigao del Norte State University",prov:"Surigao del Norte",fame:["Cross-Cutting"],pbbm:["PBBM-03","PBBM-04","PBBM-05"],sdg:["SDG-08","SDG-09"]},
  {id:"RDI-028",name:"Research Center for Continuing Education and Professional Development (RCCEPD)",host:"North Eastern Mindanao State University",prov:"Surigao del Sur",fame:["Cross-Cutting"],pbbm:["PBBM-05"],sdg:["SDG-04","SDG-08","SDG-17"]},
  {id:"RDI-029",name:"Research Center for Industrial Technology and Renewable Energy (RCITRE)",host:"North Eastern Mindanao State University",prov:"Surigao del Sur",fame:["Cross-Cutting"],pbbm:["PBBM-04","PBBM-07"],sdg:["SDG-07","SDG-09","SDG-13"]},
  {id:"RDI-030",name:"Research Center for Climate-Smart Agriculture (RCC-SA)",host:"North Eastern Mindanao State University",prov:"Surigao del Sur",fame:["Agroforestry"],pbbm:["PBBM-07","PBBM-08"],sdg:["SDG-02","SDG-13","SDG-15"]},
  {id:"RDI-031",name:"Tourism and SMEs Innovation Research Center (TSMEIRC)",host:"North Eastern Mindanao State University",prov:"Surigao del Sur",fame:["Ecotourism"],pbbm:["PBBM-03","PBBM-05"],sdg:["SDG-08","SDG-11"]},
  {id:"RDI-032",name:"Center of Research for Aquamarine Life Sustainability (CoRALS)",host:"North Eastern Mindanao State University",prov:"Surigao del Sur",fame:["Fishery"],pbbm:["PBBM-07","PBBM-08"],sdg:["SDG-02","SDG-13","SDG-14"]},
  {id:"RDI-033",name:"Food and Farming Technology Research Center (FFTRC)",host:"North Eastern Mindanao State University",prov:"Surigao del Sur",fame:["Agroforestry"],pbbm:["PBBM-03","PBBM-08"],sdg:["SDG-02","SDG-08","SDG-12"]},
  {id:"RDI-034",name:"Agro-Forestry Industrial Research Center (AFIRC)",host:"North Eastern Mindanao State University",prov:"Surigao del Sur",fame:["Agroforestry"],pbbm:["PBBM-03","PBBM-07"],sdg:["SDG-09","SDG-13","SDG-15"]},
  {id:"RDI-035",name:"Food Innovation Center — North Eastern Mindanao State University",host:"North Eastern Mindanao State University",prov:"Surigao del Sur",fame:["Fishery","Agroforestry"],pbbm:["PBBM-03","PBBM-05","PBBM-08"],sdg:["SDG-02","SDG-09","SDG-12"]},
  {id:"RDI-036",name:"Center for Aquasilviculture and Coastal Ecosystem Studies (CACES)",host:"North Eastern Mindanao State University",prov:"Surigao del Sur",fame:["Fishery"],pbbm:["PBBM-07","PBBM-08"],sdg:["SDG-13","SDG-14","SDG-15"]},
  {id:"RDI-037",name:"Center for Local Leadership and Governance (CLLG)",host:"North Eastern Mindanao State University",prov:"Surigao del Sur",fame:["Cross-Cutting"],pbbm:["PBBM-04","PBBM-05"],sdg:["SDG-16","SDG-17"]},
  {id:"RDI-038",name:"Center for Instructional Innovation and Development (CIID)",host:"North Eastern Mindanao State University",prov:"Surigao del Sur",fame:["Cross-Cutting"],pbbm:["PBBM-05"],sdg:["SDG-04","SDG-09"]},
  {id:"RDI-039",name:"SHINE Research Center",host:"North Eastern Mindanao State University",prov:"Surigao del Sur",fame:["Cross-Cutting"],pbbm:["PBBM-05","PBBM-06"],sdg:["SDG-13","SDG-15","SDG-17"]},
  {id:"RDI-040",name:"Food Innovation Center — Agusan del Sur State University",host:"Agusan del Sur State University",prov:"Agusan del Sur",fame:["Fishery","Agroforestry"],pbbm:["PBBM-03","PBBM-05","PBBM-08"],sdg:["SDG-02","SDG-09","SDG-12"]},
  {id:"RDI-041",name:"ASPIRE Research Center",host:"Agusan del Sur State University",prov:"Agusan del Sur",fame:["Cross-Cutting"],pbbm:["PBBM-03","PBBM-04","PBBM-05"],sdg:["SDG-04","SDG-09"]},
  {id:"RDI-042",name:"Agri Technology Business Incubator (Agri TBI)",host:"Agusan del Sur State University",prov:"Agusan del Sur",fame:["Agroforestry"],pbbm:["PBBM-03","PBBM-04","PBBM-05"],sdg:["SDG-08","SDG-09"]},
  {id:"RDI-043",name:"Soils Laboratory — Agusan del Sur State University",host:"Agusan del Sur State University",prov:"Agusan del Sur",fame:["Agroforestry"],pbbm:["PBBM-05","PBBM-07","PBBM-08"],sdg:["SDG-09","SDG-15"]},
  {id:"RDI-044",name:"Soils Laboratory — Provincial Government of Agusan del Sur",host:"Provincial Government of Agusan del Sur",prov:"Agusan del Sur",fame:["Agroforestry"],pbbm:["PBBM-05","PBBM-07","PBBM-08"],sdg:["SDG-09","SDG-15"]},
  {id:"RDI-045",name:"Innovation Hub (iHUB) — Agusan del Norte",host:"DOST Caraga",prov:"Agusan del Norte",fame:["Cross-Cutting"],pbbm:["PBBM-03","PBBM-04","PBBM-05"],sdg:["SDG-04","SDG-09"]},
  {id:"RDI-046",name:"Innovation Hub (iHUB) — Agusan del Sur",host:"DOST Caraga",prov:"Agusan del Sur",fame:["Cross-Cutting"],pbbm:["PBBM-03","PBBM-04","PBBM-05"],sdg:["SDG-04","SDG-09"]},
  {id:"RDI-047",name:"Innovation Hub (iHUB) — Dinagat Islands",host:"DOST Caraga",prov:"Dinagat Islands",fame:["Cross-Cutting"],pbbm:["PBBM-03","PBBM-04","PBBM-05"],sdg:["SDG-04","SDG-09"]},
  {id:"RDI-048",name:"Innovation Hub (iHUB) — Surigao del Norte",host:"DOST Caraga",prov:"Surigao del Norte",fame:["Cross-Cutting"],pbbm:["PBBM-03","PBBM-04","PBBM-05"],sdg:["SDG-04","SDG-09"]},
  {id:"RDI-049",name:"Innovation Hub (iHUB) — Surigao del Sur",host:"DOST Caraga",prov:"Surigao del Sur",fame:["Cross-Cutting"],pbbm:["PBBM-03","PBBM-04","PBBM-05"],sdg:["SDG-04","SDG-09"]},
  {id:"RDI-050",name:"iMAKE — Agusan National High School",host:"DOST Caraga",prov:"Agusan del Norte",fame:["Cross-Cutting"],pbbm:["PBBM-03","PBBM-04","PBBM-05"],sdg:["SDG-04","SDG-09"]},
  {id:"RDI-051",name:"iMAKE — Magallanes",host:"DOST Caraga",prov:"Agusan del Norte",fame:["Cross-Cutting"],pbbm:["PBBM-03","PBBM-04","PBBM-05"],sdg:["SDG-04","SDG-09"]},
  {id:"RDI-052",name:"iMAKE — Butuan City Library",host:"DOST Caraga",prov:"Agusan del Norte",fame:["Cross-Cutting"],pbbm:["PBBM-03","PBBM-04","PBBM-05"],sdg:["SDG-04","SDG-09"]},
  {id:"RDI-053",name:"iMAKE — Caraga Regional Science High School",host:"DOST Caraga",prov:"Surigao del Norte",fame:["Cross-Cutting"],pbbm:["PBBM-03","PBBM-04","PBBM-05"],sdg:["SDG-04","SDG-09"]},
  {id:"RDI-054",name:"iMAKE — Siargao",host:"DOST Caraga",prov:"Surigao del Norte",fame:["Cross-Cutting"],pbbm:["PBBM-03","PBBM-04","PBBM-05"],sdg:["SDG-04","SDG-09"]},
  {id:"RDI-055",name:"Provincial Research Innovation and Science Museum (PRISM)",host:"DOST Caraga",prov:"Surigao del Norte",fame:["Cross-Cutting"],pbbm:["PBBM-03","PBBM-04","PBBM-05"],sdg:["SDG-04","SDG-09"]},
  {id:"RDI-056",name:"iMAKE — Dinagat Islands",host:"DOST Caraga",prov:"Dinagat Islands",fame:["Cross-Cutting"],pbbm:["PBBM-03","PBBM-04","PBBM-05"],sdg:["SDG-04","SDG-09"]},
  {id:"RDI-057",name:"iMAKE — Cantilan",host:"DOST Caraga",prov:"Surigao del Sur",fame:["Cross-Cutting"],pbbm:["PBBM-03","PBBM-04","PBBM-05"],sdg:["SDG-04","SDG-09"]},
  {id:"RDI-058",name:"Food Processing and Innovation Center",host:"DOST Caraga",prov:"Agusan del Norte",fame:["Agroforestry"],pbbm:["PBBM-03","PBBM-05","PBBM-08"],sdg:["SDG-02","SDG-09","SDG-12"]},
  {id:"RDI-059",name:"Bamboo Textile Fiber Innovation Hub",host:"DOST Caraga",prov:"Agusan del Norte",fame:["Agroforestry"],pbbm:["PBBM-03","PBBM-05","PBBM-07"],sdg:["SDG-08","SDG-09","SDG-13"]},
  {id:"RDI-060",name:"Mineral Processing Innovation Hub (MINERAL Hub)",host:"DOST Caraga",prov:"Agusan del Norte",fame:["Mining"],pbbm:["PBBM-03","PBBM-05"],sdg:["SDG-09"]}
];

// ── UTILITY FUNCTIONS ──
function fmt(n) {
  if (n >= 1e9) return '₱' + (n/1e9).toFixed(2) + 'B';
  if (n >= 1e6) return '₱' + (n/1e6).toFixed(2) + 'M';
  return '₱' + n.toLocaleString();
}

function fmtFull(n) {
  return '₱' + n.toLocaleString('en-PH', {minimumFractionDigits:2, maximumFractionDigits:2});
}

function countBy(arr, fn) {
  const m = {};
  arr.forEach(item => {
    const keys = fn(item);
    (Array.isArray(keys) ? keys : [keys]).forEach(k => {
      if (k) m[k] = (m[k] || 0) + 1;
    });
  });
  return m;
}

function sumCostBy(arr, fn) {
  const m = {};
  arr.forEach(item => {
    const k = fn(item);
    if (k) m[k] = (m[k] || 0) + item.cost;
  });
  return m;
}

function tagHTML(text, cls) {
  return `<span class="tag tag-${cls}">${text}</span>`;
}

// ── NAV FOOTER HTML BUILDER ──
function buildNav(activePage) {
  return `
<nav class="site-nav">
  <div class="nav-inner">
    <a href="index.html" class="nav-brand">
      <div class="nav-brand-mark">DC</div>
      <div>
        <div class="nav-brand-text">DOST Caraga (Region XII)</div>
        <div class="nav-brand-sub">Performance Review · FY 2024–2025</div>
      </div>
    </a>
    <ul class="nav-links">
      <li><a href="index.html" ${activePage==='home'?'class="active"':''}>Home</a></li>
      <li><a href="region-profile.html" ${activePage==='profile'?'class="active"':''}>Regional Profile</a></li>
      <li><a href="economic-profile.html" ${activePage==='economy'?'class="active"':''}>Economic Profile</a></li>
      <li><a href="sti-portfolio.html" ${activePage==='portfolio'?'class="active"':''}>STI Portfolio</a></li>
      <li class="nav-dropdown">
        <a href="#" ${['fourpillar','horizon','pbbm','sdg','fame','strategies'].includes(activePage)?'class="active"':''}>Frameworks</a>
        <div class="nav-dropdown-menu">
          <a href="framework-fourpillar.html" ${activePage==='fourpillar'?'style="color:var(--blue)!important"':''}>Four Pillar Outcomes</a>
          <a href="framework-horizon.html" ${activePage==='horizon'?'style="color:var(--blue)!important"':''}>3-Horizon Strategic Framework</a>
          <a href="framework-pbbm.html" ${activePage==='pbbm'?'style="color:var(--blue)!important"':''}>PBBM 8-Point Agenda</a>
          <a href="framework-sdg.html" ${activePage==='sdg'?'style="color:var(--blue)!important"':''}>SDG Alignment</a>
          <a href="framework-fame.html" ${activePage==='fame'?'style="color:var(--blue)!important"':''}>FAME Sectors</a>
          <a href="framework-strategies.html" ${activePage==='strategies'?'style="color:var(--blue)!important"':''}>DOST Strategies</a>
        </div>
      </li>
      <li><a href="data-explorer.html" ${activePage==='data'?'class="active"':''}>Data Explorer</a></li>
      <li><a href="provinces.html" ${activePage==='provinces'?'class="active"':''}>Provinces</a></li>
    </ul>
  </div>
</nav>`;
}

function buildFooter() {
  return `
<footer class="site-footer">
  <div class="footer-inner">
    <div class="footer-left">
      <strong>Department of Science and Technology — Caraga Region (Region XIII)</strong><br>
      Performance Review Dashboard · Fiscal Years 2024–2025 · Prepared for the Regional Evaluation Panel
    </div>
    <ul class="footer-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="region-profile.html">Regional Profile</a></li>
      <li><a href="economic-profile.html">Economic Profile</a></li>
      <li><a href="sti-portfolio.html">STI Portfolio</a></li>
      <li><a href="data-explorer.html">Data Explorer</a></li>
      <li><a href="provinces.html">Provinces</a></li>
    </ul>
  </div>
</footer>`;
}


// Load the Helix chatbot on every page that includes this shared script.
(function injectHelixWidget() {
  const src = 'https://helix.dostcaraga.ph/api/public/widget.js?v=20260513-session-cache';
  if (document.querySelector(`script[src="${src}"]`)) return;

  const script = document.createElement('script');
  script.src = src;
  script.defer = true;
  script.setAttribute('data-public-key', 'pbk_OXrOTidZjaSY6oxhMp4YK7QZpyvDAAwkCdy9xB4rHGiKCrEZ');
  script.setAttribute('data-origin', 'https://helix.dostcaraga.ph');
  script.setAttribute('data-cache-minutes', '10');
  document.head.appendChild(script);
})();
