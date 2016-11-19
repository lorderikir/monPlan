$(document).ready(function(){
  var content = [
    {
      "title": "ACB1100",
      "description": "Introduction to financial accounting",
      "Faculty": "buseco"
    },
    {
      "title": "ACB1200",
      "description": "Accounting for managers",
      "Faculty": "buseco"
    },
    {
      "title": "ACB2020",
      "description": "Cost information for decision making",
      "Faculty": "buseco"
    },
    {
      "title": "ACB2491",
      "description": "Company reporting",
      "Faculty": "buseco"
    },
    {
      "title": "ACB2851",
      "description": "Accounting information systems and financial modelling",
      "Faculty": "buseco"
    },
    {
      "title": "ACB3021",
      "description": "Performance measurement and control",
      "Faculty": "buseco"
    },
    {
      "title": "ACB3041",
      "description": "Auditing and assurance",
      "Faculty": "buseco"
    },
    {
      "title": "ACB3050",
      "description": "Advanced financial accounting theory and issues",
      "Faculty": "buseco"
    },
    {
      "title": "ACC1100",
      "description": "Introduction to financial accounting",
      "Faculty": "buseco"
    },
    {
      "title": "ACC1200",
      "description": "Accounting for managers",
      "Faculty": "buseco"
    },
    {
      "title": "ACC2100",
      "description": "Financial accounting",
      "Faculty": "buseco"
    },
    {
      "title": "ACC2200",
      "description": "Introduction to management accounting",
      "Faculty": "buseco"
    },
    {
      "title": "ACC2400",
      "description": "Accounting information systems",
      "Faculty": "buseco"
    },
    {
      "title": "ACC2888",
      "description": "Industry-based learning period A",
      "Faculty": "buseco"
    },
    {
      "title": "ACC3100",
      "description": "Advanced financial accounting",
      "Faculty": "buseco"
    },
    {
      "title": "ACC3200",
      "description": "Management accounting",
      "Faculty": "buseco"
    },
    {
      "title": "ACC3600",
      "description": "Auditing and assurance",
      "Faculty": "buseco"
    },
    {
      "title": "ACC3888",
      "description": "Industry-based learning period B",
      "Faculty": "buseco"
    },
    {
      "title": "ACC5903",
      "description": "Accounting for business",
      "Faculty": "buseco"
    },
    {
      "title": "ACF1100",
      "description": "Introduction to financial accounting",
      "Faculty": "buseco"
    },
    {
      "title": "ACF1200",
      "description": "Accounting for managers",
      "Faculty": "buseco"
    },
    {
      "title": "ACF2100",
      "description": "Financial accounting",
      "Faculty": "buseco"
    },
    {
      "title": "ACF2200",
      "description": "Introduction to management accounting",
      "Faculty": "buseco"
    },
    {
      "title": "ACF2400",
      "description": "Accounting information systems",
      "Faculty": "buseco"
    },
    {
      "title": "ACF3100",
      "description": "Advanced financial accounting",
      "Faculty": "buseco"
    },
    {
      "title": "ACF3200",
      "description": "Management accounting",
      "Faculty": "buseco"
    },
    {
      "title": "ACF3600",
      "description": "Auditing and assurance",
      "Faculty": "buseco"
    },
    {
      "title": "ACF3900",
      "description": "Global issues in accounting",
      "Faculty": "buseco"
    },
    {
      "title": "ACF5001",
      "description": "Research project in accounting",
      "Faculty": "buseco"
    },
    {
      "title": "ACF5080",
      "description": "Management control systems",
      "Faculty": "buseco"
    },
    {
      "title": "ACF5100",
      "description": "Strategic management accounting",
      "Faculty": "buseco"
    },
    {
      "title": "ACF5120",
      "description": "Forensic accounting and fraud examination",
      "Faculty": "buseco"
    },
    {
      "title": "ACF5130",
      "description": "Financial statement analysis and business valuation",
      "Faculty": "buseco"
    },
    {
      "title": "ACF5150",
      "description": "Financial reporting issues",
      "Faculty": "buseco"
    },
    {
      "title": "ACF5268",
      "description": "Accounting for healthcare managers",
      "Faculty": "buseco"
    },
    {
      "title": "ACF5320",
      "description": "Business analytics",
      "Faculty": "buseco"
    },
    {
      "title": "ACF5330",
      "description": "Integrated systems for business enterprises",
      "Faculty": "buseco"
    },
    {
      "title": "ACF5350",
      "description": "Applied contemporary accounting",
      "Faculty": "buseco"
    },
    {
      "title": "ACF5510",
      "description": "Integrated accounting",
      "Faculty": "buseco"
    },
    {
      "title": "ACF5903",
      "description": "Accounting for business",
      "Faculty": "buseco"
    },
    {
      "title": "ACF5904",
      "description": "Accounting information systems",
      "Faculty": "buseco"
    },
    {
      "title": "ACF5950",
      "description": "Introductory accounting",
      "Faculty": "buseco"
    },
    {
      "title": "ACF5953",
      "description": "Financial accounting",
      "Faculty": "buseco"
    },
    {
      "title": "ACF5955",
      "description": "Management accounting",
      "Faculty": "buseco"
    },
    {
      "title": "ACF5956",
      "description": "Advanced financial accounting",
      "Faculty": "buseco"
    },
    {
      "title": "ACF5957",
      "description": "Auditing and assurance",
      "Faculty": "buseco"
    },
    {
      "title": "ACG2020",
      "description": "Cost information for decision making",
      "Faculty": "buseco"
    },
    {
      "title": "ACG2491",
      "description": "Company reporting",
      "Faculty": "buseco"
    },
    {
      "title": "ACG2851",
      "description": "Accounting information systems and financial modelling",
      "Faculty": "buseco"
    },
    {
      "title": "ACG3021",
      "description": "Performance measurement and control",
      "Faculty": "buseco"
    },
    {
      "title": "ACG3041",
      "description": "Auditing and assurance",
      "Faculty": "buseco"
    },
    {
      "title": "ACG3050",
      "description": "Advanced financial accounting theory and issues",
      "Faculty": "buseco"
    },
    {
      "title": "ACG5973",
      "description": "Financial accounting",
      "Faculty": "buseco"
    },
    {
      "title": "ACM5903",
      "description": "Accounting for business",
      "Faculty": "buseco"
    },
    {
      "title": "ACP1100",
      "description": "Introduction to financial accounting",
      "Faculty": "buseco"
    },
    {
      "title": "ACP1200",
      "description": "Accounting for managers",
      "Faculty": "buseco"
    },
    {
      "title": "ACP2851",
      "description": "Business information and systems",
      "Faculty": "buseco"
    },
    {
      "title": "ACS1000",
      "description": "Principles of accounting and finance",
      "Faculty": "buseco"
    },
    {
      "title": "ACS1002",
      "description": "Introduction to financial accounting",
      "Faculty": "buseco"
    },
    {
      "title": "ACS2700",
      "description": "Ethics and business",
      "Faculty": "buseco"
    },
    {
      "title": "ACS2730",
      "description": "Financial accounting A",
      "Faculty": "buseco"
    },
    {
      "title": "ACS2740",
      "description": "Financial accounting B",
      "Faculty": "buseco"
    },
    {
      "title": "ACS2760",
      "description": "Auditing A",
      "Faculty": "buseco"
    },
    {
      "title": "ACS2770",
      "description": "Cost and management accounting A",
      "Faculty": "buseco"
    },
    {
      "title": "ACS3730",
      "description": "Financial accounting C",
      "Faculty": "buseco"
    },
    {
      "title": "ACS3740",
      "description": "Financial accounting D",
      "Faculty": "buseco"
    },
    {
      "title": "ACS3750",
      "description": "Cost and management accounting B",
      "Faculty": "buseco"
    },
    {
      "title": "ACS3765",
      "description": "Auditing C",
      "Faculty": "buseco"
    },
    {
      "title": "ACS3770",
      "description": "Auditing B",
      "Faculty": "buseco"
    },
    {
      "title": "ACW1100",
      "description": "Introduction to financial accounting",
      "Faculty": "buseco"
    },
    {
      "title": "ACW1200",
      "description": "Accounting for managers",
      "Faculty": "buseco"
    },
    {
      "title": "ACW2020",
      "description": "Cost information for decision making",
      "Faculty": "buseco"
    },
    {
      "title": "ACW2491",
      "description": "Financial accounting",
      "Faculty": "buseco"
    },
    {
      "title": "ACW2522",
      "description": "Accounting for Islamic financial institutions",
      "Faculty": "buseco"
    },
    {
      "title": "ACW2851",
      "description": "Accounting information systems and financial modelling",
      "Faculty": "buseco"
    },
    {
      "title": "ACW3021",
      "description": "Performance measurement and control",
      "Faculty": "buseco"
    },
    {
      "title": "ACW3040",
      "description": "Accounting theory",
      "Faculty": "buseco"
    },
    {
      "title": "ACW3041",
      "description": "Auditing and assurance",
      "Faculty": "buseco"
    },
    {
      "title": "ACW3050",
      "description": "Advanced financial accounting theory and issues",
      "Faculty": "buseco"
    },
    {
      "title": "ACX2900",
      "description": "Accounting for sustainability",
      "Faculty": "buseco"
    },
    {
      "title": "ACX3150",
      "description": "Financial analysis and valuation",
      "Faculty": "buseco"
    },
    {
      "title": "ACX3250",
      "description": "Advanced management accounting",
      "Faculty": "buseco"
    },
    {
      "title": "ACX3500",
      "description": "International study program in accounting",
      "Faculty": "buseco"
    },
    {
      "title": "ACX4000",
      "description": "Research methods",
      "Faculty": "buseco"
    },
    {
      "title": "ACX4018",
      "description": "Honours research thesis",
      "Faculty": "buseco"
    },
    {
      "title": "ACX4040",
      "description": "Issues in accounting information systems",
      "Faculty": "buseco"
    },
    {
      "title": "ACX4050",
      "description": "Issues in auditing and assurance",
      "Faculty": "buseco"
    },
    {
      "title": "ACX4070",
      "description": "Issues in financial accounting",
      "Faculty": "buseco"
    },
    {
      "title": "ACX4090",
      "description": "Issues in management accounting",
      "Faculty": "buseco"
    },
    {
      "title": "ACX4150",
      "description": "Empirical research in analysis of financial statements",
      "Faculty": "buseco"
    },
    {
      "title": "ACX4190",
      "description": "Behavioural research in accounting",
      "Faculty": "buseco"
    },
    {
      "title": "ACX5951",
      "description": "International study program in accounting",
      "Faculty": "buseco"
    },
    {
      "title": "ADA1111",
      "description": "Design thinking",
      "Faculty": "ada"
    },
    {
      "title": "ADA2001",
      "description": "Interdisciplinary studio 1",
      "Faculty": "ada"
    },
    {
      "title": "ADA3001",
      "description": "Interdisciplinary studio 2",
      "Faculty": "ada"
    },
    {
      "title": "ADA3111",
      "description": "Design thinking",
      "Faculty": "ada"
    },
    {
      "title": "ADA4001",
      "description": "Interdisciplinary studio 3",
      "Faculty": "ada"
    },
    {
      "title": "ADA4111",
      "description": "Design thinking advanced",
      "Faculty": "ada"
    },
    {
      "title": "ADA4500",
      "description": "Design thinking approaches",
      "Faculty": "ada"
    },
    {
      "title": "ADA5001",
      "description": "Interdisciplinary studio 4",
      "Faculty": "ada"
    },
    {
      "title": "ADD5091",
      "description": "Research methods 1",
      "Faculty": "ada"
    },
    {
      "title": "ADD5092",
      "description": "Research methods 2",
      "Faculty": "ada"
    },
    {
      "title": "ADD6093",
      "description": "Research documentation",
      "Faculty": "ada"
    },
    {
      "title": "ADM5001",
      "description": "Research methods",
      "Faculty": "ada"
    },
    {
      "title": "ADM5002",
      "description": "Theory workshop",
      "Faculty": "ada"
    },
    {
      "title": "AHT1101",
      "description": "Introduction to visual culture in Art Design & Architecture",
      "Faculty": "ada"
    },
    {
      "title": "AHT1102",
      "description": "Modernism and the avant-garde",
      "Faculty": "ada"
    },
    {
      "title": "AHT2001",
      "description": "Art writing and criticism",
      "Faculty": "ada"
    },
    {
      "title": "AHT2011",
      "description": "Baroque to enlightenment: European art before modernism",
      "Faculty": "ada"
    },
    {
      "title": "AHT2025",
      "description": "The body in contemporary art",
      "Faculty": "ada"
    },
    {
      "title": "AHT2102",
      "description": "International art 1945-1990",
      "Faculty": "ada"
    },
    {
      "title": "AHT2105",
      "description": "Contemporary international art",
      "Faculty": "ada"
    },
    {
      "title": "AHT2120",
      "description": "Art and social change",
      "Faculty": "ada"
    },
    {
      "title": "AHT2130",
      "description": "Renaissance to Baroque: Italian art and architecture in context",
      "Faculty": "ada"
    },
    {
      "title": "AHT2136",
      "description": "Contemporary art fieldwork: context and site",
      "Faculty": "ada"
    },
    {
      "title": "AHT2137",
      "description": "Art and the moving image",
      "Faculty": "ada"
    },
    {
      "title": "AHT2138",
      "description": "Space, place and society",
      "Faculty": "ada"
    },
    {
      "title": "AHT2207",
      "description": "Popular culture",
      "Faculty": "ada"
    },
    {
      "title": "AHT2440",
      "description": "Photography: History and theory",
      "Faculty": "ada"
    },
    {
      "title": "AHT2530",
      "description": "Neo-Baroque aesthetics: History and theory",
      "Faculty": "ada"
    },
    {
      "title": "AHT2602",
      "description": "Art criticism and curatorship",
      "Faculty": "ada"
    },
    {
      "title": "AHT2712",
      "description": "Curating: Histories and theories",
      "Faculty": "ada"
    },
    {
      "title": "AHT2722",
      "description": "Curating: Practices",
      "Faculty": "ada"
    },
    {
      "title": "AHT2740",
      "description": "Australian art",
      "Faculty": "ada"
    },
    {
      "title": "AHT2801",
      "description": "The medium in contemporary art",
      "Faculty": "ada"
    },
    {
      "title": "AHT3001",
      "description": "Art writing and criticism",
      "Faculty": "ada"
    },
    {
      "title": "AHT3011",
      "description": "Baroque to enlightenment: European art before modernism",
      "Faculty": "ada"
    },
    {
      "title": "AHT3025",
      "description": "The body in contemporary art",
      "Faculty": "ada"
    },
    {
      "title": "AHT3102",
      "description": "International art 1945-1990",
      "Faculty": "ada"
    },
    {
      "title": "AHT3105",
      "description": "Contemporary international art",
      "Faculty": "ada"
    },
    {
      "title": "AHT3109",
      "description": "Constructing art in Australia: colonialism to postcolonialism",
      "Faculty": "ada"
    },
    {
      "title": "AHT3120",
      "description": "Art and social change",
      "Faculty": "ada"
    },
    {
      "title": "AHT3130",
      "description": "Renaissance to Baroque: Italian art and architecture in context",
      "Faculty": "ada"
    },
    {
      "title": "AHT3137",
      "description": "Art and the moving image",
      "Faculty": "ada"
    },
    {
      "title": "AHT3138",
      "description": "Space, place and society",
      "Faculty": "ada"
    },
    {
      "title": "AHT3150",
      "description": "Project studies",
      "Faculty": "ada"
    },
    {
      "title": "AHT3207",
      "description": "Popular culture",
      "Faculty": "ada"
    },
    {
      "title": "AHT3440",
      "description": "Photography: History and theory",
      "Faculty": "ada"
    },
    {
      "title": "AHT3530",
      "description": "Neo-Baroque aesthetics: History and theory",
      "Faculty": "ada"
    },
    {
      "title": "AHT3602",
      "description": "Art Criticism and Curatorship",
      "Faculty": "ada"
    },
    {
      "title": "AHT3712",
      "description": "Curating: Histories and theories",
      "Faculty": "ada"
    },
    {
      "title": "AHT3722",
      "description": "Curating: Practices",
      "Faculty": "ada"
    },
    {
      "title": "AHT3740",
      "description": "Australian art",
      "Faculty": "ada"
    },
    {
      "title": "AHT3801",
      "description": "The medium in contemporary art",
      "Faculty": "ada"
    },
    {
      "title": "AHT4002(A)",
      "description": "Minor Thesis Part 1",
      "Faculty": "ada"
    },
    {
      "title": "AHT4002(B)",
      "description": "Minor Thesis Part 2",
      "Faculty": "ada"
    },
    {
      "title": "AHT4012",
      "description": "Visual culture and its theories",
      "Faculty": "ada"
    },
    {
      "title": "AHT4025",
      "description": "Visual culture internship",
      "Faculty": "ada"
    },
    {
      "title": "AHT4076",
      "description": "Australian postmodernism",
      "Faculty": "ada"
    },
    {
      "title": "AHT4100",
      "description": "Theory reading unit",
      "Faculty": "ada"
    },
    {
      "title": "AHT4111",
      "description": "Project studies. Art history and theory honours",
      "Faculty": "ada"
    },
    {
      "title": "AHT4112",
      "description": "Major project - Art history and theory honours",
      "Faculty": "ada"
    },
    {
      "title": "AHT4200",
      "description": "Advanced art theory reading unit",
      "Faculty": "ada"
    },
    {
      "title": "AHT4406",
      "description": "Curating internship",
      "Faculty": "ada"
    },
    {
      "title": "AHT4503",
      "description": "Advanced art theory",
      "Faculty": "ada"
    },
    {
      "title": "AHT4504",
      "description": "Art theory research seminar",
      "Faculty": "ada"
    },
    {
      "title": "AMG5018",
      "description": "Celebrity, fashion, publicity",
      "Faculty": "arts"
    },
    {
      "title": "AMG5382",
      "description": "Contemporary issues in Asia",
      "Faculty": "arts"
    },
    {
      "title": "AMG5400",
      "description": "Global digital media: Issues in international and transnational communication",
      "Faculty": "arts"
    },
    {
      "title": "AMG5409",
      "description": "Communication research",
      "Faculty": "arts"
    },
    {
      "title": "AMG5721",
      "description": "Media practices in Southeast Asia",
      "Faculty": "arts"
    },
    {
      "title": "AMG5742",
      "description": "Communications research project",
      "Faculty": "arts"
    },
    {
      "title": "AMG5743",
      "description": "Communications research thesis",
      "Faculty": "arts"
    },
    {
      "title": "AMG5751",
      "description": "Communications industry internship",
      "Faculty": "arts"
    },
    {
      "title": "AMG5894",
      "description": "Communications theories and practices",
      "Faculty": "arts"
    },
    {
      "title": "AMU1017",
      "description": "Academic literacies",
      "Faculty": "arts"
    },
    {
      "title": "AMU1018",
      "description": "Learning in higher education",
      "Faculty": "arts"
    },
    {
      "title": "AMU1277",
      "description": "Media studies",
      "Faculty": "arts"
    },
    {
      "title": "AMU1278",
      "description": "Communication technologies and practices",
      "Faculty": "arts"
    },
    {
      "title": "AMU1304",
      "description": "Television studies: Forms and approaches",
      "Faculty": "arts"
    },
    {
      "title": "AMU1305",
      "description": "Film studies: Forms and approaches",
      "Faculty": "arts"
    },
    {
      "title": "AMU1309",
      "description": "Introduction to sexuality studies",
      "Faculty": "arts"
    },
    {
      "title": "AMU1310",
      "description": "Introduction to gender studies",
      "Faculty": "arts"
    },
    {
      "title": "AMU1325",
      "description": "Introduction to world politics and history",
      "Faculty": "arts"
    },
    {
      "title": "AMU1326",
      "description": "Transformation from above: Globalisation and the state",
      "Faculty": "arts"
    },
    {
      "title": "AMU1328",
      "description": "Introduction to journalism",
      "Faculty": "arts"
    },
    {
      "title": "AMU1329",
      "description": "Broadcast journalism",
      "Faculty": "arts"
    },
    {
      "title": "AMU2140",
      "description": "States and markets",
      "Faculty": "arts"
    },
    {
      "title": "AMU2439",
      "description": "Youth and mobile media",
      "Faculty": "arts"
    },
    {
      "title": "AMU2448",
      "description": "Film genres",
      "Faculty": "arts"
    },
    {
      "title": "AMU2450",
      "description": "Contemporary media theory",
      "Faculty": "arts"
    },
    {
      "title": "AMU2453",
      "description": "Research methods in the social sciences",
      "Faculty": "arts"
    },
    {
      "title": "AMU2498",
      "description": "Contemporary fiction",
      "Faculty": "arts"
    },
    {
      "title": "AMU2625",
      "description": "Borders, people and identity: Migration in the 21st century",
      "Faculty": "arts"
    },
    {
      "title": "AMU2685",
      "description": "Malaysian studies",
      "Faculty": "arts"
    },
    {
      "title": "AMU2780",
      "description": "Radio news and current affairs",
      "Faculty": "arts"
    },
    {
      "title": "AMU2785",
      "description": "Media, power and reporting in Southeast Asia",
      "Faculty": "arts"
    },
    {
      "title": "AMU2787",
      "description": "Multimedia journalism",
      "Faculty": "arts"
    },
    {
      "title": "AMU2789",
      "description": "Video news and current affairs",
      "Faculty": "arts"
    },
    {
      "title": "AMU2814",
      "description": "Transforming community: Project design and public relations for social campaigns",
      "Faculty": "arts"
    },
    {
      "title": "AMU2832",
      "description": "Postcolonial and diasporic literature",
      "Faculty": "arts"
    },
    {
      "title": "AMU2906",
      "description": "Genders, sexualities and religions in Southeast Asia",
      "Faculty": "arts"
    },
    {
      "title": "AMU2907",
      "description": "Sexual and reproductive health and rights in global contexts",
      "Faculty": "arts"
    },
    {
      "title": "AMU2908",
      "description": "Critical methodologies for action research",
      "Faculty": "arts"
    },
    {
      "title": "AMU2920",
      "description": "Transformation from below: Civil, society, social movements and political change",
      "Faculty": "arts"
    },
    {
      "title": "AMU3127",
      "description": "Stardom: Celebrity, society and power",
      "Faculty": "arts"
    },
    {
      "title": "AMU3449",
      "description": "Reading social media: Sociotechnological literacies",
      "Faculty": "arts"
    },
    {
      "title": "AMU3451",
      "description": "Freedom and control in the media",
      "Faculty": "arts"
    },
    {
      "title": "AMU3499",
      "description": "Authorship and writing",
      "Faculty": "arts"
    },
    {
      "title": "AMU3560",
      "description": "Contemporary feminisms in Asia",
      "Faculty": "arts"
    },
    {
      "title": "AMU3570",
      "description": "International relations",
      "Faculty": "arts"
    },
    {
      "title": "AMU3575",
      "description": "Task force: Responding to global challenges",
      "Faculty": "arts"
    },
    {
      "title": "AMU3630",
      "description": "Governing the global economy: Stability, efficiency, justice",
      "Faculty": "arts"
    },
    {
      "title": "AMU3650",
      "description": "A world in crisis: Multilevel responses to global emergencies",
      "Faculty": "arts"
    },
    {
      "title": "AMU3744",
      "description": "Workplace learning internship",
      "Faculty": "arts"
    },
    {
      "title": "AMU3806",
      "description": "Business reporting",
      "Faculty": "arts"
    },
    {
      "title": "AMU3810",
      "description": "Understanding trends in global media",
      "Faculty": "arts"
    },
    {
      "title": "AMU3857",
      "description": "Writing techniques",
      "Faculty": "arts"
    },
    {
      "title": "AMU3858",
      "description": "Writing experiments",
      "Faculty": "arts"
    },
    {
      "title": "AMU4718",
      "description": "Arts honours dissertation 1",
      "Faculty": "arts"
    },
    {
      "title": "AMU4719",
      "description": "Arts honours dissertation 2",
      "Faculty": "arts"
    },
    {
      "title": "AMU4720",
      "description": "Research issues and methodology",
      "Faculty": "arts"
    },
    {
      "title": "AMU4727",
      "description": "Readings in social, political and cultural theory",
      "Faculty": "arts"
    },
    {
      "title": "ANT1800",
      "description": "Introduction to anatomy and medical terminology",
      "Faculty": "sci"
    },
    {
      "title": "APG4264",
      "description": "Criminal behaviours and enterprises: Individuals, groups and organisations",
      "Faculty": "arts"
    },
    {
      "title": "APG4287",
      "description": "War and peace: Models of conflict resolution",
      "Faculty": "arts"
    },
    {
      "title": "APG4314",
      "description": "Seeking justice: South Africa and Rwanda",
      "Faculty": "arts"
    },
    {
      "title": "APG4416",
      "description": "Crime prevention: A global perspective",
      "Faculty": "arts"
    },
    {
      "title": "APG4417",
      "description": "Policing, security and risk management",
      "Faculty": "arts"
    },
    {
      "title": "APG4421",
      "description": "Dramatic theory, criticism and research methods",
      "Faculty": "arts"
    },
    {
      "title": "APG4423",
      "description": "Performance investigation",
      "Faculty": "arts"
    },
    {
      "title": "APG4553",
      "description": "Field studies in regional sustainability",
      "Faculty": "arts"
    },
    {
      "title": "APG4554",
      "description": "Resource evaluation and management",
      "Faculty": "arts"
    },
    {
      "title": "APG4556",
      "description": "Urbanisation and regional development in the Indo-Pacific rims",
      "Faculty": "arts"
    },
    {
      "title": "APG4571",
      "description": "Human services management: Structure and context",
      "Faculty": "arts"
    },
    {
      "title": "APG4572",
      "description": "Human services management: Principles and process",
      "Faculty": "arts"
    },
    {
      "title": "APG4618",
      "description": "Researching histories",
      "Faculty": "arts"
    },
    {
      "title": "APG4677",
      "description": "Theory and practice in sociology",
      "Faculty": "arts"
    },
    {
      "title": "APG4681",
      "description": "Social research practice",
      "Faculty": "arts"
    },
    {
      "title": "APG4761",
      "description": "Program planning and evaluation in the human services",
      "Faculty": "arts"
    },
    {
      "title": "APG4762",
      "description": "Management and leadership in the human services",
      "Faculty": "arts"
    },
    {
      "title": "APG4763",
      "description": "Human services research methods",
      "Faculty": "arts"
    },
    {
      "title": "APG4789",
      "description": "Research methods in music",
      "Faculty": "arts"
    },
    {
      "title": "APG4809",
      "description": "Advocacy for community rights",
      "Faculty": "arts"
    },
    {
      "title": "APG4823",
      "description": "Water management project management",
      "Faculty": "arts"
    },
    {
      "title": "APG4824",
      "description": "Science of water",
      "Faculty": "arts"
    },
    {
      "title": "APG4825",
      "description": "Water, sustainability and development",
      "Faculty": "arts"
    },
    {
      "title": "APG4826",
      "description": "Water governance and policy",
      "Faculty": "arts"
    },
    {
      "title": "APG5018",
      "description": "Celebrity, fashion, publicity",
      "Faculty": "arts"
    },
    {
      "title": "APG5042",
      "description": "Practices of teaching Englishes for intercultural communication",
      "Faculty": "arts"
    },
    {
      "title": "APG5043",
      "description": "Language in society",
      "Faculty": "arts"
    },
    {
      "title": "APG5044",
      "description": "Professional internship",
      "Faculty": "arts"
    },
    {
      "title": "APG5045",
      "description": "Gender and development",
      "Faculty": "arts"
    },
    {
      "title": "APG5046",
      "description": "General linguistics",
      "Faculty": "arts"
    },
    {
      "title": "APG5047",
      "description": "Issues in teaching English as an international language",
      "Faculty": "arts"
    },
    {
      "title": "APG5048",
      "description": "Translation for special purposes",
      "Faculty": "arts"
    },
    {
      "title": "APG5049",
      "description": "Theory and practice of interpreting",
      "Faculty": "arts"
    },
    {
      "title": "APG5050",
      "description": "Communication research methods",
      "Faculty": "arts"
    },
    {
      "title": "APG5051",
      "description": "Special topics in bioethics",
      "Faculty": "arts"
    },
    {
      "title": "APG5054",
      "description": "Research methods for development practice and change",
      "Faculty": "arts"
    },
    {
      "title": "APG5064",
      "description": "Gender, security and conflict",
      "Faculty": "arts"
    },
    {
      "title": "APG5065",
      "description": "Governing migration: Refugees, borders and development",
      "Faculty": "arts"
    },
    {
      "title": "APG5066",
      "description": "Shanghai city lab",
      "Faculty": "arts"
    },
    {
      "title": "APG5067",
      "description": "Cultural economy and sustainable development",
      "Faculty": "arts"
    },
    {
      "title": "APG5068",
      "description": "Creative cities",
      "Faculty": "arts"
    },
    {
      "title": "APG5072",
      "description": "Art worlds",
      "Faculty": "arts"
    },
    {
      "title": "APG5080",
      "description": "Bioethics and the body",
      "Faculty": "arts"
    },
    {
      "title": "APG5081",
      "description": "Public health ethics",
      "Faculty": "arts"
    },
    {
      "title": "APG5087",
      "description": "Introduction to disaster preparedness and management",
      "Faculty": "arts"
    },
    {
      "title": "APG5089",
      "description": "Responding to international disasters and humanitarian crises",
      "Faculty": "arts"
    },
    {
      "title": "APG5092",
      "description": "Human rights in global politics",
      "Faculty": "arts"
    },
    {
      "title": "APG5094",
      "description": "Global jihad?",
      "Faculty": "arts"
    },
    {
      "title": "APG5095",
      "description": "Research and writing",
      "Faculty": "arts"
    },
    {
      "title": "APG5099",
      "description": "Media innovation",
      "Faculty": "arts"
    },
    {
      "title": "APG5135",
      "description": "Video journalism",
      "Faculty": "arts"
    },
    {
      "title": "APG5180",
      "description": "Policy and political communication",
      "Faculty": "arts"
    },
    {
      "title": "APG5181",
      "description": "Intergovernmental relations",
      "Faculty": "arts"
    },
    {
      "title": "APG5182",
      "description": "Digital management and production",
      "Faculty": "arts"
    },
    {
      "title": "APG5183",
      "description": "International tourism marketing research project",
      "Faculty": "arts"
    },
    {
      "title": "APG5184",
      "description": "Video-making as research",
      "Faculty": "arts"
    },
    {
      "title": "APG5189",
      "description": "Monitoring and evaluation",
      "Faculty": "arts"
    },
    {
      "title": "APG5190",
      "description": "Global journalism: Hong Kong field school",
      "Faculty": "arts"
    },
    {
      "title": "APG5201",
      "description": "Intensive intermediate Indonesian for fieldwork",
      "Faculty": "arts"
    },
    {
      "title": "APG5202",
      "description": "Intensive introductory Indonesian for fieldwork",
      "Faculty": "arts"
    },
    {
      "title": "APG5207",
      "description": "Intensive introductory Spanish for fieldwork",
      "Faculty": "arts"
    },
    {
      "title": "APG5208",
      "description": "Intensive intermediate Spanish for fieldwork",
      "Faculty": "arts"
    },
    {
      "title": "APG5210",
      "description": "Bioethics theory and practice",
      "Faculty": "arts"
    },
    {
      "title": "APG5229",
      "description": "Prosperity, poverty and sustainability in a globalised world",
      "Faculty": "arts"
    },
    {
      "title": "APG5230",
      "description": "Ecosystems and environmental management",
      "Faculty": "arts"
    },
    {
      "title": "APG5264",
      "description": "Criminal behaviours and enterprises: Individuals, groups and organisations",
      "Faculty": "arts"
    },
    {
      "title": "APG5267",
      "description": "Hermeneutics",
      "Faculty": "arts"
    },
    {
      "title": "APG5272",
      "description": "Writers and the creative process",
      "Faculty": "arts"
    },
    {
      "title": "APG5290",
      "description": "Holocaust memories: Landscape, mourning, identity",
      "Faculty": "arts"
    },
    {
      "title": "APG5324",
      "description": "Advanced seminar in International political economy",
      "Faculty": "arts"
    },
    {
      "title": "APG5327",
      "description": "Wars of recognition: Terrorism and political violence",
      "Faculty": "arts"
    },
    {
      "title": "APG5332",
      "description": "Security and securitisation",
      "Faculty": "arts"
    },
    {
      "title": "APG5337",
      "description": "Governance and democratisation",
      "Faculty": "arts"
    },
    {
      "title": "APG5347",
      "description": "Research methods in applied linguistics",
      "Faculty": "arts"
    },
    {
      "title": "APG5348",
      "description": "Second language acquisition",
      "Faculty": "arts"
    },
    {
      "title": "APG5349",
      "description": "World Englishes",
      "Faculty": "arts"
    },
    {
      "title": "APG5372",
      "description": "Community development in a globalising world",
      "Faculty": "arts"
    },
    {
      "title": "APG5389",
      "description": "Tourism industry and marketing",
      "Faculty": "arts"
    },
    {
      "title": "APG5390",
      "description": "Contemporary tourism and development in emerging economies",
      "Faculty": "arts"
    },
    {
      "title": "APG5393",
      "description": "Ethics",
      "Faculty": "arts"
    },
    {
      "title": "APG5394",
      "description": "Questions of life and death",
      "Faculty": "arts"
    },
    {
      "title": "APG5397",
      "description": "Media, technologies and social change",
      "Faculty": "arts"
    },
    {
      "title": "APG5398",
      "description": "Digital media technologies",
      "Faculty": "arts"
    },
    {
      "title": "APG5400",
      "description": "Issues in international communications",
      "Faculty": "arts"
    },
    {
      "title": "APG5401",
      "description": "Media empires and entrepreneurs",
      "Faculty": "arts"
    },
    {
      "title": "APG5425",
      "description": "Perspectives on environment and sustainability",
      "Faculty": "arts"
    },
    {
      "title": "APG5426",
      "description": "Environmental analysis",
      "Faculty": "arts"
    },
    {
      "title": "APG5428",
      "description": "Environmental governance and citizenship",
      "Faculty": "arts"
    },
    {
      "title": "APG5433",
      "description": "Corporate sustainability management",
      "Faculty": "arts"
    },
    {
      "title": "APG5434",
      "description": "Sustainability measurement",
      "Faculty": "arts"
    },
    {
      "title": "APG5547",
      "description": "Studio production",
      "Faculty": "arts"
    },
    {
      "title": "APG5571",
      "description": "Human services management: Structure and context",
      "Faculty": "arts"
    },
    {
      "title": "APG5572",
      "description": "Human services management: Principles and process",
      "Faculty": "arts"
    },
    {
      "title": "APG5609",
      "description": "Sustainable tourism development and planning",
      "Faculty": "arts"
    },
    {
      "title": "APG5616",
      "description": "Conference interpreting",
      "Faculty": "arts"
    },
    {
      "title": "APG5617",
      "description": "Human research ethics",
      "Faculty": "arts"
    },
    {
      "title": "APG5627",
      "description": "Research in political ecology",
      "Faculty": "arts"
    },
    {
      "title": "APG5628",
      "description": "Doctrines of development",
      "Faculty": "arts"
    },
    {
      "title": "APG5640",
      "description": "Journalism in society",
      "Faculty": "arts"
    },
    {
      "title": "APG5642",
      "description": "Investigative journalism",
      "Faculty": "arts"
    },
    {
      "title": "APG5652",
      "description": "Language and intercultural communication",
      "Faculty": "arts"
    },
    {
      "title": "APG5653",
      "description": "Journalism futures: New York field school",
      "Faculty": "arts"
    },
    {
      "title": "APG5662",
      "description": "Cultural and creative industries",
      "Faculty": "arts"
    },
    {
      "title": "APG5666",
      "description": "Terrorism, counter-terrorism and intelligence",
      "Faculty": "arts"
    },
    {
      "title": "APG5667",
      "description": "Terrorism, fringe politics and extremist violence",
      "Faculty": "arts"
    },
    {
      "title": "APG5668",
      "description": "Advanced seminar in international relations",
      "Faculty": "arts"
    },
    {
      "title": "APG5671",
      "description": "New publishing media",
      "Faculty": "arts"
    },
    {
      "title": "APG5690",
      "description": "Applied translation",
      "Faculty": "arts"
    },
    {
      "title": "APG5702",
      "description": "Bilingualism",
      "Faculty": "arts"
    },
    {
      "title": "APG5703",
      "description": "Literacy",
      "Faculty": "arts"
    },
    {
      "title": "APG5704",
      "description": "Discourse analysis",
      "Faculty": "arts"
    },
    {
      "title": "APG5705",
      "description": "Language and identity",
      "Faculty": "arts"
    },
    {
      "title": "APG5717",
      "description": "Applied industry research and practice",
      "Faculty": "arts"
    },
    {
      "title": "APG5720",
      "description": "Cultural tourism and events management",
      "Faculty": "arts"
    },
    {
      "title": "APG5729",
      "description": "Clinical ethics",
      "Faculty": "arts"
    },
    {
      "title": "APG5730",
      "description": "Bioethics, public policy, and the law",
      "Faculty": "arts"
    },
    {
      "title": "APG5732",
      "description": "Ethical issues in professional life",
      "Faculty": "arts"
    },
    {
      "title": "APG5733",
      "description": "Health care ethics",
      "Faculty": "arts"
    },
    {
      "title": "APG5736",
      "description": "Criminal justice research project",
      "Faculty": "arts"
    },
    {
      "title": "APG5738",
      "description": "Criminal justice dissertation",
      "Faculty": "arts"
    },
    {
      "title": "APG5739",
      "description": "Criminal justice dissertation - Part 1",
      "Faculty": "arts"
    },
    {
      "title": "APG5740",
      "description": "Criminal justice dissertation - Part 2",
      "Faculty": "arts"
    },
    {
      "title": "APG5741",
      "description": "Supervised reading in criminal justice and criminology",
      "Faculty": "arts"
    },
    {
      "title": "APG5742",
      "description": "Communications research project",
      "Faculty": "arts"
    },
    {
      "title": "APG5752",
      "description": "Field trip in media and communications",
      "Faculty": "arts"
    },
    {
      "title": "APG5782",
      "description": "Film festival study tour",
      "Faculty": "arts"
    },
    {
      "title": "APG5786",
      "description": "Human services research methods",
      "Faculty": "arts"
    },
    {
      "title": "APG5804",
      "description": "Environmental revolutions",
      "Faculty": "arts"
    },
    {
      "title": "APG5805",
      "description": "Project planning and management in international development",
      "Faculty": "arts"
    },
    {
      "title": "APG5848",
      "description": "Research thesis",
      "Faculty": "arts"
    },
    {
      "title": "APG5849",
      "description": "Research thesis A",
      "Faculty": "arts"
    },
    {
      "title": "APG5850",
      "description": "Research thesis B",
      "Faculty": "arts"
    },
    {
      "title": "APG5856",
      "description": "Research project",
      "Faculty": "arts"
    },
    {
      "title": "APG5862",
      "description": "Publishing history, culture and commerce",
      "Faculty": "arts"
    },
    {
      "title": "APG5867",
      "description": "Research practicum",
      "Faculty": "arts"
    },
    {
      "title": "APG5868",
      "description": "Research practicum",
      "Faculty": "arts"
    },
    {
      "title": "APG5874",
      "description": "Practice of conference interpreting and translation",
      "Faculty": "arts"
    },
    {
      "title": "APG5875",
      "description": "Introduction to interpreting and translation studies",
      "Faculty": "arts"
    },
    {
      "title": "APG5876",
      "description": "Theoretical issues in literary and cultural translation",
      "Faculty": "arts"
    },
    {
      "title": "APG5881",
      "description": "Translation studies abroad 1",
      "Faculty": "arts"
    },
    {
      "title": "APG5882",
      "description": "Translation studies abroad 2",
      "Faculty": "arts"
    },
    {
      "title": "APG5883",
      "description": "Major translation project part 1",
      "Faculty": "arts"
    },
    {
      "title": "APG5884",
      "description": "Major translation project part 2",
      "Faculty": "arts"
    },
    {
      "title": "APG5885",
      "description": "Advanced interpreting",
      "Faculty": "arts"
    },
    {
      "title": "APG5894",
      "description": "Communications theories and practices",
      "Faculty": "arts"
    },
    {
      "title": "APG5900",
      "description": "Cultural economy",
      "Faculty": "arts"
    },
    {
      "title": "APG5980",
      "description": "Monash-Warwick University joint project",
      "Faculty": "arts"
    },
    {
      "title": "APG5990",
      "description": "Managing public sector organisations",
      "Faculty": "arts"
    },
    {
      "title": "APG5991",
      "description": "Choices and challenges for government in a market economy",
      "Faculty": "arts"
    },
    {
      "title": "APG5992",
      "description": "Delivering public value",
      "Faculty": "arts"
    },
    {
      "title": "APG5993",
      "description": "Designing public policies and programs",
      "Faculty": "arts"
    },
    {
      "title": "APG5994",
      "description": "Decision making under uncertainty",
      "Faculty": "arts"
    },
    {
      "title": "APG5995",
      "description": "Governing by the rules",
      "Faculty": "arts"
    },
    {
      "title": "APG5996",
      "description": "Leading public sector change",
      "Faculty": "arts"
    },
    {
      "title": "APR4702",
      "description": "Classical languages for researchers",
      "Faculty": "arts"
    },
    {
      "title": "APR6001",
      "description": "Bioethics theory and practice",
      "Faculty": "arts"
    },
    {
      "title": "APR6035",
      "description": "Advanced Research Methodologies in Media, Film and Journalism",
      "Faculty": "arts"
    },
    {
      "title": "APR6100",
      "description": "Film, Media and Communication Studies: The State of the Fields",
      "Faculty": "arts"
    },
    {
      "title": "ARC1001",
      "description": "Foundation studio 1",
      "Faculty": "ada"
    },
    {
      "title": "ARC1002",
      "description": "Foundation studio 2",
      "Faculty": "ada"
    },
    {
      "title": "ARC1102",
      "description": "Technologies and environments 1",
      "Faculty": "ada"
    },
    {
      "title": "ARC1301",
      "description": "Architecture communications 1",
      "Faculty": "ada"
    },
    {
      "title": "ARC1401",
      "description": "Introduction to architectural and visual cultures",
      "Faculty": "ada"
    },
    {
      "title": "ARC2001",
      "description": "Architecture Design Studio 3",
      "Faculty": "ada"
    },
    {
      "title": "ARC2002",
      "description": "Architecture Design Studio 4",
      "Faculty": "ada"
    },
    {
      "title": "ARC2101",
      "description": "Technologies and environments 2",
      "Faculty": "ada"
    },
    {
      "title": "ARC2301",
      "description": "Architecture communications 2",
      "Faculty": "ada"
    },
    {
      "title": "ARC2401",
      "description": "Contemporary architecture",
      "Faculty": "ada"
    },
    {
      "title": "ARC2402",
      "description": "19th and 20th century architecture",
      "Faculty": "ada"
    },
    {
      "title": "ARC3001",
      "description": "Architecture Design Studio 5",
      "Faculty": "ada"
    },
    {
      "title": "ARC3002",
      "description": "Architecture Design Studio 6",
      "Faculty": "ada"
    },
    {
      "title": "ARC3101",
      "description": "Technologies and environments 3",
      "Faculty": "ada"
    },
    {
      "title": "ARC3102",
      "description": "Integrated technologies, environments and professional studies",
      "Faculty": "ada"
    },
    {
      "title": "ARC3401",
      "description": "Architecture and the City",
      "Faculty": "ada"
    },
    {
      "title": "ARC3501",
      "description": "Advanced studies in architecture A",
      "Faculty": "ada"
    },
    {
      "title": "ARC3502",
      "description": "Advanced studies in architecture B",
      "Faculty": "ada"
    },
    {
      "title": "ARC4001",
      "description": "Advanced architecture project 1",
      "Faculty": "ada"
    },
    {
      "title": "ARC4002",
      "description": "Advanced architecture project 2",
      "Faculty": "ada"
    },
    {
      "title": "ARC4101",
      "description": "Integrated project- technologies, environments and professional practices",
      "Faculty": "ada"
    },
    {
      "title": "ARC4201",
      "description": "Professional studies 1",
      "Faculty": "ada"
    },
    {
      "title": "ARC4501",
      "description": "Advanced architecture studies 1",
      "Faculty": "ada"
    },
    {
      "title": "ARC4502",
      "description": "Advanced architecture studies 2",
      "Faculty": "ada"
    },
    {
      "title": "ARC5001",
      "description": "Advanced architecture project 3",
      "Faculty": "ada"
    },
    {
      "title": "ARC5002",
      "description": "Final architecture project",
      "Faculty": "ada"
    },
    {
      "title": "ARC5201",
      "description": "Professional practices",
      "Faculty": "ada"
    },
    {
      "title": "ARC5401",
      "description": "Architecture Research Methods",
      "Faculty": "ada"
    },
    {
      "title": "ARC5501",
      "description": "Advanced architecture studies 3",
      "Faculty": "ada"
    },
    {
      "title": "ARC5502",
      "description": "Advanced Studies in Architecture 4",
      "Faculty": "ada"
    },
    {
      "title": "ASC5001",
      "description": "Addiction science: A biopsychosocial overview",
      "Faculty": "med"
    },
    {
      "title": "ASC5002",
      "description": "Socio-cultural perspectives of addiction",
      "Faculty": "med"
    },
    {
      "title": "ASC5003",
      "description": "Addiction policies, prevention and public health",
      "Faculty": "med"
    },
    {
      "title": "ASC5004",
      "description": "Addiction assessment and treatment: Practice and innovation",
      "Faculty": "med"
    },
    {
      "title": "ASC5007",
      "description": "Recovery principles",
      "Faculty": "med"
    },
    {
      "title": "ASC5008",
      "description": "Co-occurring disorders in mental health and addiction",
      "Faculty": "med"
    },
    {
      "title": "ASC5009",
      "description": "Developmental factors: Children and families, youth and early interventions",
      "Faculty": "med"
    },
    {
      "title": "ASC5010",
      "description": "Gambling and other process addictions",
      "Faculty": "med"
    },
    {
      "title": "ASP1010",
      "description": "Earth to cosmos - introductory astronomy",
      "Faculty": "sci"
    },
    {
      "title": "ASP1022",
      "description": "Life in the universe - astrobiology",
      "Faculty": "sci"
    },
    {
      "title": "ASP2011",
      "description": "Astronomy",
      "Faculty": "sci"
    },
    {
      "title": "ASP2062",
      "description": "Introduction to astrophysics",
      "Faculty": "sci"
    },
    {
      "title": "ASP3012",
      "description": "Stars and galaxies",
      "Faculty": "sci"
    },
    {
      "title": "ASP3051",
      "description": "Relativity and cosmology",
      "Faculty": "sci"
    },
    {
      "title": "ASP3162",
      "description": "Computational astrophysics and the extreme universe",
      "Faculty": "sci"
    },
    {
      "title": "ASP3231",
      "description": "Observational astronomy",
      "Faculty": "sci"
    },
    {
      "title": "ASP4100",
      "description": "Astrophysics honours research project",
      "Faculty": "sci"
    },
    {
      "title": "ASP4110",
      "description": "Astrophysics honours research project - Part 1",
      "Faculty": "sci"
    },
    {
      "title": "ASP4120",
      "description": "Astrophysics honours research project - Part 2",
      "Faculty": "sci"
    },
    {
      "title": "ASP4200",
      "description": "Astrophysics honours coursework",
      "Faculty": "sci"
    },
    {
      "title": "ASP4210",
      "description": "Astrophysics honours coursework part 1",
      "Faculty": "sci"
    },
    {
      "title": "ASP4220",
      "description": "Astrophysics honours coursework part 2",
      "Faculty": "sci"
    },
    {
      "title": "ATM3040",
      "description": "Physical meteorology",
      "Faculty": "sci"
    },
    {
      "title": "ATM3050",
      "description": "Dynamical meteorology",
      "Faculty": "sci"
    },
    {
      "title": "ATS1001",
      "description": "Chinese introductory 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS1002",
      "description": "Chinese introductory 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS1020",
      "description": "Leadership for social change 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS1040",
      "description": "Religions and the modern world",
      "Faculty": "arts"
    },
    {
      "title": "ATS1041",
      "description": "World religions",
      "Faculty": "arts"
    },
    {
      "title": "ATS1044",
      "description": "Performance 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS1045",
      "description": "Performance 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS1046",
      "description": "Composition 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS1047",
      "description": "Composition 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS1048",
      "description": "Creative music technology 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS1049",
      "description": "Creative music technology 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS1061",
      "description": "French introductory 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS1062",
      "description": "French introductory 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS1089",
      "description": "Fundamentals of journalism",
      "Faculty": "arts"
    },
    {
      "title": "ATS1090",
      "description": "Practice of journalism",
      "Faculty": "arts"
    },
    {
      "title": "ATS1091",
      "description": "German introductory 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS1092",
      "description": "German introductory 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS1111",
      "description": "Indonesian 1: Biographies",
      "Faculty": "arts"
    },
    {
      "title": "ATS1112",
      "description": "Indonesian 2: Journeys and cultural encounters",
      "Faculty": "arts"
    },
    {
      "title": "ATS1141",
      "description": "Japanese introductory 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS1142",
      "description": "Japanese introductory 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS1171",
      "description": "Korean introductory 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS1172",
      "description": "Korean introductory 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS1189",
      "description": "Acting 1: Theory and practice",
      "Faculty": "arts"
    },
    {
      "title": "ATS1190",
      "description": "Acting 2: Theory and practice",
      "Faculty": "arts"
    },
    {
      "title": "ATS1191",
      "description": "Spanish introductory 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS1192",
      "description": "Spanish introductory 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS1203",
      "description": "Magic, science and spirituality",
      "Faculty": "arts"
    },
    {
      "title": "ATS1211",
      "description": "Ukrainian introductory 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS1212",
      "description": "Ukrainian introductory 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS1221",
      "description": "Italian introductory 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS1222",
      "description": "Italian introductory 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS1229",
      "description": "Intensive introductory Italian 1 (in country)",
      "Faculty": "arts"
    },
    {
      "title": "ATS1230",
      "description": "Intensive introductory Italian 2 (in country)",
      "Faculty": "arts"
    },
    {
      "title": "ATS1247",
      "description": "Ancient cultures 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS1248",
      "description": "Ancient cultures 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS1250",
      "description": "Social justice and Indigenous Australians",
      "Faculty": "arts"
    },
    {
      "title": "ATS1254",
      "description": "Culture, power and difference: Indigeneity and Australian identity",
      "Faculty": "arts"
    },
    {
      "title": "ATS1255",
      "description": "Encountering cultures: Introduction to anthropology 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS1259",
      "description": "Exploring contemporary Australia: People, events, ideas",
      "Faculty": "arts"
    },
    {
      "title": "ATS1261",
      "description": "Understanding human behaviour",
      "Faculty": "arts"
    },
    {
      "title": "ATS1262",
      "description": "Understanding social behaviour",
      "Faculty": "arts"
    },
    {
      "title": "ATS1263",
      "description": "Bioethics: Current controversies",
      "Faculty": "arts"
    },
    {
      "title": "ATS1264",
      "description": "Bioethics, justice and the law",
      "Faculty": "arts"
    },
    {
      "title": "ATS1267",
      "description": "Latin language 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS1269",
      "description": "Latin language 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS1279",
      "description": "Media and culture",
      "Faculty": "arts"
    },
    {
      "title": "ATS1280",
      "description": "Understanding the media",
      "Faculty": "arts"
    },
    {
      "title": "ATS1281",
      "description": "Understanding crime: An introduction",
      "Faculty": "arts"
    },
    {
      "title": "ATS1282",
      "description": "Criminal justice: An introduction",
      "Faculty": "arts"
    },
    {
      "title": "ATS1287",
      "description": "Performance in context 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS1288",
      "description": "Performance in context 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS1291",
      "description": "Communication in international languages",
      "Faculty": "arts"
    },
    {
      "title": "ATS1292",
      "description": "Englishes for global communication",
      "Faculty": "arts"
    },
    {
      "title": "ATS1297",
      "description": "Academic writing",
      "Faculty": "arts"
    },
    {
      "title": "ATS1298",
      "description": "Professional writing",
      "Faculty": "arts"
    },
    {
      "title": "ATS1304",
      "description": "Introduction to television studies",
      "Faculty": "arts"
    },
    {
      "title": "ATS1305",
      "description": "Introduction to film studies",
      "Faculty": "arts"
    },
    {
      "title": "ATS1309",
      "description": "The Global challenge",
      "Faculty": "arts"
    },
    {
      "title": "ATS1310",
      "description": "Extreme earth! Natural hazards and human vulnerability",
      "Faculty": "arts"
    },
    {
      "title": "ATS1314",
      "description": "Human rights theory 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS1315",
      "description": "Human rights theory 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS1316",
      "description": "Medieval Europe",
      "Faculty": "arts"
    },
    {
      "title": "ATS1317",
      "description": "Renaissance Europe",
      "Faculty": "arts"
    },
    {
      "title": "ATS1319",
      "description": "Global Asia",
      "Faculty": "arts"
    },
    {
      "title": "ATS1320",
      "description": "Nations at war: Revolution and empire",
      "Faculty": "arts"
    },
    {
      "title": "ATS1321",
      "description": "Nations at war: The twentieth century",
      "Faculty": "arts"
    },
    {
      "title": "ATS1322",
      "description": "Conflict and coexistence 1: Jews, Christians and Muslims from antiquity through the middle ages",
      "Faculty": "arts"
    },
    {
      "title": "ATS1325",
      "description": "Contemporary worlds 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS1326",
      "description": "Contemporary worlds 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS1336",
      "description": "Yiddish language, culture and literature 1A",
      "Faculty": "arts"
    },
    {
      "title": "ATS1337",
      "description": "Yiddish language, culture and literature 1B",
      "Faculty": "arts"
    },
    {
      "title": "ATS1338",
      "description": "The language game: Why do we talk the way we do?",
      "Faculty": "arts"
    },
    {
      "title": "ATS1339",
      "description": "Describing and analysing language and communication",
      "Faculty": "arts"
    },
    {
      "title": "ATS1340",
      "description": "English for academic purposes",
      "Faculty": "arts"
    },
    {
      "title": "ATS1343",
      "description": "Popular music in global perspective",
      "Faculty": "arts"
    },
    {
      "title": "ATS1345",
      "description": "Music and history",
      "Faculty": "arts"
    },
    {
      "title": "ATS1346",
      "description": "Music and culture",
      "Faculty": "arts"
    },
    {
      "title": "ATS1347",
      "description": "Music ensemble 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS1348",
      "description": "Music ensemble 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS1353",
      "description": "Foundations of modern politics",
      "Faculty": "arts"
    },
    {
      "title": "ATS1365",
      "description": "Introduction to sociology",
      "Faculty": "arts"
    },
    {
      "title": "ATS1366",
      "description": "The individual and society",
      "Faculty": "arts"
    },
    {
      "title": "ATS1371",
      "description": "Life, death and morality (Introduction to philosophy A)",
      "Faculty": "arts"
    },
    {
      "title": "ATS1515",
      "description": "Reading across cultures",
      "Faculty": "arts"
    },
    {
      "title": "ATS1701",
      "description": "Terrorism and political violence: An introduction",
      "Faculty": "arts"
    },
    {
      "title": "ATS1835",
      "description": "Time, self and mind (Introduction to philosophy B)",
      "Faculty": "arts"
    },
    {
      "title": "ATS1873",
      "description": "Introduction to international relations",
      "Faculty": "arts"
    },
    {
      "title": "ATS1899",
      "description": "Music theory and ear training 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS1900",
      "description": "Music theory and ear training 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS1903",
      "description": "Introducing literature: Ways of reading",
      "Faculty": "arts"
    },
    {
      "title": "ATS1904",
      "description": "Reading the city: Literary genres",
      "Faculty": "arts"
    },
    {
      "title": "ATS1905",
      "description": "Chinese Introductory for background speakers 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS1906",
      "description": "Chinese Introductory for background speakers 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS1940",
      "description": "Chinese translation 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS1945",
      "description": "Australian government and politics",
      "Faculty": "arts"
    },
    {
      "title": "ATS1959",
      "description": "Chinese translation 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS1960",
      "description": "Conflict and coexistence 2: Jews, Christians and Muslims in the modern world",
      "Faculty": "arts"
    },
    {
      "title": "ATS2001",
      "description": "Chinese introductory 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS2002",
      "description": "Chinese introductory 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS2003",
      "description": "Chinese intermediate 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS2004",
      "description": "Chinese intermediate 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS2005",
      "description": "Chinese proficient 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS2006",
      "description": "Chinese proficient 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS2019",
      "description": "Perspectives on Indigenous Art: Production, meaning and symbolism",
      "Faculty": "arts"
    },
    {
      "title": "ATS2020",
      "description": "Colonialism in comparison: Australia, New Zealand and the Pacific",
      "Faculty": "arts"
    },
    {
      "title": "ATS2039",
      "description": "Understanding modern China",
      "Faculty": "arts"
    },
    {
      "title": "ATS2040",
      "description": "Understanding contemporary China",
      "Faculty": "arts"
    },
    {
      "title": "ATS2043",
      "description": "Chinese translation for professional purposes 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS2044",
      "description": "Chinese translation for professional purposes 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS2056",
      "description": "Race, crime and difference",
      "Faculty": "arts"
    },
    {
      "title": "ATS2057",
      "description": "Genocide",
      "Faculty": "arts"
    },
    {
      "title": "ATS2060",
      "description": "The art of teaching music performance",
      "Faculty": "arts"
    },
    {
      "title": "ATS2063",
      "description": "French intermediate 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS2064",
      "description": "French intermediate 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS2065",
      "description": "French proficient 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS2066",
      "description": "French proficient 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS2075",
      "description": "Representing Paris: Literature and visual culture",
      "Faculty": "arts"
    },
    {
      "title": "ATS2083",
      "description": "Bread and circuses: Performing identity in Greco-Roman cultures",
      "Faculty": "arts"
    },
    {
      "title": "ATS2084",
      "description": "Ancient mythologies",
      "Faculty": "arts"
    },
    {
      "title": "ATS2086",
      "description": "Leadership for social change 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS2087",
      "description": "Lifestyle journalism",
      "Faculty": "arts"
    },
    {
      "title": "ATS2088",
      "description": "Russia and the US: Comparative politics",
      "Faculty": "arts"
    },
    {
      "title": "ATS2093",
      "description": "German intermediate 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS2094",
      "description": "German intermediate 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS2095",
      "description": "German proficient 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS2096",
      "description": "German proficient 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS2104",
      "description": "The ethnographic endeavour: Capturing the Indigenous past to understand the Indigenous present",
      "Faculty": "arts"
    },
    {
      "title": "ATS2105",
      "description": "Making performance 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS2106",
      "description": "A short history of the world: From the big bang to climate change",
      "Faculty": "arts"
    },
    {
      "title": "ATS2107",
      "description": "Colonial America: From puritans to revolutionaries",
      "Faculty": "arts"
    },
    {
      "title": "ATS2108",
      "description": "The modern family: A global history",
      "Faculty": "arts"
    },
    {
      "title": "ATS2109",
      "description": "The commodities that changed the world: An introduction to globalisation and global history",
      "Faculty": "arts"
    },
    {
      "title": "ATS2110",
      "description": "Slavery: A history",
      "Faculty": "arts"
    },
    {
      "title": "ATS2113",
      "description": "Indonesian 3: Contemporary issues in Indonesia",
      "Faculty": "arts"
    },
    {
      "title": "ATS2114",
      "description": "Indonesian 4: Stories and storytelling in the Indonesian archipelago",
      "Faculty": "arts"
    },
    {
      "title": "ATS2122",
      "description": "Performance 3",
      "Faculty": "arts"
    },
    {
      "title": "ATS2123",
      "description": "Performance 4",
      "Faculty": "arts"
    },
    {
      "title": "ATS2127",
      "description": "Composition 3",
      "Faculty": "arts"
    },
    {
      "title": "ATS2128",
      "description": "Composition 4",
      "Faculty": "arts"
    },
    {
      "title": "ATS2129",
      "description": "Creative music technology 3",
      "Faculty": "arts"
    },
    {
      "title": "ATS2130",
      "description": "Creative music technology 4",
      "Faculty": "arts"
    },
    {
      "title": "ATS2138",
      "description": "The archaeology of world rock art",
      "Faculty": "arts"
    },
    {
      "title": "ATS2139",
      "description": "Song writing: How to write a popular song",
      "Faculty": "arts"
    },
    {
      "title": "ATS2141",
      "description": "Japanese introductory 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS2142",
      "description": "Japanese introductory 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS2143",
      "description": "Japanese intermediate 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS2144",
      "description": "Japanese intermediate 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS2145",
      "description": "Japanese proficient 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS2146",
      "description": "Japanese proficient 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS2159",
      "description": "Recording and computer music production",
      "Faculty": "arts"
    },
    {
      "title": "ATS2161",
      "description": "Indonesia now: Culture, conflict and crisis management in the Asian century",
      "Faculty": "arts"
    },
    {
      "title": "ATS2162",
      "description": "Literature and visual culture",
      "Faculty": "arts"
    },
    {
      "title": "ATS2163",
      "description": "The writing self: Creative nonfiction",
      "Faculty": "arts"
    },
    {
      "title": "ATS2164",
      "description": "Italian transformations: Reading and writing self-discovery",
      "Faculty": "arts"
    },
    {
      "title": "ATS2169",
      "description": "Photojournalism",
      "Faculty": "arts"
    },
    {
      "title": "ATS2170",
      "description": "Arts international experience",
      "Faculty": "arts"
    },
    {
      "title": "ATS2171",
      "description": "Korean introductory 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS2172",
      "description": "Korean introductory 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS2173",
      "description": "Korean intermediate 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS2174",
      "description": "Korean intermediate 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS2185",
      "description": "Biblical texts and contexts",
      "Faculty": "arts"
    },
    {
      "title": "ATS2193",
      "description": "Spanish intermediate 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS2194",
      "description": "Spanish intermediate 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS2195",
      "description": "Spanish proficient 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS2196",
      "description": "Spanish proficient 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS2214",
      "description": "Italy on film (In country)",
      "Faculty": "arts"
    },
    {
      "title": "ATS2215",
      "description": "Ukrainian intermediate 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS2216",
      "description": "Ukrainian intermediate 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS2223",
      "description": "Italian intermediate 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS2224",
      "description": "Italian intermediate 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS2225",
      "description": "Italian proficient 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS2226",
      "description": "Italian proficient 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS2229",
      "description": "Intensive introductory Italian 1 (in country)",
      "Faculty": "arts"
    },
    {
      "title": "ATS2230",
      "description": "Intensive introductory Italian 2 (in country)",
      "Faculty": "arts"
    },
    {
      "title": "ATS2231",
      "description": "Intensive intermediate Italian 1 (in country)",
      "Faculty": "arts"
    },
    {
      "title": "ATS2232",
      "description": "Intensive intermediate Italian 2 (in country)",
      "Faculty": "arts"
    },
    {
      "title": "ATS2244",
      "description": "A history of American business",
      "Faculty": "arts"
    },
    {
      "title": "ATS2247",
      "description": "Italian proficient 2 (in country)",
      "Faculty": "arts"
    },
    {
      "title": "ATS2249",
      "description": "Sustainable development in South East Asia",
      "Faculty": "arts"
    },
    {
      "title": "ATS2250",
      "description": "Communications and cultures in the global era",
      "Faculty": "arts"
    },
    {
      "title": "ATS2251",
      "description": "Cuba study tour",
      "Faculty": "arts"
    },
    {
      "title": "ATS2255",
      "description": "Smartphone journalism",
      "Faculty": "arts"
    },
    {
      "title": "ATS2256",
      "description": "Political psychology",
      "Faculty": "arts"
    },
    {
      "title": "ATS2257",
      "description": "Long-form television: \"HBO\" and beyond",
      "Faculty": "arts"
    },
    {
      "title": "ATS2260",
      "description": "Developmental psychology: Behaviour across the lifespan",
      "Faculty": "arts"
    },
    {
      "title": "ATS2271",
      "description": "Beowulf: An interdisciplinary approach",
      "Faculty": "arts"
    },
    {
      "title": "ATS2275",
      "description": "The European Union from consensus to crisis",
      "Faculty": "arts"
    },
    {
      "title": "ATS2280",
      "description": "Video games: Industry and culture",
      "Faculty": "arts"
    },
    {
      "title": "ATS2290",
      "description": "Global leadership and advanced research program",
      "Faculty": "arts"
    },
    {
      "title": "ATS2295",
      "description": "Screening contemporary Europe",
      "Faculty": "arts"
    },
    {
      "title": "ATS2296",
      "description": "Musical theatre 1: History and form",
      "Faculty": "arts"
    },
    {
      "title": "ATS2297",
      "description": "Musical theatre 2: Skills and performance",
      "Faculty": "arts"
    },
    {
      "title": "ATS2315",
      "description": "Journalism and global change in Europe",
      "Faculty": "arts"
    },
    {
      "title": "ATS2324",
      "description": "Climate change communication",
      "Faculty": "arts"
    },
    {
      "title": "ATS2325",
      "description": "Cross-cultural literary encounters",
      "Faculty": "arts"
    },
    {
      "title": "ATS2331",
      "description": "Music - Overseas study program 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS2332",
      "description": "Music - Overseas study program 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS2333",
      "description": "Jazz history",
      "Faculty": "arts"
    },
    {
      "title": "ATS2335",
      "description": "War and memory: Resistance, massacre and representation in second world war Italy",
      "Faculty": "arts"
    },
    {
      "title": "ATS2344",
      "description": "Archaeology in Italy",
      "Faculty": "arts"
    },
    {
      "title": "ATS2349",
      "description": "The golden age of Athens",
      "Faculty": "arts"
    },
    {
      "title": "ATS2351",
      "description": "The archaeology of death in ancient Egypt: The early dynastic period to middle kingdom",
      "Faculty": "arts"
    },
    {
      "title": "ATS2352",
      "description": "Egypt's golden age",
      "Faculty": "arts"
    },
    {
      "title": "ATS2354",
      "description": "Interrogating racism: Indigenous Australians and the state",
      "Faculty": "arts"
    },
    {
      "title": "ATS2355",
      "description": "Race and power: Imagining Indigenous Australia",
      "Faculty": "arts"
    },
    {
      "title": "ATS2358",
      "description": "Contesting laws: Heritage, culture and land",
      "Faculty": "arts"
    },
    {
      "title": "ATS2359",
      "description": "Hearing the country: Studies in Indigenous Australian ethnoecology",
      "Faculty": "arts"
    },
    {
      "title": "ATS2364",
      "description": "Indigenous Australian politics and activism",
      "Faculty": "arts"
    },
    {
      "title": "ATS2365",
      "description": "Australian Indigenous literature",
      "Faculty": "arts"
    },
    {
      "title": "ATS2366",
      "description": "Australian Indigenous art and design",
      "Faculty": "arts"
    },
    {
      "title": "ATS2367",
      "description": "Australian Indigenous women",
      "Faculty": "arts"
    },
    {
      "title": "ATS2369",
      "description": "Indigenous Australian human rights",
      "Faculty": "arts"
    },
    {
      "title": "ATS2373",
      "description": "Visualising cultures: Film and ethnography",
      "Faculty": "arts"
    },
    {
      "title": "ATS2378",
      "description": "The anthropology of international development",
      "Faculty": "arts"
    },
    {
      "title": "ATS2379",
      "description": "Fairy tale in Italy",
      "Faculty": "arts"
    },
    {
      "title": "ATS2380",
      "description": "Global migrations: Making the modern world",
      "Faculty": "arts"
    },
    {
      "title": "ATS2382",
      "description": "War and memory in the Asia Pacific: Legacies of World War II",
      "Faculty": "arts"
    },
    {
      "title": "ATS2385",
      "description": "Anzac legends: Australians at war",
      "Faculty": "arts"
    },
    {
      "title": "ATS2386",
      "description": "Paradise lost? Sustainability and Australia",
      "Faculty": "arts"
    },
    {
      "title": "ATS2387",
      "description": "Beyond Gallipoli: Australians in the Great War",
      "Faculty": "arts"
    },
    {
      "title": "ATS2394",
      "description": "Australia and Asia",
      "Faculty": "arts"
    },
    {
      "title": "ATS2395",
      "description": "Australia in a globalising world",
      "Faculty": "arts"
    },
    {
      "title": "ATS2400",
      "description": "Personality: Beyond the persona",
      "Faculty": "arts"
    },
    {
      "title": "ATS2410",
      "description": "Narrative",
      "Faculty": "arts"
    },
    {
      "title": "ATS2422",
      "description": "Romanticism and its literary legacy",
      "Faculty": "arts"
    },
    {
      "title": "ATS2427",
      "description": "Earthworks: Literature and environment",
      "Faculty": "arts"
    },
    {
      "title": "ATS2436",
      "description": "New media: From the telegraph to Twitter",
      "Faculty": "arts"
    },
    {
      "title": "ATS2439",
      "description": "Youth media: Understanding media research",
      "Faculty": "arts"
    },
    {
      "title": "ATS2440",
      "description": "The public sphere",
      "Faculty": "arts"
    },
    {
      "title": "ATS2442",
      "description": "Print cultures: Books as media",
      "Faculty": "arts"
    },
    {
      "title": "ATS2443",
      "description": "On the road: Travel and representation",
      "Faculty": "arts"
    },
    {
      "title": "ATS2444",
      "description": "Inscribing Italy: Travels and imaginings",
      "Faculty": "arts"
    },
    {
      "title": "ATS2448",
      "description": "Screen theories and techniques",
      "Faculty": "arts"
    },
    {
      "title": "ATS2449",
      "description": "Media texts",
      "Faculty": "arts"
    },
    {
      "title": "ATS2450",
      "description": "Contemporary media theory",
      "Faculty": "arts"
    },
    {
      "title": "ATS2454",
      "description": "Media audiences",
      "Faculty": "arts"
    },
    {
      "title": "ATS2456",
      "description": "Cybercrime",
      "Faculty": "arts"
    },
    {
      "title": "ATS2457",
      "description": "Crime, media and culture",
      "Faculty": "arts"
    },
    {
      "title": "ATS2458",
      "description": "Crime, control and policing",
      "Faculty": "arts"
    },
    {
      "title": "ATS2465",
      "description": "Human rights in the criminal justice sphere",
      "Faculty": "arts"
    },
    {
      "title": "ATS2469",
      "description": "Victims, justice and the law",
      "Faculty": "arts"
    },
    {
      "title": "ATS2471",
      "description": "Comparative criminal justice: An international perspective",
      "Faculty": "arts"
    },
    {
      "title": "ATS2473",
      "description": "Offender profiling",
      "Faculty": "arts"
    },
    {
      "title": "ATS2485",
      "description": "Reading the past",
      "Faculty": "arts"
    },
    {
      "title": "ATS2490",
      "description": "Advanced Professional Writing",
      "Faculty": "arts"
    },
    {
      "title": "ATS2492",
      "description": "Shakespeare and Renaissance literature",
      "Faculty": "arts"
    },
    {
      "title": "ATS2497",
      "description": "Popular writing and criticism",
      "Faculty": "arts"
    },
    {
      "title": "ATS2498",
      "description": "Contemporary fiction",
      "Faculty": "arts"
    },
    {
      "title": "ATS2500",
      "description": "The \"Great\" American Novel",
      "Faculty": "arts"
    },
    {
      "title": "ATS2508",
      "description": "Introduction to poetry writing",
      "Faculty": "arts"
    },
    {
      "title": "ATS2513",
      "description": "Short fiction classic and contemporary",
      "Faculty": "arts"
    },
    {
      "title": "ATS2516",
      "description": "Adaptation into film",
      "Faculty": "arts"
    },
    {
      "title": "ATS2517",
      "description": "Introduction to fiction writing",
      "Faculty": "arts"
    },
    {
      "title": "ATS2519",
      "description": "Children's literature: A comparative study",
      "Faculty": "arts"
    },
    {
      "title": "ATS2520",
      "description": "Eurovisions: Europe since World War II",
      "Faculty": "arts"
    },
    {
      "title": "ATS2530",
      "description": "Film and Television Genres",
      "Faculty": "arts"
    },
    {
      "title": "ATS2535",
      "description": "Storytelling in film and television: From classical narrative to art cinema",
      "Faculty": "arts"
    },
    {
      "title": "ATS2538",
      "description": "Film and Television Institutions",
      "Faculty": "arts"
    },
    {
      "title": "ATS2547",
      "description": "Cities and sustainability",
      "Faculty": "arts"
    },
    {
      "title": "ATS2548",
      "description": "Environmental policy and management",
      "Faculty": "arts"
    },
    {
      "title": "ATS2551",
      "description": "Writing resistance: Understanding the power of Indigenous story-telling through literature",
      "Faculty": "arts"
    },
    {
      "title": "ATS2560",
      "description": "Gender, theory and society",
      "Faculty": "arts"
    },
    {
      "title": "ATS2561",
      "description": "Sex and the media",
      "Faculty": "arts"
    },
    {
      "title": "ATS2563",
      "description": "Global consumption",
      "Faculty": "arts"
    },
    {
      "title": "ATS2566",
      "description": "Researching the Past: (Re)discovering the voiceless",
      "Faculty": "arts"
    },
    {
      "title": "ATS2569",
      "description": "Australian history: Professional and political contexts",
      "Faculty": "arts"
    },
    {
      "title": "ATS2579",
      "description": "Witches and depravity in the medieval and early modern world",
      "Faculty": "arts"
    },
    {
      "title": "ATS2584",
      "description": "Australia's black history",
      "Faculty": "arts"
    },
    {
      "title": "ATS2586",
      "description": "Islam: Principles, civilisations, influences",
      "Faculty": "arts"
    },
    {
      "title": "ATS2588",
      "description": "Australian stories: People, place and histories",
      "Faculty": "arts"
    },
    {
      "title": "ATS2590",
      "description": "Twentieth-century Britain: Rule Britannia to cool Britannia",
      "Faculty": "arts"
    },
    {
      "title": "ATS2595",
      "description": "The rise and fall of Nazi Germany",
      "Faculty": "arts"
    },
    {
      "title": "ATS2596",
      "description": "The Vietnam War",
      "Faculty": "arts"
    },
    {
      "title": "ATS2597",
      "description": "Qualitative social research",
      "Faculty": "arts"
    },
    {
      "title": "ATS2600",
      "description": "The Holocaust",
      "Faculty": "arts"
    },
    {
      "title": "ATS2602",
      "description": "Renaissance Italy",
      "Faculty": "arts"
    },
    {
      "title": "ATS2603",
      "description": "The age of crusades: Cultures and societies",
      "Faculty": "arts"
    },
    {
      "title": "ATS2610",
      "description": "Ancient religions",
      "Faculty": "arts"
    },
    {
      "title": "ATS2612",
      "description": "The Renaissance in Florence",
      "Faculty": "arts"
    },
    {
      "title": "ATS2617",
      "description": "The American civil war",
      "Faculty": "arts"
    },
    {
      "title": "ATS2619",
      "description": "Cultural diversity in contemporary Europe",
      "Faculty": "arts"
    },
    {
      "title": "ATS2620",
      "description": "The age of the Samurai",
      "Faculty": "arts"
    },
    {
      "title": "ATS2624",
      "description": "Global governance",
      "Faculty": "arts"
    },
    {
      "title": "ATS2625",
      "description": "Mobile worlds: Borders, displacement and belonging",
      "Faculty": "arts"
    },
    {
      "title": "ATS2628",
      "description": "Power and poverty: International development in a globalised world",
      "Faculty": "arts"
    },
    {
      "title": "ATS2629",
      "description": "Religion and spirituality in a globalising world",
      "Faculty": "arts"
    },
    {
      "title": "ATS2633",
      "description": "Global cities: Past, present and future",
      "Faculty": "arts"
    },
    {
      "title": "ATS2637",
      "description": "Global bioethics",
      "Faculty": "arts"
    },
    {
      "title": "ATS2640",
      "description": "The ethics of global conflict",
      "Faculty": "arts"
    },
    {
      "title": "ATS2647",
      "description": "Journalism: War, crime and trauma",
      "Faculty": "arts"
    },
    {
      "title": "ATS2648",
      "description": "Contemporary Japan",
      "Faculty": "arts"
    },
    {
      "title": "ATS2653",
      "description": "Studies in Japanese interaction and language use",
      "Faculty": "arts"
    },
    {
      "title": "ATS2656",
      "description": "e-journalism",
      "Faculty": "arts"
    },
    {
      "title": "ATS2658",
      "description": "Journalism ethics",
      "Faculty": "arts"
    },
    {
      "title": "ATS2665",
      "description": "Language endangerment",
      "Faculty": "arts"
    },
    {
      "title": "ATS2667",
      "description": "Language across time",
      "Faculty": "arts"
    },
    {
      "title": "ATS2668",
      "description": "Descriptive syntax: Grammatical structure, typology and universals",
      "Faculty": "arts"
    },
    {
      "title": "ATS2669",
      "description": "Phonetics and phonology",
      "Faculty": "arts"
    },
    {
      "title": "ATS2671",
      "description": "Managing intercultural communication",
      "Faculty": "arts"
    },
    {
      "title": "ATS2672",
      "description": "Computational linguistics: An introduction",
      "Faculty": "arts"
    },
    {
      "title": "ATS2673",
      "description": "History and sociolinguistics of English",
      "Faculty": "arts"
    },
    {
      "title": "ATS2674",
      "description": "Semantics and pragmatics: The study of meaning in human languages",
      "Faculty": "arts"
    },
    {
      "title": "ATS2676",
      "description": "Sociolinguistics",
      "Faculty": "arts"
    },
    {
      "title": "ATS2678",
      "description": "Language and identity",
      "Faculty": "arts"
    },
    {
      "title": "ATS2679",
      "description": "Psycholinguistics and child language acquisition",
      "Faculty": "arts"
    },
    {
      "title": "ATS2680",
      "description": "Literacies and communication: Education, media and cyberspace",
      "Faculty": "arts"
    },
    {
      "title": "ATS2681",
      "description": "Structure of English",
      "Faculty": "arts"
    },
    {
      "title": "ATS2682",
      "description": "Second language acquisition and attrition",
      "Faculty": "arts"
    },
    {
      "title": "ATS2683",
      "description": "The analysis of discourse: Texts, narrative and society",
      "Faculty": "arts"
    },
    {
      "title": "ATS2687",
      "description": "The ethnomusicology of improvisation",
      "Faculty": "arts"
    },
    {
      "title": "ATS2691",
      "description": "Politics, violence and memory",
      "Faculty": "arts"
    },
    {
      "title": "ATS2693",
      "description": "Politics and the media",
      "Faculty": "arts"
    },
    {
      "title": "ATS2698",
      "description": "Middle East politics",
      "Faculty": "arts"
    },
    {
      "title": "ATS2699",
      "description": "Parties and power",
      "Faculty": "arts"
    },
    {
      "title": "ATS2706",
      "description": "Foreign policy analysis",
      "Faculty": "arts"
    },
    {
      "title": "ATS2716",
      "description": "Cultural diversity and identity",
      "Faculty": "arts"
    },
    {
      "title": "ATS2718",
      "description": "Families, relationships and society",
      "Faculty": "arts"
    },
    {
      "title": "ATS2720",
      "description": "Youth, culture and social change",
      "Faculty": "arts"
    },
    {
      "title": "ATS2723",
      "description": "Social research methods",
      "Faculty": "arts"
    },
    {
      "title": "ATS2727",
      "description": "Men, masculinity and society",
      "Faculty": "arts"
    },
    {
      "title": "ATS2731",
      "description": "Regional and rural societies: People, place and nature",
      "Faculty": "arts"
    },
    {
      "title": "ATS2732",
      "description": "Writing the world, the other and the self",
      "Faculty": "arts"
    },
    {
      "title": "ATS2733",
      "description": "Work and technology",
      "Faculty": "arts"
    },
    {
      "title": "ATS2734",
      "description": "Sociology of deviance",
      "Faculty": "arts"
    },
    {
      "title": "ATS2736",
      "description": "Environmental sociology",
      "Faculty": "arts"
    },
    {
      "title": "ATS2737",
      "description": "Social justice",
      "Faculty": "arts"
    },
    {
      "title": "ATS2739",
      "description": "Sex and gender in society",
      "Faculty": "arts"
    },
    {
      "title": "ATS2743",
      "description": "Build your career: Planning and strategies for employability",
      "Faculty": "arts"
    },
    {
      "title": "ATS2748",
      "description": "Ancient Greek A/2",
      "Faculty": "arts"
    },
    {
      "title": "ATS2750",
      "description": "Ancient Greek B/2",
      "Faculty": "arts"
    },
    {
      "title": "ATS2769",
      "description": "English as an international language",
      "Faculty": "arts"
    },
    {
      "title": "ATS2770",
      "description": "English as an international language: Language and globalisation",
      "Faculty": "arts"
    },
    {
      "title": "ATS2772",
      "description": "English language and text",
      "Faculty": "arts"
    },
    {
      "title": "ATS2773",
      "description": "Literature and history",
      "Faculty": "arts"
    },
    {
      "title": "ATS2778",
      "description": "Public spaces and city life",
      "Faculty": "arts"
    },
    {
      "title": "ATS2782",
      "description": "Alternative and mainstream communities",
      "Faculty": "arts"
    },
    {
      "title": "ATS2784",
      "description": "News and power",
      "Faculty": "arts"
    },
    {
      "title": "ATS2787",
      "description": "Digital storytelling",
      "Faculty": "arts"
    },
    {
      "title": "ATS2788",
      "description": "Audio storytelling",
      "Faculty": "arts"
    },
    {
      "title": "ATS2790",
      "description": "Feature writing",
      "Faculty": "arts"
    },
    {
      "title": "ATS2791",
      "description": "Editing and design",
      "Faculty": "arts"
    },
    {
      "title": "ATS2795",
      "description": "Yiddish language, culture and literature 2A",
      "Faculty": "arts"
    },
    {
      "title": "ATS2796",
      "description": "Yiddish language, culture and literature 2B",
      "Faculty": "arts"
    },
    {
      "title": "ATS2799",
      "description": "Audio culture: From Cage to Gaga",
      "Faculty": "arts"
    },
    {
      "title": "ATS2800",
      "description": "Music ensemble 3",
      "Faculty": "arts"
    },
    {
      "title": "ATS2801",
      "description": "Music ensemble 4",
      "Faculty": "arts"
    },
    {
      "title": "ATS2804",
      "description": "From the erotic to the exotic: Music in the nineteenth century",
      "Faculty": "arts"
    },
    {
      "title": "ATS2805",
      "description": "Music, identity and place",
      "Faculty": "arts"
    },
    {
      "title": "ATS2811",
      "description": "Making performance 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS2814",
      "description": "Engagement, publicity and promotion",
      "Faculty": "arts"
    },
    {
      "title": "ATS2815",
      "description": "Crisis and risk communication",
      "Faculty": "arts"
    },
    {
      "title": "ATS2820",
      "description": "Abnormal psychology & behavioural disorders",
      "Faculty": "arts"
    },
    {
      "title": "ATS2821",
      "description": "Social psychology",
      "Faculty": "arts"
    },
    {
      "title": "ATS2822",
      "description": "Advanced counselling and case management",
      "Faculty": "arts"
    },
    {
      "title": "ATS2823",
      "description": "Community development",
      "Faculty": "arts"
    },
    {
      "title": "ATS2825",
      "description": "Social issues and personal values",
      "Faculty": "arts"
    },
    {
      "title": "ATS2831",
      "description": "Research in the social sciences",
      "Faculty": "arts"
    },
    {
      "title": "ATS2837",
      "description": "Plato and Platonism",
      "Faculty": "arts"
    },
    {
      "title": "ATS2839",
      "description": "Ethics",
      "Faculty": "arts"
    },
    {
      "title": "ATS2840",
      "description": "Philosophy of mind",
      "Faculty": "arts"
    },
    {
      "title": "ATS2860",
      "description": "After the death of God: Continental philosophy of religion from Nietzsche to today",
      "Faculty": "arts"
    },
    {
      "title": "ATS2861",
      "description": "God, freedom and evil",
      "Faculty": "arts"
    },
    {
      "title": "ATS2863",
      "description": "Foundations of modern philosophy: Descartes and the thinking self",
      "Faculty": "arts"
    },
    {
      "title": "ATS2865",
      "description": "Language, truth and power",
      "Faculty": "arts"
    },
    {
      "title": "ATS2866",
      "description": "Symbolic logic",
      "Faculty": "arts"
    },
    {
      "title": "ATS2867",
      "description": "Thinking about science",
      "Faculty": "arts"
    },
    {
      "title": "ATS2868",
      "description": "Issues in political theory",
      "Faculty": "arts"
    },
    {
      "title": "ATS2871",
      "description": "Environmental ethics",
      "Faculty": "arts"
    },
    {
      "title": "ATS2872",
      "description": "Topics in Indian philosophy",
      "Faculty": "arts"
    },
    {
      "title": "ATS2875",
      "description": "The moral psychology of evil",
      "Faculty": "arts"
    },
    {
      "title": "ATS2890",
      "description": "Script development 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS2894",
      "description": "Accommodating minorities in Australia?",
      "Faculty": "arts"
    },
    {
      "title": "ATS2895",
      "description": "Gender, race and journalism",
      "Faculty": "arts"
    },
    {
      "title": "ATS2896",
      "description": "Photojournalism",
      "Faculty": "arts"
    },
    {
      "title": "ATS2898",
      "description": "The Italian city: Historical and literary perspectives",
      "Faculty": "arts"
    },
    {
      "title": "ATS2900",
      "description": "Writing about music: Headlines and hashtags",
      "Faculty": "arts"
    },
    {
      "title": "ATS2901",
      "description": "Music theory and ear training 3",
      "Faculty": "arts"
    },
    {
      "title": "ATS2902",
      "description": "Music theory and ear training 4",
      "Faculty": "arts"
    },
    {
      "title": "ATS2907",
      "description": "Islamic responses to the post-colonial age",
      "Faculty": "arts"
    },
    {
      "title": "ATS2909",
      "description": "Gangsters: A global story",
      "Faculty": "arts"
    },
    {
      "title": "ATS2910",
      "description": "Professional and academic presentation skills",
      "Faculty": "arts"
    },
    {
      "title": "ATS2912",
      "description": "Performance studies 1 - Concepts",
      "Faculty": "arts"
    },
    {
      "title": "ATS2913",
      "description": "Playtext study 1 - Traditions",
      "Faculty": "arts"
    },
    {
      "title": "ATS2914",
      "description": "The dark hero",
      "Faculty": "arts"
    },
    {
      "title": "ATS2915",
      "description": "The roots of fantasy",
      "Faculty": "arts"
    },
    {
      "title": "ATS2916",
      "description": "Theories of theatre 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS2918",
      "description": "Social media and online public relations",
      "Faculty": "arts"
    },
    {
      "title": "ATS2924",
      "description": "Ancient Egyptian language: The basics",
      "Faculty": "arts"
    },
    {
      "title": "ATS2925",
      "description": "Ancient Egyptian language: Intermediary stage",
      "Faculty": "arts"
    },
    {
      "title": "ATS2929",
      "description": "Sociology of race and ethnic relations",
      "Faculty": "arts"
    },
    {
      "title": "ATS2932",
      "description": "Struggles for justice: The history of rebellion, resistance and revolt",
      "Faculty": "arts"
    },
    {
      "title": "ATS2934",
      "description": "Global indigeneity: Performance and spectacle from the eighteenth to the twenty-first century",
      "Faculty": "arts"
    },
    {
      "title": "ATS2937",
      "description": "Contemporary issues in European criminal justice",
      "Faculty": "arts"
    },
    {
      "title": "ATS2941",
      "description": "Asia's underside: Violence, crime and protest",
      "Faculty": "arts"
    },
    {
      "title": "ATS2946",
      "description": "Critical thinking: How to analyse arguments and improve your reasoning skills",
      "Faculty": "arts"
    },
    {
      "title": "ATS2957",
      "description": "Medieval Italy: Sites of encounter",
      "Faculty": "arts"
    },
    {
      "title": "ATS2961",
      "description": "Political ideas",
      "Faculty": "arts"
    },
    {
      "title": "ATS2962",
      "description": "Now showing: Contemporary approaches to film and television",
      "Faculty": "arts"
    },
    {
      "title": "ATS2971",
      "description": "Fields of play: Entertainment, politics and popular cultures",
      "Faculty": "arts"
    },
    {
      "title": "ATS2983",
      "description": "Screen project: From film theory to digital video practice",
      "Faculty": "arts"
    },
    {
      "title": "ATS3002",
      "description": "Documentary",
      "Faculty": "arts"
    },
    {
      "title": "ATS3004",
      "description": "Crime, risk and security",
      "Faculty": "arts"
    },
    {
      "title": "ATS3005",
      "description": "Chinese proficient 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS3006",
      "description": "Chinese proficient 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS3007",
      "description": "Chinese studies advanced 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS3008",
      "description": "Chinese studies advanced 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS3009",
      "description": "Chinese studies advanced 3: Readings in modern literature",
      "Faculty": "arts"
    },
    {
      "title": "ATS3010",
      "description": "Chinese studies advanced 4: Readings in modern literature",
      "Faculty": "arts"
    },
    {
      "title": "ATS3011",
      "description": "Chinese studies advanced 5: Contemporary literature",
      "Faculty": "arts"
    },
    {
      "title": "ATS3012",
      "description": "Chinese studies advanced 6: Contemporary literature",
      "Faculty": "arts"
    },
    {
      "title": "ATS3013",
      "description": "Chinese Business Translation 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS3014",
      "description": "Chinese Business Translation 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS3020",
      "description": "Colonialism in comparison: Australia, New Zealand and the Pacific",
      "Faculty": "arts"
    },
    {
      "title": "ATS3021",
      "description": "Chamber Music 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS3022",
      "description": "Chamber Music 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS3037",
      "description": "Chinese online media: Contemporary issues and perspectives",
      "Faculty": "arts"
    },
    {
      "title": "ATS3038",
      "description": "Chinese online media: Current issues and perspectives",
      "Faculty": "arts"
    },
    {
      "title": "ATS3040",
      "description": "Cultures of remembrance",
      "Faculty": "arts"
    },
    {
      "title": "ATS3041",
      "description": "Chinese media analysis 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS3042",
      "description": "Chinese media analysis 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS3045",
      "description": "From translation to interpreting in Chinese 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS3046",
      "description": "From translation to interpreting in Chinese 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS3058",
      "description": "New writing in Italy",
      "Faculty": "arts"
    },
    {
      "title": "ATS3059",
      "description": "Applied media and social sciences internship",
      "Faculty": "arts"
    },
    {
      "title": "ATS3060",
      "description": "Uni-Capitol Washington internship programme",
      "Faculty": "arts"
    },
    {
      "title": "ATS3061",
      "description": "Music in Australia",
      "Faculty": "arts"
    },
    {
      "title": "ATS3062",
      "description": "Digital production",
      "Faculty": "arts"
    },
    {
      "title": "ATS3064",
      "description": "Cultural intelligence: Building competencies for global leadership",
      "Faculty": "arts"
    },
    {
      "title": "ATS3065",
      "description": "French proficient 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS3066",
      "description": "French proficient 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS3067",
      "description": "French studies advanced 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS3068",
      "description": "French studies advanced 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS3069",
      "description": "French studies advanced 3",
      "Faculty": "arts"
    },
    {
      "title": "ATS3070",
      "description": "French studies advanced 4",
      "Faculty": "arts"
    },
    {
      "title": "ATS3071",
      "description": "France on film",
      "Faculty": "arts"
    },
    {
      "title": "ATS3076",
      "description": "Contemporary French fiction: Rewriting identity",
      "Faculty": "arts"
    },
    {
      "title": "ATS3077",
      "description": "Whatever happened to truth?: French Literature, thought and visual culture",
      "Faculty": "arts"
    },
    {
      "title": "ATS3078",
      "description": "From the fall of Rome to the millennium: The world of the early Middle Ages",
      "Faculty": "arts"
    },
    {
      "title": "ATS3079",
      "description": "The fall and rise of modern China: From opium war to opening up",
      "Faculty": "arts"
    },
    {
      "title": "ATS3080",
      "description": "Remembering the past",
      "Faculty": "arts"
    },
    {
      "title": "ATS3083",
      "description": "Translating across cultures",
      "Faculty": "arts"
    },
    {
      "title": "ATS3089",
      "description": "Social institutions and power in Asia",
      "Faculty": "arts"
    },
    {
      "title": "ATS3091",
      "description": "Digital literatures",
      "Faculty": "arts"
    },
    {
      "title": "ATS3092",
      "description": "Reading and researching history",
      "Faculty": "arts"
    },
    {
      "title": "ATS3093",
      "description": "Specialist topic in media, film and journalism",
      "Faculty": "arts"
    },
    {
      "title": "ATS3094",
      "description": "The music business: How to be successful in the music industry",
      "Faculty": "arts"
    },
    {
      "title": "ATS3095",
      "description": "German proficient 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS3096",
      "description": "German proficient 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS3097",
      "description": "German advanced 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS3098",
      "description": "German advanced 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS3099",
      "description": "German advanced 3",
      "Faculty": "arts"
    },
    {
      "title": "ATS3100",
      "description": "German advanced 4",
      "Faculty": "arts"
    },
    {
      "title": "ATS3102",
      "description": "German dialects and dialectology",
      "Faculty": "arts"
    },
    {
      "title": "ATS3104",
      "description": "German literature in the age of Goethe",
      "Faculty": "arts"
    },
    {
      "title": "ATS3105",
      "description": "On the brink of modernity (Germany and Europe 1890-1920)",
      "Faculty": "arts"
    },
    {
      "title": "ATS3108",
      "description": "Introduction to the study of media culture from a German studies perspective",
      "Faculty": "arts"
    },
    {
      "title": "ATS3111",
      "description": "Leadership for social change 3",
      "Faculty": "arts"
    },
    {
      "title": "ATS3113",
      "description": "Reporting the arts circuit",
      "Faculty": "arts"
    },
    {
      "title": "ATS3114",
      "description": "The camera at war: Combat photography and the visual language of conflict",
      "Faculty": "arts"
    },
    {
      "title": "ATS3115",
      "description": "Indonesian 5: Indonesian political culture",
      "Faculty": "arts"
    },
    {
      "title": "ATS3116",
      "description": "Indonesian 6: Indonesian writing",
      "Faculty": "arts"
    },
    {
      "title": "ATS3117",
      "description": "Journalism through cultural interaction: Indonesia and its neighbours",
      "Faculty": "arts"
    },
    {
      "title": "ATS3118",
      "description": "Soft power and Indonesia's performing arts",
      "Faculty": "arts"
    },
    {
      "title": "ATS3124",
      "description": "Everyday life in the Soviet Union",
      "Faculty": "arts"
    },
    {
      "title": "ATS3129",
      "description": "Arts internship",
      "Faculty": "arts"
    },
    {
      "title": "ATS3130",
      "description": "Arts international internship",
      "Faculty": "arts"
    },
    {
      "title": "ATS3135",
      "description": "War and memory: Resistance, massacre and representation in second world war Italy",
      "Faculty": "arts"
    },
    {
      "title": "ATS3136",
      "description": "Performance 5",
      "Faculty": "arts"
    },
    {
      "title": "ATS3137",
      "description": "Performance 6",
      "Faculty": "arts"
    },
    {
      "title": "ATS3139",
      "description": "Extended major research unit",
      "Faculty": "arts"
    },
    {
      "title": "ATS3140",
      "description": "Composition 5",
      "Faculty": "arts"
    },
    {
      "title": "ATS3141",
      "description": "Composition 6",
      "Faculty": "arts"
    },
    {
      "title": "ATS3142",
      "description": "Creative music technology 5",
      "Faculty": "arts"
    },
    {
      "title": "ATS3143",
      "description": "Creative music technology 6",
      "Faculty": "arts"
    },
    {
      "title": "ATS3144",
      "description": "Music research in the digital age",
      "Faculty": "arts"
    },
    {
      "title": "ATS3145",
      "description": "Japanese proficient 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS3146",
      "description": "Japanese proficient 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS3147",
      "description": "Japanese studies advanced 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS3148",
      "description": "Japanese studies advanced 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS3151",
      "description": "Japanese studies advanced: Current issues",
      "Faculty": "arts"
    },
    {
      "title": "ATS3152",
      "description": "Japanese studies advanced: Literature and film",
      "Faculty": "arts"
    },
    {
      "title": "ATS3153",
      "description": "Music research project",
      "Faculty": "arts"
    },
    {
      "title": "ATS3157",
      "description": "Sources of religious violence: Texts and contexts",
      "Faculty": "arts"
    },
    {
      "title": "ATS3164",
      "description": "Italian transformations: Reading and writing self-discovery",
      "Faculty": "arts"
    },
    {
      "title": "ATS3170",
      "description": "Arts international experience",
      "Faculty": "arts"
    },
    {
      "title": "ATS3175",
      "description": "Korean proficient 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS3176",
      "description": "Korean proficient 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS3177",
      "description": "Korean translation",
      "Faculty": "arts"
    },
    {
      "title": "ATS3194",
      "description": "Sacred cities: Between co-existence and persecution",
      "Faculty": "arts"
    },
    {
      "title": "ATS3195",
      "description": "Spanish proficient 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS3196",
      "description": "Spanish proficient 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS3197",
      "description": "Spanish studies advanced 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS3198",
      "description": "Spanish studies advanced 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS3207",
      "description": "Film and society in Spain and Latin America",
      "Faculty": "arts"
    },
    {
      "title": "ATS3208",
      "description": "In the footsteps of refugees",
      "Faculty": "arts"
    },
    {
      "title": "ATS3210",
      "description": "Study tour: Crime and criminal justice in Asia",
      "Faculty": "arts"
    },
    {
      "title": "ATS3214",
      "description": "Italy on film (In country)",
      "Faculty": "arts"
    },
    {
      "title": "ATS3215",
      "description": "Global creative cities",
      "Faculty": "arts"
    },
    {
      "title": "ATS3217",
      "description": "Ukrainian proficient 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS3218",
      "description": "Ukrainian proficient 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS3219",
      "description": "Ukrainian studies advanced 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS3220",
      "description": "Ukrainian studies advanced 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS3221",
      "description": "Music, media, culture",
      "Faculty": "arts"
    },
    {
      "title": "ATS3225",
      "description": "Italian proficient 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS3226",
      "description": "Italian proficient 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS3227",
      "description": "Italian studies advanced 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS3228",
      "description": "Italian studies advanced 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS3237",
      "description": "Italy on film",
      "Faculty": "arts"
    },
    {
      "title": "ATS3240",
      "description": "The fiction of Italy",
      "Faculty": "arts"
    },
    {
      "title": "ATS3241",
      "description": "Italian theatre from Goldoni to Fo",
      "Faculty": "arts"
    },
    {
      "title": "ATS3244",
      "description": "Dante",
      "Faculty": "arts"
    },
    {
      "title": "ATS3247",
      "description": "Italian proficient 2 (in country)",
      "Faculty": "arts"
    },
    {
      "title": "ATS3248",
      "description": "Field methods in anthropology and international development",
      "Faculty": "arts"
    },
    {
      "title": "ATS3251",
      "description": "Cuba study tour",
      "Faculty": "arts"
    },
    {
      "title": "ATS3265",
      "description": "Broadcast studio journalism",
      "Faculty": "arts"
    },
    {
      "title": "ATS3266",
      "description": "Washington and the world: Washington D.C study tour",
      "Faculty": "arts"
    },
    {
      "title": "ATS3275",
      "description": "The European Union from consensus to crisis",
      "Faculty": "arts"
    },
    {
      "title": "ATS3277",
      "description": "Making sense of archaeological sites through their cultural objects",
      "Faculty": "arts"
    },
    {
      "title": "ATS3278",
      "description": "Advanced writing and interviewing",
      "Faculty": "arts"
    },
    {
      "title": "ATS3284",
      "description": "Final journey: Remembering the Holocaust",
      "Faculty": "arts"
    },
    {
      "title": "ATS3287",
      "description": "War and peace: Models of conflict resolution",
      "Faculty": "arts"
    },
    {
      "title": "ATS3288",
      "description": "Renaissance Rome: The papacy and the world",
      "Faculty": "arts"
    },
    {
      "title": "ATS3290",
      "description": "Global leadership and advanced research program",
      "Faculty": "arts"
    },
    {
      "title": "ATS3295",
      "description": "Screening contemporary Europe",
      "Faculty": "arts"
    },
    {
      "title": "ATS3296",
      "description": "Musical theatre 1: History and form",
      "Faculty": "arts"
    },
    {
      "title": "ATS3297",
      "description": "Musical theatre 2: Skills and performance",
      "Faculty": "arts"
    },
    {
      "title": "ATS3302",
      "description": "Global connections: Understanding cultural literacy",
      "Faculty": "arts"
    },
    {
      "title": "ATS3304",
      "description": "Forms of identity",
      "Faculty": "arts"
    },
    {
      "title": "ATS3305",
      "description": "Digital humanities: Expanding research paradigms",
      "Faculty": "arts"
    },
    {
      "title": "ATS3310",
      "description": "Writing in Australia",
      "Faculty": "arts"
    },
    {
      "title": "ATS3311",
      "description": "Text and community in Medieval and Renaissance Italy",
      "Faculty": "arts"
    },
    {
      "title": "ATS3312",
      "description": "Foreign bodies: Reading world crime fiction",
      "Faculty": "arts"
    },
    {
      "title": "ATS3314",
      "description": "Seeking justice: South Africa and Rwanda",
      "Faculty": "arts"
    },
    {
      "title": "ATS3315",
      "description": "Journalism and global change in Europe",
      "Faculty": "arts"
    },
    {
      "title": "ATS3319",
      "description": "Cultural diversity in contemporary Europe",
      "Faculty": "arts"
    },
    {
      "title": "ATS3331",
      "description": "Music - Overseas study program 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS3332",
      "description": "Music - Overseas study program 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS3335",
      "description": "International political economy",
      "Faculty": "arts"
    },
    {
      "title": "ATS3338",
      "description": "Understanding ancient cultures",
      "Faculty": "arts"
    },
    {
      "title": "ATS3339",
      "description": "Egypt: The broken reed?",
      "Faculty": "arts"
    },
    {
      "title": "ATS3340",
      "description": "International security studies",
      "Faculty": "arts"
    },
    {
      "title": "ATS3344",
      "description": "Archaeology in Italy",
      "Faculty": "arts"
    },
    {
      "title": "ATS3346",
      "description": "Imperial Rome: A study in power and perversion in the early empire",
      "Faculty": "arts"
    },
    {
      "title": "ATS3347",
      "description": "Minoans, Mycenaeans and Egypt",
      "Faculty": "arts"
    },
    {
      "title": "ATS3350",
      "description": "From Alexander to Kleopatra: The Hellenistic world and the rise of Rome",
      "Faculty": "arts"
    },
    {
      "title": "ATS3354",
      "description": "Interrogating racism: Indigenous Australians and the state",
      "Faculty": "arts"
    },
    {
      "title": "ATS3359",
      "description": "Hearing the country: Studies in Indigenous Australian ethnoecology",
      "Faculty": "arts"
    },
    {
      "title": "ATS3364",
      "description": "Indigenous Australian politics and activism",
      "Faculty": "arts"
    },
    {
      "title": "ATS3366",
      "description": "Australian Indigenous art and design",
      "Faculty": "arts"
    },
    {
      "title": "ATS3367",
      "description": "Australian Indigenous women",
      "Faculty": "arts"
    },
    {
      "title": "ATS3369",
      "description": "Indigenous Australian human rights",
      "Faculty": "arts"
    },
    {
      "title": "ATS3376",
      "description": "Anthropology of human rights",
      "Faculty": "arts"
    },
    {
      "title": "ATS3379",
      "description": "Fairy tale in Italy",
      "Faculty": "arts"
    },
    {
      "title": "ATS3386",
      "description": "Paradise lost? Sustainability and Australia",
      "Faculty": "arts"
    },
    {
      "title": "ATS3387",
      "description": "Beyond Gallipoli: Australians in the Great War",
      "Faculty": "arts"
    },
    {
      "title": "ATS3391",
      "description": "A world of sport: Business, politics and media",
      "Faculty": "arts"
    },
    {
      "title": "ATS3392",
      "description": "A Lonely Planet? travel, culture, power",
      "Faculty": "arts"
    },
    {
      "title": "ATS3394",
      "description": "Australia and Asia",
      "Faculty": "arts"
    },
    {
      "title": "ATS3399",
      "description": "The politics of identity",
      "Faculty": "arts"
    },
    {
      "title": "ATS3404",
      "description": "Eros and the body: Sexuality and body politics in the classical world",
      "Faculty": "arts"
    },
    {
      "title": "ATS3405",
      "description": "Critical theory and poststructuralism: Recent European philosophy",
      "Faculty": "arts"
    },
    {
      "title": "ATS3407",
      "description": "Psychoanalytic readings - Freud, Jung, Lacan",
      "Faculty": "arts"
    },
    {
      "title": "ATS3419",
      "description": "Aesthetics and European Philosophy",
      "Faculty": "arts"
    },
    {
      "title": "ATS3421",
      "description": "Literature and modernism",
      "Faculty": "arts"
    },
    {
      "title": "ATS3437",
      "description": "Communication and creativity",
      "Faculty": "arts"
    },
    {
      "title": "ATS3444",
      "description": "Inscribing Italy: Travels and imaginings",
      "Faculty": "arts"
    },
    {
      "title": "ATS3445",
      "description": "Communications ethics, policy and law",
      "Faculty": "arts"
    },
    {
      "title": "ATS3448",
      "description": "Screen theories and techniques",
      "Faculty": "arts"
    },
    {
      "title": "ATS3449",
      "description": "Media texts",
      "Faculty": "arts"
    },
    {
      "title": "ATS3450",
      "description": "Contemporary media theory",
      "Faculty": "arts"
    },
    {
      "title": "ATS3451",
      "description": "Freedom and control in the media",
      "Faculty": "arts"
    },
    {
      "title": "ATS3459",
      "description": "Prisons, power and punishment",
      "Faculty": "arts"
    },
    {
      "title": "ATS3462",
      "description": "Global crime and justice",
      "Faculty": "arts"
    },
    {
      "title": "ATS3464",
      "description": "Study tour: Comparative criminology USA",
      "Faculty": "arts"
    },
    {
      "title": "ATS3465",
      "description": "Human rights in the criminal justice sphere",
      "Faculty": "arts"
    },
    {
      "title": "ATS3466",
      "description": "Sex, gender and crime",
      "Faculty": "arts"
    },
    {
      "title": "ATS3472",
      "description": "Crime and violence: Town and country",
      "Faculty": "arts"
    },
    {
      "title": "ATS3473",
      "description": "Offender profiling",
      "Faculty": "arts"
    },
    {
      "title": "ATS3486",
      "description": "Renaissance literature: Power and desire",
      "Faculty": "arts"
    },
    {
      "title": "ATS3487",
      "description": "The Shadow of reason: Irrational literature in the eighteenth century",
      "Faculty": "arts"
    },
    {
      "title": "ATS3495",
      "description": "Interwar literature",
      "Faculty": "arts"
    },
    {
      "title": "ATS3496",
      "description": "Fairy-tale traditions",
      "Faculty": "arts"
    },
    {
      "title": "ATS3497",
      "description": "Popular writing and criticism",
      "Faculty": "arts"
    },
    {
      "title": "ATS3498",
      "description": "Contemporary fiction",
      "Faculty": "arts"
    },
    {
      "title": "ATS3499",
      "description": "Authorship and writing",
      "Faculty": "arts"
    },
    {
      "title": "ATS3502",
      "description": "Contemporary literature",
      "Faculty": "arts"
    },
    {
      "title": "ATS3503",
      "description": "Writing women",
      "Faculty": "arts"
    },
    {
      "title": "ATS3506",
      "description": "Poetry: Text and performance",
      "Faculty": "arts"
    },
    {
      "title": "ATS3509",
      "description": "Advanced poetry writing",
      "Faculty": "arts"
    },
    {
      "title": "ATS3518",
      "description": "Advanced fiction writing",
      "Faculty": "arts"
    },
    {
      "title": "ATS3529",
      "description": "Australian film and television: Nation, culture and identity",
      "Faculty": "arts"
    },
    {
      "title": "ATS3531",
      "description": "Gender and sexuality in film and television",
      "Faculty": "arts"
    },
    {
      "title": "ATS3536",
      "description": "Alternatives in film and television",
      "Faculty": "arts"
    },
    {
      "title": "ATS3539",
      "description": "Asian cinema and television",
      "Faculty": "arts"
    },
    {
      "title": "ATS3540",
      "description": "Documentary and realism in film and television",
      "Faculty": "arts"
    },
    {
      "title": "ATS3543",
      "description": "Australia's ancient Indigenous past: A 50,000 year archaeological odyssey",
      "Faculty": "arts"
    },
    {
      "title": "ATS3544",
      "description": "On a dig: Practical archaeology in the field",
      "Faculty": "arts"
    },
    {
      "title": "ATS3546",
      "description": "Environmental assessment and decision making",
      "Faculty": "arts"
    },
    {
      "title": "ATS3553",
      "description": "Field studies in regional sustainability",
      "Faculty": "arts"
    },
    {
      "title": "ATS3554",
      "description": "Resource evaluation and management",
      "Faculty": "arts"
    },
    {
      "title": "ATS3566",
      "description": "Researching the Past: (Re)discovering the voiceless",
      "Faculty": "arts"
    },
    {
      "title": "ATS3569",
      "description": "Australian history: Professional and political contexts",
      "Faculty": "arts"
    },
    {
      "title": "ATS3570",
      "description": "International relations",
      "Faculty": "arts"
    },
    {
      "title": "ATS3573",
      "description": "The Renaissance Codes: Art, magic and belief",
      "Faculty": "arts"
    },
    {
      "title": "ATS3574",
      "description": "Fears and fantasies: Deviance and criminality in the modern world",
      "Faculty": "arts"
    },
    {
      "title": "ATS3580",
      "description": "The modern Middle East",
      "Faculty": "arts"
    },
    {
      "title": "ATS3582",
      "description": "Arab-Israeli conflict",
      "Faculty": "arts"
    },
    {
      "title": "ATS3583",
      "description": "History and film: Nazi Germany and the Jewish Holocaust",
      "Faculty": "arts"
    },
    {
      "title": "ATS3584",
      "description": "Australia's black history",
      "Faculty": "arts"
    },
    {
      "title": "ATS3589",
      "description": "Medieval and early modern Britain",
      "Faculty": "arts"
    },
    {
      "title": "ATS3593",
      "description": "History of sexuality 1800 - to the present",
      "Faculty": "arts"
    },
    {
      "title": "ATS3597",
      "description": "Qualitative social research",
      "Faculty": "arts"
    },
    {
      "title": "ATS3599",
      "description": "Modern Israel: History, politics and society",
      "Faculty": "arts"
    },
    {
      "title": "ATS3608",
      "description": "Myth and meaning in ancient worlds",
      "Faculty": "arts"
    },
    {
      "title": "ATS3611",
      "description": "Imagining God: The mystic quest in Judaism, Christianity and Islam",
      "Faculty": "arts"
    },
    {
      "title": "ATS3612",
      "description": "The Renaissance in Florence",
      "Faculty": "arts"
    },
    {
      "title": "ATS3616",
      "description": "Making America modern: Race, power and belonging in the twentieth-century",
      "Faculty": "arts"
    },
    {
      "title": "ATS3623",
      "description": "Nationality, ethnicity and conflict",
      "Faculty": "arts"
    },
    {
      "title": "ATS3626",
      "description": "Global disasters: Catastrophe and social change",
      "Faculty": "arts"
    },
    {
      "title": "ATS3627",
      "description": "Global cultures, media flows: creating and consuming (popular) culture",
      "Faculty": "arts"
    },
    {
      "title": "ATS3631",
      "description": "The idea of travel: Global perspectives",
      "Faculty": "arts"
    },
    {
      "title": "ATS3632",
      "description": "Post-conflict: Justice, memory, reconciliation",
      "Faculty": "arts"
    },
    {
      "title": "ATS3634",
      "description": "Indigenous peoples globally",
      "Faculty": "arts"
    },
    {
      "title": "ATS3636",
      "description": "Sacred and profane: Religion, the secular and the state",
      "Faculty": "arts"
    },
    {
      "title": "ATS3639",
      "description": "Poverty, climate change and international justice",
      "Faculty": "arts"
    },
    {
      "title": "ATS3645",
      "description": "Journalism and global change",
      "Faculty": "arts"
    },
    {
      "title": "ATS3649",
      "description": "Japanese: Language and society",
      "Faculty": "arts"
    },
    {
      "title": "ATS3652",
      "description": "Japan as empire: From Meiji to 1945",
      "Faculty": "arts"
    },
    {
      "title": "ATS3656",
      "description": "e-journalism",
      "Faculty": "arts"
    },
    {
      "title": "ATS3658",
      "description": "Journalism ethics",
      "Faculty": "arts"
    },
    {
      "title": "ATS3665",
      "description": "Language endangerment",
      "Faculty": "arts"
    },
    {
      "title": "ATS3666",
      "description": "Eastern Austronesian languages of Indonesia, East Timor and Oceania",
      "Faculty": "arts"
    },
    {
      "title": "ATS3667",
      "description": "Language across time",
      "Faculty": "arts"
    },
    {
      "title": "ATS3668",
      "description": "Descriptive syntax: Grammatical structure, typology and universals",
      "Faculty": "arts"
    },
    {
      "title": "ATS3669",
      "description": "Phonetics and phonology",
      "Faculty": "arts"
    },
    {
      "title": "ATS3671",
      "description": "Managing intercultural communication",
      "Faculty": "arts"
    },
    {
      "title": "ATS3672",
      "description": "Computational linguistics: An introduction",
      "Faculty": "arts"
    },
    {
      "title": "ATS3673",
      "description": "History and sociolinguistics of English",
      "Faculty": "arts"
    },
    {
      "title": "ATS3674",
      "description": "Semantics and pragmatics: The study of meaning in human languages",
      "Faculty": "arts"
    },
    {
      "title": "ATS3677",
      "description": "Aboriginal languages of Australia",
      "Faculty": "arts"
    },
    {
      "title": "ATS3678",
      "description": "Language and identity",
      "Faculty": "arts"
    },
    {
      "title": "ATS3679",
      "description": "Psycholinguistics and child language acquisition",
      "Faculty": "arts"
    },
    {
      "title": "ATS3680",
      "description": "Literacies and communication: Education, media and cyberspace",
      "Faculty": "arts"
    },
    {
      "title": "ATS3682",
      "description": "Second language acquisition and attrition",
      "Faculty": "arts"
    },
    {
      "title": "ATS3690",
      "description": "Reflections on humanity: Truth, freedom and power",
      "Faculty": "arts"
    },
    {
      "title": "ATS3695",
      "description": "Public policy",
      "Faculty": "arts"
    },
    {
      "title": "ATS3697",
      "description": "Gender and international relations",
      "Faculty": "arts"
    },
    {
      "title": "ATS3705",
      "description": "Knowledge and power in world politics",
      "Faculty": "arts"
    },
    {
      "title": "ATS3713",
      "description": "Field education and practice",
      "Faculty": "arts"
    },
    {
      "title": "ATS3715",
      "description": "Sexuality and society",
      "Faculty": "arts"
    },
    {
      "title": "ATS3717",
      "description": "Health, culture and society",
      "Faculty": "arts"
    },
    {
      "title": "ATS3719",
      "description": "Modern political thought",
      "Faculty": "arts"
    },
    {
      "title": "ATS3725",
      "description": "Population and society",
      "Faculty": "arts"
    },
    {
      "title": "ATS3726",
      "description": "Critical social psychology",
      "Faculty": "arts"
    },
    {
      "title": "ATS3730",
      "description": "Sustainability and society",
      "Faculty": "arts"
    },
    {
      "title": "ATS3731",
      "description": "Regional and rural societies: People, place and nature",
      "Faculty": "arts"
    },
    {
      "title": "ATS3732",
      "description": "Communications and media studies: Contemporary debates",
      "Faculty": "arts"
    },
    {
      "title": "ATS3733",
      "description": "Work and technology",
      "Faculty": "arts"
    },
    {
      "title": "ATS3734",
      "description": "Sociology of deviance",
      "Faculty": "arts"
    },
    {
      "title": "ATS3736",
      "description": "Environmental sociology",
      "Faculty": "arts"
    },
    {
      "title": "ATS3737",
      "description": "Social justice",
      "Faculty": "arts"
    },
    {
      "title": "ATS3739",
      "description": "Sex and gender in society",
      "Faculty": "arts"
    },
    {
      "title": "ATS3743",
      "description": "Build your career: Planning and strategies for employability",
      "Faculty": "arts"
    },
    {
      "title": "ATS3745",
      "description": "Global indigenous studies",
      "Faculty": "arts"
    },
    {
      "title": "ATS3760",
      "description": "Global communications",
      "Faculty": "arts"
    },
    {
      "title": "ATS3774",
      "description": "Directing workshop",
      "Faculty": "arts"
    },
    {
      "title": "ATS3775",
      "description": "Theatre internship unit",
      "Faculty": "arts"
    },
    {
      "title": "ATS3776",
      "description": "Script development 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS3778",
      "description": "Englishes in the global context",
      "Faculty": "arts"
    },
    {
      "title": "ATS3779",
      "description": "Cultural linguistics",
      "Faculty": "arts"
    },
    {
      "title": "ATS3780",
      "description": "English as an international language: Language and education",
      "Faculty": "arts"
    },
    {
      "title": "ATS3781",
      "description": "English as an international language: Writing across cultures",
      "Faculty": "arts"
    },
    {
      "title": "ATS3782",
      "description": "Bodies of work",
      "Faculty": "arts"
    },
    {
      "title": "ATS3786",
      "description": "Journalism, law and ethics",
      "Faculty": "arts"
    },
    {
      "title": "ATS3789",
      "description": "Video journalism",
      "Faculty": "arts"
    },
    {
      "title": "ATS3793",
      "description": "Global research",
      "Faculty": "arts"
    },
    {
      "title": "ATS3795",
      "description": "Global correspondent",
      "Faculty": "arts"
    },
    {
      "title": "ATS3796",
      "description": "Industry placement",
      "Faculty": "arts"
    },
    {
      "title": "ATS3797",
      "description": "Truth, power and structure: Understanding history and politics",
      "Faculty": "arts"
    },
    {
      "title": "ATS3798",
      "description": "Global Shakespeares",
      "Faculty": "arts"
    },
    {
      "title": "ATS3802",
      "description": "Journalism practice and discourse",
      "Faculty": "arts"
    },
    {
      "title": "ATS3808",
      "description": "Investigative reporting",
      "Faculty": "arts"
    },
    {
      "title": "ATS3811",
      "description": "Journalism professional placement",
      "Faculty": "arts"
    },
    {
      "title": "ATS3814",
      "description": "Yiddish Language, culture and literature 3A",
      "Faculty": "arts"
    },
    {
      "title": "ATS3815",
      "description": "Yiddish Language, culture and literature 3B",
      "Faculty": "arts"
    },
    {
      "title": "ATS3816",
      "description": "The social context of language learning",
      "Faculty": "arts"
    },
    {
      "title": "ATS3818",
      "description": "Drumming traditions of West Africa",
      "Faculty": "arts"
    },
    {
      "title": "ATS3819",
      "description": "Orchestration",
      "Faculty": "arts"
    },
    {
      "title": "ATS3820",
      "description": "Conducting",
      "Faculty": "arts"
    },
    {
      "title": "ATS3821",
      "description": "Critical perspectives on new musical works",
      "Faculty": "arts"
    },
    {
      "title": "ATS3823",
      "description": "Improvising musical traditions of South Asia",
      "Faculty": "arts"
    },
    {
      "title": "ATS3824",
      "description": "Popular music and society",
      "Faculty": "arts"
    },
    {
      "title": "ATS3825",
      "description": "Western art music in the 20th and 21st century",
      "Faculty": "arts"
    },
    {
      "title": "ATS3828",
      "description": "Film music",
      "Faculty": "arts"
    },
    {
      "title": "ATS3829",
      "description": "East Asia and its music: Silk road histories and popular contexts",
      "Faculty": "arts"
    },
    {
      "title": "ATS3833",
      "description": "Writing/Performance",
      "Faculty": "arts"
    },
    {
      "title": "ATS3834",
      "description": "Production investigation III",
      "Faculty": "arts"
    },
    {
      "title": "ATS3836",
      "description": "Victorian parliamentary internship",
      "Faculty": "arts"
    },
    {
      "title": "ATS3837",
      "description": "Internal-external communication and reputation management",
      "Faculty": "arts"
    },
    {
      "title": "ATS3838",
      "description": "Public relations campaigns",
      "Faculty": "arts"
    },
    {
      "title": "ATS3842",
      "description": "Sport psychology",
      "Faculty": "arts"
    },
    {
      "title": "ATS3843",
      "description": "Psychology and the workplace",
      "Faculty": "arts"
    },
    {
      "title": "ATS3844",
      "description": "Forensic psychology",
      "Faculty": "arts"
    },
    {
      "title": "ATS3846",
      "description": "People and other animals: A social science perspective",
      "Faculty": "arts"
    },
    {
      "title": "ATS3848",
      "description": "Insights into practice",
      "Faculty": "arts"
    },
    {
      "title": "ATS3850",
      "description": "Human services management and practice",
      "Faculty": "arts"
    },
    {
      "title": "ATS3851",
      "description": "Social policy",
      "Faculty": "arts"
    },
    {
      "title": "ATS3852",
      "description": "Contemporary issues in social science research",
      "Faculty": "arts"
    },
    {
      "title": "ATS3855",
      "description": "Making sense of the social world",
      "Faculty": "arts"
    },
    {
      "title": "ATS3857",
      "description": "Writing techniques",
      "Faculty": "arts"
    },
    {
      "title": "ATS3858",
      "description": "Writing experiments",
      "Faculty": "arts"
    },
    {
      "title": "ATS3862",
      "description": "Thinking about religion",
      "Faculty": "arts"
    },
    {
      "title": "ATS3867",
      "description": "Crime fiction and film in Hispanic cultures",
      "Faculty": "arts"
    },
    {
      "title": "ATS3869",
      "description": "Political philosophy",
      "Faculty": "arts"
    },
    {
      "title": "ATS3870",
      "description": "Philosophy of religion",
      "Faculty": "arts"
    },
    {
      "title": "ATS3873",
      "description": "Philosophical issues in applied ethics",
      "Faculty": "arts"
    },
    {
      "title": "ATS3876",
      "description": "Theory of knowledge",
      "Faculty": "arts"
    },
    {
      "title": "ATS3877",
      "description": "Philosophy of Jean-Paul Sartre and Simone de Beauvoir",
      "Faculty": "arts"
    },
    {
      "title": "ATS3878",
      "description": "Recent logic",
      "Faculty": "arts"
    },
    {
      "title": "ATS3879",
      "description": "Philosophy of language",
      "Faculty": "arts"
    },
    {
      "title": "ATS3882",
      "description": "Metaphysics",
      "Faculty": "arts"
    },
    {
      "title": "ATS3883",
      "description": "Issues in logical theory",
      "Faculty": "arts"
    },
    {
      "title": "ATS3884",
      "description": "Foundations of modern philosophy: Love and other passions",
      "Faculty": "arts"
    },
    {
      "title": "ATS3885",
      "description": "Stoic and epicurean philosophy",
      "Faculty": "arts"
    },
    {
      "title": "ATS3888",
      "description": "Race and class in American Literature",
      "Faculty": "arts"
    },
    {
      "title": "ATS3892",
      "description": "Dramaturgy 3: Contexts",
      "Faculty": "arts"
    },
    {
      "title": "ATS3894",
      "description": "Accommodating minorities in Australia?",
      "Faculty": "arts"
    },
    {
      "title": "ATS3895",
      "description": "Gender, race and journalism",
      "Faculty": "arts"
    },
    {
      "title": "ATS3896",
      "description": "Photojournalism",
      "Faculty": "arts"
    },
    {
      "title": "ATS3897",
      "description": "Borderless media in East Asia",
      "Faculty": "arts"
    },
    {
      "title": "ATS3898",
      "description": "The Italian city: Historical and literary perspectives",
      "Faculty": "arts"
    },
    {
      "title": "ATS3899",
      "description": "Jazz arranging: Contemporary arranging techniques for small groups to large ensembles",
      "Faculty": "arts"
    },
    {
      "title": "ATS3900",
      "description": "Jazz composition: From Tin Pan Alley to today",
      "Faculty": "arts"
    },
    {
      "title": "ATS3903",
      "description": "Leaders, power and politics",
      "Faculty": "arts"
    },
    {
      "title": "ATS3905",
      "description": "Democratic theory",
      "Faculty": "arts"
    },
    {
      "title": "ATS3908",
      "description": "American empire: The United States from colonies to superpower",
      "Faculty": "arts"
    },
    {
      "title": "ATS3912",
      "description": "Performance studies 2 - Cultures",
      "Faculty": "arts"
    },
    {
      "title": "ATS3913",
      "description": "Playtext study 2 - Shakespearean stages",
      "Faculty": "arts"
    },
    {
      "title": "ATS3917",
      "description": "Representing war: Censorship, propaganda and art",
      "Faculty": "arts"
    },
    {
      "title": "ATS3918",
      "description": "International journalism professional project",
      "Faculty": "arts"
    },
    {
      "title": "ATS3919",
      "description": "Journalism professional placement",
      "Faculty": "arts"
    },
    {
      "title": "ATS3926",
      "description": "Gongs, punks and shadow plays",
      "Faculty": "arts"
    },
    {
      "title": "ATS3929",
      "description": "Sociology of race and ethnic relations",
      "Faculty": "arts"
    },
    {
      "title": "ATS3930",
      "description": "Encounters and empire: Europe and the world",
      "Faculty": "arts"
    },
    {
      "title": "ATS3931",
      "description": "Making digital history",
      "Faculty": "arts"
    },
    {
      "title": "ATS3933",
      "description": "The meaning of things: Writing cultural history",
      "Faculty": "arts"
    },
    {
      "title": "ATS3934",
      "description": "Global indigeneity: Performance and spectacle from the eighteenth to the twenty-first century",
      "Faculty": "arts"
    },
    {
      "title": "ATS3937",
      "description": "Contemporary issues in European criminal justice",
      "Faculty": "arts"
    },
    {
      "title": "ATS3948",
      "description": "Internship (undergraduate)",
      "Faculty": "arts"
    },
    {
      "title": "ATS3951",
      "description": "Japanese popular culture and identity",
      "Faculty": "arts"
    },
    {
      "title": "ATS3952",
      "description": "The world of textiles",
      "Faculty": "arts"
    },
    {
      "title": "ATS3954",
      "description": "Media industry project",
      "Faculty": "arts"
    },
    {
      "title": "ATS3955",
      "description": "Writing destruction: Literature of war",
      "Faculty": "arts"
    },
    {
      "title": "ATS3956",
      "description": "Trauma and memory in the modern world",
      "Faculty": "arts"
    },
    {
      "title": "ATS3957",
      "description": "Medieval Italy: Sites of encounter",
      "Faculty": "arts"
    },
    {
      "title": "ATS3958",
      "description": "Designing and debating research practice in contemporary Indigenous studies",
      "Faculty": "arts"
    },
    {
      "title": "ATS3969",
      "description": "Film and television studies in the digital era",
      "Faculty": "arts"
    },
    {
      "title": "ATS3970",
      "description": "Performing film and television criticism with new technologies",
      "Faculty": "arts"
    },
    {
      "title": "ATS3972",
      "description": "Imagining Ibero-America: Travels, texts and transnational encounters",
      "Faculty": "arts"
    },
    {
      "title": "ATS3974",
      "description": "European integration and security",
      "Faculty": "arts"
    },
    {
      "title": "ATS3976",
      "description": "Histoire(s) de rire: The stakes of literary laughter in France",
      "Faculty": "arts"
    },
    {
      "title": "ATS3978",
      "description": "Japanese communication in professional settings",
      "Faculty": "arts"
    },
    {
      "title": "ATS3987",
      "description": "Theories of theatre 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS4002",
      "description": "Honours research methods seminar",
      "Faculty": "arts"
    },
    {
      "title": "ATS4006",
      "description": "Political theology",
      "Faculty": "arts"
    },
    {
      "title": "ATS4137",
      "description": "Special reading unit 1 (Honours)",
      "Faculty": "arts"
    },
    {
      "title": "ATS4171",
      "description": "Advanced readings in media and communications studies",
      "Faculty": "arts"
    },
    {
      "title": "ATS4215",
      "description": "History archives workshop",
      "Faculty": "arts"
    },
    {
      "title": "ATS4216",
      "description": "History: Beyond the nation",
      "Faculty": "arts"
    },
    {
      "title": "ATS4217",
      "description": "Histories of place and space",
      "Faculty": "arts"
    },
    {
      "title": "ATS4218",
      "description": "Ideas in history",
      "Faculty": "arts"
    },
    {
      "title": "ATS4230",
      "description": "Arts honours thesis",
      "Faculty": "arts"
    },
    {
      "title": "ATS4231",
      "description": "Arts honours thesis A",
      "Faculty": "arts"
    },
    {
      "title": "ATS4232",
      "description": "Arts honours thesis B",
      "Faculty": "arts"
    },
    {
      "title": "ATS4235",
      "description": "Selected topics in theory and practice",
      "Faculty": "arts"
    },
    {
      "title": "ATS4256",
      "description": "Predynastic and early dynastic Egypt",
      "Faculty": "arts"
    },
    {
      "title": "ATS4257",
      "description": "Reading the ancient past",
      "Faculty": "arts"
    },
    {
      "title": "ATS4269",
      "description": "Rethinking theatre history",
      "Faculty": "arts"
    },
    {
      "title": "ATS4279",
      "description": "Historical film theory and criticism",
      "Faculty": "arts"
    },
    {
      "title": "ATS4280",
      "description": "Contemporary film theory and criticism",
      "Faculty": "arts"
    },
    {
      "title": "ATS4286",
      "description": "Final journey: Remembering the Holocaust",
      "Faculty": "arts"
    },
    {
      "title": "ATS4287",
      "description": "War and peace: Models of conflict resolution",
      "Faculty": "arts"
    },
    {
      "title": "ATS4289",
      "description": "Medieval dialogues: Reason, mysticism and society",
      "Faculty": "arts"
    },
    {
      "title": "ATS4290",
      "description": "Holocaust memories: Landscape, mourning, identity",
      "Faculty": "arts"
    },
    {
      "title": "ATS4296",
      "description": "Imagining Europe: Representations and images of a continent",
      "Faculty": "arts"
    },
    {
      "title": "ATS4297",
      "description": "Recording oral history: Theory and practice",
      "Faculty": "arts"
    },
    {
      "title": "ATS4301",
      "description": "Reading and writing history",
      "Faculty": "arts"
    },
    {
      "title": "ATS4311",
      "description": "Text and community in Medieval and Renaissance Italy",
      "Faculty": "arts"
    },
    {
      "title": "ATS4328",
      "description": "Grand theories of politics and international relations",
      "Faculty": "arts"
    },
    {
      "title": "ATS4333",
      "description": "Issues in politics, governance and research",
      "Faculty": "arts"
    },
    {
      "title": "ATS4345",
      "description": "Research methods in classical antiquity",
      "Faculty": "arts"
    },
    {
      "title": "ATS4348",
      "description": "Theme and genre in literary studies",
      "Faculty": "arts"
    },
    {
      "title": "ATS4367",
      "description": "Placement research project for honours in international studies",
      "Faculty": "arts"
    },
    {
      "title": "ATS4373",
      "description": "Honours professional project",
      "Faculty": "arts"
    },
    {
      "title": "ATS4374",
      "description": "Honours specialist seminar",
      "Faculty": "arts"
    },
    {
      "title": "ATS4375",
      "description": "Honours research seminar",
      "Faculty": "arts"
    },
    {
      "title": "ATS4388",
      "description": "Special topic in literary studies",
      "Faculty": "arts"
    },
    {
      "title": "ATS4451",
      "description": "Music honours thesis A",
      "Faculty": "arts"
    },
    {
      "title": "ATS4452",
      "description": "Music honours thesis B",
      "Faculty": "arts"
    },
    {
      "title": "ATS4653",
      "description": "Honours workshop",
      "Faculty": "arts"
    },
    {
      "title": "ATS4699",
      "description": "Criminology honours coursework: Research, practice and policy",
      "Faculty": "arts"
    },
    {
      "title": "ATS4702",
      "description": "Classical languages for researchers",
      "Faculty": "arts"
    },
    {
      "title": "ATS4810",
      "description": "Global justice: Civil and human rights after 1945",
      "Faculty": "arts"
    },
    {
      "title": "ATS4831",
      "description": "Special project: Performance part 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS4832",
      "description": "Special project: Performance part 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS4834",
      "description": "Music honours project",
      "Faculty": "arts"
    },
    {
      "title": "ATS4838",
      "description": "Special project: Composition part 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS4839",
      "description": "Special project: Composition part 2",
      "Faculty": "arts"
    },
    {
      "title": "ATS4868",
      "description": "Philosophy honours A",
      "Faculty": "arts"
    },
    {
      "title": "ATS4869",
      "description": "Philosophy honours B",
      "Faculty": "arts"
    },
    {
      "title": "ATS4924",
      "description": "Honours: Social sciences research methods",
      "Faculty": "arts"
    },
    {
      "title": "ATS4938",
      "description": "Special project: Creative music technology part 1",
      "Faculty": "arts"
    },
    {
      "title": "ATS4939",
      "description": "Special project: Creative music technology part 2",
      "Faculty": "arts"
    },
    {
      "title": "AZA1001",
      "description": "Introduction to development studies",
      "Faculty": "arts"
    },
    {
      "title": "AZA1010",
      "description": "Fundamentals of political science",
      "Faculty": "arts"
    },
    {
      "title": "AZA1011",
      "description": "Fundamentals of international relations",
      "Faculty": "arts"
    },
    {
      "title": "AZA1019",
      "description": "Psychology: Introduction 1A",
      "Faculty": "arts"
    },
    {
      "title": "AZA1020",
      "description": "Psychology: Introduction 1B",
      "Faculty": "arts"
    },
    {
      "title": "AZA1035",
      "description": "Principles of public relations practice",
      "Faculty": "arts"
    },
    {
      "title": "AZA1061",
      "description": "French and francophone studies 1",
      "Faculty": "arts"
    },
    {
      "title": "AZA1062",
      "description": "French and francophone studies 2",
      "Faculty": "arts"
    },
    {
      "title": "AZA1264",
      "description": "Ethics and biotechnology",
      "Faculty": "arts"
    },
    {
      "title": "AZA1279",
      "description": "Media and society",
      "Faculty": "arts"
    },
    {
      "title": "AZA1281",
      "description": "Explaining crime: Theory and practice",
      "Faculty": "arts"
    },
    {
      "title": "AZA1282",
      "description": "Introduction to Criminal Justice",
      "Faculty": "arts"
    },
    {
      "title": "AZA1285",
      "description": "Child and youth development in South Africa: A person-in-environment perspective",
      "Faculty": "arts"
    },
    {
      "title": "AZA1286",
      "description": "Child and youth development: A five-level developmental model",
      "Faculty": "arts"
    },
    {
      "title": "AZA1294",
      "description": "Reading Africa: An introduction",
      "Faculty": "arts"
    },
    {
      "title": "AZA1306",
      "description": "Introduction to human geography",
      "Faculty": "arts"
    },
    {
      "title": "AZA1308",
      "description": "Introduction to Physical Geography",
      "Faculty": "arts"
    },
    {
      "title": "AZA1325",
      "description": "International studies 1",
      "Faculty": "arts"
    },
    {
      "title": "AZA1326",
      "description": "International studies 2",
      "Faculty": "arts"
    },
    {
      "title": "AZA1328",
      "description": "Journalism 1: Introduction",
      "Faculty": "arts"
    },
    {
      "title": "AZA1329",
      "description": "Journalism 2: Introduction",
      "Faculty": "arts"
    },
    {
      "title": "AZA1365",
      "description": "Everyday life in sociological perspectives",
      "Faculty": "arts"
    },
    {
      "title": "AZA1366",
      "description": "Families, relationships, health and the media",
      "Faculty": "arts"
    },
    {
      "title": "AZA1371",
      "description": "Introduction to philosophy: Moral dilemmas and philosophy",
      "Faculty": "arts"
    },
    {
      "title": "AZA1433",
      "description": "Interpersonal communication",
      "Faculty": "arts"
    },
    {
      "title": "AZA2010",
      "description": "Political ideologies",
      "Faculty": "arts"
    },
    {
      "title": "AZA2012",
      "description": "Comparative politics",
      "Faculty": "arts"
    },
    {
      "title": "AZA2015",
      "description": "Biological and cognitive psychology",
      "Faculty": "arts"
    },
    {
      "title": "AZA2016",
      "description": "Public policy-making",
      "Faculty": "arts"
    },
    {
      "title": "AZA2030",
      "description": "Corporate Communication",
      "Faculty": "arts"
    },
    {
      "title": "AZA2035",
      "description": "Development communication",
      "Faculty": "arts"
    },
    {
      "title": "AZA2040",
      "description": "Issues, crises and social responsibility management",
      "Faculty": "arts"
    },
    {
      "title": "AZA2045",
      "description": "Public relations and the media",
      "Faculty": "arts"
    },
    {
      "title": "AZA2378",
      "description": "Development and the developing world",
      "Faculty": "arts"
    },
    {
      "title": "AZA2436",
      "description": "New media and cyber cultures",
      "Faculty": "arts"
    },
    {
      "title": "AZA2455",
      "description": "Child and adult development",
      "Faculty": "arts"
    },
    {
      "title": "AZA2460",
      "description": "Industrial and organisational psychology",
      "Faculty": "arts"
    },
    {
      "title": "AZA2461",
      "description": "Crime and punishment",
      "Faculty": "arts"
    },
    {
      "title": "AZA2470",
      "description": "Victimology in South Africa",
      "Faculty": "arts"
    },
    {
      "title": "AZA2490",
      "description": "Research assessment",
      "Faculty": "arts"
    },
    {
      "title": "AZA2495",
      "description": "Social and community psychology",
      "Faculty": "arts"
    },
    {
      "title": "AZA2549",
      "description": "Poverty and power: The uneven world",
      "Faculty": "arts"
    },
    {
      "title": "AZA2625",
      "description": "Places and spaces: International migration in the global age",
      "Faculty": "arts"
    },
    {
      "title": "AZA2627",
      "description": "Global and local cultures: Creating and consuming",
      "Faculty": "arts"
    },
    {
      "title": "AZA2633",
      "description": "World cities: A historical and comparative analysis",
      "Faculty": "arts"
    },
    {
      "title": "AZA2717",
      "description": "Medical sociology",
      "Faculty": "arts"
    },
    {
      "title": "AZA2719",
      "description": "Theoretical perspectives in political and social thought",
      "Faculty": "arts"
    },
    {
      "title": "AZA2723",
      "description": "Methodological issues in the social sciences",
      "Faculty": "arts"
    },
    {
      "title": "AZA2762",
      "description": "Health and safety guidelines for children and youth",
      "Faculty": "arts"
    },
    {
      "title": "AZA2763",
      "description": "Child and youth assessment: Risk and protective factors, signs and symptoms",
      "Faculty": "arts"
    },
    {
      "title": "AZA2764",
      "description": "Building support networks for children and families",
      "Faculty": "arts"
    },
    {
      "title": "AZA2765",
      "description": "Child and youth interventions: Individual, group and community interventions",
      "Faculty": "arts"
    },
    {
      "title": "AZA2785",
      "description": "Legal aspects of journalism",
      "Faculty": "arts"
    },
    {
      "title": "AZA2787",
      "description": "Journalism: An online perspective",
      "Faculty": "arts"
    },
    {
      "title": "AZA2789",
      "description": "Journalism: Video perspectives",
      "Faculty": "arts"
    },
    {
      "title": "AZA2939",
      "description": "Ethics and the modern world",
      "Faculty": "arts"
    },
    {
      "title": "AZA3010",
      "description": "Competing models of political economy",
      "Faculty": "arts"
    },
    {
      "title": "AZA3015",
      "description": "War, peace and international security",
      "Faculty": "arts"
    },
    {
      "title": "AZA3018",
      "description": "Research design and quantitative methods",
      "Faculty": "arts"
    },
    {
      "title": "AZA3031",
      "description": "Public relations campaigns and events",
      "Faculty": "arts"
    },
    {
      "title": "AZA3135",
      "description": "Abnormal behaviour",
      "Faculty": "arts"
    },
    {
      "title": "AZA3184",
      "description": "Public relations work integrated learning",
      "Faculty": "arts"
    },
    {
      "title": "AZA3259",
      "description": "Geographical information systems (GIS): Planning and decision making",
      "Faculty": "arts"
    },
    {
      "title": "AZA3301",
      "description": "Social inclusion internship: Working on migrant and refugee settlement in multicultural communities",
      "Faculty": "arts"
    },
    {
      "title": "AZA3360",
      "description": "Psychotherapy and Counselling",
      "Faculty": "arts"
    },
    {
      "title": "AZA3380",
      "description": "Sociology of development",
      "Faculty": "arts"
    },
    {
      "title": "AZA3417",
      "description": "Africa and its others",
      "Faculty": "arts"
    },
    {
      "title": "AZA3432",
      "description": "Managing communication in multicultural organisations",
      "Faculty": "arts"
    },
    {
      "title": "AZA3453",
      "description": "Research fundamentals",
      "Faculty": "arts"
    },
    {
      "title": "AZA3462",
      "description": "Psychological assessment",
      "Faculty": "arts"
    },
    {
      "title": "AZA3463",
      "description": "Criminal behaviour in South Africa: A psychosocial approach",
      "Faculty": "arts"
    },
    {
      "title": "AZA3465",
      "description": "Personality",
      "Faculty": "arts"
    },
    {
      "title": "AZA3466",
      "description": "Women and crime: Damsels in distress",
      "Faculty": "arts"
    },
    {
      "title": "AZA3467",
      "description": "Child justice: Human rights, law reform and socio-criminology of deviance",
      "Faculty": "arts"
    },
    {
      "title": "AZA3468",
      "description": "Forensic criminology: Victim and offender profiling",
      "Faculty": "arts"
    },
    {
      "title": "AZA3542",
      "description": "Geographical Information Systems: FOSS Geo-informatics",
      "Faculty": "arts"
    },
    {
      "title": "AZA3546",
      "description": "Environmental impact assessment",
      "Faculty": "arts"
    },
    {
      "title": "AZA3547",
      "description": "Urban planning, development and sustainability",
      "Faculty": "arts"
    },
    {
      "title": "AZA3548",
      "description": "Environmental policy and resource management",
      "Faculty": "arts"
    },
    {
      "title": "AZA3550",
      "description": "Climatology",
      "Faculty": "arts"
    },
    {
      "title": "AZA3629",
      "description": "Beliefs, religion and spirituality: A global perspective",
      "Faculty": "arts"
    },
    {
      "title": "AZA3640",
      "description": "Philosophy of war and global conflict",
      "Faculty": "arts"
    },
    {
      "title": "AZA3641",
      "description": "Diplomacy in contemporary international relations",
      "Faculty": "arts"
    },
    {
      "title": "AZA3643",
      "description": "Africa in the modern world",
      "Faculty": "arts"
    },
    {
      "title": "AZA3644",
      "description": "South Africa: Democracy and development",
      "Faculty": "arts"
    },
    {
      "title": "AZA3688",
      "description": "Foreign policy: Introduction",
      "Faculty": "arts"
    },
    {
      "title": "AZA3703",
      "description": "The global politics of arms control and disarmament",
      "Faculty": "arts"
    },
    {
      "title": "AZA3717",
      "description": "Medical sociology",
      "Faculty": "arts"
    },
    {
      "title": "AZA3720",
      "description": "Sociological perspectives on youth culture and social change",
      "Faculty": "arts"
    },
    {
      "title": "AZA3737",
      "description": "South Africa and African social justice",
      "Faculty": "arts"
    },
    {
      "title": "AZA3744",
      "description": "School of Social Science workplace internship",
      "Faculty": "arts"
    },
    {
      "title": "AZA3764",
      "description": "Consulting",
      "Faculty": "arts"
    },
    {
      "title": "AZA3769",
      "description": "Family functioning and child abuse: The child and youth care worker's role",
      "Faculty": "arts"
    },
    {
      "title": "AZA3770",
      "description": "Intermediary services in courts: Protecting the rights of the child and youth victim",
      "Faculty": "arts"
    },
    {
      "title": "AZA3771",
      "description": "Management of community projects: Working preventatively with children, youth and families",
      "Faculty": "arts"
    },
    {
      "title": "AZA3772",
      "description": "Field placements in child and youth care settings",
      "Faculty": "arts"
    },
    {
      "title": "AZA3806",
      "description": "Reporting economic and business issues",
      "Faculty": "arts"
    },
    {
      "title": "AZA3808",
      "description": "Investigative journalism in the South African and African context",
      "Faculty": "arts"
    },
    {
      "title": "AZA3810",
      "description": "Reporting sport and sport cultures",
      "Faculty": "arts"
    },
    {
      "title": "AZA3869",
      "description": "Political philosophy and justice",
      "Faculty": "arts"
    },
    {
      "title": "AZA3871",
      "description": "Environmentalism: A philosophical perspective",
      "Faculty": "arts"
    },
    {
      "title": "AZA3919",
      "description": "Professional placement in Journalism: South Africa",
      "Faculty": "arts"
    },
    {
      "title": "AZA4010",
      "description": "Selected topics in philosophy",
      "Faculty": "arts"
    },
    {
      "title": "AZA4020",
      "description": "Selected topics in journalism",
      "Faculty": "arts"
    },
    {
      "title": "AZA4110",
      "description": "Sociology selected topics",
      "Faculty": "arts"
    },
    {
      "title": "AZA4310",
      "description": "Child and youth care policy and leadership: Advocating for the rights of children and youth",
      "Faculty": "arts"
    },
    {
      "title": "AZA4420",
      "description": "Adult psychopathology",
      "Faculty": "arts"
    },
    {
      "title": "AZA4430",
      "description": "Counselling",
      "Faculty": "arts"
    },
    {
      "title": "AZA4440",
      "description": "Psychology research project",
      "Faculty": "arts"
    },
    {
      "title": "AZA4445",
      "description": "Social issues in psychology",
      "Faculty": "arts"
    },
    {
      "title": "AZA4450",
      "description": "Researching for social sciences and humanities",
      "Faculty": "arts"
    },
    {
      "title": "AZA4480",
      "description": "Psychological testing and assessment",
      "Faculty": "arts"
    },
    {
      "title": "AZA4721",
      "description": "Communication and media practice applied",
      "Faculty": "arts"
    },
    {
      "title": "AZA4743",
      "description": "Theoretical perspectives of conflict, crime, victimisation and criminal justice",
      "Faculty": "arts"
    },
    {
      "title": "AZA4778",
      "description": "Social science honours dissertation A",
      "Faculty": "arts"
    },
    {
      "title": "AZA4779",
      "description": "Social science honours dissertation B",
      "Faculty": "arts"
    },
    {
      "title": "AZA4810",
      "description": "The globalisation of civil and human rights",
      "Faculty": "arts"
    },
    {
      "title": "AZA4889",
      "description": "Advanced concepts in geography and environmental science",
      "Faculty": "arts"
    },
    {
      "title": "BCH2011",
      "description": "Structure and function of cellular biomolecules",
      "Faculty": "sci"
    },
    {
      "title": "BCH2022",
      "description": "Metabolic basis of human diseases",
      "Faculty": "sci"
    },
    {
      "title": "BCH3021",
      "description": "Cellular organisation: Organelle structure and function in health and disease",
      "Faculty": "sci"
    },
    {
      "title": "BCH3031",
      "description": "Functional genomics and molecular medicine",
      "Faculty": "sci"
    },
    {
      "title": "BCH3042",
      "description": "Cell signal transduction: Role in cancer and human disease",
      "Faculty": "sci"
    },
    {
      "title": "BCH3052",
      "description": "Protein biology: From sequence to structure and disease",
      "Faculty": "sci"
    },
    {
      "title": "BCH3990",
      "description": "Action in biochemistry research project",
      "Faculty": "sci"
    },
    {
      "title": "BEG3150",
      "description": "Industry based learning program",
      "Faculty": "buseco"
    },
    {
      "title": "BEH1032",
      "description": "Evidence based practice, research and population health in community based emergency health services",
      "Faculty": "med"
    },
    {
      "title": "BEH1041",
      "description": "Human development and health across the lifespan",
      "Faculty": "med"
    },
    {
      "title": "BEH1042",
      "description": "Law, ethics and professionalism",
      "Faculty": "med"
    },
    {
      "title": "BEH2012",
      "description": "Paramedic management of respiratory conditions",
      "Faculty": "med"
    },
    {
      "title": "BEH2032",
      "description": "Paramedic clinical practice 1",
      "Faculty": "med"
    },
    {
      "title": "BEH2131",
      "description": "Paramedic management of cardiovascular conditions",
      "Faculty": "med"
    },
    {
      "title": "BEH2141",
      "description": "The paramedic in the community",
      "Faculty": "med"
    },
    {
      "title": "BEH2152",
      "description": "Pharmacotherapy in community-based emergency health",
      "Faculty": "med"
    },
    {
      "title": "BEH2201",
      "description": "Paramedic management of mental health",
      "Faculty": "med"
    },
    {
      "title": "BEH3011",
      "description": "Paramedic management of medical conditions",
      "Faculty": "med"
    },
    {
      "title": "BEH3012",
      "description": "Clinical education, leadership and emergency preparedness",
      "Faculty": "med"
    },
    {
      "title": "BEH3022",
      "description": "Research and contemporary challenges in community based emergency health",
      "Faculty": "med"
    },
    {
      "title": "BEH3030",
      "description": "Integrated clinical practice",
      "Faculty": "med"
    },
    {
      "title": "BEH3032",
      "description": "Paramedic management of critical care specialty situations",
      "Faculty": "med"
    },
    {
      "title": "BEH3071",
      "description": "Extended care paramedic practice",
      "Faculty": "med"
    },
    {
      "title": "BEH3121",
      "description": "Paramedic management of toxicological and environmental conditions",
      "Faculty": "med"
    },
    {
      "title": "BEH3161",
      "description": "Paramedic management of maternal and neonatal health",
      "Faculty": "med"
    },
    {
      "title": "BEH4100",
      "description": "Honours literature review",
      "Faculty": "med"
    },
    {
      "title": "BEH4200",
      "description": "Honours research proposal",
      "Faculty": "med"
    },
    {
      "title": "BEH4300",
      "description": "Honours research report",
      "Faculty": "med"
    },
    {
      "title": "BES3120",
      "description": "Perspectives on global business issues",
      "Faculty": "buseco"
    },
    {
      "title": "BES4000",
      "description": "Research methodology 1",
      "Faculty": "buseco"
    },
    {
      "title": "BES4010",
      "description": "Research methodology 2",
      "Faculty": "buseco"
    },
    {
      "title": "BES4020",
      "description": "Directed studies 1",
      "Faculty": "buseco"
    },
    {
      "title": "BES4030",
      "description": "Directed studies 2",
      "Faculty": "buseco"
    },
    {
      "title": "BES4100",
      "description": "Research project and report",
      "Faculty": "buseco"
    },
    {
      "title": "BEW3100",
      "description": "Work placement program",
      "Faculty": "buseco"
    },
    {
      "title": "BEW4000",
      "description": "Research methodology 1",
      "Faculty": "buseco"
    },
    {
      "title": "BEW4010",
      "description": "Research methodology 2",
      "Faculty": "buseco"
    },
    {
      "title": "BEW4020",
      "description": "Directed studies 1",
      "Faculty": "buseco"
    },
    {
      "title": "BEW4030",
      "description": "Directed studies 2",
      "Faculty": "buseco"
    },
    {
      "title": "BEW4100",
      "description": "Research project and report",
      "Faculty": "buseco"
    },
    {
      "title": "BEX2001",
      "description": "You, money and life",
      "Faculty": "buseco"
    },
    {
      "title": "BEX2010",
      "description": "Intermediate macroeconomics",
      "Faculty": "buseco"
    },
    {
      "title": "BEX2410",
      "description": "Introductory econometrics",
      "Faculty": "buseco"
    },
    {
      "title": "BEX2440",
      "description": "Mathematics for economics and business",
      "Faculty": "buseco"
    },
    {
      "title": "BEX2520",
      "description": "Probability and statistical inference for economics and business",
      "Faculty": "buseco"
    },
    {
      "title": "BEX3000",
      "description": "Current issues in business",
      "Faculty": "buseco"
    },
    {
      "title": "BEX3001",
      "description": "Industry and community placement",
      "Faculty": "buseco"
    },
    {
      "title": "BEX3006",
      "description": "Industry based learning project",
      "Faculty": "buseco"
    },
    {
      "title": "BEX3012",
      "description": "Industry based learning project",
      "Faculty": "buseco"
    },
    {
      "title": "BEX3024",
      "description": "Industry based learning project",
      "Faculty": "buseco"
    },
    {
      "title": "BEX3106",
      "description": "Industry based learning project",
      "Faculty": "buseco"
    },
    {
      "title": "BEX3112",
      "description": "Industry based learning project",
      "Faculty": "buseco"
    },
    {
      "title": "BEX3120",
      "description": "Perspectives on global business issues",
      "Faculty": "buseco"
    },
    {
      "title": "BEX3150",
      "description": "Sustainability practice and organisations",
      "Faculty": "buseco"
    },
    {
      "title": "BEX3350",
      "description": "Investigative project in business",
      "Faculty": "buseco"
    },
    {
      "title": "BEX3351",
      "description": "Investigative project in business",
      "Faculty": "buseco"
    },
    {
      "title": "BEX3400",
      "description": "Principles of econometrics",
      "Faculty": "buseco"
    },
    {
      "title": "BEX3410",
      "description": "Applied econometrics",
      "Faculty": "buseco"
    },
    {
      "title": "BEX3411",
      "description": "Innovation and entrepreneurship",
      "Faculty": "buseco"
    },
    {
      "title": "BEX3450",
      "description": "Investigative project in business",
      "Faculty": "buseco"
    },
    {
      "title": "BEX3451",
      "description": "Investigative project in business",
      "Faculty": "buseco"
    },
    {
      "title": "BEX3460",
      "description": "Financial econometrics",
      "Faculty": "buseco"
    },
    {
      "title": "BEX3500",
      "description": "Current issues in commerce",
      "Faculty": "buseco"
    },
    {
      "title": "BEX3510",
      "description": "Modelling in finance and insurance",
      "Faculty": "buseco"
    },
    {
      "title": "BEX3555",
      "description": "Integrative business practices",
      "Faculty": "buseco"
    },
    {
      "title": "BEX3622",
      "description": "Issues in global business",
      "Faculty": "buseco"
    },
    {
      "title": "BEX3710",
      "description": "Labour economics",
      "Faculty": "buseco"
    },
    {
      "title": "BEX3722",
      "description": "Engaging with international business",
      "Faculty": "buseco"
    },
    {
      "title": "BEX4420",
      "description": "Microeconometrics",
      "Faculty": "buseco"
    },
    {
      "title": "BEX4460",
      "description": "Financial econometrics 2",
      "Faculty": "buseco"
    },
    {
      "title": "BEX4650",
      "description": "Microeconomics",
      "Faculty": "buseco"
    },
    {
      "title": "BEX4670",
      "description": "Economic development",
      "Faculty": "buseco"
    },
    {
      "title": "BEX4690",
      "description": "International trade",
      "Faculty": "buseco"
    },
    {
      "title": "BEX4810",
      "description": "Public economics",
      "Faculty": "buseco"
    },
    {
      "title": "BEX5000",
      "description": "Quantitative business research methods",
      "Faculty": "buseco"
    },
    {
      "title": "BEX5001",
      "description": "Industry and community project",
      "Faculty": "buseco"
    },
    {
      "title": "BEX5002",
      "description": "Commercialisation project A",
      "Faculty": "buseco"
    },
    {
      "title": "BEX5003",
      "description": "Commercialisation project B",
      "Faculty": "buseco"
    },
    {
      "title": "BEX5010",
      "description": "Qualitative business research methods",
      "Faculty": "buseco"
    },
    {
      "title": "BEX5012",
      "description": "Industry based learning project",
      "Faculty": "buseco"
    },
    {
      "title": "BEX5020",
      "description": "Research thesis proposal",
      "Faculty": "buseco"
    },
    {
      "title": "BEX5110",
      "description": "Special reading unit 2",
      "Faculty": "buseco"
    },
    {
      "title": "BEX5200",
      "description": "Climate change and carbon management strategies",
      "Faculty": "buseco"
    },
    {
      "title": "BEX5300",
      "description": "Applied financial econometrics",
      "Faculty": "buseco"
    },
    {
      "title": "BEX5411",
      "description": "Creativity and entrepreneurship",
      "Faculty": "buseco"
    },
    {
      "title": "BEX5460",
      "description": "Financial econometrics 2",
      "Faculty": "buseco"
    },
    {
      "title": "BEX5463",
      "description": "Advanced buyer behaviour",
      "Faculty": "buseco"
    },
    {
      "title": "BEX5479",
      "description": "Project evaluation",
      "Faculty": "buseco"
    },
    {
      "title": "BEX5650",
      "description": "Microeconomic theory",
      "Faculty": "buseco"
    },
    {
      "title": "BEX5660",
      "description": "Macroeconomic theory",
      "Faculty": "buseco"
    },
    {
      "title": "BEX5832",
      "description": "European business and society",
      "Faculty": "buseco"
    },
    {
      "title": "BEX5850",
      "description": "Mathematical economic theory",
      "Faculty": "buseco"
    },
    {
      "title": "BEX5870",
      "description": "Advanced health economics",
      "Faculty": "buseco"
    },
    {
      "title": "BEX5900",
      "description": "Microeconomics",
      "Faculty": "buseco"
    },
    {
      "title": "BEX5950",
      "description": "Business statistics",
      "Faculty": "buseco"
    },
    {
      "title": "BEX5973",
      "description": "Economic evaluation in health care",
      "Faculty": "buseco"
    },
    {
      "title": "BEX5975",
      "description": "Principles of health economics for developing countries",
      "Faculty": "buseco"
    },
    {
      "title": "BEX6010",
      "description": "Empirical finance",
      "Faculty": "buseco"
    },
    {
      "title": "BEX6011",
      "description": "Issues in asset pricing",
      "Faculty": "buseco"
    },
    {
      "title": "BEX6012",
      "description": "Corporate financial management",
      "Faculty": "buseco"
    },
    {
      "title": "BEX6013",
      "description": "Issues in financial institutions",
      "Faculty": "buseco"
    },
    {
      "title": "BEX6100",
      "description": "Advanced quantitative research methods",
      "Faculty": "buseco"
    },
    {
      "title": "BEX6200",
      "description": "Advanced qualitative research methods",
      "Faculty": "buseco"
    },
    {
      "title": "BEX6300",
      "description": "Philosophy of research",
      "Faculty": "buseco"
    },
    {
      "title": "BEX6400",
      "description": "Empirical methods for economic analysis",
      "Faculty": "buseco"
    },
    {
      "title": "BEX6500",
      "description": "Statistical inference",
      "Faculty": "buseco"
    },
    {
      "title": "BEX6510",
      "description": "Foundations of econometrics",
      "Faculty": "buseco"
    },
    {
      "title": "BEX6600",
      "description": "Research topics in advanced microeconomics",
      "Faculty": "buseco"
    },
    {
      "title": "BEX6650",
      "description": "Research topics in advanced microeconomics",
      "Faculty": "buseco"
    },
    {
      "title": "BEX6660",
      "description": "Research topics in advanced macroeconomics",
      "Faculty": "buseco"
    },
    {
      "title": "BEX6700",
      "description": "Research paper",
      "Faculty": "buseco"
    },
    {
      "title": "BEX6800",
      "description": "Advanced mathematical economic theory",
      "Faculty": "buseco"
    },
    {
      "title": "BEX6900",
      "description": "Research topics in advanced macroeconomic theory",
      "Faculty": "buseco"
    },
    {
      "title": "BEX6990",
      "description": "Research Strategies and Methods in Business Law",
      "Faculty": "buseco"
    },
    {
      "title": "BFB1001",
      "description": "Foundations of finance",
      "Faculty": "buseco"
    },
    {
      "title": "BFB2140",
      "description": "Corporate finance 1",
      "Faculty": "buseco"
    },
    {
      "title": "BFB3121",
      "description": "Investments and portfolio management",
      "Faculty": "buseco"
    },
    {
      "title": "BFC1001",
      "description": "Foundations of finance",
      "Faculty": "buseco"
    },
    {
      "title": "BFC2140",
      "description": "Corporate finance 1",
      "Faculty": "buseco"
    },
    {
      "title": "BFC2240",
      "description": "Equities and investment analysis",
      "Faculty": "buseco"
    },
    {
      "title": "BFC2340",
      "description": "Debt markets and fixed income securities",
      "Faculty": "buseco"
    },
    {
      "title": "BFC2751",
      "description": "Derivatives 1",
      "Faculty": "buseco"
    },
    {
      "title": "BFC3140",
      "description": "Corporate finance 2",
      "Faculty": "buseco"
    },
    {
      "title": "BFC3170",
      "description": "Management of financial intermediaries",
      "Faculty": "buseco"
    },
    {
      "title": "BFC3240",
      "description": "International finance",
      "Faculty": "buseco"
    },
    {
      "title": "BFC3340",
      "description": "Derivatives 2",
      "Faculty": "buseco"
    },
    {
      "title": "BFC3440",
      "description": "Pension and financial planning",
      "Faculty": "buseco"
    },
    {
      "title": "BFC3540",
      "description": "Modelling in finance",
      "Faculty": "buseco"
    },
    {
      "title": "BFC3999",
      "description": "Finance and society",
      "Faculty": "buseco"
    },
    {
      "title": "BFC5130",
      "description": "Case studies and research in banking and finance",
      "Faculty": "buseco"
    },
    {
      "title": "BFC5260",
      "description": "Money market dealing",
      "Faculty": "buseco"
    },
    {
      "title": "BFC5280",
      "description": "Institutional asset and liability management",
      "Faculty": "buseco"
    },
    {
      "title": "BFC5914",
      "description": "Bank lending",
      "Faculty": "buseco"
    },
    {
      "title": "BFC5915",
      "description": "Options, futures and risk management",
      "Faculty": "buseco"
    },
    {
      "title": "BFC5916",
      "description": "International banking",
      "Faculty": "buseco"
    },
    {
      "title": "BFC5925",
      "description": "Financial management theory",
      "Faculty": "buseco"
    },
    {
      "title": "BFC5926",
      "description": "Australian capital markets",
      "Faculty": "buseco"
    },
    {
      "title": "BFC5935",
      "description": "Portfolio management and theory",
      "Faculty": "buseco"
    },
    {
      "title": "BFF1001",
      "description": "Foundations of finance",
      "Faculty": "buseco"
    },
    {
      "title": "BFF2140",
      "description": "Corporate finance 1",
      "Faculty": "buseco"
    },
    {
      "title": "BFF2341",
      "description": "International financial management",
      "Faculty": "buseco"
    },
    {
      "title": "BFF2401",
      "description": "Commercial banking and finance",
      "Faculty": "buseco"
    },
    {
      "title": "BFF2701",
      "description": "Equity markets",
      "Faculty": "buseco"
    },
    {
      "title": "BFF2751",
      "description": "Derivatives 1",
      "Faculty": "buseco"
    },
    {
      "title": "BFF3111",
      "description": "Personal financial planning",
      "Faculty": "buseco"
    },
    {
      "title": "BFF3121",
      "description": "Investments and portfolio management",
      "Faculty": "buseco"
    },
    {
      "title": "BFF3301",
      "description": "Money market operations",
      "Faculty": "buseco"
    },
    {
      "title": "BFF3331",
      "description": "International banking and finance",
      "Faculty": "buseco"
    },
    {
      "title": "BFF3351",
      "description": "Investment banking",
      "Faculty": "buseco"
    },
    {
      "title": "BFF3651",
      "description": "Treasury management",
      "Faculty": "buseco"
    },
    {
      "title": "BFF3841",
      "description": "Credit analysis and lending management",
      "Faculty": "buseco"
    },
    {
      "title": "BFF3999",
      "description": "Financial institutions and society",
      "Faculty": "buseco"
    },
    {
      "title": "BFF5021",
      "description": "Case studies in risk management",
      "Faculty": "buseco"
    },
    {
      "title": "BFF5040",
      "description": "Advanced security analysis",
      "Faculty": "buseco"
    },
    {
      "title": "BFF5050",
      "description": "Global banking institutions and issues",
      "Faculty": "buseco"
    },
    {
      "title": "BFF5130",
      "description": "Case studies and research in banking and finance",
      "Faculty": "buseco"
    },
    {
      "title": "BFF5180",
      "description": "Research dissertation",
      "Faculty": "buseco"
    },
    {
      "title": "BFF5230",
      "description": "Global financial markets",
      "Faculty": "buseco"
    },
    {
      "title": "BFF5250",
      "description": "Corporate treasury management",
      "Faculty": "buseco"
    },
    {
      "title": "BFF5260",
      "description": "Money market dealing",
      "Faculty": "buseco"
    },
    {
      "title": "BFF5270",
      "description": "Funds management",
      "Faculty": "buseco"
    },
    {
      "title": "BFF5280",
      "description": "Institutional asset and liability management",
      "Faculty": "buseco"
    },
    {
      "title": "BFF5290",
      "description": "Advanced derivatives and quantitative finance",
      "Faculty": "buseco"
    },
    {
      "title": "BFF5300",
      "description": "Case studies in finance",
      "Faculty": "buseco"
    },
    {
      "title": "BFF5333",
      "description": "Project finance",
      "Faculty": "buseco"
    },
    {
      "title": "BFF5380",
      "description": "Credit risk modelling",
      "Faculty": "buseco"
    },
    {
      "title": "BFF5390",
      "description": "Advanced financial planning",
      "Faculty": "buseco"
    },
    {
      "title": "BFF5580",
      "description": "Mergers and acquisitions",
      "Faculty": "buseco"
    },
    {
      "title": "BFF5902",
      "description": "Introduction to risk principles",
      "Faculty": "buseco"
    },
    {
      "title": "BFF5904",
      "description": "New venture finance",
      "Faculty": "buseco"
    },
    {
      "title": "BFF5913",
      "description": "Financial planning",
      "Faculty": "buseco"
    },
    {
      "title": "BFF5914",
      "description": "Bank lending",
      "Faculty": "buseco"
    },
    {
      "title": "BFF5915",
      "description": "Options, futures and risk management",
      "Faculty": "buseco"
    },
    {
      "title": "BFF5916",
      "description": "International banking",
      "Faculty": "buseco"
    },
    {
      "title": "BFF5925",
      "description": "Financial management theory",
      "Faculty": "buseco"
    },
    {
      "title": "BFF5926",
      "description": "Australian capital markets",
      "Faculty": "buseco"
    },
    {
      "title": "BFF5935",
      "description": "Portfolio management and theory",
      "Faculty": "buseco"
    },
    {
      "title": "BFF5954",
      "description": "Business finance",
      "Faculty": "buseco"
    },
    {
      "title": "BFF5959",
      "description": "Accounting and finance for international managers",
      "Faculty": "buseco"
    },
    {
      "title": "BFF5973",
      "description": "International finance",
      "Faculty": "buseco"
    },
    {
      "title": "BFF5977",
      "description": "Risk financing and treasury management",
      "Faculty": "buseco"
    },
    {
      "title": "BFG2631",
      "description": "Financial management",
      "Faculty": "buseco"
    },
    {
      "title": "BFG3121",
      "description": "Investments and portfolio management",
      "Faculty": "buseco"
    },
    {
      "title": "BFM5959",
      "description": "Accounting and finance for international managers",
      "Faculty": "buseco"
    },
    {
      "title": "BFP1001",
      "description": "Foundations of finance",
      "Faculty": "buseco"
    },
    {
      "title": "BFP2140",
      "description": "Corporate finance 1",
      "Faculty": "buseco"
    },
    {
      "title": "BFP3400",
      "description": "Sport finance",
      "Faculty": "buseco"
    },
    {
      "title": "BFS2780",
      "description": "Corporate finance A",
      "Faculty": "buseco"
    },
    {
      "title": "BFS3790",
      "description": "Corporate finance B",
      "Faculty": "buseco"
    },
    {
      "title": "BFS5959",
      "description": "Accounting and finance for international managers",
      "Faculty": "buseco"
    },
    {
      "title": "BFW1001",
      "description": "Foundations of finance",
      "Faculty": "buseco"
    },
    {
      "title": "BFW1310",
      "description": "Introduction to Islamic banking and finance",
      "Faculty": "buseco"
    },
    {
      "title": "BFW2140",
      "description": "Corporate finance 1",
      "Faculty": "buseco"
    },
    {
      "title": "BFW2341",
      "description": "International financial management",
      "Faculty": "buseco"
    },
    {
      "title": "BFW2401",
      "description": "Commercial banking and finance",
      "Faculty": "buseco"
    },
    {
      "title": "BFW2751",
      "description": "Derivatives 1",
      "Faculty": "buseco"
    },
    {
      "title": "BFW3121",
      "description": "Investments and portfolio management",
      "Faculty": "buseco"
    },
    {
      "title": "BFW3331",
      "description": "International banking and finance",
      "Faculty": "buseco"
    },
    {
      "title": "BFW3540",
      "description": "Modelling in finance",
      "Faculty": "buseco"
    },
    {
      "title": "BFW3651",
      "description": "Treasury management",
      "Faculty": "buseco"
    },
    {
      "title": "BFW3652",
      "description": "Corporate treasury and credit management",
      "Faculty": "buseco"
    },
    {
      "title": "BFW3841",
      "description": "Credit analysis and lending management",
      "Faculty": "buseco"
    },
    {
      "title": "BFW3851",
      "description": "Behavioural finance",
      "Faculty": "buseco"
    },
    {
      "title": "BFX3355",
      "description": "Property investment",
      "Faculty": "buseco"
    },
    {
      "title": "BFX3871",
      "description": "International study program in banking and finance",
      "Faculty": "buseco"
    },
    {
      "title": "BFX4000",
      "description": "Research methods",
      "Faculty": "buseco"
    },
    {
      "title": "BFX4018",
      "description": "Honours research thesis",
      "Faculty": "buseco"
    },
    {
      "title": "BFX4030",
      "description": "Advanced modelling in finance",
      "Faculty": "buseco"
    },
    {
      "title": "BFX4060",
      "description": "Issues in corporate finance",
      "Faculty": "buseco"
    },
    {
      "title": "BFX4080",
      "description": "Issues in banking",
      "Faculty": "buseco"
    },
    {
      "title": "BFX4120",
      "description": "Issues in investments",
      "Faculty": "buseco"
    },
    {
      "title": "BFX5000",
      "description": "Research methods",
      "Faculty": "buseco"
    },
    {
      "title": "BFX5018",
      "description": "Research dissertation",
      "Faculty": "buseco"
    },
    {
      "title": "BFX5860",
      "description": "International study program in banking and finance",
      "Faculty": "buseco"
    },
    {
      "title": "BFZ5959",
      "description": "Accounting and finance for international managers",
      "Faculty": "buseco"
    },
    {
      "title": "BIO1011",
      "description": "Biology I",
      "Faculty": "sci"
    },
    {
      "title": "BIO1022",
      "description": "Biology II",
      "Faculty": "sci"
    },
    {
      "title": "BIO1042",
      "description": "Environmental biology",
      "Faculty": "sci"
    },
    {
      "title": "BIO1711",
      "description": "Vertebrate biology",
      "Faculty": "sci"
    },
    {
      "title": "BIO1722",
      "description": "Cell biology",
      "Faculty": "sci"
    },
    {
      "title": "BIO2011",
      "description": "Ecology and biodiversity",
      "Faculty": "sci"
    },
    {
      "title": "BIO2022",
      "description": "Evolutionary ecology",
      "Faculty": "sci"
    },
    {
      "title": "BIO2040",
      "description": "Conservation biology",
      "Faculty": "sci"
    },
    {
      "title": "BIO2060",
      "description": "Analytical methods in biology",
      "Faculty": "sci"
    },
    {
      "title": "BIO2181",
      "description": "Evolution of plant diversity",
      "Faculty": "sci"
    },
    {
      "title": "BIO2231",
      "description": "Animal diversity",
      "Faculty": "sci"
    },
    {
      "title": "BIO2242",
      "description": "Animal structure and function",
      "Faculty": "sci"
    },
    {
      "title": "BIO2800",
      "description": "Tropical field biology",
      "Faculty": "sci"
    },
    {
      "title": "BIO2810",
      "description": "Tropical ecology",
      "Faculty": "sci"
    },
    {
      "title": "BIO3011",
      "description": "Research methods in biology",
      "Faculty": "sci"
    },
    {
      "title": "BIO3021",
      "description": "Marine biology",
      "Faculty": "sci"
    },
    {
      "title": "BIO3052",
      "description": "Animal behaviour",
      "Faculty": "sci"
    },
    {
      "title": "BIO3070",
      "description": "Trends in ecology",
      "Faculty": "sci"
    },
    {
      "title": "BIO3082",
      "description": "Global change biology",
      "Faculty": "sci"
    },
    {
      "title": "BIO3091",
      "description": "Biology of Australian vegetation",
      "Faculty": "sci"
    },
    {
      "title": "BIO3111",
      "description": "Ecological applications",
      "Faculty": "sci"
    },
    {
      "title": "BIO3132",
      "description": "Biology of Australian vertebrates",
      "Faculty": "sci"
    },
    {
      "title": "BIO3800",
      "description": "Tropical environmental management",
      "Faculty": "sci"
    },
    {
      "title": "BIO3810",
      "description": "Tropical aquatic biology",
      "Faculty": "sci"
    },
    {
      "title": "BIO3820",
      "description": "Tropical terrestrial biology",
      "Faculty": "sci"
    },
    {
      "title": "BIO3990",
      "description": "Biology in action research project",
      "Faculty": "sci"
    },
    {
      "title": "BIO4100",
      "description": "Biology research project",
      "Faculty": "sci"
    },
    {
      "title": "BIO4180",
      "description": "Tropical environmental biology research project",
      "Faculty": "sci"
    },
    {
      "title": "BIO4200",
      "description": "Advanced coursework in biology",
      "Faculty": "sci"
    },
    {
      "title": "BIO4280",
      "description": "Honours coursework in tropical environmental biology",
      "Faculty": "sci"
    },
    {
      "title": "BMA1011",
      "description": "Foundations of anatomy and physiology for health practice 1",
      "Faculty": "med"
    },
    {
      "title": "BMA1012",
      "description": "Foundations of anatomy and physiology for health practice 2",
      "Faculty": "med"
    },
    {
      "title": "BMA1901",
      "description": "Human structure and function 1",
      "Faculty": "med"
    },
    {
      "title": "BMA1902",
      "description": "Human structure and function 2",
      "Faculty": "med"
    },
    {
      "title": "BMA1912",
      "description": "Human bioscience in nursing",
      "Faculty": "med"
    },
    {
      "title": "BMA2901",
      "description": "Processes of disease",
      "Faculty": "med"
    },
    {
      "title": "BMA2902",
      "description": "Communicable diseases",
      "Faculty": "med"
    },
    {
      "title": "BMA5011",
      "description": "Introduction to Anatomy and Physiology",
      "Faculty": "med"
    },
    {
      "title": "BME3032",
      "description": "Introduction to the health system",
      "Faculty": "med"
    },
    {
      "title": "BME3082",
      "description": "Fetal and neonatal development",
      "Faculty": "med"
    },
    {
      "title": "BMH4100",
      "description": "Biomedicine research project",
      "Faculty": "sci"
    },
    {
      "title": "BMH4110",
      "description": "Biomedicine research project part time A",
      "Faculty": "sci"
    },
    {
      "title": "BMH4120",
      "description": "Biomedicine research project part time B",
      "Faculty": "sci"
    },
    {
      "title": "BMH4200",
      "description": "Advanced studies in biomedicine",
      "Faculty": "sci"
    },
    {
      "title": "BMH4210",
      "description": "Advanced studies in biomedicine part time A",
      "Faculty": "sci"
    },
    {
      "title": "BMH4220",
      "description": "Advanced studies in biomedicine part time B",
      "Faculty": "sci"
    },
    {
      "title": "BMS1011",
      "description": "Biomedical chemistry",
      "Faculty": "med"
    },
    {
      "title": "BMS1021",
      "description": "Cells, tissues and organisms",
      "Faculty": "med"
    },
    {
      "title": "BMS1031",
      "description": "Medical biophysics",
      "Faculty": "med"
    },
    {
      "title": "BMS1042",
      "description": "Public health and preventive medicine",
      "Faculty": "med"
    },
    {
      "title": "BMS1052",
      "description": "Human neurobiology",
      "Faculty": "med"
    },
    {
      "title": "BMS1062",
      "description": "Molecular biology",
      "Faculty": "med"
    },
    {
      "title": "BMS2011",
      "description": "Structure of the human body: An evolutionary and functional perspective",
      "Faculty": "med"
    },
    {
      "title": "BMS2021",
      "description": "Human molecular cell biology",
      "Faculty": "med"
    },
    {
      "title": "BMS2031",
      "description": "Body systems",
      "Faculty": "med"
    },
    {
      "title": "BMS2042",
      "description": "Human genetics",
      "Faculty": "med"
    },
    {
      "title": "BMS2052",
      "description": "Microbes in health and disease",
      "Faculty": "med"
    },
    {
      "title": "BMS2062",
      "description": "Introduction to bioinformatics",
      "Faculty": "med"
    },
    {
      "title": "BMS3021",
      "description": "Molecular medicine and biotechnology",
      "Faculty": "med"
    },
    {
      "title": "BMS3031",
      "description": "Molecular mechanisms of disease",
      "Faculty": "med"
    },
    {
      "title": "BMS3052",
      "description": "Biomedical basis and epidemiology of human disease",
      "Faculty": "med"
    },
    {
      "title": "BMS3930",
      "description": "Action in biomedical science major research project",
      "Faculty": "med"
    },
    {
      "title": "BMS3990",
      "description": "Action in biomedical science minor research project",
      "Faculty": "med"
    },
    {
      "title": "BMS4100",
      "description": "Biomedical science research project",
      "Faculty": "med"
    },
    {
      "title": "BMS4200",
      "description": "Advanced studies in biomedical science",
      "Faculty": "med"
    },
    {
      "title": "BMS4301",
      "description": "Advanced studies in biomedical science",
      "Faculty": "med"
    },
    {
      "title": "BMS4302",
      "description": "Biomedical science research project",
      "Faculty": "med"
    },
    {
      "title": "BMS5001",
      "description": "Introduction to research and research methodology",
      "Faculty": "med"
    },
    {
      "title": "BMS5002",
      "description": "Research skills and techniques",
      "Faculty": "med"
    },
    {
      "title": "BMS5003",
      "description": "Infectious diseases and population health",
      "Faculty": "med"
    },
    {
      "title": "BMS5004",
      "description": "Advanced neuroscience",
      "Faculty": "med"
    },
    {
      "title": "BMS5005",
      "description": "Regenerative medicine and stem cells",
      "Faculty": "med"
    },
    {
      "title": "BMS5006",
      "description": "Cardiovascular biology and disease",
      "Faculty": "med"
    },
    {
      "title": "BMS5007",
      "description": "Biotechnology: Commercialising biomedical science",
      "Faculty": "med"
    },
    {
      "title": "BMS5008",
      "description": "Research project and thesis",
      "Faculty": "med"
    },
    {
      "title": "BMS5100",
      "description": "Research Project in Biomedical Sciences",
      "Faculty": "med"
    },
    {
      "title": "BMS5101",
      "description": "Research Project in Biomedical Sciences (Part-time)",
      "Faculty": "med"
    },
    {
      "title": "BMS5200",
      "description": "Advanced Studies in Biomedical Sciences",
      "Faculty": "med"
    },
    {
      "title": "BMS5201",
      "description": "Advanced Studies in Biomedical Sciences (Part-time)",
      "Faculty": "med"
    },
    {
      "title": "BND3101",
      "description": "Evidence based management",
      "Faculty": "med"
    },
    {
      "title": "BND3102",
      "description": "Introduction to dietetic practice",
      "Faculty": "med"
    },
    {
      "title": "BND3202",
      "description": "Food for dietetic practice",
      "Faculty": "med"
    },
    {
      "title": "BND3302",
      "description": "Dietetic practice 1",
      "Faculty": "med"
    },
    {
      "title": "BND4082",
      "description": "Improving the populations nutrition",
      "Faculty": "med"
    },
    {
      "title": "BND4092",
      "description": "Practice and research in public health nutrition",
      "Faculty": "med"
    },
    {
      "title": "BND4102",
      "description": "Practice and research in dietetics",
      "Faculty": "med"
    },
    {
      "title": "BND4402",
      "description": "Dietetic practice 2",
      "Faculty": "med"
    },
    {
      "title": "BNS3021",
      "description": "Neurochemistry and behaviour",
      "Faculty": "med"
    },
    {
      "title": "BNS3052",
      "description": "Drugs, brain and altered awareness",
      "Faculty": "med"
    },
    {
      "title": "BNS3062",
      "description": "Imaging and brain disorders",
      "Faculty": "med"
    },
    {
      "title": "BNS4100",
      "description": "Behavioural neuroscience honours: Research project",
      "Faculty": "med"
    },
    {
      "title": "BNS4200",
      "description": "Behavioural neuroscience honours: Research design and analysis",
      "Faculty": "med"
    },
    {
      "title": "BTB1010",
      "description": "Commercial Law",
      "Faculty": "buseco"
    },
    {
      "title": "BTB2220",
      "description": "Corporations law",
      "Faculty": "buseco"
    },
    {
      "title": "BTB3221",
      "description": "Taxation law and practice",
      "Faculty": "buseco"
    },
    {
      "title": "BTB3281",
      "description": "Marketing law",
      "Faculty": "buseco"
    },
    {
      "title": "BTB3350",
      "description": "Business taxation",
      "Faculty": "buseco"
    },
    {
      "title": "BTC1110",
      "description": "Commercial law",
      "Faculty": "buseco"
    },
    {
      "title": "BTC3150",
      "description": "Taxation law",
      "Faculty": "buseco"
    },
    {
      "title": "BTC3200",
      "description": "Finance law",
      "Faculty": "buseco"
    },
    {
      "title": "BTC3300",
      "description": "Marketing law",
      "Faculty": "buseco"
    },
    {
      "title": "BTC3350",
      "description": "Business taxation",
      "Faculty": "buseco"
    },
    {
      "title": "BTC5904",
      "description": "Law and commercial decisions",
      "Faculty": "buseco"
    },
    {
      "title": "BTF1010",
      "description": "Business law",
      "Faculty": "buseco"
    },
    {
      "title": "BTF2223",
      "description": "Corporate crime",
      "Faculty": "buseco"
    },
    {
      "title": "BTF2601",
      "description": "Banking law",
      "Faculty": "buseco"
    },
    {
      "title": "BTF3181",
      "description": "Marketing law",
      "Faculty": "buseco"
    },
    {
      "title": "BTF3888",
      "description": "Chinese taxation law",
      "Faculty": "buseco"
    },
    {
      "title": "BTF3931",
      "description": "Taxation law",
      "Faculty": "buseco"
    },
    {
      "title": "BTF5000",
      "description": "Corporate governance",
      "Faculty": "buseco"
    },
    {
      "title": "BTF5001",
      "description": "Business regulation and compliance",
      "Faculty": "buseco"
    },
    {
      "title": "BTF5050",
      "description": "Comparative business law in Asia",
      "Faculty": "buseco"
    },
    {
      "title": "BTF5060",
      "description": "The law of employment",
      "Faculty": "buseco"
    },
    {
      "title": "BTF5130",
      "description": "International law and policy",
      "Faculty": "buseco"
    },
    {
      "title": "BTF5150",
      "description": "Intellectual property and marketing law",
      "Faculty": "buseco"
    },
    {
      "title": "BTF5160",
      "description": "The globalisation of law and development in Asia",
      "Faculty": "buseco"
    },
    {
      "title": "BTF5170",
      "description": "Chinese business law",
      "Faculty": "buseco"
    },
    {
      "title": "BTF5180",
      "description": "Financial services regulation",
      "Faculty": "buseco"
    },
    {
      "title": "BTF5235",
      "description": "Workplace and investment taxation",
      "Faculty": "buseco"
    },
    {
      "title": "BTF5340",
      "description": "Regional trade governance",
      "Faculty": "buseco"
    },
    {
      "title": "BTF5501",
      "description": "Corporations law",
      "Faculty": "buseco"
    },
    {
      "title": "BTF5801",
      "description": "Masters research paper",
      "Faculty": "buseco"
    },
    {
      "title": "BTF5841",
      "description": "Human resources management law",
      "Faculty": "buseco"
    },
    {
      "title": "BTF5888",
      "description": "Chinese taxation law",
      "Faculty": "buseco"
    },
    {
      "title": "BTF5900",
      "description": "Major research project",
      "Faculty": "buseco"
    },
    {
      "title": "BTF5903",
      "description": "Law and business decisions",
      "Faculty": "buseco"
    },
    {
      "title": "BTF5904",
      "description": "Law and commercial decisions",
      "Faculty": "buseco"
    },
    {
      "title": "BTF5910",
      "description": "Sustainability regulation",
      "Faculty": "buseco"
    },
    {
      "title": "BTF5919",
      "description": "International trade law",
      "Faculty": "buseco"
    },
    {
      "title": "BTF5965",
      "description": "Taxation law",
      "Faculty": "buseco"
    },
    {
      "title": "BTG2220",
      "description": "Corporations law and trusts",
      "Faculty": "buseco"
    },
    {
      "title": "BTG2223",
      "description": "Corporate crime",
      "Faculty": "buseco"
    },
    {
      "title": "BTG3221",
      "description": "Taxation law and practice",
      "Faculty": "buseco"
    },
    {
      "title": "BTH1802",
      "description": "Fundamentals of biotechnology",
      "Faculty": "sci"
    },
    {
      "title": "BTH2732",
      "description": "Recombinant DNA technology",
      "Faculty": "sci"
    },
    {
      "title": "BTH2741",
      "description": "Biochemistry",
      "Faculty": "sci"
    },
    {
      "title": "BTH2752",
      "description": "Cellular metabolism",
      "Faculty": "sci"
    },
    {
      "title": "BTH2820",
      "description": "Crop science",
      "Faculty": "sci"
    },
    {
      "title": "BTH2830",
      "description": "Fundamentals of microbiology",
      "Faculty": "sci"
    },
    {
      "title": "BTH3012",
      "description": "Biotechnology science, industry and commercialisation",
      "Faculty": "sci"
    },
    {
      "title": "BTH3711",
      "description": "Food and industrial microbiology",
      "Faculty": "sci"
    },
    {
      "title": "BTH3722",
      "description": "Medical microbiology",
      "Faculty": "sci"
    },
    {
      "title": "BTH3732",
      "description": "Environmental microbiology",
      "Faculty": "sci"
    },
    {
      "title": "BTH3741",
      "description": "Medical cell biology",
      "Faculty": "sci"
    },
    {
      "title": "BTH3752",
      "description": "Molecular biology and biotechnology",
      "Faculty": "sci"
    },
    {
      "title": "BTH3800",
      "description": "Bioinformatics",
      "Faculty": "sci"
    },
    {
      "title": "BTH3820",
      "description": "Plant biotechnology",
      "Faculty": "sci"
    },
    {
      "title": "BTH3960",
      "description": "Interdisciplinary advanced practical in pharmacology and chemistry",
      "Faculty": "sci"
    },
    {
      "title": "BTH4100",
      "description": "Biotechnology research project",
      "Faculty": "sci"
    },
    {
      "title": "BTH4200",
      "description": "The practice of biotechnology",
      "Faculty": "sci"
    },
    {
      "title": "BTH4280",
      "description": "Honours coursework in biotechnology",
      "Faculty": "sci"
    },
    {
      "title": "BTM5903",
      "description": "Law and business decisions",
      "Faculty": "buseco"
    },
    {
      "title": "BTM5919",
      "description": "International trade law",
      "Faculty": "buseco"
    },
    {
      "title": "BTP1010",
      "description": "Business Law",
      "Faculty": "buseco"
    },
    {
      "title": "BTS1201",
      "description": "South Africa business law A",
      "Faculty": "buseco"
    },
    {
      "title": "BTS2201",
      "description": "South African business law B",
      "Faculty": "buseco"
    },
    {
      "title": "BTS2301",
      "description": "South African taxation A",
      "Faculty": "buseco"
    },
    {
      "title": "BTS3201",
      "description": "International trade law",
      "Faculty": "buseco"
    },
    {
      "title": "BTS3301",
      "description": "South African business law C",
      "Faculty": "buseco"
    },
    {
      "title": "BTS3302",
      "description": "South African taxation B",
      "Faculty": "buseco"
    },
    {
      "title": "BTS3303",
      "description": "South African taxation law C",
      "Faculty": "buseco"
    },
    {
      "title": "BTS5919",
      "description": "International trade law",
      "Faculty": "buseco"
    },
    {
      "title": "BTW1042",
      "description": "Malaysian business law",
      "Faculty": "buseco"
    },
    {
      "title": "BTW2122",
      "description": "South African taxation of businesses",
      "Faculty": "buseco"
    },
    {
      "title": "BTW2213",
      "description": "Malaysian company law",
      "Faculty": "buseco"
    },
    {
      "title": "BTW2220",
      "description": "Corporations law",
      "Faculty": "buseco"
    },
    {
      "title": "BTW2241",
      "description": "Comparative workplace relations law",
      "Faculty": "buseco"
    },
    {
      "title": "BTW2313",
      "description": "Malaysian corporate governance",
      "Faculty": "buseco"
    },
    {
      "title": "BTW2320",
      "description": "Current issues in corporate governance",
      "Faculty": "buseco"
    },
    {
      "title": "BTW3153",
      "description": "Malaysian income tax law",
      "Faculty": "buseco"
    },
    {
      "title": "BTW3201",
      "description": "International trade law",
      "Faculty": "buseco"
    },
    {
      "title": "BTW3221",
      "description": "Taxation law and practice",
      "Faculty": "buseco"
    },
    {
      "title": "BTW3233",
      "description": "Conventional and Islamic finance law",
      "Faculty": "buseco"
    },
    {
      "title": "BTW3241",
      "description": "Employment law",
      "Faculty": "buseco"
    },
    {
      "title": "BTW3243",
      "description": "Finance law",
      "Faculty": "buseco"
    },
    {
      "title": "BTW3281",
      "description": "Marketing law",
      "Faculty": "buseco"
    },
    {
      "title": "BTW3300",
      "description": "South African administration of deceased and insolvent estates",
      "Faculty": "buseco"
    },
    {
      "title": "BTX2000",
      "description": "Corporations law",
      "Faculty": "buseco"
    },
    {
      "title": "BTX3100",
      "description": "Sustainability regulation for business",
      "Faculty": "buseco"
    },
    {
      "title": "BTX3110",
      "description": "International trade law",
      "Faculty": "buseco"
    },
    {
      "title": "BTX3130",
      "description": "Stock exchange and derivatives law",
      "Faculty": "buseco"
    },
    {
      "title": "BTX3350",
      "description": "Business taxation",
      "Faculty": "buseco"
    },
    {
      "title": "BTX3650",
      "description": "Sports law",
      "Faculty": "buseco"
    },
    {
      "title": "BTX3699",
      "description": "Insolvency",
      "Faculty": "buseco"
    },
    {
      "title": "BTX3900",
      "description": "Research project in business law or taxation",
      "Faculty": "buseco"
    },
    {
      "title": "BTX3991",
      "description": "Employment law",
      "Faculty": "buseco"
    },
    {
      "title": "BTX4110",
      "description": "Directed studies",
      "Faculty": "buseco"
    },
    {
      "title": "BTX4130",
      "description": "Honours research thesis",
      "Faculty": "buseco"
    },
    {
      "title": "BTX4900",
      "description": "Research methods and proposal",
      "Faculty": "buseco"
    },
    {
      "title": "BTX5060",
      "description": "The law of employment",
      "Faculty": "buseco"
    },
    {
      "title": "BTX5150",
      "description": "Law of marketing",
      "Faculty": "buseco"
    },
    {
      "title": "BTX5160",
      "description": "The globalisation of law and development in Asia",
      "Faculty": "buseco"
    },
    {
      "title": "BTX5170",
      "description": "Chinese business law",
      "Faculty": "buseco"
    },
    {
      "title": "BTX5220",
      "description": "International issues in employment law",
      "Faculty": "buseco"
    },
    {
      "title": "BTX5801",
      "description": "Final research project",
      "Faculty": "buseco"
    },
    {
      "title": "BTX5841",
      "description": "Human resources management law",
      "Faculty": "buseco"
    },
    {
      "title": "CCS5100",
      "description": "Research Project in Medical Science",
      "Faculty": "med"
    },
    {
      "title": "CCS5101",
      "description": "Research Project in Medical Science (Part-time)",
      "Faculty": "med"
    },
    {
      "title": "CCS5200",
      "description": "Advanced Studies in Medical Science",
      "Faculty": "med"
    },
    {
      "title": "CCS5201",
      "description": "Advanced Studies in Medical Science (Part-time)",
      "Faculty": "med"
    },
    {
      "title": "CCS5300",
      "description": "Research Project in Health Sciences",
      "Faculty": "med"
    },
    {
      "title": "CCS5301",
      "description": "Research Project in Health Sciences (Part-time)",
      "Faculty": "med"
    },
    {
      "title": "CCS5400",
      "description": "Advanced Studies in Health Sciences",
      "Faculty": "med"
    },
    {
      "title": "CCS5401",
      "description": "Advanced Studies in Health Sciences (Part-time)",
      "Faculty": "med"
    },
    {
      "title": "CDS1001",
      "description": "Communication Design Studio 1A",
      "Faculty": "ada"
    },
    {
      "title": "CDS1002",
      "description": "Communication Design Studio 1B",
      "Faculty": "ada"
    },
    {
      "title": "CDS1511",
      "description": "Photographic art direction",
      "Faculty": "ada"
    },
    {
      "title": "CDS1531",
      "description": "Illustration for narrative",
      "Faculty": "ada"
    },
    {
      "title": "CDS2001",
      "description": "Communication Design Studio 2A",
      "Faculty": "ada"
    },
    {
      "title": "CDS2002",
      "description": "Communication Design Studio 2B",
      "Faculty": "ada"
    },
    {
      "title": "CDS2511",
      "description": "Branding for designers",
      "Faculty": "ada"
    },
    {
      "title": "CDS2512",
      "description": "Packaging design",
      "Faculty": "ada"
    },
    {
      "title": "CDS2521",
      "description": "Creative coding",
      "Faculty": "ada"
    },
    {
      "title": "CDS2522",
      "description": "Creative expression through physical computing",
      "Faculty": "ada"
    },
    {
      "title": "CDS2523",
      "description": "Creative visualisation",
      "Faculty": "ada"
    },
    {
      "title": "CDS2524",
      "description": "Unconventional publishing",
      "Faculty": "ada"
    },
    {
      "title": "CDS2531",
      "description": "Illustration for animation",
      "Faculty": "ada"
    },
    {
      "title": "CDS3001",
      "description": "Communication Design Studio 3A",
      "Faculty": "ada"
    },
    {
      "title": "CDS3002",
      "description": "Communication Design Studio 3B",
      "Faculty": "ada"
    },
    {
      "title": "CDS4001",
      "description": "Major project communication design part 1",
      "Faculty": "ada"
    },
    {
      "title": "CDS4002",
      "description": "Major project communication design part 2",
      "Faculty": "ada"
    },
    {
      "title": "CEM6881",
      "description": "Scanning electron microscopy",
      "Faculty": "eng"
    },
    {
      "title": "CEM6882",
      "description": "Transmission electron microscopy",
      "Faculty": "eng"
    },
    {
      "title": "CER1111",
      "description": "Ceramic practice and theory 1A",
      "Faculty": "ada"
    },
    {
      "title": "CER1112",
      "description": "Ceramic practice and theory 2A",
      "Faculty": "ada"
    },
    {
      "title": "CER2113",
      "description": "Ceramic practice and theory 3A",
      "Faculty": "ada"
    },
    {
      "title": "CER2114",
      "description": "Ceramic practice and theory 4A",
      "Faculty": "ada"
    },
    {
      "title": "CER2123",
      "description": "Ceramic practice and theory 3B",
      "Faculty": "ada"
    },
    {
      "title": "CER2124",
      "description": "Ceramic practice and theory 4B",
      "Faculty": "ada"
    },
    {
      "title": "CER3115",
      "description": "Ceramic practice and theory 5",
      "Faculty": "ada"
    },
    {
      "title": "CER3116",
      "description": "Ceramic practice and theory 6",
      "Faculty": "ada"
    },
    {
      "title": "CHE2161",
      "description": "Mechanics of fluids",
      "Faculty": "eng"
    },
    {
      "title": "CHE2162",
      "description": "Material and energy balances",
      "Faculty": "eng"
    },
    {
      "title": "CHE2163",
      "description": "Heat and mass transfer",
      "Faculty": "eng"
    },
    {
      "title": "CHE2164",
      "description": "Thermodynamics I",
      "Faculty": "eng"
    },
    {
      "title": "CHE2166",
      "description": "Introduction to process simulation",
      "Faculty": "eng"
    },
    {
      "title": "CHE2167",
      "description": "Process material selection",
      "Faculty": "eng"
    },
    {
      "title": "CHE2871",
      "description": "Biochemistry for engineers",
      "Faculty": "eng"
    },
    {
      "title": "CHE3161",
      "description": "Chemistry and chemical thermodynamics",
      "Faculty": "eng"
    },
    {
      "title": "CHE3162",
      "description": "Process control",
      "Faculty": "eng"
    },
    {
      "title": "CHE3163",
      "description": "Sustainable processing I",
      "Faculty": "eng"
    },
    {
      "title": "CHE3164",
      "description": "Reaction engineering",
      "Faculty": "eng"
    },
    {
      "title": "CHE3165",
      "description": "Separation processes",
      "Faculty": "eng"
    },
    {
      "title": "CHE3166",
      "description": "Process design",
      "Faculty": "eng"
    },
    {
      "title": "CHE3167",
      "description": "Transport phenomena and numerical methods",
      "Faculty": "eng"
    },
    {
      "title": "CHE3171",
      "description": "Bioprocess technology",
      "Faculty": "eng"
    },
    {
      "title": "CHE3172",
      "description": "Nanotechnology and materials 1",
      "Faculty": "eng"
    },
    {
      "title": "CHE4161",
      "description": "Engineer in society",
      "Faculty": "eng"
    },
    {
      "title": "CHE4162",
      "description": "Particle technology",
      "Faculty": "eng"
    },
    {
      "title": "CHE4164",
      "description": "Integrated industrial project",
      "Faculty": "eng"
    },
    {
      "title": "CHE4170",
      "description": "Design project",
      "Faculty": "eng"
    },
    {
      "title": "CHE4171",
      "description": "Biochemical engineering",
      "Faculty": "eng"
    },
    {
      "title": "CHE4172",
      "description": "Nanotechnology and materials 2",
      "Faculty": "eng"
    },
    {
      "title": "CHE4173",
      "description": "Sustainable processing 2",
      "Faculty": "eng"
    },
    {
      "title": "CHE4180",
      "description": "Chemical engineering project",
      "Faculty": "eng"
    },
    {
      "title": "CHE5167",
      "description": "Pulp and paper laboratory",
      "Faculty": "eng"
    },
    {
      "title": "CHE5290",
      "description": "Biomass resource and its utilisation",
      "Faculty": "eng"
    },
    {
      "title": "CHE5291",
      "description": "Engineering aspects of biomass pulping",
      "Faculty": "eng"
    },
    {
      "title": "CHE5292",
      "description": "Chemistry of biomass processing",
      "Faculty": "eng"
    },
    {
      "title": "CHE5293",
      "description": "Processing fibres into paper",
      "Faculty": "eng"
    },
    {
      "title": "CHE5294",
      "description": "Performance of paper products",
      "Faculty": "eng"
    },
    {
      "title": "CHE5295",
      "description": "Control of processes and quality",
      "Faculty": "eng"
    },
    {
      "title": "CHE5296",
      "description": "Minimising environmental impact",
      "Faculty": "eng"
    },
    {
      "title": "CHE5297",
      "description": "Recycling and contaminant removal",
      "Faculty": "eng"
    },
    {
      "title": "CHE5298",
      "description": "Biorefinery foundations",
      "Faculty": "eng"
    },
    {
      "title": "CHE5299",
      "description": "Biorefinery processes",
      "Faculty": "eng"
    },
    {
      "title": "CHE5881",
      "description": "Advanced reaction engineering",
      "Faculty": "eng"
    },
    {
      "title": "CHE5882",
      "description": "Biomass and biorefineries",
      "Faculty": "eng"
    },
    {
      "title": "CHE5883",
      "description": "Nanostructured membranes for separation and energy production",
      "Faculty": "eng"
    },
    {
      "title": "CHE5884",
      "description": "Process modeling and optimisation",
      "Faculty": "eng"
    },
    {
      "title": "CHE5885",
      "description": "Principles and practices for sustainable development",
      "Faculty": "eng"
    },
    {
      "title": "CHE6881",
      "description": "Advanced reaction engineering",
      "Faculty": "eng"
    },
    {
      "title": "CHE6882",
      "description": "Biomass and biorefineries",
      "Faculty": "eng"
    },
    {
      "title": "CHE6883",
      "description": "Nanostructured membranes for separation and energy production",
      "Faculty": "eng"
    },
    {
      "title": "CHE6884",
      "description": "Process modeling and optimisation",
      "Faculty": "eng"
    },
    {
      "title": "CHE6885",
      "description": "Principles and practices for sustainable development",
      "Faculty": "eng"
    },
    {
      "title": "CHM1011",
      "description": "Chemistry I",
      "Faculty": "sci"
    },
    {
      "title": "CHM1022",
      "description": "Chemistry II",
      "Faculty": "sci"
    },
    {
      "title": "CHM1051",
      "description": "Chemistry I advanced",
      "Faculty": "sci"
    },
    {
      "title": "CHM1052",
      "description": "Chemistry II advanced",
      "Faculty": "sci"
    },
    {
      "title": "CHM1752",
      "description": "Chemistry for engineering",
      "Faculty": "eng"
    },
    {
      "title": "CHM2752",
      "description": "Chemistry of the environment",
      "Faculty": "sci"
    },
    {
      "title": "CHM2911",
      "description": "Inorganic and organic chemistry",
      "Faculty": "sci"
    },
    {
      "title": "CHM2922",
      "description": "Spectroscopy and analytical chemistry",
      "Faculty": "sci"
    },
    {
      "title": "CHM2942",
      "description": "Biological chemistry",
      "Faculty": "sci"
    },
    {
      "title": "CHM2951",
      "description": "Environmental chemistry - water",
      "Faculty": "sci"
    },
    {
      "title": "CHM2962",
      "description": "Food chemistry",
      "Faculty": "sci"
    },
    {
      "title": "CHM2990",
      "description": "Introductory chemical research project",
      "Faculty": "sci"
    },
    {
      "title": "CHM3180",
      "description": "Materials chemistry",
      "Faculty": "sci"
    },
    {
      "title": "CHM3742",
      "description": "Chemistry of the environment 2",
      "Faculty": "sci"
    },
    {
      "title": "CHM3911",
      "description": "Advanced physical chemistry",
      "Faculty": "sci"
    },
    {
      "title": "CHM3922",
      "description": "Advanced organic chemistry",
      "Faculty": "sci"
    },
    {
      "title": "CHM3930",
      "description": "Medicinal chemistry",
      "Faculty": "sci"
    },
    {
      "title": "CHM3941",
      "description": "Advanced inorganic chemistry",
      "Faculty": "sci"
    },
    {
      "title": "CHM3952",
      "description": "Advanced analytical chemistry",
      "Faculty": "sci"
    },
    {
      "title": "CHM3960",
      "description": "Environmental chemistry",
      "Faculty": "sci"
    },
    {
      "title": "CHM3972",
      "description": "Sustainable chemistry",
      "Faculty": "sci"
    },
    {
      "title": "CHM3980",
      "description": "Chemistry study abroad",
      "Faculty": "sci"
    },
    {
      "title": "CHM3990",
      "description": "Chemistry project",
      "Faculty": "sci"
    },
    {
      "title": "CHM4100",
      "description": "Chemistry research project",
      "Faculty": "sci"
    },
    {
      "title": "CHM4110",
      "description": "Chemistry research project part time I",
      "Faculty": "sci"
    },
    {
      "title": "CHM4120",
      "description": "Chemistry research project part time II",
      "Faculty": "sci"
    },
    {
      "title": "CHM4180",
      "description": "Medicinal chemistry research project",
      "Faculty": "sci"
    },
    {
      "title": "CHM4201",
      "description": "Chemistry honours coursework",
      "Faculty": "sci"
    },
    {
      "title": "CHM4211",
      "description": "Chemistry honours coursework part time I",
      "Faculty": "sci"
    },
    {
      "title": "CHM4221",
      "description": "Chemistry honours coursework part time II",
      "Faculty": "sci"
    },
    {
      "title": "CHM4280",
      "description": "Honours coursework in medicinal chemistry",
      "Faculty": "sci"
    },
    {
      "title": "CIV2206",
      "description": "Mechanics of solids",
      "Faculty": "eng"
    },
    {
      "title": "CIV2207",
      "description": "Computing and water systems modelling",
      "Faculty": "eng"
    },
    {
      "title": "CIV2225",
      "description": "Design of steel and timber structures",
      "Faculty": "eng"
    },
    {
      "title": "CIV2226",
      "description": "Design of concrete and masonry structures",
      "Faculty": "eng"
    },
    {
      "title": "CIV2242",
      "description": "Geomechanics I",
      "Faculty": "eng"
    },
    {
      "title": "CIV2263",
      "description": "Water systems",
      "Faculty": "eng"
    },
    {
      "title": "CIV2282",
      "description": "Transport and traffic engineering",
      "Faculty": "eng"
    },
    {
      "title": "CIV2283",
      "description": "Civil engineering construction",
      "Faculty": "eng"
    },
    {
      "title": "CIV3203",
      "description": "Civil engineering construction",
      "Faculty": "eng"
    },
    {
      "title": "CIV3204",
      "description": "Engineering investigation",
      "Faculty": "eng"
    },
    {
      "title": "CIV3205",
      "description": "Project management for civil engineers",
      "Faculty": "eng"
    },
    {
      "title": "CIV3221",
      "description": "Building structures and technology",
      "Faculty": "eng"
    },
    {
      "title": "CIV3222",
      "description": "Bridge design and assessment",
      "Faculty": "eng"
    },
    {
      "title": "CIV3247",
      "description": "Geomechanics II",
      "Faculty": "eng"
    },
    {
      "title": "CIV3248",
      "description": "Groundwater and environmental geomechanics",
      "Faculty": "eng"
    },
    {
      "title": "CIV3264",
      "description": "Urban water and wastewater systems",
      "Faculty": "eng"
    },
    {
      "title": "CIV3283",
      "description": "Road engineering",
      "Faculty": "eng"
    },
    {
      "title": "CIV4210",
      "description": "Project A",
      "Faculty": "eng"
    },
    {
      "title": "CIV4211",
      "description": "Project B",
      "Faculty": "eng"
    },
    {
      "title": "CIV4212",
      "description": "Civil and environmental engineering practice",
      "Faculty": "eng"
    },
    {
      "title": "CIV4234",
      "description": "Advanced structural analysis",
      "Faculty": "eng"
    },
    {
      "title": "CIV4235",
      "description": "Advanced structural design",
      "Faculty": "eng"
    },
    {
      "title": "CIV4248",
      "description": "Ground hazards engineering",
      "Faculty": "eng"
    },
    {
      "title": "CIV4249",
      "description": "Foundation engineering",
      "Faculty": "eng"
    },
    {
      "title": "CIV4261",
      "description": "Integrated urban water management",
      "Faculty": "eng"
    },
    {
      "title": "CIV4268",
      "description": "Water resources management",
      "Faculty": "eng"
    },
    {
      "title": "CIV4283",
      "description": "Transport planning",
      "Faculty": "eng"
    },
    {
      "title": "CIV4284",
      "description": "Traffic systems",
      "Faculty": "eng"
    },
    {
      "title": "CIV5301",
      "description": "Advanced traffic engineering",
      "Faculty": "eng"
    },
    {
      "title": "CIV5302",
      "description": "Traffic engineering and management",
      "Faculty": "eng"
    },
    {
      "title": "CIV5303",
      "description": "Quantitative methods",
      "Faculty": "eng"
    },
    {
      "title": "CIV5304",
      "description": "Intelligent transport systems",
      "Faculty": "eng"
    },
    {
      "title": "CIV5305",
      "description": "Travel demand modelling",
      "Faculty": "eng"
    },
    {
      "title": "CIV5306",
      "description": "Road safety engineering",
      "Faculty": "eng"
    },
    {
      "title": "CIV5308",
      "description": "Transport and traffic systems project",
      "Faculty": "eng"
    },
    {
      "title": "CIV5309",
      "description": "Transport and traffic data",
      "Faculty": "eng"
    },
    {
      "title": "CIV5310",
      "description": "Infrastructure project and policy evaluation",
      "Faculty": "eng"
    },
    {
      "title": "CIV5311",
      "description": "Infrastructure project management",
      "Faculty": "eng"
    },
    {
      "title": "CIV5312",
      "description": "Asset management I",
      "Faculty": "eng"
    },
    {
      "title": "CIV5313",
      "description": "Asset management II",
      "Faculty": "eng"
    },
    {
      "title": "CIV5314",
      "description": "Planning urban transport systems",
      "Faculty": "eng"
    },
    {
      "title": "CIV5315",
      "description": "Transport economics",
      "Faculty": "eng"
    },
    {
      "title": "CIV5316",
      "description": "Fundamentals of urban public transport",
      "Faculty": "eng"
    },
    {
      "title": "CIV5318",
      "description": "Intelligent transportation systems: engineering and management",
      "Faculty": "eng"
    },
    {
      "title": "CIV5319",
      "description": "Quantitative methods for transportation systems analysis",
      "Faculty": "eng"
    },
    {
      "title": "CIV5320",
      "description": "Case studies in transportation systems",
      "Faculty": "eng"
    },
    {
      "title": "CIV5321",
      "description": "Sustainable transportation systems planning",
      "Faculty": "eng"
    },
    {
      "title": "CIV5322",
      "description": "Urban public transportation systems",
      "Faculty": "eng"
    },
    {
      "title": "CIV5406",
      "description": "Modelling transportation systems",
      "Faculty": "eng"
    },
    {
      "title": "CIV5881",
      "description": "Ground water hydrology",
      "Faculty": "eng"
    },
    {
      "title": "CIV5882",
      "description": "Flood hydraulics and hydrology",
      "Faculty": "eng"
    },
    {
      "title": "CIV5883",
      "description": "Surface water hydrology",
      "Faculty": "eng"
    },
    {
      "title": "CIV5884",
      "description": "Water sensitive stormwater design",
      "Faculty": "eng"
    },
    {
      "title": "CIV5885",
      "description": "Infrastructure dynamics",
      "Faculty": "eng"
    },
    {
      "title": "CIV5886",
      "description": "Infrastructure geomechanics",
      "Faculty": "eng"
    },
    {
      "title": "CIV5887",
      "description": "Infrastructure rehabilitation and monitoring",
      "Faculty": "eng"
    },
    {
      "title": "CIV5888",
      "description": "Advanced computational methods",
      "Faculty": "eng"
    },
    {
      "title": "CIV6301",
      "description": "Advanced traffic engineering",
      "Faculty": "eng"
    },
    {
      "title": "CIV6302",
      "description": "Traffic engineering and management",
      "Faculty": "eng"
    },
    {
      "title": "CIV6305",
      "description": "Travel demand modelling",
      "Faculty": "eng"
    },
    {
      "title": "CIV6314",
      "description": "Transport planning and policy",
      "Faculty": "eng"
    },
    {
      "title": "CIV6881",
      "description": "Ground water hydrology",
      "Faculty": "eng"
    },
    {
      "title": "CIV6882",
      "description": "Flood hydraulics and hydrology",
      "Faculty": "eng"
    },
    {
      "title": "CIV6883",
      "description": "Surface water hydrology",
      "Faculty": "eng"
    },
    {
      "title": "CIV6884",
      "description": "Water sensitive stormwater design",
      "Faculty": "eng"
    },
    {
      "title": "CIV6885",
      "description": "Infrastructure dynamics",
      "Faculty": "eng"
    },
    {
      "title": "CIV6886",
      "description": "Infrastructure geomechanics",
      "Faculty": "eng"
    },
    {
      "title": "CIV6887",
      "description": "Infrastructure rehabilitation and monitoring",
      "Faculty": "eng"
    },
    {
      "title": "CIV6888",
      "description": "Advanced computational methods",
      "Faculty": "eng"
    },
    {
      "title": "CMH5001",
      "description": "Mental health practice essentials",
      "Faculty": "med"
    },
    {
      "title": "CMH5002",
      "description": "The context for mental health practice",
      "Faculty": "med"
    },
    {
      "title": "CMH5003",
      "description": "Concepts in mental health illness",
      "Faculty": "med"
    },
    {
      "title": "CMH5004",
      "description": "Recovery oriented mental health practice",
      "Faculty": "med"
    },
    {
      "title": "CMH5005",
      "description": "Mental health of the elderly",
      "Faculty": "med"
    },
    {
      "title": "CMH5006",
      "description": "Transcultural mental health",
      "Faculty": "med"
    },
    {
      "title": "CPS5001",
      "description": "Psychoanalytic and developmental theories 1",
      "Faculty": "med"
    },
    {
      "title": "CPS5002",
      "description": "Normal developmental observation",
      "Faculty": "med"
    },
    {
      "title": "CPS5003",
      "description": "Psychoanalytic and developmental theories 2",
      "Faculty": "med"
    },
    {
      "title": "CPS5004",
      "description": "Psychodynamic assessment of children and adolescents",
      "Faculty": "med"
    },
    {
      "title": "CPS5005",
      "description": "Principles of child psychotherapy",
      "Faculty": "med"
    },
    {
      "title": "CPS5006",
      "description": "Principles of adolescent psychotherapy",
      "Faculty": "med"
    },
    {
      "title": "CPS5007",
      "description": "Principles of short term therapy and crisis work",
      "Faculty": "med"
    },
    {
      "title": "CPS5008",
      "description": "Principles of working with parents",
      "Faculty": "med"
    },
    {
      "title": "DEV2011",
      "description": "Early human development from cells to tissues",
      "Faculty": "sci"
    },
    {
      "title": "DEV2022",
      "description": "Human anatomy and development: Tissues and body systems",
      "Faculty": "sci"
    },
    {
      "title": "DEV3011",
      "description": "Fundamentals of developmental processes",
      "Faculty": "sci"
    },
    {
      "title": "DEV3022",
      "description": "Developmental and anatomical basis of human health and disease",
      "Faculty": "sci"
    },
    {
      "title": "DEV3032",
      "description": "Stem cells and the foundations of life",
      "Faculty": "sci"
    },
    {
      "title": "DEV3990",
      "description": "Action in developmental biology research project",
      "Faculty": "sci"
    },
    {
      "title": "DGN1001",
      "description": "Design studio 1",
      "Faculty": "ada"
    },
    {
      "title": "DGN1104",
      "description": "Interdisciplinary design studio 2",
      "Faculty": "ada"
    },
    {
      "title": "DGN2000",
      "description": "Interdisciplinary Design",
      "Faculty": "ada"
    },
    {
      "title": "DGN2003",
      "description": "Interdisciplinary design studio 3",
      "Faculty": "ada"
    },
    {
      "title": "DGN2004",
      "description": "Interdisciplinary design studio 4",
      "Faculty": "ada"
    },
    {
      "title": "DGN3105",
      "description": "Interdisciplinary design studio 5",
      "Faculty": "ada"
    },
    {
      "title": "DGN3106",
      "description": "Interdisciplinary design studio 6",
      "Faculty": "ada"
    },
    {
      "title": "DGN4001",
      "description": "Major project (design) part 1",
      "Faculty": "ada"
    },
    {
      "title": "DGN4002",
      "description": "Major project (design) part 2",
      "Faculty": "ada"
    },
    {
      "title": "DIS1103",
      "description": "Digital processes for art and design 1",
      "Faculty": "ada"
    },
    {
      "title": "DIS1704",
      "description": "Web design",
      "Faculty": "ada"
    },
    {
      "title": "DIS1911",
      "description": "3D design and visualisation",
      "Faculty": "ada"
    },
    {
      "title": "DIS1912",
      "description": "Virtual space A",
      "Faculty": "ada"
    },
    {
      "title": "DIS2105",
      "description": "Digital imaging",
      "Faculty": "ada"
    },
    {
      "title": "DIS2601",
      "description": "Digital audio/video",
      "Faculty": "ada"
    },
    {
      "title": "DIS2904",
      "description": "3D modeling",
      "Faculty": "ada"
    },
    {
      "title": "DIS2906",
      "description": "Design for multimedia",
      "Faculty": "ada"
    },
    {
      "title": "DIS2907",
      "description": "3D animation",
      "Faculty": "ada"
    },
    {
      "title": "DIS2909",
      "description": "Electronic design",
      "Faculty": "ada"
    },
    {
      "title": "DIS2910",
      "description": "Virtual space B",
      "Faculty": "ada"
    },
    {
      "title": "DIS3010",
      "description": "Digital Media Studio A",
      "Faculty": "ada"
    },
    {
      "title": "DIS3020",
      "description": "Digital Media Studio B",
      "Faculty": "ada"
    },
    {
      "title": "DIS3901",
      "description": "Interactive animation",
      "Faculty": "ada"
    },
    {
      "title": "DIS3902",
      "description": "3D imaging studio",
      "Faculty": "ada"
    },
    {
      "title": "DIS3903",
      "description": "Digital imaging - the moving image",
      "Faculty": "ada"
    },
    {
      "title": "DIS3904",
      "description": "Digital imaging studio",
      "Faculty": "ada"
    },
    {
      "title": "DIS3905",
      "description": "Digital audio video - advanced production",
      "Faculty": "ada"
    },
    {
      "title": "DIS3906",
      "description": "Digital publication",
      "Faculty": "ada"
    },
    {
      "title": "DIS4201",
      "description": "3D animation and virtual space",
      "Faculty": "ada"
    },
    {
      "title": "DIS4604",
      "description": "Digital audio/video",
      "Faculty": "ada"
    },
    {
      "title": "DIS5201",
      "description": "3D animation virtual space",
      "Faculty": "ada"
    },
    {
      "title": "DIS5604",
      "description": "Digital audio/video",
      "Faculty": "ada"
    },
    {
      "title": "DPH6005",
      "description": "Doctor of public health: Public health practice",
      "Faculty": "med"
    },
    {
      "title": "DPSY5101",
      "description": "Psychopathology part 1",
      "Faculty": "med"
    },
    {
      "title": "DPSY5102",
      "description": "Psychological assessment part 1",
      "Faculty": "med"
    },
    {
      "title": "DPSY5103",
      "description": "Research methods in professional psychology",
      "Faculty": "med"
    },
    {
      "title": "DPSY5104",
      "description": "Ethics and Professional Practice",
      "Faculty": "med"
    },
    {
      "title": "DPSY5105",
      "description": "Clinical developmental psychology",
      "Faculty": "med"
    },
    {
      "title": "DPSY5161",
      "description": "Ethics and Professional Practice in Neuropsychology",
      "Faculty": "med"
    },
    {
      "title": "DPSY5162",
      "description": "Neuroanatomy for the clinical neuropsychologist",
      "Faculty": "med"
    },
    {
      "title": "DPSY5201",
      "description": "Psychopathology part 2",
      "Faculty": "med"
    },
    {
      "title": "DPSY5203",
      "description": "Theories and techniques of intervention part 1",
      "Faculty": "med"
    },
    {
      "title": "DPSY5261",
      "description": "Neuropsychological models of cognition and behaviour part 1",
      "Faculty": "med"
    },
    {
      "title": "DPSY5262",
      "description": "Case analysis and professional practice in neuropsychology 1",
      "Faculty": "med"
    },
    {
      "title": "DPSY5263",
      "description": "Neuropsychological assessment",
      "Faculty": "med"
    },
    {
      "title": "DPSY5265",
      "description": "Neuropsychological syndromes",
      "Faculty": "med"
    },
    {
      "title": "DPSY5299",
      "description": "Introductory practicum",
      "Faculty": "med"
    },
    {
      "title": "DPSY6103",
      "description": "Theories and techniques of intervention part 2",
      "Faculty": "med"
    },
    {
      "title": "DPSY6105",
      "description": "Psychopharmacology",
      "Faculty": "med"
    },
    {
      "title": "DPSY6107",
      "description": "Health psychology and behavioural medicine",
      "Faculty": "med"
    },
    {
      "title": "DPSY6162",
      "description": "Case analysis and professional practice in neuropsychology 2",
      "Faculty": "med"
    },
    {
      "title": "DPSY6199",
      "description": "Intermediate practicum",
      "Faculty": "med"
    },
    {
      "title": "DPSY6204",
      "description": "Clinical neuropsychology",
      "Faculty": "med"
    },
    {
      "title": "DPSY6261",
      "description": "Developmental neuropsychology",
      "Faculty": "med"
    },
    {
      "title": "DPSY6262",
      "description": "Case analysis and professional practice in neuropsychology 3",
      "Faculty": "med"
    },
    {
      "title": "DPSY6263",
      "description": "Recovery of function and rehabilitation after brain injury",
      "Faculty": "med"
    },
    {
      "title": "DPSY6299",
      "description": "Advanced practicum",
      "Faculty": "med"
    },
    {
      "title": "DPSY6399",
      "description": "Specialised clinical practicum",
      "Faculty": "med"
    },
    {
      "title": "DPSY7131",
      "description": "Advanced Clinical Psychology: General",
      "Faculty": "med"
    },
    {
      "title": "DPSY7141",
      "description": "Advanced Clinical Psychology: Child, adolescent and family",
      "Faculty": "med"
    },
    {
      "title": "DPSY7199",
      "description": "Advanced specialised practicum",
      "Faculty": "med"
    },
    {
      "title": "DRW1201",
      "description": "Drawing 1A",
      "Faculty": "ada"
    },
    {
      "title": "DRW1202",
      "description": "Drawing 2A",
      "Faculty": "ada"
    },
    {
      "title": "DWG1103",
      "description": "Visual thinking and communication",
      "Faculty": "ada"
    },
    {
      "title": "DWG1201",
      "description": "Drawing 1",
      "Faculty": "ada"
    },
    {
      "title": "DWG1202",
      "description": "Drawing 2B (fine art/visual arts)",
      "Faculty": "ada"
    },
    {
      "title": "DWG1301",
      "description": "Drawing 1C",
      "Faculty": "ada"
    },
    {
      "title": "DWG2501",
      "description": "Drawing: Landscape, space and environment",
      "Faculty": "ada"
    },
    {
      "title": "DWG2504",
      "description": "Drawing: Advanced studies 1",
      "Faculty": "ada"
    },
    {
      "title": "DWG2506",
      "description": "Drawing: Social based strategies",
      "Faculty": "ada"
    },
    {
      "title": "DWG2507",
      "description": "Drawing Conceptual studies 1",
      "Faculty": "ada"
    },
    {
      "title": "DWG2508",
      "description": "Drawing Conceptual studies 2",
      "Faculty": "ada"
    },
    {
      "title": "DWG2509",
      "description": "Drawing: The body 1",
      "Faculty": "ada"
    },
    {
      "title": "DWG2510",
      "description": "Perceptual drawing A",
      "Faculty": "ada"
    },
    {
      "title": "DWG2511",
      "description": "Drawing: Anatomy 1",
      "Faculty": "ada"
    },
    {
      "title": "DWG2784",
      "description": "Visual investigation",
      "Faculty": "ada"
    },
    {
      "title": "DWG3508",
      "description": "Drawing (concept and research) C",
      "Faculty": "ada"
    },
    {
      "title": "DWG3511",
      "description": "Drawing: Contemporary practice",
      "Faculty": "ada"
    },
    {
      "title": "DWG3516",
      "description": "Drawing: Anatomy 2",
      "Faculty": "ada"
    },
    {
      "title": "DWG3518",
      "description": "Drawing: Advanced studies 2",
      "Faculty": "ada"
    },
    {
      "title": "DWG3519",
      "description": "Drawing: The Body 2",
      "Faculty": "ada"
    },
    {
      "title": "DWG3520",
      "description": "Perceptual drawing B",
      "Faculty": "ada"
    },
    {
      "title": "DWG3529",
      "description": "Drawing: The body 3",
      "Faculty": "ada"
    },
    {
      "title": "EAE1011",
      "description": "Earth, atmosphere and environment 1",
      "Faculty": "sci"
    },
    {
      "title": "EAE1022",
      "description": "Earth, atmosphere and environment 2",
      "Faculty": "sci"
    },
    {
      "title": "EAE2011",
      "description": "Environmental problem solving and visualisation",
      "Faculty": "sci"
    },
    {
      "title": "EAE2111",
      "description": "Introduction to climate science",
      "Faculty": "sci"
    },
    {
      "title": "EAE2122",
      "description": "Introduction to atmospheric physics and dynamics",
      "Faculty": "sci"
    },
    {
      "title": "EAE2322",
      "description": "Environmental earth science",
      "Faculty": "sci"
    },
    {
      "title": "EAE2511",
      "description": "Deep earth processes",
      "Faculty": "sci"
    },
    {
      "title": "EAE2522",
      "description": "Sediments and basins",
      "Faculty": "sci"
    },
    {
      "title": "EAE3000",
      "description": "Earth, atmosphere and environment research project",
      "Faculty": "sci"
    },
    {
      "title": "EAE3900",
      "description": "Landscape, environment and sustainability in Italy",
      "Faculty": "sci"
    },
    {
      "title": "EAE4100",
      "description": "Earth, atmosphere and environment honours research project",
      "Faculty": "sci"
    },
    {
      "title": "EAE4110",
      "description": "Earth, atmosphere and environment honours research project part time 1",
      "Faculty": "sci"
    },
    {
      "title": "EAE4120",
      "description": "Earth, atmosphere and environment honours research project part time 2",
      "Faculty": "sci"
    },
    {
      "title": "EAE4200",
      "description": "Earth, atmosphere and environment honours coursework",
      "Faculty": "sci"
    },
    {
      "title": "EAE4210",
      "description": "Earth, atmosphere and environment honours coursework part time 1",
      "Faculty": "sci"
    },
    {
      "title": "EAE4220",
      "description": "Earth, atmosphere and environment honours coursework part time 2",
      "Faculty": "sci"
    },
    {
      "title": "EAE5258",
      "description": "Geographical information systems (GIS) for environmental science",
      "Faculty": "sci"
    },
    {
      "title": "ECB1101",
      "description": "Introductory microeconomics",
      "Faculty": "buseco"
    },
    {
      "title": "ECB1102",
      "description": "Introductory Macroeconomics",
      "Faculty": "buseco"
    },
    {
      "title": "ECB2141",
      "description": "Economics of labour markets",
      "Faculty": "buseco"
    },
    {
      "title": "ECB2330",
      "description": "Macroeconomic policy",
      "Faculty": "buseco"
    },
    {
      "title": "ECB2331",
      "description": "Macroeconomic and monetary policy",
      "Faculty": "buseco"
    },
    {
      "title": "ECB2721",
      "description": "Trade finance and foreign exchange",
      "Faculty": "buseco"
    },
    {
      "title": "ECB2730",
      "description": "Macroeconomic policy",
      "Faculty": "buseco"
    },
    {
      "title": "ECB2731",
      "description": "Managerial economics",
      "Faculty": "buseco"
    },
    {
      "title": "ECB3121",
      "description": "Economics of international trade and finance",
      "Faculty": "buseco"
    },
    {
      "title": "ECB3143",
      "description": "Economics of money and banking",
      "Faculty": "buseco"
    },
    {
      "title": "ECB3830",
      "description": "Business, competition and regulation",
      "Faculty": "buseco"
    },
    {
      "title": "ECC1000",
      "description": "Principles of microeconomics",
      "Faculty": "buseco"
    },
    {
      "title": "ECC1100",
      "description": "Principles of macroeconomics",
      "Faculty": "buseco"
    },
    {
      "title": "ECC2000",
      "description": "Intermediate microeconomics",
      "Faculty": "buseco"
    },
    {
      "title": "ECC2010",
      "description": "Intermediate macroeconomics",
      "Faculty": "buseco"
    },
    {
      "title": "ECC2300",
      "description": "Current issues in macroeconomic policy",
      "Faculty": "buseco"
    },
    {
      "title": "ECC2360",
      "description": "Environmental economics",
      "Faculty": "buseco"
    },
    {
      "title": "ECC2400",
      "description": "Current issues in applied microeconomics",
      "Faculty": "buseco"
    },
    {
      "title": "ECC2450",
      "description": "Sports economics",
      "Faculty": "buseco"
    },
    {
      "title": "ECC2510",
      "description": "Economic growth: causes and consequences",
      "Faculty": "buseco"
    },
    {
      "title": "ECC2600",
      "description": "Behavioural economics",
      "Faculty": "buseco"
    },
    {
      "title": "ECC2610",
      "description": "Game theory and strategic thinking",
      "Faculty": "buseco"
    },
    {
      "title": "ECC2800",
      "description": "Prosperity, poverty and sustainability in a globalised world",
      "Faculty": "buseco"
    },
    {
      "title": "ECC2840",
      "description": "Australian economic institutions and policy",
      "Faculty": "buseco"
    },
    {
      "title": "ECC3640",
      "description": "Economics of climate change",
      "Faculty": "buseco"
    },
    {
      "title": "ECC3650",
      "description": "Applied general equilibrium economics",
      "Faculty": "buseco"
    },
    {
      "title": "ECC3660",
      "description": "Monetary economics",
      "Faculty": "buseco"
    },
    {
      "title": "ECC3670",
      "description": "Economics of developing countries",
      "Faculty": "buseco"
    },
    {
      "title": "ECC3690",
      "description": "International economics",
      "Faculty": "buseco"
    },
    {
      "title": "ECC3710",
      "description": "Labour economics",
      "Faculty": "buseco"
    },
    {
      "title": "ECC3800",
      "description": "History of economic thought",
      "Faculty": "buseco"
    },
    {
      "title": "ECC3810",
      "description": "Public finance",
      "Faculty": "buseco"
    },
    {
      "title": "ECC3830",
      "description": "Industrial organisation and regulation",
      "Faculty": "buseco"
    },
    {
      "title": "ECC3840",
      "description": "Mathematical economics",
      "Faculty": "buseco"
    },
    {
      "title": "ECC3860",
      "description": "Integrated economic modelling",
      "Faculty": "buseco"
    },
    {
      "title": "ECC4500",
      "description": "Long-run economic change",
      "Faculty": "buseco"
    },
    {
      "title": "ECC4650",
      "description": "Microeconomics",
      "Faculty": "buseco"
    },
    {
      "title": "ECC4660",
      "description": "Macroeconomics",
      "Faculty": "buseco"
    },
    {
      "title": "ECC4670",
      "description": "Economic development",
      "Faculty": "buseco"
    },
    {
      "title": "ECC4690",
      "description": "International trade",
      "Faculty": "buseco"
    },
    {
      "title": "ECC4700",
      "description": "Competition, regulation and policy",
      "Faculty": "buseco"
    },
    {
      "title": "ECC4710",
      "description": "Post-Keynesian economics",
      "Faculty": "buseco"
    },
    {
      "title": "ECC4720",
      "description": "Law and economics",
      "Faculty": "buseco"
    },
    {
      "title": "ECC4750",
      "description": "Financial economics",
      "Faculty": "buseco"
    },
    {
      "title": "ECC4790",
      "description": "Project evaluation",
      "Faculty": "buseco"
    },
    {
      "title": "ECC4810",
      "description": "Public economics",
      "Faculty": "buseco"
    },
    {
      "title": "ECC4830",
      "description": "Welfare economics",
      "Faculty": "buseco"
    },
    {
      "title": "ECC4840",
      "description": "Industrial organisation",
      "Faculty": "buseco"
    },
    {
      "title": "ECC4860",
      "description": "Honours research project",
      "Faculty": "buseco"
    },
    {
      "title": "ECC4870",
      "description": "Health economics",
      "Faculty": "buseco"
    },
    {
      "title": "ECC4990",
      "description": "Economic evaluation of health services",
      "Faculty": "buseco"
    },
    {
      "title": "ECC5470",
      "description": "Competition, regulation and policy",
      "Faculty": "buseco"
    },
    {
      "title": "ECC5475",
      "description": "Financial economics",
      "Faculty": "buseco"
    },
    {
      "title": "ECC5479",
      "description": "Project evaluation",
      "Faculty": "buseco"
    },
    {
      "title": "ECC5484",
      "description": "Industrial organisation",
      "Faculty": "buseco"
    },
    {
      "title": "ECC5650",
      "description": "Microeconomic theory",
      "Faculty": "buseco"
    },
    {
      "title": "ECC5651",
      "description": "Advanced microeconomic theory",
      "Faculty": "buseco"
    },
    {
      "title": "ECC5660",
      "description": "Macroeconomic theory",
      "Faculty": "buseco"
    },
    {
      "title": "ECC5690",
      "description": "Theories in international and development economics",
      "Faculty": "buseco"
    },
    {
      "title": "ECC5730",
      "description": "Advanced applied general equilibrium analysis",
      "Faculty": "buseco"
    },
    {
      "title": "ECC5800",
      "description": "Economics seminar",
      "Faculty": "buseco"
    },
    {
      "title": "ECC5810",
      "description": "Public economics",
      "Faculty": "buseco"
    },
    {
      "title": "ECC5840",
      "description": "Information, incentives and games",
      "Faculty": "buseco"
    },
    {
      "title": "ECC5850",
      "description": "Mathematical economic theory",
      "Faculty": "buseco"
    },
    {
      "title": "ECC5861",
      "description": "Economics research project",
      "Faculty": "buseco"
    },
    {
      "title": "ECC5870",
      "description": "Advanced health economics",
      "Faculty": "buseco"
    },
    {
      "title": "ECC5900",
      "description": "Microeconomics",
      "Faculty": "buseco"
    },
    {
      "title": "ECC5901",
      "description": "Macroeconomics",
      "Faculty": "buseco"
    },
    {
      "title": "ECC5940",
      "description": "Current issues in applied microeconomics",
      "Faculty": "buseco"
    },
    {
      "title": "ECC5953",
      "description": "Economics",
      "Faculty": "buseco"
    },
    {
      "title": "ECC5970",
      "description": "Introduction to health economics",
      "Faculty": "buseco"
    },
    {
      "title": "ECC5971",
      "description": "Pharmaceutical economics",
      "Faculty": "buseco"
    },
    {
      "title": "ECC5973",
      "description": "Economic evaluation in health care",
      "Faculty": "buseco"
    },
    {
      "title": "ECC5974",
      "description": "Applied health economics and health policy",
      "Faculty": "buseco"
    },
    {
      "title": "ECC5975",
      "description": "Principles of health economics for developing countries",
      "Faculty": "buseco"
    },
    {
      "title": "ECC5979",
      "description": "Health economics",
      "Faculty": "buseco"
    },
    {
      "title": "ECC6660",
      "description": "Research topics in advanced macroeconomics",
      "Faculty": "buseco"
    },
    {
      "title": "ECC6690",
      "description": "Research topics in open economy",
      "Faculty": "buseco"
    },
    {
      "title": "ECE2011",
      "description": "Signal processing",
      "Faculty": "eng"
    },
    {
      "title": "ECE2021",
      "description": "Electromagnetism",
      "Faculty": "eng"
    },
    {
      "title": "ECE2031",
      "description": "Circuits and control",
      "Faculty": "eng"
    },
    {
      "title": "ECE2041",
      "description": "Telecommunications",
      "Faculty": "eng"
    },
    {
      "title": "ECE2061",
      "description": "Analogue electronics",
      "Faculty": "eng"
    },
    {
      "title": "ECE2071",
      "description": "Computer organisation and programming",
      "Faculty": "eng"
    },
    {
      "title": "ECE2072",
      "description": "Digital systems",
      "Faculty": "eng"
    },
    {
      "title": "ECE2111",
      "description": "Signals and systems",
      "Faculty": "eng"
    },
    {
      "title": "ECE2131",
      "description": "Electrical circuits",
      "Faculty": "eng"
    },
    {
      "title": "ECE2191",
      "description": "Probability models in engineering",
      "Faculty": "eng"
    },
    {
      "title": "ECE3022",
      "description": "Wireless and guided EM",
      "Faculty": "eng"
    },
    {
      "title": "ECE3031",
      "description": "Control systems",
      "Faculty": "eng"
    },
    {
      "title": "ECE3051",
      "description": "Electrical energy systems",
      "Faculty": "eng"
    },
    {
      "title": "ECE3062",
      "description": "Electronic systems and control",
      "Faculty": "eng"
    },
    {
      "title": "ECE3073",
      "description": "Computer systems",
      "Faculty": "eng"
    },
    {
      "title": "ECE3091",
      "description": "Engineering design",
      "Faculty": "eng"
    },
    {
      "title": "ECE3093",
      "description": "Optimisation estimation and numerical methods",
      "Faculty": "eng"
    },
    {
      "title": "ECE3121",
      "description": "Engineering electromagnetics",
      "Faculty": "eng"
    },
    {
      "title": "ECE3141",
      "description": "Information and networks",
      "Faculty": "eng"
    },
    {
      "title": "ECE4012",
      "description": "Applied digital signal processing",
      "Faculty": "eng"
    },
    {
      "title": "ECE4023",
      "description": "Radio frequency electronics",
      "Faculty": "eng"
    },
    {
      "title": "ECE4024",
      "description": "Wireless communications",
      "Faculty": "eng"
    },
    {
      "title": "ECE4032",
      "description": "Advanced control",
      "Faculty": "eng"
    },
    {
      "title": "ECE4033",
      "description": "Industrial instrumentation and measurement technologies",
      "Faculty": "eng"
    },
    {
      "title": "ECE4042",
      "description": "Communications theory",
      "Faculty": "eng"
    },
    {
      "title": "ECE4043",
      "description": "Optical communications",
      "Faculty": "eng"
    },
    {
      "title": "ECE4044",
      "description": "Telecommunications protocols",
      "Faculty": "eng"
    },
    {
      "title": "ECE4045",
      "description": "Network performance",
      "Faculty": "eng"
    },
    {
      "title": "ECE4053",
      "description": "Electrical energy - generation and supply",
      "Faculty": "eng"
    },
    {
      "title": "ECE4054",
      "description": "Electrical energy - power converters and motor control",
      "Faculty": "eng"
    },
    {
      "title": "ECE4055",
      "description": "Electrical energy - power electronic applications",
      "Faculty": "eng"
    },
    {
      "title": "ECE4058",
      "description": "Electrical energy - high voltage engineering",
      "Faculty": "eng"
    },
    {
      "title": "ECE4063",
      "description": "Large scale digital design",
      "Faculty": "eng"
    },
    {
      "title": "ECE4064",
      "description": "Electronic test technology",
      "Faculty": "eng"
    },
    {
      "title": "ECE4074",
      "description": "Advanced computer architecture",
      "Faculty": "eng"
    },
    {
      "title": "ECE4075",
      "description": "Real time embedded systems",
      "Faculty": "eng"
    },
    {
      "title": "ECE4076",
      "description": "Computer vision",
      "Faculty": "eng"
    },
    {
      "title": "ECE4077",
      "description": "Advanced computing techniques",
      "Faculty": "eng"
    },
    {
      "title": "ECE4078",
      "description": "Intelligent robotics",
      "Faculty": "eng"
    },
    {
      "title": "ECE4081",
      "description": "Medical instrumentation",
      "Faculty": "eng"
    },
    {
      "title": "ECE4084",
      "description": "Biomechanics of human musculoskeletal systems",
      "Faculty": "eng"
    },
    {
      "title": "ECE4086",
      "description": "Medical imaging technology",
      "Faculty": "eng"
    },
    {
      "title": "ECE4087",
      "description": "Medical technology innovation",
      "Faculty": "eng"
    },
    {
      "title": "ECE4094",
      "description": "Project A",
      "Faculty": "eng"
    },
    {
      "title": "ECE4095",
      "description": "Project B",
      "Faculty": "eng"
    },
    {
      "title": "ECE4099",
      "description": "Professional practice",
      "Faculty": "eng"
    },
    {
      "title": "ECE4122",
      "description": "Advanced electromagnetics",
      "Faculty": "eng"
    },
    {
      "title": "ECE4808",
      "description": "Organic electronics and micro devices",
      "Faculty": "eng"
    },
    {
      "title": "ECE4809",
      "description": "Solid state lighting",
      "Faculty": "eng"
    },
    {
      "title": "ECE5881",
      "description": "Real-time system design",
      "Faculty": "eng"
    },
    {
      "title": "ECE5882",
      "description": "Advanced electronics design",
      "Faculty": "eng"
    },
    {
      "title": "ECE5883",
      "description": "Advanced signal processing",
      "Faculty": "eng"
    },
    {
      "title": "ECE5884",
      "description": "Wireless communications",
      "Faculty": "eng"
    },
    {
      "title": "ECE5885",
      "description": "Energy efficient lighting",
      "Faculty": "eng"
    },
    {
      "title": "ECE5886",
      "description": "Smart grids",
      "Faculty": "eng"
    },
    {
      "title": "ECE6881",
      "description": "Real-time system design",
      "Faculty": "eng"
    },
    {
      "title": "ECE6882",
      "description": "Advanced electronics design",
      "Faculty": "eng"
    },
    {
      "title": "ECE6883",
      "description": "Advanced signal processing",
      "Faculty": "eng"
    },
    {
      "title": "ECE6884",
      "description": "Wireless communications",
      "Faculty": "eng"
    },
    {
      "title": "ECE6885",
      "description": "Energy efficient lighting",
      "Faculty": "eng"
    },
    {
      "title": "ECE6886",
      "description": "Smart grids",
      "Faculty": "eng"
    },
    {
      "title": "ECF1100",
      "description": "Microeconomics",
      "Faculty": "buseco"
    },
    {
      "title": "ECF1200",
      "description": "Macroeconomics",
      "Faculty": "buseco"
    },
    {
      "title": "ECF2331",
      "description": "Macroeconomic and monetary policy",
      "Faculty": "buseco"
    },
    {
      "title": "ECF2450",
      "description": "Sports economics",
      "Faculty": "buseco"
    },
    {
      "title": "ECF2550",
      "description": "Business in Asia",
      "Faculty": "buseco"
    },
    {
      "title": "ECF2721",
      "description": "Trade finance and foreign exchange",
      "Faculty": "buseco"
    },
    {
      "title": "ECF2731",
      "description": "Managerial economics",
      "Faculty": "buseco"
    },
    {
      "title": "ECF2931",
      "description": "Managerial economics",
      "Faculty": "buseco"
    },
    {
      "title": "ECF3120",
      "description": "Consumer economics",
      "Faculty": "buseco"
    },
    {
      "title": "ECF3121",
      "description": "Economics of international trade",
      "Faculty": "buseco"
    },
    {
      "title": "ECF3143",
      "description": "Economics of money and banking",
      "Faculty": "buseco"
    },
    {
      "title": "ECF3900",
      "description": "Business, competition and regulation",
      "Faculty": "buseco"
    },
    {
      "title": "ECF5010",
      "description": "Research issues paper",
      "Faculty": "buseco"
    },
    {
      "title": "ECF5040",
      "description": "Industry economics",
      "Faculty": "buseco"
    },
    {
      "title": "ECF5060",
      "description": "Applied economics research project",
      "Faculty": "buseco"
    },
    {
      "title": "ECF5200",
      "description": "Game theory and business strategy",
      "Faculty": "buseco"
    },
    {
      "title": "ECF5300",
      "description": "Special research topics in applied economics",
      "Faculty": "buseco"
    },
    {
      "title": "ECF5410",
      "description": "Applied microeconomics",
      "Faculty": "buseco"
    },
    {
      "title": "ECF5421",
      "description": "Applied macroeconomics",
      "Faculty": "buseco"
    },
    {
      "title": "ECF5921",
      "description": "Introduction to international economics",
      "Faculty": "buseco"
    },
    {
      "title": "ECF5922",
      "description": "Trade, finance and foreign exchange",
      "Faculty": "buseco"
    },
    {
      "title": "ECF5923",
      "description": "Macroeconomics and monetary policy",
      "Faculty": "buseco"
    },
    {
      "title": "ECF5927",
      "description": "Managerial economics",
      "Faculty": "buseco"
    },
    {
      "title": "ECF5953",
      "description": "Economics",
      "Faculty": "buseco"
    },
    {
      "title": "ECG1102",
      "description": "Introductory macroeconomics",
      "Faculty": "buseco"
    },
    {
      "title": "ECG2141",
      "description": "Economics of labour markets",
      "Faculty": "buseco"
    },
    {
      "title": "ECG2721",
      "description": "Trade finance and foreign exchange",
      "Faculty": "buseco"
    },
    {
      "title": "ECG2730",
      "description": "Macroeconomic policy",
      "Faculty": "buseco"
    },
    {
      "title": "ECG2731",
      "description": "Managerial economics",
      "Faculty": "buseco"
    },
    {
      "title": "ECG3143",
      "description": "Economics of money and banking",
      "Faculty": "buseco"
    },
    {
      "title": "ECG3145",
      "description": "Energy, environment and sustainable development",
      "Faculty": "buseco"
    },
    {
      "title": "ECM2360",
      "description": "Environmental and natural resource economics",
      "Faculty": "buseco"
    },
    {
      "title": "ECM3670",
      "description": "Development economics",
      "Faculty": "buseco"
    },
    {
      "title": "ECM3810",
      "description": "Public sector economics",
      "Faculty": "buseco"
    },
    {
      "title": "ECM5921",
      "description": "Introduction to international economics",
      "Faculty": "buseco"
    },
    {
      "title": "ECM5953",
      "description": "Economics",
      "Faculty": "buseco"
    },
    {
      "title": "ECP1100",
      "description": "Microeconomics",
      "Faculty": "buseco"
    },
    {
      "title": "ECP2450",
      "description": "Sports economics",
      "Faculty": "buseco"
    },
    {
      "title": "ECS1101",
      "description": "Introductory microeconomics",
      "Faculty": "buseco"
    },
    {
      "title": "ECS1102",
      "description": "Introductory macroeconomics",
      "Faculty": "buseco"
    },
    {
      "title": "ECS2141",
      "description": "Economics of labour markets",
      "Faculty": "buseco"
    },
    {
      "title": "ECS2730",
      "description": "Intermediate macroeconomics",
      "Faculty": "buseco"
    },
    {
      "title": "ECS2731",
      "description": "Intermediate microeconomics",
      "Faculty": "buseco"
    },
    {
      "title": "ECS3121",
      "description": "Economics of international trade",
      "Faculty": "buseco"
    },
    {
      "title": "ECS3143",
      "description": "Economics of money and banking",
      "Faculty": "buseco"
    },
    {
      "title": "ECS3567",
      "description": "Development economics",
      "Faculty": "buseco"
    },
    {
      "title": "ECS3830",
      "description": "Competition and regulation",
      "Faculty": "buseco"
    },
    {
      "title": "ECS5921",
      "description": "Introduction to international economics",
      "Faculty": "buseco"
    },
    {
      "title": "ECW1101",
      "description": "Introductory microeconomics",
      "Faculty": "buseco"
    },
    {
      "title": "ECW1102",
      "description": "Introductory macroeconomics",
      "Faculty": "buseco"
    },
    {
      "title": "ECW2141",
      "description": "Economics of labour markets",
      "Faculty": "buseco"
    },
    {
      "title": "ECW2450",
      "description": "Sports economics",
      "Faculty": "buseco"
    },
    {
      "title": "ECW2451",
      "description": "The business of sport",
      "Faculty": "buseco"
    },
    {
      "title": "ECW2721",
      "description": "Trade finance and foreign exchange",
      "Faculty": "buseco"
    },
    {
      "title": "ECW2730",
      "description": "Macroeconomic policy",
      "Faculty": "buseco"
    },
    {
      "title": "ECW2731",
      "description": "Managerial economics",
      "Faculty": "buseco"
    },
    {
      "title": "ECW3121",
      "description": "Economics of international trade",
      "Faculty": "buseco"
    },
    {
      "title": "ECW3143",
      "description": "Economics of money and banking",
      "Faculty": "buseco"
    },
    {
      "title": "ECW3150",
      "description": "Natural resources and environment",
      "Faculty": "buseco"
    },
    {
      "title": "ECW3291",
      "description": "Multinational trade and investment",
      "Faculty": "buseco"
    },
    {
      "title": "ECW3301",
      "description": "Case studies in international trade",
      "Faculty": "buseco"
    },
    {
      "title": "ECW3567",
      "description": "Development economics",
      "Faculty": "buseco"
    },
    {
      "title": "ECW3830",
      "description": "Business, competition and regulation",
      "Faculty": "buseco"
    },
    {
      "title": "ECX2650",
      "description": "Contemporary economic policy and general equilibrium",
      "Faculty": "buseco"
    },
    {
      "title": "ECX3550",
      "description": "Business in Asia",
      "Faculty": "buseco"
    },
    {
      "title": "ECX5472",
      "description": "Law and economics",
      "Faculty": "buseco"
    },
    {
      "title": "ECX5486",
      "description": "Applied economics research paper",
      "Faculty": "buseco"
    },
    {
      "title": "ECX5921",
      "description": "Introduction to international economics",
      "Faculty": "buseco"
    },
    {
      "title": "EDF1010",
      "description": "Learning in a university context",
      "Faculty": "edu"
    },
    {
      "title": "EDF1011",
      "description": "Knowledge and context",
      "Faculty": "edu"
    },
    {
      "title": "EDF1012",
      "description": "Mathematics for tertiary study",
      "Faculty": "edu"
    },
    {
      "title": "EDF1013",
      "description": "Academic writing",
      "Faculty": "edu"
    },
    {
      "title": "EDF1028",
      "description": "Information and communication technologies across the curriculum",
      "Faculty": "edu"
    },
    {
      "title": "EDF1029",
      "description": "Learners with special needs in the primary classroom",
      "Faculty": "edu"
    },
    {
      "title": "EDF1030",
      "description": "English and literacy learning",
      "Faculty": "edu"
    },
    {
      "title": "EDF1031",
      "description": "Creative learning in childhood through music and the arts",
      "Faculty": "edu"
    },
    {
      "title": "EDF1032",
      "description": "Thinking mathematically from an early age",
      "Faculty": "edu"
    },
    {
      "title": "EDF1033",
      "description": "Education for environment and sustainability",
      "Faculty": "edu"
    },
    {
      "title": "EDF1038",
      "description": "Introduction to the early childhood education field",
      "Faculty": "edu"
    },
    {
      "title": "EDF1039",
      "description": "Inclusivity and partnerships in early childhood education",
      "Faculty": "edu"
    },
    {
      "title": "EDF1051",
      "description": "Early years professional experience 1A",
      "Faculty": "edu"
    },
    {
      "title": "EDF1052",
      "description": "Early years professional experience 1B",
      "Faculty": "edu"
    },
    {
      "title": "EDF1053",
      "description": "Primary professional experience 1A",
      "Faculty": "edu"
    },
    {
      "title": "EDF1054",
      "description": "Primary professional experience 1B",
      "Faculty": "edu"
    },
    {
      "title": "EDF1055",
      "description": "Secondary professional experience 1A",
      "Faculty": "edu"
    },
    {
      "title": "EDF1056",
      "description": "Secondary professional experience 1B",
      "Faculty": "edu"
    },
    {
      "title": "EDF1071",
      "description": "Introduction to health and physical education",
      "Faculty": "edu"
    },
    {
      "title": "EDF1072",
      "description": "Contemporary issues in health and physical education",
      "Faculty": "edu"
    },
    {
      "title": "EDF1101",
      "description": "Fieldwork experience 1A",
      "Faculty": "edu"
    },
    {
      "title": "EDF1102",
      "description": "Fieldwork experience 1B",
      "Faculty": "edu"
    },
    {
      "title": "EDF1103",
      "description": "Fieldwork experience in outdoor education and environmental studies 1A",
      "Faculty": "edu"
    },
    {
      "title": "EDF1104",
      "description": "Fieldwork experience in outdoor education and environmental studies 1B",
      "Faculty": "edu"
    },
    {
      "title": "EDF1151",
      "description": "Fundamentals of the English language",
      "Faculty": "edu"
    },
    {
      "title": "EDF1152",
      "description": "Reading and writing the world",
      "Faculty": "edu"
    },
    {
      "title": "EDF1161",
      "description": "Doing and learning mathematics",
      "Faculty": "edu"
    },
    {
      "title": "EDF1162",
      "description": "Subject knowledge for teaching: Number and algebra",
      "Faculty": "edu"
    },
    {
      "title": "EDF1171",
      "description": "Sociocultural foundations of health and physical education",
      "Faculty": "edu"
    },
    {
      "title": "EDF1172",
      "description": "Biophysical and behavioural foundations of health and physical education",
      "Faculty": "edu"
    },
    {
      "title": "EDF1174",
      "description": "Foundations of outdoor education and environmental studies",
      "Faculty": "edu"
    },
    {
      "title": "EDF1175",
      "description": "Ways of knowing outdoor environments",
      "Faculty": "edu"
    },
    {
      "title": "EDF1205",
      "description": "English education 1",
      "Faculty": "edu"
    },
    {
      "title": "EDF1206",
      "description": "Mathematics education 1",
      "Faculty": "edu"
    },
    {
      "title": "EDF1303",
      "description": "Understanding learning and learners",
      "Faculty": "edu"
    },
    {
      "title": "EDF1304",
      "description": "Understanding teaching for learning",
      "Faculty": "edu"
    },
    {
      "title": "EDF1551",
      "description": "Foundation to inclusive education",
      "Faculty": "edu"
    },
    {
      "title": "EDF1552",
      "description": "Using assessment to respond to diversity across the school years",
      "Faculty": "edu"
    },
    {
      "title": "EDF2005",
      "description": "Professional responsibilities, practice and relationships",
      "Faculty": "edu"
    },
    {
      "title": "EDF2006",
      "description": "Education priorities",
      "Faculty": "edu"
    },
    {
      "title": "EDF2007",
      "description": "Adolescent development and learning",
      "Faculty": "edu"
    },
    {
      "title": "EDF2008",
      "description": "Becoming a specialist teacher",
      "Faculty": "edu"
    },
    {
      "title": "EDF2020",
      "description": "English and literacies 1",
      "Faculty": "edu"
    },
    {
      "title": "EDF2021",
      "description": "Mathematics and numeracy 1",
      "Faculty": "edu"
    },
    {
      "title": "EDF2028",
      "description": "Health, wellbeing and social learning in primary contexts",
      "Faculty": "edu"
    },
    {
      "title": "EDF2029",
      "description": "Active citizenship and community connections: Local and global",
      "Faculty": "edu"
    },
    {
      "title": "EDF2030",
      "description": "Contemporary child development theories and practices",
      "Faculty": "edu"
    },
    {
      "title": "EDF2031",
      "description": "Indigenous perspectives on teaching and learning",
      "Faculty": "edu"
    },
    {
      "title": "EDF2032",
      "description": "Learning through play pedagogies",
      "Faculty": "edu"
    },
    {
      "title": "EDF2033",
      "description": "Learning with children, their families and communities",
      "Faculty": "edu"
    },
    {
      "title": "EDF2034",
      "description": "Learning about patterns, shapes and numbers through play",
      "Faculty": "edu"
    },
    {
      "title": "EDF2035",
      "description": "Health and physical wellbeing in the young child",
      "Faculty": "edu"
    },
    {
      "title": "EDF2038",
      "description": "Curriculum, assessment and documentation in education",
      "Faculty": "edu"
    },
    {
      "title": "EDF2039",
      "description": "Children and childhood across time: Policies and practices",
      "Faculty": "edu"
    },
    {
      "title": "EDF2051",
      "description": "Early years professional experience 2A",
      "Faculty": "edu"
    },
    {
      "title": "EDF2052",
      "description": "Early years professional experience 2B",
      "Faculty": "edu"
    },
    {
      "title": "EDF2053",
      "description": "Primary professional experience 2A",
      "Faculty": "edu"
    },
    {
      "title": "EDF2054",
      "description": "Primary professional experience 2B",
      "Faculty": "edu"
    },
    {
      "title": "EDF2055",
      "description": "Secondary professional experience 2A",
      "Faculty": "edu"
    },
    {
      "title": "EDF2056",
      "description": "Secondary professional experience 2B",
      "Faculty": "edu"
    },
    {
      "title": "EDF2057",
      "description": "Primary professional experience 2C",
      "Faculty": "edu"
    },
    {
      "title": "EDF2071",
      "description": "Interdisciplinary approaches to health and physical education",
      "Faculty": "edu"
    },
    {
      "title": "EDF2072",
      "description": "Social and environmental influences on health and physical education",
      "Faculty": "edu"
    },
    {
      "title": "EDF2101",
      "description": "Professional experience 2A",
      "Faculty": "edu"
    },
    {
      "title": "EDF2102",
      "description": "Professional experience 2B",
      "Faculty": "edu"
    },
    {
      "title": "EDF2103",
      "description": "Fieldwork experience in outdoor education and environmental studies 2",
      "Faculty": "edu"
    },
    {
      "title": "EDF2151",
      "description": "New literacies",
      "Faculty": "edu"
    },
    {
      "title": "EDF2152",
      "description": "Diverse literacies",
      "Faculty": "edu"
    },
    {
      "title": "EDF2161",
      "description": "Numeracy and mathematics for learning and life",
      "Faculty": "edu"
    },
    {
      "title": "EDF2162",
      "description": "Subject knowledge for teaching: Measurement and geometry",
      "Faculty": "edu"
    },
    {
      "title": "EDF2171",
      "description": "Motor control and skill acquisition",
      "Faculty": "edu"
    },
    {
      "title": "EDF2172",
      "description": "Applied movement contexts in health and physical education 1",
      "Faculty": "edu"
    },
    {
      "title": "EDF2173",
      "description": "Perspectives on health",
      "Faculty": "edu"
    },
    {
      "title": "EDF2174",
      "description": "Outdoor education, learners and contexts",
      "Faculty": "edu"
    },
    {
      "title": "EDF2175",
      "description": "Human interactions and relationships in outdoor education",
      "Faculty": "edu"
    },
    {
      "title": "EDF2182",
      "description": "Innovation in pedagogy through film and new media",
      "Faculty": "edu"
    },
    {
      "title": "EDF2210",
      "description": "Fostering positive child and adolescent behaviour and development",
      "Faculty": "edu"
    },
    {
      "title": "EDF2211",
      "description": "Classroom practice",
      "Faculty": "edu"
    },
    {
      "title": "EDF2213",
      "description": "English education 2",
      "Faculty": "edu"
    },
    {
      "title": "EDF2214",
      "description": "Science education",
      "Faculty": "edu"
    },
    {
      "title": "EDF2215",
      "description": "Mathematics education 2",
      "Faculty": "edu"
    },
    {
      "title": "EDF2303",
      "description": "Movement, environment and community",
      "Faculty": "edu"
    },
    {
      "title": "EDF2551",
      "description": "Understanding behaviour in classrooms and schools",
      "Faculty": "edu"
    },
    {
      "title": "EDF2552",
      "description": "Learning and teaching for students with diverse needs in various education settings",
      "Faculty": "edu"
    },
    {
      "title": "EDF3007",
      "description": "Developing multiple literacies in education",
      "Faculty": "edu"
    },
    {
      "title": "EDF3009",
      "description": "Schooling, education and equity: Local and global perspectives",
      "Faculty": "edu"
    },
    {
      "title": "EDF3010",
      "description": "Curriculum development and innovative practice",
      "Faculty": "edu"
    },
    {
      "title": "EDF3021",
      "description": "Mathematics and numeracy 2",
      "Faculty": "edu"
    },
    {
      "title": "EDF3022",
      "description": "Arts education in the primary years",
      "Faculty": "edu"
    },
    {
      "title": "EDF3023",
      "description": "Advanced pedagogy in the primary years A",
      "Faculty": "edu"
    },
    {
      "title": "EDF3024",
      "description": "Advanced pedagogy in the primary years B",
      "Faculty": "edu"
    },
    {
      "title": "EDF3030",
      "description": "Diversity in child development",
      "Faculty": "edu"
    },
    {
      "title": "EDF3031",
      "description": "Local and global perspectives in education policy",
      "Faculty": "edu"
    },
    {
      "title": "EDF3032",
      "description": "Children's literature, storytelling and the arts",
      "Faculty": "edu"
    },
    {
      "title": "EDF3033",
      "description": "Change and transition in children's education",
      "Faculty": "edu"
    },
    {
      "title": "EDF3034",
      "description": "Children's literacy development",
      "Faculty": "edu"
    },
    {
      "title": "EDF3035",
      "description": "Investigating our world: Science, technology and the environment",
      "Faculty": "edu"
    },
    {
      "title": "EDF3036",
      "description": "Professional studies",
      "Faculty": "edu"
    },
    {
      "title": "EDF3038",
      "description": "Professionalism, ethics and interdisciplinary work in education",
      "Faculty": "edu"
    },
    {
      "title": "EDF3039",
      "description": "Leadership and management in education contexts",
      "Faculty": "edu"
    },
    {
      "title": "EDF3050",
      "description": "Early years professional experience 3A",
      "Faculty": "edu"
    },
    {
      "title": "EDF3051",
      "description": "Early years professional experience 3A",
      "Faculty": "edu"
    },
    {
      "title": "EDF3052",
      "description": "Early years professional experience 3B",
      "Faculty": "edu"
    },
    {
      "title": "EDF3053",
      "description": "Primary professional experience 3A",
      "Faculty": "edu"
    },
    {
      "title": "EDF3054",
      "description": "Primary professional experience 3B",
      "Faculty": "edu"
    },
    {
      "title": "EDF3055",
      "description": "Secondary professional experience 3A",
      "Faculty": "edu"
    },
    {
      "title": "EDF3056",
      "description": "Secondary professional experience 3B",
      "Faculty": "edu"
    },
    {
      "title": "EDF3057",
      "description": "Secondary professional experience 3C",
      "Faculty": "edu"
    },
    {
      "title": "EDF3071",
      "description": "Community development and partnerships",
      "Faculty": "edu"
    },
    {
      "title": "EDF3072",
      "description": "Leadership, policy and pedagogies in health and physical education",
      "Faculty": "edu"
    },
    {
      "title": "EDF3073",
      "description": "Health, sustainability and wellbeing",
      "Faculty": "edu"
    },
    {
      "title": "EDF3101",
      "description": "Professional experience 3A",
      "Faculty": "edu"
    },
    {
      "title": "EDF3102",
      "description": "Professional experience 3B",
      "Faculty": "edu"
    },
    {
      "title": "EDF3103",
      "description": "Fieldwork experience in outdoor education and environmental studies 3",
      "Faculty": "edu"
    },
    {
      "title": "EDF3151",
      "description": "Literacy theory, policy and practice",
      "Faculty": "edu"
    },
    {
      "title": "EDF3152",
      "description": "Leading English and literacy",
      "Faculty": "edu"
    },
    {
      "title": "EDF3161",
      "description": "Subject knowledge for teaching: Statistics and probability",
      "Faculty": "edu"
    },
    {
      "title": "EDF3162",
      "description": "Leading mathematics and numeracy",
      "Faculty": "edu"
    },
    {
      "title": "EDF3171",
      "description": "Applied movement contexts in health and physical education 2",
      "Faculty": "edu"
    },
    {
      "title": "EDF3172",
      "description": "Inclusion and diversity in movement contexts",
      "Faculty": "edu"
    },
    {
      "title": "EDF3173",
      "description": "Food, health and wellbeing",
      "Faculty": "edu"
    },
    {
      "title": "EDF3174",
      "description": "Experiencing outdoor environments",
      "Faculty": "edu"
    },
    {
      "title": "EDF3175",
      "description": "Outdoor environments, education and sustainability",
      "Faculty": "edu"
    },
    {
      "title": "EDF3181",
      "description": "Art, environment and community",
      "Faculty": "edu"
    },
    {
      "title": "EDF3210",
      "description": "Education policy and practice",
      "Faculty": "edu"
    },
    {
      "title": "EDF3211",
      "description": "Inclusive education: Teaching diverse learners",
      "Faculty": "edu"
    },
    {
      "title": "EDF3212",
      "description": "Mathematics education 2",
      "Faculty": "edu"
    },
    {
      "title": "EDF3213",
      "description": "Creative arts education",
      "Faculty": "edu"
    },
    {
      "title": "EDF3216",
      "description": "Humanities and social sciences education in the primary and secondary years",
      "Faculty": "edu"
    },
    {
      "title": "EDF3217",
      "description": "Digital technologies: Teaching, learning and the curriculum",
      "Faculty": "edu"
    },
    {
      "title": "EDF3218",
      "description": "Curriculum, assessment and evaluation",
      "Faculty": "edu"
    },
    {
      "title": "EDF3219",
      "description": "English education 2",
      "Faculty": "edu"
    },
    {
      "title": "EDF3220",
      "description": "Health and physical education",
      "Faculty": "edu"
    },
    {
      "title": "EDF3269",
      "description": "Secondary pedagogy A",
      "Faculty": "edu"
    },
    {
      "title": "EDF3303",
      "description": "Integrating the curriculum 1: Creative exchange",
      "Faculty": "edu"
    },
    {
      "title": "EDF3304",
      "description": "Integrating the curriculum 2: Different places",
      "Faculty": "edu"
    },
    {
      "title": "EDF3306",
      "description": "Literacy",
      "Faculty": "edu"
    },
    {
      "title": "EDF3551",
      "description": "Curriculum in inclusive education",
      "Faculty": "edu"
    },
    {
      "title": "EDF3552",
      "description": "Teaching and learning of students needing increased support",
      "Faculty": "edu"
    },
    {
      "title": "EDF3618",
      "description": "Research planning in sport and outdoor recreation",
      "Faculty": "edu"
    },
    {
      "title": "EDF3622",
      "description": "Advanced sports coaching and development",
      "Faculty": "edu"
    },
    {
      "title": "EDF4004",
      "description": "Curriculum, assessment and education policy",
      "Faculty": "edu"
    },
    {
      "title": "EDF4006",
      "description": "Transition and professional engagement",
      "Faculty": "edu"
    },
    {
      "title": "EDF4020",
      "description": "English and literacies 2",
      "Faculty": "edu"
    },
    {
      "title": "EDF4022",
      "description": "Humanities and social education in the primary years",
      "Faculty": "edu"
    },
    {
      "title": "EDF4023",
      "description": "Science and technology education in the primary years",
      "Faculty": "edu"
    },
    {
      "title": "EDF4024",
      "description": "Health and physical education for wellbeing in the primary curriculum",
      "Faculty": "edu"
    },
    {
      "title": "EDF4025",
      "description": "Studies of science, environment and sustainability",
      "Faculty": "edu"
    },
    {
      "title": "EDF4026",
      "description": "Arts education in the primary years",
      "Faculty": "edu"
    },
    {
      "title": "EDF4028",
      "description": "Understanding place, space and education",
      "Faculty": "edu"
    },
    {
      "title": "EDF4029",
      "description": "Play in lifelong learning",
      "Faculty": "edu"
    },
    {
      "title": "EDF4031",
      "description": "Sociology of early childhood",
      "Faculty": "edu"
    },
    {
      "title": "EDF4032",
      "description": "Contemporary theories of learning development",
      "Faculty": "edu"
    },
    {
      "title": "EDF4033",
      "description": "Innovation in curriculum and pedagogy in schools",
      "Faculty": "edu"
    },
    {
      "title": "EDF4034",
      "description": "Educating the young mathematician",
      "Faculty": "edu"
    },
    {
      "title": "EDF4035",
      "description": "Early childhood learning through new media and technologies",
      "Faculty": "edu"
    },
    {
      "title": "EDF4037",
      "description": "Thinking mathematically in primary education",
      "Faculty": "edu"
    },
    {
      "title": "EDF4041",
      "description": "Professional experience 4A",
      "Faculty": "edu"
    },
    {
      "title": "EDF4042",
      "description": "Professional experience 4B",
      "Faculty": "edu"
    },
    {
      "title": "EDF4050",
      "description": "Early years professional experience 4C",
      "Faculty": "edu"
    },
    {
      "title": "EDF4051",
      "description": "Early years professional experience 4A",
      "Faculty": "edu"
    },
    {
      "title": "EDF4052",
      "description": "Early years professional experience 4B",
      "Faculty": "edu"
    },
    {
      "title": "EDF4053",
      "description": "Primary professional experience 4A",
      "Faculty": "edu"
    },
    {
      "title": "EDF4054",
      "description": "Primary professional experience 4B",
      "Faculty": "edu"
    },
    {
      "title": "EDF4055",
      "description": "Secondary professional experience 4A",
      "Faculty": "edu"
    },
    {
      "title": "EDF4056",
      "description": "Secondary professional experience 4B",
      "Faculty": "edu"
    },
    {
      "title": "EDF4059",
      "description": "Primary professional experience 4C",
      "Faculty": "edu"
    },
    {
      "title": "EDF4100",
      "description": "Researching teaching and learning",
      "Faculty": "edu"
    },
    {
      "title": "EDF4101",
      "description": "Research project in education",
      "Faculty": "edu"
    },
    {
      "title": "EDF4120",
      "description": "Learning at the heart of teaching",
      "Faculty": "edu"
    },
    {
      "title": "EDF4121",
      "description": "Teaching: The power to change",
      "Faculty": "edu"
    },
    {
      "title": "EDF4122",
      "description": "Teaching partnerships: Working with families and communities",
      "Faculty": "edu"
    },
    {
      "title": "EDF4123",
      "description": "Literacy across the years",
      "Faculty": "edu"
    },
    {
      "title": "EDF4171",
      "description": "Advanced sport and exercise science",
      "Faculty": "edu"
    },
    {
      "title": "EDF4205",
      "description": "Initiatives in health education",
      "Faculty": "edu"
    },
    {
      "title": "EDF4251",
      "description": "Creative arts education",
      "Faculty": "edu"
    },
    {
      "title": "EDF4252",
      "description": "Integrated approaches to science learning and teaching",
      "Faculty": "edu"
    },
    {
      "title": "EDF4253",
      "description": "Humanities and social sciences education in the primary and secondary years",
      "Faculty": "edu"
    },
    {
      "title": "EDF4254",
      "description": "Developing literacy and numeracy across the curriculum",
      "Faculty": "edu"
    },
    {
      "title": "EDF4260",
      "description": "Curriculum, assessment and evaluation",
      "Faculty": "edu"
    },
    {
      "title": "EDF4262",
      "description": "History education (P-10)",
      "Faculty": "edu"
    },
    {
      "title": "EDF4264",
      "description": "Practical education and learning",
      "Faculty": "edu"
    },
    {
      "title": "EDF4266",
      "description": "English education 3",
      "Faculty": "edu"
    },
    {
      "title": "EDF4267",
      "description": "Mathematics education 3",
      "Faculty": "edu"
    },
    {
      "title": "EDF4268",
      "description": "Health and physical education",
      "Faculty": "edu"
    },
    {
      "title": "EDF4269",
      "description": "Secondary pedagogy B",
      "Faculty": "edu"
    },
    {
      "title": "EDF4311",
      "description": "Professional contexts 1",
      "Faculty": "edu"
    },
    {
      "title": "EDF4312",
      "description": "Professional contexts 2",
      "Faculty": "edu"
    },
    {
      "title": "EDF4314",
      "description": "Entering the profession 2",
      "Faculty": "edu"
    },
    {
      "title": "EDF4326",
      "description": "Early childhood field studies",
      "Faculty": "edu"
    },
    {
      "title": "EDF4511",
      "description": "English as an additional language (EAL) in content areas",
      "Faculty": "edu"
    },
    {
      "title": "EDF4512",
      "description": "Gifted education",
      "Faculty": "edu"
    },
    {
      "title": "EDF4530",
      "description": "Lifespan development and counsellor identity",
      "Faculty": "edu"
    },
    {
      "title": "EDF4531",
      "description": "Professional practice in counselling",
      "Faculty": "edu"
    },
    {
      "title": "EDF4532",
      "description": "Introduction to mental health issues",
      "Faculty": "edu"
    },
    {
      "title": "EDF4533",
      "description": "Counselling children and adolescents",
      "Faculty": "edu"
    },
    {
      "title": "EDF4536",
      "description": "Counselling practice and theory",
      "Faculty": "edu"
    },
    {
      "title": "EDF4537",
      "description": "Human growth and lifespan development",
      "Faculty": "edu"
    },
    {
      "title": "EDF4538",
      "description": "Mental health issues: Grief, trauma and substance abuse",
      "Faculty": "edu"
    },
    {
      "title": "EDF4539",
      "description": "Counselling in a multicultural context",
      "Faculty": "edu"
    },
    {
      "title": "EDF4551",
      "description": "Collaborative principles, partnerships and procedures",
      "Faculty": "edu"
    },
    {
      "title": "EDF4552",
      "description": "Advanced pedagogy",
      "Faculty": "edu"
    },
    {
      "title": "EDF4600",
      "description": "Developmental psychology and wellbeing",
      "Faculty": "edu"
    },
    {
      "title": "EDF4601",
      "description": "Ethics and professional issues",
      "Faculty": "edu"
    },
    {
      "title": "EDF4602",
      "description": "Psychological assessment",
      "Faculty": "edu"
    },
    {
      "title": "EDF4603",
      "description": "Behaviour change interventions for practitioners",
      "Faculty": "edu"
    },
    {
      "title": "EDF4604",
      "description": "Research project",
      "Faculty": "edu"
    },
    {
      "title": "EDF4605",
      "description": "Introduction to counselling psychology",
      "Faculty": "edu"
    },
    {
      "title": "EDF4610",
      "description": "Interacting with research in education contexts",
      "Faculty": "edu"
    },
    {
      "title": "EDF4611",
      "description": "Investigating education issues in global contexts",
      "Faculty": "edu"
    },
    {
      "title": "EDF4730",
      "description": "Professional experience 1A",
      "Faculty": "edu"
    },
    {
      "title": "EDF4731",
      "description": "Professional experience 1B",
      "Faculty": "edu"
    },
    {
      "title": "EDF4733",
      "description": "Professional experience 2A",
      "Faculty": "edu"
    },
    {
      "title": "EDF4734",
      "description": "Professional experience 2B",
      "Faculty": "edu"
    },
    {
      "title": "EDF4803",
      "description": "Senior secondary physical education",
      "Faculty": "edu"
    },
    {
      "title": "EDF4804",
      "description": "Senior secondary health education",
      "Faculty": "edu"
    },
    {
      "title": "EDF5015",
      "description": "Professional experience 3B",
      "Faculty": "edu"
    },
    {
      "title": "EDF5016",
      "description": "Inclusive teaching",
      "Faculty": "edu"
    },
    {
      "title": "EDF5017",
      "description": "Numeracy for learners and teachers",
      "Faculty": "edu"
    },
    {
      "title": "EDF5018",
      "description": "Curriculum, assessment and reporting",
      "Faculty": "edu"
    },
    {
      "title": "EDF5019",
      "description": "Teacher as professional leader",
      "Faculty": "edu"
    },
    {
      "title": "EDF5020",
      "description": "Early years numeracy and critical thinking",
      "Faculty": "edu"
    },
    {
      "title": "EDF5021",
      "description": "Lenses on child development",
      "Faculty": "edu"
    },
    {
      "title": "EDF5022",
      "description": "Science, technology and sustainability in early years",
      "Faculty": "edu"
    },
    {
      "title": "EDF5023",
      "description": "Creative development for children",
      "Faculty": "edu"
    },
    {
      "title": "EDF5024",
      "description": "Play and pedagogy",
      "Faculty": "edu"
    },
    {
      "title": "EDF5025",
      "description": "Early childhood policy transformations",
      "Faculty": "edu"
    },
    {
      "title": "EDF5026",
      "description": "Early years wellbeing and workplace safety",
      "Faculty": "edu"
    },
    {
      "title": "EDF5030",
      "description": "Science education in the primary years",
      "Faculty": "edu"
    },
    {
      "title": "EDF5031",
      "description": "Literacy and English education in the primary years",
      "Faculty": "edu"
    },
    {
      "title": "EDF5032",
      "description": "Numeracy and mathematics education in the primary years",
      "Faculty": "edu"
    },
    {
      "title": "EDF5033",
      "description": "Humanities and social sciences education in the primary years",
      "Faculty": "edu"
    },
    {
      "title": "EDF5034",
      "description": "Arts and design education in the primary years",
      "Faculty": "edu"
    },
    {
      "title": "EDF5035",
      "description": "Health and physical education in the primary years",
      "Faculty": "edu"
    },
    {
      "title": "EDF5036",
      "description": "Arts, design and health education in the primary years",
      "Faculty": "edu"
    },
    {
      "title": "EDF5040",
      "description": "Lifelong and workplace learning",
      "Faculty": "edu"
    },
    {
      "title": "EDF5041",
      "description": "Engaging adolescent learners",
      "Faculty": "edu"
    },
    {
      "title": "EDF5099",
      "description": "Education research project",
      "Faculty": "edu"
    },
    {
      "title": "EDF5121",
      "description": "Accounting education in the secondary years A",
      "Faculty": "edu"
    },
    {
      "title": "EDF5122",
      "description": "Accounting education in the secondary years B",
      "Faculty": "edu"
    },
    {
      "title": "EDF5123",
      "description": "Biology education in the secondary years A",
      "Faculty": "edu"
    },
    {
      "title": "EDF5124",
      "description": "Biology education in the secondary years B",
      "Faculty": "edu"
    },
    {
      "title": "EDF5125",
      "description": "Business management education in the secondary years A",
      "Faculty": "edu"
    },
    {
      "title": "EDF5126",
      "description": "Business management education in the secondary years B",
      "Faculty": "edu"
    },
    {
      "title": "EDF5127",
      "description": "Chemistry education in the secondary years A",
      "Faculty": "edu"
    },
    {
      "title": "EDF5128",
      "description": "Chemistry education in the secondary years B",
      "Faculty": "edu"
    },
    {
      "title": "EDF5129",
      "description": "Drama education in the secondary years A",
      "Faculty": "edu"
    },
    {
      "title": "EDF5130",
      "description": "Drama education in the secondary years B",
      "Faculty": "edu"
    },
    {
      "title": "EDF5131",
      "description": "Economics education in the secondary years A",
      "Faculty": "edu"
    },
    {
      "title": "EDF5132",
      "description": "Economics education in the secondary years B",
      "Faculty": "edu"
    },
    {
      "title": "EDF5133",
      "description": "English as an additional language (EAL) education in the secondary years A",
      "Faculty": "edu"
    },
    {
      "title": "EDF5134",
      "description": "English as an additional language (EAL) education in the secondary years B",
      "Faculty": "edu"
    },
    {
      "title": "EDF5135",
      "description": "English education in the secondary years A",
      "Faculty": "edu"
    },
    {
      "title": "EDF5136",
      "description": "English education in the secondary years B",
      "Faculty": "edu"
    },
    {
      "title": "EDF5137",
      "description": "General science education in the secondary years A",
      "Faculty": "edu"
    },
    {
      "title": "EDF5138",
      "description": "General science education in the secondary years B",
      "Faculty": "edu"
    },
    {
      "title": "EDF5139",
      "description": "Geography education in the secondary years A",
      "Faculty": "edu"
    },
    {
      "title": "EDF5140",
      "description": "Geography education in the secondary years B",
      "Faculty": "edu"
    },
    {
      "title": "EDF5141",
      "description": "Health education in the secondary years A",
      "Faculty": "edu"
    },
    {
      "title": "EDF5142",
      "description": "Health education in the secondary years B",
      "Faculty": "edu"
    },
    {
      "title": "EDF5143",
      "description": "History education in the secondary years A",
      "Faculty": "edu"
    },
    {
      "title": "EDF5144",
      "description": "History education in the secondary years B",
      "Faculty": "edu"
    },
    {
      "title": "EDF5145",
      "description": "Information and communication technology education in the secondary years A",
      "Faculty": "edu"
    },
    {
      "title": "EDF5146",
      "description": "Information and communication technology education in the secondary years B",
      "Faculty": "edu"
    },
    {
      "title": "EDF5151",
      "description": "Honours thesis part 1",
      "Faculty": "edu"
    },
    {
      "title": "EDF5152",
      "description": "Honours thesis part 2",
      "Faculty": "edu"
    },
    {
      "title": "EDF5153",
      "description": "Honours thesis extension 1",
      "Faculty": "edu"
    },
    {
      "title": "EDF5154",
      "description": "Honours thesis extension 2",
      "Faculty": "edu"
    },
    {
      "title": "EDF5155",
      "description": "Languages education in the secondary years A",
      "Faculty": "edu"
    },
    {
      "title": "EDF5156",
      "description": "Languages education in the secondary years B",
      "Faculty": "edu"
    },
    {
      "title": "EDF5157",
      "description": "Languages education A",
      "Faculty": "edu"
    },
    {
      "title": "EDF5158",
      "description": "Languages education B",
      "Faculty": "edu"
    },
    {
      "title": "EDF5159",
      "description": "Legal studies education in the secondary years A",
      "Faculty": "edu"
    },
    {
      "title": "EDF5160",
      "description": "Legal studies education in the secondary years B",
      "Faculty": "edu"
    },
    {
      "title": "EDF5161",
      "description": "Mathematics education in the secondary years A",
      "Faculty": "edu"
    },
    {
      "title": "EDF5162",
      "description": "Mathematics education in the secondary years B",
      "Faculty": "edu"
    },
    {
      "title": "EDF5163",
      "description": "Media education in the secondary years A",
      "Faculty": "edu"
    },
    {
      "title": "EDF5164",
      "description": "Media education in the secondary years B",
      "Faculty": "edu"
    },
    {
      "title": "EDF5165",
      "description": "Music education in the secondary years 1A",
      "Faculty": "edu"
    },
    {
      "title": "EDF5166",
      "description": "Music education in the secondary years 1B",
      "Faculty": "edu"
    },
    {
      "title": "EDF5167",
      "description": "Music education in the secondary years 2A",
      "Faculty": "edu"
    },
    {
      "title": "EDF5168",
      "description": "Music education in the secondary years 2B",
      "Faculty": "edu"
    },
    {
      "title": "EDF5169",
      "description": "Outdoor education in the secondary years A",
      "Faculty": "edu"
    },
    {
      "title": "EDF5170",
      "description": "Outdoor education in the secondary years B",
      "Faculty": "edu"
    },
    {
      "title": "EDF5171",
      "description": "Physical education in the secondary years A",
      "Faculty": "edu"
    },
    {
      "title": "EDF5172",
      "description": "Physical education in the secondary years B",
      "Faculty": "edu"
    },
    {
      "title": "EDF5173",
      "description": "Physics education in the secondary years A",
      "Faculty": "edu"
    },
    {
      "title": "EDF5174",
      "description": "Physics education in the secondary years B",
      "Faculty": "edu"
    },
    {
      "title": "EDF5175",
      "description": "Psychology education in the secondary years A",
      "Faculty": "edu"
    },
    {
      "title": "EDF5176",
      "description": "Psychology education in the secondary years B",
      "Faculty": "edu"
    },
    {
      "title": "EDF5177",
      "description": "Social education in the secondary years A",
      "Faculty": "edu"
    },
    {
      "title": "EDF5178",
      "description": "Social education in the secondary years B",
      "Faculty": "edu"
    },
    {
      "title": "EDF5179",
      "description": "Visual art and design education in the secondary years 1A",
      "Faculty": "edu"
    },
    {
      "title": "EDF5180",
      "description": "Visual art and design education in the secondary years 1B",
      "Faculty": "edu"
    },
    {
      "title": "EDF5181",
      "description": "Visual art and design education in the secondary years 2A",
      "Faculty": "edu"
    },
    {
      "title": "EDF5182",
      "description": "Visual art and design education in the secondary years 2B",
      "Faculty": "edu"
    },
    {
      "title": "EDF5183",
      "description": "Teaching specialism in secondary education A",
      "Faculty": "edu"
    },
    {
      "title": "EDF5184",
      "description": "Teaching specialism in secondary education B",
      "Faculty": "edu"
    },
    {
      "title": "EDF5301",
      "description": "Introduction to STEM education",
      "Faculty": "edu"
    },
    {
      "title": "EDF5302",
      "description": "Content, pedagogy and pedagogical content knowledge in STEM education",
      "Faculty": "edu"
    },
    {
      "title": "EDF5303",
      "description": "Digital foundations of STEM education",
      "Faculty": "edu"
    },
    {
      "title": "EDF5304",
      "description": "Contemporary practices of STEM education",
      "Faculty": "edu"
    },
    {
      "title": "EDF5513",
      "description": "Evidence-based counselling in practice",
      "Faculty": "edu"
    },
    {
      "title": "EDF5514",
      "description": "Applied psychological assessment and psychopathology",
      "Faculty": "edu"
    },
    {
      "title": "EDF5515",
      "description": "Applied ethics and research practice",
      "Faculty": "edu"
    },
    {
      "title": "EDF5516",
      "description": "Clinical and therapeutic interventions",
      "Faculty": "edu"
    },
    {
      "title": "EDF5517",
      "description": "Professional experience in psychology",
      "Faculty": "edu"
    },
    {
      "title": "EDF5530",
      "description": "Counselling skills for individuals, couples and groups",
      "Faculty": "edu"
    },
    {
      "title": "EDF5531",
      "description": "Cognitive behaviour therapies",
      "Faculty": "edu"
    },
    {
      "title": "EDF5532",
      "description": "Ethics for counsellors",
      "Faculty": "edu"
    },
    {
      "title": "EDF5533",
      "description": "Advanced counselling practice",
      "Faculty": "edu"
    },
    {
      "title": "EDF5534",
      "description": "Supervised professional counselling practice",
      "Faculty": "edu"
    },
    {
      "title": "EDF5540",
      "description": "Children and adolescents counselling",
      "Faculty": "edu"
    },
    {
      "title": "EDF5541",
      "description": "Personnel and career development counselling",
      "Faculty": "edu"
    },
    {
      "title": "EDF5542",
      "description": "Counselling skills: Individuals and couples",
      "Faculty": "edu"
    },
    {
      "title": "EDF5543",
      "description": "Ethics and professional issues in counselling and psychology",
      "Faculty": "edu"
    },
    {
      "title": "EDF5544",
      "description": "Group counselling skills and psychotherapy",
      "Faculty": "edu"
    },
    {
      "title": "EDF5545",
      "description": "Cognitive behaviour therapy",
      "Faculty": "edu"
    },
    {
      "title": "EDF5546",
      "description": "Advanced personnel and career development counselling",
      "Faculty": "edu"
    },
    {
      "title": "EDF5547",
      "description": "Counselling research design, statistics and program evaluation",
      "Faculty": "edu"
    },
    {
      "title": "EDF5551",
      "description": "Psychological assessment and measurement",
      "Faculty": "edu"
    },
    {
      "title": "EDF5552",
      "description": "Counselling practicum",
      "Faculty": "edu"
    },
    {
      "title": "EDF5553",
      "description": "Research project in counselling",
      "Faculty": "edu"
    },
    {
      "title": "EDF5554",
      "description": "Counselling internship",
      "Faculty": "edu"
    },
    {
      "title": "EDF5613",
      "description": "Research approaches in education",
      "Faculty": "edu"
    },
    {
      "title": "EDF5614",
      "description": "Research project in education",
      "Faculty": "edu"
    },
    {
      "title": "EDF5620",
      "description": "Leading education and work",
      "Faculty": "edu"
    },
    {
      "title": "EDF5621",
      "description": "Challenging curriculum, pedagogy and assessment",
      "Faculty": "edu"
    },
    {
      "title": "EDF5622",
      "description": "Developing learners and learning",
      "Faculty": "edu"
    },
    {
      "title": "EDF5623",
      "description": "Deepening education and sustainability",
      "Faculty": "edu"
    },
    {
      "title": "EDF5632",
      "description": "Understanding inclusion in learning communities",
      "Faculty": "edu"
    },
    {
      "title": "EDF5635",
      "description": "Leading capable organisations",
      "Faculty": "edu"
    },
    {
      "title": "EDF5636",
      "description": "Leading organisational decision making",
      "Faculty": "edu"
    },
    {
      "title": "EDF5637",
      "description": "Inner leadership: Understanding self and others",
      "Faculty": "edu"
    },
    {
      "title": "EDF5640",
      "description": "Language, culture and curriculum",
      "Faculty": "edu"
    },
    {
      "title": "EDF5641",
      "description": "Pedagogy and assessment in TESOL",
      "Faculty": "edu"
    },
    {
      "title": "EDF5642",
      "description": "Bilingualism and content-based programs",
      "Faculty": "edu"
    },
    {
      "title": "EDF5645",
      "description": "Educating the gifted",
      "Faculty": "edu"
    },
    {
      "title": "EDF5646",
      "description": "Talent development and diversity",
      "Faculty": "edu"
    },
    {
      "title": "EDF5647",
      "description": "Technology and education key issues and debates",
      "Faculty": "edu"
    },
    {
      "title": "EDF5648",
      "description": "Instructional design: Harnessing digital technologies for learning",
      "Faculty": "edu"
    },
    {
      "title": "EDF5649",
      "description": "Language and literacies across educational contexts",
      "Faculty": "edu"
    },
    {
      "title": "EDF5650",
      "description": "Literacy leadership in schools, workplaces and communities",
      "Faculty": "edu"
    },
    {
      "title": "EDF5651",
      "description": "Developing expertise in mathematics education",
      "Faculty": "edu"
    },
    {
      "title": "EDF5652",
      "description": "Understanding research and leadership in science education",
      "Faculty": "edu"
    },
    {
      "title": "EDF5653",
      "description": "Research perspectives in music education",
      "Faculty": "edu"
    },
    {
      "title": "EDF5654",
      "description": "Teaching music: Theory and practice",
      "Faculty": "edu"
    },
    {
      "title": "EDF5655",
      "description": "Expertise in teaching",
      "Faculty": "edu"
    },
    {
      "title": "EDF5656",
      "description": "Practising inclusion",
      "Faculty": "edu"
    },
    {
      "title": "EDF5657",
      "description": "Indigenous perspectives in professional practice",
      "Faculty": "edu"
    },
    {
      "title": "EDF5658",
      "description": "Young people: Culture, communities and education",
      "Faculty": "edu"
    },
    {
      "title": "EDF5659",
      "description": "Building partnerships with families and communities",
      "Faculty": "edu"
    },
    {
      "title": "EDF5661",
      "description": "Designing learning for adults",
      "Faculty": "edu"
    },
    {
      "title": "EDF5662",
      "description": "Leading local, rural and regional learning and participation",
      "Faculty": "edu"
    },
    {
      "title": "EDF5663",
      "description": "Education and globalisation in the Asian century",
      "Faculty": "edu"
    },
    {
      "title": "EDF5664",
      "description": "Learning through participation",
      "Faculty": "edu"
    },
    {
      "title": "EDF5665",
      "description": "Environmental education, design and learning for sustainability",
      "Faculty": "edu"
    },
    {
      "title": "EDF5666",
      "description": "Education, development and ecological sustainability",
      "Faculty": "edu"
    },
    {
      "title": "EDF5667",
      "description": "Positive behaviour support",
      "Faculty": "edu"
    },
    {
      "title": "EDF5670",
      "description": "Leadership studies",
      "Faculty": "edu"
    },
    {
      "title": "EDF5671",
      "description": "Leadership challenge project",
      "Faculty": "edu"
    },
    {
      "title": "EDF5672",
      "description": "Leadership in educational technology practices",
      "Faculty": "edu"
    },
    {
      "title": "EDF5673",
      "description": "Leading mathematics and numeracy education",
      "Faculty": "edu"
    },
    {
      "title": "EDF5674",
      "description": "Engaging with practices of contemporary science",
      "Faculty": "edu"
    },
    {
      "title": "EDF5678",
      "description": "Leading learning communities",
      "Faculty": "edu"
    },
    {
      "title": "EDF5691",
      "description": "Professional project",
      "Faculty": "edu"
    },
    {
      "title": "EDF5692",
      "description": "Professional practice in special and inclusive education",
      "Faculty": "edu"
    },
    {
      "title": "EDF5693",
      "description": "Using and evaluating research evidence",
      "Faculty": "edu"
    },
    {
      "title": "EDF5694",
      "description": "Taking a stand in education debates",
      "Faculty": "edu"
    },
    {
      "title": "EDF5695",
      "description": "Self-study as professional inquiry",
      "Faculty": "edu"
    },
    {
      "title": "EDF5696",
      "description": "Professional practice for teachers of TESOL",
      "Faculty": "edu"
    },
    {
      "title": "EDF5699",
      "description": "Extended teaching practice",
      "Faculty": "edu"
    },
    {
      "title": "EDF5720",
      "description": "Developmental psychology and counselling and research",
      "Faculty": "edu"
    },
    {
      "title": "EDF5721",
      "description": "Clinical interventions in educational and developmental psychology",
      "Faculty": "edu"
    },
    {
      "title": "EDF5722",
      "description": "Cognitive, personality and educational assessment",
      "Faculty": "edu"
    },
    {
      "title": "EDF5723",
      "description": "Exceptionality: Assessment and intervention",
      "Faculty": "edu"
    },
    {
      "title": "EDF5731",
      "description": "Clinical placement in psychology 1",
      "Faculty": "edu"
    },
    {
      "title": "EDF5732",
      "description": "Clinical placement in psychology 2",
      "Faculty": "edu"
    },
    {
      "title": "EDF5733",
      "description": "Clinical placement in psychology 3",
      "Faculty": "edu"
    },
    {
      "title": "EDF5741",
      "description": "Psychology thesis part 1",
      "Faculty": "edu"
    },
    {
      "title": "EDF5742",
      "description": "Psychology thesis part 2",
      "Faculty": "edu"
    },
    {
      "title": "EDF5810",
      "description": "VCAL and VET at school",
      "Faculty": "edu"
    },
    {
      "title": "EDF5814",
      "description": "Creative research approaches",
      "Faculty": "edu"
    },
    {
      "title": "EDF5905",
      "description": "Early years literacy and numeracy",
      "Faculty": "edu"
    },
    {
      "title": "EDF5925",
      "description": "Early years professional experience 1",
      "Faculty": "edu"
    },
    {
      "title": "EDF5926",
      "description": "Early years professional experience 2",
      "Faculty": "edu"
    },
    {
      "title": "EDF5927",
      "description": "Early years professional experience 3",
      "Faculty": "edu"
    },
    {
      "title": "EDF5928",
      "description": "Early years professional experience 4",
      "Faculty": "edu"
    },
    {
      "title": "EDF5931",
      "description": "Primary professional experience 1",
      "Faculty": "edu"
    },
    {
      "title": "EDF5932",
      "description": "Primary professional experience 2",
      "Faculty": "edu"
    },
    {
      "title": "EDF5933",
      "description": "Primary professional experience 3",
      "Faculty": "edu"
    },
    {
      "title": "EDF5934",
      "description": "Primary professional experience 4",
      "Faculty": "edu"
    },
    {
      "title": "EDF5935",
      "description": "Primary professional experience 5",
      "Faculty": "edu"
    },
    {
      "title": "EDF5936",
      "description": "Primary professional experience 6",
      "Faculty": "edu"
    },
    {
      "title": "EDF5941",
      "description": "Secondary professional experience 1",
      "Faculty": "edu"
    },
    {
      "title": "EDF5942",
      "description": "Secondary professional experience 2",
      "Faculty": "edu"
    },
    {
      "title": "EDF5943",
      "description": "Secondary professional experience 3",
      "Faculty": "edu"
    },
    {
      "title": "EDF5944",
      "description": "Secondary professional experience 4",
      "Faculty": "edu"
    },
    {
      "title": "EDF6509",
      "description": "Clinical placement in psychology 3",
      "Faculty": "edu"
    },
    {
      "title": "EDF6536",
      "description": "Psychology thesis part 2",
      "Faculty": "edu"
    },
    {
      "title": "EDF6541",
      "description": "Field experience in counselling",
      "Faculty": "edu"
    },
    {
      "title": "ENE1621",
      "description": "Environmental engineering",
      "Faculty": "eng"
    },
    {
      "title": "ENE2503",
      "description": "Materials properties and recycling",
      "Faculty": "eng"
    },
    {
      "title": "ENE3048",
      "description": "Energy and the environment",
      "Faculty": "eng"
    },
    {
      "title": "ENE3606",
      "description": "The air environment",
      "Faculty": "eng"
    },
    {
      "title": "ENE3608",
      "description": "Environmental impact assessment and management systems",
      "Faculty": "eng"
    },
    {
      "title": "ENE4607",
      "description": "Environmental risk assessment",
      "Faculty": "eng"
    },
    {
      "title": "ENG1001",
      "description": "Engineering design: lighter, faster, stronger",
      "Faculty": "eng"
    },
    {
      "title": "ENG1002",
      "description": "Engineering design: cleaner, safer, smarter",
      "Faculty": "eng"
    },
    {
      "title": "ENG1003",
      "description": "Engineering mobile apps",
      "Faculty": "eng"
    },
    {
      "title": "ENG1005",
      "description": "Engineering mathematics",
      "Faculty": "eng"
    },
    {
      "title": "ENG1021",
      "description": "Spatial communication in engineering",
      "Faculty": "eng"
    },
    {
      "title": "ENG1051",
      "description": "Materials for energy and sustainability",
      "Faculty": "eng"
    },
    {
      "title": "ENG1060",
      "description": "Computing for engineers",
      "Faculty": "eng"
    },
    {
      "title": "ENG1081",
      "description": "Physics for engineering",
      "Faculty": "eng"
    },
    {
      "title": "ENG1090",
      "description": "Foundation mathematics",
      "Faculty": "eng"
    },
    {
      "title": "ENG1210",
      "description": "Introduction to structural engineering",
      "Faculty": "eng"
    },
    {
      "title": "ENG1211",
      "description": "Introduction to engineering systems",
      "Faculty": "eng"
    },
    {
      "title": "ENG2000",
      "description": "Engineering load - branch selection pending",
      "Faculty": "eng"
    },
    {
      "title": "ENG2001",
      "description": "E3007 - Branch Selection",
      "Faculty": "eng"
    },
    {
      "title": "ENG2005",
      "description": "Advanced engineering mathematics",
      "Faculty": "eng"
    },
    {
      "title": "ENG2121",
      "description": "Diagnostics for cultural heritage",
      "Faculty": "eng"
    },
    {
      "title": "ENG2202",
      "description": "Steel structures",
      "Faculty": "eng"
    },
    {
      "title": "ENG2203",
      "description": "Concrete structures",
      "Faculty": "eng"
    },
    {
      "title": "ENG2204",
      "description": "Water systems",
      "Faculty": "eng"
    },
    {
      "title": "ENG2206",
      "description": "Introduction to geoengineering",
      "Faculty": "eng"
    },
    {
      "title": "ENG2207",
      "description": "Waterway engineering",
      "Faculty": "eng"
    },
    {
      "title": "ENG2801",
      "description": "Leadership and innovation",
      "Faculty": "eng"
    },
    {
      "title": "ENG3201",
      "description": "Project management for engineers",
      "Faculty": "eng"
    },
    {
      "title": "ENG3202",
      "description": "Geoengineering",
      "Faculty": "eng"
    },
    {
      "title": "ENG3203",
      "description": "Environmental geoengineering",
      "Faculty": "eng"
    },
    {
      "title": "ENG3204",
      "description": "Water and wastewater",
      "Faculty": "eng"
    },
    {
      "title": "ENG3205",
      "description": "Traffic and transport",
      "Faculty": "eng"
    },
    {
      "title": "ENG3206",
      "description": "Civil and environmental engineering design",
      "Faculty": "eng"
    },
    {
      "title": "ENG4001",
      "description": "Special studies in engineering 1",
      "Faculty": "eng"
    },
    {
      "title": "ENG4002",
      "description": "Special studies in engineering 2",
      "Faculty": "eng"
    },
    {
      "title": "ENG4201",
      "description": "Project",
      "Faculty": "eng"
    },
    {
      "title": "ENG4203",
      "description": "Management of water resources",
      "Faculty": "eng"
    },
    {
      "title": "ENG4204",
      "description": "Road engineering",
      "Faculty": "eng"
    },
    {
      "title": "ENG4205",
      "description": "Project B",
      "Faculty": "eng"
    },
    {
      "title": "ENG4700",
      "description": "Engineering technology for biomedical imaging and sensing",
      "Faculty": "eng"
    },
    {
      "title": "ENG5001",
      "description": "Advanced engineering data analysis",
      "Faculty": "eng"
    },
    {
      "title": "ENG5002",
      "description": "Engineering entrepreneurship",
      "Faculty": "eng"
    },
    {
      "title": "ENG5003",
      "description": "Advanced design project A",
      "Faculty": "eng"
    },
    {
      "title": "ENG5004",
      "description": "Advanced design project B",
      "Faculty": "eng"
    },
    {
      "title": "ENG5005",
      "description": "Engineering project A",
      "Faculty": "eng"
    },
    {
      "title": "ENG5006",
      "description": "Engineering project B",
      "Faculty": "eng"
    },
    {
      "title": "ENG5007",
      "description": "Translation and commercialisation of medical technologies",
      "Faculty": "eng"
    },
    {
      "title": "ENG5881",
      "description": "Minor project",
      "Faculty": "eng"
    },
    {
      "title": "ENG6001",
      "description": "Advanced engineering data analysis",
      "Faculty": "eng"
    },
    {
      "title": "ENG6002",
      "description": "Engineering entrepreneurship",
      "Faculty": "eng"
    },
    {
      "title": "ENG6007",
      "description": "Translation and commercialisation of medical technologies",
      "Faculty": "eng"
    },
    {
      "title": "ENS5010",
      "description": "Global challenges and sustainability",
      "Faculty": "sci"
    },
    {
      "title": "ENS5020",
      "description": "Perspectives on sustainability",
      "Faculty": "sci"
    },
    {
      "title": "ENS5310",
      "description": "Securing biodiversity and ecosystems",
      "Faculty": "sci"
    },
    {
      "title": "ENS5320",
      "description": "Climate change, energy and human security",
      "Faculty": "sci"
    },
    {
      "title": "ENS5330",
      "description": "Water security and environmental pollution",
      "Faculty": "sci"
    },
    {
      "title": "ENS5510",
      "description": "Processes to influence change",
      "Faculty": "sci"
    },
    {
      "title": "ENS5520",
      "description": "Understanding human behaviour to influence change",
      "Faculty": "sci"
    },
    {
      "title": "ENS5530",
      "description": "Leading change for sustainable development",
      "Faculty": "sci"
    },
    {
      "title": "ENS5900",
      "description": "Research project in environment and sustainability",
      "Faculty": "sci"
    },
    {
      "title": "ENS5901",
      "description": "Research project in environment and sustainability part A",
      "Faculty": "sci"
    },
    {
      "title": "ENS5902",
      "description": "Research project in environment and sustainability B",
      "Faculty": "sci"
    },
    {
      "title": "ENS5910",
      "description": "Interdisciplinary project for sustainable development solutions",
      "Faculty": "sci"
    },
    {
      "title": "ENS5920",
      "description": "Environment and sustainability project",
      "Faculty": "sci"
    },
    {
      "title": "ENS5930",
      "description": "Sustainability internship",
      "Faculty": "sci"
    },
    {
      "title": "ENV1800",
      "description": "Environmental science: A Southeast Asian perspective",
      "Faculty": "sci"
    },
    {
      "title": "ENV2022",
      "description": "Environmental sampling and monitoring",
      "Faculty": "sci"
    },
    {
      "title": "ENV2726",
      "description": "Ecosystems and bioresources",
      "Faculty": "sci"
    },
    {
      "title": "ENV2757",
      "description": "Environmental health",
      "Faculty": "sci"
    },
    {
      "title": "ENV2792",
      "description": "Mathematical models of the environment",
      "Faculty": "eng"
    },
    {
      "title": "ENV3022",
      "description": "Environmental technology",
      "Faculty": "sci"
    },
    {
      "title": "ENV3639",
      "description": "Minerals and energy",
      "Faculty": "sci"
    },
    {
      "title": "EPM5001",
      "description": "Health indicators and health surveys",
      "Faculty": "med"
    },
    {
      "title": "EPM5002",
      "description": "Mathematical background for biostatistics",
      "Faculty": "med"
    },
    {
      "title": "EPM5003",
      "description": "Principles of statistical inference",
      "Faculty": "med"
    },
    {
      "title": "EPM5004",
      "description": "Linear models",
      "Faculty": "med"
    },
    {
      "title": "EPM5005",
      "description": "Data management and statistical computing",
      "Faculty": "med"
    },
    {
      "title": "EPM5006",
      "description": "Clinical biostatistics",
      "Faculty": "med"
    },
    {
      "title": "EPM5007",
      "description": "Design of randomised controlled trials",
      "Faculty": "med"
    },
    {
      "title": "EPM5008",
      "description": "Longitudinal and correlated data analysis",
      "Faculty": "med"
    },
    {
      "title": "EPM5009",
      "description": "Categorical data and generalised linear models",
      "Faculty": "med"
    },
    {
      "title": "EPM5010",
      "description": "Survival analysis",
      "Faculty": "med"
    },
    {
      "title": "EPM5011",
      "description": "Biostatistics practical project - double unit",
      "Faculty": "med"
    },
    {
      "title": "EPM5012",
      "description": "Bioinformatics",
      "Faculty": "med"
    },
    {
      "title": "EPM5013",
      "description": "Bayesian statistical methods",
      "Faculty": "med"
    },
    {
      "title": "EPM5014",
      "description": "Probability and distribution theory",
      "Faculty": "med"
    },
    {
      "title": "EPM5015",
      "description": "Biostatistics practical project - single unit",
      "Faculty": "med"
    },
    {
      "title": "EPM5023",
      "description": "Foundations of international health",
      "Faculty": "med"
    },
    {
      "title": "EPP1011",
      "description": "The contemporary paramedic",
      "Faculty": "med"
    },
    {
      "title": "EPP1012",
      "description": "Clinical concepts of paramedic practice 1",
      "Faculty": "med"
    },
    {
      "title": "EPP2011",
      "description": "Clinical concepts of paramedic practice 2",
      "Faculty": "med"
    },
    {
      "title": "EPP2032",
      "description": "Paramedic clinical practice",
      "Faculty": "med"
    },
    {
      "title": "EPP2042",
      "description": "Paramedic management of trauma conditions",
      "Faculty": "med"
    },
    {
      "title": "ESC3162",
      "description": "Ore deposit geology and global metallogeny",
      "Faculty": "sci"
    },
    {
      "title": "ESC3180",
      "description": "Field mapping",
      "Faculty": "sci"
    },
    {
      "title": "ESC3190",
      "description": "Hydrogeology and environmental geoscience",
      "Faculty": "sci"
    },
    {
      "title": "ESC3201",
      "description": "Deformation of the crust",
      "Faculty": "sci"
    },
    {
      "title": "ESC3232",
      "description": "The dynamic biosphere: Changing fauna and flora through geological time",
      "Faculty": "sci"
    },
    {
      "title": "ESC3259",
      "description": "Geographical information systems (GIS) for environmental management",
      "Faculty": "sci"
    },
    {
      "title": "ESC3311",
      "description": "Applied Geophysics",
      "Faculty": "sci"
    },
    {
      "title": "ESC3332",
      "description": "Global dynamics and crustal evolution",
      "Faculty": "sci"
    },
    {
      "title": "ESC3340",
      "description": "Geophysics: Special topics",
      "Faculty": "sci"
    },
    {
      "title": "ESC3421",
      "description": "Igneous and metamorphic processes and geochemistry",
      "Faculty": "sci"
    },
    {
      "title": "ESC3545",
      "description": "Environmental hydrology",
      "Faculty": "sci"
    },
    {
      "title": "ESC3552",
      "description": "Remote sensing of the environment",
      "Faculty": "sci"
    },
    {
      "title": "ESC3788",
      "description": "Soils, landscapes and their management",
      "Faculty": "sci"
    },
    {
      "title": "ESC3791",
      "description": "Environmental change: Past to future",
      "Faculty": "sci"
    },
    {
      "title": "ESC3887",
      "description": "Designing urban futures: Urban climate, water and adaptation",
      "Faculty": "sci"
    },
    {
      "title": "ESC3900",
      "description": "Dynamic earth",
      "Faculty": "sci"
    },
    {
      "title": "ESC4120",
      "description": "Earth sciences research project part time II",
      "Faculty": "sci"
    },
    {
      "title": "ESC4220",
      "description": "Earth science honours coursework part time II",
      "Faculty": "sci"
    },
    {
      "title": "ETB1100",
      "description": "Business statistics",
      "Faculty": "buseco"
    },
    {
      "title": "ETB2111",
      "description": "Business data modelling",
      "Faculty": "buseco"
    },
    {
      "title": "ETC1000",
      "description": "Business and economic statistics",
      "Faculty": "buseco"
    },
    {
      "title": "ETC1010",
      "description": "Data modelling and computing",
      "Faculty": "buseco"
    },
    {
      "title": "ETC2410",
      "description": "Introductory econometrics",
      "Faculty": "buseco"
    },
    {
      "title": "ETC2420",
      "description": "Statistical thinking",
      "Faculty": "buseco"
    },
    {
      "title": "ETC2430",
      "description": "Actuarial statistics",
      "Faculty": "buseco"
    },
    {
      "title": "ETC2440",
      "description": "Mathematics for economics and business",
      "Faculty": "buseco"
    },
    {
      "title": "ETC2450",
      "description": "Applied forecasting for business and economics",
      "Faculty": "buseco"
    },
    {
      "title": "ETC2470",
      "description": "Applied business modelling",
      "Faculty": "buseco"
    },
    {
      "title": "ETC2480",
      "description": "Business modelling methods",
      "Faculty": "buseco"
    },
    {
      "title": "ETC2500",
      "description": "Marketing research analysis",
      "Faculty": "buseco"
    },
    {
      "title": "ETC2520",
      "description": "Probability and statistical inference for economics and business",
      "Faculty": "buseco"
    },
    {
      "title": "ETC3250",
      "description": "Business analytics",
      "Faculty": "buseco"
    },
    {
      "title": "ETC3400",
      "description": "Principles of econometrics",
      "Faculty": "buseco"
    },
    {
      "title": "ETC3410",
      "description": "Applied econometrics",
      "Faculty": "buseco"
    },
    {
      "title": "ETC3420",
      "description": "Applied insurance methods",
      "Faculty": "buseco"
    },
    {
      "title": "ETC3430",
      "description": "Financial mathematics under uncertainty",
      "Faculty": "buseco"
    },
    {
      "title": "ETC3440",
      "description": "Introductory econometrics",
      "Faculty": "buseco"
    },
    {
      "title": "ETC3450",
      "description": "Time series analysis for business and economics",
      "Faculty": "buseco"
    },
    {
      "title": "ETC3460",
      "description": "Financial econometrics",
      "Faculty": "buseco"
    },
    {
      "title": "ETC3490",
      "description": "Risk and business modelling",
      "Faculty": "buseco"
    },
    {
      "title": "ETC3500",
      "description": "Survey data analysis",
      "Faculty": "buseco"
    },
    {
      "title": "ETC3510",
      "description": "Modelling in finance and insurance",
      "Faculty": "buseco"
    },
    {
      "title": "ETC3530",
      "description": "Contingencies in insurance and pensions",
      "Faculty": "buseco"
    },
    {
      "title": "ETC3550",
      "description": "Applied forecasting for business and economics",
      "Faculty": "buseco"
    },
    {
      "title": "ETC3580",
      "description": "Advanced statistical modelling",
      "Faculty": "buseco"
    },
    {
      "title": "ETC3860",
      "description": "Integrated economic modelling",
      "Faculty": "buseco"
    },
    {
      "title": "ETC4010",
      "description": "Special reading unit in econometrics honours",
      "Faculty": "buseco"
    },
    {
      "title": "ETC4110",
      "description": "Actuarial practice I",
      "Faculty": "buseco"
    },
    {
      "title": "ETC4120",
      "description": "Actuarial practice II",
      "Faculty": "buseco"
    },
    {
      "title": "ETC4130",
      "description": "Asset liability management",
      "Faculty": "buseco"
    },
    {
      "title": "ETC4400",
      "description": "Econometric theory",
      "Faculty": "buseco"
    },
    {
      "title": "ETC4410",
      "description": "Applied econometrics 2",
      "Faculty": "buseco"
    },
    {
      "title": "ETC4420",
      "description": "Microeconometrics",
      "Faculty": "buseco"
    },
    {
      "title": "ETC4430",
      "description": "Quantitative economic policy",
      "Faculty": "buseco"
    },
    {
      "title": "ETC4460",
      "description": "Financial econometrics 2",
      "Faculty": "buseco"
    },
    {
      "title": "ETC4541",
      "description": "Bayesian Time Series Econometrics",
      "Faculty": "buseco"
    },
    {
      "title": "ETC4860",
      "description": "Honours research project",
      "Faculty": "buseco"
    },
    {
      "title": "ETC5010",
      "description": "Special reading unit 2",
      "Faculty": "buseco"
    },
    {
      "title": "ETC5020",
      "description": "Special reading unit 3",
      "Faculty": "buseco"
    },
    {
      "title": "ETC5242",
      "description": "Statistical thinking",
      "Faculty": "buseco"
    },
    {
      "title": "ETC5252",
      "description": "Probability and statistical inference for economics and business",
      "Faculty": "buseco"
    },
    {
      "title": "ETC5340",
      "description": "Principles of econometrics",
      "Faculty": "buseco"
    },
    {
      "title": "ETC5341",
      "description": "Applied econometrics",
      "Faculty": "buseco"
    },
    {
      "title": "ETC5342",
      "description": "Applied insurance methods",
      "Faculty": "buseco"
    },
    {
      "title": "ETC5343",
      "description": "Financial mathematics under uncertainty",
      "Faculty": "buseco"
    },
    {
      "title": "ETC5345",
      "description": "Time series analysis for business and economics",
      "Faculty": "buseco"
    },
    {
      "title": "ETC5346",
      "description": "Financial econometrics",
      "Faculty": "buseco"
    },
    {
      "title": "ETC5351",
      "description": "Modelling in finance and insurance",
      "Faculty": "buseco"
    },
    {
      "title": "ETC5353",
      "description": "Insurance and pensions",
      "Faculty": "buseco"
    },
    {
      "title": "ETC5400",
      "description": "Research topics in econometrics",
      "Faculty": "buseco"
    },
    {
      "title": "ETC5410",
      "description": "Bayesian Time Series Econometrics",
      "Faculty": "buseco"
    },
    {
      "title": "ETC5420",
      "description": "Microeconometrics",
      "Faculty": "buseco"
    },
    {
      "title": "ETC5440",
      "description": "Econometric theory",
      "Faculty": "buseco"
    },
    {
      "title": "ETC5441",
      "description": "Applied econometrics 2",
      "Faculty": "buseco"
    },
    {
      "title": "ETC5443",
      "description": "Quantitative economic policy",
      "Faculty": "buseco"
    },
    {
      "title": "ETC5460",
      "description": "Financial econometrics 2",
      "Faculty": "buseco"
    },
    {
      "title": "ETC5470",
      "description": "Econometrics graduate seminar",
      "Faculty": "buseco"
    },
    {
      "title": "ETC5860",
      "description": "Research paper",
      "Faculty": "buseco"
    },
    {
      "title": "ETC5900",
      "description": "Business statistics",
      "Faculty": "buseco"
    },
    {
      "title": "ETF1100",
      "description": "Business statistics",
      "Faculty": "buseco"
    },
    {
      "title": "ETF2011",
      "description": "Quantitative methods for risk analysis",
      "Faculty": "buseco"
    },
    {
      "title": "ETF2100",
      "description": "Introductory econometrics",
      "Faculty": "buseco"
    },
    {
      "title": "ETF2121",
      "description": "Data analysis in business",
      "Faculty": "buseco"
    },
    {
      "title": "ETF2480",
      "description": "Business modelling",
      "Faculty": "buseco"
    },
    {
      "title": "ETF2700",
      "description": "Mathematics for business",
      "Faculty": "buseco"
    },
    {
      "title": "ETF3200",
      "description": "Applied econometrics",
      "Faculty": "buseco"
    },
    {
      "title": "ETF3231",
      "description": "Business forecasting",
      "Faculty": "buseco"
    },
    {
      "title": "ETF3300",
      "description": "Quantitative methods for financial markets",
      "Faculty": "buseco"
    },
    {
      "title": "ETF3480",
      "description": "Optimisation for managers",
      "Faculty": "buseco"
    },
    {
      "title": "ETF3500",
      "description": "High dimensional data analysis",
      "Faculty": "buseco"
    },
    {
      "title": "ETF3600",
      "description": "Quantitative models for business research",
      "Faculty": "buseco"
    },
    {
      "title": "ETF5010",
      "description": "Special reading unit 2",
      "Faculty": "buseco"
    },
    {
      "title": "ETF5020",
      "description": "Special reading unit 3",
      "Faculty": "buseco"
    },
    {
      "title": "ETF5200",
      "description": "Applied time series econometrics",
      "Faculty": "buseco"
    },
    {
      "title": "ETF5231",
      "description": "Business forecasting",
      "Faculty": "buseco"
    },
    {
      "title": "ETF5300",
      "description": "Applied financial econometrics",
      "Faculty": "buseco"
    },
    {
      "title": "ETF5320",
      "description": "Applied econometrics",
      "Faculty": "buseco"
    },
    {
      "title": "ETF5330",
      "description": "Quantitative methods for financial markets",
      "Faculty": "buseco"
    },
    {
      "title": "ETF5400",
      "description": "Econometric theory",
      "Faculty": "buseco"
    },
    {
      "title": "ETF5410",
      "description": "Special topics in econometrics",
      "Faculty": "buseco"
    },
    {
      "title": "ETF5470",
      "description": "Econometrics graduate seminar",
      "Faculty": "buseco"
    },
    {
      "title": "ETF5500",
      "description": "High dimensional data analysis",
      "Faculty": "buseco"
    },
    {
      "title": "ETF5550",
      "description": "Research project",
      "Faculty": "buseco"
    },
    {
      "title": "ETF5555",
      "description": "Minor thesis",
      "Faculty": "buseco"
    },
    {
      "title": "ETF5600",
      "description": "Quantitative models for business research",
      "Faculty": "buseco"
    },
    {
      "title": "ETF5650",
      "description": "Business optimisation skills",
      "Faculty": "buseco"
    },
    {
      "title": "ETF5900",
      "description": "Business statistics",
      "Faculty": "buseco"
    },
    {
      "title": "ETF5910",
      "description": "Introductory applied econometrics",
      "Faculty": "buseco"
    },
    {
      "title": "ETF5912",
      "description": "Data analysis in business",
      "Faculty": "buseco"
    },
    {
      "title": "ETF5922",
      "description": "Data Visualisation and Analytics",
      "Faculty": "buseco"
    },
    {
      "title": "ETF5930",
      "description": "Financial econometrics",
      "Faculty": "buseco"
    },
    {
      "title": "ETF5952",
      "description": "Quantitative methods for risk analysis",
      "Faculty": "buseco"
    },
    {
      "title": "ETF5970",
      "description": "Mathematics for business",
      "Faculty": "buseco"
    },
    {
      "title": "ETM5900",
      "description": "Business statistics",
      "Faculty": "buseco"
    },
    {
      "title": "ETP1100",
      "description": "Business statistics",
      "Faculty": "buseco"
    },
    {
      "title": "ETS1102",
      "description": "Business statistics",
      "Faculty": "buseco"
    },
    {
      "title": "ETS1200",
      "description": "Quantitative methods for business",
      "Faculty": "buseco"
    },
    {
      "title": "ETS2000",
      "description": "Advanced quantitative methods",
      "Faculty": "buseco"
    },
    {
      "title": "ETS2010",
      "description": "Introductory probability theory",
      "Faculty": "buseco"
    },
    {
      "title": "ETS2111",
      "description": "Business data modelling",
      "Faculty": "buseco"
    },
    {
      "title": "ETS2410",
      "description": "Introductory econometrics",
      "Faculty": "buseco"
    },
    {
      "title": "ETS3410",
      "description": "Applied econometrics",
      "Faculty": "buseco"
    },
    {
      "title": "ETW1000",
      "description": "Business and economic statistics",
      "Faculty": "buseco"
    },
    {
      "title": "ETW1010",
      "description": "Data modelling and computing",
      "Faculty": "buseco"
    },
    {
      "title": "ETW1102",
      "description": "Business statistics",
      "Faculty": "buseco"
    },
    {
      "title": "ETW2111",
      "description": "Business data modelling",
      "Faculty": "buseco"
    },
    {
      "title": "ETW2410",
      "description": "Introductory econometrics",
      "Faculty": "buseco"
    },
    {
      "title": "ETW2420",
      "description": "Survey methods and managerial statistics",
      "Faculty": "buseco"
    },
    {
      "title": "ETW2480",
      "description": "Business modelling methods",
      "Faculty": "buseco"
    },
    {
      "title": "ETW3200",
      "description": "Quantitative business analysis",
      "Faculty": "buseco"
    },
    {
      "title": "ETW3410",
      "description": "Applied econometrics",
      "Faculty": "buseco"
    },
    {
      "title": "ETW3420",
      "description": "Principles of forecasting and applications",
      "Faculty": "buseco"
    },
    {
      "title": "ETW3481",
      "description": "Econometric methods for finance",
      "Faculty": "buseco"
    },
    {
      "title": "ETW3482",
      "description": "Data mining for business",
      "Faculty": "buseco"
    },
    {
      "title": "ETW3483",
      "description": "Enterprise resource planning",
      "Faculty": "buseco"
    },
    {
      "title": "ETX2011",
      "description": "Quantitative methods for risk analysis",
      "Faculty": "buseco"
    },
    {
      "title": "ETX2121",
      "description": "Data analysis in business",
      "Faculty": "buseco"
    },
    {
      "title": "ETX2250",
      "description": "Data visualisation and analytics",
      "Faculty": "buseco"
    },
    {
      "title": "ETX3231",
      "description": "Business forecasting",
      "Faculty": "buseco"
    },
    {
      "title": "ETX5440",
      "description": "Econometric theory",
      "Faculty": "buseco"
    },
    {
      "title": "ETX5443",
      "description": "Quantitative economic policy",
      "Faculty": "buseco"
    },
    {
      "title": "ETX5934",
      "description": "Introductory econometrics",
      "Faculty": "buseco"
    },
    {
      "title": "ETX6500",
      "description": "Statistical Inference",
      "Faculty": "buseco"
    },
    {
      "title": "ETX6510",
      "description": "Foundations of econometrics",
      "Faculty": "buseco"
    },
    {
      "title": "FBS5001",
      "description": "Fundamentals of forensic behavioural science",
      "Faculty": "med"
    },
    {
      "title": "FBS5002",
      "description": "The role of mental health in criminal offending",
      "Faculty": "med"
    },
    {
      "title": "FBS5004",
      "description": "Developmental aspects of forensic behavioural science",
      "Faculty": "med"
    },
    {
      "title": "FBS5005",
      "description": "The assessment and management of problem behaviours",
      "Faculty": "med"
    },
    {
      "title": "FIT1002",
      "description": "Computer programming",
      "Faculty": "it"
    },
    {
      "title": "FIT1003",
      "description": "IT in organisations",
      "Faculty": "it"
    },
    {
      "title": "FIT1006",
      "description": "Business information analysis",
      "Faculty": "it"
    },
    {
      "title": "FIT1008",
      "description": "Introduction to computer science",
      "Faculty": "it"
    },
    {
      "title": "FIT1013",
      "description": "Digital futures: IT for business",
      "Faculty": "it"
    },
    {
      "title": "FIT1031",
      "description": "Computers and networks",
      "Faculty": "it"
    },
    {
      "title": "FIT1033",
      "description": "Foundations of 3D",
      "Faculty": "it"
    },
    {
      "title": "FIT1040",
      "description": "Digital futures: adventures in programming",
      "Faculty": "it"
    },
    {
      "title": "FIT1041",
      "description": "Research project 1",
      "Faculty": "it"
    },
    {
      "title": "FIT1043",
      "description": "Introduction to data science",
      "Faculty": "it"
    },
    {
      "title": "FIT1044",
      "description": "Mobile communications 1",
      "Faculty": "it"
    },
    {
      "title": "FIT1045",
      "description": "Algorithms and programming fundamentals in python",
      "Faculty": "it"
    },
    {
      "title": "FIT1046",
      "description": "Creative computing foundations",
      "Faculty": "it"
    },
    {
      "title": "FIT1047",
      "description": "Introduction to computer systems, networks and security",
      "Faculty": "it"
    },
    {
      "title": "FIT1048",
      "description": "Fundamentals of C++",
      "Faculty": "it"
    },
    {
      "title": "FIT1049",
      "description": "IT professional practice",
      "Faculty": "it"
    },
    {
      "title": "FIT1050",
      "description": "Web fundamentals",
      "Faculty": "it"
    },
    {
      "title": "FIT1051",
      "description": "Programming fundamentals in java",
      "Faculty": "it"
    },
    {
      "title": "FIT1052",
      "description": "Digital futures: IT shaping society",
      "Faculty": "it"
    },
    {
      "title": "FIT2001",
      "description": "Systems development",
      "Faculty": "it"
    },
    {
      "title": "FIT2002",
      "description": "IT project management",
      "Faculty": "it"
    },
    {
      "title": "FIT2004",
      "description": "Algorithms and data structures",
      "Faculty": "it"
    },
    {
      "title": "FIT2005",
      "description": "Software analysis, design and architecture",
      "Faculty": "it"
    },
    {
      "title": "FIT2009",
      "description": "Data structures and algorithms",
      "Faculty": "it"
    },
    {
      "title": "FIT2014",
      "description": "Theory of computation",
      "Faculty": "it"
    },
    {
      "title": "FIT2017",
      "description": "Computer models for business decision making",
      "Faculty": "it"
    },
    {
      "title": "FIT2020",
      "description": "Network architecture",
      "Faculty": "it"
    },
    {
      "title": "FIT2032",
      "description": "Industry-based learning",
      "Faculty": "it"
    },
    {
      "title": "FIT2033",
      "description": "Computer models for business decisions",
      "Faculty": "it"
    },
    {
      "title": "FIT2034",
      "description": "Computer programming 2",
      "Faculty": "it"
    },
    {
      "title": "FIT2043",
      "description": "Technical documentation for software engineers",
      "Faculty": "it"
    },
    {
      "title": "FIT2065",
      "description": "Operating systems and the Unix environment",
      "Faculty": "it"
    },
    {
      "title": "FIT2069",
      "description": "Computer architecture",
      "Faculty": "it"
    },
    {
      "title": "FIT2072",
      "description": "Educational multimedia",
      "Faculty": "it"
    },
    {
      "title": "FIT2073",
      "description": "Game design studio 1",
      "Faculty": "it"
    },
    {
      "title": "FIT2074",
      "description": "Technology, information and organisations",
      "Faculty": "it"
    },
    {
      "title": "FIT2077",
      "description": "Advanced data management",
      "Faculty": "it"
    },
    {
      "title": "FIT2079",
      "description": "Data visualisation",
      "Faculty": "it"
    },
    {
      "title": "FIT2081",
      "description": "Mobile application development",
      "Faculty": "it"
    },
    {
      "title": "FIT2082",
      "description": "Research project 2",
      "Faculty": "it"
    },
    {
      "title": "FIT2083",
      "description": "Research methods in computer science",
      "Faculty": "it"
    },
    {
      "title": "FIT2085",
      "description": "Introduction to computer science for engineers",
      "Faculty": "it"
    },
    {
      "title": "FIT2086",
      "description": "Modelling for data analysis",
      "Faculty": "it"
    },
    {
      "title": "FIT2087",
      "description": "Advanced 3D",
      "Faculty": "it"
    },
    {
      "title": "FIT2089",
      "description": "Mobile networks",
      "Faculty": "it"
    },
    {
      "title": "FIT2090",
      "description": "Business information systems and processes",
      "Faculty": "it"
    },
    {
      "title": "FIT2091",
      "description": "Creative computing studio 1",
      "Faculty": "it"
    },
    {
      "title": "FIT2092",
      "description": "Creative computing studio 2",
      "Faculty": "it"
    },
    {
      "title": "FIT2093",
      "description": "Introduction to cyber security",
      "Faculty": "it"
    },
    {
      "title": "FIT2094",
      "description": "Databases",
      "Faculty": "it"
    },
    {
      "title": "FIT2095",
      "description": "e-Business software technologies",
      "Faculty": "it"
    },
    {
      "title": "FIT2096",
      "description": "Games programming 1",
      "Faculty": "it"
    },
    {
      "title": "FIT2097",
      "description": "Games programming 2",
      "Faculty": "it"
    },
    {
      "title": "FIT2098",
      "description": "Interactive media",
      "Faculty": "it"
    },
    {
      "title": "FIT2099",
      "description": "Object oriented design and implementation",
      "Faculty": "it"
    },
    {
      "title": "FIT2100",
      "description": "Operating systems",
      "Faculty": "it"
    },
    {
      "title": "FIT2101",
      "description": "Software engineering process and management",
      "Faculty": "it"
    },
    {
      "title": "FIT2102",
      "description": "Programming paradigms",
      "Faculty": "it"
    },
    {
      "title": "FIT2104",
      "description": "Web database interface",
      "Faculty": "it"
    },
    {
      "title": "FIT2105",
      "description": "Creative computing: understanding art, science and technology",
      "Faculty": "it"
    },
    {
      "title": "FIT2107",
      "description": "Software quality and testing",
      "Faculty": "it"
    },
    {
      "title": "FIT2108",
      "description": "Industry based learning seminar",
      "Faculty": "it"
    },
    {
      "title": "FIT3002",
      "description": "Applications of data mining",
      "Faculty": "it"
    },
    {
      "title": "FIT3003",
      "description": "Business intelligence and data warehousing",
      "Faculty": "it"
    },
    {
      "title": "FIT3008",
      "description": "Advanced digital video",
      "Faculty": "it"
    },
    {
      "title": "FIT3013",
      "description": "Formal specification for software engineering",
      "Faculty": "it"
    },
    {
      "title": "FIT3019",
      "description": "Information systems management",
      "Faculty": "it"
    },
    {
      "title": "FIT3020",
      "description": "Information visualisation",
      "Faculty": "it"
    },
    {
      "title": "FIT3021",
      "description": "Infrastructure for e-commerce",
      "Faculty": "it"
    },
    {
      "title": "FIT3027",
      "description": "Android and iOS development",
      "Faculty": "it"
    },
    {
      "title": "FIT3031",
      "description": "Information and network security",
      "Faculty": "it"
    },
    {
      "title": "FIT3036",
      "description": "Computer science project",
      "Faculty": "it"
    },
    {
      "title": "FIT3037",
      "description": "Software engineering",
      "Faculty": "it"
    },
    {
      "title": "FIT3039",
      "description": "Studio project 1",
      "Faculty": "it"
    },
    {
      "title": "FIT3040",
      "description": "Studio project 2",
      "Faculty": "it"
    },
    {
      "title": "FIT3042",
      "description": "System tools and programming languages",
      "Faculty": "it"
    },
    {
      "title": "FIT3045",
      "description": "Industry-based learning",
      "Faculty": "it"
    },
    {
      "title": "FIT3046",
      "description": "Operating environments",
      "Faculty": "it"
    },
    {
      "title": "FIT3047",
      "description": "Industry experience studio project 1",
      "Faculty": "it"
    },
    {
      "title": "FIT3048",
      "description": "Industry experience studio project 2",
      "Faculty": "it"
    },
    {
      "title": "FIT3063",
      "description": "Human-computer interaction",
      "Faculty": "it"
    },
    {
      "title": "FIT3077",
      "description": "Software engineering: architecture and design",
      "Faculty": "it"
    },
    {
      "title": "FIT3080",
      "description": "Intelligent systems",
      "Faculty": "it"
    },
    {
      "title": "FIT3081",
      "description": "Image processing",
      "Faculty": "it"
    },
    {
      "title": "FIT3083",
      "description": "e-Business software technologies",
      "Faculty": "it"
    },
    {
      "title": "FIT3088",
      "description": "Computer graphics",
      "Faculty": "it"
    },
    {
      "title": "FIT3094",
      "description": "Artificial life, artificial intelligence and virtual environments",
      "Faculty": "it"
    },
    {
      "title": "FIT3098",
      "description": "Social informatics",
      "Faculty": "it"
    },
    {
      "title": "FIT3130",
      "description": "Computer network design and deployment",
      "Faculty": "it"
    },
    {
      "title": "FIT3134",
      "description": "IT-based entrepreneurship",
      "Faculty": "it"
    },
    {
      "title": "FIT3136",
      "description": "IT governance and strategy for business",
      "Faculty": "it"
    },
    {
      "title": "FIT3138",
      "description": "Real time enterprise systems",
      "Faculty": "it"
    },
    {
      "title": "FIT3139",
      "description": "Computational science",
      "Faculty": "it"
    },
    {
      "title": "FIT3140",
      "description": "Advanced programming",
      "Faculty": "it"
    },
    {
      "title": "FIT3142",
      "description": "Distributed computing",
      "Faculty": "it"
    },
    {
      "title": "FIT3143",
      "description": "Parallel computing",
      "Faculty": "it"
    },
    {
      "title": "FIT3144",
      "description": "Advanced computer science project",
      "Faculty": "it"
    },
    {
      "title": "FIT3145",
      "description": "Game design studio 2",
      "Faculty": "it"
    },
    {
      "title": "FIT3146",
      "description": "Emergent technologies and interfaces",
      "Faculty": "it"
    },
    {
      "title": "FIT3152",
      "description": "Data analytics",
      "Faculty": "it"
    },
    {
      "title": "FIT3153",
      "description": "Research-based learning",
      "Faculty": "it"
    },
    {
      "title": "FIT3154",
      "description": "Advanced data analysis",
      "Faculty": "it"
    },
    {
      "title": "FIT3155",
      "description": "Advanced data structures and algorithms",
      "Faculty": "it"
    },
    {
      "title": "FIT3156",
      "description": "Advanced visual effects",
      "Faculty": "it"
    },
    {
      "title": "FIT3157",
      "description": "Advanced web design",
      "Faculty": "it"
    },
    {
      "title": "FIT3158",
      "description": "Business decision modelling",
      "Faculty": "it"
    },
    {
      "title": "FIT3159",
      "description": "Computer architecture",
      "Faculty": "it"
    },
    {
      "title": "FIT3161",
      "description": "Computer science project 1",
      "Faculty": "it"
    },
    {
      "title": "FIT3162",
      "description": "Computer science project 2",
      "Faculty": "it"
    },
    {
      "title": "FIT3163",
      "description": "Data science project 1",
      "Faculty": "it"
    },
    {
      "title": "FIT3164",
      "description": "Data science project 2",
      "Faculty": "it"
    },
    {
      "title": "FIT3165",
      "description": "Computer networks",
      "Faculty": "it"
    },
    {
      "title": "FIT3168",
      "description": "IT forensics",
      "Faculty": "it"
    },
    {
      "title": "FIT3169",
      "description": "Immersive environments",
      "Faculty": "it"
    },
    {
      "title": "FIT3170",
      "description": "Software engineering practice",
      "Faculty": "it"
    },
    {
      "title": "FIT3171",
      "description": "Databases",
      "Faculty": "it"
    },
    {
      "title": "FIT3172",
      "description": "Sonics",
      "Faculty": "it"
    },
    {
      "title": "FIT3173",
      "description": "Software security",
      "Faculty": "it"
    },
    {
      "title": "FIT3174",
      "description": "IT strategy and governance",
      "Faculty": "it"
    },
    {
      "title": "FIT3175",
      "description": "Usability",
      "Faculty": "it"
    },
    {
      "title": "FIT3176",
      "description": "Advanced database design",
      "Faculty": "it"
    },
    {
      "title": "FIT3178",
      "description": "Advanced mobile applications",
      "Faculty": "it"
    },
    {
      "title": "FIT3179",
      "description": "Data visualisation",
      "Faculty": "it"
    },
    {
      "title": "FIT4000",
      "description": "Honours thesis extension",
      "Faculty": "it"
    },
    {
      "title": "FIT4002",
      "description": "Software engineering industry experience studio project",
      "Faculty": "it"
    },
    {
      "title": "FIT4003",
      "description": "Software engineering research project",
      "Faculty": "it"
    },
    {
      "title": "FIT4004",
      "description": "System validation and verification, quality and standards",
      "Faculty": "it"
    },
    {
      "title": "FIT4005",
      "description": "Research methods in information technology",
      "Faculty": "it"
    },
    {
      "title": "FIT4007",
      "description": "Advanced topics in information systems",
      "Faculty": "it"
    },
    {
      "title": "FIT4008",
      "description": "Reading unit",
      "Faculty": "it"
    },
    {
      "title": "FIT4009",
      "description": "Advanced topics in intelligent systems",
      "Faculty": "it"
    },
    {
      "title": "FIT4010",
      "description": "Advanced topics in algorithms and discrete structures",
      "Faculty": "it"
    },
    {
      "title": "FIT4012",
      "description": "Advanced topics in computational science",
      "Faculty": "it"
    },
    {
      "title": "FIT4039",
      "description": "Android and iOS development",
      "Faculty": "it"
    },
    {
      "title": "FIT4042",
      "description": "Industry-based learning",
      "Faculty": "it"
    },
    {
      "title": "FIT4165",
      "description": "Computer networks",
      "Faculty": "it"
    },
    {
      "title": "FIT4441",
      "description": "Honours thesis part 1",
      "Faculty": "it"
    },
    {
      "title": "FIT4442",
      "description": "Honours thesis part 2",
      "Faculty": "it"
    },
    {
      "title": "FIT4443",
      "description": "Honours thesis part 3",
      "Faculty": "it"
    },
    {
      "title": "FIT4444",
      "description": "Honours thesis final",
      "Faculty": "it"
    },
    {
      "title": "FIT4448",
      "description": "Honours thesis final",
      "Faculty": "it"
    },
    {
      "title": "FIT5000",
      "description": "Minor thesis extension",
      "Faculty": "it"
    },
    {
      "title": "FIT5003",
      "description": "Software security",
      "Faculty": "it"
    },
    {
      "title": "FIT5010",
      "description": "Network protocols standards",
      "Faculty": "it"
    },
    {
      "title": "FIT5011",
      "description": "Network design and performance",
      "Faculty": "it"
    },
    {
      "title": "FIT5032",
      "description": "Internet applications development",
      "Faculty": "it"
    },
    {
      "title": "FIT5034",
      "description": "Quality of service and network management",
      "Faculty": "it"
    },
    {
      "title": "FIT5037",
      "description": "Network security",
      "Faculty": "it"
    },
    {
      "title": "FIT5042",
      "description": "Enterprise application development for the web",
      "Faculty": "it"
    },
    {
      "title": "FIT5046",
      "description": "Mobile and distributed computing systems",
      "Faculty": "it"
    },
    {
      "title": "FIT5047",
      "description": "Intelligent systems",
      "Faculty": "it"
    },
    {
      "title": "FIT5057",
      "description": "Project management",
      "Faculty": "it"
    },
    {
      "title": "FIT5083",
      "description": "Network infrastructure",
      "Faculty": "it"
    },
    {
      "title": "FIT5086",
      "description": "Organisational informatics",
      "Faculty": "it"
    },
    {
      "title": "FIT5088",
      "description": "Information and knowledge management systems",
      "Faculty": "it"
    },
    {
      "title": "FIT5090",
      "description": "Social informatics",
      "Faculty": "it"
    },
    {
      "title": "FIT5094",
      "description": "IT for management decision making",
      "Faculty": "it"
    },
    {
      "title": "FIT5097",
      "description": "Business intelligence modelling",
      "Faculty": "it"
    },
    {
      "title": "FIT5101",
      "description": "Enterprise systems",
      "Faculty": "it"
    },
    {
      "title": "FIT5102",
      "description": "IT strategy and governance",
      "Faculty": "it"
    },
    {
      "title": "FIT5104",
      "description": "Information and knowledge management professional practice",
      "Faculty": "it"
    },
    {
      "title": "FIT5105",
      "description": "Information access and use",
      "Faculty": "it"
    },
    {
      "title": "FIT5106",
      "description": "Information organisation",
      "Faculty": "it"
    },
    {
      "title": "FIT5107",
      "description": "Managing business records",
      "Faculty": "it"
    },
    {
      "title": "FIT5108",
      "description": "Reading unit",
      "Faculty": "it"
    },
    {
      "title": "FIT5109",
      "description": "Research topic",
      "Faculty": "it"
    },
    {
      "title": "FIT5111",
      "description": "Information systems development practices",
      "Faculty": "it"
    },
    {
      "title": "FIT5120",
      "description": "Industry experience studio project",
      "Faculty": "it"
    },
    {
      "title": "FIT5122",
      "description": "Professional practice",
      "Faculty": "it"
    },
    {
      "title": "FIT5124",
      "description": "Advanced topics in security",
      "Faculty": "it"
    },
    {
      "title": "FIT5125",
      "description": "IT research methods",
      "Faculty": "it"
    },
    {
      "title": "FIT5126",
      "description": "Masters thesis part 1",
      "Faculty": "it"
    },
    {
      "title": "FIT5127",
      "description": "Masters thesis part 2",
      "Faculty": "it"
    },
    {
      "title": "FIT5128",
      "description": "Masters thesis final",
      "Faculty": "it"
    },
    {
      "title": "FIT5129",
      "description": "Enterprise IT security - planning, operations and management",
      "Faculty": "it"
    },
    {
      "title": "FIT5133",
      "description": "Enterprise architecture and management",
      "Faculty": "it"
    },
    {
      "title": "FIT5136",
      "description": "Software engineering",
      "Faculty": "it"
    },
    {
      "title": "FIT5137",
      "description": "Database analysis and processing",
      "Faculty": "it"
    },
    {
      "title": "FIT5138",
      "description": "Advanced software engineering",
      "Faculty": "it"
    },
    {
      "title": "FIT5139",
      "description": "Advanced distributed and parallel systems",
      "Faculty": "it"
    },
    {
      "title": "FIT5140",
      "description": "Advanced mobile systems",
      "Faculty": "it"
    },
    {
      "title": "FIT5141",
      "description": "Advanced topics in information technology",
      "Faculty": "it"
    },
    {
      "title": "FIT5142",
      "description": "Advanced data mining",
      "Faculty": "it"
    },
    {
      "title": "FIT5143",
      "description": "IT research methods",
      "Faculty": "it"
    },
    {
      "title": "FIT5144",
      "description": "Research strategies and skills",
      "Faculty": "it"
    },
    {
      "title": "FIT5145",
      "description": "Introduction to data science",
      "Faculty": "it"
    },
    {
      "title": "FIT5146",
      "description": "Data curation and management",
      "Faculty": "it"
    },
    {
      "title": "FIT5147",
      "description": "Data exploration and visualisation",
      "Faculty": "it"
    },
    {
      "title": "FIT5148",
      "description": "Distributed databases and big data",
      "Faculty": "it"
    },
    {
      "title": "FIT5149",
      "description": "Applied data analysis",
      "Faculty": "it"
    },
    {
      "title": "FIT5152",
      "description": "User interface design and usability",
      "Faculty": "it"
    },
    {
      "title": "FIT5159",
      "description": "IT for financial decisions",
      "Faculty": "it"
    },
    {
      "title": "FIT5160",
      "description": "Business process modelling, design and simulation",
      "Faculty": "it"
    },
    {
      "title": "FIT5163",
      "description": "Information and computer security",
      "Faculty": "it"
    },
    {
      "title": "FIT5166",
      "description": "Information retrieval systems",
      "Faculty": "it"
    },
    {
      "title": "FIT5168",
      "description": "Semi-structured data management",
      "Faculty": "it"
    },
    {
      "title": "FIT5170",
      "description": "Programming for distributed, parallel and mobile systems",
      "Faculty": "it"
    },
    {
      "title": "FIT5171",
      "description": "System validation and verification, quality and standards",
      "Faculty": "it"
    },
    {
      "title": "FIT5178",
      "description": "Applied project management",
      "Faculty": "it"
    },
    {
      "title": "FIT5180",
      "description": "Business and legal issues in project management",
      "Faculty": "it"
    },
    {
      "title": "FIT5183",
      "description": "Mobile and distributed computing systems",
      "Faculty": "it"
    },
    {
      "title": "FIT5186",
      "description": "Intelligent systems",
      "Faculty": "it"
    },
    {
      "title": "FIT5187",
      "description": "Wireless networks",
      "Faculty": "it"
    },
    {
      "title": "FIT5190",
      "description": "Introduction to IT research methods",
      "Faculty": "it"
    },
    {
      "title": "FIT5191",
      "description": "Network protocols and network security",
      "Faculty": "it"
    },
    {
      "title": "FIT5192",
      "description": "Enterprise and internet applications development",
      "Faculty": "it"
    },
    {
      "title": "FIT5194",
      "description": "Computer based global project management",
      "Faculty": "it"
    },
    {
      "title": "FIT5195",
      "description": "Business intelligence and data warehousing",
      "Faculty": "it"
    },
    {
      "title": "FIT5196",
      "description": "Data wrangling",
      "Faculty": "it"
    },
    {
      "title": "FIT5197",
      "description": "Modelling for data analysis",
      "Faculty": "it"
    },
    {
      "title": "FIT5201",
      "description": "Data analysis algorithms",
      "Faculty": "it"
    },
    {
      "title": "FIT5202",
      "description": "Data processing for big data",
      "Faculty": "it"
    },
    {
      "title": "FIT5203",
      "description": "Community informatics",
      "Faculty": "it"
    },
    {
      "title": "FIT5204",
      "description": "Heritage informatics",
      "Faculty": "it"
    },
    {
      "title": "FIT5205",
      "description": "Data in society",
      "Faculty": "it"
    },
    {
      "title": "FIT5206",
      "description": "Digital continuity",
      "Faculty": "it"
    },
    {
      "title": "FIT5207",
      "description": "Data for sustainability",
      "Faculty": "it"
    },
    {
      "title": "FIT5211",
      "description": "Algorithms and data structures",
      "Faculty": "it"
    },
    {
      "title": "FIT6021",
      "description": "Advanced research methods",
      "Faculty": "it"
    },
    {
      "title": "FIT9027",
      "description": "Website authoring",
      "Faculty": "it"
    },
    {
      "title": "FIT9059",
      "description": "Algorithms and data structures",
      "Faculty": "it"
    },
    {
      "title": "FIT9123",
      "description": "Introduction to business information systems",
      "Faculty": "it"
    },
    {
      "title": "FIT9130",
      "description": "Systems analysis and design",
      "Faculty": "it"
    },
    {
      "title": "FIT9131",
      "description": "Programming foundations in Java",
      "Faculty": "it"
    },
    {
      "title": "FIT9132",
      "description": "Introduction to databases",
      "Faculty": "it"
    },
    {
      "title": "FIT9133",
      "description": "Programming foundations for python",
      "Faculty": "it"
    },
    {
      "title": "FIT9134",
      "description": "Computer architecture and operating systems",
      "Faculty": "it"
    },
    {
      "title": "FIT9135",
      "description": "Data communications",
      "Faculty": "it"
    },
    {
      "title": "FNA1111",
      "description": "Introduction to Contemporary Practices 1",
      "Faculty": "ada"
    },
    {
      "title": "FNA1112",
      "description": "Introduction to Contemporary Practices 2",
      "Faculty": "ada"
    },
    {
      "title": "FNA2003",
      "description": "3D digital modelling for artists",
      "Faculty": "ada"
    },
    {
      "title": "FNA2111",
      "description": "Contemporary Practices 3",
      "Faculty": "ada"
    },
    {
      "title": "FNA2112",
      "description": "Contemporary Practices 4",
      "Faculty": "ada"
    },
    {
      "title": "FNA2903",
      "description": "Art and Design in film",
      "Faculty": "ada"
    },
    {
      "title": "FNA3111",
      "description": "Contemporary Practices 5",
      "Faculty": "ada"
    },
    {
      "title": "FNA3112",
      "description": "Contemporary Practices 6",
      "Faculty": "ada"
    },
    {
      "title": "FNA3903",
      "description": "Film practice",
      "Faculty": "ada"
    },
    {
      "title": "FNA4001",
      "description": "Project studies (fine art honours)",
      "Faculty": "ada"
    },
    {
      "title": "FNA4002",
      "description": "Major project (fine art honours)",
      "Faculty": "ada"
    },
    {
      "title": "FNA4011",
      "description": "Studio methodology",
      "Faculty": "ada"
    },
    {
      "title": "FOR4001",
      "description": "Medical evidence",
      "Faculty": "med"
    },
    {
      "title": "FOR4002",
      "description": "Injury interpretation",
      "Faculty": "med"
    },
    {
      "title": "FOR4003",
      "description": "Ethics, medicine and the law",
      "Faculty": "med"
    },
    {
      "title": "FOR4004",
      "description": "Elements of the forensic sciences",
      "Faculty": "med"
    },
    {
      "title": "FOR5005",
      "description": "Adult sexual assault",
      "Faculty": "med"
    },
    {
      "title": "FOR5006",
      "description": "Traffic medicine",
      "Faculty": "med"
    },
    {
      "title": "FOR5007",
      "description": "Elements of forensic toxicology",
      "Faculty": "med"
    },
    {
      "title": "FOR5008",
      "description": "Custodial medicine",
      "Faculty": "med"
    },
    {
      "title": "FOR5009",
      "description": "Advanced issues in sexual violence",
      "Faculty": "med"
    },
    {
      "title": "FOR5010",
      "description": "Project in forensic medicine",
      "Faculty": "med"
    },
    {
      "title": "FOR5011",
      "description": "Advanced issues in non-accidental injury of children",
      "Faculty": "med"
    },
    {
      "title": "FOR5012",
      "description": "Child and adolescent sexual abuse",
      "Faculty": "med"
    },
    {
      "title": "FOR5013",
      "description": "Non accidental injury in childhood",
      "Faculty": "med"
    },
    {
      "title": "FOR5014",
      "description": "Elements of forensic odontology",
      "Faculty": "med"
    },
    {
      "title": "FOR5015",
      "description": "Post mortem dental identification: Principles and methods",
      "Faculty": "med"
    },
    {
      "title": "FOR5016",
      "description": "Clinical forensic odontology",
      "Faculty": "med"
    },
    {
      "title": "FOR5017",
      "description": "Disaster victim identification (DVI): Principles and methods",
      "Faculty": "med"
    },
    {
      "title": "FOR5018",
      "description": "Elements of forensic anthropology",
      "Faculty": "med"
    },
    {
      "title": "FOR5020",
      "description": "Forensic cross sectional imaging",
      "Faculty": "med"
    },
    {
      "title": "FOR5021",
      "description": "Mortuary technical science",
      "Faculty": "med"
    },
    {
      "title": "FPA5004",
      "description": "Autopsy practice",
      "Faculty": "med"
    },
    {
      "title": "FPA5007",
      "description": "Death investigation",
      "Faculty": "med"
    },
    {
      "title": "FST1800",
      "description": "Fundamentals of food science",
      "Faculty": "sci"
    },
    {
      "title": "FST2810",
      "description": "Food bioprocess technology",
      "Faculty": "sci"
    },
    {
      "title": "FST3800",
      "description": "Food science internship",
      "Faculty": "sci"
    },
    {
      "title": "FST3810",
      "description": "Human nutrition",
      "Faculty": "sci"
    },
    {
      "title": "FST3820",
      "description": "Food preservation",
      "Faculty": "sci"
    },
    {
      "title": "FST3830",
      "description": "Functional foods",
      "Faculty": "sci"
    },
    {
      "title": "FST3840",
      "description": "Food processing",
      "Faculty": "sci"
    },
    {
      "title": "FST3850",
      "description": "Food product development",
      "Faculty": "sci"
    },
    {
      "title": "FST4100",
      "description": "Food science and technology research project",
      "Faculty": "sci"
    },
    {
      "title": "FST4280",
      "description": "Honours coursework in food science and technology",
      "Faculty": "sci"
    },
    {
      "title": "GEN2041",
      "description": "Foundations of genetics",
      "Faculty": "sci"
    },
    {
      "title": "GEN2052",
      "description": "Genomics and population genetics",
      "Faculty": "sci"
    },
    {
      "title": "GEN3030",
      "description": "Molecular, cellular and developmental genetics",
      "Faculty": "sci"
    },
    {
      "title": "GEN3040",
      "description": "Genomics and its applications",
      "Faculty": "sci"
    },
    {
      "title": "GEN3051",
      "description": "Medical and forensic genetics",
      "Faculty": "sci"
    },
    {
      "title": "GEN3062",
      "description": "Evolutionary and ecological genetics",
      "Faculty": "sci"
    },
    {
      "title": "GEN3990",
      "description": "Genetics in action research project",
      "Faculty": "sci"
    },
    {
      "title": "GHS5841",
      "description": "Research and evidence for practice",
      "Faculty": "med"
    },
    {
      "title": "GHS5850",
      "description": "Nursing leadership and management",
      "Faculty": "med"
    },
    {
      "title": "GLS1211",
      "description": "Contemporary glass practices",
      "Faculty": "ada"
    },
    {
      "title": "GLS1212",
      "description": "Glass practice and theory 2A",
      "Faculty": "ada"
    },
    {
      "title": "GLS1231",
      "description": "Contemporary glass blowing practices",
      "Faculty": "ada"
    },
    {
      "title": "GLS1242",
      "description": "Glass practice and theory 2B",
      "Faculty": "ada"
    },
    {
      "title": "GLS2213",
      "description": "Contemporary glass sculpture",
      "Faculty": "ada"
    },
    {
      "title": "GLS2214",
      "description": "Glass practice and theory 4A",
      "Faculty": "ada"
    },
    {
      "title": "GLS2223",
      "description": "Contemporary blown and sculpted glass",
      "Faculty": "ada"
    },
    {
      "title": "GLS2224",
      "description": "Glass practice and theory 4B",
      "Faculty": "ada"
    },
    {
      "title": "GLS3215",
      "description": "Glass practice and theory 5",
      "Faculty": "ada"
    },
    {
      "title": "GLS3216",
      "description": "Glass practice and theory 6",
      "Faculty": "ada"
    },
    {
      "title": "GMA1010",
      "description": "Foundations of medical practice",
      "Faculty": "med"
    },
    {
      "title": "GMA2000",
      "description": "Year A final grade",
      "Faculty": "med"
    },
    {
      "title": "GPS4120",
      "description": "Geophysics research project part time II",
      "Faculty": "sci"
    },
    {
      "title": "GPS4220",
      "description": "Geophysics honours coursework part time II",
      "Faculty": "sci"
    },
    {
      "title": "GRS4101",
      "description": "Introduction to reproductive endocrinology",
      "Faculty": "med"
    },
    {
      "title": "GRS4102",
      "description": "Gonadal development and function",
      "Faculty": "med"
    },
    {
      "title": "GRS4103",
      "description": "Pregnancy and parturition",
      "Faculty": "med"
    },
    {
      "title": "GRS4104",
      "description": "Reproductive health",
      "Faculty": "med"
    },
    {
      "title": "GRS4105",
      "description": "Fertility regulation",
      "Faculty": "med"
    },
    {
      "title": "GRS4201",
      "description": "Comparative reproduction and conservation",
      "Faculty": "med"
    },
    {
      "title": "GRS4202",
      "description": "Assisted reproductive and genetic technologies",
      "Faculty": "med"
    },
    {
      "title": "GVA1203",
      "description": "Photography 1",
      "Faculty": "ada"
    },
    {
      "title": "GVA1611",
      "description": "Sculpture practice 1",
      "Faculty": "ada"
    },
    {
      "title": "GVA1612",
      "description": "Sculpture practice 2",
      "Faculty": "ada"
    },
    {
      "title": "GVA2207",
      "description": "Photography and Photomedia processes",
      "Faculty": "ada"
    },
    {
      "title": "GVA2208",
      "description": "Photography and Photomedia fabrication",
      "Faculty": "ada"
    },
    {
      "title": "GVA2223",
      "description": "Minor printmaking 3",
      "Faculty": "ada"
    },
    {
      "title": "GVA2423",
      "description": "Minor sculpture/woodcraft 3",
      "Faculty": "ada"
    },
    {
      "title": "GVA2723",
      "description": "Minor photography 3",
      "Faculty": "ada"
    },
    {
      "title": "GVA3202",
      "description": "Professional practice",
      "Faculty": "ada"
    },
    {
      "title": "GVA3207",
      "description": "Photography and Photomedia project 1A",
      "Faculty": "ada"
    },
    {
      "title": "GVA3224",
      "description": "Minor printmaking 4",
      "Faculty": "ada"
    },
    {
      "title": "GVA3424",
      "description": "Minor sculpture/woodcraft 4",
      "Faculty": "ada"
    },
    {
      "title": "GVA3724",
      "description": "Minor photography 4",
      "Faculty": "ada"
    },
    {
      "title": "HED5031",
      "description": "Higher education project: Design and literature review",
      "Faculty": "edu"
    },
    {
      "title": "HED5041",
      "description": "Research project development and implementation",
      "Faculty": "edu"
    },
    {
      "title": "HED5043",
      "description": "Contemporary issues in business education",
      "Faculty": "buseco"
    },
    {
      "title": "HED5044",
      "description": "Reflection and practice in business education",
      "Faculty": "buseco"
    },
    {
      "title": "HED5052",
      "description": "Contemporary issues in higher education in South East Asia",
      "Faculty": "edu"
    },
    {
      "title": "HPE5001",
      "description": "Teaching and learning in health professional education",
      "Faculty": "med"
    },
    {
      "title": "HPE5002",
      "description": "Clinical teaching",
      "Faculty": "med"
    },
    {
      "title": "HPE5003",
      "description": "Assessment in health professional education",
      "Faculty": "med"
    },
    {
      "title": "HPE5004",
      "description": "Course design and educational change management",
      "Faculty": "med"
    },
    {
      "title": "HPE5011",
      "description": "Educational research methods for the health professions",
      "Faculty": "med"
    },
    {
      "title": "HPE5012",
      "description": "Foundations of simulation in health professional education",
      "Faculty": "med"
    },
    {
      "title": "HPE5013",
      "description": "Independent project in health professional education",
      "Faculty": "med"
    },
    {
      "title": "HPE5014",
      "description": "Applied simulation",
      "Faculty": "med"
    },
    {
      "title": "HPE5015",
      "description": "Contemporary research and innovations in health professional education",
      "Faculty": "med"
    },
    {
      "title": "HSC1100",
      "description": "Introduction to research and evidence",
      "Faculty": "med"
    },
    {
      "title": "HSC1200",
      "description": "Introduction to public health",
      "Faculty": "med"
    },
    {
      "title": "HSC1300",
      "description": "Human health and disease",
      "Faculty": "med"
    },
    {
      "title": "HSC1400",
      "description": "The Australian healthcare system",
      "Faculty": "med"
    },
    {
      "title": "HSC2062",
      "description": "Communicating health",
      "Faculty": "med"
    },
    {
      "title": "HSC2092",
      "description": "Community development and partnership",
      "Faculty": "med"
    },
    {
      "title": "HSC2100",
      "description": "Emerging challenges in health",
      "Faculty": "med"
    },
    {
      "title": "HSC2102",
      "description": "Introduction to clinical research",
      "Faculty": "med"
    },
    {
      "title": "HSC2141",
      "description": "Analysing patterns of health and disease",
      "Faculty": "med"
    },
    {
      "title": "HSC2200",
      "description": "Health and the human lifespan",
      "Faculty": "med"
    },
    {
      "title": "HSC2300",
      "description": "Health promotion and disease prevention",
      "Faculty": "med"
    },
    {
      "title": "HSC3001",
      "description": "Health, law and ethics",
      "Faculty": "med"
    },
    {
      "title": "HSC3002",
      "description": "Health for all in a global world",
      "Faculty": "med"
    },
    {
      "title": "HSC3011",
      "description": "Contemporary health challenges",
      "Faculty": "med"
    },
    {
      "title": "HSC3041",
      "description": "Disease prevention and control",
      "Faculty": "med"
    },
    {
      "title": "HSC3052",
      "description": "Health promotion in community and organisational settings",
      "Faculty": "med"
    },
    {
      "title": "HSC3061",
      "description": "Health program evaluation",
      "Faculty": "med"
    },
    {
      "title": "HSC3072",
      "description": "Health policy and politics",
      "Faculty": "med"
    },
    {
      "title": "HSC3082",
      "description": "Health promotion practicum",
      "Faculty": "med"
    },
    {
      "title": "HSC3102",
      "description": "Environmental determinants of health and disease",
      "Faculty": "med"
    },
    {
      "title": "HSC3131",
      "description": "Quantitative research design and methodology",
      "Faculty": "med"
    },
    {
      "title": "HSC3132",
      "description": "Action in public health research",
      "Faculty": "med"
    },
    {
      "title": "HSC4001",
      "description": "Health science research project 1",
      "Faculty": "med"
    },
    {
      "title": "HSC4002",
      "description": "Health science research project 2",
      "Faculty": "med"
    },
    {
      "title": "HSC4011",
      "description": "Advanced studies in contemporary and global health research",
      "Faculty": "med"
    },
    {
      "title": "HUP3011",
      "description": "Human pathology 1: Understanding disease processes",
      "Faculty": "sci"
    },
    {
      "title": "HUP3022",
      "description": "Human pathology 2: Pathology of human diseases",
      "Faculty": "sci"
    },
    {
      "title": "HUP3810",
      "description": "Principles of pathology 1",
      "Faculty": "sci"
    },
    {
      "title": "HUP3820",
      "description": "Principles of pathology 2",
      "Faculty": "sci"
    },
    {
      "title": "HUP3990",
      "description": "Human pathology in action research project",
      "Faculty": "sci"
    },
    {
      "title": "IAR1112",
      "description": "Interior architecture studio 2",
      "Faculty": "ada"
    },
    {
      "title": "IAR1113",
      "description": "Interior architecture studio 1",
      "Faculty": "ada"
    },
    {
      "title": "IAR1114",
      "description": "Interior architecture studio 2",
      "Faculty": "ada"
    },
    {
      "title": "IAR1211",
      "description": "Building construction and materials A",
      "Faculty": "ada"
    },
    {
      "title": "IAR1401",
      "description": "Communication methods for interior architecture",
      "Faculty": "ada"
    },
    {
      "title": "IAR1411",
      "description": "Communication and media",
      "Faculty": "ada"
    },
    {
      "title": "IAR1602",
      "description": "Constructions and environments 1",
      "Faculty": "ada"
    },
    {
      "title": "IAR2113",
      "description": "Interior architecture studio 3",
      "Faculty": "ada"
    },
    {
      "title": "IAR2114",
      "description": "Interior architecture studio 4",
      "Faculty": "ada"
    },
    {
      "title": "IAR2115",
      "description": "Interior architecture studio 3",
      "Faculty": "ada"
    },
    {
      "title": "IAR2116",
      "description": "Interior architecture studio 4",
      "Faculty": "ada"
    },
    {
      "title": "IAR2204",
      "description": "Building materials and construction B",
      "Faculty": "ada"
    },
    {
      "title": "IAR2205",
      "description": "The production of space and place",
      "Faculty": "ada"
    },
    {
      "title": "IAR2303",
      "description": "Structures and services A",
      "Faculty": "ada"
    },
    {
      "title": "IAR2401",
      "description": "Interior architecture modelling",
      "Faculty": "ada"
    },
    {
      "title": "IAR2411",
      "description": "Contemporary interior architecture",
      "Faculty": "ada"
    },
    {
      "title": "IAR2501",
      "description": "Retail design 1",
      "Faculty": "ada"
    },
    {
      "title": "IAR2601",
      "description": "Constructions and environments 2",
      "Faculty": "ada"
    },
    {
      "title": "IAR2602",
      "description": "Constructions and environments 3",
      "Faculty": "ada"
    },
    {
      "title": "IAR3115",
      "description": "Interior architecture studio 5",
      "Faculty": "ada"
    },
    {
      "title": "IAR3116",
      "description": "Interior architecture studio 6",
      "Faculty": "ada"
    },
    {
      "title": "IAR3117",
      "description": "Interior architecture studio 5",
      "Faculty": "ada"
    },
    {
      "title": "IAR3118",
      "description": "Interior architecture studio 6",
      "Faculty": "ada"
    },
    {
      "title": "IAR3205",
      "description": "Building construction and materials C",
      "Faculty": "ada"
    },
    {
      "title": "IAR3303",
      "description": "Folio and reflection",
      "Faculty": "ada"
    },
    {
      "title": "IAR3308",
      "description": "Structure and services B",
      "Faculty": "ada"
    },
    {
      "title": "IAR3401",
      "description": "Interior architecture history and theory",
      "Faculty": "ada"
    },
    {
      "title": "IAR3501",
      "description": "Studies in interior architecture",
      "Faculty": "ada"
    },
    {
      "title": "IAR4117",
      "description": "Interior architecture studio 7",
      "Faculty": "ada"
    },
    {
      "title": "IAR4118",
      "description": "Interior architecture studio 8",
      "Faculty": "ada"
    },
    {
      "title": "IAR4119",
      "description": "Interior architecture studio 7",
      "Faculty": "ada"
    },
    {
      "title": "IAR4120",
      "description": "Interior architecture design research project",
      "Faculty": "ada"
    },
    {
      "title": "IAR4406",
      "description": "Industrial experience",
      "Faculty": "ada"
    },
    {
      "title": "IAR4500",
      "description": "Research: questions and processes",
      "Faculty": "ada"
    },
    {
      "title": "IAR4501",
      "description": "Interior architecture design research documentation",
      "Faculty": "ada"
    },
    {
      "title": "IBL2030",
      "description": "Industry based learning: Science",
      "Faculty": "sci"
    },
    {
      "title": "IDE1112",
      "description": "Industrial design studio 2",
      "Faculty": "ada"
    },
    {
      "title": "IDE1502",
      "description": "Modelmaking and workshop practice",
      "Faculty": "ada"
    },
    {
      "title": "IDE1602",
      "description": "Product drawing",
      "Faculty": "ada"
    },
    {
      "title": "IDE1802",
      "description": "Materials and manufacturing 1",
      "Faculty": "ada"
    },
    {
      "title": "IDE2113",
      "description": "Industrial design studio 3",
      "Faculty": "ada"
    },
    {
      "title": "IDE2114",
      "description": "Industrial design studio 4",
      "Faculty": "ada"
    },
    {
      "title": "IDE2120",
      "description": "Designing for sustainability",
      "Faculty": "ada"
    },
    {
      "title": "IDE2211",
      "description": "Engineering drawing",
      "Faculty": "ada"
    },
    {
      "title": "IDE2303",
      "description": "Ergonomics",
      "Faculty": "ada"
    },
    {
      "title": "IDE2701",
      "description": "Product interface design",
      "Faculty": "ada"
    },
    {
      "title": "IDE2810",
      "description": "Furniture 1",
      "Faculty": "ada"
    },
    {
      "title": "IDE2811",
      "description": "Mechanics and electronics for industrial design",
      "Faculty": "ada"
    },
    {
      "title": "IDE3105",
      "description": "Industrial design studio 5",
      "Faculty": "ada"
    },
    {
      "title": "IDE3106",
      "description": "Industrial design studio 6",
      "Faculty": "ada"
    },
    {
      "title": "IDE3115",
      "description": "Industrial design studio 5",
      "Faculty": "ada"
    },
    {
      "title": "IDE3116",
      "description": "Industrial design studio 6",
      "Faculty": "ada"
    },
    {
      "title": "IDE3302",
      "description": "Ergonomics 2",
      "Faculty": "ada"
    },
    {
      "title": "IDE3812",
      "description": "Mobility design 1",
      "Faculty": "ada"
    },
    {
      "title": "IDE3813",
      "description": "Mobility design 2",
      "Faculty": "ada"
    },
    {
      "title": "IDE3814",
      "description": "Materials and manufacturing 2",
      "Faculty": "ada"
    },
    {
      "title": "IDE3815",
      "description": "Furniture design 2",
      "Faculty": "ada"
    },
    {
      "title": "IDE4117",
      "description": "Industrial design studio 7 (major project 1)",
      "Faculty": "ada"
    },
    {
      "title": "IDE4118",
      "description": "Industrial design studio 8 (major project 2)",
      "Faculty": "ada"
    },
    {
      "title": "IDE4809",
      "description": "Mobility design 3",
      "Faculty": "ada"
    },
    {
      "title": "IDN1001",
      "description": "Industrial design studio 1",
      "Faculty": "ada"
    },
    {
      "title": "IDN1002",
      "description": "Industrial design studio 2",
      "Faculty": "ada"
    },
    {
      "title": "IDN2001",
      "description": "Industrial design studio 3",
      "Faculty": "ada"
    },
    {
      "title": "IDN2101",
      "description": "Concept art for design",
      "Faculty": "ada"
    },
    {
      "title": "IDN2102",
      "description": "Service design studio",
      "Faculty": "ada"
    },
    {
      "title": "IDN3001",
      "description": "Industrial design studio 4",
      "Faculty": "ada"
    },
    {
      "title": "IDN3002",
      "description": "Industrial design studio 5",
      "Faculty": "ada"
    },
    {
      "title": "IDN4406",
      "description": "Industry placement for design",
      "Faculty": "ada"
    },
    {
      "title": "IMM2011",
      "description": "Basic immunology: The body's defence system",
      "Faculty": "sci"
    },
    {
      "title": "IMM2022",
      "description": "Immunology in health and disease",
      "Faculty": "sci"
    },
    {
      "title": "IMM3031",
      "description": "Molecular and cellular immunology",
      "Faculty": "sci"
    },
    {
      "title": "IMM3042",
      "description": "Clinical immunopathology",
      "Faculty": "sci"
    },
    {
      "title": "IMM3051",
      "description": "Principles of applied immunology",
      "Faculty": "sci"
    },
    {
      "title": "IMM3062",
      "description": "Clinical and research laboratory immunology",
      "Faculty": "sci"
    },
    {
      "title": "IMM3802",
      "description": "Essentials of applied immunology",
      "Faculty": "sci"
    },
    {
      "title": "IMM3990",
      "description": "Immunology in action research project",
      "Faculty": "sci"
    },
    {
      "title": "IPE1011",
      "description": "Foundations of health in primary clinical care",
      "Faculty": "med"
    },
    {
      "title": "IRD5000",
      "description": "Master of biomedical science (Part 1): Monash Institute of Medical Research",
      "Faculty": "med"
    },
    {
      "title": "JWL1311",
      "description": "Contemporary jewellery practice 1",
      "Faculty": "ada"
    },
    {
      "title": "JWL1312",
      "description": "Contemporary jewellery practice 2",
      "Faculty": "ada"
    },
    {
      "title": "JWL1331",
      "description": "Metals and jewellery practice and theory 1B",
      "Faculty": "ada"
    },
    {
      "title": "JWL1342",
      "description": "Metals and jewellery practice and theory 2B",
      "Faculty": "ada"
    },
    {
      "title": "JWL2313",
      "description": "Contemporary jewellery practice 3",
      "Faculty": "ada"
    },
    {
      "title": "JWL2314",
      "description": "Contemporary jewellery practice 4",
      "Faculty": "ada"
    },
    {
      "title": "JWL2323",
      "description": "Metals and jewellery practice and theory 3B",
      "Faculty": "ada"
    },
    {
      "title": "JWL2324",
      "description": "Metals and jewellery practice and theory 4B",
      "Faculty": "ada"
    },
    {
      "title": "JWL3315",
      "description": "Metals and jewellery practice and theory 5",
      "Faculty": "ada"
    },
    {
      "title": "JWL3316",
      "description": "Metals and jewellery practice and theory 6",
      "Faculty": "ada"
    },
    {
      "title": "LAW1101",
      "description": "Introduction to legal reasoning",
      "Faculty": "law"
    },
    {
      "title": "LAW1104",
      "description": "Research and writing",
      "Faculty": "law"
    },
    {
      "title": "LAW1111",
      "description": "Foundations of Law",
      "Faculty": "law"
    },
    {
      "title": "LAW1112",
      "description": "Public law and statutory interpretation",
      "Faculty": "law"
    },
    {
      "title": "LAW1113",
      "description": "Torts",
      "Faculty": "law"
    },
    {
      "title": "LAW1114",
      "description": "Criminal law 1",
      "Faculty": "law"
    },
    {
      "title": "LAW2001",
      "description": "Law in professional contexts",
      "Faculty": "law"
    },
    {
      "title": "LAW2101",
      "description": "Contract A",
      "Faculty": "law"
    },
    {
      "title": "LAW2102",
      "description": "Contract B",
      "Faculty": "law"
    },
    {
      "title": "LAW2111",
      "description": "Constitutional law",
      "Faculty": "law"
    },
    {
      "title": "LAW2112",
      "description": "Property A",
      "Faculty": "law"
    },
    {
      "title": "LAW2201",
      "description": "Torts A",
      "Faculty": "law"
    },
    {
      "title": "LAW2202",
      "description": "Torts B",
      "Faculty": "law"
    },
    {
      "title": "LAW3111",
      "description": "Equity",
      "Faculty": "law"
    },
    {
      "title": "LAW3112",
      "description": "Corporations law",
      "Faculty": "law"
    },
    {
      "title": "LAW3301",
      "description": "Criminal law and procedure A",
      "Faculty": "law"
    },
    {
      "title": "LAW3302",
      "description": "Criminal law B",
      "Faculty": "law"
    },
    {
      "title": "LAW3402",
      "description": "Property B",
      "Faculty": "law"
    },
    {
      "title": "LAW4101",
      "description": "Administration of criminal justice",
      "Faculty": "law"
    },
    {
      "title": "LAW4104",
      "description": "Australian banking law",
      "Faculty": "law"
    },
    {
      "title": "LAW4108",
      "description": "Constitutional law of Malaysia",
      "Faculty": "law"
    },
    {
      "title": "LAW4111",
      "description": "Crime and gender",
      "Faculty": "law"
    },
    {
      "title": "LAW4112",
      "description": "Advanced constitutional law",
      "Faculty": "law"
    },
    {
      "title": "LAW4113",
      "description": "Current problems in criminal law",
      "Faculty": "law"
    },
    {
      "title": "LAW4115",
      "description": "Environmental law",
      "Faculty": "law"
    },
    {
      "title": "LAW4119",
      "description": "Contemporary workplace relations law",
      "Faculty": "law"
    },
    {
      "title": "LAW4121",
      "description": "Insurance law",
      "Faculty": "law"
    },
    {
      "title": "LAW4122",
      "description": "International law",
      "Faculty": "law"
    },
    {
      "title": "LAW4123",
      "description": "International organisations",
      "Faculty": "law"
    },
    {
      "title": "LAW4125",
      "description": "Comparative antitrust law",
      "Faculty": "law"
    },
    {
      "title": "LAW4126",
      "description": "Asian legal systems",
      "Faculty": "law"
    },
    {
      "title": "LAW4127",
      "description": "Collective labour rights",
      "Faculty": "law"
    },
    {
      "title": "LAW4129",
      "description": "Law and discrimination",
      "Faculty": "law"
    },
    {
      "title": "LAW4130",
      "description": "Law and social theory",
      "Faculty": "law"
    },
    {
      "title": "LAW4132",
      "description": "Law of employment",
      "Faculty": "law"
    },
    {
      "title": "LAW4133",
      "description": "International law seminar: International public order",
      "Faculty": "law"
    },
    {
      "title": "LAW4137",
      "description": "Legal philosophy",
      "Faculty": "law"
    },
    {
      "title": "LAW4140",
      "description": "Media law 2",
      "Faculty": "law"
    },
    {
      "title": "LAW4151",
      "description": "Theoretical perspectives on law, gender and feminism",
      "Faculty": "law"
    },
    {
      "title": "LAW4153",
      "description": "Comparative European legal systems",
      "Faculty": "law"
    },
    {
      "title": "LAW4155",
      "description": "International human rights",
      "Faculty": "law"
    },
    {
      "title": "LAW4156",
      "description": "Conflict of laws - private international law",
      "Faculty": "law"
    },
    {
      "title": "LAW4158",
      "description": "Indigenous peoples and the law",
      "Faculty": "law"
    },
    {
      "title": "LAW4159",
      "description": "International business transactions",
      "Faculty": "law"
    },
    {
      "title": "LAW4160",
      "description": "Negotiation and conflict resolution",
      "Faculty": "law"
    },
    {
      "title": "LAW4161",
      "description": "Introduction to European Union law",
      "Faculty": "law"
    },
    {
      "title": "LAW4162",
      "description": "Family property and financial disputes",
      "Faculty": "law"
    },
    {
      "title": "LAW4163",
      "description": "Parents, children and the state",
      "Faculty": "law"
    },
    {
      "title": "LAW4164",
      "description": "International refugee law and practice",
      "Faculty": "law"
    },
    {
      "title": "LAW4165",
      "description": "Comparative constitutions and rights",
      "Faculty": "law"
    },
    {
      "title": "LAW4166",
      "description": "Citizenship and migration law",
      "Faculty": "law"
    },
    {
      "title": "LAW4170",
      "description": "Trusts",
      "Faculty": "law"
    },
    {
      "title": "LAW4172",
      "description": "Human rights in Australian law",
      "Faculty": "law"
    },
    {
      "title": "LAW4173",
      "description": "Research unit A",
      "Faculty": "law"
    },
    {
      "title": "LAW4174",
      "description": "Research unit B",
      "Faculty": "law"
    },
    {
      "title": "LAW4176",
      "description": "Applied legal research",
      "Faculty": "law"
    },
    {
      "title": "LAW4177",
      "description": "Introduction to family law",
      "Faculty": "law"
    },
    {
      "title": "LAW4178",
      "description": "Comparative civil procedure",
      "Faculty": "law"
    },
    {
      "title": "LAW4179",
      "description": "International commercial arbitration",
      "Faculty": "law"
    },
    {
      "title": "LAW4180",
      "description": "International law of the sea I: Marine resource management",
      "Faculty": "law"
    },
    {
      "title": "LAW4184",
      "description": "International criminal law",
      "Faculty": "law"
    },
    {
      "title": "LAW4188",
      "description": "International banking law",
      "Faculty": "law"
    },
    {
      "title": "LAW4189",
      "description": "Comparative criminal law",
      "Faculty": "law"
    },
    {
      "title": "LAW4190",
      "description": "Construction law: Principles and practice",
      "Faculty": "law"
    },
    {
      "title": "LAW4193",
      "description": "Biotechnology and the law",
      "Faculty": "law"
    },
    {
      "title": "LAW4196",
      "description": "Consumer law",
      "Faculty": "law"
    },
    {
      "title": "LAW4197",
      "description": "Current issues in Indigenous rights: International, comparative and regional perspectives",
      "Faculty": "law"
    },
    {
      "title": "LAW4198",
      "description": "Australian commercial law",
      "Faculty": "law"
    },
    {
      "title": "LAW4199",
      "description": "International laws of armed conflict",
      "Faculty": "law"
    },
    {
      "title": "LAW4214",
      "description": "Supervised research paper",
      "Faculty": "law"
    },
    {
      "title": "LAW4219",
      "description": "The law of financial transactions",
      "Faculty": "law"
    },
    {
      "title": "LAW4225",
      "description": "Non-adversarial justice",
      "Faculty": "law"
    },
    {
      "title": "LAW4227",
      "description": "Criminal investigation law and procedure",
      "Faculty": "law"
    },
    {
      "title": "LAW4228",
      "description": "Problem based learning seminar",
      "Faculty": "law"
    },
    {
      "title": "LAW4229",
      "description": "Comparative tax policy",
      "Faculty": "law"
    },
    {
      "title": "LAW4230",
      "description": "Animal law",
      "Faculty": "law"
    },
    {
      "title": "LAW4242",
      "description": "Introduction to transitional justice",
      "Faculty": "law"
    },
    {
      "title": "LAW4243",
      "description": "Tax policy",
      "Faculty": "law"
    },
    {
      "title": "LAW4244",
      "description": "Construction law (dispute resolution)",
      "Faculty": "law"
    },
    {
      "title": "LAW4247",
      "description": "Current issues in statutory interpretation",
      "Faculty": "law"
    },
    {
      "title": "LAW4249",
      "description": "Environmental activism, ecoterrorism and the law",
      "Faculty": "law"
    },
    {
      "title": "LAW4250",
      "description": "The global lawyer",
      "Faculty": "law"
    },
    {
      "title": "LAW4251",
      "description": "Advanced copyright: Global law and policy",
      "Faculty": "law"
    },
    {
      "title": "LAW4252",
      "description": "Chinese legal institutions and laws",
      "Faculty": "law"
    },
    {
      "title": "LAW4301",
      "description": "Advanced torts",
      "Faculty": "law"
    },
    {
      "title": "LAW4302",
      "description": "The law of public listed companies",
      "Faculty": "law"
    },
    {
      "title": "LAW4303",
      "description": "Litigation and dispute resolution",
      "Faculty": "law"
    },
    {
      "title": "LAW4304",
      "description": "Forensic evidence: Law, science, medicine and technology",
      "Faculty": "law"
    },
    {
      "title": "LAW4305",
      "description": "Federal criminal justice",
      "Faculty": "law"
    },
    {
      "title": "LAW4306",
      "description": "Sentencing and sanctions",
      "Faculty": "law"
    },
    {
      "title": "LAW4307",
      "description": "International law of the sea II",
      "Faculty": "law"
    },
    {
      "title": "LAW4308",
      "description": "Restitution",
      "Faculty": "law"
    },
    {
      "title": "LAW4309",
      "description": "Lawyers ethics in practice",
      "Faculty": "law"
    },
    {
      "title": "LAW4310",
      "description": "Trial practice and advocacy",
      "Faculty": "law"
    },
    {
      "title": "LAW4311",
      "description": "Succession law",
      "Faculty": "law"
    },
    {
      "title": "LAW4312",
      "description": "Legal issues in medicine",
      "Faculty": "law"
    },
    {
      "title": "LAW4313",
      "description": "International environmental law",
      "Faculty": "law"
    },
    {
      "title": "LAW4314",
      "description": "International space law",
      "Faculty": "law"
    },
    {
      "title": "LAW4316",
      "description": "Media law 1",
      "Faculty": "law"
    },
    {
      "title": "LAW4318",
      "description": "Competition law",
      "Faculty": "law"
    },
    {
      "title": "LAW4319",
      "description": "Superannuation law",
      "Faculty": "law"
    },
    {
      "title": "LAW4322",
      "description": "Advanced taxation law",
      "Faculty": "law"
    },
    {
      "title": "LAW4323",
      "description": "Evidence",
      "Faculty": "law"
    },
    {
      "title": "LAW4324",
      "description": "Corporate governance and shareholders remedies",
      "Faculty": "law"
    },
    {
      "title": "LAW4325",
      "description": "Advanced evidence",
      "Faculty": "law"
    },
    {
      "title": "LAW4326",
      "description": "Cyberlaw",
      "Faculty": "law"
    },
    {
      "title": "LAW4327",
      "description": "Honours thesis",
      "Faculty": "law"
    },
    {
      "title": "LAW4328",
      "description": "Professional practice",
      "Faculty": "law"
    },
    {
      "title": "LAW4329",
      "description": "Comparative cyberlaw",
      "Faculty": "law"
    },
    {
      "title": "LAW4330",
      "description": "Family law assistance program: Professional practice",
      "Faculty": "law"
    },
    {
      "title": "LAW4331",
      "description": "Administrative law",
      "Faculty": "law"
    },
    {
      "title": "LAW4332",
      "description": "Criminal law and procedure 2",
      "Faculty": "law"
    },
    {
      "title": "LAW4333",
      "description": "Corporate insolvency",
      "Faculty": "law"
    },
    {
      "title": "LAW4339",
      "description": "Personal insolvency",
      "Faculty": "law"
    },
    {
      "title": "LAW4340",
      "description": "Sport and the law",
      "Faculty": "law"
    },
    {
      "title": "LAW4341",
      "description": "Copyright and designs",
      "Faculty": "law"
    },
    {
      "title": "LAW4342",
      "description": "Patents, trade marks and unfair competition",
      "Faculty": "law"
    },
    {
      "title": "LAW4343",
      "description": "Sovereignty and globalisation",
      "Faculty": "law"
    },
    {
      "title": "LAW4484",
      "description": "Malaysian and Singaporean constitutional systems",
      "Faculty": "law"
    },
    {
      "title": "LAW4513",
      "description": "Capital markets regulation: A comparative perspective",
      "Faculty": "law"
    },
    {
      "title": "LAW4515",
      "description": "International criminology",
      "Faculty": "law"
    },
    {
      "title": "LAW4516",
      "description": "Comparative perspectives on crime and punishment",
      "Faculty": "law"
    },
    {
      "title": "LAW4522",
      "description": "Remedies",
      "Faculty": "law"
    },
    {
      "title": "LAW4523",
      "description": "The judiciary in comparative perspective",
      "Faculty": "law"
    },
    {
      "title": "LAW4526",
      "description": "World trade organisation dispute settlement",
      "Faculty": "law"
    },
    {
      "title": "LAW4528",
      "description": "Comparative consumer bankruptcy",
      "Faculty": "law"
    },
    {
      "title": "LAW4531",
      "description": "Product liability law from a comparative perspective",
      "Faculty": "law"
    },
    {
      "title": "LAW4532",
      "description": "Climate change and international law",
      "Faculty": "law"
    },
    {
      "title": "LAW4533",
      "description": "International and comparative taxation law",
      "Faculty": "law"
    },
    {
      "title": "LAW4534",
      "description": "Law and biology",
      "Faculty": "law"
    },
    {
      "title": "LAW4535",
      "description": "International and comparative trade mark law",
      "Faculty": "law"
    },
    {
      "title": "LAW4536",
      "description": "International and comparative family law",
      "Faculty": "law"
    },
    {
      "title": "LAW4537",
      "description": "Public policy, regulation and the law",
      "Faculty": "law"
    },
    {
      "title": "LAW4538",
      "description": "Lawyers, literature and cinema",
      "Faculty": "law"
    },
    {
      "title": "LAW4539",
      "description": "Modern constitutionalism: A comparative perspective",
      "Faculty": "law"
    },
    {
      "title": "LAW4641",
      "description": "Intellectual property: Theory, copyright and design",
      "Faculty": "law"
    },
    {
      "title": "LAW4642",
      "description": "Issues in medical ethics and law",
      "Faculty": "law"
    },
    {
      "title": "LAW4643",
      "description": "Corporate social responsibility",
      "Faculty": "law"
    },
    {
      "title": "LAW4644",
      "description": "Comparative remedies",
      "Faculty": "law"
    },
    {
      "title": "LAW4645",
      "description": "International perspectives on torts law",
      "Faculty": "law"
    },
    {
      "title": "LAW4646",
      "description": "Sexuality and the law",
      "Faculty": "law"
    },
    {
      "title": "LAW4647",
      "description": "Great books of the common law",
      "Faculty": "law"
    },
    {
      "title": "LAW4648",
      "description": "Ethics and criminal justice",
      "Faculty": "law"
    },
    {
      "title": "LAW4649",
      "description": "Mediation and law: From problem solving to narrative building",
      "Faculty": "law"
    },
    {
      "title": "LAW4651",
      "description": "Comparative evidence law",
      "Faculty": "law"
    },
    {
      "title": "LAW4652",
      "description": "Transnational litigation",
      "Faculty": "law"
    },
    {
      "title": "LAW4653",
      "description": "Privacy and surveillance in an information age: Comparative law perspectives",
      "Faculty": "law"
    },
    {
      "title": "LAW4654",
      "description": "Law and liberty",
      "Faculty": "law"
    },
    {
      "title": "LAW4655",
      "description": "Comparative issues in patent law",
      "Faculty": "law"
    },
    {
      "title": "LAW4656",
      "description": "Varieties of the secular: Law, religion, and social change",
      "Faculty": "law"
    },
    {
      "title": "LAW4658",
      "description": "International litigation and arbitration",
      "Faculty": "law"
    },
    {
      "title": "LAW4659",
      "description": "Game theory and the law",
      "Faculty": "law"
    },
    {
      "title": "LAW4660",
      "description": "Regulating relationships and families",
      "Faculty": "law"
    },
    {
      "title": "LAW4662",
      "description": "Air and space law",
      "Faculty": "law"
    },
    {
      "title": "LAW4663",
      "description": "International environmental governance",
      "Faculty": "law"
    },
    {
      "title": "LAW4664",
      "description": "Comparative dispute resolution",
      "Faculty": "law"
    },
    {
      "title": "LAW4665",
      "description": "Comparative cybercrime",
      "Faculty": "law"
    },
    {
      "title": "LAW4666",
      "description": "European human rights law",
      "Faculty": "law"
    },
    {
      "title": "LAW4667",
      "description": "Human dignity in comparative perspective",
      "Faculty": "law"
    },
    {
      "title": "LAW4668",
      "description": "International investment law",
      "Faculty": "law"
    },
    {
      "title": "LAW4669",
      "description": "Humans rights and the European Union",
      "Faculty": "law"
    },
    {
      "title": "LAW4670",
      "description": "Introduction to Islamic law",
      "Faculty": "law"
    },
    {
      "title": "LAW4671",
      "description": "Private investment law",
      "Faculty": "law"
    },
    {
      "title": "LAW4673",
      "description": "European and international monetary law",
      "Faculty": "law"
    },
    {
      "title": "LAW4674",
      "description": "Freedom of speech: Law, theory and policy",
      "Faculty": "law"
    },
    {
      "title": "LAW4675",
      "description": "International and comparative insolvency law",
      "Faculty": "law"
    },
    {
      "title": "LAW4676",
      "description": "Judgment and decision-making",
      "Faculty": "law"
    },
    {
      "title": "LAW4677",
      "description": "International information and media law",
      "Faculty": "law"
    },
    {
      "title": "LAW4678",
      "description": "International criminal justice",
      "Faculty": "law"
    },
    {
      "title": "LAW4679",
      "description": "The law of climate change",
      "Faculty": "law"
    },
    {
      "title": "LAW4680",
      "description": "Australian corporations law",
      "Faculty": "law"
    },
    {
      "title": "LAW4681",
      "description": "Global economic law",
      "Faculty": "law"
    },
    {
      "title": "LAW4701",
      "description": "Commercial transactions",
      "Faculty": "law"
    },
    {
      "title": "LAW4702",
      "description": "Competition and consumer law",
      "Faculty": "law"
    },
    {
      "title": "LAW4703",
      "description": "Introduction to intellectual property",
      "Faculty": "law"
    },
    {
      "title": "LAW4704",
      "description": "Taxation law",
      "Faculty": "law"
    },
    {
      "title": "LAW4801",
      "description": "Research project",
      "Faculty": "law"
    },
    {
      "title": "LAW4802",
      "description": "Research practicum",
      "Faculty": "law"
    },
    {
      "title": "LAW4803",
      "description": "Clinical externship",
      "Faculty": "law"
    },
    {
      "title": "LAW4804",
      "description": "Law reform and community development",
      "Faculty": "law"
    },
    {
      "title": "LAW4805",
      "description": "Mooting and advocacy competition",
      "Faculty": "law"
    },
    {
      "title": "LAW4806",
      "description": "Jessup moot competition",
      "Faculty": "law"
    },
    {
      "title": "LAW4807",
      "description": "Vis arbitration moot",
      "Faculty": "law"
    },
    {
      "title": "LAW4808",
      "description": "Law Review editorship 1",
      "Faculty": "law"
    },
    {
      "title": "LAW4809",
      "description": "Law Review editorship 2",
      "Faculty": "law"
    },
    {
      "title": "LAW5000",
      "description": "Australian legal reasoning and methods",
      "Faculty": "law"
    },
    {
      "title": "LAW5001",
      "description": "Principles of criminal law and procedure",
      "Faculty": "law"
    },
    {
      "title": "LAW5002",
      "description": "Principles of contract law A",
      "Faculty": "law"
    },
    {
      "title": "LAW5003",
      "description": "Principles of torts",
      "Faculty": "law"
    },
    {
      "title": "LAW5004",
      "description": "Principles of public law and statutory interpretation",
      "Faculty": "law"
    },
    {
      "title": "LAW5005",
      "description": "Principles of contract law B",
      "Faculty": "law"
    },
    {
      "title": "LAW5006",
      "description": "Principles of property law",
      "Faculty": "law"
    },
    {
      "title": "LAW5007",
      "description": "Principles of constitutional law",
      "Faculty": "law"
    },
    {
      "title": "LAW5008",
      "description": "Principles of equity",
      "Faculty": "law"
    },
    {
      "title": "LAW5009",
      "description": "Advanced property law B",
      "Faculty": "law"
    },
    {
      "title": "LAW5010",
      "description": "Principles of trusts",
      "Faculty": "law"
    },
    {
      "title": "LAW5011",
      "description": "Principles of company law",
      "Faculty": "law"
    },
    {
      "title": "LAW5012",
      "description": "Principles of evidence",
      "Faculty": "law"
    },
    {
      "title": "LAW5013",
      "description": "Principles of litigation and dispute resolution",
      "Faculty": "law"
    },
    {
      "title": "LAW5014",
      "description": "Principles of administrative law",
      "Faculty": "law"
    },
    {
      "title": "LAW5015",
      "description": "Ethics in legal practice",
      "Faculty": "law"
    },
    {
      "title": "LAW5016",
      "description": "Principles of corporations law",
      "Faculty": "law"
    },
    {
      "title": "LAW5017",
      "description": "Advanced corporations law",
      "Faculty": "law"
    },
    {
      "title": "LAW5018",
      "description": "Advanced property law",
      "Faculty": "law"
    },
    {
      "title": "LAW5050",
      "description": "Professional practice (JD)",
      "Faculty": "law"
    },
    {
      "title": "LAW5051",
      "description": "Research practicum",
      "Faculty": "law"
    },
    {
      "title": "LAW5052",
      "description": "Professional project",
      "Faculty": "law"
    },
    {
      "title": "LAW5053",
      "description": "Law Review editorship 1",
      "Faculty": "law"
    },
    {
      "title": "LAW5054",
      "description": "Law Review editorship 2",
      "Faculty": "law"
    },
    {
      "title": "LAW5055",
      "description": "Vis arbitration moot",
      "Faculty": "law"
    },
    {
      "title": "LAW5056",
      "description": "Jessup moot competition",
      "Faculty": "law"
    },
    {
      "title": "LAW5080",
      "description": "Australian legal system",
      "Faculty": "law"
    },
    {
      "title": "LAW5081",
      "description": "Australian legal process and research",
      "Faculty": "law"
    },
    {
      "title": "LAW5082",
      "description": "Masters research",
      "Faculty": "law"
    },
    {
      "title": "LAW5083",
      "description": "Extended research",
      "Faculty": "law"
    },
    {
      "title": "LAW5084",
      "description": "Minor thesis",
      "Faculty": "law"
    },
    {
      "title": "LAW5185",
      "description": "Graduate research paper",
      "Faculty": "law"
    },
    {
      "title": "LAW5300",
      "description": "Commercial tenancy law",
      "Faculty": "law"
    },
    {
      "title": "LAW5301",
      "description": "Copyright",
      "Faculty": "law"
    },
    {
      "title": "LAW5302",
      "description": "European Union law and policy",
      "Faculty": "law"
    },
    {
      "title": "LAW5303",
      "description": "Forensic family law",
      "Faculty": "law"
    },
    {
      "title": "LAW5304",
      "description": "Overview of international human rights law",
      "Faculty": "law"
    },
    {
      "title": "LAW5305",
      "description": "International trade law",
      "Faculty": "law"
    },
    {
      "title": "LAW5306",
      "description": "Corporate insolvency",
      "Faculty": "law"
    },
    {
      "title": "LAW5307",
      "description": "Occupational health and safety",
      "Faculty": "law"
    },
    {
      "title": "LAW5308",
      "description": "Current issues in evidence",
      "Faculty": "law"
    },
    {
      "title": "LAW5309",
      "description": "Public sector employment law",
      "Faculty": "law"
    },
    {
      "title": "LAW5310",
      "description": "Sentencing",
      "Faculty": "law"
    },
    {
      "title": "LAW5311",
      "description": "Takeovers",
      "Faculty": "law"
    },
    {
      "title": "LAW5312",
      "description": "Competition law",
      "Faculty": "law"
    },
    {
      "title": "LAW5313",
      "description": "Planning law",
      "Faculty": "law"
    },
    {
      "title": "LAW5314",
      "description": "International environmental law",
      "Faculty": "law"
    },
    {
      "title": "LAW5315",
      "description": "Commercial alternative dispute resolution",
      "Faculty": "law"
    },
    {
      "title": "LAW5316",
      "description": "Trade marks and commercial designations",
      "Faculty": "law"
    },
    {
      "title": "LAW5317",
      "description": "Principles of privacy and freedom of information",
      "Faculty": "law"
    },
    {
      "title": "LAW5318",
      "description": "International aspects of intellectual property",
      "Faculty": "law"
    },
    {
      "title": "LAW5319",
      "description": "Law of employee relations",
      "Faculty": "law"
    },
    {
      "title": "LAW5320",
      "description": "Local government law",
      "Faculty": "law"
    },
    {
      "title": "LAW5321",
      "description": "Protecting commercial innovation: Patents and trade secrets",
      "Faculty": "law"
    },
    {
      "title": "LAW5322",
      "description": "Superannuation law and practice",
      "Faculty": "law"
    },
    {
      "title": "LAW5323",
      "description": "Collective labour rights",
      "Faculty": "law"
    },
    {
      "title": "LAW5324",
      "description": "Discrimination law, theory and policy",
      "Faculty": "law"
    },
    {
      "title": "LAW5325",
      "description": "Defamation law",
      "Faculty": "law"
    },
    {
      "title": "LAW5326",
      "description": "Comparative European legal systems",
      "Faculty": "law"
    },
    {
      "title": "LAW5327",
      "description": "International human rights",
      "Faculty": "law"
    },
    {
      "title": "LAW5328",
      "description": "International business transactions",
      "Faculty": "law"
    },
    {
      "title": "LAW5329",
      "description": "Introduction to European Union law",
      "Faculty": "law"
    },
    {
      "title": "LAW5330",
      "description": "International refugee law and practice",
      "Faculty": "law"
    },
    {
      "title": "LAW5331",
      "description": "Comparative constitution and rights",
      "Faculty": "law"
    },
    {
      "title": "LAW5332",
      "description": "International commercial arbitration",
      "Faculty": "law"
    },
    {
      "title": "LAW5333",
      "description": "Comparative criminal law",
      "Faculty": "law"
    },
    {
      "title": "LAW5334",
      "description": "Psychiatry, psychology and law",
      "Faculty": "law"
    },
    {
      "title": "LAW5335",
      "description": "Contemporary problems in the administration of criminal justice",
      "Faculty": "law"
    },
    {
      "title": "LAW5336",
      "description": "Law of the internet",
      "Faculty": "law"
    },
    {
      "title": "LAW5337",
      "description": "Labour law for corporate lawyers",
      "Faculty": "law"
    },
    {
      "title": "LAW5338",
      "description": "International humanitarian law",
      "Faculty": "law"
    },
    {
      "title": "LAW5339",
      "description": "Technology contracts and licensing law",
      "Faculty": "law"
    },
    {
      "title": "LAW5340",
      "description": "Intellectual property",
      "Faculty": "law"
    },
    {
      "title": "LAW5341",
      "description": "Trade mark practice",
      "Faculty": "law"
    },
    {
      "title": "LAW5342",
      "description": "Current issues in electronic commerce law",
      "Faculty": "law"
    },
    {
      "title": "LAW5343",
      "description": "Privacy and surveillance: Law, policy and governance",
      "Faculty": "law"
    },
    {
      "title": "LAW5344",
      "description": "Negotiation: Essential skills for dispute resolution",
      "Faculty": "law"
    },
    {
      "title": "LAW5345",
      "description": "Human rights, business and the global economy",
      "Faculty": "law"
    },
    {
      "title": "LAW5346",
      "description": "Design law and practice",
      "Faculty": "law"
    },
    {
      "title": "LAW5347",
      "description": "Consumer policy and regulation",
      "Faculty": "law"
    },
    {
      "title": "LAW5348",
      "description": "Indigenous rights and international law",
      "Faculty": "law"
    },
    {
      "title": "LAW5350",
      "description": "Principles of taxation",
      "Faculty": "law"
    },
    {
      "title": "LAW5351",
      "description": "Comparative competition law",
      "Faculty": "law"
    },
    {
      "title": "LAW5352",
      "description": "Electronic workplace law",
      "Faculty": "law"
    },
    {
      "title": "LAW5353",
      "description": "Cybercrime",
      "Faculty": "law"
    },
    {
      "title": "LAW5354",
      "description": "International criminal justice",
      "Faculty": "law"
    },
    {
      "title": "LAW5355",
      "description": "Advocacy: Theory and practice",
      "Faculty": "law"
    },
    {
      "title": "LAW5356",
      "description": "Corporate and white collar crime",
      "Faculty": "law"
    },
    {
      "title": "LAW5357",
      "description": "Corporate governance and directors' duties",
      "Faculty": "law"
    },
    {
      "title": "LAW5358",
      "description": "Current issues in workplace law",
      "Faculty": "law"
    },
    {
      "title": "LAW5359",
      "description": "International human rights law and women",
      "Faculty": "law"
    },
    {
      "title": "LAW5360",
      "description": "Advanced conflict resolution skills",
      "Faculty": "law"
    },
    {
      "title": "LAW5361",
      "description": "Foundations of regulation: Policy, principles and practice",
      "Faculty": "law"
    },
    {
      "title": "LAW5362",
      "description": "Regulatory methods",
      "Faculty": "law"
    },
    {
      "title": "LAW5363",
      "description": "Regulatory performance: Evaluating what works",
      "Faculty": "law"
    },
    {
      "title": "LAW5364",
      "description": "Economic, social and cultural rights and international law",
      "Faculty": "law"
    },
    {
      "title": "LAW5365",
      "description": "Terrorism and human rights",
      "Faculty": "law"
    },
    {
      "title": "LAW5366",
      "description": "International banking and finance: Law and practice",
      "Faculty": "law"
    },
    {
      "title": "LAW5367",
      "description": "Energy law, regulation and policy",
      "Faculty": "law"
    },
    {
      "title": "LAW5368",
      "description": "Regulation of Australian water resources",
      "Faculty": "law"
    },
    {
      "title": "LAW5369",
      "description": "World Trade Organization (WTO) law",
      "Faculty": "law"
    },
    {
      "title": "LAW5370",
      "description": "Discrimination law and human rights at work",
      "Faculty": "law"
    },
    {
      "title": "LAW5371",
      "description": "Protecting the rights of minorities, marginalised and vulnerable people",
      "Faculty": "law"
    },
    {
      "title": "LAW5372",
      "description": "Principles of construction law",
      "Faculty": "law"
    },
    {
      "title": "LAW5373",
      "description": "Comparative bills of rights",
      "Faculty": "law"
    },
    {
      "title": "LAW5374",
      "description": "Federal labour law",
      "Faculty": "law"
    },
    {
      "title": "LAW5375",
      "description": "Arbitration of international commercial disputes",
      "Faculty": "law"
    },
    {
      "title": "LAW5376",
      "description": "International criminal law: Procedural and practical aspects",
      "Faculty": "law"
    },
    {
      "title": "LAW5377",
      "description": "The use of force in international law",
      "Faculty": "law"
    },
    {
      "title": "LAW5378",
      "description": "Comparative corporate governance",
      "Faculty": "law"
    },
    {
      "title": "LAW5379",
      "description": "Procurement law",
      "Faculty": "law"
    },
    {
      "title": "LAW5380",
      "description": "International human rights law and development",
      "Faculty": "law"
    },
    {
      "title": "LAW5381",
      "description": "Human rights advocacy: Australian law and practice",
      "Faculty": "law"
    },
    {
      "title": "LAW5382",
      "description": "Principles of environmental law",
      "Faculty": "law"
    },
    {
      "title": "LAW5383",
      "description": "International refugee law and human rights",
      "Faculty": "law"
    },
    {
      "title": "LAW5384",
      "description": "International investment law",
      "Faculty": "law"
    },
    {
      "title": "LAW5385",
      "description": "Corporate finance law",
      "Faculty": "law"
    },
    {
      "title": "LAW5386",
      "description": "Health law and human rights",
      "Faculty": "law"
    },
    {
      "title": "LAW5387",
      "description": "Non-adversarial family and children's law",
      "Faculty": "law"
    },
    {
      "title": "LAW5388",
      "description": "Patenting for commercialisation",
      "Faculty": "law"
    },
    {
      "title": "LAW5389",
      "description": "The law of climate change",
      "Faculty": "law"
    },
    {
      "title": "LAW5390",
      "description": "Workplace bargaining and agreements law",
      "Faculty": "law"
    },
    {
      "title": "LAW5392",
      "description": "Globalisation and international economic law",
      "Faculty": "law"
    },
    {
      "title": "LAW5393",
      "description": "Law of workforce management",
      "Faculty": "law"
    },
    {
      "title": "LAW5394",
      "description": "Banking law",
      "Faculty": "law"
    },
    {
      "title": "LAW5395",
      "description": "Arbitration of domestic commercial disputes",
      "Faculty": "law"
    },
    {
      "title": "LAW5396",
      "description": "Economics of regulation",
      "Faculty": "law"
    },
    {
      "title": "LAW5397",
      "description": "Issues in consumer policy",
      "Faculty": "law"
    },
    {
      "title": "LAW5398",
      "description": "International labour law",
      "Faculty": "law"
    },
    {
      "title": "LAW5399",
      "description": "Personal property securities",
      "Faculty": "law"
    },
    {
      "title": "LAW5400",
      "description": "International trade mark law",
      "Faculty": "law"
    },
    {
      "title": "LAW5402",
      "description": "Innovation: Labour, competition and intellectual property law perspectives",
      "Faculty": "law"
    },
    {
      "title": "LAW5403",
      "description": "International covenant on civil and political rights",
      "Faculty": "law"
    },
    {
      "title": "LAW5404",
      "description": "Genocide and international law",
      "Faculty": "law"
    },
    {
      "title": "LAW5407",
      "description": "Current issues in torts",
      "Faculty": "law"
    },
    {
      "title": "LAW5408",
      "description": "Remedies in commercial disputes",
      "Faculty": "law"
    },
    {
      "title": "LAW5409",
      "description": "Principles of family law",
      "Faculty": "law"
    },
    {
      "title": "LAW5410",
      "description": "Collaborative practice",
      "Faculty": "law"
    },
    {
      "title": "LAW5411",
      "description": "Advanced mediation: Skills and theory A",
      "Faculty": "law"
    },
    {
      "title": "LAW5412",
      "description": "Advanced mediation: Skills and theory B",
      "Faculty": "law"
    },
    {
      "title": "LAW5413",
      "description": "Legal process and professional conduct",
      "Faculty": "law"
    },
    {
      "title": "LAW5414",
      "description": "Public international law",
      "Faculty": "law"
    },
    {
      "title": "LAW5415",
      "description": "Domestic and international debt capital markets",
      "Faculty": "law"
    },
    {
      "title": "LAW5416",
      "description": "Children's rights in Australian law",
      "Faculty": "law"
    },
    {
      "title": "LAW5417",
      "description": "Children's rights in international law",
      "Faculty": "law"
    },
    {
      "title": "LAW5418",
      "description": "Transitional justice",
      "Faculty": "law"
    },
    {
      "title": "LAW5419",
      "description": "The law of financial transactions",
      "Faculty": "law"
    },
    {
      "title": "LAW5420",
      "description": "Malaysian and Singaporean constitutional systems",
      "Faculty": "law"
    },
    {
      "title": "LAW5421",
      "description": "Managing high conflict personalities in legal disputes",
      "Faculty": "law"
    },
    {
      "title": "LAW5422",
      "description": "Victorian charter of rights and responsibilities",
      "Faculty": "law"
    },
    {
      "title": "LAW5423",
      "description": "Private international law in commercial disputes",
      "Faculty": "law"
    },
    {
      "title": "LAW5424",
      "description": "Human trafficking and the law",
      "Faculty": "law"
    },
    {
      "title": "LAW5425",
      "description": "Current issues in copyright",
      "Faculty": "law"
    },
    {
      "title": "LAW5426",
      "description": "Regulating business: Enforcement and compliance",
      "Faculty": "law"
    },
    {
      "title": "LAW5427",
      "description": "Freedom of speech: Law theory and policy",
      "Faculty": "law"
    },
    {
      "title": "LAW5428",
      "description": "Health law",
      "Faculty": "law"
    },
    {
      "title": "LAW5429",
      "description": "Advanced commercial negotiation skills",
      "Faculty": "law"
    },
    {
      "title": "LAW5430",
      "description": "Advanced evidence and proof in litigation",
      "Faculty": "law"
    },
    {
      "title": "LAW5431",
      "description": "International entertainment law",
      "Faculty": "law"
    },
    {
      "title": "LAW5432",
      "description": "Workplace investigations and misconduct",
      "Faculty": "law"
    },
    {
      "title": "LAW5433",
      "description": "Victims, law and mass atrocity",
      "Faculty": "law"
    },
    {
      "title": "LAW5434",
      "description": "Principles of government law and administration",
      "Faculty": "law"
    },
    {
      "title": "LAW5435",
      "description": "Comparative perspectives on crime and punishment",
      "Faculty": "law"
    },
    {
      "title": "LAW5436",
      "description": "International and comparative family law",
      "Faculty": "law"
    },
    {
      "title": "LAW5437",
      "description": "China's legal system",
      "Faculty": "law"
    },
    {
      "title": "LAW5438",
      "description": "Current issues in sports law",
      "Faculty": "law"
    },
    {
      "title": "LAW5439",
      "description": "Sexual and gender minorities and human rights",
      "Faculty": "law"
    },
    {
      "title": "LAW5440",
      "description": "International commercial dispute resolution advocacy",
      "Faculty": "law"
    },
    {
      "title": "LAW5441",
      "description": "Australian tax policy",
      "Faculty": "law"
    },
    {
      "title": "LAW5442",
      "description": "Racial, ethnic and linguistic minorities and human rights",
      "Faculty": "law"
    },
    {
      "title": "LAW5443",
      "description": "Language, communication and legal process",
      "Faculty": "law"
    },
    {
      "title": "LAW5444",
      "description": "Advanced commercial contracts masterclass",
      "Faculty": "law"
    },
    {
      "title": "LAW5445",
      "description": "Commercial equity",
      "Faculty": "law"
    },
    {
      "title": "LAW5446",
      "description": "Comparative media law",
      "Faculty": "law"
    },
    {
      "title": "LAW5447",
      "description": "Intellectual property and the internet",
      "Faculty": "law"
    },
    {
      "title": "LAW5448",
      "description": "Copyright X: Monash",
      "Faculty": "law"
    },
    {
      "title": "LAW5449",
      "description": "Advanced administrative law",
      "Faculty": "law"
    },
    {
      "title": "LAW5450",
      "description": "Principles of succession law",
      "Faculty": "law"
    },
    {
      "title": "LAW5451",
      "description": "Indigenous people and the law",
      "Faculty": "law"
    },
    {
      "title": "LAW5452",
      "description": "Private investment law",
      "Faculty": "law"
    },
    {
      "title": "LAW5453",
      "description": "Comparative international litigation",
      "Faculty": "law"
    },
    {
      "title": "LAW5454",
      "description": "Climate governance and citizen justice",
      "Faculty": "law"
    },
    {
      "title": "LAW5455",
      "description": "Chinese law and innovation policies",
      "Faculty": "law"
    },
    {
      "title": "LAW5456",
      "description": "Science, technology and law",
      "Faculty": "law"
    },
    {
      "title": "LAW5457",
      "description": "Forensic evidence: Law, science, medicine and technology",
      "Faculty": "law"
    },
    {
      "title": "LAW5458",
      "description": "Animal law, regulation and policy",
      "Faculty": "law"
    },
    {
      "title": "LAW5600",
      "description": "Issues in medical ethics and law",
      "Faculty": "law"
    },
    {
      "title": "LAW5601",
      "description": "Comparative remedies",
      "Faculty": "law"
    },
    {
      "title": "LAW5602",
      "description": "International perspectives on torts law",
      "Faculty": "law"
    },
    {
      "title": "LAW5603",
      "description": "Comparative cyberlaw",
      "Faculty": "law"
    },
    {
      "title": "LAW5604",
      "description": "International environmental governance",
      "Faculty": "law"
    },
    {
      "title": "LAW5605",
      "description": "Comparative dispute resolution",
      "Faculty": "law"
    },
    {
      "title": "LAW5606",
      "description": "Restitution",
      "Faculty": "law"
    },
    {
      "title": "LAW5607",
      "description": "Comparative evidence law",
      "Faculty": "law"
    },
    {
      "title": "LAW5608",
      "description": "Transnational litigation",
      "Faculty": "law"
    },
    {
      "title": "LAW5609",
      "description": "Law and liberty",
      "Faculty": "law"
    },
    {
      "title": "LAW5610",
      "description": "Varieties of the secular: Law, religion, and social change",
      "Faculty": "law"
    },
    {
      "title": "LAW5611",
      "description": "Comparative issues in patent law",
      "Faculty": "law"
    },
    {
      "title": "LAW5612",
      "description": "International litigation and arbitration",
      "Faculty": "law"
    },
    {
      "title": "LAW5613",
      "description": "Game theory and the law",
      "Faculty": "law"
    },
    {
      "title": "LAW5614",
      "description": "Regulating relationships and families",
      "Faculty": "law"
    },
    {
      "title": "LAW5615",
      "description": "Environmental activism, ecoterrorism and the law",
      "Faculty": "law"
    },
    {
      "title": "LAW5616",
      "description": "Air and space law",
      "Faculty": "law"
    },
    {
      "title": "LAW5617",
      "description": "International and comparative taxation law",
      "Faculty": "law"
    },
    {
      "title": "LAW5618",
      "description": "Comparative cybercrime",
      "Faculty": "law"
    },
    {
      "title": "LAW5619",
      "description": "European human rights law",
      "Faculty": "law"
    },
    {
      "title": "LAW5620",
      "description": "Privacy and surveillance in an information age: Comparative law perspectives",
      "Faculty": "law"
    },
    {
      "title": "LAW5621",
      "description": "Mediation and law: From problem solving to narrative building",
      "Faculty": "law"
    },
    {
      "title": "LAW5622",
      "description": "Human dignity in comparative perspective",
      "Faculty": "law"
    },
    {
      "title": "LAW5623",
      "description": "Human rights and the European Union",
      "Faculty": "law"
    },
    {
      "title": "LAW5624",
      "description": "Introduction to Islamic law",
      "Faculty": "law"
    },
    {
      "title": "LAW5625",
      "description": "Freedom of speech: Law, theory and policy",
      "Faculty": "law"
    },
    {
      "title": "LAW5626",
      "description": "International and comparative insolvency law",
      "Faculty": "law"
    },
    {
      "title": "LAW5627",
      "description": "Judgment and decision-making",
      "Faculty": "law"
    },
    {
      "title": "LAW5628",
      "description": "International and comparative trademark law",
      "Faculty": "law"
    },
    {
      "title": "LAW5629",
      "description": "Comparative issues in patent law",
      "Faculty": "law"
    },
    {
      "title": "LAW5630",
      "description": "European and international monetary law",
      "Faculty": "law"
    },
    {
      "title": "LAW5631",
      "description": "Lawyers, literature and cinema",
      "Faculty": "law"
    },
    {
      "title": "LAW5632",
      "description": "International information and media law",
      "Faculty": "law"
    },
    {
      "title": "LAW5633",
      "description": "Contemporary workplace relations law",
      "Faculty": "law"
    },
    {
      "title": "LAW6300",
      "description": "Doctor of Juridical Science seminar",
      "Faculty": "law"
    },
    {
      "title": "MAE2401",
      "description": "Aircraft structures 1",
      "Faculty": "eng"
    },
    {
      "title": "MAE2402",
      "description": "Thermodynamics and heat transfer",
      "Faculty": "eng"
    },
    {
      "title": "MAE2403",
      "description": "Aerospace computational mechanics",
      "Faculty": "eng"
    },
    {
      "title": "MAE2404",
      "description": "Aerodynamics I",
      "Faculty": "eng"
    },
    {
      "title": "MAE2405",
      "description": "Aircraft performance",
      "Faculty": "eng"
    },
    {
      "title": "MAE3401",
      "description": "Aerodynamics II",
      "Faculty": "eng"
    },
    {
      "title": "MAE3402",
      "description": "Aerospace design project",
      "Faculty": "eng"
    },
    {
      "title": "MAE3404",
      "description": "Flight vehicle dynamics",
      "Faculty": "eng"
    },
    {
      "title": "MAE3405",
      "description": "Flight vehicle propulsion",
      "Faculty": "eng"
    },
    {
      "title": "MAE3406",
      "description": "Aerospace materials",
      "Faculty": "eng"
    },
    {
      "title": "MAE3407",
      "description": "Aircraft structures II",
      "Faculty": "eng"
    },
    {
      "title": "MAE3408",
      "description": "Aerospace control",
      "Faculty": "eng"
    },
    {
      "title": "MAE4404",
      "description": "Aerospace practices",
      "Faculty": "eng"
    },
    {
      "title": "MAE4407",
      "description": "Instrumentation and avionics",
      "Faculty": "eng"
    },
    {
      "title": "MAE4408",
      "description": "Damage tolerance and airworthiness",
      "Faculty": "eng"
    },
    {
      "title": "MAE4409",
      "description": "Wing design",
      "Faculty": "eng"
    },
    {
      "title": "MAE4904",
      "description": "Minor research project",
      "Faculty": "eng"
    },
    {
      "title": "MAE4965",
      "description": "Advanced aerodynamics and turbulence",
      "Faculty": "eng"
    },
    {
      "title": "MAE4980",
      "description": "Aircraft engines",
      "Faculty": "eng"
    },
    {
      "title": "MAE5401",
      "description": "Aerodynamics",
      "Faculty": "eng"
    },
    {
      "title": "MAE5402",
      "description": "Aircraft structures",
      "Faculty": "eng"
    },
    {
      "title": "MAE5403",
      "description": "Composite airframes",
      "Faculty": "eng"
    },
    {
      "title": "MAE5404",
      "description": "Airworthiness",
      "Faculty": "eng"
    },
    {
      "title": "MAE5405",
      "description": "Avionics",
      "Faculty": "eng"
    },
    {
      "title": "MAE5406",
      "description": "Computational fluid mechanics",
      "Faculty": "eng"
    },
    {
      "title": "MAE5407",
      "description": "Computer aided design of aerospace structures",
      "Faculty": "eng"
    },
    {
      "title": "MAE5408",
      "description": "Spaceflight dynamics",
      "Faculty": "eng"
    },
    {
      "title": "MAE5409",
      "description": "Master of aerospace engineering: project thesis A",
      "Faculty": "eng"
    },
    {
      "title": "MAE5410",
      "description": "Master of aerospace engineering: project thesis B",
      "Faculty": "eng"
    },
    {
      "title": "MAP4200",
      "description": "Improving indigenous equity in professional practice",
      "Faculty": "med"
    },
    {
      "title": "MAP5000",
      "description": "Research in advanced health professional practice",
      "Faculty": "med"
    },
    {
      "title": "MAP5001",
      "description": "Preparatory minor thesis",
      "Faculty": "med"
    },
    {
      "title": "MAP5002",
      "description": "Minor thesis",
      "Faculty": "med"
    },
    {
      "title": "MAP5003",
      "description": "Essentials of advanced health care practice and research",
      "Faculty": "med"
    },
    {
      "title": "MAP5010",
      "description": "Advanced health practice research project",
      "Faculty": "med"
    },
    {
      "title": "MAP5101",
      "description": "Advanced critical care skills",
      "Faculty": "med"
    },
    {
      "title": "MAP5104",
      "description": "Emergency medicine skills",
      "Faculty": "med"
    },
    {
      "title": "MAP5105",
      "description": "Trauma skills",
      "Faculty": "med"
    },
    {
      "title": "MAT1830",
      "description": "Discrete mathematics for computer science",
      "Faculty": "it"
    },
    {
      "title": "MAT1841",
      "description": "Continuous mathematics for computer science",
      "Faculty": "it"
    },
    {
      "title": "MAT2731",
      "description": "Multivariate analysis",
      "Faculty": "eng"
    },
    {
      "title": "MAT2742",
      "description": "Mathematical modeling of the environment",
      "Faculty": "eng"
    },
    {
      "title": "MAT9004",
      "description": "Mathematical foundations for data science",
      "Faculty": "it"
    },
    {
      "title": "MBA5005",
      "description": "Strategic management",
      "Faculty": "buseco"
    },
    {
      "title": "MBA5008",
      "description": "Managing people for competitive advantage",
      "Faculty": "buseco"
    },
    {
      "title": "MBA5030",
      "description": "Specialist elective 1",
      "Faculty": "buseco"
    },
    {
      "title": "MBA5060",
      "description": "Specialist elective 4",
      "Faculty": "buseco"
    },
    {
      "title": "MBA5111",
      "description": "Leadership 1: Critical thinking",
      "Faculty": "buseco"
    },
    {
      "title": "MBA5112",
      "description": "MBA 1",
      "Faculty": "buseco"
    },
    {
      "title": "MBA5113",
      "description": "MBA Labs: Strategy project",
      "Faculty": "buseco"
    },
    {
      "title": "MBA5211",
      "description": "MBA5211 Leadership 2: People and performance",
      "Faculty": "buseco"
    },
    {
      "title": "MBA5212",
      "description": "MBA 2",
      "Faculty": "buseco"
    },
    {
      "title": "MBA5213",
      "description": "Technology, innovation and entrepreneurship",
      "Faculty": "buseco"
    },
    {
      "title": "MBA5311",
      "description": "Leadership 3: Influence and negotiations",
      "Faculty": "buseco"
    },
    {
      "title": "MBA5312",
      "description": "MBA 3",
      "Faculty": "buseco"
    },
    {
      "title": "MBA5313",
      "description": "MBA Labs: Technology and entrepreneurship project",
      "Faculty": "buseco"
    },
    {
      "title": "MBA5400",
      "description": "MBA corporate project 1",
      "Faculty": "buseco"
    },
    {
      "title": "MBA5410",
      "description": "MBA corporate project 2",
      "Faculty": "buseco"
    },
    {
      "title": "MBA5411",
      "description": "Leadership 4: Personal and professional development",
      "Faculty": "buseco"
    },
    {
      "title": "MBA5412",
      "description": "MBA Seminars",
      "Faculty": "buseco"
    },
    {
      "title": "MBA5413",
      "description": "MBA Labs: International business project",
      "Faculty": "buseco"
    },
    {
      "title": "MBA5415",
      "description": "Strategy capstone",
      "Faculty": "buseco"
    },
    {
      "title": "MBA5500",
      "description": "Negotiation and managerial judgment",
      "Faculty": "buseco"
    },
    {
      "title": "MBA5510",
      "description": "The strategic environment of business",
      "Faculty": "buseco"
    },
    {
      "title": "MBA5520",
      "description": "Creating sustainable organisations",
      "Faculty": "buseco"
    },
    {
      "title": "MBA5530",
      "description": "Critical thinking for problem solving",
      "Faculty": "buseco"
    },
    {
      "title": "MBA5540",
      "description": "Innovation and entrepreneurship in the digital economy",
      "Faculty": "buseco"
    },
    {
      "title": "MBA5603",
      "description": "Economics for managers",
      "Faculty": "buseco"
    },
    {
      "title": "MBA5604",
      "description": "Financial and management accounting for decision making",
      "Faculty": "buseco"
    },
    {
      "title": "MBA5605",
      "description": "Business finance",
      "Faculty": "buseco"
    },
    {
      "title": "MBA5607",
      "description": "Evidence-based decision making",
      "Faculty": "buseco"
    },
    {
      "title": "MBA5608",
      "description": "Managing people for competitive advantage in Asia",
      "Faculty": "buseco"
    },
    {
      "title": "MBA5615",
      "description": "Entrepreneurial marketing",
      "Faculty": "buseco"
    },
    {
      "title": "MBA5620",
      "description": "Sustainability strategy in contemporary organisation",
      "Faculty": "buseco"
    },
    {
      "title": "MBA5640",
      "description": "The entrepreneurial and innovative organisation",
      "Faculty": "buseco"
    },
    {
      "title": "MBA5701",
      "description": "Negotiation",
      "Faculty": "buseco"
    },
    {
      "title": "MBA5703",
      "description": "Managerial economics",
      "Faculty": "buseco"
    },
    {
      "title": "MBA5704",
      "description": "Accounting",
      "Faculty": "buseco"
    },
    {
      "title": "MBA5705",
      "description": "Business finance",
      "Faculty": "buseco"
    },
    {
      "title": "MBA5706",
      "description": "Business strategy",
      "Faculty": "buseco"
    },
    {
      "title": "MBA5707",
      "description": "Data analysis in business",
      "Faculty": "buseco"
    },
    {
      "title": "MBA5708",
      "description": "Managing people",
      "Faculty": "buseco"
    },
    {
      "title": "MBA5709",
      "description": "The business environment",
      "Faculty": "buseco"
    },
    {
      "title": "MBA5715",
      "description": "Strategic marketing management",
      "Faculty": "buseco"
    },
    {
      "title": "MBA5720",
      "description": "Corporate sustainability",
      "Faculty": "buseco"
    },
    {
      "title": "MBA5721",
      "description": "Experiential learning project",
      "Faculty": "buseco"
    },
    {
      "title": "MBA5722",
      "description": "MBA study tour",
      "Faculty": "buseco"
    },
    {
      "title": "MBA5730",
      "description": "Critical thinking",
      "Faculty": "buseco"
    },
    {
      "title": "MBA5740",
      "description": "Managing innovation",
      "Faculty": "buseco"
    },
    {
      "title": "MBA5903",
      "description": "Business economics",
      "Faculty": "buseco"
    },
    {
      "title": "MBA5904",
      "description": "Interpreting accounting information",
      "Faculty": "buseco"
    },
    {
      "title": "MBA5905",
      "description": "Corporate finance",
      "Faculty": "buseco"
    },
    {
      "title": "MBA5906",
      "description": "Strategic marketing leadership",
      "Faculty": "buseco"
    },
    {
      "title": "MBS3800",
      "description": "Medical bioscience internship",
      "Faculty": "sci"
    },
    {
      "title": "MBS4100",
      "description": "Medical bioscience research project",
      "Faculty": "sci"
    },
    {
      "title": "MBS4280",
      "description": "Honours coursework in medical bioscience",
      "Faculty": "sci"
    },
    {
      "title": "MCB2011",
      "description": "Molecular biology and the cell",
      "Faculty": "sci"
    },
    {
      "title": "MCB2022",
      "description": "The dynamic cell",
      "Faculty": "sci"
    },
    {
      "title": "MCE5100",
      "description": "Introduction to mammalian embryology",
      "Faculty": "med"
    },
    {
      "title": "MCE5101",
      "description": "Infertility and treatment strategies",
      "Faculty": "med"
    },
    {
      "title": "MCE5103",
      "description": "IVF processes: Embryo production and cryopreservation techniques (theory)",
      "Faculty": "med"
    },
    {
      "title": "MCE5112",
      "description": "IVF processes: Embryo production and cryopreservation techniques (practical)",
      "Faculty": "med"
    },
    {
      "title": "MCE5200",
      "description": "Total quality management in assisted reproductive technologies",
      "Faculty": "med"
    },
    {
      "title": "MCE5201",
      "description": "ICSI and research methods",
      "Faculty": "med"
    },
    {
      "title": "MCE5212",
      "description": "Preimplantation genetic diagnosis",
      "Faculty": "med"
    },
    {
      "title": "MCE5213",
      "description": "Regulation and ethics in assisted reproductive technologies",
      "Faculty": "med"
    },
    {
      "title": "MCM5501",
      "description": "Depressive and anxiety disorders in general practice",
      "Faculty": "med"
    },
    {
      "title": "MCM5504",
      "description": "Dermatology",
      "Faculty": "med"
    },
    {
      "title": "MCM5507",
      "description": "Child health",
      "Faculty": "med"
    },
    {
      "title": "MCM5601",
      "description": "Women's sexual and reproductive health in general practice",
      "Faculty": "med"
    },
    {
      "title": "MCM5602",
      "description": "Mindfulness-based stress management",
      "Faculty": "med"
    },
    {
      "title": "MCM5606",
      "description": "Issues in general practice prescribing",
      "Faculty": "med"
    },
    {
      "title": "MDC4000",
      "description": "Design project (Part 1)",
      "Faculty": "ada"
    },
    {
      "title": "MDC4001",
      "description": "Design project (part 1)",
      "Faculty": "ada"
    },
    {
      "title": "MDC4002",
      "description": "Design project (part 2)",
      "Faculty": "ada"
    },
    {
      "title": "MDC4010",
      "description": "Advanced design communication",
      "Faculty": "ada"
    },
    {
      "title": "MDC4100",
      "description": "Design project (part 1)",
      "Faculty": "ada"
    },
    {
      "title": "MDC4110",
      "description": "Interaction design studio 1",
      "Faculty": "ada"
    },
    {
      "title": "MDC4120",
      "description": "Multimedia design studio 1",
      "Faculty": "ada"
    },
    {
      "title": "MDC4130",
      "description": "Collaborative design studio 1",
      "Faculty": "ada"
    },
    {
      "title": "MDC4201",
      "description": "Fundamental interaction design studio 1",
      "Faculty": "ada"
    },
    {
      "title": "MDC4202",
      "description": "Fundamental interaction design studio 2",
      "Faculty": "ada"
    },
    {
      "title": "MDC4215",
      "description": "Interaction design lab 1",
      "Faculty": "ada"
    },
    {
      "title": "MDC4216",
      "description": "Interaction design lab 2",
      "Faculty": "ada"
    },
    {
      "title": "MDC4500",
      "description": "Design fundamentals studio",
      "Faculty": "ada"
    },
    {
      "title": "MDC4550",
      "description": "Design technologies and processes",
      "Faculty": "ada"
    },
    {
      "title": "MDC5000",
      "description": "Major design project",
      "Faculty": "ada"
    },
    {
      "title": "MDC5001",
      "description": "Design project (part three)",
      "Faculty": "ada"
    },
    {
      "title": "MDC5100",
      "description": "Major design project",
      "Faculty": "ada"
    },
    {
      "title": "MDC5201",
      "description": "Fundamental interaction design studio 3",
      "Faculty": "ada"
    },
    {
      "title": "MDC5202",
      "description": "Interaction design research project",
      "Faculty": "ada"
    },
    {
      "title": "MDC5210",
      "description": "Interaction design studio 2",
      "Faculty": "ada"
    },
    {
      "title": "MDC5215",
      "description": "Interaction design lab 3",
      "Faculty": "ada"
    },
    {
      "title": "MDC5220",
      "description": "Multimedia design studio 2",
      "Faculty": "ada"
    },
    {
      "title": "MDC5230",
      "description": "Collaborative design studio 2",
      "Faculty": "ada"
    },
    {
      "title": "MDC5310",
      "description": "Interaction design studio 3",
      "Faculty": "ada"
    },
    {
      "title": "MDC5320",
      "description": "Multimedia design studio 3",
      "Faculty": "ada"
    },
    {
      "title": "MDC5330",
      "description": "Collaborative design studio 3",
      "Faculty": "ada"
    },
    {
      "title": "MDC5340",
      "description": "Advanced studies in design",
      "Faculty": "ada"
    },
    {
      "title": "MDS5022",
      "description": "Design theory workshop",
      "Faculty": "ada"
    },
    {
      "title": "MDS5031",
      "description": "Research methods in design",
      "Faculty": "ada"
    },
    {
      "title": "MEC2401",
      "description": "Dynamics I",
      "Faculty": "eng"
    },
    {
      "title": "MEC2402",
      "description": "Engineering design I",
      "Faculty": "eng"
    },
    {
      "title": "MEC2403",
      "description": "Mechanics of materials",
      "Faculty": "eng"
    },
    {
      "title": "MEC2404",
      "description": "Mechanics of fluids",
      "Faculty": "eng"
    },
    {
      "title": "MEC2405",
      "description": "Thermodynamics",
      "Faculty": "eng"
    },
    {
      "title": "MEC2407",
      "description": "Electromechanics",
      "Faculty": "eng"
    },
    {
      "title": "MEC2456",
      "description": "Engineering computational analysis",
      "Faculty": "eng"
    },
    {
      "title": "MEC3416",
      "description": "Engineering design II",
      "Faculty": "eng"
    },
    {
      "title": "MEC3451",
      "description": "Fluid mechanics II",
      "Faculty": "eng"
    },
    {
      "title": "MEC3453",
      "description": "Dynamics II",
      "Faculty": "eng"
    },
    {
      "title": "MEC3454",
      "description": "Thermodynamics and heat transfer",
      "Faculty": "eng"
    },
    {
      "title": "MEC3455",
      "description": "Solid mechanics",
      "Faculty": "eng"
    },
    {
      "title": "MEC3456",
      "description": "Engineering computational analysis",
      "Faculty": "eng"
    },
    {
      "title": "MEC3457",
      "description": "Systems and control",
      "Faculty": "eng"
    },
    {
      "title": "MEC3458",
      "description": "Experimental project",
      "Faculty": "eng"
    },
    {
      "title": "MEC3459",
      "description": "Materials selection for engineering design",
      "Faculty": "eng"
    },
    {
      "title": "MEC4401",
      "description": "Final year project",
      "Faculty": "eng"
    },
    {
      "title": "MEC4402",
      "description": "Final year project - Thesis",
      "Faculty": "eng"
    },
    {
      "title": "MEC4404",
      "description": "Professional practice",
      "Faculty": "eng"
    },
    {
      "title": "MEC4407",
      "description": "Engineering design III",
      "Faculty": "eng"
    },
    {
      "title": "MEC4416",
      "description": "Momentum, energy & mass transport in engineering systems",
      "Faculty": "eng"
    },
    {
      "title": "MEC4417",
      "description": "Refrigeration and air conditioning",
      "Faculty": "eng"
    },
    {
      "title": "MEC4418",
      "description": "Control systems",
      "Faculty": "eng"
    },
    {
      "title": "MEC4425",
      "description": "Micro/nano solid and fluid mechanics",
      "Faculty": "eng"
    },
    {
      "title": "MEC4426",
      "description": "Computer-aided design",
      "Faculty": "eng"
    },
    {
      "title": "MEC4428",
      "description": "Advanced dynamics",
      "Faculty": "eng"
    },
    {
      "title": "MEC4444",
      "description": "Industrial noise and control",
      "Faculty": "eng"
    },
    {
      "title": "MEC4446",
      "description": "Composite structures",
      "Faculty": "eng"
    },
    {
      "title": "MEC4447",
      "description": "Computers in fluids and energy",
      "Faculty": "eng"
    },
    {
      "title": "MEC4456",
      "description": "Robotics",
      "Faculty": "eng"
    },
    {
      "title": "MEC4459",
      "description": "Wind engineering",
      "Faculty": "eng"
    },
    {
      "title": "MEC4801",
      "description": "Non-destructive testing and inspection",
      "Faculty": "eng"
    },
    {
      "title": "MEC4802",
      "description": "Sustainable engineering and design with nanomaterials",
      "Faculty": "eng"
    },
    {
      "title": "MEC4803",
      "description": "Internal combustion engines",
      "Faculty": "eng"
    },
    {
      "title": "MEC5415",
      "description": "Research Seminar",
      "Faculty": "eng"
    },
    {
      "title": "MEC5881",
      "description": "Engineering systems performance analysis",
      "Faculty": "eng"
    },
    {
      "title": "MEC5882",
      "description": "Instrumentation, sensing and monitoring",
      "Faculty": "eng"
    },
    {
      "title": "MEC5883",
      "description": "Mechanical systems design",
      "Faculty": "eng"
    },
    {
      "title": "MEC5884",
      "description": "Sustainable engineering systems",
      "Faculty": "eng"
    },
    {
      "title": "MEC5885",
      "description": "Energy efficiency and sustainability engineering",
      "Faculty": "eng"
    },
    {
      "title": "MEC5886",
      "description": "Sustainable energy technologies",
      "Faculty": "eng"
    },
    {
      "title": "MEC5887",
      "description": "Environmental and air pollution control",
      "Faculty": "eng"
    },
    {
      "title": "MEC5888",
      "description": "Renewable energy systems",
      "Faculty": "eng"
    },
    {
      "title": "MEC5889",
      "description": "Medical device technologies",
      "Faculty": "eng"
    },
    {
      "title": "MEC6410",
      "description": "Research practices",
      "Faculty": "eng"
    },
    {
      "title": "MEC6881",
      "description": "Engineering systems performance analysis",
      "Faculty": "eng"
    },
    {
      "title": "MEC6882",
      "description": "Instrumentation, sensing and monitoring",
      "Faculty": "eng"
    },
    {
      "title": "MEC6883",
      "description": "Mechanical systems design",
      "Faculty": "eng"
    },
    {
      "title": "MEC6884",
      "description": "Sustainable engineering systems",
      "Faculty": "eng"
    },
    {
      "title": "MEC6885",
      "description": "Energy efficiency and sustainability engineering",
      "Faculty": "eng"
    },
    {
      "title": "MEC6886",
      "description": "Sustainable energy technologies",
      "Faculty": "eng"
    },
    {
      "title": "MEC6887",
      "description": "Environmental and air pollution control",
      "Faculty": "eng"
    },
    {
      "title": "MEC6888",
      "description": "Renewable energy systems",
      "Faculty": "eng"
    },
    {
      "title": "MEC6889",
      "description": "Medical device technologies",
      "Faculty": "eng"
    },
    {
      "title": "MED1011",
      "description": "Medicine 1",
      "Faculty": "med"
    },
    {
      "title": "MED1022",
      "description": "Medicine 2",
      "Faculty": "med"
    },
    {
      "title": "MED2000",
      "description": "Year 1 and 2 final grade",
      "Faculty": "med"
    },
    {
      "title": "MED2031",
      "description": "Medicine 3",
      "Faculty": "med"
    },
    {
      "title": "MED2042",
      "description": "Medicine 4",
      "Faculty": "med"
    },
    {
      "title": "MED3051",
      "description": "Medicine and surgery 1",
      "Faculty": "med"
    },
    {
      "title": "MED3062",
      "description": "Medicine and surgery 2",
      "Faculty": "med"
    },
    {
      "title": "MED3200",
      "description": "Introductory clinical studies",
      "Faculty": "med"
    },
    {
      "title": "MED4000",
      "description": "Year 3B and 4C final grade",
      "Faculty": "med"
    },
    {
      "title": "MED4190",
      "description": "Specialty clinical practices",
      "Faculty": "med"
    },
    {
      "title": "MED4200",
      "description": "Integrated clinical studies",
      "Faculty": "med"
    },
    {
      "title": "MED4301",
      "description": "Medical science honours research skills",
      "Faculty": "med"
    },
    {
      "title": "MED4302",
      "description": "Medical science honours research project",
      "Faculty": "med"
    },
    {
      "title": "MED5091",
      "description": "Advanced clinical practice 1",
      "Faculty": "med"
    },
    {
      "title": "MED5092",
      "description": "Advanced clinical practice 2",
      "Faculty": "med"
    },
    {
      "title": "MED5100",
      "description": "Final MBBS grade",
      "Faculty": "med"
    },
    {
      "title": "MED5102",
      "description": "Contemporary developments in clinical practice: Patient safety",
      "Faculty": "med"
    },
    {
      "title": "MEH5050",
      "description": "Emergency health project",
      "Faculty": "med"
    },
    {
      "title": "MFM5000",
      "description": "Principles of general practice and primary care",
      "Faculty": "med"
    },
    {
      "title": "MFM5001",
      "description": "Masters thesis",
      "Faculty": "med"
    },
    {
      "title": "MFM5004",
      "description": "Chronic disease management",
      "Faculty": "med"
    },
    {
      "title": "MFM5008",
      "description": "Applied research in general practice",
      "Faculty": "med"
    },
    {
      "title": "MFM5009",
      "description": "Prevention in general practice and primary care",
      "Faculty": "med"
    },
    {
      "title": "MGB1010",
      "description": "Introduction to management",
      "Faculty": "buseco"
    },
    {
      "title": "MGB2230",
      "description": "Organisational behaviour",
      "Faculty": "buseco"
    },
    {
      "title": "MGB2430",
      "description": "Human resource management",
      "Faculty": "buseco"
    },
    {
      "title": "MGB3684",
      "description": "Business strategy",
      "Faculty": "buseco"
    },
    {
      "title": "MGC1010",
      "description": "Introduction to management",
      "Faculty": "buseco"
    },
    {
      "title": "MGC2021",
      "description": "Organisations and society",
      "Faculty": "buseco"
    },
    {
      "title": "MGC2120",
      "description": "Managing international business",
      "Faculty": "buseco"
    },
    {
      "title": "MGC2130",
      "description": "Asian management",
      "Faculty": "buseco"
    },
    {
      "title": "MGC2230",
      "description": "Organisational behaviour",
      "Faculty": "buseco"
    },
    {
      "title": "MGC2410",
      "description": "International employment relations",
      "Faculty": "buseco"
    },
    {
      "title": "MGC2420",
      "description": "Employee relations",
      "Faculty": "buseco"
    },
    {
      "title": "MGC2430",
      "description": "Human resource management",
      "Faculty": "buseco"
    },
    {
      "title": "MGC3110",
      "description": "Strategic management",
      "Faculty": "buseco"
    },
    {
      "title": "MGC3120",
      "description": "International management",
      "Faculty": "buseco"
    },
    {
      "title": "MGC3130",
      "description": "The management of change",
      "Faculty": "buseco"
    },
    {
      "title": "MGC3250",
      "description": "Management in small firms",
      "Faculty": "buseco"
    },
    {
      "title": "MGC3450",
      "description": "Managing conflict",
      "Faculty": "buseco"
    },
    {
      "title": "MGC3950",
      "description": "Managing for sustainability",
      "Faculty": "buseco"
    },
    {
      "title": "MGF1010",
      "description": "Introduction to management",
      "Faculty": "buseco"
    },
    {
      "title": "MGF1100",
      "description": "Managerial communication",
      "Faculty": "buseco"
    },
    {
      "title": "MGF2111",
      "description": "Organisational behaviour",
      "Faculty": "buseco"
    },
    {
      "title": "MGF2341",
      "description": "Managing employee relations",
      "Faculty": "buseco"
    },
    {
      "title": "MGF2351",
      "description": "International business",
      "Faculty": "buseco"
    },
    {
      "title": "MGF2511",
      "description": "Managing quality, innovation and knowledge",
      "Faculty": "buseco"
    },
    {
      "title": "MGF2656",
      "description": "HRM and managing global workforces",
      "Faculty": "buseco"
    },
    {
      "title": "MGF2661",
      "description": "Human resource management",
      "Faculty": "buseco"
    },
    {
      "title": "MGF3361",
      "description": "Workplace learning and performance management",
      "Faculty": "buseco"
    },
    {
      "title": "MGF3381",
      "description": "Managing information systems",
      "Faculty": "buseco"
    },
    {
      "title": "MGF3420",
      "description": "Human resource development",
      "Faculty": "buseco"
    },
    {
      "title": "MGF3450",
      "description": "Managing conflict",
      "Faculty": "buseco"
    },
    {
      "title": "MGF3621",
      "description": "Organisational change",
      "Faculty": "buseco"
    },
    {
      "title": "MGF3681",
      "description": "International management",
      "Faculty": "buseco"
    },
    {
      "title": "MGF3684",
      "description": "Business strategy",
      "Faculty": "buseco"
    },
    {
      "title": "MGF5011",
      "description": "Commercialisation",
      "Faculty": "buseco"
    },
    {
      "title": "MGF5020",
      "description": "Business ethics in a global environment",
      "Faculty": "buseco"
    },
    {
      "title": "MGF5030",
      "description": "Corporate social responsibility",
      "Faculty": "buseco"
    },
    {
      "title": "MGF5130",
      "description": "Managing diversity and inclusion",
      "Faculty": "buseco"
    },
    {
      "title": "MGF5171",
      "description": "Managing the multinational enterprise: cases and issues",
      "Faculty": "buseco"
    },
    {
      "title": "MGF5181",
      "description": "International business strategy",
      "Faculty": "buseco"
    },
    {
      "title": "MGF5220",
      "description": "Managing work, family and life",
      "Faculty": "buseco"
    },
    {
      "title": "MGF5261",
      "description": "Human resource management issues",
      "Faculty": "buseco"
    },
    {
      "title": "MGF5300",
      "description": "Governance",
      "Faculty": "buseco"
    },
    {
      "title": "MGF5310",
      "description": "International management",
      "Faculty": "buseco"
    },
    {
      "title": "MGF5360",
      "description": "Strategic management in the public sector",
      "Faculty": "buseco"
    },
    {
      "title": "MGF5370",
      "description": "Policy analysis",
      "Faculty": "buseco"
    },
    {
      "title": "MGF5440",
      "description": "Public sector financial management",
      "Faculty": "buseco"
    },
    {
      "title": "MGF5470",
      "description": "International manufacturing",
      "Faculty": "buseco"
    },
    {
      "title": "MGF5551",
      "description": "Strategic human resource management",
      "Faculty": "buseco"
    },
    {
      "title": "MGF5600",
      "description": "Managing innovation",
      "Faculty": "buseco"
    },
    {
      "title": "MGF5610",
      "description": "People management and work in a global context",
      "Faculty": "buseco"
    },
    {
      "title": "MGF5611",
      "description": "Advanced supply chain management",
      "Faculty": "buseco"
    },
    {
      "title": "MGF5630",
      "description": "Principles of negotiation",
      "Faculty": "buseco"
    },
    {
      "title": "MGF5631",
      "description": "International human resource management",
      "Faculty": "buseco"
    },
    {
      "title": "MGF5640",
      "description": "Cross-cultural management communication",
      "Faculty": "buseco"
    },
    {
      "title": "MGF5670",
      "description": "Leadership",
      "Faculty": "buseco"
    },
    {
      "title": "MGF5680",
      "description": "Managerial problem solving and decision making",
      "Faculty": "buseco"
    },
    {
      "title": "MGF5690",
      "description": "Services and operations management",
      "Faculty": "buseco"
    },
    {
      "title": "MGF5691",
      "description": "Sustainable operations and supply chain management",
      "Faculty": "buseco"
    },
    {
      "title": "MGF5701",
      "description": "Designing business processes",
      "Faculty": "buseco"
    },
    {
      "title": "MGF5702",
      "description": "People management and strategy",
      "Faculty": "buseco"
    },
    {
      "title": "MGF5710",
      "description": "Governance of market societies",
      "Faculty": "buseco"
    },
    {
      "title": "MGF5722",
      "description": "Emerging economies in a globalising world",
      "Faculty": "buseco"
    },
    {
      "title": "MGF5730",
      "description": "International trade policy",
      "Faculty": "buseco"
    },
    {
      "title": "MGF5760",
      "description": "International institutions and organisations",
      "Faculty": "buseco"
    },
    {
      "title": "MGF5911",
      "description": "Diplomacy and statecraft",
      "Faculty": "buseco"
    },
    {
      "title": "MGF5920",
      "description": "Work and employment relations",
      "Faculty": "buseco"
    },
    {
      "title": "MGF5921",
      "description": "Foundations in human resource management",
      "Faculty": "buseco"
    },
    {
      "title": "MGF5923",
      "description": "Public policy",
      "Faculty": "buseco"
    },
    {
      "title": "MGF5927",
      "description": "Public management",
      "Faculty": "buseco"
    },
    {
      "title": "MGF5928",
      "description": "Leadership theory and practice",
      "Faculty": "buseco"
    },
    {
      "title": "MGF5960",
      "description": "Managing people and organisations",
      "Faculty": "buseco"
    },
    {
      "title": "MGF5961",
      "description": "Supply chain management",
      "Faculty": "buseco"
    },
    {
      "title": "MGF5962",
      "description": "Principles of management",
      "Faculty": "buseco"
    },
    {
      "title": "MGF5963",
      "description": "Introduction to management",
      "Faculty": "buseco"
    },
    {
      "title": "MGF5966",
      "description": "International business theory and practice",
      "Faculty": "buseco"
    },
    {
      "title": "MGF5972",
      "description": "Managing organisational change",
      "Faculty": "buseco"
    },
    {
      "title": "MGF5976",
      "description": "Strategic management",
      "Faculty": "buseco"
    },
    {
      "title": "MGF5985",
      "description": "Human resource management",
      "Faculty": "buseco"
    },
    {
      "title": "MGF5991",
      "description": "Professional development - career dynamics",
      "Faculty": "buseco"
    },
    {
      "title": "MGF5992",
      "description": "Professional development - Self and relationships",
      "Faculty": "buseco"
    },
    {
      "title": "MGG2230",
      "description": "Organisational behaviour",
      "Faculty": "buseco"
    },
    {
      "title": "MGG2322",
      "description": "Recruitment and selection",
      "Faculty": "buseco"
    },
    {
      "title": "MGG2323",
      "description": "Employment relations",
      "Faculty": "buseco"
    },
    {
      "title": "MGG2351",
      "description": "International business",
      "Faculty": "buseco"
    },
    {
      "title": "MGG2430",
      "description": "Human resource management",
      "Faculty": "buseco"
    },
    {
      "title": "MGG2700",
      "description": "Project management for small to medium enterprises",
      "Faculty": "buseco"
    },
    {
      "title": "MGG3130",
      "description": "Organisational change and development",
      "Faculty": "buseco"
    },
    {
      "title": "MGG3352",
      "description": "Service operations management",
      "Faculty": "buseco"
    },
    {
      "title": "MGG3401",
      "description": "Strategic management",
      "Faculty": "buseco"
    },
    {
      "title": "MGG3430",
      "description": "International human resource management",
      "Faculty": "buseco"
    },
    {
      "title": "MGG3681",
      "description": "International management",
      "Faculty": "buseco"
    },
    {
      "title": "MGM5181",
      "description": "International business strategy",
      "Faculty": "buseco"
    },
    {
      "title": "MGM5310",
      "description": "International management",
      "Faculty": "buseco"
    },
    {
      "title": "MGM5640",
      "description": "Cross-cultural management communication",
      "Faculty": "buseco"
    },
    {
      "title": "MGM5966",
      "description": "International business theory and practice",
      "Faculty": "buseco"
    },
    {
      "title": "MGP1010",
      "description": "Introduction to management",
      "Faculty": "buseco"
    },
    {
      "title": "MGP2200",
      "description": "Festivals and events",
      "Faculty": "buseco"
    },
    {
      "title": "MGP2279",
      "description": "Inclusive management",
      "Faculty": "buseco"
    },
    {
      "title": "MGP2501",
      "description": "Introduction to tourism",
      "Faculty": "buseco"
    },
    {
      "title": "MGP3113",
      "description": "Organisation governance and ethics",
      "Faculty": "buseco"
    },
    {
      "title": "MGP3249",
      "description": "Project and innovation management",
      "Faculty": "buseco"
    },
    {
      "title": "MGP3684",
      "description": "Business strategy",
      "Faculty": "buseco"
    },
    {
      "title": "MGS1010",
      "description": "Introduction to management",
      "Faculty": "buseco"
    },
    {
      "title": "MGS1100",
      "description": "Managerial communication",
      "Faculty": "buseco"
    },
    {
      "title": "MGS2230",
      "description": "Organisational behaviour",
      "Faculty": "buseco"
    },
    {
      "title": "MGS2351",
      "description": "International business",
      "Faculty": "buseco"
    },
    {
      "title": "MGS2430",
      "description": "Human resource management",
      "Faculty": "buseco"
    },
    {
      "title": "MGS3130",
      "description": "Organisational change and development",
      "Faculty": "buseco"
    },
    {
      "title": "MGS3210",
      "description": "Organisational wellness",
      "Faculty": "buseco"
    },
    {
      "title": "MGS3401",
      "description": "Strategic management",
      "Faculty": "buseco"
    },
    {
      "title": "MGS3650",
      "description": "Integrated business management simulation",
      "Faculty": "buseco"
    },
    {
      "title": "MGS3651",
      "description": "Entrepreneurship",
      "Faculty": "buseco"
    },
    {
      "title": "MGS3991",
      "description": "Leadership principles and practices",
      "Faculty": "buseco"
    },
    {
      "title": "MGS5000",
      "description": "Introductory management research methods",
      "Faculty": "buseco"
    },
    {
      "title": "MGS5181",
      "description": "International business strategy",
      "Faculty": "buseco"
    },
    {
      "title": "MGS5310",
      "description": "International management",
      "Faculty": "buseco"
    },
    {
      "title": "MGS5640",
      "description": "Cross-cultural management communication",
      "Faculty": "buseco"
    },
    {
      "title": "MGS5900",
      "description": "Research report",
      "Faculty": "buseco"
    },
    {
      "title": "MGS5901",
      "description": "Research report: An introduction",
      "Faculty": "buseco"
    },
    {
      "title": "MGS5966",
      "description": "International business theory and practice",
      "Faculty": "buseco"
    },
    {
      "title": "MGW1010",
      "description": "Introduction to management",
      "Faculty": "buseco"
    },
    {
      "title": "MGW1100",
      "description": "Managerial communication",
      "Faculty": "buseco"
    },
    {
      "title": "MGW1232",
      "description": "Introduction to Islamic business",
      "Faculty": "buseco"
    },
    {
      "title": "MGW2230",
      "description": "Organisational behaviour",
      "Faculty": "buseco"
    },
    {
      "title": "MGW2351",
      "description": "International business",
      "Faculty": "buseco"
    },
    {
      "title": "MGW2430",
      "description": "Human resource management",
      "Faculty": "buseco"
    },
    {
      "title": "MGW2991",
      "description": "Leadership in Asia",
      "Faculty": "buseco"
    },
    {
      "title": "MGW3130",
      "description": "Organisational change and development",
      "Faculty": "buseco"
    },
    {
      "title": "MGW3210",
      "description": "Organisational wellness",
      "Faculty": "buseco"
    },
    {
      "title": "MGW3234",
      "description": "Social entrepreneurship",
      "Faculty": "buseco"
    },
    {
      "title": "MGW3381",
      "description": "Management information systems",
      "Faculty": "buseco"
    },
    {
      "title": "MGW3401",
      "description": "Strategic management",
      "Faculty": "buseco"
    },
    {
      "title": "MGW3681",
      "description": "International management",
      "Faculty": "buseco"
    },
    {
      "title": "MGX2200",
      "description": "Introduction to events",
      "Faculty": "buseco"
    },
    {
      "title": "MGX2501",
      "description": "Introduction to tourism",
      "Faculty": "buseco"
    },
    {
      "title": "MGX2700",
      "description": "Project management for small to medium enterprises",
      "Faculty": "buseco"
    },
    {
      "title": "MGX3100",
      "description": "Corporate social responsibility and business ethics",
      "Faculty": "buseco"
    },
    {
      "title": "MGX3121",
      "description": "International business strategy",
      "Faculty": "buseco"
    },
    {
      "title": "MGX3441",
      "description": "Human resource strategy",
      "Faculty": "buseco"
    },
    {
      "title": "MGX3650",
      "description": "Integrated business management simulation",
      "Faculty": "buseco"
    },
    {
      "title": "MGX3651",
      "description": "Entrepreneurship",
      "Faculty": "buseco"
    },
    {
      "title": "MGX3771",
      "description": "Operations management",
      "Faculty": "buseco"
    },
    {
      "title": "MGX3991",
      "description": "Leadership principles and practices",
      "Faculty": "buseco"
    },
    {
      "title": "MGX4000",
      "description": "Introductory management research methods",
      "Faculty": "buseco"
    },
    {
      "title": "MGX4100",
      "description": "Perspectives and paradigms in management theory",
      "Faculty": "buseco"
    },
    {
      "title": "MGX4200",
      "description": "Data analysis for organisational research",
      "Faculty": "buseco"
    },
    {
      "title": "MGX4300",
      "description": "Contemporary issues in management",
      "Faculty": "buseco"
    },
    {
      "title": "MGX4400",
      "description": "Honours research thesis",
      "Faculty": "buseco"
    },
    {
      "title": "MGX5000",
      "description": "Introductory management research methods",
      "Faculty": "buseco"
    },
    {
      "title": "MGX5020",
      "description": "Business ethics in a global environment",
      "Faculty": "buseco"
    },
    {
      "title": "MGX5030",
      "description": "Corporate social responsibility",
      "Faculty": "buseco"
    },
    {
      "title": "MGX5120",
      "description": "Contemporary Asia",
      "Faculty": "buseco"
    },
    {
      "title": "MGX5130",
      "description": "Managing diversity and inclusion",
      "Faculty": "buseco"
    },
    {
      "title": "MGX5300",
      "description": "Governance",
      "Faculty": "buseco"
    },
    {
      "title": "MGX5340",
      "description": "International public policy and management",
      "Faculty": "buseco"
    },
    {
      "title": "MGX5360",
      "description": "Strategic management in the public sector",
      "Faculty": "buseco"
    },
    {
      "title": "MGX5370",
      "description": "Policy analysis",
      "Faculty": "buseco"
    },
    {
      "title": "MGX5440",
      "description": "Public sector financial management",
      "Faculty": "buseco"
    },
    {
      "title": "MGX5461",
      "description": "Contemporary issues in globalisation",
      "Faculty": "buseco"
    },
    {
      "title": "MGX5470",
      "description": "International manufacturing",
      "Faculty": "buseco"
    },
    {
      "title": "MGX5600",
      "description": "Managing innovation",
      "Faculty": "buseco"
    },
    {
      "title": "MGX5610",
      "description": "Work and employment relations in a global context",
      "Faculty": "buseco"
    },
    {
      "title": "MGX5630",
      "description": "Principles of negotiation",
      "Faculty": "buseco"
    },
    {
      "title": "MGX5730",
      "description": "International trade policy",
      "Faculty": "buseco"
    },
    {
      "title": "MGX5870",
      "description": "Organisational and business dynamics",
      "Faculty": "buseco"
    },
    {
      "title": "MGX5890",
      "description": "International study program in international business",
      "Faculty": "buseco"
    },
    {
      "title": "MGX5900",
      "description": "Research report",
      "Faculty": "buseco"
    },
    {
      "title": "MGX5901",
      "description": "Research report (introduction)",
      "Faculty": "buseco"
    },
    {
      "title": "MGZ5181",
      "description": "International business strategy and cases",
      "Faculty": "buseco"
    },
    {
      "title": "MGZ5640",
      "description": "Cross cultural management communication",
      "Faculty": "buseco"
    },
    {
      "title": "MGZ5750",
      "description": "The governance of international trade",
      "Faculty": "buseco"
    },
    {
      "title": "MGZ5966",
      "description": "International business theory and practice",
      "Faculty": "buseco"
    },
    {
      "title": "MIC2011",
      "description": "Introduction to microbiology and microbial biotechnology",
      "Faculty": "sci"
    },
    {
      "title": "MIC2022",
      "description": "Microbes in health and disease",
      "Faculty": "sci"
    },
    {
      "title": "MIC3011",
      "description": "Molecular microbiology",
      "Faculty": "sci"
    },
    {
      "title": "MIC3022",
      "description": "Molecular virology and viral pathogenesis",
      "Faculty": "sci"
    },
    {
      "title": "MIC3032",
      "description": "Pathogenesis of bacterial infectious diseases",
      "Faculty": "sci"
    },
    {
      "title": "MIC3041",
      "description": "Medical microbiology",
      "Faculty": "sci"
    },
    {
      "title": "MIC3990",
      "description": "Action in microbiology research project",
      "Faculty": "sci"
    },
    {
      "title": "MID1000",
      "description": "Introduction to Midwifery",
      "Faculty": "med"
    },
    {
      "title": "MID1002",
      "description": "Making practice connections",
      "Faculty": "med"
    },
    {
      "title": "MID1003",
      "description": "The childbearing journey",
      "Faculty": "med"
    },
    {
      "title": "MID2000",
      "description": "Foundations for midwifery practice",
      "Faculty": "med"
    },
    {
      "title": "MID2010",
      "description": "Working with birthing women",
      "Faculty": "med"
    },
    {
      "title": "MID2110",
      "description": "Complementary therapies: An evidence based approach",
      "Faculty": "med"
    },
    {
      "title": "MID3000",
      "description": "Theory and practice of complex midwifery",
      "Faculty": "med"
    },
    {
      "title": "MID3103",
      "description": "Childbearing obstacles",
      "Faculty": "med"
    },
    {
      "title": "MID3104",
      "description": "Navigating childbearing challenges",
      "Faculty": "med"
    },
    {
      "title": "MID3105",
      "description": "Women's health: Women's business",
      "Faculty": "med"
    },
    {
      "title": "MID3110",
      "description": "Professional midwifery practice",
      "Faculty": "med"
    },
    {
      "title": "MID3201",
      "description": "Midwifery practice elective",
      "Faculty": "med"
    },
    {
      "title": "MID3202",
      "description": "Supporting the newborn infant",
      "Faculty": "med"
    },
    {
      "title": "MID4001",
      "description": "Preparation for practice (midwifery)",
      "Faculty": "med"
    },
    {
      "title": "MID5001",
      "description": "Woman midwife partnerships and normal childbearing",
      "Faculty": "med"
    },
    {
      "title": "MID5002",
      "description": "Woman midwife partnerships and complex childbearing",
      "Faculty": "med"
    },
    {
      "title": "MID5003",
      "description": "Midwifery and maternity in context",
      "Faculty": "med"
    },
    {
      "title": "MID5004",
      "description": "Becoming a midwife",
      "Faculty": "med"
    },
    {
      "title": "MID5005",
      "description": "Advancing midwifery practice",
      "Faculty": "med"
    },
    {
      "title": "MID5006",
      "description": "Public and primary health care in midwifery",
      "Faculty": "med"
    },
    {
      "title": "MID5007",
      "description": "Contextual and professional issues in midwifery",
      "Faculty": "med"
    },
    {
      "title": "MIMR5001",
      "description": "Master of biomedical science (Part 1): Monash Institute of Medical Research PT",
      "Faculty": "med"
    },
    {
      "title": "MIS4100",
      "description": "Regenerative medicine research project",
      "Faculty": "sci"
    },
    {
      "title": "MIS4200",
      "description": "Advanced studies in regenerative medicine",
      "Faculty": "sci"
    },
    {
      "title": "MKB1200",
      "description": "Principles of marketing",
      "Faculty": "buseco"
    },
    {
      "title": "MKB2402",
      "description": "Consumer behaviour",
      "Faculty": "buseco"
    },
    {
      "title": "MKB2420",
      "description": "Marketing research methods",
      "Faculty": "buseco"
    },
    {
      "title": "MKB2500",
      "description": "Retail management principles",
      "Faculty": "buseco"
    },
    {
      "title": "MKB2521",
      "description": "Brand management",
      "Faculty": "buseco"
    },
    {
      "title": "MKB2600",
      "description": "Tourism marketing",
      "Faculty": "buseco"
    },
    {
      "title": "MKB3301",
      "description": "Services Marketing",
      "Faculty": "buseco"
    },
    {
      "title": "MKB3461",
      "description": "Marketing communication",
      "Faculty": "buseco"
    },
    {
      "title": "MKB3531",
      "description": "International marketing",
      "Faculty": "buseco"
    },
    {
      "title": "MKB3881",
      "description": "Digital marketing",
      "Faculty": "buseco"
    },
    {
      "title": "MKC1200",
      "description": "Principles of marketing",
      "Faculty": "buseco"
    },
    {
      "title": "MKC2110",
      "description": "Buyer behaviour in marketing",
      "Faculty": "buseco"
    },
    {
      "title": "MKC2130",
      "description": "Marketing decision analysis",
      "Faculty": "buseco"
    },
    {
      "title": "MKC2500",
      "description": "Marketing research analysis",
      "Faculty": "buseco"
    },
    {
      "title": "MKC2610",
      "description": "Strategic retailing in the global market",
      "Faculty": "buseco"
    },
    {
      "title": "MKC3110",
      "description": "Market analysis and strategy development",
      "Faculty": "buseco"
    },
    {
      "title": "MKC3130",
      "description": "Strategic issues in marketing",
      "Faculty": "buseco"
    },
    {
      "title": "MKC3140",
      "description": "Marketing strategy implementation",
      "Faculty": "buseco"
    },
    {
      "title": "MKC3220",
      "description": "International marketing",
      "Faculty": "buseco"
    },
    {
      "title": "MKC3300",
      "description": "Marketing law",
      "Faculty": "buseco"
    },
    {
      "title": "MKC3460",
      "description": "Integrated marketing communication",
      "Faculty": "buseco"
    },
    {
      "title": "MKC3500",
      "description": "Survey data analysis",
      "Faculty": "buseco"
    },
    {
      "title": "MKF1120",
      "description": "Marketing theory and practice",
      "Faculty": "buseco"
    },
    {
      "title": "MKF2111",
      "description": "Buyer behaviour",
      "Faculty": "buseco"
    },
    {
      "title": "MKF2121",
      "description": "Marketing research methods",
      "Faculty": "buseco"
    },
    {
      "title": "MKF2131",
      "description": "Marketing decision analysis",
      "Faculty": "buseco"
    },
    {
      "title": "MKF2401",
      "description": "Marketing issues in packaging design",
      "Faculty": "buseco"
    },
    {
      "title": "MKF2521",
      "description": "Brand management",
      "Faculty": "buseco"
    },
    {
      "title": "MKF2540",
      "description": "Retail management principles",
      "Faculty": "buseco"
    },
    {
      "title": "MKF2801",
      "description": "Marketing insights",
      "Faculty": "buseco"
    },
    {
      "title": "MKF3001",
      "description": "Special studies unit",
      "Faculty": "buseco"
    },
    {
      "title": "MKF3121",
      "description": "Marketing planning and implementation",
      "Faculty": "buseco"
    },
    {
      "title": "MKF3131",
      "description": "Strategic marketing",
      "Faculty": "buseco"
    },
    {
      "title": "MKF3141",
      "description": "Issues in competitive advantage",
      "Faculty": "buseco"
    },
    {
      "title": "MKF3151",
      "description": "Marketing planning and strategy",
      "Faculty": "buseco"
    },
    {
      "title": "MKF3301",
      "description": "Services marketing",
      "Faculty": "buseco"
    },
    {
      "title": "MKF3461",
      "description": "Marketing communication",
      "Faculty": "buseco"
    },
    {
      "title": "MKF3471",
      "description": "Sales management and negotiation",
      "Faculty": "buseco"
    },
    {
      "title": "MKF3500",
      "description": "Survey data analysis",
      "Faculty": "buseco"
    },
    {
      "title": "MKF3531",
      "description": "International marketing",
      "Faculty": "buseco"
    },
    {
      "title": "MKF3621",
      "description": "Advertising management and campaigns",
      "Faculty": "buseco"
    },
    {
      "title": "MKF3710",
      "description": "Specialised applications in marketing",
      "Faculty": "buseco"
    },
    {
      "title": "MKF3881",
      "description": "Digital marketing",
      "Faculty": "buseco"
    },
    {
      "title": "MKF5150",
      "description": "Major project",
      "Faculty": "buseco"
    },
    {
      "title": "MKF5200",
      "description": "Assessing marketing performance",
      "Faculty": "buseco"
    },
    {
      "title": "MKF5231",
      "description": "Strategic brand management",
      "Faculty": "buseco"
    },
    {
      "title": "MKF5241",
      "description": "Sport marketing and sponsorship",
      "Faculty": "buseco"
    },
    {
      "title": "MKF5251",
      "description": "Case studies in marketing strategy",
      "Faculty": "buseco"
    },
    {
      "title": "MKF5280",
      "description": "Sustainable marketing",
      "Faculty": "buseco"
    },
    {
      "title": "MKF5301",
      "description": "Minor thesis",
      "Faculty": "buseco"
    },
    {
      "title": "MKF5351",
      "description": "Marketing strategy masterclass",
      "Faculty": "buseco"
    },
    {
      "title": "MKF5371",
      "description": "Business to business marketing",
      "Faculty": "buseco"
    },
    {
      "title": "MKF5391",
      "description": "Sales management",
      "Faculty": "buseco"
    },
    {
      "title": "MKF5403",
      "description": "Advanced business research methods",
      "Faculty": "buseco"
    },
    {
      "title": "MKF5461",
      "description": "Contemporary issues in marketing",
      "Faculty": "buseco"
    },
    {
      "title": "MKF5463",
      "description": "Advanced buyer behaviour",
      "Faculty": "buseco"
    },
    {
      "title": "MKF5500",
      "description": "Survey data analysis",
      "Faculty": "buseco"
    },
    {
      "title": "MKF5505",
      "description": "Marketing for healthcare managers",
      "Faculty": "buseco"
    },
    {
      "title": "MKF5561",
      "description": "E-marketing",
      "Faculty": "buseco"
    },
    {
      "title": "MKF5601",
      "description": "Social media marketing",
      "Faculty": "buseco"
    },
    {
      "title": "MKF5630",
      "description": "Services marketing",
      "Faculty": "buseco"
    },
    {
      "title": "MKF5641",
      "description": "Advanced marketing communication",
      "Faculty": "buseco"
    },
    {
      "title": "MKF5660",
      "description": "Relationship marketing",
      "Faculty": "buseco"
    },
    {
      "title": "MKF5741",
      "description": "Marketing performance and decision analysis",
      "Faculty": "buseco"
    },
    {
      "title": "MKF5760",
      "description": "Marketing leadership in society",
      "Faculty": "buseco"
    },
    {
      "title": "MKF5761",
      "description": "Managing supply networks",
      "Faculty": "buseco"
    },
    {
      "title": "MKF5801",
      "description": "Customer focused innovation",
      "Faculty": "buseco"
    },
    {
      "title": "MKF5911",
      "description": "Theory and process of buyer behaviour",
      "Faculty": "buseco"
    },
    {
      "title": "MKF5912",
      "description": "Marketing research",
      "Faculty": "buseco"
    },
    {
      "title": "MKF5916",
      "description": "Foundations of marketing",
      "Faculty": "buseco"
    },
    {
      "title": "MKF5917",
      "description": "Understanding marketing and consumers",
      "Faculty": "buseco"
    },
    {
      "title": "MKF5926",
      "description": "Integrated marketing communication",
      "Faculty": "buseco"
    },
    {
      "title": "MKF5970",
      "description": "Direct marketing",
      "Faculty": "buseco"
    },
    {
      "title": "MKF5979",
      "description": "Marketing financial services",
      "Faculty": "buseco"
    },
    {
      "title": "MKF5981",
      "description": "Retailing",
      "Faculty": "buseco"
    },
    {
      "title": "MKG2402",
      "description": "Consumer behaviour",
      "Faculty": "buseco"
    },
    {
      "title": "MKG2420",
      "description": "Marketing research methods",
      "Faculty": "buseco"
    },
    {
      "title": "MKG2460",
      "description": "Integrated marketing communication",
      "Faculty": "buseco"
    },
    {
      "title": "MKG3121",
      "description": "Marketing planning and implementation",
      "Faculty": "buseco"
    },
    {
      "title": "MKG3440",
      "description": "Marketing strategy",
      "Faculty": "buseco"
    },
    {
      "title": "MKG3442",
      "description": "Sales management",
      "Faculty": "buseco"
    },
    {
      "title": "MKG3444",
      "description": "International marketing",
      "Faculty": "buseco"
    },
    {
      "title": "MKM5211",
      "description": "Applied business project",
      "Faculty": "buseco"
    },
    {
      "title": "MKM5955",
      "description": "Marketing and the international consumer",
      "Faculty": "buseco"
    },
    {
      "title": "MKP1120",
      "description": "Marketing theory and practice",
      "Faculty": "buseco"
    },
    {
      "title": "MKP2600",
      "description": "Tourism marketing",
      "Faculty": "buseco"
    },
    {
      "title": "MKP2701",
      "description": "Consumer psychology",
      "Faculty": "buseco"
    },
    {
      "title": "MKP2702",
      "description": "Stakeholder marketing communication",
      "Faculty": "buseco"
    },
    {
      "title": "MKP2720",
      "description": "Research methods and analysis",
      "Faculty": "buseco"
    },
    {
      "title": "MKP3200",
      "description": "Sports marketing and sponsorship",
      "Faculty": "buseco"
    },
    {
      "title": "MKP3800",
      "description": "Social marketing",
      "Faculty": "buseco"
    },
    {
      "title": "MKS1120",
      "description": "Marketing theory and practice",
      "Faculty": "buseco"
    },
    {
      "title": "MKS2402",
      "description": "Consumer behaviour",
      "Faculty": "buseco"
    },
    {
      "title": "MKS2420",
      "description": "Marketing research methods",
      "Faculty": "buseco"
    },
    {
      "title": "MKS2431",
      "description": "Business marketing",
      "Faculty": "buseco"
    },
    {
      "title": "MKS2460",
      "description": "Integrated marketing communication",
      "Faculty": "buseco"
    },
    {
      "title": "MKS3121",
      "description": "Marketing planning and implementation",
      "Faculty": "buseco"
    },
    {
      "title": "MKS3440",
      "description": "Marketing strategy",
      "Faculty": "buseco"
    },
    {
      "title": "MKS3444",
      "description": "International marketing",
      "Faculty": "buseco"
    },
    {
      "title": "MKS3631",
      "description": "Marketing internship",
      "Faculty": "buseco"
    },
    {
      "title": "MKS3881",
      "description": "Electronic marketing",
      "Faculty": "buseco"
    },
    {
      "title": "MKS5955",
      "description": "Marketing and the international consumer",
      "Faculty": "buseco"
    },
    {
      "title": "MKW1120",
      "description": "Marketing theory and practice",
      "Faculty": "buseco"
    },
    {
      "title": "MKW1300",
      "description": "Introduction to social commerce",
      "Faculty": "buseco"
    },
    {
      "title": "MKW1601",
      "description": "Introduction to e-business",
      "Faculty": "buseco"
    },
    {
      "title": "MKW2402",
      "description": "Consumer behaviour",
      "Faculty": "buseco"
    },
    {
      "title": "MKW2420",
      "description": "Marketing research methods",
      "Faculty": "buseco"
    },
    {
      "title": "MKW2431",
      "description": "Business marketing",
      "Faculty": "buseco"
    },
    {
      "title": "MKW2460",
      "description": "Integrated marketing communication",
      "Faculty": "buseco"
    },
    {
      "title": "MKW3121",
      "description": "Marketing planning and implementation",
      "Faculty": "buseco"
    },
    {
      "title": "MKW3301",
      "description": "Services marketing",
      "Faculty": "buseco"
    },
    {
      "title": "MKW3440",
      "description": "Marketing strategy",
      "Faculty": "buseco"
    },
    {
      "title": "MKW3444",
      "description": "International marketing",
      "Faculty": "buseco"
    },
    {
      "title": "MKW3510",
      "description": "Islamic marketing",
      "Faculty": "buseco"
    },
    {
      "title": "MKW3610",
      "description": "Marketing strategy and implementation",
      "Faculty": "buseco"
    },
    {
      "title": "MKW3701",
      "description": "Neuroscience of decision-making: An introduction",
      "Faculty": "buseco"
    },
    {
      "title": "MKW3841",
      "description": "E-business performance measurement",
      "Faculty": "buseco"
    },
    {
      "title": "MKW3881",
      "description": "Electronic marketing",
      "Faculty": "buseco"
    },
    {
      "title": "MKX1500",
      "description": "Retail management principles",
      "Faculty": "buseco"
    },
    {
      "title": "MKX2531",
      "description": "Not for profit marketing",
      "Faculty": "buseco"
    },
    {
      "title": "MKX3002",
      "description": "Enhanced research skills",
      "Faculty": "buseco"
    },
    {
      "title": "MKX3200",
      "description": "Sport marketing and sponsorship",
      "Faculty": "buseco"
    },
    {
      "title": "MKX3481",
      "description": "Marketing channels",
      "Faculty": "buseco"
    },
    {
      "title": "MKX3521",
      "description": "Global study programs in marketing",
      "Faculty": "buseco"
    },
    {
      "title": "MKX3631",
      "description": "Marketing internship",
      "Faculty": "buseco"
    },
    {
      "title": "MKX4050",
      "description": "Marketing theory",
      "Faculty": "buseco"
    },
    {
      "title": "MKX4060",
      "description": "Marketing research practice",
      "Faculty": "buseco"
    },
    {
      "title": "MKX4070",
      "description": "Qualitative research methods",
      "Faculty": "buseco"
    },
    {
      "title": "MKX4080",
      "description": "Advanced business research methods",
      "Faculty": "buseco"
    },
    {
      "title": "MKX4461",
      "description": "Contemporary issues in marketing",
      "Faculty": "buseco"
    },
    {
      "title": "MKX4900",
      "description": "Honours research thesis",
      "Faculty": "buseco"
    },
    {
      "title": "MKX5123",
      "description": "Entrepreneurial innovation",
      "Faculty": "buseco"
    },
    {
      "title": "MKX5260",
      "description": "International marketing",
      "Faculty": "buseco"
    },
    {
      "title": "MKX5521",
      "description": "Global study programs in marketing",
      "Faculty": "buseco"
    },
    {
      "title": "MKX5931",
      "description": "International dimensions of electronic business",
      "Faculty": "buseco"
    },
    {
      "title": "MKX5955",
      "description": "Marketing and the international consumer",
      "Faculty": "buseco"
    },
    {
      "title": "MKZ5955",
      "description": "Marketing and the international consumer",
      "Faculty": "buseco"
    },
    {
      "title": "MMD1302",
      "description": "Multimedia & digital arts studio A",
      "Faculty": "ada"
    },
    {
      "title": "MMD2303",
      "description": "Multimedia and digital arts studio B",
      "Faculty": "ada"
    },
    {
      "title": "MMD2304",
      "description": "Multimedia and digital arts studio C",
      "Faculty": "ada"
    },
    {
      "title": "MMD2306",
      "description": "Graphic user interface design",
      "Faculty": "ada"
    },
    {
      "title": "MMD3305",
      "description": "Multimedia studio 5A",
      "Faculty": "ada"
    },
    {
      "title": "MMD3306",
      "description": "Multimedia studio 6A",
      "Faculty": "ada"
    },
    {
      "title": "MMD3307",
      "description": "Digital arts studio 5A",
      "Faculty": "ada"
    },
    {
      "title": "MMD3308",
      "description": "Digital arts studio 6A",
      "Faculty": "ada"
    },
    {
      "title": "MMD3713",
      "description": "Game design",
      "Faculty": "ada"
    },
    {
      "title": "MMD4001",
      "description": "Multimedia design studio 1",
      "Faculty": "ada"
    },
    {
      "title": "MMD4107",
      "description": "Major Project (Multimedia & Digital Arts) Part 1",
      "Faculty": "ada"
    },
    {
      "title": "MMD4108",
      "description": "Major Project (Multimedia & Digital Arts) Part 2",
      "Faculty": "ada"
    },
    {
      "title": "MMD5002",
      "description": "Multimedia design studio 2",
      "Faculty": "ada"
    },
    {
      "title": "MMD5003",
      "description": "Multimedia Design Studio 3",
      "Faculty": "ada"
    },
    {
      "title": "MMT5002",
      "description": "Medicine minor thesis extension unit",
      "Faculty": "med"
    },
    {
      "title": "MMT5004",
      "description": "Medicine minor thesis extension unit",
      "Faculty": "med"
    },
    {
      "title": "MNE1010",
      "description": "Natural resources engineering",
      "Faculty": "eng"
    },
    {
      "title": "MNE2010",
      "description": "Fixed plant engineering",
      "Faculty": "eng"
    },
    {
      "title": "MNE2030",
      "description": "Project, risk and safety management",
      "Faculty": "eng"
    },
    {
      "title": "MNE3010",
      "description": "Rock mechanics",
      "Faculty": "eng"
    },
    {
      "title": "MNE3020",
      "description": "Resource estimation",
      "Faculty": "eng"
    },
    {
      "title": "MNE3030",
      "description": "Ventilation",
      "Faculty": "eng"
    },
    {
      "title": "MNE3040",
      "description": "Surface mining systems",
      "Faculty": "eng"
    },
    {
      "title": "MNE3050",
      "description": "Underground mining",
      "Faculty": "eng"
    },
    {
      "title": "MNE3060",
      "description": "Blasting and fragmentation",
      "Faculty": "eng"
    },
    {
      "title": "MNE4010",
      "description": "Mine planning and scheduling",
      "Faculty": "eng"
    },
    {
      "title": "MNE4020",
      "description": "Design and feasibility project",
      "Faculty": "eng"
    },
    {
      "title": "MNE4030",
      "description": "Mine management and economics",
      "Faculty": "eng"
    },
    {
      "title": "MNE4040",
      "description": "Mineral processing",
      "Faculty": "eng"
    },
    {
      "title": "MNE4070",
      "description": "Research project 3",
      "Faculty": "eng"
    },
    {
      "title": "MNE4120",
      "description": "Instrumentation, automation and asset management",
      "Faculty": "eng"
    },
    {
      "title": "MON2005",
      "description": "Law in professional contexts",
      "Faculty": "law"
    },
    {
      "title": "MON2222",
      "description": "Sustainability: learning and living it",
      "Faculty": "buseco"
    },
    {
      "title": "MPA5001",
      "description": "Work-based research project",
      "Faculty": "buseco"
    },
    {
      "title": "MPA5902",
      "description": "Designing public policies and programs",
      "Faculty": "buseco"
    },
    {
      "title": "MPH5020",
      "description": "Introduction to epidemiology and biostatistics",
      "Faculty": "med"
    },
    {
      "title": "MPH5040",
      "description": "Introductory epidemiology",
      "Faculty": "med"
    },
    {
      "title": "MPH5041",
      "description": "Introductory biostatistics",
      "Faculty": "med"
    },
    {
      "title": "MPH5042",
      "description": "Climate change and public health",
      "Faculty": "med"
    },
    {
      "title": "MPH5200",
      "description": "Regression methods for epidemiology",
      "Faculty": "med"
    },
    {
      "title": "MPH5202",
      "description": "Clinical epidemiology",
      "Faculty": "med"
    },
    {
      "title": "MPH5203",
      "description": "Environmental influences on health",
      "Faculty": "med"
    },
    {
      "title": "MPH5207",
      "description": "Chronic disease: Epidemiology and prevention",
      "Faculty": "med"
    },
    {
      "title": "MPH5213",
      "description": "Research methods",
      "Faculty": "med"
    },
    {
      "title": "MPH5218",
      "description": "Infectious diseases: Epidemiology and prevention",
      "Faculty": "med"
    },
    {
      "title": "MPH5222",
      "description": "Assessment and control of workplace hazards",
      "Faculty": "med"
    },
    {
      "title": "MPH5231",
      "description": "Research design and project proposal",
      "Faculty": "med"
    },
    {
      "title": "MPH5232",
      "description": "Research conduct, analysis, write-up and submission",
      "Faculty": "med"
    },
    {
      "title": "MPH5236",
      "description": "Clinical trials",
      "Faculty": "med"
    },
    {
      "title": "MPH5237",
      "description": "Clinical measurement",
      "Faculty": "med"
    },
    {
      "title": "MPH5239",
      "description": "Systematic reviews and meta-analysis",
      "Faculty": "med"
    },
    {
      "title": "MPH5241",
      "description": "Introduction to occupational health and safety",
      "Faculty": "med"
    },
    {
      "title": "MPH5242",
      "description": "Psychosocial work environment",
      "Faculty": "med"
    },
    {
      "title": "MPH5243",
      "description": "Chemical and biological hazards",
      "Faculty": "med"
    },
    {
      "title": "MPH5244",
      "description": "Ergonomic and physical hazards",
      "Faculty": "med"
    },
    {
      "title": "MPH5248",
      "description": "Primary health care and global health",
      "Faculty": "med"
    },
    {
      "title": "MPH5249",
      "description": "Field methods for global health planning and evaluation",
      "Faculty": "med"
    },
    {
      "title": "MPH5250",
      "description": "Women's and children's health: A global perspective",
      "Faculty": "med"
    },
    {
      "title": "MPH5251",
      "description": "Infectious diseases and global health",
      "Faculty": "med"
    },
    {
      "title": "MPH5253",
      "description": "Public health in refugee settings",
      "Faculty": "med"
    },
    {
      "title": "MPH5254",
      "description": "Nutrition in developing countries",
      "Faculty": "med"
    },
    {
      "title": "MPH5255",
      "description": "Health and human rights",
      "Faculty": "med"
    },
    {
      "title": "MPH5256",
      "description": "Injury epidemiology and prevention",
      "Faculty": "med"
    },
    {
      "title": "MPH5260",
      "description": "Health policy and prevention in a global world",
      "Faculty": "med"
    },
    {
      "title": "MPH5265",
      "description": "Law for health systems",
      "Faculty": "med"
    },
    {
      "title": "MPH5266",
      "description": "Clinical leadership and management",
      "Faculty": "med"
    },
    {
      "title": "MPH5267",
      "description": "Principles of health care quality improvement",
      "Faculty": "med"
    },
    {
      "title": "MPH5268",
      "description": "Financial issues in health care management",
      "Faculty": "med"
    },
    {
      "title": "MPH5269",
      "description": "Foundations of health policy",
      "Faculty": "med"
    },
    {
      "title": "MPH5270",
      "description": "Advanced statistical methods for clinical research",
      "Faculty": "med"
    },
    {
      "title": "MPH5272",
      "description": "Reform and development of health services",
      "Faculty": "med"
    },
    {
      "title": "MPH5273",
      "description": "Case study in health services management",
      "Faculty": "med"
    },
    {
      "title": "MPH5276",
      "description": "Safety management systems",
      "Faculty": "med"
    },
    {
      "title": "MPH5277",
      "description": "Practical data management",
      "Faculty": "med"
    },
    {
      "title": "MPH5282",
      "description": "Health communications and training",
      "Faculty": "med"
    },
    {
      "title": "MPH5283",
      "description": "Ethics, good research practice and practical research methods",
      "Faculty": "med"
    },
    {
      "title": "MPH5285",
      "description": "Human factors for patient safety",
      "Faculty": "med"
    },
    {
      "title": "MPH5286",
      "description": "Applying and practicing the principles of patient safety and quality improvement",
      "Faculty": "med"
    },
    {
      "title": "MPH5287",
      "description": "Alcohol and other drugs in society: A national and global perspective",
      "Faculty": "med"
    },
    {
      "title": "MPH5301",
      "description": "Health systems and policy",
      "Faculty": "med"
    },
    {
      "title": "MPH5302",
      "description": "Biostatistics: Concepts and applications",
      "Faculty": "med"
    },
    {
      "title": "MPH5303",
      "description": "Epidemiology of infectious diseases",
      "Faculty": "med"
    },
    {
      "title": "MPH5304",
      "description": "Leading and managing in public health and health care",
      "Faculty": "med"
    },
    {
      "title": "MPH5305",
      "description": "Epidemiology: Concepts and applications",
      "Faculty": "med"
    },
    {
      "title": "MPH5306",
      "description": "Evaluation in public health",
      "Faculty": "med"
    },
    {
      "title": "MPH5307",
      "description": "Introduction to health law principles",
      "Faculty": "med"
    },
    {
      "title": "MPH5308",
      "description": "Developing health systems",
      "Faculty": "med"
    },
    {
      "title": "MPH5309",
      "description": "Occupational health and safety",
      "Faculty": "med"
    },
    {
      "title": "MPH5310",
      "description": "Introduction to environmental health",
      "Faculty": "med"
    },
    {
      "title": "MPH5311",
      "description": "Safety and quality in health care",
      "Faculty": "med"
    },
    {
      "title": "MPH5312",
      "description": "Advances in managing patient care processes",
      "Faculty": "med"
    },
    {
      "title": "MPH5313",
      "description": "Challenges in public health",
      "Faculty": "med"
    },
    {
      "title": "MPH5314",
      "description": "Epidemiology of chronic disease",
      "Faculty": "med"
    },
    {
      "title": "MPH6040",
      "description": "Introductory epidemiology",
      "Faculty": "med"
    },
    {
      "title": "MPH6041",
      "description": "Introductory biostatistics",
      "Faculty": "med"
    },
    {
      "title": "MRE5001",
      "description": "Terotechnology and life cycle costs",
      "Faculty": "eng"
    },
    {
      "title": "MRE5002",
      "description": "Maintenance management",
      "Faculty": "eng"
    },
    {
      "title": "MRE5003",
      "description": "Industrial techniques in maintenance management",
      "Faculty": "eng"
    },
    {
      "title": "MRE5004",
      "description": "Asset management techniques",
      "Faculty": "eng"
    },
    {
      "title": "MRE5005",
      "description": "Quantitative techniques for asset management",
      "Faculty": "eng"
    },
    {
      "title": "MRE5006",
      "description": "Machine condition monitoring and fault diagnosis",
      "Faculty": "eng"
    },
    {
      "title": "MRE5007",
      "description": "Risk engineering",
      "Faculty": "eng"
    },
    {
      "title": "MRE5008",
      "description": "Maintenance and reliability engineering project",
      "Faculty": "eng"
    },
    {
      "title": "MRE5101",
      "description": "Basic quantitative skills for reliability engineering",
      "Faculty": "eng"
    },
    {
      "title": "MRE5102",
      "description": "Understanding reliability",
      "Faculty": "eng"
    },
    {
      "title": "MRE5103",
      "description": "Advanced reliability",
      "Faculty": "eng"
    },
    {
      "title": "MRE5104",
      "description": "Reliability applications",
      "Faculty": "eng"
    },
    {
      "title": "MRS0001",
      "description": "Coursework core lectures",
      "Faculty": "med"
    },
    {
      "title": "MRS0002",
      "description": "Coursework semester 1 stream 1 lectures",
      "Faculty": "med"
    },
    {
      "title": "MRS0003",
      "description": "Coursework semester 1 stream 2 lectures",
      "Faculty": "med"
    },
    {
      "title": "MRS0004",
      "description": "Coursework semester 2 stream 1 lectures",
      "Faculty": "med"
    },
    {
      "title": "MRS0005",
      "description": "Coursework semester 2 stream 2 lectures",
      "Faculty": "med"
    },
    {
      "title": "MSC4100",
      "description": "Materials science project",
      "Faculty": "sci"
    },
    {
      "title": "MSC4110",
      "description": "Materials science project part time I",
      "Faculty": "sci"
    },
    {
      "title": "MSC4120",
      "description": "Materials science project part time II",
      "Faculty": "sci"
    },
    {
      "title": "MSC4200",
      "description": "Advanced materials science",
      "Faculty": "sci"
    },
    {
      "title": "MSC4210",
      "description": "Materials applications part time I",
      "Faculty": "sci"
    },
    {
      "title": "MSC4220",
      "description": "Materials applications part time II",
      "Faculty": "sci"
    },
    {
      "title": "MSM5100",
      "description": "Research Project - Master of Biomedical Science MUM",
      "Faculty": "med"
    },
    {
      "title": "MSM5101",
      "description": "Research Project - Master of Biomedical Science MUM (PART-TIME)",
      "Faculty": "med"
    },
    {
      "title": "MSM5200",
      "description": "Advanced Studies in Biomedical Sciences MUM",
      "Faculty": "med"
    },
    {
      "title": "MSM5201",
      "description": "Advanced Studies in Biomedical Sciences MUM (PART-TIME)",
      "Faculty": "med"
    },
    {
      "title": "MTE2541",
      "description": "Crystal structures, thermodynamics and phase equilibria",
      "Faculty": "eng"
    },
    {
      "title": "MTE2542",
      "description": "Microstructural development",
      "Faculty": "eng"
    },
    {
      "title": "MTE2544",
      "description": "Functional materials",
      "Faculty": "eng"
    },
    {
      "title": "MTE2545",
      "description": "Polymers and ceramics I",
      "Faculty": "eng"
    },
    {
      "title": "MTE2546",
      "description": "Mechanics of materials",
      "Faculty": "eng"
    },
    {
      "title": "MTE2547",
      "description": "Structure-property relationships in materials",
      "Faculty": "eng"
    },
    {
      "title": "MTE2548",
      "description": "Biomaterials I",
      "Faculty": "eng"
    },
    {
      "title": "MTE3541",
      "description": "Materials durability",
      "Faculty": "eng"
    },
    {
      "title": "MTE3542",
      "description": "Microstructural design in structural materials",
      "Faculty": "eng"
    },
    {
      "title": "MTE3543",
      "description": "Microstructure to applications: the mechanics of materials",
      "Faculty": "eng"
    },
    {
      "title": "MTE3544",
      "description": "Management and practice in materials engineering",
      "Faculty": "eng"
    },
    {
      "title": "MTE3545",
      "description": "Functional materials and devices",
      "Faculty": "eng"
    },
    {
      "title": "MTE3546",
      "description": "Polymers and ceramics II",
      "Faculty": "eng"
    },
    {
      "title": "MTE3547",
      "description": "Materials characterisation and modelling",
      "Faculty": "eng"
    },
    {
      "title": "MTE4525",
      "description": "Project I",
      "Faculty": "eng"
    },
    {
      "title": "MTE4526",
      "description": "Project II",
      "Faculty": "eng"
    },
    {
      "title": "MTE4571",
      "description": "Materials engineering design and practice",
      "Faculty": "eng"
    },
    {
      "title": "MTE4572",
      "description": "Polymer and composite processing and engineering",
      "Faculty": "eng"
    },
    {
      "title": "MTE4573",
      "description": "Processing and engineering of metals and ceramics",
      "Faculty": "eng"
    },
    {
      "title": "MTE4590",
      "description": "Modelling of materials",
      "Faculty": "eng"
    },
    {
      "title": "MTE4592",
      "description": "Advanced ceramics and applications",
      "Faculty": "eng"
    },
    {
      "title": "MTE4593",
      "description": "Materials and sustainability",
      "Faculty": "eng"
    },
    {
      "title": "MTE4594",
      "description": "Engineering alloy design, processing and selection",
      "Faculty": "eng"
    },
    {
      "title": "MTE4595",
      "description": "Corrosion mechanisms and protection methods",
      "Faculty": "eng"
    },
    {
      "title": "MTE4596",
      "description": "Biomaterials II",
      "Faculty": "eng"
    },
    {
      "title": "MTE4597",
      "description": "Engineering with nanomaterials",
      "Faculty": "eng"
    },
    {
      "title": "MTE4598",
      "description": "Electron microscopy",
      "Faculty": "eng"
    },
    {
      "title": "MTE5881",
      "description": "Advanced materials characterisation and applied crystallography",
      "Faculty": "eng"
    },
    {
      "title": "MTE5882",
      "description": "Advanced polymeric materials",
      "Faculty": "eng"
    },
    {
      "title": "MTE5883",
      "description": "Environmental durability and protection of metals and engineering materials",
      "Faculty": "eng"
    },
    {
      "title": "MTE5884",
      "description": "Advanced photovoltaics and energy storage",
      "Faculty": "eng"
    },
    {
      "title": "MTE5885",
      "description": "Biomaterials and biomechanics",
      "Faculty": "eng"
    },
    {
      "title": "MTE5886",
      "description": "Additive manufacturing of metallic materials",
      "Faculty": "eng"
    },
    {
      "title": "MTE5887",
      "description": "Additive manufacturing of polymeric and functional materials",
      "Faculty": "eng"
    },
    {
      "title": "MTE6881",
      "description": "Advanced materials characterisation and applied crystallography",
      "Faculty": "eng"
    },
    {
      "title": "MTE6882",
      "description": "Advanced polymeric materials",
      "Faculty": "eng"
    },
    {
      "title": "MTE6883",
      "description": "Environmental durability and protection of metals and engineering materials",
      "Faculty": "eng"
    },
    {
      "title": "MTE6884",
      "description": "Advanced photovoltaics and energy storage",
      "Faculty": "eng"
    },
    {
      "title": "MTE6885",
      "description": "Biomaterials and biomechanics",
      "Faculty": "eng"
    },
    {
      "title": "MTE6886",
      "description": "Additive manufacturing of metallic materials",
      "Faculty": "eng"
    },
    {
      "title": "MTE6887",
      "description": "Additive manufacturing of polymeric and functional materials",
      "Faculty": "eng"
    },
    {
      "title": "MTH1000",
      "description": "Special topics in mathematics level one",
      "Faculty": "sci"
    },
    {
      "title": "MTH1010",
      "description": "Functions and their applications",
      "Faculty": "sci"
    },
    {
      "title": "MTH1020",
      "description": "Analysis of change",
      "Faculty": "sci"
    },
    {
      "title": "MTH1030",
      "description": "Techniques for modelling",
      "Faculty": "sci"
    },
    {
      "title": "MTH1035",
      "description": "Techniques for modelling (advanced)",
      "Faculty": "sci"
    },
    {
      "title": "MTH2000",
      "description": "Mathematics research project level 2",
      "Faculty": "sci"
    },
    {
      "title": "MTH2010",
      "description": "Multivariable calculus",
      "Faculty": "sci"
    },
    {
      "title": "MTH2015",
      "description": "Multivariable calculus (advanced)",
      "Faculty": "sci"
    },
    {
      "title": "MTH2021",
      "description": "Linear algebra with applications",
      "Faculty": "sci"
    },
    {
      "title": "MTH2025",
      "description": "Linear algebra (advanced)",
      "Faculty": "sci"
    },
    {
      "title": "MTH2032",
      "description": "Differential equations with modelling",
      "Faculty": "sci"
    },
    {
      "title": "MTH2040",
      "description": "Mathematical modelling",
      "Faculty": "sci"
    },
    {
      "title": "MTH2121",
      "description": "Algebra and number theory",
      "Faculty": "sci"
    },
    {
      "title": "MTH2132",
      "description": "The nature and beauty of mathematics",
      "Faculty": "sci"
    },
    {
      "title": "MTH2140",
      "description": "Real analysis",
      "Faculty": "sci"
    },
    {
      "title": "MTH2222",
      "description": "Mathematics of uncertainty",
      "Faculty": "sci"
    },
    {
      "title": "MTH2232",
      "description": "Mathematical statistics",
      "Faculty": "sci"
    },
    {
      "title": "MTH3000",
      "description": "Mathematics research project level 3",
      "Faculty": "sci"
    },
    {
      "title": "MTH3011",
      "description": "Partial differential equations",
      "Faculty": "sci"
    },
    {
      "title": "MTH3020",
      "description": "Complex analysis and integral transforms",
      "Faculty": "sci"
    },
    {
      "title": "MTH3051",
      "description": "Introduction to computational mathematics",
      "Faculty": "sci"
    },
    {
      "title": "MTH3060",
      "description": "Advanced ordinary differential equations",
      "Faculty": "sci"
    },
    {
      "title": "MTH3110",
      "description": "Differential geometry",
      "Faculty": "sci"
    },
    {
      "title": "MTH3121",
      "description": "Algebra and number theory",
      "Faculty": "sci"
    },
    {
      "title": "MTH3130",
      "description": "Topology: The mathematics of shape",
      "Faculty": "sci"
    },
    {
      "title": "MTH3140",
      "description": "Real analysis",
      "Faculty": "sci"
    },
    {
      "title": "MTH3150",
      "description": "Algebra and number theory II",
      "Faculty": "sci"
    },
    {
      "title": "MTH3160",
      "description": "Functional analysis",
      "Faculty": "sci"
    },
    {
      "title": "MTH3170",
      "description": "Network mathematics",
      "Faculty": "sci"
    },
    {
      "title": "MTH3230",
      "description": "Time series and random processes in linear systems",
      "Faculty": "sci"
    },
    {
      "title": "MTH3241",
      "description": "Random processes in the sciences and engineering",
      "Faculty": "sci"
    },
    {
      "title": "MTH3251",
      "description": "Financial mathematics",
      "Faculty": "sci"
    },
    {
      "title": "MTH3260",
      "description": "Statistics of stochastic processes",
      "Faculty": "sci"
    },
    {
      "title": "MTH3310",
      "description": "Applied mathematical modelling",
      "Faculty": "sci"
    },
    {
      "title": "MTH3320",
      "description": "Computational linear algebra",
      "Faculty": "sci"
    },
    {
      "title": "MTH3360",
      "description": "Fluid dynamics",
      "Faculty": "sci"
    },
    {
      "title": "MTH3401",
      "description": "Special topics in mathematics I",
      "Faculty": "sci"
    },
    {
      "title": "MTH3402",
      "description": "Special topics in mathematics II",
      "Faculty": "sci"
    },
    {
      "title": "MTH4010",
      "description": "Mathematics honours topic A",
      "Faculty": "sci"
    },
    {
      "title": "MTH4020",
      "description": "Mathematics honours topic B",
      "Faculty": "sci"
    },
    {
      "title": "MTH4030",
      "description": "Mathematics honours topic C",
      "Faculty": "sci"
    },
    {
      "title": "MTH4040",
      "description": "Mathematics honours topic D",
      "Faculty": "sci"
    },
    {
      "title": "MTH4100",
      "description": "Mathematics research studies",
      "Faculty": "sci"
    },
    {
      "title": "MTH4200",
      "description": "Advanced studies in mathematics",
      "Faculty": "sci"
    },
    {
      "title": "MTH5112",
      "description": "Partial differential equations in finance",
      "Faculty": "sci"
    },
    {
      "title": "MTH5210",
      "description": "Stochastic calculus and mathematical finance",
      "Faculty": "sci"
    },
    {
      "title": "MTH5220",
      "description": "The theory of martingales in discrete time",
      "Faculty": "sci"
    },
    {
      "title": "MTH5230",
      "description": "Markov chains and random walks",
      "Faculty": "sci"
    },
    {
      "title": "MTH5510",
      "description": "The mathematics of finance: From derivatives to risk",
      "Faculty": "sci"
    },
    {
      "title": "MTH5520",
      "description": "Interest rate modelling",
      "Faculty": "sci"
    },
    {
      "title": "MTH5530",
      "description": "Computational methods in finance",
      "Faculty": "sci"
    },
    {
      "title": "MTH5540",
      "description": "Statistical learning in finance",
      "Faculty": "sci"
    },
    {
      "title": "MTH5550",
      "description": "Market microstructure",
      "Faculty": "sci"
    },
    {
      "title": "MTH5810",
      "description": "Industry research project",
      "Faculty": "sci"
    },
    {
      "title": "MTH5820",
      "description": "Minor industry research project",
      "Faculty": "sci"
    },
    {
      "title": "MTH5830",
      "description": "Industry placement",
      "Faculty": "sci"
    },
    {
      "title": "MTH5840",
      "description": "Minor industry placement",
      "Faculty": "sci"
    },
    {
      "title": "MVA4001",
      "description": "Studio discipline A",
      "Faculty": "ada"
    },
    {
      "title": "MVA4002",
      "description": "Studio discipline B",
      "Faculty": "ada"
    },
    {
      "title": "MVA4021",
      "description": "Philosophies of the studio A",
      "Faculty": "ada"
    },
    {
      "title": "MVA4022",
      "description": "Philosophies of the studio B",
      "Faculty": "ada"
    },
    {
      "title": "MVA5001",
      "description": "Studio project",
      "Faculty": "ada"
    },
    {
      "title": "NEH4001",
      "description": "Preparing for interprofessional practice",
      "Faculty": "med"
    },
    {
      "title": "NEH4012",
      "description": "Interprofessional practice in community and hospital settings",
      "Faculty": "med"
    },
    {
      "title": "NUR1001",
      "description": "Professional and scholarly communication",
      "Faculty": "med"
    },
    {
      "title": "NUR1010",
      "description": "Foundations of nursing and midwifery practice",
      "Faculty": "med"
    },
    {
      "title": "NUR1013",
      "description": "Indigenous health for nursing and midwifery practice",
      "Faculty": "med"
    },
    {
      "title": "NUR1102",
      "description": "Health assessment in clinical practice",
      "Faculty": "med"
    },
    {
      "title": "NUR1105",
      "description": "Foundations of leadership and professional practice",
      "Faculty": "med"
    },
    {
      "title": "NUR1111",
      "description": "Global health and cultural competence in nursing and midwifery practice",
      "Faculty": "med"
    },
    {
      "title": "NUR1112",
      "description": "Fundamental skills and knowledge for nursing and midwifery practice 1",
      "Faculty": "med"
    },
    {
      "title": "NUR1113",
      "description": "Law, ethics and leadership in nursing and midwifery",
      "Faculty": "med"
    },
    {
      "title": "NUR1114",
      "description": "Fundamental skills and knowledge for nursing and midwifery practice 2",
      "Faculty": "med"
    },
    {
      "title": "NUR1202",
      "description": "Legal issues and concepts",
      "Faculty": "med"
    },
    {
      "title": "NUR1205",
      "description": "Population and socio-cultural health research",
      "Faculty": "med"
    },
    {
      "title": "NUR2005",
      "description": "Introduction to maternity and paediatric nursing",
      "Faculty": "med"
    },
    {
      "title": "NUR2007",
      "description": "Introduction to palliative care",
      "Faculty": "med"
    },
    {
      "title": "NUR2106",
      "description": "Integrated nursing practice 1",
      "Faculty": "med"
    },
    {
      "title": "NUR2107",
      "description": "Person centered mental health care",
      "Faculty": "med"
    },
    {
      "title": "NUR2203",
      "description": "Health promotion",
      "Faculty": "med"
    },
    {
      "title": "NUR2204",
      "description": "Working with families across the lifespan",
      "Faculty": "med"
    },
    {
      "title": "NUR2206",
      "description": "Integrated nursing practice 2",
      "Faculty": "med"
    },
    {
      "title": "NUR2207",
      "description": "Mental health clinical practice",
      "Faculty": "med"
    },
    {
      "title": "NUR2445",
      "description": "Clinical assessment in nursing",
      "Faculty": "med"
    },
    {
      "title": "NUR2447",
      "description": "Clinical concepts",
      "Faculty": "med"
    },
    {
      "title": "NUR3001",
      "description": "Evidence based health care",
      "Faculty": "med"
    },
    {
      "title": "NUR3002",
      "description": "Integrated nursing practice 3",
      "Faculty": "med"
    },
    {
      "title": "NUR3003",
      "description": "Education for clinical practice",
      "Faculty": "med"
    },
    {
      "title": "NUR3004",
      "description": "Preparing for practice",
      "Faculty": "med"
    },
    {
      "title": "NUR3005",
      "description": "Chronic illness management in primary care",
      "Faculty": "med"
    },
    {
      "title": "NUR3006",
      "description": "Diversity in healthcare practice",
      "Faculty": "med"
    },
    {
      "title": "NUR3009",
      "description": "Transition to professional practice",
      "Faculty": "med"
    },
    {
      "title": "NUR3022",
      "description": "Integrated nursing practice 4",
      "Faculty": "med"
    },
    {
      "title": "NUR3106",
      "description": "Introduction to high acuity nursing",
      "Faculty": "med"
    },
    {
      "title": "NUR3204",
      "description": "Integrated community care",
      "Faculty": "med"
    },
    {
      "title": "NUR4401",
      "description": "Clinical honours thesis 1: Applied research methods and skills",
      "Faculty": "med"
    },
    {
      "title": "NUR4402",
      "description": "Clinical honours thesis 2: Framing a research proposal",
      "Faculty": "med"
    },
    {
      "title": "NUR4403",
      "description": "Clinical honours thesis 3: Conducting a research project",
      "Faculty": "med"
    },
    {
      "title": "NUR4404",
      "description": "Clinical honours thesis 4: Analysing and reporting research",
      "Faculty": "med"
    },
    {
      "title": "NUR5002",
      "description": "Contemporary nursing practice 2",
      "Faculty": "med"
    },
    {
      "title": "NUR5003",
      "description": "Contemporary nursing practice 3",
      "Faculty": "med"
    },
    {
      "title": "NUR5004",
      "description": "Contemporary nursing practice 4",
      "Faculty": "med"
    },
    {
      "title": "NUR5008",
      "description": "Cognitive behavioural therapy for mental health professionals",
      "Faculty": "med"
    },
    {
      "title": "NUR5011",
      "description": "Contemporary nursing in context 1",
      "Faculty": "med"
    },
    {
      "title": "NUR5022",
      "description": "Contemporary nursing in context 2",
      "Faculty": "med"
    },
    {
      "title": "NUR5033",
      "description": "Contemporary nursing in context 3",
      "Faculty": "med"
    },
    {
      "title": "NUR5100",
      "description": "Research Project in Nursing",
      "Faculty": "med"
    },
    {
      "title": "NUR5101",
      "description": "Research Project in Nursing (Part-time)",
      "Faculty": "med"
    },
    {
      "title": "NUR5111",
      "description": "Contemporary nursing practice 1",
      "Faculty": "med"
    },
    {
      "title": "NUR5112",
      "description": "Nursing practice in the Australian healthcare context",
      "Faculty": "med"
    },
    {
      "title": "NUR5113",
      "description": "Nursing in the Australian context",
      "Faculty": "med"
    },
    {
      "title": "NUR5200",
      "description": "Advanced Studies in Nursing",
      "Faculty": "med"
    },
    {
      "title": "NUR5201",
      "description": "Advanced Studies in Nursing (Part-time)",
      "Faculty": "med"
    },
    {
      "title": "NUR5202",
      "description": "Nursing informatics",
      "Faculty": "med"
    },
    {
      "title": "NUR5203",
      "description": "Palliative care practice",
      "Faculty": "med"
    },
    {
      "title": "NUR5204",
      "description": "Education in health care practice",
      "Faculty": "med"
    },
    {
      "title": "NUR5208",
      "description": "Therapeutic medication management",
      "Faculty": "med"
    },
    {
      "title": "NUR5209",
      "description": "Education program development",
      "Faculty": "med"
    },
    {
      "title": "NUR5210",
      "description": "Disaster and emergency nursing management",
      "Faculty": "med"
    },
    {
      "title": "NUR5214",
      "description": "Advanced therapeutic interaction in nursing",
      "Faculty": "med"
    },
    {
      "title": "NUR5215",
      "description": "Mental health nursing concepts and practice",
      "Faculty": "med"
    },
    {
      "title": "NUR5217",
      "description": "Advanced paediatric nursing",
      "Faculty": "med"
    },
    {
      "title": "NUR5218",
      "description": "Advanced clinical decision making",
      "Faculty": "med"
    },
    {
      "title": "NUR5219",
      "description": "Advanced clinical practice for nurse practitioner",
      "Faculty": "med"
    },
    {
      "title": "NUR5227",
      "description": "Integrated mental health care",
      "Faculty": "med"
    },
    {
      "title": "NUR5301",
      "description": "Nursing practice for older persons",
      "Faculty": "med"
    },
    {
      "title": "NUR5315",
      "description": "Advanced practice in context",
      "Faculty": "med"
    },
    {
      "title": "NUR5325",
      "description": "Clinical leadership in nursing",
      "Faculty": "med"
    },
    {
      "title": "NUR5326",
      "description": "Quality, safety and clinical governance in nursing and health care management",
      "Faculty": "med"
    },
    {
      "title": "NUR5327",
      "description": "Management and leadership of professional nursing practice",
      "Faculty": "med"
    },
    {
      "title": "NUR5405",
      "description": "Explorations in child and family nursing",
      "Faculty": "med"
    },
    {
      "title": "NUR5411",
      "description": "Advanced clinical assessment and diagnostic reasoning",
      "Faculty": "med"
    },
    {
      "title": "NUR5703",
      "description": "Advanced pathophysiology and health assessment 1",
      "Faculty": "med"
    },
    {
      "title": "NUR5704",
      "description": "Advanced pathophysiology and health assessment 2",
      "Faculty": "med"
    },
    {
      "title": "NUR5707",
      "description": "Applications of Intensive Care Nursing",
      "Faculty": "med"
    },
    {
      "title": "NUR5833",
      "description": "Refugee health and wellbeing",
      "Faculty": "med"
    },
    {
      "title": "NUR5844",
      "description": "Health promotion and education",
      "Faculty": "med"
    },
    {
      "title": "NUR5923",
      "description": "Critical care nursing 1",
      "Faculty": "med"
    },
    {
      "title": "NUR5924",
      "description": "Critical care nursing 2",
      "Faculty": "med"
    },
    {
      "title": "NUR5925",
      "description": "Emergency nursing 1",
      "Faculty": "med"
    },
    {
      "title": "NUR5926",
      "description": "Emergency nursing 2",
      "Faculty": "med"
    },
    {
      "title": "NUR5927",
      "description": "Advanced medical/surgical nursing practice 1",
      "Faculty": "med"
    },
    {
      "title": "NUR5928",
      "description": "Advanced medical/surgical nursing practice 2",
      "Faculty": "med"
    },
    {
      "title": "NUT1001",
      "description": "Personal and professional perspectives in nutrition",
      "Faculty": "med"
    },
    {
      "title": "NUT1002",
      "description": "Evaluating the evidence: Nutrition and population health",
      "Faculty": "med"
    },
    {
      "title": "NUT1010",
      "description": "Human nutrition: An introduction to nutrients",
      "Faculty": "med"
    },
    {
      "title": "NUT1011",
      "description": "Human nutrition: An introduction to nutrients",
      "Faculty": "med"
    },
    {
      "title": "NUT1101",
      "description": "Science foundations",
      "Faculty": "med"
    },
    {
      "title": "NUT1102",
      "description": "Food science",
      "Faculty": "med"
    },
    {
      "title": "NUT2001",
      "description": "Health across the lifespan",
      "Faculty": "med"
    },
    {
      "title": "NUT2002",
      "description": "Applied research methods in nutrition",
      "Faculty": "med"
    },
    {
      "title": "NUT2102",
      "description": "Food: Science, composition and skills",
      "Faculty": "med"
    },
    {
      "title": "NUT2103",
      "description": "Integrated science systems",
      "Faculty": "med"
    },
    {
      "title": "NUT3001",
      "description": "Evidence based nutrition",
      "Faculty": "med"
    },
    {
      "title": "NUT3002",
      "description": "Nutrition, activity and health in chronic diseases",
      "Faculty": "med"
    },
    {
      "title": "NUT3003",
      "description": "Sport and exercise nutrition",
      "Faculty": "med"
    },
    {
      "title": "NUT3004",
      "description": "Nutrition controversies",
      "Faculty": "med"
    },
    {
      "title": "NUT3005",
      "description": "Nutrition assessment",
      "Faculty": "med"
    },
    {
      "title": "NUT3006",
      "description": "Food and the environment",
      "Faculty": "med"
    },
    {
      "title": "NUT3007",
      "description": "Work placement",
      "Faculty": "med"
    },
    {
      "title": "NUT3082",
      "description": "Public health nutrition",
      "Faculty": "med"
    },
    {
      "title": "NUT4001",
      "description": "Foundations of dietetic practice",
      "Faculty": "med"
    },
    {
      "title": "NUT4111",
      "description": "Research skills",
      "Faculty": "med"
    },
    {
      "title": "NUT4121",
      "description": "Honours research project 1",
      "Faculty": "med"
    },
    {
      "title": "NUT4122",
      "description": "Honours research project 2",
      "Faculty": "med"
    },
    {
      "title": "NUT5001",
      "description": "Introduction to dietetic skills",
      "Faculty": "med"
    },
    {
      "title": "NUT5002",
      "description": "Practice and research in public health nutrition",
      "Faculty": "med"
    },
    {
      "title": "NUT5003",
      "description": "Dietetic practice 1",
      "Faculty": "med"
    },
    {
      "title": "NUT5004",
      "description": "Food for dietetic practice",
      "Faculty": "med"
    },
    {
      "title": "NUT5005",
      "description": "Dietetic practice 2",
      "Faculty": "med"
    },
    {
      "title": "NUT5006",
      "description": "Practice and research in dietetics",
      "Faculty": "med"
    },
    {
      "title": "OCC1011",
      "description": "Professional issues",
      "Faculty": "med"
    },
    {
      "title": "OCC1012",
      "description": "Occupational science",
      "Faculty": "med"
    },
    {
      "title": "OCC1021",
      "description": "Psychology for occupational therapy",
      "Faculty": "med"
    },
    {
      "title": "OCC1022",
      "description": "Foundations of occupational therapy practice",
      "Faculty": "med"
    },
    {
      "title": "OCC1032",
      "description": "Development across the lifespan",
      "Faculty": "med"
    },
    {
      "title": "OCC2011",
      "description": "Occupational performance, capabilities and components",
      "Faculty": "med"
    },
    {
      "title": "OCC2020",
      "description": "Enabling occupation: Performance challenges 1A",
      "Faculty": "med"
    },
    {
      "title": "OCC2022",
      "description": "Skills for evidence-based practice 1",
      "Faculty": "med"
    },
    {
      "title": "OCC3000",
      "description": "Enabling occupation: Fieldwork experience 1B",
      "Faculty": "med"
    },
    {
      "title": "OCC3031",
      "description": "Enabling occupation: Performance challenges 1B",
      "Faculty": "med"
    },
    {
      "title": "OCC3041",
      "description": "Skills for evidence-based practice 2",
      "Faculty": "med"
    },
    {
      "title": "OCC3052",
      "description": "Enabling occupation 2: Performance challenges in population health",
      "Faculty": "med"
    },
    {
      "title": "OCC3061",
      "description": "Health promotion in occupational therapy",
      "Faculty": "med"
    },
    {
      "title": "OCC3062",
      "description": "Participation community practice 1: Development",
      "Faculty": "med"
    },
    {
      "title": "OCC3072",
      "description": "Occupational therapy honours research project 1",
      "Faculty": "med"
    },
    {
      "title": "OCC4010",
      "description": "Foundations of occupational therapy",
      "Faculty": "med"
    },
    {
      "title": "OCC4020",
      "description": "Humans as occupational beings",
      "Faculty": "med"
    },
    {
      "title": "OCC4030",
      "description": "Occupational performance, capabilities and components",
      "Faculty": "med"
    },
    {
      "title": "OCC4040",
      "description": "Enabling occupation 1",
      "Faculty": "med"
    },
    {
      "title": "OCC4071",
      "description": "Participatory community practice 2: Implementation",
      "Faculty": "med"
    },
    {
      "title": "OCC4081",
      "description": "Transition to practice 1",
      "Faculty": "med"
    },
    {
      "title": "OCC4082",
      "description": "Advanced professional practice",
      "Faculty": "med"
    },
    {
      "title": "OCC4091",
      "description": "Occupational therapy honours research project 2",
      "Faculty": "med"
    },
    {
      "title": "OCC4092",
      "description": "Transition to practice 2",
      "Faculty": "med"
    },
    {
      "title": "OCC4111",
      "description": "Introduction to hand therapy theory, principles, and practice",
      "Faculty": "med"
    },
    {
      "title": "OCC4121",
      "description": "Adaptive and assistive technology",
      "Faculty": "med"
    },
    {
      "title": "OCC4131",
      "description": "Assessment of children: Methods, policy, ethics and issues",
      "Faculty": "med"
    },
    {
      "title": "OCC4141",
      "description": "Occupational therapy for children with a disability and their families",
      "Faculty": "med"
    },
    {
      "title": "OCC5050",
      "description": "Enabling occupation 2",
      "Faculty": "med"
    },
    {
      "title": "OCC5060",
      "description": "Enabling occupation 3",
      "Faculty": "med"
    },
    {
      "title": "OCC5070",
      "description": "Transition to practice",
      "Faculty": "med"
    },
    {
      "title": "OCC5080",
      "description": "Advanced professional practice",
      "Faculty": "med"
    },
    {
      "title": "OCC5111",
      "description": "Advanced hand therapy theory, principles, and practice",
      "Faculty": "med"
    },
    {
      "title": "OCC5121",
      "description": "Advanced adaptive and assistive technology",
      "Faculty": "med"
    },
    {
      "title": "OCC5131",
      "description": "Advanced assessment of children: Methods, policy, ethics and issues",
      "Faculty": "med"
    },
    {
      "title": "OCC5141",
      "description": "Occupational therapy for children with a disability and their families",
      "Faculty": "med"
    },
    {
      "title": "OCC5161",
      "description": "Human occupation and health",
      "Faculty": "med"
    },
    {
      "title": "OHS1000",
      "description": "Introduction to art and design health and safety",
      "Faculty": "ada"
    },
    {
      "title": "OHS1001",
      "description": "Gippsland Centre of art and design health and safety",
      "Faculty": "ada"
    },
    {
      "title": "PAC1001",
      "description": "Introduction to Pharmacy",
      "Faculty": "pha"
    },
    {
      "title": "PAC2151",
      "description": "Biochemistry and molecular biology",
      "Faculty": "pha"
    },
    {
      "title": "PAC2161",
      "description": "Cell function, communication and pathology",
      "Faculty": "pha"
    },
    {
      "title": "PAC2171",
      "description": "Basis of drug action I",
      "Faculty": "pha"
    },
    {
      "title": "PAC2182",
      "description": "Basis of drug action II",
      "Faculty": "pha"
    },
    {
      "title": "PAC2232",
      "description": "Drug delivery and disposition",
      "Faculty": "pha"
    },
    {
      "title": "PAC2331",
      "description": "Pharmacists as communicators",
      "Faculty": "pha"
    },
    {
      "title": "PAC2342",
      "description": "Pharmacy in a public health context",
      "Faculty": "pha"
    },
    {
      "title": "PAC2412",
      "description": "Integrated therapeutics: Introduction and cardiovascular",
      "Faculty": "pha"
    },
    {
      "title": "PAC3191",
      "description": "Microbiology and immunology",
      "Faculty": "pha"
    },
    {
      "title": "PAC3241",
      "description": "Drug delivery, disposition and dynamics",
      "Faculty": "pha"
    },
    {
      "title": "PAC3252",
      "description": "Drug delivery II",
      "Faculty": "pha"
    },
    {
      "title": "PAC3351",
      "description": "Context for practice I",
      "Faculty": "pha"
    },
    {
      "title": "PAC3362",
      "description": "Context for practice II",
      "Faculty": "pha"
    },
    {
      "title": "PAC3421",
      "description": "Integrated therapeutics: Respiratory and gastrointestinal disease",
      "Faculty": "pha"
    },
    {
      "title": "PAC3432",
      "description": "Integrated therapeutics: Infectious disease",
      "Faculty": "pha"
    },
    {
      "title": "PAC3512",
      "description": "Current aspects of pharmaceutical research",
      "Faculty": "pha"
    },
    {
      "title": "PAC3522",
      "description": "Applied research project",
      "Faculty": "pha"
    },
    {
      "title": "PAC3542",
      "description": "Leadership",
      "Faculty": "pha"
    },
    {
      "title": "PAC3552",
      "description": "Community engagement",
      "Faculty": "pha"
    },
    {
      "title": "PAC4261",
      "description": "Drug delivery and development",
      "Faculty": "pha"
    },
    {
      "title": "PAC4371",
      "description": "Professional experience placement program",
      "Faculty": "pha"
    },
    {
      "title": "PAC4382",
      "description": "Context for practice III",
      "Faculty": "pha"
    },
    {
      "title": "PAC4441",
      "description": "Integrated therapeutics: Endocrinology and renal",
      "Faculty": "pha"
    },
    {
      "title": "PAC4451",
      "description": "Integrated therapeutics: Dermatology and pain",
      "Faculty": "pha"
    },
    {
      "title": "PAC4462",
      "description": "Integrated therapeutics: Neurology and oncology",
      "Faculty": "pha"
    },
    {
      "title": "PAC4472",
      "description": "Integrated therapeutics: Mental Health",
      "Faculty": "pha"
    },
    {
      "title": "PAC4482",
      "description": "Preparation for practice",
      "Faculty": "pha"
    },
    {
      "title": "PAR4450",
      "description": "Intensive care management of paediatric and obstetric patients",
      "Faculty": "med"
    },
    {
      "title": "PAR4470",
      "description": "Intensive care paramedicine clinical practicum",
      "Faculty": "med"
    },
    {
      "title": "PAR5200",
      "description": "Introduction to aeromedical and retrieval concepts",
      "Faculty": "med"
    },
    {
      "title": "PAR5210",
      "description": "Aeromedical and retrieval professional practice",
      "Faculty": "med"
    },
    {
      "title": "PAR5220",
      "description": "Aeromedical and retrieval clinical 1: Advanced life support/critical care",
      "Faculty": "med"
    },
    {
      "title": "PAR5230",
      "description": "Aeromedical and retrieval coordination",
      "Faculty": "med"
    },
    {
      "title": "PAR5240",
      "description": "Aeromedical retrieval rescue",
      "Faculty": "med"
    },
    {
      "title": "PAR5250",
      "description": "Aeromedical and retrieval clinical 2: Intensive care",
      "Faculty": "med"
    },
    {
      "title": "PAR5320",
      "description": "Extended care paramedicine 1",
      "Faculty": "med"
    },
    {
      "title": "PAR5330",
      "description": "Extended care paramedicine 2",
      "Faculty": "med"
    },
    {
      "title": "PAR5400",
      "description": "Principles of advanced care paramedic practice",
      "Faculty": "med"
    },
    {
      "title": "PAR5410",
      "description": "Pharmacotherapy and clinical toxicology in advanced care paramedic practice",
      "Faculty": "med"
    },
    {
      "title": "PAR5420",
      "description": "Intensive care management of cardiac conditions",
      "Faculty": "med"
    },
    {
      "title": "PAR5430",
      "description": "Intensive care management of respiratory conditions",
      "Faculty": "med"
    },
    {
      "title": "PAR5440",
      "description": "Intensive care management of trauma and environmental conditions",
      "Faculty": "med"
    },
    {
      "title": "PAR5450",
      "description": "Advanced care paramedic management of paediatric and obstetric patients",
      "Faculty": "med"
    },
    {
      "title": "PAR5460",
      "description": "Transition to practice in the intensive care simulated environment",
      "Faculty": "med"
    },
    {
      "title": "PAR5480",
      "description": "Intensive care management of medical conditions",
      "Faculty": "med"
    },
    {
      "title": "PBH1101",
      "description": "Introduction to qualitative research",
      "Faculty": "med"
    },
    {
      "title": "PBH1102",
      "description": "Introduction to communicating health",
      "Faculty": "med"
    },
    {
      "title": "PBH1103",
      "description": "Introduction to health policy and politics",
      "Faculty": "med"
    },
    {
      "title": "PBH1104",
      "description": "Global health: Opportunities and challenges",
      "Faculty": "med"
    },
    {
      "title": "PBH2001",
      "description": "Foundations of epidemiology",
      "Faculty": "med"
    },
    {
      "title": "PBH2002",
      "description": "Foundations of biostatistics",
      "Faculty": "med"
    },
    {
      "title": "PBH2003",
      "description": "Culture, society and health",
      "Faculty": "med"
    },
    {
      "title": "PBH2004",
      "description": "Health, law and ethics",
      "Faculty": "med"
    },
    {
      "title": "PBH2005",
      "description": "Health program planning",
      "Faculty": "med"
    },
    {
      "title": "PBH2006",
      "description": "Treatment and technologies",
      "Faculty": "med"
    },
    {
      "title": "PBH2107",
      "description": "Public health and ethics short international program",
      "Faculty": "med"
    },
    {
      "title": "PGC5005",
      "description": "Journal club",
      "Faculty": "pha"
    },
    {
      "title": "PGC5006",
      "description": "Speciality clinical placement",
      "Faculty": "pha"
    },
    {
      "title": "PGC5007",
      "description": "Introduction to clinical research",
      "Faculty": "pha"
    },
    {
      "title": "PGC5009",
      "description": "Clinical research 3",
      "Faculty": "pha"
    },
    {
      "title": "PGC5101",
      "description": "Evidence based practice",
      "Faculty": "pha"
    },
    {
      "title": "PGC5102",
      "description": "Patient data and pharmacotherapy 1",
      "Faculty": "pha"
    },
    {
      "title": "PGC5103",
      "description": "Patient data and pharmacotherapy 2",
      "Faculty": "pha"
    },
    {
      "title": "PGC5104",
      "description": "Patient data and pharmacotherapy 3",
      "Faculty": "pha"
    },
    {
      "title": "PGC5107",
      "description": "Introduction to clinical research",
      "Faculty": "pha"
    },
    {
      "title": "PGC5108",
      "description": "Clinical research 2",
      "Faculty": "pha"
    },
    {
      "title": "PGC5109",
      "description": "Clinical research 3",
      "Faculty": "pha"
    },
    {
      "title": "PGC5110",
      "description": "Infectious diseases pharmacotherapy",
      "Faculty": "pha"
    },
    {
      "title": "PGC5113",
      "description": "Dermatology",
      "Faculty": "pha"
    },
    {
      "title": "PGC5115",
      "description": "Geriatric pharmacy practice",
      "Faculty": "pha"
    },
    {
      "title": "PGC5116",
      "description": "Geriatric disease state management",
      "Faculty": "pha"
    },
    {
      "title": "PGC5117",
      "description": "Mental health",
      "Faculty": "pha"
    },
    {
      "title": "PGC5118",
      "description": "Palliative care",
      "Faculty": "pha"
    },
    {
      "title": "PGC5119",
      "description": "Advanced practice portfolio",
      "Faculty": "pha"
    },
    {
      "title": "PGP5011",
      "description": "Applied pharmacy practice 1",
      "Faculty": "pha"
    },
    {
      "title": "PGP5012",
      "description": "Applied pharmacy practice 2",
      "Faculty": "pha"
    },
    {
      "title": "PGP5014",
      "description": "Clinical educator preparation",
      "Faculty": "pha"
    },
    {
      "title": "PGP5021",
      "description": "Foundation practice 1",
      "Faculty": "pha"
    },
    {
      "title": "PGP5022",
      "description": "Foundation practice 2",
      "Faculty": "pha"
    },
    {
      "title": "PGW5101",
      "description": "Biology of wound healing",
      "Faculty": "pha"
    },
    {
      "title": "PGW5103",
      "description": "Wound dressings",
      "Faculty": "pha"
    },
    {
      "title": "PGW5104",
      "description": "Management of acute wounds",
      "Faculty": "pha"
    },
    {
      "title": "PGW5105",
      "description": "Management of chronic wounds",
      "Faculty": "pha"
    },
    {
      "title": "PGW5106",
      "description": "Systemic medication and wound healing",
      "Faculty": "pha"
    },
    {
      "title": "PGW5108",
      "description": "Nutrition in wound healing",
      "Faculty": "pha"
    },
    {
      "title": "PGW5109",
      "description": "Dermatology",
      "Faculty": "pha"
    },
    {
      "title": "PGW5111",
      "description": "Alternative therapies",
      "Faculty": "pha"
    },
    {
      "title": "PGW5112",
      "description": "Scar management",
      "Faculty": "pha"
    },
    {
      "title": "PGW5123",
      "description": "Management of burns",
      "Faculty": "pha"
    },
    {
      "title": "PGW5127",
      "description": "Practical wound care training and assessment",
      "Faculty": "pha"
    },
    {
      "title": "PGW5201",
      "description": "Principles of wound healing",
      "Faculty": "pha"
    },
    {
      "title": "PGW5202",
      "description": "Wound assessment",
      "Faculty": "pha"
    },
    {
      "title": "PGW5203",
      "description": "Wound management principles",
      "Faculty": "pha"
    },
    {
      "title": "PGW5204",
      "description": "Acute and chronic wounds",
      "Faculty": "pha"
    },
    {
      "title": "PGW5205",
      "description": "Integrated wound care practice",
      "Faculty": "pha"
    },
    {
      "title": "PGW5206",
      "description": "The diabetes foot",
      "Faculty": "pha"
    },
    {
      "title": "PGW5207",
      "description": "Pressure injury management",
      "Faculty": "pha"
    },
    {
      "title": "PGW5208",
      "description": "Advanced clinical practice in wound care",
      "Faculty": "pha"
    },
    {
      "title": "PGW5209",
      "description": "Clinical risk management and wound care",
      "Faculty": "pha"
    },
    {
      "title": "PGW5210",
      "description": "Burns and scar management",
      "Faculty": "pha"
    },
    {
      "title": "PGW5211",
      "description": "Non-healing wounds and pain management",
      "Faculty": "pha"
    },
    {
      "title": "PHA2022",
      "description": "Drugs and society",
      "Faculty": "sci"
    },
    {
      "title": "PHA3011",
      "description": "Principles of drug action",
      "Faculty": "sci"
    },
    {
      "title": "PHA3021",
      "description": "Drugs in health and disease",
      "Faculty": "sci"
    },
    {
      "title": "PHA3032",
      "description": "Neuro and endocrine pharmacology",
      "Faculty": "sci"
    },
    {
      "title": "PHA3042",
      "description": "Modern drug development",
      "Faculty": "sci"
    },
    {
      "title": "PHA3800",
      "description": "Fundamentals of toxicology",
      "Faculty": "sci"
    },
    {
      "title": "PHA3801",
      "description": "Principles of pharmacology",
      "Faculty": "sci"
    },
    {
      "title": "PHA3990",
      "description": "Action in pharmacology research project",
      "Faculty": "sci"
    },
    {
      "title": "PHC5012",
      "description": "Community based palliative care for health practitioners",
      "Faculty": "med"
    },
    {
      "title": "PHC5100",
      "description": "Research Project in Health Sciences",
      "Faculty": "med"
    },
    {
      "title": "PHC5101",
      "description": "Research Project in Health Sciences (Part-time)",
      "Faculty": "med"
    },
    {
      "title": "PHC5200",
      "description": "Advanced Studies in Health Sciences",
      "Faculty": "med"
    },
    {
      "title": "PHC5201",
      "description": "Advanced Studies in Health Sciences (Part-time)",
      "Faculty": "med"
    },
    {
      "title": "PHC5301",
      "description": "Preventative health and management of chronic disease",
      "Faculty": "med"
    },
    {
      "title": "PHC5302",
      "description": "Common problems in primary care",
      "Faculty": "med"
    },
    {
      "title": "PHC5303",
      "description": "Challenging issues in primary care",
      "Faculty": "med"
    },
    {
      "title": "PHC5304",
      "description": "Primary care across the lifespan",
      "Faculty": "med"
    },
    {
      "title": "PHH1052",
      "description": "Health care systems: Global and local",
      "Faculty": "med"
    },
    {
      "title": "PHH1061",
      "description": "Data, evidence and critical thinking in health",
      "Faculty": "med"
    },
    {
      "title": "PHH1081",
      "description": "Foundations of public health",
      "Faculty": "med"
    },
    {
      "title": "PHH1101",
      "description": "Biological bases of health and disease 1",
      "Faculty": "med"
    },
    {
      "title": "PHH1102",
      "description": "Biological bases of health and disease 2",
      "Faculty": "med"
    },
    {
      "title": "PHH1112",
      "description": "Global health: Opportunities and challenges",
      "Faculty": "med"
    },
    {
      "title": "PHH2022",
      "description": "Culture, society and health",
      "Faculty": "med"
    },
    {
      "title": "PHH2051",
      "description": "Health program planning",
      "Faculty": "med"
    },
    {
      "title": "PHH2101",
      "description": "Health promotion: Global and local",
      "Faculty": "med"
    },
    {
      "title": "PHH2111",
      "description": "Treatments and technologies",
      "Faculty": "med"
    },
    {
      "title": "PHH2141",
      "description": "Analysing patterns of health and disease",
      "Faculty": "med"
    },
    {
      "title": "PHH2142",
      "description": "Research methods in the health sciences",
      "Faculty": "med"
    },
    {
      "title": "PHH3001",
      "description": "Health, law and ethics",
      "Faculty": "med"
    },
    {
      "title": "PHH3002",
      "description": "Health for all in a global world",
      "Faculty": "med"
    },
    {
      "title": "PHH3011",
      "description": "Contemporary health challenges",
      "Faculty": "med"
    },
    {
      "title": "PHH3041",
      "description": "Disease prevention and control",
      "Faculty": "med"
    },
    {
      "title": "PHH3061",
      "description": "Health program evaluation",
      "Faculty": "med"
    },
    {
      "title": "PHH3072",
      "description": "Health policy and politics",
      "Faculty": "med"
    },
    {
      "title": "PHH3082",
      "description": "Health promotion practicum",
      "Faculty": "med"
    },
    {
      "title": "PHH4101",
      "description": "Public health research proposal",
      "Faculty": "med"
    },
    {
      "title": "PHH4102",
      "description": "Contemporary and global public health issues",
      "Faculty": "med"
    },
    {
      "title": "PHH4201",
      "description": "Public health research report",
      "Faculty": "med"
    },
    {
      "title": "PHO1203",
      "description": "Photography 1",
      "Faculty": "ada"
    },
    {
      "title": "PHO1204",
      "description": "Digital Imaging for Contemporary Art",
      "Faculty": "ada"
    },
    {
      "title": "PHO2202",
      "description": "Advanced photography",
      "Faculty": "ada"
    },
    {
      "title": "PHO2204",
      "description": "Video art and the moving image 1",
      "Faculty": "ada"
    },
    {
      "title": "PHO2207",
      "description": "Photographic processes",
      "Faculty": "ada"
    },
    {
      "title": "PHO2208",
      "description": "Photographic lighting studio",
      "Faculty": "ada"
    },
    {
      "title": "PHO3201",
      "description": "Photography and video dialogues",
      "Faculty": "ada"
    },
    {
      "title": "PHO3202",
      "description": "Photomedia virtual studio",
      "Faculty": "ada"
    },
    {
      "title": "PHO3207",
      "description": "Photomedia project 1A",
      "Faculty": "ada"
    },
    {
      "title": "PHO3208",
      "description": "Photomedia project 2",
      "Faculty": "ada"
    },
    {
      "title": "PHO3209",
      "description": "Photomedia Project 1B",
      "Faculty": "ada"
    },
    {
      "title": "PHR1011",
      "description": "Professional Practice I",
      "Faculty": "pha"
    },
    {
      "title": "PHR1012",
      "description": "Professional Practice II",
      "Faculty": "pha"
    },
    {
      "title": "PHR1021",
      "description": "How Medicines Work I",
      "Faculty": "pha"
    },
    {
      "title": "PHR1022",
      "description": "How Medicines Work II",
      "Faculty": "pha"
    },
    {
      "title": "PHR1031",
      "description": "How the Body Works",
      "Faculty": "pha"
    },
    {
      "title": "PHS1011",
      "description": "Classical physics and relativity",
      "Faculty": "sci"
    },
    {
      "title": "PHS1022",
      "description": "Fields and quantum physics",
      "Faculty": "sci"
    },
    {
      "title": "PHS1031",
      "description": "Physics for the living world",
      "Faculty": "sci"
    },
    {
      "title": "PHS1080",
      "description": "Foundation physics",
      "Faculty": "sci"
    },
    {
      "title": "PHS1711",
      "description": "Applied physics",
      "Faculty": "eng"
    },
    {
      "title": "PHS2061",
      "description": "Quantum and thermal physics",
      "Faculty": "sci"
    },
    {
      "title": "PHS2062",
      "description": "Electromagnetism and optics",
      "Faculty": "sci"
    },
    {
      "title": "PHS2081",
      "description": "Atomic, nuclear and condensed matter physics",
      "Faculty": "sci"
    },
    {
      "title": "PHS2350",
      "description": "Physics and astronomy introductory research project 1",
      "Faculty": "sci"
    },
    {
      "title": "PHS2360",
      "description": "Physics and astronomy introductory research project 2",
      "Faculty": "sci"
    },
    {
      "title": "PHS3031",
      "description": "Foundations of contemporary physics",
      "Faculty": "sci"
    },
    {
      "title": "PHS3042",
      "description": "Fundamentals of condensed matter physics",
      "Faculty": "sci"
    },
    {
      "title": "PHS3051",
      "description": "Photon physics",
      "Faculty": "sci"
    },
    {
      "title": "PHS3062",
      "description": "Fundamental particle physics",
      "Faculty": "sci"
    },
    {
      "title": "PHS3131",
      "description": "Theoretical physics",
      "Faculty": "sci"
    },
    {
      "title": "PHS3142",
      "description": "Theoretical physics II",
      "Faculty": "sci"
    },
    {
      "title": "PHS3350",
      "description": "Physics and astronomy research project 1",
      "Faculty": "sci"
    },
    {
      "title": "PHS3360",
      "description": "Physics and astronomy research project 2",
      "Faculty": "sci"
    },
    {
      "title": "PHS4100",
      "description": "Physics honours research project",
      "Faculty": "sci"
    },
    {
      "title": "PHS4110",
      "description": "Physics honours research project - Part 1",
      "Faculty": "sci"
    },
    {
      "title": "PHS4120",
      "description": "Physics honours research project - Part 2",
      "Faculty": "sci"
    },
    {
      "title": "PHS4200",
      "description": "Physics honours coursework",
      "Faculty": "sci"
    },
    {
      "title": "PHS4210",
      "description": "Physics honours coursework - Part 1",
      "Faculty": "sci"
    },
    {
      "title": "PHS4220",
      "description": "Physics honours coursework - Part 2",
      "Faculty": "sci"
    },
    {
      "title": "PHY2011",
      "description": "Neuroscience of communication, sensory and control systems",
      "Faculty": "sci"
    },
    {
      "title": "PHY2032",
      "description": "Endocrine control systems",
      "Faculty": "sci"
    },
    {
      "title": "PHY2042",
      "description": "Body systems physiology",
      "Faculty": "sci"
    },
    {
      "title": "PHY2810",
      "description": "Physiology of human body systems",
      "Faculty": "sci"
    },
    {
      "title": "PHY2820",
      "description": "Physiology of human health",
      "Faculty": "sci"
    },
    {
      "title": "PHY3012",
      "description": "Integrative neuroscience",
      "Faculty": "sci"
    },
    {
      "title": "PHY3072",
      "description": "Exercise physiology and metabolism",
      "Faculty": "sci"
    },
    {
      "title": "PHY3102",
      "description": "Nutrition, metabolism and body weight",
      "Faculty": "sci"
    },
    {
      "title": "PHY3111",
      "description": "Sensory and cognitive neuroscience",
      "Faculty": "sci"
    },
    {
      "title": "PHY3171",
      "description": "Clinical and experimental cardiovascular physiology",
      "Faculty": "sci"
    },
    {
      "title": "PHY3181",
      "description": "Hormones and reproduction",
      "Faculty": "sci"
    },
    {
      "title": "PHY3990",
      "description": "Action in physiology research project",
      "Faculty": "sci"
    },
    {
      "title": "PMH1011",
      "description": "Mental health in the community",
      "Faculty": "med"
    },
    {
      "title": "PMM3020",
      "description": "Psychology, management and marketing",
      "Faculty": "buseco"
    },
    {
      "title": "POM5001",
      "description": "Perioperative management of the cardiac patient",
      "Faculty": "med"
    },
    {
      "title": "POM5002",
      "description": "Acute perioperative medicine",
      "Faculty": "med"
    },
    {
      "title": "POM5003",
      "description": "Organ dysfunction 1",
      "Faculty": "med"
    },
    {
      "title": "POM5004",
      "description": "Organ dysfunction 2",
      "Faculty": "med"
    },
    {
      "title": "PPR3102",
      "description": "Professional practice for interior architecture",
      "Faculty": "ada"
    },
    {
      "title": "PPR3103",
      "description": "Project planning and professional practice for design and multimedia",
      "Faculty": "ada"
    },
    {
      "title": "PPR3202",
      "description": "Professional practice B",
      "Faculty": "ada"
    },
    {
      "title": "PPR4002",
      "description": "Professional practice and business planning for design",
      "Faculty": "ada"
    },
    {
      "title": "PPR4102",
      "description": "Professional practice and business planning for design",
      "Faculty": "ada"
    },
    {
      "title": "PPR5500",
      "description": "Design management and entrepreneurship",
      "Faculty": "ada"
    },
    {
      "title": "PRM1001",
      "description": "The contemporary print: Etching and relief printmaking",
      "Faculty": "ada"
    },
    {
      "title": "PRM1411",
      "description": "Printmedia practice and theory 1A",
      "Faculty": "ada"
    },
    {
      "title": "PRM1412",
      "description": "Printmedia practice and theory 2A",
      "Faculty": "ada"
    },
    {
      "title": "PRM1431",
      "description": "Printmedia practice and theory 1B",
      "Faculty": "ada"
    },
    {
      "title": "PRM1442",
      "description": "Printmedia practice and theory 2B",
      "Faculty": "ada"
    },
    {
      "title": "PRM1511",
      "description": "Artists' Books",
      "Faculty": "ada"
    },
    {
      "title": "PRM2401",
      "description": "Screenprinting and the contemporary poster",
      "Faculty": "ada"
    },
    {
      "title": "PRM2413",
      "description": "Printmedia practice and theory 3A",
      "Faculty": "ada"
    },
    {
      "title": "PRM2414",
      "description": "Printmedia practice and theory 4A",
      "Faculty": "ada"
    },
    {
      "title": "PRM2423",
      "description": "Printmedia practice and theory 3B",
      "Faculty": "ada"
    },
    {
      "title": "PRM2424",
      "description": "Printmedia practice and theory 4B",
      "Faculty": "ada"
    },
    {
      "title": "PRM2512",
      "description": "Artists' books 2",
      "Faculty": "ada"
    },
    {
      "title": "PRM3415",
      "description": "Printmedia practice and theory 5",
      "Faculty": "ada"
    },
    {
      "title": "PRM3416",
      "description": "Printmedia practice and theory 6",
      "Faculty": "ada"
    },
    {
      "title": "PSC1011",
      "description": "Physiology I",
      "Faculty": "pha"
    },
    {
      "title": "PSC1012",
      "description": "Physiology II",
      "Faculty": "pha"
    },
    {
      "title": "PSC1021",
      "description": "Bioorganic and medicinal chemistry I",
      "Faculty": "pha"
    },
    {
      "title": "PSC1022",
      "description": "Bioorganic and medicinal chemistry II",
      "Faculty": "pha"
    },
    {
      "title": "PSC1031",
      "description": "Physical chemistry I",
      "Faculty": "pha"
    },
    {
      "title": "PSC1032",
      "description": "Physical chemistry II",
      "Faculty": "pha"
    },
    {
      "title": "PSC1041",
      "description": "Scientific Inquiry",
      "Faculty": "pha"
    },
    {
      "title": "PSC1042",
      "description": "Multi-disciplinary Pharmaceutical Science",
      "Faculty": "pha"
    },
    {
      "title": "PSC2011",
      "description": "Biochemical pharmacology",
      "Faculty": "pha"
    },
    {
      "title": "PSC2012",
      "description": "Molecular pharmacology",
      "Faculty": "pha"
    },
    {
      "title": "PSC2021",
      "description": "Structural organic chemistry",
      "Faculty": "pha"
    },
    {
      "title": "PSC2031",
      "description": "Analytical methods",
      "Faculty": "pha"
    },
    {
      "title": "PSC2041",
      "description": "Biopharmaceutics",
      "Faculty": "pha"
    },
    {
      "title": "PSC2122",
      "description": "Synthetic organic chemistry",
      "Faculty": "pha"
    },
    {
      "title": "PSC2132",
      "description": "Introduction to spectroscopy",
      "Faculty": "pha"
    },
    {
      "title": "PSC2142",
      "description": "Computational chemistry",
      "Faculty": "pha"
    },
    {
      "title": "PSC2222",
      "description": "Formulation chemistry",
      "Faculty": "pha"
    },
    {
      "title": "PSC2232",
      "description": "Colloid chemistry",
      "Faculty": "pha"
    },
    {
      "title": "PSC2322",
      "description": "Molecular cell biology",
      "Faculty": "pha"
    },
    {
      "title": "PSC2332",
      "description": "Diseased-focused pharmacology - Peripheral",
      "Faculty": "pha"
    },
    {
      "title": "PSC3041",
      "description": "Applied analytical methods",
      "Faculty": "pha"
    },
    {
      "title": "PSC3111",
      "description": "Molecular basis of drug action",
      "Faculty": "pha"
    },
    {
      "title": "PSC3112",
      "description": "Drug discovery and development",
      "Faculty": "pha"
    },
    {
      "title": "PSC3121",
      "description": "Advanced Synthetic organic chemistry",
      "Faculty": "pha"
    },
    {
      "title": "PSC3122",
      "description": "Applied Medicinal Chemistry",
      "Faculty": "pha"
    },
    {
      "title": "PSC3131",
      "description": "Analysis of drug-receptor interactions",
      "Faculty": "pha"
    },
    {
      "title": "PSC3132",
      "description": "Medicinal Chemistry Research Placement",
      "Faculty": "pha"
    },
    {
      "title": "PSC3142",
      "description": "Computational drug design",
      "Faculty": "pha"
    },
    {
      "title": "PSC3211",
      "description": "Industrial Formulation",
      "Faculty": "pha"
    },
    {
      "title": "PSC3212",
      "description": "Product Commercialisation",
      "Faculty": "pha"
    },
    {
      "title": "PSC3221",
      "description": "Biomolecule formulation & modified release technologies",
      "Faculty": "pha"
    },
    {
      "title": "PSC3222",
      "description": "Advanced formulation and nanotechnology",
      "Faculty": "pha"
    },
    {
      "title": "PSC3231",
      "description": "Pharmaceutical Product Manufacture",
      "Faculty": "pha"
    },
    {
      "title": "PSC3232",
      "description": "Formulation Science Placement",
      "Faculty": "pha"
    },
    {
      "title": "PSC3311",
      "description": "Microbiology and immunology",
      "Faculty": "pha"
    },
    {
      "title": "PSC3321",
      "description": "Disease-Focused Pharmacology CNS",
      "Faculty": "pha"
    },
    {
      "title": "PSC3322",
      "description": "Current aspects of cancer biology",
      "Faculty": "pha"
    },
    {
      "title": "PSC3332",
      "description": "Drug Discovery Biology research placement",
      "Faculty": "pha"
    },
    {
      "title": "PSC3432",
      "description": "Medicinal Chemistry pre-honours research project",
      "Faculty": "pha"
    },
    {
      "title": "PSC3532",
      "description": "Formulation Science pre-honours research project",
      "Faculty": "pha"
    },
    {
      "title": "PSC3632",
      "description": "Drug Discovery Biology pre-honours research project",
      "Faculty": "pha"
    },
    {
      "title": "PSC4111",
      "description": "Advanced medicinal chemistry",
      "Faculty": "pha"
    },
    {
      "title": "PSC4112",
      "description": "Research in medicinal chemistry",
      "Faculty": "pha"
    },
    {
      "title": "PSC4211",
      "description": "Advanced formulation science",
      "Faculty": "pha"
    },
    {
      "title": "PSC4212",
      "description": "Research in formulation science",
      "Faculty": "pha"
    },
    {
      "title": "PSC4311",
      "description": "Advanced drug discovery biology",
      "Faculty": "pha"
    },
    {
      "title": "PSC4312",
      "description": "Research in drug discovery biology",
      "Faculty": "pha"
    },
    {
      "title": "PSC4411",
      "description": "Advanced medicine use and safety",
      "Faculty": "pha"
    },
    {
      "title": "PSC4412",
      "description": "Research in Medicine Use and Safety",
      "Faculty": "pha"
    },
    {
      "title": "PSY1011",
      "description": "Psychology 1A",
      "Faculty": "med"
    },
    {
      "title": "PSY1022",
      "description": "Psychology 1B",
      "Faculty": "med"
    },
    {
      "title": "PSY2031",
      "description": "Developmental and biological psychology",
      "Faculty": "med"
    },
    {
      "title": "PSY2042",
      "description": "Personality and social psychology",
      "Faculty": "med"
    },
    {
      "title": "PSY2051",
      "description": "Research design and analysis",
      "Faculty": "med"
    },
    {
      "title": "PSY2061",
      "description": "Biological psychology",
      "Faculty": "med"
    },
    {
      "title": "PSY2071",
      "description": "Developmental psychology",
      "Faculty": "med"
    },
    {
      "title": "PSY2112",
      "description": "Organisational psychology",
      "Faculty": "med"
    },
    {
      "title": "PSY3032",
      "description": "Abnormal psychology",
      "Faculty": "med"
    },
    {
      "title": "PSY3041",
      "description": "Psychological testing, theories of ability and ethics",
      "Faculty": "med"
    },
    {
      "title": "PSY3051",
      "description": "Perception and cognitive psychology",
      "Faculty": "med"
    },
    {
      "title": "PSY3062",
      "description": "Research methods and theory",
      "Faculty": "med"
    },
    {
      "title": "PSY3120",
      "description": "Introduction to counselling",
      "Faculty": "med"
    },
    {
      "title": "PSY3130",
      "description": "Health psychology",
      "Faculty": "med"
    },
    {
      "title": "PSY3150",
      "description": "Contemporary social psychology",
      "Faculty": "med"
    },
    {
      "title": "PSY3180",
      "description": "Human neuropsychology: Developmental and neurodegenerative disorders",
      "Faculty": "med"
    },
    {
      "title": "PSY3190",
      "description": "Addiction studies",
      "Faculty": "med"
    },
    {
      "title": "PSY3250",
      "description": "Positive psychology",
      "Faculty": "med"
    },
    {
      "title": "PSY3270",
      "description": "Neuroscience of cognition and behaviour",
      "Faculty": "med"
    },
    {
      "title": "PSY3280",
      "description": "The neuronal basis of consciousness",
      "Faculty": "med"
    },
    {
      "title": "PSY3310",
      "description": "Introduction to computational neuroscience",
      "Faculty": "med"
    },
    {
      "title": "PSY3320",
      "description": "Sleep and circadian rhythms",
      "Faculty": "med"
    },
    {
      "title": "PSY4032",
      "description": "Abnormal psychology",
      "Faculty": "med"
    },
    {
      "title": "PSY4041",
      "description": "Psychological testing and ethics",
      "Faculty": "med"
    },
    {
      "title": "PSY4051",
      "description": "Research design and analysis",
      "Faculty": "med"
    },
    {
      "title": "PSY4062",
      "description": "Research methods and theory",
      "Faculty": "med"
    },
    {
      "title": "PSY4081",
      "description": "Perception and cognition",
      "Faculty": "med"
    },
    {
      "title": "PSY4100",
      "description": "Psychology honours: Research project",
      "Faculty": "med"
    },
    {
      "title": "PSY4110",
      "description": "Psychology in society",
      "Faculty": "med"
    },
    {
      "title": "PSY4111",
      "description": "Psychology 1A",
      "Faculty": "med"
    },
    {
      "title": "PSY4120",
      "description": "Mental health and illness",
      "Faculty": "med"
    },
    {
      "title": "PSY4122",
      "description": "Psychology 1B",
      "Faculty": "med"
    },
    {
      "title": "PSY4130",
      "description": "Developmental psychology and clinical neuroscience",
      "Faculty": "med"
    },
    {
      "title": "PSY4131",
      "description": "Developmental and biological psychology",
      "Faculty": "med"
    },
    {
      "title": "PSY4140",
      "description": "Introduction to counselling",
      "Faculty": "med"
    },
    {
      "title": "PSY4151",
      "description": "Personality and social psychology",
      "Faculty": "med"
    },
    {
      "title": "PSY4170",
      "description": "Neuroscience of cognition and behaviour",
      "Faculty": "med"
    },
    {
      "title": "PSY4210",
      "description": "Statistics and research design for professional psychology",
      "Faculty": "med"
    },
    {
      "title": "PSY4220",
      "description": "Ethical and professional issues in psychology",
      "Faculty": "med"
    },
    {
      "title": "PSY4270",
      "description": "Psychological assessment and intervention",
      "Faculty": "med"
    },
    {
      "title": "PSY4401",
      "description": "Psychology research project: Statistics and research design for professional psychology",
      "Faculty": "med"
    },
    {
      "title": "PSY4402",
      "description": "Psychology research project: Literature review",
      "Faculty": "med"
    },
    {
      "title": "PSY4403",
      "description": "Psychology research project: Methodology and data collection",
      "Faculty": "med"
    },
    {
      "title": "PSY4404",
      "description": "Psychology research project: results and discussion",
      "Faculty": "med"
    },
    {
      "title": "PSY4405",
      "description": "Ethical and professional issues in psychology",
      "Faculty": "med"
    },
    {
      "title": "PSY4406",
      "description": "Psychological assessment and intervention",
      "Faculty": "med"
    },
    {
      "title": "PSY4407",
      "description": "Psychology in industry: Pathways to employment",
      "Faculty": "med"
    },
    {
      "title": "PSY4408",
      "description": "Perspectives in clinical and developmental neuroscience",
      "Faculty": "med"
    },
    {
      "title": "PSY4409",
      "description": "21st century applications of psychology",
      "Faculty": "med"
    },
    {
      "title": "PSY5100",
      "description": "Research Project in Psychology",
      "Faculty": "med"
    },
    {
      "title": "PSY5101",
      "description": "Research Project in Psychology (Part-time)",
      "Faculty": "med"
    },
    {
      "title": "PSY5200",
      "description": "Advanced Studies in Psychology",
      "Faculty": "med"
    },
    {
      "title": "PSY5201",
      "description": "Advanced Studies in Psychology (Part-time)",
      "Faculty": "med"
    },
    {
      "title": "PTG1001",
      "description": "Painting introduction: materials and methods",
      "Faculty": "ada"
    },
    {
      "title": "PTG1025",
      "description": "Painting as an interdisciplinary practice A",
      "Faculty": "ada"
    },
    {
      "title": "PTG1026",
      "description": "Painting as an interdisciplinary practice B",
      "Faculty": "ada"
    },
    {
      "title": "PTG1511",
      "description": "Painting practice and theory 1A",
      "Faculty": "ada"
    },
    {
      "title": "PTG1512",
      "description": "Painting practice and theory 2A",
      "Faculty": "ada"
    },
    {
      "title": "PTG1531",
      "description": "Painting practice and theory 1B",
      "Faculty": "ada"
    },
    {
      "title": "PTG1542",
      "description": "Painting practice and theory 2B",
      "Faculty": "ada"
    },
    {
      "title": "PTG2030",
      "description": "Painting as an interdisciplinary practice C",
      "Faculty": "ada"
    },
    {
      "title": "PTG2031",
      "description": "Abstraction and non-objective painting",
      "Faculty": "ada"
    },
    {
      "title": "PTG2032",
      "description": "Painting: Installation and the expanded field",
      "Faculty": "ada"
    },
    {
      "title": "PTG2033",
      "description": "Representational painting: Narrative and figuration",
      "Faculty": "ada"
    },
    {
      "title": "PTG2034",
      "description": "Sound and space: Dematerialised form",
      "Faculty": "ada"
    },
    {
      "title": "PTG2035",
      "description": "Interventions: Feminist and conceptual practices",
      "Faculty": "ada"
    },
    {
      "title": "PTG2513",
      "description": "Painting practice and theory 3A",
      "Faculty": "ada"
    },
    {
      "title": "PTG2514",
      "description": "Painting practice and theory 4A",
      "Faculty": "ada"
    },
    {
      "title": "PTG2523",
      "description": "Painting practice and theory 3B",
      "Faculty": "ada"
    },
    {
      "title": "PTG2524",
      "description": "Painting practice and theory 4B",
      "Faculty": "ada"
    },
    {
      "title": "PTG3515",
      "description": "Painting practice and theory 5",
      "Faculty": "ada"
    },
    {
      "title": "PTG3516",
      "description": "Painting practice and theory 6",
      "Faculty": "ada"
    },
    {
      "title": "PTY1011",
      "description": "Physiotherapy 1",
      "Faculty": "med"
    },
    {
      "title": "PTY1022",
      "description": "Physiotherapy 2",
      "Faculty": "med"
    },
    {
      "title": "PTY2000",
      "description": "Honours systematic review",
      "Faculty": "med"
    },
    {
      "title": "PTY2031",
      "description": "Physiotherapy 3",
      "Faculty": "med"
    },
    {
      "title": "PTY2042",
      "description": "Physiotherapy 4",
      "Faculty": "med"
    },
    {
      "title": "PTY3000",
      "description": "Honours research proposal",
      "Faculty": "med"
    },
    {
      "title": "PTY3051",
      "description": "Physiotherapy 5",
      "Faculty": "med"
    },
    {
      "title": "PTY3162",
      "description": "Physiotherapy 6A: Clinical",
      "Faculty": "med"
    },
    {
      "title": "PTY3262",
      "description": "Physiotherapy 6B: Clinical",
      "Faculty": "med"
    },
    {
      "title": "PTY3362",
      "description": "Physiotherapy 6C: Clinical",
      "Faculty": "med"
    },
    {
      "title": "PTY3462",
      "description": "Clinical placement",
      "Faculty": "med"
    },
    {
      "title": "PTY4000",
      "description": "Honours thesis",
      "Faculty": "med"
    },
    {
      "title": "PTY4010",
      "description": "Honours systematic review",
      "Faculty": "med"
    },
    {
      "title": "PTY4020",
      "description": "Honours research proposal",
      "Faculty": "med"
    },
    {
      "title": "PTY4030",
      "description": "Honours thesis",
      "Faculty": "med"
    },
    {
      "title": "PTY4171",
      "description": "Physiotherapy 7A: Clinical",
      "Faculty": "med"
    },
    {
      "title": "PTY4172",
      "description": "Physiotherapy 7B: Clinical",
      "Faculty": "med"
    },
    {
      "title": "PTY4281",
      "description": "Physiotherapy 8A: Clinical",
      "Faculty": "med"
    },
    {
      "title": "PTY4282",
      "description": "Physiotherapy 8B: Clinical",
      "Faculty": "med"
    },
    {
      "title": "PTY4283",
      "description": "Physiotherapy 8C: Campus",
      "Faculty": "med"
    },
    {
      "title": "PTY5100",
      "description": "Enhancing skills in paediatric physiotherapy",
      "Faculty": "med"
    },
    {
      "title": "PTY5101",
      "description": "Advancing skills in paediatric physiotherapy: Cerebral palsy",
      "Faculty": "med"
    },
    {
      "title": "PTY5102",
      "description": "Advancing skills in paediatric physiotherapy: Neonates and infants",
      "Faculty": "med"
    },
    {
      "title": "PTY5103",
      "description": "Principles of paediatric physiotherapy",
      "Faculty": "med"
    },
    {
      "title": "PTY5104",
      "description": "Advancing skills in paediatric physiotherapy: Complex and chronic conditions",
      "Faculty": "med"
    },
    {
      "title": "PTY5105",
      "description": "Advanced physiotherapy clinical skills and project",
      "Faculty": "med"
    },
    {
      "title": "RAD1012",
      "description": "Radiographic science and practice 2",
      "Faculty": "med"
    },
    {
      "title": "RAD1021",
      "description": "Radiologic physics and radiation protection",
      "Faculty": "med"
    },
    {
      "title": "RAD1031",
      "description": "Radiologic biology 1",
      "Faculty": "med"
    },
    {
      "title": "RAD1061",
      "description": "Radiographic science and practice 1",
      "Faculty": "med"
    },
    {
      "title": "RAD1082",
      "description": "Radiologic biology 2",
      "Faculty": "med"
    },
    {
      "title": "RAD2001",
      "description": "Medical imaging science: Radiographic principles",
      "Faculty": "med"
    },
    {
      "title": "RAD2012",
      "description": "Radiographic science and practice 4",
      "Faculty": "med"
    },
    {
      "title": "RAD2051",
      "description": "Radiographic science and practice 3",
      "Faculty": "med"
    },
    {
      "title": "RAD2061",
      "description": "Radiologic biology 3",
      "Faculty": "med"
    },
    {
      "title": "RAD2092",
      "description": "Radiologic biology 4 and sectional anatomy",
      "Faculty": "med"
    },
    {
      "title": "RAD3002",
      "description": "Medical imaging science: Computed tomography",
      "Faculty": "med"
    },
    {
      "title": "RAD3004",
      "description": "Neuroimaging for neuroscience research",
      "Faculty": "med"
    },
    {
      "title": "RAD3042",
      "description": "Medical imaging science and practice 2",
      "Faculty": "med"
    },
    {
      "title": "RAD3051",
      "description": "Medical imaging science and practice 1",
      "Faculty": "med"
    },
    {
      "title": "RAD3061",
      "description": "Medical imaging science (ultrasound)",
      "Faculty": "med"
    },
    {
      "title": "RAD3092",
      "description": "Magnetic resonance imaging (physics and technology)",
      "Faculty": "med"
    },
    {
      "title": "RAD4000",
      "description": "Radiography and medical imaging work experience",
      "Faculty": "med"
    },
    {
      "title": "RAD4070",
      "description": "Research in medical imaging",
      "Faculty": "med"
    },
    {
      "title": "RAD4080",
      "description": "Selected topics in medical imaging",
      "Faculty": "med"
    },
    {
      "title": "RAD4160",
      "description": "Advanced medical imaging and clinical skills",
      "Faculty": "med"
    },
    {
      "title": "RAD4500",
      "description": "Multislice CT and evidence based practice",
      "Faculty": "med"
    },
    {
      "title": "RAD4501",
      "description": "MRI imaging and evidence based practice",
      "Faculty": "med"
    },
    {
      "title": "RAD4502",
      "description": "Principles of general radiography image interpretation",
      "Faculty": "med"
    },
    {
      "title": "RAD4503",
      "description": "Magnetic resonance imaging: Physics, instrumentation and safety",
      "Faculty": "med"
    },
    {
      "title": "RAD4504",
      "description": "Magnetic resonance imaging: Musculo-skeletal system",
      "Faculty": "med"
    },
    {
      "title": "RAD4505",
      "description": "Magnetic resonance imaging: Head, spine abdomen and pelvis",
      "Faculty": "med"
    },
    {
      "title": "RAD4506",
      "description": "Magnetic resonance imaging: Advanced imaging techniques",
      "Faculty": "med"
    },
    {
      "title": "RAD5105",
      "description": "Pathology for advanced medical imaging practice",
      "Faculty": "med"
    },
    {
      "title": "RAD5106",
      "description": "Medical imaging data management and health informatics",
      "Faculty": "it"
    },
    {
      "title": "RAD5107",
      "description": "Hybrid and molecular imaging",
      "Faculty": "med"
    },
    {
      "title": "RAD5108",
      "description": "Advanced general radiography image interpretation 1",
      "Faculty": "med"
    },
    {
      "title": "RAD5109",
      "description": "Advanced general radiography image interpretation 2",
      "Faculty": "med"
    },
    {
      "title": "RAD5110",
      "description": "Advanced CT and clinical decision making 1",
      "Faculty": "med"
    },
    {
      "title": "RAD5111",
      "description": "Advanced CT and clinical decision making 2",
      "Faculty": "med"
    },
    {
      "title": "RAD5201",
      "description": "Emergency image interpretation 1",
      "Faculty": "med"
    },
    {
      "title": "RAD5202",
      "description": "Emergency image interpretation 2",
      "Faculty": "med"
    },
    {
      "title": "RSE4111",
      "description": "Numerical modelling",
      "Faculty": "eng"
    },
    {
      "title": "RSE4112",
      "description": "Advanced rock mechanics",
      "Faculty": "eng"
    },
    {
      "title": "RTP4101",
      "description": "Professional issues in radiation therapy 1",
      "Faculty": "med"
    },
    {
      "title": "RTP4102",
      "description": "Professional issues in radiation therapy 2",
      "Faculty": "med"
    },
    {
      "title": "RTP4103",
      "description": "Specialised techniques in radiation therapy",
      "Faculty": "med"
    },
    {
      "title": "RTP5101",
      "description": "Patient care and assessment in radiation therapy",
      "Faculty": "med"
    },
    {
      "title": "RTP5102",
      "description": "Current issues in radiation therapy and oncology",
      "Faculty": "med"
    },
    {
      "title": "RTP5103",
      "description": "Contemporary approaches to radiation therapy of the breast",
      "Faculty": "med"
    },
    {
      "title": "RTP5104",
      "description": "Advanced imaging for radiation therapy",
      "Faculty": "med"
    },
    {
      "title": "RTS2001",
      "description": "Professional practice in radiation therapy",
      "Faculty": "med"
    },
    {
      "title": "RTS4101",
      "description": "Radiation therapy science 1",
      "Faculty": "med"
    },
    {
      "title": "RTS4102",
      "description": "Radiation therapy science 2",
      "Faculty": "med"
    },
    {
      "title": "RTS4103",
      "description": "Radiation therapy science 3",
      "Faculty": "med"
    },
    {
      "title": "RTS5101",
      "description": "Radiation therapy science 4",
      "Faculty": "med"
    },
    {
      "title": "RTS5102",
      "description": "Radiation therapy science 5",
      "Faculty": "med"
    },
    {
      "title": "RTS5103",
      "description": "Radiation therapy science 6",
      "Faculty": "med"
    },
    {
      "title": "RTS5104",
      "description": "Radiation therapy science 7",
      "Faculty": "med"
    },
    {
      "title": "RTS5105",
      "description": "Radiation therapy science 8",
      "Faculty": "med"
    },
    {
      "title": "RTS5110",
      "description": "Radiation therapy science and practice 1",
      "Faculty": "med"
    },
    {
      "title": "RTS5120",
      "description": "Radiation therapy science and practice 2",
      "Faculty": "med"
    },
    {
      "title": "RUR5100",
      "description": "Research Project in Rural Health",
      "Faculty": "med"
    },
    {
      "title": "RUR5101",
      "description": "Research Project in Rural Health (Part time)",
      "Faculty": "med"
    },
    {
      "title": "RUR5200",
      "description": "Advanced Studies in Rural Health",
      "Faculty": "med"
    },
    {
      "title": "RUR5201",
      "description": "Advanced Studies in Rural Health (Part time)",
      "Faculty": "med"
    },
    {
      "title": "SCI1020",
      "description": "Introduction to statistical reasoning",
      "Faculty": "sci"
    },
    {
      "title": "SCI1200",
      "description": "Humans, evolution and modern society",
      "Faculty": "sci"
    },
    {
      "title": "SCI1300",
      "description": "Climate change: From science to society",
      "Faculty": "sci"
    },
    {
      "title": "SCI1501",
      "description": "Impact through science 1A",
      "Faculty": "sci"
    },
    {
      "title": "SCI1502",
      "description": "Impact through science 1B",
      "Faculty": "sci"
    },
    {
      "title": "SCI1800",
      "description": "The sustainable planet",
      "Faculty": "sci"
    },
    {
      "title": "SCI2010",
      "description": "Scientific practice and communication",
      "Faculty": "sci"
    },
    {
      "title": "SCI2015",
      "description": "Scientific practice and communication (advanced)",
      "Faculty": "sci"
    },
    {
      "title": "SCI2501",
      "description": "Impact through science 2A",
      "Faculty": "sci"
    },
    {
      "title": "SCI2502",
      "description": "Impact through science 2B",
      "Faculty": "sci"
    },
    {
      "title": "SCI3501",
      "description": "Impact through science 3A",
      "Faculty": "sci"
    },
    {
      "title": "SCI3502",
      "description": "Impact through science 3B",
      "Faculty": "sci"
    },
    {
      "title": "SCI3716",
      "description": "Laboratory and workplace management",
      "Faculty": "sci"
    },
    {
      "title": "SCI3790",
      "description": "Science in action communication project",
      "Faculty": "sci"
    },
    {
      "title": "SCI3800",
      "description": "Science internship",
      "Faculty": "sci"
    },
    {
      "title": "SCI3910",
      "description": "Schools science project",
      "Faculty": "sci"
    },
    {
      "title": "SCI3920",
      "description": "Science industry placement",
      "Faculty": "sci"
    },
    {
      "title": "SCI3990",
      "description": "Science in action research project",
      "Faculty": "sci"
    },
    {
      "title": "SCI4100",
      "description": "Science honours project",
      "Faculty": "sci"
    },
    {
      "title": "SCI4110",
      "description": "Science honours project",
      "Faculty": "sci"
    },
    {
      "title": "SCI4120",
      "description": "Science honours project",
      "Faculty": "sci"
    },
    {
      "title": "SCI4210",
      "description": "Science honours coursework",
      "Faculty": "sci"
    },
    {
      "title": "SCI4220",
      "description": "Science honours coursework",
      "Faculty": "sci"
    },
    {
      "title": "SCI4230",
      "description": "Science honours coursework",
      "Faculty": "sci"
    },
    {
      "title": "SCI4240",
      "description": "Science honours coursework",
      "Faculty": "sci"
    },
    {
      "title": "SCI4501",
      "description": "Impact through science 4A: Research",
      "Faculty": "sci"
    },
    {
      "title": "SCI4502",
      "description": "Impact through science 4B: Professional practice",
      "Faculty": "sci"
    },
    {
      "title": "SCM5100",
      "description": "MSc Prelim research project",
      "Faculty": "sci"
    },
    {
      "title": "SCM5200",
      "description": "MSc Prelim coursework",
      "Faculty": "sci"
    },
    {
      "title": "SCS5100",
      "description": "Research Project in Medical Science",
      "Faculty": "med"
    },
    {
      "title": "SCS5101",
      "description": "Research Project in Medical Science (Part-time)",
      "Faculty": "med"
    },
    {
      "title": "SCS5200",
      "description": "Advanced Studies in Medical Science",
      "Faculty": "med"
    },
    {
      "title": "SCS5201",
      "description": "Advanced Project in Medical Science (Part-time)",
      "Faculty": "med"
    },
    {
      "title": "SCS5300",
      "description": "Research Project in Health Sciences",
      "Faculty": "med"
    },
    {
      "title": "SCS5301",
      "description": "Research Project in Health Sciences (Part-time)",
      "Faculty": "med"
    },
    {
      "title": "SCS5400",
      "description": "Advanced Studies in Health Sciences",
      "Faculty": "med"
    },
    {
      "title": "SCS5401",
      "description": "Advanced Studies in Health Sciences (Part-time)",
      "Faculty": "med"
    },
    {
      "title": "SCU1021",
      "description": "Contemporary casting",
      "Faculty": "ada"
    },
    {
      "title": "SCU1022",
      "description": "Sculptural construction: Woodworking and welding",
      "Faculty": "ada"
    },
    {
      "title": "SCU1611",
      "description": "Sculpture practice and theory 1A",
      "Faculty": "ada"
    },
    {
      "title": "SCU1612",
      "description": "Sculpture practice and theory 2A",
      "Faculty": "ada"
    },
    {
      "title": "SCU1631",
      "description": "Sculpture practice and theory 1B",
      "Faculty": "ada"
    },
    {
      "title": "SCU1642",
      "description": "Sculpture practice and theory 2B",
      "Faculty": "ada"
    },
    {
      "title": "SCU2021",
      "description": "Advanced moulding and casting",
      "Faculty": "ada"
    },
    {
      "title": "SCU2022",
      "description": "Site specificity: Sculptural and installation interventions",
      "Faculty": "ada"
    },
    {
      "title": "SCU2613",
      "description": "Sculpture practice and theory 3A",
      "Faculty": "ada"
    },
    {
      "title": "SCU2614",
      "description": "Sculpture practice and theory 4A",
      "Faculty": "ada"
    },
    {
      "title": "SCU2623",
      "description": "Sculpture practice and theory 3B",
      "Faculty": "ada"
    },
    {
      "title": "SCU2624",
      "description": "Sculpture practice and theory 4B",
      "Faculty": "ada"
    },
    {
      "title": "SCU3615",
      "description": "Sculpture practice and theory 5",
      "Faculty": "ada"
    },
    {
      "title": "SCU3616",
      "description": "Sculpture practice and theory 6",
      "Faculty": "ada"
    },
    {
      "title": "SON4000",
      "description": "Physics of medical ultrasound and instrumentation",
      "Faculty": "med"
    },
    {
      "title": "SON4010",
      "description": "Embryology, anatomy and pathophysiology",
      "Faculty": "med"
    },
    {
      "title": "SON5000",
      "description": "Ultrasound research",
      "Faculty": "med"
    },
    {
      "title": "SON5020",
      "description": "Sonographic professional skills and sonography of the breast and thyroid",
      "Faculty": "med"
    },
    {
      "title": "SON5021",
      "description": "Sonographic abdominal imaging",
      "Faculty": "med"
    },
    {
      "title": "SON5022",
      "description": "Sonographic imaging of the reproductive system",
      "Faculty": "med"
    },
    {
      "title": "SON5023",
      "description": "Obstetric sonography",
      "Faculty": "med"
    },
    {
      "title": "SON5024",
      "description": "Musculoskeletal, neonatal and paediatric sonography",
      "Faculty": "med"
    },
    {
      "title": "SON5025",
      "description": "Sonographic vascular and postoperative imaging",
      "Faculty": "med"
    },
    {
      "title": "SRH3001",
      "description": "Health and health care practices for communities",
      "Faculty": "med"
    },
    {
      "title": "SRH5000",
      "description": "Health and health care practices for communities",
      "Faculty": "med"
    },
    {
      "title": "SRH5001",
      "description": "Research methods for health",
      "Faculty": "med"
    },
    {
      "title": "SRH5003",
      "description": "Designing and conducting health research",
      "Faculty": "med"
    },
    {
      "title": "SRH5016",
      "description": "Interprofessional practice in communities",
      "Faculty": "med"
    },
    {
      "title": "SRH5032",
      "description": "Applied research for health practitioners",
      "Faculty": "med"
    },
    {
      "title": "STA1010",
      "description": "Statistical methods for science",
      "Faculty": "sci"
    },
    {
      "title": "STA2216",
      "description": "Data analysis for science",
      "Faculty": "sci"
    },
    {
      "title": "SWK1011",
      "description": "Introduction to human services practice",
      "Faculty": "med"
    },
    {
      "title": "SWK2001",
      "description": "Introduction to the Australian welfare state",
      "Faculty": "med"
    },
    {
      "title": "SWK2110",
      "description": "Social welfare and the law",
      "Faculty": "med"
    },
    {
      "title": "SWK2140",
      "description": "Social welfare and practice with communities",
      "Faculty": "med"
    },
    {
      "title": "SWK3080",
      "description": "Planning for supervised professional practice placement 1",
      "Faculty": "med"
    },
    {
      "title": "SWK3180",
      "description": "Supervised professional practice 1",
      "Faculty": "med"
    },
    {
      "title": "SWK3220",
      "description": "Social work in a globalised world",
      "Faculty": "med"
    },
    {
      "title": "SWK3230",
      "description": "Social work research",
      "Faculty": "med"
    },
    {
      "title": "SWK3310",
      "description": "Social welfare practice and research",
      "Faculty": "med"
    },
    {
      "title": "SWK3400",
      "description": "Critical social work 1: Individuals and families (context and practice)",
      "Faculty": "med"
    },
    {
      "title": "SWK3410",
      "description": "Critical social work 2: Community work, context and practice",
      "Faculty": "med"
    },
    {
      "title": "SWK3440",
      "description": "Leadership in social work and human services",
      "Faculty": "med"
    },
    {
      "title": "SWK4001",
      "description": "Honours research methods",
      "Faculty": "med"
    },
    {
      "title": "SWK4002",
      "description": "Honours project seminar",
      "Faculty": "med"
    },
    {
      "title": "SWK4003",
      "description": "Social work honours dissertation",
      "Faculty": "med"
    },
    {
      "title": "SWK4030",
      "description": "Human rights, legal and ethics knowledge for social work practice",
      "Faculty": "med"
    },
    {
      "title": "SWK4031",
      "description": "Working with complexity",
      "Faculty": "med"
    },
    {
      "title": "SWK4032",
      "description": "Working with complexity: Honours",
      "Faculty": "med"
    },
    {
      "title": "SWK4060",
      "description": "Planning for supervised professional practice placement 2",
      "Faculty": "med"
    },
    {
      "title": "SWK4400",
      "description": "Critical social work 3: Group work and community engagement (context and practice)",
      "Faculty": "med"
    },
    {
      "title": "SWK4401",
      "description": "Critical social work 4: Individual, health and society (context and practice)",
      "Faculty": "med"
    },
    {
      "title": "SWK4450",
      "description": "Social policy and social justice",
      "Faculty": "med"
    },
    {
      "title": "SWK4451",
      "description": "Social policy and social justice: Honours",
      "Faculty": "med"
    },
    {
      "title": "SWK4560",
      "description": "Supervised professional practice 2",
      "Faculty": "med"
    },
    {
      "title": "SWM5003",
      "description": "Planning for supervised professional practice placement 1",
      "Faculty": "med"
    },
    {
      "title": "SWM5008",
      "description": "Planning for supervised professional practice placement 2",
      "Faculty": "med"
    },
    {
      "title": "SWM5100",
      "description": "Social work: Leading sustainable change",
      "Faculty": "med"
    },
    {
      "title": "SWM5101",
      "description": "Human rights, law and ethics contexts for social work practice",
      "Faculty": "med"
    },
    {
      "title": "SWM5102",
      "description": "Critical social work 1: Frameworks for practice with children and families",
      "Faculty": "med"
    },
    {
      "title": "SWM5103",
      "description": "Supervised professional practice 1",
      "Faculty": "med"
    },
    {
      "title": "SWM5104",
      "description": "Critical social work 2: Frameworks for practice in health and mental health",
      "Faculty": "med"
    },
    {
      "title": "SWM5105",
      "description": "Social work practice and research",
      "Faculty": "med"
    },
    {
      "title": "SWM5106",
      "description": "Critical social work 3: Community engagement group project",
      "Faculty": "med"
    },
    {
      "title": "SWM5108",
      "description": "Supervised professional practice 2",
      "Faculty": "med"
    },
    {
      "title": "SWM5109",
      "description": "Critical social work 4: Social policy, social change and community practice",
      "Faculty": "med"
    },
    {
      "title": "SWM5110",
      "description": "Advances in direct social work practice",
      "Faculty": "med"
    },
    {
      "title": "SWM5111",
      "description": "Leadership in social work and human services",
      "Faculty": "med"
    },
    {
      "title": "SWM5112",
      "description": "Research for social work practice",
      "Faculty": "med"
    },
    {
      "title": "SWM5120",
      "description": "Criminology and social work",
      "Faculty": "med"
    },
    {
      "title": "SWM5160",
      "description": "The child in society: Promoting children's wellbeing and responding to child maltreatment",
      "Faculty": "med"
    },
    {
      "title": "SWM5170",
      "description": "Applied research study",
      "Faculty": "med"
    },
    {
      "title": "SWM5180",
      "description": "Management of human resources in the social services",
      "Faculty": "med"
    },
    {
      "title": "SWM5190",
      "description": "Social work research",
      "Faculty": "med"
    },
    {
      "title": "SWM5200",
      "description": "Health and social work",
      "Faculty": "med"
    },
    {
      "title": "SWM5220",
      "description": "Longevity and social work",
      "Faculty": "med"
    },
    {
      "title": "SWM5241",
      "description": "Mental health practice",
      "Faculty": "med"
    },
    {
      "title": "SWM5250",
      "description": "Clinical supervision: Becoming a professional developer",
      "Faculty": "med"
    },
    {
      "title": "SWM5260",
      "description": "Gender, climate change and social sustainability",
      "Faculty": "med"
    },
    {
      "title": "TAD1101",
      "description": "Introduction to visual culture in art design and architecture",
      "Faculty": "ada"
    },
    {
      "title": "TAD1102",
      "description": "Modernism and the avant-gardes",
      "Faculty": "ada"
    },
    {
      "title": "TAD2102",
      "description": "Post-war practices 2A",
      "Faculty": "ada"
    },
    {
      "title": "TAD2109",
      "description": "Constructing art in Australia: colonialism to postcolonialism 2",
      "Faculty": "ada"
    },
    {
      "title": "TAD2138",
      "description": "Space, Place and Society",
      "Faculty": "ada"
    },
    {
      "title": "TAD2203",
      "description": "History and criticism of interiors and furniture 2A",
      "Faculty": "ada"
    },
    {
      "title": "TAD2206",
      "description": "Ornament, meaning and design 2A",
      "Faculty": "ada"
    },
    {
      "title": "TAD2207",
      "description": "Popular culture and contemporary communication 2",
      "Faculty": "ada"
    },
    {
      "title": "TAD2214",
      "description": "Critical issues in design",
      "Faculty": "ada"
    },
    {
      "title": "TAD3102",
      "description": "Post-war practices 3A",
      "Faculty": "ada"
    },
    {
      "title": "TAD3105",
      "description": "Contemporary International Art since 1989",
      "Faculty": "ada"
    },
    {
      "title": "TAD3109",
      "description": "Constructing art in Australia: colonialism to postcolonialism 3A",
      "Faculty": "ada"
    },
    {
      "title": "TAD3203",
      "description": "History and criticism of interiors and furniture 3A",
      "Faculty": "ada"
    },
    {
      "title": "TAD3206",
      "description": "Ornament, meaning and design 3A",
      "Faculty": "ada"
    },
    {
      "title": "TAD3214",
      "description": "Contemporary discourse in design",
      "Faculty": "ada"
    },
    {
      "title": "TAD4503",
      "description": "Advanced art theory",
      "Faculty": "ada"
    },
    {
      "title": "TAD4504",
      "description": "Art theory research seminar",
      "Faculty": "ada"
    },
    {
      "title": "TAD4523",
      "description": "Design research methods and seminar",
      "Faculty": "ada"
    },
    {
      "title": "TAD4542",
      "description": "Research seminar in design",
      "Faculty": "ada"
    },
    {
      "title": "TAD4793",
      "description": "Issues for multimedia practice",
      "Faculty": "ada"
    },
    {
      "title": "TAD4794",
      "description": "Multimedia and society",
      "Faculty": "ada"
    },
    {
      "title": "TAD5500",
      "description": "Exegesis",
      "Faculty": "ada"
    },
    {
      "title": "TDN1002",
      "description": "Design and the avant-garde",
      "Faculty": "ada"
    },
    {
      "title": "TDN2001",
      "description": "Sociologies of design",
      "Faculty": "ada"
    },
    {
      "title": "TDN2002",
      "description": "Communication design theory",
      "Faculty": "ada"
    },
    {
      "title": "TDN3001",
      "description": "Research for design",
      "Faculty": "ada"
    },
    {
      "title": "TDN3002",
      "description": "Design strategy and professional practice",
      "Faculty": "ada"
    },
    {
      "title": "TDN3003",
      "description": "Design criticism",
      "Faculty": "ada"
    },
    {
      "title": "TDN4001",
      "description": "Research methods in industrial design",
      "Faculty": "ada"
    },
    {
      "title": "TDN4401",
      "description": "Human factors for interaction design",
      "Faculty": "ada"
    },
    {
      "title": "TRC2001",
      "description": "Introduction to systems engineering",
      "Faculty": "eng"
    },
    {
      "title": "TRC2200",
      "description": "Thermo-fluids and power systems",
      "Faculty": "eng"
    },
    {
      "title": "TRC2201",
      "description": "Mechanics",
      "Faculty": "eng"
    },
    {
      "title": "TRC3000",
      "description": "Mechatronics project II",
      "Faculty": "eng"
    },
    {
      "title": "TRC3200",
      "description": "Dynamical systems",
      "Faculty": "eng"
    },
    {
      "title": "TRC3500",
      "description": "Sensors and artificial perception",
      "Faculty": "eng"
    },
    {
      "title": "TRC3600",
      "description": "Modelling and control",
      "Faculty": "eng"
    },
    {
      "title": "TRC3801",
      "description": "Mechatronics and manufacturing",
      "Faculty": "eng"
    },
    {
      "title": "TRC4000",
      "description": "Mechatronics final year project I",
      "Faculty": "eng"
    },
    {
      "title": "TRC4001",
      "description": "Mechatronics final year project II",
      "Faculty": "eng"
    },
    {
      "title": "TRC4002",
      "description": "Professional practice",
      "Faculty": "eng"
    },
    {
      "title": "TRC4100",
      "description": "Bio-interfacing devices",
      "Faculty": "eng"
    },
    {
      "title": "TRC4800",
      "description": "Robotics",
      "Faculty": "eng"
    },
    {
      "title": "TRC4900",
      "description": "Real time embedded systems",
      "Faculty": "eng"
    },
    {
      "title": "TRC4901",
      "description": "Computation intelligence and AI",
      "Faculty": "eng"
    },
    {
      "title": "TRM4001",
      "description": "Introduction to clinical trials",
      "Faculty": "med"
    },
    {
      "title": "TRM4002",
      "description": "Translational research",
      "Faculty": "med"
    },
    {
      "title": "TRM6001",
      "description": "Introduction to clinical trials",
      "Faculty": "med"
    },
    {
      "title": "TRM6002",
      "description": "Translational research",
      "Faculty": "med"
    },
    {
      "title": "VAM4010",
      "description": "Visual culture and its theories",
      "Faculty": "ada"
    },
    {
      "title": "VAM4021",
      "description": "Beyond the museum: Institutions and insurrections",
      "Faculty": "ada"
    },
    {
      "title": "VAM5010",
      "description": "Visual culture and its theories",
      "Faculty": "ada"
    },
    {
      "title": "VAM5021",
      "description": "Beyond the Museum: Institutions and Insurrections",
      "Faculty": "ada"
    },
    {
      "title": "VCM1001",
      "description": "Visual communication",
      "Faculty": "ada"
    },
    {
      "title": "VCM1002",
      "description": "Multimedia imaging (moving image studies)",
      "Faculty": "ada"
    },
    {
      "title": "VCM4029",
      "description": "Designing multimedia systems",
      "Faculty": "ada"
    },
    {
      "title": "VCM4101",
      "description": "Introduction to multimedia imaging",
      "Faculty": "ada"
    },
    {
      "title": "VCM4601",
      "description": "Design principles for multimedia 1",
      "Faculty": "ada"
    },
    {
      "title": "VCM4602",
      "description": "Design principles for multimedia 2",
      "Faculty": "ada"
    },
    {
      "title": "VCM4604",
      "description": "Information design for multimedia",
      "Faculty": "ada"
    },
    {
      "title": "VCM5001",
      "description": "Multimedia Product Development",
      "Faculty": "ada"
    },
    {
      "title": "VCO1104",
      "description": "Graphic design studio 2",
      "Faculty": "ada"
    },
    {
      "title": "VCO1203",
      "description": "Introduction to contemporary illustration",
      "Faculty": "ada"
    },
    {
      "title": "VCO1302",
      "description": "Typography 1",
      "Faculty": "ada"
    },
    {
      "title": "VCO1303",
      "description": "The language of graphic design",
      "Faculty": "ada"
    },
    {
      "title": "VCO2003",
      "description": "Graphic design studio 3",
      "Faculty": "ada"
    },
    {
      "title": "VCO2004",
      "description": "Graphic design studio 4",
      "Faculty": "ada"
    },
    {
      "title": "VCO2204",
      "description": "Illustration as design",
      "Faculty": "ada"
    },
    {
      "title": "VCO2205",
      "description": "Illustration for editorial",
      "Faculty": "ada"
    },
    {
      "title": "VCO2304",
      "description": "Typography 2",
      "Faculty": "ada"
    },
    {
      "title": "VCO2402",
      "description": "Advertising design 1",
      "Faculty": "ada"
    },
    {
      "title": "VCO2409",
      "description": "Methods of production",
      "Faculty": "ada"
    },
    {
      "title": "VCO2904",
      "description": "Image, communication and location",
      "Faculty": "ada"
    },
    {
      "title": "VCO3005",
      "description": "Graphic design studio 5",
      "Faculty": "ada"
    },
    {
      "title": "VCO3006",
      "description": "Graphic design studio 6",
      "Faculty": "ada"
    },
    {
      "title": "VCO3206",
      "description": "Conceptual illustration",
      "Faculty": "ada"
    },
    {
      "title": "VCO3207",
      "description": "The business of illustration",
      "Faculty": "ada"
    },
    {
      "title": "VCO3305",
      "description": "Digital font design",
      "Faculty": "ada"
    },
    {
      "title": "VCO3307",
      "description": "Typography 3",
      "Faculty": "ada"
    },
    {
      "title": "VCO3403",
      "description": "Advertising design 2",
      "Faculty": "ada"
    },
    {
      "title": "VCO4107",
      "description": "Major project (visual communication) part 1",
      "Faculty": "ada"
    },
    {
      "title": "VCO4108",
      "description": "Major project (visual communication) part 2",
      "Faculty": "ada"
    },
    {
      "title": "VCO4204",
      "description": "Illustration",
      "Faculty": "ada"
    },
    {
      "title": "VIS1111",
      "description": "Visual arts studio 1",
      "Faculty": "ada"
    },
    {
      "title": "VIS1112",
      "description": "Visual arts studio 2",
      "Faculty": "ada"
    },
    {
      "title": "VIS2103",
      "description": "Visual arts studio 3",
      "Faculty": "ada"
    },
    {
      "title": "VIS2104",
      "description": "Visual arts studio 4",
      "Faculty": "ada"
    },
    {
      "title": "VIS2113",
      "description": "Visual arts studio 3A",
      "Faculty": "ada"
    },
    {
      "title": "VIS2114",
      "description": "Visual arts studio 4A",
      "Faculty": "ada"
    },
    {
      "title": "VIS3101",
      "description": "Co-operative Work Experience",
      "Faculty": "ada"
    },
    {
      "title": "VIS3105",
      "description": "Visual arts studio 5",
      "Faculty": "ada"
    },
    {
      "title": "VIS3106",
      "description": "Visual arts studio 6",
      "Faculty": "ada"
    },
    {
      "title": "VIS4001",
      "description": "Project studies (visual arts honours)",
      "Faculty": "ada"
    },
    {
      "title": "VIS4002",
      "description": "Major project (visual arts honours)",
      "Faculty": "ada"
    },
    {
      "title": "VPR1001",
      "description": "Visual Practices 1",
      "Faculty": "ada"
    },
    {
      "title": "VPR1002",
      "description": "Visual Practices 2",
      "Faculty": "ada"
    },
    {
      "title": "VPR1011",
      "description": "Visual practices 1",
      "Faculty": "ada"
    },
    {
      "title": "VPR1012",
      "description": "Visual practices 2",
      "Faculty": "ada"
    },
    {
      "title": "VPR1113",
      "description": "Research practices",
      "Faculty": "ada"
    },
    {
      "title": "VPR2001",
      "description": "Visual Practices 3",
      "Faculty": "ada"
    },
    {
      "title": "VPR2002",
      "description": "Visual Practices 4",
      "Faculty": "ada"
    },
    {
      "title": "VPR2011",
      "description": "Research practices advanced",
      "Faculty": "ada"
    },
    {
      "title": "VPR2012",
      "description": "Professional practice",
      "Faculty": "ada"
    },
    {
      "title": "VPR3001",
      "description": "Visual Practices 5",
      "Faculty": "ada"
    },
    {
      "title": "VPR3002",
      "description": "Visual Practices 6",
      "Faculty": "ada"
    },
    {
      "title": "VPR3011",
      "description": "Professional practice advanced",
      "Faculty": "ada"
    },
    {
      "title": "VPR3012",
      "description": "Visual practices 3",
      "Faculty": "ada"
    },
    {
      "title": "VSA4002(A)",
      "description": "Minor thesis part 1",
      "Faculty": "ada"
    },
    {
      "title": "VSA4002(B)",
      "description": "Minor thesis part 2",
      "Faculty": "ada"
    },
    {
      "title": "VSA4012",
      "description": "Visual culture and its theories",
      "Faculty": "ada"
    },
    {
      "title": "VSA4022",
      "description": "Beyond the museum",
      "Faculty": "ada"
    },
    {
      "title": "VSA4025",
      "description": "Visual culture internship",
      "Faculty": "ada"
    },
    {
      "title": "VSA4076",
      "description": "Australian postmodernism",
      "Faculty": "ada"
    }
  ];

  $('.ui.search')
    .search({
      source : content,
      searchFields   : [
        'title', 'description'
      ],
      searchFullText: false,
      minCharacters: 3,
      maxResults: 5
    })  ;
});
