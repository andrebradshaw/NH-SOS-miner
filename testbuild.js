var reg = (o, n) => o ? o[n] : '';
var cn = (o, s) => o ? o.getElementsByClassName(s) : console.log(o);
var tn = (o, s) => o ? o.getElementsByTagName(s) : console.log(o);
var gi = (o, s) => o ? o.getElementById(s) : console.log(o);
var rando = (n) => Math.round(Math.random() * n);
var unq = (arr) => arr.filter((e, p, a) => a.indexOf(e) == p);
var delay = (ms) => new Promise(res => setTimeout(res, ms));
var ele = (t) => document.createElement(t);
var attr = (o, k, v) => o.setAttribute(k, v);


async function testFetch(){
  var res = await fetch("https://quickstart.sos.nh.gov/online/BusinessInquire/BusinessSearchList", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest"
  },
  "referrer": "https://quickstart.sos.nh.gov/online/BusinessInquire/BusinessSearch",
  "referrerPolicy": "no-referrer-when-downgrade",
  "body": "undefined&sortby=BusinessID&stype=b&pidx=5",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
  var text = await res.text();
// console.log(text);
  var doc = new DOMParser().parseFromString(text, 'text/html');
//   console.log(doc);
  
  parseTable(doc);
}
testFetch();



function parseTable(doc){
  var thead = Array.from(tn(tn(tn(doc,'thead')[0],'tr')[0],'th')).map(h=> h.innerText);
  var tbody = Array.from(tn(tn(doc,'tbody')[0],'tr')).map(tr=> Array.from(tn(tr,'td')).map(td=> td.innerText));
  var table = [...[thead],...tbody];
  console.log(table);
}
