function documentfunction1(tf) {
    var documentstring1 = document.body.innerHTML;
    
    if (tf) {

    var abc = documentstring1.replace(':lol',`<span style="background-image:url(https://chonggi-tokhu.github.io/aass/docs/colourgrey-styles-1.0/lol.gif);height:20px;width:20px;display:block;"></span>`);
    abc = abc.replace(':heart', '\u2764');
    abc = abc.replace('chess.com', `<a href="https://www.chess.com">chess.com</a>`);
    abc = abc.replace('colourgrey', `<a href="https://www.chess.com/member/colourgrey">colourgrey</a>`);
    abc = abc.replace('colourgreyBOT', `<a href="https://chonggi-tokhu.github.io/aass/docs/chess/colourgreybot1">colourgrey-BOT</a>`);
    abc = abc.replace('컬그봇', `<a href="https://chonggi-tokhu.github.io/aass/docs/chess/colourgreybot1">colourgrey-BOT</a>`);
    abc = abc.replace('컬러그레이봇', `<a href="https://chonggi-tokhu.github.io/aass/docs/chess/colourgreybot1">colourgrey-BOT</a>`);
    abc = abc.replace('savemartin', `<a href="https://www.chess.com/club/savemartin">savemartin</a>`);
    abc = abc.replace('SaveMartin', `<a href="https://www.chess.com/club/savemartin">SaveMartin</a>`);
    abc = abc.replace('#savemartin', `<a href="https://www.chess.com/club/savemartin">#savemartin</a>`);
    abc = abc.replace('세이브마틴', `<a href="https://www.chess.com/club/savemartin">세이브마틴</a>`);
    abc = abc.replace('#세이브마틴', `<a href="https://www.chess.com/club/savemartin">#세이브마틴</a>`);
    function swearfiltering(swearfiltering1) {
        if (swearfiltering1) {
            abc = abc.replace('fuck', `oh,it's f-word.`);
            abc = abc.replace('fuck you', 'this word means jotkka in korean.');
            abc = abc.replace('씨발', `제가 '시발'이라고 했어요.`);
            abc = abc.replace('좆까', `제가 '좆까'라는 단어를 썼어요`);
            abc = abc.replace('hell', `oh,i wrote word 'hell'... sorry`);
            abc = abc.replace('nigger', `i'm racist`);
        }
    }
    swearfiltering(true);
    return abc;
    }
}
document.body.innerHTML = documentfunction1(true);
