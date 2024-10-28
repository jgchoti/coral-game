const smartBuoys = [
    { name: "Buoy 1", coords: [10.14, 99.71], waterTemp: 29, phLevel: 8.0, pollution: 4 },
    { name: "Buoy 2", coords: [10.02, 99.84], waterTemp: 28, phLevel: 7.9, pollution: 3 },
    { name: "Buoy 3", coords: [10.18, 99.83], waterTemp: 30, phLevel: 7.6, pollution: 9 },
    { name: "Buoy 4", coords: [10.3, 99.9], waterTemp: 27, phLevel: 8.1, pollution: 2 },
    { name: "Buoy 5", coords: [10.11, 99.96], waterTemp: 26, phLevel: 8.2, pollution: 3 },
    { name: "Buoy 6", coords: [10.3, 99.74], waterTemp: 29, phLevel: 7.8, pollution: 5 },
    { name: "Buoy 7", coords: [10.3, 99.74], waterTemp: 27, phLevel: 8.0, pollution: 4 },
    { name: "Buoy 8", coords: [-10.0, 70.0], waterTemp: 25, phLevel: 7.9, pollution: 3 },
    { name: "Buoy 9", coords: [15.0, -60.0], waterTemp: 29, phLevel: 7.6, pollution: 6 },
    { name: "Buoy 10", coords: [25.0, 35.0], waterTemp: 30, phLevel: 8.1, pollution: 2 },
    { name: "Buoy 11", coords: [-15.0, -30.0], waterTemp: 27, phLevel: 8.2, pollution: 5 },
    { name: "Buoy 12", coords: [5.0, 150.0], waterTemp: 28, phLevel: 7.5, pollution: 4 },
    { name: "Buoy 13", coords: [-30.0, 50.0], waterTemp: 26, phLevel: 8.0, pollution: 3 },
    { name: "Buoy 14", coords: [0.0, 90.0], waterTemp: 29, phLevel: 7.9, pollution: 6 },
    { name: "Buoy 15", coords: [10.0, -150.0], waterTemp: 30, phLevel: 8.1, pollution: 2 },
    { name: "Buoy 16", coords: [-20.0, 160.0], waterTemp: 27, phLevel: 7.7, pollution: 4 },
    { name: "Buoy 17", coords: [12.0, -60.0], waterTemp: 25, phLevel: 7.8, pollution: 5 },
    { name: "Buoy 18", coords: [-5.0, -90.0], waterTemp: 29, phLevel: 8.0, pollution: 3 },
    { name: "Buoy 19", coords: [15.0, -75.0], waterTemp: 30, phLevel: 7.9, pollution: 6 },
    { name: "Buoy 22", coords: [20.0, -106.0], waterTemp: 26, phLevel: 7.5, pollution: 7 },
    { name: "Buoy 24", coords: [22.0, 70.0], waterTemp: 30, phLevel: 7.8, pollution: 5 },
    { name: "Buoy 27", coords: [30.0, -150.0], waterTemp: 29, phLevel: 7.9, pollution: 5 },
    { name: "Buoy 28", coords: [-5.0, 50.0], waterTemp: 26, phLevel: 8.0, pollution: 3 },
    { name: "Buoy 29", coords: [20.0, 90.0], waterTemp: 28, phLevel: 7.7, pollution: 6 },
    { name: "Buoy 30", coords: [10.5, -95.0], waterTemp: 29, phLevel: 8.3, pollution: 4 },
    { name: "Buoy 31", coords: [-15.0, 140.0], waterTemp: 30, phLevel: 7.8, pollution: 7 },
    { name: "Buoy 32", coords: [5.0, -80.0], waterTemp: 26, phLevel: 8.2, pollution: 2 },
    { name: "Buoy 33", coords: [12.0, -50.0], waterTemp: 29, phLevel: 7.5, pollution: 5 },
    { name: "Buoy 34", coords: [18.0, -110.0], waterTemp: 28, phLevel: 7.9, pollution: 4 },
    { name: "Buoy 35", coords: [-10.0, 150.0], waterTemp: 27, phLevel: 8.0, pollution: 6 },
    { name: "Buoy 36", coords: [-20.0, -30.0], waterTemp: 30, phLevel: 7.7, pollution: 5 },
    { name: "Buoy 38", coords: [-5.0, -150.0], waterTemp: 27, phLevel: 8.2, pollution: 3 },
    { name: "Buoy 39", coords: [15.0, -70.0], waterTemp: 29, phLevel: 7.8, pollution: 8 },
    { name: "Buoy 40", coords: [-10.0, 60.0], waterTemp: 28, phLevel: 7.9, pollution: 6 },
    { name: "Buoy 41", coords: [30.0, -50.0], waterTemp: 29, phLevel: 8.0, pollution: 5 },
    { name: "Buoy 42", coords: [10.0, -30.0], waterTemp: 26, phLevel: 7.6, pollution: 7 },
    { name: "Buoy 43", coords: [-19, 120.0], waterTemp: 30, phLevel: 8.1, pollution: 4 },
    { name: "Buoy 44", coords: [5.0, 160.0], waterTemp: 27, phLevel: 7.8, pollution: 3 },
    { name: "Buoy 45", coords: [-15.0, 70.0], waterTemp: 29, phLevel: 7.7, pollution: 5 },
    { name: "Buoy 46", coords: [20.0, -88.0], waterTemp: 28, phLevel: 8.2, pollution: 4 },
    { name: "Buoy 47", coords: [-5.0, -120.0], waterTemp: 27, phLevel: 8.1, pollution: 6 },
    { name: "Buoy 48", coords: [12.0, 50.0], waterTemp: 30, phLevel: 7.9, pollution: 3 },
    { name: "Buoy 49", coords: [25.0, -95.0], waterTemp: 29, phLevel: 8.0, pollution: 5 },
    { name: "Buoy 50", coords: [-10.0, 0.0], waterTemp: 28, phLevel: 7.8, pollution: 6 },
    { name: "Buoy 52", coords: [-30.0, 110.0], waterTemp: 27, phLevel: 8.3, pollution: 4 },
    { name: "Buoy 53", coords: [18.0, -60.0], waterTemp: 28, phLevel: 7.9, pollution: 2 },
    { name: "Buoy 54", coords: [10.5, 150.0], waterTemp: 30, phLevel: 8.1, pollution: 6 },
    { name: "Buoy 55", coords: [-5.0, -10.0], waterTemp: 29, phLevel: 7.8, pollution: 4 },
    { name: "Buoy 57", coords: [5.0, 180.0], waterTemp: 30, phLevel: 7.5, pollution: 7 },
    { name: "Buoy 58", coords: [-20.0, -100.0], waterTemp: 27, phLevel: 8.1, pollution: 5 },
    { name: "Buoy 59", coords: [0.0, -120.0], waterTemp: 28, phLevel: 8.2, pollution: 3 },
    { name: "Buoy 63", coords: [22.0, -20.0], waterTemp: 30, phLevel: 8.1, pollution: 4 },
    { name: "Buoy 64", coords: [-15.0, -90.0], waterTemp: 28, phLevel: 7.6, pollution: 7 },
    { name: "Buoy 65", coords: [5.0, 50.0], waterTemp: 26, phLevel: 8.2, pollution: 3 },
    { name: "Buoy 66", coords: [20.0, -150.0], waterTemp: 29, phLevel: 8.0, pollution: 5 },
    { name: "Buoy 68", coords: [12.0, -60.0], waterTemp: 30, phLevel: 7.7, pollution: 6 },
    { name: "Buoy 69", coords: [-5.0, 140.0], waterTemp: 29, phLevel: 8.1, pollution: 3 },
    { name: "Buoy 70", coords: [15.0, -80.0], waterTemp: 28, phLevel: 8.2, pollution: 5 },
    { name: "Buoy 72", coords: [-15.0, 110.0], waterTemp: 30, phLevel: 8.0, pollution: 2 },
    { name: "Buoy 74", coords: [-5.0, -150.0], waterTemp: 28, phLevel: 8.1, pollution: 3 },
    { name: "Buoy 75", coords: [10.0, -90.0], waterTemp: 29, phLevel: 7.9, pollution: 5 },
    { name: "Buoy 76", coords: [15.0, 60.0], waterTemp: 27, phLevel: 8.2, pollution: 4 },
    { name: "Buoy 77", coords: [0.0, 120.5], waterTemp: 29, phLevel: 7.8, pollution: 6 },
    { name: "Buoy 79", coords: [5.0, -80.0], waterTemp: 29, phLevel: 7.6, pollution: 5 },
    { name: "Buoy 80", coords: [22.0, 60.0], waterTemp: 28, phLevel: 8.1, pollution: 4 },
    { name: "Buoy 81", coords: [10.0, -150.0], waterTemp: 26, phLevel: 7.9, pollution: 3 },
    { name: "Buoy 82", coords: [-15.0, 50.0], waterTemp: 30, phLevel: 8.2, pollution: 5 },
    { name: "Buoy 83", coords: [20.0, -30.0], waterTemp: 29, phLevel: 8.0, pollution: 6 },
    { name: "Buoy 85", coords: [28.0, -90.0], waterTemp: 28, phLevel: 7.5, pollution: 3 },
    { name: "Buoy 86", coords: [-10.0, 100.0], waterTemp: 30, phLevel: 8.1, pollution: 2 },
    { name: "Buoy 87", coords: [5.0, -120.0], waterTemp: 26, phLevel: 8.3, pollution: 7 },
    { name: "Buoy 89", coords: [-25.0, 80.0], waterTemp: 30, phLevel: 8.2, pollution: 4 },
    { name: "Buoy 91", coords: [10.0, 150.0], waterTemp: 30, phLevel: 8.1, pollution: 3 },
    { name: "Buoy 94", coords: [15.0, -90.0], waterTemp: 28, phLevel: 8.1, pollution: 6 },
    { name: "Buoy 95", coords: [10.0, 60.0], waterTemp: 29, phLevel: 7.7, pollution: 3 },
    { name: "Buoy 96", coords: [-20.0, 10.0], waterTemp: 30, phLevel: 8.0, pollution: 4 },
    { name: "Buoy 97", coords: [5.0, -150.0], waterTemp: 28, phLevel: 7.8, pollution: 5 },
    { name: "Buoy 99", coords: [-10.0, 90.0], waterTemp: 30, phLevel: 8.2, pollution: 6 },
    { name: "Buoy 100", coords: [10.0, -100.0], waterTemp: 27, phLevel: 7.6, pollution: 4 },
];