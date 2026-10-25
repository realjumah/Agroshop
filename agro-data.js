/* AgroShop Uganda — starter data: product catalogue, field guide, calendar, templates.
 * Everything here is a STARTING POINT. Prices are rough placeholders for a typical Ugandan agro-input shop
 * (UGX). Edit every price and product on the Stock page to match what you really stock and charge.
 * Brand/variety names are examples; keep the ones you stock and delete the rest.
 */
(function () {
  'use strict';

  /* ---------------- dropdown lists ---------------- */
  const CATS = ['Seeds', 'Seedlings & Planting Material', 'Fertilizers', 'Herbicides', 'Insecticides',
    'Fungicides & Seed Dressing', 'Animal Feeds & Chicks', 'Veterinary Drugs', 'Farm Tools',
    'Irrigation & Sprayers', 'Storage & Post-harvest', 'PPE & Safety', 'Services'];
  const UNITS = ['kg', 'g', 'packet', 'sachet', 'bag', 'litre', 'bottle', 'pc', 'pair', 'roll', 'metre', 'seedling',
    'bundle', 'dose', 'visit', 'test', 'session', 'trip', 'acre', 'head', 'tray', 'box'];
  const EXPENSES = ['Transport', 'Fuel – field visits', 'Wages', 'Rent', 'Electricity', 'Airtime / data', 'Licence / tax',
    'Repairs', 'Training & demo costs', 'Outreach & marketing', 'Packaging & handling', 'Mobile Money charges', 'Other'];
  const PRODUCE = ['Maize', 'Beans', 'Soybean', 'Groundnuts', 'Sorghum', 'Finger millet', 'Simsim (sesame)', 'Sunflower', 'Rice',
    'Cassava', 'Sweet potato', 'Irish potato', 'Matooke (banana)', 'Coffee (kiboko / FAQ)', 'Tomato', 'Onion', 'Cabbage',
    'Passion fruit', 'Pineapple', 'Eggs', 'Milk', 'Chicken (live)', 'Goats', 'Pigs', 'Fish', 'Honey'];

  /* ---------------- starter catalogue ----------------
   * p(code, name, cat, unit, cost, price, extra)
   * extra: {tr,hd} transport/handling per unit when buying; {par,pf} = loose item opened from a parent pack; {use} printed on receipt
   */
  const P = [];
  const p = (code, name, cat, unit, cost, price, x) => P.push(Object.assign({ code, name, cat, unit, cost, price }, x || {}));

  // Seeds (kg unless stated)
  p('SD-001', 'Maize seed – OPV (Longe 5 type), certified', 'Seeds', 'kg', 4200, 5500);
  p('SD-002', 'Maize seed – hybrid, certified', 'Seeds', 'kg', 9500, 12000);
  p('SD-003', 'Beans seed – bush type, certified', 'Seeds', 'kg', 5500, 7000);
  p('SD-004', 'Beans seed – climbing (NABE 12C)', 'Seeds', 'kg', 7000, 9000);
  p('SD-005', 'Soybean seed – Maksoy, certified', 'Seeds', 'kg', 4500, 6000);
  p('SD-006', 'Groundnut seed – Serenut, shelled', 'Seeds', 'kg', 6000, 8000);
  p('SD-007', 'Sorghum seed – improved OPV', 'Seeds', 'kg', 4000, 6000);
  p('SD-008', 'Finger millet seed – improved', 'Seeds', 'kg', 5000, 7000);
  p('SD-009', 'Simsim (sesame) seed – improved', 'Seeds', 'kg', 6000, 8000);
  p('SD-010', 'Sunflower seed – hybrid', 'Seeds', 'kg', 6500, 8500);
  p('SD-011', 'Upland rice seed – NERICA 4', 'Seeds', 'kg', 3500, 5000);
  p('SD-012', 'Cowpea seed – improved', 'Seeds', 'kg', 4500, 6000);
  p('SD-013', 'Pasture seed – Brachiaria (Mulato II)', 'Seeds', 'kg', 48000, 65000);
  p('SD-020', 'Tomato seed – hybrid (Assila F1 type), 10 g', 'Seeds', 'packet', 20000, 28000);
  p('SD-021', 'Tomato seed – open-pollinated, 10 g', 'Seeds', 'packet', 3500, 5500);
  p('SD-022', 'Cabbage seed – hybrid (Gloria F1 type), 10 g', 'Seeds', 'packet', 7000, 10000);
  p('SD-023', 'Cabbage seed – Copenhagen Market, 25 g', 'Seeds', 'packet', 3000, 5000);
  p('SD-024', 'Onion seed – Red Creole, 100 g', 'Seeds', 'packet', 22000, 30000);
  p('SD-025', 'Onion seed – Bombay Red, 100 g', 'Seeds', 'packet', 24000, 32000);
  p('SD-026', 'Carrot seed – Kuroda, 100 g', 'Seeds', 'packet', 18000, 25000);
  p('SD-027', 'Sukuma wiki (collards) seed, 100 g', 'Seeds', 'packet', 8000, 12000);
  p('SD-028', 'Amaranth (dodo) seed, 50 g', 'Seeds', 'packet', 5000, 8000);
  p('SD-029', 'Eggplant seed – Black Beauty, 10 g', 'Seeds', 'packet', 4000, 6500);
  p('SD-030', 'Sweet pepper seed – California Wonder, 10 g', 'Seeds', 'packet', 5000, 8000);
  p('SD-031', 'Hot pepper seed, 10 g', 'Seeds', 'packet', 5000, 8000);
  p('SD-032', 'Watermelon seed – Sugar Baby, 50 g', 'Seeds', 'packet', 8000, 12000);
  p('SD-033', 'Okra seed – Clemson Spineless, 100 g', 'Seeds', 'packet', 6000, 9000);
  p('SD-034', 'Cucumber seed – Marketmore, 25 g', 'Seeds', 'packet', 5000, 8000);
  p('SD-035', 'Spinach seed, 100 g', 'Seeds', 'packet', 6000, 9000);
  p('SD-901', 'Maize seed – loose (per kg)', 'Seeds', 'kg', 0, 6500, { par: 'Maize seed – OPV (Longe 5 type), certified', pf: 25 });

  // Seedlings & planting material
  p('SL-001', 'Banana tissue-culture plantlet (matooke)', 'Seedlings & Planting Material', 'seedling', 2500, 3500);
  p('SL-002', 'Coffee clonal seedling – Robusta', 'Seedlings & Planting Material', 'seedling', 800, 1200);
  p('SL-003', 'Coffee seedling – Arabica', 'Seedlings & Planting Material', 'seedling', 600, 1000);
  p('SL-004', 'Passion fruit seedling (grafted)', 'Seedlings & Planting Material', 'seedling', 2000, 3000);
  p('SL-005', 'Mango seedling (grafted)', 'Seedlings & Planting Material', 'seedling', 4000, 6000);
  p('SL-006', 'Avocado seedling – Hass (grafted)', 'Seedlings & Planting Material', 'seedling', 6000, 9000);
  p('SL-007', 'Citrus seedling – orange/lemon (grafted)', 'Seedlings & Planting Material', 'seedling', 4000, 6000);
  p('SL-008', 'Pineapple sucker', 'Seedlings & Planting Material', 'pc', 200, 400);
  p('SL-009', 'Cassava cuttings – certified, bundle of 50', 'Seedlings & Planting Material', 'bundle', 8000, 12000);
  p('SL-010', 'Sweet potato vines – OFSP, bundle', 'Seedlings & Planting Material', 'bundle', 5000, 8000);
  p('SL-011', 'Irish potato seed tubers – certified', 'Seedlings & Planting Material', 'kg', 2500, 3500);
  p('SL-012', 'Napier grass cuttings, bundle', 'Seedlings & Planting Material', 'bundle', 3000, 5000);
  p('SL-013', 'Agroforestry tree seedling (Calliandra/Grevillea)', 'Seedlings & Planting Material', 'seedling', 300, 500);
  p('SL-014', 'Timber/fuel tree seedling (pine/eucalyptus)', 'Seedlings & Planting Material', 'seedling', 400, 700);
  p('SL-015', 'Vegetable seedling – nursery raised', 'Seedlings & Planting Material', 'seedling', 150, 300);

  // Fertilizers (50 kg bags)
  const fx = { tr: 2000, hd: 500 };
  p('FT-001', 'Urea 46% N – 50 kg', 'Fertilizers', 'bag', 150000, 165000, fx);
  p('FT-002', 'DAP 18-46-0 – 50 kg', 'Fertilizers', 'bag', 195000, 215000, fx);
  p('FT-003', 'NPK 17:17:17 – 50 kg', 'Fertilizers', 'bag', 175000, 195000, fx);
  p('FT-004', 'NPK 23:23:0 – 50 kg', 'Fertilizers', 'bag', 175000, 195000, fx);
  p('FT-005', 'NPK 20:10:10 (coffee/banana) – 50 kg', 'Fertilizers', 'bag', 170000, 190000, fx);
  p('FT-006', 'CAN 26% N – 50 kg', 'Fertilizers', 'bag', 125000, 140000, fx);
  p('FT-007', 'TSP (triple super phosphate) – 50 kg', 'Fertilizers', 'bag', 190000, 210000, fx);
  p('FT-008', 'SSP (single super phosphate) – 50 kg', 'Fertilizers', 'bag', 100000, 115000, fx);
  p('FT-009', 'MOP (muriate of potash) – 50 kg', 'Fertilizers', 'bag', 160000, 175000, fx);
  p('FT-010', 'Agricultural lime – 50 kg', 'Fertilizers', 'bag', 15000, 22000, { tr: 500, hd: 300 });
  p('FT-011', 'Organic compost / manure – 50 kg', 'Fertilizers', 'bag', 15000, 22000);
  p('FT-012', 'Foliar feed – multi-nutrient, 1 L', 'Fertilizers', 'bottle', 25000, 35000);
  p('FT-013', 'Foliar feed – calcium + boron, 1 L', 'Fertilizers', 'bottle', 28000, 38000);
  p('FT-014', 'Rhizobia inoculant – soybean/beans, sachet', 'Fertilizers', 'sachet', 4500, 6500, { use: 'Mix with the seed in the shade just before planting. Do not mix with fungicide seed dressing; keep the sachet cool.' });
  p('FT-901', 'Urea – loose (per kg)', 'Fertilizers', 'kg', 0, 3800, { par: 'Urea 46% N – 50 kg', pf: 50 });
  p('FT-902', 'DAP – loose (per kg)', 'Fertilizers', 'kg', 0, 4500, { par: 'DAP 18-46-0 – 50 kg', pf: 50 });
  p('FT-903', 'NPK 17:17:17 – loose (per kg)', 'Fertilizers', 'kg', 0, 4100, { par: 'NPK 17:17:17 – 50 kg', pf: 50 });

  // Herbicides
  p('HB-001', 'Glyphosate 480 SL (non-selective) – 1 L', 'Herbicides', 'bottle', 14000, 18000);
  p('HB-002', 'Glyphosate 480 SL (non-selective) – 5 L', 'Herbicides', 'bottle', 65000, 82000);
  p('HB-003', '2,4-D amine 720 SL (broadleaf weeds) – 1 L', 'Herbicides', 'bottle', 12000, 16000);
  p('HB-004', 'Atrazine 500 SC (pre-emergence, maize) – 1 L', 'Herbicides', 'bottle', 20000, 26000);
  p('HB-005', 'Nicosulfuron (post-emergence, maize) – 1 L', 'Herbicides', 'bottle', 38000, 48000);
  p('HB-006', 'Pendimethalin 330 EC (pre-emergence) – 1 L', 'Herbicides', 'bottle', 24000, 30000);
  p('HB-007', 'Fluazifop-P-butyl (grass weeds in broadleaf crops) – 1 L', 'Herbicides', 'bottle', 45000, 58000);

  // Insecticides
  p('IN-001', 'Cypermethrin 50 EC – 1 L', 'Insecticides', 'bottle', 18000, 25000);
  p('IN-002', 'Lambda-cyhalothrin 5 EC – 1 L', 'Insecticides', 'bottle', 22000, 30000);
  p('IN-003', 'Dimethoate 40% EC – 1 L', 'Insecticides', 'bottle', 16000, 22000);
  p('IN-004', 'Imidacloprid 200 SL (sucking pests) – 100 ml', 'Insecticides', 'bottle', 8000, 12000);
  p('IN-005', 'Emamectin benzoate 5 SG (armyworm, DBM) – 100 g', 'Insecticides', 'packet', 26000, 35000);
  p('IN-006', 'Chlorantraniliprole 200 SC (armyworm, Tuta) – 50 ml', 'Insecticides', 'bottle', 38000, 50000);
  p('IN-007', 'Spinetoram 120 SC (thrips, caterpillars) – 100 ml', 'Insecticides', 'bottle', 45000, 60000);
  p('IN-008', 'Acetamiprid 20 SP (aphids, whitefly) – 100 g', 'Insecticides', 'packet', 20000, 28000);
  p('IN-009', 'Abamectin 18 EC (mites) – 100 ml', 'Insecticides', 'bottle', 15000, 22000);
  p('IN-010', 'Neem-based bio-insecticide – 1 L', 'Insecticides', 'bottle', 25000, 35000);

  // Fungicides & seed dressing
  p('FG-001', 'Mancozeb 80 WP – 1 kg', 'Fungicides & Seed Dressing', 'packet', 14000, 20000);
  p('FG-002', 'Copper oxychloride 50 WP – 1 kg', 'Fungicides & Seed Dressing', 'packet', 20000, 28000);
  p('FG-003', 'Metalaxyl-M + mancozeb (late blight) – 1 kg', 'Fungicides & Seed Dressing', 'packet', 38000, 50000);
  p('FG-004', 'Azoxystrobin 250 SC – 100 ml', 'Fungicides & Seed Dressing', 'bottle', 25000, 35000);
  p('FG-005', 'Chlorothalonil 720 SC – 1 L', 'Fungicides & Seed Dressing', 'bottle', 30000, 40000);
  p('FG-006', 'Tebuconazole 250 EW – 250 ml', 'Fungicides & Seed Dressing', 'bottle', 22000, 30000);
  p('FG-007', 'Sulphur 80 WP (powdery mildew, mites) – 1 kg', 'Fungicides & Seed Dressing', 'packet', 10000, 15000);
  p('FG-008', 'Trichoderma bio-fungicide – 1 kg', 'Fungicides & Seed Dressing', 'packet', 25000, 35000);
  p('FG-009', 'Seed dressing (fungicide + insecticide) – 100 g', 'Fungicides & Seed Dressing', 'sachet', 6000, 9000);

  // Animal feeds & chicks
  const feedx = { tr: 1000, hd: 300 };
  p('FD-001', 'Layers mash – 50 kg', 'Animal Feeds & Chicks', 'bag', 65000, 72000, feedx);
  p('FD-002', 'Chick mash – 50 kg', 'Animal Feeds & Chicks', 'bag', 75000, 82000, feedx);
  p('FD-003', 'Growers mash – 50 kg', 'Animal Feeds & Chicks', 'bag', 65000, 70000, feedx);
  p('FD-004', 'Broiler starter – 50 kg', 'Animal Feeds & Chicks', 'bag', 90000, 98000, feedx);
  p('FD-005', 'Broiler finisher – 50 kg', 'Animal Feeds & Chicks', 'bag', 85000, 92000, feedx);
  p('FD-006', 'Dairy meal – 50 kg', 'Animal Feeds & Chicks', 'bag', 60000, 68000, feedx);
  p('FD-007', 'Pig grower/finisher meal – 50 kg', 'Animal Feeds & Chicks', 'bag', 60000, 67000, feedx);
  p('FD-008', 'Sow & weaner meal – 50 kg', 'Animal Feeds & Chicks', 'bag', 62000, 70000, feedx);
  p('FD-009', 'Maize bran – 50 kg', 'Animal Feeds & Chicks', 'bag', 24000, 30000, feedx);
  p('FD-010', 'Fish meal (mukene) – 50 kg', 'Animal Feeds & Chicks', 'bag', 140000, 160000, feedx);
  p('FD-011', 'Sunflower cake – 50 kg', 'Animal Feeds & Chicks', 'bag', 55000, 65000, feedx);
  p('FD-012', 'Fish feed – tilapia pellets, 20 kg', 'Animal Feeds & Chicks', 'bag', 70000, 78000, feedx);
  p('FD-013', 'Mineral salt lick (cattle/goats) – 5 kg', 'Animal Feeds & Chicks', 'pc', 18000, 25000);
  p('FD-014', 'Limestone / shell grit (poultry) – 25 kg', 'Animal Feeds & Chicks', 'bag', 12000, 18000);
  p('FD-015', 'Dicalcium phosphate (DCP) – 25 kg', 'Animal Feeds & Chicks', 'bag', 55000, 68000);
  p('FD-016', 'Day-old chicks – broiler', 'Animal Feeds & Chicks', 'pc', 3500, 4200);
  p('FD-017', 'Day-old chicks – layer', 'Animal Feeds & Chicks', 'pc', 3500, 4500);
  p('FD-018', 'Chicks – improved local / Kuroiler', 'Animal Feeds & Chicks', 'pc', 3500, 5000);
  p('FD-019', 'Fish fingerlings – tilapia / catfish', 'Animal Feeds & Chicks', 'pc', 100, 200);
  p('FD-901', 'Layers mash – loose (per kg)', 'Animal Feeds & Chicks', 'kg', 0, 1600, { par: 'Layers mash – 50 kg', pf: 50 });
  p('FD-902', 'Chick mash – loose (per kg)', 'Animal Feeds & Chicks', 'kg', 0, 1800, { par: 'Chick mash – 50 kg', pf: 50 });
  p('FD-903', 'Maize bran – loose (per kg)', 'Animal Feeds & Chicks', 'kg', 0, 650, { par: 'Maize bran – 50 kg', pf: 50 });

  // Veterinary drugs (cold-chain / prescription items: sell with advice)
  const vu = 'Veterinary product: use the dose on the label, finish the course, observe the withdrawal period before milk/meat/eggs are sold, and keep out of reach of children.';
  p('VT-001', 'Oxytetracycline 20% LA injectable – 100 ml', 'Veterinary Drugs', 'bottle', 18000, 25000, { use: vu });
  p('VT-002', 'Albendazole dewormer (cattle/goats/sheep) – 500 ml', 'Veterinary Drugs', 'bottle', 22000, 30000, { use: vu });
  p('VT-003', 'Ivermectin 1% injectable – 50 ml', 'Veterinary Drugs', 'bottle', 16000, 22000, { use: vu });
  p('VT-004', 'Newcastle disease vaccine (Lasota) – 100 doses', 'Veterinary Drugs', 'dose', 8000, 12000, { use: 'Vaccine: keep cold (2–8 °C) and out of the sun. Use the whole vial within 1–2 hours of mixing; do not use chlorinated water.' });
  p('VT-005', 'I-2 thermostable Newcastle vaccine (village chicken) – 100 doses', 'Veterinary Drugs', 'dose', 8000, 12000, { use: 'Vaccine: keep cold. Give by eye drop, repeat about every 3–4 months.' });
  p('VT-006', 'Gumboro (IBD) vaccine – 100 doses', 'Veterinary Drugs', 'dose', 12000, 18000, { use: 'Vaccine: keep cold (2–8 °C). Mix and use quickly as the label says.' });
  p('VT-007', 'Fowl pox vaccine – 100 doses', 'Veterinary Drugs', 'dose', 12000, 16000, { use: 'Vaccine: keep cold. Wing-web method; check for a “take” after 7–10 days.' });
  p('VT-008', 'Amprolium 20% (coccidiosis) – 100 g', 'Veterinary Drugs', 'sachet', 12000, 16000, { use: vu });
  p('VT-009', 'Poultry multivitamin / electrolytes – 100 g', 'Veterinary Drugs', 'sachet', 8000, 12000);
  p('VT-010', 'Amitraz 12.5% EC acaricide (tick spray/dip) – 500 ml', 'Veterinary Drugs', 'bottle', 30000, 40000, { use: 'Acaricide: wear gloves and mask, do not spray in the wind, keep away from water sources. Observe milk/meat withdrawal times.' });
  p('VT-011', 'Buparvaquone injection (East Coast fever) – 20 ml', 'Veterinary Drugs', 'bottle', 45000, 60000, { use: 'Prescription-type drug: give only on advice of a veterinarian or animal health worker.' });
  p('VT-012', 'Wound spray – 200 ml', 'Veterinary Drugs', 'bottle', 8000, 12000);
  p('VT-013', 'Piglet iron injection – 100 ml', 'Veterinary Drugs', 'bottle', 18000, 25000, { use: vu });
  p('VT-014', 'Syringe + needle (each)', 'Veterinary Drugs', 'pc', 300, 500);
  p('VT-015', 'Drenching gun – 20 ml', 'Veterinary Drugs', 'pc', 15000, 22000);
  p('VT-016', 'Vaccine cool box with ice packs', 'Veterinary Drugs', 'pc', 45000, 60000);

  // Farm tools
  p('TL-001', 'Hand hoe with handle', 'Farm Tools', 'pc', 12000, 18000);
  p('TL-002', 'Panga (machete)', 'Farm Tools', 'pc', 10000, 15000);
  p('TL-003', 'Slasher', 'Farm Tools', 'pc', 12000, 18000);
  p('TL-004', 'Pruning shears (secateurs)', 'Farm Tools', 'pc', 20000, 30000);
  p('TL-005', 'Wheelbarrow', 'Farm Tools', 'pc', 120000, 150000);
  p('TL-006', 'Spade', 'Farm Tools', 'pc', 20000, 28000);
  p('TL-007', 'Fork hoe', 'Farm Tools', 'pc', 25000, 32000);
  p('TL-008', 'Watering can – 10 L', 'Farm Tools', 'pc', 12000, 18000);
  p('TL-009', 'Sickle', 'Farm Tools', 'pc', 5000, 8000);
  p('TL-010', 'Planting string / line (roll)', 'Farm Tools', 'roll', 5000, 8000);
  p('TL-011', 'Measuring tape – 30 m', 'Farm Tools', 'pc', 15000, 22000);
  p('TL-012', 'Seedling tray – 105 cells', 'Farm Tools', 'pc', 5000, 8000);
  p('TL-013', 'Nursery polybags (pack of 100)', 'Farm Tools', 'packet', 6000, 9000);
  p('TL-014', 'Manual maize sheller', 'Farm Tools', 'pc', 25000, 35000);

  // Irrigation & sprayers
  p('IR-001', 'Knapsack sprayer – 16 L (manual)', 'Irrigation & Sprayers', 'pc', 70000, 95000);
  p('IR-002', 'Knapsack sprayer – 16 L (battery)', 'Irrigation & Sprayers', 'pc', 180000, 230000);
  p('IR-003', 'Drip irrigation kit – 1/8 acre', 'Irrigation & Sprayers', 'pc', 400000, 520000);
  p('IR-004', 'Water pump – petrol, 2 inch', 'Irrigation & Sprayers', 'pc', 650000, 800000);
  p('IR-005', 'Hosepipe ½ inch (per metre)', 'Irrigation & Sprayers', 'metre', 1500, 2500);
  p('IR-006', 'Water storage tank – 1,000 L', 'Irrigation & Sprayers', 'pc', 380000, 480000);
  p('IR-007', 'Sprayer repair kit (washers, nozzle)', 'Irrigation & Sprayers', 'pc', 4000, 7000);

  // Storage & post-harvest
  p('ST-001', 'Hermetic storage bag – 100 kg', 'Storage & Post-harvest', 'pc', 6500, 9500);
  p('ST-002', 'Hermetic storage bag – 50 kg', 'Storage & Post-harvest', 'pc', 4000, 6000);
  p('ST-003', 'Polypropylene bag – 100 kg (new)', 'Storage & Post-harvest', 'pc', 1500, 2500);
  p('ST-004', 'Drying tarpaulin – 4 × 6 m', 'Storage & Post-harvest', 'pc', 60000, 80000);
  p('ST-005', 'Drying tarpaulin – 8 × 10 m', 'Storage & Post-harvest', 'pc', 160000, 210000);
  p('ST-006', 'Grain storage dust (pirimiphos-methyl + permethrin) – 500 g', 'Storage & Post-harvest', 'packet', 10000, 14000);
  p('ST-007', 'Grain moisture meter', 'Storage & Post-harvest', 'pc', 350000, 450000);
  p('ST-008', 'Hanging scale – 50 kg', 'Storage & Post-harvest', 'pc', 25000, 35000);
  p('ST-009', 'Platform scale – 100 kg', 'Storage & Post-harvest', 'pc', 250000, 330000);

  // PPE
  p('PP-001', 'Gumboots (pair)', 'PPE & Safety', 'pair', 25000, 35000);
  p('PP-002', 'Chemical-resistant gloves (pair)', 'PPE & Safety', 'pair', 5000, 8000);
  p('PP-003', 'Spray mask – disposable', 'PPE & Safety', 'pc', 1500, 2500);
  p('PP-004', 'Half-face respirator with cartridges', 'PPE & Safety', 'pc', 60000, 85000);
  p('PP-005', 'Spraying coverall / overall', 'PPE & Safety', 'pc', 45000, 65000);
  p('PP-006', 'Safety goggles', 'PPE & Safety', 'pc', 8000, 12000);

  // Services (fees; no stock)
  p('SV-001', 'Farm visit & advice (per visit)', 'Services', 'visit', 0, 15000);
  p('SV-002', 'Soil test – pH + N-P-K rapid kit', 'Services', 'test', 0, 20000);
  p('SV-003', 'Pest & disease diagnosis in the field', 'Services', 'visit', 0, 10000);
  p('SV-004', 'Season farm plan & input budget', 'Services', 'session', 0, 30000);
  p('SV-005', 'Spraying service (per acre)', 'Services', 'acre', 0, 25000);
  p('SV-006', 'Poultry vaccination service (per visit)', 'Services', 'visit', 0, 20000);
  p('SV-007', 'Cattle / goat spraying or deworming (per head)', 'Services', 'head', 0, 2000);
  p('SV-008', 'Maize shelling service (per bag)', 'Services', 'bag', 0, 2000);
  p('SV-009', 'Seed treatment service (per bag of seed)', 'Services', 'bag', 0, 3000);
  p('SV-010', 'Group training session (half day)', 'Services', 'session', 0, 100000);
  p('SV-011', 'Input delivery (within 10 km)', 'Services', 'trip', 0, 10000);

  /* ---------------- crop guide ----------------
   * Typical figures only. Rates depend on soil, variety and rainfall; follow the seed pack, product label and
   * the district production/agricultural officer.
   */
  const CROPS = [
    { n: 'Maize', ic: '🌽', time: 'Plant at the start of the rains. Early planting gives the best yield.', sp: '75 × 30 cm, 1 seed per hole (or 75 × 60 cm, 2 seeds)', seed: '8–10 kg per acre', fert: 'At planting: DAP or NPK (about 50 kg/acre). Top-dress with urea (about 50 kg/acre) at 4–6 weeks, on moist soil. Best rates come from a soil test.', pest: 'Fall armyworm, stalk borers, maize streak virus, grey leaf spot, weeds, striga (north)', tips: 'Use certified seed. Scout for fall armyworm every week from emergence. Weed twice. Dry grain to 13% moisture and store in hermetic bags.', mat: '3–4 months', inp: ['Seeds', 'Fertilizers', 'Herbicides', 'Insecticides', 'Storage & Post-harvest'] },
    { n: 'Beans', ic: '🫘', time: 'Start of the rains; second season in Aug–Sep (south).', sp: 'Bush: 50 × 10 cm. Climbing: 50 × 20 cm with stakes', seed: '20–30 kg per acre (depends on seed size)', fert: 'Phosphorus at planting on poor soils (TSP, SSP or DAP). Avoid heavy nitrogen. Manure helps.', pest: 'Bean fly, aphids, bean rust, angular leaf spot, anthracnose, root rots', tips: 'Rotate with cereals. Do not plant beans after beans. Keep fields weed-free early. Harvest when pods dry; dry well before storing.', mat: '2.5–3.5 months', inp: ['Seeds', 'Fertilizers', 'Insecticides', 'Fungicides & Seed Dressing'] },
    { n: 'Soybean', ic: '🌱', time: 'Start of the rains.', sp: '45–50 cm between rows, 5 cm in the row', seed: 'About 20–25 kg per acre', fert: 'Inoculate seed with rhizobia. Phosphorus (TSP/SSP) on poor soils. No nitrogen needed.', pest: 'Soybean rust, bean fly, pod borers, bacterial pustule', tips: 'Inoculant makes a big difference. Plant promptly after inoculating, in the shade. Harvest when leaves have fallen and pods rattle.', mat: '3–4 months', inp: ['Seeds', 'Fertilizers', 'Fungicides & Seed Dressing'] },
    { n: 'Groundnuts', ic: '🥜', time: 'Start of the rains. Needs well-drained, loose soil.', sp: '45 × 10 cm', seed: 'About 25–30 kg shelled seed per acre', fert: 'Usually little fertilizer. Gypsum/lime helps pod fill on acid soils. Phosphorus on poor soils.', pest: 'Groundnut rosette (spread by aphids), leaf spots, termites', tips: 'Use rosette-resistant varieties. Plant early and at the right spacing. Dry pods quickly to below 10% moisture and sort mouldy nuts to avoid aflatoxin.', mat: '3.5–4.5 months', inp: ['Seeds', 'Fertilizers', 'Fungicides & Seed Dressing'] },
    { n: 'Sorghum', ic: '🌾', time: 'Start of the rains. Suited to drier areas.', sp: '60 × 15–20 cm', seed: 'About 3–4 kg per acre', fert: 'Moderate: some DAP/NPK at planting and urea at 4–5 weeks if rainfall is good.', pest: 'Birds, stem borer, striga, head smut, sorghum midge', tips: 'Thin to one or two plants per hill. Use bird scaring or early-maturing types. Good rotation crop after legumes.', mat: '3.5–5 months', inp: ['Seeds', 'Fertilizers', 'Insecticides'] },
    { n: 'Cassava', ic: '🍠', time: 'Start of the rains; can also be planted in the second season.', sp: '1 × 1 m', seed: 'About 4,000 cuttings per acre (20–25 cm, 5–7 nodes)', fert: 'Normally not fertilized; manure or NPK helps on poor soil.', pest: 'Cassava mosaic disease, cassava brown streak disease, mealybug, green mite', tips: 'Plant clean, certified cuttings of resistant varieties (e.g. NASE 14, NAROCASS 1). Never plant cuttings from diseased plants. Weed early.', mat: '9–12 months', inp: ['Seedlings & Planting Material', 'Herbicides'] },
    { n: 'Irish potato', ic: '🥔', time: 'Cool highlands (south-west, Mt Elgon). Start of the rains.', sp: '75 × 30 cm', seed: 'About 700–900 kg seed tubers per acre', fert: 'NPK or DAP at planting plus manure. Top-dress CAN/urea at about 4 weeks.', pest: 'Late blight, bacterial wilt, potato tuber moth, aphids', tips: 'Use certified seed tubers. Earth up at 3–4 weeks. In wet weather spray against late blight regularly. Rotate with cereals; no potato after potato or tomato.', mat: '3–4 months', inp: ['Seedlings & Planting Material', 'Fertilizers', 'Fungicides & Seed Dressing'] },
    { n: 'Sweet potato', ic: '🍠', time: 'Start of the rains, on ridges or mounds.', sp: '1 m between ridges, 30 cm between vines', seed: 'About 13,000 vine cuttings per acre (30 cm)', fert: 'Not usually fertilized. Avoid too much nitrogen (leaves, few tubers).', pest: 'Sweet potato weevil, virus disease, rodents', tips: 'Plant clean vines of improved varieties; orange-fleshed types (OFSP) are rich in vitamin A. Harvest on time to limit weevil damage.', mat: '3–5 months', inp: ['Seedlings & Planting Material'] },
    { n: 'Banana (matooke)', ic: '🍌', time: 'Start of the rains (pit planting).', sp: '3 × 3 m (about 450 plants per acre)', seed: 'Tissue-culture plantlets or clean suckers', fert: 'Manure and mulch in the pit, then yearly NPK/potassium and plenty of mulch. Water in dry spells.', pest: 'Banana weevil, nematodes, black sigatoka, banana bacterial wilt (BXW)', tips: 'Use clean planting material. Disinfect tools between plants (BXW). Remove the male bud with a forked stick. Keep 3 plants per mat (mother, daughter, granddaughter).', mat: '12–18 months', inp: ['Seedlings & Planting Material', 'Fertilizers'] },
    { n: 'Coffee (Robusta/Arabica)', ic: '☕', time: 'Start of the rains, planting holes prepared early.', sp: 'Robusta 3 × 3 m (about 450/acre); Arabica 2.5 × 2.5 m (about 650/acre)', seed: 'Clonal (Robusta) or improved (Arabica) seedlings', fert: 'Manure at planting; NPK or CAN + potassium yearly in the rains. Mulch.', pest: 'Coffee wilt disease, coffee berry borer, leaf rust (Arabica), stem borers', tips: 'Buy certified seedlings from approved nurseries. Mulch, prune, and handle only ripe cherries. Dry on tarpaulins, off the ground.', mat: 'First harvest 2–3 years', inp: ['Seedlings & Planting Material', 'Fertilizers', 'Fungicides & Seed Dressing', 'Storage & Post-harvest'] },
    { n: 'Tomato', ic: '🍅', time: 'Nursery 3–4 weeks, then transplant. Dry-season crops need irrigation.', sp: 'About 75 × 50 cm, staked', seed: 'About 50–60 g of hybrid seed per acre (nursery)', fert: 'Manure + NPK/DAP at transplanting; top-dress with CAN and potassium; calcium to prevent blossom-end rot.', pest: 'Late and early blight, bacterial wilt, Tuta absoluta, whitefly (leaf curl virus), nematodes, fruitworm', tips: 'Rotate: do not plant after tomato, potato, pepper or eggplant. Stake and prune. Mulch. Follow the waiting period on every spray label before harvest.', mat: '3–4 months', inp: ['Seeds', 'Fertilizers', 'Fungicides & Seed Dressing', 'Insecticides', 'Irrigation & Sprayers'] },
    { n: 'Cabbage', ic: '🥬', time: 'Nursery about 4 weeks, then transplant. Best in cooler months.', sp: '60 × 45 cm', seed: 'About 40–50 g of seed per acre (nursery)', fert: 'Manure + NPK at transplanting; CAN/urea top-dress at 3–4 weeks.', pest: 'Diamondback moth, aphids, black rot, cutworms', tips: 'Rotate with non-brassicas. Scout weekly for diamondback moth; rotate insecticide groups. Water regularly.', mat: '2.5–3.5 months', inp: ['Seeds', 'Fertilizers', 'Insecticides'] },
    { n: 'Onion', ic: '🧅', time: 'Drier months, with irrigation. Nursery 6–8 weeks.', sp: '10 × 30 cm', seed: 'About 1.5–2 kg of seed per acre (nursery)', fert: 'Manure + NPK at transplanting; nitrogen top-dress early, stop before bulbing.', pest: 'Thrips, purple blotch, downy mildew, damping-off in the nursery', tips: 'Well-drained soil. Stop watering when tops fall. Cure bulbs 1–2 weeks in the shade before storage.', mat: '4–5 months', inp: ['Seeds', 'Fertilizers', 'Fungicides & Seed Dressing', 'Insecticides'] },
    { n: 'Passion fruit', ic: '🍈', time: 'Start of the rains; needs a trellis.', sp: 'About 3 × 3 m', seed: 'Grafted seedlings (about 450 per acre)', fert: 'Manure at planting; NPK + potassium regularly; mulch and water in dry spells.', pest: 'Woodiness virus, fusarium wilt, brown spot, fruit flies', tips: 'Use grafted, disease-free seedlings. Remove virus-infected vines. Prune and trellis well.', mat: '8–10 months to first fruit', inp: ['Seedlings & Planting Material', 'Fertilizers', 'Fungicides & Seed Dressing'] },
    { n: 'Pineapple', ic: '🍍', time: 'Start of the rains.', sp: 'Double rows, about 30 × 30 × 90 cm', seed: 'About 12,000–15,000 suckers/slips per acre', fert: 'Manure at planting; NPK + urea in splits; potassium for fruit quality.', pest: 'Mealybug wilt, heart rot, nematodes', tips: 'Treat suckers before planting. Remove weeds and keep the beds well drained.', mat: '15–20 months', inp: ['Seedlings & Planting Material', 'Fertilizers'] }
  ];

  /* ---------------- livestock guide ---------------- */
  const LIVESTOCK = [
    { n: 'Poultry (layers & broilers)', ic: '🐔', pts: [
      'Brooding: keep chicks warm (about 32–35 °C in the first week, lowering about 3 °C each week). Clean water and feed from day 1.',
      'Feeding layers: chick mash to about 8 weeks, growers mash to about 18 weeks, then layers mash. Add calcium (grit) to laying hens.',
      'Feeding broilers: starter for about 3 weeks, then finisher; most are sold at 5–6 weeks.',
      'Hygiene: clean drinkers daily, dry litter, foot-bath at the door, keep wild birds and visitors away.',
      'Coccidiosis (bloody droppings): keep litter dry; use a coccidiostat on advice.',
      'Report sudden high deaths to a veterinary officer quickly.'] },
    { n: 'Dairy cattle', ic: '🐄', pts: [
      'Ticks cause East Coast fever and other diseases: spray or dip on a regular schedule; rotate acaricide types as advised.',
      'ECF: high fever and swollen lymph nodes. Treatment works only if given early — call a veterinarian at once.',
      'Deworm about every 3–4 months. Give minerals (salt lick) and clean water all the time.',
      'FMD and brucellosis vaccination is coordinated with the district veterinary office.',
      'Mastitis: wash and dry teats, milk clean, use teat dip, and keep bedding dry.',
      'Feed: good forage (Napier, Brachiaria), hay/silage in the dry season, and dairy meal for milking cows.'] },
    { n: 'Goats & sheep', ic: '🐐', pts: [
      'Deworm about every 3 months using different drug groups in rotation, and weigh/dose by body size.',
      'PPR vaccination: organised through the district veterinary office.',
      'Use a raised, slatted house to keep animals dry and reduce worms and foot problems.',
      'Mange and lice: treat with a suitable acaricide; separate sick animals.',
      'Provide minerals and clean water; do not overstock grazing land.'] },
    { n: 'Pigs', ic: '🐖', pts: [
      'African swine fever (ASF): no vaccine and no cure. Signs: high fever, red/purple skin, sudden deaths. Report to the district veterinary office; do not sell or move sick pigs.',
      'Biosecurity: keep a closed herd, restrict visitors, never feed uncooked swill, disinfect boots and equipment.',
      'Piglets: iron injection in the first week; weaning at about 6–8 weeks.',
      'Deworm regularly and keep pens clean and dry.'] },
    { n: 'Fish farming (tilapia / catfish)', ic: '🐟', pts: [
      'Pond: well-sited with a good water supply, clay-rich soil, a proper inlet and outlet.',
      'Prepare: dry, lime the pond bottom, fill, and let natural food develop (manure) before stocking.',
      'Stock good-quality fingerlings in the cooler part of the day; follow your fisheries officer’s stocking rate.',
      'Feed a quality pellet twice daily; do not overfeed (it fouls the water).',
      'Watch for low oxygen (fish gasping at the surface in the early morning) and add fresh water.'] }
  ];

  const POULTRY_SCHED = [
    ['Day 1', 'Marek’s disease (usually done by the hatchery)'],
    ['Day 7–10', 'Newcastle disease + infectious bronchitis (eye drop / drinking water)'],
    ['Day 14', 'Gumboro (IBD) – first dose'],
    ['Day 21', 'Newcastle booster (Lasota)'],
    ['Day 24–28', 'Gumboro – second dose'],
    ['Week 6–8', 'Fowl pox (wing web)'],
    ['Week 12–16', 'Newcastle booster'],
    ['Every 3–4 months', 'Newcastle booster for layers/breeders; village chickens: I-2 thermostable vaccine every 3–4 months']
  ];

  /* ---------------- problem finder ----------------
   * kind: Pest | Disease | Nutrient | Weed | Animal
   * IMPORTANT: this is a guide to help you ask the right questions. Confirm with the district agricultural/veterinary
   * officer when you are unsure, and always follow the product label.
   */
  const PROBLEMS = [
    { n: 'Fall armyworm', kind: 'Pest', crops: 'Maize, sorghum', signs: 'Ragged leaf holes and “window-pane” marks, sawdust-like droppings in the leaf whorl, damaged young cobs.', act: 'Scout 20 plants in 5 spots every week. Hand-pick/crush small infestations. Spray a registered armyworm insecticide aimed into the whorl early morning or evening; rotate chemical groups. Plant early and together with neighbours.', cat: ['Insecticides'] },
    { n: 'Stalk borers', kind: 'Pest', crops: 'Maize, sorghum', signs: 'Small round holes in leaves, “dead heart” in young plants, tunnels in the stalk.', act: 'Destroy old stalks after harvest, rotate crops, intercrop with legumes; granule/ spray insecticide into the whorl early if severe.', cat: ['Insecticides'] },
    { n: 'Maize streak virus', kind: 'Disease', crops: 'Maize', signs: 'Narrow pale yellow streaks along the leaves; stunted plants.', act: 'No cure. Plant early, use tolerant varieties, control leafhoppers and weeds, rogue badly affected plants.', cat: ['Seeds', 'Insecticides'] },
    { n: 'Weeds / striga', kind: 'Weed', crops: 'Cereals', signs: 'Weeds out-competing the crop; purple-flowered striga attached to maize/sorghum roots in the north.', act: 'Weed at 2–3 weeks and again at 5–6 weeks. Pre-emergence or post-emergence herbicide for large fields. For striga: rotate with legumes, use resistant varieties, add manure.', cat: ['Herbicides', 'Farm Tools'] },
    { n: 'Bean fly / root rot', kind: 'Pest', crops: 'Beans', signs: 'Young seedlings wilt and die; swelling at the stem base; yellowing.', act: 'Seed dressing, early planting, mulch, add manure; rotate. Replant if the stand is poor.', cat: ['Fungicides & Seed Dressing', 'Insecticides'] },
    { n: 'Bean rust / angular leaf spot', kind: 'Disease', crops: 'Beans', signs: 'Rusty brown pustules, or angular brown spots on the leaves.', act: 'Use clean seed and tolerant varieties, rotate, avoid working in wet fields; fungicide only when the disease starts early.', cat: ['Fungicides & Seed Dressing'] },
    { n: 'Groundnut rosette', kind: 'Disease', crops: 'Groundnuts', signs: 'Stunted bushy plants with yellow or mottled small leaves.', act: 'Spread by aphids: plant early and at the right spacing, use resistant varieties, remove infected plants.', cat: ['Seeds', 'Insecticides'] },
    { n: 'Late blight', kind: 'Disease', crops: 'Potato, tomato', signs: 'Water-soaked dark patches on leaves and stems; white mould underneath in humid weather; fruits/tubers rot.', act: 'Spray a protectant (mancozeb, copper) before symptoms in wet weather and a systemic mix once it starts; rotate; remove infected plants; do not plant potato/tomato back-to-back.', cat: ['Fungicides & Seed Dressing'] },
    { n: 'Early blight / leaf spots', kind: 'Disease', crops: 'Tomato, potato', signs: 'Brown spots with rings on older leaves.', act: 'Mulch, stake, avoid overhead watering, remove lower leaves; protectant fungicide.', cat: ['Fungicides & Seed Dressing'] },
    { n: 'Bacterial wilt', kind: 'Disease', crops: 'Tomato, potato, pepper, eggplant', signs: 'Sudden wilting of green plants; a cut stem placed in clear water streams milky ooze.', act: 'No chemical cure. Uproot and destroy wilted plants, rotate for at least 2–3 years with cereals, use clean seed and raised beds, disinfect tools.', cat: [] },
    { n: 'Tuta absoluta (tomato leaf miner)', kind: 'Pest', crops: 'Tomato', signs: 'Winding mines in leaves, tunnelled fruits, heavy leaf damage.', act: 'Pheromone traps, remove damaged leaves, field hygiene; rotate insecticide groups, spray on schedule with a registered product.', cat: ['Insecticides'] },
    { n: 'Whitefly / leaf curl', kind: 'Pest', crops: 'Tomato, cassava, vegetables', signs: 'Tiny white insects under leaves; curled yellow leaves; sooty mould.', act: 'Yellow sticky traps, remove infected plants, control weeds, suitable insecticide against sucking pests.', cat: ['Insecticides'] },
    { n: 'Diamondback moth', kind: 'Pest', crops: 'Cabbage, kale', signs: 'Small green caterpillars; holes in leaves, “window” damage.', act: 'Scout weekly; use bio-pesticides or registered insecticides and rotate groups; do not grow brassicas continuously.', cat: ['Insecticides'] },
    { n: 'Thrips / purple blotch', kind: 'Pest', crops: 'Onion', signs: 'Silvery streaks on leaves (thrips); purple lesions with yellow borders (blotch).', act: 'Avoid dense planting and wet leaves, rotate; targeted insecticide and fungicide at first signs.', cat: ['Insecticides', 'Fungicides & Seed Dressing'] },
    { n: 'Banana bacterial wilt (BXW)', kind: 'Disease', crops: 'Banana', signs: 'Premature ripening, yellow leaves, wilting, cut stem oozes yellow bacterial slime.', act: 'Remove the male bud, cut and bury/destroy infected mats, disinfect tools (heat or bleach) between plants, report to the district agricultural officer.', cat: [] },
    { n: 'Banana weevil', kind: 'Pest', crops: 'Banana', signs: 'Tunnels in the corm, toppling plants, poor bunches.', act: 'Clean planting material, pseudostem traps, mulching, remove old residues.', cat: ['Insecticides'] },
    { n: 'Black sigatoka', kind: 'Disease', crops: 'Banana', signs: 'Dark streaks on leaves that merge and dry out leaves.', act: 'Remove infected leaves, good spacing and drainage; fungicide in commercial plots.', cat: ['Fungicides & Seed Dressing'] },
    { n: 'Coffee wilt / berry borer / leaf rust', kind: 'Disease', crops: 'Coffee', signs: 'Wilt: leaves yellow and trees die; Borer: tiny holes in berries; Rust: orange powder under leaves (Arabica).', act: 'Plant resistant clones (wilt); strip and harvest all berries to control the borer; prune and spray copper for rust. Report wilt to the extension officer.', cat: ['Fungicides & Seed Dressing', 'Seedlings & Planting Material'] },
    { n: 'Cassava mosaic / brown streak', kind: 'Disease', crops: 'Cassava', signs: 'Mosaic: yellow patches and twisted leaves; brown streak: brown lesions on stems and corky tuber rot.', act: 'No cure. Use clean resistant varieties, rogue infected plants and control whiteflies.', cat: ['Seedlings & Planting Material'] },
    { n: 'Nitrogen deficiency', kind: 'Nutrient', crops: 'Cereals, vegetables', signs: 'Pale/yellow older leaves, often V-shaped from the tip in maize; weak growth.', act: 'Top-dress with urea/CAN/NPK on moist soil; add manure; rotate with legumes.', cat: ['Fertilizers'] },
    { n: 'Phosphorus deficiency', kind: 'Nutrient', crops: 'Maize, beans, legumes', signs: 'Purple/reddish tint on leaves, stunting, slow root development.', act: 'Apply DAP, NPK, TSP or SSP at planting; add manure/lime on acid soils.', cat: ['Fertilizers'] },
    { n: 'Potassium deficiency', kind: 'Nutrient', crops: 'Banana, tomato, coffee', signs: 'Scorched or yellow leaf margins, weak stems, small fruits.', act: 'Apply MOP or NPK with potassium; mulch and manure.', cat: ['Fertilizers'] },
    { n: 'Blossom-end rot', kind: 'Nutrient', crops: 'Tomato', signs: 'Dark, sunken patch at the fruit’s base.', act: 'Even watering and mulch; calcium foliar feed or calcium source; avoid excess nitrogen.', cat: ['Fertilizers'] },
    { n: 'Newcastle disease', kind: 'Animal', crops: 'Poultry', signs: 'Sudden deaths, greenish diarrhoea, twisted neck, gasping, drop in egg production.', act: 'No cure. Vaccinate on schedule, isolate, call a veterinarian and report to the district veterinary office. Do not sell sick or dead birds.', cat: ['Veterinary Drugs'] },
    { n: 'Gumboro (IBD)', kind: 'Animal', crops: 'Poultry', signs: 'Young chicks (3–6 weeks) ruffled, watery whitish diarrhoea, sudden mortality.', act: 'Vaccinate on schedule, strict hygiene, call a veterinarian.', cat: ['Veterinary Drugs'] },
    { n: 'Coccidiosis', kind: 'Animal', crops: 'Poultry, rabbits', signs: 'Bloody or brown droppings, dull and huddled birds, poor growth.', act: 'Keep litter dry; use a coccidiostat (e.g. amprolium) as advised; vitamins and clean water.', cat: ['Veterinary Drugs'] },
    { n: 'East Coast fever / ticks', kind: 'Animal', crops: 'Cattle', signs: 'High fever, swollen lymph nodes, laboured breathing, loss of appetite.', act: 'Call a veterinarian immediately; regular tick control; ITM vaccination in high-risk areas.', cat: ['Veterinary Drugs'] },
    { n: 'Mastitis', kind: 'Animal', crops: 'Dairy cows/goats', signs: 'Hot, swollen painful udder; clots or blood in the milk.', act: 'Strip the quarter, hygiene, teat dip; veterinarian for antibiotic treatment; withhold milk during treatment.', cat: ['Veterinary Drugs'] },
    { n: 'Worms', kind: 'Animal', crops: 'Cattle, goats, sheep, pigs', signs: 'Poor growth, rough coat, diarrhoea, anaemia (pale eyelids), bottle jaw.', act: 'Strategic deworming with rotation of drug groups; clean pasture and pens.', cat: ['Veterinary Drugs'] },
    { n: 'African swine fever (ASF)', kind: 'Animal', crops: 'Pigs', signs: 'High fever, red/purple ears and belly, off feed, sudden deaths.', act: 'NO treatment or vaccine. Isolate, stop all movement and sales, report immediately to the district veterinary office; strict biosecurity.', cat: [] }
  ];

  /* ---------------- chemical safe-use rules ---------------- */
  const SAFE = [
    ['Read the label every time', 'Check the crop, pest, dose, number of sprays and the days to wait before harvest (“pre-harvest interval”). Never use a product on a crop it is not registered for.'],
    ['Protect yourself', 'Wear gloves, a mask or respirator, goggles, long sleeves/coverall and boots when mixing and spraying. Do not eat, drink or smoke while spraying.'],
    ['Spray the right way', 'Spray early morning or late afternoon, not in the wind or before rain. Use a calibrated sprayer in good condition (no leaks).'],
    ['Keep the waiting period', 'Wait the full pre-harvest interval before harvesting. Do not harvest vegetables or fruit early after spraying.'],
    ['Do not mix products without advice', 'Some products are not compatible. Rotate chemical groups to slow resistance.'],
    ['Keep away from water, bees and animals', 'Do not wash equipment in streams or ponds. Avoid spraying flowering crops when bees are active. Keep livestock and children out of the field after spraying.'],
    ['Store safely', 'Original containers with labels only, in a locked, dry, cool place, away from food, feed and children. Never put chemicals in drink bottles.'],
    ['Dispose of containers properly', 'Triple-rinse empty containers into the sprayer, puncture them, and return them to the shop for collection if available. Never reuse them for water or food.'],
    ['If someone is poisoned', 'Remove them from the area, take off contaminated clothing, wash skin with soap and water, rinse eyes with clean water for 15 minutes. Go to the nearest health facility at once and take the label/container. Do not induce vomiting unless the label says so.'],
    ['Buy only registered and genuine products', 'Check that products carry a registration number, an intact seal, a batch number and a valid expiry date. Report fake or expired products to the authorities.'],
    ['Shop owner duties', 'Sell only registered products, keep your licence on display, never sell expired stock, never decant or repack agrochemicals into unmarked containers, and explain the dose and safety to every buyer.']
  ];

  /* ---------------- planting calendar ----------------
   * plant months (1=Jan) for each region, "dur" = months to harvest.
   * bi = bimodal rainfall (central, east, south-west); no = northern / West Nile (main season Apr–Oct).
   */
  const CAL = [
    { n: 'Maize', dur: 4, bi: [3, 4, 8, 9], no: [4, 5, 8] },
    { n: 'Beans', dur: 3, bi: [3, 4, 8, 9], no: [4, 5, 8, 9] },
    { n: 'Soybean', dur: 4, bi: [3, 4, 8, 9], no: [4, 5, 8] },
    { n: 'Groundnuts', dur: 4, bi: [3, 4, 8, 9], no: [4, 5, 8] },
    { n: 'Sorghum', dur: 4, bi: [3, 4, 8], no: [4, 5, 6] },
    { n: 'Simsim (sesame)', dur: 4, bi: [3, 4], no: [4, 5, 8] },
    { n: 'Sunflower', dur: 4, bi: [3, 4, 8, 9], no: [4, 5, 8] },
    { n: 'Cassava', dur: 10, bi: [3, 4, 5, 9, 10], no: [3, 4, 5] },
    { n: 'Sweet potato', dur: 4, bi: [3, 4, 5, 8, 9, 10], no: [4, 5, 8] },
    { n: 'Irish potato (highlands)', dur: 4, bi: [2, 3, 8, 9], no: [] },
    { n: 'Banana / coffee (planting)', dur: 12, bi: [3, 4, 5, 9, 10], no: [4, 5] },
    { n: 'Tomato / cabbage (rain-fed)', dur: 3, bi: [2, 3, 8, 9], no: [4, 5] },
    { n: 'Dry-season vegetables (irrigated)', dur: 3, bi: [12, 1, 6, 7], no: [11, 12, 1, 2] }
  ];

  const MONTH_TIPS = {
    bi: [
      'Dry season. Plan the season: soil tests, order seed and fertilizer early, repair sprayers. Sell irrigation kits and dry-season vegetable seed.',
      'Land preparation. Open pre-orders for seed and fertilizer. Hold a soil-testing day and a planting-season training.',
      'First rains: planting begins. Stock up on certified seed, DAP/NPK and herbicides. Advise early planting and fall armyworm scouting.',
      'Planting and first weeding. Fertilizer top-dressing starts at 4–6 weeks. Watch for armyworm and bean problems.',
      'Weeding and top-dressing. Spray only when needed; remind farmers of safe-use rules. Check banana and coffee pit-planting demand.',
      'Early harvest (beans). Promote tarpaulins, hermetic bags and moisture meters. Start collecting produce offers from farmers.',
      'Maize harvest and drying. Sell storage products. Market linkage: aggregate grain, update the price board.',
      'Prepare for the second season: pre-orders for seed and fertilizer, soil tests and farm plans.',
      'Second-season planting. Seed, fertilizer, herbicides and fall armyworm advice again.',
      'Second-season weeding and top-dressing. Scout for pests; cassava/sweet-potato planting in some areas.',
      'Late-season care and early harvest. Promote storage products; plan aggregation of beans and maize.',
      'Harvest, drying, marketing. Festive demand for poultry and feed. Review the year, collect credit and plan next season.'
    ],
    no: [
      'Dry season. Storage and marketing of last harvest. Plan fields, order seed and fertilizer early; bush fire caution.',
      'Land preparation. Repair tools and sprayers, open pre-orders for seed and fertilizer, hold soil-test days.',
      'First rains arrive (late March). Early land preparation and planting of cassava. Stock seed and herbicides.',
      'Main planting begins: maize, sorghum, simsim, groundnuts, sunflower. Advise correct spacing, certified seed, early planting.',
      'Planting continues; first weeding. Fertilizer for maize; fall armyworm scouting starts.',
      'Weeding and top-dressing. Striga control; spray only when needed.',
      'Crop care and pest scouting. Livestock: ticks and worms in the wet season.',
      'Second-season planting of short crops (beans, simsim, maize). Check seed and bean demand.',
      'Early harvest. Prepare tarpaulins, hermetic bags and grain dust; start buying/aggregating produce.',
      'Main harvest and drying. Peak demand for tarpaulins, hermetic bags and moisture meters. Update the price board.',
      'Threshing, shelling, storage and sales. Link farmers to buyers; collect input credit.',
      'Marketing and storage. Review the year, collect credit, plan next season’s input pre-orders.'
    ]
  };

  const DOC_IDEAS = ['Trade licence (local government)', 'Agro-input dealer registration / certificate', 'Veterinary drugs dealer licence',
    'Business registration', 'Tax registration (TIN) and returns', 'Premises / health permit', 'Fire safety / extinguisher service',
    'Staff training certificates (safe use of agro-chemicals)', 'Insurance (shop & stock)', 'Supplier agreements'];

  const MSG_TEMPLATES = [
    ['Planting reminder', 'Hello {name}, planting time is near! Visit {shop} for certified seed, fertilizer and free planting advice. Order early to be sure of stock.'],
    ['New stock arrived', 'Hello {name}, new stock has arrived at {shop}: seed, fertilizer and crop protection. Come early. Call us for prices.'],
    ['Pest alert', 'Hello {name}, pests such as fall armyworm are being seen in the area. Please check your crop this week. {shop} can advise and visit your farm.'],
    ['Training invitation', 'Hello {name}, you are invited to a free farmer training/field day at {shop}. Please come with your questions. Date: ____ Place: ____'],
    ['Vaccination reminder', 'Hello {name}, it is time to vaccinate and deworm your animals. {shop} has vaccines and can advise. Keep vaccines cold.'],
    ['Harvest & market', 'Hello {name}, harvest time! Dry your produce well, store in hermetic bags and tell {shop} how much you will sell. We link farmers to buyers.'],
    ['Credit reminder', 'Hello {name}, this is a friendly reminder of your balance at {shop}. Please pay when you can. Thank you for being our customer.'],
    ['Price update', 'Hello {name}, market prices this week from {shop}: ____. Call us before selling your produce.']
  ];

  /* ---------------- shop service cards ---------------- */
  const SERVICES = [
    { k: 'visit', ic: '🧑‍🌾', t: 'Farm visits & advice', d: 'Visit farms, diagnose crop and animal problems and give a written advice slip with the right products and doses.' },
    { k: 'soil', ic: '🧪', t: 'Soil testing & fertilizer plans', d: 'Test soil pH and nutrients with a rapid kit and recommend the right fertilizer and lime.' },
    { k: 'vet', ic: '🐔', t: 'Livestock & poultry health', d: 'Vaccination and deworming schedules, tick control and referral of sick animals to the veterinarian.' },
    { k: 'train', ic: '🎓', t: 'Training, demos & field days', d: 'Demonstration plots, product demos with suppliers and farmer group trainings.' },
    { k: 'guide', ic: '📚', t: 'Crop & livestock guide', d: 'Offline crop guide, planting calendar, problem finder and safe chemical-use rules.' },
    { k: 'msg', ic: '📣', t: 'Season reminders', d: 'Send planting, spraying, vaccination and price messages to farmers by crop, group or village on WhatsApp or SMS.' },
    { k: 'grp', ic: '👥', t: 'Farmer groups & bulk buying', d: 'Serve groups and cooperatives: bulk input orders, group credit, trainings and collective marketing.' },
    { k: 'fee', ic: '🧰', t: 'Field services & fees', d: 'Spraying, shelling, seed treatment, delivery. Charge a fee on the Sell page under “Services”.' },
    { k: 'credit', ic: '🔁', t: 'Input credit & buy-back', d: 'Give inputs on credit and get repaid in produce at harvest. The shop sells the produce to buyers.' },
    { k: 'market', ic: '🤝', t: 'Market linkages', d: 'Match farmers’ produce offers with buyers’ requests, share market prices and arrange collection and delivery.' },
    { k: 'partner', ic: '🏛️', t: 'Partners & referrals', d: 'Link farmers to the district production office, veterinarian, research stations, SACCOs/banks and insurers.' },
    { k: 'store', ic: '🏚️', t: 'Storage & post-harvest support', d: 'Hermetic bags, tarpaulins, moisture meters and storage advice to cut post-harvest losses.' }
  ];

  window.AGRO_SEED = { CATS, UNITS, EXPENSES, PRODUCE, P, CROPS, LIVESTOCK, POULTRY_SCHED, PROBLEMS, SAFE, CAL, MONTH_TIPS, DOC_IDEAS, MSG_TEMPLATES, SERVICES };
})();
