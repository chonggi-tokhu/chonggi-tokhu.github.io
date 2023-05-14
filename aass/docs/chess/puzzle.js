class mypuzzlesdata {
  constructor(type) {
    this.type = type;
    this.puzzlesintypes = {
      queensacrifice: [
        {
          position: "r6k/ppp1n2p/3pB1p1/4pP2/8/3PBQ2/PPP2KP1/7N w - - 0 18",
          oppmove: ["exf4"],
          move: ["Qf4", "Bd4#"],
          colour: "w",
          level: 2,
        },
        {
          position: "r4k1r/ppp2ppp/8/q7/8/8/PPP1QPPP/4R1K1 w - - 0 1",
          oppmove: ["Kg8", "Rxe8"],
          move: ["Qe7+", "Qe8+", "Rxe8#"],
          colour: "w",
          level: 1,
        },
      ],
      opening_ruylopez: [{}],
    };
  }
  typepuzzle1() {
    var randompuzzle1 = Math.floor(
      Math.random() * this.puzzlesintypes[this.type].length
    );
    return this.puzzlesintypes[this.type][randompuzzle1];
  }
}
