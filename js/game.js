
(function() {
    // Benzersiz ID'ler ile çakışmayı önle
    const preloaderHTML = `
    <style>
        /* Fullscreen preloader */
        .custom-preloader-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 99999;
            transition: opacity 0.8s ease-out;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        /* Animated background */
        .custom-preloader-bg {
            position: absolute;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at center, rgba(108, 92, 231, 0.15) 0%, rgba(0, 0, 0, 0.8) 100%);
            animation: customBgPulse 3s ease-in-out infinite;
        }

        @keyframes customBgPulse {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
        }

        /* Logo container */
        .custom-logo-container {
            position: relative;
            margin-bottom: 50px;
            animation: customLogoFloat 3s ease-in-out infinite;
        }

        @keyframes customLogoFloat {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
        }

        /* Logo image */
        .custom-preloader-logo {
            width: 180px;
            height: auto;
            filter: drop-shadow(0 0 20px rgba(108, 92, 231, 0.5));
        }

        /* Loading spinner */
        .custom-loading-spinner {
            width: 50px;
            height: 50px;
            border: 3px solid rgba(255, 255, 255, 0.1);
            border-top: 3px solid #6c5ce7;
            border-right: 3px solid #a8a4ff;
            border-radius: 50%;
            animation: customSpin 0.8s linear infinite;
            margin-bottom: 30px;
        }

        @keyframes customSpin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        /* Welcome text */
        .custom-welcome-text {
            color: #ffffff;
            font-size: 28px;
            font-weight: 400;
            letter-spacing: 4px;
            text-transform: uppercase;
            margin-bottom: 40px;
            text-shadow: 0 0 20px rgba(108, 92, 231, 0.5);
            animation: customTextGlow 2s ease-in-out infinite;
        }

        @keyframes customTextGlow {
            0%, 100% { 
                text-shadow: 0 0 10px rgba(108, 92, 231, 0.3);
                opacity: 0.8;
            }
            50% { 
                text-shadow: 0 0 30px rgba(108, 92, 231, 0.8);
                opacity: 1;
            }
        }

        /* Simple progress bar */
        .custom-progress-container {
            width: 280px;
            max-width: 70vw;
            height: 3px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            overflow: hidden;
        }

        .custom-progress-fill {
            width: 0%;
            height: 100%;
            background: linear-gradient(90deg, #6c5ce7, #a8a4ff);
            transition: width 0.2s linear;
            border-radius: 10px;
        }

        /* Loading dots animation */
        .custom-loading-dots {
            display: inline-block;
            margin-left: 5px;
        }

        .custom-loading-dots span {
            animation: customDotBlink 1.4s infinite;
            animation-fill-mode: both;
        }

        .custom-loading-dots span:nth-child(2) {
            animation-delay: 0.2s;
        }

        .custom-loading-dots span:nth-child(3) {
            animation-delay: 0.4s;
        }

        @keyframes customDotBlink {
            0%, 80%, 100% { opacity: 0; }
            40% { opacity: 1; }
        }

        /* Small loading text under progress bar */
        .custom-loading-status {
            color: rgba(255, 255, 255, 0.5);
            font-size: 12px;
            margin-top: 15px;
            letter-spacing: 2px;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .custom-preloader-logo {
                width: 130px;
            }
            .custom-welcome-text {
                font-size: 22px;
                letter-spacing: 3px;
            }
        }
    </style>

    <div class="custom-preloader-overlay" id="customPreloader">
        <div class="custom-preloader-bg"></div>
        
        <div class="custom-logo-container">
            <img src="https://i.ibb.co/Vc8RtJcV/129977ef-1691-4c4c-94ca-da08d36600e1.webp" alt="Logo" class="custom-preloader-logo" id="customLogo">
        </div>

        <div class="custom-loading-spinner"></div>
        
        <div class="custom-welcome-text">
            Welcome to the Wormate XY Extension
        </div>
    </div>
    `;

    // Preloader'ı ekle
    document.documentElement.insertAdjacentHTML("afterbegin", preloaderHTML);

    // Tüm değişkenleri fonksiyon scope'unda tut
    let loadingProgress = 0;
    const progressFill = document.getElementById('customProgressFill');
    
    // Body scroll'u engelle
    document.body.style.overflow = 'hidden';
    
    function updateLoadingProgress() {
        if (loadingProgress < 100) {
            loadingProgress += Math.random() * 12 + 4;
            if (loadingProgress > 100) loadingProgress = 100;
            
            if (progressFill) {
                progressFill.style.width = loadingProgress + '%';
            }
            
            setTimeout(updateLoadingProgress, 150 + Math.random() * 100);
        } else {
            // Preloader'ı kaldır
            setTimeout(() => {
                const preloader = document.getElementById('customPreloader');
                if (preloader) {
                    preloader.style.opacity = '0';
                    setTimeout(() => {
                        if (preloader && preloader.parentNode) {
                            preloader.remove();
                            document.body.style.overflow = '';
                        }
                    }, 800);
                }
            }, 500);
        }
    }
    
    // Başlat
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            updateLoadingProgress();
        });
    } else {
        updateLoadingProgress();
    }
    
    // Fallback - max 5 saniye
    setTimeout(() => {
        const preloader = document.getElementById('customPreloader');
        if (preloader && preloader.style.opacity !== '0') {
            preloader.style.opacity = '0';
            setTimeout(() => {
                if (preloader && preloader.parentNode) {
                    preloader.remove();
                    document.body.style.overflow = '';
                }
            }, 800);
        }
    }, 5000);
})();

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
    } catch (e2) {
      return encodeURI(35);
    }
  },
  aload: false,
  aId: 0
};
var inputReplaceSkin = localStorage.getItem("inputReplaceSkin");
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
      bottom: "110px"
    },
    backgroundImage: "url('path_to_image.png')",
    pxy: 110
  }
};
var wormXyObjects = {
  
  s_l:"https://ii7modysmp-hue.github.io/extension", 
  logo:"https://i.ibb.co/jkkbBWvn/129977ef-1691-4c4c-94ca-da08d36600e1-1.png",
  FB_UserID: "",
  smoothCamera: 0.5,
  flag: "https://i.imgur.com/EkbSd65.png",
  PortionSize: localStorage.PotenciadorSize || 2,
  PortionAura: localStorage.PotenciadorAura || 1.2,
  PortionTransparent: 0.8,
  FoodTransparent: 0.3,
  ModeStremer: false,
  ModeStremerbatop: false,
  ModeStremermuiten: false,
  arrow: false,
  KeyCodeRespawn: localStorage.KeyRespawn || 82,
  KeyCodeAutoMov: localStorage.KeyAutoMov || window.keyMove,
  FoodShadow: localStorage.ComidaShadow || 2,
  FoodSize: localStorage.ComidaSize || 2,
  visibleSkin: [],
  pL: [],
  gamePad: theoEvents.joystick,
  mobile: false,
  loading: false,
  adblock: false,
  CLIENTE_ADMIN: 1,
  CLIENTE_ACTIVO: 3,
  CLIENTE_INACTIVO: 4,

  nearPlayerCardEnabled: false,
  nearPlayerTargetId: null,
  nearPlayerTargetName: "",
  nearPlayerForcedSkin: 131,
  nearPlayerMaxDistance: 900,

  favoriteSkins: JSON.parse(localStorage.getItem("FavoriteSkinsBMW") || "[]"),
  favoriteSkinIndex: 0,
  favoriteSkinsEnabled: true
};
saveGameLocal = localStorage.getItem("SaveGameXT");
if (saveGameLocal && saveGameLocal !== "null") {
  let t = JSON.parse(saveGameLocal);
  for (let e in t) {
    wormXyObjects[e] = t[e];
  }
}
wormXyObjects.loading = true;
const PhoneChecked = function () {
  let v3 = false;
  wormXyObjects.mobile = false;
  var v4 = navigator.userAgent || navigator.vendor || window.opera;
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(v4) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(v4.substr(0, 4))) {
    wormXyObjects.mobile = true;
    v3 = true;
  }
  return v3;
};
const RechekingPhone = function () {
  let v5 = false;
  var v6 = navigator.userAgent || navigator.vendor || window.opera;
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(v6) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(v6.substr(0, 4))) {
    v5 = true;
  }
  return v5;
};
const loadJoy = function (p7) {
  let v7;
  try {
    console.log(p7);
    wormXyObjects.gamePad ||= theoEvents.joystick;
    if (RechekingPhone() && (p7 || wormXyObjects.gamePad.checked)) {
      v7 = nipplejs.create(wormXyObjects.gamePad);
      v7.on("move", function (p8, p9) {
        theoEvents.eventoPrincipal.sk = p9.angle.radian <= Math.PI ? p9.angle.radian * -1 : Math.PI - (p9.angle.radian - Math.PI);
        console.log(p9);
      });
    }
    return v7;
  } catch (e3) {
    console.log(e3);
  }
};
let clientes = {
  clientesVencidos: [],
  clientesActivos: []
};
let servers = {
  Api_listServer: []
};
async function loadUsers() {
  await fetch("https://ii7modysmp-hue.github.io/extension/api/users.json").then(p10 => p10.json()).then(p11 => {
    if (p11.success) {
      let v8 = p11.Users;
      clientes.clientesActivos = v8.filter(p12 => {
        return p12.cliente_ID;
      });
    } else {
      clientes = {
        clientesVencidos: [],
        clientesActivos: []
      };
      alert("An error occurred while loading clients");
    }
  });
}
async function loadServers() {
  await fetch("https://ii7modysmp-hue.github.io/extension/api/servers.json").then(p13 => p13.json()).then(p14 => {
    if (p14.success) {
      let v9 = p14.servers;
      servers.Api_listServer = v9.filter(p15 => {
        return p15.serverUrl;
      });
    } else {
      servers = {
        Api_listServer: []
      };
      alert("An error occurred while loading the servers");
    }
  });
}

loadUsers();
loadServers();

function saveFavoriteSkinsBMW() {
  localStorage.setItem("FavoriteSkinsBMW", JSON.stringify(wormXyObjects.favoriteSkins || []));
}

function addFavoriteSkinBMW(skinId) {
  skinId = parseInt(skinId);
  if (!Number.isFinite(skinId)) return;

  wormXyObjects.favoriteSkins ||= [];

  if (wormXyObjects.favoriteSkins.indexOf(skinId) === -1) {
    wormXyObjects.favoriteSkins.push(skinId);
    saveFavoriteSkinsBMW();
  }

  refreshFavoriteStoreButtonBMW();
}

function removeFavoriteSkinBMW(skinId) {
  skinId = parseInt(skinId);
  if (!Number.isFinite(skinId)) return;

  wormXyObjects.favoriteSkins ||= [];
  wormXyObjects.favoriteSkins = wormXyObjects.favoriteSkins.filter(function (x) {
    return parseInt(x) !== skinId;
  });

  saveFavoriteSkinsBMW();

  if (wormXyObjects.favoriteSkinIndex >= wormXyObjects.favoriteSkins.length) {
    wormXyObjects.favoriteSkinIndex = 0;
  }

  refreshFavoriteStoreButtonBMW();
}

function isFavoriteSkinBMW(skinId) {
  skinId = parseInt(skinId);
  if (!Number.isFinite(skinId)) return false;
  return (wormXyObjects.favoriteSkins || []).indexOf(skinId) !== -1;
}

function getCurrentStoreSkinIdBMW() {
  const v1 = parseInt($("#idReplaceSkin").text() || "");
  if (Number.isFinite(v1)) return v1;

  const v2 = parseInt($("#idReplaceSkin").html() || "");
  if (Number.isFinite(v2)) return v2;

  return null;
}

function ensureFavoriteStoreButtonBMW() {
  let favBtn = document.getElementById("favorite-skin-toggle-bmw");
  if (favBtn) return favBtn;

  favBtn = document.createElement("button");
  favBtn.id = "favorite-skin-toggle-bmw";
  favBtn.style.cssText = `
    margin-left: 8px;
    background: #0a84ff;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 6px 12px;
    cursor: pointer;
    font-size: 12px;
    font-weight: bold;
    display: none;
  `;
  favBtn.textContent = "Add Favorite";

  favBtn.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    const skinId = getCurrentStoreSkinIdBMW();
    if (!Number.isFinite(skinId)) return;

    if (isFavoriteSkinBMW(skinId)) {
      removeFavoriteSkinBMW(skinId);
    } else {
      addFavoriteSkinBMW(skinId);
    }

    refreshFavoriteStoreButtonBMW();
  });

  return favBtn;
}

function mountFavoriteStoreButtonBMW() {
  const favBtn = ensureFavoriteStoreButtonBMW();
  const buyBtn = document.getElementById("store-buy-button");

  if (buyBtn && buyBtn.parentNode && favBtn.parentNode !== buyBtn.parentNode) {
    buyBtn.parentNode.insertBefore(favBtn, buyBtn.nextSibling);
  }
}

function refreshFavoriteStoreButtonBMW() {
  const favBtn = ensureFavoriteStoreButtonBMW();
  const skinId = getCurrentStoreSkinIdBMW();

  if (!Number.isFinite(skinId)) {
    favBtn.style.display = "none";
    return;
  }

  favBtn.style.display = "inline-block";
  favBtn.textContent = isFavoriteSkinBMW(skinId) ? "Remove Favorite" : "Add Favorite";
}

if (!document.getElementById("near-player-card")) {
  const nearCard = document.createElement("div");
  nearCard.id = "near-player-card";
  nearCard.style.cssText = `
    position: fixed;
    right: 14px;
    bottom: 14px;
    z-index: 999999;
    min-width: 160px;
    max-width: 260px;
    padding: 10px 12px;
    border-radius: 12px;
    background: rgba(0,0,0,.72);
    border: 1px solid rgba(255,255,255,.18);
    box-shadow: 0 8px 20px rgba(0,0,0,.35);
    color: #fff;
    font-family: Arial, sans-serif;
    font-size: 13px;
    line-height: 1.4;
    display: none;
    pointer-events: none;
  `;

  nearCard.innerHTML = `
    <div style="font-size:11px;color:#8fd3ff;margin-bottom:4px;">NEAR PLAYER</div>
    <div id="near-player-card-name" style="font-weight:bold;">-</div>
    <div style="margin-top:6px;font-size:11px;color:#ccc;">Player XY</div>
  `;

  document.body.appendChild(nearCard);
}

document.addEventListener("keydown", function (ev) {
  const key = (ev.key || "").toLowerCase();

  if (key === "t") {
    const id = wormXyObjects.nearPlayerTargetId;
    if (!id || !window.anApp || !window.anApp.o || !window.anApp.o.hb) return;

    const p = window.anApp.o.hb[id];
    if (!p || !p.Mb) return;

    p.Mb.dg = wormXyObjects.nearPlayerForcedSkin;

    if (typeof p.Fg === "function") {
      p.Fg(p.Mb);
    }
    return;
  }

  if (key === "1") {
    if (!wormXyObjects.favoriteSkinsEnabled) return;

    const favs = wormXyObjects.favoriteSkins || [];
    if (!favs.length) return;

    if (wormXyObjects.favoriteSkinIndex >= favs.length) {
      wormXyObjects.favoriteSkinIndex = 0;
    }

    const nextSkin = parseInt(favs[wormXyObjects.favoriteSkinIndex]);
    if (!Number.isFinite(nextSkin)) return;

    wormXyObjects.favoriteSkinIndex++;

    if (wormXyObjects.favoriteSkinIndex >= favs.length) {
      wormXyObjects.favoriteSkinIndex = 0;
    }

    wormXyObjects.PropertyManager ||= {};
    wormXyObjects.PropertyManager.rh = nextSkin;

    try {
      if (window.anApp && window.anApp.o && window.anApp.o.N && window.anApp.o.N.Mb) {
        window.anApp.o.N.Mb.dg = nextSkin;

        if (typeof window.anApp.o.N.Fg === "function") {
          window.anApp.o.N.Fg(window.anApp.o.N.Mb);
        }
      }
    } catch (e) {}
  }
});


$(".store-view-cont").append("<div id=\"idReplaceSkin\"></div>");
var StoreSkinID = $("#idReplaceSkin");


$(".store-view-cont").append("<div id=\"idReplaceSkin\"></div>");
var StoreSkinID = $("#idReplaceSkin");
const ctx = {
  fontStyle: {
    name: new PIXI.TextStyle({
      fill: "#FFFF00",
      fontSize: 11,
      lineJoin: "round",
      stroke: "#EFFA45",
      fontFamily: "vuonghiep",
      fontWeight: "bold"
    }),
    blanco: new PIXI.TextStyle({
      align: "center",
      fill: "#FFF",
      fontSize: 12,
      lineJoin: "round",
      stroke: "#FFF",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontFamily: "vuonghiep",
      fontWeight: "bold",
      wordWrap: true
    }),
    morado: new PIXI.TextStyle({
      align: "center",
      fill: "#FFFF00",
      fontSize: 10,
      lineJoin: "round",
      stroke: "#FAA845",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontFamily: "vuonghiep",
      fontWeight: "bold",
      wordWrap: true
    }),
    morado1: new PIXI.TextStyle({
      align: "center",
      fill: "#FFF",
      fontSize: 10,
      lineJoin: "round",
      stroke: "#FAA845",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontFamily: "vuonghiep",
      fontWeight: "bold",
      wordWrap: true
    }),
    amarillo: new PIXI.TextStyle({
      align: "center",
      fill: "#FFFF00",
      fontSize: 10,
      lineJoin: "round",
      stroke: "#FAA845",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontFamily: "vuonghiep",
      fontWeight: "bold",
      wordWrap: true
    }),
    amarillo1: new PIXI.TextStyle({
      align: "center",
      fill: "#FFF",
      fontSize: 10,
      lineJoin: "round",
      stroke: "#FAA845",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontFamily: "vuonghiep",
      fontWeight: "bold",
      wordWrap: true
    }),
    anheadshot: new PIXI.TextStyle({
      align: "center",
      fill: "#FFF",
      fontSize: 0,
      lineJoin: "round",
      stroke: "#FAA845",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontFamily: "vuonghiep",
      fontWeight: "bold",
      wordWrap: true
    }),
    keysColor: new PIXI.TextStyle({
      align: "center",
      fill: "#fff009",
      fontSize: 10,
      lineJoin: "round",
      stroke: "#fff009",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontWeight: "bold",
      fontFamily: "vuonghiep",
      wordWrap: true
    })
  }
};
ctx.clock = PIXI.Sprite.fromImage("https://i.imgur.com/v6szE9c.png");
ctx.clock.width = 100;
ctx.clock.height = 100;
ctx.clock.x = -50;
ctx.clock.y = -50;
ctx.clockan = PIXI.Sprite.fromImage("https://i.imgur.com/jkOvq9J.png");
if (wormXyObjects.ModeStremeranclock) {
  ctx.clockan.width = 100;
  ctx.clockan.height = 100;
  ctx.clockan.x = -50;
  ctx.clockan.y = -50;
} else {
  ctx.clockan.width = 0;
  ctx.clockan.height = 0;
  ctx.clockan.x = -50;
  ctx.clockan.y = -50;
}
ctx.value_server = new PIXI.Text("W-XY", ctx.fontStyle.name);
ctx.value_server.x = 55;
ctx.value_server.y = 0;
ctx.label_hs = new PIXI.Text("HS", ctx.fontStyle.amarillo);
ctx.value1_hs = new PIXI.Text("0", ctx.fontStyle.amarillo);
ctx.label_kill = new PIXI.Text("KL", ctx.fontStyle.morado);
ctx.value1_kill = new PIXI.Text("0", ctx.fontStyle.morado);
if (wormXyObjects.ModeStremersaveheadshot) {
  ctx.value2_hs = new PIXI.Text("", ctx.fontStyle.amarillo1);
  ctx.value2_kill = new PIXI.Text("", ctx.fontStyle.morado1);
} else {
  ctx.value2_hs = new PIXI.Text("", ctx.fontStyle.amarillo1);
  ctx.value2_kill = new PIXI.Text("", ctx.fontStyle.morado1);
}
;
ctx.label_hs.x = 15;
ctx.label_hs.y = 100;
ctx.label_kill.x = 65;
ctx.label_kill.y = 100;
ctx.value1_hs.x = 15;
ctx.value1_hs.y = 116;
ctx.value1_kill.x = 65;
ctx.value1_kill.y = 116;
ctx.value2_hs.x = 15;
ctx.value2_hs.y = 133;
ctx.value2_kill.x = 65;
ctx.value2_kill.y = 133;
ctx.containerCountInfo = new PIXI.Container();
ctx.containerCountInfo.x = -45;
ctx.containerCountInfo.y = -52;
ctx.containerCountInfo.addChild(ctx.value_server);
ctx.containerCountInfo.addChild(ctx.label_hs);
ctx.containerCountInfo.addChild(ctx.value1_hs);
ctx.containerCountInfo.addChild(ctx.value2_hs);
ctx.containerCountInfo.addChild(ctx.label_kill);
ctx.containerCountInfo.addChild(ctx.value1_kill);
ctx.containerCountInfo.addChild(ctx.value2_kill);
ctx.imgServerbase = PIXI.Texture.fromImage("https://i.imgur.com/EkbSd65.png");
ctx.borderurl = PIXI.Texture.fromImage("https://i.imgur.com/wYJAfmO0.png");
ctx.onclickServer = PIXI.Texture.fromImage(wormXyObjects.flag);
ctx.containerImgS = new PIXI.Sprite(ctx.imgServerbase);
ctx.containerImgS.anchor.set(0.5);
ctx.containerImgS.x = 0;
ctx.containerImgS.y = 8;
ctx.containerImgS.width = 0;
ctx.containerImgS.height = 0;
ctx.borderImg = new PIXI.Sprite(ctx.borderurl);
ctx.borderImg.anchor.set(0.5);
ctx.borderImg.x = -2;
ctx.borderImg.y = 78;
ctx.borderImg.width = 110;
ctx.borderImg.height = 60;
ctx.setServer = function (p16) {
  ctx.value_server.text = p16 || "W-XY";
};
ctx.setCountGame = function (p17, p18, p19, p20) {
  ctx.value1_hs.text = p18;
  ctx.value1_kill.text = p17;
  ;
  if (wormXyObjects.ModeStremersaveheadshot) {
    ctx.value2_hs.text = p20;
    ctx.value2_kill.text = p19;
  } else {}
  ;
};
"use strict";
var _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (p21) {
  return typeof p21;
} : function (p22) {
  if (p22 && typeof Symbol == "function" && p22.constructor === Symbol && p22 !== Symbol.prototype) {
    return "symbol";
  } else {
    return typeof p22;
  }
};
var GoogleAuth;
(function () {
  try {
    console.log(function (p23, p24) {
      for (var vLN0 = 0; vLN0 < p24.length; vLN0 += 2) {
        p23 = p23.replaceAll(p24[vLN0], p24[vLN0 + 1]);
      }
      return p23;
    }("N-syo.632.oyhs`2./oSo+-2:dhydMdy/32/o+`3:o/62`/o+. .+osYYyso+-.osyQSs6662NyW.63 yW:`+QQ+ -Ms-.:ymmy3+Yo``+Y:6.Qs-+WWhYs:sHhyyHys/6662NoWs63 yW:+Ss:.-+Ss:`M-3.M` .YyySYys32`QSs.2``-Hh-32sH-66 `..3 `..`3N.Wh.63yW-Ss.3`Ss+`Mh/:+hmmo2/yy++yys//Y-3 oS/`Sso`3 ohy6oH.3..6 -Hh. -+Qs/ N /W+62`Wo:Ss32Sso.MMmd+.3syy` .-` :Y+3+Ss//Q+3 +H`32sHhsyHho6-Hh`:S+--+S+N2+W` `+y+2+W.:Ss.3.Ss+/M-:ymmh.2-Y.32+Ys2+Ss+o+/Q-3oH/32Hho-://:`6 Hh`So3`SsN3oHhs-sHhsoW/ `Sso:-:Q.hM-2ymmh. /Yo`3 sYy./Q`3+Sso2`W`3`Hh.66`Hh:So3-SoN3 +Why+yWh/3-oQSso-`Mm:2/Md+/Yy+3 oYy:Q/3 `Q. -W-3`WsYys/`+oo.:Hh//So//Ss-N32-sys:3:S+.6-/+++:-3oHo3 ohdh/`+So:3 .+S/`/oo:6.+s+` `+yyo`3 +yQYs: +oo..shy. -+oSo/. NN", ["W", "hhhh", "Q", "ssss", "M", "mmm", "Y", "yyy", "H", "hh", "S", "ss", "6", "      ", "3", "   ", "2", "  ", "N", "\n"]));
  } catch (e4) {}
})();
window.addEventListener("load", function () {
  function f() {
    (function (p25, p26, p27) {
      function f2(p28, p29) {
        return (p28 === undefined ? "undefined" : _typeof(p28)) === p29;
      }
      function f3() {
        if (typeof p26.createElement != "function") {
          return p26.createElement(arguments[0]);
        } else if (v12) {
          return p26.createElementNS.call(p26, "http://www.w3.org/2000/svg", arguments[0]);
        } else {
          return p26.createElement.apply(p26, arguments);
        }
      }
      var vA = [];
      var vA2 = [];
      var vO = {
        _version: "3.3.1",
        _config: {
          classPrefix: "",
          enableClasses: true,
          enableJSClass: true,
          usePrefixes: true
        },
        _q: [],
        on: function (p30, p31) {
          var vThis = this;
          setTimeout(function () {
            p31(vThis[p30]);
          }, 0);
        },
        addTest: function (p32, p33, p34) {
          vA2.push({
            name: p32,
            fn: p33,
            options: p34
          });
        },
        addAsyncTest: function (p35) {
          vA2.push({
            name: null,
            fn: p35
          });
        }
      };
      function f4() {}
      f4.prototype = vO;
      f4 = new f4();
      var v10 = false;
      try {
        v10 = "WebSocket" in p25 && p25.WebSocket.CLOSING === 2;
      } catch (e5) {}
      f4.addTest("websockets", v10);
      var v11 = p26.documentElement;
      var v12 = v11.nodeName.toLowerCase() === "svg";
      f4.addTest("canvas", function () {
        var vF3 = f3("canvas");
        return !!vF3.getContext && !!vF3.getContext("2d");
      });
      f4.addTest("canvastext", function () {
        return f4.canvas !== false && typeof f3("canvas").getContext("2d").fillText == "function";
      });
      (function () {
        var v13;
        var v14;
        var v15;
        var v16;
        var v17;
        var v18;
        var v19;
        for (var v20 in vA2) {
          if (vA2.hasOwnProperty(v20)) {
            v13 = [];
            v14 = vA2[v20];
            if (v14.name && (v13.push(v14.name.toLowerCase()), v14.options && v14.options.aliases && v14.options.aliases.length)) {
              for (v15 = 0; v15 < v14.options.aliases.length; v15++) {
                v13.push(v14.options.aliases[v15].toLowerCase());
              }
            }
            v16 = f2(v14.fn, "function") ? v14.fn() : v14.fn;
            v17 = 0;
            for (; v17 < v13.length; v17++) {
              v18 = v13[v17];
              v19 = v18.split(".");
              if (v19.length === 1) {
                f4[v19[0]] = v16;
              } else {
                if (!!f4[v19[0]] && !(f4[v19[0]] instanceof Boolean)) {
                  f4[v19[0]] = new Boolean(f4[v19[0]]);
                }
                f4[v19[0]][v19[1]] = v16;
              }
              vA.push((v16 ? "" : "no-") + v19.join("-"));
            }
          }
        }
      })();
      (function (p36) {
        var v21 = v11.className;
        var v22 = f4._config.classPrefix || "";
        if (v12) {
          v21 = v21.baseVal;
        }
        if (f4._config.enableJSClass) {
          var v23 = new RegExp("(^|\\s)" + v22 + "no-js(\\s|$)");
          v21 = v21.replace(v23, "$1" + v22 + "js$2");
        }
        if (f4._config.enableClasses) {
          v21 += " " + v22 + p36.join(" " + v22);
          if (v12) {
            v11.className.baseVal = v21;
          } else {
            v11.className = v21;
          }
        }
      })(vA);
      delete vO.addTest;
      delete vO.addAsyncTest;
      for (var vLN02 = 0; vLN02 < f4._q.length; vLN02++) {
        f4._q[vLN02]();
      }
      p25.Modernizr = f4;
    })(window, document);
    return Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext;
  }
  function f5(p37, p38, p39) {
    const vA3 = [38, 38, 38, 120, 38, 25, 38];
    const vA4 = ["#FFD500", "#FFC75A", "#00B2ED", "#FF4544", "#0094D7", "#CCCF81", "#ff0999"];
    let v24 = vA3[p38] - parseInt((p39 == 0.99 ? 1 : p39) * vA3[p38] / 1);
    const v25 = new PIXI.TextStyle({
      align: "center",
      fill: vA4[p38],
      fontSize: 25,
      lineJoin: "round",
      whiteSpace: "normal",
      wordWrap: true,
      fontFamily: "vuonghiep",
      fontWeight: "bold"
    });
    let v26 = "pwr_clock" + p38;
    if (!pwrups[v26] && vA3[p38] === v24) {
      pwrups[v26] = new PIXI.Text(v24, v25);
      pwrups[v26].y = 61;
      p37.Tf[p38].addChild(pwrups[v26]);
    }
    if (pwrups[v26]) {
      pwrups[v26].x = v24 >= 100 ? 11 : v24 >= 10 ? 18 : 26;
      pwrups[v26].text = v24;
      if (v24 === 0) {
        delete pwrups[v26];
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
      return window.anApp = vUndefined2;
    }
    function f7(p40) {
      const v27 = p40 + "=";
      const v28 = document.cookie.split(";");
      for (let vLN03 = 0; vLN03 < v28.length; vLN03++) {
        let v29 = v28[vLN03];
        while (v29.charAt(0) === " ") {
          v29 = v29.substring(1);
        }
        if (v29.indexOf(v27) === 0) {
          return v29.substring(v27.length, v29.length);
        }
      }
      return "";
    }
    function f8(p41, p42, p43) {
      var v30 = new Date();
      v30.setTime(v30.getTime() + p43 * 86400000);
      var v31 = "expires=" + v30.toUTCString();
      document.cookie = p41 + "=" + p42 + "; " + v31 + "; path=/";
    }
    function f9(p44) {
      return window.I18N_MESSAGES[p44];
    }
    function f10(p45) {
      if (p45[v104]) {
        return p45[v104];
      } else if (p45.en) {
        return p45.en;
      } else {
        return p45.x;
      }
    }
    function f11(p46) {
      var v32 = (Math.floor(p46) % 60).toString();
      var v33 = (Math.floor(p46 / 60) % 60).toString();
      var v34 = (Math.floor(p46 / 3600) % 24).toString();
      var v35 = Math.floor(p46 / 86400).toString();
      var vF9 = f9("util.time.days");
      var vF92 = f9("util.time.hours");
      var vF93 = f9("util.time.min");
      var vF94 = f9("util.time.sec");
      if (v35 > 0) {
        return v35 + " " + vF9 + " " + v34 + " " + vF92 + " " + v33 + " " + vF93 + " " + v32 + " " + vF94;
      } else if (v34 > 0) {
        return v34 + " " + vF92 + " " + v33 + " " + vF93 + " " + v32 + " " + vF94;
      } else if (v33 > 0) {
        return v33 + " " + vF93 + " " + v32 + " " + vF94;
      } else {
        return v32 + " " + vF94;
      }
    }
    function f12(p47) {
      if (p47.includes("href")) {
        return p47.replaceAll("href", "target=\"_black\" href");
      } else {
        return p47;
      }
    }
    function f13(p48, p49, p50) {
      var v36 = document.createElement("script");
      var v37 = true;
      if (p49) {
        v36.id = p49;
      }
      v36.async = "async";
      v36.type = "text/javascript";
      v36.src = p48;
      if (p50) {
        v36.onload = v36.onreadystatechange = function () {
          v37 = false;
          try {
            p50();
          } catch (e6) {
            console.log(e6);
          }
          v36.onload = v36.onreadystatechange = null;
        };
      }
      (document.head || document.getElementsByTagName("head")[0]).appendChild(v36);
    }
    function f14(p51, p52) {
      var vP52 = p52;
      vP52.prototype = Object.create(p51.prototype);
      vP52.prototype.constructor = vP52;
      vP52.parent = p51;
      return vP52;
    }
    function f15(p53) {
      p53 %= v108;
      if (p53 < 0) {
        return p53 + v108;
      } else {
        return p53;
      }
    }
    function f16(p54, p55, p56) {
      return f17(p56, p54, p55);
    }
    function f17(p57, p58, p59) {
      if (p57 > p59) {
        return p59;
      } else if (p57 < p58) {
        return p58;
      } else if (Number.isFinite(p57)) {
        return p57;
      } else {
        return (p58 + p59) * 0.5;
      }
    }
    function f18(p60, p61, p62, p63) {
      if (p61 > p60) {
        return Math.min(p61, p60 + p62 * p63);
      } else {
        return Math.max(p61, p60 - p62 * p63);
      }
    }
    function f19(p64, p65, p66, p67, p68) {
      return p65 + (p64 - p65) * Math.pow(1 - p67, p66 / p68);
    }
    function f20(p69, p70, p71) {
      return p69 * (1 - p71) + p70 * p71;
    }
    function f21(p72, p73, p74, p75) {
      var vP74 = p74;
      var vP73 = p73;
      var v38 = p73 + p75;
      if (p72 == null) {
        throw new TypeError("this is null or not defined");
      }
      var v39 = p72.length >>> 0;
      var v40 = vP74 >> 0;
      var v41 = v40 < 0 ? Math.max(v39 + v40, 0) : Math.min(v40, v39);
      var v42 = vP73 >> 0;
      var v43 = v42 < 0 ? Math.max(v39 + v42, 0) : Math.min(v42, v39);
      var v44 = v38 === undefined ? v39 : v38 >> 0;
      var v45 = v44 < 0 ? Math.max(v39 + v44, 0) : Math.min(v44, v39);
      var v46 = Math.min(v45 - v43, v39 - v41);
      var vLN1 = 1;
      for (v43 < v41 && v41 < v43 + v46 && (vLN1 = -1, v43 += v46 - 1, v41 += v46 - 1); v46 > 0;) {
        if (v43 in p72) {
          p72[v41] = p72[v43];
        } else {
          delete p72[v41];
        }
        v43 += vLN1;
        v41 += vLN1;
        v46--;
      }
      return p72;
    }
    function f22(p76) {
      return p76.getContext("2d");
    }
    function f23(p77) {
      if (p77.parent != null) {
        p77.parent.removeChild(p77);
      }
    }
    function f24(p78) {
      return p78[parseInt(Math.random() * p78.length)];
    }
    function f25() {
      return Math.random().toString(36).substring(2, 15);
    }
    function f26(p79, p80, p81) {
      var v47 = (1 - Math.abs(p81 * 2 - 1)) * p80;
      var v48 = v47 * (1 - Math.abs(p79 / 60 % 2 - 1));
      var v49 = p81 - v47 / 2;
      if (p79 >= 0 && p79 < 60) {
        return [v49 + v47, v49 + v48, v49 + 0];
      } else if (p79 >= 60 && p79 < 120) {
        return [v49 + v48, v49 + v47, v49 + 0];
      } else if (p79 >= 120 && p79 < 180) {
        return [v49 + 0, v49 + v47, v49 + v48];
      } else if (p79 >= 180 && p79 < 240) {
        return [v49 + 0, v49 + v48, v49 + v47];
      } else if (p79 >= 240 && p79 < 300) {
        return [v49 + v48, v49 + 0, v49 + v47];
      } else {
        return [v49 + v47, v49 + 0, v49 + v48];
      }
    }
    function f27() {
      function f28() {
        let v50 = wormXyObjects.adblock ? 1 : 5;
        $("#adbl-1").text(f9("index.game.antiadblocker.msg1"));
        $("#adbl-2").text(f9("index.game.antiadblocker.msg2"));
        $("#adbl-3").text(f9("index.game.antiadblocker.msg3"));
        $("#adbl-4").text(f9("index.game.antiadblocker.msg4").replace("{0}", 10));
        $("#adbl-continue span").text(f9("index.game.antiadblocker.continue"));
        $("#adbl-continue").hide();
        $("#" + vLSJDHnkHtYwyXyVgG9).fadeIn(500);
        var vV50 = v50;
        for (var vLN04 = 0; vLN04 < v50; vLN04++) {
          setTimeout(function () {
            vV50--;
            $("#adbl-4").text(f9("index.game.antiadblocker.msg4").replace("{0}", vV50));
            if (vV50 === 0) {
              console.log("aipAABC");
              try {
                ga("send", "event", "antiadblocker", window.runtimeHash + "_complete");
              } catch (e7) {}
              $("#adbl-continue").fadeIn(200);
            }
          }, (vLN04 + 1) * 1000);
        }
      }
      var v51 = false;
      function f29() {}
      var vO2 = {};
      var vLSJDHnkHtYwyXyVgG9 = "JDHnkHtYwyXyVgG9";
      $("#adbl-continue").click(function () {
        $("#" + vLSJDHnkHtYwyXyVgG9).fadeOut(500);
        f29(false);
      });
      vO2.a = function (p82) {
        f29 = p82;
        if (!v51) {
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
                AIP_COMPLETE: function (p83) {
                  console.log("aipC");
                  f29(true);
                  $("#1eaom01c3pxu9wd3").hide();
                  $("#" + vLSJDHnkHtYwyXyVgG9).hide();
                  try {
                    ga("send", "event", "preroll", window.runtimeHash + "_complete");
                  } catch (e8) {}
                },
                AIP_REMOVE: function () {}
              });
            });
            v51 = true;
          } catch (e9) {}
        }
      };
      vO2.b = function () {
        if (aiptag.adplayer !== undefined) {
          console.log("aipS");
          try {
            ga("send", "event", "preroll", window.runtimeHash + "_request");
          } catch (e10) {}
          f28();
        } else {
          console.log("aipAABS");
          try {
            ga("send", "event", "antiadblocker", window.runtimeHash + "_start");
          } catch (e11) {}
          f28();
        }
      };
      return vO2;
    }
    function f30(p84, p85) {
      var v$ = $("#" + p84);
      var vP85 = p85;
      var vO3 = {};
      var v52 = false;
      vO3.a = function () {
        if (!v52) {
          v$.empty();
          v$.append("<div id='" + vP85 + "'></div>");
          try {
            try {
              ga("send", "event", "banner", window.runtimeHash + "_display");
            } catch (e12) {}
            aiptag.cmd.display.push(function () {
              aipDisplayTag.display(vP85);
            });
            v52 = true;
          } catch (e13) {}
        }
      };
      vO3.c = function () {
        try {
          try {
            ga("send", "event", "banner", window.runtimeHash + "_refresh");
          } catch (e14) {}
          aiptag.cmd.display.push(function () {
            aipDisplayTag.display(vP85);
          });
        } catch (e15) {}
      };
      return vO3;
    }
    function f31() {
      function f32(p86) {
        var v53 = p86 + Math.floor(Math.random() * 65535) * 37;
        f8(vF10.d, v53, 30);
      }
      function f33() {
        return parseInt(f7(vF10.d)) % 37;
      }
      return function () {
        var vF33 = f33();
        console.log("init1 pSC: " + vF33);
        if (!(vF33 >= 0) || !(vF33 < v516.e)) {
          vF33 = Math.max(0, v516.e - 2);
          console.log("init2 pSC: " + vF33);
        }
        var vO4 = {};
        vUndefined2 = vO4;
        vO4.f = v516;
        vO4.g = false;
        vO4.i = Date.now();
        vO4.j = 0;
        vO4.k = 0;
        vO4.l = null;
        vO4.m = vUndefined;
        vO4.n = v104;
        vO4.o = null;
        vO4.p = null;
        vO4.q = null;
        vO4.r = null;
        vO4.s = null;
        vO4.t = null;
        vO4.u = null;
        try {
          if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (p87) {
              if (p87.coords !== undefined) {
                var v54 = p87.coords;
                if (v54.latitude !== undefined && v54.longitude !== undefined) {
                  vO4.l = p87;
                }
              }
            }, function (p88) {});
          }
        } catch (e16) {}
        vO4.v = function () {
          vO4.p = new vF4();
          vO4.q = new vF34();
          vO4.r = new vF6();
          vO4.s = new vF35();
          vO4.t = new vF30();
          vO4.u = new vF37();
          vO4.o = new f34();
          vO4.o.z = new vF24(vO4.o);
          vO4.a();
        };
        vO4.a = function () {
          try {
            ga("send", "event", "app", window.runtimeHash + "_init");
          } catch (e17) {}
          vO4.o.A = function () {
            vO4.o.B();
          };
          vO4.o.C = function () {
            var v55 = vO4.s.F.D();
            try {
              ga("send", "event", "game", window.runtimeHash + "_start", v55);
            } catch (e18) {}
            vO4.r.G(vF6.AudioState.H);
            vO4.s.I(vO4.s.H.J());
          };
          vO4.o.B = function () {
            try {
              ga("send", "event", "game", window.runtimeHash + "_end");
            } catch (e19) {}
            if ($("body").height() >= 430) {
              vO4.f.K.c();
            }
            vO4.p.L();
            (function () {
              var v56 = Math.floor(vO4.o.N.M);
              var v57 = vO4.o.O;
              if (vO4.u.P()) {
                vO4.u.Q(function () {
                  vO4.R(v56, v57);
                });
              } else {
                vO4.R(v56, v57);
              }
            })();
          };
          vO4.o.S = function (p89) {
            p89(vO4.s.H.T(), vO4.s.H.U());
          };
          vO4.u.V(function () {
            if (vO4.p.W) {
              vO4.r.G(vF6.AudioState.F);
              vO4.s.I(vO4.s.F);
            }
            if (vO4.u.P()) {
              try {
                var v58 = vO4.u.X();
                ga("set", "userId", v58);
              } catch (e20) {}
            }
            if (vO4.Y() && vO4.u.P() && !vO4.u.Z()) {
              vO4.$(false, false);
              vO4.s.aa._(new vF84());
            } else {
              vO4.ba(true);
            }
          });
          vO4.p.ca(function () {
            vO4.r.G(vF6.AudioState.F);
            vO4.s.I(vO4.s.F);
          });
          vO4.q.a(function () {
            vO4.o.a();
            vO4.r.a();
            vO4.s.a();
            vO4.t.a();
            vO4.p.a();
            vO4.u.a();
            if (vO4.Y() && !vO4.Z()) {
              vO4.s.aa._(new vF84());
            } else {
              vO4.ba(true);
            }
          });
        };
        vO4.da = function (p90) {
          if (vO4.u.P()) {
            var v59 = vO4.u.ea();
            $.get(vLSHttpsgatewaywormatei + "/pub/wuid/" + v59 + "/consent/change?value=" + encodeURI(p90), function (p91) {});
          }
        };
        vO4.fa = function (p92) {
          var v60 = vO4.u.ea();
          var v61 = vO4.s.F.D();
          var v62 = vO4.s.F.ga();
          var v63 = vO4.t.ha(vF31.ia);
          var v64 = vO4.t.ha(vF31.ja);
          var v65 = vO4.t.ha(vF31.ka);
          var v66 = vO4.t.ha(vF31.la);
          var v67 = vO4.t.ha(vF31.ma);
          var vLN05 = 0;
          if (vO4.l != null) {
            var v68 = vO4.l.coords.latitude;
            var v69 = vO4.l.coords.longitude;
            vLN05 = Math.max(0, Math.min(32767, (v68 + 90) / 180 * 32768)) << 1 | 1 | Math.max(0, Math.min(65535, (v69 + 180) / 360 * 65536)) << 16;
          }
          _wrmxy.testSkinCustom(v63);
          let v70 = "XY_" + (v63 > 9999 ? "0000" : v63.toString().padStart(4, 0)) + (v67 > 999 ? "000" : v67.toString().padStart(3, 0)) + (v64 > 999 ? "000" : v64.toString().padStart(3, 0)) + (v65 > 999 ? "000" : v65.toString().padStart(3, 0));
          v62 = (v62.length >= 32 ? v62.substr(0, 16) : v62.substr(0, 16).padEnd(16, "x")) + v70;
          v62 = v62.trim();
          console.log(v62);
          var v71 = vLSHttpsgatewaywormatei + "/pub/wuid/" + v60 + "/start?gameMode=" + encodeURI(v61) + "&gh=" + vLN05 + "&nickname=" + encodeURI(v62) + "&skinId=" + _wrmxy.validInput(v63) + "&eyesId=" + encodeURI(v64) + "&mouthId=" + encodeURI(v65) + "&glassesId=" + encodeURI(v66) + "&hatId=" + encodeURI(v67);
          console.log("urlRequest: " + v71);
          $.get(v71, function (p93) {
            var v72 = p93.server_url;
            p92(v72);
          });
        };
        vO4.na = function () {
          vF33++;
          console.log("start pSC: " + vF33);
          if (!vO4.f.oa && vF33 >= vO4.f.e) {
            vO4.s.I(vO4.s.pa);
            vO4.r.G(vF6.AudioState.qa);
            vO4.f.ra.b();
          } else {
            f32(vF33);
            vO4.sa();
          }
        };
        vO4.sa = function (p94) {
          if (vO4.o.ta()) {
            vO4.s.I(vO4.s.ua);
            vO4.r.G(vF6.AudioState.ua);
            var v73 = vO4.s.F.D();
            f8(vF10.va, v73, 30);
            console.log("save gm: " + v73);
            var v74 = vO4.s.xa.wa();
            f8(vF10.ya, v74, 30);
            console.log("save sPN: " + v74);
            if (vO4.u.P()) {
              vO4.fa(function (p95) {
                hoisinhnhanh = p94 ? p94 : p95;
                vO4.o.za(p95, vO4.u.ea());
              });
            } else {
              var v75 = vO4.s.F.ga();
              f8(vF10.Aa, v75, 30);
              var v76 = vO4.t.ha(vF31.ia);
              f8(vF10.Ba, v76, 30);
              vO4.fa(function (p96) {
                hoisinhnhanh = p94 ? p94 : p96;
                vO4.o.Ca(p96, v75, v76);
              });
            }
          }
        };
        vO4.R = function (p97, p98) {
          var v77 = vO4.s.F.ga();
          vO4.s.H.Da(p97, p98, v77);
          vO4.r.G(vF6.AudioState.Ea);
          vO4.s.I(vO4.s.H.Fa());
        };
        vO4.Ga = function () {
          if (!vO4.Ha()) {
            return vO4.t.Ia();
          }
          var vParseInt = parseInt(f7(vF10.Ba));
          if (vParseInt != null && vO4.t.Ja(vParseInt, vF31.ia)) {
            return vParseInt;
          } else {
            return vO4.t.Ia();
          }
        };
        vO4.Ka = function (p99) {
          f8(vF10.La, !!p99, 1800);
        };
        vO4.Ha = function () {
          return f7(vF10.La) === "true";
        };
        vO4.ba = function (p100) {
          if (p100 != vO4.g) {
            vO4.g = p100;
            var v78 = v78 || {};
            v78.consented = p100;
            v78.gdprConsent = p100;
            vO4.f.Ma.a();
            vO4.f.K.a();
            vO4.f.ra.a(function (p101) {
              if (p101) {
                f32(vF33 = 0);
              }
              vO4.sa();
            });
          }
        };
        vO4.$ = function (p102, p103) {
          f8(vF10.Na, p102 ? "true" : "false");
          if (p103) {
            vO4.da(p102);
          }
          vO4.ba(p102);
        };
        vO4.Z = function () {
          switch (f7(vF10.Na)) {
            case "true":
              return true;
            default:
              return false;
          }
        };
        vO4.Y = function () {
          try {
            return !!window.isIPInEEA || vO4.l != null && !!vF11.Oa(vO4.l.coords.latitude, vO4.l.coords.longitude);
          } catch (e21) {
            return true;
          }
        };
        vO4.Pa = function () {
  vO4.j = Date.now();
  vO4.k = vO4.j - vO4.i;
  vO4.o.Qa(vO4.j, vO4.k);
  vO4.s.Qa(vO4.j, vO4.k);

  try {
    if (wormXyObjects.nearPlayerCardEnabled && vO4.o && vO4.o.N && vO4.o.hb) {
      const selfPlayer = vO4.o.N;
      const selfPos = selfPlayer && typeof selfPlayer.Gf === "function" ? selfPlayer.Gf() : null;

      let nearest = null;
      let minDist = Infinity;

      if (selfPos) {
        for (let id in vO4.o.hb) {
          const p = vO4.o.hb[id];
          if (!p || !p.Mb || !p.Hb || !p.Ib || typeof p.Gf !== "function") continue;

          const pos = p.Gf();
          if (!pos) continue;

          const dist = Math.hypot(selfPos.x - pos.x, selfPos.y - pos.y);
          if (dist < minDist) {
            minDist = dist;
            nearest = p;
          }
        }
      }

      const card = document.getElementById("near-player-card");
      const nameEl = document.getElementById("near-player-card-name");

      if (nearest && minDist <= wormXyObjects.nearPlayerMaxDistance) {
        wormXyObjects.nearPlayerTargetId = nearest.Mb.Lb;
        wormXyObjects.nearPlayerTargetName = nearest.Mb.ad || "";

        if (card && nameEl) {
          nameEl.textContent = wormXyObjects.nearPlayerTargetName || "Unknown";
          card.style.display = "block";
        }
      } else {
        wormXyObjects.nearPlayerTargetId = null;
        wormXyObjects.nearPlayerTargetName = "";

        if (card) {
          card.style.display = "none";
        }
      }
    }
  } catch (e) {}

  vO4.i = vO4.j;
};
        vO4.Ra = function () {
          vO4.s.Ra();
        };
        return vO4;
      }();
    }
    function f34() {
      var vO5 = {
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
        tb: 500
      };
      vO5.fb.ub = 500;
      vO5.N = new vF40(vO5.fb);
      vO5.a = function () {
        vO5.N.vb(f6().s.H.wb);
        setInterval(function () {
          vO5.S(function (p104, p105) {
            vO5.xb(p104, p105);
          });
        }, 10);
      };
      vO5.yb = function (p106, p107, p108, p109) {
        vO5.lb = p106;
        vO5.mb = p107;
        vO5.nb = p108;
        vO5.ob = p109;
        vO5.zb();
      };
      vO5.Ab = function (p110) {
        vO5.kb = p110;
        vO5.zb();
      };
      vO5.zb = function () {
        vO5.pb = vO5.lb - vO5.kb;
        vO5.qb = vO5.mb + vO5.kb;
        vO5.rb = vO5.nb - vO5.kb;
        vO5.sb = vO5.ob + vO5.kb;
      };
      vO5.Qa = function (p111, p112) {
        vO5.$a += p112;
        vO5.Za -= vO5.Ya * 0.2 * p112;
        vO5.z.Bb();
        if (vO5.db != null && (vO5.cb === 2 || vO5.cb === 3)) {
          vO5.Cb(p111, p112);
          vO5.jb = 4 + vO5.ib * vO5.N.Db;
        }
        var v79 = 1000 / Math.max(1, p112);
        var vLN06 = 0;
        var vLN07 = 0;
        for (; vLN07 < vO5.Xa.length - 1; vLN07++) {
          vLN06 = vLN06 + vO5.Xa[vLN07];
          vO5.Xa[vLN07] = vO5.Xa[vLN07 + 1];
        }
        vO5.Xa[vO5.Xa.length - 1] = v79;
        vO5.Wa = (vLN06 + v79) / vO5.Xa.length;
      };
      vO5.Eb = function (p113, p114) {
        return p113 > vO5.pb && p113 < vO5.qb && p114 > vO5.rb && p114 < vO5.sb;
      };
      vO5.Cb = function (p115, p116) {
        var v80 = vO5.$a + vO5.Za;
        var v81 = (v80 - vO5._a) / (vO5.ab - vO5._a);
        vO5.N.Fb(p115, p116);
        vO5.N.Gb(p115, p116, v81, vO5.Eb);
        var vLN08 = 0;
        var v82;
        for (v82 in vO5.hb) {
          var v83 = vO5.hb[v82];
          v83.Fb(p115, p116);
          v83.Gb(p115, p116, v81, vO5.Eb);
          if (v83.Hb && v83.Db > vLN08) {
            vLN08 = v83.Db;
          }
          if (!v83.Ib && (!!(v83.Jb < 0.005) || !v83.Hb)) {
            v83.Kb();
            delete vO5.hb[v83.Mb.Lb];
          }
        }
        vO5.Ab(vLN08 * 3);
        var v84;
        for (v84 in vO5.gb) {
          var v85 = vO5.gb[v84];
          v85.Fb(p115, p116);
          v85.Gb(p115, p116, vO5.Eb);
          if (v85.Nb && (v85.Jb < 0.005 || !vO5.Eb(v85.Ob, v85.Pb))) {
            v85.Kb();
            delete vO5.gb[v85.Mb.Lb];
          }
        }
      };
      vO5.Qb = function (p117, p118) {
        if (vO5.cb === 1) {
          vO5.cb = 2;
          vO5.C();
        }
        var v86 = f6().j;
        vO5.bb = p117;
        if (p117 === 0) {
          vO5._a = v86 - 95;
          vO5.ab = v86;
          vO5.$a = vO5._a;
          vO5.Za = 0;
        } else {
          vO5._a = vO5.ab;
          vO5.ab = vO5.ab + p118;
        }
        var v87 = vO5.$a + vO5.Za;
        vO5.Ya = (v87 - vO5._a) / (vO5.ab - vO5._a);
      };
      vO5.Rb = function () {
        if (vO5.cb === 1 || vO5.cb === 2) {
          vO5.cb = 3;
          var v88 = vO5.db;
          setTimeout(function () {
            if (vO5.cb === 3) {
              vO5.cb = 0;
            }
            if (v88 != null && v88 === vO5.db) {
              vO5.db.close();
              vO5.db = null;
            }
          }, 5000);
          vO5.B();
        }
      };
      vO5.ta = function () {
        return vO5.cb !== 2 && (vO5.cb = 1, vO5.z.Sb(), vO5.gb = {}, vO5.hb = {}, vO5.N.Tb(), vO5.db != null && (vO5.db.close(), vO5.db = null), true);
      };
      vO5.Ub = function () {
        vO5.db = null;
        vO5.z.Sb();
        if (vO5.cb !== 3) {
          vO5.A();
        }
        vO5.cb = 0;
      };
      vO5.za = function (p119, p120) {
        vO5.Vb(p119, function () {
          var v89 = Math.min(2048, p120.length);
          var v90 = new ArrayBuffer(6 + v89 * 2);
          var v91 = new DataView(v90);
          var vLN09 = 0;
          v91.setInt8(vLN09, 129);
          vLN09 = vLN09 + 1;
          v91.setInt16(vLN09, 2800);
          vLN09 = vLN09 + 2;
          v91.setInt8(vLN09, 1);
          vLN09 = vLN09 + 1;
          v91.setInt16(vLN09, v89);
          vLN09 = vLN09 + 2;
          var vLN010 = 0;
          for (; vLN010 < v89; vLN010++) {
            v91.setInt16(vLN09, p120.charCodeAt(vLN010));
            vLN09 = vLN09 + 2;
          }
          vO5.Wb(v90);
        });
      };
      vO5.Ca = function (p121, p122, p123) {
        vO5.Vb(p121, function () {
          var v92 = Math.min(32, p122.length);
          var v93 = new ArrayBuffer(7 + v92 * 2);
          var v94 = new DataView(v93);
          var vLN011 = 0;
          v94.setInt8(vLN011, 129);
          vLN011 = vLN011 + 1;
          v94.setInt16(vLN011, 2800);
          vLN011 = vLN011 + 2;
          v94.setInt8(vLN011, 0);
          vLN011 = vLN011 + 1;
          v94.setInt16(vLN011, p123);
          vLN011 = vLN011 + 2;
          v94.setInt8(vLN011, v92);
          vLN011++;
          var vLN012 = 0;
          for (; vLN012 < v92; vLN012++) {
            v94.setInt16(vLN011, p122.charCodeAt(vLN012));
            vLN011 = vLN011 + 2;
          }
          vO5.Wb(v93);
        });
      };
      vO5.Wb = function (p124) {
        try {
          if (vO5.db != null && vO5.db.readyState === WebSocket.OPEN) {
            vO5.db.send(p124);
          }
        } catch (e22) {
          console.log("Socket send error: " + e22);
          vO5.Ub();
        }
      };
      vO5.xb = function (p125, p126) {
        if (!Number.isFinite(p125)) {
          p125 = 0;
        }
        if (vO5._keepAliveMs == null) {
          vO5._keepAliveMs = 1000;
        }
        if (vO5._lastInputSentAt == null) {
          vO5._lastInputSentAt = 0;
        }
        var v95 = p126 ? 128 : 0;
        var v96 = f15(p125) / v108 * 128 & 127;
        var v97 = (v95 | v96) & 255;
        var v98 = typeof performance !== "undefined" && performance.now ? performance.now() : Date.now();
        var v99 = v98 - vO5._lastInputSentAt > vO5._keepAliveMs;
        if (vO5.eb !== v97 || v99) {
          var v100 = new ArrayBuffer(1);
          new DataView(v100).setInt8(0, v97);
          vO5.Wb(v100);
          vO5.eb = v97;
          vO5._lastInputSentAt = v98;
        }
      };
      vO5.Vb = function (p127, p128) {
        let vLoadJoy = loadJoy(!wormXyObjects.mobile);
        var v101 = vO5.db = new WebSocket(p127);
        v101.binaryType = "arraybuffer";
        window.onOpen = v101.onopen = function () {
          f111("open");
          if (vO5.db === v101) {
            console.log("Socket opened");
            p128();
try {
  // vO5.xb(0, false);
} catch (e23) {}
            try {
              if (vO5._kaTimer) {
                clearInterval(vO5._kaTimer);
                vO5._kaTimer = null;
              }
              if (vO5._keepAliveMs == null) {
                vO5._keepAliveMs = 1000;
              }
              if (typeof vO5.eb !== "number") {
                vO5.eb = 0;
              }
              vO5._kaTimer = setInterval(function () {
                if (!vO5.db || vO5.db.readyState !== WebSocket.OPEN) {
                  return;
                }
                var v102 = new ArrayBuffer(1);
                new DataView(v102).setInt8(0, vO5.eb & 255);
                vO5.Wb(v102);
                vO5._lastInputSentAt = typeof performance !== "undefined" && performance.now ? performance.now() : Date.now();
              }, Math.max(500, vO5._keepAliveMs));
            } catch (e24) {
              console.log(e24);
            }
          }
          isPlaying = true;
        };
        window.onclose = v101.onclose = function () {
          f111("closed");
          _wrmxy.aload = false;
          try {
            if (vO5._kaTimer) {
              clearInterval(vO5._kaTimer);
              vO5._kaTimer = null;
            }
          } catch (e25) {}
          if (vO5.db === v101) {
            console.log("Socket closed");
            vO5.Ub();
          }
          isPlaying = false;
          if (vLoadJoy) {
            vLoadJoy.destroy();
          }
        };
        v101.onerror = function (p129) {
          try {
            if (vO5._kaTimer) {
              clearInterval(vO5._kaTimer);
              vO5._kaTimer = null;
            }
          } catch (e26) {}
          if (vO5.db === v101) {
            console.log("Socket error");
            vO5.Ub();
          }
          isPlaying = false;
          if (vLoadJoy) {
            vLoadJoy.destroy();
          }
        };
        v101.onmessage = function (p130) {
          if (vO5.db === v101) {
            vO5.z.Xb(p130.data);
          }
        };
      };
      return vO5;
    }
    var vLSHttpswormateioimages = "https://wormate.io/images/linelogo-xmas2022.png";
    var vLSimagesguestavatarxma = "/images/guest-avatar-xmas2022.png";
    var v103 = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var vLSHttpsgatewaywormatei = "https://gateway.wormate.io";
    var vLSHttpsresourceswormat = "https://resources.wormate.io";
    var v104 = window.I18N_LANG;
    v104 ||= "en";
    var vUndefined = undefined;
    switch (v104) {
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
    var v105 = false;
    var vUndefined2 = undefined;
    var vF = function () {
      var vO6 = {
        Yb: eval("PIXI")
      };
      var v106 = vO6.Yb.BLEND_MODES;
      var v107 = vO6.Yb.WRAP_MODES;
      return {
        Zb: vO6.Yb.Container,
        $b: vO6.Yb.BaseTexture,
        _b: vO6.Yb.Texture,
        ac: vO6.Yb.Renderer,
        bc: vO6.Yb.Graphics,
        cc: vO6.Yb.Shader,
        dc: vO6.Yb.Rectangle,
        ec: vO6.Yb.Sprite,
        fc: vO6.Yb.Text,
        gc: vO6.Yb.Geometry,
        hc: vO6.Yb.Mesh,
        ic: {
          jc: v106.ADD
        },
        kc: {
          lc: v107.REPEAT
        }
      };
    }();
    var v108 = Math.PI * 2;
    (function () {
      var vLSZ2V0 = "Z2V0";
      var vLS = "=";
      var v109 = vLSZ2V0 + "SW50";
      var v110 = vLSZ2V0 + "RmxvYXQ";
      var vA5 = [atob(v109 + "OA=="), atob(v109 + "MTY" + vLS), atob(v109 + "MzI" + vLS), atob(v110 + "zMg=="), atob(v110 + "2NA==")];
      DataView.prototype.mc = function (p131) {
        return this[vA5[0]](p131);
      };
      DataView.prototype.nc = function (p132) {
        return this[vA5[1]](p132);
      };
      DataView.prototype.oc = function (p133) {
        return this[vA5[2]](p133);
      };
      DataView.prototype.pc = function (p134) {
        return this[vA5[3]](p134);
      };
      DataView.prototype.qc = function (p135) {
        return this[vA5[4]](p135);
      };
    })();
    var vF2 = function () {
      function f35(p136) {
        this.rc = p136;
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
    }();
    var vF4 = function () {
      function f36() {
        this.uc = [];
        this.vc = {};
        this.wc = null;
        this.xc = vF5.yc();
      }
      function f37(p137, p138) {
        for (var v111 in p137) {
          if (p137.hasOwnProperty(v111)) {
            p138(v111, p137[v111]);
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
        $.get(vLSHttpsresourceswormat + "/dynamic/assets/revision.json", function (p139) {
          if (p139 > vThis2.zc()) {
            vThis2.Bc();
          }
        });
      };
      f36.prototype.Bc = function () {
        var vThis3 = this;
        $.get(vLSHttpsresourceswormat + "/dynamic/assets/registry.json", function (p140) {
          if (p140.revision > vThis3.zc()) {
            vThis3.Cc(p140);
          }
        });
      };
      f36.prototype.ca = function (p141) {
        this.uc.push(p141);
      };
      f36.prototype.Dc = function () {
        return this.xc;
      };
      f36.prototype.Ec = function () {
        for (var vLN013 = 0; vLN013 < this.uc.length; vLN013++) {
          this.uc[vLN013]();
        }
      };
      f36.prototype.Fc = function (p142, p143) {
        if (!(p142.revision <= this.zc())) {
          var vP143 = p143;
          f37(this.vc, function (p144, p145) {
            var v112 = vP143[p144];
            if (v112 == null || p145.Gc !== v112.Gc) {
              print("disposing prev texture: " + p144 + " at " + p145.Gc);
              p145.Hc.destroy();
            }
          });
          this.vc = vP143;
          this.wc = p142;
          this.xc = vF5.Ic(this.wc, this.vc);
          this.Ec();
        }
      };
      f36.prototype.Cc = function (p146) {
        var vO7 = {};
        (function (p147, p148) {
          for (var v113 in p147) {
            if (p147.hasOwnProperty(v113)) {
              p148(v113, p147[v113]);
            }
          }
        })(p146.textureDict, function (p149, p150) {
          var v114 = p150.custom ? p150.relativePath : vLSHttpsresourceswormat + p150.relativePath;
          try {
            vO7[p149] = new vF15(v114, vF.$b.from(p150.file || v114));
          } catch (e27) {
            console.log(v114);
          }
        });
        this.Fc(p146, vO7);
      };
      return f36;
    }();
    var vF5 = function () {
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
      function f39(p151, p152) {
        for (var v115 in p151) {
          if (p151.hasOwnProperty(v115)) {
            p152(v115, p151[v115]);
          }
        }
      }
      f38.yc = function () {
        var v116 = new vF5();
        v116.Jc = {};
        v116.Kc = {
          Zc: null,
          $c: null
        };
        v116.Lc = {};
        v116.Mc = {
          Zc: null
        };
        v116.Nc = {};
        v116.Oc = {
          _c: "#FFFFFF",
          Zc: [],
          $c: []
        };
        v116.Pc = {};
        v116.Qc = {
          ad: {},
          bd: v116.Oc,
          cd: v116.Kc
        };
        v116.Rc = {};
        v116.Sc = {
          Zc: []
        };
        v116.Tc = {};
        v116.Uc = {
          Zc: []
        };
        v116.Vc = {};
        v116.Wc = {
          Zc: []
        };
        v116.Xc = {};
        v116.Yc = {
          Zc: []
        };
        return v116;
      };
      f38.Ic = function (p153, p154) {
        var v117 = new vF5();
        var vO8 = {};
        f39(p153.colorDict, function (p155, p156) {
          vO8[p155] = p156;
        });
        var vO9 = {};
        f39(p153.regionDict, function (p157, p158) {
          vO9[p157] = new vF32(p154[p158.texture].Hc, p158.x, p158.y, p158.w, p158.h, p158.px, p158.py, p158.pw, p158.ph);
        });
        v117.Nc = {};
        for (var vLN014 = 0; vLN014 < p153.skinArrayDict.length; vLN014++) {
          var v118 = p153.skinArrayDict[vLN014];
          v117.Nc[v118.id] = new vF5.WormSkinData("#" + vO8[v118.prime], v118.base.map(function (p159) {
            return vO9[p159];
          }), v118.glow.map(function (p160) {
            return vO9[p160];
          }));
        }
        var v119 = p153.skinUnknown;
        v117.Oc = new vF5.WormSkinData("#" + vO8[v119.prime], v119.base.map(function (p161) {
          return vO9[p161];
        }), v119.glow.map(function (p162) {
          return vO9[p162];
        }));
        v117.Rc = {};
        f39(p153.eyesDict, function (p163, p164) {
          p163 = parseInt(p163);
          v117.Rc[p163] = new vF5.WearSkinData(p164.base.map(function (p165) {
            return vO9[p165.region];
          }));
        });
        v117.Sc = new vF5.WearSkinData(p153.eyesUnknown.base.map(function (p166) {
          return vO9[p166.region];
        }));
        v117.Tc = {};
        f39(p153.mouthDict, function (p167, p168) {
          p167 = parseInt(p167);
          v117.Tc[p167] = new vF5.WearSkinData(p168.base.map(function (p169) {
            return vO9[p169.region];
          }));
        });
        v117.Uc = new vF5.WearSkinData(p153.mouthUnknown.base.map(function (p170) {
          return vO9[p170.region];
        }));
        v117.Vc = {};
        f39(p153.glassesDict, function (p171, p172) {
          p171 = parseInt(p171);
          v117.Vc[p171] = new vF5.WearSkinData(p172.base.map(function (p173) {
            return vO9[p173.region];
          }));
        });
        v117.Wc = new vF5.WearSkinData(p153.glassesUnknown.base.map(function (p174) {
          return vO9[p174.region];
        }));
        v117.Xc = {};
        f39(p153.hatDict, function (p175, p176) {
          p175 = parseInt(p175);
          v117.Xc[p175] = new vF5.WearSkinData(p176.base.map(function (p177) {
            return vO9[p177.region];
          }));
        });
        v117.Yc = new vF5.WearSkinData(p153.hatUnknown.base.map(function (p178) {
          return vO9[p178.region];
        }));
        v117.Jc = {};
        f39(p153.portionDict, function (p179, p180) {
          p179 = parseInt(p179);
          v117.Jc[p179] = new vF5.PortionSkinData(vO9[p180.base], vO9[p180.glow]);
        });
        var v120 = p153.portionUnknown;
        v117.Kc = new vF5.PortionSkinData(vO9[v120.base], vO9[v120.glow]);
        v117.Lc = {};
        f39(p153.abilityDict, function (p181, p182) {
          p181 = parseInt(p181);
          v117.Lc[p181] = new vF5.AbilitySkinData(vO9[p182.base]);
        });
        var v121 = p153.abilityUnknown;
        v117.Mc = new vF5.AbilitySkinData(vO9[v121.base]);
        v117.Pc = {};
        f39(p153.teamDict, function (p183, p184) {
          p183 = parseInt(p183);
          v117.Pc[p183] = new vF5.TeamSkinData(p184.name, new vF5.WormSkinData("#" + vO8[p184.skin.prime], [], p184.skin.glow.map(function (p185) {
            return vO9[p185];
          })), new vF5.PortionSkinData([], vO9[p184.portion.glow]));
        });
        v117.Qc = new vF5.TeamSkinData({}, v117.Oc, v117.Kc);
        return v117;
      };
      f38.prototype.dd = function (p186) {
        var v122 = this.Nc[p186];
        return v122 || this.Oc;
      };
      f38.prototype.ed = function (p187) {
        var v123 = this.Pc[p187];
        return v123 || this.Qc;
      };
      f38.prototype.fd = function (p188) {
        var v124 = this.Rc[p188];
        return v124 || this.Sc;
      };
      f38.prototype.gd = function (p189) {
        var v125 = this.Tc[p189];
        return v125 || this.Uc;
      };
      f38.prototype.hd = function (p190) {
        var v126 = this.Vc[p190];
        return v126 || this.Wc;
      };
      f38.prototype.jd = function (p191) {
        var v127 = this.Xc[p191];
        return v127 || this.Yc;
      };
      f38.prototype.kd = function (p192) {
        var v128 = this.Jc[p192];
        return v128 || this.Kc;
      };
      f38.prototype.ld = function (p193) {
        var v129 = this.Lc[p193];
        return v129 || this.Mc;
      };
      f38.TeamSkinData = function () {
        function f40(p194, p195, p196) {
          this.ad = p194;
          this.bd = p195;
          this.cd = p196;
        }
        return f40;
      }();
      f38.WormSkinData = function () {
        function f41(p197, p198, p199) {
          this._c = p197;
          this.Zc = p198;
          this.$c = p199;
        }
        return f41;
      }();
      f38.WearSkinData = function () {
        function f42(p200) {
          this.Zc = p200;
        }
        return f42;
      }();
      f38.PortionSkinData = function () {
        function f43(p201, p202) {
          this.Zc = p201;
          this.$c = p202;
        }
        return f43;
      }();
      f38.AbilitySkinData = function () {
        function f44(p203) {
          this.Zc = p203;
        }
        return f44;
      }();
      return f38;
    }();
    var vF6 = function () {
      function f45() {
        this.md = vF6.AudioState.ua;
        this.nd = false;
        this.od = false;
        this.pd = null;
        this.qd = null;
      }
      f45.prototype.a = function () {};
      f45.prototype.rd = function (p204) {
        this.od = p204;
      };
      f45.prototype.G = function (p205) {
        this.md = p205;
        this.sd();
      };
      f45.prototype.td = function (p206) {
        this.nd = p206;
        this.sd();
      };
      f45.prototype.sd = function () {};
      f45.prototype.ud = function (p207, p208) {
        if (!f6().p.W) {
          return null;
        }
        var v130 = p207[p208];
        if (v130 == null || v130.length == 0) {
          return null;
        } else {
          return v130[Math.floor(Math.random() * v130.length)].cloneNode();
        }
      };
      f45.prototype.vd = function (p209, p210, p211) {
        if (this.od && !(p211 <= 0)) {
          var v131 = this.ud(p209, p210);
          if (v131 != null) {
            v131.volume = Math.min(1, p211);
            v131.play();
          }
        }
      };
      f45.prototype.wd = function (p212, p213) {
        if (this.md.xd) {
          this.vd(app.q.yd, p212, p213);
        }
      };
      f45.prototype.zd = function (p214, p215) {
        if (this.md.Ad) {
          this.vd(app.q.Bd, p214, p215);
        }
      };
      f45.prototype.Cd = function () {};
      f45.prototype.Dd = function () {};
      f45.prototype.Ed = function () {};
      f45.prototype.Fd = function () {};
      f45.prototype.Gd = function () {};
      f45.prototype.Hd = function () {};
      f45.prototype.Id = function (p216, p217, p218) {};
      f45.prototype.Jd = function (p219) {};
      f45.prototype.Kd = function (p220) {};
      f45.prototype.Ld = function (p221) {};
      f45.prototype.Md = function (p222) {};
      f45.prototype.Nd = function (p223) {};
      f45.prototype.Od = function (p224) {};
      f45.prototype.Pd = function (p225) {};
      f45.prototype.Qd = function (p226) {};
      f45.prototype.Rd = function (p227) {};
      f45.prototype.Sd = function (p228) {};
      f45.prototype.Td = function (p229) {};
      f45.prototype.Ud = function (p230) {};
      f45.prototype.Vd = function (p231) {};
      f45.prototype.Wd = function (p232) {};
      f45.prototype.Xd = function (p233, p234) {};
      f45.prototype.Yd = function (p235) {};
      f45.prototype.Zd = function (p236, p237, p238) {};
      (function () {
        function f46(p239) {
          this.$d = new vF7(p239, 0.5);
          this.$d._d.loop = true;
          this.ae = false;
        }
        f46.prototype.be = function (p240) {
          if (p240) {
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
        function f47(p241) {
          this.ge = p241.map(function (p242) {
            return new vF7(p242, 0.4);
          });
          f48(this.ge, 0, this.ge.length);
          this.he = null;
          this.ie = 0;
          this.ae = false;
          this.je = 10000;
        }
        function f48(p243, p244, p245) {
          for (var v132 = p245 - 1; v132 > p244; v132--) {
            var v133 = p244 + Math.floor(Math.random() * (v132 - p244 + 1));
            var v134 = p243[v132];
            p243[v132] = p243[v133];
            p243[v133] = v134;
          }
        }
        f47.prototype.be = function (p246) {
          if (p246) {
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
        f47.prototype.ke = function (p247) {
          if (this.ae) {
            if (this.he == null) {
              this.he = this.le();
            }
            if (this.he._d.currentTime + this.je / 1000 > this.he._d.duration) {
              this.he = this.le();
              this.he._d.currentTime = 0;
            }
            console.log("Current track '" + this.he._d.src + "', change in (ms) " + ((this.he._d.duration - this.he._d.currentTime) * 1000 - this.je));
            this.he.de = 0;
            this.he.ee(p247, 100);
            var v135 = (this.he._d.duration - this.he._d.currentTime) * 1000 - this.je;
            var vThis4 = this;
            var vSetTimeout = setTimeout(function () {
              if (vThis4.ae && vSetTimeout == vThis4.ie) {
                vThis4.he.fe(vThis4.je, 100);
                vThis4.he = vThis4.le();
                vThis4.he._d.currentTime = 0;
                vThis4.ke(vThis4.je);
              }
            }, v135);
            this.ie = vSetTimeout;
          }
        };
        f47.prototype.le = function () {
          var v136 = this.ge[0];
          var v137 = Math.max(1, this.ge.length / 2);
          f48(this.ge, v137, this.ge.length);
          this.ge.push(this.ge.shift());
          return v136;
        };
      })();
      var vF7 = function () {
        function f49(p248, p249) {
          this._d = p248;
          this.me = p249;
          this.de = 0;
          p248.volume = 0;
          this.ne = 0;
          this.oe = false;
        }
        f49.prototype.ee = function (p250, p251) {
          console.log("fade IN " + this._d.src);
          this.pe(true, p250, p251);
        };
        f49.prototype.fe = function (p252, p253) {
          console.log("fade OUT " + this._d.src);
          this.pe(false, p252, p253);
        };
        f49.prototype.pe = function (p254, p255, p256) {
          if (this.oe) {
            clearInterval(this.ne);
          }
          var vThis5 = this;
          var v138 = 1 / (p255 / p256);
          var vSetInterval = setInterval(function () {
            if (vThis5.oe && vSetInterval != vThis5.ne) {
              clearInterval(vSetInterval);
              return;
            }
            if (p254) {
              vThis5.de = Math.min(1, vThis5.de + v138);
              vThis5._d.volume = vThis5.de * vThis5.me;
              if (vThis5.de >= 1) {
                vThis5.oe = false;
                clearInterval(vSetInterval);
              }
            } else {
              vThis5.de = Math.max(0, vThis5.de - v138);
              vThis5._d.volume = vThis5.de * vThis5.me;
              if (vThis5.de <= 0) {
                vThis5._d.pause();
                vThis5.oe = false;
                clearInterval(vSetInterval);
              }
            }
          }, p256);
          this.oe = true;
          this.ne = vSetInterval;
          this._d.play();
        };
        return f49;
      }();
      f45.AudioState = {
        ua: {
          qe: false,
          re: false,
          Ad: true,
          xd: false
        },
        F: {
          qe: false,
          re: true,
          Ad: true,
          xd: false
        },
        H: {
          qe: true,
          re: false,
          Ad: false,
          xd: true
        },
        Ea: {
          qe: false,
          re: false,
          Ad: true,
          xd: false
        },
        qa: {
          qe: false,
          re: false,
          Ad: false,
          xd: false
        }
      };
      return f45;
    }();
    var vF8 = function () {
      function f50(p257) {
        this.se = p257;
        this.te = p257.get()[0];
        this.ue = new vF.ac({
          view: this.te,
          backgroundColor: vLN015,
          antialias: true
        });
        this.ve = new vF.Zb();
        this.ve.sortableChildren = true;
        this.we = [];
        this.xe = [];
        this.ye = [];
        this.a();
      }
      var vLN015 = 0;
      function f51(p258, p259) {
        return p258 + Math.random(p259 - p258);
      }
      function f52(p260) {
        if (p260 >= 0) {
          return Math.cos(p260 % v108);
        } else {
          return Math.cos(p260 % v108 + v108);
        }
      }
      function f53(p261) {
        if (p261 >= 0) {
          return Math.sin(p261 % v108);
        } else {
          return Math.sin(p261 % v108 + v108);
        }
      }
      var vA6 = [{
        ze: f51(0, v108),
        Ae: f51(0, v108),
        Be: f51(0.1, 0.5),
        Ce: 1,
        De: 2,
        Ee: 16737962
      }, {
        ze: f51(0, v108),
        Ae: f51(0, v108),
        Be: f51(0.1, 0.5),
        Ce: 1.5,
        De: 1.5,
        Ee: 16746632
      }, {
        ze: f51(0, v108),
        Ae: f51(0, v108),
        Be: f51(0.1, 0.5),
        Ce: 2,
        De: 1,
        Ee: 16755302
      }, {
        ze: f51(0, v108),
        Ae: f51(0, v108),
        Be: f51(0.1, 0.5),
        Ce: 3,
        De: 2,
        Ee: 11206502
      }, {
        ze: f51(0, v108),
        Ae: f51(0, v108),
        Be: f51(0.1, 0.5),
        Ce: 2.5,
        De: 2.5,
        Ee: 8978312
      }, {
        ze: f51(0, v108),
        Ae: f51(0, v108),
        Be: f51(0.1, 0.5),
        Ce: 2,
        De: 3,
        Ee: 6750122
      }, {
        ze: f51(0, v108),
        Ae: f51(0, v108),
        Be: f51(0.1, 0.5),
        Ce: 5,
        De: 4,
        Ee: 6728447
      }, {
        ze: f51(0, v108),
        Ae: f51(0, v108),
        Be: f51(0.1, 0.5),
        Ce: 4.5,
        De: 4.5,
        Ee: 8947967
      }, {
        ze: f51(0, v108),
        Ae: f51(0, v108),
        Be: f51(0.1, 0.5),
        Ce: 4,
        De: 5,
        Ee: 11167487
      }];
      f50.prototype.a = function () {
        var vF62 = f6();
        this.ue.backgroundColor = vLN015;
        this.we = new Array(vA6.length);
        for (var vLN016 = 0; vLN016 < this.we.length; vLN016++) {
          this.we[vLN016] = new vF.ec();
          this.we[vLN016].texture = vF62.q.Fe;
          this.we[vLN016].anchor.set(0.5);
          this.we[vLN016].zIndex = 1;
          this.ve.addChild(this.we[vLN016]);
        }
        this.xe = new Array(vF62.q.Ge.length);
        for (var vLN017 = 0; vLN017 < this.xe.length; vLN017++) {
          this.xe[vLN017] = new vF.ec();
          this.xe[vLN017].texture = vF62.q.Ge[vLN017];
          this.xe[vLN017].anchor.set(0.5);
          this.xe[vLN017].zIndex = 2;
          this.ve.addChild(this.xe[vLN017]);
        }
        this.ye = new Array(this.xe.length);
        for (var vLN018 = 0; vLN018 < this.ye.length; vLN018++) {
          this.ye[vLN018] = {
            He: Math.random(),
            Ie: Math.random(),
            Je: Math.random(),
            Ke: Math.random()
          };
        }
        this.Ra();
      };
      f50.sc = false;
      f50.Le = function (p262) {
        f50.sc = p262;
      };
      f50.prototype.Ra = function () {
        var v139 = window.devicePixelRatio ? window.devicePixelRatio : 1;
        var v140 = this.se.width();
        var v141 = this.se.height();
        this.ue.resize(v140, v141);
        this.ue.resolution = v139;
        this.te.width = v139 * v140;
        this.te.height = v139 * v141;
        var v142 = Math.max(v140, v141) * 0.8;
        for (var vLN019 = 0; vLN019 < this.we.length; vLN019++) {
          this.we[vLN019].width = v142;
          this.we[vLN019].height = v142;
        }
      };
      f50.prototype.Pa = function (p263, p264) {
        if (f50.sc) {
          var v143 = p263 / 1000;
          var v144 = p264 / 1000;
          var v145 = this.se.width();
          var v146 = this.se.height();
          for (var vLN020 = 0; vLN020 < this.we.length; vLN020++) {
            var v147 = vA6[vLN020 % vA6.length];
            var v148 = this.we[vLN020];
            var vF52 = f52(v147.Ce * (v143 * 0.08) + v147.Ae);
            var vF53 = f53(v147.De * (v143 * 0.08));
            var v149 = 0.2 + f52(v147.Ae + v147.Be * v143) * 0.2;
            v148.tint = v147.Ee;
            v148.alpha = v149;
            v148.position.set(v145 * (0.2 + (vF52 + 1) * 0.5 * 0.6), v146 * (0.1 + (vF53 + 1) * 0.5 * 0.8));
          }
          var v150 = Math.max(v145, v146) * 0.05;
          for (var vLN021 = 0; vLN021 < this.xe.length; vLN021++) {
            var v151 = this.ye[vLN021];
            var v152 = this.xe[vLN021];
            var v153 = v108 * vLN021 / this.xe.length + v151.He;
            v151.Ke += v151.Ie * v144;
            if (v151.Ke > 1.3) {
              v151.He = Math.random() * v108;
              v151.Ie = (0.09 + Math.random() * 0.07) * 0.66;
              v151.Je = 0.15 + Math.random() * 0.7;
              v151.Ke = -0.3;
            }
            var v154 = v151.Je + Math.sin(Math.sin(v153 + v143 * 0.48) * 6) * 0.03;
            var v155 = v151.Ke;
            var vF17 = f17(Math.sin(Math.PI * v155), 0.1, 1);
            var v156 = (0.4 + (1 + Math.sin(v153 + v143 * 0.12)) * 0.5 * 1.2) * 0.5;
            var v157 = v153 + v151.Ie * 2 * v143;
            v152.alpha = vF17;
            v152.position.set(v145 * v154, v146 * v155);
            v152.rotation = v157;
            var v158 = v152.texture.width / v152.texture.height;
            v152.width = v156 * v150;
            v152.height = v156 * v150 * v158;
          }
          this.ue.render(this.ve, null, true);
        }
      };
      return f50;
    }();
    var vF10 = function () {
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
    }();
    var vF11 = function () {
      function f55(p265, p266, p267) {
        var v159 = false;
        for (var v160 = p267.length, vLN022 = 0, v161 = v160 - 1; vLN022 < v160; v161 = vLN022++) {
          if (p267[vLN022][1] > p266 != p267[v161][1] > p266 && p265 < (p267[v161][0] - p267[vLN022][0]) * (p266 - p267[vLN022][1]) / (p267[v161][1] - p267[vLN022][1]) + p267[vLN022][0]) {
            v159 = !v159;
          }
        }
        return v159;
      }
      var vA7 = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
      return {
        Oa: function (p268, p269) {
          return f55(p269, p268, vA7);
        }
      };
    }();
    var vF12 = function () {
      function f56(p270) {
        var vUndefined3 = undefined;
        vUndefined3 = p270 > 0 ? "+" + Math.floor(p270) : p270 < 0 ? "-" + Math.floor(p270) : "0";
        var v162 = Math.min(1.5, 0.5 + p270 / 600);
        var vUndefined4 = undefined;
        if (p270 < 1) {
          vUndefined4 = "0xFFFFFF";
        } else if (p270 < 30) {
          var v163 = (p270 - 1) / 29;
          vUndefined4 = f58((1 - v163) * 1 + v163 * 0.96, (1 - v163) * 1 + v163 * 0.82, (1 - v163) * 1 + v163 * 0);
        } else if (p270 < 300) {
          var v164 = (p270 - 30) / 270;
          vUndefined4 = f58((1 - v164) * 0.96 + v164 * 0.93, (1 - v164) * 0.82 + v164 * 0.34, (1 - v164) * 0 + v164 * 0.25);
        } else if (p270 < 700) {
          var v165 = (p270 - 300) / 400;
          vUndefined4 = f58((1 - v165) * 0.93 + v165 * 0.98, (1 - v165) * 0.34 + v165 * 0, (1 - v165) * 0.25 + v165 * 0.98);
        } else {
          vUndefined4 = f58(0.98, 0, 0.98);
        }
        var v166 = Math.random();
        var v167 = 1 + Math.random() * 0.5;
        return new vF13(vUndefined3, vUndefined4, true, 0.5, v162, v166, v167);
      }
      function f57(p271, p272) {
        var vUndefined5 = undefined;
        var vUndefined6 = undefined;
        if (p272) {
          vUndefined5 = 1.3;
          vUndefined6 = f58(0.93, 0.34, 0.25);
        } else {
          vUndefined5 = 1.1;
          vUndefined6 = f58(0.96, 0.82, 0);
        }
        return new vF13(p271, vUndefined6, true, 0.5, vUndefined5, 0.5, 0.7);
      }
      function f58(p273, p274, p275) {
        return ((p273 * 255 & 255) << 16) + ((p274 * 255 & 255) << 8) + (p275 * 255 & 255);
      }
      var vF14 = f14(vF.Zb, function () {
        vF.Zb.call(this);
        this.Pe = [];
        this.Qe = 0;
      });
      vF14.prototype.Re = function (p276) {
        this.Qe += p276;
        if (this.Qe >= 1) {
          var v168 = Math.floor(this.Qe);
          this.Qe -= v168;
          var vF56 = f56(v168);
          this.addChild(vF56);
          this.Pe.push(vF56);
        }
      };
      vF14.prototype.Se = function (p277) {
        f111("count", p277);
        if (p277) {
          if (wormXyObjects.ModeStremerheadshot) {} else {
            var v169 = document.createElement("audio");
            v169.src = "https://asserts.wormworld.io/sounds/headshot_sound_effect.mp3";
            v169.preload = "auto";
            v169.play();
          }
          ;
          var vF57 = f57(f9("index.game.floating.headshot") + "☠️", true);
          this.addChild(vF57);
          this.Pe.push(vF57);
          if (vF57) {
            wormXyObjects.emoji_headshot = true;
            setTimeout(function () {
              wormXyObjects.emoji_headshot = false;
            }, 3000);
          }
        } else {
          var vF57 = f57(f9("index.game.floating.wellDone") + "🔪", false);
          this.addChild(vF57);
          this.Pe.push(vF57);
          if (vF57) {
            wormXyObjects.emoji_kill = true;
            setTimeout(function () {
              wormXyObjects.emoji_kill = false;
            }, 3000);
          }
        }
      };
      vF14.prototype.Te = function (p278, p279) {
        var v170 = f6().s.H.wb;
        var v171 = v170.ue.width / v170.ue.resolution;
        var v172 = v170.ue.height / v170.ue.resolution;
        var vLN023 = 0;
        while (vLN023 < this.Pe.length) {
          var v173 = this.Pe[vLN023];
          v173.Ue = v173.Ue + p279 / 2000 * v173.Ve;
          v173.We = v173.We + p279 / 2000 * v173.Xe;
          v173.alpha = Math.sin(Math.PI * v173.We) * 0.5;
          v173.scale.set(v173.Ue);
          v173.position.x = v171 * (0.25 + v173.Ye * 0.5);
          v173.position.y = v173.Ze ? v172 * (1 - (1 + v173.We) * 0.5) : v172 * (1 - (0 + v173.We) * 0.5);
          if (v173.We > 1) {
            f23(v173);
            this.Pe.splice(vLN023, 1);
            vLN023--;
          }
          vLN023++;
        }
      };
      var vF13 = function () {
        return f14(vF.fc, function (p280, p281, p282, p283, p284, p285, p286) {
          vF.fc.call(this, p280, {
            fill: p281,
            fontFamily: "vuonghiep",
            fontSize: 36,
            fontWeight: "bold"
          });
          this.anchor.set(0.5);
          this.Ze = p282;
          this.Ue = p283;
          this.Ve = p284;
          this.Ye = p285;
          this.We = 0;
          this.Xe = p286;
        });
      }();
      return vF14;
    }();
    var vF15 = function () {
      function f59(p287, p288) {
        this.Gc = p287;
        this.Hc = p288;
      }
      return f59;
    }();
    var vO10 = {
      $e: 0,
      _e: 16
    };
    var vF16 = function () {
      function f60() {
        this.af = vO10.$e;
        this.bf = 0;
        this.ub = 500;
        this.cf = 4000;
        this.df = 7000;
      }
      f60.TEAM_DEFAULT = 0;
      f60.prototype.ef = function () {
        return this.ub * 1.02;
      };
      return f60;
    }();
    var vF18 = function () {
      function f61(p289) {
        this.se = p289;
        this.te = p289.get()[0];
        this.ue = new vF.ac({
          view: this.te,
          backgroundColor: vLN024,
          antialias: true
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
          y: -20
        };
        this.a();
      }
      var vLN024 = 0;
      f61.prototype.a = function () {
        this.ue.backgroundColor = vLN024;
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
        this.tf.alpha = 1;
        this.tf.zIndex = 4;
        this.rf.addChild(this.tf);
        this.uf.zIndex = 5;
        this.rf.addChild(this.uf);
        this.vf.zIndex = 6;
        this.rf.addChild(this.vf);
        this.Ra();
      };
      f61.prototype.Ra = function () {
        var v174 = window.devicePixelRatio ? window.devicePixelRatio : 1;
        var v175 = this.se.width();
        var v176 = this.se.height();
        this.ue.resize(v175, v176);
        this.ue.resolution = v174;
        this.te.width = v174 * v175;
        this.te.height = v174 * v176;
        this.jf = Math.min(Math.min(v175, v176), Math.max(v175, v176) * 0.625);
        this.xf.position.x = v175 / 2;
        this.xf.position.y = v176 / 2;
        this.xf.width = v175;
        this.xf.height = v176;
        this.vf.position.x = v175 - 225;
        this.vf.position.y = 1;
        window.changedNf = () => this.jf = Math.min(Math.max(v175, v176), window.multiplier * Math.min(v175, v176));
        if (wormXyObjects.ModeStremer) {
          var v177 = v175 / 2;
          var v178 = v176 / 2;
          var vLN100 = 100;
          this.tf.position.x = v177 + this.tf.width / 9 + vLN100;
          this.uf.position.x = v177 - this.tf.width / 0.7 + vLN100;
          this.vf.position.x = v177 - this.vf.width / 4 - vLN100;
        } else {
          this.tf.position.x = 60;
          this.uf.position.x = 110;
          this.vf.position.x = v175 - 200;
        }
        this.tf.position.y = 60;
        this.uf.position.y = 10;
        this.vf.position.y = 2;
        this.tf.addChild(ctx.clock);
        this.tf.addChild(ctx.clockan);
        this.vf.addChild(ctx.value_server);
        this.vf.addChild(ctx.containerImgS);
        this.tf.addChild(ctx.borderImg);
        window.retundFlagError = () => {
          return ctx.containerImgS.texture = PIXI.Texture.fromImage(wormXyObjects.flag);
        };
        this.tf.addChild(ctx.containerCountInfo);
      };
      f61.prototype.Te = function (p290, p291) {
        var vF63 = f6();
        this.if = 15;
        this.nf.removeChildren();
        this.pf.removeChildren();
        this.qf.removeChildren();
        this.sf.removeChildren();
        this.lf.Bf(p290.af == vO10.$e ? vF63.q.Cf : vF63.q.Df);
        var v179 = this.mf;
        v179.clear();
        v179.lineStyle(0.8, 65535);
        v179.drawCircle(0, 0, p290.ub);
        v179.endFill();
        this.vf.Ef = p291;
        this.sf.visible = p291;
      };
      f61.prototype.Pa = function (p292, p293) {
        if (!(this.ue.width <= 5)) {
          var vF64 = f6();
          var v180 = vF64.o.N;
          var v181 = this.ue.width / this.ue.resolution;
          var v182 = this.ue.height / this.ue.resolution;
          this.if = f18(this.if, vF64.o.jb, p293, 0.002);
          var v183 = this.jf / this.if;
          var v184 = vF64.o.N.Ff[vF2.ZOOM_TYPE];
          var v185 = v184 != null && v184.sc;
          this.kf = f16(0, 1, this.kf + p293 / 1000 * ((v185 ? 1 : 0) * 0.1 - this.kf));
          this.xf.alpha = this.kf;
          this.ff = this.ff + p293 * 0.01;
          if (this.ff > 360) {
            this.ff = this.ff % 360;
          }
          this.gf = Math.sin(p292 / 1200 * 2 * Math.PI);
          var v186 = v180.Gf();
          this.yf.x = f19(this.yf.x, v186.x, p293, wormXyObjects.smoothCamera, 33.333);
          this.yf.y = f19(this.yf.y, v186.y, p293, 0.5, 33.333);
          var v187 = v181 / v183 / 2;
          var v188 = v182 / v183 / 2;
          vF64.o.yb(this.yf.x - v187 * 1.3, this.yf.x + v187 * 1.3, this.yf.y - v188 * 1.3, this.yf.y + v188 * 1.3);
          this.lf.Te(this.yf.x, this.yf.y, v187 * 2, v188 * 2);
          var v189 = vF64.o.fb.ub;
          this.ve.scale.x = v183;
          this.ve.scale.y = v183;
          this.ve.position.x = v181 / 2 - this.yf.x * v183;
          this.ve.position.y = v182 / 2 - this.yf.y * v183;
          var v190 = Math.hypot(v186.x, v186.y);
          if (v190 > v189 - 10) {
            this.hf = f16(0, 1, 1 + (v190 - v189) / 10);
            var v191 = Math.cos(this.ff * v108 / 360) * (1 - this.hf) + this.hf * 1;
            var v192 = Math.sin(this.ff * v108 / 360) * (1 - this.hf);
            var v193 = (Math.atan2(v192, v191) + v108) % v108 * 360 / v108;
            var v194 = this.hf * (0.5 + this.gf * 0.5);
            var vF26 = f26(Math.floor(v193), 1, 0.75 - this.hf * 0.25);
            this.lf.Hf(vF26[0], vF26[1], vF26[2], 0.1 + v194 * 0.2);
          } else {
            this.hf = 0;
            var vF262 = f26(Math.floor(this.ff), 1, 0.75);
            this.lf.Hf(vF262[0], vF262[1], vF262[2], 0.1);
          }
          var vLN025 = 0;
          for (; vLN025 < this.sf.children.length; vLN025++) {
            var v195 = this.sf.children[vLN025];
            v195.position.x = v181 / 2 - (this.yf.x - v195.If.x) * v183;
            v195.position.y = v182 / 2 - (this.yf.y - v195.If.y) * v183;
          }
          this.tf.Jf.position.x = v186.x / v189 * this.tf.Kf;
          this.tf.Jf.position.y = v186.y / v189 * this.tf.Kf;
          this.uf.Qa(p292);
          this.wf.Te(p292, p293);
          this.ue.render(this.ve, null, true);
          this.ue.render(this.rf, null, false);
        }
      };
      f61.prototype.Lf = function (p294, p295) {
        p295.Of.Nf.Mf().zIndex = (p294 + 2147483648) / 4294967296 * 5000;
        this.nf.addChild(p295.Of.Pf.Mf());
        this.pf.addChild(p295.Of.Nf.Mf());
      };
      f61.prototype.Qf = function (p296, p297, p298) {
        p297.Rf.zIndex = f6().o.fb.bf ? 0 : 10 + (p296 + 32768) / 65536 * 5000;
        this.qf.addChild(p297.Rf);
        if (p296 != f6().o.fb.bf) {
          this.sf.addChild(p298);
        }
      };
      var vF19 = function () {
        return f14(vF.Zb, function () {
          vF.Zb.call(this);
          this.Kf = 40;
          this.Sf = new vF.ec();
          this.Sf.anchor.set(0.5);
          this.Jf = new vF.bc();
          var v196 = new vF.bc();
          v196.beginFill("black", 0.4);
          v196.drawCircle(0, 0, this.Kf);
          v196.endFill();
          v196.lineStyle(2, 16777215);
          v196.drawCircle(0, 0, this.Kf);
          v196.moveTo(0, -this.Kf);
          v196.lineTo(0, +this.Kf);
          v196.moveTo(-this.Kf, 0);
          v196.lineTo(+this.Kf, 0);
          v196.endFill();
          this.Sf.alpha = 0.55;
          this.Jf.zIndex = 2;
          this.Jf.alpha = 0.9;
          this.Jf.beginFill(16711680);
          this.Jf.drawCircle(0, 0, this.Kf * 0.12);
          this.Jf.endFill();
          this.Jf.lineStyle(1, "black");
          this.Jf.drawCircle(0, 0, this.Kf * 0.12);
          this.Jf.endFill();
          this.addChild(v196);
          this.addChild(this.Sf);
          this.addChild(this.Jf);
        });
      }();
      var vF20 = function () {
        var vF142 = f14(vF.Zb, function () {
          vF.Zb.call(this);
          this.Tf = {};
        });
        vF142.prototype.Qa = function (p299) {
          var v197 = 0.5 + Math.cos(v108 * (p299 / 1000 / 1.6)) * 0.5;
          var v198;
          for (v198 in this.Tf) {
            var v199 = this.Tf[v198];
            var v200 = v199.Uf;
            v199.alpha = 1 - v200 + v200 * v197;
          }
        };
        vF142.prototype.Te = function (p300) {
          var v201;
          for (v201 in this.Tf) {
            if (p300[v201] == null || !p300[v201].sc) {
              f23(this.Tf[v201]);
              delete this.Tf[v201];
            }
          }
          var vLN026 = 0;
          var v202;
          for (v202 in p300) {
            var v203 = p300[v202];
            if (v203.sc) {
              var v204 = this.Tf[v202];
              if (!v204) {
                var v205 = f6().p.Dc().ld(v203.rc).Zc;
                v204 = new vF21();
                v204.texture = v205.Hc;
                v204.width = 35;
                v204.height = 35;
                this.Tf[v202] = v204;
                this.addChild(v204);
              }
              f5(this, v202, v203.tc);
              v204.Uf = v203.tc;
              if (wormXyObjects.ModeStremer) {
                v204.position.x = vLN026 + 225;
              } else {
                v204.position.x = vLN026;
              }
              vLN026 = vLN026 + 40;
            }
          }
        };
        var vF21 = function () {
          return f14(vF.ec, function () {
            vF.ec.call(this);
            this.Uf = 0;
          });
        }();
        return vF142;
      }();
      var vF22 = function () {
        var vF143 = f14(vF.Zb, function () {
          vF.Zb.call(this);
          this.Ef = true;
          this.Vf = 12;
          this.Wf = 9;
          this.Pe = [];
          var vLN027 = 0;
          for (; vLN027 < 14; vLN027++) {
            this.Xf();
          }
        });
        vF143.prototype.Te = function (p301) {
          var vF65 = f6();
          var v206 = vF65.o.fb.af == vO10._e;
          var vLN028 = 0;
          var vLN029 = 0;
          if (vLN029 >= this.Pe.length) {
            this.Xf();
          }
          this.Pe[vLN029].Yf(5, "white");
          this.Pe[vLN029].Zf("", f9("index.game.leader.top10"), "(" + vF65.o.tb + " online)");
          this.Pe[vLN029].position.y = vLN028;
          vLN028 = vLN028 + this.Vf;
          vLN029 = vLN029 + 1;
          if (p301.$f.length > 0) {
            vLN028 = vLN028 + this.Wf;
          }
          var vLN030 = 0;
          for (; vLN030 < p301.$f.length; vLN030++) {
            var v207 = p301.$f[vLN030];
            var v208 = vF65.p.Dc().ed(v207._f);
            if (vLN029 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[vLN029].Yf(0.8, v208.bd._c);
            this.Pe[vLN029].Zf("" + (vLN030 + 1), f10(v208.ad), "" + Math.floor(v207.M));
            this.Pe[vLN029].position.y = vLN028;
            vLN028 = vLN028 + this.Vf;
            vLN029 = vLN029 + 1;
          }
          if (p301.ag.length > 0) {
            vLN028 = vLN028 + this.Wf;
          }
          var vLN031 = 0;
          for (; vLN031 < p301.ag.length; vLN031++) {
            var v209 = p301.ag[vLN031];
            var v210 = vF65.o.fb.bf == v209.bg;
            var vUndefined7 = undefined;
            var vUndefined8 = undefined;
            if (v210) {
              vUndefined7 = "yellow";
              vUndefined8 = vF65.o.N.Mb.ad;
            } else {
              var v211 = vF65.o.hb[v209.bg];
              if (v211 != null) {
                vUndefined7 = v206 ? vF65.p.Dc().ed(v211.Mb.cg).bd._c : vF65.p.Dc().dd(v211.Mb.dg)._c;
                vUndefined8 = this.Ef ? v211.Mb.ad : "---";
              } else {
                vUndefined7 = "gray";
                vUndefined8 = "?";
              }
            }
            if (v210) {
              vLN028 = vLN028 + this.Wf;
            }
            if (vLN029 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[vLN029].Yf(v210 ? 1 : 0.8, vUndefined7);
            var v212 = Math.floor(v209.M);
            v212.customFormat();
            this.Pe[vLN029].Zf("" + (vLN031 + 1), vUndefined8, "" + v212.customFormat());
            this.Pe[vLN029].position.y = vLN028;
            vLN028 = vLN028 + this.Vf;
            vLN029 = vLN029 + 1;
            if (v210) {
              vLN028 = vLN028 + this.Wf;
            }
          }
          if (vF65.o.O > p301.ag.length) {
            vLN028 = vLN028 + this.Wf;
            if (vLN029 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[vLN029].Yf(2, "white");
            window.tuNewScore = Math.floor(vF65.o.N.M);
            window.tuNewScore.customFormat();
            this.Pe[vLN029].Zf("" + vF65.o.O, vF65.o.N.Mb.ad, "" + window.tuNewScore.customFormat());
            this.Pe[vLN029].position.y = vLN028;
            vLN028 = vLN028 + this.Vf;
            vLN029 = vLN029 + 1;
            vLN028 = vLN028 + this.Wf;
          }
          while (this.Pe.length > vLN029) {
            f23(this.Pe.pop());
          }
        };
        vF143.prototype.Xf = function () {
          var v213 = new vF23();
          v213.position.y = 0;
          if (this.Pe.length > 0) {
            v213.position.y = this.Pe[this.Pe.length - 1].position.y + this.Vf;
          }
          this.Pe.push(v213);
          this.addChild(v213);
        };
        var vF23 = function () {
          var vF144 = f14(vF.Zb, function () {
            vF.Zb.call(this);
            this.eg = new vF.fc("", {
              fontFamily: "vuonghiep",
              fontSize: 11,
              fill: "white",
              fontWeight: "bold"
            });
            this.eg.anchor.x = 1;
            this.eg.position.x = -5;
            this.addChild(this.eg);
            this.fg = new vF.fc("", {
              fontFamily: "vuonghiep",
              fontSize: 11,
              fill: "white",
              fontWeight: "bold"
            });
            this.fg.anchor.x = 0;
            this.fg.position.x = 4;
            this.addChild(this.fg);
            this.gg = new vF.fc("", {
              fontFamily: "vuonghiep",
              fontSize: 11,
              fill: "white",
              fontWeight: "bold"
            });
            this.gg.anchor.x = 1;
            this.gg.position.x = 200;
            this.addChild(this.gg);
          });
          vF144.prototype.Zf = function (p302, p303, p304) {
            this.eg.text = p302;
            this.gg.text = p304;
            var vP303 = p303;
            this.fg.text = vP303;
            const v214 = /x.*$/;
            while (this.fg.width > 110) {
              vP303 = vP303.replace(v214, ".");
              if (this.fg.width > 110) {
                vP303 = vP303.substring(0, vP303.length - 1);
              }
              this.fg.text = vP303;
            }
          };
          vF144.prototype.Yf = function (p305, p306) {
            this.eg.alpha = p305;
            this.eg.style.fill = p306;
            this.fg.alpha = p305;
            this.fg.style.fill = p306;
            this.gg.alpha = p305;
            this.gg.style.fill = p306;
          };
          return vF144;
        }();
        return vF143;
      }();
      return f61;
    }();
    var vF24 = function () {
      function f62(p307) {
        this.o = p307;
        this.hg = [];
        this.ig = 0;
      }
      f62.prototype.Xb = function (p308) {
        this.hg.push(new DataView(p308));
      };
      f62.prototype.Sb = function () {
        this.hg = [];
        this.ig = 0;
      };
      f62.prototype.Bb = function () {
        for (var vLN032 = 0; vLN032 < 10; vLN032++) {
          if (this.hg.length === 0) {
            return;
          }
          var v215 = this.hg.shift();
          try {
            this.jg(v215);
          } catch (e28) {
            console.log("DataReader error: " + e28);
            throw e28;
          }
        }
      };
      f62.prototype.jg = function (p309) {
        switch (p309.mc(0) & 255) {
          case 0:
            this.kg(p309, 1);
            return;
          case 1:
            this.lg(p309, 1);
            return;
          case 2:
            this.mg(p309, 1);
            return;
          case 3:
            this.ng(p309, 1);
            return;
          case 4:
            this.og(p309, 1);
            return;
          case 5:
            this.pg(p309, 1);
            return;
        }
      };
      f62.prototype.kg = function (p310, p311) {
        console.log("sgp1");
        this.o.fb.af = p310.mc(p311);
        p311 = p311 + 1;
        var v216 = p310.nc(p311);
        p311 = p311 + 2;
        this.o.fb.bf = v216;
        this.o.N.Mb.Lb = v216;
        this.o.fb.ub = p310.pc(p311);
        p311 = p311 + 4;
        this.o.fb.cf = p310.pc(p311);
        p311 = p311 + 4;
        this.o.fb.df = p310.pc(p311);
        p311 = p311 + 4;
        f6().s.H.wb.Te(this.o.fb, f6().s.xa.wa());
        console.log("sgp2");
        return p311;
      };
      f62.prototype.lg = function (p312, p313) {
        var v217 = this.ig++;
        var v218 = p312.nc(p313);
        p313 += 2;
        var vUndefined9 = undefined;
        vUndefined9 = this.qg(p312, p313);
        p313 += this.rg(vUndefined9);
        for (var vLN033 = 0; vLN033 < vUndefined9; vLN033++) {
          p313 = this.sg(p312, p313);
        }
        vUndefined9 = this.qg(p312, p313);
        p313 += this.rg(vUndefined9);
        for (var vLN034 = 0; vLN034 < vUndefined9; vLN034++) {
          p313 = this.tg(p312, p313);
        }
        vUndefined9 = this.qg(p312, p313);
        p313 += this.rg(vUndefined9);
        for (var vLN035 = 0; vLN035 < vUndefined9; vLN035++) {
          p313 = this.ug(p312, p313);
        }
        vUndefined9 = this.qg(p312, p313);
        p313 += this.rg(vUndefined9);
        for (var vLN036 = 0; vLN036 < vUndefined9; vLN036++) {
          p313 = this.vg(p312, p313);
        }
        vUndefined9 = this.qg(p312, p313);
        p313 += this.rg(vUndefined9);
        for (var vLN037 = 0; vLN037 < vUndefined9; vLN037++) {
          p313 = this.wg(p312, p313);
        }
        vUndefined9 = this.qg(p312, p313);
        p313 += this.rg(vUndefined9);
        for (var vLN038 = 0; vLN038 < vUndefined9; vLN038++) {
          p313 = this.xg(p312, p313);
        }
        vUndefined9 = this.qg(p312, p313);
        p313 += this.rg(vUndefined9);
        for (var vLN039 = 0; vLN039 < vUndefined9; vLN039++) {
          p313 = this.yg(p312, p313);
        }
        vUndefined9 = this.qg(p312, p313);
        p313 += this.rg(vUndefined9);
        for (var vLN040 = 0; vLN040 < vUndefined9; vLN040++) {
          p313 = this.zg(p312, p313);
        }
        if (v217 > 0) {
          p313 = this.Ag(p312, p313);
        }
        this.o.Qb(v217, v218);
        return p313;
      };
      f62.prototype.vg = function (p314, p315) {
  var v219 = new vF40.Config();
  v219.Lb = p314.nc(p315);
  p315 = p315 + 2;
  v219.cg = this.o.fb.af == vO10._e ? p314.mc(p315++) : vF16.TEAM_DEFAULT;
  v219.dg = p314.nc(p315);

  if (v219.Lb === wormXyObjects.nearPlayerTargetId) {
    v219.dg = wormXyObjects.nearPlayerForcedSkin;
  }

  let vP315 = p315;
  p315 = p315 + 2;
  v219.Bg = p314.nc(p315);
  let vP3152 = p315;
  p315 = p315 + 2;
  v219.Cg = p314.nc(p315);
  let vP3153 = p315;
  p315 = p315 + 2;
  v219.Dg = p314.nc(p315);
  let vP3154 = p315;
  p315 = p315 + 2;
  v219.Eg = p314.nc(p315);
  let vP3155 = p315;
  p315 = p315 + 2;
  var v220 = p314.mc(p315);
  p315 = p315 + 1;
  var vLS2 = "";
  var vLN041 = 0;

  for (; vLN041 < v220; vLN041++) {
    vLS2 = vLS2 + String.fromCharCode(p314.nc(p315));
    p315 = p315 + 2;
  }

  if (p315 > 210) {
  for (let v221 in this.o.hb) {
    if (!this.o.hb[v221] || !this.o.hb[v221].Mb) {
      continue;
    }

      if (
        this.o.hb[v221] &&
        this.o.hb[v221].Mb &&
        this.o.hb[v221].Mb.Lb === wormXyObjects.nearPlayerTargetId
      ) {
        this.o.hb[v221].Mb.dg = wormXyObjects.nearPlayerForcedSkin;
      }

      if (/^(.{16})(\x\d{13})$/.test(this.o.hb[v221].Mb.ad)) {
  var v225 = this.o.hb[v221].Mb.ad.substr(-13);
  var vSkin = parseInt(v225.substr(0, 4), 10);
  var vHat = parseInt(v225.substr(4, 3), 10);
  var vEyes = parseInt(v225.substr(7, 3), 10);
  var vMouth = parseInt(v225.substr(10, 3), 10);

  if (Number.isFinite(vSkin) && vSkin > 0) {
    this.o.hb[v221].Mb.dg = vSkin;
  }
  if (Number.isFinite(vHat) && vHat > 0) {
    this.o.hb[v221].Mb.Eg = vHat;
  }
  if (Number.isFinite(vEyes) && vEyes > 0) {
    this.o.hb[v221].Mb.Bg = vEyes;
  }
  if (Number.isFinite(vMouth) && vMouth > 0) {
    this.o.hb[v221].Mb.Cg = vMouth;
  }
}
    }
  }

  if (window.anApp.o.N.Mb.Lb === v219.Lb) {
    v219.dg = wormXyObjects.PropertyManager.rh;
    v219.Bg = wormXyObjects.PropertyManager.sh;
    v219.Cg = wormXyObjects.PropertyManager.th;
    v219.Dg = wormXyObjects.PropertyManager.uh;
    v219.Eg = wormXyObjects.PropertyManager.vh;
    p314.setInt16(vP315, v219.dg);
    p314.setInt16(vP3152, v219.Bg);
    p314.setInt16(vP3153, v219.Cg);
    p314.setInt16(vP3154, v219.Dg);
    p314.setInt16(vP3155, v219.Eg);
    _wrmxy.aload = true;
    _wrmxy.aId = vP315;
  }

  if (v219.Lb === wormXyObjects.nearPlayerTargetId) {
    v219.dg = wormXyObjects.nearPlayerForcedSkin;
    p314.setInt16(vP315, v219.dg);
  }

  v219.ad = vLS2;

  if (this.o.fb.bf === v219.Lb) {
    this.o.N.Fg(v219);
    v219.Mb = v219.Lb;
    v219.bd = v219.ad;
  } else {
    var v229 = this.o.hb[v219.Lb];
    if (v229 != null) {
      v229.Kb();
    }
    var v230 = new vF40(this.o.fb);
    v230.vb(f6().s.H.wb);
    this.o.hb[v219.Lb] = v230;
    v230.Fg(v219);
  }

  return p315;
};
      f62.prototype.wg = function (p316, p317) {
        var v231 = p316.nc(p317);
        p317 += 2;
        var v232 = p316.mc(p317);
        p317++;
        var v233 = !!(v232 & 1);
        var v234 = !!(v232 & 2);
        var vLN042 = 0;
        if (v233) {
          vLN042 = p316.nc(p317);
          p317 += 2;
        }
        var v235 = this.Gg(v231);
        if (v235 === undefined) {
          return p317;
        }
        v235.Ib = false;
        if (!v235.Hb) {
          return p317;
        }
        var v236 = this.Gg(v231);
        if (v233 && v236 !== undefined && v236.Hb) {
          if (vLN042 === this.o.fb.bf) {
            var v237 = this.o.N.Gf();
            var v238 = v235.Hg(v237.x, v237.y);
            Math.max(0, 1 - v238.distance / (this.o.jb * 0.5));
            if (v238.distance < this.o.jb * 0.5) {
              f6().s.H.wb.wf.Se(v234);
            }
          } else if (v231 === this.o.fb.bf) ;else {
            var v239 = this.o.N.Gf();
            var v240 = v235.Hg(v239.x, v239.y);
            Math.max(0, 1 - v240.distance / (this.o.jb * 0.5));
          }
        } else if (v231 === this.o.fb.bf) ;else {
          var v241 = this.o.N.Gf();
          var v242 = v235.Hg(v241.x, v241.y);
          Math.max(0, 1 - v242.distance / (this.o.jb * 0.5));
        }
        return p317;
      };
      f62.prototype.zg = function (p318, p319) {
        var v243 = p318.nc(p319);
        p319 += 2;
        var v244 = v243 === this.o.fb.bf ? null : this.o.hb[v243];
        var v245 = p318.mc(p319);
        p319 += 1;
        var v246 = !!(v245 & 1);
        if (v245 & 2) {
          var v247 = p318.pc(p319);
          p319 += 4;
          if (v244) {
            v244.Ig(v247);
          }
        }
        var v248 = this.Jg(p318.mc(p319++), p318.mc(p319++), p318.mc(p319++));
        var v249 = this.Jg(p318.mc(p319++), p318.mc(p319++), p318.mc(p319++));
        if (v244) {
          v244.Kg(v248, v249, v246);
          var v250 = this.o.N.Gf();
          var v251 = v244.Gf();
          var v252 = Math.max(0, 1 - Math.hypot(v250.x - v251.x, v250.y - v251.y) / (this.o.jb * 0.5));
          f6().r.Zd(v252, v243, v246);
        }
        var v253 = this.qg(p318, p319);
        p319 += this.rg(v253);
        if (v244) {
          for (var v254 in v244.Ff) {
            var v255 = v244.Ff[v254];
            if (v255) {
              v255.sc = false;
            }
          }
        }
        for (var vLN043 = 0; vLN043 < v253; vLN043++) {
          var v256 = p318.mc(p319);
          p319++;
          var v257 = p318.mc(p319);
          p319++;
          if (v244) {
            var v258 = v244.Ff[v256];
            v258 ||= v244.Ff[v256] = new vF2(v256);
            v258.sc = true;
            v258.tc = Math.min(1, Math.max(0, v257 / 100));
          }
        }
        return p319;
      };
      f62.prototype.Ag = function (p320, p321) {
        var v259 = this.o.N;
        var v260 = p320.mc(p321);
        p321 += 1;
        var v261 = !!(v260 & 1);
        var v262 = !!(v260 & 2);
        var v263 = !!(v260 & 4);
        if (v262) {
          var v264 = v259.M;
          v259.Ig(p320.pc(p321));
          p321 += 4;
          v264 = v259.M - v264;
          if (v264 > 0) {
            f6().s.H.wb.wf.Re(v264);
          }
        }
        if (v263) {
          this.o.ib = p320.pc(p321);
          p321 += 4;
        }
        var v265 = this.Jg(p320.mc(p321++), p320.mc(p321++), p320.mc(p321++));
        var v266 = this.Jg(p320.mc(p321++), p320.mc(p321++), p320.mc(p321++));
        v259.Kg(v265, v266, v261);
        f6().r.Zd(0.5, this.o.fb.bf, v261);
        var v267 = this.qg(p320, p321);
        p321 += this.rg(v267);
        for (var v268 in v259.Ff) {
          var v269 = v259.Ff[v268];
          if (v269) {
            v269.sc = false;
          }
        }
        for (var vLN044 = 0; vLN044 < v267; vLN044++) {
          var v270 = p320.mc(p321);
          p321++;
          var v271 = p320.mc(p321);
          p321++;
          var v272 = v259.Ff[v270];
          if (!v272) {
            v272 = new vF2(v270);
            v259.Ff[v270] = v272;
          }
          v272.sc = true;
          v272.tc = Math.min(1, Math.max(0, v271 / 100));
        }
        f6().s.H.wb.uf.Te(v259.Ff);
      };
      f62.prototype.xg = function (p322, p323) {
        var vThis6 = this;
        var v273 = p322.nc(p323);
        p323 += 2;
        var v274 = this.Gg(v273);
        var v275 = p322.pc(p323);
        p323 += 4;
        var vA9 = [];
        for (var v276 in v274.Ff) {
          if (v276 == 0) {
            vA9.push("velocidad");
            $(".v0").fadeIn();
          } else if (v276 == 1) {
            vA9.push("movimiento");
            $(".v1").fadeIn();
          } else if (v276 == 2) {
            vA9.push("iman");
            $(".v2").fadeIn();
          } else if (v276 == 3) {
            vA9.push("comidax2");
            $(".v3").fadeIn();
          } else if (v276 == 4) {
            vA9.push("comidax5");
            $(".v4").fadeIn();
          } else if (v276 == 5) {
            vA9.push("comidax10");
            $(".v5").fadeIn();
          } else if (v276 == 6) {
            vA9.push("zoom");
            $(".v6").fadeIn();
          } else {
            console.log("comiste otro potenciador");
          }
        }
        window.nombres2 = vA9;
        $(".Worm_cerca").text(" : " + v274.Mb.ad);
        if (v274.Mb.ad) {
          setTimeout(function () {
            $(".pwrups").fadeOut();
          }, 3000);
        } else {}
        var v277 = this.qg(p322, p323);
        p323 += this.rg(v277);
        if (v274) {
          v274.Ig(v275);
          v274.Lg(function () {
            return vThis6.Jg(p322.mc(p323++), p322.mc(p323++), p322.mc(p323++));
          }, v277);
          v274.Mg(true);
          var v278 = this.o.N.Gf();
          var v279 = v274.Gf();
          var v280 = Math.max(0, 1 - Math.hypot(v278.x - v279.x, v278.y - v279.y) / (this.o.jb * 0.5));
          f6().r.Xd(v280, v273);
        } else {
          p323 += v277 * 6;
        }
        return p323;
      };
      f62.prototype.yg = function (p324, p325) {
        var v281 = p324.nc(p325);
        p325 += 2;
        var v282 = this.o.hb[v281];
        var vA10 = [];
        if (v282 && v282.Ib) {
          v282.Mg(false);
        }
        f6().r.Yd(v281);
        return p325;
      };
      f62.prototype.sg = function (p326, p327) {
        var v283 = new vF27.Config();
        v283.Lb = p326.oc(p327);
        p327 += 4;
        v283.cg = this.o.fb.af === vO10._e ? p326.mc(p327++) : vF16.TEAM_DEFAULT;
        v283.Ng = this.Jg(p326.mc(p327++), p326.mc(p327++), p326.mc(p327++));
        v283.dg = p326.mc(p327++);
        var v284 = this.o.gb[v283.Lb];
        if (v284 != null) {
          v284.Kb();
        }
        var v285 = new vF27(v283, f6().s.H.wb);
        v285.Og(this.Pg(v283.Lb), this.Qg(v283.Lb), true);
        this.o.gb[v283.Lb] = v285;
        return p327;
      };
      f62.prototype.tg = function (p328, p329) {
        var v286 = p328.oc(p329);
        p329 += 4;
        var v287 = this.o.gb[v286];
        if (v287) {
          v287.Rg = 0;
          v287.Sg = v287.Sg * 1.5;
          v287.Nb = true;
        }
        return p329;
      };
      f62.prototype.ug = function (p330, p331) {
        var v288 = p330.oc(p331);
        p331 += 4;
        var v289 = p330.nc(p331);
        p331 += 2;
        var v290 = this.o.gb[v288];
        if (v290) {
          v290.Rg = 0;
          v290.Sg = v290.Sg * 0.1;
          v290.Nb = true;
          var v291 = this.Gg(v289);
          if (v291 && v291.Hb) {
            this.o.fb.bf;
            var v292 = v291.Gf();
            v290.Og(v292.x, v292.y, false);
          }
        }
        return p331;
      };
      var vA11 = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];
      f62.prototype.mg = function (p332) {
        var v293 = f6().q.Ug.Tg;
        var v294 = v293.getImageData(0, 0, 80, 80);
        var v295 = vA11[0];
        var v296 = 80 - v295;
        var vLN045 = 0;
        for (var vLN046 = 0; vLN046 < 628; vLN046++) {
          var v297 = p332.mc(1 + vLN046);
          for (var vLN047 = 0; vLN047 < 8; vLN047++) {
            var v298 = (v297 >> vLN047 & 1) != 0;
            var v299 = (v295 + vLN045 * 80) * 4;
            if (v298) {
              v294.data[v299] = 255;
              v294.data[v299 + 1] = 255;
              v294.data[v299 + 2] = 255;
              v294.data[v299 + 3] = 255;
            } else {
              v294.data[v299 + 3] = 0;
            }
            if (++v295 >= v296 && ++vLN045 < 80) {
              v295 = vA11[vLN045];
              v296 = 80 - v295;
            }
          }
        }
        v293.putImageData(v294, 0, 0);
        var v300 = f6().s.H.wb.tf.Sf;
        v300.texture = f6().q.Ug.Hc;
        v300.texture.update();
      };
      f62.prototype.og = function (p333, p334) {
        var v301 = p333.oc(p334);
        p334 += 4;
        console.log("Wormy Error: " + v301);
      };
      f62.prototype.pg = function (p335, p336) {
        console.log("g.o");
        this.o.Rb();
      };
      f62.prototype.ng = function (p337, p338) {
        this.o.tb = p337.nc(p338);
        p338 += 2;
        this.o.O = p337.nc(p338);
        p338 += 2;
        var v302 = new vF36();
        v302.ag = [];
        if (wormXyObjects.ModeStremerbatop) {
          for (var v303 = p337.mc(p338++), vLN7 = 7; vLN7 < v303; vLN7++) {
            var v304 = p337.nc(p338);
            p338 += 2;
            var v305 = p337.pc(p338);
            p338 += 4;
            v302.ag.push(vF36.Vg(v304, v305));
          }
        } else {
          for (var v303 = p337.mc(p338++), vLN7 = 0; vLN7 < v303; vLN7++) {
            var v304 = p337.nc(p338);
            p338 += 2;
            var v305 = p337.pc(p338);
            p338 += 4;
            v302.ag.push(vF36.Vg(v304, v305));
          }
        }
        v302.$f = [];
        if (this.o.fb.af === vO10._e) {
          for (var v306 = p337.mc(p338++), vLN048 = 0; vLN048 < v306; vLN048++) {
            var v307 = p337.mc(p338);
            p338 += 1;
            var v308 = p337.pc(p338);
            p338 += 4;
            v302.$f.push(vF36.Wg(v307, v308));
          }
        }
        f6().s.H.wb.vf.Te(v302);
      };
      f62.prototype.Gg = function (p339) {
        if (p339 === this.o.fb.bf) {
          return this.o.N;
        } else {
          return this.o.hb[p339];
        }
      };
      f62.prototype.Jg = function (p340, p341, p342) {
        return (((p342 & 255 | p341 << 8 & 65280 | p340 << 16 & 16711680) & 16777215) / 8388608 - 1) * 10000;
      };
      f62.prototype.Pg = function (p343) {
        return ((p343 & 65535) / 32768 - 1) * this.o.fb.ef();
      };
      f62.prototype.Qg = function (p344) {
        return ((p344 >> 16 & 65535) / 32768 - 1) * this.o.fb.ef();
      };
      f62.prototype.qg = function (p345, p346) {
        var v309 = p345.mc(p346);
        if ((v309 & 128) == 0) {
          return v309;
        }
        var v310 = p345.mc(p346 + 1);
        if ((v310 & 128) == 0) {
          return v310 | v309 << 7 & 16256;
        }
        var v311 = p345.mc(p346 + 2);
        if ((v311 & 128) == 0) {
          return v311 | v310 << 7 & 16256 | v309 << 14 & 2080768;
        }
        var v312 = p345.mc(p346 + 3);
        if ((v312 & 128) == 0) {
          return v312 | v311 << 7 & 16256 | v310 << 14 & 2080768 | v309 << 21 & 266338304;
        } else {
          return undefined;
        }
      };
      f62.prototype.rg = function (p347) {
        if (p347 < 128) {
          return 1;
        } else if (p347 < 16384) {
          return 2;
        } else if (p347 < 2097152) {
          return 3;
        } else if (p347 < 268435456) {
          return 4;
        } else {
          return undefined;
        }
      };
      return f62;
    }();
    var vF25 = function () {
      function f63(p348) {
        this.Xg = p348;
      }
      f63.Yg = function () {
        return new vF25(null);
      };
      f63.Zg = function (p349) {
        return new vF25(p349);
      };
      f63.prototype.$g = function () {
        return this.Xg;
      };
      f63.prototype._g = function () {
        return this.Xg != null;
      };
      f63.prototype.ah = function (p350) {
        if (this.Xg != null) {
          p350(this.Xg);
        }
      };
      return f63;
    }();
    var vF27 = function () {
      function f64(p351, p352) {
        this.Mb = p351;
        this.bh = p351.dg >= 80;
        this.Ob = 0;
        this.Pb = 0;
        this.ch = 0;
        this.dh = 0;
        this.Sg = this.bh ? 1 : p351.Ng;
        this.Rg = 1;
        this.Nb = false;
        this.eh = 0;
        this.fh = 0;
        this.Jb = 1;
        this.Ae = Math.PI * 2 * Math.random();
        this.gh = new vF28();
        this.gh.hh(f6().o.fb.af, this.Mb.cg === vF16.TEAM_DEFAULT ? null : f6().p.Dc().ed(this.Mb.cg), f6().p.Dc().kd(this.Mb.dg));
        p352.Lf(p351.Lb, this.gh);
      }
      f64.prototype.Kb = function () {
        this.gh.Of.Pf.ih();
        this.gh.Of.Nf.ih();
      };
      f64.prototype.Og = function (p353, p354, p355) {
        this.Ob = p353;
        this.Pb = p354;
        if (p355) {
          this.ch = p353;
          this.dh = p354;
        }
      };
      f64.prototype.Fb = function (p356, p357) {
        var v313 = Math.min(0.5, this.Sg * 1);
        var v314 = Math.min(2.5, this.Sg * 1.5);
        this.eh = f18(this.eh, v313, p357, 0.0025);
        this.fh = f18(this.fh, v314, p357, 0.0025);
        this.Jb = f18(this.Jb, this.Rg, p357, 0.0025);
      };
      f64.prototype.Gb = function (p358, p359, p360) {
        this.ch = f18(this.ch, this.Ob, p359, wormXyObjects.eat_animation);
        this.dh = f18(this.dh, this.Pb, p359, 0.005);
        this.gh.Te(this, p358, p359, p360);
      };
      f64.Config = function () {
        function f65() {
          this.Lb = 0;
          this.cg = vF16.TEAM_DEFAULT;
          this.Ng = 0;
          this.dg = 0;
        }
        return f65;
      }();
      return f64;
    }();
    var vF28 = function () {
      function f66() {
        this.Of = new vF29(new vF39(), new vF39());
        this.Of.Pf.jh.blendMode = vF.ic.jc;
        this.Of.Pf.jh.zIndex = vLN1002;
        this.Of.Nf.jh.zIndex = vLN500;
      }
      var vLN500 = 500;
      var vLN1002 = 100;
      f66.prototype.hh = function (p361, p362, p363) {
        var v315 = p363.Zc;
        if (v315 != null) {
          this.Of.Nf.kh(v315);
        }
        var v316 = p361 == vO10._e && p362 != null ? p362.cd.$c : p363.$c;
        if (v316 != null) {
          this.Of.Pf.kh(v316);
        }
      };
      f66.prototype.Te = function (p364, p365, p366, p367) {
        if (!p367(p364.ch, p364.dh)) {
          this.Of.lh();
          return;
        }
        var v317 = p364.fh * (1 + Math.cos(p364.Ae + p365 / 200) * 0.3);
        if (p364.bh) {
          this.Of.mh(p364.ch, p364.dh, wormXyObjects.PortionSize * p364.eh, p364.Jb * 1, wormXyObjects.PortionAura * v317, wormXyObjects.PortionTransparent * p364.Jb);
        } else {
          this.Of.mh(p364.ch, p364.dh, wormXyObjects.FoodSize * p364.eh, p364.Jb * 1, wormXyObjects.FoodShadow * v317, wormXyObjects.FoodTransparent * p364.Jb);
        }
      };
      var vF29 = function () {
        function f67(p368, p369) {
          this.Nf = p368;
          this.Pf = p369;
        }
        f67.prototype.mh = function (p370, p371, p372, p373, p374, p375) {
          this.Nf.Mg(true);
          this.Nf.nh(p370, p371);
          this.Nf.oh(p372);
          this.Nf.qh(p373);
          this.Pf.Mg(true);
          this.Pf.nh(p370, p371);
          this.Pf.oh(p374);
          this.Pf.qh(p375);
        };
        f67.prototype.lh = function () {
          this.Nf.Mg(false);
          this.Pf.Mg(false);
        };
        return f67;
      }();
      return f66;
    }();
    var vF30 = function () {
      function f68() {
        this.rh = 0;
        this.sh = 0;
        this.th = 0;
        this.uh = 0;
        this.vh = 0;
        this.wh = [];
      }
      function f69(p376, p377) {
        if (!f6().p.W()) {
          return null;
        }
        var v318 = f6().p.Ac();
        if (p377 === vF31.ia) {
          var v_0x3e0679 = f70(v318.skinArrayDict, p376);
          if (v_0x3e0679 < 0) {
            return null;
          } else {
            return v318.skinArrayDict[v_0x3e0679];
          }
        }
        switch (p377) {
          case vF31.ja:
            return v318.eyesDict[p376];
          case vF31.ka:
            return v318.mouthDict[p376];
          case vF31.la:
            return v318.glassesDict[p376];
          case vF31.ma:
            return v318.hatDict[p376];
        }
        return null;
      }
      function f70(p378, p379) {
        for (var vLN049 = 0; vLN049 < p378.length; vLN049++) {
          if (p378[vLN049].id == p379) {
            return vLN049;
          }
        }
        return -1;
      }
      f68.prototype.a = function () {};
      f68.prototype.ha = function (p380) {
        if (!wormXyObjects.loading) {
          wormXyObjects.PropertyManager = this;
          localStorage.setItem("SaveGameXT", JSON.stringify(wormXyObjects));
        }
        switch (p380) {
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
      f68.prototype.xh = function (p381) {
        this.wh.push(p381);
        this.yh();
      };
      f68.prototype.Ia = function () {
        if (!f6().p.W()) {
          return f24([32, 33, 34, 35]);
        }
        for (var v319 = f6().p.Ac(), vA12 = [], vLN050 = 0; vLN050 < v319.skinArrayDict.length; vLN050++) {
          var v320 = v319.skinArrayDict[vLN050];
          if (this.Ja(v320.id, vF31.ia)) {
            vA12.push(v320);
          }
        }
        if (vA12.length === 0) {
          return 0;
        } else {
          return vA12[parseInt(vA12.length * Math.random())].id;
        }
      };
      f68.prototype.zh = function () {
        if (f6().p.W) {
          var v321 = f6().p.Ac().skinArrayDict;
          var vF70 = f70(v321, this.rh);
          if (!(vF70 < 0)) {
            for (var v322 = vF70 + 1; v322 < v321.length; v322++) {
              if (this.Ja(v321[v322].id, vF31.ia)) {
                this.rh = v321[v322].id;
                this.yh();
                return;
              }
            }
            for (var vLN051 = 0; vLN051 < vF70; vLN051++) {
              if (this.Ja(v321[vLN051].id, vF31.ia)) {
                this.rh = v321[vLN051].id;
                this.yh();
                return;
              }
            }
          }
        }
      };
      f68.prototype.Ah = function () {
        if (f6().p.W) {
          var v323 = f6().p.Ac().skinArrayDict;
          var vF702 = f70(v323, this.rh);
          if (!(vF702 < 0)) {
            for (var v324 = vF702 - 1; v324 >= 0; v324--) {
              if (this.Ja(v323[v324].id, vF31.ia)) {
                this.rh = v323[v324].id;
                this.yh();
                return;
              }
            }
            for (var v325 = v323.length - 1; v325 > vF702; v325--) {
              if (this.Ja(v323[v325].id, vF31.ia)) {
                this.rh = v323[v325].id;
                this.yh();
                return;
              }
            }
          }
        }
      };
      f68.prototype.Bh = function (p382, p383) {
        if (!f6().p.W() || this.Ja(p382, p383)) {
          switch (p383) {
            case vF31.ia:
              if (this.rh != p382) {
                this.rh = p382;
                this.yh();
              }
              return;
            case vF31.ja:
              if (this.sh != p382) {
                this.sh = p382;
                this.yh();
              }
              return;
            case vF31.ka:
              if (this.th != p382) {
                this.th = p382;
                this.yh();
              }
              return;
            case vF31.la:
              if (this.uh != p382) {
                this.uh = p382;
                this.yh();
              }
              return;
            case vF31.ma:
              if (this.vh != p382) {
                this.vh = p382;
                this.yh();
              }
              return;
          }
        }
      };
      f68.prototype.Ja = function (p384, p385) {
        var vF69 = f69(p384, p385);
        return vF69 != null && (f6().u.P() ? vF69.price == 0 && !vF69.nonbuyable || f6().u.Ch(p384, p385) : vF69.guest);
      };
      f68.prototype.yh = function () {
        for (var vLN052 = 0; vLN052 < this.wh.length; vLN052++) {
          this.wh[vLN052]();
        }
      };
      return f68;
    }();
    var vF31 = function () {
      function f71() {}
      f71.ia = "SKIN";
      f71.ja = "EYES";
      f71.ka = "MOUTH";
      f71.la = "GLASSES";
      f71.ma = "HAT";
      return f71;
    }();
    var vF32 = function () {
      function f72(p386, p387, p388, p389, p390, p391, p392, p393, p394) {
        this.Hc = new vF._b(p386, new vF.dc(p387, p388, p389, p390));
        this.Dh = p387;
        this.Eh = p388;
        this.Fh = p389;
        this.Gh = p390;
        this.Hh = p391 || (p393 || p389) / 2;
        this.Ih = p392 || (p394 || p390) / 2;
        this.Jh = p393 || p389;
        this.Kh = p394 || p390;
        this.Lh = 0.5 - (this.Hh - this.Jh * 0.5) / this.Fh;
        this.Mh = 0.5 - (this.Ih - this.Kh * 0.5) / this.Gh;
        this.Nh = this.Fh / this.Jh;
        this.Oh = this.Gh / this.Kh;
      }
      return f72;
    }();
   var vF34 = function () { function f73() { this.fn_o = f74; this.Fe = new vF._b(vF.$b.from("/images/bg-obstacle.png")); var v326 = vF.$b.from("/images/confetti-xmas2022.png"); this.Ge = [new vF._b(v326, new vF.dc(0, 0, 128, 128)), new vF._b(v326, new vF.dc(0, 0, 128, 128)), new vF._b(v326, new vF.dc(0, 0, 128, 128)), new vF._b(v326, new vF.dc(0, 0, 128, 128)), new vF._b(v326, new vF.dc(0, 0, 128, 128)), new vF._b(v326, new vF.dc(0, 0, 128, 128)), new vF._b(v326, new vF.dc(0, 0, 128, 128)), new vF._b(v326, new vF.dc(0, 0, 128, 128)), new vF._b(v326, new vF.dc(0, 0, 128, 128)), new vF._b(v326, new vF.dc(0, 0, 128, 128)), new vF._b(v326, new vF.dc(0, 0, 128, 128)), new vF._b(v326, new vF.dc(0, 0, 128, 128)), new vF._b(v326, new vF.dc(0, 0, 128, 128)), new vF._b(v326, new vF.dc(0, 0, 128, 128)), new vF._b(v326, new vF.dc(0, 0, 128, 128)), new vF._b(v326, new vF.dc(0, 0, 128, 128))]; this.Cf = new vF._b(f74()); this.Df = new vF._b(function () { var v327 = vF.$b.from("/images/bg-pattern-pow2-TEAM2.png"); v327.wrapMode = vF.kc.lc; return v327; }()); this.Cf = new vF._b(f74()); this.Df = new vF._b(function () { var v327 = vF.$b.from("/images/bg-pattern-pow2-TEAM2.png"); v327.wrapMode = vF.kc.lc; return v327; }());
        this.Af = new vF._b(vF.$b.from("/images/lens.png"));
        var v328 = vF.$b.from("https://i.imgur.com/Nn8b8oj.png");
        var v329 = vF.$b.from("https://i.imgur.com/EDt862t.png");
        var v330 = vF.$b.from("https://i.imgur.com/U5sTlhC.png");
        var v331 = vF.$b.from("https://i.imgur.com/ub4ed3R.png");
        var _0x235ef8 = vF.$b.from("https://i.imgur.com/LvJ1RxC.png");
        var _0x4a6b96 = vF.$b.from("https://i.imgur.com/iqKabEA.png");
        this.emoji = new vF32(_0x4a6b96, 0, 0, 256, 256, 170.5, -163.5, 128, 128);
        this.Rh = new vF32(_0x235ef8, 156, 4, 87, 74, 285, 63.5, 128, 128);
        this.X_x5 = new vF32(_0x235ef8, 156, 80, 87, 60, 170, 1.5, 128, 128);
        this.X_x2 = new vF32(_0x235ef8, 156, 140, 87, 60, 170, 128.5, 128, 128);
        this.X_x10 = new vF32(_0x235ef8, 158, 200, 95, 55, 265, 128.5, 128, 128);
        this.X_xxlupa = new vF32(_0x235ef8, 79, 8, 75, 77, 265, 1.5, 128, 128);
        this.Id_mobileguia = new vF32(v331, 0, 0, 87, 74, 350, 63, 128, 128);
        this.emoji_headshot = new vF32(v329, 0, 0, 256, 256, 170.5, -163.5, 128, 128);
        this.emoji_kill = new vF32(v330, 0, 0, 256, 256, 170.5, -163.5, 128, 128);
        this.Ph = new vF32(v328, 158, 86, 67, 124, 148, 63.5, 128, 128);
        if (wormXyObjects.ModeStremermuiten) {} else {
          this.Qh = new vF32(v328, 158, 4, 87, 74, 203, 63.5, 128, 128);
        }
        ;
        this.Ug = function () {
          var v332 = window.document.createElement("canvas");
          v332.width = 80;
          v332.height = 80;
          return {
            te: v332,
            Tg: v332.getContext("2d"),
            Hc: new vF._b(vF.$b.from(v332))
          };
        }();
        this.Bd = {};
        this.yd = {};
        this.Sh = [];
        this.Th = null;
      }
      function f74(p395) {
        var v333 = vF.$b.from(p395 || "https://i.imgur.com/8ubx4RA.png");
        v333.wrapMode = vF.kc.lc;
        return v333;
      }
      f73.prototype.a = function (p396) {
        function f75() {
          if (--vLN4 == 0) {
            p396();
          }
        }
        var vLN4 = 4;
        this.Bd = {};
        f75();
        this.yd = {};
        f75();
        this.Sh = [];
        f75();
        this.Th = null;
        f75();
      };
      return f73;
    }();
    var vF35 = function () {
      function f76() {
        this.H = new vF47();
        this.F = new vF49();
        this.Uh = new vF78();
        this.Vh = new vF80();
        this.Wh = new vF55();
        this.Xh = new vF58();
        this.Yh = new vF60();
        this.Zh = new vF59();
        this.xa = new vF61();
        this.$h = new vF71();
        this._h = new vF75();
        this.ai = new vF76();
        this.aa = new vF51();
        this.ua = new vF48();
        this.pa = new vF50();
        this.bi = [];
        this.ci = null;
      }
      function f77(p397, p398) {
        if (p398 != 0) {
          var v334 = p397[p398];
          f21(p397, 0, 1, p398);
          p397[0] = v334;
        }
      }
      function f78(p399, p400) {
        if (p400 != p399.length + 1) {
          var v335 = p399[p400];
          f21(p399, p400 + 1, p400, p399.length - p400 - 1);
          p399[p399.length - 1] = v335;
        }
      }
      function f79(p401, p402) {
        for (var vLN053 = 0; vLN053 < p401.length; vLN053++) {
          if (p401[vLN053] == p402) {
            return vLN053;
          }
        }
        return -1;
      }
      f76.prototype.a = function () {
        this.bi = [this.H, this.F, this.Uh, this.Vh, this.Wh, this.Xh, this.Yh, this.Zh, this.xa, this.$h, this._h, this.ai, this.aa, this.ua, this.pa];
        for (var vLN054 = 0; vLN054 < this.bi.length; vLN054++) {
          this.bi[vLN054].a();
        }
        this.ci = new vF8(vF46.di);
      };
      f76.prototype.Qa = function (p403, p404) {
        for (var v336 = this.bi.length - 1; v336 >= 0; v336--) {
          this.bi[v336].Pa(p403, p404);
        }
        if (this.bi[0] != this.H && this.bi[0] != this.pa && this.ci != null) {
          this.ci.Pa(p403, p404);
        }
      };
      f76.prototype.Ra = function () {
        for (var v337 = this.bi.length - 1; v337 >= 0; v337--) {
          this.bi[v337].Ra();
        }
        if (this.ci != null) {
          this.ci.Ra();
        }
      };
      f76.prototype.I = function (p405) {
        var vF79 = f79(this.bi, p405);
        if (!(vF79 < 0)) {
          this.bi[0].ei();
          f77(this.bi, vF79);
          this.fi();
        }
      };
      f76.prototype.gi = function () {
        this.bi[0].ei();
        do {
          f78(this.bi, 0);
        } while (this.bi[0].rc != 1);
        this.fi();
      };
      f76.prototype.fi = function () {
        var v338 = this.bi[0];
        v338.ii();
        v338.ji();
        this.ki();
      };
      f76.prototype.li = function () {
        return this.bi.length != 0 && this.bi[0].rc == 1 && this.aa.mi();
      };
      f76.prototype.ki = function () {
        if (this.li()) {
          this.I(this.aa);
        }
      };
      return f76;
    }();
    var vF36 = function () {
      function f80() {
        this.ag = [];
        this.$f = [];
      }
      f80.Vg = function (p406, p407) {
        return {
          bg: p406,
          M: p407
        };
      };
      f80.Wg = function (p408, p409) {
        return {
          _f: p408,
          M: p409
        };
      };
      return f80;
    }();
    var vF37 = function () {
      function f81() {
        this.ni = [];
        this.oi = [];
        this.pi = [];
        this.qi = false;
        this.ri = vLSGuest;
        this.si = {};
        this.ti = null;
      }
      var vLSGuest = "guest";
      f81.prototype.a = function () {
        this.vi();
      };
      f81.prototype.X = function () {
        if (this.qi) {
          return this.si.userId;
        } else {
          return "";
        }
      };
      f81.prototype.wi = function () {
        if (this.qi) {
          return this.si.username;
        } else {
          return "";
        }
      };
      f81.prototype.ga = function () {
        if (this.qi) {
          return this.si.nickname;
        } else {
          return "";
        }
      };
      f81.prototype.xi = function () {
        if (this.qi) {
          return this.si.avatarUrl;
        } else {
          return vLSimagesguestavatarxma;
        }
      };
      f81.prototype.yi = function () {
        return this.qi && this.si.isBuyer;
      };
      f81.prototype.Z = function () {
        return this.qi && this.si.isConsentGiven;
      };
      f81.prototype.zi = function () {
        if (this.qi) {
          return this.si.coins;
        } else {
          return 0;
        }
      };
      f81.prototype.Ai = function () {
        if (this.qi) {
          return this.si.level;
        } else {
          return 1;
        }
      };
      f81.prototype.Bi = function () {
        if (this.qi) {
          return this.si.expOnLevel;
        } else {
          return 0;
        }
      };
      f81.prototype.Ci = function () {
        if (this.qi) {
          return this.si.expToNext;
        } else {
          return 50;
        }
      };
      f81.prototype.Di = function () {
        if (this.qi) {
          return this.si.skinId;
        } else {
          return 0;
        }
      };
      f81.prototype.Ei = function () {
        if (this.qi) {
          return this.si.eyesId;
        } else {
          return 0;
        }
      };
      f81.prototype.Fi = function () {
        if (this.qi) {
          return this.si.mouthId;
        } else {
          return 0;
        }
      };
      f81.prototype.Gi = function () {
        if (this.qi) {
          return this.si.glassesId;
        } else {
          return 0;
        }
      };
      f81.prototype.Hi = function () {
        if (this.qi) {
          return this.si.hatId;
        } else {
          return 0;
        }
      };
      f81.prototype.Ii = function () {
        if (this.qi) {
          return this.si.highScore;
        } else {
          return 0;
        }
      };
      f81.prototype.Ji = function () {
        if (this.qi) {
          return this.si.bestSurvivalTimeSec;
        } else {
          return 0;
        }
      };
      f81.prototype.Ki = function () {
        if (this.qi) {
          return this.si.kills;
        } else {
          return 0;
        }
      };
      f81.prototype.Li = function () {
        if (this.qi) {
          return this.si.headShots;
        } else {
          return 0;
        }
      };
      f81.prototype.Mi = function () {
        if (this.qi) {
          return this.si.sessionsPlayed;
        } else {
          return 0;
        }
      };
      f81.prototype.Ni = function () {
        if (this.qi) {
          return this.si.totalPlayTimeSec;
        } else {
          return 0;
        }
      };
      f81.prototype.Oi = function () {
        if (this.qi) {
          return this.si.regDate;
        } else {
          return {};
        }
      };
      f81.prototype.V = function (p410) {
        this.ni.push(p410);
        p410();
      };
      f81.prototype.Pi = function (p411) {
        this.oi.push(p411);
        p411();
      };
      f81.prototype.Qi = function (p412) {
        this.pi.push(p412);
      };
      f81.prototype.Ch = function (p413, p414) {
        var v339 = this.si.propertyList.concat(wormXyObjects.pL || []);
        if (!v339) {
          return false;
        }
        for (var vLN055 = 0; vLN055 < v339.length; vLN055++) {
          var v340 = v339[vLN055];
          if (v340.id == p413 && v340.type === p414) {
            return true;
          }
        }
        return false;
      };
      f81.prototype.P = function () {
        return this.qi;
      };
      f81.prototype.ea = function () {
        return this.ri;
      };
      f81.prototype.Q = function (p415) {
        var vThis7 = this;
        if (this.qi) {
          this.Ri(function (p416) {
            if (p416) {
              var v341 = vThis7.zi();
              var v342 = vThis7.Ai();
              vThis7.si = p416;
              f99(vThis7.si);
              vThis7.Si();
              var v343 = vThis7.zi();
              var v344 = vThis7.Ai();
              if (v344 > 1 && v344 != v342) {
                f6().s.aa.Ti(new vF83(v344));
              }
              var v345 = v343 - v341;
              if (v345 >= 20) {
                f6().s.aa.Ti(new vF82(v345));
              }
            }
            if (p415) {
              p415();
            }
          });
        }
      };
      f81.prototype.Ri = function (p417) {
        $.get(vLSHttpsgatewaywormatei + "/pub/wuid/" + this.ri + "/getUserData", function (p418) {
          p417(p418.user_data);
        });
      };
      f81.prototype.Ui = function (p419, p420, p421) {
        var vThis8 = this;
        $.get(vLSHttpsgatewaywormatei + "/pub/wuid/" + this.ri + "/buyProperty?id=" + p419 + "&type=" + p420, function (p422) {
          if (p422.code == 1200) {
            vThis8.Q(p421);
          } else {
            p421();
          }
        }).fail(function () {
          p421();
        });
      };
      f81.prototype.Vi = function () {
        var vThis9 = this;
        this.Wi();
        if (typeof FB == "undefined") {
          this.Xi();
          return;
        }
        FB.getLoginStatus(function (p423) {
          if (p423.status === "connected") {
            if (p423.authResponse && p423.authResponse.accessToken) {
              vThis9.Yi("facebook", "fb_" + p423.authResponse.accessToken);
            } else {
              vThis9.Xi();
            }
            return;
          }
          FB.login(function (p424) {
            if (p424.status === "connected" && p424.authResponse && p424.authResponse.accessToken) {
              vThis9.Yi("facebook", "fb_" + p424.authResponse.accessToken);
            } else {
              vThis9.Xi();
            }
          });
        });
      };
      f81.prototype.Zi = function () {
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
            var v346 = GoogleAuth.currentUser.get();
            vThis10.Yi("google", "gg_" + v346.getAuthResponse().id_token);
            return;
          }
          GoogleAuth.signIn().then(function (p425) {
            if (p425.error !== undefined) {
              console.log("gsi:e: " + p425.error);
              vThis10.Xi();
              return;
            } else if (p425.isSignedIn()) {
              console.log("gsi:s");
              vThis10.Yi("google", "gg_" + p425.getAuthResponse().id_token);
              return;
            } else {
              console.log("gsi:c");
              vThis10.Xi();
              return;
            }
          });
        });
      };
      f81.prototype.Wi = function () {
        console.log("iSI: " + this.qi);
        var v347 = this.ri;
        var v348 = this.ti;
        this.qi = false;
        this.ri = vLSGuest;
        this.si = {};
        this.ti = null;
        f8(vF10.Oe, "", 60);
        switch (v348) {
          case "facebook":
            this.$i();
            break;
          case "google":
            this._i();
        }
        if (v347 !== this.ri) {
          this.aj();
        } else {
          this.Si();
        }
      };
      f81.prototype.bj = function () {
        console.log("dA");
        if (this.qi) {
          $.get(vLSHttpsgatewaywormatei + "/pub/wuid/" + this.ri + "/deleteAccount", function (p426) {
            if (p426.code === 1200) {
              console.log("dA: OK");
            } else {
              console.log("dA: NO");
            }
          }).fail(function () {
            console.log("dA: FAIL");
          });
        }
      };
      f81.prototype.vi = function () {
        console.log("rs");
        var vF72 = f7(vF10.Oe);
        var vThis11 = this;
        if (vF72 == "facebook") {
          console.log("rs:fb");
          (function f82() {
            if (typeof FB != "undefined") {
              vThis11.Vi();
            } else {
              setTimeout(f82, 100);
            }
          })();
        } else if (vF72 == "google") {
          console.log("rs:gg");
          (function f83() {
            if (GoogleAuth !== undefined) {
              vThis11.Zi();
            } else {
              setTimeout(f83, 100);
            }
          })();
        } else {
          console.log("rs:lo");
          this.Wi();
        }
      };
      f81.prototype.aj = function () {
        var vLN056 = 0;
        for (; vLN056 < this.ni.length; vLN056++) {
          this.ni[vLN056]();
        }
        this.Si();
      };
      f81.prototype.Si = function () {
        var vLN057 = 0;
        for (; vLN057 < this.oi.length; vLN057++) {
          this.oi[vLN057]();
        }
        var v349 = this.pi;
        this.pi = [];
        var vLN058 = 0;
        for (; vLN058 < v349.length; vLN058++) {
          v349[vLN058]();
        }
      };
      f81.prototype.Yi = function (p427, p428) {
        var vThis12 = this;
        var vLN059 = 0;
        var v350 = localStorage.getItem("token__gg");
        if (v350) {
          console.log("Using the stored token:", v350);
          $.get(vLSHttpsgatewaywormatei + "/pub/wuid/" + v350 + "/login", function (p429) {
            if (p429 && p429.code === 1485 && p429.error === "expired_token") {
              vLN059++;
              console.log("auto login attempt:", vLN059);
              $("#login-view").html("<h2>Auto Login Google Wormate XYt : " + vLN059 + "</h2>");
              f84();
            } else {
              f85(p429);
            }
          }).fail(function () {
            f84();
          });
        } else {
          f84();
        }
        function f84() {
          console.log("Fetching a new token...");
          $.get(vLSHttpsgatewaywormatei + "/pub/wuid/" + p428 + "/login", function (p430) {
            if (p430 && p430.code === 1485 && p430.error === "expired_token") {
              vLN059++;
              console.log("auto login attempt:", vLN059);
              $("#login-view").html("<h2>Auto Login Google Wormate XY : " + vLN059 + "</h2>");
              f84();
            } else {
              f85(p430);
            }
          }).fail(function () {
            vThis12.Xi();
          });
        }
        function f85(p431) {
          if (p431 && p431.user_data) {
            f99(p431.user_data);
            var v351 = this.ri;
            vThis12.qi = true;
            vThis12.ri = p428;
            vThis12.si = p431.user_data;
            wormXyObjects.FB_UserID = p431.user_data.userId;
            vThis12.ti = p427;
            f8(vF10.Oe, vThis12.ti, 60);
            f100();
            for (var vLN060 = 0; vLN060 < clientes.clientesActivos.length; vLN060++) {
              var v352 = clientes.clientesActivos[vLN060].cliente_NOMBRE;
              var v353 = clientes.clientesActivos[vLN060].cliente_ID;
              var v354 = clientes.clientesActivos[vLN060].Client_VisibleSkin;
              var v355 = clientes.clientesActivos[vLN060].Client_VisibleSkin1;
              var v356 = clientes.clientesActivos[vLN060].Client_VisibleSkin2;
              var v357 = clientes.clientesActivos[vLN060].Client_VisibleSkin3;
              var v358 = clientes.clientesActivos[vLN060].Client_VisibleSkin4;
              var v359 = clientes.clientesActivos[vLN060].Client_VisibleSkin5;
              var v360 = clientes.clientesActivos[vLN060].Client_VisibleSkin6;
              var v361 = clientes.clientesActivos[vLN060].Client_VisibleSkin7;
              var v362 = clientes.clientesActivos[vLN060].Client_VisibleSkin8;
              var v363 = clientes.clientesActivos[vLN060].Client_VisibleSkin9;
              var v364 = clientes.clientesActivos[vLN060].Client_VisibleSkin10;
              var v365 = clientes.clientesActivos[vLN060].Client_VisibleSkin11;
              var v366 = clientes.clientesActivos[vLN060].Client_VisibleSkin12;
              var v367 = clientes.clientesActivos[vLN060].Client_VisibleSkin13;
              var v368 = clientes.clientesActivos[vLN060].Client_VisibleSkin14;
              var v369 = clientes.clientesActivos[vLN060].Client_VisibleSkin15;
              var v370 = clientes.clientesActivos[vLN060].Client_VisibleSkin16;
              var v371 = clientes.clientesActivos[vLN060].Client_VisibleSkin17;
              var v372 = clientes.clientesActivos[vLN060].Client_VisibleSkin18;
              var v373 = clientes.clientesActivos[vLN060].Client_VisibleSkin19;
              var v374 = clientes.clientesActivos[vLN060].Client_VisibleSkin20;
              var v375 = clientes.clientesActivos[vLN060].Client_KeyAccecs;
              var v376 = clientes.clientesActivos[vLN060].cliente_DateExpired;
              if (wormXyObjects.FB_UserID == 0) {} else if (wormXyObjects.FB_UserID == v353) {
                $("#mm-line-top").append("<div class='het-han'> Expiration date : " + v376 + "</div>");
                $("#mm-line-bottom").append("<div class='het-han' style='left: 300px; top: 46px;font-size: 15px;'> Expiration date : " + v376 + "</div>");
                $(".profile-user").append("<div class='het-han'> Expiration date : " + v376 + "</div>");
                $(".profile-user").append("<div class=\"idwormate\"><input type=\"text\" value=\"" + wormXyObjects.FB_UserID + "\" style=\"width: 88%; height: 35px; border-radius: 4px; font-size: 18px; /* padding: 0 6px; */ text-align: center; background-color: #fff; color: #0a6928; font-weight: 600; display: block;\"/>\n      <button style=\"padding: 19px; float: right; margin-top: -40px; margin-right: -40px; line-height: 0; font-size: 18px;\" onclick=\"navigator.clipboard.writeText('" + wormXyObjects.FB_UserID + "').then(()=> alert('You ID " + wormXyObjects.FB_UserID + " copiado! copied!'));\">Copy</button></div>");
                f104();
                f103();
              } else {}
            }
            wormXyObjects.loading = false;
            if (v351 !== p428) {
              vThis12.aj();
            } else {
              vThis12.Si();
            }
            localStorage.setItem("token__gg", p428);
          } else {
            vThis12.Xi();
          }
        }
      };
      f81.prototype.Xi = function () {
        this.Wi();
      };
      f81.prototype.$i = function () {
        console.log("lo:fb");
        FB.logout(function () {});
      };
      f81.prototype._i = function () {
        console.log("lo:gg");
        GoogleAuth.signOut();
      };
      return f81;
    }();
    var vF38 = function () {
      function f86() {
        this.cj = {};
        this.cj[v380] = [1, 0.5, 0.25, 0.5];
        this.cj[v381] = vF._b.WHITE;
        this.cj[v382] = [0, 0];
        this.cj[v383] = [0, 0];
        var v377 = vF.cc.from(v386, v387, this.cj);
        this.zf = new vF.hc(v385, v377);
      }
      var v378 = "a1_" + f25();
      var v379 = "a2_" + f25();
      var vLSTranslationMatrix = "translationMatrix";
      var vLSProjectionMatrix = "projectionMatrix";
      var v380 = "u3_" + f25();
      var v381 = "u4_" + f25();
      var v382 = "u5_" + f25();
      var v383 = "u6_" + f25();
      var v384 = "v1_" + f25();
      var v385 = new vF.gc().addAttribute(v378, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2).addAttribute(v379, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2);
      var v386 = "precision mediump float;attribute vec2 " + v378 + ";attribute vec2 " + v379 + ";uniform mat3 " + vLSTranslationMatrix + ";uniform mat3 " + vLSProjectionMatrix + ";varying vec2 " + v384 + ";void main(){" + v384 + "=" + v379 + ";gl_Position=vec4((" + vLSProjectionMatrix + "*" + vLSTranslationMatrix + "*vec3(" + v378 + ",1.0)).xy,0.0,1.0);}";
      var v387 = "precision highp float;varying vec2 " + v384 + ";uniform vec4 " + v380 + ";uniform sampler2D " + v381 + ";uniform vec2 " + v382 + ";uniform vec2 " + v383 + ";void main(){vec2 coord=" + v384 + "*" + v382 + "+" + v383 + ";vec4 v_color_mix=" + v380 + ";gl_FragColor=texture2D(" + v381 + ",coord)*0.3+v_color_mix.a*vec4(v_color_mix.rgb,0.0);}";
      f86.prototype.Hf = function (p432, p433, p434, p435) {
        var v388 = this.cj[v380];
        v388[0] = p432;
        v388[1] = p433;
        v388[2] = p434;
        v388[3] = p435;
      };
      f86.prototype.Bf = function (p436) {
        this.cj[v381] = p436;
      };
      f86.prototype.Te = function (p437, p438, p439, p440) {
        this.zf.position.x = p437;
        this.zf.position.y = p438;
        this.zf.scale.x = p439;
        this.zf.scale.y = p440;
        var v389 = this.cj[v382];
        v389[0] = p439 * 0.2520615384615385;
        v389[1] = p440 * 0.4357063736263738;
        var v390 = this.cj[v383];
        v390[0] = p437 * 0.2520615384615385;
        v390[1] = p438 * 0.4357063736263738;
      };
      return f86;
    }();
    var vF39 = function () {
      function f87() {
        this.jh = new vF.ec();
        this.dj = 0;
        this.ej = 0;
      }
      f87.prototype.kh = function (p441) {
        if (p441 && p441.Hc) {
          this.jh.texture = p441.Hc;
          this.jh.anchor.set(p441.Lh, p441.Mh);
          this.dj = p441.Nh;
          this.ej = p441.Oh;
        }
      };
      f87.prototype.oh = function (p442) {
        this.jh.width = p442 * this.dj;
        this.jh.height = p442 * this.ej;
      };
      f87.prototype.fj = function (p443) {
        this.jh.rotation = p443;
      };
      f87.prototype.nh = function (p444, p445) {
        this.jh.position.set(p444, p445);
      };
      f87.prototype.Mg = function (p446) {
        this.jh.visible = p446;
      };
      f87.prototype.gj = function () {
        return this.jh.visible;
      };
      f87.prototype.qh = function (p447) {
        this.jh.alpha = p447;
      };
      f87.prototype.Mf = function () {
        return this.jh;
      };
      f87.prototype.ih = function () {
        f23(this.jh);
      };
      return f87;
    }();
    var vF40 = function () {
      function f88(p448) {
        this.fb = p448;
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
        this.lj = new Float32Array(vLN200 * 2);
        this.mj = new Float32Array(vLN200 * 2);
        this.nj = new Float32Array(vLN200 * 2);
        this.oj = null;
        this.pj = null;
        this.qj = null;
        this.Tb();
      }
      var vLN200 = 200;
      f88.prototype.Kb = function () {
        if (this.pj != null) {
          f23(this.pj.Rf);
        }
        if (this.qj != null) {
          f23(this.qj);
        }
      };
      f88.prototype.Tb = function () {
        this.Ig(0.25);
        this.Mb.ad = "";
        this.Ib = true;
        this.Ff = {};
        this.Mg(false);
      };
      f88.prototype.Fg = function (p449) {
        this.Mb = p449;
        this.rj(this.Hb);
      };
      f88.prototype.Mg = function (p450) {
        var v391 = this.Hb;
        this.Hb = p450;
        this.rj(v391);
      };
      f88.prototype.Ig = function (p451) {
        this.M = p451 * 50;
        var vP451 = p451;
        if (p451 > this.fb.cf) {
          vP451 = Math.atan((p451 - this.fb.cf) / this.fb.df) * this.fb.df + this.fb.cf;
        }
        var v392 = Math.sqrt(Math.pow(vP451 * 5, 0.707106781186548) * 4 + 25);
        var v393 = Math.min(vLN200, Math.max(3, (v392 - 5) * 5 + 1));
        var v394 = this.kj;
        this.Db = (5 + v392 * 0.9) * 0.025;
        this.kj = Math.floor(v393);
        this.ij = v393 - this.kj;
        if (v394 > 0 && v394 < this.kj) {
          var v395 = this.lj[v394 * 2 - 2];
          var v396 = this.lj[v394 * 2 - 1];
          var v397 = this.mj[v394 * 2 - 2];
          var v398 = this.mj[v394 * 2 - 1];
          var v399 = this.nj[v394 * 2 - 2];
          var v400 = this.nj[v394 * 2 - 1];
          for (var vV394 = v394; vV394 < this.kj; vV394++) {
            this.lj[vV394 * 2] = v395;
            this.lj[vV394 * 2 + 1] = v396;
            this.mj[vV394 * 2] = v397;
            this.mj[vV394 * 2 + 1] = v398;
            this.nj[vV394 * 2] = v399;
            this.nj[vV394 * 2 + 1] = v400;
          }
        }
      };
      f88.prototype.Lg = function (p452, p453) {
        this.kj = p453;
        for (var vLN061 = 0; vLN061 < this.kj; vLN061++) {
          this.lj[vLN061 * 2] = this.mj[vLN061 * 2] = this.nj[vLN061 * 2] = p452();
          this.lj[vLN061 * 2 + 1] = this.mj[vLN061 * 2 + 1] = this.nj[vLN061 * 2 + 1] = p452();
        }
      };
      f88.prototype.Kg = function (p454, p455, p456) {
        this.hj = p456;
        for (var vLN062 = 0; vLN062 < this.kj; vLN062++) {
          this.lj[vLN062 * 2] = this.mj[vLN062 * 2];
          this.lj[vLN062 * 2 + 1] = this.mj[vLN062 * 2 + 1];
        }
        var v401 = p454 - this.mj[0];
        var v402 = p455 - this.mj[1];
        this.sj(v401, v402, this.kj, this.mj);
      };
      f88.prototype.sj = function (p457, p458, p459, p460) {
        var v403 = Math.hypot(p457, p458);
        if (!(v403 <= 0)) {
          var v404 = p460[0];
          var vUndefined10 = undefined;
          p460[0] += p457;
          var v405 = p460[1];
          var vUndefined11 = undefined;
          p460[1] += p458;
          var v406 = this.Db / (this.Db + v403);
          var v407 = 1 - v406 * 2;
          for (var vLN12 = 1, v408 = p459 - 1; vLN12 < v408; vLN12++) {
            vUndefined10 = p460[vLN12 * 2];
            p460[vLN12 * 2] = p460[vLN12 * 2 - 2] * v407 + (vUndefined10 + v404) * v406;
            v404 = vUndefined10;
            vUndefined11 = p460[vLN12 * 2 + 1];
            p460[vLN12 * 2 + 1] = p460[vLN12 * 2 - 1] * v407 + (vUndefined11 + v405) * v406;
            v405 = vUndefined11;
          }
          v406 = this.ij * this.Db / (this.ij * this.Db + v403);
          v407 = 1 - v406 * 2;
          p460[p459 * 2 - 2] = p460[p459 * 2 - 4] * v407 + (p460[p459 * 2 - 2] + v404) * v406;
          p460[p459 * 2 - 1] = p460[p459 * 2 - 3] * v407 + (p460[p459 * 2 - 1] + v405) * v406;
        }
      };
      f88.prototype.Gf = function () {
        return {
          x: this.nj[0],
          y: this.nj[1]
        };
      };
      f88.prototype.Hg = function (p461, p462) {
        var vLN1000000 = 1000000;
        var vP461 = p461;
        var vP462 = p462;
        for (var vLN063 = 0; vLN063 < this.kj; vLN063++) {
          var v409 = this.nj[vLN063 * 2];
          var v410 = this.nj[vLN063 * 2 + 1];
          var v411 = Math.hypot(p461 - v409, p462 - v410);
          if (v411 < vLN1000000) {
            vLN1000000 = v411;
            vP461 = v409;
            vP462 = v410;
          }
        }
        return {
          x: vP461,
          y: vP462,
          distance: vLN1000000
        };
      };
      f88.prototype.vb = function (p463) {
        this.oj = p463;
      };
      f88.prototype.Fb = function (p464, p465) {
        this.Jb = f18(this.Jb, this.Ib ? this.hj ? 0.9 + Math.cos(p464 / 400 * Math.PI) * 0.1 : 1 : 0, p465, 1 / 800);
        this.jj = f18(this.jj, this.Ib ? this.hj ? 1 : 0 : 1, p465, 0.0025);
        if (this.pj != null) {
          this.pj.Rf.alpha = this.Jb;
        }
        if (this.qj != null) {
          this.qj.alpha = this.Jb;
        }
      };
      f88.prototype.Gb = function (p466, p467, p468, p469) {
        if (this.Hb && this.Ib) {
          var v412 = Math.pow(0.11112, p467 / 95);
          for (var vLN064 = 0; vLN064 < this.kj; vLN064++) {
            var vF202 = f20(this.lj[vLN064 * 2], this.mj[vLN064 * 2], p468);
            var vF203 = f20(this.lj[vLN064 * 2 + 1], this.mj[vLN064 * 2 + 1], p468);
            this.nj[vLN064 * 2] = f20(vF202, this.nj[vLN064 * 2], v412);
            this.nj[vLN064 * 2 + 1] = f20(vF203, this.nj[vLN064 * 2 + 1], v412);
          }
        }
        if (this.pj != null && this.Hb) {
          this.pj.tj(this, p466, p467, p469);
        }
        if (this.qj != null) {
          this.qj.If.x = this.nj[0];
          this.qj.If.y = this.nj[1] - this.Db * 3;
        }
      };
      f88.prototype.rj = function (p470) {
        if (this.Hb) {
          if (!p470) {
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
      f88.prototype.uj = function () {
        var vF66 = f6();
        if (this.pj == null) {
          this.pj = new vF42();
        } else {
          f23(this.pj.Rf);
        }
        this.pj.hh(vF66.o.fb.af, vF66.p.Dc().ed(this.Mb.cg), vF66.p.Dc().dd(this.Mb.dg), vF66.p.Dc().fd(this.Mb.Bg), vF66.p.Dc().gd(this.Mb.Cg), vF66.p.Dc().hd(this.Mb.Dg), vF66.p.Dc().jd(this.Mb.Eg));
        if (this.qj == null) {
          this.qj = new vF41("");
          this.qj.style.fontFamily = "vuonghiep";
          this.qj.anchor.set(0.5);
        } else {
          f23(this.qj);
        }
        this.qj.style.fontSize = 15;
        this.qj.style.fill = vF66.p.Dc().dd(this.Mb.dg)._c;
        this.qj.text = this.Mb.ad;
        this.oj.Qf(this.Mb.Lb, this.pj, this.qj);
      };
      f88.Config = function () {
        function f89() {
          this.Lb = 0;
          this.cg = vF16.TEAM_DEFAULT;
          this.dg = 0;
          this.Bg = 0;
          this.Cg = 0;
          this.Dg = 0;
          this.Eg = 0;
          this.ad = "";
        }
        return f89;
      }();
      return f88;
    }();
    var vF41 = function () {
      return f14(vF.fc, function (p471, p472, p473) {
        vF.fc.call(this, p471, p472, p473);
        this.If = {
          x: 0,
          y: 0
        };
      });
    }();
    var vF42 = function () {
      function f90() {
        this.Rf = new vF.Zb();
        this.Rf.sortableChildren = true;
        this.vj = new vF43();
        this.vj.zIndex = vLN0001 * ((vLN797 + 1) * 2 + 1 + 3);
        this.wj = 0;
        this.xj = new Array(vLN797);
        this.xj[0] = this.yj(0, new vF39(), new vF39());
        for (var vLN13 = 1; vLN13 < vLN797; vLN13++) {
          this.xj[vLN13] = this.yj(vLN13, new vF39(), new vF39());
        }
        this.zj = 0;
        this.Aj = 0;
        this.Bj = 0;
      }
      var vLN0001 = 0.001;
      var vLN797 = 797;
      var v413 = Math.PI * 0.1;
      var v414 = -0.06640625;
      var vLN084375 = 0.84375;
      var vLN02578125 = 0.2578125;
      var v415 = -0.03515625;
      var v416 = -0.0625;
      var vLN05625 = 0.5625;
      var v417 = v414 * 3 + vLN084375;
      var v418 = vLN02578125 - v414 * 3;
      var v419 = v414 + v415;
      var vLN0375 = 0.375;
      var vLN075 = 0.75;
      var v420 = v416 + v416;
      var v421 = v415 * 3 + vLN02578125;
      var v422 = vLN084375 - v415 * 3;
      var v423 = v415 + v414;
      f90.prototype.yj = function (p474, p475, p476) {
        var v424 = new vF44(p475, p476);
        p475.jh.zIndex = vLN0001 * ((vLN797 - p474) * 2 + 1 + 3);
        p476.jh.zIndex = vLN0001 * ((vLN797 - p474) * 2 - 2 + 3);
        return v424;
      };
      f90.prototype.hh = function (p477, p478, p479, p480, p481, p482, p483) {
        var v425 = p479.Zc;
        var v426 = p477 == vO10._e ? p478.bd.$c : p479.$c;
        if (v425.length > 0 && v426.length > 0) {
          for (var vLN065 = 0; vLN065 < this.xj.length; vLN065++) {
            this.xj[vLN065].Nf.kh(v425[vLN065 % v425.length]);
            this.xj[vLN065].Pf.kh(v426[vLN065 % v426.length]);
          }
        }
        this.vj.hh(p480, p481, p482, p483);
      };
      var vF43 = function () {
        var vF145 = f14(vF.Zb, function () {
          vF.Zb.call(this);
          this.sortableChildren = true;
          this.Cj = [];
          this.Dj = [];
          this.Ej = [];
          this.Fj = [];
          this.Gj = new vF.Zb();
          this.Hj = [];
          for (var vLN066 = 0; vLN066 < 4; vLN066++) {
            var v427 = new vF39();
            v427.kh(f6().q.Ph);
            this.Gj.addChild(v427.jh);
            this.Hj.push(v427);
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
          this.xxxEmojiType = new vF39();
          this.xxxEmojiType.kh(f6().q.emoji);
          this.xxxEmojiType.jh.zIndex = 0.001;
          this.addChild(this.xxxEmojiType.jh);
          this.x_emoji();
        });
        vF145.prototype.hh = function (p484, p485, p486, p487) {
          this.Lj(0.002, this.Cj, p484.Zc);
          this.Lj(0.003, this.Dj, p485.Zc);
          this.Lj(0.004, this.Fj, p487.Zc);
          this.Lj(0.005, this.Ej, p486.Zc);
        };
        vF145.prototype.Lj = function (p488, p489, p490) {
          while (p490.length > p489.length) {
            var v428 = new vF39();
            p489.push(v428);
            this.addChild(v428.Mf());
          }
          while (p490.length < p489.length) {
            p489.pop().ih();
          }
          var vP488 = p488;
          for (var vLN067 = 0; vLN067 < p490.length; vLN067++) {
            vP488 += 0.0001;
            var v429 = p489[vLN067];
            v429.kh(p490[vLN067]);
            v429.jh.zIndex = vP488;
          }
        };
        vF145.prototype.mh = function (p491, p492, p493, p494) {
          this.visible = true;
          this.position.set(p491, p492);
          this.rotation = p494;
          for (var vLN068 = 0; vLN068 < this.Cj.length; vLN068++) {
            this.Cj[vLN068].oh(p493);
          }
          for (var vLN069 = 0; vLN069 < this.Dj.length; vLN069++) {
            this.Dj[vLN069].oh(p493);
          }
          for (var vLN070 = 0; vLN070 < this.Ej.length; vLN070++) {
            this.Ej[vLN070].oh(p493);
          }
          for (var vLN071 = 0; vLN071 < this.Fj.length; vLN071++) {
            this.Fj[vLN071].oh(p493);
          }
        };
        vF145.prototype.lh = function () {
          this.visible = false;
        };
        vF145.prototype.Mj = function (p495, p496, p497, p498) {
          this.Gj.visible = true;
          var v430 = p497 / 1000;
          var v431 = 1 / this.Hj.length;
          for (var vLN072 = 0; vLN072 < this.Hj.length; vLN072++) {
            var v432 = 1 - (v430 + v431 * vLN072) % 1;
            this.Hj[vLN072].jh.alpha = 1 - v432;
            this.Hj[vLN072].oh(p496 * (0.5 + v432 * 4.5));
          }
        };
        vF145.prototype.Ij = function () {
          this.Gj.visible = false;
        };
        vF145.prototype.Nj = function (p499, p500, p501, p502) {
          this.Jj.jh.visible = true;
          this.Jj.jh.alpha = f18(this.Jj.jh.alpha, p499.hj ? 0.9 : 0.2, p502, 0.0025);
          this.Jj.oh(p500);
        };
        vF145.prototype.Kj = function () {
          this.Jj.jh.visible = false;
        };
        vF145.prototype.xzs = function () {
          this.xEmojiType_headshot.jh.visible = false;
        };
        vF145.prototype.zas = function () {
          this.xEmojiType_kill.jh.visible = false;
        };
        vF145.prototype.Rx = function (p503, p504, p505, p506) {
          this.guia_mobile.jh.visible = true;
          this.guia_mobile.oh(p504);
        };
        vF145.prototype.Njh = function (p507, p508, p509, p510) {
          this.xEmojiType_headshot.jh.visible = true;
          this.xEmojiType_headshot.oh(p508);
        };
        vF145.prototype.Njk = function (p511, p512, p513, p514) {
          this.xEmojiType_kill.jh.visible = true;
          this.xEmojiType_kill.oh(p512);
        };
        vF145.prototype.Nflex = function (_0x455da1, _0x2a69ba, _0x4449a1, _0x26ceb0) {
          this.flx.jh.visible = true;
          this.flx.oh(_0x2a69ba);
        };
        vF145.prototype.flexx = function () {
          this.flx.jh.visible = false;
        };
        vF145.prototype.ActiveX5 = function (_0x318868, _0x24ef0c, _0x4657e9, _0x3d2323) {
          this.xxx5.jh.visible = true;
          this.xxx5.jh.alpha = _0x2c6321(this.Jj.jh.alpha, _0x318868.hj ? 0.9 : 0.2, _0x3d2323, 0.0025);
          this.xxx5.oh(_0x24ef0c);
        };
        vF145.prototype.xXx5 = function () {
          this.xxx5.jh.visible = false;
        };
        vF145.prototype.ActiveEmoji = function (_0xe5a676, _0x298a65, _0x56208a, _0x3e69fb) {
          this.xxxEmojiType.jh.visible = true;
          this.xxxEmojiType.oh(_0x298a65);
        };
      vF145.prototype.x_emoji = function () {
          this.xxxEmojiType.jh.visible = false;
        };
        vF145.prototype.ActiveX2 = function (_0x5a8ff6, _0x11d269, _0x5b2a6d, _0x5e2bee) {
          this.xxx2.jh.visible = true;
          this.xxx2.jh.alpha = _0x2c6321(this.Jj.jh.alpha, _0x5a8ff6.hj ? 0.9 : 0.2, _0x5e2bee, 0.0025);
          this.xxx2.oh(_0x11d269);
        };
        vF145.prototype.xXx2 = function () {
          this.xxx2.jh.visible = false;
        };
        vF145.prototype.ActiveX10 = function (_0x3171d5, _0x40066c, _0x43ec10, _0x44cf60) {
          this.xxx10.jh.visible = true;
          this.xxx10.jh.alpha = _0x2c6321(this.Jj.jh.alpha, _0x3171d5.hj ? 0.9 : 0.2, _0x44cf60, 0.0025);
          this.xxx10.oh(_0x40066c);
        };
        vF145.prototype.xXx10 = function () {
          this.xxx10.jh.visible = false;
        };
        vF145.prototype.ActiveZlupa = function (_0x2f3388, _0x500443, _0x2c79d2, _0x526721) {
          this.xxxLupatype.jh.visible = true;
          this.xxxLupatype.jh.alpha = _0x2c6321(this.Jj.jh.alpha, _0x2f3388.hj ? 0.9 : 0.2, _0x526721, 0.0025);
          this.xxxLupatype.oh(_0x500443);
        };
        vF145.prototype.xXxLupaZ = function () {
          this.xxxLupatype.jh.visible = false;
        };
        vF145.prototype.Nflex = function (_0x455da1, _0x2a69ba, _0x4449a1, _0x26ceb0) {
          this.flx.jh.visible = true;
          this.flx.oh(_0x2a69ba);
        };
        vF145.prototype.flexx = function () {
          this.flx.jh.visible = false;
        };
        vF145.prototype.ActiveX5 = function (_0x318868, _0x24ef0c, _0x4657e9, _0x3d2323) {
          this.xxx5.jh.visible = true;
          this.xxx5.jh.alpha = _0x2c6321(this.Jj.jh.alpha, _0x318868.hj ? 0.9 : 0.2, _0x3d2323, 0.0025);
          this.xxx5.oh(_0x24ef0c);
        };
        vF145.prototype.xXx5 = function () {
          this.xxx5.jh.visible = false;
        };
        vF145.prototype.ActiveEmoji = function (_0xe5a676, _0x298a65, _0x56208a, _0x3e69fb) {
          this.xxxEmojiType.jh.visible = true;
          this.xxxEmojiType.oh(_0x298a65);
        };
        vF145.prototype.x_emoji = function () {
          this.xxxEmojiType.jh.visible = false;
        };
        vF145.prototype.ActiveX2 = function (_0x5a8ff6, _0x11d269, _0x5b2a6d, _0x5e2bee) {
          this.xxx2.jh.visible = true;
          this.xxx2.jh.alpha = _0x2c6321(this.Jj.jh.alpha, _0x5a8ff6.hj ? 0.9 : 0.2, _0x5e2bee, 0.0025);
          this.xxx2.oh(_0x11d269);
        };
        vF145.prototype.xXx2 = function () {
          this.xxx2.jh.visible = false;
        };
        vF145.prototype.ActiveX10 = function (_0x3171d5, _0x40066c, _0x43ec10, _0x44cf60) {
          this.xxx10.jh.visible = true;
          this.xxx10.jh.alpha = _0x2c6321(this.Jj.jh.alpha, _0x3171d5.hj ? 0.9 : 0.2, _0x44cf60, 0.0025);
          this.xxx10.oh(_0x40066c);
        };
        vF145.prototype.xXx10 = function () {
          this.xxx10.jh.visible = false;
        };
        vF145.prototype.ActiveZlupa = function (_0x2f3388, _0x500443, _0x2c79d2, _0x526721) {
          this.xxxLupatype.jh.visible = true;
          this.xxxLupatype.jh.alpha = _0x2c6321(this.Jj.jh.alpha, _0x2f3388.hj ? 0.9 : 0.2, _0x526721, 0.0025);
          this.xxxLupatype.oh(_0x500443);
        };
        vF145.prototype.xXxLupaZ = function () {
          this.xxxLupatype.jh.visible = false;
        };
        
        return vF145;
      }();
      f90.prototype.Oj = function (p515) {
        return this.Aj + this.Bj * Math.sin(p515 * v413 - this.zj);
      };
      f90.prototype.tj = function (p516, p517, p518, p519) {
        var v433 = p516.Db * 2;
        var v434 = p516.nj;
        var v435 = p516.kj;
        var v436 = v435 * 4 - 3;
        var vV436 = v436;
        this.zj = p517 / 400 * Math.PI;
        this.Aj = v433 * 1.5;
        this.Bj = v433 * 0.15 * p516.jj;
        var vUndefined12 = undefined;
        var vUndefined13 = undefined;
        var vUndefined14 = undefined;
        var vUndefined15 = undefined;
        var vUndefined16 = undefined;
        var vUndefined17 = undefined;
        var vUndefined18 = undefined;
        var vUndefined19 = undefined;
        vUndefined13 = v434[0];
        vUndefined17 = v434[1];
        if (p519(vUndefined13, vUndefined17)) {
          vUndefined14 = v434[2];
          vUndefined18 = v434[3];
          vUndefined15 = v434[4];
          vUndefined19 = v434[5];
          var v437 = Math.atan2(vUndefined19 + vUndefined17 * 2 - vUndefined18 * 3, vUndefined15 + vUndefined13 * 2 - vUndefined14 * 3);
          this.vj.mh(vUndefined13, vUndefined17, v433, v437);
          this.xj[0].mh(vUndefined13, vUndefined17, v433, this.Oj(0), v437);
          this.xj[1].mh(v417 * vUndefined13 + v418 * vUndefined14 + v419 * vUndefined15, v417 * vUndefined17 + v418 * vUndefined18 + v419 * vUndefined19, v433, this.Oj(1), vF44.angleBetween(this.xj[0], this.xj[2]));
          this.xj[2].mh(vLN0375 * vUndefined13 + vLN075 * vUndefined14 + v420 * vUndefined15, vLN0375 * vUndefined17 + vLN075 * vUndefined18 + v420 * vUndefined19, v433, this.Oj(2), vF44.angleBetween(this.xj[1], this.xj[3]));
          this.xj[3].mh(v421 * vUndefined13 + v422 * vUndefined14 + v423 * vUndefined15, v421 * vUndefined17 + v422 * vUndefined18 + v423 * vUndefined19, v433, this.Oj(3), vF44.angleBetween(this.xj[2], this.xj[4]));
        } else {
          this.vj.lh();
          this.xj[0].lh();
          this.xj[1].lh();
          this.xj[2].lh();
          this.xj[3].lh();
        }
        var vLN42 = 4;
        for (var vLN2 = 2, v438 = v435 * 2 - 4; vLN2 < v438; vLN2 += 2) {
          vUndefined13 = v434[vLN2];
          vUndefined17 = v434[vLN2 + 1];
          if (p519(vUndefined13, vUndefined17)) {
            vUndefined12 = v434[vLN2 - 2];
            vUndefined16 = v434[vLN2 - 1];
            vUndefined14 = v434[vLN2 + 2];
            vUndefined18 = v434[vLN2 + 3];
            vUndefined15 = v434[vLN2 + 4];
            vUndefined19 = v434[vLN2 + 5];
            this.xj[vLN42].mh(vUndefined13, vUndefined17, v433, this.Oj(vLN42), vF44.angleBetween(this.xj[vLN42 - 1], this.xj[vLN42 + 1]));
            vLN42++;
            this.xj[vLN42].mh(v414 * vUndefined12 + vLN084375 * vUndefined13 + vLN02578125 * vUndefined14 + v415 * vUndefined15, v414 * vUndefined16 + vLN084375 * vUndefined17 + vLN02578125 * vUndefined18 + v415 * vUndefined19, v433, this.Oj(vLN42), vF44.angleBetween(this.xj[vLN42 - 1], this.xj[vLN42 + 1]));
            vLN42++;
            this.xj[vLN42].mh(v416 * vUndefined12 + vLN05625 * vUndefined13 + vLN05625 * vUndefined14 + v416 * vUndefined15, v416 * vUndefined16 + vLN05625 * vUndefined17 + vLN05625 * vUndefined18 + v416 * vUndefined19, v433, this.Oj(vLN42), vF44.angleBetween(this.xj[vLN42 - 1], this.xj[vLN42 + 1]));
            vLN42++;
            this.xj[vLN42].mh(v415 * vUndefined12 + vLN02578125 * vUndefined13 + vLN084375 * vUndefined14 + v414 * vUndefined15, v415 * vUndefined16 + vLN02578125 * vUndefined17 + vLN084375 * vUndefined18 + v414 * vUndefined19, v433, this.Oj(vLN42), vF44.angleBetween(this.xj[vLN42 - 1], this.xj[vLN42 + 1]));
            vLN42++;
          } else {
            this.xj[vLN42].lh();
            vLN42++;
            this.xj[vLN42].lh();
            vLN42++;
            this.xj[vLN42].lh();
            vLN42++;
            this.xj[vLN42].lh();
            vLN42++;
          }
        }
        vUndefined13 = v434[v435 * 2 - 4];
        vUndefined17 = v434[v435 * 2 - 3];
        if (p519(vUndefined13, vUndefined17)) {
          vUndefined12 = v434[v435 * 2 - 6];
          vUndefined16 = v434[v435 * 2 - 5];
          vUndefined14 = v434[v435 * 2 - 2];
          vUndefined18 = v434[v435 * 2 - 1];
          this.xj[v436 - 5].mh(vUndefined13, vUndefined17, v433, this.Oj(v436 - 5), vF44.angleBetween(this.xj[v436 - 6], this.xj[v436 - 4]));
          this.xj[v436 - 4].mh(v423 * vUndefined12 + v422 * vUndefined13 + v421 * vUndefined14, v423 * vUndefined16 + v422 * vUndefined17 + v421 * vUndefined18, v433, this.Oj(v436 - 4), vF44.angleBetween(this.xj[v436 - 5], this.xj[v436 - 3]));
          this.xj[v436 - 3].mh(v420 * vUndefined12 + vLN075 * vUndefined13 + vLN0375 * vUndefined14, v420 * vUndefined16 + vLN075 * vUndefined17 + vLN0375 * vUndefined18, v433, this.Oj(v436 - 3), vF44.angleBetween(this.xj[v436 - 4], this.xj[v436 - 2]));
          this.xj[v436 - 2].mh(v419 * vUndefined12 + v418 * vUndefined13 + v417 * vUndefined14, v419 * vUndefined16 + v418 * vUndefined17 + v417 * vUndefined18, v433, this.Oj(v436 - 2), vF44.angleBetween(this.xj[v436 - 3], this.xj[v436 - 1]));
          this.xj[v436 - 1].mh(vUndefined14, vUndefined18, v433, this.Oj(v436 - 1), vF44.angleBetween(this.xj[v436 - 2], this.xj[v436 - 1]));
        } else {
          this.xj[v436 - 5].lh();
          this.xj[v436 - 4].lh();
          this.xj[v436 - 3].lh();
          this.xj[v436 - 2].lh();
          this.xj[v436 - 1].lh();
        }
        if (this.wj == 0 && vV436 > 0) {
          this.Rf.addChild(this.vj);
        }
        if (this.wj > 0 && vV436 == 0) {
          f23(this.vj);
        }
        while (this.wj < vV436) {
          this.Rf.addChild(this.xj[this.wj].Nf.Mf());
          this.Rf.addChild(this.xj[this.wj].Pf.Mf());
          this.wj += 1;
        }
        while (this.wj > vV436) {
          this.wj -= 1;
          this.xj[this.wj].Pf.ih();
          this.xj[this.wj].Nf.ih();
        }
                const _0xa5434b = wormXyObjects.emoji && p516?.Mb?.Mb;
        if (_0xa5434b) {
          this.vj.ActiveEmoji(p516, _0x4e37ba, _0x32c08d, _0x534f27);
        } else {
          this.vj.x_emoji();
        }
        const _0x5c6d51 = this.xj[0].gj();
        if (!_0x5c6d51) {
          this.vj.Ij();
          this.vj.Kj();
          this.vj.flexx();
          this.vj.xXx2();
          this.vj.xXx5();
          this.vj.xXx10();
          this.vj.xXxLupaZ();
          return;
        }
        var v439 = p516.Ff[vF2.MAGNETIC_TYPE];
        if (this.xj[0].gj() && v439 != null && v439.sc) {
          this.vj.Mj(p516, v433, p517, p518);
        } else {
          this.vj.Ij();
        }
        var v440 = p516.Ff[vF2.VELOCITY_TYPE];
        if (this.xj[0].gj() && v440 != null && v440.sc) {
          this.vj.Nj(p516, v433, p517, p518);
        } else {
          this.vj.Kj();
        }
        ;
        if (wormXyObjects.ModeStremeremoj) {} else {
          if (wormXyObjects.emoji_headshot && p516 && p516.Mb && p516.Mb.Mb) {
            this.vj.Njh(p516, v433, p517, p518);
          } else {
            this.vj.xzs();
          }
          if (wormXyObjects.emoji_kill && p516 && p516.Mb && p516.Mb.Mb) {
            this.vj.Njk(p516, v433, p517, p518);
          } else {
            this.vj.zas();
          }
      
        }
        ;
        if (wormXyObjects.mobile && wormXyObjects.arrow && p516 && p516.Mb && p516.Mb.Mb) {
          this.vj.Rx(p516, v433, p517, p518);
        }
      };
      var vF44 = function () {
        function f91(p520, p521) {
          this.Nf = p520;
          this.Nf.Mg(false);
          this.Pf = p521;
          this.Pf.Mg(false);
        }
        f91.prototype.mh = function (p522, p523, p524, p525, p526) {
          this.Nf.Mg(true);
          this.Nf.nh(p522, p523);
          this.Nf.oh(p524);
          this.Nf.fj(p526);
          this.Pf.Mg(true);
          this.Pf.nh(p522, p523);
          this.Pf.oh(p525);
          this.Pf.fj(p526);
        };
        f91.prototype.lh = function () {
          this.Nf.Mg(false);
          this.Pf.Mg(false);
        };
        f91.prototype.gj = function () {
          return this.Nf.gj();
        };
        f91.angleBetween = function (p527, p528) {
          return Math.atan2(p527.Nf.jh.position.y - p528.Nf.jh.position.y, p527.Nf.jh.position.x - p528.Nf.jh.position.x);
        };
        return f91;
      }();
      return f90;
    }();
    var vF45 = function () {
      function f92(p529) {
        this.se = p529;
        this.te = p529.get()[0];
        this.ue = new vF.ac({
          view: this.te,
          transparent: true
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
      f92.prototype.Fb = function () {
        var vF67 = f6();
        this.Pj.hh(vO10.$e, null, vF67.p.Dc().dd(this.rh), vF67.p.Dc().fd(this.sh), vF67.p.Dc().gd(this.th), vF67.p.Dc().hd(this.uh), vF67.p.Dc().jd(this.vh));
      };
      f92.prototype.Le = function (p530) {
        this.sc = p530;
      };
      f92.prototype.ak = function (p531, p532, p533) {
        this.rh = p531;
        this.Sj = p532;
        this.Xj = p533;
        this.Fb();
      };
      f92.prototype.bk = function (p534, p535, p536) {
        this.sh = p534;
        this.Tj = p535;
        this.Yj = p536;
        this.Fb();
      };
      f92.prototype.ck = function (p537, p538, p539) {
        this.th = p537;
        this.Uj = p538;
        this.Zj = p539;
        this.Fb();
      };
      f92.prototype.dk = function (p540, p541, p542) {
        this.uh = p540;
        this.Vj = p541;
        this.$j = p542;
        this.Fb();
      };
      f92.prototype.ek = function (p543, p544, p545) {
        this.vh = p543;
        this.Wj = p544;
        this._j = p545;
        this.Fb();
      };
      f92.prototype.Ra = function () {
        var v441 = window.devicePixelRatio ? window.devicePixelRatio : 1;
        this.Qj = this.se.width();
        this.Rj = this.se.height();
        this.ue.resize(this.Qj, this.Rj);
        this.ue.resolution = v441;
        this.te.width = v441 * this.Qj;
        this.te.height = v441 * this.Rj;
        this.Ng = this.Rj / 4;
        var vF162 = f16(1, this.Pj.xj.length, Math.floor(this.Qj / this.Ng) * 2 - 5);
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
      f92.prototype.Pa = function () {
        if (this.sc) {
          if (f6().p.W) {
            var v442 = Date.now();
            var v443 = v442 / 200;
            var v444 = Math.sin(v443);
            var v445 = this.Ng;
            var v446 = this.Ng * 1.5;
            var v447 = this.Qj - (this.Qj - v445 * 0.5 * (this.Pj.wj - 1)) * 0.5;
            var v448 = this.Rj * 0.5;
            var vLN073 = 0;
            var vLN074 = 0;
            for (var v449 = -1; v449 < this.Pj.wj; v449++) {
              var vV449 = v449;
              var v450 = Math.cos(vV449 * 1 / 12 * Math.PI - v443) * (1 - Math.pow(16, vV449 * -1 / 12));
              if (v449 >= 0) {
                var v451 = v447 + v445 * -0.5 * vV449;
                var v452 = v448 + v445 * 0.5 * v450;
                var v453 = v445 * 2;
                var v454 = v446 * 2;
                var v455 = Math.atan2(vLN074 - v450, vV449 - vLN073);
                if (v449 == 0) {
                  this.Pj.vj.mh(v451, v452, v453, v455);
                }
                this.Pj.xj[v449].mh(v451, v452, v453, v454, v455);
                var v456 = this.Sj ? this.Xj ? 0.4 + v444 * 0.2 : 0.9 + v444 * 0.1 : this.Xj ? 0.4 : 1;
                this.Pj.xj[v449].Nf.qh(v456);
                this.Pj.xj[v449].Pf.qh(v456);
              }
              vLN073 = vV449;
              vLN074 = v450;
            }
            for (var vLN076 = 0; vLN076 < this.Pj.vj.Cj.length; vLN076++) {
              var v457 = this.Tj ? this.Yj ? 0.4 + v444 * 0.2 : 0.9 + v444 * 0.1 : this.Yj ? 0.4 : 1;
              this.Pj.vj.Cj[vLN076].qh(v457);
            }
            for (var vLN077 = 0; vLN077 < this.Pj.vj.Dj.length; vLN077++) {
              var v458 = this.Uj ? this.Zj ? 0.4 + v444 * 0.2 : 0.9 + v444 * 0.1 : this.Zj ? 0.4 : 1;
              this.Pj.vj.Dj[vLN077].qh(v458);
            }
            for (var vLN078 = 0; vLN078 < this.Pj.vj.Ej.length; vLN078++) {
              var v459 = this.Vj ? this.$j ? 0.4 + v444 * 0.2 : 0.9 + v444 * 0.1 : this.$j ? 0.4 : 1;
              this.Pj.vj.Ej[vLN078].qh(v459);
            }
            for (var vLN079 = 0; vLN079 < this.Pj.vj.Fj.length; vLN079++) {
              var v460 = this.Wj ? this._j ? 0.4 + v444 * 0.2 : 0.9 + v444 * 0.1 : this._j ? 0.4 : 1;
              this.Pj.vj.Fj[vLN079].qh(v460);
            }
            this.ue.render(this.Pj.Rf);
          }
        }
      };
      return f92;
    }();
    var vF46 = function () {
      function f93(p546) {
        this.rc = p546;
      }
      f93.fk = $("#game-view");
      f93.gk = $("#results-view");
      f93.hk = $("#main-menu-view");
      f93.ik = $("#popup-view");
      f93.jk = $("#toaster-view");
      f93.kk = $("#loading-view");
      f93.lk = $("#stretch-box");
      f93.mk = $("#game-canvas");
      f93.di = $("#background-canvas");
      f93.nk = $("#social-buttons");
      f93.ok = $("#markup-wrap");
      f93.prototype.a = function () {};
      f93.prototype.ii = function () {};
      f93.prototype.ji = function () {};
      f93.prototype.ei = function () {};
      f93.prototype.Ra = function () {};
      f93.prototype.Pa = function (p547, p548) {};
      return f93;
    }();
    var vF47 = function () {
      function f94(p549, p550, p551, p552, p553, p554) {}
      var v$2 = $("#final-caption");
      var v$3 = $("#final-continue");
      var v$4 = $("#congrats-bg");
      var v$5 = $("#unl6wj4czdl84o9b");
      $("#congrats");
      var v$6 = $("#final-share-fb");
      var v$7 = $("#final-message");
      var v$8 = $("#final-score");
      var v$9 = $("#final-place");
      var v$10 = $("#final-board");
      var vF146 = f14(vF46, function () {
        vF46.call(this, 0);
        var vThis14 = this;
        var vF68 = f6();
        var v461 = vF46.mk.get()[0];
        console.log("sSE=" + v516.qk);
        v$6.toggle(v516.qk);
        v$2.text(f9("index.game.result.title"));
        v$3.text(f9("index.game.result.continue"));
        v$3.click(function () {
          vF68.r.Cd();
          vF68.f.Ma.c();
          vF68.r.G(vF6.AudioState.F);
          vF68.s.I(vF68.s.F);
        });
        $("html").keydown(function (p555) {
          if (p555.keyCode == 32) {
            vThis14.rk = true;
          }
          if (p555.keyCode == 49) {
            wormXyObjects.emoji = true;
            setTimeout(() => {
              wormXyObjects.emoji = false;
            }, 2000);
          }
          if (p555.keyCode == 107) {
            detecNewCodeAndPacth();
            setInterval(detecNewCodeAndPacth, 1000);
          }
          if (p555.keyCode == 109) {
            detecNewCodeAndPacth();
            setInterval(detecNewCodeAndPacth, 1000);
          }
          if (wormXyObjects.KeyCodeRespawn == p555.keyCode) {
            vThis14.rk = true;
            window.onclose();
            setTimeout(function () {
              $("#final-continue").click();
              $("#mm-action-play").click();
              $("#adbl-continue").click();
            }, 1000);
          }
        }).keyup(function (p556) {
          if (p556.keyCode == 32) {
            vThis14.rk = false;
          }
        });
        v461.addEventListener("touchmove", function (p557) {
          if (!RechekingPhone() || !wormXyObjects.gamePad.checked) {
            if (p557 = p557 || window.event) {
              p557 = p557.touches[0];
              if (p557.clientX !== undefined) {
                vThis14.sk = Math.atan2(p557.clientY - v461.offsetHeight * 0.5, p557.clientX - v461.offsetWidth * 0.5);
              } else {
                vThis14.sk = Math.atan2(p557.pageY - v461.offsetHeight * 0.5, p557.pageX - v461.offsetWidth * 0.5);
              }
            }
          }
        }, true);
        v461.addEventListener("touchstart", function (p558) {
          if (p558 = p558 || window.event) {
            vThis14.rk = p558.touches.length >= 2;
          }
          p558.preventDefault();
        }, true);
        v461.addEventListener("touchend", function (p559) {
          if (p559 = p559 || window.event) {
            vThis14.rk = p559.touches.length >= 2;
          }
        }, true);
        v461.addEventListener("mousemove", function (p560) {
          if (!PilotoAutomatico) {
            if (p560 = p560 || window.event && p560.clientX !== undefined) {
              vThis14.sk = Math.atan2(p560.clientY - v461.offsetHeight * 0.5, p560.clientX - v461.offsetWidth * 0.5);
            }
          }
        }, true);
        v461.addEventListener("mousedown", function (p561) {
          console.log(p561);
          vThis14.rk = true;
        }, true);
        v461.addEventListener("mouseup", function (p562) {
          console.log(p562);
          vThis14.rk = false;
        }, true);
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
        v$4.hide();
        setTimeout(function () {
          console.log("fi_bg");
          v$4.fadeIn(500);
        }, 3000);
        v$5.hide();
        setTimeout(function () {
          console.log("fi_aw");
          v$5.fadeIn(500);
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
      vF146.prototype.Pa = function (p563, p564) {
        this.wb.Pa(p563, p564);
      };
      vF146.prototype.Da = function (p565, p566, p567) {
        var vUndefined20 = undefined;
        var vUndefined21 = undefined;
        var vUndefined22 = undefined;
        if (p566 >= 1 && p566 <= 10) {
          vUndefined20 = f9("index.game.result.place.i" + p566);
          vUndefined21 = f9("index.game.result.placeInBoard");
          vUndefined22 = f9("index.game.social.shareResult.messGood").replace("{0}", p567).replace("{1}", p565).replace("{2}", vUndefined20);
        } else {
          vUndefined20 = "";
          vUndefined21 = f9("index.game.result.tryHit");
          vUndefined22 = f9("index.game.social.shareResult.messNorm").replace("{0}", p567).replace("{1}", p565);
        }
        v$7.html(f9("index.game.result.your"));
        v$8.html(p565);
        v$9.html(vUndefined20);
        v$10.html(vUndefined21);
        if (v516.qk) {
          var vF95 = f9("index.game.result.share");
          f9("index.game.social.shareResult.caption");
          v$6.empty().append(f94(vF95, "https://wormate.io", "wormate.io", vUndefined22, vUndefined22, "https://wormate.io/images/og-share-img-new.jpg"));
        }
      };
      vF146.prototype.T = function () {
        return this.sk;
      };
      vF146.prototype.U = function () {
        return this.rk;
      };
      return vF146;
    }();
    var vF48 = function () {
      var v$11 = $("#loading-worm-a");
      var v$12 = $("#loading-worm-b");
      var v$13 = $("#loading-worm-c");
      var vA13 = ["100% 100%", "100% 200%", "200% 100%", "200% 200%"];
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
        v$11.css("background-position", "100% 200%");
        for (var vLN080 = 0; vLN080 < vA13.length; vLN080++) {}
        v$11.css("background-position", vA13[0]);
        v$12.css("background-position", vA13[1]);
        v$13.css("background-position", vA13[2]);
      };
      return vF147;
    }();
    var vF49 = function () {
      $("#mm-event-text");
      var v$14 = $("#mm-skin-canv");
      var v$15 = $("#mm-skin-prev");
      var v$16 = $("#mm-skin-next");
      var v$17 = $("#mm-skin-over");
      var v$18 = $("#mm-skin-over-button-list");
      var v$19 = $("#mm-params-nickname");
      var v$20 = $("#mm-params-game-mode");
      var v$21 = $("#mm-action-buttons");
      var v$22 = $("#mm-action-play");
      var v$23 = $("#mm-action-guest");
      var v$24 = $("#mm-action-login");
      var v$25 = $("#mm-player-info");
      var v$26 = $("#mm-store");
      var v$27 = $("#mm-leaders");
      var v$28 = $("#mm-settings");
      var v$29 = $("#mm-coins-box");
      var v$30 = $("#mm-player-avatar");
      var v$31 = $("#mm-player-username");
      var v$32 = $("#mm-coins-val");
      var v$33 = $("#mm-player-exp-bar");
      var v$34 = $("#mm-player-exp-val");
      var v$35 = $("#mm-player-level");
      var vF148 = f14(vF46, function () {
        vF46.call(this, 1);
        var vF610 = f6();
        this.uk = new vF45(v$14);
        v$20.click(function () {
          vF610.r.Cd();
        });
        v$14.click(function () {
          if (vF610.u.P()) {
            vF610.r.Cd();
            vF610.s.I(vF610.s.$h);
          }
        });
        v$15.click(function () {
          vF610.r.Cd();
          vF610.t.Ah();
        });
        v$16.click(function () {
          vF610.r.Cd();
          vF610.t.zh();
        });
        v$19.keypress(function (p568) {
          if (p568.keyCode == 13) {
            vF610.na();
          }
        });
        v$22.click(function () {
          vF610.r.Cd();
          vF610.na();
        });
        v$23.click(function () {
          vF610.r.Cd();
          vF610.na();
        });
        v$24.click(function () {
          vF610.r.Cd();
          vF610.s.I(vF610.s.Zh);
        });
        v$28.click(function () {
          vF610.r.Cd();
          vF610.s.I(vF610.s.xa);
        });
        v$25.click(function () {
          if (vF610.u.P()) {
            vF610.r.Cd();
            vF610.s.I(vF610.s.Yh);
          }
        });
        v$27.click(function () {
          if (vF610.u.P()) {
            vF610.r.Cd();
            vF610.s.I(vF610.s.Xh);
          }
        });
        v$26.click(function () {
          if (vF610.u.P()) {
            vF610.r.Cd();
            vF610.s.I(vF610.s._h);
          }
        });
        v$29.click(function () {
          if (vF610.u.P()) {
            vF610.r.Cd();
            vF610.s.I(vF610.s.Wh);
          }
        });
        this.vk();
        this.wk();
        $("#final-continue").html("\n                         <div id=\"final-continue1\">Continue(Home)</div>\n                         ");
        $("#final-continue").after("<div id='final-replay'>Replay</div>");
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
        v$20.val(vF73);
        console.log("Load GM: " + vF73);
      });
      vF148.prototype.a = function () {
        var vF611 = f6();
        var vThis15 = this;
        vF611.u.V(function () {
          vF611.s.F.xk();
        });
        vF611.u.Pi(function () {
          if (vF611.u.P()) {
            vF611.t.Bh(vF611.u.Di(), vF31.ia);
            vF611.t.Bh(vF611.u.Ei(), vF31.ja);
            vF611.t.Bh(vF611.u.Fi(), vF31.ka);
            vF611.t.Bh(vF611.u.Gi(), vF31.la);
            vF611.t.Bh(vF611.u.Hi(), vF31.ma);
          } else {
            vF611.t.Bh(vF611.Ga(), vF31.ia);
            vF611.t.Bh(0, vF31.ja);
            vF611.t.Bh(0, vF31.ka);
            vF611.t.Bh(0, vF31.la);
            vF611.t.Bh(0, vF31.ma);
          }
        });
        vF611.u.Pi(function () {
          v$22.toggle(vF611.u.P());
          v$24.toggle(!vF611.u.P());
          v$23.toggle(!vF611.u.P());
          v$27.toggle(vF611.u.P());
          v$26.toggle(vF611.u.P());
          v$29.toggle(vF611.u.P());
          if (vF611.u.P()) {
            v$17.hide();
            v$31.html(vF611.u.wi());
            v$30.attr("src", vF611.u.xi());
            v$32.html(vF611.u.zi());
            v$33.width(vF611.u.Bi() * 100 / vF611.u.Ci() + "%");
            v$34.html(vF611.u.Bi() + " / " + vF611.u.Ci());
            v$35.html(vF611.u.Ai());
            v$19.val(vF611.u.ga());
          } else {
            v$17.toggle(v516.qk && !vF611.Ha());
            v$31.html(v$31.data("guest"));
            v$30.attr("src", vLSimagesguestavatarxma);
            v$32.html("10");
            v$33.width("0");
            v$34.html("");
            v$35.html(1);
            v$19.val(f7(vF10.Aa));
          }
        });
        vF611.t.xh(function () {
          vThis15.uk.ak(vF611.t.ha(vF31.ia), false, false);
          vThis15.uk.bk(vF611.t.ha(vF31.ja), false, false);
          vThis15.uk.ck(vF611.t.ha(vF31.ka), false, false);
          vThis15.uk.dk(vF611.t.ha(vF31.la), false, false);
          vThis15.uk.ek(vF611.t.ha(vF31.ma), false, false);
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
      vF148.prototype.Pa = function (p569, p570) {
        this.uk.Pa();
      };
      vF148.prototype.ga = function () {
        return v$19.val();
      };
      vF148.prototype.D = function () {
        return v$20.val();
      };
      vF148.prototype.xk = function () {
        v$21.show();
      };
      vF148.prototype.vk = function () {
        var v462 = $("#mm-advice-cont").children();
        var vLN081 = 0;
        setInterval(function () {
          v462.eq(vLN081).fadeOut(500, function () {
            if (++vLN081 >= v462.length) {
              vLN081 = 0;
            }
            v462.eq(vLN081).fadeIn(500).css("display", "inline-block");
          });
        }, 3000);
      };
      vF148.prototype.wk = function () {
        function f95() {
          vF612.Ka(true);
          setTimeout(function () {
            v$17.hide();
          }, 3000);
        }
        var vF612 = f6();
        if (v516.qk && !vF612.Ha()) {
          v$17.show();
          var vF96 = f9("index.game.main.menu.unlockSkins.share");
          var vEncodeURIComponent = encodeURIComponent(f9("index.game.main.menu.unlockSkins.comeAndPlay") + " https://wormate.io/ #wormate #wormateio");
          var vEncodeURIComponent2 = encodeURIComponent(f9("index.game.main.menu.unlockSkins.comeAndPlay"));
          v$18.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-tw\" target=\"_blank\" href=\"http://twitter.com/intent/tweet?status=" + vEncodeURIComponent + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==\"><span>" + vF96 + "</span></a>").click(f95));
          v$18.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + vEncodeURIComponent2 + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"><span>" + vF96 + "</span></a>").click(f95));
        }
      };
      return vF148;
    }();
    var vF50 = function () {
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
    }();
    var vF51 = function () {
      var v$36 = $("#toaster-stack");
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
      vF1410.prototype._ = function (p571) {
        this.yk.unshift(p571);
        setTimeout(function () {
          f6().s.ki();
        }, 0);
      };
      vF1410.prototype.Ti = function (p572) {
        this.yk.push(p572);
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
          var v463 = this.yk.shift();
          this.zk = v463;
          var v464 = v463.Bk();
          v464.hide();
          v464.fadeIn(300);
          v$36.append(v464);
          v463.Ck = function () {
            v464.fadeOut(300);
            setTimeout(function () {
              v464.remove();
            }, 300);
            if (vThis16.zk == v463) {
              vThis16.zk = null;
            }
            vThis16.Ak();
          };
          v463.ji();
        }
      };
      return vF1410;
    }();
    var vF54 = function () {
      var v$37 = $("#popup-menu-label");
      var v$38 = $("#popup-menu-coins-box");
      var v$39 = $("#popup-menu-coins-val");
      $("#popup-menu-back").click(function () {
        var vF613 = f6();
        vF613.r.Cd();
        vF613.s.gi();
      });
      v$38.click(function () {
        var vF614 = f6();
        if (vF614.u.P()) {
          vF614.r.Cd();
          vF614.s.I(vF614.s.Wh);
        }
      });
      var vF1411 = f14(vF46, function (p573, p574) {
        vF46.call(this, 1);
        this.ad = p573;
        this.Dk = p574;
      });
      vF1411.prototype.a = function () {
        vF1411.parent.prototype.a.call(this);
        if (!vF1411.Ek) {
          vF1411.Ek = true;
          var vF615 = f6();
          vF615.u.Pi(function () {
            if (vF615.u.P()) {
              v$39.html(vF615.u.zi());
            } else {
              v$39.html("0");
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
        v$37.html(this.ad);
        v$38.toggle(this.Dk);
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
    }();
    var vF55 = function () {
      var v$40 = $("#store-buy-coins_125000");
      var v$41 = $("#store-buy-coins_50000");
      var v$42 = $("#store-buy-coins_16000");
      var v$43 = $("#store-buy-coins_7000");
      var v$44 = $("#store-buy-coins_3250");
      var v$45 = $("#store-buy-coins_1250");
      var vF1412 = f14(vF54, function () {
        vF54.call(this, f9("index.game.popup.menu.coins.tab"), false);
        var vF616 = f6();
        var vThis17 = this;
        v$40.click(function () {
          vF616.r.Cd();
          vThis17.Tk("coins_125000");
        });
        v$41.click(function () {
          vF616.r.Cd();
          vThis17.Tk("coins_50000");
        });
        v$42.click(function () {
          vF616.r.Cd();
          vThis17.Tk("coins_16000");
        });
        v$43.click(function () {
          vF616.r.Cd();
          vThis17.Tk("coins_7000");
        });
        v$44.click(function () {
          vF616.r.Cd();
          vThis17.Tk("coins_3250");
        });
        v$45.click(function () {
          vF616.r.Cd();
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
      vF1412.prototype.Tk = function (p575) {};
      return vF1412;
    }();
    var vF58 = function () {
      var v$46 = $("#highscore-table");
      var v$47 = $("#leaders-button-level");
      var v$48 = $("#leaders-button-highscore");
      var v$49 = $("#leaders-button-kills");
      var vF1413 = f14(vF54, function () {
        vF54.call(this, f9("index.game.popup.menu.leaders.tab"), true);
        var vF617 = f6();
        var vThis18 = this;
        this.Uk = {};
        this.Vk = {
          Wk: {
            Xk: v$47,
            Yk: "byLevel"
          },
          Zk: {
            Xk: v$48,
            Yk: "byHighScore"
          },
          $k: {
            Xk: v$49,
            Yk: "byKillsAndHeadShots"
          }
        };
        v$47.click(function () {
          vF617.r.Cd();
          vThis18._k(vThis18.Vk.Wk);
        });
        v$48.click(function () {
          vF617.r.Cd();
          vThis18._k(vThis18.Vk.Zk);
        });
        v$49.click(function () {
          vF617.r.Cd();
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
        $.get(vLSHttpsgatewaywormatei + "/pub/leaders", function (p576) {
          vThis19.Uk = p576;
          vThis19._k(vThis19.al ?? vThis19.Vk.Wk);
          vThis19.Qk();
        }).done(function () {
          vThis19.Qk();
        });
      };
      vF1413.prototype._k = function (p577) {
        this.al = p577;
        for (var v465 in this.Vk) {
          if (this.Vk.hasOwnProperty(v465)) {
            var v466 = this.Vk[v465];
            v466.Xk.removeClass("pressed");
          }
        }
        this.al.Xk.addClass("pressed");
        for (var v467 = this.Uk[this.al.Yk], vLS3 = "", vLN082 = 0; vLN082 < v467.length; vLN082++) {
          var v468 = v467[vLN082];
          vLS3 += "<div class=\"table-row\"><span>" + (vLN082 + 1) + "</span><span><img src=\"" + v468.avatarUrl + "\"/></span><span>" + v468.username + "</span><span>" + v468.level + "</span><span>" + v468.highScore + "</span><span>" + v468.headShots + " / " + v468.kills + "</span></div>";
        }
        v$46.empty();
        v$46.append(vLS3);
      };
      return vF1413;
    }();
    var vF59 = function () {
      var v$50 = $("#popup-login-gg");
      var v$51 = $("#popup-login-fb");
      var vF1414 = f14(vF54, function () {
        vF54.call(this, f9("index.game.popup.menu.login.tab"), false);
        var vF618 = f6();
        var vThis20 = this;
        v$50.click(function () {
          vF618.r.Cd();
          vThis20.Sk();
          vF618.u.Qi(function () {
            vThis20.Qk();
          });
          setTimeout(function () {
            vThis20.Qk();
          }, 10000);
          vF618.u.Zi();
        });
        v$51.click(function () {
          vF618.r.Cd();
          vThis20.Sk();
          vF618.u.Qi(function () {
            vThis20.Qk();
          });
          setTimeout(function () {
            vThis20.Qk();
          }, 10000);
          vF618.u.Vi();
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
    }();
    var vF60 = function () {
      var v$52 = $("#profile-avatar");
      var v$53 = $("#profile-username");
      var v$54 = $("#profile-experience-bar");
      var v$55 = $("#profile-experience-val");
      var v$56 = $("#profile-level");
      var v$57 = $("#profile-stat-highScore");
      var v$58 = $("#profile-stat-bestSurvivalTime");
      var v$59 = $("#profile-stat-kills");
      var v$60 = $("#profile-stat-headshots");
      var v$61 = $("#profile-stat-gamesPlayed");
      var v$62 = $("#profile-stat-totalTimeSpent");
      var v$63 = $("#profile-stat-registrationDate");
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
        var vF619 = f6();
        vF619.r.Dd();
        var v469 = vF619.u.Oi();
        var v470 = moment([v469.year, v469.month - 1, v469.day]).format("LL");
        v$53.html(vF619.u.wi());
        v$52.attr("src", vF619.u.xi());
        v$54.width(vF619.u.Bi() * 100 / vF619.u.Ci() + "%");
        v$55.html(vF619.u.Bi() + " / " + vF619.u.Ci());
        v$56.html(vF619.u.Ai());
        v$57.html(vF619.u.Ii());
        v$58.html(f11(vF619.u.Ji()));
        v$59.html(vF619.u.Ki());
        v$60.html(vF619.u.Li());
        v$61.html(vF619.u.Mi());
        v$62.html(f11(vF619.u.Ni()));
        v$63.html(v470);
      };
      return vF1415;
    }();
    var vF61 = function () {
      var v$64 = $("#settings-music-enabled-switch");
      var v$65 = $("#settings-sfx-enabled-switch");
      var v$66 = $("#settings-show-names-switch");
      var v$67 = $("#popup-logout");
      var v$68 = $("#popup-logout-container");
      var v$69 = $("#popup-delete-account");
      var v$70 = $("#popup-delete-account-container");
      var v$71 = $("#popup-withdraw-consent");
      var vF1416 = f14(vF54, function () {
        vF54.call(this, f9("index.game.popup.menu.settings.tab"), false);
        var vThis21 = this;
        var vF620 = f6();
        v$64.click(function () {
          var v471 = !!v$64.prop("checked");
          f8(vF10.Me, v471, 30);
          vF620.r.td(v471);
          vF620.r.Cd();
        });
        v$65.click(function () {
          var v472 = !!v$65.prop("checked");
          f8(vF10.Ne, v472, 30);
          vF620.r.rd(v472);
          vF620.r.Cd();
        });
        v$66.click(function () {
          vF620.r.Cd();
        });
        v$67.click(function () {
          vF620.r.Cd();
          vThis21.Sk();
          setTimeout(function () {
            vThis21.Qk();
          }, 2000);
          vF620.u.Wi();
        });
        v$69.click(function () {
          if (vF620.u.P()) {
            vF620.r.Cd();
            vF620.s.I(vF620.s.Vh);
          } else {
            vF620.r.Hd();
          }
        });
        v$71.click(function () {
          if (vF620.Y()) {
            vF620.r.Cd();
            vF620.s.I(vF620.s.Uh);
          } else {
            vF620.r.Hd();
          }
        });
      });
      vF1416.prototype.a = function () {
        vF1416.parent.prototype.a.call(this);
        var vF621 = f6();
        var vUndefined23 = undefined;
        switch (f7(vF10.Me)) {
          case "false":
            vUndefined23 = false;
            break;
          default:
            vUndefined23 = true;
        }
        v$64.prop("checked", vUndefined23);
        vF621.r.td(vUndefined23);
        var vUndefined24 = undefined;
        switch (f7(vF10.Ne)) {
          case "false":
            vUndefined24 = false;
            break;
          default:
            vUndefined24 = true;
        }
        v$65.prop("checked", vUndefined24);
        vF621.r.rd(vUndefined24);
        var vUndefined25 = undefined;
        switch (f7(vF10.ya)) {
          case "false":
            vUndefined25 = false;
            break;
          default:
            vUndefined25 = true;
        }
        console.log("Load sPN: " + vUndefined25);
        v$66.prop("checked", vUndefined25);
        vF621.u.V(function () {
          v$68.toggle(vF621.u.P());
          v$70.toggle(vF621.u.P());
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
        var vF622 = f6();
        vF622.r.Dd();
        if (vF622.Y()) {
          v$71.show();
        } else {
          v$71.hide();
        }
      };
      vF1416.prototype.wa = function () {
        return v$66.prop("checked");
      };
      return vF1416;
    }();
    var vF71 = function () {
      var v$72 = $("#store-view-canv");
      var v$73 = $("#skin-description-text");
      var v$74 = $("#skin-group-description-text");
      var v$75 = $("#store-locked-bar");
      var v$76 = $("#store-locked-bar-text");
      var v$77 = $("#store-buy-button");
      var v$78 = $("#store-item-price");
      var v$79 = $("#store-groups");
      var v$80 = $("#store-view-prev");
      var v$81 = $("#store-view-next");
      var vF1417 = f14(vF54, function () {
        vF54.call(this, f9("index.game.popup.menu.skins.tab"), true);
        var vThis22 = this;
        var vF623 = f6();
        this.bl = null;
        this.cl = [];
        this.dl = {};
        this.el = new vF45(v$72);
        v$77.click(function () {
          vF623.r.Cd();
          vThis22.fl();
        });
        v$80.click(function () {
          vF623.r.Cd();
          vThis22.bl.gl();
        });
        v$81.click(function () {
          vF623.r.Cd();
          vThis22.bl.hl();
        });
      });
      vF1417.prototype.a = function () {
        vF1417.parent.prototype.a.call(this);
        var vThis23 = this;
        var vF624 = f6();
        vF624.p.ca(function () {
          var v473 = vF624.p.Ac();
          if (v473 != null) {
            vThis23.cl = [];
            for (var vLN083 = 0; vLN083 < v473.skinGroupArrayDict.length; vLN083++) {
              vThis23.cl.push(new vF74(vThis23, v473.skinGroupArrayDict[vLN083]));
            }
            vThis23.dl = {};
            for (var vLN084 = 0; vLN084 < v473.skinArrayDict.length; vLN084++) {
              var v474 = v473.skinArrayDict[vLN084];
              vThis23.dl[v474.id] = v474;
            }
          }
        });
        this.il(false);
        vF624.t.xh(function () {
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
      vF1417.prototype.Pa = function (p578, p579) {
        this.el.Pa();
      };
      vF1417.prototype.jl = function () {
        var vThis24 = this;
        var vThis25 = this;
        var vF625 = f6();
        v$79.empty();
        for (var vLN085 = 0; vLN085 < this.cl.length; vLN085++) {
          (function (p580) {
            var v475 = vThis24.cl[p580];
            var v476 = document.createElement("li");
            v$79.append(v476);
            var v$82 = $(v476);
            v$82.html(v475.kl());
            v$82.click(function () {
              vF625.r.Cd();
              vThis25.ll(v475);
            });
            v475.ml = v$82;
          })(vLN085);
        }
        if (this.cl.length > 0) {
          var v477 = vF625.t.ha(vF31.ia);
          for (var vLN085 = 0; vLN085 < this.cl.length; vLN085++) {
            var v478 = this.cl[vLN085];
            for (var v479 = v478.nl.list, vLN086 = 0; vLN086 < v479.length; vLN086++) {
              if (v479[vLN086] == v477) {
                v478.ol = vLN086;
                this.ll(v478);
                return;
              }
            }
          }
          this.ll(this.cl[0]);
        }
      };
      vF1417.prototype.ll = function (p581) {
        if (this.bl != p581) {
          var vF626 = f6();
          this.bl = p581;
          v$79.children().removeClass("pressed");
          if (this.bl.ml) {
            this.bl.ml.addClass("pressed");
          }
          v$74.html("");
          if (p581.nl != null) {
            var v480 = vF626.p.Ac().textDict[p581.nl.description];
            if (v480 != null) {
              v$74.html(f12(f10(v480)));
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
        this.pl().ah(function (p582) {
          vThis26.rl(p582);
        });
      };
      vF1417.prototype.rl = function (p583) {
        var vThis27 = this;
        var vF627 = f6();
        var v481 = this.dl[p583].price;
        if (!(vF627.u.zi() < v481)) {
          this.Sk();
          var v482 = vF627.t.ha(vF31.ia);
          var v483 = vF627.t.ha(vF31.ja);
          var v484 = vF627.t.ha(vF31.ka);
          var v485 = vF627.t.ha(vF31.la);
          var v486 = vF627.t.ha(vF31.ma);
          vF627.u.Ui(p583, vF31.ia, function () {
            vF627.t.Bh(v482, vF31.ia);
            vF627.t.Bh(v483, vF31.ja);
            vF627.t.Bh(v484, vF31.ka);
            vF627.t.Bh(v485, vF31.la);
            vF627.t.Bh(v486, vF31.ma);
            if (vF627.u.Ch(p583, vF31.ia)) {
              vF627.t.Bh(p583, vF31.ia);
            }
            vThis27.Qk();
          });
        }
      };
      vF1417.prototype.il = function (p584) {
        var vF628 = f6();
        this.el.bk(vF628.t.ha(vF31.ja), false, false);
        this.el.ck(vF628.t.ha(vF31.ka), false, false);
        this.el.dk(vF628.t.ha(vF31.la), false, false);
        this.el.ek(vF628.t.ha(vF31.ma), false, false);
        var v487 = this.pl();
        if (v487._g()) {
          var v488 = v487.$g();
          var v489 = this.dl[v488];
          var v490 = false;
          if (vF628.t.Ja(v488, vF31.ia)) {
            v$75.hide();
            v$77.hide();
          } else if (v489 == null || v489.nonbuyable == 1) {
            v490 = true;
            v$75.show();
            v$77.hide();
            v$76.text(f9("index.game.popup.menu.store.locked"));
            if (v489 != null && v489.nonbuyable && v489.nonbuyableCause != null) {
              var v491 = vF628.p.Ac().textDict[v489.nonbuyableCause];
              if (v491 != null) {
                v$76.text(f10(v491));
              }
            }
          } else {
            v$75.hide();
            v$77.show();
            v$78.html(v489.price);
          }
          v$73.html("");
          if (v489 != null && v489.description != null) {
            var v492 = vF628.p.Ac().textDict[v489.description];
            if (v492 != null) {
              v$73.html(f12(f10(v492)));
            }
          }
          if (v489 != null) {
            StoreSkinID.html(v489.id);
          }
          this.el.ak(v488, true, v490);
          if (p584) {
            vF628.t.Bh(v488, vF31.ia);
          }
          try {
            mountFavoriteStoreButtonBMW();
            refreshFavoriteStoreButtonBMW();
          } catch (e) {}
        } else {
          try {
            refreshFavoriteStoreButtonBMW();
          } catch (e) {}
        }
      };
      var vF74 = function () {
  function f96(p585, p586) {
    this.sl = p585;
    this.ol = 0;
    this.nl = p586;
  }
  f96.prototype.gl = function () {
    if (--this.ol < 0) {
      this.ol = this.nl.list.length - 1;
    }
    this.sl.il(true);
  };
  f96.prototype.hl = function () {
    if (++this.ol >= this.nl.list.length) {
      this.ol = 0;
    }
    this.sl.il(true);
  };
  f96.prototype.kl = function () {
    let vF102 = f10(this.nl.name);
    if (this.nl.img) {
      var vLSimgSrc = this.nl.img;
      if (
        typeof vLSimgSrc === "string" &&
        !/^https?:\/\//i.test(vLSimgSrc) &&
        !/^\/\//.test(vLSimgSrc) &&
        !/^data:/i.test(vLSimgSrc) &&
        !/^blob:/i.test(vLSimgSrc)
      ) {
        vLSimgSrc = wormXyObjects.s_l + "/images/paths/" + vLSimgSrc;
      }
      vF102 = "<img src=\"" + vLSimgSrc + "\" height=\"43\" width=\"220\" />";
    }
    return vF102;
  };
  f96.prototype.ql = function () {
    if (this.ol >= this.nl.list.length) {
      return vF25.Yg();
    } else {
      return vF25.Zg(this.nl.list[this.ol]);
    }
  };
  return f96;
}();
return vF1417;
    }();
    var vF75 = function () {
      var v$83 = $("#store-go-coins-button");
      var v$84 = $("#store-go-skins-button");
      var v$85 = $("#store-go-wear-button");
      var vF1418 = f14(vF54, function () {
        vF54.call(this, f9("index.game.popup.menu.store.tab"), true);
        var vF629 = f6();
        v$83.click(function () {
          vF629.r.Cd();
          vF629.s.I(vF629.s.Wh);
        });
        v$84.click(function () {
          vF629.r.Cd();
          vF629.s.I(vF629.s.$h);
        });
        v$85.click(function () {
          vF629.r.Cd();
          vF629.s.I(vF629.s.ai);
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
    }();
    var vF76 = function () {
      var v$86 = $("#wear-view-canv");
      var v$87 = $("#wear-description-text");
      var v$88 = $("#wear-locked-bar");
      var v$89 = $("#wear-locked-bar-text");
      var v$90 = $("#wear-buy-button");
      var v$91 = $("#wear-item-price");
      var v$92 = $("#wear-eyes-button");
      var v$93 = $("#wear-mouths-button");
      var v$94 = $("#wear-glasses-button");
      var v$95 = $("#wear-hats-button");
      var v$96 = $("#wear-tint-chooser");
      var v$97 = $("#wear-view-prev");
      var v$98 = $("#wear-view-next");
      var vF1419 = f14(vF54, function () {
        var vThis28 = this;
        vF54.call(this, f9("index.game.popup.menu.wear.tab"), true);
        var vF630 = f6();
        var vThis29 = this;
        this.tl = [];
        this.ja = new vF77(this, vF31.ja, v$92);
        this.ka = new vF77(this, vF31.ka, v$93);
        this.la = new vF77(this, vF31.la, v$94);
        this.ma = new vF77(this, vF31.ma, v$95);
        this.ul = null;
        this.vl = null;
        this.wl = null;
        this.xl = null;
        this.yl = null;
        this.zl = null;
        this.Al = new vF45(v$86);
        v$90.click(function () {
          vF630.r.Cd();
          vThis29.Bl();
        });
        v$97.click(function () {
          vF630.r.Cd();
          vThis29.ul.Cl();
        });
        v$98.click(function () {
          vF630.r.Cd();
          vThis29.ul.Dl();
        });
        v$92.click(function () {
          vF630.r.Cd();
          vThis29.El(vThis28.ja);
        });
        v$93.click(function () {
          vF630.r.Cd();
          vThis29.El(vThis28.ka);
        });
        v$94.click(function () {
          vF630.r.Cd();
          vThis29.El(vThis28.la);
        });
        v$95.click(function () {
          vF630.r.Cd();
          vThis29.El(vThis28.ma);
        });
        this.tl.push(this.ja);
        this.tl.push(this.ka);
        this.tl.push(this.la);
        this.tl.push(this.ma);
      });
      vF1419.prototype.a = function () {
        vF1419.parent.prototype.a.call(this);
        var vF631 = f6();
        var vThis30 = this;
        vF631.p.ca(function () {
          var v493 = vF631.p.Ac();
          if (v493 != null) {
            vThis30.vl = v493.eyesDict;
            vThis30.wl = v493.mouthDict;
            vThis30.xl = v493.glassesDict;
            vThis30.yl = v493.hatDict;
            vThis30.zl = v493.colorDict;
            vThis30.ja.Fl(v493.eyesVariantArray);
            vThis30.ja.Gl(vThis30.vl);
            vThis30.ka.Fl(v493.mouthVariantArray);
            vThis30.ka.Gl(vThis30.wl);
            vThis30.la.Fl(v493.glassesVariantArray);
            vThis30.la.Gl(vThis30.xl);
            vThis30.ma.Fl(v493.hatVariantArray);
            vThis30.ma.Gl(vThis30.yl);
          }
        });
        this.il(false);
        vF631.t.xh(function () {
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
      vF1419.prototype.Pa = function (p587, p588) {
        this.Al.Pa();
      };
      vF1419.prototype.El = function (p589) {
        this.ul = p589;
        for (var vLN087 = 0; vLN087 < this.tl.length; vLN087++) {
          this.tl[vLN087].Xk.removeClass("pressed");
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
            rc: this.ul.rc
          });
        }
      };
      vF1419.prototype.Bl = function () {
        var vThis31 = this;
        this.Hl().ah(function (p590) {
          vThis31.Ui(p590.Lb, p590.rc);
        });
      };
      vF1419.prototype.Ui = function (p591, p592) {
        var vThis32 = this;
        var vF632 = f6();
        var vUndefined26 = undefined;
        switch (p592) {
          case vF31.ja:
            vUndefined26 = this.vl[p591].price;
            break;
          case vF31.ka:
            vUndefined26 = this.wl[p591].price;
            break;
          case vF31.la:
            vUndefined26 = this.xl[p591].price;
            break;
          case vF31.ma:
            vUndefined26 = this.yl[p591].price;
            break;
          default:
            return;
        }
        if (!(vF632.u.zi() < vUndefined26)) {
          this.Sk();
          var v494 = vF632.t.ha(vF31.ia);
          var v495 = vF632.t.ha(vF31.ja);
          var v496 = vF632.t.ha(vF31.ka);
          var v497 = vF632.t.ha(vF31.la);
          var v498 = vF632.t.ha(vF31.ma);
          vF632.u.Ui(p591, p592, function () {
            vF632.t.Bh(v494, vF31.ia);
            vF632.t.Bh(v495, vF31.ja);
            vF632.t.Bh(v496, vF31.ka);
            vF632.t.Bh(v497, vF31.la);
            vF632.t.Bh(v498, vF31.ma);
            if (vF632.u.Ch(p591, p592)) {
              vF632.t.Bh(p591, p592);
            }
            vThis32.Qk();
          });
        }
      };
      vF1419.prototype.Il = function (p593, p594) {
        switch (p594) {
          case vF31.ja:
            return this.vl[p593];
          case vF31.ka:
            return this.wl[p593];
          case vF31.la:
            return this.xl[p593];
          case vF31.ma:
            return this.yl[p593];
        }
        return null;
      };
      vF1419.prototype.il = function (p595) {
        var vF633 = f6();
        this.Al.ak(vF633.t.ha(vF31.ia), false, false);
        this.Al.bk(vF633.t.ha(vF31.ja), false, false);
        this.Al.ck(vF633.t.ha(vF31.ka), false, false);
        this.Al.dk(vF633.t.ha(vF31.la), false, false);
        this.Al.ek(vF633.t.ha(vF31.ma), false, false);
        var v499 = this.Hl();
        if (v499._g()) {
          var v500 = v499.$g();
          var v501 = this.Il(v500.Lb, v500.rc);
          var v502 = false;
          if (vF633.t.Ja(v500.Lb, v500.rc)) {
            v$88.hide();
            v$90.hide();
          } else if (v501 == null || v501.nonbuyable == 1) {
            v502 = true;
            v$88.show();
            v$90.hide();
            v$89.text(f9("index.game.popup.menu.store.locked"));
            if (v501 != null && v501.nonbuyable && v501.nonbuyableCause != null) {
              var v503 = vF633.p.Ac().textDict[v501.nonbuyableCause];
              if (v503 != null) {
                v$89.text(f10(v503));
              }
            }
          } else {
            v$88.hide();
            v$90.show();
            v$91.html(v501.price);
          }
          v$87.html("");
          if (v501 != null && v501.description != null) {
            var v504 = vF633.p.Ac().textDict[v501.description];
            if (v504 != null) {
              v$87.html(f12(f10(v504)));
            }
          }
          switch (v500.rc) {
            case vF31.ja:
              this.Al.bk(v500.Lb, true, v502);
              break;
            case vF31.ka:
              this.Al.ck(v500.Lb, true, v502);
              break;
            case vF31.la:
              this.Al.dk(v500.Lb, true, v502);
              break;
            case vF31.ma:
              this.Al.ek(v500.Lb, true, v502);
          }
          if (p595) {
            vF633.t.Bh(v500.Lb, v500.rc);
          }
        }
      };
      var vF77 = function () {
        function f97(p596, p597, p598) {
          this.sl = p596;
          this.rc = p597;
          this.Xk = p598;
          this.Jl = {};
          this.Kl = [[]];
          this.Ll = -10;
          this.Ml = -10;
        }
        f97.prototype.Fl = function (p599) {
          this.Kl = p599;
        };
        f97.prototype.Gl = function (p600) {
          this.Jl = p600;
        };
        f97.prototype.ii = function () {
          var vF634 = f6();
          var v505 = vF634.t.ha(this.rc);
          for (var vLN088 = 0; vLN088 < this.Kl.length; vLN088++) {
            for (var vLN089 = 0; vLN089 < this.Kl[vLN088].length; vLN089++) {
              if (this.Kl[vLN088][vLN089] == v505) {
                this.Nl(vLN088);
                this.Ol(vLN089);
                return;
              }
            }
          }
          this.Nl(0);
          this.Ol(0);
        };
        f97.prototype.Cl = function () {
          var v506 = this.Ll - 1;
          if (v506 < 0) {
            v506 = this.Kl.length - 1;
          }
          this.Nl(v506);
          this.Ol(this.Ml % this.Kl[v506].length);
        };
        f97.prototype.Dl = function () {
          var v507 = this.Ll + 1;
          if (v507 >= this.Kl.length) {
            v507 = 0;
          }
          this.Nl(v507);
          this.Ol(this.Ml % this.Kl[v507].length);
        };
        f97.prototype.Nl = function (p601) {
          var vThis33 = this;
          if (!(p601 < 0) && !(p601 >= this.Kl.length)) {
            this.Ll = p601;
            v$96.empty();
            var v508 = this.Kl[this.Ll];
            if (v508.length > 1) {
              for (var vLN090 = 0; vLN090 < v508.length; vLN090++) {
                (function (p602) {
                  var v509 = v508[p602];
                  var v510 = vThis33.Jl[v509];
                  var v511 = "#" + vThis33.sl.zl[v510.prime];
                  var v$99 = $("<div style=\"border-color:" + v511 + "\"></div>");
                  v$99.click(function () {
                    f6().r.Cd();
                    vThis33.Ol(p602);
                  });
                  v$96.append(v$99);
                })(vLN090);
              }
            }
          }
        };
        f97.prototype.Ol = function (p603) {
          if (!(p603 < 0) && !(p603 >= this.Kl[this.Ll].length)) {
            this.Ml = p603;
            v$96.children().css("background-color", "transparent");
            var v512 = v$96.children(":nth-child(" + (1 + p603) + ")");
            v512.css("background-color", v512.css("border-color"));
            this.sl.il(true);
          }
        };
        f97.prototype.ql = function () {
          return this.Kl[this.Ll][this.Ml];
        };
        return f97;
      }();
      return vF1419;
    }();
    var vF78 = function () {
      var v$100 = $("#withdraw-consent-yes");
      var v$101 = $("#withdraw-consent-no");
      var vF1420 = f14(vF54, function () {
        vF54.call(this, f9("index.game.popup.menu.consent.tab"), false);
        var vF635 = f6();
        v$100.click(function () {
          vF635.r.Cd();
          if (vF635.Y()) {
            vF635.s.I(vF635.s.F);
            vF635.$(false, true);
            vF635.s.aa._(new vF84());
          } else {
            vF635.s.gi();
          }
        });
        v$101.click(function () {
          vF635.r.Cd();
          vF635.s.gi();
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
    }();
    var vF80 = function () {
      var v$102 = $("#delete-account-timer");
      var v$103 = $("#delete-account-yes");
      var v$104 = $("#delete-account-no");
      var vF1421 = f14(vF54, function () {
        vF54.call(this, f9("index.game.popup.menu.delete.tab"), false);
        var vF636 = f6();
        v$103.click(function () {
          vF636.r.Cd();
          if (vF636.u.P()) {
            vF636.u.bj();
            vF636.u.Wi();
          } else {
            vF636.s.gi();
          }
        });
        v$104.click(function () {
          vF636.r.Cd();
          vF636.s.gi();
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
        v$103.stop();
        v$103.hide();
        v$102.stop();
        v$102.show();
        v$102.text(".. 10 ..");
        this.Ql();
        this.Rl(function () {
          v$102.text(".. 9 ..");
        }, 1000);
        this.Rl(function () {
          v$102.text(".. 8 ..");
        }, 2000);
        this.Rl(function () {
          v$102.text(".. 7 ..");
        }, 3000);
        this.Rl(function () {
          v$102.text(".. 6 ..");
        }, 4000);
        this.Rl(function () {
          v$102.text(".. 5 ..");
        }, 5000);
        this.Rl(function () {
          v$102.text(".. 4 ..");
        }, 6000);
        this.Rl(function () {
          v$102.text(".. 3 ..");
        }, 7000);
        this.Rl(function () {
          v$102.text(".. 2 ..");
        }, 8000);
        this.Rl(function () {
          v$102.text(".. 1 ..");
        }, 9000);
        this.Rl(function () {
          v$102.hide();
          v$103.fadeIn(300);
        }, 10000);
      };
      vF1421.prototype.Rl = function (p604, p605) {
        var vSetTimeout2 = setTimeout(p604, p605);
        this.Pl.push(vSetTimeout2);
      };
      vF1421.prototype.Ql = function () {
        for (var vLN091 = 0; vLN091 < this.Pl.length; vLN091++) {
          clearTimeout(this.Pl[vLN091]);
        }
        this.Pl = [];
      };
      return vF1421;
    }();
    var vF81 = function () {
      function f98() {
        this.Ck = function () {};
      }
      f98.prototype.Bk = function () {};
      f98.prototype.ji = function () {};
      return f98;
    }();
    var vF82 = function () {
      var vF1422 = f14(vF81, function (p606) {
        vF81.call(this);
        var v513 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Sl = $("<div id=\"" + v513 + "\" class=\"toaster toaster-coins\">    <img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" />    <div class=\"toaster-coins-val\">+" + p606 + "</div>    <div class=\"toaster-coins-close\">" + f9("index.game.toaster.continue") + "</div></div>");
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
    }();
    var vF83 = function () {
      var vF1423 = f14(vF81, function (p607) {
        vF81.call(this);
        var v514 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Sl = $("<div id=\"" + v514 + "\" class=\"toaster toaster-levelup\">    <img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" />    <div class=\"toaster-levelup-val\">" + p607 + "</div>    <div class=\"toaster-levelup-text\">" + f9("index.game.toaster.levelup") + "</div>    <div class=\"toaster-levelup-close\">" + f9("index.game.toaster.continue") + "</div></div>");
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
    }();
    var vF84 = function () {
      var vF1424 = f14(vF81, function () {
        vF81.call(this);
        var vThis36 = this;
        var vF637 = f6();
        var v515 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Sl = $("<div id=\"" + v515 + "\" class=\"toaster toaster-consent-accepted\">    <img class=\"toaster-consent-accepted-logo\" src=\"" + vLSHttpswormateioimages + "\" alt=\"Wormate.io logo\"/>    <div class=\"toaster-consent-accepted-container\">        <span class=\"toaster-consent-accepted-text\">" + f9("index.game.toaster.consent.text").replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>") + "</span>        <a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + f9("index.game.toaster.consent.link") + "</a>    </div>    <div class=\"toaster-consent-close\">" + f9("index.game.toaster.consent.iAccept") + "</div></div>");
        this.Tl = this.Sl.find(".toaster-consent-close");
        this.Tl.hide();
        this.Tl.click(function () {
          vF637.r.Cd();
          if (vF637.Y()) {
            vF637.$(true, true);
          }
          vThis36.Ck();
        });
      });
      vF1424.prototype.Bk = function () {
        return this.Sl;
      };
      vF1424.prototype.ji = function () {
        var vThis37 = this;
        var vF638 = f6();
        if (vF638.Y() && !vF638.Z()) {
          vF638.r.Hd();
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
    }();
    var vO11 = {};
    vO11.main = {
      Ma: f30("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
      K: f30("ltmolilci1iurq1i", "wormate-io_970x250"),
      ra: f27(),
      e: 4,
      oa: false,
      qk: true
    };
    vO11.miniclip = {
      Ma: f30("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
      K: f30("ltmolilci1iurq1i", "wormate-io_970x250"),
      ra: f27(),
      e: 4,
      oa: false,
      qk: false
    };
    var v516 = vO11[window.ENV];
    v516 ||= vO11.main;
    $(function () {
      FastClick.attach(document.body);
    });
    addEventListener("contextmenu", function (p608) {
      p608.preventDefault();
      p608.stopPropagation();
      return false;
    });
    f13("//connect.facebook.net/" + vUndefined + "/sdk.js", "facebook-jssdk", function () {
      FB.init({
        appId: "861926850619051",
        cookie: true,
        xfbml: true,
        status: true,
        version: "v8.0"
      });
    });
    f13("//apis.google.com/js/api:client.js", null, function () {
      gapi.load("auth2", function () {
        GoogleAuth = gapi.auth2.init({
          client_id: "959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com"
        });
      });
    });
    vUndefined2 = f31();
    vUndefined2.v();
    if (PhoneChecked()) {
      f13("https://haylamday.com/js/joy.min.js", "mobileconfig", function () {
        vF85();
      });
    }
    ;
    let vF85 = function () {
      $("#game-canvas").after("<div id=\"key-container\"><div class=\"key\">Q</div></div>\n        <div id='zoom-container'>\n        \n                                 <input id=\"zoom-slider\" type=\"range\" min=\"10\" max=\"100\" value=\"70\" step=\"1\">\n  <div id=\"zoom-percentage\">50%</div>\n  \n                                         </div>\n               \n                                         \n                                         \n                                         \n                                         ");
    };
    window.addEventListener("keydown", function (p609) {
      console.log("event.keyCode " + p609.keyCode);
      p609 = p609.which || p609.keyCode || 0;
      if (p609 !== 113 && window.keyMove !== p609 || !isPlaying || PilotoAutomatico) {
        clearInterval(PilotoAutomatico);
        PilotoAutomatico = null;
      } else {
        let v517 = theoEvents.eventoPrincipal.sk = 0;
        p609 = window.tuNewScore;
        PilotoAutomatico = setInterval(function () {
          let vParseFloat = parseFloat(theoEvents.eventoPrincipal.sk);
          theoEvents.eventoPrincipal.sk = (vParseFloat >= Math.PI ? -vParseFloat : vParseFloat) + (v517 === 20 ? 0 : Math.PI / 20);
          v517++;
        }, 120 + (p609 >= 100000 ? 5 : p609 >= 10000 ? 10 : 0));
      }
      localStorage.setItem("SaveGameXT", JSON.stringify(wormXyObjects));
    }, false);
    let vA14 = [{
      nombre: "chuot 01",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_01.cur"
    }, {
      nombre: "chuot 02",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_02.cur"
    }, {
      nombre: "chuot 03",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_03.cur"
    }, {
      nombre: "chuot 04",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_04.cur"
    }, {
      nombre: "chuot 05",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_05.cur"
    }, {
      nombre: "chuot 06",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_06.cur"
    }, {
      nombre: "chuot 07",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_07.cur"
    }, {
      nombre: "chuot 08",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_08.cur"
    }, {
      nombre: "chuot 09",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_09.cur"
    }, {
      nombre: "chuot 10",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_10.cur"
    }, {
      nombre: "chuot 11",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_11.cur"
    }, {
      nombre: "chuot 12",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_12.cur"
    }, {
      nombre: "chuot 13",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_13.cur"
    }, {
      nombre: "chuot 14",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_14.cur"
    }, {
      nombre: "chuot 15",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_15.cur"
    }, {
      nombre: "chuot 16",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_16.cur"
    }, {
      nombre: "chuot 17",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_17.cur"
    }, {
      nombre: "chuot 18",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_18.cur"
    }, {
      nombre: "chuot 19",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_19.cur"
    }, {
      nombre: "chuot 20",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_20.cur"
    }, {
      nombre: "chuot 21",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_21.cur"
    }, {
      nombre: "chuot 22",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_22.cur"
    }, {
      nombre: "chuot 23",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_23.cur"
    }, {
      nombre: "chuot 24",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_24.cur"
    }, {
      nombre: "chuot 25",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_25.cur"
    }, {
      nombre: "chuot 26",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_26.cur"
    }, {
      nombre: "chuot 27",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_27.cur"
    }, {
      nombre: "chuot 28",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_28.cur"
    }, {
      nombre: "chuot 29",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_29.cur"
    }, {
      nombre: "chuot 30",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_30.cur"
    }, {
      nombre: "chuot 31",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_31.cur"
    }, {
      nombre: "chuot 32",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_32.cur"
    }, {
      nombre: "chuot 33",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_33.cur"
    }, {
      nombre: "chuot 34",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_34.cur"
    }, {
      nombre: "chuot 35",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_35.cur"
    }, {
      nombre: "chuot 36",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_36.cur"
    }, {
      nombre: "chuot 37",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_37.cur"
    }, {
      nombre: "chuot 38",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_38.cur"
    }, {
      nombre: "chuot 39",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_39.cur"
    }, {
      nombre: "chuot 40",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_40.cur"
    }, {
      nombre: "chuot 41",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_41.cur"
    }, {
      nombre: "Cherries_Pointer",
      url: "https://cdn.custom-cursor.com/db/pointer/32/Cherries_Pointer.png"
    }];
    let vA15 = [{
      nombre: "Default",
      url: "https://i.imgur.com/8ubx4RA.png"
    }, {
      nombre: "Schwarze Background",
      url: "https://i.imgur.com/3cxXwZ6.png"
    }, {
      nombre: "light blue",
      url: "https://i.imgur.com/dWtJFIx.png"
    }, {
      nombre: "woman",
      url: "https://i.imgur.com/19YALRi.png"
    }, {
      nombre: "Navidad",
      url: "https://i.imgur.com/qAO9LgC.png"
    }, {
      nombre: "Mal3ab",
      url: "https://i.imgur.com/MlCgOma.png"
    }, {
      nombre: "Galaxy_Star",
      url: "https://i.imgur.com/yayb9Ru.png"
    }, {
      nombre: "Desert",
      url: "https://asserts.wormworld.io/backgrounds/bkgnd7.png"
    }, {
      nombre: "Sky 1",
      url: "https://asserts.wormworld.io/backgrounds/bg_sky_1.png"
    }, {
      nombre: "Sky 2",
      url: "https://asserts.wormworld.io/backgrounds/bg_sky_2.png"
    }, {
      nombre: "Sky 3",
      url: "https://asserts.wormworld.io/backgrounds/bg_sky_3.png"
    }, {
      nombre: "Sky 4",
      url: "https://asserts.wormworld.io/backgrounds/bg_sky_4.png"
    }];
    wormXyObjects.loading = true;
    var vLS4 = "";
    vLS4 += "</div>";
    vLS4 += "</div>";
    vLS4 += "</div>";
    vLS4 += "<div id=\"wormcerca\">";
    vLS4 += "<img class=\"pwrups v0\" style=\"display: none;\" src=\"https://i.imgur.com/M1LFPpp.png\">";
    vLS4 += "<img class=\"pwrups v1\" style=\"display: none;\" src=\"https://i.imgur.com/z162iYa.png\">";
    vLS4 += "<img class=\"pwrups v2\" style=\"display: none;\" src=\"https://i.imgur.com/kXlF32q.png\">";
    vLS4 += "<img class=\"pwrups v3\" style=\"display: none;\" src=\"https://i.imgur.com/kJ6oz7e.png\">";
    vLS4 += "<img class=\"pwrups v4\" style=\"display: none;\" src=\"https://i.imgur.com/l3ds43O.png\">";
    vLS4 += "<img class=\"pwrups v5\" style=\"display: none;\" src=\"https://i.imgur.com/FqA56k6.png\">";
    vLS4 += "<img class=\"pwrups v6\" style=\"display: none;\" src=\"https://i.imgur.com/mSCZeEp.png\">";
    vLS4 += "</div>";
    vLS4 += "<img class=\"worm_1\" src=\"https://i.imgur.com/iekrYYm.png\"><span class=\"Worm_cerca\"></span>";
    vLS4 += "\n      \n      \n        \n        \n        <input style=\"display:none\" id=\"zoom-slider\" type=\"range\" min=\"0\" max=\"100\" value=\"50\" step=\"1\">\n        <div style=\"display:none\" class=\"key\">Q</div>\n        <div class=\"worm_2\">\n        <button id=\"settingBtn\"><i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color:yellow;font-size: 23px;\"></i></button>\n        \n        <div id=\"settingContent\">\n        \n        \n        <div class=\"container1\">\n                    <span class=\"settings_span\">Spin-Fast: </span>\n                    <input id=\"smoothCamera\" class=\"range\" type=\"range\" min=\"0.3\" max=\"0.6\" value=\"' + wormXyObjects.smoothCamera + '\" step=\"0.1\" onmousemove=\"smoothCameraValue.value=value\" />\n        </div>         \n        \n        <div class=\"container1\">\n        <span class=\"settings_span\">Power-ups-Size: </span>\n        <input id=\"PortionSize\" class=\"range\" type=\"range\" min=\"1\" max=\"6\" value=\"' + wormXyObjects.PortionSize + '\" step=\"1\" onmousemove=\"rangevalue1.value=value\" />\n        </div>\n        \n      <div class=\"container1\">\n      <span class=\"settings_span\">Power-ups-Aura: </span>\n      <input id=\"PortionAura\" class=\"range\" type=\"range\" min=\"1.2\" max=\"3.2\" value=\"' + wormXyObjects.PortionAura + '\" step=\"0.2\" onmousemove=\"PortionAuravalue.value=value\" />\n      </div>\n       \n      <div class=\"container1\">\n                    <span class=\"settings_span\">Food-Size: </span>\n                    <input id=\"FoodSize\" class=\"range\" type=\"range\" min=\"0.5\" max=\"3\" value=\"' + wormXyObjects.FoodSize + '\" step=\"0.5\" onmousemove=\"rangevalue2.value=value\" />\n                    </div>\n                    <div class=\"container1\">\n                    <span class=\"settings_span\">Food-Shadow: </span>\n                    <input id=\"FoodShadow\" class=\"range\" type=\"range\" min=\"0.5\" max=\"3\" value=\"' + wormXyObjects.FoodShadow + '\" step=\"0.5\" onmousemove=\"FoodShadowvalue.value=value\" />\n                    </div>\n    </div>\n    </div>";
    $("#game-view").append(vLS4);
    function f99(p610) {
      if (wormXyObjects.PropertyManager) {
        p610.skinId = wormXyObjects.PropertyManager.rh;
        p610.eyesId = wormXyObjects.PropertyManager.sh;
        p610.mouthId = wormXyObjects.PropertyManager.th;
        p610.glassesId = wormXyObjects.PropertyManager.uh;
        p610.hatId = wormXyObjects.PropertyManager.vh;
      }
    }
    function f100() {
      $(".mm-merchant-cont").replaceWith("<div class='youid'><button style=\"float: right;position: relative;min-width: 95px;background:#ff0000;height: 50px;\" onclick=\"navigator.clipboard.writeText('" + wormXyObjects.FB_UserID + "').then(()=> alert('You ID " + wormXyObjects.FB_UserID + " copiado! copied!'));\">YOUR ID</button></div>");
      $(".column-left").append("<div class='contact'><i class='fa-brands fa-discord'></i> https://discord.gg/hpZEwc22du</div>");
    $(".column-left .contact:last-child").css("cursor", "pointer").click(function() {
        window.open("https://discord.gg/hpZEwc22du", "_blank");
});
      $("#loa831pibur0w4gv").replaceWith("\n           \n           \n           \n           <div style=\"margin: 0;\" id=\"loa831pibur0w4gv\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" />\n  \n    <div class=\"label\" id=\"titleSetings\">Notification</div>\n    <div class=\"bao-list1\">\n      \n      <input type=\"text\" value=\"" + wormXyObjects.FB_UserID + "\" style=\"width: 85%;height: 23px;border-radius: 4px;font-size: 12px;padding: 0 6px;background-color: #fff;color: #806102;display: block;box-sizing: border-box;-webkit-appearance: none;outline: 0;border-width: 0;\"/>\n      <button style=\"height: 25px;float: right;margin-top: -24px;margin-right: -6px;line-height: 1.2;font-size: 14px;\" onclick=\"navigator.clipboard.writeText('" + wormXyObjects.FB_UserID + "').then(()=> alert('You ID " + wormXyObjects.FB_UserID + " copiado! copied!'));\">Copy</button>\n      <center>\n        <div class=\"hg\"><a target=\"_blank\" href=\"https://thanhtoan.vuonghiep.com/\">Activated</a> </div>\n      </center>\n     <i class=\"fa fa-book\" aria-hidden=\"true\" style=\"color:48ff00;\"></i> Instructions for installing on IOS and iPad New 2024: <a style=\"color: #2ae1eb; font-weight: 600;\" href=\"https://www.youtube.com/watch?v=uyHHXWKHgRw\">https://www.youtube.com/watch?v=uyHHXWKHgRw</a> </div>\n      \n    \n</div>");
      var v518 = document.getElementById("settingBtn");
      var v519 = document.getElementById("settingContent");
      function f101() {
        var v520 = window.getComputedStyle(v519);
        var v521 = v520.getPropertyValue("display");
        if (v521 === "none") {
          v519.style.display = "block";
        } else {
          v519.style.display = "none";
        }
      }
      v518.addEventListener("click", f101);
      v518.addEventListener("touchstart", function (p611) {
        p611.preventDefault();
        f101();
      });
      function f102() {
        const v522 = new KeyboardEvent("keydown", {
          key: "q",
          code: "KeyQ",
          keyCode: 81,
          charCode: 0,
          which: 81,
          bubbles: true
        });
        document.dispatchEvent(v522);
      }
      const v523 = document.querySelector(".key");
      v523.addEventListener("click", f102);
      v523.addEventListener("touchstart", p612 => {
        p612.preventDefault();
        f102();
      });
      $("#PortionSize").on("input", function () {
        wormXyObjects.PortionSize = $(this).val();
        localStorage.PotenciadorSize = wormXyObjects.PortionSize;
      });
      $("#PortionAura").on("input", function () {
        wormXyObjects.PortionAura = $(this).val();
        localStorage.PotenciadorAura = wormXyObjects.PortionAura;
      });
      $("#smoothCamera").on("input", function () {
        wormXyObjects.smoothCamera = $(this).val();
        localStorage.smoothCamera = wormXyObjects.smoothCamera;
      });
      $("#FoodSize").on("input", function () {
        wormXyObjects.FoodSize = $(this).val();
        localStorage.ComidaSize = wormXyObjects.FoodSize;
      });
      $("#FoodShadow").on("input", function () {
        wormXyObjects.FoodShadow = $(this).val();
        localStorage.ComidaShadow = wormXyObjects.FoodShadow;
      });
    (function () {
  function isAdActive(vAd) {
    if (!vAd) return false;
    if (vAd.enabled === false) return false;

    var vNow = new Date();
    var vExpiry = null;

    if (vAd.expire_at) {
      vExpiry = new Date(vAd.expire_at);
    } else if (vAd.expiry) {
      vExpiry = new Date(vAd.expiry);
    } else if (vAd.end_date) {
      vExpiry = new Date(vAd.end_date);
    } else if (vAd.date_end) {
      vExpiry = new Date(vAd.date_end);
    }

    if (vExpiry && !isNaN(vExpiry.getTime()) && vNow > vExpiry) {
      return false;
    }

    if (!vAd.image && !vAd.img && !vAd.banner) return false;
    if (!vAd.link && !vAd.url && !vAd.href) return false;

    return true;
  }

  function getAdImage(vAd) {
    return vAd.image || vAd.img || vAd.banner || "";
  }

  function getAdLink(vAd) {
    return vAd.link || vAd.url || vAd.href || "#";
  }

  function getAdTitle(vAd, vIndex) {
    return vAd.title || vAd.name || ("ad-" + vIndex);
  }

  function escapeHtml(vText) {
    return String(vText || "").replace(/[&<>"']/g, function (vChar) {
      return ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      })[vChar];
    });
  }

  function renderAds(vAds) {
    var vAdsHtml = "";
    if (vAds.length > 0) {
      vAdsHtml += '<div class="vietnam ads-grid-absi" style="display:grid!important;grid-template-columns:' + (vAds.length === 1 ? '1fr' : '1fr 1fr') + ';gap:10px;margin-top:8px;">';
      for (var i = 0; i < vAds.length; i++) {
        var vAd = vAds[i];
        var vImg = escapeHtml(getAdImage(vAd));
        var vLink = escapeHtml(getAdLink(vAd));
        var vTitle = escapeHtml(getAdTitle(vAd, i + 1));
        vAdsHtml += ''
          + '<a href="' + vLink + '" target="_blank" class="absi_ad_item" rel="noopener noreferrer">'
          + '  <img class="absi_ad_img" style="width:100%;display:block;" src="' + vImg + '" alt="' + vTitle + '"/>'
          + '</a>';
      }
      vAdsHtml += '</div>';
    }
    return vAdsHtml;
  }

  function renderMainBox(vAds) {
    $("#mm-advice-cont").html(
      '<div class="vietnam" style="display:grid!important;grid-template-columns:1fr 1fr 1fr;gap:8.5px;">'
      + '<input type="button" value="F.SCREEN" class="fullscreen_button custom_game_btn">'
      + '<input type="button" value="RESPAWN" id="hoisinh" class="fullscreen_respawn custom_game_btn">'
      + '<input type="button" value="SKINS LAB" onclick="window.location.href=\'https://skinlab.haylamday.com/\'" class="fullscreen_contact custom_game_btn">'
      + '</div>'
      + renderAds(vAds)
    );

    $(".mm-merchant-cont").html("\n ");
  }

  function initAdsAndButtons() {
    renderMainBox([]);

    if (!document.getElementById("custom-btn-style-absi")) {
      $("head").append(`
        <style id="custom-btn-style-absi">
          .custom_game_btn{
            height:42px !important;
            border:1.5px solid #000 !important;
            border-radius:8px !important;
            font-size:14px !important;
            font-weight:700 !important;
            color:#fff !important;
            text-align:center !important;
            cursor:pointer !important;
            outline:none !important;
            box-sizing:border-box !important;
            transition:transform .15s ease, filter .15s ease, box-shadow .15s ease !important;
            box-shadow:0 2px 6px rgba(0,0,0,.25) !important;
          }
          .custom_game_btn:hover{
            transform:translateY(-1px) !important;
            filter:brightness(1.05) !important;
          }
          .custom_game_btn:active{
            transform:translateY(0) scale(.98) !important;
          }
          .fullscreen_button{
            background:#ffd400 !important;
            color:#111 !important;
          }
          .fullscreen_respawn{
            background:#2ecc40 !important;
            color:#fff !important;
          }
          .fullscreen_contact{
            background:#1e90ff !important;
            color:#fff !important;
          }
          .absi_ad_item{
            display:block !important;
            overflow:hidden !important;
            border-radius:10px !important;
            border:1.5px solid rgba(0,0,0,.35) !important;
            background:rgba(255,255,255,.06) !important;
            box-shadow:0 3px 10px rgba(0,0,0,.22) !important;
            transition:transform .18s ease, box-shadow .18s ease, filter .18s ease !important;
          }
          .absi_ad_item:hover{
            transform:translateY(-2px) scale(1.01) !important;
            box-shadow:0 6px 16px rgba(0,0,0,.28) !important;
            filter:brightness(1.04) !important;
          }
          .absi_ad_img{
            width:100% !important;
            height:auto !important;
            object-fit:cover !important;
            border-radius:10px !important;
          }
          @media (max-width: 768px){
            .custom_game_btn{
              height:38px !important;
              font-size:12px !important;
              border-radius:7px !important;
            }
            .ads-grid-absi{
              grid-template-columns:1fr !important;
            }
          }
        </style>
      `);
    }

    $(".fullscreen_button").off("click").on("click", function () {
      if (
        document.fullScreenElement && document.fullScreenElement !== null ||
        !document.mozFullScreen && !document.webkitIsFullScreen
      ) {
        if (document.documentElement.requestFullScreen) {
          document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
          document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
      } else if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    });

    $.ajax({
      url: "https://ii7modysmp-hue.github.io/extension/api/ads.json",
      type: "GET",
      dataType: "json",
      cache: false,
      success: function (vRes) {
        var vList = [];

        if (Array.isArray(vRes)) {
          vList = vRes;
        } else if (vRes && Array.isArray(vRes.ads)) {
          vList = vRes.ads;
        } else if (vRes && Array.isArray(vRes.Ads)) {
          vList = vRes.Ads;
        } else if (vRes && Array.isArray(vRes.data)) {
          vList = vRes.data;
        }

        var vActiveAds = [];
        for (var i = 0; i < vList.length; i++) {
          if (isAdActive(vList[i])) {
            vActiveAds.push(vList[i]);
          }
          if (vActiveAds.length >= 2) {
            break;
          }
        }

        renderMainBox(vActiveAds);
        $(".fullscreen_button").off("click").on("click", function () {
          if (
            document.fullScreenElement && document.fullScreenElement !== null ||
            !document.mozFullScreen && !document.webkitIsFullScreen
          ) {
            if (document.documentElement.requestFullScreen) {
              document.documentElement.requestFullScreen();
            } else if (document.documentElement.mozRequestFullScreen) {
              document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullScreen) {
              document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            }
          } else if (document.cancelFullScreen) {
            document.cancelFullScreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          }
        });
      },
      error: function () {
        renderMainBox([]);
        $(".fullscreen_button").off("click").on("click", function () {
          if (
            document.fullScreenElement && document.fullScreenElement !== null ||
            !document.mozFullScreen && !document.webkitIsFullScreen
          ) {
            if (document.documentElement.requestFullScreen) {
              document.documentElement.requestFullScreen();
            } else if (document.documentElement.mozRequestFullScreen) {
              document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullScreen) {
              document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            }
          } else if (document.cancelFullScreen) {
            document.cancelFullScreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          }
        });
      }
    });
  }

  $(document).ready(function () {
    initAdsAndButtons();
  });
})();
      $("#hoisinh").click(function () {
        let vHoisinhnhanh2 = hoisinhnhanh;
        if (vHoisinhnhanh2) {
          anApp.r.Hd();
          anApp.sa(vHoisinhnhanh2);
        }
      });
      $(".mm-merchant").replaceWith("");
$(".description-text").replaceWith(`
 <div class="description-text" style="position: relative; overflow: hidden;">
 <!-- خلفية شفافة -->
 <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-image: url('https://i.ibb.co/NngChRhX/56aa63df-2ca1-4713-941b-eb1598cab3d7.webp'); background-size: cover; background-position: center; background-repeat: no-repeat; opacity: 0.08; z-index: 0; pointer-events: none;"></div>
 
 <div class="title-wormate-friends-connect" style="position: absolute; top: 0; z-index: 1; width: 95.5%;margin-top: 10px;">S E R V E R S </div>
 
 <div style="text-align: center; margin-top: 40px; position: relative; z-index: 2;">
 <button id="btn-timmap-filter" style="background: #e67e22; color: white; border: 1px solid #d35400; border-radius: 4px; padding: 3px 10px; cursor: pointer; font-size: 10px; font-weight: bold; font-family: 'Arial', sans-serif; margin-right: 5px;">TIMMAP SERVER</button>
 <button id="btn-wormxy-filter" style="background: #2c3e50; color: white; border: 1px solid #1a2632; border-radius: 4px; padding: 3px 10px; cursor: pointer; font-size: 10px; font-weight: bold; font-family: 'Arial', sans-serif;">WORMXY SERVERS</button>
 </div>

 <div class="description-text-hiep" style="position: relative; z-index: 2;">
 <ul class="ui-tabs-nav">
 <li class="ui-tabs-tab ui-tab ui-tab-inactive0 ui-tab-active" style="margin: -5px">
 <a> <span class="flag br" value="https://i.imgur.com/dixYLjk.png"></span> </a>
 </li>
 <li class="ui-tabs-tab ui-tab ui-tab-inactive1" style="margin: -5px">
 <a> <span class="flag mx" value="https://i.imgur.com/JMAvuFN.png"></span> </a>
 </li>
 <li class="ui-tabs-tab ui-tab ui-tab-inactive2" style="margin: -5px">
 <a> <span class="flag us" value="https://i.imgur.com/Jb2FF0y.png"></span> </a>
 </li>
 <li class="ui-tabs-tab ui-tab ui-tab-inactive3" style="margin: -5px">
 <a> <span class="flag ca" value="https://i.imgur.com/m1skEsB.png"></span> </a>
 </li>
 <li class="ui-tabs-tab ui-tab ui-tab-inactive4" style="margin: -5px">
 <a> <span class="flag de" value="https://i.imgur.com/VgCH8iy.png"></span> </a>
 </li>
 <li class="ui-tabs-tab ui-tab ui-tab-inactive5" style="margin: -5px">
 <a> <span class="flag fr" value="https://i.imgur.com/QuEjBr0.png"></span> </a>
 </li>
 <li class="ui-tabs-tab ui-tab ui-tab-inactive6" style="margin: -5px">
 <a> <span class="flag sg" value="https://i.imgur.com/bT3xWqF.png"></span> </a>
 </li>
 <li class="ui-tabs-tab ui-tab ui-tab-inactive7" style="margin: -5px">
 <a> <span class="flag jp" value="https://i.imgur.com/P2rYk1k.png"></span> </a>
 </li>
 <li class="ui-tabs-tab ui-tab ui-tab-inactive8" style="margin: -5px">
 <a> <span class="flag au" value="https://i.imgur.com/X0co8Ao.png"></span> </a>
 </li>
 <li class="ui-tabs-tab ui-tab ui-tab-inactive9" style="margin: -5px">
 <a> <span class="flag gb" value="https://i.imgur.com/8pQY6RW.png"></span> </a>
 </li>
 </ul>
 <div class="gachngang"></div>
 <div id='mapsv'><div class='tensv'>Name</div><div class='valusv'>Region</div><div class='onlinesv'>On/Off</div><div class='img-teamsv'>Streamer</div></div>
 <div class="gachngang"></div>
 <div class="servers-container">
 <div class="servers-peru"></div>
 <div class="servers-mexico" style="display: none;"></div>
 <div class="servers-eeuu" style="display: none;"></div>
 <div class="servers-canada" style="display: none;"></div>
 <div class="servers-germania" style="display: none;"></div>
 <div class="servers-francia" style="display: none;"></div>
 <div class="servers-singapur" style="display: none;"></div>
 <div class="servers-japon" style="display: none;"></div>
 <div class="servers-australia" style="display: none;"></div>
 <div class="servers-granbretana" style="display: none;"></div>
 <div class="servers-timmap" style="display: none;"></div>
 <div class="servers-wormxy" style="display: none;"></div>
 </div>
 </div>
 </div>
`);

// متغيرات لتتبع حالة الأزرار
var timmapActive = false;
var wormxyActive = false;

// تبديل الأعلام
$(".ui-tab").click(function() {
    var flagClass = $(this).find(".flag").attr("class").split(" ")[1];
    
    // إخفاء جميع حاويات السيرفرات
    $(".servers-container > div").hide();
    $(".servers-timmap").hide();
    $(".servers-wormxy").hide();
    
    // إظهار الحاوية المناسبة
    if (flagClass === "br") $(".servers-peru").fadeIn(300);
    else if (flagClass === "mx") $(".servers-mexico").fadeIn(300);
    else if (flagClass === "us") $(".servers-eeuu").fadeIn(300);
    else if (flagClass === "ca") $(".servers-canada").fadeIn(300);
    else if (flagClass === "de") $(".servers-germania").fadeIn(300);
    else if (flagClass === "fr") $(".servers-francia").fadeIn(300);
    else if (flagClass === "sg") $(".servers-singapur").fadeIn(300);
    else if (flagClass === "jp") $(".servers-japon").fadeIn(300);
    else if (flagClass === "au") $(".servers-australia").fadeIn(300);
    else if (flagClass === "gb") $(".servers-granbretana").fadeIn(300);
    
    // إعادة تعيين حالات الأزرار
    timmapActive = false;
    wormxyActive = false;
    $("#btn-timmap-filter").css("background", "#e67e22");
    $("#btn-wormxy-filter").css("background", "#2c3e50");
    
    // تحديث التبويب النشط
    $(".ui-tabs-tab").removeClass("ui-tab-active");
    $(this).addClass("ui-tab-active");
});

// وظيفة زر TIMMAP SERVER (نظام النقر: مرة تظهر، مرة تخفي)
$("#btn-timmap-filter").click(function() {
 if (!timmapActive) {
   // إظهار سيرفرات TIMMAP وإخفاء الباقي
   $(".servers-container > div").hide();
   $(".servers-timmap").fadeIn(500);
   $(".ui-tabs-tab").removeClass("ui-tab-active");
   timmapActive = true;
   wormxyActive = false;
   $(this).css("background", "#d35400"); // تغيير لون الزر عند التفعيل
   $("#btn-wormxy-filter").css("background", "#2c3e50"); // إعادة لون الزر الآخر
 } else {
   // العودة إلى السيرفرات الأصلية
   $(".servers-container > div").hide();
   $(".servers-peru").fadeIn(500);
   $(".ui-tabs-tab").first().addClass("ui-tab-active");
   timmapActive = false;
   $(this).css("background", "#e67e22"); // إعادة اللون الأصلي
 }
});

// وظيفة زر WORMXY SERVERS (نظام النقر: مرة تظهر، مرة تخفي)
$("#btn-wormxy-filter").click(function() {
 if (!wormxyActive) {
   // إظهار سيرفرات WORMXY وإخفاء الباقي
   $(".servers-container > div").hide();
   $(".servers-wormxy").fadeIn(500);
   $(".ui-tabs-tab").removeClass("ui-tab-active");
   wormxyActive = true;
   timmapActive = false;
   $(this).css("background", "#1a2632"); // تغيير لون الزر عند التفعيل
   $("#btn-timmap-filter").css("background", "#e67e22"); // إعادة لون الزر الآخر
 } else {
   // العودة إلى السيرفرات الأصلية
   $(".servers-container > div").hide();
   $(".servers-peru").fadeIn(500);
   $(".ui-tabs-tab").first().addClass("ui-tab-active");
   wormxyActive = false;
   $(this).css("background", "#2c3e50"); // إعادة اللون الأصلي
 }
});

// إخفاء قوائم Timmap و Wormxy عند الضغط على أي علم (للحفاظ على النظام القديم)
$(".flag").click(function () {
 $(".servers-timmap").hide();
 $(".servers-wormxy").hide();
 timmapActive = false;
 wormxyActive = false;
 $("#btn-timmap-filter").css("background", "#e67e22");
 $("#btn-wormxy-filter").css("background", "#2c3e50");
 
 let vValue = $(this).attr("value");
 wormXyObjects.flag = vValue;
 ctx.containerImgS.texture = ctx.onclickServer;
 if(typeof retundFlagError === "function") retundFlagError();
});

// كود توزيع السيرفرات الأصلي مع ميزة الفلترة لـ TIMMAP و WORMXY
for (let a = 0; a < servers.Api_listServer.length; a++) {
 var v525 = servers.Api_listServer[a].serverUrl;
 var v526 = servers.Api_listServer[a].name;
 var v527 = servers.Api_listServer[a].region;
 var vTimmap = servers.Api_listServer[a].TIMMAP; // الميزة الجديدة
 var vWormxy = servers.Api_listServer[a].WORMXY; // الميزة الجديدة

 let v528 = document.createElement("p");
 v528.value = v525;
 v528.innerHTML = v526;

 if (v527 == "peru") { $(".servers-peru").prepend(v528); }
 else if (v527 == "mexico") { $(".servers-mexico").prepend(v528); }
 else if (v527 == "eeuu") { $(".servers-eeuu").prepend(v528); }
 else if (v527 == "canada") { $(".servers-canada").prepend(v528); }
 else if (v527 == "germania") { $(".servers-germania").prepend(v528); }
 else if (v527 == "francia") { $(".servers-francia").prepend(v528); }
 else if (v527 == "singapur") { $(".servers-singapur").prepend(v528); }
 else if (v527 == "japon") { $(".servers-japon").prepend(v528); }
 else if (v527 == "australia") { $(".servers-australia").prepend(v528); }
 else if (v527 == "granbretana") { $(".servers-granbretana").prepend(v528); }

 // إضافة السيرفر لقائمة Timmap إذا كانت قيمته 1
 if (vTimmap == 1) {
 let vClone = $(v528).clone(true);
 $(".servers-timmap").prepend(vClone);
 }

 // إضافة السيرفر لقائمة Wormxy إذا كانت قيمته 1
 if (vWormxy == 1) {
 let vClone = $(v528).clone(true);
 $(".servers-wormxy").prepend(vClone);
 }

 $(v528).attr("id", v527);
 $(v528).attr("class", "selectSala");
 $(v528).attr("value", v526);

 $(v528).click(function () {
 let v529 = $(this).find("#svhiep .valu").text().trim();
 ctx.setServer(v529);
 let v530 = $(this).val();
 ctx.containerImgS.texture = ctx.onclickServer;
 if(typeof retundFlagError === "function") retundFlagError();
 window.server_url = v530;
 $("#mm-action-play").click();
 $("#adbl-continue").click();
         });
      }
    }
    function f103() {
      $("#getskin").on("click", function () {
        for (var vLN092 = 0; vLN092 < clientes.clientesActivos.length; vLN092++) {
          var v531 = clientes.clientesActivos[vLN092].cliente_NOMBRE;
          var v532 = clientes.clientesActivos[vLN092].cliente_ID;
          var v533 = clientes.clientesActivos[vLN092].Client_VisibleSkin;
          var v534 = clientes.clientesActivos[vLN092].Client_VisibleSkin1;
          var v535 = clientes.clientesActivos[vLN092].Client_VisibleSkin2;
          var v536 = clientes.clientesActivos[vLN092].Client_VisibleSkin3;
          var v537 = clientes.clientesActivos[vLN092].Client_VisibleSkin4;
          var v538 = clientes.clientesActivos[vLN092].Client_VisibleSkin5;
          var v539 = clientes.clientesActivos[vLN092].Client_VisibleSkin6;
          var v540 = clientes.clientesActivos[vLN092].Client_VisibleSkin7;
          var v541 = clientes.clientesActivos[vLN092].Client_VisibleSkin8;
          var v542 = clientes.clientesActivos[vLN092].Client_VisibleSkin9;
          var v543 = clientes.clientesActivos[vLN092].Client_VisibleSkin10;
          var v544 = clientes.clientesActivos[vLN092].Client_VisibleSkin11;
          var v545 = clientes.clientesActivos[vLN092].Client_VisibleSkin12;
          var v546 = clientes.clientesActivos[vLN092].Client_VisibleSkin13;
          var v547 = clientes.clientesActivos[vLN092].Client_VisibleSkin14;
          var v548 = clientes.clientesActivos[vLN092].Client_VisibleSkin15;
          var v549 = clientes.clientesActivos[vLN092].Client_VisibleSkin16;
          var v550 = clientes.clientesActivos[vLN092].Client_VisibleSkin17;
          var v551 = clientes.clientesActivos[vLN092].Client_VisibleSkin18;
          var v552 = clientes.clientesActivos[vLN092].Client_VisibleSkin19;
          var v553 = clientes.clientesActivos[vLN092].Client_VisibleSkin20;
          var v554 = clientes.clientesActivos[vLN092].Client_KeyAccecs;
          if (wormXyObjects.FB_UserID == 0) {} else if (wormXyObjects.FB_UserID == v532) {
            if (v554 == "XTPRIVATESKIN") {
              for (let vLN093 = 0; vLN093 < wormXyObjects.idSkin.length; vLN093++) {
                const v555 = wormXyObjects.idSkin[vLN093];
                if (v555.id == v533 || v555.id == v534 || v555.id == v535 || v555.id == v536 || v555.id == v537 || v555.id == v538 || v555.id == v539 || v555.id == v540 || v555.id == v541 || v555.id == v542 || v555.id == v543 || v555.id == v544 || v555.id == v545 || v555.id == v546 || v555.id == v547 || v555.id == v548 || v555.id == v549 || v555.id == v550 || v555.id == v551 || v555.id == v552 || v555.id == v553) {
                  v555.nonbuyable = false;
                }
              }
            } else {}
          } else {}
        }
      });
    }
    function f104() {
      wormXyObjects.adblock = true;
      $(".youid").css("display", "none");
      $("#mm-store").after(`
    <link href='https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css' rel='stylesheet'/>
    <div id="mm-store" style="float: right;position: relative;min-width: 95px;background:#ff0000" onclick="openPopup()">
        <i aria-hidden="true" class="fa fa-cog fa-spin" style="color:yellow;font-size: 23px;"></i> Tool
    </div>
    <div id="popup" class="popup">
        <div class="phdr1">
                </div>
        <div class="close-button" onclick="closePopup()"></div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
        <div class="layout">
            <div class="sidebar">
                <ul>
                    <li><div class="hii" style="background: none; border: none;" id="click-btn"><i class="fas fa-user"></i> Profile</div></li>
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
                        <i class="fas fa-info-circle"></i> Giới Thiệu
                    </li>
                </ul>
            </div>
            <div class="main-content">
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
                                <i class="fas fa-trophy yellow-icon"></i> 3 Top Score :
                            </span>
                            <input class="settings-switchZoom" id="settings-stremingmodebatop-switch" type="checkbox"/>
                            <label for="settings-stremingmodebatop-switch"></label>
                        </div>
                        <div class="settings-lineZoom">
                            <span class="settings-labelZoom">
                                <i class="fas fa-toggle-off yellow-icon"></i> Turn Off <img style="height: 18px;" src="https://i.imgur.com/cOrk9pM.png" alt="Turn on"/> :
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
                                <i class="fa fa-eye-slash"></i> Hide Map
                            </span>
                            <input class="settings-switchZoom" id="settings-stremingmodeanclock-switch" type="checkbox"/>
                            <label for="settings-stremingmodeanclock-switch"></label>
                        </div>
                    </div>
                    <div class="settings-row">
                        <div class="settings-lineZoom">
                            <span class="settings-labelZoom">
                                <i class="fas fa-toggle-off yellow-icon"></i> Off random skins :
                            </span>
                            <input class="settings-switchZoom" id="settings-stremingmodedangaunhien-switch" type="checkbox"/>
                            <label for="settings-stremingmodedangaunhien-switch"></label>
                        </div>
                        <div class="settings-lineZoom">
                            <span class="settings-labelZoom">
                                <i class="fa fa-eye-slash"></i> Updating... !
                            </span>
                            <input class="settings-switchZoom" id="settings-stremingmodeanclock-switch" type="checkbox"/>
                            <label for="settings-stremingmodeanclock-switch"></label>
                        </div>
                    </div>
                    <div class="spancursor"> Select Background</div>
                    <div class="background-container"></div>
                </div>
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
                <div id="chuot" class="content-section">
                    <div class="spancursor"> Select Cursor</div>
                    <div class="cursor-container">
                        <div id="default-cursor-btn">
                            <img src="https://i.imgur.com/lWpvpbL.png">
                        </div>
                    </div>
                </div>
                <div id="gioithieu" class="content-section">
                    <h2>ID</h2>
                          <input type="text" value="${wormXyObjects.FB_UserID}" id="wormate_id" readonly style="flex: 1; padding: 5px; border: 1px solid #00ccff; border-radius: 4px; background: #f0f8ff; font-family: monospace; font-size: 11px;" />
                          <button style="/* padding: 19px; */float: right;ma;margin-top: 0px;r;margin-right: 158px;e;/* line-height: 0; */-size: 18px;" onclick="navigator.clipboard.writeText('${wormXyObjects.FB_UserID}').then(()=&gt; alert('You ID ${wormXyObjects.FB_UserID} copiado! copied!'));">Copy</button>
                          </div>
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
        <\/script>
        <style>
            .yellow-icon {
                color: gold;
            }
            .layout {
                display: flex;
                width: 100%;
                height: 90%;
            }
            .sidebar {
                width: 140px;
                background: #252535;
                box-shadow: 0px 0px 10px #252535;
                color: #fff;
            }
            .sidebar ul {
                list-style-type: none;
                padding: 0;
                margin: 0;
            }
            .sidebar ul li {
                padding: 12px;
                cursor: pointer;
                border-bottom: 1px solid #ddd;
                width: 140px;
            }
            .sidebar ul li:hover {
                background-color: #666;
            }
            .sidebar ul li.selected {
                background-color: #000;
                color: white;
            }
            .main-content {
                flex-grow: 1;
                padding: 20px;
                background: #393e43;
                color: #fff;
            }
            .content-section {
                display: none;
                transition: display 0.3s ease-in-out;
            }
            #toolgame {
                display: block;
            }
            h2 {
                margin-top: 0;
            }
            .sidebar ul li:hover {
                background-color: #666;
            }
        </style>
    </div>
`);
      $("#loa831pibur0w4gv").replaceWith("\n              \n              <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" />\n              <div style=\"margin: 0;\" id=\"loa831pibur0w4gv\">\n              <div class=\"label\" id=\"titleSetings\">Notification</div>\n                \n                 <div class=\"bao-list1\">\n                <div class=\"list1\"><li>\n                 21/02/2025: Updated !</li>\n                </div>\n                <div class=\"list1\"><li>\n                 Uploading 18+ sex skins is prohibited. ID will be locked if violated. Thank you !</li>\n                </div>\n                <div class=\"list1\"><li>\n                 Vui lòng không tải lên skin sex 18+. Bị phát hiện sẽ bị khóa. Xin cảm ơn !</li>\n                </div>\n                \n                   <div class=\"list1\"><li> Instructions for installing on IOS and iPad New 2024: <a href=\"https://www.youtube.com/watch?v=uyHHXWKHgRw\">https://www.youtube.com/watch?v=uyHHXWKHgRw</a></li></div></div>\n              \n                   ");
      $("#mm-coins-box").replaceWith("<div style=\"margin: 0;\" id=\"mm-coins-box\">\n                \n                <button style='width: 140px;height: 45px;float: right;border-radius: 10px;border: solid #fac 2px;display:none' id='getskin'>Unlock Skins</button>\n                </div>\n                </div>");
      window.multiplier = 0.625;
      window.zoomLevel = 5;
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
        var v556 = Math.round(window.multiplier / 0.625 * 100);
        v556 = Math.min(100, v556);
        var v557 = document.getElementById("zoom-percentage");
        v557.textContent = v556 + "%";
      }
      document.getElementById("zoom-slider").addEventListener("input", function (p613) {
        const v558 = p613.target.value;
        const vV558 = v558;
        window.zoomLevel = Math.round(v558 / 10);
        window.multiplier = vV558 / 50 * 0.625;
        changedNf();
        f107();
      });
      window.onwheel = p614 => {
        p614.preventDefault();
        if (p614.deltaY < 0) {
          f105();
        } else {
          f106();
        }
      };
      $("#settings-stremingmode-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          wormXyObjects.ModeStremer = true;
          localStorage.setItem("ModeStremer", "true");
        } else {
          console.log("I'm not checked");
          wormXyObjects.ModeStremer = false;
          localStorage.setItem("ModeStremer", "false");
        }
      });
      $(document).ready(function () {
        var v560 = localStorage.getItem("ModeStremer");
        if (v560 === "true") {
          wormXyObjects.ModeStremer = true;
          $("#settings-stremingmode-switch").prop("checked", true);
        } else {
          wormXyObjects.ModeStremer = false;
          $("#settings-stremingmode-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodebatop-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          wormXyObjects.ModeStremerbatop = true;
          localStorage.setItem("ModeStremerbatop", "true");
        } else {
          console.log("I'm not checked");
          wormXyObjects.ModeStremerbatop = false;
          localStorage.setItem("ModeStremerbatop", "false");
        }
      });
      $(document).ready(function () {
        var v561 = localStorage.getItem("ModeStremerbatop");
        if (v561 === "true") {
          wormXyObjects.ModeStremerbatop = true;
          $("#settings-stremingmodebatop-switch").prop("checked", true);
        } else {
          wormXyObjects.ModeStremerbatop = false;
          $("#settings-stremingmodebatop-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodedangaunhien-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          wormXyObjects.ModeStremerdangaunhien = true;
          localStorage.setItem("ModeStremerdangaunhien", "true");
        } else {
          console.log("I'm not checked");
          wormXyObjects.ModeStremerdangaunhien = false;
          localStorage.setItem("ModeStremerdangaunhien", "false");
        }
      });
      $(document).ready(function () {
        var v562 = localStorage.getItem("ModeStremerdangaunhien");
        if (v562 === "true") {
          wormXyObjects.ModeStremerdangaunhien = true;
          $("#settings-stremingmodedangaunhien-switch").prop("checked", true);
        } else {
          wormXyObjects.ModeStremerdangaunhien = false;
          $("#settings-stremingmodedangaunhien-switch").prop("checked", false);
        }
      });
      $(document).ready(function () {
        var v563 = localStorage.getItem("ModeStremeranclock");
        if (v563 === "true") {
          wormXyObjects.ModeStremeranclock = true;
          $("#settings-stremingmodeanclock-switch").prop("checked", true);
        } else {
          wormXyObjects.ModeStremeranclock = false;
          $("#settings-stremingmodeanclock-switch").prop("checked", false);
        }
        if (wormXyObjects.ModeStremeranclock) {
          ctx.clockan.width = 100;
          ctx.clockan.height = 100;
          ctx.clockan.x = -50;
          ctx.clockan.y = -50;
        } else {
          ctx.clockan.width = 0;
          ctx.clockan.height = 0;
          ctx.clockan.x = -50;
          ctx.clockan.y = -50;
        }
      });
      $("#settings-stremingmodeanclock-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          wormXyObjects.ModeStremeranclock = true;
          localStorage.setItem("ModeStremeranclock", "true");
        } else {
          console.log("I'm not checked");
          wormXyObjects.ModeStremeranclock = false;
          localStorage.setItem("ModeStremeranclock", "false");
        }
        if (wormXyObjects.ModeStremeranclock) {
          ctx.clockan.width = 100;
          ctx.clockan.height = 100;
          ctx.clockan.x = -50;
          ctx.clockan.y = -50;
        } else {
          ctx.clockan.width = 0;
          ctx.clockan.height = 0;
          ctx.clockan.x = -50;
          ctx.clockan.y = -50;
        }
      });
      $("#settings-stremingmodemuiten-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          wormXyObjects.ModeStremermuiten = true;
          localStorage.setItem("ModeStremermuiten", "true");
        } else {
          console.log("I'm not checked");
          wormXyObjects.ModeStremermuiten = false;
          localStorage.setItem("ModeStremermuiten", "false");
        }
        $("#svhiep").click();
        setTimeout(function () {
          location.reload();
        }, 1000);
      });
      $(document).ready(function () {
        var v564 = localStorage.getItem("ModeStremermuiten");
        if (v564 === "true") {
          wormXyObjects.ModeStremermuiten = true;
          $("#settings-stremingmodemuiten-switch").prop("checked", true);
        } else {
          wormXyObjects.ModeStremermuiten = false;
          $("#settings-stremingmodemuiten-switch").prop("checked", false);
        }
      });
      $("#settings-arrowmobile-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          wormXyObjects.arrow = false;
        } else {
          console.log("I'm not checked");
          wormXyObjects.arrow = true;
        }
      });
      $("#PortionSize").on("input", function () {
        wormXyObjects.PortionSize = $(this).val();
        localStorage.PotenciadorSize = wormXyObjects.PortionSize;
      });
      $("#PortionAura").on("input", function () {
        wormXyObjects.PortionAura = $(this).val();
        localStorage.PotenciadorAura = wormXyObjects.PortionAura;
      });
      $("#smoothCamera").on("input", function () {
        wormXyObjects.smoothCamera = $(this).val();
        localStorage.smoothCamera = wormXyObjects.smoothCamera;
      });
      $("#FoodSize").on("input", function () {
        wormXyObjects.FoodSize = $(this).val();
        localStorage.ComidaSize = wormXyObjects.FoodSize;
      });
      $("#FoodShadow").on("input", function () {
        wormXyObjects.FoodShadow = $(this).val();
        localStorage.ComidaShadow = wormXyObjects.FoodShadow;
      });
      for (a = 0; a < vA14.length; a++) {
        var v569 = vA14[a].url;
        var v570 = vA14[a].nombre;
        let v571 = document.createElement("img");
        v571.src = v569;
        $(".cursor-container").prepend(v571);
        $(v571).attr("class", "cursor");
        $(v571).click(function () {
          let v572 = $(this).attr("src");
          localStorage.cursorSeleccionado = v572;
          $("#game-cont").css({
            cursor: "url(" + v572 + "), default"
          });
          $("#game-canvas").css({
            cursor: "url(" + v572 + "), default"
          });
          $("body").css({
            cursor: "url(" + v572 + "), default"
          });
        });
        $("#default-cursor-btn").click(function () {
          delete localStorage.cursorSeleccionado;
          $("#game-cont, #game-canvas, body").css("cursor", "default");
        });
      }
      $("#game-cont").css({
        cursor: "url(" + localStorage.cursorSeleccionado + "), default"
      });
      $("#game-canvas").css({
        cursor: "url(" + localStorage.cursorSeleccionado + "), default"
      });
      $("body").css({
        cursor: "url(" + localStorage.cursorSeleccionado + "), default"
      });
      for (a = 0; a < vA15.length; a++) {
        var v573 = vA15[a].url;
        var v574 = vA15[a].nombre;
        let v575 = document.createElement("img");
        v575.src = v573;
        $(".background-container").prepend(v575);
        $(v575).attr("class", "background");
        $(v575).attr("value", v574);
        $(v575).click(function () {
          let v576 = $(this).attr("src");
          let v577 = $(this).attr("value");
          backgroundIMG = v576;
          localStorage.fondoSeleccionado = backgroundIMG;
          alert("You selected the background: " + v577);
          vUndefined2.q.Cf = new vF._b(vUndefined2.q.fn_o(v576));
        });
      }
      $(".background-container").prepend("");
      vUndefined2.q.Cf = new vF._b(vUndefined2.q.fn_o(localStorage.fondoSeleccionado));
    }
    function f108() {
      $(".description-text").replaceWith("<div class=\"description-text\">");
      $(".description-text").prepend("<p id='title'>Wormate XY</p>");
      $("#title").after("<div id=\"idwormworld\" style=\"text-align: center\"><div class='logo'><img src='https://haylamday.com/images/hiep_img/logo.png'/></div>\n        <input type=\"text\" value=\"" + wormXyObjects.FB_UserID + "\" style=\"width: 230px;text-align: center;border-radius: 4px;font-size: 20px;padding: 0 6px;background-color: #fff;color: #806102;display: block;box-sizing: border-box;-webkit-appearance: none;outline: 0;border-width: 0;\">\n        <button onclick=\"navigator.clipboard.writeText('" + wormXyObjects.FB_UserID + "').then(()=> alert('You ID " + wormXyObjects.FB_UserID + " copiado! copied!'));\">COPY</button>\n    </div>\n<div></div>\n<div><input type=\"button\" value=\"ACTIVATE ALL\" target=\"_blank\" onclick=\"window.location.href='" + MYPAGE + "'\" style=\"margin-top: 5px; width: 100%\"></div>");
    }
    function f109() {
      localStorage.setItem("totalKills", wormXyObjects.totalKills);
      localStorage.setItem("totalHeadshots", wormXyObjects.totalHeadshots);
    }
    function f110() {
      wormXyObjects.totalKills = parseInt(localStorage.getItem("totalKills")) || 0;
      wormXyObjects.totalHeadshots = parseInt(localStorage.getItem("totalHeadshots")) || 0;
    }
    function f111(p615, p616) {
      let vF86 = function (p617, p618, p619, p620) {
        ctx.setCountGame(p617, p618, p619, p620);
      };
      f110();
      if (p615 === "count") {
        wormXyObjects.kill = (wormXyObjects.kill || 0) + (p616 ? 0 : 1);
        wormXyObjects.headshot = (wormXyObjects.headshot || 0) + (p616 ? 1 : 0);
        wormXyObjects.totalKills = wormXyObjects.totalKills + (p616 ? 0 : 1);
        wormXyObjects.totalHeadshots = wormXyObjects.totalHeadshots + (p616 ? 1 : 0);
        f109();
        vF86(wormXyObjects.kill, wormXyObjects.headshot, wormXyObjects.totalKills, wormXyObjects.totalHeadshots);
      }
      if (p615 === "open") {
        wormXyObjects.kill = 0;
        wormXyObjects.headshot = 0;
        $("#contadorKill_12").show();
        vF86(wormXyObjects.kill, wormXyObjects.headshot, wormXyObjects.totalKills, wormXyObjects.totalHeadshots);
      }
      if (p615 === "closed") {
        pwrups = {};
      }
      if (p615 === "cerrar") {
        wormXyObjects.kill = 0;
        wormXyObjects.headshot = 0;
        wormXyObjects.totalKills = 0;
        wormXyObjects.totalHeadshots = 0;
        f109();
      }
    }
    if (!Number.prototype.dotFormat) {
      Number.prototype.dotFormat = function () {
        return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      };
    }
    if (!Number.prototype.customFormat) {
      Number.prototype.customFormat = function () {
        if (this >= 1000000) {
          return (this / 1000000).toFixed(1) + "M🍰";
        } else if (this >= 100000) {
          return (this / 1000).toFixed(0) + "k🍰";
        } else {
          return this.dotFormat();
        }
      };
    }
    setTimeout(function () {
      var vA16 = ["fuck you", "địt", "cái lồn", "chó", "đéo", "lồn", "đéo", "địt", "vãi lồn", "cặc"];
      const v578 = document.getElementById("mm-params-nickname");
      const v579 = v578.value;
      const v580 = v579.indexOf("x");
      if (v580 !== -1) {
        const v581 = v579.substring(0, v580);
        v578.value = v581;
      }
      ;
      $("#mm-action-play").on("click", function () {
        var v582 = $("#mm-params-nickname").val();
        var v583 = vA16.some(function (p621) {
          return v582.toLowerCase().includes(p621.toLowerCase());
        });
        if (v583) {
          $("#mm-params-nickname").val("I Love Việt Nam");
        }
      });
      $(document).ready(function () {
        $("#getskin").click();
      });
      $("#final-share-fb").css("display", "none");
      $("#unl6wj4czdl84o9b").css("display", "none");
      $("#mm-action-guest").css("display", "none");
      $("#mm-menu-cont").css("display", "block");
      $("#mm-bottom-buttons").css("display", "block");
      $("#mm-player-info").css("display", "block");
      $("#relojHelp").css("position", "absolute");
      $("#relojHelp").css("top", "12px");
      $("#relojHelp").css("left", "5px");
      $("#delete-account-view").css("display", "none");
    }, 3000);
    var v_0x569a61 = function f112() {
      requestAnimationFrame(f112);
      f6().Pa();
    };
    v_0x569a61();
    function f113() {
      var v584 = v$105.width();
      var v585 = v$105.height();
      var v586 = v$106.outerWidth();
      var v587 = v$106.outerHeight();
      var v588 = v$107.outerHeight();
      var v589 = v$108.outerHeight();
      var v590 = Math.min(1, Math.min((v585 - v589 - v588) / v587, v584 / v586));
      var v591 = "translate(-50%, -50%) scale(" + v590 + ")";
      v$106.css({
        "-webkit-transform": v591,
        "-moz-transform": v591,
        "-ms-transform": v591,
        "-o-transform": v591,
        transform: v591
      });
      f6().Ra();
      window.scrollTo(0, 1);
    }
    var v$105 = $("body");
    var v$106 = $("#stretch-box");
    var v$107 = $("#markup-header");
    var v$108 = $("#markup-footer");
    f113();
    $(window).resize(f113);
  })();
  window.anApp.p.Bc = function () {
    var v592 = window.anApp.p;
    var vO12 = {};
    $.get("https://resources.wormate.io/dynamic/assets/registry.json", function (p622) {
      vO12 = p622;
      $.ajax({
        url: "https://ii7modysmp-hue.github.io/extension/api/skins.php",
        method: "GET",
        dataType: "json",
        success: function (p623) {
          wormXyObjects.visibleSkin = p623.visibleSkin;
          delete p623.visibleSkin;
          for (let v593 in p623) {
            if (v593 !== "propertyList") {
              if (Array.isArray(p623[v593])) {
                p622[v593] = p622[v593].concat(p623[v593]);
              } else {
                p622[v593] = {
                  ...p622[v593],
                  ...p623[v593]
                };
              }
            }
          }
          wormXyObjects.pL = p623.propertyList;
          wormXyObjects.idSkin = p623.skinArrayDict;
          v592.Cc(p622);
        },
        error: function (p624, p625, p626) {
          console.error(p626);
          v592.Cc(vO12);
        }
      });
    });
  };
  $("#background-canvas").replaceWith("<canvas id=\"background-canvas\">\n   </canvas>\n   ");
  $("#popup-login-gg").html("<div class=\"settings-line\" id=\"popup-login-gg1\">Login via Google</div>");
  $("#social-buttons").replaceWith("");
  $("#markup-footer").replaceWith("\n    \n \n\n<footer id=\"markup-footer\">\n            <div class=\"lang-menu\"><button class=\"lang-button\">Language ▴</button>\n            <div class=\"lang-list\"><a hreflang=\"en\" href=\"/\">English</a>\n<a hreflang=\"uk\" href=\"/uk/\">Українська</a>\n<a hreflang=\"de\" href=\"/de/\">Deutsch</a>\n<a hreflang=\"fr\" href=\"/fr/\">Français</a>\n<a hreflang=\"es\" href=\"/es/\">Español</a>\n</div></div>\n            \n            <a class=\"link\" hreflang=\"en\" href=\"https://VuongHiep.Com\">© 2025 Wormate XY</a>\n          <a style=\"font-size: 17px;font-weight: 500;color: #1200ff;\"> Made with <i class='fa fa-heart animated infinite pulse' style='color:red'></i> in Bà Rịa Vũng Tàu !</a>\n            </footer>\n\n        ");
});
if (!sessionStorage.getItem("visited")) {
  sessionStorage.setItem("visited", "true");
  location.reload(true);
}
function openPopup() {
  var v594 = document.getElementById("popup");
  var v595 = document.getElementById("overlay");
  v594.style.display = "block";
  v595.style.display = "block";
}
function closePopup() {
  var v596 = document.getElementById("popup");
  var v597 = document.getElementById("overlay");
  v596.style.display = "none";
  v597.style.display = "none";
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
getPresedKey = function (p627) {
  var vLS5 = "";
  if (p627.keyCode == 9) {
    vLS5 += "TAB";
  } else if (p627.keyCode == 13) {
    vLS5 += "ENTER";
  } else if (p627.keyCode == 16) {
    vLS5 += "SHIFT";
  } else {
    vLS5 += String.fromCharCode(p627.keyCode);
  }
  return vLS5;
};
getStringKey = function (p628) {
  var vLS6 = "";
  if (p628 == 9) {
    vLS6 += "TAB";
  } else if (p628 == 13) {
    vLS6 += "ENTER";
  } else if (p628 == 16) {
    vLS6 += "SHIFT";
  } else if (p628 == 32) {
    vLS6 += "SPACE";
  } else if (p628 == 27) {
    vLS6 += "ESC";
  } else {
    vLS6 += String.fromCharCode(p628);
  }
  return vLS6;
};
isValidHotkey = function (p629) {
  if (p629.keyCode >= 48 && p629.keyCode <= 57 || p629.keyCode >= 65 && p629.keyCode <= 90 || p629.keyCode == 9 || p629.keyCode == 13 || p629.keyCode == 16 || p629.keyCode == 32 || p629.keyCode == 27) {
    return true;
  } else {
    return false;
  }
};
 $(".mm-logo").attr("src", wormXyObjects.logo);
      $(".loading-logo").attr("src", wormXyObjects.logo);
      $(".mm-logo").attr("src", wormXyObjects.logo);
window.addEventListener("keydown", (zkey) => {
  const zkeysystem = zkey.key.toLocaleLowerCase();
  if (zkeysystem === "z" || zkeysystem === "ئ") {
    window.multiplier = 0.625;
    if (typeof window.changedNf === "function") {
      window.changedNf();
    } else {
      console.warn("changedNf not working")
    }
  }
})
document.addEventListener("keydown", function (p633) {
  if (p633.key === "F12") {
    p633.preventDefault();
  }
  if (p633.ctrlKey && p633.shiftKey && p633.key === "I") {
    p633.preventDefault();
  }
  if (p633.ctrlKey && p633.key === "U") {
    p633.preventDefault();
  }
});
document.addEventListener("contextmenu", function (p634) {
  p634.preventDefault();
});
(function () {
  var v603 = document.createElement("script");
  v603.textContent = "\n        (function() {\n            var preventDebugging = setInterval(function() {\n                if (window.console) {\n                    console.log = function() {}; \n                    console.debug = function() {}; \n                    console.error = function() {}; \n                    console.info = function() {};  \n                }\n            }, 1000);\n        })();\n    ";
  document.head.appendChild(v603);
})();
console.log("%cDeveloper By platen.iraqcraft.store , bmw.iraqcraft.store", "color: #0099ff; font-size: 18px; font-weight: bold;");
