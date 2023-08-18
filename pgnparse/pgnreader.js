function colourgreyPGN() {}

colourgreyPGN.prototype = {
  notes: [
    { t: "!!", m: 5 },
    { t: "!", m: 4 },
    { t: "!?", m: 3 },
    { t: "?!", m: 2 },
    { t: "?", m: 1 },
    { t: "??", m: 0 },
  ],
  gameheader1(pgnstring) {
    var pgnstring1 = pgnstring;
    var pgnheader1 = {};
    var pgnstring2 = pgnstring1.split(`[`);
    for (var i02k9 = 1; i02k9 < pgnstring2.length; i02k9++) {
      var thtv1 = pgnstring2[i02k9];
      var thtv2 = {
        desc: thtv1.split(`"`)[0].replace(`]`, ``),
        v0: thtv1.split(`"`)[1],
      };
      pgnheader1[thtv2.desc] = thtv2.v0;
      if (pgnheader1 == undefined || pgnheader1 == {}) {
        continue;
      } else if (i02k9 == pgnstring2.length - 1) {
        return pgnheader1;
      }
    }
  },
  gamehistory1(pgnstring) {
    var cgf1 = pgnstring.split(`]`)[pgnstring.split(`]`).length - 1];
    console.log(cgf1);
    var kakkakmoves1 = [];
    var spacechar = " ";
    var fullstopchar = ".";
    var ojk = 0;
    var chae1;
    var cgf2 = cgf1;
    for (var ijx = 0; ijx < cgf1.length; ijx++) {
      cgf1 = cgf1.replace("0.", "");
      cgf1 = cgf1.replace("1.", "");
      cgf1 = cgf1.replace("2.", "");
      cgf1 = cgf1.replace("3.", "");
      cgf1 = cgf1.replace("4.", "");
      cgf1 = cgf1.replace("5.", "");
      cgf1 = cgf1.replace("6.", "");
      cgf1 = cgf1.replace("7.", "");
      cgf1 = cgf1.replace("8.", "");
      cgf1 = cgf1.replace("9.", "");
      cgf1 = cgf1.replace(" 0", "");
      cgf1 = cgf1.replace(" 1", "");
      cgf1 = cgf1.replace(" 2", "");
      cgf1 = cgf1.replace(" 3", "");
      cgf1 = cgf1.replace(" 4", "");
      cgf1 = cgf1.replace(" 5", "");
      cgf1 = cgf1.replace(" 6", "");
      cgf1 = cgf1.replace(" 7", "");
      cgf1 = cgf1.replace(" 8", "");
      cgf1 = cgf1.replace(" 9", "");
      cgf1 = cgf1.replace("-1", " 0-1");
      cgf1 = cgf1.replace("-0", " 1-0");
      cgf1 = cgf1.replace("  ", " ");
      console.log(cgf1);
      if (ijx == cgf1.length - 1) {
        for (var i = 0; i < cgf1.length; i++) {
          if (cgf1[i] == spacechar) {
            var avv = true;
            var sijak123 = i;
            for (var n = i + 1; n < cgf1.length; n++) {
              if (cgf1[n] == " ") {
                var kkut123 = n;

                kakkakmoves1[ojk] = cgf1.slice(i + 1, n);
                console.log(kakkakmoves1[ojk]);
                ojk = ojk + 1;
                break;
              }
            }
          }
          if (kakkakmoves1 == []) {
            continue;
          } else if (i == cgf1.length - 1) {
            return kakkakmoves1;
          }
        }
      } else {
        continue;
      }
    }
  },
  gamehistory12(pgnstring) {
    var cgf1 = pgnstring.split(`]`)[pgnstring.split(`]`).length - 1];
    console.log(cgf1);
    var kakkakmoves1 = [];
    var spacechar = " ";
    var fullstopchar = ".";
    var ojk = 0;
    var chae1;
    var cgf2 = cgf1;
    for (var ijx = 0; ijx < cgf1.length; ijx++) {
      cgf1 = cgf1.replace("0.", "");
      cgf1 = cgf1.replace("1.", "");
      cgf1 = cgf1.replace("2.", "");
      cgf1 = cgf1.replace("3.", "");
      cgf1 = cgf1.replace("4.", "");
      cgf1 = cgf1.replace("5.", "");
      cgf1 = cgf1.replace("6.", "");
      cgf1 = cgf1.replace("7.", "");
      cgf1 = cgf1.replace("8.", "");
      cgf1 = cgf1.replace("9.", "");
      cgf1 = cgf1.replace(" 0", "");
      cgf1 = cgf1.replace(" 1", "");
      cgf1 = cgf1.replace(" 2", "");
      cgf1 = cgf1.replace(" 3", "");
      cgf1 = cgf1.replace(" 4", "");
      cgf1 = cgf1.replace(" 5", "");
      cgf1 = cgf1.replace(" 6", "");
      cgf1 = cgf1.replace(" 7", "");
      cgf1 = cgf1.replace(" 8", "");
      cgf1 = cgf1.replace(" 9", "");
      cgf1 = cgf1.replace("!", "");
      cgf1 = cgf1.replace("?", "");
      cgf1 = cgf1.replace("-1", " 0-1");
      cgf1 = cgf1.replace("-0", " 1-0");
      cgf1 = cgf1.replace("  ", " ");
      console.log(cgf1);
      if (ijx == cgf1.length - 1) {
        for (var i = 0; i < cgf1.length; i++) {
          if (cgf1[i] == spacechar) {
            var avv = true;
            var sijak123 = i;
            for (var n = i + 1; n < cgf1.length; n++) {
              if (cgf1[n] == " ") {
                var kkut123 = n;

                kakkakmoves1[ojk] = cgf1.slice(i + 1, n);
                console.log(kakkakmoves1[ojk]);
                ojk = ojk + 1;
                break;
              }
            }
          }
          if (kakkakmoves1 == []) {
            continue;
          } else if (i == cgf1.length - 1) {
            return kakkakmoves1;
          }
        }
      } else {
        continue;
      }
    }
  },
  rtnotes(pgn555) {
    var pgnstring6 = this.gamehistory1(pgn555);
    console.log(pgnstring6.length);
    var valtoreturn = [];
    for (var i = 0; i < pgnstring6.length; i++) {
      for (var kkklll = 0; kkklll < this.notes.length; kkklll++) {
        if (pgnstring6[i].includes("!")) {
          if (pgnstring6[i].includes("!!")) {
            valtoreturn[i] = 5;
          } else if (pgnstring6[i].includes("?!")) {
            valtoreturn[i] = 2;
          } else if (pgnstring6[i].includes("!?")) {
            valtoreturn[i] = 3;
          } else {
            valtoreturn[i] = 4;
          }
        } else if (pgnstring6[i].includes("?")) {
          if (pgnstring6[i].includes("??")) {
            valtoreturn[i] = 0;
          } else if (pgnstring6[i].includes("?!")) {
            valtoreturn[i] = 2;
          } else if (pgnstring6[i].includes("!?")) {
            valtoreturn[i] = 3;
          } else {
            valtoreturn[i] = 1;
          }
        } else {
          valtoreturn[i] = 6;
        }
        if (i == pgnstring6.length - 1) {
          if (kkklll == this.notes.length - 1) {
            return valtoreturn;
          }
        } else {
          continue;
        }
      }
    }
  },
  rtparsedpgn(pgnstring5) {
    return {
      headerofgame: this.gameheader1(pgnstring5),
      gamehistorywr: this.gamehistory12(pgnstring5),
      notes: this.rtnotes(pgnstring5),
    };
  },
};

var parsingpgn = new colourgreyPGN();

var wallyex = `[Event "vs Computer"]
[Site "Chess.com"]
[Date "2023.07.28"]
[Round "-"]
[White "Wally-BOT"]
[Black "lemontreesong0101"]
[Result "0-1"]
[CurrentPosition "2kr3r/pp2bp2/n5pp/1N5K/Q5P1/P4q2/5P1P/R6R w - - 0 27"]
[Timezone "UTC"]
[ECO "D50"]
[ECOUrl "https://www.chess.com/openings/Queens-Gambit-Declined-Modern-Variation"]
[UTCDate "2023.07.28"]
[UTCTime "04:54:38"]
[WhiteElo "1800"]
[BlackElo "706"]
[TimeControl "1/0"]
[Termination "lemontreesong0101 won by checkmate"]
[StartTime "04:54:38"]
[EndDate "2023.07.28"]
[EndTime "05:01:11"]
[Link "https://www.chess.com/game/computer/79939671"]
[WhiteUrl "https://images.chesscomfiles.com/uploads/v1/user/66746018.e647839e.50x50o.503c26216762.png"]
[WhiteCountry "162"]
[WhiteTitle ""]
[BlackUrl "https://images.chesscomfiles.com/uploads/v1/user/298618469.75a42c5b.50x50o.7cce829f2a99.jpg"]
[BlackCountry "164"]
[BlackTitle ""]

1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 h6 5. Bxf6 Qxf6 6. cxd5 exd5 7. Nxd5 Qd8 8. e4 c6 9. Nc3 Be6 10. d5 cxd5 11. exd5 Bd7 12. d6 Nc6 13. Bc4 Qf6 14. Nb5 O-O-O 15. Kf1 Nb4 16. a3 Na6 17. Be6 Bxe6 18. Ne2 Bc4 19. Qa4 Bxe2+ 20. Kxe2 Qxb2+ 21. Kf3 Qf6+ 22. Kg3 Bxd6+ 23. Kh3 Qf5+ 24. g4 Qf3+ 25. Kh4 Be7+ 26. Kh5 g6# 0-1`;

var wallyex2 = parsingpgn.rtparsedpgn(wallyex);
