async function importImage(imagePath) {
  return await import(/* @vite-ignore */ imagePath).then(
    (image) => image.default
  );
}

const CTtest = [
  {
    id: 1,
    description: "Test 1",
    images: [
      await importImage("./testsImg/ConceptualThinking//1_1.jpg"),
      await importImage("./testsImg/ConceptualThinking//1_1.jpg"),
      await importImage("./testsImg/ConceptualThinking//1_1.jpg"),
      await importImage("./testsImg/ConceptualThinking//1_2.jpg"),
    ],
    answer: "4",
  },
  {
    id: 2,
    description: "Test 1",
    images: [
      await importImage("./testsImg/ConceptualThinking//2_1.jpg"),
      await importImage("./testsImg/ConceptualThinking//2_1.jpg"),
      await importImage("./testsImg/ConceptualThinking//2_2.jpg"),
      await importImage("./testsImg/ConceptualThinking//2_1.jpg"),
    ],
    answer: "3",
  },
  {
    id: 3,
    description: "Test 1",
    images: [
      await importImage("./testsImg/ConceptualThinking//3_4.jpg"),
      await importImage("./testsImg/ConceptualThinking//3_1.jpg"),
      await importImage("./testsImg/ConceptualThinking//3_2.jpg"),
      await importImage("./testsImg/ConceptualThinking//3_3.jpg"),
    ],
    answer: "2",
  },
  {
    id: 4,
    description: "Test 1",
    images: [
      await importImage("./testsImg/ConceptualThinking//4_4.jpg"),
      await importImage("./testsImg/ConceptualThinking//4_1.jpg"),
      await importImage("./testsImg/ConceptualThinking//4_2.jpg"),
      await importImage("./testsImg/ConceptualThinking//4_3.jpg"),
    ],
    answer: "3",
  },
  {
    id: 5,
    description: "Test 1",
    images: [
      await importImage("./testsImg/ConceptualThinking//5_4.jpg"),
      await importImage("./testsImg/ConceptualThinking//5_1.jpg"),
      await importImage("./testsImg/ConceptualThinking//5_2.jpg"),
      await importImage("./testsImg/ConceptualThinking//5_3.jpg"),
    ],
    answer: "4",
  },
  {
    id: 6,
    description: "Test 1",
    images: [
      await importImage("./testsImg/ConceptualThinking//6_4.jpg"),
      await importImage("./testsImg/ConceptualThinking//6_1.jpg"),
      await importImage("./testsImg/ConceptualThinking//6_2.jpg"),
      await importImage("./testsImg/ConceptualThinking//6_3.jpg"),
    ],
    answer: "4",
  },
  {
    id: 7,
    description: "Test 1",
    images: [
      await importImage("./testsImg/ConceptualThinking//7_4.jpg"),
      await importImage("./testsImg/ConceptualThinking//7_1.jpg"),
      await importImage("./testsImg/ConceptualThinking//7_2.jpg"),
      await importImage("./testsImg/ConceptualThinking//7_3.jpg"),
    ],
    answer: "2",
  },
  {
    id: 8,
    description: "Test 1",
    images: [
      await importImage("./testsImg/ConceptualThinking//8_4.jpg"),
      await importImage("./testsImg/ConceptualThinking//8_1.jpg"),
      await importImage("./testsImg/ConceptualThinking//8_2.jpg"),
      await importImage("./testsImg/ConceptualThinking//8_3.jpg"),
    ],
    answer: "1",
  },
  {
    id: 9,
    description: "Test 1",
    images: [
      await importImage("./testsImg/ConceptualThinking//9_4.jpg"),
      await importImage("./testsImg/ConceptualThinking//9_1.jpg"),
      await importImage("./testsImg/ConceptualThinking//9_2.jpg"),
      await importImage("./testsImg/ConceptualThinking//9_3.jpg"),
    ],
    answer: "1",
  },
  {
    id: 10,
    description: "Test 1",
    images: [
      await importImage("./testsImg/ConceptualThinking//10_4.jpg"),
      await importImage("./testsImg/ConceptualThinking//10_1.jpg"),
      await importImage("./testsImg/ConceptualThinking//10_2.jpg"),
      await importImage("./testsImg/ConceptualThinking//10_3.jpg"),
    ],
    answer: "3",
  },
  {
    id: 11,
    description: "Test 1",
    images: [
      await importImage("./testsImg/ConceptualThinking//11_4.jpg"),
      await importImage("./testsImg/ConceptualThinking//11_1.jpg"),
      await importImage("./testsImg/ConceptualThinking//11_2.jpg"),
      await importImage("./testsImg/ConceptualThinking//11_3.jpg"),
    ],
    answer: "3",
  },
  {
    id: 12,
    description: "Test 1",
    images: [
      await importImage("./testsImg/ConceptualThinking//12_4.jpg"),
      await importImage("./testsImg/ConceptualThinking//12_1.jpg"),
      await importImage("./testsImg/ConceptualThinking//12_2.jpg"),
      await importImage("./testsImg/ConceptualThinking//12_3.jpg"),
    ],
    answer: "2",
  },
  {
    id: 13,
    description: "Test 1",
    images: [
      await importImage("./testsImg/ConceptualThinking//13_4.jpg"),
      await importImage("./testsImg/ConceptualThinking//13_1.jpg"),
      await importImage("./testsImg/ConceptualThinking//13_2.jpg"),
      await importImage("./testsImg/ConceptualThinking//13_3.jpg"),
    ],
    answer: "1",
  },
  {
    id: 14,
    description: "Test 1",
    images: [
      await importImage("./testsImg/ConceptualThinking//14_4.jpg"),
      await importImage("./testsImg/ConceptualThinking//14_1.jpg"),
      await importImage("./testsImg/ConceptualThinking//14_2.jpg"),
      await importImage("./testsImg/ConceptualThinking//14_3.jpg"),
    ],
    answer: "2",
  },
  {
    id: 15,
    description: "Test 1",
    images: [
      await importImage("./testsImg/ConceptualThinking//15_4.jpg"),
      await importImage("./testsImg/ConceptualThinking//15_1.jpg"),
      await importImage("./testsImg/ConceptualThinking//15_2.jpg"),
      await importImage("./testsImg/ConceptualThinking//15_3.jpg"),
      await importImage("./testsImg/ConceptualThinking//15_5.jpg"),
    ],
    answer: "5",
  },
  {
    id: 16,
    description: "Test 1",
    images: [
      await importImage("./testsImg/ConceptualThinking//16_4.jpg"),
      await importImage("./testsImg/ConceptualThinking//16_1.jpg"),
      await importImage("./testsImg/ConceptualThinking//16_2.jpg"),
      await importImage("./testsImg/ConceptualThinking//16_3.jpg"),
      await importImage("./testsImg/ConceptualThinking//16_5.jpg"),
    ],
    answer: "2",
  },
  {
    id: 17,
    description: "Test 1",
    images: [
      await importImage("./testsImg/ConceptualThinking//17_4.jpg"),
      await importImage("./testsImg/ConceptualThinking//17_1.jpg"),
      await importImage("./testsImg/ConceptualThinking//17_2.jpg"),
      await importImage("./testsImg/ConceptualThinking//17_3.jpg"),
      await importImage("./testsImg/ConceptualThinking//17_5.jpg"),
    ],
    answer: "4",
  },
  {
    id: 18,
    description: "Test 1",
    images: [
      await importImage("./testsImg/ConceptualThinking//18_4.jpg"),
      await importImage("./testsImg/ConceptualThinking//18_1.jpg"),
      await importImage("./testsImg/ConceptualThinking//18_2.jpg"),
      await importImage("./testsImg/ConceptualThinking//18_3.jpg"),
      await importImage("./testsImg/ConceptualThinking//18_5.jpg"),
    ],
    answer: "5",
  },
  {
    id: 19,
    description: "Test 1",
    images: [
      await importImage("./testsImg/ConceptualThinking//19_4.jpg"),
      await importImage("./testsImg/ConceptualThinking//19_1.jpg"),
      await importImage("./testsImg/ConceptualThinking//19_2.jpg"),
      await importImage("./testsImg/ConceptualThinking//19_3.jpg"),
      await importImage("./testsImg/ConceptualThinking//19_5.jpg"),
    ],
    answer: "2",
  },
  {
    id: 20,
    description: "Test 1",
    images: [
      await importImage("./testsImg/ConceptualThinking//20_4.jpg"),
      await importImage("./testsImg/ConceptualThinking//20_1.jpg"),
      await importImage("./testsImg/ConceptualThinking//20_2.jpg"),
      await importImage("./testsImg/ConceptualThinking//20_3.jpg"),
      await importImage("./testsImg/ConceptualThinking//20_5.jpg"),
    ],
    answer: "1",
  },
  {
    id: 21,
    description: "Test 1",
    images: [
      await importImage("./testsImg/ConceptualThinking//21_4.jpg"),
      await importImage("./testsImg/ConceptualThinking//21_1.jpg"),
      await importImage("./testsImg/ConceptualThinking//21_2.jpg"),
      await importImage("./testsImg/ConceptualThinking//21_3.jpg"),
      await importImage("./testsImg/ConceptualThinking//21_5.jpg"),
    ],
    answer: "2",
  },
  {
    id: 22,
    description: "Test 1",
    images: [
      await importImage("./testsImg/ConceptualThinking//22_4.jpg"),
      await importImage("./testsImg/ConceptualThinking//22_1.jpg"),
      await importImage("./testsImg/ConceptualThinking//22_2.jpg"),
      await importImage("./testsImg/ConceptualThinking//22_3.jpg"),
      await importImage("./testsImg/ConceptualThinking//22_5.jpg"),
    ],
    answer: "3",
  },
  {
    id: 23,
    description: "Test 1",
    images: [
      await importImage("./testsImg/ConceptualThinking//23_4.jpg"),
      await importImage("./testsImg/ConceptualThinking//23_1.jpg"),
      await importImage("./testsImg/ConceptualThinking//23_2.jpg"),
      await importImage("./testsImg/ConceptualThinking//23_3.jpg"),
      await importImage("./testsImg/ConceptualThinking//23_5.jpg"),
    ],
    answer: "4",
  },
  {
    id: 24,
    description: "Test 1",
    images: [
      await importImage("./testsImg/ConceptualThinking//24_4.jpg"),
      await importImage("./testsImg/ConceptualThinking//24_1.jpg"),
      await importImage("./testsImg/ConceptualThinking//24_2.jpg"),
      await importImage("./testsImg/ConceptualThinking//24_3.jpg"),
      await importImage("./testsImg/ConceptualThinking//24_5.jpg"),
    ],
    answer: "1",
  },
  {
    id: 25,
    description: "Test 1",
    images: [
      await importImage("./testsImg/ConceptualThinking//25_4.jpg"),
      await importImage("./testsImg/ConceptualThinking//25_1.jpg"),
      await importImage("./testsImg/ConceptualThinking//25_2.jpg"),
      await importImage("./testsImg/ConceptualThinking//25_3.jpg"),
      await importImage("./testsImg/ConceptualThinking//25_5.jpg"),
    ],
    answer: "2",
  },
  {
    id: 26,
    description: "Test 1",
    images: [
      await importImage("./testsImg/ConceptualThinking//26_4.jpg"),
      await importImage("./testsImg/ConceptualThinking//26_1.jpg"),
      await importImage("./testsImg/ConceptualThinking//26_2.jpg"),
      await importImage("./testsImg/ConceptualThinking//26_3.jpg"),
      await importImage("./testsImg/ConceptualThinking//26_5.jpg"),
    ],
    answer: "4",
  },
  {
    id: 27,
    description: "Test 1",
    images: [
      await importImage("./testsImg/ConceptualThinking//27_4.jpg"),
      await importImage("./testsImg/ConceptualThinking//27_1.jpg"),
      await importImage("./testsImg/ConceptualThinking//27_2.jpg"),
      await importImage("./testsImg/ConceptualThinking//27_3.jpg"),
      await importImage("./testsImg/ConceptualThinking//27_5.jpg"),
    ],
    answer: "4",
  },
  {
    id: 28,
    description: "Test 1",
    images: [
      await importImage("./testsImg/ConceptualThinking//28_4.jpg"),
      await importImage("./testsImg/ConceptualThinking//28_1.jpg"),
      await importImage("./testsImg/ConceptualThinking//28_2.jpg"),
      await importImage("./testsImg/ConceptualThinking//28_3.jpg"),
      await importImage("./testsImg/ConceptualThinking//28_5.jpg"),
    ],
    answer: "1",
  },
];

export default CTtest;
