function documentfunction1(tf) {
    var documentstring1 = document.body.innerHTML;
    if (tf) {
    documentstring1.replace(':lol',`<span style="background-image:url(https://chonggi-tokhu.github.io/aass/docs/colourgrey-styles-1.0/lol.gif);height:20px;width:20px;display:block;"></span>`);
    documentstring1.replace(':heart', '\u2764');
    function swearfiltering(swearfiltering1) {
        if (swearfiltering1) {
            documentstring1.replace('fuck', `oh,it's f-word.`);
            documentstring1.replace('fuck you', 'this word means jotkka in korean.');
            documentstring1.replace('씨발', `제가 '시발'이라고 했어요.`);
            documentstring1.replace('좆까', `제가 '좆까'라는 단어를 썼어요`);
            documentstring1.replace('hell', `oh,i wrote word 'hell'... sorry`);
            documentstring1.replace('nigger', `i'm racist`);
        }
    }
    swearfiltering(true);
    documentstring1.replace('chess.com', `<a href="https://www.chess.com">chess.com</a>`);
    documentstring1.replace('colourgrey', `<a href="https://www.chess.com/member/colourgrey">colourgrey</a>`);
    documentstring1.replace('colourgreyBOT', `<a href="https://chonggi-tokhu.github.io/aass/docs/chess/colourgreybot1">colourgrey-BOT</a>`);
    documentstring1.replace('컬그봇', `<a href="https://chonggi-tokhu.github.io/aass/docs/chess/colourgreybot1">colourgrey-BOT</a>`);
    documentstring1.replace('컬러그레이봇', `<a href="https://chonggi-tokhu.github.io/aass/docs/chess/colourgreybot1">colourgrey-BOT</a>`);
    documentstring1.replace('savemartin', `<a href="https://www.chess.com/club/savemartin">savemartin</a>`);
    documentstring1.replace('SaveMartin', `<a href="https://www.chess.com/club/savemartin">SaveMartin</a>`);
    documentstring1.replace('#savemartin', `<a href="https://www.chess.com/club/savemartin">#savemartin</a>`);
    documentstring1.replace('세이브마틴', `<a href="https://www.chess.com/club/savemartin">세이브마틴</a>`);
    documentstring1.replace('#세이브마틴', `<a href="https://www.chess.com/club/savemartin">#세이브마틴</a>`);
    return documentstring1;
    }
}
document.body.innerHTML = documentfunction1(true);
