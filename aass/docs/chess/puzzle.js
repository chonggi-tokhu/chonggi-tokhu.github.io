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
          move: ["Qxe3+", "O-O-O", "Rd1#"],
          colour: "b",
          level: 5,
          source: `from <a href="https://www.chess.com/member/colourgrey">colourgrey</a>'s <a href="https://www.chess.com/a/2cSyNsPfc2Likn?tab=review">game</a>`,
        },
        {
          position:
            "2kr3r/p4ppp/bp2p3/2bp4/8/1PQ5/P3NPPP/RN3K1R b - - 6 19",
          oppmove: ["Qg3", "b4", "Ke1"],
          move: ["d4", "d3", "dxe2+","Rd1#"],
          colour: "b",
          level: 6,
          source: `from <a href="https://www.chess.com/member/colourgrey">colourgrey</a>'s <a href="https://www.chess.com/a/SNXjAFTL2Likn?tab=review">game</a>`,
        },
        {
          position:"3b4/2p1pp2/5kp1/1B4p1/3P2P1/p5Bp/3K4/2R5 w - - 0 7",
          oppmove: ["Ke6","Kd5","a2","a1=Q"],
          move: ["Be5+","Rc6+","Kd3","Ra6","Bc4#"],
          colour: "w",
          level:4,
          source:`creation by <a href="https://www.chess.com/member/KoreaWWW2010">colourgrey</a>`,
        },
        {
          position:"3b4/2p1pp2/5kp1/1B4p1/3P2P1/p5Bp/3K4/2R5 w - - 0 7",
          oppmove: ["Ke6","Kd5","a2","a1=Q"],
          move: ["Be5+","Rc6+","Kd3","Ra6","Bc4#"],
          colour: "w",
          level:4,
          source:`creation by <a href="https://www.chess.com/member/KoreaWWW2010">colourgrey</a>`,
        },
        /*[Event "?"]
[Site "?"]
[Date "????.??.??"]
[Round "?"]
[White "?"]
[Black "?"]
[Result "1-0"]
[SetUp "1"]
[FEN "8/3P3k/n2K3p/2p3n1/1b4N1/2p1p1P1/8/3B4 w - - 0 1"]

1. Nf6+ Kg7 2. Nh5+ Kg6 3. Bc2+ Kxh5 4. d8=Q Nf7+ 5. Ke6 Nxd8+ 6. Kf5 e2 7. Be4
e1=N 8. Bd5 c2 9. Bc4 c1=N 10. Bb5 Nc7 11. Ba4 Ne2 12. Bd1 Nf3 13. Bxe2 Nd5 14.
Bxf3# 1-0*/
        {
          position:"8/3P3k/n2K3p/2p3n1/1b4N1/2p1p1P1/8/3B4 w - - 0 1",
            oppmove:["Kg7","Kg6","Kxh5","Nf7+","Nxd8+","e2","e1=N","c2","c1=N","Nc7","Ne2","Nf3","Nd5"],
            move:["Nf6+","Nh5+","Bc2+","d8=Q","Ke6","Kf5","Be4","Bd5","Bc4","Bb5","Ba4","Bd1","Bxe2","Bxf3#"],
            colour:"w",
            level:100,
            source:`알려주면 풀기 쉬우니까 안알려줌`,
        }
      ],
      rookbishop: [
        {
          position:
            "r3kb1r/ppp2ppp/8/4p1N1/3q2b1/4Q3/PPPP1PPP/R1B1K2R b KQkq - 3 10",
          oppmove: ["dxe3", "Nxf7"],
          move: ["Qxe3+", "O-O-O", "Rd1#"],
          colour: "b",
          level: 5,
          source: `from <a href="https://www.chess.com/member/colourgrey">colourgrey</a>'s <a href="https://www.chess.com/a/2cSyNsPfc2Likn?tab=review">game</a>`,
        },
      ],
      backrank: [
        {
          position:
            "2kr3r/p4ppp/bp2p3/2bp4/8/1PQ5/P3NPPP/RN3K1R b - - 6 19",
          oppmove: ["Qg3", "b4", "Ke1"],
          move: ["d4", "d3", "dxe2+","Rd1#"],
          colour: "b",
          level: 6,
          source: `from <a href="https://www.chess.com/member/colourgrey">colourgrey</a>'s <a href="https://www.chess.com/a/SNXjAFTL2Likn?tab=review">game</a>`,
        },
      ],
      
    };
  }
  typepuzzle1(type111sd) {
    var randompuzzle1 = Math.floor(
      Math.random() * this.puzzlesintypes[type111sd].length
    );
    return this.puzzlesintypes[type111sd][randompuzzle1];
  }
  getpuzzle(idx){
    var puzzletoreturn = this.puzzlesintypes['allthemes'][idx];
    if (!puzzletoreturn){
      puzzletoreturn=this.typepuzzle1('allthemes');
    }
    return puzzletoreturn;
  }
}
