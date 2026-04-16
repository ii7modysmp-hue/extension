
window.URLSERV_WORMXY = "https://ii7modysmp-hue.github.io/extension";
window.detectLog = null;
const _wrmxy = {
  BETAisSkinCustom(p) {
    var v = /[a-zA-Z]/;
    return typeof p === "string" && v.test(p);
  },
  testSkinCustom: function (p2) {
    if (_wrmxy.BETAisSkinCustom(p2)) {
      return 34 || 33;
    } else {
      return p2;
    }
  },
  testSkinMod: function (p3) {
    return p3 >= 399 && p3 < 999;
  },
  testWear: function (p4) {
    return p4 >= 399 && p4 < 999;
  },
  isNumberValid: function (p5) {
    return p5 !== "" && p5 !== null && p5 !== undefined && !isNaN(p5);
  },
  validInput: function (p6) {
    if (!_wrmxy.testSkinMod(p6) && !_wrmxy.BETAisSkinCustom(p6)) {
      return p6;
    }
    try {
      let v2 = $("#inputReplaceSkin").val();
      return encodeURI(_wrmxy.isNumberValid(v2) ? v2 : 35);
    } catch (_0x40b061) {
      return encodeURI(35);
    }
  },
  aload: false,
  aId: 0,
};
var inputReplaceSkin = localStorage.getItem("inputReplaceSkin");
var hoisinhnhanh;
var PilotoAutomatico = null;
var isPlaying = false;
var pwrups = {};
window.keyMove = 81;
var theoEvents = {
  eventoPrincipal: null,
  joystick: {
    positionMode: "L",
    checked: true,
    size: 90,
    mode: "dynamic",
    position: {
      left: "110px",
      bottom: "110px",
    },
    color: "#ffe100ff",
    pxy: 110,
  },
};
var theoKzObjects = {
  lr: 10,
  FB_UserID: "",
  smoothCamera: 0.5,
  eat_animation: 0.0025,
  flag: URLSERV_WORMXY + "/images/flag.png",
  PortionSize: localStorage.PotenciadorSize || 2,
  PortionAura: localStorage.PotenciadorAura || 1.2,
  PortionTransparent: 0.8,
  FoodTransparent: 0.3,
  ModeStremer: false,
  ModeStremerbatop: false,
  ModeStremeremoj: false,
  ModeStremerheadshot: false,
  ModeStremersaveheadshot: false,
  arrow: false,
  KeyCodeRespawn: localStorage.KeyRespawn || 82,
  KeyCodeAutoMov: localStorage.KeyAutoMov || window.keyMove,
  AbilityZ: false,
  FoodShadow: localStorage.ComidaShadow || 2,
  FoodSize: localStorage.ComidaSize || 2,
  headshot: 0,
  visibleSkin: [],
  pL: [],
  gamePad: theoEvents.joystick,
  mobile: false,
  loading: false,
  kill: 0,
  totalKills: 0,
  totalHeadshots: 0,
  adblock: false,
  CLIENTE_ADMIN: 1,
  CLIENTE_ACTIVO: 3,
  CLIENTE_INACTIVO: 4,
};
saveGameLocal = localStorage.getItem("SaveGameXT");
if (saveGameLocal && saveGameLocal !== "null") {
  let t = JSON.parse(saveGameLocal);
  for (let e in t) {
    theoKzObjects[e] = t[e];
  }
}
theoKzObjects.loading = true;
const PhoneChecked = function () {
  let v3 = false;
  theoKzObjects.mobile = false;
  const v4 = navigator.userAgent || navigator.vendor || window.opera;
  const v5 = [
    "android",
    "bb",
    "meego",
    "avantgo",
    "bada",
    "blackberry",
    "blazer",
    "compal",
    "elaine",
    "fennec",
    "hiptop",
    "iemobile",
    "iphone",
    "ipod",
    "iris",
    "kindle",
    "lge",
    "maemo",
    "midp",
    "mmp",
    "mobile",
    "firefox",
    "netfront",
    "opera",
    "palm",
    "phone",
    "plucker",
    "pocket",
    "psp",
    "symbian",
    "treo",
    "vodafone",
    "wap",
    "windows ce",
    "xda",
    "ipad",
    "playbook",
    "silk",
  ];
  if (v5.some((p7) => v4.toLowerCase().includes(p7))) {
    theoKzObjects.mobile = true;
    v3 = true;
  }
  return v3;
};
const RechekingPhone = function () {
  let v6 = false;
  var v7 = navigator.userAgent || navigator.vendor || window.opera;
  const v8 = [
    "android",
    "bb",
    "meego",
    "avantgo",
    "bada",
    "blackberry",
    "blazer",
    "compal",
    "elaine",
    "fennec",
    "hiptop",
    "iemobile",
    "iphone",
    "ipod",
    "iris",
    "kindle",
    "lge",
    "maemo",
    "midp",
    "mmp",
    "mobile",
    "firefox",
    "netfront",
    "opera",
    "palm",
    "phone",
    "plucker",
    "pocket",
    "psp",
    "symbian",
    "treo",
    "vodafone",
    "wap",
    "windows ce",
    "xda",
    "ipad",
    "playbook",
    "silk",
  ];
  v6 = v8.some((p8) => v7.toLowerCase().includes(p8));
  return v6;
};
const loadJoy = function (p9) {
  let v9;
  try {
    console.log(p9);
    if (!theoKzObjects.gamePad) {
      theoKzObjects.gamePad = theoEvents.joystick;
    }
    if (RechekingPhone() && (p9 || theoKzObjects.gamePad.checked)) {
      v9 = nipplejs.create(theoKzObjects.gamePad);
      v9.on("move", function (p10, p11) {
        theoEvents.eventoPrincipal.sk =
          p11.angle.radian <= Math.PI
            ? p11.angle.radian * -1
            : Math.PI - (p11.angle.radian - Math.PI);
        console.log(p11);
      });
    }
    return v9;
  } catch (_0x3de758) {
    console.log(_0x3de758);
  }
};
if (typeof PIXI === "undefined") {
  var script = document.createElement("script");
  script.src = "https://pixijs.download/release/pixi.js";
  script.type = "text/javascript";
  script.onload = function () {
    initializeGame();
  };
  document.head.appendChild(script);
} else {
  initializeGame();
}
function initializeGame() {
  let v10 = new PIXI.Application();
  document.body.appendChild(v10.view);
  let v11 = new PIXI.Graphics();
  v11.beginFill(16711680);
  v11.drawCircle(400, 300, 50);
  v11.endFill();
  v10.stage.addChild(v11);
}
let clientes = {
  clientesVencidos: [],
  clientesActivos: [],
};
let servers = {
  Api_listServer: [],
};
async function loadUsers() {
  await fetch(URLSERV_WORMXY + "/users")
    .then((p12) => p12.json())
    .then((p13) => {
      if (p13.success) {
        let v12 = p13.Users;
        const v13 = new Date();
        v13.setHours(0, 0, 0, 0);
        clientes.clientesActivos = v12.filter((p14) => {
          if (p14.cliente_DateExpired) {
            const v14 = new Date(p14.cliente_DateExpired);
            return v14 >= v13;
          }
          return true;
        });
      } else {
        clientes = {
          clientesVencidos: [],
          clientesActivos: [],
        };
        alert("حدث خطأ أثناء تحميل العملاء");
      }
    })
    .catch((p15) => {
      console.error("Error loading users:", p15);
      alert("حدث خطأ اثناء التحميل يرجي تحديث الصفحة F5.");
    });
}
async function fetchServersWithRetry(p16, p17 = 3, p18 = 2000) {
  for (let v15 = 1; v15 <= p17; v15++) {
    try {
      const v16 = await fetch(p16);
      if (!v16.ok) {
        throw new Error("HTTP error! status: " + v16.status);
      }
      const v17 = await v16.json();
      return v17;
    } catch (_0x5b3682) {
      console.error("Attempt " + v15 + " failed: " + _0x5b3682.message);
      if (v15 < p17) {
        await new Promise((p19) => setTimeout(p19, p18));
      } else {
        throw _0x5b3682;
      }
    }
  }
}

async function loadServers() {
  try {
    const v18 = await fetchServersWithRetry(
      URLSERV_WORMXY + "/servers"
    );
    if (v18.success) {
      let v19 = v18.servers;
      servers.Api_listServer = v19.filter((p20) => p20.serverUrl);
    } else {
      servers = {
        Api_listServer: [],
      };
      alert("حدث خطأ أثناء تحميل السيرفرات");
    }
  } catch (_0x3bb0c8) {
    console.error("Failed to load servers after multiple attempts:", _0x3bb0c8);
    servers = {
      Api_listServer: [],
    };
    alert("حدث خطأ أثناء تحميل السيرفرات. يرجى إعادة المحاولة لاحقًا.");
  }
}
loadUsers();
loadServers();
$(".store-view-cont").append('<div id="idReplaceSkin"></div>');
var StoreSkinID = $("#idReplaceSkin");
const ctx = {
    fontStyle: {
      amarelo: new PIXI.TextStyle({
        align: "center",
        fill: "#f8d968",
        fontSize: 10,
        lineJoin: "round",
        stroke: "red",
        strokeThickness: 1,
        whiteSpace: "normal",
        wordWrap: true
      }),
      serversStyle: new PIXI.TextStyle({
        align: "center",
        fill: "#fff009",
        fontSize: 11,
        lineJoin: "round",
        whiteSpace: "normal",
        wordWrap: true
      }),
      amarelo11: new PIXI.TextStyle({
        align: "center",
        fill: "#f8d968",
        fontSize: 10,
        lineJoin: "round",
        stroke: "red",
        strokeThickness: 1,
        whiteSpace: "normal",
        wordWrap: true
      }),
      branco: new PIXI.TextStyle({
        align: "center",
        fill: "#fff",
        fontSize: 10,
        lineJoin: "round",
        stroke: "#FFF",
        whiteSpace: "normal",
        wordWrap: true
      }),
      hsBranco: new PIXI.TextStyle({
        align: "center",
        fill: "#fff",
        fontSize: 10,
        lineJoin: "round",
        stroke: "#FFF",
        whiteSpace: "normal",
        wordWrap: true
      }),
      hsBrancoRight: new PIXI.TextStyle({
        align: "center",
        fill: "#fff",
        fontSize: 12,
        lineJoin: "round",
        stroke: "#FFF",
        whiteSpace: "normal",
        wordWrap: true
       }),
             name: new PIXI.TextStyle({
        align: "center",
        fill: "#fff",
        fontSize: 12,
        lineJoin: "round",
        stroke: "#FFF",
        whiteSpace: "normal",
        wordWrap: true
       }),
    }
  };
ctx.clock = PIXI.Sprite.fromImage(
 URLSERV_WORMXY + "/images/clock.png"
);
ctx.clock.width = 100;
ctx.clock.height = 100;
ctx.clock.x = -50;
ctx.clock.y = -50;
const app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
});
ctx.clockan = PIXI.Sprite.fromImage(
URLSERV_WORMXY + "/images/clocktr.png"
);
if (theoKzObjects.ModeStremeranclock) {
  ctx.clockan.width = 0x64;
  ctx.clockan.height = 0x64;
  ctx.clockan.x = -0x32;
  ctx.clockan.y = -0x32;
} else {
  ctx.clockan.width = 0x0;
  ctx.clockan.height = 0x0;
  ctx.clockan.x = -0x32;
  ctx.clockan.y = -0x32;
}
document.body.appendChild(app.view);
ctx.hoisinhnhanh = PIXI.Sprite.from("URLSERV_WORMXY + /images/hoisinhnhanh.png");
ctx.hoisinhnhanh.width = 23;
ctx.hoisinhnhanh.height = 23;
ctx.top10sv = PIXI.Sprite.fromImage("URLSERV_WORMXY + /images/top10sv.png");
ctx.top10sv.height = 25;
ctx.top10sv.width = 100;
ctx.top10sv.x = 60;
ctx.top10sv.y = -50;
ctx.quaytron = PIXI.Sprite.from("URLSERV_WORMXY + /images/quaytron.png");
ctx.quaytron.width = -23;
ctx.quaytron.height = -23;
app.stage.addChild(ctx.hoisinhnhanh);
app.stage.addChild(ctx.quaytron);
function updateSpritePositions() {
  const v20 = 300;
  const v21 = -90;
  ctx.hoisinhnhanh.x = window.innerWidth - ctx.hoisinhnhanh.width - v20;
  ctx.hoisinhnhanh.y = v21;
  ctx.quaytron.x = ctx.hoisinhnhanh.x - ctx.quaytron.width - 10;
  ctx.quaytron.y = v21;
}
updateSpritePositions();
window.addEventListener("resize", () => {
  app.renderer.resize(window.innerWidth, window.innerHeight);
  updateSpritePositions();
});
ctx.value_server = new PIXI.Text("WXY", ctx.fontStyle.name);
ctx.value_server.x = 17;
ctx.value_server.y = 3;
ctx.label_hs = new PIXI.Text("HS", ctx.fontStyle.amarelo);
ctx.value1_hs = new PIXI.Text("0", ctx.fontStyle.amarelo);
ctx.label_kill = new PIXI.Text("KILL", ctx.fontStyle.branco);
ctx.value1_kill = new PIXI.Text("0", ctx.fontStyle.branco);
if (theoKzObjects.ModeStremersaveheadshot) {
  ctx.value2_hs = new PIXI.Text("", ctx.fontStyle.amarelo);
  ctx.value2_kill = new PIXI.Text("", ctx.fontStyle.branco);
} else {
  ctx.value2_hs = new PIXI.Text("", ctx.fontStyle.amarelo);
  ctx.value2_kill = new PIXI.Text("", ctx.fontStyle.branco);
}
ctx.label_kill.x = 66;
ctx.label_kill.y = 127;
ctx.label_hs.x = 11;
ctx.label_hs.y = 127;
ctx.value1_kill.x = 66;
ctx.value1_kill.y = 142;
ctx.value1_hs.x = 11;
ctx.value1_hs.y = 142;
ctx.value2_kill.x = 66;
ctx.value2_kill.y = 158;
ctx.value2_hs.x = 11;
ctx.value2_hs.y = 158;
ctx.containerCountInfo = new PIXI.Container();
ctx.containerCountInfo.x = -45;
ctx.containerCountInfo.y = -76;
ctx.containerCountInfo.addChild(ctx.value_server);
ctx.containerCountInfo.addChild(ctx.label_hs);
ctx.containerCountInfo.addChild(ctx.value1_hs);
ctx.containerCountInfo.addChild(ctx.value2_hs);
ctx.containerCountInfo.addChild(ctx.label_kill);
ctx.containerCountInfo.addChild(ctx.value1_kill);
ctx.containerCountInfo.addChild(ctx.value2_kill);
ctx.imgServerbase = PIXI.Texture.fromImage(URLSERV_WORMXY + "/images/flag.png");
ctx.borderurl = PIXI.Texture.fromImage(URLSERV_WORMXY + "/images/none.png");
ctx.onclickServer = PIXI.Texture.fromImage(theoKzObjects.flag);
ctx.containerImgS = new PIXI.Sprite(ctx.imgServerbase);
ctx.containerImgS.anchor.set(0.5);
ctx.containerImgS.x = 0;
ctx.containerImgS.y = 18;
ctx.containerImgS.width = 0;
ctx.containerImgS.height = 0;
ctx.borderImg = new PIXI.Sprite(ctx.borderurl);
ctx.borderImg.anchor.set(0.5);
ctx.borderImg.x = -2;
ctx.borderImg.y = 78;
ctx.borderImg.width = 110;
ctx.borderImg.height = 60;
ctx.setServer = function (p21) {
  ctx.value_server.text = p21 || "WXY";
};
ctx.setCountGame = function (p22, p23, p24, p25) {
  ctx.value1_hs.text = p23;
  ctx.value1_kill.text = p22;
  if (theoKzObjects.ModeStremersaveheadshot) {
    ctx.value2_hs.text = p25;
    ctx.value2_kill.text = p24;
  }
};
("use strict");
var _typeof =
  typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
    ? function (p26) {
        return typeof p26;
      }
    : function (p27) {
        if (
          p27 &&
          typeof Symbol == "function" &&
          p27.constructor === Symbol &&
          p27 !== Symbol.prototype
        ) {
          return "symbol";
        } else {
          return typeof p27;
        }
      };
var GoogleAuth;
(function () {
  try {
    console.log(
      (function (p28, p29) {
        for (var v22 = 0; v22 < p29.length; v22 += 2) {
          p28 = p28.replaceAll(p29[v22], p29[v22 + 1]);
        }
        return p28;
      })(
        "N-syo.632.oyhs`2./oSo+-2:dhydMdy/32/o+`3:o/62`/o+. .+osYYyso+-.osyQSs6662NyW.63 yW:`+QQ+ -Ms-.:ymmy3+Yo``+Y:6.Qs-+WWhYs:sHhyyHys/6662NoWs63 yW:+Ss:.-+Ss:`M-3.M` .YyySYys32`QSs.2``-Hh-32sH-66 `..3 `..`3N.Wh.63yW-Ss.3`Ss+`Mh/:+hmmo2/yy++yys//Y-3 oS/`Sso`3 ohy6oH.3..6 -Hh. -+Qs/ N /W+62`Wo:Ss32Sso.MMmd+.3syy` .-` :Y+3+Ss//Q+3 +H`32sHhsyHho6-Hh`:S+--+S+N2+W` `+y+2+W.:Ss.3.Ss+/M-:ymmh.2-Y.32+Ys2+Ss+o+/Q-3oH/32Hho-://:`6 Hh`So3`SsN3oHhs-sHhsoW/ `Sso:-:Q.hM-2ymmh. /Yo`3 sYy./Q`3+Sso2`W`3`Hh.66`Hh:So3-SoN3 +Why+yWh/3-oQSso-`Mm:2/Md+/Yy+3 oYy:Q/3 `Q. -W-3`WsYys/`+oo.:Hh//So//Ss-N32-sys:3:S+.6-/+++:-3oHo3 ohdh/`+So:3 .+S/`/oo:6.+s+` `+yyo`3 +yQYs: +oo..shy. -+oSo/. NN",
        [
          "W",
          "hhhh",
          "Q",
          "ssss",
          "M",
          "mmm",
          "Y",
          "yyy",
          "H",
          "hh",
          "S",
          "ss",
          "6",
          "      ",
          "3",
          "   ",
          "2",
          "  ",
          "N",
          "\n",
        ]
      )
    );
  } catch (_0x4ea45b) {}
})();
window.addEventListener("load", function () {
  function f() {
    (function (p30, p31, p32) {
      function f2(p33, p34) {
        return (p33 === p32 ? "undefined" : _typeof(p33)) === p34;
      }
      function f3() {
        if (typeof p31.createElement != "function") {
          return p31.createElement(arguments[0]);
        } else if (v28) {
          return p31.createElementNS.call(
            p31,
            "http://www.w3.org/2000/svg",
            arguments[0]
          );
        } else {
          return p31.createElement.apply(p31, arguments);
        }
      }
      var v23 = [];
      var v24 = [];
      var v25 = {
        _version: "3.3.1",
        _config: {
          classPrefix: "",
          enableClasses: true,
          enableJSClass: true,
          usePrefixes: true,
        },
        _q: [],
        on: function (p35, p36) {
          var vThis = this;
          setTimeout(function () {
            p36(vThis[p35]);
          }, 0);
        },
        addTest: function (p37, p38, p39) {
          v24.push({
            name: p37,
            fn: p38,
            options: p39,
          });
        },
        addAsyncTest: function (p40) {
          v24.push({
            name: null,
            fn: p40,
          });
        },
      };
      function f4() {}
      f4.prototype = v25;
      f4 = new f4();
      var v26 = false;
      try {
        v26 = "WebSocket" in p30 && p30.WebSocket.CLOSING === 2;
      } catch (_0x5419a7) {}
      f4.addTest("websockets", v26);
      var v27 = p31.documentElement;
      var v28 = v27.nodeName.toLowerCase() === "svg";
      f4.addTest("canvas", function () {
        var vF3 = f3("canvas");
        return !!vF3.getContext && !!vF3.getContext("2d");
      });
      f4.addTest("canvastext", function () {
        return (
          f4.canvas !== false &&
          typeof f3("canvas").getContext("2d").fillText == "function"
        );
      });
      (function () {
        var v29;
        var v30;
        var v31;
        var v32;
        var v33;
        var v34;
        var v35;
        for (var v36 in v24) {
          if (v24.hasOwnProperty(v36)) {
            v29 = [];
            v30 = v24[v36];
            if (
              v30.name &&
              (v29.push(v30.name.toLowerCase()),
              v30.options && v30.options.aliases && v30.options.aliases.length)
            ) {
              for (v31 = 0; v31 < v30.options.aliases.length; v31++) {
                v29.push(v30.options.aliases[v31].toLowerCase());
              }
            }
            v32 = f2(v30.fn, "function") ? v30.fn() : v30.fn;
            v33 = 0;
            for (; v33 < v29.length; v33++) {
              v34 = v29[v33];
              v35 = v34.split(".");
              if (v35.length === 1) {
                f4[v35[0]] = v32;
              } else {
                if (!!f4[v35[0]] && !(f4[v35[0]] instanceof Boolean)) {
                  f4[v35[0]] = new Boolean(f4[v35[0]]);
                }
                f4[v35[0]][v35[1]] = v32;
              }
              v23.push((v32 ? "" : "no-") + v35.join("-"));
            }
          }
        }
      })();
      (function (p41) {
        var v37 = v27.className;
        var v38 = f4._config.classPrefix || "";
        if (v28) {
          v37 = v37.baseVal;
        }
        if (f4._config.enableJSClass) {
          var v39 = new RegExp("(^|\\s)" + v38 + "no-js(\\s|$)");
          v37 = v37.replace(v39, "$1" + v38 + "js$2");
        }
        if (f4._config.enableClasses) {
          v37 += " " + v38 + p41.join(" " + v38);
          if (v28) {
            v27.className.baseVal = v37;
          } else {
            v27.className = v37;
          }
        }
      })(v23);
      delete v25.addTest;
      delete v25.addAsyncTest;
      for (var v40 = 0; v40 < f4._q.length; v40++) {
        f4._q[v40]();
      }
      p30.Modernizr = f4;
    })(window, document);
    return Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext;
  }
  function f5(p42, p43, p44) {
    const v41 = [38, 38, 38, 120, 38, 25, 38];
    const v42 = [
      "#FFD500",
      "#FFC75A",
      "#00B2ED",
      "#FF4544",
      "#0094D7",
      "#CCCF81",
      "#ff0999",
    ];
    let v43 = v41[p43] - parseInt(((p44 == 0.99 ? 1 : p44) * v41[p43]) / 1);
    const v44 = new PIXI.TextStyle({
      align: "center",
      fill: v42[p43],
      fontSize: 25,
      lineJoin: "round",
      whiteSpace: "normal",
      wordWrap: true,
      dropShadow: true,
      dropShadowBlur: 6,
      fontFamily: "Arial",
      fontWeight: "bold",
    });
    let v45 = "pwr_clock" + p43;
    if (!pwrups[v45] && v41[p43] === v43) {
      pwrups[v45] = new PIXI.Text(v43, v44);
      pwrups[v45].y = 61;
      p42.Tf[p43].addChild(pwrups[v45]);
    }
    if (pwrups[v45]) {
      pwrups[v45].x = v43 >= 100 ? 11 : v43 >= 10 ? 18 : 26;
      pwrups[v45].text = v43;
      if (v43 === 0) {
        delete pwrups[v45];
      }
    }
  }
  document.getElementById("game-wrap").style.display = "block";
  if (!f()) {
    document.getElementById("error-view").style.display = "block";
    return;
  }
  (function () {
    function f6() {
      return (window.anApp = vUndefined2);
    }
    function f7(p45) {
      const v46 = p45 + "=";
      const v47 = document.cookie.split(";");
      for (let v48 = 0; v48 < v47.length; v48++) {
        let v49 = v47[v48];
        while (v49.charAt(0) === " ") {
          v49 = v49.substring(1);
        }
        if (v49.indexOf(v46) === 0) {
          return v49.substring(v46.length, v49.length);
        }
      }
      return "";
    }
    function f8(p46, p47, p48) {
      var v50 = new Date();
      v50.setTime(v50.getTime() + p48 * 86400000);
      var v51 = "expires=" + v50.toUTCString();
      document.cookie = p46 + "=" + p47 + "; " + v51 + "; path=/";
    }
    function f9(p49) {
      return window.I18N_MESSAGES[p49];
    }
    function f10(p50) {
      if (p50[v140]) {
        return p50[v140];
      } else if (p50.en) {
        return p50.en;
      } else {
        return p50.x;
      }
    }
    function f11(p51) {
      var v52 = (Math.floor(p51) % 60).toString();
      var v53 = (Math.floor(p51 / 60) % 60).toString();
      var v54 = (Math.floor(p51 / 3600) % 24).toString();
      var v55 = Math.floor(p51 / 86400).toString();
      var vF9 = f9("util.time.days");
      var vF92 = f9("util.time.hours");
      var vF93 = f9("util.time.min");
      var vF94 = f9("util.time.sec");
      if (v55 > 0) {
        return (
          v55 +
          " " +
          vF9 +
          " " +
          v54 +
          " " +
          vF92 +
          " " +
          v53 +
          " " +
          vF93 +
          " " +
          v52 +
          " " +
          vF94
        );
      } else if (v54 > 0) {
        return (
          v54 + " " + vF92 + " " + v53 + " " + vF93 + " " + v52 + " " + vF94
        );
      } else if (v53 > 0) {
        return v53 + " " + vF93 + " " + v52 + " " + vF94;
      } else {
        return v52 + " " + vF94;
      }
    }
    function f12(p52) {
      if (p52.includes("href")) {
        return p52.replaceAll("href", 'target="_black" href');
      } else {
        return p52;
      }
    }
    function f13(p53, p54, p55) {
      var v56 = document.createElement("script");
      var v57 = true;
      if (p54) {
        v56.id = p54;
      }
      v56.async = "async";
      v56.type = "text/javascript";
      v56.src = p53;
      if (p55) {
        v56.onload = v56.onreadystatechange = function () {
          v57 = false;
          try {
            p55();
          } catch (_0x4666c3) {
            console.log(_0x4666c3);
          }
          v56.onload = v56.onreadystatechange = null;
        };
      }
      (document.head || document.getElementsByTagName("head")[0]).appendChild(
        v56
      );
    }
    function f14(p56, p57) {
      var vP57 = p57;
      vP57.prototype = Object.create(p56.prototype);
      vP57.prototype.constructor = vP57;
      vP57.parent = p56;
      return vP57;
    }
    function f15(p58) {
      p58 %= v145;
      if (p58 < 0) {
        return p58 + v145;
      } else {
        return p58;
      }
    }
    function f16(p59, p60, p61) {
      return f17(p61, p59, p60);
    }
    function f17(p62, p63, p64) {
      if (p62 > p64) {
        return p64;
      } else if (p62 < p63) {
        return p63;
      } else if (Number.isFinite(p62)) {
        return p62;
      } else {
        return (p63 + p64) * 0.5;
      }
    }
    function f18(p65, p66, p67, p68) {
      if (p66 > p65) {
        return Math.min(p66, p65 + p67 * p68);
      } else {
        return Math.max(p66, p65 - p67 * p68);
      }
    }
    function f19(p69, p70, p71, p72, p73) {
      return p70 + (p69 - p70) * Math.pow(1 - p72, p71 / p73);
    }
    function f20(p74, p75, p76) {
      return p74 * (1 - p76) + p75 * p76;
    }
    function f21(p77, p78, p79, p80) {
      var vP79 = p79;
      var vP78 = p78;
      var v58 = p78 + p80;
      if (p77 == null) {
        throw new TypeError("this is null or not defined");
      }
      var v59 = p77.length >>> 0;
      var v60 = vP79 >> 0;
      var v61 = v60 < 0 ? Math.max(v59 + v60, 0) : Math.min(v60, v59);
      var v62 = vP78 >> 0;
      var v63 = v62 < 0 ? Math.max(v59 + v62, 0) : Math.min(v62, v59);
      var v64 = v58 === undefined ? v59 : v58 >> 0;
      var v65 = v64 < 0 ? Math.max(v59 + v64, 0) : Math.min(v64, v59);
      var v66 = Math.min(v65 - v63, v59 - v61);
      var v67 = 1;
      for (
        v63 < v61 &&
        v61 < v63 + v66 &&
        ((v67 = -1), (v63 += v66 - 1), (v61 += v66 - 1));
        v66 > 0;

      ) {
        if (v63 in p77) {
          p77[v61] = p77[v63];
        } else {
          delete p77[v61];
        }
        v63 += v67;
        v61 += v67;
        v66--;
      }
      return p77;
    }
    function f22(p81) {
      return p81.getContext("2d");
    }
    function f23(p82) {
      if (p82.parent != null) {
        p82.parent.removeChild(p82);
      }
    }
    function f24(p83) {
      return p83[parseInt(Math.random() * p83.length)];
    }
    function f25() {
      return Math.random().toString(36).substring(2, 15);
    }
    function f26(p84, p85, p86) {
      var v68 = (1 - Math.abs(p86 * 2 - 1)) * p85;
      var v69 = v68 * (1 - Math.abs(((p84 / 60) % 2) - 1));
      var v70 = p86 - v68 / 2;
      if (p84 >= 0 && p84 < 60) {
        return [v70 + v68, v70 + v69, v70 + 0];
      } else if (p84 >= 60 && p84 < 120) {
        return [v70 + v69, v70 + v68, v70 + 0];
      } else if (p84 >= 120 && p84 < 180) {
        return [v70 + 0, v70 + v68, v70 + v69];
      } else if (p84 >= 180 && p84 < 240) {
        return [v70 + 0, v70 + v69, v70 + v68];
      } else if (p84 >= 240 && p84 < 300) {
        return [v70 + v69, v70 + 0, v70 + v68];
      } else {
        return [v70 + v68, v70 + 0, v70 + v69];
      }
    }
    function f27() {
      function f28() {
        let v71 = theoKzObjects.adblock ? 1 : 5;
        $("#adbl-1").text(f9("index.game.antiadblocker.msg1"));
        $("#adbl-2").text(f9("index.game.antiadblocker.msg2"));
        $("#adbl-3").text(f9("index.game.antiadblocker.msg3"));
        $("#adbl-4").text(
          f9("index.game.antiadblocker.msg4").replace("{0}", 10)
        );
        $("#adbl-continue span").text(f9("index.game.antiadblocker.continue"));
        $("#adbl-continue").hide();
        $("#" + v75).fadeIn(500);
        var vV71 = v71;
        for (var v72 = 0; v72 < v71; v72++) {
          setTimeout(function () {
            vV71--;
            $("#adbl-4").text(
              f9("index.game.antiadblocker.msg4").replace("{0}", vV71)
            );
            if (vV71 === 0) {
              console.log("aipAABC");
              try {
                ga(
                  "send",
                  "event",
                  "antiadblocker",
                  window.runtimeHash + "_complete"
                );
              } catch (_0x3db427) {}
              $("#adbl-continue").fadeIn(200);
            }
          }, (v72 + 1) * 1000);
        }
      }
      var v73 = false;
      function f29() {}
      var v74 = {};
      var v75 = "JDHnkHtYwyXyVgG9";
      $("#adbl-continue").click(function () {
        $("#" + v75).fadeOut(500);
        f29(false);
      });
      v74.a = function (p87) {
        f29 = p87;
        if (!v73) {
          try {
            aiptag.cmd.player.push(function () {
              aiptag.adplayer = new aipPlayer({
                AD_WIDTH: 960,
                AD_HEIGHT: 540,
                AD_FULLSCREEN: true,
                AD_CENTERPLAYER: false,
                LOADING_TEXT: "loading advertisement",
                PREROLL_ELEM: function () {
                  return document.getElementById("1eaom01c3pxu9wd3");
                },
                AIP_COMPLETE: function (p88) {
                  console.log("aipC");
                  f29(true);
                  $("#1eaom01c3pxu9wd3").hide();
                  $("#" + v75).hide();
                  try {
                    ga(
                      "send",
                      "event",
                      "preroll",
                      window.runtimeHash + "_complete"
                    );
                  } catch (_0x59a14c) {}
                },
                AIP_REMOVE: function () {},
              });
            });
            v73 = true;
          } catch (_0x3f4b4b) {}
        }
      };
      v74.b = function () {
        if (aiptag.adplayer !== undefined) {
          console.log("aipS");
          try {
            ga("send", "event", "preroll", window.runtimeHash + "_request");
          } catch (_0x2259f0) {}
          f28();
        } else {
          console.log("aipAABS");
          try {
            ga("send", "event", "antiadblocker", window.runtimeHash + "_start");
          } catch (_0x5cc392) {}
          f28();
        }
      };
      return v74;
    }
    function f30(p89, p90) {
      var v$ = $("#" + p89);
      var vP90 = p90;
      var v76 = {};
      var v77 = false;
      v76.a = function () {
        if (!v77) {
          v$.empty();
          v$.append("<div id='" + vP90 + "'></div>");
          try {
            try {
              ga("send", "event", "banner", window.runtimeHash + "_display");
            } catch (_0x3beb3b) {}
            aiptag.cmd.display.push(function () {
              aipDisplayTag.display(vP90);
            });
            v77 = true;
          } catch (_0x5957a4) {}
        }
      };
      v76.c = function () {
        try {
          try {
            ga("send", "event", "banner", window.runtimeHash + "_refresh");
          } catch (_0x286629) {}
          aiptag.cmd.display.push(function () {
            aipDisplayTag.display(vP90);
          });
        } catch (_0xe3c700) {}
      };
      return v76;
    }
    function f31() {
      function f32(p91) {
        var v78 = p91 + Math.floor(Math.random() * 65535) * 37;
        f8(vF10.d, v78, 30);
      }
      function f33() {
        return parseInt(f7(vF10.d)) % 37;
      }
      return (function () {
        var vF33 = f33();
        console.log("init1 pSC: " + vF33);
        if (!(vF33 >= 0) || !(vF33 < v682.e)) {
          vF33 = Math.max(0, v682.e - 2);
          console.log("init2 pSC: " + vF33);
        }
        var v79 = {};
        vUndefined2 = v79;
        v79.f = v682;
        v79.g = false;
        v79.i = Date.now();
        v79.j = 0;
        v79.k = 0;
        v79.l = null;
        v79.m = vUndefined;
        v79.n = v140;
        v79.o = null;
        v79.p = null;
        v79.q = null;
        v79.r = null;
        v79.s = null;
        v79.t = null;
        v79.u = null;
        try {
          if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              function (p92) {
                if (p92.coords !== undefined) {
                  var v80 = p92.coords;
                  if (
                    v80.latitude !== undefined &&
                    v80.longitude !== undefined
                  ) {
                    v79.l = p92;
                  }
                }
              },
              function (p93) {}
            );
          }
        } catch (_0x3145b2) {}
        v79.v = function () {
          v79.p = new vF4();
          v79.q = new vF34();
          v79.r = new vF6();
          v79.s = new vF35();
          v79.t = new vF30();
          v79.u = new vF37();
          v79.o = new f34();
          v79.o.z = new vF24(v79.o);
          v79.a();
        };
        v79.a = function () {
          try {
            ga("send", "event", "app", window.runtimeHash + "_init");
          } catch (_0x5dffa4) {}
          v79.o.A = function () {
            v79.o.B();
          };
          v79.o.C = function () {
            var v81 = v79.s.F.D();
            try {
              ga("send", "event", "game", window.runtimeHash + "_start", v81);
            } catch (_0x26a739) {}
            v79.r.G(vF6.AudioState.H);
            v79.s.I(v79.s.H.J());
          };
          v79.o.B = function () {
            try {
              ga("send", "event", "game", window.runtimeHash + "_end");
            } catch (_0x2ec70e) {}
            if ($("body").height() >= 430) {
              v79.f.K.c();
            }
            v79.p.L();
            (function () {
              var v82 = Math.floor(v79.o.N.M);
              var v83 = v79.o.O;
              if (v79.u.P()) {
                v79.u.Q(function () {
                  v79.R(v82, v83);
                });
              } else {
                v79.R(v82, v83);
              }
            })();
          };
          v79.o.S = function (p94) {
            p94(v79.s.H.T(), v79.s.H.U());
          };
          v79.u.V(function () {
            if (v79.p.W) {
              v79.r.G(vF6.AudioState.F);
              v79.s.I(v79.s.F);
            }
            if (v79.u.P()) {
              try {
                var v84 = v79.u.X();
                ga("set", "userId", v84);
              } catch (_0x499309) {}
            }
            if (v79.Y() && v79.u.P() && !v79.u.Z()) {
              v79.$(false, false);
              v79.s.aa._(new vF85());
            } else {
              v79.ba(true);
            }
          });
          v79.p.ca(function () {
            v79.r.G(vF6.AudioState.F);
            v79.s.I(v79.s.F);
          });
          v79.q.a(function () {
            v79.o.a();
            v79.r.a();
            v79.s.a();
            v79.t.a();
            v79.p.a();
            v79.u.a();
            if (v79.Y() && !v79.Z()) {
              v79.s.aa._(new vF85());
            } else {
              v79.ba(true);
            }
          });
        };
        v79.da = function (p95) {
          if (v79.u.P()) {
            var v85 = v79.u.ea();
            $.get(
              v138 +
                "/pub/wuid/" +
                v85 +
                "/consent/change?value=" +
                encodeURI(p95),
              function (p96) {}
            );
          }
        };
        v79.fa = function (p97) {
          var v86 = v79.u.ea();
          var v87 = v79.s.F.D();
          var v88 = v79.s.F.ga();
          var v89 = v79.t.ha(vF31.ia);
          var v90 = v79.t.ha(vF31.ja);
          var v91 = v79.t.ha(vF31.ka);
          var v92 = v79.t.ha(vF31.la);
          var v93 = v79.t.ha(vF31.ma);
          var v94 = 0;
          if (v79.l != null) {
            var v95 = v79.l.coords.latitude;
            var v96 = v79.l.coords.longitude;
            v94 =
              (Math.max(0, Math.min(32767, ((v95 + 90) / 180) * 32768)) << 1) |
              1 |
              (Math.max(0, Math.min(65535, ((v96 + 180) / 360) * 65536)) << 16);
          }
          _wrmxy.testSkinCustom(v89);
          let v97 =
            "XY_" +
            (v89 > 9999 ? "0000" : v89.toString().padStart(4, 0)) +
            (v93 > 999 ? "000" : v93.toString().padStart(3, 0)) +
            (v90 > 999 ? "000" : v90.toString().padStart(3, 0)) +
            (v91 > 999 ? "000" : v91.toString().padStart(3, 0));
          v88 =
            (v88.length >= 32
              ? v88.substr(0, 64)
              : v88.substr(0, 64).padEnd(64, "_")) + v97;
          v88 = v88.trim();
          console.log(v88);
          var v98 =
            v138 +
            "/pub/wuid/" +
            v86 +
            "/start?gameMode=" +
            encodeURI(v87) +
            "&gh=" +
            v94 +
            "&nickname=" +
            encodeURI(v88) +
            "&skinId=" +
            _wrmxy.validInput(v89) +
            "&eyesId=" +
            encodeURI(v90) +
            "&mouthId=" +
            encodeURI(v91) +
            "&glassesId=" +
            encodeURI(v92) +
            "&hatId=" +
            encodeURI(v93);
          console.log("urlRequest: " + v98);
          $.get(v98, function (p98) {
            var v99 = p98.server_url;
            p97(v99);
          });
        };
        v79.na = function () {
          vF33++;
          console.log("start pSC: " + vF33);
          if (!v79.f.oa && vF33 >= v79.f.e) {
            v79.s.I(v79.s.pa);
            v79.r.G(vF6.AudioState.qa);
            v79.f.ra.b();
          } else {
            f32(vF33);
            v79.sa();
          }
        };
        v79.sa = function (p99) {
          if (v79.o.ta()) {
            v79.s.I(v79.s.ua);
            v79.r.G(vF6.AudioState.ua);
            var v100 = v79.s.F.D();
            f8(vF10.va, v100, 30);
            console.log("save gm: " + v100);
            var v101 = v79.s.xa.wa();
            f8(vF10.ya, v101, 30);
            console.log("save sPN: " + v101);
            if (v79.u.P()) {
              v79.fa(function (p100) {
                hoisinhnhanh = p99 ? p99 : p100;
                v79.o.za(window.server_url || p100, v79.u.ea());
              });
            } else {
              var v102 = v79.s.F.ga();
              f8(vF10.Aa, v102, 30);
              var v103 = v79.t.ha(vF31.ia);
              f8(vF10.Ba, v103, 30);
              v79.fa(function (p101) {
                hoisinhnhanh = p99 ? p99 : p101;
                v79.o.Ca(p101, v102, v103);
              });
            }
          }
        };
        v79.R = function (p102, p103) {
          var v104 = v79.s.F.ga();
          v79.s.H.Da(p102, p103, v104);
          v79.r.G(vF6.AudioState.Ea);
          v79.s.I(v79.s.H.Fa());
        };
        v79.Ga = function () {
          if (!v79.Ha()) {
            return v79.t.Ia();
          }
          var vParseInt = parseInt(f7(vF10.Ba));
          if (vParseInt != null && v79.t.Ja(vParseInt, vF31.ia)) {
            return vParseInt;
          } else {
            return v79.t.Ia();
          }
        };
        v79.Ka = function (p104) {
          f8(vF10.La, !!p104, 1800);
        };
        v79.Ha = function () {
          return f7(vF10.La) === "true";
        };
        v79.ba = function (p105) {
          if (p105 != v79.g) {
            v79.g = p105;
            var v105 = v105 || {};
            v105.consented = p105;
            v105.gdprConsent = p105;
            v79.f.Ma.a();
            v79.f.K.a();
            v79.f.ra.a(function (p106) {
              if (p106) {
                f32((vF33 = 0));
              }
              v79.sa();
            });
          }
        };
        v79.$ = function (p107, p108) {
          f8(vF10.Na, p107 ? "true" : "false");
          if (p108) {
            v79.da(p107);
          }
          v79.ba(p107);
        };
        v79.Z = function () {
          switch (f7(vF10.Na)) {
            case "true":
              return true;
            default:
              return false;
          }
        };
        v79.Y = function () {
          try {
            return (
              !!window.isIPInEEA ||
              (v79.l != null &&
                !!vF11.Oa(v79.l.coords.latitude, v79.l.coords.longitude))
            );
          } catch (_0x50df4b) {
            return true;
          }
        };
        v79.Pa = function () {
          v79.j = Date.now();
          v79.k = v79.j - v79.i;
          v79.o.Qa(v79.j, v79.k);
          v79.s.Qa(v79.j, v79.k);
          v79.i = v79.j;
        };
        v79.Ra = function () {
          v79.s.Ra();
        };
        return v79;
      })();
    }
    function f34() {
      var v106 = {
        Wa: 30,
        Xa: new Float32Array(100),
        Ya: 0,
        Za: 0,
        $a: 0,
        _a: 0,
        ab: 0,
        bb: 0,
        cb: 0,
        db: null,
        eb: 300,
        C: function () {},
        B: function () {},
        S: function () {},
        A: function () {},
        fb: new vF16(),
        z: null,
        N: null,
        gb: {},
        hb: {},
        ib: 12.5,
        jb: 40,
        kb: 1,
        lb: -1,
        mb: 1,
        nb: 1,
        ob: -1,
        pb: -1,
        qb: 1,
        rb: 1,
        sb: -1,
        O: 500,
        tb: 500,
      };
      v106.fb.ub = 500;
      v106.N = new vF40(v106.fb);
      v106.a = function () {
        v106.N.vb(f6().s.H.wb);
        setInterval(function () {
          v106.S(function (p109, p110) {
            v106.xb(p109, p110);
          });
        }, 10);
      };
      v106.yb = function (p111, p112, p113, p114) {
        v106.lb = p111;
        v106.mb = p112;
        v106.nb = p113;
        v106.ob = p114;
        v106.zb();
      };
      v106.Ab = function (p115) {
        v106.kb = p115;
        v106.zb();
      };
      v106.zb = function () {
        v106.pb = v106.lb - v106.kb;
        v106.qb = v106.mb + v106.kb;
        v106.rb = v106.nb - v106.kb;
        v106.sb = v106.ob + v106.kb;
      };
      v106.Qa = function (p116, p117) {
        v106.$a += p117;
        v106.Za -= v106.Ya * 0.2 * p117;
        v106.z.Bb();
        if (v106.db != null && (v106.cb === 2 || v106.cb === 3)) {
          v106.Cb(p116, p117);
          v106.jb = 4 + v106.ib * v106.N.Db;
        }
        var v107 = 1000 / Math.max(1, p117);
        var v108 = 0;
        var v109 = 0;
        for (; v109 < v106.Xa.length - 1; v109++) {
          v108 = v108 + v106.Xa[v109];
          v106.Xa[v109] = v106.Xa[v109 + 1];
        }
        v106.Xa[v106.Xa.length - 1] = v107;
        v106.Wa = (v108 + v107) / v106.Xa.length;
      };
      v106.Eb = function (p118, p119) {
        return (
          p118 > v106.pb && p118 < v106.qb && p119 > v106.rb && p119 < v106.sb
        );
      };
      v106.Cb = function (p120, p121) {
        var v110 = v106.$a + v106.Za;
        var v111 = (v110 - v106._a) / (v106.ab - v106._a);
        v106.N.Fb(p120, p121);
        v106.N.Gb(p120, p121, v111, v106.Eb);
        var v112 = 0;
        var v113;
        for (v113 in v106.hb) {
          var v114 = v106.hb[v113];
          v114.Fb(p120, p121);
          v114.Gb(p120, p121, v111, v106.Eb);
          if (v114.Hb && v114.Db > v112) {
            v112 = v114.Db;
          }
          if (!v114.Ib && (!!(v114.Jb < 0.005) || !v114.Hb)) {
            v114.Kb();
            delete v106.hb[v114.Mb.Lb];
          }
        }
        v106.Ab(v112 * 3);
        var v115;
        for (v115 in v106.gb) {
          var v116 = v106.gb[v115];
          v116.Fb(p120, p121);
          v116.Gb(p120, p121, v106.Eb);
          if (v116.Nb && (v116.Jb < 0.005 || !v106.Eb(v116.Ob, v116.Pb))) {
            v116.Kb();
            delete v106.gb[v116.Mb.Lb];
          }
        }
      };
      v106.Qb = function (p122, p123) {
        if (v106.cb === 1) {
          v106.cb = 2;
          v106.C();
        }
        var v117 = f6().j;
        v106.bb = p122;
        if (p122 === 0) {
          v106._a = v117 - 95;
          v106.ab = v117;
          v106.$a = v106._a;
          v106.Za = 0;
        } else {
          v106._a = v106.ab;
          v106.ab = v106.ab + p123;
        }
        var v118 = v106.$a + v106.Za;
        v106.Ya = (v118 - v106._a) / (v106.ab - v106._a);
      };
      v106.Rb = function () {
        if (v106.cb === 1 || v106.cb === 2) {
          v106.cb = 3;
          var v119 = v106.db;
          setTimeout(function () {
            if (v106.cb === 3) {
              v106.cb = 0;
            }
            if (v119 != null && v119 === v106.db) {
              v106.db.close();
              v106.db = null;
            }
          }, 5000);
          v106.B();
        }
      };
      v106.ta = function () {
        return (
          v106.cb !== 2 &&
          ((v106.cb = 1),
          v106.z.Sb(),
          (v106.gb = {}),
          (v106.hb = {}),
          v106.N.Tb(),
          v106.db != null && (v106.db.close(), (v106.db = null)),
          true)
        );
      };
      v106.Ub = function () {
        v106.db = null;
        v106.z.Sb();
        if (v106.cb !== 3) {
          v106.A();
        }
        v106.cb = 0;
      };
      v106.za = function (p124, p125) {
        v106.Vb(p124, function () {
          var v120 = Math.min(2048, p125.length);
          var v121 = new ArrayBuffer(6 + v120 * 2);
          var v122 = new DataView(v121);
          var v123 = 0;
          v122.setInt8(v123, 129);
          v123 = v123 + 1;
          v122.setInt16(v123, 2800);
          v123 = v123 + 2;
          v122.setInt8(v123, 1);
          v123 = v123 + 1;
          v122.setInt16(v123, v120);
          v123 = v123 + 2;
          var v124 = 0;
          for (; v124 < v120; v124++) {
            v122.setInt16(v123, p125.charCodeAt(v124));
            v123 = v123 + 2;
          }
          v106.Wb(v121);
        });
      };
      v106.Ca = function (p126, p127, p128) {
        v106.Vb(p126, function () {
          var v125 = Math.min(32, p127.length);
          var v126 = new ArrayBuffer(7 + v125 * 2);
          var v127 = new DataView(v126);
          var v128 = 0;
          v127.setInt8(v128, 129);
          v128 = v128 + 1;
          v127.setInt16(v128, 2800);
          v128 = v128 + 2;
          v127.setInt8(v128, 0);
          v128 = v128 + 1;
          v127.setInt16(v128, p128);
          v128 = v128 + 2;
          v127.setInt8(v128, v125);
          v128++;
          var v129 = 0;
          for (; v129 < v125; v129++) {
            v127.setInt16(v128, p127.charCodeAt(v129));
            v128 = v128 + 2;
          }
          v106.Wb(v126);
        });
      };
      v106.Wb = function (p129) {
        try {
          if (v106.db != null && v106.db.readyState === WebSocket.OPEN) {
            v106.db.send(p129);
          }
        } catch (_0x48371c) {
          console.log("Socket send error: " + _0x48371c);
          v106.Ub();
        }
      };
      v106.xb = function (p130, p131) {
        var v130 = p131 ? 128 : 0;
        var v131 = ((f15(p130) / v145) * 128) & 127;
        var v132 = (v130 | v131) & 255;
        if (v106.eb !== v132) {
          var v133 = new ArrayBuffer(1);
          new DataView(v133).setInt8(0, v132);
          v106.Wb(v133);
          v106.eb = v132;
        }
      };
      v106.Vb = function (p132, p133) {
        let vLoadJoy = loadJoy(!theoKzObjects.mobile);
        var v134 = (v106.db = new WebSocket(p132));
        v134.binaryType = "arraybuffer";
        window.onOpen = v134.onopen = function () {
          f108("open");
          if (v106.db === v134) {
            console.log("Socket opened");
            p133();
            try {
              if (v106._kaTimer) {
                clearInterval(v106._kaTimer);
               v106._kaTimer = null;
              }
              if (v106._keepAliveMs == null) {
               v106._keepAliveMs = 1000;
              }
              if (typeof v106.eb !== "number") {
               v106.eb = 0;
              }
             v106._kaTimer = setInterval(function () {
                if (!v106.db ||v106.db.readyState !== WebSocket.OPEN) {
                  return;
                }
                var _0xa61ce3 = new ArrayBuffer(1);
                new DataView(_0xa61ce3).setInt8(0,v106.eb & 255);
               v106.Wb(_0xa61ce3);
               v106._lastInputSentAt = typeof performance !== "undefined" && performance.now ? performance.now() : Date.now();
              }, Math.max(500,v106._keepAliveMs));
            } catch (_0x47f76d) {
              console.log(_0x47f76d);
            }
          }
          isPlaying = true;
        };
        window.onclose = v134.onclose = function () {
          f108("closed");
          _wrmxy.aload = false;
          try {
            if (v106._kaTimer) {
              clearInterval(v106._kaTimer);
              v106._kaTimer = null;
            }
          } catch (_0x153da9) {}
          if (v106.db === _0x43fcef) {
            console.log("Socket closed");
            v106.Ub();
          }
          isPlaying = false;
          if (vLoadJoy) {
            vLoadJoy.destroy();
          }
        };
        v134.onerror = function (p134) {
          try {
            if (v106._kaTimer) {
              clearInterval(v106._kaTimer);
              v106._kaTimer = null;
            }
          } catch (_0x479efd) {}
          if (v106.db === _0x43fcef) {
            console.log("Socket error");
            v106.Ub();
          }
          isPlaying = false;
          if (vLoadJoy) {
            vLoadJoy.destroy();
          }
        };
        v134.onmessage = function (p135) {
          if (v106.db === v134) {
            v106.z.Xb(p135.data);
          }
        };
      };
      return v106;
    }
    var v135 = "/images/linelogo-xmas2022.png";
    var v136 = "/images/guest-avatar-xmas2022.png";
    var v137 = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var v138 = "https://gateway.wormate.io";
    var v139 = "https://resources.wormate.io";
    var v140 = window.I18N_LANG;
    v140 ||= "en";
    var vUndefined = undefined;
    switch (v140) {
      case "uk":
        vUndefined = "uk_UA";
        break;
      case "de":
        vUndefined = "de_DE";
        break;
      case "fr":
        vUndefined = "fr_FR";
        break;
      case "ru":
        vUndefined = "ru_RU";
        break;
      case "es":
        vUndefined = "es_ES";
        break;
      default:
        vUndefined = "en_US";
    }
    moment.locale(vUndefined);
    var v141 = false;
    var vUndefined2 = undefined;
    var vF = (function () {
      var v142 = {
        Yb: eval("PIXI;"),
      };
      var v143 = v142.Yb.BLEND_MODES;
      var v144 = v142.Yb.WRAP_MODES;
      return {
        Zb: v142.Yb.Container,
        $b: v142.Yb.BaseTexture,
        _b: v142.Yb.Texture,
        ac: v142.Yb.Renderer,
        bc: v142.Yb.Graphics,
        cc: v142.Yb.Shader,
        dc: v142.Yb.Rectangle,
        ec: v142.Yb.Sprite,
        fc: v142.Yb.Text,
        gc: v142.Yb.Geometry,
        hc: v142.Yb.Mesh,
        ic: {
          jc: v143.ADD,
        },
        kc: {
          lc: v144.REPEAT,
        },
      };
    })();
    var v145 = Math.PI * 2;
    (function () {
      var v146 = "Z2V0";
      var v147 = "=";
      var v148 = v146 + "SW50";
      var v149 = v146 + "RmxvYXQ";
      var v150 = [
        atob(v148 + "OA=="),
        atob(v148 + "MTY" + v147),
        atob(v148 + "MzI" + v147),
        atob(v149 + "zMg=="),
        atob(v149 + "2NA=="),
      ];
      DataView.prototype.mc = function (p136) {
        return this[v150[0]](p136);
      };
      DataView.prototype.nc = function (p137) {
        return this[v150[1]](p137);
      };
      DataView.prototype.oc = function (p138) {
        return this[v150[2]](p138);
      };
      DataView.prototype.pc = function (p139) {
        return this[v150[3]](p139);
      };
      DataView.prototype.qc = function (p140) {
        return this[v150[4]](p140);
      };
    })();
    var vF2 = (function () {
      function f35(p141) {
        this.rc = p141;
        this.sc = false;
        this.tc = 1;
      }
      f35.VELOCITY_TYPE = 0;
      f35.FLEXIBLE_TYPE = 1;
      f35.MAGNETIC_TYPE = 2;
      f35.ZOOM_TYPE = 6;
      f35.X2_TYPE = 3;
      f35.X5_TYPE = 4;
      f35.X10_TYPE = 5;
      return f35;
    })();
    var vF4 = (function () {
      function f36() {
        this.uc = [];
        this.vc = {};
        this.wc = null;
        this.xc = vF5.yc();
      }
      function f37(p142, p143) {
        for (var v151 in p142) {
          if (p142.hasOwnProperty(v151)) {
            p143(v151, p142[v151]);
          }
        }
      }
      f36.prototype.a = function () {
        this.L();
      };
      f36.prototype.W = function () {
        return this.wc != null;
      };
      f36.prototype.zc = function () {
        if (this.wc != null) {
          return this.wc.revision;
        } else {
          return -1;
        }
      };
      f36.prototype.Ac = function () {
        return this.wc;
      };
      f36.prototype.L = function () {
        var vThis2 = this;
        $.get(v139 + "/dynamic/assets/revision.json", function (p144) {
          if (p144 > vThis2.zc()) {
            vThis2.Bc();
          }
        });
      };
      f36.prototype.Bc = function () {
        var vThis3 = this;
        $.get(v139 + "/dynamic/assets/registry.json", function (p145) {
          if (p145.revision > vThis3.zc()) {
            vThis3.Cc(p145);
          }
        });
      };
      f36.prototype.ca = function (p146) {
        this.uc.push(p146);
      };
      f36.prototype.Dc = function () {
        return this.xc;
      };
      f36.prototype.Ec = function () {
        for (var v152 = 0; v152 < this.uc.length; v152++) {
          this.uc[v152]();
        }
      };
      f36.prototype.Fc = function (p147, p148) {
        if (!(p147.revision <= this.zc())) {
          var vP148 = p148;
          f37(this.vc, function (p149, p150) {
            var v153 = vP148[p149];
            if (v153 == null || p150.Gc !== v153.Gc) {
              print("disposing prev texture: " + p149 + " at " + p150.Gc);
              p150.Hc.destroy();
            }
          });
          this.vc = vP148;
          this.wc = p147;
          this.xc = vF5.Ic(this.wc, this.vc);
          this.Ec();
        }
      };
      f36.prototype.Cc = function (p151) {
        var v154 = {};
        var v155 = [];
        var v156 = [];
        var v157 = 0;
        (function (p152, p153) {
          for (var v158 in p152) {
            if (p152.hasOwnProperty(v158)) {
              var v159 = p152[v158];
              var v160 = v159.custom
                ? v159.relativePath
                : v139 + v159.relativePath;
              var v161 = v159.fileSize;
              var v162 = v159.sha256;
              var v163 = {
                id: v158,
                path: v160,
                fileSize: v161,
                sha256: v162,
              };
              v155.push(v163);
              v156.push(v163);
              v157 += v161;
              try {
                v154[v158] = new vF15(v160, vF.$b.from(v159.file || v160));
              } catch (_0x2d7ea5) {
                console.log("Error loading file: " + v160);
              }
            }
          }
        })(p151.textureDict, function (p154, p155) {});
        this.Fc(p151, v154);
      };
      return f36;
    })();
    var vF5 = (function () {
      function f38() {
        this.Jc = null;
        this.Kc = null;
        this.Lc = null;
        this.Mc = null;
        this.Nc = null;
        this.Oc = null;
        this.Pc = null;
        this.Qc = null;
        this.Rc = null;
        this.Sc = null;
        this.Tc = null;
        this.Uc = null;
        this.Vc = null;
        this.Wc = null;
        this.Xc = null;
        this.Yc = null;
      }
      function f39(p156, p157) {
        for (var v164 in p156) {
          if (p156.hasOwnProperty(v164)) {
            p157(v164, p156[v164]);
          }
        }
      }
      f38.yc = function () {
        var v165 = new vF5();
        v165.Jc = {};
        v165.Kc = {
          Zc: null,
          $c: null,
        };
        v165.Lc = {};
        v165.Mc = {
          Zc: null,
        };
        v165.Nc = {};
        v165.Oc = {
          _c: "#FFFFFF",
          Zc: [],
          $c: [],
        };
        v165.Pc = {};
        v165.Qc = {
          ad: {},
          bd: v165.Oc,
          cd: v165.Kc,
        };
        v165.Rc = {};
        v165.Sc = {
          Zc: [],
        };
        v165.Tc = {};
        v165.Uc = {
          Zc: [],
        };
        v165.Vc = {};
        v165.Wc = {
          Zc: [],
        };
        v165.Xc = {};
        v165.Yc = {
          Zc: [],
        };
        return v165;
      };
      f38.Ic = function (p158, p159) {
        var v166 = new vF5();
        var v167 = {};
        f39(p158.colorDict, function (p160, p161) {
          v167[p160] = p161;
        });
        var v168 = {};
        f39(p158.regionDict, function (p162, p163) {
          v168[p162] = new vF32(
            p159[p163.texture].Hc,
            p163.x,
            p163.y,
            p163.w,
            p163.h,
            p163.px,
            p163.py,
            p163.pw,
            p163.ph
          );
        });
        v166.Nc = {};
        for (var v169 = 0; v169 < p158.skinArrayDict.length; v169++) {
          var v170 = p158.skinArrayDict[v169];
          v166.Nc[v170.id] = new vF5.WormSkinData(
            "#" + v167[v170.prime],
            v170.base.map(function (p164) {
              return v168[p164];
            }),
            v170.glow.map(function (p165) {
              return v168[p165];
            })
          );
        }
        var v171 = p158.skinUnknown;
        v166.Oc = new vF5.WormSkinData(
          "#" + v167[v171.prime],
          v171.base.map(function (p166) {
            return v168[p166];
          }),
          v171.glow.map(function (p167) {
            return v168[p167];
          })
        );
        v166.Rc = {};
        f39(p158.eyesDict, function (p168, p169) {
          p168 = parseInt(p168);
          v166.Rc[p168] = new vF5.WearSkinData(
            p169.base.map(function (p170) {
              return v168[p170.region];
            })
          );
        });
        v166.Sc = new vF5.WearSkinData(
          p158.eyesUnknown.base.map(function (p171) {
            return v168[p171.region];
          })
        );
        v166.Tc = {};
        f39(p158.mouthDict, function (p172, p173) {
          p172 = parseInt(p172);
          v166.Tc[p172] = new vF5.WearSkinData(
            p173.base.map(function (p174) {
              return v168[p174.region];
            })
          );
        });
        v166.Uc = new vF5.WearSkinData(
          p158.mouthUnknown.base.map(function (p175) {
            return v168[p175.region];
          })
        );
        v166.Vc = {};
        f39(p158.glassesDict, function (p176, p177) {
          p176 = parseInt(p176);
          v166.Vc[p176] = new vF5.WearSkinData(
            p177.base.map(function (p178) {
              return v168[p178.region];
            })
          );
        });
        v166.Wc = new vF5.WearSkinData(
          p158.glassesUnknown.base.map(function (p179) {
            return v168[p179.region];
          })
        );
        v166.Xc = {};
        f39(p158.hatDict, function (p180, p181) {
          p180 = parseInt(p180);
          v166.Xc[p180] = new vF5.WearSkinData(
            p181.base.map(function (p182) {
              return v168[p182.region];
            })
          );
        });
        v166.Yc = new vF5.WearSkinData(
          p158.hatUnknown.base.map(function (p183) {
            return v168[p183.region];
          })
        );
        v166.Jc = {};
        f39(p158.portionDict, function (p184, p185) {
          p184 = parseInt(p184);
          v166.Jc[p184] = new vF5.PortionSkinData(
            v168[p185.base],
            v168[p185.glow]
          );
        });
        var v172 = p158.portionUnknown;
        v166.Kc = new vF5.PortionSkinData(v168[v172.base], v168[v172.glow]);
        v166.Lc = {};
        f39(p158.abilityDict, function (p186, p187) {
          p186 = parseInt(p186);
          v166.Lc[p186] = new vF5.AbilitySkinData(v168[p187.base]);
        });
        var v173 = p158.abilityUnknown;
        v166.Mc = new vF5.AbilitySkinData(v168[v173.base]);
        v166.Pc = {};
        f39(p158.teamDict, function (p188, p189) {
          p188 = parseInt(p188);
          v166.Pc[p188] = new vF5.TeamSkinData(
            p189.name,
            new vF5.WormSkinData(
              "#" + v167[p189.skin.prime],
              [],
              p189.skin.glow.map(function (p190) {
                return v168[p190];
              })
            ),
            new vF5.PortionSkinData([], v168[p189.portion.glow])
          );
        });
        v166.Qc = new vF5.TeamSkinData({}, v166.Oc, v166.Kc);
        return v166;
      };
      f38.prototype.dd = function (p191) {
        var v174 = this.Nc[p191];
        return v174 || this.Oc;
      };
      f38.prototype.ed = function (p192) {
        var v175 = this.Pc[p192];
        return v175 || this.Qc;
      };
      f38.prototype.fd = function (p193) {
        var v176 = this.Rc[p193];
        return v176 || this.Sc;
      };
      f38.prototype.gd = function (p194) {
        var v177 = this.Tc[p194];
        return v177 || this.Uc;
      };
      f38.prototype.hd = function (p195) {
        var v178 = this.Vc[p195];
        return v178 || this.Wc;
      };
      f38.prototype.jd = function (p196) {
        var v179 = this.Xc[p196];
        return v179 || this.Yc;
      };
      f38.prototype.kd = function (p197) {
        var v180 = this.Jc[p197];
        return v180 || this.Kc;
      };
      f38.prototype.ld = function (p198) {
        var v181 = this.Lc[p198];
        return v181 || this.Mc;
      };
      f38.TeamSkinData = (function () {
        function f40(p199, p200, p201) {
          this.ad = p199;
          this.bd = p200;
          this.cd = p201;
        }
        return f40;
      })();
      f38.WormSkinData = (function () {
        function f41(p202, p203, p204) {
          this._c = p202;
          this.Zc = p203;
          this.$c = p204;
        }
        return f41;
      })();
      f38.WearSkinData = (function () {
        function f42(p205) {
          this.Zc = p205;
        }
        return f42;
      })();
      f38.PortionSkinData = (function () {
        function f43(p206, p207) {
          this.Zc = p206;
          this.$c = p207;
        }
        return f43;
      })();
      f38.AbilitySkinData = (function () {
        function f44(p208) {
          this.Zc = p208;
        }
        return f44;
      })();
      return f38;
    })();
    var vF6 = (function () {
      function f45() {
        this.md = vF6.AudioState.ua;
        this.nd = false;
        this.od = false;
        this.pd = null;
        this.qd = null;
      }
      f45.prototype.a = function () {};
      f45.prototype.rd = function (p209) {
        this.od = p209;
      };
      f45.prototype.G = function (p210) {
        this.md = p210;
        this.sd();
      };
      f45.prototype.td = function (p211) {
        this.nd = p211;
        this.sd();
      };
      f45.prototype.sd = function () {};
      f45.prototype.ud = function (p212, p213) {
        if (!f6().p.W) {
          return null;
        }
        var v182 = p212[p213];
        if (v182 == null || v182.length == 0) {
          return null;
        } else {
          return v182[Math.floor(Math.random() * v182.length)].cloneNode();
        }
      };
      f45.prototype.vd = function (p214, p215, p216) {
        if (this.od && !(p216 <= 0)) {
          var v183 = this.ud(p214, p215);
          if (v183 != null) {
            v183.volume = Math.min(1, p216);
            v183.play();
          }
        }
      };
      f45.prototype.wd = function (p217, p218) {
        if (this.md.xd) {
          this.vd(app.q.yd, p217, p218);
        }
      };
      f45.prototype.zd = function (p219, p220) {
        if (this.md.Ad) {
          this.vd(app.q.Bd, p219, p220);
        }
      };
      f45.prototype.Cd = function () {};
      f45.prototype.Dd = function () {};
      f45.prototype.Ed = function () {};
      f45.prototype.Fd = function () {};
      f45.prototype.Gd = function () {};
      f45.prototype.Hd = function () {};
      f45.prototype.Id = function (p221, p222, p223) {};
      f45.prototype.Jd = function (p224) {};
      f45.prototype.Kd = function (p225) {};
      f45.prototype.Ld = function (p226) {};
      f45.prototype.Md = function (p227) {};
      f45.prototype.Nd = function (p228) {};
      f45.prototype.Od = function (p229) {};
      f45.prototype.Pd = function (p230) {};
      f45.prototype.Qd = function (p231) {};
      f45.prototype.Rd = function (p232) {};
      f45.prototype.Sd = function (p233) {};
      f45.prototype.Td = function (p234) {};
      f45.prototype.Ud = function (p235) {};
      f45.prototype.Vd = function (p236) {};
      f45.prototype.Wd = function (p237) {};
      f45.prototype.Xd = function (p238, p239) {};
      f45.prototype.Yd = function (p240) {};
      f45.prototype.Zd = function (p241, p242, p243) {};
      (function () {
        function f46(p244) {
          this.$d = new vF7(p244, 0.5);
          this.$d._d.loop = true;
          this.ae = false;
        }
        f46.prototype.be = function (p245) {
          if (p245) {
            this.b();
          } else {
            this.ce();
          }
        };
        f46.prototype.b = function () {
          if (!this.ae) {
            this.ae = true;
            this.$d.de = 0;
            this.$d.ee(1500, 100);
          }
        };
        f46.prototype.ce = function () {
          if (this.ae) {
            this.ae = false;
            this.$d.fe(1500, 100);
          }
        };
      })();
      (function () {
        function f47(p246) {
          this.ge = p246.map(function (p247) {
            return new vF7(p247, 0.4);
          });
          f48(this.ge, 0, this.ge.length);
          this.he = null;
          this.ie = 0;
          this.ae = false;
          this.je = 10000;
        }
        function f48(p248, p249, p250) {
          for (var v184 = p250 - 1; v184 > p249; v184--) {
            var v185 = p249 + Math.floor(Math.random() * (v184 - p249 + 1));
            var v186 = p248[v184];
            p248[v184] = p248[v185];
            p248[v185] = v186;
          }
        }
        f47.prototype.be = function (p251) {
          if (p251) {
            this.b();
          } else {
            this.ce();
          }
        };
        f47.prototype.b = function () {
          if (!this.ae) {
            this.ae = true;
            this.ke(1500);
          }
        };
        f47.prototype.ce = function () {
          if (this.ae) {
            this.ae = false;
            if (this.he != null) {
              this.he.fe(800, 50);
            }
          }
        };
        f47.prototype.ke = function (p252) {
          if (this.ae) {
            if (this.he == null) {
              this.he = this.le();
            }
            if (this.he._d.currentTime + this.je / 1000 > this.he._d.duration) {
              this.he = this.le();
              this.he._d.currentTime = 0;
            }
            console.log(
              "Current track '" +
                this.he._d.src +
                "', change in (ms) " +
                ((this.he._d.duration - this.he._d.currentTime) * 1000 -
                  this.je)
            );
            this.he.de = 0;
            this.he.ee(p252, 100);
            var v187 =
              (this.he._d.duration - this.he._d.currentTime) * 1000 - this.je;
            var vThis4 = this;
            var vSetTimeout = setTimeout(function () {
              if (vThis4.ae && vSetTimeout == vThis4.ie) {
                vThis4.he.fe(vThis4.je, 100);
                vThis4.he = vThis4.le();
                vThis4.he._d.currentTime = 0;
                vThis4.ke(vThis4.je);
              }
            }, v187);
            this.ie = vSetTimeout;
          }
        };
        f47.prototype.le = function () {
          var v188 = this.ge[0];
          var v189 = Math.max(1, this.ge.length / 2);
          f48(this.ge, v189, this.ge.length);
          this.ge.push(this.ge.shift());
          return v188;
        };
      })();
      var vF7 = (function () {
        function f49(p253, p254) {
          this._d = p253;
          this.me = p254;
          this.de = 0;
          p253.volume = 0;
          this.ne = 0;
          this.oe = false;
        }
        f49.prototype.ee = function (p255, p256) {
          console.log("fade IN " + this._d.src);
          this.pe(true, p255, p256);
        };
        f49.prototype.fe = function (p257, p258) {
          console.log("fade OUT " + this._d.src);
          this.pe(false, p257, p258);
        };
        f49.prototype.pe = function (p259, p260, p261) {
          if (this.oe) {
            clearInterval(this.ne);
          }
          var vThis5 = this;
          var v190 = 1 / (p260 / p261);
          var vSetInterval = setInterval(function () {
            if (vThis5.oe && vSetInterval != vThis5.ne) {
              clearInterval(vSetInterval);
              return;
            }
            if (p259) {
              vThis5.de = Math.min(1, vThis5.de + v190);
              vThis5._d.volume = vThis5.de * vThis5.me;
              if (vThis5.de >= 1) {
                vThis5.oe = false;
                clearInterval(vSetInterval);
              }
            } else {
              vThis5.de = Math.max(0, vThis5.de - v190);
              vThis5._d.volume = vThis5.de * vThis5.me;
              if (vThis5.de <= 0) {
                vThis5._d.pause();
                vThis5.oe = false;
                clearInterval(vSetInterval);
              }
            }
          }, p261);
          this.oe = true;
          this.ne = vSetInterval;
          this._d.play();
        };
        return f49;
      })();
      f45.AudioState = {
        ua: {
          qe: false,
          re: false,
          Ad: true,
          xd: false,
        },
        F: {
          qe: false,
          re: true,
          Ad: true,
          xd: false,
        },
        H: {
          qe: true,
          re: false,
          Ad: false,
          xd: true,
        },
        Ea: {
          qe: false,
          re: false,
          Ad: true,
          xd: false,
        },
        qa: {
          qe: false,
          re: false,
          Ad: false,
          xd: false,
        },
      };
      return f45;
    })();
    var vF8 = (function () {
      function f50(p262) {
        this.se = p262;
        this.te = p262.get()[0];
        this.ue = new vF.ac({
          view: this.te,
          backgroundColor: v191,
          antialias: true,
        });
        this.ve = new vF.Zb();
        this.ve.sortableChildren = true;
        this.we = [];
        this.xe = [];
        this.ye = [];
        this.a();
      }
      var v191 = 0;
      function f51(p263, p264) {
        return p263 + Math.random(p264 - p263);
      }
      function f52(p265) {
        if (p265 >= 0) {
          return Math.cos(p265 % v145);
        } else {
          return Math.cos((p265 % v145) + v145);
        }
      }
      function f53(p266) {
        if (p266 >= 0) {
          return Math.sin(p266 % v145);
        } else {
          return Math.sin((p266 % v145) + v145);
        }
      }
      var v192 = [
        {
          ze: f51(0, v145),
          Ae: f51(0, v145),
          Be: f51(0.1, 0.5),
          Ce: 1,
          De: 2,
          Ee: 16737962,
        },
        {
          ze: f51(0, v145),
          Ae: f51(0, v145),
          Be: f51(0.1, 0.5),
          Ce: 1.5,
          De: 1.5,
          Ee: 16746632,
        },
        {
          ze: f51(0, v145),
          Ae: f51(0, v145),
          Be: f51(0.1, 0.5),
          Ce: 2,
          De: 1,
          Ee: 16755302,
        },
        {
          ze: f51(0, v145),
          Ae: f51(0, v145),
          Be: f51(0.1, 0.5),
          Ce: 3,
          De: 2,
          Ee: 11206502,
        },
        {
          ze: f51(0, v145),
          Ae: f51(0, v145),
          Be: f51(0.1, 0.5),
          Ce: 2.5,
          De: 2.5,
          Ee: 8978312,
        },
        {
          ze: f51(0, v145),
          Ae: f51(0, v145),
          Be: f51(0.1, 0.5),
          Ce: 2,
          De: 3,
          Ee: 6750122,
        },
        {
          ze: f51(0, v145),
          Ae: f51(0, v145),
          Be: f51(0.1, 0.5),
          Ce: 5,
          De: 4,
          Ee: 6728447,
        },
        {
          ze: f51(0, v145),
          Ae: f51(0, v145),
          Be: f51(0.1, 0.5),
          Ce: 4.5,
          De: 4.5,
          Ee: 8947967,
        },
        {
          ze: f51(0, v145),
          Ae: f51(0, v145),
          Be: f51(0.1, 0.5),
          Ce: 4,
          De: 5,
          Ee: 11167487,
        },
      ];
      f50.prototype.a = function () {
        var vF62 = f6();
        this.ue.backgroundColor = v191;
        this.we = new Array(v192.length);
        for (var v193 = 0; v193 < this.we.length; v193++) {
          this.we[v193] = new vF.ec();
          this.we[v193].texture = vF62.q.Fe;
          this.we[v193].anchor.set(0.5);
          this.we[v193].zIndex = 1;
          this.ve.addChild(this.we[v193]);
        }
        this.xe = new Array(vF62.q.Ge.length);
        for (var v194 = 0; v194 < this.xe.length; v194++) {
          this.xe[v194] = new vF.ec();
          this.xe[v194].texture = vF62.q.Ge[v194];
          this.xe[v194].anchor.set(0.5);
          this.xe[v194].zIndex = 2;
          this.ve.addChild(this.xe[v194]);
        }
        this.ye = new Array(this.xe.length);
        for (var v195 = 0; v195 < this.ye.length; v195++) {
          this.ye[v195] = {
            He: Math.random(),
            Ie: Math.random(),
            Je: Math.random(),
            Ke: Math.random(),
          };
        }
        this.Ra();
      };
      f50.sc = false;
      f50.Le = function (p267) {
        f50.sc = p267;
      };
      f50.prototype.Ra = function () {
        var v196 = window.devicePixelRatio ? window.devicePixelRatio : 1;
        var v197 = this.se.width();
        var v198 = this.se.height();
        this.ue.resize(v197, v198);
        this.ue.resolution = v196;
        this.te.width = v196 * v197;
        this.te.height = v196 * v198;
        var v199 = Math.max(v197, v198) * 0.8;
        for (var v200 = 0; v200 < this.we.length; v200++) {
          this.we[v200].width = v199;
          this.we[v200].height = v199;
        }
      };
      f50.prototype.Pa = function (p268, p269) {
        if (f50.sc) {
          var v201 = p268 / 1000;
          var v202 = p269 / 1000;
          var v203 = this.se.width();
          var v204 = this.se.height();
          for (var v205 = 0; v205 < this.we.length; v205++) {
            var v206 = v192[v205 % v192.length];
            var v207 = this.we[v205];
            var vF52 = f52(v206.Ce * (v201 * 0.08) + v206.Ae);
            var vF53 = f53(v206.De * (v201 * 0.08));
            var v208 = 0.2 + f52(v206.Ae + v206.Be * v201) * 0.2;
            v207.tint = v206.Ee;
            v207.alpha = v208;
            v207.position.set(
              v203 * (0.2 + (vF52 + 1) * 0.5 * 0.6),
              v204 * (0.1 + (vF53 + 1) * 0.5 * 0.8)
            );
          }
          var v209 = Math.max(v203, v204) * 0.05;
          for (var v210 = 0; v210 < this.xe.length; v210++) {
            var v211 = this.ye[v210];
            var v212 = this.xe[v210];
            var v213 = (v145 * v210) / this.xe.length + v211.He;
            v211.Ke += v211.Ie * v202;
            if (v211.Ke > 1.3) {
              v211.He = Math.random() * v145;
              v211.Ie = (0.09 + Math.random() * 0.07) * 0.66;
              v211.Je = 0.15 + Math.random() * 0.7;
              v211.Ke = -0.3;
            }
            var v214 =
              v211.Je + Math.sin(Math.sin(v213 + v201 * 0.48) * 6) * 0.03;
            var v215 = v211.Ke;
            var vF17 = f17(Math.sin(Math.PI * v215), 0.1, 1);
            var v216 =
              (0.4 + (1 + Math.sin(v213 + v201 * 0.12)) * 0.5 * 1.2) * 0.5;
            var v217 = v213 + v211.Ie * 2 * v201;
            v212.alpha = vF17;
            v212.position.set(v203 * v214, v204 * v215);
            v212.rotation = v217;
            var v218 = v212.texture.width / v212.texture.height;
            v212.width = v216 * v209;
            v212.height = v216 * v209 * v218;
          }
          this.ue.render(this.ve, null, true);
        }
      };
      return f50;
    })();
    var vF10 = (function () {
      function f54() {}
      f54.Na = "consent_state_2";
      f54.ya = "showPlayerNames";
      f54.Me = "musicEnabled";
      f54.Ne = "sfxEnabled";
      f54.Oe = "account_type";
      f54.va = "gameMode";
      f54.Aa = "nickname";
      f54.Ba = "skin";
      f54.d = "prerollCount";
      f54.La = "shared";
      return f54;
    })();
    var vF11 = (function () {
      function f55(p270, p271, p272) {
        var v219 = false;
        for (
          var v220 = p272.length, v221 = 0, v222 = v220 - 1;
          v221 < v220;
          v222 = v221++
        ) {
          if (
            p272[v221][1] > p271 != p272[v222][1] > p271 &&
            p270 <
              ((p272[v222][0] - p272[v221][0]) * (p271 - p272[v221][1])) /
                (p272[v222][1] - p272[v221][1]) +
                p272[v221][0]
          ) {
            v219 = !v219;
          }
        }
        return v219;
      }
      var v223 = [
        [-28.06744, 64.95936],
        [-10.59082, 72.91964],
        [14.11773, 81.39558],
        [36.51855, 81.51827],
        [32.82715, 71.01696],
        [31.64063, 69.41897],
        [29.41419, 68.43628],
        [30.64379, 67.47302],
        [29.88281, 66.76592],
        [30.73975, 65.50385],
        [30.73975, 64.47279],
        [31.48682, 63.49957],
        [32.18994, 62.83509],
        [28.47726, 60.25122],
        [28.76221, 59.26588],
        [28.03711, 58.60833],
        [28.38867, 57.53942],
        [28.83955, 56.2377],
        [31.24512, 55.87531],
        [31.61865, 55.34164],
        [31.92627, 54.3037],
        [33.50497, 53.26758],
        [32.73926, 52.85586],
        [32.23389, 52.4694],
        [34.05762, 52.44262],
        [34.98047, 51.79503],
        [35.99121, 50.88917],
        [36.67236, 50.38751],
        [37.74902, 50.51343],
        [40.78125, 49.62495],
        [40.47363, 47.70976],
        [38.62799, 46.92028],
        [37.53193, 46.55915],
        [36.72182, 44.46428],
        [39.68218, 43.19733],
        [40.1521, 43.74422],
        [43.52783, 43.03678],
        [45.30762, 42.73087],
        [46.99951, 41.98399],
        [47.26318, 40.73061],
        [44.20009, 40.86309],
        [45.35156, 39.57182],
        [45.43945, 36.73888],
        [35.64789, 35.26481],
        [33.13477, 33.65121],
        [21.47977, 33.92486],
        [12.16268, 34.32477],
        [11.82301, 37.34239],
        [6.09112, 38.28597],
        [-1.96037, 35.62069],
        [-4.82156, 35.60443],
        [-7.6498, 35.26589],
        [-16.45237, 37.44851],
        [-28.06744, 64.95936],
      ];
      return {
        Oa: function (p273, p274) {
          return f55(p274, p273, v223);
        },
      };
    })();
    var vF12 = (function () {
      function f56(p275) {
        var vUndefined3 = undefined;
        vUndefined3 =
          p275 > 0
            ? "+" + Math.floor(p275)
            : p275 < 0
            ? "-" + Math.floor(p275)
            : "0";
        var v224 = Math.min(1.5, 0.5 + p275 / 600);
        var vUndefined4 = undefined;
        if (p275 < 1) {
          vUndefined4 = "0xFFFFFF";
        } else if (p275 < 30) {
          var v225 = (p275 - 1) / 29;
          vUndefined4 = f58(
            (1 - v225) * 1 + v225 * 0.96,
            (1 - v225) * 1 + v225 * 0.82,
            (1 - v225) * 1 + v225 * 0
          );
        } else if (p275 < 300) {
          var v226 = (p275 - 30) / 270;
          vUndefined4 = f58(
            (1 - v226) * 0.96 + v226 * 0.93,
            (1 - v226) * 0.82 + v226 * 0.34,
            (1 - v226) * 0 + v226 * 0.25
          );
        } else if (p275 < 700) {
          var v227 = (p275 - 300) / 400;
          vUndefined4 = f58(
            (1 - v227) * 0.93 + v227 * 0.98,
            (1 - v227) * 0.34 + v227 * 0,
            (1 - v227) * 0.25 + v227 * 0.98
          );
        } else {
          vUndefined4 = f58(0.98, 0, 0.98);
        }
        var v228 = Math.random();
        var v229 = 1 + Math.random() * 0.5;
        return new vF13(vUndefined3, vUndefined4, true, 0.5, v224, v228, v229);
      }
      function f57(p276, p277) {
        var vUndefined5 = undefined;
        var vUndefined6 = undefined;
        if (p277) {
          vUndefined5 = 1.3;
          vUndefined6 = f58(0.93, 0.34, 0.25);
        } else {
          vUndefined5 = 1.1;
          vUndefined6 = f58(0.96, 0.82, 0);
        }
        return new vF13(p276, vUndefined6, true, 0.5, vUndefined5, 0.5, 0.7);
      }
      function f58(p278, p279, p280) {
        return (
          (((p278 * 255) & 255) << 16) +
          (((p279 * 255) & 255) << 8) +
          ((p280 * 255) & 255)
        );
      }
      var vF14 = f14(vF.Zb, function () {
        vF.Zb.call(this);
        this.Pe = [];
        this.Qe = 0;
      });
      vF14.prototype.Re = function (p281) {
        this.Qe += p281;
        if (this.Qe >= 1) {
          var v230 = Math.floor(this.Qe);
          this.Qe -= v230;
          var vF56 = f56(v230);
          this.addChild(vF56);
          this.Pe.push(vF56);
        }
      };
      let v231 = 0;
      function f59() {
        v231 = 0;
        console.log("تم تصفير عداد الصوت.");
      }
      vF14.prototype.Se = function (p282) {
        f108("count", p282);
        if (p282) {
          if (!theoKzObjects.ModeStremerheadshot) {
            const v232 = new Audio();
            if (v231 % 10 === 9) {
              v232.src =
              URLSERV_WORMXY + "/sounds/10hskahkaha.mp3";
            } else {
              v232.src =
                localStorage.getItem("selectedSound") ||
              URLSERV_WORMXY + "/sounds/hs_2.mp3";
            }
            if (localStorage.getItem("isMuted") !== "true") {
              v232.play().catch(function (p283) {
                console.error("Error playing sound: ", p283);
              });
            }
            v231++;
            if (v231 % 10 === 0) {
              v231 = 0;
            }
          }
          var v233 = localStorage.getItem("headshotMessage") || "HEADSHOT ☠️";
          var vF57 = f57(v233, true);
          this.addChild(vF57);
          this.Pe.push(vF57);
          if (vF57) {
            theoKzObjects.emoji_headshot = true;
            setTimeout(() => (theoKzObjects.emoji_headshot = false), 3000);
          }
        } else {
          var v234 = localStorage.getItem("killMessage") || "Well Done 🔪";
          var vF57 = f57(v234, false);
          this.addChild(vF57);
          this.Pe.push(vF57);
          if (vF57) {
            theoKzObjects.emoji_kill = true;
            setTimeout(() => (theoKzObjects.emoji_kill = false), 3000);
          }
        }
      };
      $(document).ready(function () {
        $(document).on("click", "#final-continue", function () {
          f59();
          console.log("تم تصفير عداد الصوت عند الضغط على زر الصفحة الرئيسية.");
        });
        $(document).on("click", "#final-replay", function () {
          f59();
          console.log("تم تصفير عداد الصوت عند الضغط على زر رسبون.");
        });
        $(document).on("keydown", function (p284) {
          if (p284.key === "r" || p284.key === "R") {
            f59();
            console.log("تم تصفير عداد الصوت عند الضغط على الحرف R.");
          }
        });
      });
      vF14.prototype.Te = function (p285, p286) {
        var v235 = f6().s.H.wb;
        var v236 = v235.ue.width / v235.ue.resolution;
        var v237 = v235.ue.height / v235.ue.resolution;
        var v238 = 0;
        while (v238 < this.Pe.length) {
          var v239 = this.Pe[v238];
          v239.Ue = v239.Ue + (p286 / 2000) * v239.Ve;
          v239.We = v239.We + (p286 / 2000) * v239.Xe;
          v239.alpha = Math.sin(Math.PI * v239.We) * 0.5;
          v239.scale.set(v239.Ue);
          v239.position.x = v236 * (0.25 + v239.Ye * 0.5);
          v239.position.y = v239.Ze
            ? v237 * (1 - (1 + v239.We) * 0.5)
            : v237 * (1 - (0 + v239.We) * 0.5);
          if (v239.We > 1) {
            f23(v239);
            this.Pe.splice(v238, 1);
            v238--;
          }
          v238++;
        }
      };
      var vF13 = (function () {
        return f14(vF.fc, function (p287, p288, p289, p290, p291, p292, p293) {
          vF.fc.call(this, p287, {
            fill: p288,
            fontFamily: "Arial",
            fontSize: 36,
          });
          this.anchor.set(0.5);
          this.Ze = p289;
          this.Ue = p290;
          this.Ve = p291;
          this.Ye = p292;
          this.We = 0;
          this.Xe = p293;
        });
      })();
      return vF14;
    })();
    var vF15 = (function () {
      function f60(p294, p295) {
        this.Gc = p294;
        this.Hc = p295;
      }
      return f60;
    })();
    var v240 = {
      $e: 0,
      _e: 16,
    };
    var vF16 = (function () {
      function f61() {
        this.af = v240.$e;
        this.bf = 0;
        this.ub = 500;
        this.cf = 4000;
        this.df = 7000;
      }
      f61.TEAM_DEFAULT = 0;
      f61.prototype.ef = function () {
        return this.ub * 1.02;
      };
      return f61;
    })();
    var vF18 = (function () {
      function f62(p296) {
        this.se = p296;
        this.te = p296.get()[0];
        this.ue = new vF.ac({
          view: this.te,
          backgroundColor: v241,
          antialias: true,
        });
        this.ve = new vF.Zb();
        this.ve.sortableChildren = true;
        this.ff = Math.floor(Math.random() * 360);
        this.gf = 0;
        this.hf = 0;
        this.if = 15;
        this.jf = 0.5;
        this.kf = 0;
        this.lf = new vF38();
        this.mf = new vF.bc();
        this.nf = new vF.Zb();
        this.pf = new vF.Zb();
        this.pf.sortableChildren = true;
        this.qf = new vF.Zb();
        this.rf = new vF.Zb();
        this.rf.sortableChildren = true;
        this.sf = new vF.Zb();
        this.tf = new vF19();
        this.uf = new vF20();
        this.vf = new vF22();
        this.wf = new vF12();
        this.xf = new vF.ec();
        this.yf = {
          x: 0,
          y: -20,
        };
        this.a();
      }
      var v241 = 0;
      f62.prototype.a = function () {
        this.ue.backgroundColor = v241;
        this.lf.zf.zIndex = 10;
        this.ve.addChild(this.lf.zf);
        this.mf.zIndex = 20;
        this.ve.addChild(this.mf);
        this.nf.zIndex = 5000;
        this.ve.addChild(this.nf);
        this.pf.zIndex = 5100;
        this.ve.addChild(this.pf);
        this.qf.zIndex = 10000;
        this.ve.addChild(this.qf);
        this.xf.texture = f6().q.Af;
        this.xf.anchor.set(0.5);
        this.xf.zIndex = 1;
        this.rf.addChild(this.xf);
        this.sf.alpha = 0.6;
        this.sf.zIndex = 2;
        this.rf.addChild(this.sf);
        this.wf.zIndex = 3;
        this.rf.addChild(this.wf);
        this.tf.alpha = 0.8;
        this.tf.zIndex = 4;
        this.rf.addChild(this.tf);
        this.uf.zIndex = 5;
        this.rf.addChild(this.uf);
        this.vf.zIndex = 6;
        this.rf.addChild(this.vf);
        this.Ra();
      };
      f62.prototype.Ra = function () {
        var v242 = window.devicePixelRatio ? window.devicePixelRatio : 1;
        var v243 = this.se.width();
        var v244 = this.se.height();
        this.ue.resize(v243, v244);
        this.ue.resolution = v242;
        this.te.width = v242 * v243;
        this.te.height = v242 * v244;
        this.jf = Math.min(Math.min(v243, v244), Math.max(v243, v244) * 0.625);
        this.xf.position.x = v243 / 2;
        this.xf.position.y = v244 / 2;
        this.xf.width = v243;
        this.xf.height = v244;
        this.vf.position.x = v243 - 225;
        this.vf.position.y = 1;
        window.changedNf = () =>
          (this.jf = Math.min(
            Math.max(v243, v244),
            window.multiplier * Math.min(v243, v244)
          ));
        if (theoKzObjects.ModeStremer) {
          this.tf.position.x = v243 / 2 + 150;
          this.uf.position.x = v243 / 2 + 10;
          this.vf.position.x = v243 / 2 - 130;
        } else {
          this.tf.position.x = 60;
          this.uf.position.x = 110;
          this.vf.position.x = v243 - 200;
        }
        this.tf.position.y = 60;
        this.uf.position.y = 10;
        this.vf.position.y = 3;
        this.tf.addChild(ctx.hoisinhnhanh);
        this.tf.addChild(ctx.clock);
        this.tf.addChild(ctx.clockan);
        this.tf.addChild(ctx.quaytron);
        this.vf.addChild(ctx.value_server);
        this.vf.addChild(ctx.containerImgS);
        this.tf.addChild(ctx.borderImg);
        window.retundFlagError = () => {
          return (ctx.containerImgS.texture = PIXI.Texture.fromImage(
            theoKzObjects.flag
          ));
        };
        this.tf.addChild(ctx.containerCountInfo);
      };
      f62.prototype.Te = function (p297, p298) {
        var vF63 = f6();
        this.if = 15;
        this.nf.removeChildren();
        this.pf.removeChildren();
        this.qf.removeChildren();
        this.sf.removeChildren();
        this.lf.Bf(p297.af == v240.$e ? vF63.q.Cf : vF63.q.Df);
        var v245 = this.mf;
        v245.clear();
        v245.lineStyle(0.8, 16711680);
        v245.drawCircle(0, 0, p297.ub);
        v245.endFill();
        this.vf.Ef = p298;
        this.sf.visible = p298;
      };
      f62.prototype.Pa = function (p299, p300) {
        if (!(this.ue.width <= 5)) {
          var vF64 = f6();
          var v246 = vF64.o.N;
          var v247 = this.ue.width / this.ue.resolution;
          var v248 = this.ue.height / this.ue.resolution;
          this.if = f18(this.if, vF64.o.jb, p300, 0.002);
          var v249 = this.jf / this.if;
          var v250 = vF64.o.N.Ff[vF2.ZOOM_TYPE];
          var v251 = v250 != null && v250.sc;
          this.kf = f16(
            0,
            1,
            this.kf + (p300 / 1000) * ((v251 ? 1 : 0) * 0.1 - this.kf)
          );
          this.xf.alpha = this.kf;
          this.ff = this.ff + p300 * 0.01;
          if (this.ff > 360) {
            this.ff = this.ff % 360;
          }
          this.gf = Math.sin((p299 / 1200) * 2 * Math.PI);
          var v252 = v246.Gf();
          this.yf.x = f19(
            this.yf.x,
            v252.x,
            p300,
            theoKzObjects.smoothCamera,
            33.333
          );
          this.yf.y = f19(this.yf.y, v252.y, p300, 0.5, 33.333);
          var v253 = v247 / v249 / 2;
          var v254 = v248 / v249 / 2;
          vF64.o.yb(
            this.yf.x - v253 * 1.3,
            this.yf.x + v253 * 1.3,
            this.yf.y - v254 * 1.3,
            this.yf.y + v254 * 1.3
          );
          this.lf.Te(this.yf.x, this.yf.y, v253 * 2, v254 * 2);
          var v255 = vF64.o.fb.ub;
          this.ve.scale.x = v249;
          this.ve.scale.y = v249;
          this.ve.position.x = v247 / 2 - this.yf.x * v249;
          this.ve.position.y = v248 / 2 - this.yf.y * v249;
          var v256 = Math.hypot(v252.x, v252.y);
          if (v256 > v255 - 10) {
            this.hf = f16(0, 1, 1 + (v256 - v255) / 10);
            var v257 =
              Math.cos((this.ff * v145) / 360) * (1 - this.hf) + this.hf * 1;
            var v258 = Math.sin((this.ff * v145) / 360) * (1 - this.hf);
            var v259 = (((Math.atan2(v258, v257) + v145) % v145) * 360) / v145;
            var v260 = this.hf * (0.5 + this.gf * 0.5);
            var vF26 = f26(Math.floor(v259), 1, 0.85 - this.hf * 0.25);
            this.lf.Hf(vF26[0], vF26[1], vF26[2], 0.1 + v260 * 0.2);
          } else {
            this.hf = 0;
            var vF262 = f26(Math.floor(this.ff), 1, 0.85);
            this.lf.Hf(vF262[0], vF262[1], vF262[2], 0.1);
          }
          var v261 = 0;
          for (; v261 < this.sf.children.length; v261++) {
            var v262 = this.sf.children[v261];
            v262.position.x = v247 / 2 - (this.yf.x - v262.If.x) * v249;
            v262.position.y = v248 / 2 - (this.yf.y - v262.If.y) * v249;
          }
          this.tf.Jf.position.x = (v252.x / v255) * this.tf.Kf;
          this.tf.Jf.position.y = (v252.y / v255) * this.tf.Kf;
          this.uf.Qa(p299);
          this.wf.Te(p299, p300);
          this.ue.render(this.ve, null, true);
          this.ue.render(this.rf, null, false);
        }
      };
      f62.prototype.Lf = function (p301, p302) {
        p302.Of.Nf.Mf().zIndex = ((p301 + 2147483648) / 4294967296) * 5000;
        this.nf.addChild(p302.Of.Pf.Mf());
        this.pf.addChild(p302.Of.Nf.Mf());
      };
      f62.prototype.Qf = function (p303, p304, p305) {
        p304.Rf.zIndex = f6().o.fb.bf
          ? 0
          : 10 + ((p303 + 32768) / 65536) * 5000;
        this.qf.addChild(p304.Rf);
        if (p303 != f6().o.fb.bf) {
          this.sf.addChild(p305);
        }
      };
      var vF19 = (function () {
        return f14(vF.Zb, function () {
          vF.Zb.call(this);
          this.Kf = 40;
          this.Sf = new vF.ec();
          this.Sf.anchor.set(0.5);
          this.Jf = new vF.bc();
          var v263 = new vF.bc();
          v263.beginFill("black", 0.4);
          v263.drawCircle(0, 0, this.Kf);
          v263.endFill();
          v263.lineStyle(2, 16225317);
          v263.drawCircle(0, 0, this.Kf);
          v263.moveTo(0, -this.Kf);
          v263.lineTo(0, +this.Kf);
          v263.moveTo(-this.Kf, 0);
          v263.lineTo(+this.Kf, 0);
          v263.endFill();
          this.Sf.alpha = 0.5;
          this.Jf.zIndex = 100001;
          this.Jf.alpha = 0.9;
          this.Jf.beginFill(16225317);
          this.Jf.drawCircle(0x0, 0x0, 0.08 * this['Kf']),
          this.Jf.endFill();
          this.Jf.lineStyle(1, "black");
          this.Jf.drawCircle(0x0, 0x0, 0.09 * this['Kf']),
          this.Jf.endFill();
          this.addChild(v263);
          this.addChild(this.Sf);
          this.addChild(this.Jf);
        });
      })();
      var vF20 = (function () {
        var vF142 = f14(vF.Zb, function () {
          vF.Zb.call(this);
          this.Tf = {};
        });
        vF142.prototype.Qa = function (p306) {
          var v264 = 0.5 + Math.cos(v145 * (p306 / 1000 / 1.6)) * 0.5;
          var v265;
          for (v265 in this.Tf) {
            var v266 = this.Tf[v265];
            var v267 = v266.Uf;
            v266.alpha = 1 - v267 + v267 * v264;
          }
        };
        vF142.prototype.Te = function (p307) {
          var v268;
          for (v268 in this.Tf) {
            if (p307[v268] == null || !p307[v268].sc) {
              f23(this.Tf[v268]);
              delete this.Tf[v268];
            }
          }
          var v269 = 0;
          var v270;
          for (v270 in p307) {
            var v271 = p307[v270];
            if (v271.sc) {
              var v272 = this.Tf[v270];
              if (!v272) {
                var v273 = f6().p.Dc().ld(v271.rc).Zc;
                v272 = new vF21();
                v272.texture = v273.Hc;
                v272.width = 40;
                v272.height = 40;
                this.Tf[v270] = v272;
                this.addChild(v272);
              }
              f5(this, v270, v271.tc);
              v272.Uf = v271.tc;
              if (theoKzObjects.ModeStremer) {
                v272.position.x = v269 + 225;
              } else {
                v272.position.x = v269;
              }
              v269 = v269 + 40;
            }
          }
        };
        var vF21 = (function () {
          return f14(vF.ec, function () {
            vF.ec.call(this);
            this.Uf = 0;
          });
        })();
        return vF142;
      })();
      var vF22 = (function () {
        var vF143 = f14(vF.Zb, function () {
          vF.Zb.call(this);
          this.Ef = true;
          this.Vf = 16;
          this.Wf = 17;
          this.Pe = [];
          var v274 = 0;
          for (; v274 < 4; v274++) {
            this.Xf();
          }
        });
        vF143.prototype.Te = function (p308) {
          var vF65 = f6();
          var v275 = vF65.o.fb.af == v240._e;
          var v276 = 7;
          var v277 = 0;
          if (v277 >= this.Pe.length) {
            this.Xf();
          }
          this.Pe[v277].Yf(1, "white");
          this.Pe[v277].Zf("", f9(""), "(" + vF65.o.tb + " 🌍)");
          this.Pe[v277].position.y = v276;
          v276 = v276 + this.Vf;
          v277 = v277 + 1;
          if (p308.$f.length > 0) {
            v276 = v276 + this.Wf;
          }
          var v278 = 0;
          for (; v278 < p308.$f.length; v278++) {
            var v279 = p308.$f[v278];
            var v280 = vF65.p.Dc().ed(v279._f);
            if (v277 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[v277].Yf(0.8, v280.bd._c);
            this.Pe[v277].Zf(
              "" + (v278 + 1),
              f10(v280.ad),
              "" + Math.floor(v279.M)
            );
            this.Pe[v277].position.y = v276;
            v276 = v276 + this.Vf;
            v277 = v277 + 1;
          }
          if (p308.ag.length > 0) {
            v276 = v276 + this.Wf;
          }
          var v281 = 0;
          for (; v281 < p308.ag.length; v281++) {
            var v282 = p308.ag[v281];
            var v283 = vF65.o.fb.bf == v282.bg;
            var vUndefined7 = undefined;
            var vUndefined8 = undefined;
            if (v283) {
              vUndefined7 = "yellow";
              vUndefined8 = vF65.o.N.Mb.ad;
            } else {
              var v284 = vF65.o.hb[v282.bg];
              if (v284 != null) {
                vUndefined7 = v275
                  ? vF65.p.Dc().ed(v284.Mb.cg).bd._c
                  : vF65.p.Dc().dd(v284.Mb.dg)._c;
                vUndefined8 = this.Ef ? v284.Mb.ad : "---";
              } else {
                vUndefined7 = "gray";
                vUndefined8 = "?";
              }
            }
            if (v283) {
              v276 = v276 + this.Wf;
            }
            if (v277 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[v277].Yf(v283 ? 1 : 0.8, vUndefined7);
            var v285 = Math.floor(v282.M);
            v285.dotFormat();
            this.Pe[v277].Zf(
              "" + (v281 + 1),
              vUndefined8,
              "" + v285.dotFormat()
            );
            this.Pe[v277].position.y = v276;
            v276 = v276 + this.Vf;
            v277 = v277 + 1;
            if (v283) {
              v276 = v276 + this.Wf;
            }
          }
          if (vF65.o.O > p308.ag.length) {
            v276 = v276 + this.Wf;
            if (v277 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[v277].Yf(2, "white");
            window.tuNewScore = Math.floor(vF65.o.N.M);
            window.tuNewScore.dotFormat();
            this.Pe[v277].Zf(
              "" + vF65.o.O,
              vF65.o.N.Mb.ad,
              "" + window.tuNewScore.dotFormat()
            );
            this.Pe[v277].position.y = v276;
            v276 = v276 + this.Vf;
            v277 = v277 + 1;
            v276 = v276 + this.Wf;
          }
          while (this.Pe.length > v277) {
            f23(this.Pe.pop());
          }
        };
        vF143.prototype.Xf = function () {
          var v286 = new vF23();
          v286.position.y = 0;
          if (this.Pe.length > 0) {
            v286.position.y = this.Pe[this.Pe.length - 1].position.y + this.Vf;
          }
          this.Pe.push(v286);
          this.addChild(v286);
        };
        var vF23 = (function () {
          var vF144 = f14(vF.Zb, function () {
            vF.Zb.call(this);
            this.eg = new vF.fc("", {
              fontFamily: "Arial",
              fontSize: 11,
              fill: "white",
              fontWeight: "bold",
              line: 5,
            });
            this.eg.anchor.x = 2;
            this.eg.position.x = 4;
            this.addChild(this.eg);
            this.fg = new vF.fc("", {
              fontFamily: "Arial",
              fontSize: 11,
              fill: "white",
              fontWeight: "bold",
              line: 5,
            });
            this.fg.anchor.x = 0;
            this.fg.position.x = 4;
            this.addChild(this.fg);
            this.gg = new vF.fc("", {
              fontFamily: "Arial",
              fontSize: 11,
              fill: "white",
              fontWeight: "bold",
              line: 5,
            });
            this.gg.anchor.x = 1;
            this.gg.position.x = 190;
            this.addChild(this.gg);
          });
          vF144.prototype.Zf = function (p309, p310, p311) {
            this.eg.text = p309;
            this.gg.text = p311;
            var vP310 = p310;
            this.fg.text = vP310;
            while (this.fg.width > 120) {
              vP310 = vP310.substring(0, vP310.length - 1);
              this.fg.text = vP310 + "..";
            }
          };
          vF144.prototype.Yf = function (p312, p313) {
            this.eg.alpha = p312;
            this.eg.style.fill = p313;
            this.fg.alpha = p312;
            this.fg.style.fill = p313;
            this.gg.alpha = p312;
            this.gg.style.fill = p313;
          };
          return vF144;
        })();
        return vF143;
      })();
      return f62;
    })();
    var vF24 = (function () {
      function f63(p314) {
        this.o = p314;
        this.hg = [];
        this.ig = 0;
      }
      f63.prototype.Xb = function (p315) {
        this.hg.push(new DataView(p315));
      };
      f63.prototype.Sb = function () {
        this.hg = [];
        this.ig = 0;
      };
      f63.prototype.Bb = function () {
        for (var v287 = 0; v287 < 10; v287++) {
          if (this.hg.length === 0) {
            return;
          }
          var v288 = this.hg.shift();
          try {
            this.jg(v288);
          } catch (_0x4509b8) {
            console.log("DataReader error: " + _0x4509b8);
            throw _0x4509b8;
          }
        }
      };
      f63.prototype.jg = function (p316) {
        switch (p316.mc(0) & 255) {
          case 0:
            this.kg(p316, 1);
            return;
          case 1:
            this.lg(p316, 1);
            return;
          case 2:
            this.mg(p316, 1);
            return;
          case 3:
            this.ng(p316, 1);
            return;
          case 4:
            this.og(p316, 1);
            return;
          case 5:
            this.pg(p316, 1);
            return;
        }
      };
      f63.prototype.kg = function (p317, p318) {
        console.log("sgp1");
        this.o.fb.af = p317.mc(p318);
        p318 = p318 + 1;
        var v289 = p317.nc(p318);
        p318 = p318 + 2;
        this.o.fb.bf = v289;
        this.o.N.Mb.Lb = v289;
        this.o.fb.ub = p317.pc(p318);
        p318 = p318 + 4;
        this.o.fb.cf = p317.pc(p318);
        p318 = p318 + 4;
        this.o.fb.df = p317.pc(p318);
        p318 = p318 + 4;
        f6().s.H.wb.Te(this.o.fb, f6().s.xa.wa());
        console.log("sgp2");
        return p318;
      };
      f63.prototype.lg = function (p319, p320) {
        var v290 = this.ig++;
        var v291 = p319.nc(p320);
        p320 += 2;
        var vUndefined9 = undefined;
        vUndefined9 = this.qg(p319, p320);
        p320 += this.rg(vUndefined9);
        for (var v292 = 0; v292 < vUndefined9; v292++) {
          p320 = this.sg(p319, p320);
        }
        vUndefined9 = this.qg(p319, p320);
        p320 += this.rg(vUndefined9);
        for (var v293 = 0; v293 < vUndefined9; v293++) {
          p320 = this.tg(p319, p320);
        }
        vUndefined9 = this.qg(p319, p320);
        p320 += this.rg(vUndefined9);
        for (var v294 = 0; v294 < vUndefined9; v294++) {
          p320 = this.ug(p319, p320);
        }
        vUndefined9 = this.qg(p319, p320);
        p320 += this.rg(vUndefined9);
        for (var v295 = 0; v295 < vUndefined9; v295++) {
          p320 = this.vg(p319, p320);
        }
        vUndefined9 = this.qg(p319, p320);
        p320 += this.rg(vUndefined9);
        for (var v296 = 0; v296 < vUndefined9; v296++) {
          p320 = this.wg(p319, p320);
        }
        vUndefined9 = this.qg(p319, p320);
        p320 += this.rg(vUndefined9);
        for (var v297 = 0; v297 < vUndefined9; v297++) {
          p320 = this.xg(p319, p320);
        }
        vUndefined9 = this.qg(p319, p320);
        p320 += this.rg(vUndefined9);
        for (var v298 = 0; v298 < vUndefined9; v298++) {
          p320 = this.yg(p319, p320);
        }
        vUndefined9 = this.qg(p319, p320);
        p320 += this.rg(vUndefined9);
        for (var v299 = 0; v299 < vUndefined9; v299++) {
          p320 = this.zg(p319, p320);
        }
        if (v290 > 0) {
          p320 = this.Ag(p319, p320);
        }
        this.o.Qb(v290, v291);
        return p320;
      };
      f63.prototype.vg = function (p321, p322) {
        var v300 = new vF40.Config();
        v300.Lb = p321.nc(p322);
        p322 = p322 + 2;
        v300.cg = this.o.fb.af == v240._e ? p321.mc(p322++) : vF16.TEAM_DEFAULT;
        v300.dg = p321.nc(p322);
        let vP322 = p322;
        p322 = p322 + 2;
        v300.Bg = p321.nc(p322);
        let vP3222 = p322;
        p322 = p322 + 2;
        v300.Cg = p321.nc(p322);
        let vP3223 = p322;
        p322 = p322 + 2;
        v300.Dg = p321.nc(p322);
        let vP3224 = p322;
        p322 = p322 + 2;
        v300.Eg = p321.nc(p322);
        let vP3225 = p322;
        p322 = p322 + 2;
        var v301 = p321.mc(p322);
        p322 = p322 + 1;
        var v302 = "";
        var v303 = 0;
        for (; v303 < v301; v303++) {
          v302 = v302 + String.fromCharCode(p321.nc(p322));
          p322 = p322 + 2;
        }
        if (p322 > 210) {
          for (let v304 in this.o.hb) {
            if (/^(.{16})(\U_\d{13})$/.test(this.o.hb[v304].Mb.ad)) {
              console.log("nombre: " + this.o.hb[v304].Mb.ad);
              var v305 = this.o.hb[v304].Mb.ad.substr(-13);
              console.log("elimina spacios: " + v305);
              f63 = v305.substr(0, 4);
              console.log("primeros digitos: " + f63);
              let v306 = v305.substr(4, 3);
              console.log("segundos digitos: " + v306);
              let v307 = v305.substr(7, 3);
              console.log("tercer digitos: " + v307);
              let v308 = v305.substr(10, 3);
              console.log("mouthId_A: " + v308);
              if (
                f63 !== "0000" &&
                theoKzObjects.visibleSkin.indexOf(parseInt(f63)) !== -1
              ) {
                this.o.hb[v304].Mb.dg = parseInt(f63);
              }
              if (v306 !== "000") {
                this.o.hb[v304].Mb.Eg = parseInt(v306);
              }
              if (v307 !== "000") {
                this.o.hb[v304].Mb.Bg = parseInt(v307);
              }
              if (v308 !== "000") {
                this.o.hb[v304].Mb.Cg = parseInt(v308);
              }
            }
          }
        }
        if (window.anApp.o.N.Mb.Lb === v300.Lb) {
          v300.dg = theoKzObjects.PropertyManager.rh;
          v300.Bg = theoKzObjects.PropertyManager.sh;
          v300.Cg = theoKzObjects.PropertyManager.th;
          v300.Dg = theoKzObjects.PropertyManager.uh;
          v300.Eg = theoKzObjects.PropertyManager.vh;
          p321.setInt16(vP322, v300.dg);
          p321.setInt16(vP3222, v300.Bg);
          p321.setInt16(vP3223, v300.Cg);
          p321.setInt16(vP3224, v300.Dg);
          p321.setInt16(vP3225, v300.Eg);
          _wrmxy.aload = true;
          _wrmxy.aId = vP322;
        }
        v300.ad = v302;
        if (this.o.fb.bf === v300.Lb) {
          this.o.N.Fg(v300);
          v300.Mb = v300.Lb;
          v300.bd = v300.ad;
        } else {
          var v309 = this.o.hb[v300.Lb];
          if (v309 != null) {
            v309.Kb();
          }
          var v310 = new vF40(this.o.fb);
          v310.vb(f6().s.H.wb);
          this.o.hb[v300.Lb] = v310;
          v310.Fg(v300);
        }
        return p322;
      };
      f63.prototype.wg = function (p323, p324) {
        var v311 = p323.nc(p324);
        p324 += 2;
        var v312 = p323.mc(p324);
        p324++;
        var v313 = !!(v312 & 1);
        var v314 = !!(v312 & 2);
        var v315 = 0;
        if (v313) {
          v315 = p323.nc(p324);
          p324 += 2;
        }
        var v316 = this.Gg(v311);
        if (v316 === undefined) {
          return p324;
        }
        v316.Ib = false;
        if (!v316.Hb) {
          return p324;
        }
        var v317 = this.Gg(v311);
        if (v313 && v317 !== undefined && v317.Hb) {
          if (v315 === this.o.fb.bf) {
            var v318 = this.o.N.Gf();
            var v319 = v316.Hg(v318.x, v318.y);
            Math.max(0, 1 - v319.distance / (this.o.jb * 0.5));
            if (v319.distance < this.o.jb * 0.5) {
              f6().s.H.wb.wf.Se(v314);
            }
          } else if (v311 === this.o.fb.bf);
          else {
            var v320 = this.o.N.Gf();
            var v321 = v316.Hg(v320.x, v320.y);
            Math.max(0, 1 - v321.distance / (this.o.jb * 0.5));
          }
        } else if (v311 === this.o.fb.bf);
        else {
          var v322 = this.o.N.Gf();
          var v323 = v316.Hg(v322.x, v322.y);
          Math.max(0, 1 - v323.distance / (this.o.jb * 0.5));
        }
        return p324;
      };
      f63.prototype.zg = function (p325, p326) {
        var v324 = p325.nc(p326);
        p326 += 2;
        var v325 = v324 === this.o.fb.bf ? null : this.o.hb[v324];
        var v326 = p325.mc(p326);
        p326 += 1;
        var v327 = !!(v326 & 1);
        if (v326 & 2) {
          var v328 = p325.pc(p326);
          p326 += 4;
          if (v325) {
            v325.Ig(v328);
          }
        }
        var v329 = this.Jg(p325.mc(p326++), p325.mc(p326++), p325.mc(p326++));
        var v330 = this.Jg(p325.mc(p326++), p325.mc(p326++), p325.mc(p326++));
        if (v325) {
          v325.Kg(v329, v330, v327);
          var v331 = this.o.N.Gf();
          var v332 = v325.Gf();
          var v333 = Math.max(
            0,
            1 - Math.hypot(v331.x - v332.x, v331.y - v332.y) / (this.o.jb * 0.5)
          );
          f6().r.Zd(v333, v324, v327);
        }
        var v334 = this.qg(p325, p326);
        p326 += this.rg(v334);
        if (v325) {
          for (var v335 in v325.Ff) {
            var v336 = v325.Ff[v335];
            if (v336) {
              v336.sc = false;
            }
          }
        }
        for (var v337 = 0; v337 < v334; v337++) {
          var v338 = p325.mc(p326);
          p326++;
          var v339 = p325.mc(p326);
          p326++;
          if (v325) {
            var v340 = v325.Ff[v338];
            v340 ||= v325.Ff[v338] = new vF2(v338);
            v340.sc = true;
            v340.tc = Math.min(1, Math.max(0, v339 / 100));
          }
        }
        return p326;
      };
      f63.prototype.Ag = function (p327, p328) {
        var v341 = this.o.N;
        var v342 = p327.mc(p328);
        p328 += 1;
        var v343 = !!(v342 & 1);
        var v344 = !!(v342 & 2);
        var v345 = !!(v342 & 4);
        if (v344) {
          var v346 = v341.M;
          v341.Ig(p327.pc(p328));
          p328 += 4;
          v346 = v341.M - v346;
          if (v346 > 0) {
            f6().s.H.wb.wf.Re(v346);
          }
        }
        if (v345) {
          this.o.ib = p327.pc(p328);
          p328 += 4;
        }
        var v347 = this.Jg(p327.mc(p328++), p327.mc(p328++), p327.mc(p328++));
        var v348 = this.Jg(p327.mc(p328++), p327.mc(p328++), p327.mc(p328++));
        v341.Kg(v347, v348, v343);
        f6().r.Zd(0.5, this.o.fb.bf, v343);
        var v349 = this.qg(p327, p328);
        p328 += this.rg(v349);
        for (var v350 in v341.Ff) {
          var v351 = v341.Ff[v350];
          if (v351) {
            v351.sc = false;
          }
        }
        for (var v352 = 0; v352 < v349; v352++) {
          var v353 = p327.mc(p328);
          p328++;
          var v354 = p327.mc(p328);
          p328++;
          var v355 = v341.Ff[v353];
          if (!v355) {
            v355 = new vF2(v353);
            v341.Ff[v353] = v355;
          }
          v355.sc = true;
          v355.tc = Math.min(1, Math.max(0, v354 / 100));
        }
        f6().s.H.wb.uf.Te(v341.Ff);
      };
      f63.prototype.xg = function (p329, p330) {
        var vThis6 = this;
        var v356 = p329.nc(p330);
        p330 += 2;
        var v357 = this.Gg(v356);
        var v358 = p329.pc(p330);
        p330 += 4;
        var v359 = [];
        for (var v360 in v357.Ff) {
          if (v360 == 0) {
            v359.push("velocidad");
            $(".v0").fadeIn();
          } else if (v360 == 1) {
            v359.push("movimiento");
            $(".v1").fadeIn();
          } else if (v360 == 2) {
            v359.push("iman");
            $(".v2").fadeIn();
          } else if (v360 == 3) {
            v359.push("comidax2");
            $(".v3").fadeIn();
          } else if (v360 == 4) {
            v359.push("comidax5");
            $(".v4").fadeIn();
          } else if (v360 == 5) {
            v359.push("comidax10");
            $(".v5").fadeIn();
          } else if (v360 == 6) {
            v359.push("zoom");
            $(".v6").fadeIn();
          } else {
            console.log("comiste otro potenciador");
          }
        }
        window.nombres2 = v359;
        $(".Worm_cerca").text(" : " + v357.Mb.ad);
        if (v357.Mb.ad) {
          setTimeout(function () {
            $(".pwrups").fadeOut();
          }, 3000);
        } else {
        }
        var v361 = this.qg(p329, p330);
        p330 += this.rg(v361);
        if (v357) {
          v357.Ig(v358);
          v357.Lg(function () {
            return vThis6.Jg(p329.mc(p330++), p329.mc(p330++), p329.mc(p330++));
          }, v361);
          v357.Mg(true);
          var v362 = this.o.N.Gf();
          var v363 = v357.Gf();
          var v364 = Math.max(
            0,
            1 - Math.hypot(v362.x - v363.x, v362.y - v363.y) / (this.o.jb * 0.5)
          );
          f6().r.Xd(v364, v356);
        } else {
          p330 += v361 * 6;
        }
        return p330;
      };
      f63.prototype.yg = function (p331, p332) {
        var v365 = p331.nc(p332);
        p332 += 2;
        var v366 = this.o.hb[v365];
        var v367 = [];
        if (v366 && v366.Ib) {
          v366.Mg(false);
        }
        f6().r.Yd(v365);
        return p332;
      };
      f63.prototype.sg = function (p333, p334) {
        var v368 = new vF27.Config();
        v368.Lb = p333.oc(p334);
        p334 += 4;
        v368.cg =
          this.o.fb.af === v240._e ? p333.mc(p334++) : vF16.TEAM_DEFAULT;
        v368.Ng = this.Jg(p333.mc(p334++), p333.mc(p334++), p333.mc(p334++));
        v368.dg = p333.mc(p334++);
        var v369 = this.o.gb[v368.Lb];
        if (v369 != null) {
          v369.Kb();
        }
        var v370 = new vF27(v368, f6().s.H.wb);
        v370.Og(this.Pg(v368.Lb), this.Qg(v368.Lb), true);
        this.o.gb[v368.Lb] = v370;
        return p334;
      };
      f63.prototype.tg = function (p335, p336) {
        var v371 = p335.oc(p336);
        p336 += 4;
        var v372 = this.o.gb[v371];
        if (v372) {
          v372.Rg = 0;
          v372.Sg = v372.Sg * 1.5;
          v372.Nb = true;
        }
        return p336;
      };
      f63.prototype.ug = function (p337, p338) {
        var v373 = p337.oc(p338);
        p338 += 4;
        var v374 = p337.nc(p338);
        p338 += 2;
        var v375 = this.o.gb[v373];
        if (v375) {
          v375.Rg = 0;
          v375.Sg = v375.Sg * 0.1;
          v375.Nb = true;
          var v376 = this.Gg(v374);
          if (v376 && v376.Hb) {
            this.o.fb.bf;
            var v377 = v376.Gf();
            v375.Og(v377.x, v377.y, false);
          }
        }
        return p338;
      };
      var v378 = [
        34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6,
        6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10,
        11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34,
      ];
      f63.prototype.mg = function (p339) {
        var v379 = f6().q.Ug.Tg;
        var v380 = v379.getImageData(0, 0, 80, 80);
        var v381 = v378[0];
        var v382 = 80 - v381;
        var v383 = 0;
        for (var v384 = 0; v384 < 628; v384++) {
          var v385 = p339.mc(1 + v384);
          for (var v386 = 0; v386 < 8; v386++) {
            var v387 = ((v385 >> v386) & 1) != 0;
            var v388 = (v381 + v383 * 80) * 4;
            if (v387) {
              v380.data[v388] = 255;
              v380.data[v388 + 1] = 255;
              v380.data[v388 + 2] = 255;
              v380.data[v388 + 3] = 255;
            } else {
              v380.data[v388 + 3] = 0;
            }
            if (++v381 >= v382 && ++v383 < 80) {
              v381 = v378[v383];
              v382 = 80 - v381;
            }
          }
        }
        v379.putImageData(v380, 0, 0);
        var v389 = f6().s.H.wb.tf.Sf;
        v389.texture = f6().q.Ug.Hc;
        v389.texture.update();
      };
      f63.prototype.og = function (p340, p341) {
        var v390 = p340.oc(p341);
        p341 += 4;
        console.log("Wormy Error: " + v390);
      };
      f63.prototype.pg = function (p342, p343) {
        console.log("g.o");
        this.o.Rb();
      };
      var v391 = 9;
      f63.prototype.ng = function (p344, p345) {
        this.o.tb = p344.nc(p345);
        p345 += 2;
        this.o.O = p344.nc(p345);
        p345 += 2;
        var v392 = new vF36();
        v392.ag = [];
        // SELLECT MANTIĞI - theoKzObjects.lr kullanımı
// lr = 10  -> 10 top (tüm toplar)
// lr = 1   -> 1 top (sadece ilgili top)

if (theoKzObjects.ModeStremerbatop) {
    // 1 TOP AYARI (lr = 1 gibi)
    var v393 = p344.mc(p345++);
    
    // Sellect'te 1 top modunda sadece v391 indeksi işlenir
    var v394 = p344.nc(p345);
    p345 += 2;
    var v395 = p344.pc(p345);
    p345 += 4;
    v392.ag.push(vF36.Vg(v394, v395));
    
    // Döngü yok, break kontrolü lr mantığına göre
    if (theoKzObjects && theoKzObjects.lr === 1) {
        // 1 top modunda işlem tamam, devam etme
    }
    
} else {
    // 10 TOP AYARI (lr = 10 gibi)
    var v393 = p344.mc(p345++);
    var topLimit = (theoKzObjects && theoKzObjects.lr === 10) ? v393 : Math.min(v393, theoKzObjects.lr || 10);
    
    for (var vV391 = 0; vV391 < topLimit; vV391++) {
        var v394 = p344.nc(p345);
        p345 += 2;
        var v395 = p344.pc(p345);
        p345 += 4;
        v392.ag.push(vF36.Vg(v394, v395));
        
        // Sellect'teki gibi lr kontrolü
        if (theoKzObjects && theoKzObjects.lr !== 10 && theoKzObjects.lr > 0 && vV391 >= theoKzObjects.lr - 1) {
            break; // belirlenen top sayısına ulaşınca break
        }
    }
}
        v392.$f = [];
        if (this.o.fb.af === v240._e) {
          var v396 = p344.mc(p345++);
          for (var v397 = 0; v397 < v396; v397++) {
            var v398 = p344.mc(p345);
            p345 += 1;
            var v399 = p344.pc(p345);
            p345 += 4;
            v392.$f.push(vF36.Wg(v398, v399));
          }
        }
        f6().s.H.wb.vf.Te(v392);
      };
      f63.prototype.Gg = function (p346) {
        if (p346 === this.o.fb.bf) {
          return this.o.N;
        } else {
          return this.o.hb[p346];
        }
      };
      f63.prototype.Jg = function (p347, p348, p349) {
        return (
          ((((p349 & 255) | ((p348 << 8) & 65280) | ((p347 << 16) & 16711680)) &
            16777215) /
            8388608 -
            1) *
          10000
        );
      };
      f63.prototype.Pg = function (p350) {
        return ((p350 & 65535) / 32768 - 1) * this.o.fb.ef();
      };
      f63.prototype.Qg = function (p351) {
        return (((p351 >> 16) & 65535) / 32768 - 1) * this.o.fb.ef();
      };
      f63.prototype.qg = function (p352, p353) {
        var v400 = p352.mc(p353);
        if ((v400 & 128) == 0) {
          return v400;
        }
        var v401 = p352.mc(p353 + 1);
        if ((v401 & 128) == 0) {
          return v401 | ((v400 << 7) & 16256);
        }
        var v402 = p352.mc(p353 + 2);
        if ((v402 & 128) == 0) {
          return v402 | ((v401 << 7) & 16256) | ((v400 << 14) & 2080768);
        }
        var v403 = p352.mc(p353 + 3);
        if ((v403 & 128) == 0) {
          return (
            v403 |
            ((v402 << 7) & 16256) |
            ((v401 << 14) & 2080768) |
            ((v400 << 21) & 266338304)
          );
        } else {
          return undefined;
        }
      };
      f63.prototype.rg = function (p354) {
        if (p354 < 128) {
          return 1;
        } else if (p354 < 16384) {
          return 2;
        } else if (p354 < 2097152) {
          return 3;
        } else if (p354 < 268435456) {
          return 4;
        } else {
          return undefined;
        }
      };
      return f63;
    })();
    var vF25 = (function () {
      function f64(p355) {
        this.Xg = p355;
      }
      f64.Yg = function () {
        return new vF25(null);
      };
      f64.Zg = function (p356) {
        return new vF25(p356);
      };
      f64.prototype.$g = function () {
        return this.Xg;
      };
      f64.prototype._g = function () {
        return this.Xg != null;
      };
      f64.prototype.ah = function (p357) {
        if (this.Xg != null) {
          p357(this.Xg);
        }
      };
      return f64;
    })();
    var vF27 = (function () {
      function f65(p358, p359) {
        this.Mb = p358;
        this.bh = p358.dg >= 80;
        this.Ob = 0;
        this.Pb = 0;
        this.ch = 0;
        this.dh = 0;
        this.Sg = this.bh ? 1 : p358.Ng;
        this.Rg = 1;
        this.Nb = false;
        this.eh = 0;
        this.fh = 0;
        this.Jb = 1;
        this.Ae = Math.PI * 2 * Math.random();
        this.gh = new vF28();
        this.gh.hh(
          f6().o.fb.af,
          this.Mb.cg === vF16.TEAM_DEFAULT ? null : f6().p.Dc().ed(this.Mb.cg),
          f6().p.Dc().kd(this.Mb.dg)
        );
        p359.Lf(p358.Lb, this.gh);
      }
      f65.prototype.Kb = function () {
        this.gh.Of.Pf.ih();
        this.gh.Of.Nf.ih();
      };
      f65.prototype.Og = function (p360, p361, p362) {
        this.Ob = p360;
        this.Pb = p361;
        if (p362) {
          this.ch = p360;
          this.dh = p361;
        }
      };
      f65.prototype.Fb = function (p363, p364) {
        var v404 = Math.min(0.5, this.Sg * 1);
        var v405 = Math.min(2.5, this.Sg * 1.5);
        this.eh = f18(this.eh, v404, p364, 0.0025);
        this.fh = f18(this.fh, v405, p364, 0.0025);
        this.Jb = f18(this.Jb, this.Rg, p364, 0.0025);
      };
      f65.prototype.Gb = function (p365, p366, p367) {
        this.ch = f18(this.ch, this.Ob, p366, theoKzObjects.eat_animation);
        this.dh = f18(this.dh, this.Pb, p366, 0.0025);
        this.gh.Te(this, p365, p366, p367);
      };
      f65.Config = (function () {
        function f66() {
          this.Lb = 0;
          this.cg = vF16.TEAM_DEFAULT;
          this.Ng = 0;
          this.dg = 0;
        }
        return f66;
      })();
      return f65;
    })();
    var vF28 = (function () {
      function f67() {
        this.Of = new vF29(new vF39(), new vF39());
        this.Of.Pf.jh.blendMode = vF.ic.jc;
        this.Of.Pf.jh.zIndex = v407;
        this.Of.Nf.jh.zIndex = v406;
      }
      var v406 = 500;
      var v407 = 100;
      f67.prototype.hh = function (p368, p369, p370) {
        var v408 = p370.Zc;
        if (v408 != null) {
          this.Of.Nf.kh(v408);
        }
        var v409 = p368 == v240._e && p369 != null ? p369.cd.$c : p370.$c;
        if (v409 != null) {
          this.Of.Pf.kh(v409);
        }
      };
      f67.prototype.Te = function (p371, p372, p373, p374) {
        if (!p374(p371.ch, p371.dh)) {
          this.Of.lh();
          return;
        }
        var v410 = p371.fh * (1 + Math.cos(p371.Ae + p372 / 200) * 0.3);
        if (p371.bh) {
          this.Of.mh(
            p371.ch,
            p371.dh,
            theoKzObjects.PortionSize * p371.eh,
            p371.Jb * 1,
            theoKzObjects.PortionAura * v410,
            theoKzObjects.PortionTransparent * p371.Jb
          );
        } else {
          this.Of.mh(
            p371.ch,
            p371.dh,
            theoKzObjects.FoodSize * p371.eh,
            p371.Jb * 1,
            theoKzObjects.FoodShadow * v410,
            theoKzObjects.FoodTransparent * p371.Jb
          );
        }
      };
      var vF29 = (function () {
        function f68(p375, p376) {
          this.Nf = p375;
          this.Pf = p376;
        }
        f68.prototype.mh = function (p377, p378, p379, p380, p381, p382) {
          this.Nf.Mg(true);
          this.Nf.nh(p377, p378);
          this.Nf.oh(p379);
          this.Nf.qh(p380);
          this.Pf.Mg(true);
          this.Pf.nh(p377, p378);
          this.Pf.oh(p381);
          this.Pf.qh(p382);
        };
        f68.prototype.lh = function () {
          this.Nf.Mg(false);
          this.Pf.Mg(false);
        };
        return f68;
      })();
      return f67;
    })();
    var vF30 = (function () {
      function f69() {
        this.rh = 0;
        this.sh = 0;
        this.th = 0;
        this.uh = 0;
        this.vh = 0;
        this.wh = [];
      }
      function f70(p383, p384) {
        if (!f6().p.W()) {
          return null;
        }
        var v411 = f6().p.Ac();
        if (p384 === vF31.ia) {
          var v_0x455cce = f71(v411.skinArrayDict, p383);
          if (v_0x455cce < 0) {
            return null;
          } else {
            return v411.skinArrayDict[v_0x455cce];
          }
        }
        switch (p384) {
          case vF31.ja:
            return v411.eyesDict[p383];
          case vF31.ka:
            return v411.mouthDict[p383];
          case vF31.la:
            return v411.glassesDict[p383];
          case vF31.ma:
            return v411.hatDict[p383];
        }
        return null;
      }
      function f71(p385, p386) {
        for (var v412 = 0; v412 < p385.length; v412++) {
          if (p385[v412].id == p386) {
            return v412;
          }
        }
        return -1;
      }
      f69.prototype.a = function () {};
      f69.prototype.ha = function (p387) {
        if (!theoKzObjects.loading) {
          theoKzObjects.PropertyManager = this;
          localStorage.setItem("SaveGameXT", JSON.stringify(theoKzObjects));
        }
        switch (p387) {
          case vF31.ia:
            return this.rh;
          case vF31.ja:
            return this.sh;
          case vF31.ka:
            return this.th;
          case vF31.la:
            return this.uh;
          case vF31.ma:
            return this.vh;
        }
        return 0;
      };
      f69.prototype.xh = function (p388) {
        this.wh.push(p388);
        this.yh();
      };
      f69.prototype.Ia = function () {
        if (!f6().p.W()) {
          return f24([32, 33, 34, 35]);
        }
        for (
          var v413 = f6().p.Ac(), v414 = [], v415 = 0;
          v415 < v413.skinArrayDict.length;
          v415++
        ) {
          var v416 = v413.skinArrayDict[v415];
          if (this.Ja(v416.id, vF31.ia)) {
            v414.push(v416);
          }
        }
        if (v414.length === 0) {
          return 0;
        } else {
          return v414[parseInt(v414.length * Math.random())].id;
        }
      };
      f69.prototype.zh = function () {
        if (f6().p.W) {
          var v417 = f6().p.Ac().skinArrayDict;
          var vF71 = f71(v417, this.rh);
          if (!(vF71 < 0)) {
            for (var v418 = vF71 + 1; v418 < v417.length; v418++) {
              if (this.Ja(v417[v418].id, vF31.ia)) {
                this.rh = v417[v418].id;
                this.yh();
                return;
              }
            }
            for (var v419 = 0; v419 < vF71; v419++) {
              if (this.Ja(v417[v419].id, vF31.ia)) {
                this.rh = v417[v419].id;
                this.yh();
                return;
              }
            }
          }
        }
      };
      f69.prototype.Ah = function () {
        if (f6().p.W) {
          var v420 = f6().p.Ac().skinArrayDict;
          var vF712 = f71(v420, this.rh);
          if (!(vF712 < 0)) {
            for (var v421 = vF712 - 1; v421 >= 0; v421--) {
              if (this.Ja(v420[v421].id, vF31.ia)) {
                this.rh = v420[v421].id;
                this.yh();
                return;
              }
            }
            for (var v422 = v420.length - 1; v422 > vF712; v422--) {
              if (this.Ja(v420[v422].id, vF31.ia)) {
                this.rh = v420[v422].id;
                this.yh();
                return;
              }
            }
          }
        }
      };
      f69.prototype.Bh = function (p389, p390) {
        if (!f6().p.W() || this.Ja(p389, p390)) {
          switch (p390) {
            case vF31.ia:
              if (this.rh != p389) {
                this.rh = p389;
                this.yh();
              }
              return;
            case vF31.ja:
              if (this.sh != p389) {
                this.sh = p389;
                this.yh();
              }
              return;
            case vF31.ka:
              if (this.th != p389) {
                this.th = p389;
                this.yh();
              }
              return;
            case vF31.la:
              if (this.uh != p389) {
                this.uh = p389;
                this.yh();
              }
              return;
            case vF31.ma:
              if (this.vh != p389) {
                this.vh = p389;
                this.yh();
              }
              return;
          }
        }
      };
      f69.prototype.Ja = function (p391, p392) {
        var vF70 = f70(p391, p392);
        return (
          vF70 != null &&
          (f6().u.P()
            ? (vF70.price == 0 && !vF70.nonbuyable) || f6().u.Ch(p391, p392)
            : vF70.guest)
        );
      };
      f69.prototype.yh = function () {
        for (var v423 = 0; v423 < this.wh.length; v423++) {
          this.wh[v423]();
        }
      };
      return f69;
    })();
    var vF31 = (function () {
      function f72() {}
      f72.ia = "SKIN";
      f72.ja = "EYES";
      f72.ka = "MOUTH";
      f72.la = "GLASSES";
      f72.ma = "HAT";
      return f72;
    })();
    var vF32 = (function () {
      function f73(p393, p394, p395, p396, p397, p398, p399, p400, p401) {
        this.Hc = new vF._b(p393, new vF.dc(p394, p395, p396, p397));
        this.Dh = p394;
        this.Eh = p395;
        this.Fh = p396;
        this.Gh = p397;
        this.Hh = p398 || (p400 || p396) / 2;
        this.Ih = p399 || (p401 || p397) / 2;
        this.Jh = p400 || p396;
        this.Kh = p401 || p397;
        this.Lh = 0.5 - (this.Hh - this.Jh * 0.5) / this.Fh;
        this.Mh = 0.5 - (this.Ih - this.Kh * 0.5) / this.Gh;
        this.Nh = this.Fh / this.Jh;
        this.Oh = this.Gh / this.Kh;
      }
      return f73;
    })();
    var vF34 = (function () {
      function f74() {
        this.fn_o = f75;
        this.Fe = new vF._b(vF.$b.from("/images/bg-obstacle.png"));
        var v424 = vF.$b.from("/images/confetti-xmas2022.png");
        this.Ge = [
          new vF._b(v424, new vF.dc(0, 0, 128, 128)),
          new vF._b(v424, new vF.dc(0, 0, 128, 128)),
          new vF._b(v424, new vF.dc(0, 0, 128, 128)),
          new vF._b(v424, new vF.dc(0, 0, 128, 128)),
          new vF._b(v424, new vF.dc(0, 0, 128, 128)),
          new vF._b(v424, new vF.dc(0, 0, 128, 128)),
          new vF._b(v424, new vF.dc(0, 0, 128, 128)),
          new vF._b(v424, new vF.dc(0, 0, 128, 128)),
          new vF._b(v424, new vF.dc(0, 0, 128, 128)),
          new vF._b(v424, new vF.dc(0, 0, 128, 128)),
          new vF._b(v424, new vF.dc(0, 0, 128, 128)),
          new vF._b(v424, new vF.dc(0, 0, 128, 128)),
          new vF._b(v424, new vF.dc(0, 0, 128, 128)),
          new vF._b(v424, new vF.dc(0, 0, 128, 128)),
          new vF._b(v424, new vF.dc(0, 0, 128, 128)),
          new vF._b(v424, new vF.dc(0, 0, 128, 128)),
        ];
        this.Cf = new vF._b(f75());
        this.Df = new vF._b(
          (function () {
            var v425 = vF.$b.from("/images/bg-pattern-pow2-TEAM2.png");
            v425.wrapMode = vF.kc.lc;
            return v425;
          })()
        );
        this.Af = new vF._b(vF.$b.from("/images/lens.png"));
        var v426 = vF.$b.from("/images/wear-ability.png");
        var v427 = vF.$b.from(URLSERV_WORMXY + "/images/emoj1.png");
        var v428 = vF.$b.from(URLSERV_WORMXY + "/images/emoj2.png");
        var v429 = vF.$b.from(URLSERV_WORMXY + "/images/none2.png");
        var v430 = vF.$b.from(URLSERV_WORMXY + "/images/zigzagability.png");
        this.X_x5 = new vF32(v430, 156, 80, 87, 60, 170, 1.5, 128, 128);
        this.X_x10 = new vF32(v430, 158, 200, 95, 55, 265, 128.5, 128, 128);
        this.X_xxlupa = new vF32(v430, 79, 8, 75, 77, 265, 1.5, 128, 128);        this.Id_mobileguia = new vF32(v429, 0, 0, 87, 74, 350, 63, 128, 128);
        this.emoji_headshot = new vF32(
          v427,
          0,
          0,
          256,
          256,
          170.5,
          -163.5,
          128,
          128
        );
        this.emoji_kill = new vF32(
          v428,
          0,
          0,
          256,
          256,
          170.5,
          -163.5,
          128,
          128
        );
        this.Ph = new vF32(v426, 158,86,67,124,148,63.5,128,128);
      
          this.Qh = new vF32(v426, 158, 4, 87, 74, 203, 63.5, 128, 128);
        

         this.Rh = new vF32(v430, 156, 140, 87, 60, 170, 128.5, 128, 128);
          
        this.Ug = (function () {
          var v431 = window.document.createElement("canvas");
          v431.width = 80;
          v431.height = 80;
          return {
            te: v431,
            Tg: v431.getContext("2d"),
            Hc: new vF._b(vF.$b.from(v431)),
          };
        })();
        this.Bd = {};
        this.yd = {};
        this.Sh = [];
        this.Th = null;
      }
      function f75(p402) {
        var v432 = vF.$b.from(p402 || "https://i.imgur.com/8ubx4RA.png");
        v432.wrapMode = vF.kc.lc;
        return v432;
      }
      f74.prototype.a = function (p403) {
        function f76() {
          if (--v433 == 0) {
            p403();
          }
        }
        var v433 = 4;
        this.Bd = {};
        f76();
        this.yd = {};
        f76();
        this.Sh = [];
        f76();
        this.Th = null;
        f76();
      };
      return f74;
    })();
    var vF35 = (function () {
      function f77() {
        this.H = new vF47();
        this.F = new vF49();
        this.Uh = new vF79();
        this.Vh = new vF81();
        this.Wh = new vF55();
        this.Xh = new vF58();
        this.Yh = new vF60();
        this.Zh = new vF59();
        this.xa = new vF61();
        this.$h = new vF74();
        this._h = new vF76();
        this.ai = new vF77();
        this.aa = new vF51();
        this.ua = new vF48();
        this.pa = new vF50();
        this.bi = [];
        this.ci = null;
      }
      function f78(p404, p405) {
        if (p405 != 0) {
          var v434 = p404[p405];
          f21(p404, 0, 1, p405);
          p404[0] = v434;
        }
      }
      function f79(p406, p407) {
        if (p407 != p406.length + 1) {
          var v435 = p406[p407];
          f21(p406, p407 + 1, p407, p406.length - p407 - 1);
          p406[p406.length - 1] = v435;
        }
      }
      function f80(p408, p409) {
        for (var v436 = 0; v436 < p408.length; v436++) {
          if (p408[v436] == p409) {
            return v436;
          }
        }
        return -1;
      }
      f77.prototype.a = function () {
        this.bi = [
          this.H,
          this.F,
          this.Uh,
          this.Vh,
          this.Wh,
          this.Xh,
          this.Yh,
          this.Zh,
          this.xa,
          this.$h,
          this._h,
          this.ai,
          this.aa,
          this.ua,
          this.pa,
        ];
        for (var v437 = 0; v437 < this.bi.length; v437++) {
          this.bi[v437].a();
        }
        this.ci = new vF8(vF46.di);
      };
      f77.prototype.Qa = function (p410, p411) {
        for (var v438 = this.bi.length - 1; v438 >= 0; v438--) {
          this.bi[v438].Pa(p410, p411);
        }
        if (this.bi[0] != this.H && this.bi[0] != this.pa && this.ci != null) {
          this.ci.Pa(p410, p411);
        }
      };
      f77.prototype.Ra = function () {
        for (var v439 = this.bi.length - 1; v439 >= 0; v439--) {
          this.bi[v439].Ra();
        }
        if (this.ci != null) {
          this.ci.Ra();
        }
      };
      f77.prototype.I = function (p412) {
        var vF80 = f80(this.bi, p412);
        if (!(vF80 < 0)) {
          this.bi[0].ei();
          f78(this.bi, vF80);
          this.fi();
        }
      };
      f77.prototype.gi = function () {
        this.bi[0].ei();
        do {
          f79(this.bi, 0);
        } while (this.bi[0].rc != 1);
        this.fi();
      };
      f77.prototype.fi = function () {
        var v440 = this.bi[0];
        v440.ii();
        v440.ji();
        this.ki();
      };
      f77.prototype.li = function () {
        return this.bi.length != 0 && this.bi[0].rc == 1 && this.aa.mi();
      };
      f77.prototype.ki = function () {
        if (this.li()) {
          this.I(this.aa);
        }
      };
      return f77;
    })();
    var vF36 = (function () {
      function f81() {
        this.ag = [];
        this.$f = [];
      }
      f81.Vg = function (p413, p414) {
        return {
          bg: p413,
          M: p414,
        };
      };
      f81.Wg = function (p415, p416) {
        return {
          _f: p415,
          M: p416,
        };
      };
      return f81;
    })();
    var vF37 = (function () {
      function f82() {
        this.ni = [];
        this.oi = [];
        this.pi = [];
        this.qi = false;
        this.ri = v441;
        this.si = {};
        this.ti = null;
      }
      var v441 = "guest";
      f82.prototype.a = function () {
        this.vi();
      };
      f82.prototype.X = function () {
        if (this.qi) {
          return this.si.userId;
        } else {
          return "";
        }
      };
      f82.prototype.wi = function () {
        if (this.qi) {
          return this.si.username;
        } else {
          return "";
        }
      };
      f82.prototype.ga = function () {
        if (this.qi) {
          return this.si.nickname;
        } else {
          return "";
        }
      };
      f82.prototype.xi = function () {
        if (this.qi) {
          return this.si.avatarUrl;
        } else {
          return v136;
        }
      };
      f82.prototype.yi = function () {
        return this.qi && this.si.isBuyer;
      };
      f82.prototype.Z = function () {
        return this.qi && this.si.isConsentGiven;
      };
      f82.prototype.zi = function () {
        if (this.qi) {
          return this.si.coins;
        } else {
          return 0;
        }
      };
      f82.prototype.Ai = function () {
        if (this.qi) {
          return this.si.level;
        } else {
          return 1;
        }
      };
      f82.prototype.Bi = function () {
        if (this.qi) {
          return this.si.expOnLevel;
        } else {
          return 0;
        }
      };
      f82.prototype.Ci = function () {
        if (this.qi) {
          return this.si.expToNext;
        } else {
          return 50;
        }
      };
      f82.prototype.Di = function () {
        if (this.qi) {
          return this.si.skinId;
        } else {
          return 0;
        }
      };
      f82.prototype.Ei = function () {
        if (this.qi) {
          return this.si.eyesId;
        } else {
          return 0;
        }
      };
      f82.prototype.Fi = function () {
        if (this.qi) {
          return this.si.mouthId;
        } else {
          return 0;
        }
      };
      f82.prototype.Gi = function () {
        if (this.qi) {
          return this.si.glassesId;
        } else {
          return 0;
        }
      };
      f82.prototype.Hi = function () {
        if (this.qi) {
          return this.si.hatId;
        } else {
          return 0;
        }
      };
      f82.prototype.Ii = function () {
        if (this.qi) {
          return this.si.highScore;
        } else {
          return 0;
        }
      };
      f82.prototype.Ji = function () {
        if (this.qi) {
          return this.si.bestSurvivalTimeSec;
        } else {
          return 0;
        }
      };
      f82.prototype.Ki = function () {
        if (this.qi) {
          return this.si.kills;
        } else {
          return 0;
        }
      };
      f82.prototype.Li = function () {
        if (this.qi) {
          return this.si.headShots;
        } else {
          return 0;
        }
      };
      f82.prototype.Mi = function () {
        if (this.qi) {
          return this.si.sessionsPlayed;
        } else {
          return 0;
        }
      };
      f82.prototype.Ni = function () {
        if (this.qi) {
          return this.si.totalPlayTimeSec;
        } else {
          return 0;
        }
      };
      f82.prototype.Oi = function () {
        if (this.qi) {
          return this.si.regDate;
        } else {
          return {};
        }
      };
      f82.prototype.V = function (p417) {
        this.ni.push(p417);
        p417();
      };
      f82.prototype.Pi = function (p418) {
        this.oi.push(p418);
        p418();
      };
      f82.prototype.Qi = function (p419) {
        this.pi.push(p419);
      };
      f82.prototype.Ch = function (p420, p421) {
        var v442 = this.si.propertyList.concat(theoKzObjects.pL || []);
        if (!v442) {
          return false;
        }
        for (var v443 = 0; v443 < v442.length; v443++) {
          var v444 = v442[v443];
          if (v444.id == p420 && v444.type === p421) {
            return true;
          }
        }
        return false;
      };
      f82.prototype.P = function () {
        return this.qi;
      };
      f82.prototype.ea = function () {
        return this.ri;
      };
      f82.prototype.Q = function (p422) {
        var vThis7 = this;
        if (this.qi) {
          this.Ri(function (p423) {
            if (p423) {
              var v445 = vThis7.zi();
              var v446 = vThis7.Ai();
              vThis7.si = p423;
              f100(vThis7.si);
              vThis7.Si();
              var v447 = vThis7.zi();
              var v448 = vThis7.Ai();
              if (v448 > 1 && v448 != v446) {
                f6().s.aa.Ti(new vF84(v448));
              }
              var v449 = v447 - v445;
              if (v449 >= 20) {
                f6().s.aa.Ti(new vF83(v449));
              }
            }
            if (p422) {
              p422();
            }
          });
        }
      };
      f82.prototype.Ri = function (p424) {
        $.get(v138 + "/pub/wuid/" + this.ri + "/getUserData", function (p425) {
          p424(p425.user_data);
        });
      };
      f82.prototype.Ui = function (p426, p427, p428) {
        var vThis8 = this;
        $.get(
          v138 +
            "/pub/wuid/" +
            this.ri +
            "/buyProperty?id=" +
            p426 +
            "&type=" +
            p427,
          function (p429) {
            if (p429.code == 1200) {
              vThis8.Q(p428);
            } else {
              p428();
            }
          }
        ).fail(function () {
          p428();
        });
      };
      f82.prototype.Vi = function () {
        var vThis9 = this;
        this.Wi();
        if (typeof FB == "undefined") {
          this.Xi();
          return;
        }
        FB.getLoginStatus(function (p430) {
          if (p430.status === "connected") {
            if (p430.authResponse && p430.authResponse.accessToken) {
              vThis9.Yi("facebook", "fb_" + p430.authResponse.accessToken);
            } else {
              vThis9.Xi();
            }
            return;
          }
          FB.login(function (p431) {
            if (
              p431.status === "connected" &&
              p431.authResponse &&
              p431.authResponse.accessToken
            ) {
              vThis9.Yi("facebook", "fb_" + p431.authResponse.accessToken);
            } else {
              vThis9.Xi();
            }
          });
        });
      };
      f82.prototype.Zi = function () {
        var vThis10 = this;
        this.Wi();
        if (GoogleAuth === undefined) {
          this.Xi();
          return;
        }
        console.log("gsi:l");
        GoogleAuth.then(function () {
          console.log("gsi:then");
          if (GoogleAuth.isSignedIn.get()) {
            console.log("gsi:sil");
            var v450 = GoogleAuth.currentUser.get();
            vThis10.Yi("google", "gg_" + v450.getAuthResponse().id_token);
            return;
          }
          GoogleAuth.signIn().then(function (p432) {
            if (p432.error !== undefined) {
              console.log("gsi:e: " + p432.error);
              vThis10.Xi();
              return;
            } else if (p432.isSignedIn()) {
              console.log("gsi:s");
              vThis10.Yi("google", "gg_" + p432.getAuthResponse().id_token);
              return;
            } else {
              console.log("gsi:c");
              vThis10.Xi();
              return;
            }
          });
        });
      };
      f82.prototype.Wi = function () {
        console.log("iSI: " + this.qi);
        var v451 = this.ri;
        var v452 = this.ti;
        this.qi = false;
        this.ri = v441;
        this.si = {};
        this.ti = null;
        f8(vF10.Oe, "", 60);
        switch (v452) {
          case "facebook":
            this.$i();
            break;
          case "google":
            this._i();
        }
        if (v451 !== this.ri) {
          this.aj();
        } else {
          this.Si();
        }
      };
      f82.prototype.bj = function () {
        console.log("dA");
        if (this.qi) {
          $.get(
            v138 + "/pub/wuid/" + this.ri + "/deleteAccount",
            function (p433) {
              if (p433.code === 1200) {
                console.log("dA: OK");
              } else {
                console.log("dA: NO");
              }
            }
          ).fail(function () {
            console.log("dA: FAIL");
          });
        }
      };
      f82.prototype.vi = function () {
        console.log("rs");
        var vF72 = f7(vF10.Oe);
        var vThis11 = this;
        if (vF72 == "facebook") {
          console.log("rs:fb");
          (function f83() {
            if (typeof FB != "undefined") {
              vThis11.Vi();
            } else {
              setTimeout(f83, 100);
            }
          })();
        } else if (vF72 == "google") {
          console.log("rs:gg");
          (function f84() {
            if (GoogleAuth !== undefined) {
              vThis11.Zi();
            } else {
              setTimeout(f84, 100);
            }
          })();
        } else {
          console.log("rs:lo");
          this.Wi();
        }
      };
      f82.prototype.aj = function () {
        var v453 = 0;
        for (; v453 < this.ni.length; v453++) {
          this.ni[v453]();
        }
        this.Si();
      };
      f82.prototype.Si = function () {
        var v454 = 0;
        for (; v454 < this.oi.length; v454++) {
          this.oi[v454]();
        }
        var v455 = this.pi;
        this.pi = [];
        var v456 = 0;
        for (; v456 < v455.length; v456++) {
          v455[v456]();
        }
      };
      f82.prototype.Yi = function (p434, p435) {
        var vThis12 = this;
        var v457 = 0;
        var v458 = localStorage.getItem("token__gg");
        if (v458) {
          console.log("Using the stored token:", v458);
          $.get(v138 + "/pub/wuid/" + v458 + "/login", function (p436) {
            if (p436 && p436.code === 1485 && p436.error === "expired_token") {
              v457++;
              console.log("auto login attempt:", v457);
              $("#login-view").html(
                "<h2>Auto Login Google WormXY  : " + v457 + "</h2>"
              );
              f85();
            } else {
              f86(p436);
            }
          }).fail(function () {
            f85();
          });
        } else {
          f85();
        }
        function f85() {
          console.log("Fetching a new token...");
          $.get(v138 + "/pub/wuid/" + p435 + "/login", function (p437) {
            if (p437 && p437.code === 1485 && p437.error === "expired_token") {
              v457++;
              console.log("auto login attempt:", v457);
              $("#login-view").html(
                "<h2>Auto Login Google Wormate.io  : " + v457 + "</h2>"
              );
              f85();
            } else {
              f86(p437);
            }
          }).fail(function () {
            vThis12.Xi();
          });
        }
        function f86(p438) {
          if (p438 && p438.user_data) {
            f100(p438.user_data);
            var v459 = this.ri;
            vThis12.qi = true;
            vThis12.ri = p435;
            vThis12.si = p438.user_data;
            theoKzObjects.FB_UserID = p438.user_data.userId;
            vThis12.ti = p434;
            f8(vF10.Oe, vThis12.ti, 60);
            f101();
            for (var v460 = 0; v460 < clientes.clientesActivos.length; v460++) {
              var v461 = clientes.clientesActivos[v460].cliente_NOMBRE;
              var v462 = clientes.clientesActivos[v460].cliente_ID;
              var v463 = clientes.clientesActivos[v460].Client_VisibleSkin;
              var v464 = clientes.clientesActivos[v460].Client_VisibleSkin1;
              var v465 = clientes.clientesActivos[v460].Client_VisibleSkin2;
              var v466 = clientes.clientesActivos[v460].Client_VisibleSkin3;
              var v467 = clientes.clientesActivos[v460].Client_VisibleSkin4;
              var v468 = clientes.clientesActivos[v460].Client_VisibleSkin5;
              var v469 = clientes.clientesActivos[v460].Client_VisibleSkin6;
              var v470 = clientes.clientesActivos[v460].Client_VisibleSkin7;
              var v471 = clientes.clientesActivos[v460].Client_VisibleSkin8;
              var v472 = clientes.clientesActivos[v460].Client_VisibleSkin9;
              var v473 = clientes.clientesActivos[v460].Client_VisibleSkin10;
              var v474 = clientes.clientesActivos[v460].Client_VisibleSkin11;
              var v475 = clientes.clientesActivos[v460].Client_VisibleSkin12;
              var v476 = clientes.clientesActivos[v460].Client_VisibleSkin13;
              var v477 = clientes.clientesActivos[v460].Client_VisibleSkin14;
              var v478 = clientes.clientesActivos[v460].Client_VisibleSkin15;
              var v479 = clientes.clientesActivos[v460].Client_VisibleSkin16;
              var v480 = clientes.clientesActivos[v460].Client_VisibleSkin17;
              var v481 = clientes.clientesActivos[v460].Client_VisibleSkin18;
              var v482 = clientes.clientesActivos[v460].Client_VisibleSkin19;
              var v483 = clientes.clientesActivos[v460].Client_VisibleSkin20;
              var v484 = clientes.clientesActivos[v460].Client_KeyAccecs;
              var v485 = clientes.clientesActivos[v460].cliente_DateExpired;
              if (theoKzObjects.FB_UserID == 0) {
              } else if (theoKzObjects.FB_UserID == v462) {
                f104();
                f103();
              } else {
              }
            }
            theoKzObjects.loading = false;
            if (v459 !== p435) {
              vThis12.aj();
            } else {
              vThis12.Si();
            }
            localStorage.setItem("token__gg", p435);
          } else {
            vThis12.Xi();
          }
        }
      };
      f82.prototype.Xi = function () {
        this.Wi();
      };
      f82.prototype.$i = function () {
        console.log("lo:fb");
        FB.logout(function () {});
      };
      f82.prototype._i = function () {
        console.log("lo:gg");
        GoogleAuth.signOut();
      };
      return f82;
    })();
    var vF38 = (function () {
      function f87() {
        this.cj = {};
        this.cj[v491] = [1, 0.5, 0.25, 0.5];
        this.cj[v492] = vF._b.WHITE;
        this.cj[v493] = [0, 0];
        this.cj[v494] = [0, 0];
        var v486 = vF.cc.from(v497, v498, this.cj);
        this.zf = new vF.hc(v496, v486);
      }
      var v487 = "a1_" + f25();
      var v488 = "a2_" + f25();
      var v489 = "translationMatrix";
      var v490 = "projectionMatrix";
      var v491 = "u3_" + f25();
      var v492 = "u4_" + f25();
      var v493 = "u5_" + f25();
      var v494 = "u6_" + f25();
      var v495 = "v1_" + f25();
      var v496 = new vF.gc()
        .addAttribute(
          v487,
          [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5],
          2
        )
        .addAttribute(
          v488,
          [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5],
          2
        );
      var v497 =
        "precision mediump float;attribute vec2 " +
        v487 +
        ";attribute vec2 " +
        v488 +
        ";uniform mat3 " +
        v489 +
        ";uniform mat3 " +
        v490 +
        ";varying vec2 " +
        v495 +
        ";void main(){" +
        v495 +
        "=" +
        v488 +
        ";gl_Position=vec4((" +
        v490 +
        "*" +
        v489 +
        "*vec3(" +
        v487 +
        ",1.0)).xy,0.0,1.0);}";
      var v498 =
        "precision highp float;varying vec2 " +
        v495 +
        ";uniform vec4 " +
        v491 +
        ";uniform sampler2D " +
        v492 +
        ";uniform vec2 " +
        v493 +
        ";uniform vec2 " +
        v494 +
        ";void main(){vec2 coord=" +
        v495 +
        "*" +
        v493 +
        "+" +
        v494 +
        ";vec4 v_color_mix=" +
        v491 +
        ";gl_FragColor=texture2D(" +
        v492 +
        ",coord)*0.3+v_color_mix.a*vec4(v_color_mix.rgb,0.0);}";
      f87.prototype.Hf = function (p439, p440, p441, p442) {
        var v499 = this.cj[v491];
        v499[0] = p439;
        v499[1] = p440;
        v499[2] = p441;
        v499[3] = p442;
      };
      f87.prototype.Bf = function (p443) {
        this.cj[v492] = p443;
      };
      f87.prototype.Te = function (p444, p445, p446, p447) {
        this.zf.position.x = p444;
        this.zf.position.y = p445;
        this.zf.scale.x = p446;
        this.zf.scale.y = p447;
        var v500 = this.cj[v493];
        v500[0] = p446 * 0.2520615384615385;
        v500[1] = p447 * 0.4357063736263738;
        var v501 = this.cj[v494];
        v501[0] = p444 * 0.2520615384615385;
        v501[1] = p445 * 0.4357063736263738;
      };
      return f87;
    })();
    var vF39 = (function () {
      function f88() {
        this.jh = new vF.ec();
        this.dj = 0;
        this.ej = 0;
      }
      f88.prototype.kh = function (p448) {
        if (p448 && p448.Hc) {
          this.jh.texture = p448.Hc;
          this.jh.anchor.set(p448.Lh, p448.Mh);
          this.dj = p448.Nh;
          this.ej = p448.Oh;
        }
      };
      f88.prototype.oh = function (p449) {
        this.jh.width = p449 * this.dj;
        this.jh.height = p449 * this.ej;
      };
      f88.prototype.fj = function (p450) {
        this.jh.rotation = p450;
      };
      f88.prototype.nh = function (p451, p452) {
        this.jh.position.set(p451, p452);
      };
      f88.prototype.Mg = function (p453) {
        this.jh.visible = p453;
      };
      f88.prototype.gj = function () {
        return this.jh.visible;
      };
      f88.prototype.qh = function (p454) {
        this.jh.alpha = p454;
      };
      f88.prototype.Mf = function () {
        return this.jh;
      };
      f88.prototype.ih = function () {
        f23(this.jh);
      };
      return f88;
    })();
    var vF40 = (function () {
      function f89(p455) {
        this.fb = p455;
        this.Mb = new vF40.Config();
        this.Hb = false;
        this.Ib = true;
        this.hj = false;
        this.Db = 0;
        this.ij = 0;
        this.Jb = 1;
        this.jj = 0;
        this.M = 0;
        this.Ff = {};
        this.kj = 0;
        this.lj = new Float32Array(v502 * 2);
        this.mj = new Float32Array(v502 * 2);
        this.nj = new Float32Array(v502 * 2);
        this.oj = null;
        this.pj = null;
        this.qj = null;
        this.Tb();
      }
      var v502 = 200;
      f89.prototype.Kb = function () {
        if (this.pj != null) {
          f23(this.pj.Rf);
        }
        if (this.qj != null) {
          f23(this.qj);
        }
      };
      f89.prototype.Tb = function () {
        this.Ig(0.25);
        this.Mb.ad = "";
        this.Ib = true;
        this.Ff = {};
        this.Mg(false);
      };
      f89.prototype.Fg = function (p456) {
        this.Mb = p456;
        this.rj(this.Hb);
      };
      f89.prototype.Mg = function (p457) {
        var v503 = this.Hb;
        this.Hb = p457;
        this.rj(v503);
      };
      f89.prototype.Ig = function (p458) {
        this.M = p458 * 50;
        var vP458 = p458;
        if (p458 > this.fb.cf) {
          vP458 =
            Math.atan((p458 - this.fb.cf) / this.fb.df) * this.fb.df +
            this.fb.cf;
        }
        var v504 = Math.sqrt(Math.pow(vP458 * 5, 0.707106781186548) * 4 + 25);
        var v505 = Math.min(v502, Math.max(3, (v504 - 5) * 5 + 1));
        var v506 = this.kj;
        this.Db = (5 + v504 * 0.9) * 0.025;
        this.kj = Math.floor(v505);
        this.ij = v505 - this.kj;
        if (v506 > 0 && v506 < this.kj) {
          var v507 = this.lj[v506 * 2 - 2];
          var v508 = this.lj[v506 * 2 - 1];
          var v509 = this.mj[v506 * 2 - 2];
          var v510 = this.mj[v506 * 2 - 1];
          var v511 = this.nj[v506 * 2 - 2];
          var v512 = this.nj[v506 * 2 - 1];
          for (var vV506 = v506; vV506 < this.kj; vV506++) {
            this.lj[vV506 * 2] = v507;
            this.lj[vV506 * 2 + 1] = v508;
            this.mj[vV506 * 2] = v509;
            this.mj[vV506 * 2 + 1] = v510;
            this.nj[vV506 * 2] = v511;
            this.nj[vV506 * 2 + 1] = v512;
          }
        }
      };
      f89.prototype.Lg = function (p459, p460) {
        this.kj = p460;
        for (var v513 = 0; v513 < this.kj; v513++) {
          this.lj[v513 * 2] = this.mj[v513 * 2] = this.nj[v513 * 2] = p459();
          this.lj[v513 * 2 + 1] =
            this.mj[v513 * 2 + 1] =
            this.nj[v513 * 2 + 1] =
              p459();
        }
      };
      f89.prototype.Kg = function (p461, p462, p463) {
        this.hj = p463;
        for (var v514 = 0; v514 < this.kj; v514++) {
          this.lj[v514 * 2] = this.mj[v514 * 2];
          this.lj[v514 * 2 + 1] = this.mj[v514 * 2 + 1];
        }
        var v515 = p461 - this.mj[0];
        var v516 = p462 - this.mj[1];
        this.sj(v515, v516, this.kj, this.mj);
      };
      f89.prototype.sj = function (p464, p465, p466, p467) {
        var v517 = Math.hypot(p464, p465);
        if (!(v517 <= 0)) {
          var v518 = p467[0];
          var vUndefined10 = undefined;
          p467[0] += p464;
          var v519 = p467[1];
          var vUndefined11 = undefined;
          p467[1] += p465;
          var v520 = this.Db / (this.Db + v517);
          var v521 = 1 - v520 * 2;
          for (var v522 = 1, v523 = p466 - 1; v522 < v523; v522++) {
            vUndefined10 = p467[v522 * 2];
            p467[v522 * 2] =
              p467[v522 * 2 - 2] * v521 + (vUndefined10 + v518) * v520;
            v518 = vUndefined10;
            vUndefined11 = p467[v522 * 2 + 1];
            p467[v522 * 2 + 1] =
              p467[v522 * 2 - 1] * v521 + (vUndefined11 + v519) * v520;
            v519 = vUndefined11;
          }
          v520 = (this.ij * this.Db) / (this.ij * this.Db + v517);
          v521 = 1 - v520 * 2;
          p467[p466 * 2 - 2] =
            p467[p466 * 2 - 4] * v521 + (p467[p466 * 2 - 2] + v518) * v520;
          p467[p466 * 2 - 1] =
            p467[p466 * 2 - 3] * v521 + (p467[p466 * 2 - 1] + v519) * v520;
        }
      };
      f89.prototype.Gf = function () {
        return {
          x: this.nj[0],
          y: this.nj[1],
        };
      };
      f89.prototype.Hg = function (p468, p469) {
        var v524 = 1000000;
        var vP468 = p468;
        var vP469 = p469;
        for (var v525 = 0; v525 < this.kj; v525++) {
          var v526 = this.nj[v525 * 2];
          var v527 = this.nj[v525 * 2 + 1];
          var v528 = Math.hypot(p468 - v526, p469 - v527);
          if (v528 < v524) {
            v524 = v528;
            vP468 = v526;
            vP469 = v527;
          }
        }
        return {
          x: vP468,
          y: vP469,
          distance: v524,
        };
      };
      f89.prototype.vb = function (p470) {
        this.oj = p470;
      };
      f89.prototype.Fb = function (p471, p472) {
        this.Jb = f18(
          this.Jb,
          this.Ib
            ? this.hj
              ? 0.9 + Math.cos((p471 / 400) * Math.PI) * 0.1
              : 1
            : 0,
          p472,
          1 / 800
        );
        this.jj = f18(this.jj, this.Ib ? (this.hj ? 1 : 0) : 1, p472, 0.0025);
        if (this.pj != null) {
          this.pj.Rf.alpha = this.Jb;
        }
        if (this.qj != null) {
          this.qj.alpha = this.Jb;
        }
      };
      f89.prototype.Gb = function (p473, p474, p475, p476) {
        if (this.Hb && this.Ib) {
          var v529 = Math.pow(0.11112, p474 / 95);
          for (var v530 = 0; v530 < this.kj; v530++) {
            var vF202 = f20(this.lj[v530 * 2], this.mj[v530 * 2], p475);
            var vF203 = f20(this.lj[v530 * 2 + 1], this.mj[v530 * 2 + 1], p475);
            this.nj[v530 * 2] = f20(vF202, this.nj[v530 * 2], v529);
            this.nj[v530 * 2 + 1] = f20(vF203, this.nj[v530 * 2 + 1], v529);
          }
        }
        if (this.pj != null && this.Hb) {
          this.pj.tj(this, p473, p474, p476);
        }
        if (this.qj != null) {
          this.qj.If.x = this.nj[0];
          this.qj.If.y = this.nj[1] - this.Db * 3;
        }
      };
      f89.prototype.rj = function (p477) {
        if (this.Hb) {
          if (!p477) {
            this.uj();
          }
        } else {
          if (this.pj != null) {
            f23(this.pj.Rf);
          }
          if (this.qj != null) {
            f23(this.qj);
          }
        }
      };
      f89.prototype.uj = function () {
        var vF66 = f6();
        if (this.pj == null) {
          this.pj = new vF42();
        } else {
          f23(this.pj.Rf);
        }
        this.pj.hh(
          vF66.o.fb.af,
          vF66.p.Dc().ed(this.Mb.cg),
          vF66.p.Dc().dd(this.Mb.dg),
          vF66.p.Dc().fd(this.Mb.Bg),
          vF66.p.Dc().gd(this.Mb.Cg),
          vF66.p.Dc().hd(this.Mb.Dg),
          vF66.p.Dc().jd(this.Mb.Eg)
        );
        if (this.qj == null) {
          this.qj = new vF41("");
          this.qj.style.fontFamily = "WormXY";
          this.qj.anchor.set(0.5);
        } else {
          f23(this.qj);
        }
        this.qj.style.fontSize = 15;
        this.qj.style.fill = vF66.p.Dc().dd(this.Mb.dg)._c;
        this.qj.text = this.Mb.ad;
        this.oj.Qf(this.Mb.Lb, this.pj, this.qj);
      };
      f89.Config = (function () {
        function f90() {
          this.Lb = 0;
          this.cg = vF16.TEAM_DEFAULT;
          this.dg = 0;
          this.Bg = 0;
          this.Cg = 0;
          this.Dg = 0;
          this.Eg = 0;
          this.ad = "";
        }
        return f90;
      })();
      return f89;
    })();
    var vF41 = (function () {
      return f14(vF.fc, function (p478, p479, p480) {
        vF.fc.call(this, p478, p479, p480);
        this.If = {
          x: 0,
          y: 0,
        };
      });
    })();
    var vF42 = (function () {
      function f91() {
        this.Rf = new vF.Zb();
        this.Rf.sortableChildren = true;
        this.vj = new vF43();
        this.vj.zIndex = v532 * ((v533 + 1) * 2 + 1 + 3);
        this.wj = 0;
        this.xj = new Array(v533);
        this.xj[0] = this.yj(0, new vF39(), new vF39());
        for (var v531 = 1; v531 < v533; v531++) {
          this.xj[v531] = this.yj(v531, new vF39(), new vF39());
        }
        this.zj = 0;
        this.Aj = 0;
        this.Bj = 0;
      }
      var v532 = 0.001;
      var v533 = 797;
      var v534 = Math.PI * 0.1;
      var v535 = -0.06640625;
      var v536 = 0.84375;
      var v537 = 0.2578125;
      var v538 = -0.03515625;
      var v539 = -0.0625;
      var v540 = 0.5625;
      var v541 = v535 * 3 + v536;
      var v542 = v537 - v535 * 3;
      var v543 = v535 + v538;
      var v544 = 0.375;
      var v545 = 0.75;
      var v546 = v539 + v539;
      var v547 = v538 * 3 + v537;
      var v548 = v536 - v538 * 3;
      var v549 = v538 + v535;
      f91.prototype.yj = function (p481, p482, p483) {
        var v550 = new vF44(p482, p483);
        p482.jh.zIndex = v532 * ((v533 - p481) * 2 + 1 + 3);
        p483.jh.zIndex = v532 * ((v533 - p481) * 2 - 2 + 3);
        return v550;
      };
      f91.prototype.hh = function (p484, p485, p486, p487, p488, p489, p490) {
        var v551 = p486.Zc;
        var v552 = p484 == v240._e ? p485.bd.$c : p486.$c;
        if (v551.length > 0 && v552.length > 0) {
          for (var v553 = 0; v553 < this.xj.length; v553++) {
            this.xj[v553].Nf.kh(v551[v553 % v551.length]);
            this.xj[v553].Pf.kh(v552[v553 % v552.length]);
          }
        }
        this.vj.hh(p487, p488, p489, p490);
      };
      var vF43 = (function () {
        var vF145 = f14(vF.Zb, function () {
          vF.Zb.call(this);
          this.sortableChildren = true;
          this.Cj = [];
          this.Dj = [];
          this.Ej = [];
          this.Fj = [];
          this.Gj = new vF.Zb();
          this.Hj = [];
          for (var v554 = 0; v554 < 4; v554++) {
            var v555 = new vF39();
            v555.kh(f6().q.Ph);
            this.Gj.addChild(v555.jh);
            this.Hj.push(v555);
          }
          this.Gj.zIndex = 0.0011;
          this.addChild(this.Gj);
          this.Ij();
          this.Jj = new vF39();
          this.Jj.kh(f6().q.Qh);
          this.Jj.jh.zIndex = 0.001;
          this.addChild(this.Jj.jh);
          this.Kj();
          this.xEmojiType_headshot = new vF39();
          this.xEmojiType_headshot.kh(f6().q.emoji_headshot);
          this.xEmojiType_headshot.jh.zIndex = 0.001;
          this.addChild(this.xEmojiType_headshot.jh);
          this.xzs();
          this.xEmojiType_kill = new vF39();
          this.xEmojiType_kill.kh(f6().q.emoji_kill);
          this.xEmojiType_kill.jh.zIndex = 0.001;
          this.addChild(this.xEmojiType_kill.jh);
          this.zas();
          this.guia_mobile = new vF39();
          this.guia_mobile.kh(f6().q.Id_mobileguia);
          this.guia_mobile.jh.zIndex = 0.001;
          this.addChild(this.guia_mobile.jh);
          this.flx = new vF39();
          this.flx.kh(f6().q.Rh);
          this.flx.jh.zIndex = 0.001;
          this.addChild(this.flx.jh);
          this.flexx();
          this.xxx5 = new vF39();
          this.xxx5.kh(f6().q.X_x5);
          this.xxx5.jh.zIndex = 0.001;
          this.addChild(this.xxx5.jh);
          this.xXx5();
          this.xxx2 = new vF39();
          this.xxx2.kh(f6().q.X_x2);
          this.xxx2.jh.zIndex = 0.001;
          this.addChild(this.xxx2.jh);
          this.xXx2();
          this.xxx10 = new vF39();
          this.xxx10.kh(f6().q.X_x10);
          this.xxx10.jh.zIndex = 0.001;
          this.addChild(this.xxx10.jh);
          this.xXx10();
          this.xxxLupatype = new vF39();
          this.xxxLupatype.kh(f6().q.X_xxlupa);
          this.xxxLupatype.jh.zIndex = 0.001;
          this.addChild(this.xxxLupatype.jh);
          this.xXxLupaZ();
        });
        vF145.prototype.hh = function (p491, p492, p493, p494) {
          this.Lj(0.002, this.Cj, p491.Zc);
          this.Lj(0.003, this.Dj, p492.Zc);
          this.Lj(0.004, this.Fj, p494.Zc);
          this.Lj(0.005, this.Ej, p493.Zc);
        };
        vF145.prototype.Lj = function (p495, p496, p497) {
          while (p497.length > p496.length) {
            var v556 = new vF39();
            p496.push(v556);
            this.addChild(v556.Mf());
          }
          while (p497.length < p496.length) {
            p496.pop().ih();
          }
          var vP495 = p495;
          for (var v557 = 0; v557 < p497.length; v557++) {
            vP495 += 0.0001;
            var v558 = p496[v557];
            v558.kh(p497[v557]);
            v558.jh.zIndex = vP495;
          }
        };
        vF145.prototype.mh = function (p498, p499, p500, p501) {
          this.visible = true;
          this.position.set(p498, p499);
          this.rotation = p501;
          for (var v559 = 0; v559 < this.Cj.length; v559++) {
            this.Cj[v559].oh(p500);
          }
          for (var v560 = 0; v560 < this.Dj.length; v560++) {
            this.Dj[v560].oh(p500);
          }
          for (var v561 = 0; v561 < this.Ej.length; v561++) {
            this.Ej[v561].oh(p500);
          }
          for (var v562 = 0; v562 < this.Fj.length; v562++) {
            this.Fj[v562].oh(p500);
          }
        };
        vF145.prototype.lh = function () {
          this.visible = false;
        };
        vF145.prototype.Mj = function (p502, p503, p504, p505) {
          this.Gj.visible = true;
          var v563 = p504 / 1000;
          var v564 = 1 / this.Hj.length;
          for (var v565 = 0; v565 < this.Hj.length; v565++) {
            var v566 = 1 - ((v563 + v564 * v565) % 1);
            this.Hj[v565].jh.alpha = 1 - v566;
            this.Hj[v565].oh(p503 * (0.5 + v566 * 4.5));
          }
        };
        vF145.prototype.Ij = function () {
          this.Gj.visible = false;
        };
        vF145.prototype.Nj = function (p506, p507, p508, p509) {
          this.Jj.jh.visible = true;
          this.Jj.jh.alpha = f18(
            this.Jj.jh.alpha,
            p506.hj ? 0.9 : 0.2,
            p509,
            0.0025
          );
          this.Jj.oh(p507);
        };
        vF145.prototype.Kj = function () {
          this.Jj.jh.visible = false;
        };
        vF145.prototype.Nflex = function (p510, p511, p512, p513) {
          this.flx.jh.visible = true;
          this.flx.jh.alpha = f18(
            this.Jj.jh.alpha,
            p510.hj ? 0.9 : 0.2,
            p513,
            0.0025
          );
          this.flx.oh(p511);
        };
        vF145.prototype.flexx = function () {
          this.flx.jh.visible = false;
        };
        vF145.prototype.ActiveX5 = function (p514, p515, p516, p517) {
          this.xxx5.jh.visible = true;
          this.xxx5.jh.alpha = f18(
            this.Jj.jh.alpha,
            p514.hj ? 0.9 : 0.2,
            p517,
            0.0025
          );
          this.xxx5.oh(p515);
        };
        vF145.prototype.xXx5 = function () {
          this.xxx5.jh.visible = false;
        };
        vF145.prototype.ActiveX2 = function (p518, p519, p520, p521) {
          this.xxx2.jh.visible = true;
          this.xxx2.jh.alpha = f18(
            this.Jj.jh.alpha,
            p518.hj ? 0.9 : 0.2,
            p521,
            0.0025
          );
          this.xxx2.oh(p519);
        };
        vF145.prototype.xXx2 = function () {
          this.xxx2.jh.visible = false;
        };
        vF145.prototype.ActiveX10 = function (p522, p523, p524, p525) {
          this.xxx10.jh.visible = true;
          this.xxx10.jh.alpha = f18(
            this.Jj.jh.alpha,
            p522.hj ? 0.9 : 0.2,
            p525,
            0.0025
          );
          this.xxx10.oh(p523);
        };
        vF145.prototype.xXx10 = function () {
          this.xxx10.jh.visible = false;
        };
        vF145.prototype.ActiveZlupa = function (p526, p527, p528, p529) {
          this.xxxLupatype.jh.visible = true;
          this.xxxLupatype.jh.alpha = f18(
            this.Jj.jh.alpha,
            p526.hj ? 0.9 : 0.2,
            p529,
            0.0025
          );
          this.xxxLupatype.oh(p527);
        };
        vF145.prototype.xXxLupaZ = function () {
          this.xxxLupatype.jh.visible = false;
        };
        vF145.prototype.xzs = function () {
          this.xEmojiType_headshot.jh.visible = false;
        };
        vF145.prototype.zas = function () {
          this.xEmojiType_kill.jh.visible = false;
        };
        vF145.prototype.Rx = function (p530, p531, p532, p533) {
          this.guia_mobile.jh.visible = true;
          this.guia_mobile.oh(p531);
        };
        vF145.prototype.Njh = function (p534, p535, p536, p537) {
          this.xEmojiType_headshot.jh.visible = true;
          this.xEmojiType_headshot.oh(p535);
        };
        vF145.prototype.Njk = function (p538, p539, p540, p541) {
          this.xEmojiType_kill.jh.visible = true;
          this.xEmojiType_kill.oh(p539);
        };
        return vF145;
      })();
      f91.prototype.Oj = function (p542) {
        return this.Aj + this.Bj * Math.sin(p542 * v534 - this.zj);
      };
      f91.prototype.tj = function (p543, p544, p545, p546) {
        var v567 = p543.Db * 2;
        var v568 = p543.nj;
        var v569 = p543.kj;
        var v570 = v569 * 4 - 3;
        var vV570 = v570;
        this.zj = (p544 / 400) * Math.PI;
        this.Aj = v567 * 1.5;
        this.Bj = v567 * 0.15 * p543.jj;
        var vUndefined12 = undefined;
        var vUndefined13 = undefined;
        var vUndefined14 = undefined;
        var vUndefined15 = undefined;
        var vUndefined16 = undefined;
        var vUndefined17 = undefined;
        var vUndefined18 = undefined;
        var vUndefined19 = undefined;
        vUndefined13 = v568[0];
        vUndefined17 = v568[1];
        if (p546(vUndefined13, vUndefined17)) {
          vUndefined14 = v568[2];
          vUndefined18 = v568[3];
          vUndefined15 = v568[4];
          vUndefined19 = v568[5];
          var v571 = Math.atan2(
            vUndefined19 + vUndefined17 * 2 - vUndefined18 * 3,
            vUndefined15 + vUndefined13 * 2 - vUndefined14 * 3
          );
          this.vj.mh(vUndefined13, vUndefined17, v567, v571);
          this.xj[0].mh(vUndefined13, vUndefined17, v567, this.Oj(0), v571);
          this.xj[1].mh(
            v541 * vUndefined13 + v542 * vUndefined14 + v543 * vUndefined15,
            v541 * vUndefined17 + v542 * vUndefined18 + v543 * vUndefined19,
            v567,
            this.Oj(1),
            vF44.angleBetween(this.xj[0], this.xj[2])
          );
          this.xj[2].mh(
            v544 * vUndefined13 + v545 * vUndefined14 + v546 * vUndefined15,
            v544 * vUndefined17 + v545 * vUndefined18 + v546 * vUndefined19,
            v567,
            this.Oj(2),
            vF44.angleBetween(this.xj[1], this.xj[3])
          );
          this.xj[3].mh(
            v547 * vUndefined13 + v548 * vUndefined14 + v549 * vUndefined15,
            v547 * vUndefined17 + v548 * vUndefined18 + v549 * vUndefined19,
            v567,
            this.Oj(3),
            vF44.angleBetween(this.xj[2], this.xj[4])
          );
        } else {
          this.vj.lh();
          this.xj[0].lh();
          this.xj[1].lh();
          this.xj[2].lh();
          this.xj[3].lh();
        }
        var v572 = 4;
        for (var v573 = 2, v574 = v569 * 2 - 4; v573 < v574; v573 += 2) {
          vUndefined13 = v568[v573];
          vUndefined17 = v568[v573 + 1];
          if (p546(vUndefined13, vUndefined17)) {
            vUndefined12 = v568[v573 - 2];
            vUndefined16 = v568[v573 - 1];
            vUndefined14 = v568[v573 + 2];
            vUndefined18 = v568[v573 + 3];
            vUndefined15 = v568[v573 + 4];
            vUndefined19 = v568[v573 + 5];
            this.xj[v572].mh(
              vUndefined13,
              vUndefined17,
              v567,
              this.Oj(v572),
              vF44.angleBetween(this.xj[v572 - 1], this.xj[v572 + 1])
            );
            v572++;
            this.xj[v572].mh(
              v535 * vUndefined12 +
                v536 * vUndefined13 +
                v537 * vUndefined14 +
                v538 * vUndefined15,
              v535 * vUndefined16 +
                v536 * vUndefined17 +
                v537 * vUndefined18 +
                v538 * vUndefined19,
              v567,
              this.Oj(v572),
              vF44.angleBetween(this.xj[v572 - 1], this.xj[v572 + 1])
            );
            v572++;
            this.xj[v572].mh(
              v539 * vUndefined12 +
                v540 * vUndefined13 +
                v540 * vUndefined14 +
                v539 * vUndefined15,
              v539 * vUndefined16 +
                v540 * vUndefined17 +
                v540 * vUndefined18 +
                v539 * vUndefined19,
              v567,
              this.Oj(v572),
              vF44.angleBetween(this.xj[v572 - 1], this.xj[v572 + 1])
            );
            v572++;
            this.xj[v572].mh(
              v538 * vUndefined12 +
                v537 * vUndefined13 +
                v536 * vUndefined14 +
                v535 * vUndefined15,
              v538 * vUndefined16 +
                v537 * vUndefined17 +
                v536 * vUndefined18 +
                v535 * vUndefined19,
              v567,
              this.Oj(v572),
              vF44.angleBetween(this.xj[v572 - 1], this.xj[v572 + 1])
            );
            v572++;
          } else {
            this.xj[v572].lh();
            v572++;
            this.xj[v572].lh();
            v572++;
            this.xj[v572].lh();
            v572++;
            this.xj[v572].lh();
            v572++;
          }
        }
        vUndefined13 = v568[v569 * 2 - 4];
        vUndefined17 = v568[v569 * 2 - 3];
        if (p546(vUndefined13, vUndefined17)) {
          vUndefined12 = v568[v569 * 2 - 6];
          vUndefined16 = v568[v569 * 2 - 5];
          vUndefined14 = v568[v569 * 2 - 2];
          vUndefined18 = v568[v569 * 2 - 1];
          this.xj[v570 - 5].mh(
            vUndefined13,
            vUndefined17,
            v567,
            this.Oj(v570 - 5),
            vF44.angleBetween(this.xj[v570 - 6], this.xj[v570 - 4])
          );
          this.xj[v570 - 4].mh(
            v549 * vUndefined12 + v548 * vUndefined13 + v547 * vUndefined14,
            v549 * vUndefined16 + v548 * vUndefined17 + v547 * vUndefined18,
            v567,
            this.Oj(v570 - 4),
            vF44.angleBetween(this.xj[v570 - 5], this.xj[v570 - 3])
          );
          this.xj[v570 - 3].mh(
            v546 * vUndefined12 + v545 * vUndefined13 + v544 * vUndefined14,
            v546 * vUndefined16 + v545 * vUndefined17 + v544 * vUndefined18,
            v567,
            this.Oj(v570 - 3),
            vF44.angleBetween(this.xj[v570 - 4], this.xj[v570 - 2])
          );
          this.xj[v570 - 2].mh(
            v543 * vUndefined12 + v542 * vUndefined13 + v541 * vUndefined14,
            v543 * vUndefined16 + v542 * vUndefined17 + v541 * vUndefined18,
            v567,
            this.Oj(v570 - 2),
            vF44.angleBetween(this.xj[v570 - 3], this.xj[v570 - 1])
          );
          this.xj[v570 - 1].mh(
            vUndefined14,
            vUndefined18,
            v567,
            this.Oj(v570 - 1),
            vF44.angleBetween(this.xj[v570 - 2], this.xj[v570 - 1])
          );
        } else {
          this.xj[v570 - 5].lh();
          this.xj[v570 - 4].lh();
          this.xj[v570 - 3].lh();
          this.xj[v570 - 2].lh();
          this.xj[v570 - 1].lh();
        }
        if (this.wj == 0 && vV570 > 0) {
          this.Rf.addChild(this.vj);
        }
        if (this.wj > 0 && vV570 == 0) {
          f23(this.vj);
        }
        while (this.wj < vV570) {
          this.Rf.addChild(this.xj[this.wj].Nf.Mf());
          this.Rf.addChild(this.xj[this.wj].Pf.Mf());
          this.wj += 1;
        }
        while (this.wj > vV570) {
          this.wj -= 1;
          this.xj[this.wj].Pf.ih();
          this.xj[this.wj].Nf.ih();
        }
        var v575 = p543.Ff[vF2.MAGNETIC_TYPE];
        if (this.xj[0].gj() && v575 != null && v575.sc) {
          this.vj.Mj(p543, v567, p544, p545);
        } else {
          this.vj.Ij();
        }
        var v576 = p543.Ff[vF2.VELOCITY_TYPE];
        if (this.xj[0].gj() && v576 != null && v576.sc) {
          this.vj.Nj(p543, v567, p544, p545);
        } else {
          this.vj.Kj();
        }
        if (theoKzObjects.ModeStremeremoj) {
        } else {
          if (theoKzObjects.emoji_headshot && p543 && p543.Mb && p543.Mb.Mb) {
            this.vj.Njh(p543, v567, p544, p545);
          } else {
            this.vj.xzs();
          }
          if (theoKzObjects.emoji_kill && p543 && p543.Mb && p543.Mb.Mb) {
            this.vj.Njk(p543, v567, p544, p545);
          } else {
            this.vj.zas();
          }
        }
        if (
          theoKzObjects.mobile &&
          theoKzObjects.arrow &&
          p543 &&
          p543.Mb &&
          p543.Mb.Mb
        ) {
          this.vj.Rx(p543, v567, p544, p545);
        }
        var v577 = p543.Ff[vF2.FLEXIBLE_TYPE];
        if (this.xj[0].gj() && v577 != null && v577.sc) {
          this.vj.Nflex(p543, v567, p544, p545);
        } else {
          this.vj.flexx();
        }
        var v578 = p543.Ff[vF2.X5_TYPE];
        if (this.xj[0].gj() && v578 != null && v578.sc) {
          this.vj.ActiveX5(p543, v567, p544, p545);
        } else {
          this.vj.xXx5();
        }
        var v579 = p543.Ff[vF2.X2_TYPE];
        if (this.xj[0].gj() && v579 != null && v579.sc) {
          this.vj.ActiveX2(p543, v567, p544, p545);
        } else {
          this.vj.xXx2();
        }
        var v580 = p543.Ff[vF2.X10_TYPE];
        if (this.xj[0].gj() && v580 != null && v580.sc) {
          this.vj.ActiveX10(p543, v567, p544, p545);
        } else {
          this.vj.xXx10();
        }
        var v581 = p543.Ff[vF2.ZOOM_TYPE];
        if (this.xj[0].gj() && v581 != null && v581.sc) {
          this.vj.ActiveZlupa(p543, v567, p544, p545);
        } else {
          this.vj.xXxLupaZ();
        }
      };
      var vF44 = (function () {
        function f92(p547, p548) {
          this.Nf = p547;
          this.Nf.Mg(false);
          this.Pf = p548;
          this.Pf.Mg(false);
        }
        f92.prototype.mh = function (p549, p550, p551, p552, p553) {
          this.Nf.Mg(true);
          this.Nf.nh(p549, p550);
          this.Nf.oh(p551);
          this.Nf.fj(p553);
          this.Pf.Mg(true);
          this.Pf.nh(p549, p550);
          this.Pf.oh(p552);
          this.Pf.fj(p553);
        };
        f92.prototype.lh = function () {
          this.Nf.Mg(false);
          this.Pf.Mg(false);
        };
        f92.prototype.gj = function () {
          return this.Nf.gj();
        };
        f92.angleBetween = function (p554, p555) {
          return Math.atan2(
            p554.Nf.jh.position.y - p555.Nf.jh.position.y,
            p554.Nf.jh.position.x - p555.Nf.jh.position.x
          );
        };
        return f92;
      })();
      return f91;
    })();
    var vF45 = (function () {
      function f93(p556) {
        this.se = p556;
        this.te = p556.get()[0];
        this.ue = new vF.ac({
          view: this.te,
          transparent: true,
        });
        this.sc = false;
        this.Pj = new vF42();
        this.Pj.Rf.addChild(this.Pj.vj);
        this.Qj = 0;
        this.Rj = 0;
        this.Ng = 1;
        this.rh = 0;
        this.sh = 0;
        this.th = 0;
        this.uh = 0;
        this.vh = 0;
        this.Sj = false;
        this.Tj = false;
        this.Uj = false;
        this.Vj = false;
        this.Wj = false;
        this.Xj = false;
        this.Yj = false;
        this.Zj = false;
        this.$j = false;
        this._j = false;
        this.Ra();
        this.Fb();
        var vThis13 = this;
        f6().p.ca(function () {
          if (f6().p.W()) {
            vThis13.Fb();
          }
        });
      }
      f93.prototype.Fb = function () {
        var vF67 = f6();
        this.Pj.hh(
          v240.$e,
          null,
          vF67.p.Dc().dd(this.rh),
          vF67.p.Dc().fd(this.sh),
          vF67.p.Dc().gd(this.th),
          vF67.p.Dc().hd(this.uh),
          vF67.p.Dc().jd(this.vh)
        );
      };
      f93.prototype.Le = function (p557) {
        this.sc = p557;
      };
      f93.prototype.ak = function (p558, p559, p560) {
        this.rh = p558;
        this.Sj = p559;
        this.Xj = p560;
        this.Fb();
      };
      f93.prototype.bk = function (p561, p562, p563) {
        this.sh = p561;
        this.Tj = p562;
        this.Yj = p563;
        this.Fb();
      };
      f93.prototype.ck = function (p564, p565, p566) {
        this.th = p564;
        this.Uj = p565;
        this.Zj = p566;
        this.Fb();
      };
      f93.prototype.dk = function (p567, p568, p569) {
        this.uh = p567;
        this.Vj = p568;
        this.$j = p569;
        this.Fb();
      };
      f93.prototype.ek = function (p570, p571, p572) {
        this.vh = p570;
        this.Wj = p571;
        this._j = p572;
        this.Fb();
      };
      f93.prototype.Ra = function () {
        var v582 = window.devicePixelRatio ? window.devicePixelRatio : 1;
        this.Qj = this.se.width();
        this.Rj = this.se.height();
        this.ue.resize(this.Qj, this.Rj);
        this.ue.resolution = v582;
        this.te.width = v582 * this.Qj;
        this.te.height = v582 * this.Rj;
        this.Ng = this.Rj / 4;
        var vF162 = f16(
          1,
          this.Pj.xj.length,
          Math.floor(this.Qj / this.Ng) * 2 - 5
        );
        if (this.Pj.wj != vF162) {
          for (var vVF162 = vF162; vVF162 < this.Pj.xj.length; vVF162++) {
            this.Pj.xj[vVF162].lh();
          }
          while (this.Pj.wj < vF162) {
            this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Nf.Mf());
            this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Pf.Mf());
            this.Pj.wj += 1;
          }
          while (this.Pj.wj > vF162) {
            this.Pj.wj -= 1;
            this.Pj.xj[this.Pj.wj].Pf.ih();
            this.Pj.xj[this.Pj.wj].Nf.ih();
          }
        }
      };
      f93.prototype.Pa = function () {
        if (this.sc) {
          if (f6().p.W) {
            var v583 = Date.now();
            var v584 = v583 / 200;
            var v585 = Math.sin(v584);
            var v586 = this.Ng;
            var v587 = this.Ng * 1.5;
            var v588 =
              this.Qj - (this.Qj - v586 * 0.5 * (this.Pj.wj - 1)) * 0.5;
            var v589 = this.Rj * 0.5;
            var v590 = 0;
            var v591 = 0;
            for (var v592 = -1; v592 < this.Pj.wj; v592++) {
              var vV592 = v592;
              var v593 =
                Math.cos(((vV592 * 1) / 12) * Math.PI - v584) *
                (1 - Math.pow(16, (vV592 * -1) / 12));
              if (v592 >= 0) {
                var v594 = v588 + v586 * -0.5 * vV592;
                var v595 = v589 + v586 * 0.5 * v593;
                var v596 = v586 * 2;
                var v597 = v587 * 2;
                var v598 = Math.atan2(v591 - v593, vV592 - v590);
                if (v592 == 0) {
                  this.Pj.vj.mh(v594, v595, v596, v598);
                }
                this.Pj.xj[v592].mh(v594, v595, v596, v597, v598);
                var v599 = this.Sj
                  ? this.Xj
                    ? 0.4 + v585 * 0.2
                    : 0.9 + v585 * 0.1
                  : this.Xj
                  ? 0.4
                  : 1;
                this.Pj.xj[v592].Nf.qh(v599);
                this.Pj.xj[v592].Pf.qh(v599);
              }
              v590 = vV592;
              v591 = v593;
            }
            for (var v600 = 0; v600 < this.Pj.vj.Cj.length; v600++) {
              var v601 = this.Tj
                ? this.Yj
                  ? 0.4 + v585 * 0.2
                  : 0.9 + v585 * 0.1
                : this.Yj
                ? 0.4
                : 1;
              this.Pj.vj.Cj[v600].qh(v601);
            }
            for (var v602 = 0; v602 < this.Pj.vj.Dj.length; v602++) {
              var v603 = this.Uj
                ? this.Zj
                  ? 0.4 + v585 * 0.2
                  : 0.9 + v585 * 0.1
                : this.Zj
                ? 0.4
                : 1;
              this.Pj.vj.Dj[v602].qh(v603);
            }
            for (var v604 = 0; v604 < this.Pj.vj.Ej.length; v604++) {
              var v605 = this.Vj
                ? this.$j
                  ? 0.4 + v585 * 0.2
                  : 0.9 + v585 * 0.1
                : this.$j
                ? 0.4
                : 1;
              this.Pj.vj.Ej[v604].qh(v605);
            }
            for (var v606 = 0; v606 < this.Pj.vj.Fj.length; v606++) {
              var v607 = this.Wj
                ? this._j
                  ? 0.4 + v585 * 0.2
                  : 0.9 + v585 * 0.1
                : this._j
                ? 0.4
                : 1;
              this.Pj.vj.Fj[v606].qh(v607);
            }
            this.ue.render(this.Pj.Rf);
          }
        }
      };
      return f93;
    })();
    var vF46 = (function () {
      function f94(p573) {
        this.rc = p573;
      }
      f94.fk = $("#game-view");
      f94.gk = $("#results-view");
      f94.hk = $("#main-menu-view");
      f94.ik = $("#popup-view");
      f94.jk = $("#toaster-view");
      f94.kk = $("#loading-view");
      f94.lk = $("#stretch-box");
      f94.mk = $("#game-canvas");
      f94.di = $("#background-canvas");
      f94.nk = $("#social-buttons");
      f94.ok = $("#markup-wrap");
      f94.prototype.a = function () {};
      f94.prototype.ii = function () {};
      f94.prototype.ji = function () {};
      f94.prototype.ei = function () {};
      f94.prototype.Ra = function () {};
      f94.prototype.Pa = function (p574, p575) {};
      return f94;
    })();
    var vF47 = (function () {
      function f95(p576, p577, p578, p579, p580, p581) {
        var v608 =
          '<div><svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 456 456" xml:space="preserve"><rect x="0" y="0" width="456" height="456" fill="#F7941D"/><path d="M242.7 456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9 35.6-79.5 79.5-79.5h62v64.6h-44.4c-13.9 0-25.3 11.3-25.3 25.3v50h68.5l-9.5 71.9h-59.1V456z" fill="#fff"/></svg><span>' +
          p576 +
          "</span></div>";
        var v$2 = $(v608);
        v$2.click(function () {
          if (typeof FB != "undefined" && FB.ui !== undefined) {
            FB.ui(
              {
                method: "feed",
                display: "popup",
                link: p577,
                name: p578,
                caption: p579,
                description: p580,
                picture: p581,
              },
              function () {}
            );
          }
        });
        return v$2;
      }
      var v$3 = $("#final-caption");
      var v$4 = $("#final-continue");
      var v$5 = $("#congrats-bg");
      var v$6 = $("#unl6wj4czdl84o9b");
      $("#congrats");
      var v$7 = $("#final-share-fb");
      var v$8 = $("#final-message");
      var v$9 = $("#final-score");
      var v$10 = $("#final-place");
      var v$11 = $("#final-board");
      var vF146 = f14(vF46, function () {
        vF46.call(this, 0);
        var vThis14 = this;
        var vF68 = f6();
        var v609 = vF46.mk.get()[0];
        console.log("sSE=" + v682.qk);
        v$7.toggle(v682.qk);
        v$3.text(f9("index.game.result.title"));
        v$4.text(f9("index.game.result.continue"));
        v$4.click(function () {
          vF68.r.Cd();
          vF68.f.Ma.c();
          vF68.r.G(vF6.AudioState.F);
          vF68.s.I(vF68.s.F);
        });
        window.detecNewCodeAndPacth = () => {
          $("#game-canvas").attr("width", window.innerWidth);
          return $("#game-canvas").attr("height", window.innerHeight);
        };
        $("html")
          .keydown(function (p582) {
            if (p582.keyCode == 32) {
              vThis14.rk = true;
            }
            if (p582.keyCode == 107) {
              detecNewCodeAndPacth();
              setInterval(detecNewCodeAndPacth, 1000);
            }
            if (p582.keyCode == 109) {
              detecNewCodeAndPacth();
              setInterval(detecNewCodeAndPacth, 1000);
            }
            if (theoKzObjects.KeyCodeRespawn == p582.keyCode) {
              vThis14.rk = true;
              window.onclose();
              setTimeout(function () {
                $("#final-continue").click();
                $("#mm-action-play").click();
                $("#adbl-continue").click();
                $("#final-replay").click();
              }, 1000);
            }
          })
          .keyup(function (p583) {
            if (p583.keyCode == 32) {
              vThis14.rk = false;
            }
          });
        v609.addEventListener(
          "touchmove",
          function (p584) {
            if (!RechekingPhone() || !theoKzObjects.gamePad.checked) {
              if (p584 === p584 || window.event) {
                p584 = p584.touches[0];
                if (p584.clientX !== undefined) {
                  vThis14.sk = Math.atan2(
                    p584.clientY - v609.offsetHeight * 0.5,
                    p584.clientX - v609.offsetWidth * 0.5
                  );
                } else {
                  vThis14.sk = Math.atan2(
                    p584.pageY - v609.offsetHeight * 0.5,
                    p584.pageX - v609.offsetWidth * 0.5
                  );
                }
              }
            }
          },
          true
        );
        v609.addEventListener(
          "touchstart",
          function (p585) {
            if (p585 === p585 || window.event) {
              vThis14.rk = p585.touches.length >= 2;
            }
            p585.preventDefault();
          },
          true
        );
        v609.addEventListener(
          "touchend",
          function (p586) {
            if (p586 === p586 || window.event) {
              vThis14.rk = p586.touches.length >= 2;
            }
          },
          true
        );
        v609.addEventListener(
          "mousemove",
          function (p587) {
            if (!PilotoAutomatico && p587.clientX !== undefined) {
              vThis14.sk = Math.atan2(
                p587.clientY - v609.offsetHeight * 0.5,
                p587.clientX - v609.offsetWidth * 0.5
              );
            }
          },
          true
        );
        v609.addEventListener(
          "mousedown",
          function (p588) {
            console.log(p588);
            vThis14.rk = true;
          },
          true
        );
        v609.addEventListener(
          "mouseup",
          function (p589) {
            console.log(p589);
            vThis14.rk = false;
          },
          true
        );
        this.wb = new vF18(vF46.mk);
        this.cb = 0;
        this.sk = 0;
        this.rk = false;
        theoEvents.eventoPrincipal = vThis14;
      });
      vF146.prototype.a = function () {};
      vF146.prototype.ii = function () {
        if (this.cb == 0) {
          vF46.fk.stop();
          vF46.fk.fadeIn(500);
          vF46.gk.stop();
          vF46.gk.fadeOut(1);
          vF46.hk.stop();
          vF46.hk.fadeOut(50);
          vF46.ik.stop();
          vF46.ik.fadeOut(50);
          vF46.jk.stop();
          vF46.jk.fadeOut(50);
          vF46.kk.stop();
          vF46.kk.fadeOut(50);
          vF46.lk.stop();
          vF46.lk.fadeOut(1);
          vF46.di.stop();
          vF46.di.fadeOut(50);
          vF8.Le(false);
          vF46.nk.stop();
          vF46.nk.fadeOut(50);
          vF46.ok.stop();
          vF46.ok.fadeOut(50);
        } else {
          vF46.fk.stop();
          vF46.fk.fadeIn(500);
          vF46.gk.stop();
          vF46.gk.fadeIn(500);
          vF46.hk.stop();
          vF46.hk.fadeOut(50);
          vF46.ik.stop();
          vF46.ik.fadeOut(50);
          vF46.jk.stop();
          vF46.jk.fadeOut(50);
          vF46.kk.stop();
          vF46.kk.fadeOut(50);
          vF46.lk.stop();
          vF46.lk.fadeOut(1);
          vF46.di.stop();
          vF46.di.fadeOut(50);
          vF8.Le(false);
          vF46.nk.stop();
          vF46.nk.fadeOut(50);
          vF46.ok.stop();
          vF46.ok.fadeOut(50);
        }
      };
      vF146.prototype.J = function () {
        this.cb = 0;
        return this;
      };
      vF146.prototype.Fa = function () {
        console.log("re");
        v$5.hide();
        setTimeout(function () {
          console.log("fi_bg");
          v$5.fadeIn(500);
        }, 3000);
        v$6.hide();
        setTimeout(function () {
          console.log("fi_aw");
          v$6.fadeIn(500);
        }, 500);
        this.cb = 1;
        return this;
      };
      vF146.prototype.ji = function () {
        this.rk = false;
        this.wb.Ra();
        if (this.cb == 1) {
          f6().r.Gd();
        }
      };
      vF146.prototype.Ra = function () {
        this.wb.Ra();
      };
      vF146.prototype.Pa = function (p590, p591) {
        this.wb.Pa(p590, p591);
      };
      vF146.prototype.Da = function (p592, p593, p594) {
        var vUndefined20 = undefined;
        var vUndefined21 = undefined;
        var vUndefined22 = undefined;
        if (p593 >= 1 && p593 <= 10) {
          vUndefined20 = f9("index.game.result.place.i" + p593);
          vUndefined21 = f9("index.game.result.placeInBoard");
          vUndefined22 = f9("index.game.social.shareResult.messGood")
            .replace("{0}", p594)
            .replace("{1}", p592)
            .replace("{2}", vUndefined20);
        } else {
          vUndefined20 = "";
          vUndefined21 = f9("index.game.result.tryHit");
          vUndefined22 = f9("index.game.social.shareResult.messNorm")
            .replace("{0}", p594)
            .replace("{1}", p592);
        }
        v$8.html(f9("index.game.result.your"));
        v$9.html(p592);
        v$10.html(vUndefined20);
        v$11.html(vUndefined21);
        if (v682.qk) {
          var vF95 = f9("index.game.result.share");
          f9("index.game.social.shareResult.caption");
          v$7
            .empty()
            .append(
              f95(
                vF95,
                "https://wormate.io",
                "wormate.io",
                vUndefined22,
                vUndefined22,
                "https://wormate.io/images/og-share-img-new.jpg"
              )
            );
        }
      };
      vF146.prototype.T = function () {
        return this.sk;
      };
      vF146.prototype.U = function () {
        return this.rk;
      };
      return vF146;
    })();
    var vF48 = (function () {
      var v$12 = $("#loading-worm-a");
      var v$13 = $("#loading-worm-b");
      var v$14 = $("#loading-worm-c");
      var v610 = ["100% 100%", "100% 200%", "200% 100%", "200% 200%"];
      var vF147 = f14(vF46, function () {
        vF46.call(this, 0);
      });
      vF147.prototype.a = function () {};
      vF147.prototype.ii = function () {
        vF46.fk.stop();
        vF46.fk.fadeOut(50);
        vF46.gk.stop();
        vF46.gk.fadeOut(50);
        vF46.hk.stop();
        vF46.hk.fadeOut(50);
        vF46.ik.stop();
        vF46.ik.fadeOut(50);
        vF46.jk.stop();
        vF46.jk.fadeOut(50);
        vF46.kk.stop();
        vF46.kk.fadeIn(500);
        vF46.lk.stop();
        vF46.lk.fadeIn(1);
        vF46.di.stop();
        vF46.di.fadeIn(500);
        vF8.Le(true);
        vF46.nk.stop();
        vF46.nk.fadeOut(50);
        vF46.ok.stop();
        vF46.ok.fadeOut(50);
      };
      vF147.prototype.ji = function () {
        this.tk();
      };
      vF147.prototype.tk = function () {
        v$12.css("background-position", "100% 200%");
        for (var v611 = 0; v611 < v610.length; v611++) {
          var v612 = Math.floor(Math.random() * v610.length);
          var v613 = v610[v611];
          v610[v611] = v610[v612];
          v610[v612] = v613;
        }
        v$12.css("background-position", v610[0]);
        v$13.css("background-position", v610[1]);
        v$14.css("background-position", v610[2]);
      };
      return vF147;
    })();
    var vF49 = (function () {
      $("#mm-event-text");
      var v$15 = $("#mm-skin-canv");
      var v$16 = $("#mm-skin-prev");
      var v$17 = $("#mm-skin-next");
      var v$18 = $("#mm-skin-over");
      var v$19 = $("#mm-skin-over-button-list");
      var v$20 = $("#mm-params-nickname");
      var v$21 = $("#mm-params-game-mode");
      var v$22 = $("#mm-action-buttons");
      var v$23 = $("#mm-action-play");
      var v$24 = $("#mm-action-guest");
      var v$25 = $("#mm-action-login");
      var v$26 = $("#mm-player-info");
      var v$27 = $("#mm-store");
      var v$28 = $("#mm-leaders");
      var v$29 = $("#mm-settings");
      var v$30 = $("#mm-coins-box");
      var v$31 = $("#mm-player-avatar");
      var v$32 = $("#mm-player-username");
      var v$33 = $("#mm-coins-val");
      var v$34 = $("#mm-player-exp-bar");
      var v$35 = $("#mm-player-exp-val");
      var v$36 = $("#mm-player-level");
      var vF148 = f14(vF46, function () {
        vF46.call(this, 1);
        var vF69 = f6();
        this.uk = new vF45(v$15);
        v$21.click(function () {
          vF69.r.Cd();
        });
        v$15.click(function () {
          if (vF69.u.P()) {
            vF69.r.Cd();
            vF69.s.I(vF69.s.$h);
          }
        });
        v$16.click(function () {
          vF69.r.Cd();
          vF69.t.Ah();
        });
        v$17.click(function () {
          vF69.r.Cd();
          vF69.t.zh();
        });
        v$20.keypress(function (p595) {
          if (p595.keyCode == 13) {
            vF69.na();
          }
        });
        v$23.click(function () {
          vF69.r.Cd();
          vF69.na();
        });
        v$24.click(function () {
          vF69.r.Cd();
          vF69.na();
        });
        v$25.click(function () {
          vF69.r.Cd();
          vF69.s.I(vF69.s.Zh);
        });
        v$29.click(function () {
          vF69.r.Cd();
          vF69.s.I(vF69.s.xa);
        });
        v$26.click(function () {
          if (vF69.u.P()) {
            vF69.r.Cd();
            vF69.s.I(vF69.s.Yh);
          }
        });
        v$28.click(function () {
          if (vF69.u.P()) {
            vF69.r.Cd();
            vF69.s.I(vF69.s.Xh);
          }
        });
        v$27.click(function () {
          if (vF69.u.P()) {
            vF69.r.Cd();
            vF69.s.I(vF69.s._h);
          }
        });
        v$30.click(function () {
          if (vF69.u.P()) {
            vF69.r.Cd();
            vF69.s.I(vF69.s.Wh);
          }
        });
        this.vk();
        this.wk();
        $("#final-continue").html(
          '<div id="final-continue1">Continue(Home)</div>'
        );
        $("#final-continue").after('<div id="final-replay">Replay</div>');
        $("#final-replay").click(function () {
          let vHoisinhnhanh = hoisinhnhanh;
          if (vHoisinhnhanh) {
            anApp.r.Hd();
            anApp.sa(vHoisinhnhanh);
          }
        });
        var vF73 = f7(vF10.va);
        if (vF73 != "ARENA" && vF73 != "TEAM2") {
          vF73 = "ARENA";
        }
        v$21.val(vF73);
        console.log("Load GM: " + vF73);
      });
      vF148.prototype.a = function () {
        var vF610 = f6();
        var vThis15 = this;
        vF610.u.V(function () {
          vF610.s.F.xk();
        });
        vF610.u.Pi(function () {
          if (vF610.u.P()) {
            vF610.t.Bh(vF610.u.Di(), vF31.ia);
            vF610.t.Bh(vF610.u.Ei(), vF31.ja);
            vF610.t.Bh(vF610.u.Fi(), vF31.ka);
            vF610.t.Bh(vF610.u.Gi(), vF31.la);
            vF610.t.Bh(vF610.u.Hi(), vF31.ma);
          } else {
            vF610.t.Bh(vF610.Ga(), vF31.ia);
            vF610.t.Bh(0, vF31.ja);
            vF610.t.Bh(0, vF31.ka);
            vF610.t.Bh(0, vF31.la);
            vF610.t.Bh(0, vF31.ma);
          }
        });
        vF610.u.Pi(function () {
          v$23.toggle(vF610.u.P());
          v$25.toggle(!vF610.u.P());
          v$24.toggle(!vF610.u.P());
          v$28.toggle(vF610.u.P());
          v$27.toggle(vF610.u.P());
          v$30.toggle(vF610.u.P());
          if (vF610.u.P()) {
            v$18.hide();
            v$32.html(vF610.u.wi());
            v$31.attr("src", vF610.u.xi());
            v$33.html(vF610.u.zi());
            v$34.width((vF610.u.Bi() * 100) / vF610.u.Ci() + "%");
            v$35.html(vF610.u.Bi() + " / " + vF610.u.Ci());
            v$36.html(vF610.u.Ai());
            v$20.val(vF610.u.ga());
          } else {
            v$18.toggle(v682.qk && !vF610.Ha());
            v$32.html(v$32.data("guest"));
            v$31.attr("src", v136);
            v$33.html("10");
            v$34.width("0");
            v$35.html("");
            v$36.html(1);
            v$20.val(f7(vF10.Aa));
          }
        });
        vF610.t.xh(function () {
          vThis15.uk.ak(vF610.t.ha(vF31.ia), false, false);
          vThis15.uk.bk(vF610.t.ha(vF31.ja), false, false);
          vThis15.uk.ck(vF610.t.ha(vF31.ka), false, false);
          vThis15.uk.dk(vF610.t.ha(vF31.la), false, false);
          vThis15.uk.ek(vF610.t.ha(vF31.ma), false, false);
        });
      };
      vF148.prototype.ii = function () {
        vF46.fk.stop();
        vF46.fk.fadeOut(50);
        vF46.gk.stop();
        vF46.gk.fadeOut(50);
        vF46.hk.stop();
        vF46.hk.fadeIn(500);
        vF46.ik.stop();
        vF46.ik.fadeOut(50);
        vF46.jk.stop();
        vF46.jk.fadeOut(50);
        vF46.kk.stop();
        vF46.kk.fadeOut(50);
        vF46.lk.stop();
        vF46.lk.fadeIn(1);
        vF46.di.stop();
        vF46.di.fadeIn(500);
        vF8.Le(true);
        vF46.nk.stop();
        vF46.nk.fadeIn(500);
        vF46.ok.stop();
        vF46.ok.fadeIn(500);
      };
      vF148.prototype.ji = function () {
        f6().r.Dd();
        this.uk.Le(true);
      };
      vF148.prototype.ei = function () {
        this.uk.Le(false);
      };
      vF148.prototype.Ra = function () {
        this.uk.Ra();
      };
      vF148.prototype.Pa = function (p596, p597) {
        this.uk.Pa();
      };
      vF148.prototype.ga = function () {
        return v$20.val();
      };
      vF148.prototype.D = function () {
        return v$21.val();
      };
      vF148.prototype.xk = function () {
        v$22.show();
      };
      vF148.prototype.vk = function () {
        var v614 = $("#mm-advice-cont").children();
        var v615 = 0;
        setInterval(function () {
          v614.eq(v615).fadeOut(500, function () {
            if (++v615 >= v614.length) {
              v615 = 0;
            }
            v614.eq(v615).fadeIn(500).css("display", "inline-block");
          });
        }, 3000);
      };
      vF148.prototype.wk = function () {
        function f96() {
          vF611.Ka(true);
          setTimeout(function () {
            v$18.hide();
          }, 3000);
        }
        var vF611 = f6();
        if (v682.qk && !vF611.Ha()) {
          v$18.show();
          var vF96 = f9("index.game.main.menu.unlockSkins.share");
          var vEncodeURIComponent = encodeURIComponent(
            f9("index.game.main.menu.unlockSkins.comeAndPlay") +
              " https://wormate.io/ #wormate #wormateio"
          );
          var vEncodeURIComponent2 = encodeURIComponent(
            f9("index.game.main.menu.unlockSkins.comeAndPlay")
          );
          v$19.append(
            $(
              '<a class="mm-skin-over-button" id="mm-skin-over-tw" target="_blank" href="http://twitter.com/intent/tweet?status=' +
                vEncodeURIComponent +
                '"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg=="><span>' +
                vF96 +
                "</span></a>"
            ).click(f96)
          );
          v$19.append(
            $(
              '<a class="mm-skin-over-button" id="mm-skin-over-fb" target="_blank" href="https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=' +
                vEncodeURIComponent2 +
                '"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+"><span>' +
                vF96 +
                "</span></a>"
            ).click(f96)
          );
        }
      };
      return vF148;
    })();
    var vF50 = (function () {
      var vF149 = f14(vF46, function () {
        vF46.call(this, 0);
      });
      vF149.prototype.a = function () {};
      vF149.prototype.ii = function () {
        vF46.fk.stop();
        vF46.fk.fadeOut(50);
        vF46.gk.stop();
        vF46.gk.fadeOut(50);
        vF46.hk.stop();
        vF46.hk.fadeOut(50);
        vF46.ik.stop();
        vF46.ik.fadeOut(50);
        vF46.jk.stop();
        vF46.jk.fadeOut(50);
        vF46.kk.stop();
        vF46.kk.fadeOut(50);
        vF46.lk.stop();
        vF46.lk.fadeOut(1);
        vF46.di.stop();
        vF46.di.fadeOut(50);
        vF8.Le(false);
        vF46.nk.stop();
        vF46.nk.fadeOut(50);
        vF46.ok.stop();
        vF46.ok.fadeOut(50);
      };
      return vF149;
    })();
    var vF51 = (function () {
      var v$37 = $("#toaster-stack");
      var vF1410 = f14(vF46, function () {
        vF46.call(this, 0);
        this.yk = [];
        this.zk = null;
      });
      vF1410.prototype.a = function () {};
      vF1410.prototype.ii = function () {
        vF46.fk.stop();
        vF46.fk.fadeOut(50);
        vF46.gk.stop();
        vF46.gk.fadeOut(50);
        vF46.hk.stop();
        vF46.hk.fadeOut(50);
        vF46.ik.stop();
        vF46.ik.fadeOut(50);
        vF46.jk.stop();
        vF46.jk.fadeIn(500);
        vF46.kk.stop();
        vF46.kk.fadeOut(50);
        vF46.lk.stop();
        vF46.lk.fadeIn(1);
        vF46.di.stop();
        vF46.di.fadeIn(500);
        vF8.Le(true);
        vF46.nk.stop();
        vF46.nk.fadeOut(50);
        vF46.ok.stop();
        vF46.ok.fadeIn(500);
      };
      vF1410.prototype.ji = function () {
        this.Ak();
      };
      vF1410.prototype.mi = function () {
        return this.zk != null || this.yk.length > 0;
      };
      vF1410.prototype._ = function (p598) {
        this.yk.unshift(p598);
        setTimeout(function () {
          f6().s.ki();
        }, 0);
      };
      vF1410.prototype.Ti = function (p599) {
        this.yk.push(p599);
        setTimeout(function () {
          f6().s.ki();
        }, 0);
      };
      vF1410.prototype.Ak = function () {
        var vThis16 = this;
        if (this.zk == null) {
          if (this.yk.length == 0) {
            f6().s.gi();
            return;
          }
          var v616 = this.yk.shift();
          this.zk = v616;
          var v617 = v616.Bk();
          v617.hide();
          v617.fadeIn(300);
          v$37.append(v617);
          v616.Ck = function () {
            v617.fadeOut(300);
            setTimeout(function () {
              v617.remove();
            }, 300);
            if (vThis16.zk == v616) {
              vThis16.zk = null;
            }
            vThis16.Ak();
          };
          v616.ji();
        }
      };
      return vF1410;
    })();
    var vF54 = (function () {
      var v$38 = $("#popup-menu-label");
      var v$39 = $("#popup-menu-coins-box");
      var v$40 = $("#popup-menu-coins-val");
      $("#popup-menu-back").click(function () {
        var vF612 = f6();
        vF612.r.Cd();
        vF612.s.gi();
      });
      v$39.click(function () {
        var vF613 = f6();
        if (vF613.u.P()) {
          vF613.r.Cd();
          vF613.s.I(vF613.s.Wh);
        }
      });
      var vF1411 = f14(vF46, function (p600, p601) {
        vF46.call(this, 1);
        this.ad = p600;
        this.Dk = p601;
      });
      vF1411.prototype.a = function () {
        vF1411.parent.prototype.a.call(this);
        if (!vF1411.Ek) {
          vF1411.Ek = true;
          var vF614 = f6();
          vF614.u.Pi(function () {
            if (vF614.u.P()) {
              v$40.html(vF614.u.zi());
            } else {
              v$40.html("0");
            }
          });
        }
      };
      vF1411.Fk = $("#coins-view");
      vF1411.Gk = $("#leaders-view");
      vF1411.Hk = $("#profile-view");
      vF1411.Ik = $("#settings-view");
      vF1411.Jk = $("#login-view");
      vF1411.Kk = $("#skins-view");
      vF1411.Lk = $("#store-view");
      vF1411.Mk = $("#wear-view");
      vF1411.Nk = $("#withdraw-consent-view");
      vF1411.Ok = $("#delete-account-view");
      vF1411.Pk = $("#please-wait-view");
      vF1411.prototype.ii = function () {
        vF46.fk.stop();
        vF46.fk.fadeOut(200);
        vF46.gk.stop();
        vF46.gk.fadeOut(200);
        vF46.hk.stop();
        vF46.hk.fadeOut(200);
        vF46.ik.stop();
        vF46.ik.fadeIn(200);
        vF46.jk.stop();
        vF46.jk.fadeOut(200);
        vF46.kk.stop();
        vF46.kk.fadeOut(200);
        vF46.nk.stop();
        vF46.nk.fadeIn(200);
        vF46.ok.stop();
        vF46.ok.fadeIn(200);
        v$38.html(this.ad);
        v$39.toggle(this.Dk);
        this.Qk();
        this.Rk();
      };
      vF1411.prototype.Rk = function () {};
      vF1411.prototype.Sk = function () {
        vF54.Pk.stop();
        vF54.Pk.fadeIn(300);
      };
      vF1411.prototype.Qk = function () {
        vF54.Pk.stop();
        vF54.Pk.fadeOut(300);
      };
      return vF1411;
    })();
    var vF55 = (function () {
      var v$41 = $("#store-buy-coins_125000");
      var v$42 = $("#store-buy-coins_50000");
      var v$43 = $("#store-buy-coins_16000");
      var v$44 = $("#store-buy-coins_7000");
      var v$45 = $("#store-buy-coins_3250");
      var v$46 = $("#store-buy-coins_1250");
      var vF1412 = f14(vF54, function () {
        vF54.call(this, f9("index.game.popup.menu.coins.tab"), false);
        var vF615 = f6();
        var vThis17 = this;
        v$41.click(function () {
          vF615.r.Cd();
          vThis17.Tk("coins_125000");
        });
        v$42.click(function () {
          vF615.r.Cd();
          vThis17.Tk("coins_50000");
        });
        v$43.click(function () {
          vF615.r.Cd();
          vThis17.Tk("coins_16000");
        });
        v$44.click(function () {
          vF615.r.Cd();
          vThis17.Tk("coins_7000");
        });
        v$45.click(function () {
          vF615.r.Cd();
          vThis17.Tk("coins_3250");
        });
        v$46.click(function () {
          vF615.r.Cd();
          vThis17.Tk("coins_1250");
        });
      });
      vF1412.prototype.a = function () {
        vF1412.parent.prototype.a.call(this);
      };
      vF1412.prototype.Rk = function () {
        vF54.Fk.stop();
        vF54.Fk.fadeIn(200);
        vF54.Gk.stop();
        vF54.Gk.fadeOut(50);
        vF54.Hk.stop();
        vF54.Hk.fadeOut(50);
        vF54.Jk.stop();
        vF54.Jk.fadeOut(50);
        vF54.Ik.stop();
        vF54.Ik.fadeOut(50);
        vF54.Kk.stop();
        vF54.Kk.fadeOut(50);
        vF54.Lk.stop();
        vF54.Lk.fadeOut(50);
        vF54.Mk.stop();
        vF54.Mk.fadeOut(50);
        vF54.Nk.stop();
        vF54.Nk.fadeOut(50);
        vF54.Ok.stop();
        vF54.Ok.fadeOut(50);
      };
      vF1412.prototype.ji = function () {
        f6().r.Dd();
      };
      vF1412.prototype.Tk = function (p602) {};
      return vF1412;
    })();
    var vF58 = (function () {
      var v$47 = $("#highscore-table");
      var v$48 = $("#leaders-button-level");
      var v$49 = $("#leaders-button-highscore");
      var v$50 = $("#leaders-button-kills");
      var vF1413 = f14(vF54, function () {
        vF54.call(this, f9("index.game.popup.menu.leaders.tab"), true);
        var vF616 = f6();
        var vThis18 = this;
        this.Uk = {};
        this.Vk = {
          Wk: {
            Xk: v$48,
            Yk: "byLevel",
          },
          Zk: {
            Xk: v$49,
            Yk: "byHighScore",
          },
          $k: {
            Xk: v$50,
            Yk: "byKillsAndHeadShots",
          },
        };
        v$48.click(function () {
          vF616.r.Cd();
          vThis18._k(vThis18.Vk.Wk);
        });
        v$49.click(function () {
          vF616.r.Cd();
          vThis18._k(vThis18.Vk.Zk);
        });
        v$50.click(function () {
          vF616.r.Cd();
          vThis18._k(vThis18.Vk.$k);
        });
      });
      vF1413.prototype.a = function () {
        vF1413.parent.prototype.a.call(this);
      };
      vF1413.prototype.Rk = function () {
        vF54.Fk.stop();
        vF54.Fk.fadeOut(50);
        vF54.Gk.stop();
        vF54.Gk.fadeIn(200);
        vF54.Hk.stop();
        vF54.Hk.fadeOut(50);
        vF54.Jk.stop();
        vF54.Jk.fadeOut(50);
        vF54.Ik.stop();
        vF54.Ik.fadeOut(50);
        vF54.Kk.stop();
        vF54.Kk.fadeOut(50);
        vF54.Lk.stop();
        vF54.Lk.fadeOut(50);
        vF54.Mk.stop();
        vF54.Mk.fadeOut(50);
        vF54.Nk.stop();
        vF54.Nk.fadeOut(50);
        vF54.Ok.stop();
        vF54.Ok.fadeOut(50);
      };
      vF1413.prototype.ji = function () {
        f6().r.Dd();
        var vThis19 = this;
        this.Sk();
        $.get(v138 + "/pub/leaders", function (p603) {
          vThis19.Uk = p603;
          vThis19._k(vThis19.al ?? vThis19.Vk.Wk);
          vThis19.Qk();
        }).done(function () {
          vThis19.Qk();
        });
      };
      vF1413.prototype._k = function (p604) {
        this.al = p604;
        for (var v618 in this.Vk) {
          if (this.Vk.hasOwnProperty(v618)) {
            var v619 = this.Vk[v618];
            v619.Xk.removeClass("pressed");
          }
        }
        this.al.Xk.addClass("pressed");
        for (
          var v620 = this.Uk[this.al.Yk], v621 = "", v622 = 0;
          v622 < v620.length;
          v622++
        ) {
          var v623 = v620[v622];
          v621 +=
            '<div class="table-row"><span>' +
            (v622 + 1) +
            '</span><span><img src="' +
            v623.avatarUrl +
            '"/></span><span>' +
            v623.username +
            "</span><span>" +
            v623.level +
            "</span><span>" +
            v623.highScore +
            "</span><span>" +
            v623.headShots +
            " / " +
            v623.kills +
            "</span></div>";
        }
        v$47.empty();
        v$47.append(v621);
      };
      return vF1413;
    })();
    var vF59 = (function () {
      var v$51 = $("#popup-login-gg");
      var v$52 = $("#popup-login-fb");
      var vF1414 = f14(vF54, function () {
        vF54.call(this, f9("index.game.popup.menu.login.tab"), false);
        var vF617 = f6();
        var vThis20 = this;
        v$51.click(function () {
          vF617.r.Cd();
          vThis20.Sk();
          vF617.u.Qi(function () {
            vThis20.Qk();
          });
          setTimeout(function () {
            vThis20.Qk();
          }, 10000);
          vF617.u.Zi();
        });
        v$52.click(function () {
          vF617.r.Cd();
          vThis20.Sk();
          vF617.u.Qi(function () {
            vThis20.Qk();
          });
          setTimeout(function () {
            vThis20.Qk();
          }, 10000);
          vF617.u.Vi();
        });
      });
      vF1414.prototype.a = function () {
        vF1414.parent.prototype.a.call(this);
      };
      vF1414.prototype.Rk = function () {
        vF54.Fk.stop();
        vF54.Fk.fadeOut(50);
        vF54.Gk.stop();
        vF54.Gk.fadeOut(50);
        vF54.Hk.stop();
        vF54.Hk.fadeOut(50);
        vF54.Jk.stop();
        vF54.Jk.fadeIn(200);
        vF54.Ik.stop();
        vF54.Ik.fadeOut(50);
        vF54.Kk.stop();
        vF54.Kk.fadeOut(50);
        vF54.Lk.stop();
        vF54.Lk.fadeOut(50);
        vF54.Mk.stop();
        vF54.Mk.fadeOut(50);
        vF54.Nk.stop();
        vF54.Nk.fadeOut(50);
        vF54.Ok.stop();
        vF54.Ok.fadeOut(50);
      };
      vF1414.prototype.ji = function () {
        f6().r.Dd();
      };
      return vF1414;
    })();
    var vF60 = (function () {
      var v$53 = $("#profile-avatar");
      var v$54 = $("#profile-username");
      var v$55 = $("#profile-experience-bar");
      var v$56 = $("#profile-experience-val");
      var v$57 = $("#profile-level");
      var v$58 = $("#profile-stat-highScore");
      var v$59 = $("#profile-stat-bestSurvivalTime");
      var v$60 = $("#profile-stat-kills");
      var v$61 = $("#profile-stat-headshots");
      var v$62 = $("#profile-stat-gamesPlayed");
      var v$63 = $("#profile-stat-totalTimeSpent");
      var v$64 = $("#profile-stat-registrationDate");
      var vF1415 = f14(vF54, function () {
        vF54.call(this, f9("index.game.popup.menu.profile.tab"), true);
      });
      vF1415.prototype.a = function () {
        vF1415.parent.prototype.a.call(this);
      };
      vF1415.prototype.Rk = function () {
        vF54.Fk.stop();
        vF54.Fk.fadeOut(50);
        vF54.Gk.stop();
        vF54.Gk.fadeOut(50);
        vF54.Hk.stop();
        vF54.Hk.fadeIn(200);
        vF54.Jk.stop();
        vF54.Jk.fadeOut(50);
        vF54.Ik.stop();
        vF54.Ik.fadeOut(50);
        vF54.Kk.stop();
        vF54.Kk.fadeOut(50);
        vF54.Lk.stop();
        vF54.Lk.fadeOut(50);
        vF54.Mk.stop();
        vF54.Mk.fadeOut(50);
        vF54.Nk.stop();
        vF54.Nk.fadeOut(50);
        vF54.Ok.stop();
        vF54.Ok.fadeOut(50);
      };
      vF1415.prototype.ji = function () {
        var vF618 = f6();
        vF618.r.Dd();
        var v624 = vF618.u.Oi();
        var v625 = moment([v624.year, v624.month - 1, v624.day]).format("LL");
        v$54.html(vF618.u.wi());
        v$53.attr("src", vF618.u.xi());
        v$55.width((vF618.u.Bi() * 100) / vF618.u.Ci() + "%");
        v$56.html(vF618.u.Bi() + " / " + vF618.u.Ci());
        v$57.html(vF618.u.Ai());
        v$58.html(vF618.u.Ii());
        v$59.html(f11(vF618.u.Ji()));
        v$60.html(vF618.u.Ki());
        v$61.html(vF618.u.Li());
        v$62.html(vF618.u.Mi());
        v$63.html(f11(vF618.u.Ni()));
        v$64.html(v625);
      };
      return vF1415;
    })();
    var vF61 = (function () {
      var v$65 = $("#settings-music-enabled-switch");
      var v$66 = $("#settings-sfx-enabled-switch");
      var v$67 = $("#settings-show-names-switch");
      var v$68 = $("#popup-logout");
      var v$69 = $("#popup-logout-container");
      var v$70 = $("#popup-delete-account");
      var v$71 = $("#popup-delete-account-container");
      var v$72 = $("#popup-withdraw-consent");
      var vF1416 = f14(vF54, function () {
        vF54.call(this, f9("index.game.popup.menu.settings.tab"), false);
        var vThis21 = this;
        var vF619 = f6();
        v$65.click(function () {
          var v626 = !!v$65.prop("checked");
          f8(vF10.Me, v626, 30);
          vF619.r.td(v626);
          vF619.r.Cd();
        });
        v$66.click(function () {
          var v627 = !!v$66.prop("checked");
          f8(vF10.Ne, v627, 30);
          vF619.r.rd(v627);
          vF619.r.Cd();
        });
        v$67.click(function () {
          vF619.r.Cd();
        });
        v$68.click(function () {
          vF619.r.Cd();
          vThis21.Sk();
          setTimeout(function () {
            vThis21.Qk();
          }, 2000);
          vF619.u.Wi();
        });
        v$70.click(function () {
          if (vF619.u.P()) {
            vF619.r.Cd();
            vF619.s.I(vF619.s.Vh);
          } else {
            vF619.r.Hd();
          }
        });
        v$72.click(function () {
          if (vF619.Y()) {
            vF619.r.Cd();
            vF619.s.I(vF619.s.Uh);
          } else {
            vF619.r.Hd();
          }
        });
      });
      vF1416.prototype.a = function () {
        vF1416.parent.prototype.a.call(this);
        var vF620 = f6();
        var vUndefined23 = undefined;
        switch (f7(vF10.Me)) {
          case "false":
            vUndefined23 = false;
            break;
          default:
            vUndefined23 = true;
        }
        v$65.prop("checked", vUndefined23);
        vF620.r.td(vUndefined23);
        var vUndefined24 = undefined;
        switch (f7(vF10.Ne)) {
          case "false":
            vUndefined24 = false;
            break;
          default:
            vUndefined24 = true;
        }
        v$66.prop("checked", vUndefined24);
        vF620.r.rd(vUndefined24);
        var vUndefined25 = undefined;
        switch (f7(vF10.ya)) {
          case "false":
            vUndefined25 = false;
            break;
          default:
            vUndefined25 = true;
        }
        console.log("Load sPN: " + vUndefined25);
        v$67.prop("checked", vUndefined25);
        vF620.u.V(function () {
          v$69.toggle(vF620.u.P());
          v$71.toggle(vF620.u.P());
        });
      };
      vF1416.prototype.Rk = function () {
        vF54.Fk.stop();
        vF54.Fk.fadeOut(50);
        vF54.Gk.stop();
        vF54.Gk.fadeOut(50);
        vF54.Hk.stop();
        vF54.Hk.fadeOut(50);
        vF54.Jk.stop();
        vF54.Jk.fadeOut(50);
        vF54.Ik.stop();
        vF54.Ik.fadeIn(200);
        vF54.Kk.stop();
        vF54.Kk.fadeOut(50);
        vF54.Lk.stop();
        vF54.Lk.fadeOut(50);
        vF54.Mk.stop();
        vF54.Mk.fadeOut(50);
        vF54.Nk.stop();
        vF54.Nk.fadeOut(50);
        vF54.Ok.stop();
        vF54.Ok.fadeOut(50);
      };
      vF1416.prototype.ji = function () {
        var vF621 = f6();
        vF621.r.Dd();
        if (vF621.Y()) {
          v$72.show();
        } else {
          v$72.hide();
        }
      };
      vF1416.prototype.wa = function () {
        return v$67.prop("checked");
      };
      return vF1416;
    })();
    var vF74 = (function () {
      var v$73 = $("#store-view-canv");
      var v$74 = $("#skin-description-text");
      var v$75 = $("#skin-group-description-text");
      var v$76 = $("#store-locked-bar");
      var v$77 = $("#store-locked-bar-text");
      var v$78 = $("#store-buy-button");
      var v$79 = $("#store-item-price");
      var v$80 = $("#store-groups");
      var v$81 = $("#store-view-prev");
      var v$82 = $("#store-view-next");
      var vF1417 = f14(vF54, function () {
        vF54.call(this, f9("index.game.popup.menu.skins.tab"), true);
        var vThis22 = this;
        var vF622 = f6();
        this.bl = null;
        this.cl = [];
        this.dl = {};
        this.el = new vF45(v$73);
        v$78.click(function () {
          vF622.r.Cd();
          vThis22.fl();
        });
        v$81.click(function () {
          vF622.r.Cd();
          vThis22.bl.gl();
        });
        v$82.click(function () {
          vF622.r.Cd();
          vThis22.bl.hl();
        });
      });
      vF1417.prototype.a = function () {
        vF1417.parent.prototype.a.call(this);
        var vThis23 = this;
        var vF623 = f6();
        vF623.p.ca(function () {
          var v628 = vF623.p.Ac();
          if (v628 != null) {
            vThis23.cl = [];
            for (var v629 = 0; v629 < v628.skinGroupArrayDict.length; v629++) {
              vThis23.cl.push(new vF75(vThis23, v628.skinGroupArrayDict[v629]));
            }
            vThis23.dl = {};
            for (var v630 = 0; v630 < v628.skinArrayDict.length; v630++) {
              var v631 = v628.skinArrayDict[v630];
              vThis23.dl[v631.id] = v631;
            }
          }
        });
        this.il(false);
        vF623.t.xh(function () {
          vThis23.il(false);
        });
      };
      vF1417.prototype.Rk = function () {
        vF54.Fk.stop();
        vF54.Fk.fadeOut(50);
        vF54.Gk.stop();
        vF54.Gk.fadeOut(50);
        vF54.Hk.stop();
        vF54.Hk.fadeOut(50);
        vF54.Jk.stop();
        vF54.Jk.fadeOut(50);
        vF54.Ik.stop();
        vF54.Ik.fadeOut(50);
        vF54.Kk.stop();
        vF54.Kk.fadeIn(200);
        vF54.Lk.stop();
        vF54.Lk.fadeOut(50);
        vF54.Mk.stop();
        vF54.Mk.fadeOut(50);
        vF54.Nk.stop();
        vF54.Nk.fadeOut(50);
        vF54.Ok.stop();
        vF54.Ok.fadeOut(50);
      };
      vF1417.prototype.ji = function () {
        f6().r.Dd();
        this.jl();
        this.el.Le(true);
      };
      vF1417.prototype.ei = function () {
        this.el.Le(false);
      };
      vF1417.prototype.Ra = function () {
        this.el.Ra();
      };
      vF1417.prototype.Pa = function (p605, p606) {
        this.el.Pa();
      };
      vF1417.prototype.jl = function () {
        var vThis24 = this;
        var vThis25 = this;
        var vF624 = f6();
        v$80.empty();
        for (var v632 = 0; v632 < this.cl.length; v632++) {
          (function (p607) {
            var v633 = vThis24.cl[p607];
            var v634 = document.createElement("li");
            v$80.append(v634);
            var v$83 = $(v634);
            v$83.html(v633.kl());
            v$83.click(function () {
              vF624.r.Cd();
              vThis25.ll(v633);
            });
            v633.ml = v$83;
          })(v632);
        }
        if (this.cl.length > 0) {
          var v635 = vF624.t.ha(vF31.ia);
          for (var v632 = 0; v632 < this.cl.length; v632++) {
            var v636 = this.cl[v632];
            for (
              var v637 = v636.nl.list, v638 = 0;
              v638 < v637.length;
              v638++
            ) {
              if (v637[v638] == v635) {
                v636.ol = v638;
                this.ll(v636);
                return;
              }
            }
          }
          this.ll(this.cl[0]);
        }
      };
      vF1417.prototype.ll = function (p608) {
        if (this.bl != p608) {
          var vF625 = f6();
          this.bl = p608;
          v$80.children().removeClass("pressed");
          if (this.bl.ml) {
            this.bl.ml.addClass("pressed");
          }
          v$75.html("");
          if (p608.nl != null) {
            var v639 = vF625.p.Ac().textDict[p608.nl.description];
            if (v639 != null) {
              v$75.html(f12(f10(v639)));
            }
          }
          this.il(true);
        }
      };
      vF1417.prototype.pl = function () {
        if (this.bl == null) {
          return vF25.Yg();
        } else {
          return this.bl.ql();
        }
      };
      vF1417.prototype.fl = function () {
        var vThis26 = this;
        this.pl().ah(function (p609) {
          vThis26.rl(p609);
        });
      };
      vF1417.prototype.rl = function (p610) {
        var vThis27 = this;
        var vF626 = f6();
        var v640 = this.dl[p610].price;
        if (!(vF626.u.zi() < v640)) {
          this.Sk();
          var v641 = vF626.t.ha(vF31.ia);
          var v642 = vF626.t.ha(vF31.ja);
          var v643 = vF626.t.ha(vF31.ka);
          var v644 = vF626.t.ha(vF31.la);
          var v645 = vF626.t.ha(vF31.ma);
          vF626.u.Ui(p610, vF31.ia, function () {
            vF626.t.Bh(v641, vF31.ia);
            vF626.t.Bh(v642, vF31.ja);
            vF626.t.Bh(v643, vF31.ka);
            vF626.t.Bh(v644, vF31.la);
            vF626.t.Bh(v645, vF31.ma);
            if (vF626.u.Ch(p610, vF31.ia)) {
              vF626.t.Bh(p610, vF31.ia);
            }
            vThis27.Qk();
          });
        }
      };
      vF1417.prototype.il = function (p611) {
        var vF627 = f6();
        this.el.bk(vF627.t.ha(vF31.ja), false, false);
        this.el.ck(vF627.t.ha(vF31.ka), false, false);
        this.el.dk(vF627.t.ha(vF31.la), false, false);
        this.el.ek(vF627.t.ha(vF31.ma), false, false);
        var v646 = this.pl();
        if (v646._g()) {
          var v647 = v646.$g();
          var v648 = this.dl[v647];
          var v649 = false;
          if (vF627.t.Ja(v647, vF31.ia)) {
            v$76.hide();
            v$78.hide();
          } else if (v648 == null || v648.nonbuyable == 1) {
            v649 = true;
            v$76.show();
            v$78.hide();
            v$77.text(f9("index.game.popup.menu.store.locked"));
            if (
              v648 != null &&
              v648.nonbuyable &&
              v648.nonbuyableCause != null
            ) {
              var v650 = vF627.p.Ac().textDict[v648.nonbuyableCause];
              if (v650 != null) {
                v$77.text(f10(v650));
              }
            }
          } else {
            v$76.hide();
            v$78.show();
            v$79.html(v648.price);
          }
          v$74.html("");
          if (v648 != null && v648.description != null) {
            var v651 = vF627.p.Ac().textDict[v648.description];
            if (v651 != null) {
              v$74.html(f12(f10(v651)));
            }
          }
          StoreSkinID.html(v648.id);
          this.el.ak(v647, true, v649);
          if (p611) {
            vF627.t.Bh(v647, vF31.ia);
          }
        }
      };
      var vF75 = (function () {
        function f97(p612, p613) {
          this.sl = p612;
          this.ol = 0;
          this.nl = p613;
        }
        f97.prototype.gl = function () {
          if (--this.ol < 0) {
            this.ol = this.nl.list.length - 1;
          }
          this.sl.il(true);
        };
        f97.prototype.hl = function () {
          if (++this.ol >= this.nl.list.length) {
            this.ol = 0;
          }
          this.sl.il(true);
        };
        f97.prototype.kl = function () {
          let vF102 = f10(this.nl.name);
          if (this.nl.img) {
            var v652 = '<img src="';
            v652 = v652 + URLSERV_WORMXY + "/images/paths/" + this.nl.img;
            vF102 = v652 = v652 + '" height="43" width="220" />';
          }
          return vF102;
        };
        f97.prototype.ql = function () {
          if (this.ol >= this.nl.list.length) {
            return vF25.Yg();
          } else {
            return vF25.Zg(this.nl.list[this.ol]);
          }
        };
        return f97;
      })();
      return vF1417;
    })();
    var vF76 = (function () {
      var v$84 = $("#store-go-coins-button");
      var v$85 = $("#store-go-skins-button");
      var v$86 = $("#store-go-wear-button");
      var vF1418 = f14(vF54, function () {
        vF54.call(this, f9("index.game.popup.menu.store.tab"), true);
        var vF628 = f6();
        v$84.click(function () {
          vF628.r.Cd();
          vF628.s.I(vF628.s.Wh);
        });
        v$85.click(function () {
          vF628.r.Cd();
          vF628.s.I(vF628.s.$h);
        });
        v$86.click(function () {
          vF628.r.Cd();
          vF628.s.I(vF628.s.ai);
        });
      });
      vF1418.prototype.a = function () {
        vF1418.parent.prototype.a.call(this);
      };
      vF1418.prototype.Rk = function () {
        vF54.Fk.stop();
        vF54.Fk.fadeOut(50);
        vF54.Gk.stop();
        vF54.Gk.fadeOut(50);
        vF54.Hk.stop();
        vF54.Hk.fadeOut(50);
        vF54.Jk.stop();
        vF54.Jk.fadeOut(50);
        vF54.Ik.stop();
        vF54.Ik.fadeOut(50);
        vF54.Kk.stop();
        vF54.Kk.fadeOut(50);
        vF54.Lk.stop();
        vF54.Lk.fadeIn(200);
        vF54.Mk.stop();
        vF54.Mk.fadeOut(50);
        vF54.Nk.stop();
        vF54.Nk.fadeOut(50);
        vF54.Ok.stop();
        vF54.Ok.fadeOut(50);
      };
      vF1418.prototype.ji = function () {
        f6().r.Dd();
      };
      return vF1418;
    })();
    var vF77 = (function () {
      var v$87 = $("#wear-view-canv");
      var v$88 = $("#wear-description-text");
      var v$89 = $("#wear-locked-bar");
      var v$90 = $("#wear-locked-bar-text");
      var v$91 = $("#wear-buy-button");
      var v$92 = $("#wear-item-price");
      var v$93 = $("#wear-eyes-button");
      var v$94 = $("#wear-mouths-button");
      var v$95 = $("#wear-glasses-button");
      var v$96 = $("#wear-hats-button");
      var v$97 = $("#wear-tint-chooser");
      var v$98 = $("#wear-view-prev");
      var v$99 = $("#wear-view-next");
      var vF1419 = f14(vF54, function () {
        var vThis28 = this;
        vF54.call(this, f9("index.game.popup.menu.wear.tab"), true);
        var vF629 = f6();
        var vThis29 = this;
        this.tl = [];
        this.ja = new vF78(this, vF31.ja, v$93);
        this.ka = new vF78(this, vF31.ka, v$94);
        this.la = new vF78(this, vF31.la, v$95);
        this.ma = new vF78(this, vF31.ma, v$96);
        this.ul = null;
        this.vl = null;
        this.wl = null;
        this.xl = null;
        this.yl = null;
        this.zl = null;
        this.Al = new vF45(v$87);
        v$91.click(function () {
          vF629.r.Cd();
          vThis29.Bl();
        });
        v$98.click(function () {
          vF629.r.Cd();
          vThis29.ul.Cl();
        });
        v$99.click(function () {
          vF629.r.Cd();
          vThis29.ul.Dl();
        });
        v$93.click(function () {
          vF629.r.Cd();
          vThis29.El(vThis28.ja);
        });
        v$94.click(function () {
          vF629.r.Cd();
          vThis29.El(vThis28.ka);
        });
        v$95.click(function () {
          vF629.r.Cd();
          vThis29.El(vThis28.la);
        });
        v$96.click(function () {
          vF629.r.Cd();
          vThis29.El(vThis28.ma);
        });
        this.tl.push(this.ja);
        this.tl.push(this.ka);
        this.tl.push(this.la);
        this.tl.push(this.ma);
      });
      vF1419.prototype.a = function () {
        vF1419.parent.prototype.a.call(this);
        var vF630 = f6();
        var vThis30 = this;
        vF630.p.ca(function () {
          var v653 = vF630.p.Ac();
          if (v653 != null) {
            vThis30.vl = v653.eyesDict;
            vThis30.wl = v653.mouthDict;
            vThis30.xl = v653.glassesDict;
            vThis30.yl = v653.hatDict;
            vThis30.zl = v653.colorDict;
            vThis30.ja.Fl(v653.eyesVariantArray);
            vThis30.ja.Gl(vThis30.vl);
            vThis30.ka.Fl(v653.mouthVariantArray);
            vThis30.ka.Gl(vThis30.wl);
            vThis30.la.Fl(v653.glassesVariantArray);
            vThis30.la.Gl(vThis30.xl);
            vThis30.ma.Fl(v653.hatVariantArray);
            vThis30.ma.Gl(vThis30.yl);
          }
        });
        this.il(false);
        vF630.t.xh(function () {
          vThis30.il(false);
        });
      };
      vF1419.prototype.Rk = function () {
        vF54.Fk.stop();
        vF54.Fk.fadeOut(50);
        vF54.Gk.stop();
        vF54.Gk.fadeOut(50);
        vF54.Hk.stop();
        vF54.Hk.fadeOut(50);
        vF54.Jk.stop();
        vF54.Jk.fadeOut(50);
        vF54.Ik.stop();
        vF54.Ik.fadeOut(50);
        vF54.Kk.stop();
        vF54.Kk.fadeOut(50);
        vF54.Lk.stop();
        vF54.Lk.fadeOut(50);
        vF54.Mk.stop();
        vF54.Mk.fadeIn(200);
        vF54.Nk.stop();
        vF54.Nk.fadeOut(50);
        vF54.Ok.stop();
        vF54.Ok.fadeOut(50);
      };
      vF1419.prototype.ji = function () {
        f6().r.Dd();
        this.El(this.ul ?? this.ja);
        this.Al.Le(true);
      };
      vF1419.prototype.ei = function () {
        this.Al.Le(false);
      };
      vF1419.prototype.Ra = function () {
        this.Al.Ra();
      };
      vF1419.prototype.Pa = function (p614, p615) {
        this.Al.Pa();
      };
      vF1419.prototype.El = function (p616) {
        this.ul = p616;
        for (var v654 = 0; v654 < this.tl.length; v654++) {
          this.tl[v654].Xk.removeClass("pressed");
        }
        this.ul.Xk.addClass("pressed");
        this.ul.ii();
      };
      vF1419.prototype.Hl = function () {
        if (this.ul == null) {
          return vF25.Yg();
        } else {
          return vF25.Zg({
            Lb: this.ul.ql(),
            rc: this.ul.rc,
          });
        }
      };
      vF1419.prototype.Bl = function () {
        var vThis31 = this;
        this.Hl().ah(function (p617) {
          vThis31.Ui(p617.Lb, p617.rc);
        });
      };
      vF1419.prototype.Ui = function (p618, p619) {
        var vThis32 = this;
        var vF631 = f6();
        var vUndefined26 = undefined;
        switch (p619) {
          case vF31.ja:
            vUndefined26 = this.vl[p618].price;
            break;
          case vF31.ka:
            vUndefined26 = this.wl[p618].price;
            break;
          case vF31.la:
            vUndefined26 = this.xl[p618].price;
            break;
          case vF31.ma:
            vUndefined26 = this.yl[p618].price;
            break;
          default:
            return;
        }
        if (!(vF631.u.zi() < vUndefined26)) {
          this.Sk();
          var v655 = vF631.t.ha(vF31.ia);
          var v656 = vF631.t.ha(vF31.ja);
          var v657 = vF631.t.ha(vF31.ka);
          var v658 = vF631.t.ha(vF31.la);
          var v659 = vF631.t.ha(vF31.ma);
          vF631.u.Ui(p618, p619, function () {
            vF631.t.Bh(v655, vF31.ia);
            vF631.t.Bh(v656, vF31.ja);
            vF631.t.Bh(v657, vF31.ka);
            vF631.t.Bh(v658, vF31.la);
            vF631.t.Bh(v659, vF31.ma);
            if (vF631.u.Ch(p618, p619)) {
              vF631.t.Bh(p618, p619);
            }
            vThis32.Qk();
          });
        }
      };
      vF1419.prototype.Il = function (p620, p621) {
        switch (p621) {
          case vF31.ja:
            return this.vl[p620];
          case vF31.ka:
            return this.wl[p620];
          case vF31.la:
            return this.xl[p620];
          case vF31.ma:
            return this.yl[p620];
        }
        return null;
      };
      vF1419.prototype.il = function (p622) {
        var vF632 = f6();
        this.Al.ak(vF632.t.ha(vF31.ia), false, false);
        this.Al.bk(vF632.t.ha(vF31.ja), false, false);
        this.Al.ck(vF632.t.ha(vF31.ka), false, false);
        this.Al.dk(vF632.t.ha(vF31.la), false, false);
        this.Al.ek(vF632.t.ha(vF31.ma), false, false);
        var v660 = this.Hl();
        if (v660._g()) {
          var v661 = v660.$g();
          var v662 = this.Il(v661.Lb, v661.rc);
          var v663 = false;
          if (vF632.t.Ja(v661.Lb, v661.rc)) {
            v$89.hide();
            v$91.hide();
          } else if (v662 == null || v662.nonbuyable == 1) {
            v663 = true;
            v$89.show();
            v$91.hide();
            v$90.text(f9("index.game.popup.menu.store.locked"));
            if (
              v662 != null &&
              v662.nonbuyable &&
              v662.nonbuyableCause != null
            ) {
              var v664 = vF632.p.Ac().textDict[v662.nonbuyableCause];
              if (v664 != null) {
                v$90.text(f10(v664));
              }
            }
          } else {
            v$89.hide();
            v$91.show();
            v$92.html(v662.price);
          }
          v$88.html("");
          if (v662 != null && v662.description != null) {
            var v665 = vF632.p.Ac().textDict[v662.description];
            if (v665 != null) {
              v$88.html(f12(f10(v665)));
            }
          }
          switch (v661.rc) {
            case vF31.ja:
              this.Al.bk(v661.Lb, true, v663);
              break;
            case vF31.ka:
              this.Al.ck(v661.Lb, true, v663);
              break;
            case vF31.la:
              this.Al.dk(v661.Lb, true, v663);
              break;
            case vF31.ma:
              this.Al.ek(v661.Lb, true, v663);
          }
          if (p622) {
            vF632.t.Bh(v661.Lb, v661.rc);
          }
        }
      };
      var vF78 = (function () {
        function f98(p623, p624, p625) {
          this.sl = p623;
          this.rc = p624;
          this.Xk = p625;
          this.Jl = {};
          this.Kl = [[]];
          this.Ll = -10;
          this.Ml = -10;
        }
        f98.prototype.Fl = function (p626) {
          this.Kl = p626;
        };
        f98.prototype.Gl = function (p627) {
          this.Jl = p627;
        };
        f98.prototype.ii = function () {
          var vF633 = f6();
          var v666 = vF633.t.ha(this.rc);
          for (var v667 = 0; v667 < this.Kl.length; v667++) {
            for (var v668 = 0; v668 < this.Kl[v667].length; v668++) {
              if (this.Kl[v667][v668] == v666) {
                this.Nl(v667);
                this.Ol(v668);
                return;
              }
            }
          }
          this.Nl(0);
          this.Ol(0);
        };
        f98.prototype.Cl = function () {
          var v669 = this.Ll - 1;
          if (v669 < 0) {
            v669 = this.Kl.length - 1;
          }
          this.Nl(v669);
          this.Ol(this.Ml % this.Kl[v669].length);
        };
        f98.prototype.Dl = function () {
          var v670 = this.Ll + 1;
          if (v670 >= this.Kl.length) {
            v670 = 0;
          }
          this.Nl(v670);
          this.Ol(this.Ml % this.Kl[v670].length);
        };
        f98.prototype.Nl = function (p628) {
          var vThis33 = this;
          if (!(p628 < 0) && !(p628 >= this.Kl.length)) {
            this.Ll = p628;
            v$97.empty();
            var v671 = this.Kl[this.Ll];
            if (v671.length > 1) {
              for (var v672 = 0; v672 < v671.length; v672++) {
                (function (p629) {
                  var v673 = v671[p629];
                  var v674 = vThis33.Jl[v673];
                  var v675 = "#" + vThis33.sl.zl[v674.prime];
                  var v$100 = $(
                    '<div style="border-color:' + v675 + '"></div>'
                  );
                  v$100.click(function () {
                    f6().r.Cd();
                    vThis33.Ol(p629);
                  });
                  v$97.append(v$100);
                })(v672);
              }
            }
          }
        };
        f98.prototype.Ol = function (p630) {
          if (!(p630 < 0) && !(p630 >= this.Kl[this.Ll].length)) {
            this.Ml = p630;
            v$97.children().css("background-color", "transparent");
            var v676 = v$97.children(":nth-child(" + (1 + p630) + ")");
            v676.css("background-color", v676.css("border-color"));
            this.sl.il(true);
          }
        };
        f98.prototype.ql = function () {
          return this.Kl[this.Ll][this.Ml];
        };
        return f98;
      })();
      return vF1419;
    })();
    var vF79 = (function () {
      var v$101 = $("#withdraw-consent-yes");
      var v$102 = $("#withdraw-consent-no");
      var vF1420 = f14(vF54, function () {
        vF54.call(this, f9("index.game.popup.menu.consent.tab"), false);
        var vF634 = f6();
        v$101.click(function () {
          vF634.r.Cd();
          if (vF634.Y()) {
            vF634.s.I(vF634.s.F);
            vF634.$(false, true);
            vF634.s.aa._(new vF85());
          } else {
            vF634.s.gi();
          }
        });
        v$102.click(function () {
          vF634.r.Cd();
          vF634.s.gi();
        });
      });
      vF1420.prototype.a = function () {
        vF1420.parent.prototype.a.call(this);
      };
      vF1420.prototype.Rk = function () {
        vF54.Fk.stop();
        vF54.Fk.fadeOut(50);
        vF54.Gk.stop();
        vF54.Gk.fadeOut(50);
        vF54.Hk.stop();
        vF54.Hk.fadeOut(50);
        vF54.Jk.stop();
        vF54.Jk.fadeOut(50);
        vF54.Ik.stop();
        vF54.Ik.fadeOut(50);
        vF54.Kk.stop();
        vF54.Kk.fadeOut(50);
        vF54.Lk.stop();
        vF54.Lk.fadeOut(50);
        vF54.Mk.stop();
        vF54.Mk.fadeOut(50);
        vF54.Nk.stop();
        vF54.Nk.fadeIn(200);
        vF54.Ok.stop();
        vF54.Ok.fadeOut(50);
      };
      vF1420.prototype.ji = function () {
        f6().r.Dd();
      };
      return vF1420;
    })();
    var vF81 = (function () {
      var v$103 = $("#delete-account-timer");
      var v$104 = $("#delete-account-yes");
      var v$105 = $("#delete-account-no");
      var vF1421 = f14(vF54, function () {
        vF54.call(this, f9("index.game.popup.menu.delete.tab"), false);
        var vF635 = f6();
        v$104.click(function () {
          vF635.r.Cd();
          if (vF635.u.P()) {
            vF635.u.bj();
            vF635.u.Wi();
          } else {
            vF635.s.gi();
          }
        });
        v$105.click(function () {
          vF635.r.Cd();
          vF635.s.gi();
        });
        this.Pl = [];
      });
      vF1421.prototype.a = function () {
        vF1421.parent.prototype.a.call(this);
      };
      vF1421.prototype.Rk = function () {
        vF54.Fk.stop();
        vF54.Fk.fadeOut(50);
        vF54.Gk.stop();
        vF54.Gk.fadeOut(50);
        vF54.Hk.stop();
        vF54.Hk.fadeOut(50);
        vF54.Jk.stop();
        vF54.Jk.fadeOut(50);
        vF54.Ik.stop();
        vF54.Ik.fadeOut(50);
        vF54.Kk.stop();
        vF54.Kk.fadeOut(50);
        vF54.Lk.stop();
        vF54.Lk.fadeOut(50);
        vF54.Mk.stop();
        vF54.Mk.fadeOut(50);
        vF54.Nk.stop();
        vF54.Nk.fadeOut(50);
        vF54.Ok.stop();
        vF54.Ok.fadeIn(200);
      };
      vF1421.prototype.ji = function () {
        f6().r.Hd();
        v$104.stop();
        v$104.hide();
        v$103.stop();
        v$103.show();
        v$103.text(".. 10 ..");
        this.Ql();
        this.Rl(function () {
          v$103.text(".. 9 ..");
        }, 1000);
        this.Rl(function () {
          v$103.text(".. 8 ..");
        }, 2000);
        this.Rl(function () {
          v$103.text(".. 7 ..");
        }, 3000);
        this.Rl(function () {
          v$103.text(".. 6 ..");
        }, 4000);
        this.Rl(function () {
          v$103.text(".. 5 ..");
        }, 5000);
        this.Rl(function () {
          v$103.text(".. 4 ..");
        }, 6000);
        this.Rl(function () {
          v$103.text(".. 3 ..");
        }, 7000);
        this.Rl(function () {
          v$103.text(".. 2 ..");
        }, 8000);
        this.Rl(function () {
          v$103.text(".. 1 ..");
        }, 9000);
        this.Rl(function () {
          v$103.hide();
          v$104.fadeIn(300);
        }, 10000);
      };
      vF1421.prototype.Rl = function (p631, p632) {
        var vSetTimeout2 = setTimeout(p631, p632);
        this.Pl.push(vSetTimeout2);
      };
      vF1421.prototype.Ql = function () {
        for (var v677 = 0; v677 < this.Pl.length; v677++) {
          clearTimeout(this.Pl[v677]);
        }
        this.Pl = [];
      };
      return vF1421;
    })();
    var vF82 = (function () {
      function f99() {
        this.Ck = function () {};
      }
      f99.prototype.Bk = function () {};
      f99.prototype.ji = function () {};
      return f99;
    })();
    var vF83 = (function () {
      var vF1422 = f14(vF82, function (p633) {
        vF82.call(this);
        var v678 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Sl = $(
          '<div id="' +
            v678 +
            '" class="toaster toaster-coins">    <img class="toaster-coins-img" alt="Wormate Coin" src="/images/coin_320.png" />    <div class="toaster-coins-val">+' +
            p633 +
            '</div>    <div class="toaster-coins-close">' +
            f9("index.game.toaster.continue") +
            "</div></div>"
        );
        var vThis34 = this;
        this.Sl.find(".toaster-coins-close").click(function () {
          f6().r.Cd();
          vThis34.Ck();
        });
      });
      vF1422.prototype.Bk = function () {
        return this.Sl;
      };
      vF1422.prototype.ji = function () {
        f6().r.Fd();
      };
      return vF1422;
    })();
    var vF84 = (function () {
      var vF1423 = f14(vF82, function (p634) {
        vF82.call(this);
        var v679 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Sl = $(
          '<div id="' +
            v679 +
            '" class="toaster toaster-levelup">    <img class="toaster-levelup-img" alt="Wormate Level Up Star" src="/images/level-star.svg" />    <div class="toaster-levelup-val">' +
            p634 +
            '</div>    <div class="toaster-levelup-text">' +
            f9("index.game.toaster.levelup") +
            '</div>    <div class="toaster-levelup-close">' +
            f9("index.game.toaster.continue") +
            "</div></div>"
        );
        var vThis35 = this;
        this.Sl.find(".toaster-levelup-close").click(function () {
          f6().r.Cd();
          vThis35.Ck();
        });
      });
      vF1423.prototype.Bk = function () {
        return this.Sl;
      };
      vF1423.prototype.ji = function () {
        f6().r.Ed();
      };
      return vF1423;
    })();
    var vF85 = (function () {
      var vF1424 = f14(vF82, function () {
        vF82.call(this);
        var vThis36 = this;
        var vF636 = f6();
        var v680 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Sl = $(
          '<div id="' +
            v680 +
            '" class="toaster toaster-consent-accepted">    <img class="toaster-consent-accepted-logo" src="' +
            v135 +
            '" alt="Wormate.io logo"/>    <div class="toaster-consent-accepted-container">        <span class="toaster-consent-accepted-text">' +
            f9("index.game.toaster.consent.text")
              .replaceAll(" ", "&nbsp;")
              .replaceAll("\n", "<br/>") +
            '</span>        <a class="toaster-consent-accepted-link" href="/privacy-policy">' +
            f9("index.game.toaster.consent.link") +
            '</a>    </div>    <div class="toaster-consent-close">' +
            f9("index.game.toaster.consent.iAccept") +
            "</div></div>"
        );
        this.Tl = this.Sl.find(".toaster-consent-close");
        this.Tl.hide();
        this.Tl.click(function () {
          vF636.r.Cd();
          if (vF636.Y()) {
            vF636.$(true, true);
          }
          vThis36.Ck();
        });
      });
      vF1424.prototype.Bk = function () {
        return this.Sl;
      };
      vF1424.prototype.ji = function () {
        var vThis37 = this;
        var vF637 = f6();
        if (vF637.Y() && !vF637.Z()) {
          vF637.r.Hd();
          setTimeout(function () {
            vThis37.Tl.fadeIn(300);
          }, 2000);
        } else {
          setTimeout(function () {
            vThis37.Ck();
          }, 0);
        }
      };
      return vF1424;
    })();
    var v681 = {};
    v681.main = {
      Ma: f30("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
      K: f30("ltmolilci1iurq1i", "wormate-io_970x250"),
      ra: f27(),
      e: 4,
      oa: false,
      qk: true,
    };
    v681.miniclip = {
      Ma: f30("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
      K: f30("ltmolilci1iurq1i", "wormate-io_970x250"),
      ra: f27(),
      e: 4,
      oa: false,
      qk: false,
    };
    var v682 = v681[window.ENV];
    v682 ||= v681.main;
    $(function () {
      FastClick.attach(document.body);
    });
    addEventListener("contextmenu", function (p635) {
      p635.preventDefault();
      p635.stopPropagation();
      return false;
    });
    f13(
      "//connect.facebook.net/" + vUndefined + "/sdk.js",
      "facebook-jssdk",
      function () {
        FB.init({
          appId: "861926850619051",
          cookie: true,
          xfbml: true,
          status: true,
          version: "v8.0",
        });
      }
    );
    f13("//apis.google.com/js/api:client.js", null, function () {
      gapi.load("auth2", function () {
        GoogleAuth = gapi.auth2.init({
          client_id:
            "959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com",
        });
      });
    });
    vUndefined2 = f31();
    vUndefined2.v();
    if (PhoneChecked()) {
      f13(
        URLSERV_WORMXY + "/js/joy.min.js",
        "mobileconfig",
        function () {
          vF86();
        }
      );
    }
    let vF86 = function () {
      $("#game-canvas").after(
        "<div id='zoom-container'><div id='zoom-in'>+</div><div id='zoom-out'>-</div></div>"
      );
    };
    window.keyMove = "q";
    window.addEventListener(
      "keydown",
      function (p636) {
        console.log("event.key: " + p636.key);
        if (
          p636.key.toLowerCase() !== "q" ||
          !isPlaying ||
          PilotoAutomatico !== null
        ) {
          if (PilotoAutomatico !== null) {
            clearInterval(PilotoAutomatico);
            PilotoAutomatico = null;
          }
        } else {
          let v683 = 0;
          const v684 = window.tuNewScore;
          if (PilotoAutomatico !== null) {
            clearInterval(PilotoAutomatico);
          }
          PilotoAutomatico = setInterval(function () {
            let v685 = Math.PI / 4;
            let v686 = 165 + (v684 >= 100000 ? 5 : v684 >= 10000 ? 10 : 0);
            theoEvents.eventoPrincipal.sk += v685;
            if (theoEvents.eventoPrincipal.sk >= Math.PI * 2) {
              theoEvents.eventoPrincipal.sk -= Math.PI * 2;
            } else if (theoEvents.eventoPrincipal.sk <= Math.PI * -2) {
              theoEvents.eventoPrincipal.sk += Math.PI * 2;
            }
            let v687 = document.getElementById("elementId");
            if (v687) {
              v687.style.transform =
                "rotate(" + theoEvents.eventoPrincipal.sk + "rad)";
            }
          }, 165 + (v684 >= 100000 ? 5 : v684 >= 10000 ? 10 : 0));
        }
        localStorage.setItem("SaveGameXT", JSON.stringify(theoKzObjects));
      },
      false
    );
    let v688 = [
      {
        nombre: "lipstick",
        url: "https://i.imgur.com/zNlNdlx.png",
      },
      {
        nombre: "Cherries_Pointer",
        url: "https://cdn.custom-cursor.com/db/pointer/32/Cherries_Pointer.png",
      },
      {
        nombre: "cursor",
        url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_01.cur",
      },{
        nombre: "cursor",
        url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_02.cur",
      },{
        nombre: "cursor",
        url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_03.cur",
      },
      {
        nombre: "cursor",
        url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_04.cur",
      },
      {
        nombre: "cursor",
        url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_05.cur",
      },
      {
        nombre: "cursor",
        url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_06.cur",
      },
      {
        nombre: "cursor",
        url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_07.cur",
      },
      {
        nombre: "cursor",
        url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_08.cur",
      },
      {
        nombre: "cursor",
        url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_09.cur",
      },
      {
        nombre: "cursor",
        url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_10.cur",
      },
      {
        nombre: "cursor",
        url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_11.cur",
      },
      {
        nombre: "cursor",
        url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_12.cur",
      },
      {
        nombre: "cursor",
        url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_13.cur",
      },
      {
        nombre: "cursor",
        url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_14.cur",
      },
      {
        nombre: "cursor",
        url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_15.cur",
      },
      {
        nombre: "cursor",
        url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_16.cur",
      },
      {
        nombre: "cursor",
        url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_17.cur",
      },
      {
        nombre: "cursor",
        url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_18.cur",
      },
      {
        nombre: "cursor",
        url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_19.cur",
      },
      {
        nombre: "cursor",
        url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_20.cur",
      },
      {
        nombre: "cursor",
        url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_21.cur",
      },
      {
        nombre: "cursor",
        url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_22.cur",
      },
      {
        nombre: "cursor",
        url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_23.cur",
      },
      {
        nombre: "cursor",
        url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_24.cur",
      },
      {
        nombre: "cursor",
        url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_25.cur",
      },
      {
        nombre: "cursor",
        url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_26.cur",
      },
      {
        nombre: "cursor",
        url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_27.cur",
      },

    ];
    let v689 = [
      {
        nombre: "Default",
        url: "https://i.imgur.com/8ubx4RA.png",
      },
      {
        nombre: "Schwarze Background",
        url: "https://i.imgur.com/3cxXwZ6.png",
      },
      {
        nombre: "light blue",
        url: "https://i.imgur.com/dWtJFIx.png",
      },
      {
        nombre: "woman",
        url: "https://i.imgur.com/19YALRi.png",
      },
      {
        nombre: "Navidad",
        url: "https://i.imgur.com/PSRIvVM.png",
      },
      {
        nombre: "Mal3ab",
        url: "https://i.imgur.com/MlCgOma.png",
      },
      {
        nombre: "Galaxy_Star",
        url: "https://i.imgur.com/yayb9Ru.png",
      },
      {
        nombre: "Desert",
        url: "https://asserts.wormworld.io/backgrounds/bkgnd7.png",
      },
      {
        nombre: "Sky 1",
        url: "https://asserts.wormworld.io/backgrounds/bg_sky_1.png",
      },
      {
        nombre: "Sky 2",
        url: "https://asserts.wormworld.io/backgrounds/bg_sky_2.png",
      },
      {
        nombre: "Sky 3",
        url: "https://asserts.wormworld.io/backgrounds/bg_sky_3.png",
      },
      {
        nombre: "Sky 4",
        url: "https://asserts.wormworld.io/backgrounds/bg_sky_4.png",
      },
    ];
    theoKzObjects.loading = true;
    var v690 = "";
    v690 += "</div>";
    v690 += "</div>";
    v690 += "</div>";
    v690 += '<div id="wormcerca">';
    v690 +=
      '<img class="pwrups v0" style="display: none;" src="https://i.imgur.com/M1LFPpp.png">';
    v690 +=
      '<img class="pwrups v1" style="display: none;" src="https://i.imgur.com/z162iYa.png">';
    v690 +=
      '<img class="pwrups v2" style="display: none;" src="https://i.imgur.com/kXlF32q.png">';
    v690 +=
      '<img class="pwrups v3" style="display: none;" src="https://i.imgur.com/kJ6oz7e.png">';
    v690 +=
      '<img class="pwrups v4" style="display: none;" src="https://i.imgur.com/l3ds43O.png">';
    v690 +=
      '<img class="pwrups v5" style="display: none;" src="https://i.imgur.com/FqA56k6.png">';
    v690 +=
      '<img class="pwrups v6" style="display: none;" src="https://i.imgur.com/mSCZeEp.png">';
    v690 += "</div>";
    v690 +=
      '<img class="worm_1" src="https://i.imgur.com/iekrYYm.png"><span class="Worm_cerca"></span>';
    v690 +=
      '</div><div class="worm_2"><button id="settingBtn"><img src="https://i.imgur.com/bKAe6W9.png"/></button><div id="settingContent"><div class="container1"><span class="settings_span">Spin-Fast: </span><input id="smoothCamera" class="range" type="range" min="0.3" max="0.6" value="\' + theoKzObjects.smoothCamera + \'" step="0.1" onmousemove="smoothCameraValue.value=value" /></div><div class="container1">\n        <span class="settings_span">Power-ups-Size: </span>\n        <input id="PortionSize" class="range" type="range" min="1" max="6" value="\' + theoKzObjects.PortionSize + \'" step="1" onmousemove="rangevalue1.value=value" />\n        </div>\n        \n      <div class="container1">\n      <span class="settings_span">Power-ups-Aura: </span>\n      <input id="PortionAura" class="range" type="range" min="1.2" max="3.2" value="\' + theoKzObjects.PortionAura + \'" step="0.2" onmousemove="PortionAuravalue.value=value" />\n      </div>\n       \n      <div class="container1">\n                    <span class="settings_span">Food-Size: </span>\n                    <input id="FoodSize" class="range" type="range" min="0.5" max="3" value="\' + theoKzObjects.FoodSize + \'" step="0.5" onmousemove="rangevalue2.value=value" />\n                    </div>\n                    <div class="container1">\n                    <span class="settings_span">Food-Shadow: </span>\n                    <input id="FoodShadow" class="range" type="range" min="0.5" max="3" value="\' + theoKzObjects.FoodShadow + \'" step="0.5" onmousemove="FoodShadowvalue.value=value" />\n                    </div>\n    </div>\n    </div><div style="display:none" id="zoom-container"><div id="zoom-out">-</div><div id="zoom-in">+</div><div class="worm_3">x.<span id="zoom-percentage"></span>';
    $("#game-view").append(v690);
    function f100(p637) {
      if (theoKzObjects.PropertyManager) {
        p637.skinId = theoKzObjects.PropertyManager.rh;
        p637.eyesId = theoKzObjects.PropertyManager.sh;
        p637.mouthId = theoKzObjects.PropertyManager.th;
        p637.glassesId = theoKzObjects.PropertyManager.uh;
        p637.hatId = theoKzObjects.PropertyManager.vh;
      }
    }
    function f101() {
      $("#mm-event-text"
      );
      $("#mm-store").after(`
    <link href='https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css' rel='stylesheet'/>
    
    <div id="mm-store" style="float: right;position: relative;min-width: 95px;background:#ff0000" onclick="openPopup()">
        <i aria-hidden="true" class="fa fa-cog fa-spin" style="color:yellow;font-size: 23px;"></i> Tool
    </div>
    
    <div id="popup" class="popup">
        <div class="phdr1"> 
            <button 
                style="float: right;background: #00000000;float: right;height: 40px;border: none;font-size: 16px;font-weight: 600;" 
                onclick="navigator.clipboard.writeText('${theoKzObjects.FB_UserID}').then(()=> alert('You ID ${theoKzObjects.FB_UserID} copied!'));">
                Copy ID
            </button>
        </div>

        <div class="close-button" onclick="closePopup()"></div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

        <div class="layout">
            <div class="sidebar">
                <ul>
                    <li>
                        <div class="hii" style="background: none; border: none;" id="click-btn">
                            <i class="fas fa-user"></i> Profile
                        </div>
                    </li>
                    <li id="toolgame-btn" class="selected" onclick="displayContent('toolgame', this)">
                        <i class="fas fa-cogs"></i> Tool Game
                    </li>
                    <li id="skins-btn" onclick="displayContent('skins', this)">
                        <i class="fas fa-paint-brush"></i> Skins
                    </li>
                    <li id="chuot-btn" onclick="displayContent('chuot', this)">
                        <i class="fas fa-mouse"></i> Cursor
                    </li>
                    <li id="gioithieu-btn" onclick="displayContent('gioithieu', this)">
                        <i class="fas fa-info-circle"></i> Version Change
                    </li>
                </ul>
            </div>

            <div class="main-content">
                <!-- Tool Game -->
                <div id="toolgame" class="content-section">
                    <div class="settings-row">
                        <div class="settings-lineZoom">
                            <span class="settings-labelZoom">
                                <i class="fas fa-bolt yellow-icon"></i> Eat Fast:
                            </span>
                            <input class="settings-switchZoom" id="settings-Abilityzoom-switch" type="checkbox"/>
                            <label for="settings-Abilityzoom-switch"></label>
                        </div>

                        <div class="settings-lineZoom">
                            <span class="settings-labelZoom">
                                <i class="fas fa-video yellow-icon"></i> Center Streamer :
                            </span>
                            <input class="settings-switchZoom" id="settings-stremingmode-switch" type="checkbox"/>
                            <label for="settings-stremingmode-switch"></label>
                        </div>
                    </div>

                    <div class="settings-row">
                        <div class="settings-lineZoom">
                            <span class="settings-labelZoom">
                                <i class="fas fa-trophy yellow-icon"></i> 1 Top Score :
                            </span>
              <select id="sel_top">
                      <option value="10">All</option>
                      <option value="1" >Top 1</option>
                      <option value="2" >Top 2</option>
                      <option value="3" >Top 3</option>
                      <option value="4" >Top 4</option>
                      <option value="5" >Top 5</option>
                      <option value="6" >Top 6</option>
                      <option value="7" >Top 7</option>
                      <option value="8" >Top 8</option>
                      <option value="9" >Top 9</option>
                                                  </select>
                        </div>

                        <div class="settings-lineZoom">
                            <span class="settings-labelZoom">
                                <i class="fas fa-toggle-off yellow-icon"></i> Turn Off 
                                <img style="height: 18px;" src="https://i.imgur.com/cOrk9pM.png" alt="Turn on"/> :
                            </span>
                            <input class="settings-switchZoom" id="settings-stremingmodemuiten-switch" type="checkbox"/>
                            <label for="settings-stremingmodemuiten-switch"></label>
                        </div>
                    </div>

                    <div class="settings-row">
                        <div class="settings-lineZoom">
                            <span class="settings-labelZoom">
                                <i class="fas fa-chart-bar yellow-icon"></i> Total Kill :
                            </span>
                            <input class="settings-switchZoom" id="settings-stremingmodesaveheadshot-switch" type="checkbox"/>
                            <label for="settings-stremingmodesaveheadshot-switch"></label>
                        </div>

                        <div class="settings-lineZoom">
                            <span class="settings-labelZoom">
                                <i class="fas fa-smile yellow-icon"></i> Off Emoj:
                            </span>
                            <input class="settings-switchZoom" id="settings-stremingmodeemoj-switch" type="checkbox"/>
                            <label for="settings-stremingmodeemoj-switch"></label>
                        </div>
                    </div>

                    <div class="settings-row">
                        <div class="settings-lineZoom">
                            <span class="settings-labelZoom">
                                <i class="fas fa-volume-mute yellow-icon"></i> Off Sounds:
                            </span>
                            <input class="settings-switchZoom" id="settings-stremingmodeheadshot-switch" type="checkbox"/>
                            <label for="settings-stremingmodeheadshot-switch"></label>
                        </div>

                        <div class="settings-lineZoom">
                            <span class="settings-labelZoom">
                                <i class="fa fa-eye-slash"></i> Türkiye Flag Map
                            </span>
                            <input class="settings-switchZoom" id="settings-stremingmodeanclock-switch" type="checkbox"/>
                            <label for="settings-stremingmodeanclock-switch"></label>
                        </div>
                    </div>
                          <div class="settings-row">
                        <div class="settings-lineZoom">
                            <span class="settings-labelZoom">
                                <i class="fas fa-toggle-off yellow-icon"></i> Turn Off 
                                <img style="height: 18px;" src="https://i.imgur.com/9j2U5SC.png" alt="Turn on"/> :
                            </span>
                            <input class="settings-switchZoom" id="settings-stremingmodemuitenn-switch" type="checkbox"/>
                            <label for="settings-stremingmodemuitenn-switch"></label>
                        </div>
                        <div class="settings-lineZoom">
                            <span class="settings-labelZoom">
                                <i class="fas fa-question-circle"></i> Updating..!
                            </span>
                            <input class="settings-switchZoom" id="settings-stremingmodebatop-switch" type="checkbox"/>
                            <label for="settings-stremingmodebatop-switch"></label>
                        </div>
                    </div>


                    <div class="spancursor"> Select Background</div>
                    <div class="background-container"></div>
                </div>

                <!-- Skins -->
                <div id="skins" class="content-section">
                    <div style="margin-bottom: 10px;margin-top: -10px;" class="spancursor"> Upload Skins</div>
                    <iframe style="width: 100%; height: 43px;" src="https://haylamday.com/api/skins_upload.php" scrolling="no" frameborder="0"></iframe>

                    <div style="margin-top: 20px;margin-bottom: 20px;" class="spancursor"> Upload Hat</div>
                    <iframe style="width: 100%; height: 40px;" src="https://haylamday.com/api/hat_upload.php" scrolling="no" frameborder="0"></iframe>

                    <div class="spancursor">NOTE : </div>
                    <ul>
                        <li>Uploading 18+ sex skins is prohibited. ID will be locked if violated.</li>
                        <li>Vui lòng không tải lên skin sex 18+. Bị phát hiện sẽ bị khóa. Xin cảm ơn !</li>
                    </ul>
                </div>

                <!-- Cursor -->
                <div id="chuot" class="content-section">
                    <div class="spancursor"> Select Cursor</div>
                    <div class="cursor-container">
                        <div id="default-cursor-btn">
                            <img src="https://i.imgur.com/rI522o3.png">
                        </div>
                    </div>
                </div>

                <!-- Version -->
                <div id="gioithieu" class="content-section">
                    <h2>Version Change</h2>
                    <button id="resetScript" class="reset-button">Cache Delete</button>
                </div>
            </div>
        </div>

        <script>
            function displayContent(sectionId, element) {
                let sections = document.querySelectorAll('.content-section');
                sections.forEach(section => section.style.display = 'none');

                let activeSection = document.getElementById(sectionId);
                if (activeSection) {
                    activeSection.style.display = 'block';
                }

                let menuItems = document.querySelectorAll('.sidebar ul li');
                menuItems.forEach(item => item.classList.remove('selected'));
                element.classList.add('selected');
            }

            window.onload = function() {
                displayContent('toolgame', document.getElementById('toolgame-btn'));
            };
            
            const button = document.getElementById("click-btn");
            const playerInfo = document.getElementById("mm-player-info");

            button.addEventListener("click", function() {
                playerInfo.click();
            });

            playerInfo.addEventListener("click", function() {
                console.log("Div đã được click!");
            });
        </script>

        <style>
            .yellow-icon { color: gold; }
            .layout { display: flex; width: 100%; height: 94%; }
            .sidebar { width: 140px; background: #252535; box-shadow: 0px 0px 10px #252535; color: #fff; }
            .sidebar ul { list-style-type: none; padding: 0; margin: 0; }
            .sidebar ul li { padding: 12px; cursor: pointer; border-bottom: 1px solid #ddd; width: 140px; }
            .sidebar ul li:hover { background-color: #666; }
            .sidebar ul li.selected { background-color: #000; color: white; }
            .main-content { flex-grow: 1; padding: 20px; background: #393e43; color: #fff; }
            .content-section { display: none; transition: display 0.3s ease-in-out; }
            #toolgame { display: block; }
            h2 { margin-top: 0; }
        </style>
    </div>
`);

$("#sel_top").val(theoKzObjects.lr || 10);
$("#sel_top").change(function () {
    theoKzObjects.lr = parseInt(this.value);
    localStorage.setItem("SaveupGame", JSON.stringify(theoKzObjects));
});  

     $("#loa831pibur0w4gv").replaceWith(
        '\n        <div style="margin: 0;" id="loa831pibur0w4gv">\n          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />\n          <div class="label" id="titleSetings">Zoom only works with activation.</div>\n          <div class="bao-list1">\n            <input type="text" value="' +
          theoKzObjects.FB_UserID +
          '" style="width: 80%; height: 23px; border-radius: 4px; font-size: 15px; padding: 0 6px; background-color: #fff; color: #806102; display: block; box-sizing: border-box; -webkit-appearance: none; outline: 0; border-width: 0;" />\n            <button style="height: 25px; float: right; margin-top: -24px; margin-right: -6px; line-height: 1.2; font-size: 14px;" onclick="navigator.clipboard.writeText(\'' +
          theoKzObjects.FB_UserID +
          "').then(() => alert('Your ID " +
          theoKzObjects.FB_UserID +
          ' copied!\'));">Copy</button>\n            <center>\n              <div class="hg">\n                <a target="_blank" href="https://wormateup.live/">Home Page</a>\n                <br> <br> <br><br> <br> <br>\n                                <a">If you haven t activated the tool, please go to Discord.</a>\n\n              </div>\n            </center>\n            <i class="fa fa-book" aria-hidden="true" style="color: #48ff00;"></i>\n            <a style="color: #2ae1eb; font-weight: 600;" href="https://discord.gg/zNJkB8EeUF">Activate the tool via Discord./a>\n          </div>\n        </div>\n      '
      );
      var v691 = document.getElementById("settingBtn");
      var v692 = document.getElementById("settingContent");
      v691.addEventListener("click", function () {
        if (v692.style.display === "none") {
          v692.style.display = "block";
        } else {
          v692.style.display = "none";
        }
      });
      $("#PortionSize").on("input", function () {
        theoKzObjects.PortionSize = $(this).val();
        localStorage.PotenciadorSize = theoKzObjects.PortionSize;
      });
      $("#PortionAura").on("input", function () {
        theoKzObjects.PortionAura = $(this).val();
        localStorage.PotenciadorAura = theoKzObjects.PortionAura;
      });
      $("#smoothCamera").on("input", function () {
        theoKzObjects.smoothCamera = $(this).val();
        localStorage.smoothCamera = theoKzObjects.smoothCamera;
      });
      $("#FoodSize").on("input", function () {
        theoKzObjects.FoodSize = $(this).val();
        localStorage.ComidaSize = theoKzObjects.FoodSize;
      });
      $("#FoodShadow").on("input", function () {
        theoKzObjects.FoodShadow = $(this).val();
        localStorage.ComidaShadow = theoKzObjects.FoodShadow;
      });
      $("#mm-advice-cont").html(
        '\n        <div class="vietnam" style="display: grid !important; grid-template-columns: 1fr 1fr 1fr; gap: 8.5px;">\n          <input type="button" value="FULL SCREEN" class="fullscreen_button">\n         \n          </div>\n      '
      );
      $(".mm-merchant-cont").html(
        '\n  <div style="display: flex; justify-content: center; align-items: center;margin-top:10px">\n    <a href="https://www.youtube.com/WormXY" target="_blank" style="margin-right: 10px;">\n      <img src="https://wormateup.live/images/hiep_img/" alt="" width="155">\n    </a>\n    <a href="https://wormateup.live.com" target="_blank">\n      <img src="https://i.imgur.com/V.png" alt="" width="155">\n    </a>\n  </div>'
      );
      $(document).ready(function () {
        $(".fullscreen_button").on("click", function () {
          if (
            (document.fullScreenElement &&
              document.fullScreenElement !== null) ||
            (!document.mozFullScreen && !document.webkitIsFullScreen)
          ) {
            if (document.documentElement.requestFullScreen) {
              document.documentElement.requestFullScreen();
            } else if (document.documentElement.mozRequestFullScreen) {
              document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullScreen) {
              document.documentElement.webkitRequestFullScreen(
                Element.ALLOW_KEYBOARD_INPUT
              );
            }
          } else if (document.cancelFullScreen) {
            document.cancelFullScreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          }
        });
      });
      $("#hoisinh").click(function () {
        let v_0x2b5e54 = v_0x2b5e54;
        if (v_0x2b5e54) {
          anApp.r.Hd();
          anApp.sa(v_0x2b5e54);
        }
      });
      $(".mm-merchant").replaceWith("");
      async function f102(p638) {
        return new Promise((p639) => {
          const vSetTimeout3 = setTimeout(() => {
            p639({
              id: p638.id,
              online: false,
              dataRoom: p638.dataRoom,
              isFull: false,
              trafficLevel: "unknown",
            });
          }, 5000);
          try {
            const v693 = new WebSocket(p638.serverUrl);
            v693.onopen = () => {
              clearTimeout(vSetTimeout3);
              let v694 = "low";
              if (p638.currentPlayers >= p638.maxPlayers * 0.7) {
                v694 = "high";
              } else if (p638.currentPlayers >= p638.maxPlayers * 0.4) {
                v694 = "medium";
              }
              const v695 = p638.currentPlayers >= p638.maxPlayers;
              p639({
                id: p638.id,
                online: true,
                dataRoom: p638.dataRoom,
                isFull: v695,
                trafficLevel: v694,
                currentPlayers: p638.currentPlayers,
                maxPlayers: p638.maxPlayers,
              });
              v693.close();
            };
            v693.onerror = () => {
              clearTimeout(vSetTimeout3);
              p639({
                id: p638.id,
                online: false,
                dataRoom: p638.dataRoom,
                isFull: false,
                trafficLevel: "offline",
              });
            };
            v693.onclose = () => {
              clearTimeout(vSetTimeout3);
            };
          } catch (_0x35dd27) {
            clearTimeout(vSetTimeout3);
            p639({
              id: p638.id,
              online: false,
              dataRoom: p638.dataRoom,
              isFull: false,
              trafficLevel: "error",
            });
          }
        });
      }
      $(".mm-merchant").replaceWith("");
      $(".description-text").replaceWith(
        '\n        <div id=\"title\">WormXY</div>         <div class="description-text-test">\n            <ul style="margin-top: 5px;" class="ui-tabs-nav">\n              <li class="ui-tabs-tab ui-tab ui-tab-inactive0 ui-tab-active" style="margin: -5px">\n                <a> <span class="flag br" value="https://i.imgur.com/dixYLjk.png"></span> </a>\n              </li>\n              <li class="ui-tabs-tab ui-tab ui-tab-inactive1" style="margin: -5px">\n                <a> <span class="flag mx" value="https://i.imgur.com/JMAvuFN.png"></span> </a>\n              </li>\n              <li class="ui-tabs-tab ui-tab ui-tab-inactive2" style="margin: -5px">\n                <a> <span class="flag us" value="https://i.imgur.com/Jb2FF0y.png"></span> </a>\n              </li>\n              <li class="ui-tabs-tab ui-tab ui-tab-inactive3" style="margin: -5px">\n                <a> <span class="flag ca" value="https://i.imgur.com/m1skEsB.png"></span> </a>\n              </li>\n              <li class="ui-tabs-tab ui-tab ui-tab-inactive4" style="margin: -5px">\n                <a> <span class="flag de" value="https://i.imgur.com/VgCH8iy.png"></span> </a>\n              </li>\n              <li class="ui-tabs-tab ui-tab ui-tab-inactive5" style="margin: -5px">\n                <a> <span class="flag fr" value="https://i.imgur.com/QuEjBr0.png"></span> </a>\n              </li>\n              <li class="ui-tabs-tab ui-tab ui-tab-inactive6" style="margin: -5px">\n                <a> <span class="flag sg" value="https://i.imgur.com/ErLcgXP.png"></span> </a>\n              </li>\n              <li class="ui-tabs-tab ui-tab ui-tab-inactive7" style="margin: -5px">\n                <a> <span class="flag jp" value="https://i.imgur.com/P2rYk1k.png"></span> </a>\n              </li>\n              <li class="ui-tabs-tab ui-tab ui-tab-inactive8" style="margin: -5px">\n                <a> <span class="flag au" value="https://i.imgur.com/12e0wp4.png"></span> </a>\n              </li>\n              <li class="ui-tabs-tab ui-tab ui-tab-inactive9" style="margin: -5px">\n                <a> <span class="flag gb" value="https://i.imgur.com/8pQY6RW.png"></span> </a>\n              </li>\n            </ul>\n            <div class="bao-list2">\n              <div class="gachngang"></div>\n              <div class="servers-container">\n                <div class="servers-peru"></div>\n                <div class="servers-mexico" style="display: none;"></div>\n                <div class="servers-eeuu" style="display: none;"></div>\n                <div class="servers-canada" style="display: none;"></div>\n                <div class="servers-germania" style="display: none;"></div>\n                <div class="servers-francia" style="display: none;"></div>\n                <div class="servers-singapur" style="display: none;"></div>\n                <div class="servers-japon" style="display: none;"></div>\n                <div class="servers-australia" style="display: none;"></div>\n                <div class="servers-granbretana" style="display: none;"></div>\n              </div>\n                <script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.min.js"></script>\n            </div>\n          </div>\n        </div>\n      '
      );
      $(".ui-tab").on("click", account);
      $(".flag").click(function () {
        let v696 = $(this).attr("value");
        theoKzObjects.flag = v696;
        ctx.containerImgS.texture = ctx.onclickServer;
        retundFlagError();
        console.log(v696);
      });
      for (a = 0; a < servers.Api_listServer.length; a++) {
        var v697 = servers.Api_listServer[a].serverUrl;
        var v698 = servers.Api_listServer[a].name;
        var v699 = servers.Api_listServer[a].region;
        let v700 = document.createElement("p");
        v700.value = v697;
        v700.innerHTML = v698;
        if (v699 == "peru") {
          $(".servers-peru").prepend(v700);
        } else if (v699 == "mexico") {
          $(".servers-mexico").prepend(v700);
        } else if (v699 == "eeuu") {
          $(".servers-eeuu").prepend(v700);
        } else if (v699 == "canada") {
          $(".servers-canada").prepend(v700);
        } else if (v699 == "germania") {
          $(".servers-germania").prepend(v700);
        } else if (v699 == "francia") {
          $(".servers-francia").prepend(v700);
        } else if (v699 == "singapur") {
          $(".servers-singapur").prepend(v700);
        } else if (v699 == "japon") {
          $(".servers-japon").prepend(v700);
        } else if (v699 == "australia") {
          $(".servers-australia").prepend(v700);
        } else if (v699 == "granbretana") {
          $(".servers-granbretana").prepend(v700);
        }
        $(v700).attr("id", v699);
        $(v700).attr("class", "selectSala");
        $(v700).attr("value", v698);
        $(v700).click(function () {
        let t = $(this).find("#svhiep .valu").text().trim();
                    ctx.setServer(t);
                    let e = $(this).val();
                    ctx.containerImgS.texture = ctx.onclickServer,
                    retundFlagError(),
                    window.server_url = e,
                    $("#mm-action-play").click(),
                    $("#adbl-continue").click()
        });
      }
    }
    function f103() {
      $("#getskin").on("click", function () {
        for (var v702 = 0; v702 < clientes.clientesActivos.length; v702++) {
          var v703 = clientes.clientesActivos[v702].cliente_NOMBRE;
          var v704 = clientes.clientesActivos[v702].cliente_ID;
          var v705 = clientes.clientesActivos[v702].Client_VisibleSkin;
          var v706 = clientes.clientesActivos[v702].Client_VisibleSkin1;
          var v707 = clientes.clientesActivos[v702].Client_VisibleSkin2;
          var v708 = clientes.clientesActivos[v702].Client_VisibleSkin3;
          var v709 = clientes.clientesActivos[v702].Client_VisibleSkin4;
          var v710 = clientes.clientesActivos[v702].Client_VisibleSkin5;
          var v711 = clientes.clientesActivos[v702].Client_VisibleSkin6;
          var v712 = clientes.clientesActivos[v702].Client_VisibleSkin7;
          var v713 = clientes.clientesActivos[v702].Client_VisibleSkin8;
          var v714 = clientes.clientesActivos[v702].Client_VisibleSkin9;
          var v715 = clientes.clientesActivos[v702].Client_VisibleSkin10;
          var v716 = clientes.clientesActivos[v702].Client_VisibleSkin11;
          var v717 = clientes.clientesActivos[v702].Client_VisibleSkin12;
          var v718 = clientes.clientesActivos[v702].Client_VisibleSkin13;
          var v719 = clientes.clientesActivos[v702].Client_VisibleSkin14;
          var v720 = clientes.clientesActivos[v702].Client_VisibleSkin15;
          var v721 = clientes.clientesActivos[v702].Client_VisibleSkin16;
          var v722 = clientes.clientesActivos[v702].Client_VisibleSkin17;
          var v723 = clientes.clientesActivos[v702].Client_VisibleSkin18;
          var v724 = clientes.clientesActivos[v702].Client_VisibleSkin19;
          var v725 = clientes.clientesActivos[v702].Client_VisibleSkin20;
          var v726 = clientes.clientesActivos[v702].Client_KeyAccecs;
          if (theoKzObjects.FB_UserID == 0) {
          } else if (theoKzObjects.FB_UserID == v704) {
            if (v726 == "XTPRIVATESKIN") {
              for (let v727 = 0; v727 < theoKzObjects.idSkin.length; v727++) {
                const v728 = theoKzObjects.idSkin[v727];
                if (
                  v728.id == v705 ||
                  v728.id == v706 ||
                  v728.id == v707 ||
                  v728.id == v708 ||
                  v728.id == v709 ||
                  v728.id == v710 ||
                  v728.id == v711 ||
                  v728.id == v712 ||
                  v728.id == v713 ||
                  v728.id == v714 ||
                  v728.id == v715 ||
                  v728.id == v716 ||
                  v728.id == v717 ||
                  v728.id == v718 ||
                  v728.id == v719 ||
                  v728.id == v720 ||
                  v728.id == v721 ||
                  v728.id == v722 ||
                  v728.id == v723 ||
                  v728.id == v724 ||
                  v728.id == v725
                ) {
                  v728.nonbuyable = false;
                }
              }
            } else {
            }
          } else {
          }
        }
      });
    }
    function f104() {
      theoKzObjects.adblock = true;
      $("#loa831pibur0w4gv").replaceWith(
        '\n        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />\n         <div style="margin: 0;" id="loa831pibur0w4gv">\n          <div class="label" id="titleSetings">WormXY</div>\n          <div class="bao-list1">\n            <div class="list1">\n              <i class="fa fa-book" aria-hidden="true" style="color: #48ff00;"></i>\n              WormXY: Welcome to our extension\n            </div>\n            <br>\n            <div class="list1">\n       <div class="list1">\n              <i class="fa fa-book" aria-hidden="true" style="color: #48ff00;"></i>\n\n              <a href="https://discord.gg"> Discord Server</a>\n            </div>\n          </div>\n        </div>\n      '
      );
      window.multiplier = 1;
      window.zoomLevel = 5;
      window.onwheel = (p640) => {
        if (p640.deltaY > 0) {
          window.multiplier *= 0.8;
        } else {
          window.multiplier /= 0.8;
        }
        window.changedNf();
      };
      function f105() {
        window.zoomLevel++;
        window.multiplier *= 0.8;
        changedNf();
        f107();
      }
      function f106() {
        if (window.zoomLevel > 0) {
          window.zoomLevel--;
          window.multiplier /= 0.8;
          changedNf();
          f107();
        }
      }
      function f107() {
        var v729 = Math.round((window.multiplier / 0.625) * 100);
        v729 = Math.min(100, v729);
        var v730 = document.getElementById("zoom-percentage");
        v730.textContent = v729 + "%";
      }
      document.getElementById("zoom-in").addEventListener("touchstart", f105, {
        passive: false,
      });
      document.getElementById("zoom-out").addEventListener("touchstart", f106, {
        passive: false,
      });
      window.onwheel = function (p641) {
        p641.preventDefault();
        if (p641.deltaY < 0) {
          f105();
        } else {
          f106();
        }
      };
      $("#settings-Abilityzoom-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          theoKzObjects.eat_animation = 1;
          localStorage.setItem("mySwitch", "on");
        } else {
          console.log("I'm not checked");
          theoKzObjects.eat_animation = 0.0025;
          localStorage.setItem("mySwitch", "off");
        }
      });
      $(document).ready(function () {
        var v731 = localStorage.getItem("mySwitch");
        if (v731 === "on") {
          $("#settings-Abilityzoom-switch").prop("checked", true);
          theoKzObjects.eat_animation = 1;
        } else {
          $("#settings-Abilityzoom-switch").prop("checked", false);
          theoKzObjects.eat_animation = 0.0025;
        }
      });
      $("#settings-stremingmode-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          theoKzObjects.ModeStremer = true;
          localStorage.setItem("ModeStremer", "true");
        } else {
          console.log("I'm not checked");
          theoKzObjects.ModeStremer = false;
          localStorage.setItem("ModeStremer", "false");
        }
      });
                  $("#settings-stremingmodemuiten-switch").on("click", function() {
                this.checked ? (console.log("I am checked"),
                theoKzObjects.ModeStremermuiten = !0,
                localStorage.setItem("ModeStremermuiten", "true")) : (console.log("I'm not checked"),
                theoKzObjects.ModeStremermuiten = !1,
                localStorage.setItem("ModeStremermuiten", "false")),
                $("#svhiep").click(),
                setTimeout(function() {
                    location.reload()
                }, 1e3)
            }),
            $(document).ready(function() {
                "true" === localStorage.getItem("ModeStremermuitenn") ? (theoKzObjects.ModeStremermuitenn = !0,
                $("#settings-stremingmodemuitenn-switch").prop("checked", !0)) : (theoKzObjects.ModeStremermuitenn = !1,
                $("#settings-stremingmodemuitenn-switch").prop("checked", !1))
            });
             $("#settings-stremingmodemuitenn-switch").on("click", function() {
                this.checked ? (console.log("I am checked"),
                theoKzObjects.ModeStremermuitenn = !0,
                localStorage.setItem("ModeStremermuitenn", "true")) : (console.log("I'm not checked"),
                theoKzObjects.ModeStremermuitenn = !1,
                localStorage.setItem("ModeStremermuitenn", "false")),
                $("#svhiep").click(),
                setTimeout(function() {
                    location.reload()
                }, 1e3)
            }),
            $(document).ready(function() {
                "true" === localStorage.getItem("ModeStremermuitenn") ? (theoKzObjects.ModeStremermuitenn = !0,
                $("#settings-stremingmodemuitenn-switch").prop("checked", !0)) : (theoKzObjects.ModeStremermuitenn = !1,
                $("#settings-stremingmodemuitenn-switch").prop("checked", !1))
            });
      $(document).ready(function () {
        var v732 = localStorage.getItem("ModeStremer");
        if (v732 === "true") {
          theoKzObjects.ModeStremer = true;
          $("#settings-stremingmode-switch").prop("checked", true);
        } else {
          theoKzObjects.ModeStremer = false;
          $("#settings-stremingmode-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodebatop-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          theoKzObjects.ModeStremerbatop = true;
          localStorage.setItem("ModeStremerbatop", "true");
        } else {
          console.log("I'm not checked");
          theoKzObjects.ModeStremerbatop = false;
          localStorage.setItem("ModeStremerbatop", "false");
        }
      });
      $(document).ready(function () {
        var v733 = localStorage.getItem("ModeStremerbatop");
        if (v733 === "true") {
          theoKzObjects.ModeStremerbatop = true;
          $("#settings-stremingmodebatop-switch").prop("checked", true);
        } else {
          theoKzObjects.ModeStremerbatop = false;
          $("#settings-stremingmodebatop-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodesaveheadshot-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          theoKzObjects.ModeStremersaveheadshot = true;
          localStorage.setItem("ModeStremersaveheadshot", "true");
        } else {
          console.log("I'm not checked");
          theoKzObjects.ModeStremersaveheadshot = false;
          localStorage.setItem("ModeStremersaveheadshot", "false");
        }
        location.reload();
      });
      $(document).ready(function () {
        var v734 = localStorage.getItem("ModeStremersaveheadshot");
        if (v734 === "true") {
          theoKzObjects.ModeStremersaveheadshot = true;
          $("#settings-stremingmodesaveheadshot-switch").prop("checked", true);
        } else {
          theoKzObjects.ModeStremersaveheadshot = false;
          $("#settings-stremingmodesaveheadshot-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodeheadshot-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          theoKzObjects.ModeStremerheadshot = true;
          localStorage.setItem("ModeStremerheadshot", "true");
        } else {
          console.log("I'm not checked");
          theoKzObjects.ModeStremerheadshot = false;
          localStorage.setItem("ModeStremerheadshot", "false");
        }
      });
      $(document).ready(function () {
        var v735 = localStorage.getItem("ModeStremerheadshot");
        if (v735 === "true") {
          theoKzObjects.ModeStremerheadshot = true;
          $("#settings-stremingmodeheadshot-switch").prop("checked", true);
        } else {
          theoKzObjects.ModeStremerheadshot = false;
          $("#settings-stremingmodeheadshot-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodeheadshot-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          theoKzObjects.ModeStremerheadshot = true;
          localStorage.setItem("ModeStremerheadshot", "true");
        } else {
          console.log("I'm not checked");
          theoKzObjects.ModeStremerheadshot = false;
          localStorage.setItem("ModeStremerheadshot", "false");
        }
      });
      $(document).ready(function() {
                "true" === localStorage.getItem("ModeStremeranclock") ? (theoKzObjects.ModeStremeranclock = !0,
                $("#settings-stremingmodeanclock-switch").prop("checked", !0)) : (theoKzObjects.ModeStremeranclock = !1,
                $("#settings-stremingmodeanclock-switch").prop("checked", !1)),
                theoKzObjects.ModeStremeranclock ? (ctx.clockan.width = 100,
                ctx.clockan.height = 100,
                ctx.clockan.x = -50,
                ctx.clockan.y = -50) : (ctx.clockan.width = 0,
                ctx.clockan.height = 0,
                ctx.clockan.x = -50,
                ctx.clockan.y = -50)
            });
            $("#settings-stremingmodeanclock-switch").on("click", function() {
                this.checked ? (console.log("I am checked"),
                theoKzObjects.ModeStremeranclock = !0,
                localStorage.setItem("ModeStremeranclock", "true")) : (console.log("I'm not checked"),
                theoKzObjects.ModeStremeranclock = !1,
                localStorage.setItem("ModeStremeranclock", "false")),
                theoKzObjects.ModeStremeranclock ? (ctx.clockan.width = 100,
                ctx.clockan.height = 100,
                ctx.clockan.x = -50,
                ctx.clockan.y = -50) : (ctx.clockan.width = 0,
                ctx.clockan.height = 0,
                ctx.clockan.x = -50,
                ctx.clockan.y = -50)
            });
      $(document).ready(function () {
        var v736 = localStorage.getItem("ModeStremerheadshot");
        if (v736 === "true") {
          theoKzObjects.ModeStremerheadshot = true;
          $("#settings-stremingmodeheadshot-switch").prop("checked", true);
        } else {
          theoKzObjects.ModeStremerheadshot = false;
          $("#settings-stremingmodeheadshot-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodeemoj-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          theoKzObjects.ModeStremeremoj = true;
          localStorage.setItem("ModeStremeremoj", "true");
        } else {
          console.log("I'm not checked");
          theoKzObjects.ModeStremeremoj = false;
          localStorage.setItem("ModeStremeremoj", "false");
        }
      });
      $(document).ready(function () {
        var v737 = localStorage.getItem("ModeStremeremoj");
        if (v737 === "true") {
          theoKzObjects.ModeStremeremoj = true;
          $("#settings-stremingmodeemoj-switch").prop("checked", true);
        } else {
          theoKzObjects.ModeStremeremoj = false;
          $("#settings-stremingmodeemoj-switch").prop("checked", false);
        }
      });
      $("#settings-arrowmobile-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          theoKzObjects.arrow = false;
        } else {
          console.log("I'm not checked");
          theoKzObjects.arrow = true;
        }
      });
      $("#PortionSize").on("input", function () {
        theoKzObjects.PortionSize = $(this).val();
        localStorage.PotenciadorSize = theoKzObjects.PortionSize;
      });
      $("#PortionAura").on("input", function () {
        theoKzObjects.PortionAura = $(this).val();
        localStorage.PotenciadorAura = theoKzObjects.PortionAura;
      });
      $("#smoothCamera").on("input", function () {
        theoKzObjects.smoothCamera = $(this).val();
        localStorage.smoothCamera = theoKzObjects.smoothCamera;
      });
      $("#FoodSize").on("input", function () {
        theoKzObjects.FoodSize = $(this).val();
        localStorage.ComidaSize = theoKzObjects.FoodSize;
      });
      $("#FoodShadow").on("input", function () {
        theoKzObjects.FoodShadow = $(this).val();
        localStorage.ComidaShadow = theoKzObjects.FoodShadow;
      });
      $("#KeyRespawn,#KeyAutoMov").on("keydown", function (p642) {
        if (isValidHotkey(p642)) {
          var v$106 = $(this);
          var vGetPresedKey = getPresedKey(p642);
          var v738 = p642.keyCode;
          v$106.val(vGetPresedKey);
          v$106.blur();
          window.keyMove = v738;
          window.localStorage.setItem(v$106.attr("id"), v738);
        } else {
          p642.preventDefault();
        }
      });
      for (a = 0; a < v688.length; a++) {
        var v739 = v688[a].url;
        var v740 = v688[a].nombre;
        let v741 = document.createElement("img");
        v741.src = v739;
        $(".cursor-container").prepend(v741);
        $(v741).attr("class", "cursor");
        $(v741).click(function () {
          let v742 = $(this).attr("src");
          localStorage.cursorSeleccionado = v742;
          $("#game-cont").css({
            cursor: "url(" + v742 + "), default",
          });
          $("#game-canvas").css({
            cursor: "url(" + v742 + "), default",
          });
          $("body").css({
            cursor: "url(" + v742 + "), default",
          });
        });
        $("#default-cursor-btn").click(function () {
          delete localStorage.cursorSeleccionado;
          $("#game-cont, #game-canvas, body").css("cursor", "default");
        });
      }
      $("#game-cont").css({
        cursor: "url(" + localStorage.cursorSeleccionado + "), default",
      });
      $("#game-canvas").css({
        cursor: "url(" + localStorage.cursorSeleccionado + "), default",
      });
      $("body").css({
        cursor: "url(" + localStorage.cursorSeleccionado + "), default",
      });
      for (a = 0; a < v689.length; a++) {
        var v743 = v689[a].url;
        var v744 = v689[a].nombre;
        let v745 = document.createElement("img");
        v745.src = v743;
        $(".background-container").prepend(v745);
        $(v745).attr("class", "background");
        $(v745).attr("value", v744);
        $(v745).click(function () {
          let v746 = $(this).attr("src");
          let v747 = $(this).attr("value");
          backgroundIMG = v746;
          localStorage.fondoSeleccionado = backgroundIMG;
          alert("You selected the background: " + v747);
          vUndefined2.q.Cf = new vF._b(vUndefined2.q.fn_o(v746));
        });
      }
      $(".background-container").prepend("");
      vUndefined2.q.Cf = new vF._b(
        vUndefined2.q.fn_o(localStorage.fondoSeleccionado)
      );
    }
    function f108(p643, p644) {
      let vF87 = function (p645, p646, p647, p648) {
        ctx.setCountGame(p645, p646, p647, p648);
      };
      if (p643 === "count") {
        theoKzObjects.kill = (theoKzObjects.kill || 0) + (p644 ? 0 : 1);
        theoKzObjects.headshot = (theoKzObjects.headshot || 0) + (p644 ? 1 : 0);
        theoKzObjects.totalKills = theoKzObjects.totalKills + (p644 ? 0 : 1);
        theoKzObjects.totalHeadshots =
          theoKzObjects.totalHeadshots + (p644 ? 1 : 0);
        vF87(
          theoKzObjects.kill,
          theoKzObjects.headshot,
          theoKzObjects.totalKills,
          theoKzObjects.totalHeadshots
        );
      }
      if (p643 === "open") {
        theoKzObjects.kill = 0;
        theoKzObjects.headshot = 0;
        $("#contadorKill_12").show();
        vF87(
          theoKzObjects.kill,
          theoKzObjects.headshot,
          theoKzObjects.totalKills,
          theoKzObjects.totalHeadshots
        );
      }
      if (p643 === "closed") {
        pwrups = {};
      }
      if (p643 === "cerrar") {
        theoKzObjects.kill = 0;
        theoKzObjects.headshot = 0;
        theoKzObjects.totalKills = 0;
        theoKzObjects.totalHeadshots = 0;
      }
    }
    if (!Number.prototype.dotFormat) {
      Number.prototype.dotFormat = function () {
        return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      };
    }
    if (!Number.prototype.dotFormatSelect2) {
      Number.prototype.dotFormatSelect2 = function () {
        return this.toString().substr(3, 2);
      };
    }
    setTimeout(function () {
      var v748 = [
        "كس",
        "fuck",
        "شيعة",
        "أن الله يراك",
        "عرضك",
        "نظيف",
        "طيبة",
        "اخوك",
        "اختك",
        "امك",
        "ابوك",
        "قواد",
      ];
      $("#mm-action-play").on("click", function () {
        var v749 = $("#mm-params-nickname").val();
        var v750 = v748.some(function (p649) {
          return v749.toLowerCase().includes(p649.toLowerCase());
        });
        if (v750) {
          $("#mm-params-nickname").val("أن الله يراك*");
        }
      });
      $(document).ready(function () {
        $("#getskin").click();
      });
      $("#final-share-fb").css("display", "none");
      $("#unl6wj4czdl84o9b").css("display", "none");
      $("#mm-menu-cont").css("display", "block");
      $("#mm-bottom-buttons").css("display", "block");
      $("#mm-player-info").css("display", "block");
      $("#mm-bottom-buttons").addClass("buttonNavidad");
      var v$107 = $("<img>", {
        id: "gold-crown",
        src: "https://i.imgur.com/z2o76Xe.png",
        alt: "gold-crown",
      });
      $("#mm-player-avatar").after(v$107);
      $("#gold-crown").css({
        position: "absolute",
        top: "-23px",
        transform: "translateX(-2%)",
        width: "50px",
        height: "auto",
      });
      $("#relojHelp").css("position", "absolute");
      $("#relojHelp").css("top", "12px");
      $("#relojHelp").css("left", "5px");
      $("#delete-account-view").css("display", "none");
    }, 3000);
    var v_0x319228 = function f109() {
      requestAnimationFrame(f109);
      f6().Pa();
    };
    v_0x319228();
    function f110() {
      var v751 = v$108.width();
      var v752 = v$108.height();
      var v753 = v$109.outerWidth();
      var v754 = v$109.outerHeight();
      var v755 = v$110.outerHeight();
      var v756 = v$111.outerHeight();
      var v757 = Math.min(
        1,
        Math.min((v752 - v756 - v755) / v754, v751 / v753)
      );
      var v758 = "translate(-50%, -50%) scale(" + v757 + ")";
      v$109.css({
        "-webkit-transform": v758,
        "-moz-transform": v758,
        "-ms-transform": v758,
        "-o-transform": v758,
        transform: v758,
      });
      f6().Ra();
      window.scrollTo(0, 1);
    }
    var v$108 = $("body");
    var v$109 = $("#stretch-box");
    var v$110 = $("#markup-header");
    var v$111 = $("#markup-footer");
    f110();
    $(window).resize(f110);
  })();
  window.anApp.p.Bc = function () {
    var v759 = window.anApp.p;
    var v760 = {};
    $.get(
      "https://resources.wormate.io/dynamic/assets/registry.json",
      function (p650) {
        v760 = p650;
        $.ajax({
          url: URLSERV_WORMXY + "/skins",
          method: "GET",
          dataType: "json",
          success: function (p651) {
            theoKzObjects.visibleSkin = p651.visibleSkin;
            delete p651.visibleSkin;
            for (let v761 in p651) {
              if (v761 !== "propertyList") {
                if (Array.isArray(p651[v761])) {
                  p650[v761] = p650[v761].concat(p651[v761]);
                } else {
                  p650[v761] = {
                    ...p650[v761],
                    ...p651[v761],
                  };
                }
              }
            }
            theoKzObjects.pL = p651.propertyList;
            theoKzObjects.idSkin = p651.skinArrayDict;
            v759.Cc(p650);
          },
          error: function (p652, p653, p654) {
            console.error(p654);
            v759.Cc(v760);
          },
        });
      }
    );
  };
  $("#background-canvas").replaceWith(
    '<canvas id="background-canvas"></canvas>'
  );
  $("#popup-login-gg").html(
    '<div class="settings-line" id="popup-login-gg1">Login via Google</div>'
  );
  $("#social-buttons").replaceWith("");
  $("#markup-footer");
});
function openPopup() {
  var v762 = document.getElementById("popup");
  var v763 = document.getElementById("overlay");
  v762.style.display = "block";
  v763.style.display = "block";
}
function closePopup() {
  var v764 = document.getElementById("popup");
  var v765 = document.getElementById("overlay");
  v764.style.display = "none";
  v765.style.display = "none";
}
function account() {
  $(".mx").on("click", function () {
    $(".servers-mexico").fadeIn(500);
    $("#addflag").attr("class", "flag mx");
    $(".ui-tab-inactive1").attr("class", "ui-tab-active ui-tab-inactive1");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-peru").fadeOut(100);
    $(".servers-eeuu").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".br").on("click", function () {
    $(".servers-mexico").fadeOut(100);
    $(".servers-eeuu").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
    $(".ui-tab-inactive0").attr("class", "ui-tab-active ui-tab-inactive0");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-peru").fadeIn(500);
    $("#addflag").attr("class", "flag br");
  });
  $(".us").on("click", function () {
    $(".servers-eeuu").fadeIn(500);
    $("#addflag").attr("class", "flag us");
    $(".ui-tab-inactive2").attr("class", "ui-tab-active ui-tab-inactive2");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".ca").on("click", function () {
    $(".servers-canada").fadeIn(500);
    $("#addflag").attr("class", "flag ca");
    $(".ui-tab-inactive3").attr("class", "ui-tab-active ui-tab-inactive3");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(500);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".de").on("click", function () {
    $(".servers-germania").fadeIn(500);
    $("#addflag").attr("class", "flag de");
    $(".ui-tab-inactive4").attr("class", "ui-tab-active ui-tab-inactive4");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(500);
    $(".servers-canada").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".fr").on("click", function () {
    $(".servers-francia").fadeIn(500);
    $("#addflag").attr("class", "flag fr");
    $(".ui-tab-inactive5").attr("class", "ui-tab-active ui-tab-inactive5");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".sg").on("click", function () {
    $(".servers-singapur").fadeIn(500);
    $("#addflag").attr("class", "flag sg");
    $(".ui-tab-inactive6").attr("class", "ui-tab-active ui-tab-inactive6");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".jp").on("click", function () {
    $(".servers-japon").fadeIn(500);
    $("#addflag").attr("class", "flag jp");
    $(".ui-tab-inactive7").attr("class", "ui-tab-active ui-tab-inactive7");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".au").on("click", function () {
    $(".servers-australia").fadeIn(500);
    $("#addflag").attr("class", "flag au");
    $(".ui-tab-inactive8").attr("class", "ui-tab-active ui-tab-inactive8");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".gb").on("click", function () {
    $(".servers-granbretana").fadeIn(500);
    $("#addflag").attr("class", "flag gb");
    $(".ui-tab-inactive9").attr("class", "ui-tab-active ui-tab-inactive9");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
  });
}
function getPresedKey(p655) {
  var v766 = "";
  if (p655.keyCode === 9) {
    v766 += "TAB";
  } else if (p655.keyCode === 13) {
    v766 += "ENTER";
  } else if (p655.keyCode === 16) {
    v766 += "SHIFT";
  } else {
    v766 += String.fromCharCode(p655.keyCode);
  }
  return v766;
}
getStringKey = function (p656) {
  var v767 = "";
  if (p656 == 9) {
    v767 += "TAB";
  } else if (p656 == 13) {
    v767 += "ENTER";
  } else if (p656 == 16) {
    v767 += "SHIFT";
  } else if (p656 == 32) {
    v767 += "SPACE";
  } else if (p656 == 27) {
    v767 += "ESC";
  } else {
    v767 += String.fromCharCode(p656);
  }
  return v767;
};
const isValidHotkey = function (p657) {
  const v768 = p657.key;
  return (
    (v768 >= "0" && v768 <= "9") ||
    (v768 >= "A" && v768 <= "Z") ||
    v768 === "Tab" ||
    v768 === "Enter" ||
    v768 === "Shift" ||
    v768 === " " ||
    v768 === "Escape"
  );
};
eval(function (p658, p659, p660, p661, p662, p663) {
  p662 = function (p664) {
    return (
      (p664 < p659 ? "" : p662(parseInt(p664 / p659))) +
      ((p664 = p664 % p659) > 35
        ? String.fromCharCode(p664 + 29)
        : p664.toString(36))
    );
  };
  if (!"".replace(/^/, String)) {
    while (p660--) {
      p663[p662(p660)] = p661[p660] || p662(p660);
    }
    p661 = [
      function (p665) {
        return p663[p665];
      },
    ];
    p662 = function () {
      return "\\w+";
    };
    p660 = 1;
  }
  while (p660--) {
    if (p661[p660]) {
      p658 = p658.replace(
        new RegExp("\\b" + p662(p660) + "\\b", "g"),
        p661[p660]
      );
    }
  }
  return p658;
});
function stopZoom(p666) {
  if (p666.key === "z") {
    window.w = 0.625;
    window.render();
  }
}
window.addEventListener("wheel", stopZoom);
document.addEventListener("DOMContentLoaded", () => {
  let v769 = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    radius: 7,
  };
  let v770 = v769.x;
  let v771 = v769.y;
  let v772 = 0;
  function f111() {
    let v773 = Date.now();
    fetch(window.location.href)
      .then(() => {
        let v774 = Date.now();
        v772 = v774 - v773;
        if (v772 > 149) {
          v775.style.color = "red";
        } else if (v772 > 99) {
          v775.style.color = "yellow";
        } else {
          v775.style.color = "green";
        }
      })
      .catch(() => {
        v772 = "Error";
        v775.style.color = "red";
      });
  }
  let v775 = document.createElement("div");
  v775.style.position = "fixed";
  v775.style.right = "5px";
  v775.style.bottom = "5px";
  v775.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  v775.style.color = "white";
  v775.style.padding = "2px 5px";
  v775.style.fontSize = "12px";
  v775.style.borderRadius = "3px";
  v775.style.fontWeight = "bold";
  v775.style.textShadow = "1px 1px 2px rgba(0,0,0,0.5)";
  document.body.appendChild(v775);
  document.addEventListener("mousemove", (p667) => {
    v770 = p667.clientX;
    v771 = p667.clientY;
  });
  function f112() {
    let v776 = v770 - v769.x;
    let v777 = v771 - v769.y;
    let v778 = Math.sqrt(v776 * v776 + v777 * v777);
    if (v778 > v769.radius) {
      v769.x += (v776 / v778) * v769.radius;
      v769.y += (v777 / v778) * v769.radius;
    } else {
      v769.x = v770;
      v769.y = v771;
    }
    let v779 = document.getElementById("solucan");
    if (v779) {
      v779.style.left = v769.x + "px";
      v779.style.top = v769.y + "px";
    }
    v775.textContent = "Ping: " + v772 + "ms";
    requestAnimationFrame(f112);
  }
  f112();
  setInterval(f111, 1000);
});

// FPS gösterge kutusunu oluştur
const fpsBox = document.createElement("div");
fpsBox.style.position = "fixed";
fpsBox.style.right = "5px";
fpsBox.style.bottom = "25px";
fpsBox.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
fpsBox.style.color = "white";
fpsBox.style.padding = "2px 5px";
fpsBox.style.fontSize = "12px";
fpsBox.style.borderRadius = "3px";
fpsBox.style.fontWeight = "bold";
fpsBox.style.textShadow = "1px 1px 2px rgba(0,0,0,0.5)";
fpsBox.textContent = "FPS: 0";
document.body.appendChild(fpsBox);

// FPS hesaplama değişkenleri
let lastFrameTime = performance.now();
let frameCount = 0;
let fps = 0;

// FPS hesaplama fonksiyonu
function updateFPS() {
  const now = performance.now();
  frameCount++;

  if (now - lastFrameTime >= 1000) {
    fps = frameCount;
    frameCount = 0;
    lastFrameTime = now;
    fpsBox.textContent = "FPS: " + fps;
  }

  requestAnimationFrame(updateFPS);
}

updateFPS();

document.addEventListener(
  "keydown",
  (p668) => {
    if (p668.key === "F12") {
      p668.preventDefault();
    }
  },
  false
);
document.addEventListener(
  "contextmenu",
  (p669) => {
    p669.preventDefault();
  },
  false
);
window.addEventListener("keydown", (p670) => {
  const v780 = p670.key.toLowerCase();
  if (v780 === "z" || v780 === "ئ") {
    window.multiplier = 0.625;
    if (typeof window.changedNf === "function") {
      window.changedNf();
    } else {
      console.warn("Function 'changedNf' is not defined.");
    }
  }
});
// Mevcut zamanı alıyoruz
var TIME = new Date().getTime();  // getTime() zaman damgasını alır

// Dinamik CSS dosyası linki oluşturuluyor (zaman ile ilişkili)
var linkCSS = URLSERV_WORMXY + "/css/style.css?v=" + TIME;

// CSS dosyasını sayfaya ekleyen fonksiyon
var addCSS = function() {
    var linkElement = document.createElement("link");  // link elementini oluşturuyoruz
    linkElement.rel = "stylesheet";  // link elementinin 'rel' özelliğini 'stylesheet' olarak ayarlıyoruz
    linkElement.href = linkCSS;  // Dinamik olarak oluşturduğumuz linki buraya atıyoruz
    document.head.appendChild(linkElement);  // link elementini head kısmına ekliyoruz
};

// addCSS fonksiyonunu çalıştırıyoruz
this.addCSS = addCSS;
this.addCSS();  // CSS dosyasını ekliyoruz

// Konsola mesaj yazdırıyoruz
console.log("CSS Dosyası Başarıyla Yüklendi");

