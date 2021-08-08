const tierList = [
  { date: 1, s: 1, e: 30 },
  { date: 2, s: 31, e: 60 },
  { date: 3, s: 61, e: 80 },
  { date: 4, s: 91, e: 120 },
  { date: 5, s: 121, e: 150 },
  { date: 6, s: 151, e: 180 },
  { date: 7, s: 181, e: 210 },
  { date: 8, s: 211, e: 240 },
  { date: 9, s: 241, e: 270 },
  { date: 10, s: 271, e: 300 },
  { date: 11, s: 301, e: 330 },
  { date: 12, s: 331, e: 360 },
  { date: 13, s: 361, e: 390 },
  { date: 14, s: 391, e: 420 },
  { date: 15, s: 421, e: 450 },
  { date: 16, s: 451, e: 480 },
  { date: 17, s: 481, e: 510 },
  { date: 18, s: 511, e: 540 },
  { date: 19, s: 541, e: 570 },
  { date: 20, s: 571, e: 600 },
  { date: 21, s: 601, e: 630 },
  { date: 22, s: 631, e: 660 },
  { date: 23, s: 661, e: 690 },
  { date: 24, s: 691, e: 720 },
  { date: 25, s: 721, e: 750 },
  { date: 26, s: 751, e: 780 },
  { date: 27, s: 781, e: 810 },
  { date: 28, s: 811, e: 840 },
  { date: 29, s: 841, e: 870 },
  { date: 30, s: 871, e: 898 },
  { date: 31, s: 871, e: 898 },
];

export const gachaList = () => {
  const d = new Date();
  const date = d.getDate();
  const gachaStore = [];

  for (let i = 0; i < tierList.length; i++) {
    if (date === tierList[i].date) {
      for (let j = tierList[i].s; j <= tierList[i].e; j++) {
        gachaStore.push(j);
      }
    }
  }

  return gachaStore;
};