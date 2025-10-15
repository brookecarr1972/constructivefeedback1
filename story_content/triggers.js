function ExecuteScript(strId)
{
  switch (strId)
  {
      case "62YZhwFOcbq":
        Script1();
        break;
      case "6qSQUfHQTwa":
        Script2();
        break;
      case "5YOkOSXiG8q":
        Script3();
        break;
      case "5dqJQLRqFU6":
        Script4();
        break;
      case "6GT3bu7gzWo":
        Script5();
        break;
      case "6oL7VcxH0sQ":
        Script6();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  player.once(() => {
const target = object('5nKiNIjzyLg');
const duration = 750;
const easing = 'ease-out';
const id = '6cNlxttBHLv';
const growAmount = 0.2;
const delay = 15000;
addToTimeline(
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('5nKiNIjzyLg');
const duration = 750;
const easing = 'ease-out';
const id = '6Fh6ekxnJdo';
const shrinkAmount = 0.2;
const delay = 17000;
addToTimeline(
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  player.once(() => {
const target = object('5gHT9J3iPLx');
const duration = 750;
const easing = 'ease-out';
const id = '5sCgQhyplW8';
const growAmount = 0.2;
const delay = 20000;
addToTimeline(
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  const target = object('5eUhtQ7iih8');
const duration = 750;
const easing = 'ease-out';
const id = '6HhjDqJrp0C';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  player.once(() => {
const target = object('5eUhtQ7iih8');
const duration = 750;
const easing = 'ease-out';
const id = '5jp69VHkKfJ';
const growAmount = 0.2;
const delay = 30000;
addToTimeline(
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script6 = function()
{
  player.once(() => {
const target = object('5gHT9J3iPLx');
const duration = 750;
const easing = 'ease-out';
const id = '5yUz9xDVylU';
const shrinkAmount = 0.2;
const delay = 26000;
addToTimeline(
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
