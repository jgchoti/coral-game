
const coralReefs = [
    { name: "Reef 1", coords: [10.1, 99.8], health: 0.9 }, // Excellent Health
    { name: "Reef 2", coords: [10.05, 99.85], health: 0.5 }, // Moderate Health
    { name: "Reef 3", coords: [10.18, 99.74], health: 0.3 }, // Poor Health
    { name: "Reef 4", coords: [10.2, 99.8], health: 0.1 }, // Very Poor Health
    { name: "Reef 5", coords: [10.12, 99.85], health: 0.7 }, // Good Health
    { name: "Reef 6", coords: [10.08, 99.88], health: 0.4 }, // Moderate Health
    { name: "Reef 7", coords: [10.18, 99.83], health: 0.2 }, // Poor Health
    { name: "Reef 8", coords: [10.22, 99.75], health: 0.8 }, // Excellent Health
    { name: "Reef 9", coords: [10.14, 99.76], health: 0.6 }, // Good Health
    { name: "Reef 10", coords: [10.16, 99.79], health: 0.15 }, // Very Poor Health
    { name: "Great Barrier Reef", coords: [-18.2871, 147.6992], health: 0.9 }, // Excellent Health
    { name: "Belize Barrier Reef", coords: [16.8180, -88.1999], health: 0.85 }, // Excellent Health
    { name: "Red Sea Coral Reef", coords: [27.9000, 34.0000], health: 0.8 }, // Excellent Health
    { name: "Tubbataha Reefs Natural Park", coords: [9.5333, 119.2000], health: 0.9 }, // Excellent Health
    { name: "Coral Sea Reef", coords: [-19.0000, 151.0000], health: 0.75 }, // Good Health
    { name: "Papua New Guinea Reef", coords: [-6.0000, 147.0000], health: 0.7 }, // Good Health
    { name: "Hawaiian Coral Reefs", coords: [20.7967, -156.3319], health: 0.9 }, // Excellent Health
    { name: "Seychelles Coral Reefs", coords: [-4.6796, 55.4915], health: 0.65 }, // Good Health
    { name: "Andaman Sea Coral Reefs", coords: [9.0000, 93.0000], health: 0.8 }, // Excellent Health
    { name: "Maldives Coral Reefs", coords: [3.2028, 73.2207], health: 0.85 }, // Excellent Health
    { name: "Koh Tao", coords: [10.1000, 99.8000], health: 0.7 }, // Good Health
    { name: "Gili Islands", coords: [-8.3600, 116.0730], health: 0.6 }, // Good Health
    { name: "Florida Keys", coords: [25.0952, -80.4502], health: 0.75 }, // Good Health
    { name: "Raja Ampat", coords: [-0.2462, 130.6821], health: 0.95 }, // Excellent Health
    { name: "Cocos (Keeling) Islands", coords: [-12.1771, 96.8306], health: 0.8 }, // Excellent Health
    { name: "John Pennekamp Coral Reef", coords: [25.1000, -80.4000], health: 0.65 }, // Good Health
    { name: "The Bahamas", coords: [25.0343, -77.3963], health: 0.7 }, // Good Health
    { name: "Cook Islands Coral Reefs", coords: [-21.2360, -159.7770], health: 0.8 }, // Excellent Health
    { name: "Pigeon Island", coords: [13.1190, -61.7460], health: 0.55 }, // Moderate Health
    { name: "Palau Coral Reefs", coords: [7.5000, 134.3000], health: 0.85 }, // Excellent Health
    { name: "Fiji Coral Reefs", coords: [-17.7500, 178.0000], health: 0.75 }, // Good Health
    { name: "Dahab, Egypt", coords: [29.4664, 34.5145], health: 0.6 }, // Good Health
    { name: "Nassau, Bahamas", coords: [25.0601, -77.3460], health: 0.65 }, // Good Health
    { name: "Coral Triangle", coords: [-4.0000, 130.0000], health: 0.8 }, // Excellent Health
    { name: "Little Cayman", coords: [19.6833, -80.0670], health: 0.9 }, // Excellent Health
    { name: "Saba Bank", coords: [17.6331, -63.2439], health: 0.7 }, // Good Health
    { name: "Cayman Islands", coords: [19.2870, -81.2547], health: 0.85 }, // Excellent Health
    { name: "Sharm El Sheikh", coords: [27.9154, 34.3259], health: 0.75 }, // Good Health
    { name: "Tuamotu Archipelago", coords: [-15.0000, -140.0000], health: 0.8 }, // Excellent Health
    { name: "Lady Elliot Island", coords: [-24.1000, 152.7000], health: 0.9 }, // Excellent Health
    { name: "Bonaire National Marine Park", coords: [12.2000, -68.2700], health: 0.85 }, // Excellent Health
    { name: "Lebanon Coral Reef", coords: [33.8750, 35.800], health: 0.4 }, // Moderate Health
    { name: "Mauritius Coral Reef", coords: [-20.348404, 57.552152], health: 0.7 }, // Good Health
    { name: "Bali Coral Reefs", coords: [-8.4095, 115.1889], health: 0.8 }, // Excellent Health
    { name: "Punta Cana Coral Reefs", coords: [18.5821, -68.3723], health: 0.6 }, // Good Health
    { name: "Similan Islands", coords: [7.2825, 97.6027], health: 0.9 }, // Excellent Health
    { name: "Seychelles Aldabra Atoll", coords: [-9.4, 46.3], health: 0.8 }, // Excellent Health
    { name: "Redang Island", coords: [5.7833, 103.0300], health: 0.7 }, // Good Health
    { name: "Tikehau Atoll", coords: [-15.2, -149.5], health: 0.85 }, // Excellent Health
    { name: "Tamarindo", coords: [10.3039, -85.8392], health: 0.6 }, // Good Health
    { name: "Lamu Island", coords: [-2.2500, 40.9000], health: 0.65 }, // Good Health
    { name: "Ngapali Beach", coords: [16.0771, 94.2683], health: 0.5 }, // Moderate Health
    { name: "Great Astrolabe Reef", coords: [-17.4333, 178.7667], health: 0.7 }, // Good Health
    { name: "Koh Phi Phi", coords: [7.7439, 98.7668], health: 0.8 }, // Excellent Health
    { name: "Pangkor Island", coords: [4.2414, 100.5564], health: 0.6 }, // Good Health
    { name: "Koh Samui", coords: [9.5128, 100.0130], health: 0.75 }, // Good Health
    { name: "Truk Lagoon", coords: [7.4000, 151.8667], health: 0.8 }, // Excellent Health
    { name: "Fernando de Noronha", coords: [-3.8511, -32.4236], health: 0.85 }, // Excellent Health
    { name: "Mergui Archipelago", coords: [12.0000, 98.0000], health: 0.65 }, // Good Health
    { name: "Catalina Island", coords: [33.3846, -118.5140], health: 0.7 }, // Good Health
    { name: "Cozumel", coords: [20.4783, -86.9511], health: 0.75 }, // Good Health
    { name: "Chumphon", coords: [10.5500, 99.400], health: 0.5 }, // Moderate Health
    { name: "Koh Rong", coords: [10.6166, 103.3704], health: 0.6 }, // Good Health
    { name: "Pigeon Island, Sri Lanka", coords: [9.7975, 80.2985], health: 0.65 }, // Good Health
    { name: "Isla de la Juventud", coords: [21.2380, -82.8030], health: 0.75 }, // Good Health
    { name: "Brisbane Coral Reefs", coords: [-27.4700, 153.0251], health: 0.65 }, // Good Health
    { name: "Cabo Pulmo", coords: [23.4463, -109.4947], health: 0.8 }, // Excellent Health
    { name: "Kinmen Islands", coords: [24.4314, 118.3385], health: 0.55 }, // Moderate Health
    { name: "Maui", coords: [20.7984, -156.3319], health: 0.75 }, // Good Health
    { name: "Myrtle Beach", coords: [33.6891, -78.8867], health: 0.4 }, // Moderate Health
    { name: "Santa Rosa", coords: [10.9400, -84.8500], health: 0.5 }, // Moderate Health
    { name: "Anilao, Batangas", coords: [13.7098, 120.9161], health: 0.65 }, // Good Health
    { name: "Zanzibar", coords: [-6.1659, 39.2022], health: 0.6 }, // Good Health
    { name: "Cenote Dos Ojos", coords: [20.5621, -87.4441], health: 0.55 }, // Moderate Health
    { name: "Tortuga Island", coords: [9.6000, -83.5000], health: 0.7 }, // Good Health
    { name: "Palinuro", coords: [40.0240, 14.8162], health: 0.5 }, // Moderate Health
    { name: "Cabo San Lucas", coords: [22.8905, -109.9129], health: 0.8 }, // Excellent Health
    { name: "Panglao Island", coords: [9.5737, 123.7696], health: 0.7 }, // Good Health
    { name: "Komodo National Park", coords: [-8.5476, 119.4321], health: 0.85 }, // Excellent Health
    { name: "Socotra", coords: [12.6378, 53.8233], health: 0.5 }, // Moderate Health
    { name: "South Padre Island", coords: [26.1114, -97.1585], health: 0.6 }, // Good Health
    { name: "Ishigaki Island", coords: [24.4530, 124.1570], health: 0.75 }, // Good Health
    { name: "Rincón", coords: [18.3733, -67.2616], health: 0.8 }, // Excellent Health
    { name: "Apo Island", coords: [9.4516, 123.2062], health: 0.85 }, // Excellent Health
    { name: "Gili Trawangan", coords: [-8.3546, 116.0660], health: 0.65 }, // Good Health
    { name: "Cayo Santa Maria", coords: [22.2650, -79.0534], health: 0.6 }, // Good Health
    { name: "Lahaina", coords: [20.8783, -156.6814], health: 0.7 }, // Good Health
    { name: "Hanauma Bay", coords: [21.2880, -157.6930], health: 0.9 }, // Excellent Health
    { name: "Fakarava Atoll", coords: [-16.0300, -145.5500], health: 0.85 }, // Excellent Health
    { name: "Tropical North Queensland", coords: [-16.0000, 145.0000], health: 0.75 }, // Good Health
    { name: "Bonaire Marine Park", coords: [12.2000, -68.2700], health: 0.7 }, // Good Health
    { name: "Raiatea", coords: [-16.7586, -151.4195], health: 0.6 }, // Good Health
    { name: "Lifou", coords: [-20.4500, 167.3000], health: 0.8 }, // Excellent Health
    { name: "Salomon Islands", coords: [-29.5000, 152.0000], health: 0.5 }, // Moderate Health
    { name: "Antigua", coords: [17.0608, -61.7964], health: 0.75 }, // Good Health
    { name: "Tristan da Cunha", coords: [-37.0308, -12.2827], health: 0.65 }, // Good Health
    { name: "Sumba Island", coords: [-9.1330, 118.6810], health: 0.6 }, // Good Health
    { name: "Tabar Island", coords: [-8.0000, 148.0000], health: 0.5 }, // Moderate Health
    { name: "Lamu Archipelago", coords: [-2.4000, 40.9000], health: 0.55 }, // Moderate Health
    { name: "Nekton Coral Reef", coords: [29.8000, -72.0000], health: 0.65 }, // Good Health
    { name: "Maldives North Atoll", coords: [5.1500, 72.6795], health: 0.8 }, // Excellent Health
    { name: "Fiji Islands", coords: [-17.9000, 178.2000], health: 0.75 }, // Good Health
    { name: "Koh Haa", coords: [7.3714, 99.1010], health: 0.9 }, // Excellent Health
    { name: "Elkhorn Coral Reef", coords: [26.1250, -78.3150], health: 0.8 }, // Excellent Health
    { name: "Shark Bay, Australia", coords: [-25.0000, 113.0000], health: 0.65 }, // Good Health
    { name: "Santa Cruz Island", coords: [24.2500, -70.9000], health: 0.6 }, // Good Health
    { name: "Santa Maria Island", coords: [22.1560, -78.4330], health: 0.55 }, // Moderate Health
    { name: "Isla del Caño", coords: [9.3142, -83.8011], health: 0.7 }, // Good Health
    { name: "Cerro Gordo", coords: [18.6512, -66.3340], health: 0.65 }, // Good Health
    { name: "Santa Teresa", coords: [9.7460, -85.1494], health: 0.6 }, // Good Health
    { name: "Panama Coral Reefs", coords: [8.9833, -79.5167], health: 0.75 }, // Good Health
    { name: "Coral Sea", coords: [-17.0000, 150.0000], health: 0.8 }, // Excellent Health
];
