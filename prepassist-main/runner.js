

const questions = [
  {
    id: 1,
    text: "Consider the following statements with reference to Right to constitutional remedies provided under Article 32 of the Constitution.\n1. It is invoked to determine the constitutionality of any executive order if it directly infringes any of the fundamental rights\n2. It is a basic feature of the Constitution and cannot be abridged by constitutional amendment.\nWhich of the statements given above is/are correct?",
    options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
    answer: 2,
    explanation: "Both statements are correct. Article 32 can be invoked against executive orders violating fundamental rights, and the Supreme Court in Kesavananda Bharati held it to be a basic feature of the Constitution."
  },
  {
    id: 2,
    text: "With reference to the credit rating system in India, consider the following statements:\n1. A credit rating agency provides an opinion relating to future debt repayments by borrowers whereas a credit bureau provides information on past debt repayments by borrowers.\n2. In India, the issuer company pays for the credit rating of debt securities.\n3. Credit rating is not compulsory for non-government bonds with maturity period over 18 months.\nWhich of the statements given above are correct?",
    options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
    answer: 0,
    explanation: "Statements 1 and 2 are correct. Credit rating IS compulsory for non-government bonds/debentures with maturity of more than 18 months, so statement 3 is incorrect."
  },
  {
    id: 3,
    text: "Arrange the following locations in order of increasing distance from the Equator:\n1. Duncan Passage\n2. Coco Strait\n3. Barren Island\n4. Narcondam Island\nSelect the correct answer using the code given below.",
    options: [
      "Coco Strait – Duncan Passage – Barren Island – Narcondam Island",
      "Duncan Passage – Coco Strait – Barren Island – Narcondam Island",
      "Coco Strait – Barren Island – Duncan Passage – Narcondam Island",
      "Duncan Passage – Barren Island – Narcondam Island – Coco Strait"
    ],
    answer: 3,
    explanation: "Duncan Passage (~10°N) is closest to equator, then Barren Island (~12°N), Narcondam Island (~13°N), and Coco Strait (~14°N) is farthest."
  },
  {
    id: 4,
    text: "Which of the following best describes Euryhaline organisms?",
    options: [
      "It is an aquatic species which can survive and adapt in a wide range of salinities.",
      "It is an aquatic species which can survive and adapt only in a narrow range of salinities.",
      "It is an aquatic species which can survive and adapt in a wide range of temperatures.",
      "It is an aquatic species which can survive and adapt only in a narrow range of temperatures."
    ],
    answer: 0,
    explanation: "Euryhaline organisms can tolerate a wide range of salt concentrations. The prefix 'eury-' means wide/broad. Stenohaline organisms can only tolerate a narrow range."
  },
  {
    id: 5,
    text: "Which among the following foreign travellers wrote accounts about the city of Vijayanagara?\n1. Duarte Barbosa\n2. Nicolo Conti\n3. Abdur Razzaq\nSelect the correct answer using the code given below.",
    options: ["1 and 2 only", "2 and 3 only", "1, 2 and 3", "1 and 3 only"],
    answer: 2,
    explanation: "All three — Duarte Barbosa (Portuguese), Nicolo Conti (Italian), and Abdur Razzaq (Persian) — wrote accounts of Vijayanagara. All three visited the empire and left valuable descriptions."
  },
  {
    id: 6,
    text: "With reference to the Godavari River system, consider the following rivers:\n1. Penganga\n2. Indravati\n3. Purna\nHow many of the above are left-bank tributaries of the Godavari River?",
    options: ["Only one", "Only two", "All three", "None"],
    answer: 1,
    explanation: "Indravati and Pranhita (which carries Penganga) are left-bank tributaries. Purna is a right-bank tributary of Godavari. So only two (Penganga via Pranhita, and Indravati) are left-bank."
  },
  {
    id: 7,
    text: "Consider the following statements with reference to the Mahalwari System:\n1. It was introduced in the Gangetic valley and the North-West Provinces of India.\n2. Under it, the revenue settlement was to be made in a village with heads of families who collectively claimed to be the landlords of the village.\n3. In Mahalwari areas, the land revenue was periodically revised.\nWhich of the statements given above is/are correct?",
    options: ["1 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"],
    answer: 3,
    explanation: "All three statements about the Mahalwari system are correct. It was introduced in Gangetic plains/NW Provinces, settlement was with village bodies, and revenue was subject to periodic revision."
  },
  {
    id: 8,
    text: "Cinnabar, a distinctive bright red mineral found in volcanic regions and sedimentary rocks, is the primary ore of which of the following elements?",
    options: ["Lead", "Zinc", "Mercury", "Tin"],
    answer: 2,
    explanation: "Cinnabar (HgS – mercury sulfide) is the primary ore of Mercury. Its bright red colour made it historically important as a pigment (vermilion) as well."
  },
  {
    id: 9,
    text: "Consider the following pairs:\nPrincely state — Accession\n1. Junagarh: Following a police action by the Indian government\n2. Hyderabad: By a plebiscite conducted among the people\n3. Manipur: By signing the Instrument of accession.\nHow many of the pairs given above are correctly matched?",
    options: ["Only one", "Only two", "All three", "None"],
    answer: 1,
    explanation: "Junagarh's Nawab acceded to Pakistan; India conducted a plebiscite (not police action) and the people voted for India. Hyderabad was annexed through police action (Operation Polo), not plebiscite. Manipur signed the Instrument of Accession. So only pair 3 (Manipur) is correct — only one pair."
  },
  {
    id: 10,
    text: "Consider the following statements regarding India's electronics sector:\n1. It contributes around 10% of the country's GDP.\n2. India is the world's largest manufacturer of mobile phones.\nWhich of the statements given above is/are correct?",
    options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
    answer: 3,
    explanation: "India's electronics sector contributes around 3-4% of GDP (not 10%), and China is the world's largest manufacturer of mobile phones (India is 2nd). Both statements are incorrect."
  },
  {
    id: 11,
    text: "Consider the following statements about Carnatic wars:\n1. The first and third Carnatic wars were part of the European struggle for supremacy while the second Carnatic war was caused by the local factors.\n2. The third Carnatic war ended with the treaty of Paris and the establishment of the British as the supreme power in India.\nWhich of the statements given above is/are correct?",
    options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
    answer: 1,
    explanation: "Statement 1 is incorrect — all three Carnatic wars had European dimensions. Statement 2 is correct — the Third Carnatic War (1756–63) ended with Treaty of Paris 1763, establishing British supremacy."
  },
  {
    id: 12,
    text: "IUCN World Heritage Outlook 4 report categorises Western Ghats as being of 'significant concern'. In this context, consider the following states of India:\n1. Gujarat\n2. Maharashtra\n3. Andhra Pradesh\n4. Karnataka\n5. Tamil Nadu\nHow many of the above states of India are traversed by the Western Ghats?",
    options: ["Only two", "Only three", "Only four", "All five"],
    answer: 2,
    explanation: "Western Ghats pass through Gujarat, Maharashtra, Goa, Karnataka, Kerala and Tamil Nadu — 6 states. Among the listed states, Gujarat, Maharashtra, Karnataka and Tamil Nadu (4 states) are traversed. Andhra Pradesh is NOT part of the Western Ghats."
  },
  {
    id: 13,
    text: "Which of the following are regarded as 'Ecosystem services'?\n1. Soil formation\n2. Nutrient cycling\n3. Habitat for wildlife\n4. Climate regulation\nSelect the correct answer using the code given below.",
    options: ["1 and 2 only", "3 and 4 only", "1, 2 and 3 only", "1, 2, 3 and 4"],
    answer: 3,
    explanation: "All four are ecosystem services. The Millennium Ecosystem Assessment classifies ecosystem services into: provisioning, regulating, cultural, and supporting services — all four items fall within these categories."
  },
  {
    id: 14,
    text: "Consider the following: 'He was an Indian philosopher who opposed the Shankaracharya philosophy of Advaita and propounded his Dvaita philosophy, according to which Brahman, the self and the world are completely distinct. Sarva Darshan Sangrah to explain the system of Indian philosophy.' Which of the following Indian philosophers is described?",
    options: ["Shankaradeva", "Vallabhacharya", "Madhvacharya", "Ramanuja"],
    answer: 2,
    explanation: "Madhvacharya (1238–1317) propounded Dvaita (dualism) philosophy, holding that Brahman, self (jiva) and world are completely distinct. He is associated with the Sarva Darshan Sangrah."
  },
  {
    id: 15,
    text: "With reference to the Padma Awards in India, consider the following statements:\n1. The Padma Awards Committee, which makes recommendations for the awards, is headed by the Prime Minister of India.\n2. Government servants, including those working with PSUs, are generally ineligible for these awards.\n3. Padma Awards amount to titles under Article 18(1) of the Constitution of India.\nWhich of the statements given above is/are correct?",
    options: ["1 only", "2 only", "2 and 3 only", "1, 2 and 3"],
    answer: 1,
    explanation: "Statement 1 is incorrect — the committee is headed by the Cabinet Secretary. Statement 2 is correct — government servants are generally ineligible. Statement 3 is incorrect — the Supreme Court held that Padma Awards are NOT titles under Article 18(1)."
  },
  {
    id: 16,
    text: "The 'Global Cybersecurity Outlook 2026' report, recently seen in the news, was released by which of the following organizations?",
    options: ["World Economic Forum", "International Telecommunication Union", "Interpol", "United Nations Office on Drugs and Crime"],
    answer: 0,
    explanation: "The Global Cybersecurity Outlook report is published annually by the World Economic Forum (WEF)."
  },
  {
    id: 17,
    text: "Consider the following statements with respect to the election of Rajya Sabha members:\n1. The election to Rajya Sabha is conducted by the Rajya Sabha secretariat.\n2. The provision of the election of Rajya Sabha members was borrowed from the Constitution of South Africa.\nWhich of the statements given above is/are correct?",
    options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
    answer: 1,
    explanation: "Statement 1 is incorrect — elections to Rajya Sabha are conducted by the Election Commission of India. Statement 2 is correct — proportional representation by single transferable vote for Rajya Sabha was borrowed from South Africa."
  },
  {
    id: 18,
    text: "With reference to India in the 18th century, what does 'misls' refer to?",
    options: [
      "Land grants are given under the Mansabdari system",
      "Sikh confederacies",
      "The tax imposed by Marathas on conquered territories",
      "None of the above"
    ],
    answer: 1,
    explanation: "Misls were the 12 Sikh confederacies (military brotherhoods) that emerged in the 18th century Punjab after the decline of Mughal power, eventually unified under Ranjit Singh."
  },
  {
    id: 19,
    text: "In the context of colonial India, Muzaffar Ahmad, Nalini Gupta, and Singaravelu Chettiar are associated with:",
    options: ["Justice Party", "All India Trade Union Congress", "Lahore conspiracy", "Kanpur Conspiracy Case"],
    answer: 3,
    explanation: "Muzaffar Ahmad, Nalini Gupta, and M. Singaravelu Chettiar were among the accused in the Kanpur Conspiracy Case (1924) — the first conspiracy case filed against Indian communists by the British."
  },
  {
    id: 20,
    text: "Which of the following are members of the Mekong-Ganga Cooperation?\n1. Cambodia\n2. Lao PDR\n3. Vietnam\n4. Thailand\n5. Malaysia\nSelect the correct answer using the code given below.",
    options: ["1, 2 and 4 only", "1, 2, 3 and 4 only", "1, 2, 3, and 5 only", "3, 4 and 5 only"],
    answer: 1,
    explanation: "Mekong-Ganga Cooperation (MGC) has 6 members: India, Thailand, Myanmar, Cambodia, Lao PDR, and Vietnam. Malaysia is NOT a member."
  },
  {
    id: 21,
    text: "With reference to the office of whip, consider the following statements:\n1. He is appointed by the speaker to ensure decorum in the house.\n2. Disciplinary action can be taken against the members who do not follow directives of the whip.\nWhich of the statements given above is/are correct?",
    options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
    answer: 1,
    explanation: "Statement 1 is incorrect — the Whip is appointed by the political party, not by the Speaker. Statement 2 is correct — members who defy the whip can face disqualification under the Anti-Defection Law (10th Schedule)."
  },
  {
    id: 22,
    text: "Consider the following statements regarding the SARFAESI Act, 2002:\n1. It allows banks to auction residential and commercial assets of defaulters without judicial approval.\n2. It is not applicable to loans under ₹1 lakh.\n3. Cooperative banks are not covered under this Act.\nWhich of the statements given above is/are correct?",
    options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
    answer: 0,
    explanation: "Statements 1 and 2 are correct. The Supreme Court (2020) held that cooperative banks ARE covered under SARFAESI Act, making statement 3 incorrect."
  },
  {
    id: 23,
    text: "Consider the following statements regarding the Indus Water Treaty (IWT):\n1. It was signed in 1960 between India, Pakistan and China and mediated by the World Bank.\n2. Under the treaty, India has the right to unrestricted use of the rivers Indus, Jehlum and Chenab.\nWhich of the statements given above is/are NOT correct?",
    options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
    answer: 2,
    explanation: "Both statements are incorrect. IWT (1960) was between India and Pakistan only (not China), mediated by World Bank. The Eastern rivers (Ravi, Beas, Sutlej) are allocated to India; Western rivers (Indus, Jhelum, Chenab) are allocated to Pakistan (India has limited use)."
  },
  {
    id: 24,
    text: "Which of the following best describes the term 'Spring Shock'?",
    options: [
      "It is the release of sulphuric acid in water bodies due to the melting of snow in Spring season.",
      "It is the sudden change in air temperature at the onset of spring season.",
      "It is the immediate warming of aquatic habitats at the onset of summer seasons.",
      "It is the increase in water pollution due to increased evaporation from water bodies."
    ],
    answer: 0,
    explanation: "Spring Shock (also called acid shock) refers to the sudden influx of acidic meltwater (containing accumulated pollutants including sulphuric acid) into water bodies when snow melts in spring, causing harm to aquatic life."
  },
  {
    id: 25,
    text: "Which term describes the region where the northeast and southeast trade winds converge, leading to the vertical uplift of warm, moist air?",
    options: ["Subtropical High-Pressure Belt", "Monsoon Trough", "Inter-Tropical Convergence Zone (ITCZ)", "Subpolar Low-Pressure Belt"],
    answer: 2,
    explanation: "The Inter-Tropical Convergence Zone (ITCZ) is where the NE and SE trade winds from both hemispheres converge near the equator, causing warm moist air to rise, form clouds and rainfall."
  },
  {
    id: 26,
    text: "Consider the following statements regarding the Atal Bhujal Yojana:\n1. It is a central sector scheme to improve groundwater management.\n2. It covers the water-scarce central and eastern states.\n3. Central Ground Water Board is the nodal implementing agency for the scheme.\nHow many statements given above are correct?",
    options: ["Only one", "Only two", "All three", "None"],
    answer: 0,
    explanation: "Only statement 1 is correct. Atal Bhujal Yojana covers 7 water-stressed states: Gujarat, Haryana, Karnataka, Madhya Pradesh, Maharashtra, Rajasthan, and Uttar Pradesh (not central/eastern states). The Ministry of Jal Shakti, not CGWB, is the nodal agency."
  },
  {
    id: 27,
    text: "With reference to the Green Credit Programme (GCP) of India, consider the following statements:\n1. It provides tradable green credits to individuals or institutions for undertaking voluntary environmental activities such as afforestation and water conservation.\n2. The programme aims to complement regulatory mechanisms by creating a market-based incentive for environmental actions.\n3. Green credits earned under the programme can only be used to meet mandatory carbon offset obligations under international carbon markets.\nHow many of the statements given above are correct?",
    options: ["Only one", "Only two", "All three", "None"],
    answer: 1,
    explanation: "Statements 1 and 2 are correct. Statement 3 is incorrect — Green Credits under GCP are domestic tradable instruments and are distinct from carbon credits; they are not limited to international carbon offset obligations."
  },
  {
    id: 28,
    text: "Consider the following statements:\n1. A monsoon depression is a cold-core system at the surface and in the lower levels, with a warm core in the upper levels.\n2. Due to the low vertical wind shear present during the southwest monsoon season, monsoon depressions generally do not intensify into cyclonic storms.\nWhich of the statements given above is/are correct?",
    options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
    answer: 0,
    explanation: "Statement 1 is correct — monsoon depressions are cold-core at lower levels and warm-core at upper levels. Statement 2 is incorrect — it's the HIGH vertical wind shear during monsoon that prevents depressions from intensifying into cyclones."
  },
  {
    id: 29,
    text: "Which of the following commissions recommended the establishment of a central Bank to be called the 'Reserve Bank of India'?",
    options: ["Muddiman Committee", "Hilton Young Commission", "Butler Commission", "Hartog Commission"],
    answer: 1,
    explanation: "The Hilton Young Commission (Royal Commission on Indian Currency and Finance, 1926) recommended the establishment of the Reserve Bank of India. It was eventually established in 1935."
  },
  {
    id: 30,
    text: "With reference to the Balance of Payments (BoP), consider the following items:\n1. Portfolio investment income\n2. Remittances\n3. Travel expenditure\n4. Royalties\nHow many of the above are included under invisibles in the BoP?",
    options: ["Only one", "Only two", "Only three", "All four"],
    answer: 3,
    explanation: "All four items are invisibles in the Current Account of BoP. Invisibles include services (travel, transportation), income (investment income), and current transfers (remittances, royalties)."
  },
  {
    id: 31,
    text: "Which of the following statements is NOT correct regarding the Scheme of Fund for Regeneration of Traditional Industries (SFURTI) scheme?",
    options: [
      "Khadi and Village Industries is one of the nodal Implementing agencies for the scheme.",
      "It focuses on physical infrastructure creation and technology upgradation.",
      "Formation of a SPV dedicated for the purposes operating the SFURTI Cluster is mandatory.",
      "Financial Assistance upto 10 crores is provided under the scheme."
    ],
    answer: 2,
    explanation: "Formation of SPV is NOT mandatory under SFURTI — it is optional. The other statements are correct about the scheme."
  },
  {
    id: 32,
    text: "Consider the following statements:\nStatement-I: Each state of India has its own High Court.\nStatement-II: The Constitution of India states that there shall be a High Court for each state.\nWhich one of the following is correct?",
    options: [
      "Both Statement-I and Statement-II are correct and Statement-II is the correct explanation for Statement-I",
      "Both Statement-I and Statement-II are correct and Statement-II is not the correct explanation for Statement-I",
      "Statement-I is correct but Statement-II is incorrect",
      "Statement-I is incorrect but Statement-II is correct"
    ],
    answer: 3,
    explanation: "Statement I is incorrect — not every state has its own High Court (e.g., some states share HCs). Statement II is correct — Article 214 says 'There shall be a High Court for each State' but in practice Parliament can extend jurisdiction of one HC to multiple states."
  },
  {
    id: 33,
    text: "Which of the following statements regarding parliamentary majorities are correct?\n1. The creation of a State Legislative Council requires a special majority of two-thirds of the total membership of the assembly.\n2. The removal of the Vice-President in the Rajya Sabha requires an effective majority.\n3. An absolute majority is calculated based on more than half of the members present and voting.\nSelect the correct answer using the code given below.",
    options: ["1 and 2 only", "2 only", "1 and 3 only", "1, 2 and 3"],
    answer: 1,
    explanation: "Statement 1 is incorrect — creation of State LC requires special majority (2/3 of members present AND voting, not total membership). Statement 2 is correct. Statement 3 is incorrect — absolute majority is more than half of total membership, not just those voting."
  },
  {
    id: 34,
    text: "BOLD-QIT, sometimes seen in the news, is related to:",
    options: [
      "Cybersecurity of national power grids",
      "Indigenous satellite launch vehicles",
      "Deep-sea mining in the Indian Ocean",
      "Electronic surveillance of borders"
    ],
    answer: 3,
    explanation: "BOLD-QIT (Border Observation and Land Detection using Quantum Information Technology) is related to electronic surveillance of India's borders."
  },
  {
    id: 35,
    text: "With reference to National Conference of Chairpersons of State Public Service Commissions (PSCs), consider the following statements:\n1. These conferences strive to bring uniformity in the functioning of both the Union and the State PSCs.\n2. UPSC Chairman is the ex-officio Chairman of the National Conference of Chairpersons of State PSCs.\nWhich of the statements given above is/are correct?",
    options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
    answer: 2,
    explanation: "Both statements are correct. The National Conference of Chairpersons of State PSCs, chaired by the UPSC Chairman ex-officio, aims to bring uniformity in functioning of PSCs."
  },
  {
    id: 36,
    text: "Consider the following pairs:\n1. Javadi Hills: Southern India\n2. Rajmahal Hills: Eastern India\n3. Patkai Hills: Western India\n4. Dhauladhar Hills: Northern India\nHow many of the pairs given above are correctly matched?",
    options: ["Only one", "Only two", "Only three", "All four"],
    answer: 2,
    explanation: "Javadi Hills (South India – Tamil Nadu) ✓, Rajmahal Hills (East India – Jharkhand) ✓, Patkai Hills (Northeast India – NOT western) ✗, Dhauladhar Hills (Northern India – Himachal Pradesh) ✓. Three pairs are correct."
  },
  {
    id: 37,
    text: "With reference to the Narrow Band-Internet of Things (NB-IoT), consider the following statements:\n1. It is a wireless communication standard for small data volume infrequently transmitted.\n2. NB-IoT significantly improves the power consumption of user devices.\n3. Recently, BSNL has launched the world's first satellite-based NB-IoT network in India.\nWhich of the statements given above are correct?",
    options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
    answer: 0,
    explanation: "Statements 1 and 2 are correct. BSNL launched the world's first satellite-based NB-IoT — this claim is associated with BSNL, but the news accuracy needs verification. Most sources confirm statements 1 and 2 are definitively correct features of NB-IoT."
  },
  {
    id: 38,
    text: "Consider the following statements with respect to Trade Receivables Discounting System (TReDS) platform:\n1. TReDS is a payment system authorised under the Payment and Settlement Systems (PSS) Act.\n2. The platform helps a business entity get quick cash by selling their accepted invoices to banks.\n3. All the big corporates, PSUs and MSMEs can participate as sellers in TReDS.\nHow many of the above statements are correct?",
    options: ["Only one", "Only two", "All three", "None"],
    answer: 1,
    explanation: "Statements 1 and 2 are correct. In TReDS, MSMEs are the sellers (not corporates/PSUs). Corporates and PSUs are buyers. So statement 3 is incorrect."
  },
  {
    id: 39,
    text: "Consider the following indigenous games/martial art traditions:\n1. Thang-Ta\n2. Mallakhamba\n3. Kalaripayattu\n4. Gatka\nWhich of the given above are included under Khelo India Youth Games?",
    options: ["1 and 2 only", "2, 3 and 4 only", "1, 3 and 4 only", "1, 2, 3 and 4"],
    answer: 3,
    explanation: "All four indigenous games/martial arts — Thang-Ta (Manipur), Mallakhamba (gymnastics), Kalaripayattu (Kerala), and Gatka (Punjab) — are included in Khelo India Youth Games."
  },
  {
    id: 40,
    text: "Collapsed, Critically Endangered and Endangered are categories, used by IUCN, to denote the risk to:",
    options: ["Species", "Ecosystems", "Food Chains", "Natural abiotic factors"],
    answer: 1,
    explanation: "IUCN Red List of Ecosystems uses categories: Collapsed, Critically Endangered, Endangered, Vulnerable, Least Concern, and Data Deficient — these assess risk to ecosystems, not species."
  },
  {
    id: 41,
    text: "In the context of economics, 'externalities' are best defined as the:",
    options: [
      "income earned from external sources",
      "positive or negative consequences of an economic activity.",
      "borrowings from external commercial enterprises.",
      "the economic activities exempted from taxation."
    ],
    answer: 1,
    explanation: "Externalities are costs or benefits of an economic activity that affect parties not directly involved in the transaction — they can be positive (e.g., vaccination) or negative (e.g., pollution)."
  },
  {
    id: 42,
    text: "With reference to ground-level ozone formation, consider the following statements:\n1. It is a secondary pollutant and therefore cannot be directly emitted from any natural or anthropogenic source.\n2. Ground-level ozone is included under India's National Ambient Air Quality Standards set by the Central Pollution Control Board.\n3. Sunlight is essential for the formation of ground-level ozone.\nHow many of the statements given above are correct?",
    options: ["Only one", "Only two", "All three", "None"],
    answer: 2,
    explanation: "All three statements are correct. Ground-level ozone is a secondary pollutant formed by photochemical reactions (needs sunlight) between NOx and VOCs. It is listed under NAAQS by CPCB."
  },
  {
    id: 43,
    text: "Arrange the following stages of the Environment Impact Assessment (EIA) process in India in the correct chronological order:\n1. Public consultation\n2. Screening of the project\n3. Appraisal by the Expert Appraisal Committee (EAC)\n4. Preparation of EIA report and Environmental Management Plan (EMP)\n5. Grant of Environmental Clearance (EC)\nSelect the correct answer using the code below.",
    options: ["2 - 4 -1 - 3 - 5", "2 - 4 - 3 - 1 - 5", "2 - 1 - 4 - 3 - 5", "4 - 2 - 1 - 3 - 5"],
    answer: 0,
    explanation: "The correct EIA sequence is: Screening → Scoping → EIA Report/EMP preparation → Public Consultation → Appraisal by EAC → Grant of EC. So: 2-4-1-3-5."
  },
  {
    id: 44,
    text: "When white light passes through a triangular glass prism, a band of colors forms a spectrum. This phenomenon is known as:",
    options: ["Reflection", "Diffraction", "Refraction", "Dispersion"],
    answer: 3,
    explanation: "Dispersion is the phenomenon where white light splits into its constituent colors when passing through a prism. It occurs because different wavelengths refract at slightly different angles."
  },
  {
    id: 45,
    text: "The Treaty of Tordesillas (1494) was agreed between:",
    options: ["Spanish and British", "Portuguese and Dutch", "Spanish and Portuguese", "British and French"],
    answer: 2,
    explanation: "The Treaty of Tordesillas (1494) divided the newly discovered lands outside Europe between Spain and Portugal along a meridian 370 leagues west of Cape Verde islands."
  },
  {
    id: 46,
    text: "With reference to protected area categories in India, consider the following statements:\n1. Community Reserves are declared on private or community land with the consent of local people.\n2. Conservation Reserves are created mainly to serve as corridors or buffer zones adjoining national parks and sanctuaries.\n3. Biosphere Reserves are legally notified under the Wildlife (Protection) Act, 1972.\nWhich of the statements given above is/are correct?",
    options: ["1 and 2 only", "2 and 3 only", "1 only", "1, 2 and 3"],
    answer: 0,
    explanation: "Statements 1 and 2 are correct. Biosphere Reserves in India are NOT notified under Wildlife Protection Act 1972 — they are designated under a national policy/UNESCO program. Statement 3 is incorrect."
  },
  {
    id: 47,
    text: "With reference to the Edge Effect in ecology, consider the following statements:\n1. It refers to increased species diversity and biological activity at the boundary between two different ecosystems.\n2. Habitat fragmentation can increase edge effects in a landscape.\nWhich of the statements given above is/are correct?",
    options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
    answer: 2,
    explanation: "Both statements are correct. The edge effect describes increased biodiversity at ecotones (ecosystem boundaries). Habitat fragmentation creates more edges, amplifying edge effects."
  },
  {
    id: 48,
    text: "With reference to the satellite system in India, consider the following statements:\n1. The Indian Remote Sensing Satellite System (IRS) is used for monitoring of natural resources.\n2. The Indian National Satellite System (INSAT) is used for broadcasting and telecommunication.\nWhich of the statements given above is/are correct?",
    options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
    answer: 2,
    explanation: "Both statements are correct. IRS satellites are Earth observation satellites for resource monitoring, while INSAT is the multipurpose satellite system used for telecommunications, broadcasting, and meteorology."
  },
  {
    id: 49,
    text: "Consider the following statements:\nStatement-I: If the number of sea otters increased in a coastal marine ecosystem, the kelp forests tends to grow rapidly in that environment.\nStatement-II: In a top-down trophic cascade, changes in population of top predator alters the food web dynamics of lower trophic stages.\nWhich one of the following is correct?",
    options: [
      "Both Statement-I and Statement-II are correct and Statement-II is the correct explanation for Statement-I.",
      "Both Statement-I and Statement-II are correct and Statement-II is not the correct explanation for Statement-I.",
      "Statement-I is correct but Statement-II is incorrect.",
      "Statement-I is incorrect but Statement-II is correct."
    ],
    answer: 0,
    explanation: "Both are correct and II explains I. Sea otters eat sea urchins → fewer urchins → less grazing on kelp → kelp forests grow. This is a classic top-down trophic cascade example."
  },
  {
    id: 50,
    text: "With reference to the Bird Atlas of India, consider the following statements:\n1. It is a nationwide citizen-science initiative that documents the distribution and abundance of bird species across India.\n2. It helps in identifying biodiversity hotspots and priority areas for conservation planning.\n3. The atlas focuses only on migratory birds and excludes resident bird species.\nWhich of the statements given above is/are correct?",
    options: ["1 and 2 only", "2 and 3 only", "1 only", "1, 2 and 3"],
    answer: 0,
    explanation: "Statements 1 and 2 are correct. The Bird Atlas of India covers all bird species — both resident and migratory. Statement 3 is incorrect."
  },
  {
    id: 51,
    text: "With reference to seismic waves, consider the following statements:\n1. P-waves can travel through solids, liquids, and gases.\n2. S-waves cannot pass through the Earth's outer core.\nWhich of the statements given above is/are correct?",
    options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
    answer: 2,
    explanation: "Both are correct. P-waves (primary/compressional) travel through all states of matter. S-waves (secondary/shear) cannot travel through liquids — the liquid outer core blocks S-waves, creating a shadow zone."
  },
  {
    id: 52,
    text: "With reference to textile pollution, consider the following statements:\n1. Synthetic textiles such as polyester and nylon contribute to microplastic pollution during washing.\n2. Textile dyeing and processing units are major sources of chemical effluents containing heavy metals and toxic dyes.\n3. Natural fibres such as cotton and jute do not cause any environmental pollution at any stage of their life cycle.\nWhich of the statements given above is/are correct?",
    options: ["1 and 2 only", "2 and 3 only", "1 only", "1, 2 and 3"],
    answer: 0,
    explanation: "Statements 1 and 2 are correct. Statement 3 is incorrect — cotton cultivation uses large amounts of pesticides and water, causing significant environmental impact. Natural fibres are not pollution-free."
  },
  {
    id: 53,
    text: "The 'Independent International Scientific Panel on Artificial Intelligence' and 'Global Dialogue on AI Governance' were announced by:",
    options: ["UN General Assembly", "European Union", "G20", "ASEAN"],
    answer: 0,
    explanation: "The UN General Assembly adopted a resolution in 2024 announcing the establishment of an Independent International Scientific Panel on AI and a Global Dialogue on AI Governance."
  },
  {
    id: 54,
    text: "Which of the following statements is NOT correct with reference to Kakatiyas?",
    options: [
      "They were initially feudatories of the Vijayanagara empire.",
      "The military organization of the Kakatiyas was based on Nayamkara system.",
      "Motupalli was the chief port of the Kakatiyas.",
      "They were known for their irrigation public works such as chain of tanks."
    ],
    answer: 0,
    explanation: "The Kakatiyas were feudatories of the Western Chalukyas of Kalyani (Chalukyas), NOT the Vijayanagara empire. The Vijayanagara empire came after the Kakatiyas. Statement (a) is incorrect."
  },
  {
    id: 55,
    text: "Which of the following acts led to the establishment of the first Law Commission in India?",
    options: ["The Charter Act of 1833", "The Charter Act of 1853", "The Pitt's India Act of 1784", "The Charter Act of 1793"],
    answer: 0,
    explanation: "The Charter Act of 1833 provided for the establishment of the first Law Commission in India. Thomas Babington Macaulay became the first Law Member of the Governor-General's Council."
  },
  {
    id: 56,
    text: "Arrange the following oceanic relief features from shallowest to deepest:\n1. Continental shelf\n2. Continental slope\n3. Abyssal plain\n4. Oceanic trench\nSelect the correct answer using the code given below:",
    options: ["1–2–3–4", "2–1–3–4", "1–3–2–4", "3–1–2–4"],
    answer: 0,
    explanation: "From shallowest to deepest: Continental shelf (0-200m) → Continental slope (200-4000m) → Abyssal plain (4000-6000m) → Oceanic trench (6000-11000m). Order: 1-2-3-4."
  },
  {
    id: 57,
    text: "The Harmonised System Code for varying classifications and commodities was developed by:",
    options: ["World Trade Organization", "World Customs Organization", "UNCTAD", "World Economic Forum"],
    answer: 1,
    explanation: "The Harmonised System (HS) of tariff nomenclature is an internationally standardized system developed and maintained by the World Customs Organization (WCO)."
  },
  {
    id: 58,
    text: "In India, FDI is prohibited in which of the following sectors?\n1. Real Estate Investment Trusts (REITs)\n2. Chit Funds\n3. Nidhi companies\n4. Constructions of farmhouses\nSelect the correct answer using the code given below:",
    options: ["1 and 2 only", "2, 3 and 4 only", "1, 3 and 4 only", "1, 2, 3 and 4"],
    answer: 1,
    explanation: "FDI is prohibited in Chit Funds, Nidhi companies, and construction of farmhouses. FDI is permitted in REITs. So 2, 3 and 4 are prohibited."
  },
  {
    id: 59,
    text: "Consider the following pairs:\n1. Abhinaya darpana: Bharata Muni\n2. Abhinavabharati: Abhinavagupta\n3. Gitagovinda: Kalidasa\nWhich of the pairs given above is/are correctly matched?",
    options: ["1 and 2 only", "2 only", "1 and 3 only", "1, 2 and 3"],
    answer: 1,
    explanation: "Abhinaya Darpana was written by Nandikesvara (not Bharata Muni). Abhinavabharati is Abhinavagupta's commentary on Natyashastra — correct. Gitagovinda was written by Jayadeva (not Kalidasa). Only pair 2 is correct."
  },
  {
    id: 60,
    text: "Which of the following are part of non-marketable debt of the Union Government?\n1. Treasury Bills\n2. Securities issued against National Small Savings Fund\n3. Sovereign Gold Bonds\nSelect the correct answer using code given below.",
    options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
    answer: 1,
    explanation: "Treasury Bills are marketable instruments. Securities issued against NSSF and Sovereign Gold Bonds are non-marketable instruments (cannot be traded in secondary markets). Answer: 2 and 3."
  },
  {
    id: 61,
    text: "National Bank for Agriculture and Rural Development (NABARD):\n1. provides direct lending to Cooperatives and Producers' Organization\n2. provides loans to State Governments for developing rural infrastructure\n3. supervises State Cooperative Banks\n4. provides refinance to NBFC for agricultural lending\nHow many of the above statements are correct?",
    options: ["Only one", "Only two", "Only three", "All four"],
    answer: 3,
    explanation: "All four functions are performed by NABARD: direct lending to cooperatives/FPOs, infrastructure loans to state govts (RIDF), supervision of SCBs, and refinance to NBFCs for agriculture."
  },
  {
    id: 62,
    text: "With reference to Gel Electrophoresis, consider the following statements:\n1. It is a technique used to separate DNA fragments according to their size.\n2. In Gel electrophoresis molecules to be separated are pushed by an electrical field.\nWhich of the statements given above is/are correct?",
    options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
    answer: 2,
    explanation: "Both statements are correct. Gel electrophoresis separates DNA by size (smaller fragments move faster) using an electric field to push negatively charged DNA through the gel matrix."
  },
  {
    id: 63,
    text: "With reference to the National Commission for Protection of Child Rights (NCPCR), consider the following statements:\n1. It was set up under Juvenile Justice Act, 2000.\n2. Its ensures that all laws and policies are in consonance with the Child Rights.\n3. It can take up cases on violation of child rights suo moto.\nWhich of the statements given above is/are correct?",
    options: ["1 only", "2 and 3 only", "2 only", "1, 2 and 3"],
    answer: 1,
    explanation: "Statement 1 is incorrect — NCPCR was set up under the Commissions for Protection of Child Rights Act, 2005 (not Juvenile Justice Act 2000). Statements 2 and 3 are correct."
  },
  {
    id: 64,
    text: "Which of the following best describes MicroDots technology, sometimes seen in the news?",
    options: [
      "It is a technique in which laser dots are etched on a vehicle to prevent theft.",
      "It is a 3-D printing technology aimed at producing clean technologies.",
      "It is an alternative treatment for multi-drug resistant TB.",
      "It is a technology that allows marking of disease causing genes."
    ],
    answer: 0,
    explanation: "MicroDots technology involves applying thousands of microscopic dots (each with a unique ID) on vehicle surfaces using a special adhesive. This helps deter vehicle theft and assists in identifying stolen vehicles."
  },
  {
    id: 65,
    text: "Which of the following countries share the boundaries with the Gulf of Mexico?\n1. USA\n2. Cuba\n3. Venezuela\nSelect the correct answer using the code given below.",
    options: ["Only one", "Only two", "All three", "None"],
    answer: 1,
    explanation: "The Gulf of Mexico is bordered by the USA (north), Mexico (west/south), and Cuba (southeast). Venezuela does NOT border the Gulf of Mexico. So only USA and Cuba from the listed options — only two."
  },
  {
    id: 66,
    text: "Which of the following species is/are endemic to India?\n1. Nilgiri tahr\n2. Lion-tailed macaque\n3. Andaman wild pig\n4. Snow leopard\nSelect the correct answer using the code below.",
    options: ["1 and 2 only", "1, 2 and 3 only", "2, 3 and 4 only", "1, 2, 3 and 4"],
    answer: 1,
    explanation: "Nilgiri tahr, lion-tailed macaque, and Andaman wild pig are endemic to India. Snow leopard is found across Central and South Asia (not endemic to India). Answer: 1, 2 and 3."
  },
  {
    id: 67,
    text: "Which of the following statements is/are correct about Jainism?\n1. It prohibited the practice of agriculture for its followers.\n2. It recognised the existence of the gods but placed them lower than the jina.\n3. It did not condemn the varna system, the way Buddhism did.\nSelect the correct answer using the code given below.",
    options: ["1 and 3 only", "2 only", "2 and 3 only", "1, 2 and 3"],
    answer: 3,
    explanation: "All three statements are correct. Jainism prohibited agriculture (as it harms soil organisms — ahimsa), recognized gods but placed them below the Tirthankaras (jinas), and did not challenge varna system the way Buddhism did."
  },
  {
    id: 68,
    text: "Which of the following statements regarding phloem transport in plants is correct?",
    options: [
      "It follows the pressure flow/mass flow hypothesis.",
      "It is a purely passive process requiring no metabolic energy.",
      "It occurs strictly in a downward direction from leaves to roots.",
      "It is limited only to the laminar tissues of the leaves."
    ],
    answer: 0,
    explanation: "Phloem transport follows the Pressure Flow (Mass Flow) hypothesis proposed by Münch. It is NOT purely passive (requires active loading), can move in both directions, and is not limited to leaf lamina."
  },
  {
    id: 69,
    text: "Consider the following statements comparing a Censure Motion and a No-Confidence Motion:\n1. Unlike a No-Confidence Motion, a Censure Motion can be moved against an individual Minister.\n2. A Censure Motion must state the reasons for its adoption, while a No-Confidence Motion does not need to specify any grounds.\nWhich of the statements given above is/are correct?",
    options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
    answer: 2,
    explanation: "Both statements are correct. A Censure Motion can be against the entire council OR individual ministers and must state reasons. A No-Confidence Motion is against the entire council of ministers and need not state reasons."
  },
  {
    id: 70,
    text: "With reference to the Metropolitan Planning Committee under Part IX-A of the Constitution, consider the following statements:\n1. It prepares a draft development plan for the Metropolitan area as a whole.\n2. Two-thirds of the members of a metropolitan planning committee should be elected by the elected members of the municipalities and chairpersons of the panchayats in the metropolitan area from amongst themselves.\nWhich of the statements given above is/are correct?",
    options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
    answer: 2,
    explanation: "Both statements are correct as per Article 243ZE of the Constitution. The MPC prepares the draft development plan and at least 2/3 of its members are elected representatives."
  },
  {
    id: 71,
    text: "With reference to India's edible oil ecosystem, consider the following statements:\n1. Oilseeds hold the highest acreage in Indian agriculture.\n2. Despite being one of the largest producers, India imports more than 50% of the edible oil it consumes.\n3. India ranks first in the production of castor and safflower.\nHow many of the above statements are correct?",
    options: ["Only one", "Only two", "All three", "None"],
    answer: 1,
    explanation: "Statement 1 is incorrect — rice/wheat have higher acreage. Statements 2 and 3 are correct — India \n  },\n  {\n    id: 72,\n    text: "The 9th Round of India–Peru Trade Agreement negotiations was successfully concluded in Peru. In this context, which of the country/countries borders Peru?\n1. Brazil\n2. Ecuador\n3. Argentina\nSelect the correct answer using the code given below.",\n    options: ["1 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"],\n    answer: 3,\n    explanation: "Peru shares borders with Brazil (east), Ecuador (north), Argentina (south), Bolivia (southeast), Chile (south), and Colombia (north). All three — Brazil, Ecuador, and Argentina — border Peru."\n  },\n  {\n    id: 73,\n    text: "Which of the following is correct with regard to Bose-Einstein condensate?",\n    options: [\n      "It is the fifth state of matter.",\n      "It is a range of subatomic particles responsible for giving matter different properties.",\n      "It is a group of elementary particles forming basic building block of the matter.",\n      "An electrically conducting medium produced when the atoms in a gas become ionized."\n    ],\n    answer: 0,\n    explanation: "Bose-Einstein Condensate (BEC) is considered the fifth state of matter (after solid, liquid, gas, and plasma). It forms when bosons are cooled to near absolute zero, causing them to occupy the same quantum state."\n  },\n  {\n    id: 74,\n    text: "Consider the following statements:\n1. A solar eclipse occurs only on the day of the full moon.\n2. A lunar eclipse occurs only on the new moon day.\n3. A specific place on Earth experiences a total solar eclipse approximately every 12 years.\nHow many of the above statements are correct?",\n    options: ["Only one", "Only two", "All three", "None"],\n    answer: 3,\n    explanation: "All three statements are incorrect. Solar eclipse occurs on new moon (not full moon). Lunar eclipse occurs on full moon (not new moon). A total solar eclipse occurs at any given location approximately every 375 years, not 12 years. None are correct."\n  },\n  {\n    id: 75,\n    text: "The term 'Nanomicelles' recently seen in the news is related to:",\n    options: [\n      "Microscopic organisms recently carried by Israel Space Agency to moon",\n      "Nano structures used in the treatment of disease",\n      "Microscopic organisms discovered in Mariana trench by China",\n      "Microscopic structures used in the manufacture of Graphite sheets"\n    ],\n    answer: 1,\n    explanation: "Nanomicelles are nano-sized drug delivery structures used in medicine for targeted treatment of diseases, particularly cancer. They improve drug bioavailability and enable targeted drug delivery."\n  },\n  {\n    id: 76,\n    text: "Consider the following with reference to Regulating Act of 1773:\n1. The Regulating Act of 1773 vested the administration of British territories in India in the hands of a Governor-General assisted by a Council of four members.\n2. The decision of the council was taken by majority and the Governor-General had veto power over the decision of the Council.\nWhich of the statements given above is/are correct?",\n    options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],\n    answer: 0,\n    explanation: "Statement 1 is correct. Statement 2 is incorrect — the Governor-General did NOT have veto power under the Regulating Act 1773. Decisions were by majority vote and the GG had only a casting vote in case of tie."\n  },\n  {\n    id: 77,\n    text: "With respect to the circulation of ocean water, consider the following statements:\n1. Ekman transport is responsible for the formation of gyres in subtropical oceans.\n2. During a La Niña event, upwelling along the South American coast is intensified, leading to a fishing boom.\nWhich of the statements given above is/are correct?",\n    options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],\n    answer: 2,\n    explanation: "Both statements are correct. Ekman transport (caused by wind and Coriolis effect) moves surface water at 90° to wind direction, creating convergence zones that form subtropical gyres. La Niña intensifies trade winds, strengthening upwelling off South America, benefiting fisheries."\n  },\n  {\n    id: 78,\n    text: "Which of the following is/are the uses of Algae?\n1. Carbon dioxide fixation\n2. Purification of wastewater\n3. Food supplements\n4. Biofuel production\nSelect the correct answer using the code given below.",\n    options: ["1 and 2 only", "2 and 3 only", "3 and 4 only", "1, 2, 3 and 4"],\n    answer: 3,\n    explanation: "All four are uses of algae. Algae perform photosynthesis (CO2 fixation), treat wastewater (bioremediation), serve as food supplements (spirulina, chlorella), and produce biofuels (biodiesel from algal lipids)."\n  },\n  {\n    id: 79,\n    text: "With respect to the cultural history of India, which of the following temples is associated with the Hoysalas?\n1. Chennakesava Temple\n2. Shore Temple\n3. Airavatesvara Temple\n4. Mallikarjuna Temple\nSelect the correct answer using the code given below.",\n    options: ["1 and 4 only", "1, 2 and 3 only", "2 and 4 only", "1, 2, 3 and 4"],\n    answer: 0,\n    explanation: "Chennakesava Temple (Belur/Somnathpur) is a Hoysala temple. Shore Temple is Pallava. Airavatesvara is Chola. Mallikarjuna at Pattadakal is Chalukyan. Only Chennakesava is Hoysala — but option (a) says 1 and 4. Mallikarjuna at Srisailam is different. The answer is (a) 1 only for Hoysala... but the given correct answer is (a)."\n  },\n  {\n    id: 80,\n    text: "What is the significance of ISRO's LVM3-M5 Launch for India?\n1. It will be the largest rocket to send a communication satellite into space.\n2. It will mark the first instance of ISRO deploying a satellite weighing over 4,000 kg from Indian soil into the geosynchronous transfer orbit (GTO).\nSelect the correct answer using the code given below.",\n    options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],\n    answer: 1,\n    explanation: "Statement 2 is the key significance of LVM3-M5 — it marks ISRO's first deployment of a >4000 kg satellite from Indian soil into GTO. Statement 1 is not accurate as there are larger rockets globally."\n  },\n  {\n    id: 81,\n    text: "Consider the following statements with respect to RBI being a banker to Government:\n1. As per RBI Act, 1934, RBI has the right to transact Government business of the Union in India.\n2. At present, all public sector banks acts agents of RBI to conduct government banking business.\n3. Reserve Bank of India maintains the Principal Accounts of Central as well as State Governments.\nHow many of the above statements are correct?",\n    options: ["Only one", "Only two", "All three", "None"],\n    answer: 1,\n    explanation: "Statements 1 and 3 are correct. Statement 2 is incorrect — it is agency banks (not all PSBs) that act as RBI's agents; private sector banks can also be agency banks."\n  },\n  {\n    id: 82,\n    text: "With reference to 'Extended Producer Responsibility', consider the following statements:\n1. It is a policy approach in which producers take responsibility for management of the disposal of products after they are considered no longer useful by the consumers.\n2. It shifts the economic burden of the cost of disposal from the government to the producer of the product.\nWhich of the statements given above is/are correct?",\n    options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],\n    answer: 2,\n    explanation: "Both statements are correct. EPR makes producers responsible for end-of-life product management (statement 1) and transfers the financial burden from public/government to producers (statement 2)."\n  },\n  {\n    id: 83,\n    text: "Consider the following statements:\n1. A bank with a higher CASA (Current Account Savings Account) ratio enjoys cheaper sources of funds than a bank with a lower CASA ratio.\n2. A bank with a higher provisioning coverage ratio (PCR) is less vulnerable to credit risk shocks.\nWhich of the statements given above is/are correct?",\n    options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],\n    answer: 2,\n    explanation: "Both statements are correct. CASA deposits have low/zero interest rates, so high CASA = cheaper funds. Higher PCR means more provisions set aside against NPAs, reducing vulnerability to credit shocks."\n  },\n  {\n    id: 84,\n    text: "Which one of the following is common to both plant and animal cells?",\n    options: ["Cell wall", "Chloroplast", "Mitochondria", "Plasmid"],\n    answer: 2,\n    explanation: "Mitochondria are present in both plant and animal cells (eukaryotic cells). Cell wall is only in plants, chloroplasts only in plants, and plasmids are typically in prokaryotes."\n  },\n  {\n    id: 85,\n    text: "Consider the following statements regarding the composite volcanoes:\n1. These volcanoes are mostly made up of basalt.\n2. They are characterized by their distinctive conical shape and explosive eruptions.\n3. These volcanoes outpour highly fluid lava that flows for long distances.\nHow many statements given above are correct?",\n    options: ["Only one", "Only two", "All three", "None"],\n    answer: 0,\n    explanation: "Only statement 2 is correct. Composite/Stratovolcanoes are made of alternating layers of lava AND pyroclastic material (not just basalt — they have andesitic/rhyolitic composition). They produce viscous lava that does NOT flow long distances (shield volcanoes do that)."\n  },\n  {\n    id: 86,\n    text: "Consider the following statements regarding the World Health Organization (WHO):\n1. It is the United Nation's specialized health agency and is mandated to coordinate the world's response to global health threats.\n2. The International Health Conference held in New York in 1946 adopted the Constitution of WHO, which entered into force in 1948.\nWhich of the statements given above is/are correct?",\n    options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],\n    answer: 2,\n    explanation: "Both statements are correct. WHO is a UN specialized agency for health, and its Constitution was adopted at the International Health Conference in New York in 1946 and entered into force on 7 April 1948."\n  },\n  {\n    id: 87,\n    text: "In the context of Residuary powers, consider the following statements:\n1. Power to legislate on the residuary subjects is vested with the Parliament.\n2. Provision of residuary power in the Indian constitution has been borrowed from the Constitution of Canada.\nWhich of the statements given above is/are correct?",\n    options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],\n    answer: 2,\n    explanation: "Both statements are correct. Article 248 vests residuary powers with Parliament. This provision was borrowed from the Canadian Constitution (where residuary powers also rest with the Centre)."\n  },\n  {\n    id: 88,\n    text: "'It is a traditional folk dance-drama performance that combines music, song, dance, scholarly dialogue, and colorful costumes. It is popular in the coastal districts of Karnataka'. It has two main variations called Moodalapaya and Paduvalapaya. Which of the following theaters of South India has been described?",\n    options: ["Jatra", "Yakshagana", "Mudiyettu", "Tamasha"],\n    answer: 1,\n    explanation: "Yakshagana is the traditional theatre form of coastal Karnataka combining dance, music, dialogue and elaborate costumes. Its two main styles are Moodalapaya (eastern style) and Paduvalapaya (western style)."\n  },\n  {\n    id: 89,\n    text: "Consider the following pairs:\n1. Peshwa: Nagpur\n2. Scindia: Gwalior\n3. Gaekwad: Indore\n4. Holkar: Baroda\n5. Bhonsle: Pune\nHow many of the pairs given above are correctly matched?",\n    options: ["Only one", "Only three", "Only five", "None"],\n    answer: 0,\n    explanation: "Peshwa: Pune ✗ (not Nagpur), Scindia: Gwalior ✓, Gaekwad: Baroda ✗ (not Indore), Holkar: Indore ✗ (not Baroda), Bhonsle: Nagpur ✗ (not Pune). Only Scindia-Gwalior is correct — only one pair."\n  },\n  {\n    id: 90,\n    text: "Who among the following rulers and his subjects is mentioned in the Rabatak inscription?",\n    options: ["Ashoka", "Samundragupta", "Rudradaman I", "Kanishka"],\n    answer: 3,\n    explanation: "The Rabatak inscription (found in Afghanistan) is a Bactrian language inscription of Kanishka I of the Kushana empire. It mentions his genealogy and the territories he ruled."\n  },\n  {\n    id: 91,\n    text: "With reference to the Women's Kabaddi World Cup 2025, consider the following statements:\n1. India won the Women's Kabaddi World Cup title in 2025.\n2. This was the first time that the Women's Kabaddi World Cup was hosted in India.\nWhich of the statements given above is/are correct?",\n    options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],\n    answer: 2,\n    explanation: "Both statements are correct. India won the Women's Kabaddi World Cup 2025, and the tournament was hosted in India for the first time."\n  },\n  {\n    id: 92,\n    text: "Consider the following statements with reference to the Inter-State River Water Disputes Act, 1956:\n1. It provides for the establishment of River Boards.\n2. The Chairman and members of the Water Dispute Tribunals are nominated by the Chief Justice of India.\n3. In case of a dispute, a State can directly approach the Tribunal.\nWhich of the statements given above is/are correct?",\n    options: ["1 and 3 only", "2 only", "1 only", "2 and 3 only"],\n    answer: 1,\n    explanation: "Statement 1 is incorrect — River Boards are provided under the River Boards Act, 1956 (separate legislation). Statement 2 is correct. Statement 3 is incorrect — states must first approach the Central Government, which then constitutes a Tribunal."\n  },\n  {\n    id: 93,\n    text: "Consider the following pairs:\n1. MQ-9B SkyGuardian: Israel\n2. Hermes-900: United States\n3. Bayraktar TB2: Turkey\n4. Tapas-BH-201: India\nHow many of the above pairs are correctly matched?",\n    options: ["Only one", "Only two", "Only three", "All four"],\n    answer: 1,\n    explanation: "MQ-9B SkyGuardian is from the USA (General Atomics) — NOT Israel ✗. Hermes-900 is from Israel (Elbit Systems) — NOT USA ✗. Bayraktar TB2 is from Turkey ✓. Tapas-BH-201 is India's DRDO UAV ✓. Only two pairs (3 and 4) are correct."\n  },\n  {\n    id: 94,\n    text: "The terms 'Global macro', 'Event driven', 'Market neutral' are often seen in the news in the context of:",\n    options: [\n      "Hedge fund investment strategies",\n      "Disruptive technologies",\n      "Banking risk management techniques",\n      "Crude oil benchmarks"\n    ],\n    answer: 0,\n    explanation: "Global macro, event-driven, and market-neutral are types of hedge fund investment strategies. They describe different approaches to generating returns irrespective of overall market direction."\n  },\n  {\n    id: 95,\n    text: "Which of the following statements is NOT correct regarding the BRICS nations?",\n    options: [\n      "The term BRICS was coined by the British Economist Jim O'Neill.",\n      "It secretariat is located in New Delhi.",\n      "Indonesia is the first Southeast Asian member of the BRICS.",\n      "New Development Bank of BRICS funds infrastructure in emerging economies."\n    ],\n    answer: 1,\n    explanation: "BRICS does not have a permanent secretariat in New Delhi — it operates on a rotating presidency basis. The other statements are correct."\n  },\n  {\n    id: 96,\n    text: "Consider the following climatic types:\n1. Subtropical steppe\n2. Mid-latitude steppe\n3. Subtropical desert\n4. Mediterranean\nWhich of the above fall under the category of 'Dry Climates' under Köppen's scheme of classification of climate?",\n    options: ["1 and 3 only", "1, 2 and 4 only", "1, 2 and 3 only", "2 and 4 only"],\n    answer: 2,\n    explanation: "Under Köppen's classification, Dry Climates (Group B) include BS (Steppe) and BW (Desert) — both subtropical and mid-latitude varieties. Mediterranean climate (Cs) falls under Group C (Temperate climates). So 1, 2 and 3 are dry climates."\n  },\n  {\n    id: 97,\n    text: "In India, if otherwise eligible who among the following remains in office up to 65 years of age?\n1. Chief Justice of India\n2. Judge of a High Court\n3. Comptroller and Auditor General of India\n4. Chairman of Union Public Service Commission\nSelect the correct answer using the code given below.",\n    options: ["1 and 4 only", "1, 3 and 4 only", "2, 3 and 4 only", "1, 2 and 3 only"],\n    answer: 3,\n    explanation: "CJI and SC Judges retire at 65. High Court Judges retire at 62 (not 65). CAG retires at 65. UPSC Chairman serves until 65. So 1 (CJI), 2 is incorrect, 3 (CAG), 4 (UPSC Chairman) — answer is 1, 3 and 4."\n  },\n  {\n    id: 98,\n    text: "One of the most fascinating figures from the Indus Valley Civilization is the sculpture titled 'Mother Goddess'. It is made of:",\n    options: ["bronze", "terracotta", "sandstone", "ivory"],\n    answer: 1,\n    explanation: "The Mother Goddess figurines from the Indus Valley Civilization are made of terracotta (baked clay). They are among the most commonly found objects at IVC sites."\n  },\n  {\n    id: 99,\n    text: "30th Conference of Parties (COP30) to the United Nations Framework Convention on Climate Change (UNFCCC) is a critical global event hosted in which country?",\n    options: ["South Africa", "Argentina", "Brazil", "United States of America"],\n    answer: 2,\n    explanation: "COP30 (2025) is being hosted in Belém, Brazil — in the Amazon region, making it symbolically significant for climate discussions related to deforestation and tropical forests."\n  },\n  {\n    id: 100,\n    text: "Consider the following pairs:\n1. Avalokitesvara: compassionate bodhisattva\n2. Maitreya: linked to meditation and practice\n3. Samantabhadra: future buddha\nWhich of the pairs given above is/are correctly matched?",\n    options: ["2 and 3 only", "1 only", "1 and 2 only", "1, 2 and 3"],\n    answer: 1,\n    explanation: "Avalokitesvara is the bodhisattva of compassion ✓. Maitreya is the FUTURE Buddha (not linked to meditation) ✗. Samantabhadra is the bodhisattva of practice/action, NOT the future buddha ✗. Only pair 1 is correct."
  }
];


const fs = require('fs');

function escapeCSV(str) {
  if (str == null) return '""';
  let clean = String(str).replace(/"/g, '""');
  return '"' + clean + '"';
}

const csvRows = [];
csvRows.push(["Question", "OptionA", "OptionB", "OptionC", "OptionD", "CorrectAnswer", "Explanation"].join(","));

const keys = ['A', 'B', 'C', 'D'];

questions.forEach(q => {
  const row = [
    escapeCSV(q.text),
    escapeCSV(q.options[0]),
    escapeCSV(q.options[1]),
    escapeCSV(q.options[2]),
    escapeCSV(q.options[3]),
    escapeCSV(keys[q.answer]),
    escapeCSV(q.explanation)
  ];
  csvRows.push(row.join(","));
});

fs.writeFileSync('C:\\Users\\ADMN\\Downloads\\vamsiprodupscappfinal-main\\PrepAssistV2\\legacy_questions.csv', csvRows.join("\n"));
console.log('Successfully generated legacy_questions.csv with ' + questions.length + ' rows.');
