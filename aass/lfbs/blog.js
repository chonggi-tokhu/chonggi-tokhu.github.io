function documentfunction1(tf) {
    var documentstring1 = document.body.innerHTML;
    if (tf) {
    var abc1 = documentstring1.replace(':lol',`<span style="background-image:url(https://chonggi-tokhu.github.io/aass/docs/colourgrey-styles-1.0/lol.gif);height:20px;width:20px;display:block;"></span>`);
    var abc = documentstring1.replace(':heart', '\u2764');
    var abc1 = documentstring1.replace('chess.com', `<a href="https://www.chess.com">chess.com</a>`);
    var abc1 = documentstring1.replace('colourgrey', `<a href="https://www.chess.com/member/colourgrey">colourgrey</a>`);
    var abc1 = documentstring1.replace('colourgreyBOT', `<a href="https://chonggi-tokhu.github.io/aass/docs/chess/colourgreybot1">colourgrey-BOT</a>`);
    var abc1 = documentstring1.replace('컬그봇', `<a href="https://chonggi-tokhu.github.io/aass/docs/chess/colourgreybot1">colourgrey-BOT</a>`);
    var abc1 = documentstring1.replace('컬러그레이봇', `<a href="https://chonggi-tokhu.github.io/aass/docs/chess/colourgreybot1">colourgrey-BOT</a>`);
    var abc1 = documentstring1.replace('savemartin', `<a href="https://www.chess.com/club/savemartin">savemartin</a>`);
    var abc1 = documentstring1.replace('SaveMartin', `<a href="https://www.chess.com/club/savemartin">SaveMartin</a>`);
    var abc1 = documentstring1.replace('#savemartin', `<a href="https://www.chess.com/club/savemartin">#savemartin</a>`);
    var abc1 = documentstring1.replace('세이브마틴', `<a href="https://www.chess.com/club/savemartin">세이브마틴</a>`);
    var abc1 = documentstring1.replace('#세이브마틴', `<a href="https://www.chess.com/club/savemartin">#세이브마틴</a>`);
    return abc;
    }
}
document.body.innerHTML = documentfunction1(true);
