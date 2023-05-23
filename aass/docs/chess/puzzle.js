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
          source: `from <a href="https://lichess.org/@/baekhokp9027">colourgrey</a>'s game`,
        },
        {
          position: "r4k1r/ppp2ppp/8/q7/8/8/PPP1QPPP/4R1K1 w - - 0 1",
          oppmove: ["Kg8", "Rxe8"],
          move: ["Qe7+", "Qe8+", "Rxe8#"],
          colour: "w",
          level: 1,
          source: `creation by <a href="https://www.chess.com/member/colourgrey">colourgrey</a>`,
        },
      ],
      opening_ruylopez: [{}],
      opening_scotchgambit: [{}],
      greek_gift: [
        {
          position:
            "r1bq1rk1/pp3ppp/2nbp3/2pp3n/3P1B2/1PPBPN2/P2N1PPP/R2QK2R w KQ - 3 9",
          oppmove: ["Kxh7", "Kg8", "g6"],
          move: ["Bxh7+", "Ng5+", "Qxh5", "Qh7#"],
          level: 3,
          source: `creation by <a href="https://www.chess.com/member/colourgrey">colourgrey</a>`,
        },
      ],
      allthemes: [
        {
          position: "r4rk1/1p4pp/p2p4/1b1P2q1/3NP3/1P1nR2Q/7P/7K b - - 6 28",
          oppmove: [],
          move: ["Nf2#"],
          level: 4,
          source: `from <a href="https://www.chess.com/member/colourgrey">colourgrey</a>'s <a href="https://www.chess.com/game/live/70188787003">game</a>`,
        },
        {
          position:
            "r1bq1rk1/pp3ppp/2nbp3/2pp3n/3P1B2/1PPBPN2/P2N1PPP/R2QK2R w KQ - 3 9",
          oppmove: ["Kxh7", "Kg8", "g6"],
          move: ["Bxh7+", "Ng5+", "Qxh5", "Qh7#"],
          level: 3,
          source: `creation by <a href="https://www.chess.com/member/colourgrey">colourgrey</a>`,
        },
        {
          position: "r6k/ppp1n2p/3pB1p1/4pP2/8/3PBQ2/PPP2KP1/7N w - - 0 18",
          oppmove: ["exf4"],
          move: ["Qf4", "Bd4#"],
          colour: "w",
          level: 2,
          source: `from <a href="https://lichess.org/@/baekhokp9027">colourgrey</a>'s game`,
        },
        {
          position: "r4k1r/ppp2ppp/8/q7/8/8/PPP1QPPP/4R1K1 w - - 0 1",
          oppmove: ["Kg8", "Rxe8"],
          move: ["Qe7+", "Qe8+", "Rxe8#"],
          colour: "w",
          level: 1,
          source: `creation by <a href="https://www.chess.com/member/colourgrey">colourgrey</a>`,
        },
        {
          position:
            "r3kb1r/ppp2ppp/8/4p1N1/3q2b1/4Q3/PPPP1PPP/R1B1K2R b KQkq - 3 10",
          oppmove: ["dxe3", "Nxf7"],
          move: ["Qxe3", "O-O-O", "Rd1#"],
          colour: "b",
          level: 5,
          source: `from <a href="https://www.chess.com/member/colourgrey">colourgrey</a>'s <a href="https://www.chess.com/a/2cSyNsPfc2Likn?tab=review">game</a>`,
        },
      ],
      rookbishop: [
        {
          position:
            "r3kb1r/ppp2ppp/8/4p1N1/3q2b1/4Q3/PPPP1PPP/R1B1K2R b KQkq - 3 10",
          oppmove: ["dxe3", "Nxf7"],
          move: ["Qxe3", "O-O-O", "Rd1#"],
          colour: "b",
          level: 5,
          source: `from <a href="https://www.chess.com/member/colourgrey">colourgrey</a>'s <a href="https://www.chess.com/a/2cSyNsPfc2Likn?tab=review">game</a>`,
        },
      ],
    };
  }
  typepuzzle1() {
    var randompuzzle1 = Math.floor(
      Math.random() * this.puzzlesintypes[this.type].length
    );
    return this.puzzlesintypes[this.type][randompuzzle1];
  }
}
