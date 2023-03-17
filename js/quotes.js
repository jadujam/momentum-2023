
const quotes = [
{
    quote: "지금 이 순간 숨쉴 수 있음에 감사한다.",
},

{
    quote: "나를 둘러싼 모든 것들에 감사한다.",
},

{
    quote: "감사한 마음을 가질 수록 감사할 일이 생긴다는 것을 믿는다.",
},

{
    quote: "나에게는 내가 원하는 것을 끌어당길 수 있는 충분한 힘이 있다.",  
},

{
    quote: "나는 나 자신을 굳게 믿는다.",
},

{
    quote: "나는 나를 진심으로 사랑한다.",
},

{
    quote: "나는 내 인생을 풍요롭게 만들 준비가 되어있다.",
},

{
    quote: "나는 내 인생을 원하는 대로 디자인하고 있다.",
},

{
    quote: "나에게는 무엇이든 할 수 있는 창조의 에너지가 흘러넘친다.",
},

{
    quote: "나는 자신감이 넘친다.",
},

{
    quote: "나는 무엇이든 배울 준비가 되어있다.",
},

{
    quote: "나는 나 자신에게 더 성장할 수 있는 기회를 준다.",
},

{
    quote: "나는 나의 직관을 믿는다.",
},

{
    quote: "나는 오늘도 행복한 하루를 선택한다.",
},

{
    quote: "나는 경험하는 모든 일들을 기쁘게 맞이한다.",
},

{
    quote: "오늘은 특별한 하루가 될 것이다.",
},

{
    quote: "나는 나의 긍정적인 에너지를 주변에 퍼뜨린다.",
},

{
    quote: "나는 과거와 미래에 얽매이지 않고 지금 현재를 살아간다.",
},

{
    quote: "나는 아름답고 즐거운 세상을 누리러 온 여행자이다.",
},
];

const quote = document.querySelector("#quote span:first-child");

const currentQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = currentQuote.quote;