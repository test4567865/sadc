const roomName ="▓▓▓ [🏆] F U T S A L 3 vs 3 . 24H. TOPOTAMARE SERVER ⨯ ⚽  !▓▓▓";
const botName = "TOPOTO";
const maxPlayers = 20;
const roomPublic = true;
const geo = [{"code": "es", "lat": 40.42, "lon": -3.67}]; //Madrid, España

const room = HBInit({ roomName: roomName, maxPlayers: maxPlayers, public: roomPublic, playerName: botName, geo: geo[0] });

const scoreLimitClassic = 3;
const scoreLimitBig = 3;
const timeLimitClassic = 3;
const timeLimitBig = 3;

room.setTeamsLock(true);

var adminPassword = 1000 + getRandomInt(9000);
console.log("adminPassword : " + adminPassword);

/* STADIUM */


const playerRadius = 15;
var ballRadius = 6.25;
const triggerDistance = playerRadius + ballRadius + 0.01;
var aloneMap = '{"name":"FUTSAL No Goal by KyU","width":420,"height":200,"bg":{"width":368,"height":171,"kickOffRadius":65,"color":"505050"},"vertexes":[{"x":-368,"y":171,"cMask":["ball"]},{"x":-368,"y":65,"cMask":["ball"]},{"x":-368,"y":-65,"cMask":["ball"]},{"x":-368,"y":-171,"cMask":["ball"]},{"x":368,"y":171,"cMask":["ball"]},{"x":368,"y":65,"cMask":["ball"]},{"x":368,"y":-65,"cMask":["ball"]},{"x":368,"y":-171,"cMask":["ball"]},{"x":0,"y":65,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-65,"bCoef":0,"cMask":[]},{"x":-384,"y":-65,"bCoef":0.1,"cMask":["ball"]},{"x":384,"y":-65,"bCoef":0.1,"cMask":["ball"]},{"x":-384,"y":65,"bCoef":0.1,"cMask":["ball"]},{"x":384,"y":65,"bCoef":0.1,"cMask":["ball"]},{"x":368,"y":171,"cMask":["ball"]},{"x":368,"y":-171,"cMask":["ball"]},{"x":0,"y":171,"bCoef":0,"cMask":[]},{"x":0,"y":-171,"bCoef":0,"cMask":[]},{"x":0,"y":65,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-65,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":377,"y":-65,"cMask":["ball"]},{"x":377,"y":-171,"cMask":["ball"]},{"x":-377,"y":-65,"cMask":["ball"]},{"x":-377,"y":-171,"cMask":["ball"]},{"x":-377,"y":65,"cMask":["ball"]},{"x":-377,"y":171,"cMask":["ball"]},{"x":377,"y":65,"cMask":["ball"]},{"x":377,"y":171,"cMask":["ball"]},{"x":0,"y":199,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":65,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-65,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-199,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]}],"segments":[{"v0":0,"v1":1,"vis":false,"cMask":["ball"]},{"v0":2,"v1":3,"vis":false,"cMask":["ball"]},{"v0":4,"v1":5,"vis":false,"cMask":["ball"]},{"v0":6,"v1":7,"vis":false,"cMask":["ball"]},{"v0":8,"v1":9,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue"],"cGroup":["blueKO"]},{"v0":9,"v1":8,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue"],"cGroup":["redKO"]},{"v0":10,"v1":2,"bCoef":0.1,"curve":35,"curveF":3.1715948023632126},{"v0":6,"v1":11,"bCoef":0.1,"curve":35,"curveF":3.1715948023632126},{"v0":1,"v1":12,"bCoef":0.1,"curve":35,"curveF":3.1715948023632126},{"v0":13,"v1":5,"bCoef":0.1,"curve":35,"curveF":3.1715948023632126},{"v0":12,"v1":10,"bCoef":0.1,"curve":35,"curveF":3.1715948023632126,"cMask":["ball"]},{"v0":11,"v1":13,"bCoef":0.1,"curve":35,"curveF":3.1715948023632126,"cMask":["ball"]},{"v0":1,"v1":0,"cMask":["ball"]},{"v0":5,"v1":4,"cMask":["ball"]},{"v0":2,"v1":3,"cMask":["ball"]},{"v0":6,"v1":7,"cMask":["ball"]},{"v0":0,"v1":14,"cMask":["ball"]},{"v0":3,"v1":15,"cMask":["ball"]},{"v0":16,"v1":17,"bCoef":0,"cMask":[]},{"v0":8,"v1":9,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[]},{"v0":19,"v1":18,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[]},{"v0":2,"v1":1,"bCoef":0,"cMask":[]},{"v0":6,"v1":5,"bCoef":0,"cMask":[]},{"v0":20,"v1":21,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":22,"v1":23,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":24,"v1":25,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":26,"v1":27,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":28,"v1":29,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":30,"v1":31,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]}],"planes":[{"normal":[0,1],"dist":-171,"cMask":["ball"]},{"normal":[0,-1],"dist":-171,"cMask":["ball"]},{"normal":[0,1],"dist":-200,"bCoef":0.2},{"normal":[0,-1],"dist":-200,"bCoef":0.2},{"normal":[1,0],"dist":-420,"bCoef":0.2},{"normal":[-1,0],"dist":-420,"bCoef":0.2}],"goals":[],"discs":[{"radius":6.4,"color":"E7CC03","cGroup":["ball","kick","score"]},{"pos":[-368,65],"radius":5,"bCoef":1,"invMass":0,"color":"FF4136"},{"pos":[-368,-65],"radius":5,"bCoef":1,"invMass":0,"color":"FF4136"},{"pos":[368,65],"radius":5,"bCoef":1,"invMass":0,"color":"74D9"},{"pos":[368,-65],"radius":5,"bCoef":1,"invMass":0,"color":"74D9"}],"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.1,"kickStrength":7},"ballPhysics":"disc0","spawnDistance":180}'
var classicMap = '{"name":"FUTSAL 1v1 2v2 by KyU","width":420,"height":200,"bg":{"width":368,"height":171,"kickOffRadius":65,"color":"505050"},"vertexes":[{"x":-368,"y":171,"cMask":["ball"]},{"x":-368,"y":50,"cMask":["ball"]},{"x":-368,"y":-50,"cMask":["ball"]},{"x":-368,"y":-171,"cMask":["ball"]},{"x":368,"y":171,"cMask":["ball"]},{"x":368,"y":50,"cMask":["ball"]},{"x":368,"y":-50,"cMask":["ball"]},{"x":368,"y":-171,"cMask":["ball"]},{"x":0,"y":176,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":50,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-50,"bCoef":0,"cMask":[]},{"x":0,"y":-176,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-384,"y":-50,"bCoef":0.1},{"x":384,"y":-50,"bCoef":0.1},{"x":-384,"y":50,"bCoef":0.1},{"x":384,"y":50,"bCoef":0.1},{"x":-368,"y":-127,"bCoef":0,"cMask":[]},{"x":368,"y":-127,"bCoef":0,"cMask":[]},{"x":-368,"y":127,"bCoef":0,"cMask":[]},{"x":368,"y":127,"bCoef":0,"cMask":[]},{"x":-350,"y":-171,"bCoef":0,"cMask":[]},{"x":-368,"y":-163,"bCoef":0,"cMask":[]},{"x":350,"y":-171,"bCoef":0,"cMask":[]},{"x":368,"y":-163,"bCoef":0,"cMask":[]},{"x":-350,"y":171,"bCoef":0,"cMask":[]},{"x":-368,"y":163,"bCoef":0,"cMask":[]},{"x":350,"y":171,"bCoef":0,"cMask":[]},{"x":368,"y":163,"bCoef":0,"cMask":[]},{"x":368,"y":171,"cMask":["ball"]},{"x":368,"y":-171,"cMask":["ball"]},{"x":0,"y":171,"bCoef":0,"cMask":[]},{"x":0,"y":-171,"bCoef":0,"cMask":[]},{"x":0,"y":50,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-50,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":377,"y":-50,"cMask":["red"]},{"x":377,"y":-171,"cMask":["ball"]},{"x":-377,"y":-50,"cMask":["blue"]},{"x":-377,"y":-171,"cMask":["ball"]},{"x":-377,"y":50,"cMask":["blue"]},{"x":-377,"y":171,"cMask":["ball"]},{"x":377,"y":50,"cMask":["red"]},{"x":377,"y":171,"cMask":["ball"]}],"segments":[{"v0":0,"v1":1,"vis":false,"cMask":["ball"]},{"v0":2,"v1":3,"vis":false,"cMask":["ball"]},{"v0":4,"v1":5,"vis":false,"cMask":["ball"]},{"v0":6,"v1":7,"vis":false,"cMask":["ball"]},{"v0":8,"v1":9,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":9,"v1":10,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue"],"cGroup":["blueKO"]},{"v0":10,"v1":9,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue"],"cGroup":["redKO"]},{"v0":10,"v1":11,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":12,"v1":2,"bCoef":0.1,"curve":35,"curveF":3.1715948023632126,"color":"FFFFFF"},{"v0":6,"v1":13,"bCoef":0.1,"curve":35,"curveF":3.1715948023632126,"color":"FFFFFF"},{"v0":1,"v1":14,"bCoef":0.1,"curve":35,"curveF":3.1715948023632126,"color":"FFFFFF"},{"v0":15,"v1":5,"bCoef":0.1,"curve":35,"curveF":3.1715948023632126,"color":"FFFFFF"},{"v0":14,"v1":12,"bCoef":0.1,"curve":35,"curveF":3.1715948023632126,"color":"FFFFFF"},{"v0":13,"v1":15,"bCoef":0.1,"curve":35,"curveF":3.1715948023632126,"color":"FFFFFF"},{"v0":1,"v1":0,"cMask":["ball"],"color":"FFFFFF"},{"v0":5,"v1":4,"cMask":["ball"],"color":"FFFFFF"},{"v0":2,"v1":3,"cMask":["ball"],"color":"FFFFFF"},{"v0":6,"v1":7,"cMask":["ball"],"color":"FFFFFF"},{"v0":0,"v1":28,"cMask":["ball"],"color":"FFFFFF"},{"v0":3,"v1":29,"cMask":["ball"],"color":"FFFFFF"},{"v0":30,"v1":31,"bCoef":0,"cMask":[],"color":"FFFFFF"},{"v0":9,"v1":10,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"FFFFFF"},{"v0":33,"v1":32,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"FFFFFF"},{"v0":2,"v1":1,"bCoef":0,"cMask":[],"color":"FFFFFF"},{"v0":6,"v1":5,"bCoef":0,"cMask":[],"color":"FFFFFF"},{"v0":34,"v1":35,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":36,"v1":37,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":38,"v1":39,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":40,"v1":41,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":34,"v1":40,"curve":59.99999999999999,"curveF":1.7320508075688774,"vis":false,"cMask":["red"],"color":"FFFFFF"},{"v0":38,"v1":36,"curve":59.99999999999999,"curveF":1.7320508075688774,"vis":false,"cMask":["blue"],"color":"FFFFFF"}],"planes":[{"normal":[0,1],"dist":-171,"cMask":["ball"]},{"normal":[0,-1],"dist":-171,"cMask":["ball"]},{"normal":[0,1],"dist":-200,"bCoef":0.2},{"normal":[0,-1],"dist":-200,"bCoef":0.2},{"normal":[1,0],"dist":-420,"bCoef":0.2},{"normal":[-1,0],"dist":-420,"bCoef":0.2}],"goals":[{"p0":[-377,-50],"p1":[-377,50],"team":"red"},{"p0":[377,50],"p1":[377,-50],"team":"blue"}],"discs":[{"radius":6.4,"color":"E7CC03","cGroup":["ball","kick","score"]},{"pos":[-368,50],"radius":5,"bCoef":1,"invMass":0,"color":"FF4136"},{"pos":[-368,-50],"radius":5,"bCoef":1,"invMass":0,"color":"FF4136"},{"pos":[368,50],"radius":5,"bCoef":1,"invMass":0,"color":"FF4136"},{"pos":[368,-50],"radius":5,"bCoef":1,"invMass":0,"color":"FF4136"},{"pos":[383,51],"radius":3,"bCoef":0,"invMass":0,"cMask":[]},{"pos":[-383,51],"radius":3,"bCoef":0,"invMass":0,"cMask":[]},{"pos":[383,-51],"radius":3,"bCoef":0,"invMass":0,"cMask":[]},{"pos":[-383,-51],"radius":3,"bCoef":0,"invMass":0,"cMask":[]}],"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.1,"kickStrength":7},"ballPhysics":"disc0","spawnDistance":180}'
var bigMap = '{"name":"Futsal 3v3","width":630,"height":280,"bg":{"type":"hockey","kickOffRadius":80},"vertexes":[{"x":-550,"y":240,"cMask":["ball"]},{"x":-550,"y":80,"cMask":["ball"]},{"x":-550,"y":-80,"cMask":["ball"]},{"x":-550,"y":-240,"cMask":["ball"]},{"x":550,"y":240,"cMask":["ball"]},{"x":550,"y":80,"cMask":["ball"]},{"x":550,"y":-80,"cMask":["ball"]},{"x":550,"y":-240,"cMask":["ball"]},{"x":0,"y":270,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":80,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-557,"y":-80,"bCoef":0.1,"cMask":["ball"]},{"x":-580,"y":-80,"bCoef":0.1,"cMask":["ball"]},{"x":-580,"y":80,"bCoef":0.1,"cMask":["ball"]},{"x":-557,"y":80,"bCoef":0.1,"cMask":["ball"]},{"x":557,"y":-80,"bCoef":0.1,"cMask":["ball"]},{"x":580,"y":-80,"bCoef":0.1,"cMask":["ball"]},{"x":580,"y":80,"bCoef":0.1,"cMask":["ball"]},{"x":557,"y":80,"bCoef":0.1,"cMask":["ball"]},{"x":-550,"y":-160,"cGroup":[]},{"x":-550,"y":160,"cGroup":[]},{"x":-550,"y":-80,"cGroup":[]},{"x":-490,"y":-80,"cGroup":[]},{"x":-490,"y":80,"cGroup":[]},{"x":-550,"y":80,"cGroup":[]},{"x":550,"y":-160,"cGroup":[]},{"x":550,"y":160,"cGroup":[]},{"x":550,"y":-80,"cGroup":[]},{"x":490,"y":-80,"cGroup":[]},{"x":490,"y":80,"cGroup":[]},{"x":550,"y":80,"cGroup":[]},{"x":-420,"y":0,"cGroup":[]},{"x":-422,"y":0,"cGroup":[]},{"x":420,"y":0,"cGroup":[]},{"x":422,"y":0,"cGroup":[]},{"x":-1,"y":0,"cGroup":[]},{"x":2,"y":0,"cGroup":[]},{"x":-548,"y":-230,"cGroup":[]},{"x":-540,"y":-238,"cGroup":[]},{"x":548,"y":-230,"cGroup":[]},{"x":540,"y":-238,"cGroup":[]},{"x":-548,"y":230,"cGroup":[]},{"x":-540,"y":238,"cGroup":[]},{"x":548,"y":230,"cGroup":[]},{"x":540,"y":238,"cGroup":[]},{"x":-550,"y":-197,"cGroup":[]},{"x":-409,"y":-54,"cGroup":[]},{"x":550,"y":-174,"cGroup":[]},{"x":551,"y":171,"cGroup":[]},{"x":-550,"y":87,"cMask":["ball"]},{"x":557,"y":80,"cMask":["ball"]},{"x":557,"y":240,"cMask":["ball"]},{"x":557,"y":-240,"cMask":["ball"]},{"x":557,"y":-80,"cMask":["ball"]},{"x":-555,"y":-240,"cMask":["ball"]},{"x":-555,"y":-80,"cMask":["ball"]},{"x":-557,"y":80,"cMask":["ball"]},{"x":-557,"y":240,"cMask":["ball"]},{"x":-409,"y":44,"cGroup":[]},{"x":-550,"y":206,"cGroup":[]},{"x":549,"y":-196,"cGroup":[]},{"x":409,"y":-55,"cGroup":[]},{"x":409,"y":43,"cGroup":[]},{"x":550,"y":201,"cGroup":[]},{"x":557,"y":-90,"bCoef":0.1,"cMask":["ball"]},{"x":556,"y":92,"bCoef":0.1,"cMask":["ball"]},{"x":555,"y":-90,"bCoef":0.1,"cMask":["ball"]},{"x":554,"y":92,"bCoef":0.1,"cMask":["ball"]},{"x":554,"y":-90,"bCoef":0.1,"cMask":["ball"]},{"x":553,"y":92,"bCoef":0.1,"cMask":["ball"]},{"x":554,"y":-90,"bCoef":0.1,"cMask":["ball"]},{"x":553,"y":92,"bCoef":0.1,"cMask":["ball"]},{"x":552,"y":-90,"bCoef":0.1,"cMask":["ball"]},{"x":551,"y":92,"bCoef":0.1,"cMask":["ball"]},{"x":-557,"y":94,"bCoef":0.1,"cMask":["ball"]},{"x":-555,"y":94,"bCoef":0.1,"cMask":["ball"]},{"x":-553,"y":94,"bCoef":0.1,"cMask":["ball"]},{"x":-551,"y":94,"bCoef":0.1,"cMask":["ball"]},{"x":558,"y":-89,"bCoef":0.1,"cMask":["ball"]},{"x":557,"y":93,"bCoef":0.1,"cMask":["ball"]},{"x":-551,"y":88,"bCoef":0.1,"cMask":[]},{"x":-553,"y":88,"bCoef":0.1,"cMask":[]},{"x":-555,"y":88,"bCoef":0.1,"cMask":[]},{"x":-557,"y":88,"bCoef":0.1,"cMask":[]},{"x":557,"y":-88,"bCoef":0.1,"cMask":[]},{"x":557,"y":90,"bCoef":0.1,"cMask":[]},{"x":555,"y":-88,"bCoef":0.1,"cMask":[]},{"x":555,"y":90,"bCoef":0.1,"cMask":[]},{"x":550,"y":-80,"bCoef":0.1,"cMask":[]},{"x":550,"y":81,"bCoef":0.1,"cMask":[]},{"x":550,"y":-74,"bCoef":0.1,"cMask":[]},{"x":550,"y":-56,"bCoef":0.1,"cMask":[]},{"x":550,"y":-31,"bCoef":0.1,"cMask":[]},{"x":550,"y":-13,"bCoef":0.1,"cMask":[]},{"x":550,"y":11,"bCoef":0.1,"cMask":[]},{"x":550,"y":29,"bCoef":0.1,"cMask":[]},{"x":550,"y":55,"bCoef":0.1,"cMask":[]},{"x":550,"y":73,"bCoef":0.1,"cMask":[]},{"x":-282,"y":-1,"cGroup":[]},{"x":-284,"y":-1,"cGroup":[]},{"x":-550,"y":240,"cMask":["ball"],"cGroup":["ball"]},{"x":550,"y":240,"cMask":["ball"],"cGroup":["ball"]},{"x":-550,"y":-240,"cMask":["ball"],"cGroup":["ball"]},{"x":551,"y":-240,"cMask":["ball"],"cGroup":["ball"]},{"x":283,"y":0,"cGroup":[]},{"x":285,"y":0,"cGroup":[]},{"x":-550,"y":-86,"cMask":["ball"]},{"x":-550,"y":-239,"cMask":["ball"]},{"x":-550,"y":80,"bCoef":0.1,"cMask":[]},{"x":-550,"y":-80,"bCoef":0.1,"cMask":[]},{"x":-550,"y":-73,"bCoef":0.1,"cMask":[]},{"x":-550,"y":-55,"bCoef":0.1,"cMask":[]},{"x":-550,"y":-30,"bCoef":0.1,"cMask":[]},{"x":-550,"y":-12,"bCoef":0.1,"cMask":[]},{"x":-550,"y":12,"bCoef":0.1,"cMask":[]},{"x":-550,"y":30,"bCoef":0.1,"cMask":[]},{"x":-550,"y":56,"bCoef":0.1,"cMask":[]},{"x":-550,"y":74,"bCoef":0.1,"cMask":[]},{"x":0,"y":240,"bCoef":0,"cMask":[]},{"x":0,"y":80,"bCoef":0,"cMask":[]},{"x":0,"y":-80,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-270,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-80,"bCoef":0,"cMask":[]},{"x":0,"y":-240,"bCoef":0,"cMask":[]},{"x":0,"y":80,"bCoef":0,"cMask":[]},{"x":0,"y":-80,"bCoef":0,"cMask":[]}],"segments":[{"v0":4,"v1":5,"cMask":["ball"],"color":"FFFFFF"},{"v0":6,"v1":7,"cMask":["ball"],"color":"FFFFFF"},{"v0":12,"v1":13,"bCoef":0.1,"cMask":["ball"],"color":"FFFFFF"},{"v0":13,"v1":14,"bCoef":0.1,"cMask":["ball"],"color":"FFFFFF"},{"v0":14,"v1":15,"bCoef":0.1,"cMask":["ball"],"color":"FFFFFF"},{"v0":16,"v1":17,"bCoef":0.1,"cMask":["ball"],"color":"FFFFFF"},{"v0":17,"v1":18,"bCoef":0.1,"cMask":["ball"],"color":"FFFFFF"},{"v0":18,"v1":19,"bCoef":0.1,"cMask":["ball"],"color":"FFFFFF"},{"v0":32,"v1":33,"cGroup":[],"color":"FFFFFF"},{"v0":34,"v1":35,"cGroup":[],"color":"E0EEE0"},{"v0":36,"v1":37,"cGroup":[],"color":"E0EEE0"},{"v0":39,"v1":38,"curve":80.00000000000001,"curveF":1.19175359259421,"cGroup":[],"color":"E0EEE0"},{"v0":40,"v1":41,"curve":80.00000000000001,"curveF":1.19175359259421,"cGroup":[],"color":"E0EEE0"},{"v0":42,"v1":43,"curve":89.99999999999999,"curveF":1.0000000000000002,"cGroup":[],"color":"E0EEE0"},{"v0":45,"v1":44,"curve":80.00000000000001,"curveF":1.19175359259421,"cGroup":[],"color":"E0EEE0"},{"v0":9,"v1":10,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["red","blue"],"cGroup":["blueKO"],"color":"FFFFFF"},{"v0":10,"v1":9,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["red","blue"],"cGroup":["redKO"],"color":"FFFFFF"},{"v0":46,"v1":47,"curve":89.99999999999999,"curveF":1.0000000000000002,"cGroup":[],"color":"E0EEE0"},{"v0":50,"v1":0,"cMask":["ball"],"color":"FFFFFF"},{"v0":51,"v1":52,"vis":false,"cMask":["ball"],"color":"CCCCFF"},{"v0":53,"v1":54,"vis":false,"cMask":["ball"],"color":"CCCCFF"},{"v0":55,"v1":56,"vis":false,"cMask":["ball"],"color":"CCCCFF"},{"v0":57,"v1":58,"vis":false,"cMask":["ball"],"color":"FFCCCC"},{"v0":59,"v1":60,"curve":89.99999999999999,"curveF":1.0000000000000002,"cGroup":[],"color":"E0EEE0"},{"v0":47,"v1":59,"cGroup":[],"color":"E0EEE0"},{"v0":62,"v1":61,"curve":89.99999999999999,"curveF":1.0000000000000002,"cGroup":[],"color":"E0EEE0"},{"v0":64,"v1":63,"curve":89.99999999999999,"curveF":1.0000000000000002,"cGroup":[],"color":"E0EEE0"},{"v0":62,"v1":63,"cGroup":[],"color":"E0EEE0"},{"v0":89,"v1":90,"bCoef":0.1,"cMask":[],"color":"FFFFFF"},{"v0":91,"v1":92,"bCoef":0.1,"cMask":[],"color":"CF0000"},{"v0":93,"v1":94,"bCoef":0.1,"cMask":[],"color":"CF0000"},{"v0":95,"v1":96,"bCoef":0.1,"cMask":[],"color":"CF0000"},{"v0":97,"v1":98,"bCoef":0.1,"cMask":[],"color":"CF0000"},{"v0":99,"v1":100,"cGroup":[],"color":"FFFFFF"},{"v0":101,"v1":102,"cMask":["ball"],"cGroup":["ball"],"color":"FFFFFF"},{"v0":103,"v1":104,"cMask":["ball"],"cGroup":["ball"],"color":"FFFFFF"},{"v0":105,"v1":106,"cGroup":[],"color":"E0EEE0"},{"v0":108,"v1":107,"cMask":["ball"],"color":"FFFFFF"},{"v0":110,"v1":109,"bCoef":0.1,"cMask":[],"color":"FFFFFF"},{"v0":111,"v1":112,"bCoef":0.1,"cMask":[],"color":"CF0000"},{"v0":113,"v1":114,"bCoef":0.1,"cMask":[],"color":"CF0000"},{"v0":115,"v1":116,"bCoef":0.1,"cMask":[],"color":"CF0000"},{"v0":117,"v1":118,"bCoef":0.1,"cMask":[],"color":"CF0000"},{"v0":11,"v1":8,"bCoef":0,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"FFFFFF"},{"v0":120,"v1":119,"bCoef":0,"cMask":[],"color":"FFFFFF"},{"v0":122,"v1":121,"bCoef":0,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"FFFFFF"},{"v0":124,"v1":123,"bCoef":0,"cMask":[],"color":"FFFFFF"},{"v0":126,"v1":125,"bCoef":0,"cMask":[],"color":"FFFFFF"}],"planes":[{"normal":[0,1],"dist":-240,"cMask":["ball"],"cGroup":["ball"]},{"normal":[0,-1],"dist":-240,"cMask":["ball"],"cGroup":["ball"]},{"normal":[0,1],"dist":-270,"bCoef":0.1},{"normal":[0,-1],"dist":-270,"bCoef":0.1},{"normal":[1,0],"dist":-600,"bCoef":0.1},{"normal":[-1,0],"dist":-600,"bCoef":0.1}],"goals":[{"p0":[-550,84],"p1":[-550,-76],"team":"red"},{"p0":[550,80],"p1":[550,-80],"team":"blue"}],"discs":[{"radius":6.4,"color":"E7CC03","cGroup":["ball","kick","score"]},{"pos":[-550,80],"radius":5,"invMass":0},{"pos":[-550,-80],"radius":5,"invMass":0},{"pos":[550,80],"radius":5,"invMass":0},{"pos":[550,-80],"radius":5,"invMass":0}],"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.1,"kickStrength":7},"ballPhysics":"disc0","spawnDistance":350}'

/* OPTIONS */

var afkLimit = 12;
var drawTimeLimit = Infinity;
var maxTeamSize = 3; // This works for 1 (you might want to adapt things to remove some useless stats in 1v1 like assist or cs), 2, 3 or 4
var slowMode = 0;

/* PLAYERS */

const Team = { SPECTATORS: 0, RED: 1, BLUE: 2 };
var extendedP = [];
const eP = { ID: 0, AUTH: 1, CONN: 2, AFK: 3, ACT: 4, GK: 5, MUTE: 6 };
const Ss = { GA: 0, WI: 1, DR: 2, LS: 3, WR: 4, GL: 5, AS: 6, GK: 7, CS: 8, CP: 9, RL: 10, NK: 11 }
var players;
var teamR;
var teamB;
var teamS;

/* GAME */

var lastTeamTouched;
var lastPlayersTouched; // These allow to get good goal notifications (it should be lastPlayersKicked, waiting on a next update to get better track of shots on target)
var countAFK = false; // Created to get better track of activity
var activePlay = false; // Created to get better track of the possession
var goldenGoal = false;
var SMSet = new Set(); // Set created to get slow mode which is useful in chooseMode
var banList = []; // Getting track of the bans, so we can unban ppl if we want

/* STATS */

var game;
var GKList = ["", ""];
var Rposs = 0;
var Bposs = 0;
var point = [{ "x": 0, "y": 0 }, { "x": 0, "y": 0 }]; // created to get ball speed
var ballSpeed;
var lastWinner = Team.SPECTATORS;
var streak = 0;
var allBlues = []; // This is to count the players who should be counted for the stats. This includes players who left after the game has started, doesn't include those who came too late or ...
var allReds = []; // ... those who came in a very unequal game.

/* BALANCE & CHOOSE */

var inChooseMode = false; // This variable enables to distinguish the 2 phases of playing and choosing which should be dealt with very differently
var redCaptainChoice = "";
var blueCaptainChoice = "";
var chooseTime = 20;
var timeOutCap;

/* AUXILIARY */

var checkTimeVariable = false; // This is created so the chat doesn't get spammed when a game is ending via timeLimit
var statNumber = 0; // This allows the room to be given stat information every X minutes
var endGameVariable = false; // This variable with the one below helps distinguish the cases where games are stopped because they have finished to the ones where games are stopped due to player movements or resetting teams
var resettingTeams = false;
var capLeft = false;
var statInterval = 6;

loadMap(aloneMap, 0, 0);

/* OBJECTS */

function Goal(time, team, striker, assist) {
    this.time = time;
    this.team = team;
    this.striker = striker;
    this.assist = assist;
}

function Game(date, scores, goals) {
    this.date = date;
    this.scores = scores;
    this.goals = goals;
}

/* FUNCTIONS */

/* AUXILIARY FUNCTIONS */

function getRandomInt(max) { // returns a random number from 0 to max-1
    return Math.floor(Math.random() * Math.floor(max));
}

function getTime(scores) { // returns the current time of the game
    return "[" + Math.floor(Math.floor(scores.time / 60) / 10).toString() + Math.floor(Math.floor(scores.time / 60) % 10).toString() + ":" + Math.floor(Math.floor(scores.time - (Math.floor(scores.time / 60) * 60)) / 10).toString() + Math.floor(Math.floor(scores.time - (Math.floor(scores.time / 60) * 60)) % 10).toString() + "]"
}

function pointDistance(p1, p2) {
    var d1 = p1.x - p2.x;
    var d2 = p1.y - p2.y;
    return Math.sqrt(d1 * d1 + d2 * d2);
}

/* BUTTONS */

function topBtn() {
    if (teamS.length == 0) {
        return;
    }
    else {
        if (teamR.length == teamB.length) {
            if (teamS.length > 1) {
                room.setPlayerTeam(teamS[0].id, Team.RED);
                room.setPlayerTeam(teamS[1].id, Team.BLUE);
            }
            return;
        }
        else if (teamR.length < teamB.length) {
            room.setPlayerTeam(teamS[0].id, Team.RED);
        }
        else {
            room.setPlayerTeam(teamS[0].id, Team.BLUE);
        }
    }
}

function randomBtn() {
    if (teamS.length == 0) {
        return;
    }
    else {
        if (teamR.length == teamB.length) {
            if (teamS.length > 1) {
                var r = getRandomInt(teamS.length);
                room.setPlayerTeam(teamS[r].id, Team.RED);
                teamS = teamS.filter((spec) => spec.id != teamS[r].id);
                room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
            }
            return;
        }
        else if (teamR.length < teamB.length) {
            room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.RED);
        }
        else {
            room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
        }
    }
}

function blueToSpecBtn() {
    resettingTeams = true;
    setTimeout(() => { resettingTeams = false; }, 100);
    for (var i = 0; i < teamB.length; i++) {
        room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
    }
}

function redToSpecBtn() {
    resettingTeams = true;
    setTimeout(() => { resettingTeams = false; }, 100);
    for (var i = 0; i < teamR.length; i++) {
        room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
    }
}

function resetBtn() {
    resettingTeams = true;
    setTimeout(() => { resettingTeams = false; }, 100);
    if (teamR.length <= teamB.length) {
        for (var i = 0; i < teamR.length; i++) {
            room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
            room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
        }
        for (var i = teamR.length; i < teamB.length; i++) {
            room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
        }
    }
    else {
        for (var i = 0; i < teamB.length; i++) {
            room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
            room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
        }
        for (var i = teamB.length; i < teamR.length; i++) {
            room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
        }
    }
}

function blueToRedBtn() {
    resettingTeams = true;
    setTimeout(() => { resettingTeams = false; }, 100);
    for (var i = 0; i < teamB.length; i++) {
        room.setPlayerTeam(teamB[i].id, Team.RED);
    }
}

/* GAME FUNCTIONS */

function checkTime() {
    const scores = room.getScores();
    game.scores = scores;
    if (Math.abs(scores.time - scores.timeLimit) <= 0.01 && scores.timeLimit != 0) {
        if (scores.red != scores.blue) {
            if (checkTimeVariable == false) {
                checkTimeVariable = true;
                setTimeout(() => { checkTimeVariable = false; }, 3000);
                scores.red > scores.blue ? endGame(Team.RED) : endGame(Team.BLUE);
                setTimeout(() => { room.stopGame(); }, 2000);
            }
            return;
        }
        goldenGoal = true;
        room.sendChat("⚽ ¡Gol gana!");
    }
    if (Math.abs(drawTimeLimit * 60 - scores.time - 60) <= 0.01 && players.length > 2) {
        if (checkTimeVariable == false) {
            checkTimeVariable = true;
            setTimeout(() => { checkTimeVariable = false; }, 10);
            room.sendChat("⌛ ¡Quedan 60 segundos para que termine el partido!");
        }
    }
    if (Math.abs(scores.time - drawTimeLimit * 60) <= 0.01 && players.length > 2) {
        if (checkTimeVariable == false) {
            checkTimeVariable = true;
            setTimeout(() => { checkTimeVariable = false; }, 10);
            endGame(Team.SPECTATORS);
            room.stopGame();
            goldenGoal = false;
        }
    }
}

function endGame(winner) { // handles the end of a game : no stopGame function inside
    players.length >= 2 * maxTeamSize - 1 ? activateChooseMode() : null;
    const scores = room.getScores();
    game.scores = scores;
    Rposs = Rposs / (Rposs + Bposs);
    Bposs = 1 - Rposs;
    lastWinner = winner;
    endGameVariable = true;
    if (winner == Team.RED) {
        streak++;
        room.sendChat("🔴 ¡El Red Team ganó " + scores.red + "-" + scores.blue + "! Victorias consecutivas : " + streak + " 🏆");
    }
    else if (winner == Team.BLUE) {
        streak = 1;
        room.sendChat("🔵 ¡El Blue Team ganó " + scores.blue + "-" + scores.red + "! Victorias consecutivas : " + streak + " 🏆");
    }
    else {
        streak = 0;
        room.sendChat("💤 ¡Tiempo límite de empate alcanzado! 💤");
    }
    room.sendChat("⭐ Posesión del balón: 🔴 " + (Rposs * 100).toPrecision(3).toString() + "% : " + (Bposs * 100).toPrecision(3).toString() + "% 🔵");
    scores.red == 0 ? (scores.blue == 0 ? room.sendChat("🏆 ¡" + GKList[0].name + " y " + GKList[1].name + " mantuvieron la valla invicta! ") : room.sendChat("🏆 " + GKList[1].name + " mantuvo la valla invicta ! ")) : scores.blue == 0 ? room.sendChat("🏆 " + GKList[0].name + " mantuvo la valla invicta ! ") : null;
    updateStats();
}

function quickRestart() {
    room.stopGame();
    setTimeout(() => { room.startGame(); }, 2000);
}

function resumeGame() {
    setTimeout(() => { room.startGame(); }, 2000);
    setTimeout(() => { room.pauseGame(false); }, 1000);
}

function activateChooseMode() {
    inChooseMode = true;
    slowMode = 2;
    room.sendChat("Modo lento activado (2 segundos)");
}

function deactivateChooseMode() {
    inChooseMode = false;
    clearTimeout(timeOutCap);
    if (slowMode != 0) {
        slowMode = 0;
        room.sendChat("Modo lento terminado.");
    }
    redCaptainChoice = "";
    blueCaptainChoice = "";
}

function loadMap(map, scoreLim, timeLim) {
    if (map == aloneMap) {
        room.setCustomStadium(aloneMap);
    }
    else if (map == classicMap) {
        (classicMap != '') ? room.setCustomStadium(classicMap) : room.setDefaultStadium("Classic");
    }
    else if (map == bigMap) {
        (bigMap != '.') ? room.setCustomStadium(bigMap) : room.setDefaultStadium("Big");
    }
    else {
        room.setCustomStadium(map);
    }
    room.setScoreLimit(scoreLim);
    room.setTimeLimit(timeLim);
}

/* PLAYER FUNCTIONS */

function updateTeams() { // update the players' list and all the teams' list
    players = room.getPlayerList().filter((player) => player.id != 0 && !getAFK(player));
    teamR = players.filter(p => p.team === Team.RED);
    teamB = players.filter(p => p.team === Team.BLUE);
    teamS = players.filter(p => p.team === Team.SPECTATORS);
}

function handleInactivity() { // handles inactivity : players will be kicked after afkLimit
    if (countAFK && (teamR.length + teamB.length) > 1) {
        for (var i = 0; i < teamR.length; i++) {
            setActivity(teamR[i], getActivity(teamR[i]) + 1);
        }
        for (var i = 0; i < teamB.length; i++) {
            setActivity(teamB[i], getActivity(teamB[i]) + 1);
        }
    }
    for (var i = 0; i < extendedP.length; i++) {
        if (extendedP[i][eP.ACT] == 60 * (2 / 3 * afkLimit)) {
            room.sendChat("[PV] ⛔ ¡@" + room.getPlayer(extendedP[i][eP.ID]).name + ", si no te mueves o envías un mensaje dentro de los siguientes " + Math.floor(afkLimit / 3) + " segundos, serás kickeado!", extendedP[i][eP.ID]);
        }
        if (extendedP[i][eP.ACT] >= 60 * afkLimit) {
            extendedP[i][eP.ACT] = 0;
            if (room.getScores().time <= afkLimit - 0.5) {
                setTimeout(() => { !inChooseMode ? quickRestart() : room.stopGame(); }, 10);
            }
            room.kickPlayer(extendedP[i][eP.ID], "AFK", false);
        }
    }
}

function getAuth(player) {
    return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.AUTH] : null;
}

function getAFK(player) {
    return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.AFK] : null;
}

function setAFK(player, value) {
    extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.AFK] = value);
}

function getActivity(player) {
    return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.ACT] : null;
}

function setActivity(player, value) {
    extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.ACT] = value);
}

function getGK(player) {
    return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.GK] : null;
}

function setGK(player, value) {
    extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.GK] = value);
}

function getMute(player) {
    return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.MUTE] : null;
}

function setMute(player, value) {
    extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.MUTE] = value);
}

/* BALANCE & CHOOSE FUNCTIONS */

function updateRoleOnPlayerIn() {
    updateTeams();
    if (inChooseMode) {
        if (players.length == 6) {
            loadMap(bigMap, scoreLimitBig, timeLimitBig);
        }
        getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
    }
    balanceTeams();
}

function updateRoleOnPlayerOut() {
    updateTeams();
    if (room.getScores() != null) {
        var scores = room.getScores();
        if (players.length >= 2 * maxTeamSize && scores.time >= (5 / 6) * game.scores.timeLimit && teamR.length != teamB.length) {
            if (teamR.length < teamB.length) {
                if (scores.blue - scores.red == 2) {
                    endGame(Team.BLUE);
                    room.sendChat("🤖 Abandono detectado. Juego terminado 🤖");
                    setTimeout(() => { room.stopGame(); }, 100);
                    return;
                }
            }
            else {
                if (scores.red - scores.blue == 2) {
                    endGame(Team.RED);
                    room.sendChat("🤖 Abandono detectado. Juego terminado 🤖");
                    setTimeout(() => { room.stopGame(); }, 100);
                    return;
                }
            }
        }
    }
    if (inChooseMode) {
        if (players.length == 5) {
            loadMap(classicMap, scoreLimitClassic, timeLimitClassic);
        }
        if (teamR.length == 0 || teamB.length == 0) {
            teamR.length == 0 ? room.setPlayerTeam(teamS[0].id, Team.RED) : room.setPlayerTeam(teamS[0].id, Team.BLUE);
            return;
        }
        if (Math.abs(teamR.length - teamB.length) == teamS.length) {
            room.sendChat("No hay alternativa, dejame manejar esta situación...");
            deactivateChooseMode();
            resumeGame();
            var b = teamS.length;
            if (teamR.length > teamB.length) {
                for (var i = 0; i < b; i++) {
                    setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.BLUE); }, 5 * i);
                }
            }
            else {
                for (var i = 0; i < b; i++) {
                    setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.RED); }, 5 * i);
                }
            }
            return;
        }
        if (streak == 0 && room.getScores() == null) {
            if (Math.abs(teamR.length - teamB.length) == 2) { // if someone left a team has 2 more players than the other one, put the last chosen guy back in his place so it's fair
                room.sendChat("🤖 Equilibrando equipos... 🤖");
                teamR.length > teamB.length ? room.setPlayerTeam(teamR[teamR.length - 1].id, Team.SPECTATORS) : room.setPlayerTeam(teamB[teamB.length - 1].id, Team.SPECTATORS);
            }
        }
        if (teamR.length == teamB.length && teamS.length < 2) {
            deactivateChooseMode();
            resumeGame();
            return;
        }
        capLeft ? choosePlayer() : getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
    }
    balanceTeams();
}

function balanceTeams() {
    if (!inChooseMode) {
        if (players.length == 1 && teamR.length == 0) {
            quickRestart();
            loadMap(aloneMap, 0, 0);
            room.setPlayerTeam(players[0].id, Team.RED);
        }
        else if (Math.abs(teamR.length - teamB.length) == teamS.length && teamS.length > 0) {
            const n = Math.abs(teamR.length - teamB.length);
            if (players.length == 2) {
                quickRestart();
                loadMap(classicMap, scoreLimitClassic, timeLimitClassic);
            }
            if (teamR.length > teamB.length) {
                for (var i = 0; i < n; i++) {
                    room.setPlayerTeam(teamS[i].id, Team.BLUE);
                }
            }
            else {
                for (var i = 0; i < n; i++) {
                    room.setPlayerTeam(teamS[i].id, Team.RED);
                }
            }
        }
        else if (Math.abs(teamR.length - teamB.length) > teamS.length) {
            const n = Math.abs(teamR.length - teamB.length);
            if (players.length == 1) {
                quickRestart();
                loadMap(aloneMap, 0, 0);
                room.setPlayerTeam(players[0].id, Team.RED);
                return;
            }
            else if (players.length == 5) {
                quickRestart();
                loadMap(classicMap, scoreLimitClassic, timeLimitClassic);
            }
            if (players.length == maxTeamSize * 2 - 1) {
                allReds = [];
                allBlues = [];
            }
            if (teamR.length > teamB.length) {
                for (var i = 0; i < n; i++) {
                    room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
                }
            }
            else {
                for (var i = 0; i < n; i++) {
                    room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
                }
            }
        }
        else if (Math.abs(teamR.length - teamB.length) < teamS.length && teamR.length != teamB.length) {
            room.pauseGame(true);
            activateChooseMode();
            choosePlayer();
        }
        else if (teamS.length >= 2 && teamR.length == teamB.length && teamR.length < maxTeamSize) {
            if (teamR.length == 2) {
                quickRestart();
                loadMap(bigMap, scoreLimitBig, timeLimitBig);
            }
            topBtn();
        }
    }
}

function choosePlayer() {
    clearTimeout(timeOutCap);
    if (teamR.length <= teamB.length && teamR.length != 0) {
        room.sendChat("[PV] Para elegir un jugador, ingrese su número en la lista dada o use 'top', 'random' o 'bottom'.", teamR[0].id);
        timeOutCap = setTimeout(function (player) { room.sendChat("[PV] ¡Date prisa @" + player.name + ", solo quedan " + Number.parseInt(chooseTime / 2) + " segundos para elegir!", player.id); timeOutCap = setTimeout(function (player) { room.kickPlayer(player.id, "¡No elegiste a tiempo!", false); }, chooseTime * 500, teamR[0]); }, chooseTime * 1000, teamR[0]);
    }
    else if (teamB.length < teamR.length && teamB.length != 0) {
        room.sendChat("[PV] Para elegir un jugador, ingrese su número en la lista dada o use 'top', 'random' o 'bottom'.", teamB[0].id);
        timeOutCap = setTimeout(function (player) { room.sendChat("[PV] ¡Date prisa @" + player.name + ", solo quedan " + Number.parseInt(chooseTime / 2) + " segundos para elegir!", player.id); timeOutCap = setTimeout(function (player) { room.kickPlayer(player.id, "¡No elegiste a tiempo!", false); }, chooseTime * 500, teamB[0]); }, chooseTime * 1000, teamB[0]);
    }
    if (teamR.length != 0 && teamB.length != 0) getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
}

function getSpecList(player) {
    var cstm = "[PV] Jugadores: ";
    for (var i = 0; i < teamS.length; i++) {
        if (140 - cstm.length < (teamS[i].name + "[" + (i + 1) + "], ").length) {
            room.sendChat(cstm, player.id);
            cstm = "... ";
        }
        cstm += teamS[i].name + "[" + (i + 1) + "], ";
    }
    cstm = cstm.substring(0, cstm.length - 2);
    cstm += ".";
    room.sendChat(cstm, player.id);
}

/* STATS FUNCTIONS */

function getLastTouchOfTheBall() {
    const ballPosition = room.getBallPosition();
    updateTeams();
    for (var i = 0; i < players.length; i++) {
        if (players[i].position != null) {
            var distanceToBall = pointDistance(players[i].position, ballPosition);
            if (distanceToBall < triggerDistance) {
                !activePlay ? activePlay = true : null;
                if (lastTeamTouched == players[i].team && lastPlayersTouched[0] != null && lastPlayersTouched[0].id != players[i].id) {
                    lastPlayersTouched[1] = lastPlayersTouched[0];
                    lastPlayersTouched[0] = players[i];
                }
                lastTeamTouched = players[i].team;
            }
        }
    }
}

function getStats() { // gives possession, ball speed and GK of each team
    if (activePlay) {
        updateTeams();
        lastTeamTouched == Team.RED ? Rposs++ : Bposs++;
        var ballPosition = room.getBallPosition();
        point[1] = point[0];
        point[0] = ballPosition;
        ballSpeed = (pointDistance(point[0], point[1]) * 60 * 60 * 60) / 15000;
        var k = [-1, Infinity];
        for (var i = 0; i < teamR.length; i++) {
            if (teamR[i].position.x < k[1]) {
                k[0] = teamR[i];
                k[1] = teamR[i].position.x;
            }
        }
        k[0] != -1 ? setGK(k[0], getGK(k[0]) + 1) : null;
        k = [-1, -Infinity];
        for (var i = 0; i < teamB.length; i++) {
            if (teamB[i].position.x > k[1]) {
                k[0] = teamB[i];
                k[1] = teamB[i].position.x;
            }
        }
        k[0] != -1 ? setGK(k[0], getGK(k[0]) + 1) : null;
        findGK();
    }
}

function updateStats() {
    if (players.length >= 2 * maxTeamSize && (game.scores.time >= (5 / 6) * game.scores.timeLimit || game.scores.red == game.scores.scoreLimit || game.scores.blue == game.scores.scoreLimit) && allReds.length >= maxTeamSize && allBlues.length >= maxTeamSize) {
        var stats;
        for (var i = 0; i < allReds.length; i++) {
            localStorage.getItem(getAuth(allReds[i])) ? stats = JSON.parse(localStorage.getItem(getAuth(allReds[i]))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", allReds[i].name];
            stats[Ss.GA]++;
            lastWinner == Team.RED ? stats[Ss.WI]++ : lastWinner == Team.BLUE ? stats[Ss.LS]++ : stats[Ss.DR]++;
            stats[Ss.WR] = (100 * stats[Ss.WI] / stats[Ss.GA]).toPrecision(3);
            localStorage.setItem(getAuth(allReds[i]), JSON.stringify(stats));
        }
        for (var i = 0; i < allBlues.length; i++) {
            localStorage.getItem(getAuth(allBlues[i])) ? stats = JSON.parse(localStorage.getItem(getAuth(allBlues[i]))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", allBlues[i].name];
            stats[Ss.GA]++;
            lastWinner == Team.BLUE ? stats[Ss.WI]++ : lastWinner == Team.RED ? stats[Ss.LS]++ : stats[Ss.DR]++;
            stats[Ss.WR] = (100 * stats[Ss.WI] / stats[Ss.GA]).toPrecision(3);
            localStorage.setItem(getAuth(allBlues[i]), JSON.stringify(stats));
        }
        for (var i = 0; i < game.goals.length; i++) {
            if (game.goals[i].striker != null) {
                if ((allBlues.concat(allReds)).findIndex((player) => player.id == game.goals[i].striker.id) != -1) {
                    stats = JSON.parse(localStorage.getItem(getAuth(game.goals[i].striker)));
                    stats[Ss.GL]++;
                    localStorage.setItem(getAuth(game.goals[i].striker), JSON.stringify(stats));
                }
            }
            if (game.goals[i].assist != null) {
                if ((allBlues.concat(allReds)).findIndex((player) => player.name == game.goals[i].assist.name) != -1) {
                    stats = JSON.parse(localStorage.getItem(getAuth(game.goals[i].assist)));
                    stats[Ss.AS]++;
                    localStorage.setItem(getAuth(game.goals[i].assist), JSON.stringify(stats));
                }
            }
        }
        if (allReds.findIndex((player) => player.id == GKList[0].id) != -1) {
            stats = JSON.parse(localStorage.getItem(getAuth(GKList[0])));
            stats[Ss.GK]++;
            game.scores.blue == 0 ? stats[Ss.CS]++ : null;
            stats[Ss.CP] = (100 * stats[Ss.CS] / stats[Ss.GK]).toPrecision(3);
            localStorage.setItem(getAuth(GKList[0]), JSON.stringify(stats));
        }
        if (allBlues.findIndex((player) => player.id == GKList[1].id) != -1) {
            stats = JSON.parse(localStorage.getItem(getAuth(GKList[1])));
            stats[Ss.GK]++;
            game.scores.red == 0 ? stats[Ss.CS]++ : null;
            stats[Ss.CP] = (100 * stats[Ss.CS] / stats[Ss.GK]).toPrecision(3);
            localStorage.setItem(getAuth(GKList[1]), JSON.stringify(stats));
        }
    }
}

function findGK() {
    var tab = [[-1, ""], [-1, ""]];
    for (var i = 0; i < extendedP.length; i++) {
        if (room.getPlayer(extendedP[i][eP.ID]) != null && room.getPlayer(extendedP[i][eP.ID]).team == Team.RED) {
            if (tab[0][0] < extendedP[i][eP.GK]) {
                tab[0][0] = extendedP[i][eP.GK];
                tab[0][1] = room.getPlayer(extendedP[i][eP.ID]);
            }
        }
        else if (room.getPlayer(extendedP[i][eP.ID]) != null && room.getPlayer(extendedP[i][eP.ID]).team == Team.BLUE) {
            if (tab[1][0] < extendedP[i][eP.GK]) {
                tab[1][0] = extendedP[i][eP.GK];
                tab[1][1] = room.getPlayer(extendedP[i][eP.ID]);
            }
        }
    }
    GKList = [tab[0][1], tab[1][1]];
}

setInterval(() => {
    var tableau = [];
    if (statNumber % 5 == 0) {
        Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GA])]); } });
        if (tableau.length < 5) {
            return false;
        }
        tableau.sort(function (a, b) { return b[1] - a[1]; });
        room.sendChat("Partidos Jugados> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
    }
    if (statNumber % 5 == 1) {
        Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.WI])]); } });
        if (tableau.length < 5) {
            return false;
        }
        tableau.sort(function (a, b) { return b[1] - a[1]; });
        room.sendChat("Victorias> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
    }
    if (statNumber % 5 == 2) {
        Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GL])]); } });
        if (tableau.length < 5) {
            return false;
        }
        tableau.sort(function (a, b) { return b[1] - a[1]; });
        room.sendChat("Goles> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
    }
    if (statNumber % 5 == 3) {
        Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.AS])]); } });
        if (tableau.length < 5) {
            return false;
        }
        tableau.sort(function (a, b) { return b[1] - a[1]; });
        room.sendChat("Asistencias> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
    }
    if (statNumber % 5 == 4) {
        Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.CS])]); } });
        if (tableau.length < 5) {
            return false;
        }
        tableau.sort(function (a, b) { return b[1] - a[1]; });
        room.sendChat("CS> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
    }
    statNumber++;
}, statInterval * 60 * 1000);

/* EVENTS */

/* PLAYER MOVEMENT */

room.onPlayerJoin = function (player) {
    extendedP.push([player.id, player.auth, player.conn, false, 0, 0, false]);
    updateRoleOnPlayerIn();
    room.sendChat("[PV] 👋 ¡Bienvenido/a " + player.name + "! Escribe '!help' para ver los comandos.", player.id);
    if (localStorage.getItem(player.auth) != null) {
        if (JSON.parse(localStorage.getItem(player.auth))[Ss.RL] != "player") {
            room.setPlayerAdmin(player.id, true);
            room.sendChat((JSON.parse(localStorage.getItem(player.auth))[Ss.RL] == "master" ? "Master " : "Admin ") + player.name + " se conectó a la sala");
        }
    }
}

room.onPlayerTeamChange = function (changedPlayer, byPlayer) {
    if (changedPlayer.id == 0) {
        room.setPlayerTeam(0, Team.SPECTATORS);
        return;
    }
    if (getAFK(changedPlayer) && changedPlayer.team != Team.SPECTATORS) {
        room.setPlayerTeam(changedPlayer.id, Team.SPECTATORS);
        room.sendChat(changedPlayer.name + " está AFK");
        return;
    }
    updateTeams();
    if (room.getScores() != null) {
        var scores = room.getScores();
        if (changedPlayer.team != Team.SPECTATORS && scores.time <= (3 / 4) * scores.timeLimit && Math.abs(scores.blue - scores.red) < 2) {
            (changedPlayer.team == Team.RED) ? allReds.push(changedPlayer) : allBlues.push(changedPlayer);
        }
    }
    if (changedPlayer.team == Team.SPECTATORS) {
        setActivity(changedPlayer, 0);
    }
    if (inChooseMode && resettingTeams == false && byPlayer.id == 0) {
        if (Math.abs(teamR.length - teamB.length) == teamS.length) {
            deactivateChooseMode();
            resumeGame();
            var b = teamS.length;
            if (teamR.length > teamB.length) {
                for (var i = 0; i < b; i++) {
                    setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.BLUE); }, 200 * i);
                }
            }
            else {
                for (var i = 0; i < b; i++) {
                    setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.RED); }, 200 * i);
                }
            }
            return;
        }
        else if ((teamR.length == maxTeamSize && teamB.length == maxTeamSize) || (teamR.length == teamB.length && teamS.length < 2)) {
            deactivateChooseMode();
            resumeGame();
        }
        else if (teamR.length <= teamB.length && redCaptainChoice != "") { // choice remembered
            redCaptainChoice == "top" ? room.setPlayerTeam(teamS[0].id, Team.RED) : redCaptainChoice == "random" ? room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.RED) : room.setPlayerTeam(teamS[teamS.length - 1].id, Team.RED);
            return;
        }
        else if (teamB.length < teamR.length && blueCaptainChoice != "") {
            blueCaptainChoice == "top" ? room.setPlayerTeam(teamS[0].id, Team.BLUE) : blueCaptainChoice == "random" ? room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE) : room.setPlayerTeam(teamS[teamS.length - 1].id, Team.BLUE);
            return;
        }
        else {
            choosePlayer();
        }
    }
}

room.onPlayerLeave = function (player) {
    if (teamR.findIndex((red) => red.id == player.id) == 0 && inChooseMode && teamR.length <= teamB.length) {
        choosePlayer();
        capLeft = true; setTimeout(() => { capLeft = false; }, 10);
    }
    if (teamB.findIndex((blue) => blue.id == player.id) == 0 && inChooseMode && teamB.length < teamR.length) {
        choosePlayer();
        capLeft = true; setTimeout(() => { capLeft = false; }, 10);
    }
    setActivity(player, 0);
    updateRoleOnPlayerOut();
}

room.onPlayerKicked = function (kickedPlayer, reason, ban, byPlayer) {
    ban == true ? banList.push([kickedPlayer.name, kickedPlayer.id]) : null;
}

/* PLAYER ACTIVITY */

room.onPlayerChat = function (player, message) {
    message = message.split(/ +/);
    player.team != Team.SPECTATORS ? setActivity(player, 0) : null;
    if (["!help"].includes(message[0].toLowerCase())) {
        room.sendChat("[PV] Comandos: !me, !games, !wins, !goals, !assists, !cs, !afks, !mutes, !bans.", player.id);
        player.admin ? room.sendChat("[PV] Admin: !mute <duration = 3> #<id>, !unmute all/#<id>, !clearbans <number = all>, !slow <duration>, !endslow", player.id) : null;
    }
    else if (["!afk"].includes(message[0].toLowerCase())) {
        if (players.length != 1 && player.team != Team.SPECTATORS) {
            if (player.team == Team.RED && streak > 0 && room.getScores() == null) {
                room.setPlayerTeam(player.id, Team.SPECTATORS);
            }
            else {
                room.sendChat("No puedes ser AFK mientras estás en un equipo", player.id);
                return false;
            }
        }
        else if (players.length == 1 && !getAFK(player)) {
            room.setPlayerTeam(player.id, Team.SPECTATORS);
        }
        setAFK(player, !getAFK(player));
        room.sendChat(player.name + (getAFK(player) ? " ahora está AFK" : " ya no está AFK"));
        getAFK(player) ? updateRoleOnPlayerOut() : updateRoleOnPlayerIn();
    }
    else if (["!afks", "!afklist"].includes(message[0].toLowerCase())) {
        var cstm = "[PV] Lista de AFKs: ";
        for (var i = 0; i < extendedP.length; i++) {
            if (room.getPlayer(extendedP[i][eP.ID]) != null && getAFK(room.getPlayer(extendedP[i][eP.ID]))) {
                if (140 - cstm.length < (room.getPlayer(extendedP[i][eP.ID]).name + ", ").length) {
                    room.sendChat(cstm, player.id);
                    cstm = "... ";
                }
                cstm += room.getPlayer(extendedP[i][eP.ID]).name + ", ";
            }
        }
        if (cstm == "[PV] Lista de AFKs: ") {
            room.sendChat("[PV] No hay nadie en la lista de AFKs", player.id);
            return false;
        }
        cstm = cstm.substring(0, cstm.length - 2);
        cstm += ".";
        room.sendChat(cstm, player.id);
    }
    else if (["!me"].includes(message[0].toLowerCase())) {
        var stats;
        localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00"];
        room.sendChat("[PV] " + player.name + "> PJ: " + stats[Ss.GA] + ", Victorias: " + stats[Ss.WI] + ", Empates: " + stats[Ss.DR] + ", Derrotas: " + stats[Ss.LS] + ", WR: " + stats[Ss.WR] + "%, Goles: " + stats[Ss.GL] + ", Asistencias: " + stats[Ss.AS] + ", GK: " + stats[Ss.GK] + ", CS: " + stats[Ss.CS] + ", CS%: " + stats[Ss.CP] + "%", player.id);
    }
    else if (["!games"].includes(message[0].toLowerCase())) {
        var tableau = [];
        Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GA])]); } });
        if (tableau.length < 5) {
            room.sendChat("[PV] Aún no se han jugado partidos suficientes.", player.id);
            return false;
        }
        tableau.sort(function (a, b) { return b[1] - a[1]; });
        room.sendChat("[PV] Partidos Jugados> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id);
    }
    else if (["!wins"].includes(message[0].toLowerCase())) {
        var tableau = [];
        Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.WI])]); } });
        if (tableau.length < 5) {
            room.sendChat("[PV] Aún no se han jugado partidos suficientes.", player.id);
            return false;
        }
        tableau.sort(function (a, b) { return b[1] - a[1]; });
        room.sendChat("[PV] Victorias> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id);
    }
    else if (["!goals"].includes(message[0].toLowerCase())) {
        var tableau = [];
        Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GL])]); } });
        if (tableau.length < 5) {
            room.sendChat("[PV] Aún no se han jugado partidos suficientes.", player.id);
            return false;
        }
        tableau.sort(function (a, b) { return b[1] - a[1]; });
        room.sendChat("[PV] Goles> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id);
    }
    else if (["!assists"].includes(message[0].toLowerCase())) {
        var tableau = [];
        Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.AS])]); } });
        if (tableau.length < 5) {
            room.sendChat("[PV] Aún no se han jugado partidos suficientes.", player.id);
            return false;
        }
        tableau.sort(function (a, b) { return b[1] - a[1]; });
        room.sendChat("[PV] Asistencias> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id);
    }
    else if (["!cs"].includes(message[0].toLowerCase())) {
        var tableau = [];
        Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.CS])]); } });
        if (tableau.length < 5) {
            room.sendChat("[PV] Aún no se han jugado partidos suficientes.", player.id);
            return false;
        }
        tableau.sort(function (a, b) { return b[1] - a[1]; });
        room.sendChat("[PV] Vallas Invictas> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id);
    }
    else if (["!claim"].includes(message[0].toLowerCase())) {
        if (message[1] == roomArgs['adminPassword']) {
            room.setPlayerAdmin(player.id, true);
            var stats;
            localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", player.name];
            if (stats[Ss.RL] != "master") {
                stats[Ss.RL] = "master";
                room.sendChat(player.name + " ahora es admin");
                localStorage.setItem(getAuth(player), JSON.stringify(stats));
            }
        }
    }
    else if (["!setadmin", "!admin"].includes(message[0].toLowerCase())) {
        if (localStorage.getItem(getAuth(player)) && JSON.parse(localStorage.getItem(getAuth(player)))[Ss.RL] == "master") {
            if (message.length >= 2 && message[1][0] == "#") {
                message[1] = message[1].substring(1, message[1].length);
                if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
                    var stats;
                    localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1])))) ? stats = JSON.parse(localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1]))))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", room.getPlayer(Number.parseInt(message[1])).name];
                    if (stats[Ss.RL] == "player") {
                        stats[Ss.RL] = "admin";
                        localStorage.setItem(getAuth(room.getPlayer(Number.parseInt(message[1]))), JSON.stringify(stats));
                        room.setPlayerAdmin(room.getPlayer(Number.parseInt(message[1])).id, true);
                        room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " ahora es admin");
                    }
                }
            }
        }
    }
    else if (["!setplayer", "!removeadmin"].includes(message[0].toLowerCase())) {
        if (localStorage.getItem(getAuth(player)) && JSON.parse(localStorage.getItem(getAuth(player)))[Ss.RL] == "master") {
            if (message.length >= 2 && message[1][0] == "#") {
                message[1] = message[1].substring(1, message[1].length);
                if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
                    var stats;
                    localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1])))) ? stats = JSON.parse(localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1]))))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", room.getPlayer(Number.parseInt(message[1])).name];
                    if (stats[Ss.RL] == "admin") {
                        room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " Ya no es admin");
                        stats[Ss.RL] = "player";
                        localStorage.setItem(getAuth(room.getPlayer(Number.parseInt(message[1]))), JSON.stringify(stats));
                        room.setPlayerAdmin(room.getPlayer(Number.parseInt(message[1])).id, false);
                    }
                }
            }
        }
    }
    else if (["!mutes", "!mutelist"].includes(message[0].toLowerCase())) {
        var cstm = "[PV] Lista de muteados: ";
        for (var i = 0; i < extendedP.length; i++) {
            if (room.getPlayer(extendedP[i][eP.ID]) != null && getMute(room.getPlayer(extendedP[i][eP.ID]))) {
                if (140 - cstm.length < (room.getPlayer(extendedP[i][eP.ID]).name + "[" + (extendedP[i][eP.ID]) + "], ").length) {
                    room.sendChat(cstm, player.id);
                    cstm = "... ";
                }
                cstm += room.getPlayer(extendedP[i][eP.ID]).name + "[" + (extendedP[i][eP.ID]) + "], ";
            }
        }
        if (cstm == "[PV] Lista de Muteados: ") {
            room.sendChat("[PV] No hay nadie en la lista de muteados", player.id);
            return false;
        }
        cstm = cstm.substring(0, cstm.length - 2);
        cstm += ".";
        room.sendChat(cstm, player.id);
    }
    else if (["!mute"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            updateTeams();
            var timeOut;
            if (!Number.isNaN(Number.parseInt(message[1])) && message.length > 1) {
                if (Number.parseInt(message[1]) > 0) {
                    timeOut = Number.parseInt(message[1]) * 60 * 1000;
                }
                else {
                    timeOut = 3 * 60 * 1000;
                }
                if (message[2].length > 1 && message[2][0] == "#") {
                    message[2] = message[2].substring(1, message[2].length);
                    if (!Number.isNaN(Number.parseInt(message[2])) && room.getPlayer(Number.parseInt(message[2])) != null) {
                        if (room.getPlayer(Number.parseInt(message[2])).admin || getMute(room.getPlayer(Number.parseInt(message[2])))) {
                            return false;
                        }
                        setTimeout(function (player) { setMute(player, false); }, timeOut, room.getPlayer(Number.parseInt(message[2])));
                        setMute(room.getPlayer(Number.parseInt(message[2])), true);
                        room.sendChat(room.getPlayer(Number.parseInt(message[2])).name + " ha sido muteado por " + (timeOut / 60000) + " minutos !");
                    }
                }
            }
            else if (Number.isNaN(Number.parseInt(message[1]))) {
                if (message[1].length > 1 && message[1][0] == "#") {
                    message[1] = message[1].substring(1, message[1].length);
                    if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
                        if (room.getPlayer(Number.parseInt(message[1])).admin || getMute(room.getPlayer(Number.parseInt(message[1])))) {
                            return false;
                        }
                        setTimeout(function (player) { setMute(player, false); }, 3 * 60 * 1000, room.getPlayer(Number.parseInt(message[1])));
                        setMute(room.getPlayer(Number.parseInt(message[1])), true);
                        room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " Te han muteado por 3 minutos");
                    }
                }
            }
        }
    }
    else if (["!unmute"].includes(message[0].toLowerCase())) {
        if (player.admin && message.length >= 2) {
            if (message[1] == "all") {
                extendedP.forEach((ePlayer) => { ePlayer[eP.MUTE] = false; });
                room.sendChat("Se ha limpiado la lista de muteados");
            }
            else if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null && getMute(room.getPlayer(Number.parseInt(message[1])))) {
                setMute(room.getPlayer(Number.parseInt(message[1])), false);
                room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " ha sido desmuteado");
            }
            else if (Number.isNaN(Number.parseInt(message[1]))) {
                if (message[1].length > 1 && message[1][0] == "#") {
                    message[1] = message[1].substring(1, message[1].length);
                    if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null && getMute(room.getPlayer(Number.parseInt(message[1])))) {
                        setMute(room.getPlayer(Number.parseInt(message[1])), false);
                        room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " ha sido desmuteado");
                    }
                }
            }
        }
    }
    else if (["!slow"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            if (message.length == 1) {
                slowMode = 2;
                room.sendChat("Modo lento activado (2 segundos)");
            }
            else if (message.length == 2) {
                if (!Number.isNaN(Number.parseInt(message[1]))) {
                    if (Number.parseInt(message[1]) > 0) {
                        slowMode = Number.parseInt(message[1]);
                        room.sendChat(slowMode + " segundos, modo lento activado");
                        return false;
                    }
                }
                slowMode = 2;
                room.sendChat("Modo lento activado (2 segundos)");
            }
        }
    }
    else if (["!endslow"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            slowMode != 0 ? room.sendChat("Modo lento terminado.") : null;
            slowMode = 0;
        }
    }
    else if (["!banlist", "!bans"].includes(message[0].toLowerCase())) {
        if (banList.length == 0) {
            room.sendChat("[PV] No hay nadie en la lista de baneados", player.id);
            return false;
        }
        var cstm = "[PV] Lista de baneados: ";
        for (var i = 0; i < banList.length; i++) {
            if (140 - cstm.length < (banList[i][0] + "[" + (banList[i][1]) + "], ").length) {
                room.sendChat(cstm, player.id);
                cstm = "... ";
            }
            cstm += banList[i][0] + "[" + (banList[i][1]) + "], ";
        }
        cstm = cstm.substring(0, cstm.length - 2);
        cstm += ".";
        room.sendChat(cstm, player.id);
    }
    else if (["!clearbans"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            if (message.length == 1) {
                room.clearBans();
                room.sendChat("Bans removidos");
                banList = [];
            }
            if (message.length == 2) {
                if (!Number.isNaN(Number.parseInt(message[1]))) {
                    if (Number.parseInt(message[1]) > 0) {
                        ID = Number.parseInt(message[1]);
                        room.clearBan(ID);
                        if (banList.length != banList.filter((array) => array[1] != ID)) {
                            room.sendChat(banList.filter((array) => array[1] == ID)[0][0] + " ha sido baneado del host");
                        }
                        setTimeout(() => { banList = banList.filter((array) => array[1] != ID); }, 20);
                    }
                }
            }
        }
    }
    else if (["!bb", "!bye", "!cya", "!gn"].includes(message[0].toLowerCase())) {
        room.kickPlayer(player.id, "Bye !", false);
    }
    if (teamR.length != 0 && teamB.length != 0 && inChooseMode) {
        if (player.id == teamR[0].id || player.id == teamB[0].id) { // we care if it's one of the captains choosing
            if (teamR.length <= teamB.length && player.id == teamR[0].id) { // we care if it's red turn && red cap talking
                if (["top", "auto"].includes(message[0].toLowerCase())) {
                    room.setPlayerTeam(teamS[0].id, Team.RED);
                    redCaptainChoice = "top";
                    clearTimeout(timeOutCap);
                    room.sendChat(player.name + " elegiste Top");
                    return false;
                }
                else if (["random", "rand"].includes(message[0].toLowerCase())) {
                    var r = getRandomInt(teamS.length);
                    room.setPlayerTeam(teamS[r].id, Team.RED);
                    redCaptainChoice = "random";
                    clearTimeout(timeOutCap);
                    room.sendChat(player.name + " elegiste Random");
                    return false;
                }
                else if (["bottom", "bot"].includes(message[0].toLowerCase())) {
                    room.setPlayerTeam(teamS[teamS.length - 1].id, Team.RED);
                    redCaptainChoice = "bottom";
                    clearTimeout(timeOutCap);
                    room.sendChat(player.name + " elegiste Bottom");
                    return false;
                }
                else if (!Number.isNaN(Number.parseInt(message[0]))) {
                    if (Number.parseInt(message[0]) > teamS.length || Number.parseInt(message[0]) < 1) {
                        room.sendChat("[PV] El número que elegiste es inválido", player.id);
                        return false;
                    }
                    else {
                        room.setPlayerTeam(teamS[Number.parseInt(message[0]) - 1].id, Team.RED);
                        room.sendChat(player.name + " eligió a " + teamS[Number.parseInt(message[0]) - 1].name + " !");
                        return false;
                    }
                }
            }
            if (teamR.length > teamB.length && player.id == teamB[0].id) { // we care if it's red turn && red cap talking
                if (["top", "auto"].includes(message[0].toLowerCase())) {
                    room.setPlayerTeam(teamS[0].id, Team.BLUE);
                    blueCaptainChoice = "top";
                    clearTimeout(timeOutCap);
                    room.sendChat(player.name + " seleccionó Top");
                    return false;
                }
                else if (["random", "rand"].includes(message[0].toLowerCase())) {
                    room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
                    blueCaptainChoice = "random";
                    clearTimeout(timeOutCap);
                    room.sendChat(player.name + " seleccionó Random");
                    return false;
                }
                else if (["bottom", "bot"].includes(message[0].toLowerCase())) {
                    room.setPlayerTeam(teamS[teamS.length - 1].id, Team.BLUE);
                    blueCaptainChoice = "bottom";
                    clearTimeout(timeOutCap);
                    room.sendChat(player.name + " seleccionó Bottom");
                    return false;
                }
                else if (!Number.isNaN(Number.parseInt(message[0]))) {
                    if (Number.parseInt(message[0]) > teamS.length || Number.parseInt(message[0]) < 1) {
                        room.sendChat("[PV] El número que elegiste es inválido", player.id);
                        return false;
                    }
                    else {
                        room.setPlayerTeam(teamS[Number.parseInt(message[0]) - 1].id, Team.BLUE);
                        room.sendChat(player.name + " eligió " + teamS[Number.parseInt(message[0]) - 1].name + " !");
                        return false;
                    }
                }
            }
        }
    }
    if (message[0][0] == "!") {
        return false;
    }
    if (getMute(player)) {
        room.sendChat("Usted está muteado.", player.id);
        return false;
    }
    if (slowMode > 0) {
        if (!player.admin) {
            if (!SMSet.has(player.id)) {
                SMSet.add(player.id);
                setTimeout((number) => { SMSet.delete(number); }, slowMode * 1000, player.id);
            }
            else {
                return false;
            }
        }
    }
}

room.onPlayerActivity = function (player) {
    setActivity(player, 0);
}

room.onPlayerBallKick = function (player) {
    if (lastPlayersTouched[0] == null || player.id != lastPlayersTouched[0].id) {
        !activePlay ? activePlay = true : null;
        lastTeamTouched = player.team;
        lastPlayersTouched[1] = lastPlayersTouched[0];
        lastPlayersTouched[0] = player;
    }
}

/* GAME MANAGEMENT */

room.onGameStart = function (byPlayer) {
    game = new Game(Date.now(), room.getScores(), []);
    countAFK = true;
    activePlay = false;
    goldenGoal = false;
    endGameVariable = false;
    lastPlayersTouched = [null, null];
    Rposs = 0;
    Bposs = 0;
    GKList = [];
    allReds = [];
    allBlues = [];
    if (teamR.length == maxTeamSize && teamB.length == maxTeamSize) {
        for (var i = 0; i < maxTeamSize; i++) {
            allReds.push(teamR[i]);
            allBlues.push(teamB[i]);
        }
    }
    for (var i = 0; i < extendedP.length; i++) {
        extendedP[i][eP.GK] = 0;
        extendedP[i][eP.ACT] = 0;
        room.getPlayer(extendedP[i][eP.ID]) == null ? extendedP.splice(i, 1) : null;
    }
    deactivateChooseMode();
}

room.onGameStop = function (byPlayer) {
    if (byPlayer.id == 0 && endGameVariable) {
        updateTeams();
        if (inChooseMode) {
            if (players.length == 2 * maxTeamSize) {
                inChooseMode = false;
                resetBtn();
                for (var i = 0; i < maxTeamSize; i++) {
                    setTimeout(() => { randomBtn(); }, 400 * i);
                }
                setTimeout(() => { room.startGame(); }, 2000);
            }
            else {
                if (lastWinner == Team.RED) {
                    blueToSpecBtn();
                }
                else if (lastWinner == Team.BLUE) {
                    redToSpecBtn();
                    blueToRedBtn();
                }
                else {
                    resetBtn();
                }
                setTimeout(() => { topBtn(); }, 500);
            }
        }
        else {
            if (players.length == 2) {
                if (lastWinner == Team.BLUE) {
                    room.setPlayerTeam(teamB[0].id, Team.RED);
                    room.setPlayerTeam(teamR[0].id, Team.BLUE);
                }
                setTimeout(() => { room.startGame(); }, 2000);
            }
            else if (players.length == 3 || players.length >= 2 * maxTeamSize + 1) {
                if (lastWinner == Team.RED) {
                    blueToSpecBtn();
                }
                else {
                    redToSpecBtn();
                    blueToRedBtn();
                }
                setTimeout(() => { topBtn(); }, 200);
                setTimeout(() => { room.startGame(); }, 2000);
            }
            else if (players.length == 4) {
                resetBtn();
                setTimeout(() => { randomBtn(); setTimeout(() => { randomBtn(); }, 500); }, 500);
                setTimeout(() => { room.startGame(); }, 2000);
            }
            else if (players.length == 5 || players.length >= 2 * maxTeamSize + 1) {
                if (lastWinner == Team.RED) {
                    blueToSpecBtn();
                }
                else {
                    redToSpecBtn();
                    blueToRedBtn();
                }
                setTimeout(() => { topBtn(); }, 200);
                activateChooseMode();
            }
            else if (players.length == 6) {
                resetBtn();
                setTimeout(() => { randomBtn(); setTimeout(() => { randomBtn(); setTimeout(() => { randomBtn(); }, 500); }, 500); }, 500);
                setTimeout(() => { room.startGame(); }, 2000);
            }
        }
    }
}

room.onGamePause = function (byPlayer) {
}

room.onGameUnpause = function (byPlayer) {
    if (teamR.length == 4 && teamB.length == 4 && inChooseMode || (teamR.length == teamB.length && teamS.length < 2 && inChooseMode)) {
        deactivateChooseMode();
    }
}

room.onTeamGoal = function (team) {
    activePlay = false;
    countAFK = false;
    const scores = room.getScores();
    game.scores = scores;
    if (lastPlayersTouched[0] != null && lastPlayersTouched[0].team == team) {
        if (lastPlayersTouched[1] != null && lastPlayersTouched[1].team == team) {
            room.sendChat("⚽ " + getTime(scores) + " ¡Gol de " + lastPlayersTouched[0].name + "! Asistencia de " + lastPlayersTouched[1].name + ". Velocidad de tiro : " + ballSpeed.toPrecision(4).toString() + "km/h " + (team == Team.RED ? "🔴" : "🔵"));
            game.goals.push(new Goal(scores.time, team, lastPlayersTouched[0], lastPlayersTouched[1]));
        }
        else {
            room.sendChat("⚽ " + getTime(scores) + " ¡Gol de " + lastPlayersTouched[0].name + "! Velocidad de tiro : " + ballSpeed.toPrecision(4).toString() + "km/h " + (team == Team.RED ? "🔴" : "🔵"));
            game.goals.push(new Goal(scores.time, team, lastPlayersTouched[0], null));
        }
    }
    else {
        room.sendChat("😂 " + getTime(scores) + " ¡Gol en contra de " + lastPlayersTouched[0].name + "! Velocidad de tiro : " + ballSpeed.toPrecision(4).toString() + "km/h " + (team == Team.RED ? "🔴" : "🔵"));
        game.goals.push(new Goal(scores.time, team, null, null));
    }
    if (scores.scoreLimit != 0 && (scores.red == scores.scoreLimit || scores.blue == scores.scoreLimit && scores.blue > 0 || goldenGoal == true)) {
        endGame(team);
        goldenGoal = false;
        setTimeout(() => { room.stopGame(); }, 1000);
    }
}

room.onPositionsReset = function () {
    countAFK = true;
    lastPlayersTouched = [null, null];
}

/* MISCELLANEOUS */

room.onRoomLink = function (url) {
}

room.onPlayerAdminChange = function (changedPlayer, byPlayer) {
    if (getMute(changedPlayer) && changedPlayer.admin) {
        room.sendChat(changedPlayer.name + " ha sido desmuteado.");
        setMute(changedPlayer, false);
    }
    if (byPlayer.id != 0 && localStorage.getItem(getAuth(byPlayer)) && JSON.parse(localStorage.getItem(getAuth(byPlayer)))[Ss.RL] == "admin") {
        room.sendChat("No tienes permiso para nombrar a un jugador como Administrador", byPlayer.id);
        room.setPlayerAdmin(changedPlayer.id, false);
    }
}

room.onStadiumChange = function (newStadiumName, byPlayer) {
}

room.onGameTick = function () {
    checkTime();
    getLastTouchOfTheBall();
    getStats();
    handleInactivity();
}
