// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"xMOE":[function(require,module,exports) {
module.exports = "./stay.83bee543.png";
},{}],"mEpo":[function(require,module,exports) {
module.exports = "./walk.d85e3b24.png";
},{}],"C18s":[function(require,module,exports) {
module.exports = "./dead.afb6108d.png";
},{}],"Wr6M":[function(require,module,exports) {
module.exports = "./robot.331f772c.png";
},{}],"Qntg":[function(require,module,exports) {
module.exports = "./stone.2ff7e249.png";
},{}],"KP9j":[function(require,module,exports) {
module.exports = "./stony-ground.acbbc003.png";
},{}],"EsJD":[function(require,module,exports) {
module.exports = "./basalt.4d5e1160.png";
},{}],"m5Mc":[function(require,module,exports) {
module.exports = "./deep-stone.2484d1ea.png";
},{}],"yhR6":[function(require,module,exports) {
module.exports = "./burnt-basalt.e556a07f.png";
},{}],"zgKj":[function(require,module,exports) {
module.exports = "./destrony.447daaed.png";
},{}],"pf9J":[function(require,module,exports) {
module.exports = "./manty.1308789e.png";
},{}],"bOsc":[function(require,module,exports) {
module.exports = "./fetus-stone.c0ad3ca7.png";
},{}],"k7Mm":[function(require,module,exports) {
module.exports = "./mushroom-stone.1e0e819c.png";
},{}],"y0PF":[function(require,module,exports) {
module.exports = "./cracked-stone.bdc7e15a.png";
},{}],"FU7E":[function(require,module,exports) {
module.exports = "./cidium.8f5094f6.png";
},{}],"Zvcg":[function(require,module,exports) {
module.exports = "./osmy.522ecac7.png";
},{}],"balx":[function(require,module,exports) {
module.exports = "./antin.f3461fe6.png";
},{}],"DTH9":[function(require,module,exports) {
module.exports = "./rady.cccaf8d0.png";
},{}],"jfHw":[function(require,module,exports) {
module.exports = "./nerius.94508fe9.png";
},{}],"DgoW":[function(require,module,exports) {
module.exports = "./raw-cidium.ee0ee85b.png";
},{}],"DJ58":[function(require,module,exports) {
module.exports = "./raw-grade-cidium.cf6253b5.png";
},{}],"mpJt":[function(require,module,exports) {
module.exports = "./raw-osmy.0f93e6fc.png";
},{}],"ZWGs":[function(require,module,exports) {
module.exports = "./raw-antin.289b1625.png";
},{}],"SrSE":[function(require,module,exports) {
module.exports = "./raw-rady.6464a5a4.png";
},{}],"ceSm":[function(require,module,exports) {
module.exports = "./raw-nerius.489775a7.png";
},{}],"h5i8":[function(require,module,exports) {
module.exports = "./raw-manty.8df5e986.png";
},{}],"y0Dq":[function(require,module,exports) {
module.exports = "./ready-cidium.40f281e7.png";
},{}],"PKyT":[function(require,module,exports) {
module.exports = "./battery.34b833d2.png";
},{}],"vK4S":[function(require,module,exports) {
module.exports = "./drill.4fe58980.png";
},{}],"rR8W":[function(require,module,exports) {
module.exports = "./box.533d24e7.png";
},{}],"z9wQ":[function(require,module,exports) {
module.exports = "./card.74a4e50d.png";
},{}],"waqs":[function(require,module,exports) {
module.exports = "./fetus-vine.8805c1bc.png";
},{}],"yylR":[function(require,module,exports) {
module.exports = "./mushroom.c358812c.png";
},{}],"EKNy":[function(require,module,exports) {
module.exports = "./infection.58223099.png";
},{}],"GvwK":[function(require,module,exports) {
module.exports = "./datura.626020b7.png";
},{}],"ObKq":[function(require,module,exports) {
module.exports = "./plants.c448d4c2.png";
},{}],"aveX":[function(require,module,exports) {
module.exports = "./stalactite.9838dbc0.png";
},{}],"qtzW":[function(require,module,exports) {
module.exports = "./datura-tongue.6ca7ad31.png";
},{}],"bcsP":[function(require,module,exports) {
module.exports = "./food-fetus.4a1a28b9.png";
},{}],"aLvf":[function(require,module,exports) {
module.exports = "./ground.40c4b239.png";
},{}],"Q6m3":[function(require,module,exports) {
module.exports = "./dome.a3a288e1.png";
},{}],"L1K5":[function(require,module,exports) {
module.exports = "./under-stone.4fd1f7fb.png";
},{}],"wYG8":[function(require,module,exports) {
module.exports = "./disputes.123ba673.png";
},{}],"G9tz":[function(require,module,exports) {
module.exports = "./gear-storage-1.cf529983.png";
},{}],"FBe0":[function(require,module,exports) {
module.exports = "./gear-recycler-1.76952c71.png";
},{}],"X9Py":[function(require,module,exports) {
module.exports = "./gear-oxygen-generator-1.922af5f2.png";
},{}],"j56s":[function(require,module,exports) {
module.exports = "./gear-storage-1-outline.21cb879d.png";
},{}],"fxXd":[function(require,module,exports) {
module.exports = "./gear-recycler-1-outline.8cabe033.png";
},{}],"EdKv":[function(require,module,exports) {
module.exports = "./gear-oxygen-generator-1-outline.65a00620.png";
},{}],"fkgg":[function(require,module,exports) {
module.exports = "./gear-documentation-1.35b8b26c.png";
},{}],"ro1N":[function(require,module,exports) {
module.exports = "./gear-documentation-1-outline.617027d5.png";
},{}],"y1NG":[function(require,module,exports) {
module.exports = "./interact.31e5b69d.png";
},{}],"rLvC":[function(require,module,exports) {
module.exports = "./close.e582d6b7.png";
},{}],"E7cs":[function(require,module,exports) {
module.exports = "./drop.03e03f4d.png";
},{}],"X2nc":[function(require,module,exports) {
module.exports = "./craft.b8e950a2.png";
},{}],"R1BN":[function(require,module,exports) {
module.exports = "./button.0edde46a.png";
},{}],"omch":[function(require,module,exports) {
module.exports = "./tools.bf5b649a.png";
},{}],"arpR":[function(require,module,exports) {
module.exports = "./bottle.6447cf72.png";
},{}],"nxFT":[function(require,module,exports) {
module.exports = "./damage.fda04f1c.png";
},{}],"L4Si":[function(require,module,exports) {
module.exports = "./level-up.5e70abd7.png";
},{}],"l1xg":[function(require,module,exports) {
module.exports = "./storage-ui.651d38c5.png";
},{}],"noxU":[function(require,module,exports) {
module.exports = "./recycler-ui.382575b8.png";
},{}],"rqZe":[function(require,module,exports) {
module.exports = "./description-ui.84d164ee.png";
},{}],"E3ma":[function(require,module,exports) {
module.exports = "./documentation-ui.90dc438b.png";
},{}],"dYrS":[function(require,module,exports) {
module.exports = "./oxygen-generator-ui.430972bf.png";
},{}],"hCOT":[function(require,module,exports) {
module.exports = "./health.5e97126d.png";
},{}],"tcYH":[function(require,module,exports) {
module.exports = "./basics.8252616e.png";
},{}],"YcEf":[function(require,module,exports) {
module.exports = "./menu.d1d970a2.png";
},{}],"N5Ep":[function(require,module,exports) {
module.exports = "./logo.453571b5.png";
},{}],"XLZT":[function(require,module,exports) {
module.exports = "./gps.e9ad5c2d.png";
},{}],"raSj":[function(require,module,exports) {
module.exports = "./item-robot.6f6dcffd.png";
},{}],"lynQ":[function(require,module,exports) {
module.exports = "./storage-level-up.d51436c6.png";
},{}],"pDaz":[function(require,module,exports) {
module.exports = "./home-icon.e40f7491.png";
},{}],"mhX9":[function(require,module,exports) {
module.exports = "./stone-hit.0ffe4d73.mp3";
},{}],"oGfi":[function(require,module,exports) {
module.exports = "./stone-break-1.1dc9d8bb.mp3";
},{}],"e16U":[function(require,module,exports) {
module.exports = "./stone-break-2.e64d0953.mp3";
},{}],"qXYu":[function(require,module,exports) {
module.exports = "./stone-break-3.b662a49d.mp3";
},{}],"ccHt":[function(require,module,exports) {
module.exports = "./fall-stone-break.d0cd3cd7.mp3";
},{}],"Fezn":[function(require,module,exports) {
module.exports = "./plant-break.c65e9751.mp3";
},{}],"Mdb7":[function(require,module,exports) {
module.exports = "./plant-hit.e0d075c4.mp3";
},{}],"wmq4":[function(require,module,exports) {
module.exports = "./wave.e276fd24.mp3";
},{}],"GkZp":[function(require,module,exports) {
module.exports = "./bonk.312a5d94.mp3";
},{}],"dGDn":[function(require,module,exports) {
module.exports = "./hit.185e7507.mp3";
},{}],"Js59":[function(require,module,exports) {
module.exports = "./1.c194776b.mp3";
},{}],"z5Ql":[function(require,module,exports) {
module.exports = "./2.edf8b100.mp3";
},{}],"Y3GC":[function(require,module,exports) {
module.exports = "./3.7a188545.mp3";
},{}],"m6nY":[function(require,module,exports) {
module.exports = "./storage.b5dfc3de.mp3";
},{}],"kTm5":[function(require,module,exports) {
module.exports = "./store.605eab52.mp3";
},{}],"STXI":[function(require,module,exports) {
module.exports = "./craft.a5e086cb.mp3";
},{}],"hhqH":[function(require,module,exports) {
module.exports = "./error.e3f940b9.mp3";
},{}],"WCli":[function(require,module,exports) {
module.exports = "./motor.1d058c72.mp3";
},{}],"hebx":[function(require,module,exports) {
module.exports = "./motor-start.15d335af.mp3";
},{}],"ibCN":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initAssets = initAssets;

var _stay = _interopRequireDefault(require("../../images/player/stay.png"));

var _walk = _interopRequireDefault(require("../../images/player/walk.png"));

var _dead = _interopRequireDefault(require("../../images/player/dead.png"));

var _robot = _interopRequireDefault(require("../../images/entities/robot.png"));

var _stone = _interopRequireDefault(require("../../images/ores/stone.png"));

var _stonyGround = _interopRequireDefault(require("../../images/ores/stony-ground.png"));

var _basalt = _interopRequireDefault(require("../../images/ores/basalt.png"));

var _deepStone = _interopRequireDefault(require("../../images/ores/deep-stone.png"));

var _burntBasalt = _interopRequireDefault(require("../../images/ores/burnt-basalt.png"));

var _destrony = _interopRequireDefault(require("../../images/ores/destrony.png"));

var _manty = _interopRequireDefault(require("../../images/ores/manty.png"));

var _fetusStone = _interopRequireDefault(require("../../images/ores/fetus-stone.png"));

var _mushroomStone = _interopRequireDefault(require("../../images/ores/mushroom-stone.png"));

var _crackedStone = _interopRequireDefault(require("../../images/ores/cracked-stone.png"));

var _cidium = _interopRequireDefault(require("../../images/ores/cidium.png"));

var _osmy = _interopRequireDefault(require("../../images/ores/osmy.png"));

var _antin = _interopRequireDefault(require("../../images/ores/antin.png"));

var _rady = _interopRequireDefault(require("../../images/ores/rady.png"));

var _nerius = _interopRequireDefault(require("../../images/ores/nerius.png"));

var _rawCidium = _interopRequireDefault(require("../../images/raw/raw-cidium.png"));

var _rawGradeCidium = _interopRequireDefault(require("../../images/raw/raw-grade-cidium.png"));

var _rawOsmy = _interopRequireDefault(require("../../images/raw/raw-osmy.png"));

var _rawAntin = _interopRequireDefault(require("../../images/raw/raw-antin.png"));

var _rawRady = _interopRequireDefault(require("../../images/raw/raw-rady.png"));

var _rawNerius = _interopRequireDefault(require("../../images/raw/raw-nerius.png"));

var _rawManty = _interopRequireDefault(require("../../images/raw/raw-manty.png"));

var _readyCidium = _interopRequireDefault(require("../../images/ready/ready-cidium.png"));

var _battery = _interopRequireDefault(require("../../images/items/battery.png"));

var _drill = _interopRequireDefault(require("../../images/items/drill.png"));

var _box = _interopRequireDefault(require("../../images/items/box.png"));

var _card = _interopRequireDefault(require("../../images/items/card.png"));

var _fetusVine = _interopRequireDefault(require("../../images/flora/fetus-vine.png"));

var _mushroom = _interopRequireDefault(require("../../images/flora/mushroom.png"));

var _infection = _interopRequireDefault(require("../../images/flora/infection.png"));

var _datura = _interopRequireDefault(require("../../images/flora/datura.png"));

var _plants = _interopRequireDefault(require("../../images/flora/plants.png"));

var _stalactite = _interopRequireDefault(require("../../images/flora/stalactite.png"));

var _daturaTongue = _interopRequireDefault(require("../../images/flora/datura-tongue.png"));

var _foodFetus = _interopRequireDefault(require("../../images/food/food-fetus.png"));

var _ground = _interopRequireDefault(require("../../images/environment/ground.png"));

var _dome = _interopRequireDefault(require("../../images/environment/dome.png"));

var _underStone = _interopRequireDefault(require("../../images/environment/under-stone.png"));

var _disputes = _interopRequireDefault(require("../../images/environment/disputes.png"));

var _gearStorage = _interopRequireDefault(require("../../images/gear/gear-storage-1.png"));

var _gearRecycler = _interopRequireDefault(require("../../images/gear/gear-recycler-1.png"));

var _gearOxygenGenerator = _interopRequireDefault(require("../../images/gear/gear-oxygen-generator-1.png"));

var _gearStorage1Outline = _interopRequireDefault(require("../../images/gear/gear-storage-1-outline.png"));

var _gearRecycler1Outline = _interopRequireDefault(require("../../images/gear/gear-recycler-1-outline.png"));

var _gearOxygenGenerator1Outline = _interopRequireDefault(require("../../images/gear/gear-oxygen-generator-1-outline.png"));

var _gearDocumentation = _interopRequireDefault(require("../../images/gear/gear-documentation-1.png"));

var _gearDocumentation1Outline = _interopRequireDefault(require("../../images/gear/gear-documentation-1-outline.png"));

var _interact = _interopRequireDefault(require("../../images/ui/interact.png"));

var _close = _interopRequireDefault(require("../../images/ui/close.png"));

var _drop = _interopRequireDefault(require("../../images/ui/drop.png"));

var _craft = _interopRequireDefault(require("../../images/ui/craft.png"));

var _button = _interopRequireDefault(require("../../images/ui/button.png"));

var _tools = _interopRequireDefault(require("../../images/ui/tools.png"));

var _bottle = _interopRequireDefault(require("../../images/ui/bottle.png"));

var _damage = _interopRequireDefault(require("../../images/ui/damage.png"));

var _levelUp = _interopRequireDefault(require("../../images/ui/level-up.png"));

var _storageUi = _interopRequireDefault(require("../../images/ui/storage-ui.png"));

var _recyclerUi = _interopRequireDefault(require("../../images/ui/recycler-ui.png"));

var _descriptionUi = _interopRequireDefault(require("../../images/ui/description-ui.png"));

var _documentationUi = _interopRequireDefault(require("../../images/ui/documentation-ui.png"));

var _oxygenGeneratorUi = _interopRequireDefault(require("../../images/ui/oxygen-generator-ui.png"));

var _health = _interopRequireDefault(require("../../images/ui/health.png"));

var _basics = _interopRequireDefault(require("../../images/ui/basics.png"));

var _menu = _interopRequireDefault(require("../../images/ui/menu.png"));

var _logo = _interopRequireDefault(require("../../images/ui/logo.png"));

var _gps = _interopRequireDefault(require("../../images/ui/gps.png"));

var _itemRobot = _interopRequireDefault(require("../../images/ui/item-robot.png"));

var _storageLevelUp = _interopRequireDefault(require("../../images/ui/storage-level-up.png"));

var _homeIcon = _interopRequireDefault(require("../../images/ui/home-icon.png"));

var _stoneHit = _interopRequireDefault(require("../../audio/stone-hit.mp3"));

var _stoneBreak = _interopRequireDefault(require("../../audio/stone-break/stone-break-1.mp3"));

var _stoneBreak2 = _interopRequireDefault(require("../../audio/stone-break/stone-break-2.mp3"));

var _stoneBreak3 = _interopRequireDefault(require("../../audio/stone-break/stone-break-3.mp3"));

var _fallStoneBreak = _interopRequireDefault(require("../../audio/stone-break/fall-stone-break.mp3"));

var _plantBreak = _interopRequireDefault(require("../../audio/plants/plant-break.mp3"));

var _plantHit = _interopRequireDefault(require("../../audio/plants/plant-hit.mp3"));

var _wave = _interopRequireDefault(require("../../audio/plants/wave.mp3"));

var _bonk = _interopRequireDefault(require("../../audio/bonk.mp3"));

var _hit = _interopRequireDefault(require("../../audio/hit/hit.mp3"));

var _ = _interopRequireDefault(require("../../audio/steps/1.mp3"));

var _2 = _interopRequireDefault(require("../../audio/steps/2.mp3"));

var _3 = _interopRequireDefault(require("../../audio/steps/3.mp3"));

var _storage = _interopRequireDefault(require("../../audio/gear/storage.mp3"));

var _store = _interopRequireDefault(require("../../audio/gear/store.mp3"));

var _craft2 = _interopRequireDefault(require("../../audio/gear/craft.mp3"));

var _error = _interopRequireDefault(require("../../audio/gear/error.mp3"));

var _motor = _interopRequireDefault(require("../../audio/robot/motor.mp3"));

var _motorStart = _interopRequireDefault(require("../../audio/robot/motor-start.mp3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// I can't setup declare module :(
// > Player
// @ts-ignore
// @ts-ignore
// @ts-ignore
// > Entities
// @ts-ignore
// > Stones
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// > Ores
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// > Raw
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// > Ready
// @ts-ignore
// > Items
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// > Plants
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// > Food
// @ts-ignore
// > Environment
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// > Gear
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// > UI
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// > Audio
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
function initAssets(game) {
  // > Player
  game.loadAsset("player-stay", [_stay.default]);
  game.loadAsset("player-walk", [_walk.default]);
  game.loadAsset("player-dead", [_dead.default]); // > Entities

  game.loadAsset("robot", [_robot.default]); // > Stones

  game.loadAsset("stone", [_stone.default]);
  game.loadAsset("stony-ground", [_stonyGround.default]);
  game.loadAsset("basalt", [_basalt.default]);
  game.loadAsset("deep-stone", [_deepStone.default]);
  game.loadAsset("burnt-basalt", [_burntBasalt.default]);
  game.loadAsset("destrony", [_destrony.default]);
  game.loadAsset("manty", [_manty.default]);
  game.loadAsset("fetus-stone", [_fetusStone.default]);
  game.loadAsset("mushroom-stone", [_mushroomStone.default]);
  game.loadAsset("cracked-stone", [_crackedStone.default]); // > Ores

  game.loadAsset("cidium", [_cidium.default]);
  game.loadAsset("osmy", [_osmy.default]);
  game.loadAsset("antin", [_antin.default]);
  game.loadAsset("rady", [_rady.default]);
  game.loadAsset("nerius", [_nerius.default]); // > Raws

  game.loadAsset("raw-cidium", [_rawCidium.default]);
  game.loadAsset("raw-grade-cidium", [_rawGradeCidium.default]);
  game.loadAsset("raw-osmy", [_rawOsmy.default]);
  game.loadAsset("raw-antin", [_rawAntin.default]);
  game.loadAsset("raw-rady", [_rawRady.default]);
  game.loadAsset("raw-nerius", [_rawNerius.default]);
  game.loadAsset("raw-manty", [_rawManty.default]); // > Ready

  game.loadAsset("ready-cidium", [_readyCidium.default]); // > Items

  game.loadAsset("battery", [_battery.default]);
  game.loadAsset("drill", [_drill.default]);
  game.loadAsset("box", [_box.default]);
  game.loadAsset("card", [_card.default]); // > Plants

  game.loadAsset("fetus-vine", [_fetusVine.default]);
  game.loadAsset("mushroom", [_mushroom.default]);
  game.loadAsset("datura", [_datura.default]);
  game.loadAsset("plants", [_plants.default]);
  game.loadAsset("datura-tongue", [_daturaTongue.default]);
  game.loadAsset("infection", [_infection.default]);
  game.loadAsset("stalactite", [_stalactite.default]); // > Food

  game.loadAsset("food-fetus", [_foodFetus.default]); // > Environment

  game.loadAsset("ground", [_ground.default]);
  game.loadAsset("dome", [_dome.default]);
  game.loadAsset("under-stone", [_underStone.default]);
  game.loadAsset("disputes", [_disputes.default]); // > Gear

  game.loadAsset("gear-storage-1", [_gearStorage.default]);
  game.loadAsset("gear-recycler-1", [_gearRecycler.default]);
  game.loadAsset("gear-oxygen-generator-1", [_gearOxygenGenerator.default]);
  game.loadAsset("gear-storage-1-outline", [_gearStorage1Outline.default]);
  game.loadAsset("gear-recycler-1-outline", [_gearRecycler1Outline.default]);
  game.loadAsset("gear-oxygen-generator-1-outline", [_gearOxygenGenerator1Outline.default]);
  game.loadAsset("gear-documentation-1", [_gearDocumentation.default]);
  game.loadAsset("gear-documentation-1-outline", [_gearDocumentation1Outline.default]); // > UI

  game.loadAsset("interact", [_interact.default]);
  game.loadAsset("close", [_close.default]);
  game.loadAsset("drop", [_drop.default]);
  game.loadAsset("craft", [_craft.default]);
  game.loadAsset("button", [_button.default]);
  game.loadAsset("tools", [_tools.default]);
  game.loadAsset("bottle", [_bottle.default]);
  game.loadAsset("damage", [_damage.default]);
  game.loadAsset("storage-ui", [_storageUi.default]);
  game.loadAsset("level-up", [_levelUp.default]);
  game.loadAsset("recycler-ui", [_recyclerUi.default]);
  game.loadAsset("description-ui", [_descriptionUi.default]);
  game.loadAsset("documentation-ui", [_documentationUi.default]);
  game.loadAsset("oxygen-generator-ui", [_oxygenGeneratorUi.default]);
  game.loadAsset("health", [_health.default]);
  game.loadAsset("basics", [_basics.default]);
  game.loadAsset("menu", [_menu.default]);
  game.loadAsset("logo", [_logo.default]);
  game.loadAsset("gps", [_gps.default]);
  game.loadAsset("item-robot", [_itemRobot.default]);
  game.loadAsset("recipe-storage-upgrade", [_storageLevelUp.default]);
  game.loadAsset("recipe-tools-upgrade", [_tools.default]);
  game.loadAsset("home-icon", [_homeIcon.default]); // > Audio

  game.loadAsset("stone-hit", _stoneHit.default, "audio");
  game.loadAsset("stone-break-1", _stoneBreak.default, "audio");
  game.loadAsset("stone-break-2", _stoneBreak2.default, "audio");
  game.loadAsset("stone-break-3", _stoneBreak3.default, "audio");
  game.loadAsset("fall-stone-break", _fallStoneBreak.default, "audio");
  game.loadAsset("plant-break", _plantBreak.default, "audio");
  game.loadAsset("plant-hit", _plantHit.default, "audio");
  game.loadAsset("wave", _wave.default, "audio");
  game.loadAsset("bonk", _bonk.default, "audio");
  game.loadAsset("hit", _hit.default, "audio");
  game.loadAsset("step-1", _.default, "audio");
  game.loadAsset("step-2", _2.default, "audio");
  game.loadAsset("step-3", _3.default, "audio");
  game.loadAsset("storage", _storage.default, "audio");
  game.loadAsset("error", _error.default, "audio");
  game.loadAsset("store", _store.default, "audio");
  game.loadAsset("crafting", _craft2.default, "audio");
  game.loadAsset("motor", _motor.default, "audio");
  game.loadAsset("motor-start", _motorStart.default, "audio");
}
},{"../../images/player/stay.png":"xMOE","../../images/player/walk.png":"mEpo","../../images/player/dead.png":"C18s","../../images/entities/robot.png":"Wr6M","../../images/ores/stone.png":"Qntg","../../images/ores/stony-ground.png":"KP9j","../../images/ores/basalt.png":"EsJD","../../images/ores/deep-stone.png":"m5Mc","../../images/ores/burnt-basalt.png":"yhR6","../../images/ores/destrony.png":"zgKj","../../images/ores/manty.png":"pf9J","../../images/ores/fetus-stone.png":"bOsc","../../images/ores/mushroom-stone.png":"k7Mm","../../images/ores/cracked-stone.png":"y0PF","../../images/ores/cidium.png":"FU7E","../../images/ores/osmy.png":"Zvcg","../../images/ores/antin.png":"balx","../../images/ores/rady.png":"DTH9","../../images/ores/nerius.png":"jfHw","../../images/raw/raw-cidium.png":"DgoW","../../images/raw/raw-grade-cidium.png":"DJ58","../../images/raw/raw-osmy.png":"mpJt","../../images/raw/raw-antin.png":"ZWGs","../../images/raw/raw-rady.png":"SrSE","../../images/raw/raw-nerius.png":"ceSm","../../images/raw/raw-manty.png":"h5i8","../../images/ready/ready-cidium.png":"y0Dq","../../images/items/battery.png":"PKyT","../../images/items/drill.png":"vK4S","../../images/items/box.png":"rR8W","../../images/items/card.png":"z9wQ","../../images/flora/fetus-vine.png":"waqs","../../images/flora/mushroom.png":"yylR","../../images/flora/infection.png":"EKNy","../../images/flora/datura.png":"GvwK","../../images/flora/plants.png":"ObKq","../../images/flora/stalactite.png":"aveX","../../images/flora/datura-tongue.png":"qtzW","../../images/food/food-fetus.png":"bcsP","../../images/environment/ground.png":"aLvf","../../images/environment/dome.png":"Q6m3","../../images/environment/under-stone.png":"L1K5","../../images/environment/disputes.png":"wYG8","../../images/gear/gear-storage-1.png":"G9tz","../../images/gear/gear-recycler-1.png":"FBe0","../../images/gear/gear-oxygen-generator-1.png":"X9Py","../../images/gear/gear-storage-1-outline.png":"j56s","../../images/gear/gear-recycler-1-outline.png":"fxXd","../../images/gear/gear-oxygen-generator-1-outline.png":"EdKv","../../images/gear/gear-documentation-1.png":"fkgg","../../images/gear/gear-documentation-1-outline.png":"ro1N","../../images/ui/interact.png":"y1NG","../../images/ui/close.png":"rLvC","../../images/ui/drop.png":"E7cs","../../images/ui/craft.png":"X2nc","../../images/ui/button.png":"R1BN","../../images/ui/tools.png":"omch","../../images/ui/bottle.png":"arpR","../../images/ui/damage.png":"nxFT","../../images/ui/level-up.png":"L4Si","../../images/ui/storage-ui.png":"l1xg","../../images/ui/recycler-ui.png":"noxU","../../images/ui/description-ui.png":"rqZe","../../images/ui/documentation-ui.png":"E3ma","../../images/ui/oxygen-generator-ui.png":"dYrS","../../images/ui/health.png":"hCOT","../../images/ui/basics.png":"tcYH","../../images/ui/menu.png":"YcEf","../../images/ui/logo.png":"N5Ep","../../images/ui/gps.png":"XLZT","../../images/ui/item-robot.png":"raSj","../../images/ui/storage-level-up.png":"lynQ","../../images/ui/home-icon.png":"pDaz","../../audio/stone-hit.mp3":"mhX9","../../audio/stone-break/stone-break-1.mp3":"oGfi","../../audio/stone-break/stone-break-2.mp3":"e16U","../../audio/stone-break/stone-break-3.mp3":"qXYu","../../audio/stone-break/fall-stone-break.mp3":"ccHt","../../audio/plants/plant-break.mp3":"Fezn","../../audio/plants/plant-hit.mp3":"Mdb7","../../audio/plants/wave.mp3":"wmq4","../../audio/bonk.mp3":"GkZp","../../audio/hit/hit.mp3":"dGDn","../../audio/steps/1.mp3":"Js59","../../audio/steps/2.mp3":"z5Ql","../../audio/steps/3.mp3":"Y3GC","../../audio/gear/storage.mp3":"m6nY","../../audio/gear/store.mp3":"kTm5","../../audio/gear/craft.mp3":"STXI","../../audio/gear/error.mp3":"hhqH","../../audio/robot/motor.mp3":"WCli","../../audio/robot/motor-start.mp3":"hebx"}],"FxBD":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VERSION = exports.OreSettings = exports.ItemSettings = exports.GeneratorConfig = exports.Config = exports.Color = void 0;
var VERSION = "1.2.1";
exports.VERSION = VERSION;
var Config;
exports.Config = Config;

(function (Config) {
  Config[Config["ALLOW_DARK"] = 1] = "ALLOW_DARK";
  Config[Config["IS_DEV"] = 0] = "IS_DEV";
  Config[Config["TEST_GEARS"] = 0] = "TEST_GEARS";
  Config[Config["ALLOW_HUNK"] = 0] = "ALLOW_HUNK"; // World size and chunks size in blocks

  Config[Config["WORLD_WIDTH"] = 140] = "WORLD_WIDTH";
  Config[Config["WORLD_HEIGHT"] = 320] = "WORLD_HEIGHT";
  Config[Config["CHUNK_SIZE"] = 4] = "CHUNK_SIZE";
  Config[Config["SPRITE_SCALE"] = 5] = "SPRITE_SCALE";
  Config[Config["SPRITE_PIXEL_SIZE"] = 16] = "SPRITE_PIXEL_SIZE";
  Config[Config["SPRITE_SIZE"] = 80] = "SPRITE_SIZE";
  Config[Config["PARTICLES_GRAVITY"] = 0.4] = "PARTICLES_GRAVITY";
  Config[Config["WORLD_X_CENTER"] = 5600] = "WORLD_X_CENTER";
  Config[Config["HOME_POSITION_X"] = Math.floor(Config.WORLD_X_CENTER)] = "HOME_POSITION_X";
  Config[Config["HOME_POSITION_Y"] = -120] = "HOME_POSITION_Y";
  Config[Config["OXYGEN_GENERATOR_BATTERY_DEFUSE_TICK"] = 400] = "OXYGEN_GENERATOR_BATTERY_DEFUSE_TICK";
  Config[Config["OXYGEN_GENERATOR_OXYGEN_DEFUSE_TICK"] = 250] = "OXYGEN_GENERATOR_OXYGEN_DEFUSE_TICK";
  Config[Config["VINE_GROW_TICK"] = Config.IS_DEV ? 100 : 220] = "VINE_GROW_TICK";
  Config[Config["VINE_GROW_CHANCE"] = Config.IS_DEV ? 60 : 12] = "VINE_GROW_CHANCE";
  Config[Config["VINE_MIN_LENGTH"] = 4] = "VINE_MIN_LENGTH";
  Config[Config["VINE_MAX_LENGTH"] = 8] = "VINE_MAX_LENGTH";
  Config[Config["MAX_STALACTITE_LENGTH"] = 4] = "MAX_STALACTITE_LENGTH";
  Config[Config["STALACTITE_GROW_TICK"] = 300] = "STALACTITE_GROW_TICK";
  Config[Config["STALACTITE_GROW_CHANCE"] = 10] = "STALACTITE_GROW_CHANCE";
  Config[Config["INFECTION_GROW_TICK"] = Config.IS_DEV ? 100 : 200] = "INFECTION_GROW_TICK";
  Config[Config["INFECTION_GROW_CHANCE"] = Config.IS_DEV ? 100 : 12] = "INFECTION_GROW_CHANCE";
  Config[Config["ROBOT_PICKUP_DISTANCE"] = 80] = "ROBOT_PICKUP_DISTANCE";
  Config[Config["ROBOT_DAMAGE"] = 4] = "ROBOT_DAMAGE";
  Config[Config["ROBOT_HIT_SPEED"] = 10] = "ROBOT_HIT_SPEED";
  Config[Config["ROBOT_ALLOW_PICKUP_DELAY"] = 20] = "ROBOT_ALLOW_PICKUP_DELAY";
  Config[Config["PICKUP_DISTANCE"] = 50] = "PICKUP_DISTANCE";
  Config[Config["WIRE_LENGTH"] = 60] = "WIRE_LENGTH";
  Config[Config["GEAR_INTERACT_DISTANCE"] = 85] = "GEAR_INTERACT_DISTANCE";
  Config[Config["DOME_DIAMETER"] = 480] = "DOME_DIAMETER";
  Config[Config["GROUND_HEIGHT"] = 160] = "GROUND_HEIGHT";
  Config[Config["OXYGEN_HUNGRY_TIME"] = Config.IS_DEV ? 4 : 60] = "OXYGEN_HUNGRY_TIME";
  Config[Config["GPS_MARKERS_DISTANCE"] = 400] = "GPS_MARKERS_DISTANCE";
  Config[Config["MAX_GPS_MARKERS"] = 20] = "MAX_GPS_MARKERS";
  Config[Config["ITEMS_LIVE_TIME"] = 800] = "ITEMS_LIVE_TIME";
  Config[Config["ORE_FALL_DELAY"] = 30] = "ORE_FALL_DELAY";
  Config[Config["DEFAULT_ANIMATION_SPEED"] = 8] = "DEFAULT_ANIMATION_SPEED";
  Config[Config["RESPAWN_TIME"] = Config.IS_DEV ? 4 : 12] = "RESPAWN_TIME";
})(Config || (exports.Config = Config = {}));

var GeneratorConfig;
exports.GeneratorConfig = GeneratorConfig;

(function (GeneratorConfig) {
  GeneratorConfig[GeneratorConfig["LAYERS_BLEND_HEIGHT"] = 10] = "LAYERS_BLEND_HEIGHT";
  GeneratorConfig[GeneratorConfig["DEEP_STONE_LAYER_HEIGHT"] = 70] = "DEEP_STONE_LAYER_HEIGHT";
  GeneratorConfig[GeneratorConfig["BASALT_LAYER_HEIGHT"] = 190] = "BASALT_LAYER_HEIGHT";
  GeneratorConfig[GeneratorConfig["BURNT_BASALT_LAYER_HEIGHT"] = 315] = "BURNT_BASALT_LAYER_HEIGHT";
})(GeneratorConfig || (exports.GeneratorConfig = GeneratorConfig = {}));

var Color;
exports.Color = Color;

(function (Color) {
  Color["STONE_LAYER_COLOR"] = "#090d23";
  Color["BASALT_LAYER_COLOR"] = "#1b1d27";
  Color["BURNT_BASALT_LAYER_COLOR"] = "#040508";
  Color["WHITE"] = "#fff";
  Color["BLACK"] = "#0f1531";
  Color["GREY"] = "#2c2f3d";
  Color["DARK_GREY"] = "#13151e";
  Color["YELLOW"] = "#fbc67e";
  Color["ORANGE"] = "#ff935c";
  Color["BLUE"] = "#b9c5ff";
  Color["RED"] = "#fb7e88";
  Color["GREEN"] = "#6aff81";
  Color["YELLOW_LIGHT"] = "#fde3bf";
  Color["BLUE_LIGHT"] = "#e0e6ff";
  Color["RED_LIGHT"] = "#f9cace";
  Color["GREEN_LIGHT"] = "#d4ffdb";
})(Color || (exports.Color = Color = {}));

var OreSettings = {
  "stone": {
    hp: 10
  },
  "stony-ground": {
    hp: 8
  },
  "antin": {
    hp: 52,
    tool: 3
  },
  "basalt": {
    hp: 40,
    tool: 3
  },
  "burnt-basalt": {
    hp: 80,
    tool: 4
  },
  "manty": {
    hp: 108,
    tool: 4
  },
  "cidium": {
    hp: 20
  },
  "cracked-stone": {
    hp: 6
  },
  "deep-stone": {
    hp: 26,
    tool: 2
  },
  "osmy": {
    hp: 36,
    tool: 2
  },
  "nerius": {
    hp: 32,
    tool: 2
  },
  "rady": {
    hp: 58,
    tool: 4
  },
  "root-stone": {
    hp: 14
  },
  "mushroom-stone": {
    hp: 32,
    tool: 3
  },
  "stalactite": {
    hp: 26,
    tool: 2
  }
};
exports.OreSettings = OreSettings;
var ItemSettings = {
  "raw-cidium": {
    lineColor: Color.YELLOW_LIGHT,
    storage: 1
  },
  "raw-grade-cidium": {
    lineColor: Color.YELLOW_LIGHT,
    storage: 1
  },
  "raw-osmy": {
    lineColor: Color.BLUE_LIGHT,
    storage: 1
  },
  "raw-antin": {
    lineColor: Color.RED_LIGHT,
    storage: 3
  },
  "raw-rady": {
    lineColor: Color.GREEN_LIGHT,
    storage: 3
  },
  "raw-nerius": {
    lineColor: Color.WHITE,
    storage: 2
  },
  "raw-manty": {
    lineColor: Color.RED_LIGHT,
    storage: 3
  }
};
exports.ItemSettings = ItemSettings;
},{}],"xNw6":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.perlin2 = perlin2;
exports.perlin3 = perlin3;
exports.seed = seed;
exports.simplex2 = simplex2;
exports.simplex3 = simplex3;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/*
 * >> Adaptive to typescript by Bogdanov :D
 * >> https://github.com/CloudBogdan
 *
 * A speed-improved perlin and simplex noise algorithms for 2D.
 *
 * Based on example code by Stefan Gustavson (stegu@itn.liu.se).
 * Optimisations by Peter Eastman (peastman@drizzle.stanford.edu).
 * Better rank ordering method by Stefan Gustavson in 2012.
 * Converted to Javascript by Joseph Gentle.
 *
 * Version 2012-03-09
 *
 * This code was placed in the public domain by its original author,
 * Stefan Gustavson. You may use it as you see fit, but
 * attribution is appreciated.
 *
 */
var Grad = /*#__PURE__*/function () {
  function Grad(x, y, z) {
    _classCallCheck(this, Grad);

    this.x = x;
    this.y = y;
    this.z = z;
  }

  _createClass(Grad, [{
    key: "dot2",
    value: function dot2(x, y) {
      return this.x * x + this.y * y;
    }
  }, {
    key: "dot3",
    value: function dot3(x, y, z) {
      return this.x * x + this.y * y + this.z * z;
    }
  }]);

  return Grad;
}(); // function Grad(x: number, y: number, z: number) {
//     this.x = x; this.y = y; this.z = z;
// }
// Grad.prototype.dot2 = function (x: number, y: number) {
//     return this.x * x + this.y * y;
// };
// Grad.prototype.dot3 = function (x: number, y: number, z: number) {
//     return this.x * x + this.y * y + this.z * z;
// };


var grad3 = [new Grad(1, 1, 0), new Grad(-1, 1, 0), new Grad(1, -1, 0), new Grad(-1, -1, 0), new Grad(1, 0, 1), new Grad(-1, 0, 1), new Grad(1, 0, -1), new Grad(-1, 0, -1), new Grad(0, 1, 1), new Grad(0, -1, 1), new Grad(0, 1, -1), new Grad(0, -1, -1)];
var p = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180]; // To remove the need for index wrapping, double the permutation table length

var perm = new Array(512);
var gradP = new Array(512); // This isn't a very good seeding function, but it works ok. It supports 2^16
// different seed values. Write something better if you need more seeds.

function seed(seed) {
  if (seed > 0 && seed < 1) {
    // Scale the seed out
    seed *= 65536;
  }

  seed = Math.floor(seed);

  if (seed < 256) {
    seed |= seed << 8;
  }

  for (var i = 0; i < 256; i++) {
    var v;

    if (i & 1) {
      v = p[i] ^ seed & 255;
    } else {
      v = p[i] ^ seed >> 8 & 255;
    }

    perm[i] = perm[i + 256] = v;
    gradP[i] = gradP[i + 256] = grad3[v % 12];
  }
}

;
seed(0);
/*
for(var i=0; i<256; i++) {
  perm[i] = perm[i + 256] = p[i];
  gradP[i] = gradP[i + 256] = grad3[perm[i] % 12];
}*/
// Skewing and unskewing factors for 2, 3, and 4 dimensions

var F2 = 0.5 * (Math.sqrt(3) - 1);
var G2 = (3 - Math.sqrt(3)) / 6;
var F3 = 1 / 3;
var G3 = 1 / 6; // 2D simplex noise

function simplex2(xin, yin) {
  var n0, n1, n2; // Noise contributions from the three corners
  // Skew the input space to determine which simplex cell we're in

  var s = (xin + yin) * F2; // Hairy factor for 2D

  var i = Math.floor(xin + s);
  var j = Math.floor(yin + s);
  var t = (i + j) * G2;
  var x0 = xin - i + t; // The x,y distances from the cell origin, unskewed.

  var y0 = yin - j + t; // For the 2D case, the simplex shape is an equilateral triangle.
  // Determine which simplex we are in.

  var i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords

  if (x0 > y0) {
    // lower triangle, XY order: (0,0)->(1,0)->(1,1)
    i1 = 1;
    j1 = 0;
  } else {
    // upper triangle, YX order: (0,0)->(0,1)->(1,1)
    i1 = 0;
    j1 = 1;
  } // A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
  // a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
  // c = (3-sqrt(3))/6


  var x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords

  var y1 = y0 - j1 + G2;
  var x2 = x0 - 1 + 2 * G2; // Offsets for last corner in (x,y) unskewed coords

  var y2 = y0 - 1 + 2 * G2; // Work out the hashed gradient indices of the three simplex corners

  i &= 255;
  j &= 255;
  var gi0 = gradP[i + perm[j]];
  var gi1 = gradP[i + i1 + perm[j + j1]];
  var gi2 = gradP[i + 1 + perm[j + 1]]; // Calculate the contribution from the three corners

  var t0 = 0.5 - x0 * x0 - y0 * y0;

  if (t0 < 0) {
    n0 = 0;
  } else {
    t0 *= t0;
    n0 = t0 * t0 * gi0.dot2(x0, y0); // (x,y) of grad3 used for 2D gradient
  }

  var t1 = 0.5 - x1 * x1 - y1 * y1;

  if (t1 < 0) {
    n1 = 0;
  } else {
    t1 *= t1;
    n1 = t1 * t1 * gi1.dot2(x1, y1);
  }

  var t2 = 0.5 - x2 * x2 - y2 * y2;

  if (t2 < 0) {
    n2 = 0;
  } else {
    t2 *= t2;
    n2 = t2 * t2 * gi2.dot2(x2, y2);
  } // Add contributions from each corner to get the final noise value.
  // The result is scaled to return values in the interval [-1,1].


  return 70 * (n0 + n1 + n2);
}

; // 3D simplex noise

function simplex3(xin, yin, zin) {
  var n0, n1, n2, n3; // Noise contributions from the four corners
  // Skew the input space to determine which simplex cell we're in

  var s = (xin + yin + zin) * F3; // Hairy factor for 2D

  var i = Math.floor(xin + s);
  var j = Math.floor(yin + s);
  var k = Math.floor(zin + s);
  var t = (i + j + k) * G3;
  var x0 = xin - i + t; // The x,y distances from the cell origin, unskewed.

  var y0 = yin - j + t;
  var z0 = zin - k + t; // For the 3D case, the simplex shape is a slightly irregular tetrahedron.
  // Determine which simplex we are in.

  var i1, j1, k1; // Offsets for second corner of simplex in (i,j,k) coords

  var i2, j2, k2; // Offsets for third corner of simplex in (i,j,k) coords

  if (x0 >= y0) {
    if (y0 >= z0) {
      i1 = 1;
      j1 = 0;
      k1 = 0;
      i2 = 1;
      j2 = 1;
      k2 = 0;
    } else if (x0 >= z0) {
      i1 = 1;
      j1 = 0;
      k1 = 0;
      i2 = 1;
      j2 = 0;
      k2 = 1;
    } else {
      i1 = 0;
      j1 = 0;
      k1 = 1;
      i2 = 1;
      j2 = 0;
      k2 = 1;
    }
  } else {
    if (y0 < z0) {
      i1 = 0;
      j1 = 0;
      k1 = 1;
      i2 = 0;
      j2 = 1;
      k2 = 1;
    } else if (x0 < z0) {
      i1 = 0;
      j1 = 1;
      k1 = 0;
      i2 = 0;
      j2 = 1;
      k2 = 1;
    } else {
      i1 = 0;
      j1 = 1;
      k1 = 0;
      i2 = 1;
      j2 = 1;
      k2 = 0;
    }
  } // A step of (1,0,0) in (i,j,k) means a step of (1-c,-c,-c) in (x,y,z),
  // a step of (0,1,0) in (i,j,k) means a step of (-c,1-c,-c) in (x,y,z), and
  // a step of (0,0,1) in (i,j,k) means a step of (-c,-c,1-c) in (x,y,z), where
  // c = 1/6.


  var x1 = x0 - i1 + G3; // Offsets for second corner

  var y1 = y0 - j1 + G3;
  var z1 = z0 - k1 + G3;
  var x2 = x0 - i2 + 2 * G3; // Offsets for third corner

  var y2 = y0 - j2 + 2 * G3;
  var z2 = z0 - k2 + 2 * G3;
  var x3 = x0 - 1 + 3 * G3; // Offsets for fourth corner

  var y3 = y0 - 1 + 3 * G3;
  var z3 = z0 - 1 + 3 * G3; // Work out the hashed gradient indices of the four simplex corners

  i &= 255;
  j &= 255;
  k &= 255;
  var gi0 = gradP[i + perm[j + perm[k]]];
  var gi1 = gradP[i + i1 + perm[j + j1 + perm[k + k1]]];
  var gi2 = gradP[i + i2 + perm[j + j2 + perm[k + k2]]];
  var gi3 = gradP[i + 1 + perm[j + 1 + perm[k + 1]]]; // Calculate the contribution from the four corners

  var t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;

  if (t0 < 0) {
    n0 = 0;
  } else {
    t0 *= t0;
    n0 = t0 * t0 * gi0.dot3(x0, y0, z0); // (x,y) of grad3 used for 2D gradient
  }

  var t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;

  if (t1 < 0) {
    n1 = 0;
  } else {
    t1 *= t1;
    n1 = t1 * t1 * gi1.dot3(x1, y1, z1);
  }

  var t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;

  if (t2 < 0) {
    n2 = 0;
  } else {
    t2 *= t2;
    n2 = t2 * t2 * gi2.dot3(x2, y2, z2);
  }

  var t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;

  if (t3 < 0) {
    n3 = 0;
  } else {
    t3 *= t3;
    n3 = t3 * t3 * gi3.dot3(x3, y3, z3);
  } // Add contributions from each corner to get the final noise value.
  // The result is scaled to return values in the interval [-1,1].


  return 32 * (n0 + n1 + n2 + n3);
}

; // ##### Perlin noise stuff

function fade(t) {
  return t * t * t * (t * (t * 6 - 15) + 10);
}

function lerp(a, b, t) {
  return (1 - t) * a + t * b;
} // 2D Perlin Noise


function perlin2(x, y) {
  // Find unit grid cell containing point
  var X = Math.floor(x),
      Y = Math.floor(y); // Get relative xy coordinates of point within that cell

  x = x - X;
  y = y - Y; // Wrap the integer cells at 255 (smaller integer period can be introduced here)

  X = X & 255;
  Y = Y & 255; // Calculate noise contributions from each of the four corners

  var n00 = gradP[X + perm[Y]].dot2(x, y);
  var n01 = gradP[X + perm[Y + 1]].dot2(x, y - 1);
  var n10 = gradP[X + 1 + perm[Y]].dot2(x - 1, y);
  var n11 = gradP[X + 1 + perm[Y + 1]].dot2(x - 1, y - 1); // Compute the fade curve value for x

  var u = fade(x); // Interpolate the four results

  return lerp(lerp(n00, n10, u), lerp(n01, n11, u), fade(y));
}

; // 3D Perlin Noise

function perlin3(x, y, z) {
  // Find unit grid cell containing point
  var X = Math.floor(x),
      Y = Math.floor(y),
      Z = Math.floor(z); // Get relative xyz coordinates of point within that cell

  x = x - X;
  y = y - Y;
  z = z - Z; // Wrap the integer cells at 255 (smaller integer period can be introduced here)

  X = X & 255;
  Y = Y & 255;
  Z = Z & 255; // Calculate noise contributions from each of the eight corners

  var n000 = gradP[X + perm[Y + perm[Z]]].dot3(x, y, z);
  var n001 = gradP[X + perm[Y + perm[Z + 1]]].dot3(x, y, z - 1);
  var n010 = gradP[X + perm[Y + 1 + perm[Z]]].dot3(x, y - 1, z);
  var n011 = gradP[X + perm[Y + 1 + perm[Z + 1]]].dot3(x, y - 1, z - 1);
  var n100 = gradP[X + 1 + perm[Y + perm[Z]]].dot3(x - 1, y, z);
  var n101 = gradP[X + 1 + perm[Y + perm[Z + 1]]].dot3(x - 1, y, z - 1);
  var n110 = gradP[X + 1 + perm[Y + 1 + perm[Z]]].dot3(x - 1, y - 1, z);
  var n111 = gradP[X + 1 + perm[Y + 1 + perm[Z + 1]]].dot3(x - 1, y - 1, z - 1); // Compute the fade curve value for x, y, z

  var u = fade(x);
  var v = fade(y);
  var w = fade(z); // Interpolate

  return lerp(lerp(lerp(n000, n100, u), lerp(n001, n101, u), w), lerp(lerp(n010, n110, u), lerp(n011, n111, u), w), v);
}

;
},{}],"NgPq":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Vector2 = void 0;
exports.asAudio = asAudio;
exports.asImage = asImage;
exports.assetIsValid = assetIsValid;
exports.buildName = buildName;
exports.chance = chance;
exports.clamp = _clamp;
exports.compareNames = compareNames;
exports.inChunkIdToPosition = inChunkIdToPosition;
exports.inRange = inRange;
exports.lerp = lerp;
exports.random = random;
exports.randomInt = randomInt;
exports.randomNoise = randomNoise;
exports.safeSlot = safeSlot;
exports.safeValue = safeValue;
exports.standardName = standardName;
exports.wrapText = wrapText;

var _config = require("../../config");

var _noise = require("./noise");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Vector2 = /*#__PURE__*/function () {
  function Vector2(x, y) {
    _classCallCheck(this, Vector2);

    this.x = x || 0;
    this.y = y || 0;
  }

  _createClass(Vector2, [{
    key: "set",
    value: function set(x, y) {
      this.x = x || 0;
      this.y = y || 0;
      return this;
    }
  }, {
    key: "copy",
    value: function copy(vec) {
      this.x = vec.x;
      this.y = vec.y;
      return this;
    }
  }, {
    key: "normalize",
    value: function normalize() {
      var v = new Vector2(this.x, this.y);
      var a = Math.sqrt(Math.pow(v.x, 2) + Math.pow(v.y, 2));
      v.x /= a || 1;
      v.y /= a || 1;
      return v;
    }
  }, {
    key: "distance",
    value: function distance(vec) {
      return Math.sqrt(Math.pow(this.x - vec.x, 2) + Math.pow(this.y - vec.y, 2));
    }
  }, {
    key: "expand",
    value: function expand() {
      return new Vector2(this.x, this.y);
    }
  }, {
    key: "apply",
    value: function apply(func) {
      return new Vector2(func(this.x), func(this.y));
    }
  }, {
    key: "add",
    value: function add(vec) {
      return new Vector2(this.x + vec.x, this.y + vec.y);
    }
  }, {
    key: "sub",
    value: function sub(vec) {
      return new Vector2(this.x - vec.x, this.y - vec.y);
    }
  }, {
    key: "mul",
    value: function mul(value) {
      return new Vector2(this.x * value, this.y * value);
    }
  }, {
    key: "div",
    value: function div(value) {
      return new Vector2(this.x / value, this.y / value);
    }
  }, {
    key: "lerp",
    value: function lerp(to, time) {
      this.x = this.x + (to.x - this.x) * time;
      this.y = this.y + (to.y - this.y) * time;
      return this;
    }
  }, {
    key: "angle",
    value: function angle() {
      if (this.x > 0 && this.y > 0) return Math.PI / 2 - Math.atan(this.x / this.y);
      if (this.x < 0 && this.y > 0) return Math.PI / 2 - Math.atan(this.x / this.y);
      if (this.x < 0 && this.y < 0) return Math.PI + Math.atan(this.y / this.x);
      if (this.x > 0 && this.y < 0) return Math.PI * 3 / 2 + Math.abs(Math.atan(this.x / this.y));
      return 0;
    }
  }, {
    key: "clamp",
    value: function clamp(xMin, xMax, yMin, yMax) {
      return new Vector2(_clamp(this.x, xMin, xMax), _clamp(this.y, yMin, yMax));
    }
  }], [{
    key: "add",
    value: function add(vec1, vec2) {
      return new Vector2(vec1.x + vec2.x, vec1.y + vec2.y);
    }
  }, {
    key: "sub",
    value: function sub(vec1, vec2) {
      return new Vector2(vec1.x - vec2.x, vec1.y - vec2.y);
    }
  }, {
    key: "zero",
    value: function zero() {
      return new Vector2();
    }
  }, {
    key: "all",
    value: function all(value) {
      return new Vector2(value || 1, value || 1);
    }
  }, {
    key: "compare",
    value: function compare(vec1, vec2) {
      return vec1.x == vec2.x && vec1.y == vec2.y;
    }
  }]);

  return Vector2;
}();

exports.Vector2 = Vector2;

function assetIsValid(asset, type) {
  return asset != null && asset.type != null && asset.type == type;
}

function safeValue(value, safe) {
  return value === undefined || value === null ? safe : value;
}

function safeSlot(slot) {
  return safeValue(slot, {
    count: 0
  });
}

function asImage(asset) {
  if (!asset) return;
  if (assetIsValid(asset, "image")) return asset.element[0];
}

function asAudio(asset) {
  if (!asset) return;
  if (assetIsValid(asset, "audio")) return asset.element;
}

function standardName(name) {
  return name.trim().split(" ").join("-").toLocaleLowerCase();
}

function compareNames(name1, name2) {
  return standardName(name1) == standardName(name2);
}

function buildName() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return [].concat(args).join(" ");
}

function wrapText(text, maxLength) {
  var result = "";
  var wrapCount = 0;

  for (var i = 0; i < text.length; i++) {
    var letter = text[i];

    if (i - 1 > 0 && (i - 1) % maxLength == 0) {
      if (text[i] != " ") result += "-\n";else result += "\n";
      wrapCount++;
      letter = text[i].trim();
    }

    result += letter;
  }

  return {
    text: result,
    wrapCount: wrapCount
  };
}

function inChunkIdToPosition(inChunkId) {
  var size = _config.Config.SPRITE_SIZE;
  var inChunkPos = inChunkId.split("-").map(function (p) {
    return +p;
  });
  return new Vector2((inChunkPos[0] + inChunkPos[2] * _config.Config.CHUNK_SIZE) * size, (inChunkPos[1] + inChunkPos[3] * _config.Config.CHUNK_SIZE) * size);
}

function lerp(from, to, time) {
  return from + (to - from) * time;
}

function random(from, to) {
  return Math.random() * (to - from) + from;
}

function randomInt(from, to) {
  return Math.floor(Math.random() * (to + 1 - from) + from);
}

function randomNoise(depends, from, to) {
  return ((0, _noise.simplex2)(depends / 4, depends / 4) + 1) / 2 * (to - from) + from;
}

function chance(percent) {
  return randomInt(0, 100) <= percent;
}

function _clamp(value, min, max) {
  if (value < min) return min;else if (value > max) return max;else return value;
}

function inRange(value, from, to) {
  return value >= from && value <= to;
}
},{"../../config":"FxBD","./noise":"xNw6"}],"heGh":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Asset = void 0;

var _math = require("./utils/math");

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Asset = /*#__PURE__*/_createClass( // element: PIXI.Texture | HTMLAudioElement | PIXI.Texture[]
function Asset(name, src, type) {
  _classCallCheck(this, Asset);

  this.name = (0, _math.standardName)(name);
  this.src = src;
  this.type = type || "image";
  this.element = [];

  if (this.type == "image") {
    this.element = this.src.map(function (s) {
      var i = new Image();
      i.src = s;
      return i;
    });
  } else if (type == "audio") {
    this.element = new Audio(this.src);
  }
});

exports.Asset = Asset;
},{"./utils/math":"NgPq"}],"XTEA":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Physics = exports.Collider = void 0;

var _config = require("../config");

var _math = require("./utils/math");

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Collider = /*#__PURE__*/_createClass(function Collider(parent) {
  _classCallCheck(this, Collider);

  this.type = "dynamic";
  this.width = _config.Config.SPRITE_PIXEL_SIZE * _config.Config.SPRITE_SCALE;
  this.height = _config.Config.SPRITE_PIXEL_SIZE * _config.Config.SPRITE_SCALE;
  this.offset = new _math.Vector2();
  this.collidable = true;
  this.collidesWith = null;
  this.parent = parent;
});

exports.Collider = Collider;

var Physics = /*#__PURE__*/function () {
  function Physics(game) {
    _classCallCheck(this, Physics);

    this.game = game;
  }
  /**
   * **Do not forgot for ".any" !**
   */


  _createClass(Physics, [{
    key: "collideWithRect",
    value: function collideWithRect(rect1, rect2) {
      var pos1 = rect1.position,
          pos2 = rect2.position;
      var w1 = rect1.width / 2,
          w2 = rect2.width / 2;
      var h1 = rect1.height / 2,
          h2 = rect2.height / 2;
      var valid = rect1.id != rect2.id;
      var horizontal = pos1.x + w1 > pos2.x - w2 && // Right
      pos1.x - w1 < pos2.x + w2 // Left
      && valid;
      var vertical = pos1.y + h1 > pos2.y - h2 && // Bottom
      pos1.y - h2 < pos2.y + h2 // Top
      && valid;
      var locationX = Math.abs(pos1.x - pos2.x);
      var locationY = Math.abs(pos1.y - pos2.y); // Right

      var right = pos1.x + w1 > pos2.x - w2 && pos2.x > pos1.x && vertical && locationX > locationY; // Left

      var left = pos1.x - w1 < pos2.x + w2 && pos1.x > pos2.x && vertical && locationX > locationY; // Top

      var top = pos1.y - h1 < pos2.y + h2 && pos1.y > pos2.y && horizontal && locationY > locationX; // Bottom

      var bottom = pos1.y + h1 > pos2.y - h2 && pos2.y > pos1.y && horizontal && locationY > locationX;
      var any = right || left || top || bottom;
      return {
        id: (rect2 === null || rect2 === void 0 ? void 0 : rect2.id) || null,
        any: any,
        right: right,
        left: left,
        top: top,
        bottom: bottom
      };
    }
    /**
     * **Do not forgot for ".any" !**
     */

  }, {
    key: "collide",
    value: function collide(point1, point2) {
      var pos1 = _math.Vector2.add(point1.position, point1.collider.offset).add(point1.velocity),
          pos2 = _math.Vector2.add(point2.position, point2.collider.offset).add(point2.velocity);

      var w1 = point1.collider.width,
          w2 = point2.collider.width;
      var h1 = point1.collider.height,
          h2 = point2.collider.height;
      return this.collideWithRect({
        id: point1.id,
        position: pos1,
        width: w1,
        height: h1
      }, {
        id: point2.id,
        position: pos2,
        width: w2,
        height: h2
      });
    }
  }, {
    key: "update",
    value: function update() {
      var _this = this;

      var children = this.game.children.filter(function (child) {
        return child.collider.type != "none" && child.collider.collidable;
      });
      children.filter(function (child) {
        return child.collider.type == "solid";
      }).map(function (solidChild) {
        children.filter(function (child) {
          return child.collider.type == "dynamic";
        }).map(function (dynamicChild) {
          _this.collideWith(dynamicChild, solidChild);
        });
      });
    }
  }, {
    key: "collideWith",
    value: function collideWith(dynamicCollider, solidCollider) {
      if (!dynamicCollider.collider.collidable || !solidCollider.collider.collidable) return;
      var collide = this.collide(dynamicCollider, solidCollider);
      var col1 = dynamicCollider.collider;
      var col2 = solidCollider.collider; // Right

      if (collide.right && dynamicCollider.velocity.x > 0) {
        dynamicCollider.position.x = solidCollider.position.x - col2.width / 2 - col1.width / 2 + 1 + col2.offset.x - col1.offset.x;
        dynamicCollider.velocity.x = 0;
      } // Left


      if (collide.left && dynamicCollider.velocity.x < 0) {
        dynamicCollider.position.x = solidCollider.position.x + col2.width / 2 + col1.width / 2 - 1 + col2.offset.x - col1.offset.x;
        dynamicCollider.velocity.x = 0;
      } // Top


      if (collide.top && dynamicCollider.velocity.y < 0) {
        dynamicCollider.position.y = solidCollider.position.y + col2.height / 2 + col1.height / 2 - 1 + col2.offset.y - col1.offset.y;
        dynamicCollider.velocity.y = 0;
      } // Bottom


      if (collide.bottom && dynamicCollider.velocity.y > 0) {
        dynamicCollider.position.y = solidCollider.position.y - col2.height / 2 - col1.height / 2 + 1 + col2.offset.y - col1.offset.y;
        dynamicCollider.velocity.y = 0;
      }

      if (collide.any) {
        dynamicCollider.collider.collidesWith = Object.assign({}, collide);
      }
    }
  }]);

  return Physics;
}();

exports.Physics = Physics;
},{"../config":"FxBD","./utils/math":"NgPq"}],"kmMG":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Point = void 0;

var _Physics = require("../Physics");

var _math = require("../utils/math");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var __id = 0;

var Point = /*#__PURE__*/function () {
  function Point(name, props) {
    _classCallCheck(this, Point);

    this.id = "".concat(name, "-").concat(__id++);
    this.type = "point";
    this.name = (0, _math.standardName)(name);
    this.group = (props === null || props === void 0 ? void 0 : props.group) ? (0, _math.standardName)(props.group) : "";
    this.inited = false;
    this.layer = (props === null || props === void 0 ? void 0 : props.layer) || "game";
    this.position = (props === null || props === void 0 ? void 0 : props.position) || _math.Vector2.zero();
    this.velocity = _math.Vector2.zero();
    this.acceleration = _math.Vector2.all();
    this.rotation = (props === null || props === void 0 ? void 0 : props.rotation) || 0;
    this.scale = (props === null || props === void 0 ? void 0 : props.scale) || _math.Vector2.all();
    this.visible = (0, _math.safeValue)(props === null || props === void 0 ? void 0 : props.visible, true);
    this.collider = new _Physics.Collider(this);
    this.collider.type = (props === null || props === void 0 ? void 0 : props.colliderType) || "dynamic";
  }

  _createClass(Point, [{
    key: "init",
    value: function init() {
      this.inited = true;
    }
  }, {
    key: "update",
    value: function update() {
      this.velocity.x *= this.acceleration.x;
      this.velocity.y *= this.acceleration.y;
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
    }
  }, {
    key: "render",
    value: function render() {}
  }, {
    key: "destroy",
    value: function destroy() {}
  }]);

  return Point;
}();

exports.Point = Point;
},{"../Physics":"XTEA","../utils/math":"NgPq"}],"SuzK":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sprite = void 0;

var _Point2 = require("./Point");

var _math = require("../utils/math");

var _config = require("../../config");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Sprite = /*#__PURE__*/function (_Point) {
  _inherits(Sprite, _Point);

  var _super = _createSuper(Sprite);

  function Sprite(name, assetName, props) {
    var _this;

    _classCallCheck(this, Sprite);

    _this = _super.call(this, name, props);
    _this.type = "sprite";
    _this.width = (props === null || props === void 0 ? void 0 : props.width) || 1;
    _this.height = (props === null || props === void 0 ? void 0 : props.height) || 1;
    _this.offset = _math.Vector2.zero();
    _this.flip = (props === null || props === void 0 ? void 0 : props.flip) || {
      x: false,
      y: false
    };
    _this.repeat = (props === null || props === void 0 ? void 0 : props.repeat) || _math.Vector2.all();
    _this.opacity = 1;
    _this.frame = (props === null || props === void 0 ? void 0 : props.frame) || _math.Vector2.zero();
    _this.assetName = assetName;
    _this.texture = null;
    return _this;
  }

  _createClass(Sprite, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(Sprite.prototype), "init", this).call(this);

      this.updateAsset();
    }
  }, {
    key: "updateAsset",
    value: function updateAsset() {
      this.texture = (0, _math.asImage)(this.game.getAssetByName(this.assetName));
    }
  }, {
    key: "update",
    value: function update() {
      _get(_getPrototypeOf(Sprite.prototype), "update", this).call(this);
    }
  }, {
    key: "render",
    value: function render() {
      _get(_getPrototypeOf(Sprite.prototype), "render", this).call(this);

      if (!this.texture || !this.visible) return;
      this.game.renderer.drawSprite(Object.assign(Object.assign({}, this), {
        texture: this.texture
      }));
    }
  }, {
    key: "blink",
    value: function blink() {
      if (this.game.tick(5)) this.visible = !this.visible;
    }
  }, {
    key: "playAnimation",
    value: function playAnimation(assetName, framesCount, speed, loop, reversed) {
      this.texture = (0, _math.asImage)(this.game.getAssetByName(assetName));

      if (framesCount <= 1) {
        this.frame.x = 0;
        return;
      }

      var tick = speed || _config.Config.DEFAULT_ANIMATION_SPEED;

      if (this.game.tick(tick)) {
        this.frame.x += reversed ? -1 : 1;
        if (this.frame.x < 0) this.frame.x = framesCount;
        if (this.frame.x >= framesCount && (0, _math.safeValue)(loop, true)) this.frame.x = 0;
        this.frame.x = (0, _math.clamp)(this.frame.x, 0, framesCount);
      }
    }
  }]);

  return Sprite;
}(_Point2.Point);

exports.Sprite = Sprite;
},{"./Point":"kmMG","../utils/math":"NgPq","../../config":"FxBD"}],"Pspv":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = void 0;

var _Sprite = require("./Sprite");

var _Point = require("./Point");

var _math = require("../utils/math");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Container = /*#__PURE__*/function () {
  function Container() {
    _classCallCheck(this, Container);

    this.children = [];
  }

  _createClass(Container, [{
    key: "createPoint",
    value: function createPoint(name, props) {
      return this.add(new _Point.Point(name, props));
    }
  }, {
    key: "createSprite",
    value: function createSprite(name, assetName, props) {
      return this.add(new _Sprite.Sprite(name, assetName, props));
    }
  }, {
    key: "getChildrenByName",
    value: function getChildrenByName(name) {
      return this.children.filter(function (child) {
        return child.name.indexOf(name.toLowerCase()) >= 0;
      });
    }
  }, {
    key: "getChildrenByGroupName",
    value: function getChildrenByGroupName(groupName) {
      return this.children.filter(function (child) {
        return child.group.indexOf(groupName.toLowerCase()) >= 0;
      });
    }
  }, {
    key: "getChildById",
    value: function getChildById(id) {
      if (id) return this.children.find(function (child) {
        return child.id.indexOf(id.toLowerCase()) >= 0;
      });
    }
  }, {
    key: "removeChildById",
    value: function removeChildById(id) {
      this.children = this.children.filter(function (child) {
        if (!(0, _math.compareNames)(child.id, id)) return true;else {
          child.destroy();
          return false;
        }
      });
    }
  }, {
    key: "removeChildrenByGroupName",
    value: function removeChildrenByGroupName(group) {
      var _this = this;

      this.children.map(function (child) {
        if ((0, _math.compareNames)(child.group, group)) {
          _this.removeChildById(child.id);
        }
      });
    }
  }, {
    key: "add",
    value: function add(child) {
      this.children.push(child); // child.init();

      return child;
    }
  }, {
    key: "initChildren",
    value: function initChildren(game) {
      this.children.filter(function (child) {
        return !child.inited;
      }).map(function (child) {
        child.game = game;
        child.init();
      });
    }
  }, {
    key: "callChildren",
    value: function callChildren(method) {
      this.children.map(function (child) {
        return child[method]();
      });
    }
  }]);

  return Container;
}();

exports.Container = Container;
},{"./Sprite":"SuzK","./Point":"kmMG","../utils/math":"NgPq"}],"lnBr":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Gamepad = void 0;

var _config = require("../../config");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Gamepad = /*#__PURE__*/function () {
  function Gamepad() {
    var _this = this;

    _classCallCheck(this, Gamepad);

    this.eventKeys = {
      "right": ["ArrowRight", "KeyD"],
      "left": ["ArrowLeft", "KeyA"],
      "up": ["ArrowUp", "KeyW"],
      "down": ["ArrowDown", "KeyS"],
      "enter": ["Enter"]
    };
    this.keys = {
      right: false,
      left: false,
      up: false,
      down: false,
      enter: false
    };
    this.pressed = false;
    this.onKeyDownListeners = [];
    this.onAnyKeyDownListeners = [];
    window.addEventListener("keydown", function (e) {
      if (!_config.Config.IS_DEV) e.preventDefault();

      _this.updateKey(e.code, true);

      if (_this.pressed) return;

      _this.onKeyDownListeners.map(function (listener) {
        _this.eventKeys[listener.name].map(function (key) {
          if (e.code.toLowerCase() == key.toLowerCase() || e.key.toLowerCase() == key.toLowerCase()) {
            listener.callback();
            _this.pressed = true;
          }
        });
      });

      _this.onAnyKeyDownListeners.map(function (listener) {
        Object.keys(_this.eventKeys).map(function (ekey) {
          _this.eventKeys[ekey].map(function (key) {
            if (e.code.toLowerCase() == key.toLowerCase() || e.key.toLowerCase() == key.toLowerCase()) {
              listener.callback(ekey);
              _this.pressed = true;
            }
          });
        });
      });
    });
    window.addEventListener("keyup", function (e) {
      if (!_config.Config.IS_DEV) e.preventDefault();

      _this.updateKey(e.code, false);

      _this.pressed = false;
    });
  }

  _createClass(Gamepad, [{
    key: "onKeyDown",
    value: function onKeyDown(id, name, callback) {
      this.onKeyDownListeners.push({
        id: id,
        name: name,
        callback: callback
      });
    }
  }, {
    key: "onAnyKeyDown",
    value: function onAnyKeyDown(id, callback) {
      this.onAnyKeyDownListeners.push({
        id: id,
        callback: callback
      });
    }
  }, {
    key: "removeListenerById",
    value: function removeListenerById(id) {
      this.onKeyDownListeners = this.onKeyDownListeners.filter(function (l) {
        return l.id != id;
      });
      this.onAnyKeyDownListeners = this.onAnyKeyDownListeners.filter(function (l) {
        return l.id != id;
      });
    }
  }, {
    key: "updateKey",
    value: function updateKey(code, enabled) {
      var _this2 = this;

      this.mapKeys(function (ekey, key) {
        if (code == key) _this2.keys[ekey] = enabled;
      });
    }
  }, {
    key: "mapKeys",
    value: function mapKeys(func) {
      var _this3 = this;

      Object.keys(this.eventKeys).map(function (ekey) {
        _this3.eventKeys[ekey].map(function (key) {
          return func(ekey, key);
        });
      });
    }
  }]);

  return Gamepad;
}();

exports.Gamepad = Gamepad;
},{"../../config":"FxBD"}],"iCpn":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Renderer = void 0;

var _config = require("../config");

var _math = require("./utils/math");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Renderer = /*#__PURE__*/function () {
  function Renderer(game) {
    _classCallCheck(this, Renderer);

    this.game = game;
    this.particles = [];
    this.layers = {
      "bg": this.createLayer("bg"),
      "game": this.createLayer("game"),
      "player": this.createLayer("player"),
      "plants": this.createLayer("plants"),
      "game-ui": this.createLayer("game-ui"),
      "particles": this.createLayer("particles"),
      "ui": this.createLayer("ui", true, 0),
      "upper-ui": this.createLayer("upper-ui", true, 0),
      "debug": this.createLayer("debug", false)
    };
    document.body.style.background = _config.Color.STONE_LAYER_COLOR;
  } // Create new layer


  _createClass(Renderer, [{
    key: "createLayer",
    value: function createLayer(name, update, cameraFactor) {
      var canvas = document.createElement("canvas");
      canvas.setAttribute("id", name);
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      document.body.appendChild(canvas);
      var context = canvas.getContext("2d");
      context.imageSmoothingEnabled = false; // new ImageData()

      return {
        render: true,
        canvas: canvas,
        context: context,
        update: (0, _math.safeValue)(update, true),
        cameraFactor: (0, _math.safeValue)(cameraFactor, 1)
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      // > Clear layers
      Object.keys(this.layers).map(function (key) {
        if (_this.layers[key].update) _this.layers[key].context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      });
      this.changeBGColor();
    } // > Change bg color

  }, {
    key: "changeBGColor",
    value: function changeBGColor() {
      var spriteSize = _config.Config.SPRITE_SIZE;
      var layerBlendHeight = _config.GeneratorConfig.LAYERS_BLEND_HEIGHT; // Basalt layer color

      if (this.game.camera.position.y > (_config.GeneratorConfig.BASALT_LAYER_HEIGHT - layerBlendHeight) * spriteSize) document.body.style.background = _config.Color.BASALT_LAYER_COLOR; // Burnt basalt layer color

      if (this.game.camera.position.y > (_config.GeneratorConfig.BURNT_BASALT_LAYER_HEIGHT - layerBlendHeight) * spriteSize) document.body.style.background = _config.Color.BURNT_BASALT_LAYER_COLOR; // Stone layer color
      else if (this.game.camera.position.y < (_config.GeneratorConfig.BASALT_LAYER_HEIGHT - layerBlendHeight) * spriteSize) document.body.style.background = _config.Color.STONE_LAYER_COLOR;
    } // > Render particles

  }, {
    key: "renderParticles",
    value: function renderParticles() {
      var _this2 = this;

      this.particles.map(function (part) {
        part.update(_this2.game);
        part.render(_this2, part);
      });
      this.particles.map(function (part, index) {
        if (part.size <= 0 || part.opacity <= 0) _this2.particles.splice(index, 1);
      });
    }
  }, {
    key: "inCameraViewport",
    value: function inCameraViewport(pos, width, height) {
      var cam = this.game.camera.position;
      var w = innerWidth + 150,
          h = innerHeight + 150;
      width = (0, _math.safeValue)(width, _config.Config.SPRITE_SIZE);
      height = (0, _math.safeValue)(height, _config.Config.SPRITE_SIZE);
      return pos.x + width / 2 > cam.x - w / 2 && pos.y + height / 2 > cam.y - h / 2 && pos.x - width / 2 < cam.x + w / 2 && pos.y - height / 2 < cam.y + h / 2;
    }
  }, {
    key: "getCameraPosition",
    value: function getCameraPosition(layer) {
      var factor = this.layers[layer || "game"];
      return this.game.camera.position.add(this.game.camera.offset).mul(factor.cameraFactor);
    } // Get layer context

  }, {
    key: "getContext",
    value: function getContext(layer) {
      return this.layers[layer || "game"].context;
    }
  }, {
    key: "startTransform",
    value: function startTransform(layer, pos, rotation, scale, opacity, origin) {
      var l = this.layers[layer || "game"];

      var p = pos || _math.Vector2.zero();

      var o = origin || _math.Vector2.zero();

      l.context.save();
      l.context.translate(innerWidth / 2 * l.cameraFactor, innerHeight / 2 * l.cameraFactor);
      l.context.rotate(this.game.camera.rotation * l.cameraFactor);
      l.context.transform((scale === null || scale === void 0 ? void 0 : scale.x) || 1, 0, 0, (scale === null || scale === void 0 ? void 0 : scale.y) || 1, p.x - this.getCameraPosition(layer).x + o.x, p.y - this.getCameraPosition(layer).y + o.y);
      l.context.rotate(rotation || 0);
      var op = (0, _math.safeValue)(opacity, 1);
      l.context.globalAlpha = op > 0 ? op : 0;
    }
  }, {
    key: "endTransform",
    value: function endTransform(layer) {
      this.layers[layer || "game"].context.restore();
    } // Draw primitives

  }, {
    key: "drawRect",
    value: function drawRect(props) {
      if (!this.layers[props.layer || "game"].render) return;
      var w = Math.floor((0, _math.safeValue)(props.width, 1) * _config.Config.SPRITE_SIZE);
      var h = Math.floor((0, _math.safeValue)(props.height, 1) * _config.Config.SPRITE_SIZE);
      if (!this.inCameraViewport((0, _math.safeValue)(props.position, _math.Vector2.zero()), w, h) && this.layers[props.layer || "game"].cameraFactor == 1) return;
      this.startTransform(props.layer, props.position, props.rotation, _math.Vector2.all(), props.opacity);
      var context = this.getContext(props.layer);
      context.fillStyle = props.color || "#fff";
      context.fillRect(-w / 2, -h / 2, w, h);

      if (props.stroke) {
        context.lineWidth = props.stroke.width;
        context.strokeStyle = props.stroke.color;
        context.strokeRect(-w / 2, -h / 2, w, h);
      }

      this.endTransform(props.layer);
    }
  }, {
    key: "drawLine",
    value: function drawLine(props) {
      if (!this.layers[props.layer || "game"].render) return;
      var context = this.getContext(props.layer);
      context.save();
      context.globalAlpha = (0, _math.safeValue)(props.opacity, 1);
      context.lineWidth = props.width;
      context.strokeStyle = props.color || "#fff";
      var w = window.innerWidth / 2;
      var h = window.innerHeight / 2;
      context.moveTo(props.points[0].x - this.getCameraPosition(props.layer).x + w, props.points[0].y - this.getCameraPosition(props.layer).y + h);
      context.lineTo(props.points[1].x - this.getCameraPosition(props.layer).x + w, props.points[1].y - this.getCameraPosition(props.layer).y + h);
      context.stroke();
      context.beginPath();
      context.restore();
    }
  }, {
    key: "drawWeb",
    value: function drawWeb(props) {
      if (!this.layers[props.layer || "game"].render) return;
      var context = this.getContext(props.layer);
      context.save();
      context.globalAlpha = (0, _math.safeValue)(props.opacity, 1);
      context.lineWidth = props.width;
      context.strokeStyle = props.color || "#fff";
      var w = window.innerWidth / 2;
      var h = window.innerHeight / 2;
      context.moveTo(props.points[0].x - this.getCameraPosition(props.layer).x + w, props.points[0].y - this.getCameraPosition(props.layer).y + h);

      for (var i = 1; i < props.points.length - 1; i++) {
        context.lineTo(props.points[i].x - this.getCameraPosition(props.layer).x + w, props.points[i].y - this.getCameraPosition(props.layer).y + h);
      }

      context.lineTo(props.points[props.points.length - 1].x - this.getCameraPosition(props.layer).x + w, props.points[props.points.length - 1].y - this.getCameraPosition(props.layer).y + h);
      context.stroke();
      context.beginPath();
      context.restore();
    }
  }, {
    key: "drawText",
    value: function drawText(props) {
      if (!this.layers[props.layer || "game"].render) return;
      var context = this.getContext(props.layer);
      this.startTransform(props.layer, props.position, props.rotation, props.scale, props.opacity);
      var stroke = (0, _math.safeValue)(props.stroke, {
        width: 8,
        color: _config.Color.STONE_LAYER_COLOR
      });

      function renderText(text, pos) {
        context.strokeText(text, pos.x, pos.y);
        context.fillText(text, pos.x, pos.y);
      }

      context.strokeStyle = stroke.color;
      context.lineWidth = stroke.width;
      context.miterLimit = stroke.width;
      context.lineJoin = "round";
      context.fillStyle = props.color || "#fff";
      context.font = props.font || "18px Pixel";
      context.textAlign = props.align || "center";
      context.textBaseline = "middle";

      if (props.centered != undefined) {
        console.warn("Text centered!");
      }

      var text = props.text || "";

      if (text.indexOf("\n") >= 0) {
        for (var i = 0; i < text.split("\n").length; i++) {
          renderText(text.split("\n")[i], new _math.Vector2(0, i * (0, _math.safeValue)(props.lineHeight, parseInt(context.font.split(" ")[0]))));
        }
      } else renderText(text, _math.Vector2.zero()); // context.s();


      this.endTransform(props.layer);
    }
  }, {
    key: "drawSprite",
    value: function drawSprite(props) {
      var _a, _b;

      if (!this.layers[props.layer || "game"].render) return;

      try {
        if (!props.texture) return;
        var size = _config.Config.SPRITE_SIZE;
        var w = (0, _math.safeValue)(props.width, 1) * size;
        var h = (0, _math.safeValue)(props.height, 1) * size;

        var frameW = (0, _math.safeValue)(props.width, 1) * _config.Config.SPRITE_PIXEL_SIZE;

        var frameH = (0, _math.safeValue)(props.height, 1) * _config.Config.SPRITE_PIXEL_SIZE;

        var framePos = props.frame || _math.Vector2.zero();

        var p = props.position || _math.Vector2.zero();

        var o = props.offset || _math.Vector2.zero();

        var or = props.origin || _math.Vector2.zero();

        if (!this.inCameraViewport(p, w * (0, _math.safeValue)((_a = props.repeat) === null || _a === void 0 ? void 0 : _a.x, 1), h * (0, _math.safeValue)((_b = props.repeat) === null || _b === void 0 ? void 0 : _b.y, 1)) && this.layers[props.layer || "game"].cameraFactor == 1) return;
        var f = (0, _math.safeValue)(props.flip, {
          x: false,
          y: false
        });

        var s = props.scale || _math.Vector2.all();

        var context = this.getContext(props.layer);
        this.startTransform(props.layer, p.add(o), props.rotation, new _math.Vector2(s.x * (f.x ? -1 : 1), s.y * (f.y ? -1 : 1)), props.opacity, or); // Draw sprite without repeat

        if (!props.repeat || _math.Vector2.compare(props.repeat || _math.Vector2.all(), _math.Vector2.all())) {
          if ((0, _math.safeValue)(props.framed, true)) context.drawImage(props.texture, // Clip rect
          framePos.x * frameW, framePos.y * frameH, frameW, frameH, // Transform
          -w / 2 - or.x, -h / 2 - or.y, w, h);else context.drawImage(props.texture, // Transform
          -w / 2 - or.x, -h / 2 - or.y, w, h);
        } else if (props.repeat) // And... With repeat?
          for (var repeatY = 0; repeatY < props.repeat.y; repeatY++) {
            for (var repeatX = 0; repeatX < props.repeat.x; repeatX++) {
              context.drawImage(props.texture, -w / 2 + repeatX * w, -h / 2 + repeatY * h, w, h);
            }
          }

        this.endTransform(props.layer);
      } catch (err) {}
    }
  }, {
    key: "updateAspect",
    value: function updateAspect() {
      var _this3 = this;

      Object.keys(this.layers).map(function (key) {
        _this3.layers[key].canvas.width = window.innerWidth;
        _this3.layers[key].canvas.height = window.innerHeight;
        _this3.layers[key].context.imageSmoothingEnabled = false;
      });
    }
  }]);

  return Renderer;
}();

exports.Renderer = Renderer;
},{"../config":"FxBD","./utils/math":"NgPq"}],"KT6z":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Generator = void 0;
exports.noise = noise;

var _math = require("./utils/math");

var _config = require("../config");

var _noise = require("./utils/noise");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var __chunkId = 0;

function noise(x, y, sharpness, sharpnessDiv) {
  var sharp = sharpness ? noise(x * sharpness, y * sharpness) : 0;
  return (0, _math.clamp)(((0, _noise.perlin2)(x, y) + 1) / 2 + sharp / (sharpnessDiv || 2), 0, 1);
}

var Generator = /*#__PURE__*/function () {
  function Generator(game) {
    _classCallCheck(this, Generator);

    this.game = game;
    this.seed = 0;
    this.changeSeed();
    this.onWorldChangeListeners = [];
    this.chunks = [];
    this.destroyedOres = game.loadKey("destroyedOres", []);
    this.modifiedOres = game.loadKey("modifiedOres", {});
    this.settings = [];
    this.range = [new _math.Vector2(1, 0), new _math.Vector2(-1, 0), new _math.Vector2(0, 1), new _math.Vector2(0, -1), new _math.Vector2(1, 1), new _math.Vector2(-1, -1), new _math.Vector2(-1, 1), new _math.Vector2(1, -1), new _math.Vector2(1, -1), new _math.Vector2(-1, 1), new _math.Vector2(0, 0)];
  }

  _createClass(Generator, [{
    key: "generateChunksAt",
    value: function generateChunksAt(position) {
      var _this = this;

      var mul = 1;
      var pos = this.game.camera.position.div(_config.Config.SPRITE_SIZE * (_config.Config.CHUNK_SIZE * mul)).apply(Math.floor);
      var checkPos = pos.add(new _math.Vector2(.5, .5)).mul(_config.Config.SPRITE_SIZE * _config.Config.CHUNK_SIZE * mul); // Create chunks

      if (checkPos.distance(this.game.camera.position) > 100) {
        this.range.map(function (p) {
          if (!_this.chunks.find(function (c) {
            return _math.Vector2.compare(c.pos, pos.mul(mul).add(p));
          })) {
            var chunk = _this.createChunk(pos.mul(mul).add(p));

            if (chunk) _this.chunks.push(chunk);
          }
        });
        this.onWorldChangeListeners.filter(function (listener) {
          return listener.listenChunks;
        }).map(function (listener) {
          listener.callback();
        });
      } // Remove chunks


      this.chunks.map(function (chunk, index) {
        if (_this.game.camera.position.distance(chunk.pos.mul(_config.Config.SPRITE_SIZE * _config.Config.CHUNK_SIZE)) > 800) {
          _this.game.removeChildrenByGroupName(chunk.group);

          _this.chunks.splice(index, 1);
        }
      });
    }
  }, {
    key: "createChunk",
    value: function createChunk(pos) {
      // if (pos.x < 0 || pos.x > Config.WORLD_WIDTH / Config.CHUNK_SIZE || pos.y < 0 || pos.y > Config.WORLD_HEIGHT / Config.CHUNK_SIZE)
      if (pos.y < 0 || pos.y > _config.Config.WORLD_HEIGHT / _config.Config.CHUNK_SIZE) return;
      var ores = [[null]];
      __chunkId++;

      for (var y = 0; y < _config.Config.CHUNK_SIZE; y++) {
        ores.push([]);

        for (var x = 0; x < _config.Config.CHUNK_SIZE; x++) {
          ores[y].push(null);

          var _y = y + pos.y * _config.Config.CHUNK_SIZE;

          var _x = x + pos.x * _config.Config.CHUNK_SIZE;

          for (var i = 0; i < this.settings.length; i++) {
            var gen = this.settings[i];
            var noiseX = x + pos.x * _config.Config.CHUNK_SIZE;
            var noiseY = y + pos.y * _config.Config.CHUNK_SIZE; // const getValue = (x: number, y: number, div?: number)=> (+perlin2(x / (div || 10), y / (div || 10)) + 1) / 1.5;

            var getValue = function getValue(x, y, div) {
              return noise(x / (div || 10), y / (div || 10), 3);
            };

            var value = getValue(noiseX, noiseY, gen.divider);
            var isValue = gen.value ? (0, _math.inRange)(value, gen.value[0], gen.value[1]) : true;
            var rules = gen.rules ? gen.rules(noiseX, noiseY) : isValue;
            if ((0, _math.inRange)(_y, gen.height[0], gen.height[1]) && rules) ores[y][x] = gen.block; // if (inRange(value, gen.value[0], gen.value[1]) && inRange(_y, gen.height[0], gen.height[1]) && rules)
            //     ores[y][x] = gen.block;
          }

          var inChunkId = [x, y, pos.x, pos.y].join("-");

          if (ores[y][x] && this.destroyedOres.indexOf(inChunkId) < 0) {
            var ore = new ores[y][x](new _math.Vector2(_x, _y), this.modifiedOres[inChunkId]);
            ore.inChunkId = inChunkId;
            ore.group = "".concat(__chunkId);
            this.game.add(ore);
          }
        }
      }

      this.game.initChildren();
      return {
        group: "".concat(__chunkId),
        pos: pos
      };
    }
  }, {
    key: "checkIsInLoadedChunk",
    value: function checkIsInLoadedChunk(checkPosition) {
      return this.chunks.findIndex(function (chunk) {
        return _math.Vector2.compare(chunk.pos, checkPosition.add(_math.Vector2.all(_config.Config.SPRITE_SIZE / 2)).div(_config.Config.SPRITE_SIZE * _config.Config.CHUNK_SIZE).apply(Math.floor));
      }) >= 0;
    }
  }, {
    key: "destroyOre",
    value: function destroyOre(inChunkId) {
      delete this.modifiedOres[inChunkId];
      this.destroyedOres.push(inChunkId);
      this.onWorldChangeListeners.map(function (listener) {
        if (listener.pos != null && listener.pos.distance((0, _math.inChunkIdToPosition)(inChunkId)) < 200 || !listener.pos) listener.callback();
      });
      this.saveData();
    }
  }, {
    key: "modifyOre",
    value: function modifyOre(inChunkId, data) {
      this.modifiedOres[inChunkId] = data;
      this.saveData();
    }
  }, {
    key: "onWorldChange",
    value: function onWorldChange(id, pos, callback, listenChunks) {
      this.onWorldChangeListeners.push({
        id: id,
        pos: pos,
        callback: callback,
        listenChunks: listenChunks
      });
    }
  }, {
    key: "removeListenerById",
    value: function removeListenerById(id) {
      this.onWorldChangeListeners = this.onWorldChangeListeners.filter(function (listener) {
        return listener.id != id;
      });
    }
  }, {
    key: "changeSeed",
    value: function changeSeed() {
      var needSeed = this.game.loadKey("seed", Date.now());
      this.seed = typeof needSeed == "number" ? needSeed : Date.now(); // this.seed = Config.IS_DEV ? 1636721068016 : (typeof needSeed == "number" ? needSeed : Date.now());

      (0, _noise.seed)(this.seed);
      this.game.saveKey("seed", this.seed.toString());
      console.log("%c\u0421\u0438\u0434 \u043C\u0438\u0440\u0430: ".concat(this.seed), "background: ".concat(_config.Color.BLACK, ";color: ").concat(_config.Color.YELLOW, ";padding:15px;font-size:20px;"));
    }
  }, {
    key: "saveData",
    value: function saveData() {
      this.game.saveKey("destroyedOres", JSON.stringify(this.destroyedOres));
      this.game.saveKey("modifiedOres", JSON.stringify(this.modifiedOres));
    }
  }, {
    key: "reset",
    value: function reset() {
      this.modifiedOres = {};
      this.destroyedOres = [];
      this.changeSeed();
      this.saveData();
    }
  }]);

  return Generator;
}();

exports.Generator = Generator;
},{"./utils/math":"NgPq","../config":"FxBD","./utils/noise":"xNw6"}],"g97P":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  err: {
    assetLoadError: function assetLoadError(name) {
      return "Failed to load asset with name \"".concat(name, "\"");
    },
    audioPlayError: function audioPlayError(name) {
      return "Failed to play audio asset \"".concat(name, "\"");
    },
    cantFindBlockByInChunkId: function cantFindBlockByInChunkId(id) {
      return "Can't find block by inChunkId \"".concat(id, "\"");
    }
  }
};
exports.default = _default;
},{}],"imsH":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sound = void 0;

var _messages = _interopRequireDefault(require("../../messages"));

var _math = require("../utils/math");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Sound = /*#__PURE__*/function () {
  function Sound() {
    _classCallCheck(this, Sound);

    this.assetName = null;
    this.audio = null;
    this.volume = 1;
  }

  _createClass(Sound, [{
    key: "play",
    value: function play(game, assetName, volume, loop, toStart) {
      var _this = this;

      this.assetName = assetName;
      this.audio = (0, _math.asAudio)(game.getAssetByName(assetName));

      if (!this.audio) {
        console.error(_messages.default.err.audioPlayError(assetName));
        return;
      }

      if ((0, _math.safeValue)(toStart, true)) this.audio.currentTime = 0;
      this.volume = (0, _math.safeValue)(volume, 1);
      this.audio.volume = this.volume;
      this.audio.play();
      if (loop) this.audio.ontimeupdate = function () {
        if (!_this.audio) return;

        if (_this.audio.currentTime >= _this.audio.duration - .3) {
          _this.audio.currentTime = 0;

          _this.audio.play();
        }
      };
    }
  }, {
    key: "stop",
    value: function stop() {
      if (!this.audio) return;
      if (this.audio.paused) return;
      this.audio.pause();
      this.audio.currentTime = 0;
    }
  }, {
    key: "update3D",
    value: function update3D(game, emitterPosition, maxDistance) {
      if (!this.audio) return;
      var distance = (0, _math.safeValue)(maxDistance, innerHeight / 2 + 300);
      this.audio.volume = (0, _math.clamp)(this.volume * (0, _math.clamp)((1 - game.camera.position.distance(emitterPosition) / distance) * 1.8, 0, 1), 0, 1);
    }
  }]);

  return Sound;
}();

exports.Sound = Sound;
},{"../../messages":"g97P","../utils/math":"NgPq"}],"Udax":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Game = void 0;

var _Asset = require("./Asset");

var _Container2 = require("./components/Container");

var _Gamepad = require("./events/Gamepad");

var _Physics = require("./Physics");

var _Renderer = require("./Renderer");

var _math = require("./utils/math");

var _Generator = require("./Generator");

var _Sound = require("./components/Sound");

var _messages = _interopRequireDefault(require("../messages"));

var _config = require("../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Game = /*#__PURE__*/function (_Container) {
  _inherits(Game, _Container);

  var _super = _createSuper(Game);

  function Game() {
    var _this;

    _classCallCheck(this, Game);

    _this = _super.call(this);
    _this.paused = !false;
    _this.gamepad = new _Gamepad.Gamepad();
    _this.camera = {
      position: _math.Vector2.zero(),
      rotation: 0,
      offset: _math.Vector2.zero(),
      startShakeElapsed: 0,
      shaking: false,
      shakeAmplitude: 2,
      follow: function follow(pos, lerp) {
        if (lerp) this.position.lerp(pos, lerp);else this.position.copy(pos);
      },
      shake: function shake(amplitude) {
        this.shakeAmplitude = amplitude || 2;

        if (!this.shaking) {
          this.shaking = true;
        }
      }
    };
    _this.assets = [];
    _this.sounds = [];
    _this.clock = {
      elapsed: 0,
      fps: 0,
      delta: 0
    };
    _this.initListeners = [];
    _this.updateListeners = [];
    _this.renderListeners = [];
    _this.renderer = new _Renderer.Renderer(_assertThisInitialized(_this));
    _this.physics = new _Physics.Physics(_assertThisInitialized(_this));
    _this.generator = new _Generator.Generator(_assertThisInitialized(_this)); // if (Config.IS_DEV)
    //     this.clearAllKeys();

    return _this;
  }

  _createClass(Game, [{
    key: "saveKey",
    value: function saveKey(key, value) {
      if (_config.Config.IS_DEV) return;
      localStorage.setItem(key, value);
    }
  }, {
    key: "loadKey",
    value: function loadKey(key, safe) {
      if (_config.Config.IS_DEV) return safe;
      if (localStorage.getItem(key)) return JSON.parse(localStorage.getItem(key));else return safe;
    }
  }, {
    key: "clearAllKeys",
    value: function clearAllKeys() {
      localStorage.clear();
    }
  }, {
    key: "loadAsset",
    value: function loadAsset(name, src, type) {
      this.assets.push(new _Asset.Asset(name, src, type));
    }
  }, {
    key: "getAssetByName",
    value: function getAssetByName(name) {
      var asset = this.assets.find(function (asset) {
        return asset.name == name;
      });
      if (asset) return asset;else console.error(_messages.default.err.assetLoadError(name));
    }
  }, {
    key: "removeChildById",
    value: function removeChildById(id, listenerId) {
      this.gamepad.removeListenerById(listenerId || id);
      this.generator.removeListenerById(listenerId || id);

      _get(_getPrototypeOf(Game.prototype), "removeChildById", this).call(this, id);
    }
  }, {
    key: "initChildren",
    value: function initChildren() {
      _get(_getPrototypeOf(Game.prototype), "initChildren", this).call(this, this);
    }
  }, {
    key: "addInit",
    value: function addInit(listener) {
      this.initListeners.push(listener);
    }
  }, {
    key: "addUpdate",
    value: function addUpdate(listener) {
      this.updateListeners.push(listener);
    }
  }, {
    key: "addRender",
    value: function addRender(listener) {
      this.renderListeners.push(listener);
    }
  }, {
    key: "tick",
    value: function tick(_tick) {
      return this.clock.elapsed % _tick == 0;
    }
  }, {
    key: "playSoundAt",
    value: function playSoundAt(position, assetName, volume) {
      var sound = new _Sound.Sound();
      sound.play(this, assetName, volume);
      this.sounds.push(sound);
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;

      // Init
      this.initListeners.map(function (listener) {
        return listener();
      });
      this.initChildren();
      var lastLoop = Date.now();

      var loop = function loop() {
        requestAnimationFrame(loop);

        _this2.renderer.render();

        _this2.clock.elapsed++; // Update clock

        var thisLoop = Date.now();
        _this2.clock.delta = (thisLoop - lastLoop) / 1000;
        if (_this2.tick(30)) _this2.clock.fps = Math.floor(1000 / (thisLoop - lastLoop));
        lastLoop = thisLoop; // Camera shake

        if (!_this2.camera.shaking) {
          _this2.camera.startShakeElapsed = _this2.clock.elapsed;

          _this2.camera.offset.lerp(_math.Vector2.zero(), .2);
        } else {
          if ((_this2.clock.elapsed - _this2.camera.startShakeElapsed) % 10 == 0) _this2.camera.shaking = false;

          _this2.camera.offset.copy(_this2.camera.offset.add(new _math.Vector2((0, _math.random)(-_this2.camera.shakeAmplitude, _this2.camera.shakeAmplitude), (0, _math.random)(-_this2.camera.shakeAmplitude, _this2.camera.shakeAmplitude))));
        } // Update


        _this2.physics.update();

        _this2.callChildren("update");

        _this2.updateListeners.map(function (listener) {
          return listener(_this2.clock);
        });

        _this2.callChildren("render");

        _this2.renderListeners.map(function (listener) {
          return listener(_this2.renderer);
        });

        _this2.renderer.renderParticles();
      }; // setInterval(loop, 16);


      loop(); // Canvas update

      window.addEventListener("resize", function () {
        _this2.renderer.updateAspect();
      });
    }
  }]);

  return Game;
}(_Container2.Container);

exports.Game = Game;
},{"./Asset":"heGh","./components/Container":"Pspv","./events/Gamepad":"lnBr","./Physics":"XTEA","./Renderer":"iCpn","./utils/math":"NgPq","./Generator":"KT6z","./components/Sound":"imsH","../messages":"g97P","../config":"FxBD"}],"Fcxz":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Timer = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Timer = /*#__PURE__*/function () {
  function Timer(triggerElapsed) {
    _classCallCheck(this, Timer);

    this.started = false;
    this.elapsed = triggerElapsed * 60;
    this.elapsedSeconds = triggerElapsed;
    this.startElapsed = 0;
    this.triggerElapsed = triggerElapsed;
  }

  _createClass(Timer, [{
    key: "start",
    value: function start(elapsed) {
      if (this.started) return;
      this.started = true;
      this.startElapsed = elapsed;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.started = false;
      this.startElapsed = this.triggerElapsed;
      this.elapsed = this.triggerElapsed * 60;
      this.elapsedSeconds = this.triggerElapsed;
    }
  }, {
    key: "update",
    value: function update(elapsed) {
      if (!this.started) return;
      this.elapsed = this.triggerElapsed * 60 - (elapsed - this.startElapsed);
      this.elapsedSeconds = this.triggerElapsed - Math.floor((elapsed - this.startElapsed) / 60);
    }
  }, {
    key: "isTriggered",
    value: function isTriggered() {
      return this.elapsed <= 0 && this.started;
    }
  }]);

  return Timer;
}();

exports.Timer = Timer;
},{}],"jj1k":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = void 0;

var _Point2 = require("./Point");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Text = /*#__PURE__*/function (_Point) {
  _inherits(Text, _Point);

  var _super = _createSuper(Text);

  function Text(name, text, props) {
    var _this;

    _classCallCheck(this, Text);

    _this = _super.call(this, name, props);
    _this.text = text;
    _this.font = (props === null || props === void 0 ? void 0 : props.font) || "18px Pixel";
    _this.color = (props === null || props === void 0 ? void 0 : props.color) || "#fff";
    return _this;
  }

  _createClass(Text, [{
    key: "render",
    value: function render() {
      _get(_getPrototypeOf(Text.prototype), "render", this).call(this);

      if (this.visible) this.game.renderer.drawText(Object.assign({}, this));
    }
  }]);

  return Text;
}(_Point2.Point);

exports.Text = Text;
},{"./Point":"kmMG"}],"o9hB":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Group = void 0;

var _math = require("../utils/math");

var _Container2 = require("./Container");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var __id = 0;

var Group = /*#__PURE__*/function (_Container) {
  _inherits(Group, _Container);

  var _super = _createSuper(Group);

  function Group(name, position) {
    var _this;

    _classCallCheck(this, Group);

    _this = _super.call(this);
    _this.id = "".concat(name, "-").concat(__id++);
    _this.type = "group";
    _this.name = (0, _math.standardName)(name);
    _this.position = position || _math.Vector2.zero();
    _this.visible = true;
    _this.allowUpdateChildren = true;
    return _this;
  }

  _createClass(Group, [{
    key: "init",
    value: function init() {
      this.initChildren(this.game);
    }
  }, {
    key: "update",
    value: function update() {
      if (this.allowUpdateChildren) this.callChildren("update");
    }
  }, {
    key: "render",
    value: function render() {
      if (this.visible) this.callChildren("render");
    }
  }]);

  return Group;
}(_Container2.Container);

exports.Group = Group;
},{"../utils/math":"NgPq","./Container":"Pspv"}],"XaJu":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Game = require("./Game");

Object.keys(_Game).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Game[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Game[key];
    }
  });
});

var _Timer = require("./utils/Timer");

Object.keys(_Timer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Timer[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Timer[key];
    }
  });
});

var _Point = require("./components/Point");

Object.keys(_Point).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Point[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Point[key];
    }
  });
});

var _Sprite = require("./components/Sprite");

Object.keys(_Sprite).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Sprite[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Sprite[key];
    }
  });
});

var _Text = require("./components/Text");

Object.keys(_Text).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Text[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Text[key];
    }
  });
});

var _Group = require("./components/Group");

Object.keys(_Group).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Group[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Group[key];
    }
  });
});
},{"./Game":"Udax","./utils/Timer":"Fcxz","./components/Point":"kmMG","./components/Sprite":"SuzK","./components/Text":"jj1k","./components/Group":"o9hB"}],"zRqz":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Particle = void 0;
exports.SpawnCrumbleParticles = SpawnCrumbleParticles;
exports.SpawnDisputesParticles = SpawnDisputesParticles;
exports.SpawnParticles = SpawnParticles;
exports.SpawnUpgradeParticles = SpawnUpgradeParticles;

var _math = require("../utils/math");

var _config = require("../../config");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Particle = /*#__PURE__*/function () {
  function Particle(position, settings) {
    var _this = this;

    _classCallCheck(this, Particle);

    var c = settings === null || settings === void 0 ? void 0 : settings.colors;
    this.color = c ? c[Math.floor((0, _math.random)(0, c.length))] : _config.Color.BLACK;
    this.opacity = (0, _math.safeValue)(settings === null || settings === void 0 ? void 0 : settings.opacity, 1);
    this.downOpacity = (0, _math.safeValue)(settings === null || settings === void 0 ? void 0 : settings.downOpacity, 0);
    this.position = new _math.Vector2(position.x, position.y);
    this.rotation = (0, _math.random)(0, Math.PI * 4);
    var v = settings === null || settings === void 0 ? void 0 : settings.velocity;
    var rv = settings === null || settings === void 0 ? void 0 : settings.rotationVelocity;
    this.velocity = v ? v() : new _math.Vector2((0, _math.random)(-5, 5), (0, _math.random)(-10, 5));
    this.rotationVelocity = rv ? rv() : (0, _math.random)(-.1, .1);
    var s = settings === null || settings === void 0 ? void 0 : settings.size;
    this.size = (s ? s : [.5, 1.2])[Math.floor((0, _math.random)(0, 2))];
    this.gravity = (0, _math.safeValue)(settings === null || settings === void 0 ? void 0 : settings.gravity, _config.Config.PARTICLES_GRAVITY);
    this.downSize = (0, _math.safeValue)(settings === null || settings === void 0 ? void 0 : settings.downSize, .01);
    this.render = (settings === null || settings === void 0 ? void 0 : settings.render) ? settings === null || settings === void 0 ? void 0 : settings.render : function (renderer, part) {
      renderer.drawRect({
        color: _this.color,
        width: _this.size * .2,
        height: _this.size * .2,
        position: _this.position,
        rotation: _this.rotation,
        layer: "particles",
        opacity: _this.opacity
      });
    };
  }

  _createClass(Particle, [{
    key: "update",
    value: function update(game) {
      this.velocity.y += this.gravity;
      this.rotation += this.rotationVelocity;
      this.size -= this.downSize;
      this.opacity -= this.downOpacity;
      this.velocity.x *= .99;
      this.velocity.y *= .99;
      this.position.x += this.velocity.x * game.clock.delta * 60;
      this.position.y += this.velocity.y * game.clock.delta * 60;
    }
  }]);

  return Particle;
}();

exports.Particle = Particle;

function SpawnParticles(game, position, settings) {
  var box = settings === null || settings === void 0 ? void 0 : settings.box;

  for (var i = (settings === null || settings === void 0 ? void 0 : settings.count) || 10; i--;) {
    game.renderer.particles.push(new Particle(position.expand().add(box ? box() : _math.Vector2.zero()), settings));
  }
}

function SpawnCrumbleParticles(game, position, colors) {
  SpawnParticles(game, position, {
    velocity: function velocity() {
      return new _math.Vector2((0, _math.random)(-2, 2), 0);
    },
    box: function box() {
      return new _math.Vector2((0, _math.random)(-40, 40), 0);
    },
    colors: colors,
    count: 5
  });
}

function SpawnDisputesParticles(game, position, intensity) {
  SpawnParticles(game, position, {
    render: function render(renderer, part) {
      renderer.drawSprite({
        texture: (0, _math.asImage)(game.getAssetByName("disputes")),
        position: part.position,
        rotation: part.rotation,
        opacity: part.opacity,
        scale: _math.Vector2.all(part.size)
      });
    },
    count: 6,
    gravity: -.01,
    size: [1.4 * (0, _math.safeValue)(intensity, 1), 1.4 * (0, _math.safeValue)(intensity, 1)],
    rotationVelocity: function rotationVelocity() {
      return (0, _math.random)(-.01, -.01);
    },
    velocity: function velocity() {
      return new _math.Vector2((0, _math.random)(-1, 1), (0, _math.random)(-1, 1)).mul(2 * (0, _math.safeValue)(intensity, 1));
    },
    opacity: 3 * (0, _math.safeValue)(intensity, 1),
    downSize: .002,
    downOpacity: .01
  });
}

function SpawnUpgradeParticles(game, position) {
  SpawnParticles(game, position, {
    render: function render(renderer, part) {
      renderer.drawSprite({
        texture: (0, _math.asImage)(game.getAssetByName("level-up")),
        position: part.position,
        opacity: part.size,
        scale: _math.Vector2.all(.8),
        layer: "particles"
      });
    },
    velocity: function velocity() {
      return new _math.Vector2(0, -1.5);
    },
    size: [5, 5],
    downSize: .08,
    count: 1,
    gravity: 0
  });
}
},{"../utils/math":"NgPq","../../config":"FxBD"}],"uf1p":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Entity = void 0;

var _config = require("../../config");

var _engine = require("../../engine");

var _Sound = require("../../engine/components/Sound");

var _Particles = require("../../engine/components/Particles");

var _math = require("../../engine/utils/math");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Entity = /*#__PURE__*/function (_Sprite) {
  _inherits(Entity, _Sprite);

  var _super = _createSuper(Entity);

  function Entity(name, assetName, props) {
    var _this;

    _classCallCheck(this, Entity);

    _this = _super.call(this, name, assetName, props);
    _this.sound = new _Sound.Sound();
    _this.hp = (props === null || props === void 0 ? void 0 : props.hp) || 10;
    _this.moveSpeed = (props === null || props === void 0 ? void 0 : props.moveSpeed) || 5;
    _this.initialMoveSpeed = _this.moveSpeed;
    _this.damaged = false;
    _this.damagedElapsed = 0;
    _this.stayAnimation = "".concat(name, "-stay");
    _this.walkAnimation = "".concat(name, "-walk");
    _this.moveSpeedDown = 0;
    _this.group = "entity";
    _this.startPosition = _this.position.expand();
    _this.dead = false;
    _this.interest = true;
    _this.regaining = false;
    _this.eating = false;
    _this.movement = new _math.Vector2();
    _this.allowMove = true;
    _this.allowAnimate = true;
    _this.digOffsetFactor = .2;
    return _this;
  }

  _createClass(Entity, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(Entity.prototype), "init", this).call(this);

      this.collider.type = "dynamic";
    }
  }, {
    key: "update",
    value: function update() {
      _get(_getPrototypeOf(Entity.prototype), "update", this).call(this);

      this.bounds();

      if (!this.allowMove || this.regaining || this.dead || this.game.paused) {
        this.movement.set();
        this.velocity.set();
      }

      if (!this.damaged) {
        this.damagedElapsed = this.game.clock.elapsed;
        this.visible = true;
      } else {
        if ((this.game.clock.elapsed - this.damagedElapsed) % 50 == 0) this.damaged = false;
        this.blink();
      }

      this.offset.lerp(_math.Vector2.zero(), this.digOffsetFactor);
      this.animate();
    }
  }, {
    key: "dig",
    value: function dig(damage, speed, level, direction) {
      if (this.dead || this.regaining) return;

      if (this.collider.collidesWith != null && this.collider.collidesWith.any && this.collider.collidesWith.id.indexOf("ore-") >= 0) {
        var ore = this.game.getChildById(this.collider.collidesWith.id);
        if (ore == undefined) return;

        if (this.collider.collidesWith[direction] && this.position.distance(ore.position) < _config.Config.SPRITE_SIZE * 2 && this.game.clock.elapsed % speed == 0) {
          ore.hit(damage, level);
          if (direction == "right") this.offset = new _math.Vector2(10, 0);else if (direction == "left") this.offset = new _math.Vector2(-10, 0);else if (direction == "top") this.offset = new _math.Vector2(0, -10);else if (direction == "bottom") this.offset = new _math.Vector2(0, 10);
        }
      }

      this.collider.collidesWith = null;
    }
  }, {
    key: "move",
    value: function move() {
      if (!this.allowMove || this.game.paused || this.regaining || this.dead) return;
      if (this.movement.x != 0) this.flip.x = this.movement.x < 0;
      this.velocity.x = this.movement.normalize().x * (this.moveSpeed - this.moveSpeedDown);
      this.velocity.y = this.movement.normalize().y * (this.moveSpeed - this.moveSpeedDown);
    }
  }, {
    key: "animate",
    value: function animate() {
      if (!this.allowAnimate || this.dead || this.regaining) return;
      if (this.velocity.x != 0 || this.velocity.y != 0) this.playAnimation(this.walkAnimation, 4);else this.playAnimation(this.stayAnimation, 1);
    }
  }, {
    key: "hit",
    value: function hit(damage) {
      if (this.damaged) return;
      this.hp -= damage;
      this.damaged = true;
      this.sound.play(this.game, (0, _math.chance)(1) ? "bonk" : "hit");
      this.spawnText("-".concat(damage), undefined, _config.Color.RED);
      if (this.hp <= 0) this.die();
    }
  }, {
    key: "die",
    value: function die() {
      this.game.removeChildById(this.id);
    }
  }, {
    key: "bounds",
    value: function bounds() {
      // World bounds
      var worldWidth = Math.floor(_config.Config.WORLD_WIDTH * _config.Config.SPRITE_SIZE); // By width

      if (this.position.x < 0) this.position.x = 0;else if (this.position.x > worldWidth) this.position.x = worldWidth; // Dome bounds

      var halfDiameter = _config.Config.DOME_DIAMETER / 2;

      if (this.position.x > _config.Config.WORLD_X_CENTER - halfDiameter + 40 && this.position.x < _config.Config.WORLD_X_CENTER + halfDiameter - 40) {
        if (this.position.y < -_config.Config.SPRITE_SIZE / 2) {
          if (this.position.y < -_config.Config.GROUND_HEIGHT) {
            this.position.y = -_config.Config.GROUND_HEIGHT;
          }

          if (this.position.x < _config.Config.WORLD_X_CENTER - halfDiameter + 48) this.position.x = _config.Config.WORLD_X_CENTER - halfDiameter + 48;
          if (this.position.x > _config.Config.WORLD_X_CENTER + halfDiameter - 48) this.position.x = _config.Config.WORLD_X_CENTER + halfDiameter - 48;
        }
      } else {
        // By height
        if (this.position.y < -_config.Config.SPRITE_SIZE / 2) this.position.y = -_config.Config.SPRITE_SIZE / 2;
      }
    }
  }, {
    key: "spawnText",
    value: function spawnText(text, offset, color) {
      (0, _Particles.SpawnParticles)(this.game, this.position.add((0, _math.safeValue)(offset, new _math.Vector2(0, -30))), {
        render: function render(renderer, part) {
          renderer.drawText({
            text: text,
            font: "22px Pixel",
            color: color,
            position: part.position,
            opacity: part.opacity,
            rotation: part.velocity.y / 20,
            layer: "particles"
          });
        },
        opacity: 5,
        count: 1,
        gravity: .04,
        velocity: function velocity() {
          return new _math.Vector2(0, -2);
        },
        downOpacity: .08,
        downSize: 0,
        box: function box() {
          return new _math.Vector2((0, _math.random)(-10, 10), (0, _math.random)(-10, 10));
        }
      });
    }
  }, {
    key: "blink",
    value: function blink() {
      if (!this.dead) _get(_getPrototypeOf(Entity.prototype), "blink", this).call(this);
    }
  }]);

  return Entity;
}(_engine.Sprite);

exports.Entity = Entity;
},{"../../config":"FxBD","../../engine":"XaJu","../../engine/components/Sound":"imsH","../../engine/components/Particles":"zRqz","../../engine/utils/math":"NgPq"}],"gi9E":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UI = exports.Button = void 0;

var _config = require("../../config");

var _math = require("../utils/math");

var _Particles = require("./Particles");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Button = /*#__PURE__*/function () {
  function Button(width, height, layer, assetName, allowScale) {
    _classCallCheck(this, Button);

    this.width = (0, _math.safeValue)(width, 1);
    this.height = (0, _math.safeValue)(height, 1);
    this.position = _math.Vector2.zero();
    this.assetName = assetName || "interact";
    this.layer = layer || "game-ui";
    this.animatedPosY = 0;
    this.allowScale = (0, _math.safeValue)(allowScale, true);
  }

  _createClass(Button, [{
    key: "render",
    value: function render(game) {
      this.animatedPosY = (0, _math.lerp)(this.animatedPosY, 0, .2);
      game.renderer.drawSprite({
        texture: (0, _math.asImage)(game.getAssetByName(this.assetName)),
        width: this.width,
        height: this.height,
        position: this.position.add(new _math.Vector2(0, this.animatedPosY)),
        scale: _math.Vector2.all(this.allowScale ? .7 : 1),
        layer: this.layer
      });
    }
  }, {
    key: "click",
    value: function click() {
      this.animatedPosY = 10;
    }
  }]);

  return Button;
}();

exports.Button = Button;

var UI = /*#__PURE__*/function () {
  function UI() {
    _classCallCheck(this, UI);

    this.enabled = true;
    this.allowSelectSlots = true;
    this.focused = {
      row: 0,
      slot: 0
    };
    this.ghostFocused = {
      row: 0,
      slot: 0
    };
    this.template = [1];
  }

  _createClass(UI, [{
    key: "init",
    value: function init(game) {
      var _this = this;

      this.game = game;
      game.gamepad.onAnyKeyDown("ui-listener", function (name) {
        if (!_this.allowSelectSlots || !_this.enabled) return;

        switch (name) {
          case "right":
            _this.focused.slot++;

            _this.bounds();

            break;

          case "left":
            _this.focused.slot--;

            _this.bounds();

            break;

          case "up":
            if (_this.ghostFocused.row == Math.abs(_this.focused.row % _this.template.length - 1)) _this.focused.slot = _this.ghostFocused.slot;
            _this.focused.row--;

            _this.bounds();

            break;

          case "down":
            if (_this.ghostFocused.row == _this.focused.row % _this.template.length + 1) _this.focused.slot = _this.ghostFocused.slot;
            _this.focused.row++;

            _this.bounds();

            break;
        }
      });
    }
  }, {
    key: "bounds",
    value: function bounds() {
      if (this.focused.row < 0) this.focused.row = this.template.length - 1;else if (this.focused.row > this.template.length - 1) this.focused.row = 0;
      this.focused.row = (0, _math.clamp)(this.focused.row, 0, this.template.length - 1);
      if (this.focused.slot > this.template[this.focused.row] - 1) this.focused.slot = 0;else if (this.focused.slot < 0) this.focused.slot = this.template[this.focused.row] - 1;
      this.focused.slot = (0, _math.clamp)(this.focused.slot, 0, this.template[this.focused.row] - 1);
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.enabled) return;
    }
  }, {
    key: "updateTemplate",
    value: function updateTemplate(template) {
      this.template = template.filter(function (t) {
        return t > 0;
      });
    }
  }, {
    key: "renderFocusable",
    value: function renderFocusable(pos, row, slot, render, width, height, ghost) {
      if (!this.enabled) return;
      var isFocused = this.focused.row == row && this.focused.slot == slot;
      var isGhostFocused = this.ghostFocused.row == row && this.ghostFocused.slot == slot;
      if (ghost && isFocused) this.ghostFocused = {
        row: row,
        slot: slot
      };
      render();

      if (isFocused || isGhostFocused && ghost) {
        this.rect({
          color: "rgba(0, 0, 0, 0)",
          width: (0, _math.safeValue)(width, 1),
          height: (0, _math.safeValue)(height, 1),
          position: pos.apply(Math.floor),
          stroke: {
            width: 4,
            color: _config.Color.ORANGE
          },
          opacity: isGhostFocused && !isFocused ? .2 : 1
        });
      }
    }
  }, {
    key: "renderDescriptionUI",
    value: function renderDescriptionUI(props) {
      var size = _config.Config.SPRITE_SIZE;
      var windowCenter = new _math.Vector2(innerWidth / 2, innerHeight / 2).apply(Math.floor);
      var margin = 6;
      var lineHeight = 22; // Container

      this.sprite("description-ui", {
        position: new _math.Vector2(0, size * 3).add(windowCenter),
        width: 7,
        height: 5
      }); // Icon

      props.renderIcon(new _math.Vector2(-2.5 * size + size / 2, size + 70).add(windowCenter)); // Texts

      var titleTextWrapped = (0, _math.wrapText)(props.title, 26);
      var specialText = props.specials.join("\n");
      var descriptionText = (0, _math.wrapText)(props.description, 31).text; // Title

      this.text(titleTextWrapped.text, {
        font: "20px Pixel",
        position: new _math.Vector2(-size * 1.3, size + 70 - size / 2 + 15).add(windowCenter),
        align: "left",
        color: props.titleColor || "#fff"
      }); // Specials

      this.text(specialText, {
        color: _config.Color.ORANGE,
        position: new _math.Vector2(-size * 1.3, size + 70 + margin + (titleTextWrapped.wrapCount >= 1 ? lineHeight : 0)).add(windowCenter),
        align: "left"
      }); // Description

      this.text(descriptionText, {
        position: new _math.Vector2(-size * 1.3, size + 70 + lineHeight + margin * 2 + lineHeight * titleTextWrapped.wrapCount + lineHeight * (props.specials.length - 1)).add(windowCenter),
        align: "left"
      });
    }
  }, {
    key: "renderProgressBar",
    value: function renderProgressBar(props) {
      if (!this.game) return;
      var width = props.width;
      var height = props.height;
      var progress = height * props.progress;
      var pos = props.position.apply(Math.floor);
      this.game.renderer.drawRect({
        width: (width + 10) / _config.Config.SPRITE_SIZE,
        height: (height + 10) / _config.Config.SPRITE_SIZE,
        position: pos.add(_math.Vector2.all(.5)),
        color: _config.Color.STONE_LAYER_COLOR,
        stroke: {
          color: props.strokeColor || _config.Color.ORANGE,
          width: 4
        },
        layer: props.layer || "ui"
      });
      this.game.renderer.drawRect({
        width: width / _config.Config.SPRITE_SIZE,
        height: progress / _config.Config.SPRITE_SIZE,
        position: pos.add(new _math.Vector2(0, (height - height * props.progress) / 2)).add(_math.Vector2.all(.5)),
        color: props.color || _config.Color.YELLOW,
        layer: props.layer || "ui"
      });
    }
  }, {
    key: "renderGroup",
    value: function renderGroup(pos, renders, gap, type) {
      var t = type || "row";
      renders.filter(function (props) {
        return props[0];
      }).map(function (renderProps, i) {
        var offset = i * (_config.Config.SPRITE_SIZE + (gap || 20));
        renderProps[1](pos.add(new _math.Vector2(t == "row" ? offset : 0, t == "column" ? offset : 0)));
      });
    } //

  }, {
    key: "spawnMessageText",
    value: function spawnMessageText(text) {
      (0, _Particles.SpawnParticles)(this.game, new _math.Vector2(20, innerHeight - 40), {
        // custom: new Text("store-text", text, { font: "22px Pixel" }),
        render: function render(renderer, part) {
          renderer.drawText({
            text: text,
            font: "22px Pixel",
            position: part.position,
            opacity: part.size,
            layer: "ui",
            align: "left"
          });
        },
        size: [5, 5],
        count: 1,
        gravity: 0,
        rotationVelocity: function rotationVelocity() {
          return (0, _math.random)(-.02, .02);
        },
        velocity: function velocity() {
          return new _math.Vector2(0, -1.5);
        },
        downSize: .08
      });
    }
  }, {
    key: "isFocused",
    value: function isFocused(row, slot) {
      return this.focused.row == row && this.focused.slot == slot;
    } // Render

  }, {
    key: "sprite",
    value: function sprite(assetName, props) {
      this.game.renderer.drawSprite(Object.assign(Object.assign({
        layer: "ui"
      }, props), {
        texture: (0, _math.asImage)(this.game.getAssetByName(assetName))
      }));
    }
  }, {
    key: "text",
    value: function text(_text, props) {
      this.game.renderer.drawText(Object.assign(Object.assign({
        layer: "ui"
      }, props), {
        text: _text
      }));
    }
  }, {
    key: "rect",
    value: function rect(props) {
      this.game.renderer.drawRect(Object.assign({
        layer: "ui"
      }, props));
    }
  }]);

  return UI;
}();

exports.UI = UI;
},{"../../config":"FxBD","../utils/math":"NgPq","./Particles":"zRqz"}],"LrNr":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemParent = void 0;

var _config = require("../../config");

var _engine = require("../../engine");

var _math = require("../../engine/utils/math");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ItemParent = /*#__PURE__*/function (_Sprite) {
  _inherits(ItemParent, _Sprite);

  var _super = _createSuper(ItemParent);

  function ItemParent(name, assetName, position, props) {
    var _this;

    _classCallCheck(this, ItemParent);

    _this = _super.call(this, name, assetName, Object.assign(Object.assign({}, props), {
      colliderType: "dynamic",
      position: position.expand()
    }));
    _this.radius = 4;
    _this.group = "items";
    _this.allowPickup = true;
    _this.picked = false;
    _this.liveStartElapsed = 0;
    _this.nearOnInit = false;
    _this.foldToPosition = _math.Vector2.zero();
    _this.collider.width = 6 * _config.Config.SPRITE_SCALE;
    _this.collider.height = 6 * _config.Config.SPRITE_SCALE;

    _this.acceleration.set(.8, .8);

    return _this;
  }

  _createClass(ItemParent, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(ItemParent.prototype), "init", this).call(this);

      this.liveStartElapsed = this.game.clock.elapsed;
      this.layer = "particles";
      this.velocity.set((0, _math.random)(-8, 8), (0, _math.random)(-8, 8));
      if (this.checkDistanceToPlayer(this.game.getChildById("player"), _config.Config.PICKUP_DISTANCE * 2)) this.nearOnInit = true;
    }
  }, {
    key: "update",
    value: function update() {
      _get(_getPrototypeOf(ItemParent.prototype), "update", this).call(this);

      if (this.picked) {
        var player = this.game.getChildById("player");
        if (player) this.whenPicked(player);
      }

      if (this.allowPickup) {
        // Move to player wire
        this.followPlayer(this.game.getChildById("player"));
        this.collideWidthOtherItems(this.game.children.filter(function (child) {
          return child.group == "items" && child.allowPickup && child.picked;
        }));
      } else {
        // Fold
        this.moveTo(this.foldToPosition);
        if (this.foldToPosition.distance(this.position) < 30) this.game.removeChildById(this.id);
      } // Change collider type


      this.collider.type = this.picked ? "dynamic" : "none";
    }
  }, {
    key: "pickup",
    value: function pickup(player, count) {
      player.pickup(this, this.name, count);
    }
  }, {
    key: "whenPicked",
    value: function whenPicked(player) {}
  }, {
    key: "followPlayer",
    value: function followPlayer(player) {
      if (!player) return;
      if (!this.checkDistanceToPlayer(player)) this.nearOnInit = false;
      if (this.nearOnInit) return;

      if (!this.picked && this.checkDistanceToPlayer(player)) {
        this.pickup(player, 1);
        this.picked = true;
      } else if (this.picked && player.wire.distance(this.position) > _config.Config.PICKUP_DISTANCE) {
        this.pickup(player, -1);
        this.picked = false;
      }

      if (!this.picked) return;
      this.moveTo(player.wire);
      this.game.renderer.drawLine({
        color: _config.ItemSettings[this.name] ? _config.ItemSettings[this.name].lineColor : "#fff",
        width: 2,
        points: [this.position, player.position],
        layer: "bg"
      });
    }
  }, {
    key: "checkDistanceToPlayer",
    value: function checkDistanceToPlayer(player, distance) {
      if (player) return player.position.distance(this.position) < (distance || _config.Config.PICKUP_DISTANCE);
    }
  }, {
    key: "collideWidthOtherItems",
    value: function collideWidthOtherItems(items) {
      var _this2 = this;

      if (!this.picked) return;
      items.map(function (item, index) {
        if (item.position.distance(_this2.position) < (_this2.radius + item.radius) * _config.Config.SPRITE_SCALE) {
          item.position.copy(item.position.add(item.position.sub(_this2.position).normalize()));
        }
      });
    }
  }, {
    key: "moveTo",
    value: function moveTo(position) {
      this.velocity.copy(this.velocity.add(position.sub(this.position).mul(.04)));
    }
  }]);

  return ItemParent;
}(_engine.Sprite);

exports.ItemParent = ItemParent;
},{"../../config":"FxBD","../../engine":"XaJu","../../engine/utils/math":"NgPq"}],"c1Ag":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Item = void 0;

var _ItemParent2 = require("./ItemParent");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Item = /*#__PURE__*/function (_ItemParent) {
  _inherits(Item, _ItemParent);

  var _super = _createSuper(Item);

  function Item(type, position, props) {
    var _this;

    _classCallCheck(this, Item);

    _this = _super.call(this, type, type, position, props);
    _this.itemType = type;
    return _this;
  }

  return _createClass(Item);
}(_ItemParent2.ItemParent);

exports.Item = Item;
},{"./ItemParent":"LrNr"}],"p04f":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RobotItem = void 0;

var _math = require("../../engine/utils/math");

var _Item2 = require("./Item");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var RobotItem = /*#__PURE__*/function (_Item) {
  _inherits(RobotItem, _Item);

  var _super = _createSuper(RobotItem);

  function RobotItem(position) {
    _classCallCheck(this, RobotItem);

    return _super.call(this, "item-robot", position, {
      scale: _math.Vector2.all(.8)
    });
  }

  _createClass(RobotItem, [{
    key: "whenPicked",
    value: function whenPicked(player) {
      _get(_getPrototypeOf(RobotItem.prototype), "whenPicked", this).call(this, player);

      if (player.position.y < 20) return;
      player.expectedActionType = {
        name: "place",
        priority: 0
      };
    }
  }]);

  return RobotItem;
}(_Item2.Item);

exports.RobotItem = RobotItem;
},{"../../engine/utils/math":"NgPq","./Item":"c1Ag"}],"DqRi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Robot = void 0;

var _config = require("../../config");

var _Particles = require("../../engine/components/Particles");

var _UI = require("../../engine/components/UI");

var _math = require("../../engine/utils/math");

var _RobotItem = require("../item/RobotItem");

var _Entity2 = require("./Entity");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Robot = /*#__PURE__*/function (_Entity) {
  _inherits(Robot, _Entity);

  var _super = _createSuper(Robot);

  function Robot(position) {
    var _this;

    _classCallCheck(this, Robot);

    _this = _super.call(this, "robot", "robot", {
      position: position.expand(),
      scale: _math.Vector2.zero()
    });
    _this.pickupButton = new _UI.Button();
    _this.playerIsNear = false;
    _this.movement = new _math.Vector2(0, 1);
    _this.allowAnimate = false;

    _this.acceleration.set(.95, .95);

    _this.stayAnimation = "robot";
    _this.breaked = false;
    _this.initElapsed = 0;
    _this.allowPickup = false;
    _this.digOffsetFactor = .1;
    return _this;
  }

  _createClass(Robot, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      _get(_getPrototypeOf(Robot.prototype), "init", this).call(this);

      this.scale.set();
      this.initElapsed = this.game.clock.elapsed;
      this.game.gamepad.onKeyDown(this.id, "enter", function () {
        if (!_this2.playerIsNear || !_this2.allowPickup) return; // Pickup robot

        _this2.pickupButton.click();

        _this2.pickup();

        console.log(true);
      }); // Play motor start sound

      this.sound.play(this.game, "motor-start", .5);
    }
  }, {
    key: "update",
    value: function update() {
      _get(_getPrototypeOf(Robot.prototype), "update", this).call(this); // Audio


      this.sound.update3D(this.game, this.position); // Allow pickup

      if (this.scale.mul(10).apply(Math.round).x >= 10 && !this.allowPickup) this.allowPickup = true; // If not in loaded chunk

      if (!this.game.generator.checkIsInLoadedChunk(this.position)) {
        this.velocity.set();
        return;
      }

      this.checkPlayerDistance();
      if (!this.breaked) this._move();
      if (!this.collider.collidesWith) return;
      var ore = this.game.getChildById(this.collider.collidesWith.id);
      if (!ore) return; // If robot cant destroy ore

      if (ore.needToolLevel > 2 && !this.breaked) {
        this.breaked = true;
      }

      this.dig(_config.Config.ROBOT_DAMAGE, _config.Config.ROBOT_HIT_SPEED, 2, "bottom");
    }
  }, {
    key: "render",
    value: function render() {
      _get(_getPrototypeOf(Robot.prototype), "render", this).call(this);

      this.scale.lerp(_math.Vector2.all(), .1); // Pickup button

      if (this.playerIsNear) {
        this.pickupButton.position = new _math.Vector2(0, -90).add(this.position);
        this.pickupButton.render(this.game);
        this.game.renderer.drawText({
          text: "Подобрать",
          position: new _math.Vector2(0, -50).add(this.position)
        });
      } // Smoke


      if (this.breaked) this.smoke();
    }
  }, {
    key: "_move",
    value: function _move() {
      this.velocity.copy(this.velocity.add(this.movement.mul(.2)));
    }
  }, {
    key: "smoke",
    value: function smoke() {
      if (this.game.clock.elapsed % 20 == 0) {
        (0, _Particles.SpawnParticles)(this.game, this.position, {
          render: function render(renderer, part) {
            renderer.drawRect({
              color: part.color,
              position: part.position,
              rotation: part.rotation,
              width: part.size / 5,
              height: part.size / 5,
              opacity: part.opacity
            });
          },
          colors: ["rgba(50, 50, 50, .8)"],
          count: 1,
          size: [1, 1.5],
          velocity: function velocity() {
            return new _math.Vector2((0, _math.random)(-1, 1), (0, _math.random)(-1, -3));
          },
          box: function box() {
            return new _math.Vector2((0, _math.random)(-10, 10), (0, _math.random)(-10, 10));
          },
          rotationVelocity: function rotationVelocity() {
            return (0, _math.random)(-1, 1) * .01;
          },
          downSize: -.025,
          downOpacity: .008,
          gravity: .01
        });
      }
    }
  }, {
    key: "checkPlayerDistance",
    value: function checkPlayerDistance() {
      var player = this.game.getChildById("player");
      if (!player) return;
      this.playerIsNear = player.position.distance(this.position) < _config.Config.ROBOT_PICKUP_DISTANCE;
    }
  }, {
    key: "pickup",
    value: function pickup() {
      this.game.add(new _RobotItem.RobotItem(this.position));
      this.game.initChildren();
      this.game.removeChildById(this.id);
      this.playerIsNear = false;
    }
  }]);

  return Robot;
}(_Entity2.Entity);

exports.Robot = Robot;
},{"../../config":"FxBD","../../engine/components/Particles":"zRqz","../../engine/components/UI":"gi9E","../../engine/utils/math":"NgPq","../item/RobotItem":"p04f","./Entity":"uf1p"}],"p1IV":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Player = exports.MaxToolLevel = void 0;

var _config = require("../../config");

var _math = require("../../engine/utils/math");

var _Entity2 = require("./Entity");

var _Robot = require("./Robot");

var _engine = require("../../engine");

var _Particles = require("../../engine/components/Particles");

var _UI = require("../../engine/components/UI");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var MaxToolLevel = 4;
exports.MaxToolLevel = MaxToolLevel;
var tools = {
  "1": {
    speed: 16,
    damage: 2
  },
  "2": {
    speed: 16,
    damage: 4
  },
  "3": {
    speed: 10,
    damage: 3
  },
  "4": {
    speed: 14,
    damage: 8
  },
  "5": {
    speed: 5,
    damage: 80
  },
  "6": {
    speed: 16,
    damage: 6
  }
};

var Player = /*#__PURE__*/function (_Entity) {
  _inherits(Player, _Entity);

  var _super = _createSuper(Player);

  function Player() {
    var _this;

    _classCallCheck(this, Player);

    _this = _super.call(this, "player", "player-stay", {
      position: new _math.Vector2(_config.Config.WORLD_WIDTH * _config.Config.SPRITE_SIZE / 2, -_config.Config.SPRITE_SIZE),
      layer: "player"
    });
    _this.hp = 12;
    _this.oxygenHungry = false;
    _this.oxygenHungryTimer = new _engine.Timer(_config.Config.OXYGEN_HUNGRY_TIME);
    _this.god = false;
    _this.ui = new _UI.UI();
    _this.respawnTimer = new _engine.Timer(_config.Config.RESPAWN_TIME);
    _this.animatedDieUI = 0;
    _this.tries = 2;
    _this.dieMessage = "respawn";
    _this.wire = _this.position.expand();
    _this.inventory = {
      totalCount: 0,
      slots: {}
    };
    _this.toolLevel = _config.Config.ALLOW_HUNK ? 5 : 1;
    _this.allowPlaceRobot = false;
    _this.allowEatFood = false;
    _this.actionType = null;
    _this.expectedActionType = null;
    _this.actionText = {
      "grab": "cобрать",
      "place": "установить",
      "eat": "съесть"
    };
    _this.hasGps = false;
    _this.hasBottle = false;
    _this.gpsMarkers = [new _math.Vector2(_config.Config.HOME_POSITION_X, _config.Config.HOME_POSITION_Y)];
    _this.damageAnimatedOpacity = 0;
    _this.animatedCameraRotation = 0;
    _this.animatedTimerScale = 1;
    window.addEventListener("keydown", function (e) {
      if (_config.Config.ALLOW_HUNK || window.MODER_CHEAT || _config.Config.IS_DEV) {
        if (e.code == "KeyT") {
          _this.collider.collidable = !_this.collider.collidable;
          _this.moveSpeed = !_this.collider.collidable ? 60 : _this.initialMoveSpeed;
          _this.toolLevel = 5; // this.hasBottle = true;

          _this.hasGps = true;
          _this.god = true;
          _this.storage.contains = {
            totalCount: 0,
            slots: {
              "raw-grade-cidium": {
                count: 2
              },
              "ready-cidium": {
                count: 2
              },
              "battery": {
                count: 2
              },
              "item-robot": {
                count: 2
              },
              "food-fetus": {
                count: 2
              },
              "raw-cidium": {
                count: 2
              },
              "raw-manty": {
                count: 1
              },
              "raw-rady": {
                count: 1
              }
            }
          };

          _this.storage.calculateTotalCount();
        }
      }
    });
    return _this;
  }

  _createClass(Player, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      _get(_getPrototypeOf(Player.prototype), "init", this).call(this);

      this.ui.init(this.game);
      var tries = this.game.loadKey("tries", 2);
      this.tries = tries <= 0 ? 2 : tries;
      this.hp = this.game.loadKey("player-hp", 12);
      this.toolLevel = this.game.loadKey("player-toolLevel", 1);
      this.collider.width = 10 * _config.Config.SPRITE_SCALE;
      this.collider.height = 10 * _config.Config.SPRITE_SCALE;
      this.collider.offset = new _math.Vector2(3, 0); // Set robot

      this.game.gamepad.onKeyDown(this.id, "enter", function () {
        if (_this2.checkItemInInventory("item-robot") && _this2.allowPlaceRobot) _this2.placeRobot();

        _this2.useFood();
      });
      this.saveData(); // Gears

      this.storage = this.game.getChildById("gear-storage");
      this.recycler = this.game.getChildById("gear-recycler");
      this.oxygenGenerator = this.game.getChildById("gear-oxygen-generator");
    }
  }, {
    key: "update",
    value: function update() {
      _get(_getPrototypeOf(Player.prototype), "update", this).call(this);

      this.game.renderer.layers["ui"].render = !(this.dead || this.regaining); // Timers

      this.respawnTimer.update(this.game.clock.elapsed);
      this.oxygenHungryTimer.update(this.game.clock.elapsed); // Animations
      // Dead

      if (this.dead) {
        this.playAnimation("player-dead", 5, 26, false);

        if (this.frame.x >= 5) {
          if (!this.respawnTimer.started) this.animatedDieUI = -4;
          this.respawnTimer.start(this.game.clock.elapsed);
        }

        if (this.respawnTimer.isTriggered()) {
          // Respawn
          if (this.tries > 0) this.respawn();else {
            this.respawn();
            this.gameOver();
          }
        }
      }

      if (this.regaining) {
        this.playAnimation("player-dead", 5, 26, false, true); // Awake

        if (this.frame.x <= 0) {
          this.regaining = false;
          this.allowMove = true;
          this.interest = true;
          this.inventory = {
            totalCount: 0,
            slots: {}
          };
        }
      }

      this.movement.set(+this.game.gamepad.keys.right - +this.game.gamepad.keys.left, +this.game.gamepad.keys.down - +this.game.gamepad.keys.up);
      this.move();
      this.pullWire();
      this.changeActionType(); // this.putGpsMarkers();

      this.allowEatFood = this.checkItemInInventory("food-fetus") && this.hp <= 11;
      this.allowPlaceRobot = this.position.y > 20; // Oxygen hungry

      this.doOxygenHungry(); // Sounds

      this.footsStep(); // Slow

      this.moveSpeedDown = (this.checkItemInInventory("raw-nerius") ? 2 : 0) + (this.checkItemInInventory("ready-cidium") ? -2 : 0); // Dig

      this.digging(); //

      this.damageAnimatedOpacity = (0, _math.lerp)(this.damageAnimatedOpacity, 0, .05);
    }
  }, {
    key: "render",
    value: function render() {
      _get(_getPrototypeOf(Player.prototype), "render", this).call(this);

      this.renderUI();
    }
  }, {
    key: "changeActionType",
    value: function changeActionType() {
      var _a;

      if (this.game.tick(40)) this.expectedActionType = null;

      if (this.expectedActionType) {
        if (this.actionType) {
          if (this.expectedActionType.name != ((_a = this.actionType) === null || _a === void 0 ? void 0 : _a.name) && this.actionType.priority < this.expectedActionType.priority) this.actionType = this.expectedActionType;
        } else {
          this.actionType = this.expectedActionType;
        }
      } else this.actionType = null;
    }
  }, {
    key: "pickup",
    value: function pickup(item, type, count) {
      this.inventory.slots[type] = this.inventory.slots[type] || {
        count: 0,
        instances: []
      };
      this.inventory.slots[type].count += count;
      var instances = this.inventory.slots[type].instances;
      this.inventory.slots[type].instances.push(item);
      this.inventory.slots[type].instances = instances.filter(function (i, index) {
        return instances.indexOf(i) == index;
      });
      this.calculateTotalCount();
    }
  }, {
    key: "calculateTotalCount",
    value: function calculateTotalCount() {
      var _this3 = this;

      this.inventory.totalCount = 0;
      this.getInventorySlotNames().map(function (slotName) {
        _this3.inventory.totalCount += _this3.inventory.slots[slotName].count;
      });
      this.saveData();
    }
  }, {
    key: "pullWire",
    value: function pullWire() {
      if (this.position.distance(this.wire) > _config.Config.WIRE_LENGTH) {
        var to = this.position.sub(this.wire).normalize().mul(this.moveSpeed - this.moveSpeedDown);
        this.wire.x += to.x;
        this.wire.y += to.y; // this.wire.copy(this.wire.add(this.position.sub(this.wire).normalize().mul(this.moveSpeed - this.moveSpeedDown)));
      }
    }
  }, {
    key: "hit",
    value: function hit(damage) {
      if (!this.damaged) {
        this.damageAnimatedOpacity = 1.5;
        this.game.camera.shake();
        this.saveData();
      }

      _get(_getPrototypeOf(Player.prototype), "hit", this).call(this, damage);
    }
  }, {
    key: "die",
    value: function die() {
      if (this.dead) return;
      this.frame.x = 0;
      this.tries--;
      this.oxygenHungry = false;
      this.oxygenHungryTimer.reset();
      this.animatedDieUI = -6;
      this.allowMove = false;
      this.allowMove = false;
      this.interest = false;
      this.dead = true;
      this.saveData();
    }
  }, {
    key: "respawn",
    value: function respawn() {
      if (this.oxygenGenerator.oxygenLevel <= 10) {
        this.oxygenGenerator.oxygenLevel += 30;
        this.oxygenGenerator.batteryLevel += 80;
      }

      this.respawnTimer.reset();
      this.hp = 12;
      this.frame.x = 5;
      this.interest = false;
      this.dead = false;
      this.regaining = true;
      this.position.copy(this.startPosition);
      this.wire.copy(this.position.expand());
      this.game.camera.position.copy(this.position);
      this.inventory = {
        totalCount: 0,
        slots: {}
      };
      this.gpsMarkers = [new _math.Vector2(_config.Config.HOME_POSITION_X, _config.Config.HOME_POSITION_Y)];
      this.saveData();
    }
  }, {
    key: "gameOver",
    value: function gameOver() {
      this.game.clearAllKeys();
      this.oxygenGenerator.reset();
      this.storage.reset();
      this.recycler.reset();
      this.game.generator.reset();
      this.reset();
    }
  }, {
    key: "heal",
    value: function heal(_heal) {
      if (this.hp >= 12) return;
      this.hp += _heal;
      this.hp = (0, _math.clamp)(this.hp, 0, 12);
      this.spawnText("+".concat(_heal), undefined, _config.Color.GREEN);
      this.saveData();
    }
  }, {
    key: "digging",
    value: function digging() {
      var tool = tools[this.toolLevel.toString()];
      if (this.movement.x != 0) this.dig(tool.damage, tool.speed, this.toolLevel, this.movement.x > 0 ? "right" : "left");else if (this.movement.y != 0) this.dig(tool.damage, tool.speed, this.toolLevel, this.movement.y > 0 ? "bottom" : "top");
    }
  }, {
    key: "upgradeTool",
    value: function upgradeTool(levelUp) {
      if (this.toolLevel >= MaxToolLevel) return;
      this.toolLevel += levelUp;
      (0, _Particles.SpawnUpgradeParticles)(this.game, this.position);
      this.saveData();
    }
  }, {
    key: "placeRobot",
    value: function placeRobot() {
      if (this.checkItemInInventory("item-robot")) {
        // Sub. robots count in inventory
        this.inventory.slots["item-robot"].count--; // Remove robot inventory instance

        this.game.removeChildById(this.inventory.slots["item-robot"].instances[0].id);
        this.inventory.slots["item-robot"].instances.splice(0, 1);
        this.calculateTotalCount();
      } // Place robot


      this.game.add(new _Robot.Robot(this.position.div(_config.Config.SPRITE_SIZE).add(_math.Vector2.all(.5)).apply(Math.floor).mul(_config.Config.SPRITE_SIZE)));
      this.game.initChildren();
      this.saveData();
    }
  }, {
    key: "foldItemsTo",
    value: function foldItemsTo(slotName, count, position) {
      var _this4 = this;

      var slotInstances = this.inventory.slots[slotName].instances.filter(function (item) {
        return _this4.game.children.indexOf(item) >= 0 && item.picked;
      });

      for (var i = 0; i < count; i++) {
        if (slotInstances[i] && slotInstances[i].picked) {
          slotInstances[i].allowPickup = false;
          slotInstances[i].picked = false;
          slotInstances[i].foldToPosition = position;
        }
      }

      this.inventory.slots[slotName].instances.splice(0, count);
      this.inventory.slots[slotName].count -= count;
      this.calculateTotalCount();
    }
  }, {
    key: "useFood",
    value: function useFood() {
      if (this.allowEatFood) {
        var foodSlotNames = this.getInventorySlotNames().filter(function (slotName) {
          return slotName.indexOf("food") >= 0;
        });
        this.inventory.slots[foodSlotNames[0]].instances[0].onEat(this);
        this.game.removeChildById(this.inventory.slots[foodSlotNames[0]].instances[0].id);
        this.inventory.slots[foodSlotNames[0]].count--;
        this.inventory.slots[foodSlotNames[0]].instances.splice(0, 1);
      }
    }
  }, {
    key: "doOxygenHungry",
    value: function doOxygenHungry() {
      if (this.dead) return;

      if (this.oxygenGenerator.oxygenLevel <= 0) {
        this.oxygenHungryTimer.start(this.game.clock.elapsed);
        this.oxygenHungry = true;
      }

      if (this.oxygenHungry) {
        if (this.oxygenHungryTimer.isTriggered()) this.die();
      }
    }
  }, {
    key: "putGpsMarkers",
    value: function putGpsMarkers() {
      var _this5 = this;

      if (!this.hasGps) return;
      var near = this.gpsMarkers.filter(function (marker) {
        return _this5.position.distance(marker) < _config.Config.GPS_MARKERS_DISTANCE;
      });

      if (near.length == 0) {
        this.gpsMarkers.push(this.position.expand());
        if (this.gpsMarkers.length > _config.Config.MAX_GPS_MARKERS) this.gpsMarkers.splice(0, 1);
      }
    } // > Render

  }, {
    key: "renderUI",
    value: function renderUI() {
      var _this6 = this;

      if (this.dead && this.respawnTimer.started) this.renderDieUI();
      if (this.game.paused) return;
      var size = _config.Config.SPRITE_SIZE;
      var windowCenter = new _math.Vector2(innerWidth / 2, innerHeight / 2);
      this.renderOxygenHungryUI();
      this.renderHealthUI();
      this.renderGpsUI(); // Tip text

      if (this.actionType && this.actionText[this.actionType.name]) this.ui.text("[OK] - ".concat(this.actionText[this.actionType.name]), {
        position: new _math.Vector2(0, 150).add(windowCenter)
      }); //

      this.ui.renderGroup(new _math.Vector2(size, size), [[true, function (pos) {
        // Tool level
        _this6.ui.sprite("tools", {
          position: pos
        });

        _this6.ui.text(_this6.toolLevel + "ур.", {
          position: pos.add(_math.Vector2.all(size * .3)),
          font: "22px Pixel"
        });
      }], [this.hasBottle, function (pos) {
        _this6.ui.sprite("bottle", {
          position: pos
        });
      }], [this.hasGps, function (pos) {
        _this6.ui.sprite("gps", {
          position: pos
        });
      }]]); // Damage vignette

      this.ui.sprite("damage", {
        width: innerWidth / _config.Config.SPRITE_SIZE,
        height: innerHeight / _config.Config.SPRITE_SIZE,
        position: new _math.Vector2(innerWidth / 2, innerHeight / 2),
        framed: false,
        opacity: this.damageAnimatedOpacity
      });
    }
  }, {
    key: "renderGpsUI",
    value: function renderGpsUI() {
      if (!this.hasGps) return; // Home icon

      var paddings = 120;
      var windowCenter = new _math.Vector2(innerWidth / 2, innerHeight / 2);
      var screenOffset = new _math.Vector2(this.game.camera.position.x, this.game.camera.position.y);
      var homePos = new _math.Vector2(_config.Config.HOME_POSITION_X, _config.Config.HOME_POSITION_Y);
      var homeScreenPos = homePos.sub(screenOffset).add(windowCenter);

      if (!(homeScreenPos.x >= paddings && homeScreenPos.x <= innerWidth - paddings) || !(homeScreenPos.y >= paddings && homeScreenPos.y <= innerHeight - paddings)) {
        var pos = homeScreenPos.clamp(paddings, innerWidth - paddings, paddings, innerHeight - paddings);
        this.ui.sprite("home-icon", {
          position: pos,
          scale: _math.Vector2.all(.8)
        });
        this.ui.text(Math.floor(this.position.distance(homePos) / _config.Config.SPRITE_SIZE).toString(), {
          position: pos.add(new _math.Vector2(0, 40))
        });
      }
    }
  }, {
    key: "renderGpsMarkers",
    value: function renderGpsMarkers() {
      var lastMarker = this.gpsMarkers[this.gpsMarkers.length - 1];
      var allowLineToPlayer = lastMarker ? this.position.distance(lastMarker) < _config.Config.GPS_MARKERS_DISTANCE : false;
      this.game.renderer.drawWeb({
        points: [].concat(_toConsumableArray(this.gpsMarkers), _toConsumableArray(allowLineToPlayer ? [this.position.expand()] : [])),
        width: 2,
        layer: "particles"
      });
    }
  }, {
    key: "renderDieUI",
    value: function renderDieUI() {
      var size = _config.Config.SPRITE_SIZE;
      var windowCenter = new _math.Vector2(innerWidth / 2, innerHeight / 2); // this.animatedDieUI = 10;

      this.animatedDieUI = (0, _math.clamp)((0, _math.lerp)(this.animatedDieUI, 4, .005), 0, 4);
      var titleText = this.tries > 0 ? "Все совершают ошибки..." : "Все совершают ошибки, на которые нужен шанс...";
      var subtitleText = this.tries > 0 ? "Последний шанс, чтобы их исправить" : "Шанс, который вы упустили";
      var timerText = this.tries > 0 ? "\u0422\u0435\u0431\u044F \u043F\u0440\u0438\u0432\u0435\u0434\u0443\u0442 \u0432 \u0441\u043E\u0437\u043D\u0430\u043D\u0438\u0435 \u0447\u0435\u0440\u0435\u0437:\n0:".concat(this.respawnTimer.elapsedSeconds) : "\u0422\u0435\u0431\u044F \u0437\u0430\u043C\u0435\u043D\u0438\u0442 \u0434\u0440\u0443\u0433\u043E\u0439 \u0434\u043E\u0431\u0440\u043E\u0432\u043E\u043B\u0435\u0446 \u0447\u0435\u0440\u0435\u0437:\n0:".concat(this.respawnTimer.elapsedSeconds); // BG

      this.ui.rect({
        color: "#000",
        width: innerWidth / size,
        height: innerHeight / size,
        position: windowCenter,
        layer: "upper-ui",
        opacity: (0, _math.clamp)(this.animatedDieUI, .5, 1.5) - .5
      }); // Texts

      this.ui.text(titleText, {
        font: "34px Pixel",
        opacity: (0, _math.clamp)(this.animatedDieUI, 1, 2) - 1,
        stroke: {
          width: 0,
          color: "#000"
        },
        position: new _math.Vector2().add(windowCenter),
        layer: "upper-ui"
      });
      this.ui.text(subtitleText, {
        opacity: (0, _math.clamp)(this.animatedDieUI, 1.5, 2.5) - 1.5,
        stroke: {
          width: 0,
          color: "#000"
        },
        position: new _math.Vector2(0, 30).add(windowCenter),
        layer: "upper-ui"
      });
      this.ui.text(timerText, {
        opacity: (0, _math.clamp)(this.animatedDieUI, 2.5, 3.5) - 2.5,
        stroke: {
          width: 0,
          color: "#000"
        },
        position: new _math.Vector2(0, 80).add(windowCenter),
        layer: "upper-ui"
      });
    }
  }, {
    key: "renderHealthUI",
    value: function renderHealthUI() {
      var size = _config.Config.SPRITE_SIZE;
      var pos = new _math.Vector2(innerWidth - size, size);

      for (var i = 0; i < 4; i++) {
        var frame = 0;
        if (i == 0 && this.hp <= 11 || i == 1 && this.hp <= 8 || i == 2 && this.hp <= 5 || i == 3 && this.hp <= 1) frame = 1;
        if (i == 0 && this.hp <= 9 || i == 1 && this.hp <= 6 || i == 2 && this.hp <= 3 || i == 3 && this.hp <= 0) frame = 2;
        var sine = Math.sin(this.game.clock.elapsed / 10 + i) * 2 * frame;
        this.ui.sprite("health", {
          frame: new _math.Vector2(frame),
          scale: _math.Vector2.all(.8),
          position: pos.add(new _math.Vector2(-i * size * .6, sine))
        });
      }
    }
  }, {
    key: "renderOxygenHungryUI",
    value: function renderOxygenHungryUI() {
      if (!this.oxygenHungry) return;
      this.animatedTimerScale = (0, _math.lerp)(this.animatedTimerScale, 1, .2);
      if (this.oxygenHungryTimer.elapsed / 60 % 1 == 0) this.animatedTimerScale = this.oxygenHungryTimer.elapsedSeconds < 20 ? 1.5 : 1.2;
      this.ui.text("Кислородное голодание!", {
        position: new _math.Vector2(innerWidth / 2, 100),
        font: "24px Pixel",
        layer: "upper-ui"
      });
      this.ui.text("\u0412\u044B \u043F\u043E\u0442\u0435\u0440\u044F\u0435\u0442\u0435 \u0441\u043E\u0437\u043D\u0430\u043D\u0438\u0435 \u0447\u0435\u0440\u0435\u0437:", {
        position: new _math.Vector2(innerWidth / 2, 130),
        layer: "upper-ui"
      });
      this.ui.text("0:".concat(Math.floor(this.oxygenHungryTimer.elapsedSeconds)), {
        position: new _math.Vector2(innerWidth / 2, 180),
        scale: _math.Vector2.all(this.animatedTimerScale),
        font: "30px Pixel",
        layer: "upper-ui"
      });
    }
  }, {
    key: "footsStep",
    value: function footsStep() {
      var _a, _b, _c, _d;

      var allow = this.velocity.x > 0 && !((_a = this.collider.collidesWith) === null || _a === void 0 ? void 0 : _a.right) || this.velocity.x < 0 && !((_b = this.collider.collidesWith) === null || _b === void 0 ? void 0 : _b.left) || this.velocity.y < 0 && !((_c = this.collider.collidesWith) === null || _c === void 0 ? void 0 : _c.top) || this.velocity.y > 0 && !((_d = this.collider.collidesWith) === null || _d === void 0 ? void 0 : _d.bottom);
      if (this.game.clock.elapsed % 20 == 0 && allow) this.sound.play(this.game, "step-".concat(Math.floor((0, _math.random)(1, 4))), .3);
    }
  }, {
    key: "getInventorySlotNames",
    value: function getInventorySlotNames() {
      return Object.keys(this.inventory.slots);
    }
  }, {
    key: "checkItemInInventory",
    value: function checkItemInInventory(name) {
      return this.inventory.slots[name] && this.inventory.slots[name].count > 0;
    }
  }, {
    key: "saveData",
    value: function saveData() {
      this.game.saveKey("tries", this.tries.toString());
      this.game.saveKey("player-hp", this.hp.toString());
      this.game.saveKey("player-toolLevel", this.toolLevel.toString());
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this7 = this;

      this.toolLevel = 1;
      [].concat(_toConsumableArray(this.game.getChildrenByName("ore")), _toConsumableArray(this.game.getChildrenByName("item"))).map(function (child) {
        _this7.game.removeChildById(child.id);
      });
    }
  }]);

  return Player;
}(_Entity2.Entity);

exports.Player = Player;
},{"../../config":"FxBD","../../engine/utils/math":"NgPq","./Entity":"uf1p","./Robot":"DqRi","../../engine":"XaJu","../../engine/components/Particles":"zRqz","../../engine/components/UI":"gi9E"}],"ZerP":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initLevel = initLevel;

var _config = require("../config");

var _math = require("../engine/utils/math");

function initLevel(game) {
  function render() {
    var op = (1 - game.camera.position.y / 240) * .3;

    for (var i = 0; i < _config.Config.WORLD_WIDTH; i++) {
      game.renderer.drawSprite({
        width: 4,
        height: 4,
        frame: new _math.Vector2(i % 2, 0),
        texture: (0, _math.asImage)(game.getAssetByName("ground")),
        position: new _math.Vector2(-_config.Config.SPRITE_SIZE * 10 + i * _config.Config.SPRITE_SIZE * 4, -_config.Config.SPRITE_SIZE * .5 * 3),
        opacity: (0, _math.clamp)(op, 0, 1),
        layer: "bg"
      });
    }
  }

  return {
    render: render
  };
}
},{"../config":"FxBD","../engine/utils/math":"NgPq"}],"dSHS":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ObjectNames = void 0;

var _math = require("./engine/utils/math");

var prefixes = {
  raw: "Необработанный",
  ready: "Обработанный"
};
var ObjectNames = {
  "basics": {
    name: "Базовые знания",
    desc: "",
    special: ["> Следите за запасом кислорода!\nИ не забывайте заряжать генератор\nпри помощи батареи", "> Остерегайтесь обрушений!", "> Следите за запасом здоровья.\nЧтобы вылечится достаточно съесть\nисцеляющий фрукт"]
  },
  // Raw
  "raw-cidium": {
    name: (0, _math.buildName)(prefixes.raw, "цидиум"),
    desc: "Жёлтая руда, которая непонятным образом выделяет энергию, если её правильно обработать. При этом её очень легко найти"
  },
  "raw-osmy": {
    name: (0, _math.buildName)(prefixes.raw, "осмий"),
    desc: "Осмий, кристалы, которые также есть и на земле. Казалось бы, ничего интересного, но вместе с цидиумом, осмий будет очень полезен"
  },
  "raw-grade-cidium": {
    name: (0, _math.buildName)(prefixes.raw, "второсортный цидиум"),
    desc: "Цидиум 2-го сорта, руда, иногда встречающаяся вместе с осмием. Выделяет менее сильную энергию, чем цидиум"
  },
  "raw-antin": {
    name: (0, _math.buildName)(prefixes.raw, "антин"),
    desc: "Антин, крайне странная руда, имеющая красный оттенок. Предположительно кристалы, которые миллионы лет назад из-за вулканической активности. Не зря они расположены ближе к мантии"
  },
  "raw-rady": {
    name: (0, _math.buildName)(prefixes.raw, "радий"),
    desc: "Радий... Нам не удалось его подробно изучить. Известно только, то что он очень глубоко под землёй и излучает радиационный фон до 67.2 мк/ч, что выше нормы в 4 раза",
    special: ["> Требуется специальная колба для сбора!"]
  },
  "raw-nerius": {
    name: (0, _math.buildName)(prefixes.raw, "нериус"),
    desc: "Нериус, невероятно плотная руда, что значит она ещё и очень тяжёлая. 1см² весит около 300 грамм",
    special: ["> Довольно сильно замедляет вас!"]
  },
  "raw-manty": {
    name: "Мантий",
    desc: "Мантий... Это то, для чего ты здесь. Но будь осторожен, он очень горячий, до 1200 С°",
    special: ["> Требуется специальная колба для сбора!"]
  },
  // Ready
  "ready-cidium": {
    name: (0, _math.buildName)(prefixes.ready, "цидиум"),
    desc: "Обработанный цидиум, способен генерировать энегрию. Используется в создании батареи и других крафтов"
  },
  // Recipes
  "recipe-storage-upgrade": {
    name: "Улучшить хранилище",
    desc: "Улучшите своё хранилище для того, чтобы можно было хранить больше ресурсов и их типов."
  },
  "recipe-tools-upgrade": {
    name: "Улучшить инструмент",
    desc: "Для того чтобы быстрее ломать руду прокачайте свой инструмент. Более новые уровни инструмента позволяют добывать больше типов руд"
  },
  // Items
  "bottle": {
    name: "\"Специальная колба\"",
    desc: "Колба для сбора особо опасных руд. На пример таких, как радий"
  },
  "gps": {
    name: "GPS",
    desc: "Показывает, в какой стороне ваша база и автоматически ставит метки"
  },
  "battery": {
    name: "Батарея",
    desc: "Да будет свет! При помощи него можно зарядить генератор"
  },
  "drill": {
    name: "Бур",
    desc: "Изпользуется в квафте чего-либо"
  },
  "box": {
    name: "Корпус",
    desc: "Прочный корпус из нериуса. Из него можно что-нибудь соорудить"
  },
  "card": {
    name: "Плата",
    desc: "Умная плата для различных приборов"
  },
  "item-robot": {
    name: "Робот",
    desc: "Ваш лисный робот-компаньон. Копает небольшой тунель вниз. Безсилен против базальта"
  },
  // Food
  "food-fetus": {
    name: "Исцеляющий плод",
    desc: "Сладкий плод цветущей лозы, востонавливает запас крови"
  },
  // Gear
  "gear-storage": {
    name: "Хранилище",
    desc: ""
  },
  "gear-recycler": {
    name: "Переработчик",
    desc: ""
  },
  "gear-upgrader": {
    name: "Улучшатель",
    desc: ""
  },
  "gear-oxygen-generator": {
    name: "Генератор кислорода",
    desc: ""
  },
  "gear-documentation": {
    name: "Справочник добровольца",
    desc: ""
  }
};
exports.ObjectNames = ObjectNames;
},{"./engine/utils/math":"NgPq"}],"IWn5":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MaxGearLevel = exports.Gear = void 0;

var _config = require("../../config");

var _engine = require("../../engine");

var _Sound = require("../../engine/components/Sound");

var _Particles = require("../../engine/components/Particles");

var _UI = require("../../engine/components/UI");

var _math = require("../../engine/utils/math");

var _names = require("../../names");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var MaxGearLevel = 3;
exports.MaxGearLevel = MaxGearLevel;

var Gear = /*#__PURE__*/function (_Sprite) {
  _inherits(Gear, _Sprite);

  var _super = _createSuper(Gear);

  function Gear(type, level, props) {
    var _this;

    _classCallCheck(this, Gear);

    _this = _super.call(this, type, [type, 1].join("-"), Object.assign({
      layer: "game",
      colliderType: "none"
    }, props));
    _this.width = _this.height = 2;
    _this.sound = new _Sound.Sound();
    _this.ui = new _UI.UI();
    _this.interactButton = new _UI.Button();
    _this.player = undefined;
    _this.maxRowItemsCount = 5;
    _this.gearType = type;
    _this.level = level;
    _this.playerIsNear = false;
    _this.allowInteract = true;
    _this.allowActionButton = true;
    _this.actionButtonAssetName = "close";
    _this.headerOffset = new _math.Vector2();
    _this.interactText = "";
    _this.tipText = "закрыть";
    return _this;
  }

  _createClass(Gear, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      _get(_getPrototypeOf(Gear.prototype), "init", this).call(this);

      this.ui.init(this.game);
      this.ui.enabled = false;
      this.player = this.game.getChildById("player");
      this.game.gamepad.onKeyDown(this.id, "enter", function () {
        if (!_this2.playerIsNear) return;
        if (_this2.ui.enabled) _this2.onUIAction();
        if (_this2.player) _this2.onInteract();
      });
    }
  }, {
    key: "update",
    value: function update() {
      _get(_getPrototypeOf(Gear.prototype), "update", this).call(this);

      if (this.game.paused) this.ui.enabled = false;
      this.checkInteract();
    }
  }, {
    key: "render",
    value: function render() {
      _get(_getPrototypeOf(Gear.prototype), "render", this).call(this);

      this.renderUI();
      this.renderOutline();
      if (this.allowActionButton) this.renderActionButton();
    }
  }, {
    key: "renderUI",
    value: function renderUI() {
      this.ui.render();

      if (this.ui.enabled) {
        var size = _config.Config.SPRITE_SIZE;
        var windowCenter = new _math.Vector2(innerWidth / 2, innerHeight / 2).apply(Math.floor); // Background

        this.ui.rect({
          color: "rgba(0, 0, 0, .6)",
          width: innerWidth / _config.Config.SPRITE_SIZE,
          height: innerHeight / _config.Config.SPRITE_SIZE,
          position: new _math.Vector2(innerWidth / 2, innerHeight / 2)
        }); // Container

        this.ui.sprite([this.gearType.replace("gear-", ""), "ui"].join("-"), {
          position: new _math.Vector2(0, -size).add(windowCenter),
          width: 7,
          height: 5
        }); // Title

        this.ui.text("".concat(_names.ObjectNames[this.name].name, " ").concat(this.level, "\u0443\u0440."), {
          position: new _math.Vector2(-size * 2.25, -size - 15).add(windowCenter).add(this.headerOffset),
          align: "left"
        }); // Tip text

        this.ui.text("[OK] - ".concat(this.tipText), {
          position: new _math.Vector2(-size * 3 + 20, -size * 2 - 40).add(windowCenter).add(this.headerOffset),
          align: "left"
        });
      } // Draw interact button


      if (this.playerIsNear && !this.ui.enabled) {
        this.interactButton.position = this.position.add(new _math.Vector2(0, -10 - this.height * 50));
        this.interactButton.render(this.game);
      }
    }
  }, {
    key: "renderOutline",
    value: function renderOutline() {
      if (this.playerIsNear && this.allowInteract) {
        // Draw gear outline
        this.game.renderer.drawSprite({
          texture: (0, _math.asImage)(this.game.getAssetByName([this.gearType, 1, "outline"].join("-"))),
          width: this.width,
          height: this.height,
          position: this.position,
          layer: this.layer,
          flip: this.flip
        }); // Interact text

        this.game.renderer.drawText({
          text: this.interactText,
          font: "22px Pixel",
          position: this.position.add(new _math.Vector2(0, -70)),
          layer: "game-ui"
        });
      }
    }
  }, {
    key: "renderActionButton",
    value: function renderActionButton() {
      var _this3 = this;

      var size = _config.Config.SPRITE_SIZE;
      var windowCenter = new _math.Vector2(innerWidth / 2, innerHeight / 2).apply(Math.floor);
      var pos = new _math.Vector2(size * 2, -size - 20).add(windowCenter).add(this.headerOffset);
      this.ui.renderFocusable(pos.add(new _math.Vector2(-2, 2)), 0, 0, function () {
        _this3.ui.sprite(_this3.actionButtonAssetName, {
          position: pos
        });
      }, 14 / _config.Config.SPRITE_PIXEL_SIZE);
    }
  }, {
    key: "upgrade",
    value: function upgrade(levelUp) {
      if (this.level < MaxGearLevel) {
        this.level += levelUp;
        (0, _Particles.SpawnUpgradeParticles)(this.game, this.position);
      }
    }
  }, {
    key: "checkInteract",
    value: function checkInteract() {
      if (!this.player) return;
      this.playerIsNear = this.player.position.distance(this.position) < _config.Config.GEAR_INTERACT_DISTANCE && (this.player.position.x > this.position.x && this.player.flip.x || this.player.position.x < this.position.x && !this.player.flip.x);

      if (this.playerIsNear) {
        if (!this.player.dead) this.player.allowMove = !this.ui.enabled;else this.ui.enabled = false;
      }
    }
  }, {
    key: "onInteract",
    value: function onInteract() {
      this.interactButton.click();
    }
  }, {
    key: "onUIAction",
    value: function onUIAction() {}
  }, {
    key: "saveData",
    value: function saveData() {}
  }, {
    key: "reset",
    value: function reset() {
      this.level = 1;
      this.saveData();
    }
  }]);

  return Gear;
}(_engine.Sprite);

exports.Gear = Gear;
},{"../../config":"FxBD","../../engine":"XaJu","../../engine/components/Sound":"imsH","../../engine/components/Particles":"zRqz","../../engine/components/UI":"gi9E","../../engine/utils/math":"NgPq","../../names":"dSHS"}],"o403":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Documentation = void 0;

var _config = require("../../config");

var _math = require("../../engine/utils/math");

var _names = require("../../names");

var _Gear2 = require("./Gear");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Documentation = /*#__PURE__*/function (_Gear) {
  _inherits(Documentation, _Gear);

  var _super = _createSuper(Documentation);

  function Documentation(props) {
    var _this;

    _classCallCheck(this, Documentation);

    _this = _super.call(this, "gear-documentation", 1, props);
    _this.width = 1;
    _this.height = 1;
    _this.allowActionButton = false;
    return _this;
  }

  _createClass(Documentation, [{
    key: "renderUI",
    value: function renderUI() {
      var _this2 = this;

      _get(_getPrototypeOf(Documentation.prototype), "renderUI", this).call(this);

      if (!this.ui.enabled) return;
      var objectNames = Object.keys(_names.ObjectNames).filter(function (name) {
        return name.indexOf("gear") < 0 && name.indexOf("recipe") < 0;
      });
      this.ui.updateTemplate([objectNames.length]);
      this.renderObjectsCatalogUI(objectNames);
      var name = objectNames[this.ui.focused.slot];
      var itemSettings = _names.ObjectNames[name];
      if (!itemSettings) return;

      var oreSettings = _config.OreSettings[name.replace("raw-", "")];

      var special = oreSettings ? [oreSettings ? "> \u041D\u0443\u0436\u0435\u043D \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442 ".concat(oreSettings.tool || 1, "\u0443\u0440. \u0438 \u0432\u044B\u0448\u0435") : "> Можно найти"].concat(_toConsumableArray(itemSettings.special || "")).filter(function (t) {
        return t != "";
      }) : null;
      var itemSpecial = itemSettings ? _toConsumableArray(itemSettings.special || "").filter(function (t) {
        return t != "";
      }) : []; // Render description

      this.ui.renderDescriptionUI({
        title: itemSettings.name,
        specials: special || itemSpecial,
        description: itemSettings.desc,
        renderIcon: function renderIcon(pos) {
          _this2.game.renderer.drawSprite({
            texture: (0, _math.asImage)(_this2.game.getAssetByName(name)),
            position: pos,
            layer: "ui"
          });
        }
      });
    }
  }, {
    key: "renderObjectsCatalogUI",
    value: function renderObjectsCatalogUI(objectNames) {
      var _this3 = this;

      var size = _config.Config.SPRITE_SIZE;
      var windowCenter = new _math.Vector2(innerWidth / 2, innerHeight / 2).apply(Math.floor);
      objectNames.map(function (objectName, index) {
        var slot = _this3.ui.focused.slot >= _this3.maxRowItemsCount ? _this3.ui.focused.slot : 0;
        var pos = new _math.Vector2(index * size - Math.floor(_this3.maxRowItemsCount / 2) * size - slot * size, 0).add(windowCenter);
        if (index - slot < _this3.maxRowItemsCount && index + 1 > slot) _this3.ui.renderFocusable(pos, 0, index, function () {
          _this3.game.renderer.drawSprite({
            texture: (0, _math.asImage)(_this3.game.getAssetByName(objectName)),
            framed: false,
            position: pos,
            layer: "ui"
          });
        });
      });
    }
  }, {
    key: "onInteract",
    value: function onInteract() {
      _get(_getPrototypeOf(Documentation.prototype), "onInteract", this).call(this);

      this.ui.enabled = !this.ui.enabled;
    }
  }]);

  return Documentation;
}(_Gear2.Gear);

exports.Documentation = Documentation;
},{"../../config":"FxBD","../../engine/utils/math":"NgPq","../../names":"dSHS","./Gear":"IWn5"}],"z3f7":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OxygenGenerator = void 0;

var _config = require("../../config");

var _math = require("../../engine/utils/math");

var _Gear2 = require("./Gear");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var OxygenGenerator = /*#__PURE__*/function (_Gear) {
  _inherits(OxygenGenerator, _Gear);

  var _super = _createSuper(OxygenGenerator);

  function OxygenGenerator(props) {
    var _this;

    _classCallCheck(this, OxygenGenerator);

    _this = _super.call(this, "gear-oxygen-generator", 1, props);
    _this.startPosition = _this.position.expand();

    if (_config.Config.TEST_GEARS) {
      _this.oxygenLevel = 100;
      _this.batteryLevel = 100;
    } else {
      _this.oxygenLevel = 100;
      _this.batteryLevel = 100;
    }

    _this.animatedOxygenLevel = 100;
    _this.animatedBatteryLevel = 100;
    _this.playerWithBattery = false;
    _this.allowActionButton = false;

    _this.headerOffset.set(0, -_config.Config.SPRITE_SIZE / 2 - 15);

    return _this;
  }

  _createClass(OxygenGenerator, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(OxygenGenerator.prototype), "init", this).call(this);

      if (_config.Config.IS_DEV) return;
      this.batteryLevel = this.game.loadKey("generator-batteryLevel", 100);
      this.oxygenLevel = this.game.loadKey("generator-oxygenLevel", 100);
    }
  }, {
    key: "update",
    value: function update() {
      _get(_getPrototypeOf(OxygenGenerator.prototype), "update", this).call(this);

      if (this.game.paused) return;
      this.work();
      this.checkBattery();

      if (this.oxygenLevel <= 50 || this.batteryLevel <= 10) {
        // Shake
        this.position.copy(this.startPosition.add(new _math.Vector2((0, _math.random)(-1, 1), (0, _math.random)(-1, 1))));
      } else {
        this.position.lerp(this.startPosition, .3);
      }

      this.animatedOxygenLevel = (0, _math.lerp)(this.animatedOxygenLevel, this.oxygenLevel, .2);
      this.animatedBatteryLevel = (0, _math.lerp)(this.animatedBatteryLevel, this.batteryLevel, .2);
    }
  }, {
    key: "render",
    value: function render() {
      _get(_getPrototypeOf(OxygenGenerator.prototype), "render", this).call(this);

      this.frame = new _math.Vector2(4 - (0, _math.clamp)(Math.floor((this.batteryLevel + 20) / 25), 0, 4));
      if (this.playerIsNear) this.renderBars();
    }
  }, {
    key: "onInteract",
    value: function onInteract() {
      _get(_getPrototypeOf(OxygenGenerator.prototype), "onInteract", this).call(this);

      if (!this.playerWithBattery) this.ui.enabled = !this.ui.enabled;else {
        if (!this.player) return;
        this.player.foldItemsTo("battery", 1, this.position);
        this.updateBatteryLevel((0, _math.randomInt)(50, 65));
        this.updateOxygenLevel((0, _math.randomInt)(10, 14));
      }
    }
  }, {
    key: "work",
    value: function work() {
      // Remove oxygen
      if (this.batteryLevel < 90) {
        if (this.game.tick(this.batteryLevel > 20 ? _config.Config.OXYGEN_GENERATOR_OXYGEN_DEFUSE_TICK : this.batteryLevel <= 0 ? 20 : 60) && this.oxygenLevel > 0) this.updateOxygenLevel(-(0, _math.randomInt)(1, 3));
      } else {
        if (this.game.tick(30)) this.updateOxygenLevel((0, _math.randomInt)(1, 3));
      } // Remove battery


      if (this.game.tick(_config.Config.OXYGEN_GENERATOR_BATTERY_DEFUSE_TICK) && this.batteryLevel > 0) {
        this.updateBatteryLevel(-(0, _math.clamp)((0, _math.randomInt)(-2, 3), 1, 3)); // Add oxygen

        if (this.batteryLevel > 20) this.updateOxygenLevel((0, _math.randomInt)(0, 8));
      }
    }
  }, {
    key: "updateBatteryLevel",
    value: function updateBatteryLevel(value) {
      this.batteryLevel += value;
      this.batteryLevel = (0, _math.clamp)(this.batteryLevel, 0, 100);
      this.saveData();
    }
  }, {
    key: "updateOxygenLevel",
    value: function updateOxygenLevel(value) {
      this.oxygenLevel += value;
      this.oxygenLevel = (0, _math.clamp)(this.oxygenLevel, 0, 100);
      this.saveData();
    }
  }, {
    key: "renderUI",
    value: function renderUI() {
      _get(_getPrototypeOf(OxygenGenerator.prototype), "renderUI", this).call(this);

      if (!this.ui.enabled) return;
      var size = _config.Config.SPRITE_SIZE;
      var windowCenter = new _math.Vector2(innerWidth / 2, innerHeight / 2).apply(Math.floor); // > Names

      this.game.renderer.drawText({
        text: "Кислород",
        position: new _math.Vector2(size * 1.3, -size).add(windowCenter),
        layer: "ui",
        align: "left"
      });
      this.game.renderer.drawText({
        text: "Батарея",
        position: new _math.Vector2(size * 1.3, 0).add(windowCenter),
        layer: "ui",
        align: "left"
      }); // > Progresses

      var oxygenProgress = this.animatedOxygenLevel / 100;
      var batteryProgress = this.animatedBatteryLevel / 100; // Oxygen

      this.game.renderer.drawRect({
        width: 2.5 * oxygenProgress,
        height: .3,
        color: _config.Color.BLUE,
        position: new _math.Vector2(-size + (size * 2.5 * oxygenProgress - size * 2.5) / 2, -size).add(windowCenter),
        layer: "ui"
      }); // Battery

      this.game.renderer.drawRect({
        width: 2.5 * batteryProgress,
        height: .3,
        color: _config.Color.YELLOW,
        position: new _math.Vector2(-size + (size * 2.5 * batteryProgress - size * 2.5) / 2).add(windowCenter),
        layer: "ui"
      }); // > Percents
      // Oxygen

      this.game.renderer.drawText({
        text: "".concat(this.oxygenLevel, "%"),
        position: new _math.Vector2(-size * 2.1, -size).add(windowCenter),
        layer: "ui",
        align: "left"
      }); // Battery

      this.game.renderer.drawText({
        text: "".concat(this.batteryLevel, "%"),
        position: new _math.Vector2(-size * 2.1, 0).add(windowCenter),
        layer: "ui",
        align: "left"
      });
    }
  }, {
    key: "renderBars",
    value: function renderBars() {
      // Oxygen text
      this.game.renderer.drawText({
        text: "".concat(this.oxygenLevel, "%"),
        position: this.position.add(new _math.Vector2(-80, -65)),
        layer: "particles"
      }); // Battery text

      this.game.renderer.drawText({
        text: "".concat(this.batteryLevel, "%"),
        position: this.position.add(new _math.Vector2(80, -65)),
        layer: "particles"
      }); // Oxygen level

      this.ui.renderProgressBar({
        progress: this.animatedOxygenLevel / 100,
        position: this.position.add(new _math.Vector2(-80, 0)),
        width: 10,
        height: 80,
        layer: "particles",
        color: _config.Color.BLUE,
        strokeColor: _config.Color.BLUE
      }); // Battery level

      this.ui.renderProgressBar({
        progress: this.animatedBatteryLevel / 100,
        position: this.position.add(new _math.Vector2(80, 0)),
        width: 10,
        height: 80,
        layer: "particles"
      });
    }
  }, {
    key: "checkBattery",
    value: function checkBattery() {
      if (!this.playerIsNear || !this.player || !this.player.checkItemInInventory("battery")) {
        this.interactText = "";
        this.playerWithBattery = false;
        return;
      }

      this.playerWithBattery = true;
      this.interactText = "Зарядить";
    }
  }, {
    key: "saveData",
    value: function saveData() {
      _get(_getPrototypeOf(OxygenGenerator.prototype), "saveData", this).call(this);

      this.game.saveKey("generator-oxygenLevel", this.oxygenLevel.toString());
      this.game.saveKey("generator-batteryLevel", this.batteryLevel.toString());
    }
  }, {
    key: "reset",
    value: function reset() {
      this.oxygenLevel = 100;
      this.batteryLevel = 100;

      _get(_getPrototypeOf(OxygenGenerator.prototype), "reset", this).call(this);
    }
  }]);

  return OxygenGenerator;
}(_Gear2.Gear);

exports.OxygenGenerator = OxygenGenerator;
},{"../../config":"FxBD","../../engine/utils/math":"NgPq","./Gear":"IWn5"}],"gaLm":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Food = void 0;

var _ItemParent2 = require("../item/ItemParent");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Food = /*#__PURE__*/function (_ItemParent) {
  _inherits(Food, _ItemParent);

  var _super = _createSuper(Food);

  function Food(type, position) {
    var _this;

    _classCallCheck(this, Food);

    _this = _super.call(this, type, type, position);
    _this.radius = 2;
    _this.foodType = type;
    return _this;
  }

  _createClass(Food, [{
    key: "onEat",
    value: function onEat(player) {}
  }, {
    key: "whenPicked",
    value: function whenPicked(player) {
      _get(_getPrototypeOf(Food.prototype), "whenPicked", this).call(this, player);

      if (player.hp < 12) player.expectedActionType = {
        name: "eat",
        priority: 1
      };
    }
  }]);

  return Food;
}(_ItemParent2.ItemParent);

exports.Food = Food;
},{"../item/ItemParent":"LrNr"}],"nfcA":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HealingFetus = void 0;

var _math = require("../../engine/utils/math");

var _Food2 = require("./Food");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var HealingFetus = /*#__PURE__*/function (_Food) {
  _inherits(HealingFetus, _Food);

  var _super = _createSuper(HealingFetus);

  function HealingFetus(position) {
    _classCallCheck(this, HealingFetus);

    return _super.call(this, "food-fetus", position);
  }

  _createClass(HealingFetus, [{
    key: "onEat",
    value: function onEat(player) {
      _get(_getPrototypeOf(HealingFetus.prototype), "onEat", this).call(this, player);

      player.heal((0, _math.randomInt)(1, 2));
    }
  }]);

  return HealingFetus;
}(_Food2.Food);

exports.HealingFetus = HealingFetus;
},{"../../engine/utils/math":"NgPq","./Food":"gaLm"}],"UhzZ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Battery = void 0;

var _Item2 = require("./Item");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Battery = /*#__PURE__*/function (_Item) {
  _inherits(Battery, _Item);

  var _super = _createSuper(Battery);

  function Battery(position) {
    _classCallCheck(this, Battery);

    return _super.call(this, "battery", position);
  }

  return _createClass(Battery);
}(_Item2.Item);

exports.Battery = Battery;
},{"./Item":"c1Ag"}],"fQ2l":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Box = void 0;

var _Item2 = require("./Item");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Box = /*#__PURE__*/function (_Item) {
  _inherits(Box, _Item);

  var _super = _createSuper(Box);

  function Box(position) {
    _classCallCheck(this, Box);

    return _super.call(this, "box", position);
  }

  return _createClass(Box);
}(_Item2.Item);

exports.Box = Box;
},{"./Item":"c1Ag"}],"WbFc":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = void 0;

var _Item2 = require("./Item");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Card = /*#__PURE__*/function (_Item) {
  _inherits(Card, _Item);

  var _super = _createSuper(Card);

  function Card(position) {
    _classCallCheck(this, Card);

    return _super.call(this, "card", position);
  }

  return _createClass(Card);
}(_Item2.Item);

exports.Card = Card;
},{"./Item":"c1Ag"}],"SZfq":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Drill = void 0;

var _Item2 = require("./Item");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Drill = /*#__PURE__*/function (_Item) {
  _inherits(Drill, _Item);

  var _super = _createSuper(Drill);

  function Drill(position) {
    _classCallCheck(this, Drill);

    return _super.call(this, "drill", position);
  }

  return _createClass(Drill);
}(_Item2.Item);

exports.Drill = Drill;
},{"./Item":"c1Ag"}],"oILg":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Raw = void 0;

var _ItemParent2 = require("../item/ItemParent");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Raw = /*#__PURE__*/function (_ItemParent) {
  _inherits(Raw, _ItemParent);

  var _super = _createSuper(Raw);

  function Raw(type, position) {
    var _this;

    _classCallCheck(this, Raw);

    _this = _super.call(this, type, type, position);
    _this.rawType = type;
    return _this;
  }

  return _createClass(Raw);
}(_ItemParent2.ItemParent);

exports.Raw = Raw;
},{"../item/ItemParent":"LrNr"}],"A77P":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RawAntin = void 0;

var _Raw2 = require("./Raw");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var RawAntin = /*#__PURE__*/function (_Raw) {
  _inherits(RawAntin, _Raw);

  var _super = _createSuper(RawAntin);

  function RawAntin(position) {
    _classCallCheck(this, RawAntin);

    return _super.call(this, "raw-antin", position);
  }

  return _createClass(RawAntin);
}(_Raw2.Raw);

exports.RawAntin = RawAntin;
},{"./Raw":"oILg"}],"lOfT":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RawCidium = void 0;

var _Raw2 = require("./Raw");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var RawCidium = /*#__PURE__*/function (_Raw) {
  _inherits(RawCidium, _Raw);

  var _super = _createSuper(RawCidium);

  function RawCidium(position) {
    _classCallCheck(this, RawCidium);

    return _super.call(this, "raw-cidium", position);
  }

  return _createClass(RawCidium);
}(_Raw2.Raw);

exports.RawCidium = RawCidium;
},{"./Raw":"oILg"}],"QB2i":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RawGradeCidium = void 0;

var _Raw2 = require("./Raw");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var RawGradeCidium = /*#__PURE__*/function (_Raw) {
  _inherits(RawGradeCidium, _Raw);

  var _super = _createSuper(RawGradeCidium);

  function RawGradeCidium(position) {
    _classCallCheck(this, RawGradeCidium);

    return _super.call(this, "raw-grade-cidium", position);
  }

  return _createClass(RawGradeCidium);
}(_Raw2.Raw);

exports.RawGradeCidium = RawGradeCidium;
},{"./Raw":"oILg"}],"FOX4":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DangerRaw = void 0;

var _math = require("../../engine/utils/math");

var _Raw2 = require("./Raw");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DangerRaw = /*#__PURE__*/function (_Raw) {
  _inherits(DangerRaw, _Raw);

  var _super = _createSuper(DangerRaw);

  function DangerRaw(type, position) {
    _classCallCheck(this, DangerRaw);

    return _super.call(this, type, position);
  }

  _createClass(DangerRaw, [{
    key: "update",
    value: function update() {
      _get(_getPrototypeOf(DangerRaw.prototype), "update", this).call(this);

      var player = this.game.getChildById("player");
      if (!player) return;
      if (player.hasBottle) return; // If is picked, player get damage (1-2)

      if (this.game.clock.elapsed % 80 == 0 && this.picked) player.hit(Math.floor((0, _math.random)(1, 3)));
    }
  }]);

  return DangerRaw;
}(_Raw2.Raw);

exports.DangerRaw = DangerRaw;
},{"../../engine/utils/math":"NgPq","./Raw":"oILg"}],"GaRh":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RawManty = void 0;

var _DangerRaw2 = require("./DangerRaw");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var RawManty = /*#__PURE__*/function (_DangerRaw) {
  _inherits(RawManty, _DangerRaw);

  var _super = _createSuper(RawManty);

  function RawManty(position) {
    _classCallCheck(this, RawManty);

    return _super.call(this, "raw-manty", position);
  }

  return _createClass(RawManty);
}(_DangerRaw2.DangerRaw);

exports.RawManty = RawManty;
},{"./DangerRaw":"FOX4"}],"i9gv":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RawNerius = void 0;

var _Raw2 = require("./Raw");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var RawNerius = /*#__PURE__*/function (_Raw) {
  _inherits(RawNerius, _Raw);

  var _super = _createSuper(RawNerius);

  function RawNerius(position) {
    _classCallCheck(this, RawNerius);

    return _super.call(this, "raw-nerius", position);
  }

  _createClass(RawNerius, [{
    key: "update",
    value: function update(game) {
      _get(_getPrototypeOf(RawNerius.prototype), "update", this).call(this, game); // const player = game.getChildById<Player>("player");
      // if (!player) return;
      // player.moveSpeed = this.picked ? 2 : 5;

    }
  }]);

  return RawNerius;
}(_Raw2.Raw);

exports.RawNerius = RawNerius;
},{"./Raw":"oILg"}],"j943":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RawOsmy = void 0;

var _Raw2 = require("./Raw");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var RawOsmy = /*#__PURE__*/function (_Raw) {
  _inherits(RawOsmy, _Raw);

  var _super = _createSuper(RawOsmy);

  function RawOsmy(position) {
    _classCallCheck(this, RawOsmy);

    return _super.call(this, "raw-osmy", position);
  }

  return _createClass(RawOsmy);
}(_Raw2.Raw);

exports.RawOsmy = RawOsmy;
},{"./Raw":"oILg"}],"yZ9h":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RawRady = void 0;

var _DangerRaw2 = require("./DangerRaw");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var RawRady = /*#__PURE__*/function (_DangerRaw) {
  _inherits(RawRady, _DangerRaw);

  var _super = _createSuper(RawRady);

  function RawRady(position) {
    _classCallCheck(this, RawRady);

    return _super.call(this, "raw-rady", position);
  }

  return _createClass(RawRady);
}(_DangerRaw2.DangerRaw);

exports.RawRady = RawRady;
},{"./DangerRaw":"FOX4"}],"ZaAa":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ready = void 0;

var _ItemParent2 = require("../item/ItemParent");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Ready = /*#__PURE__*/function (_ItemParent) {
  _inherits(Ready, _ItemParent);

  var _super = _createSuper(Ready);

  function Ready(type, position) {
    var _this;

    _classCallCheck(this, Ready);

    _this = _super.call(this, type, type, position);
    _this.readyType = type;
    return _this;
  }

  return _createClass(Ready);
}(_ItemParent2.ItemParent);

exports.Ready = Ready;
},{"../item/ItemParent":"LrNr"}],"nEs5":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReadyCidium = void 0;

var _Ready2 = require("./Ready");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ReadyCidium = /*#__PURE__*/function (_Ready) {
  _inherits(ReadyCidium, _Ready);

  var _super = _createSuper(ReadyCidium);

  function ReadyCidium(position) {
    _classCallCheck(this, ReadyCidium);

    return _super.call(this, "ready-cidium", position);
  }

  return _createClass(ReadyCidium);
}(_Ready2.Ready);

exports.ReadyCidium = ReadyCidium;
},{"./Ready":"ZaAa"}],"xA36":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Items = void 0;

var _HealingFetus = require("./objects/food/HealingFetus");

var _Battery = require("./objects/item/Battery");

var _Box = require("./objects/item/Box");

var _Card = require("./objects/item/Card");

var _Drill = require("./objects/item/Drill");

var _RobotItem = require("./objects/item/RobotItem");

var _RawAntin = require("./objects/raws/RawAntin");

var _RawCidium = require("./objects/raws/RawCidium");

var _RawGradeCidium = require("./objects/raws/RawGradeCidium");

var _RawManty = require("./objects/raws/RawManty");

var _RawNerius = require("./objects/raws/RawNerius");

var _RawOsmy = require("./objects/raws/RawOsmy");

var _RawRady = require("./objects/raws/RawRady");

var _ReadyCidium = require("./objects/ready/ReadyCidium");

var Items = {
  // Raws
  "raw-cidium": _RawCidium.RawCidium,
  "raw-osmy": _RawOsmy.RawOsmy,
  "raw-grade-cidium": _RawGradeCidium.RawGradeCidium,
  "raw-antin": _RawAntin.RawAntin,
  "raw-rady": _RawRady.RawRady,
  "raw-nerius": _RawNerius.RawNerius,
  "raw-manty": _RawManty.RawManty,
  // Ready
  "ready-cidium": _ReadyCidium.ReadyCidium,
  // Items
  "item-robot": _RobotItem.RobotItem,
  "battery": _Battery.Battery,
  "drill": _Drill.Drill,
  "box": _Box.Box,
  "card": _Card.Card,
  // Food
  "food-fetus": _HealingFetus.HealingFetus
};
exports.Items = Items;
},{"./objects/food/HealingFetus":"nfcA","./objects/item/Battery":"UhzZ","./objects/item/Box":"fQ2l","./objects/item/Card":"WbFc","./objects/item/Drill":"SZfq","./objects/item/RobotItem":"p04f","./objects/raws/RawAntin":"A77P","./objects/raws/RawCidium":"lOfT","./objects/raws/RawGradeCidium":"QB2i","./objects/raws/RawManty":"GaRh","./objects/raws/RawNerius":"i9gv","./objects/raws/RawOsmy":"j943","./objects/raws/RawRady":"yZ9h","./objects/ready/ReadyCidium":"nEs5"}],"kJJZ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Player = require("../entities/Player");

var _Gear = require("./Gear");

var _Recycler = require("./Recycler");

function recipes(recycler) {
  // return {};
  // const player = recycler.game.getChildById<Player>("player");
  // if (!player) return {};
  return {
    // Craft ready cidium
    "ready-cidium": new _Recycler.Recipe({
      recipe: function recipe() {
        return {
          "raw-cidium": {
            count: 2
          }
        };
      }
    }),
    // Craft battery
    "battery": new _Recycler.Recipe({
      recipe: function recipe() {
        return {
          "ready-cidium": {
            count: 1
          },
          "raw-cidium": {
            count: 2
          }
        };
      }
    }),
    // Craft drill
    "drill": new _Recycler.Recipe({
      recipe: function recipe() {
        return {
          // "ready-cidium": { count: 1 },
          "ready-cidium": {
            count: 2
          },
          "raw-nerius": {
            count: 2
          }
        };
      }
    }),
    // Craft box
    "box": new _Recycler.Recipe({
      recipe: function recipe() {
        return {
          "ready-cidium": {
            count: 1
          },
          "raw-nerius": {
            count: 4
          }
        };
      }
    }),
    // Craft card
    "card": new _Recycler.Recipe({
      recipe: function recipe() {
        return {
          "ready-cidium": {
            count: 2
          },
          "raw-osmy": {
            count: 3
          },
          "raw-grade-cidium": {
            count: 1
          }
        };
      }
    }),
    // Storage up
    "recipe-storage-upgrade": new _Recycler.Recipe({
      recipe: function recipe() {
        return [{
          "ready-cidium": {
            count: 2
          },
          "raw-osmy": {
            count: 3
          }
        }, {
          "ready-cidium": {
            count: 4
          },
          "raw-osmy": {
            count: 3
          },
          "raw-grade-cidium": {
            count: 2
          }
        } // Level 3
        ][recycler.storage.level - 1];
      },
      // On craft
      onCraft: function onCraft() {
        recycler.storage.upgrade(1);
      },
      type: "upgrade",
      upgradeLevel: recycler.storage.level + 1,
      iconSize: 1.4,
      isRemoved: function isRemoved() {
        return recycler.storage.level >= _Gear.MaxGearLevel;
      }
    }),
    // Tool up
    "recipe-tools-upgrade": new _Recycler.Recipe({
      recipe: function recipe() {
        return [{
          "ready-cidium": {
            count: 3
          }
        }, {
          "ready-cidium": {
            count: 2
          },
          "card": {
            count: 1
          },
          "raw-grade-cidium": {
            count: 1
          }
        }, {
          "ready-cidium": {
            count: 3
          },
          "raw-osmy": {
            count: 4
          },
          "drill": {
            count: 1
          },
          "raw-antin": {
            count: 3
          }
        } // Level 4
        ][recycler.player.toolLevel - 1];
      },
      onCraft: function onCraft() {
        recycler.player.upgradeTool(1);
      },
      type: "upgrade",
      upgradeLevel: recycler.player.toolLevel + 1,
      isRemoved: function isRemoved() {
        return recycler.player.toolLevel >= _Player.MaxToolLevel;
      }
    }),
    // Craft bottle
    "bottle": new _Recycler.Recipe({
      recipe: function recipe() {
        return {
          "ready-cidium": {
            count: 3
          },
          "box": {
            count: 1
          },
          "raw-antin": {
            count: 4
          },
          "raw-grade-cidium": {
            count: 2
          }
        };
      },
      onCraft: function onCraft() {
        recycler.player.hasBottle = true;
      },
      isRemoved: function isRemoved() {
        return recycler.player.hasBottle;
      }
    }),
    // Craft gps
    "gps": new _Recycler.Recipe({
      recipe: function recipe() {
        return {
          "ready-cidium": {
            count: 3
          },
          "raw-osmy": {
            count: 2
          },
          "box": {
            count: 1
          },
          "card": {
            count: 1
          }
        };
      },
      onCraft: function onCraft() {
        recycler.player.hasGps = true;
      },
      isRemoved: function isRemoved() {
        return recycler.player.hasGps;
      }
    }),
    // Craft robot
    "item-robot": new _Recycler.Recipe({
      recipe: function recipe() {
        return {
          "battery": {
            count: 1
          },
          "drill": {
            count: 1
          },
          "box": {
            count: 1
          },
          "card": {
            count: 1
          }
        };
      }
    })
  };
}

var _default = recipes;
exports.default = _default;
},{"../entities/Player":"p1IV","./Gear":"IWn5","./Recycler":"m2sq"}],"m2sq":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Recycler = exports.Recipe = void 0;

var _config = require("../../config");

var _math = require("../../engine/utils/math");

var _names = require("../../names");

var _objects = require("../../objects");

var _Gear2 = require("./Gear");

var _recipes = _interopRequireDefault(require("./recipes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Recycler = /*#__PURE__*/function (_Gear) {
  _inherits(Recycler, _Gear);

  var _super = _createSuper(Recycler);

  function Recycler(storage, props) {
    var _this;

    _classCallCheck(this, Recycler);

    _this = _super.call(this, "gear-recycler", 1, props);
    _this.ui.focused.slot = 1;
    _this.ui.focused.row = 10;
    _this.storage = storage;
    _this.recipes = {
      "ready-cidium": new Recipe({
        recipe: function recipe() {
          return {
            "raw-cidium": {
              count: 2
            }
          };
        }
      }),
      // Craft battery
      "battery": new Recipe({
        recipe: function recipe() {
          return {
            "ready-cidium": {
              count: 1
            },
            "raw-cidium": {
              count: 2
            }
          };
        }
      }),
      // Craft drill
      "drill": new Recipe({
        recipe: function recipe() {
          return {
            // "ready-cidium": { count: 1 },
            "ready-cidium": {
              count: 2
            },
            "raw-nerius": {
              count: 2
            }
          };
        }
      }),
      // Craft box
      "box": new Recipe({
        recipe: function recipe() {
          return {
            "ready-cidium": {
              count: 1
            },
            "raw-nerius": {
              count: 4
            }
          };
        }
      })
    };

    _this.headerOffset.set(0, -_config.Config.SPRITE_SIZE);

    return _this;
  }

  _createClass(Recycler, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(Recycler.prototype), "init", this).call(this);

      var player = this.game.getChildById("player");
      this.player = player;
      this.recipes = (0, _recipes.default)(this);
    }
  }, {
    key: "onInteract",
    value: function onInteract() {
      _get(_getPrototypeOf(Recycler.prototype), "onInteract", this).call(this); // Open


      this.ui.enabled = true; // Close

      if (this.ui.focused.slot == 0 && this.ui.focused.row == 0 && this.ui.enabled) {
        this.ui.enabled = false;
        this.ui.focused.slot = 1;
        this.ui.focused.row = 10;
        return;
      }

      if (this.ui.enabled && this.ui.focused.slot == 1 && this.ui.focused.row == 10) {
        this.ui.focused.slot = 0;
        this.ui.focused.row = 0;
      }

      if (this.ui.focused.row != 0) {
        var focused = this.ui.focused.slot + (this.ui.focused.row - 1) * this.maxRowItemsCount;
        var recipesKeys = this.getRecipesKeys();
        var recipe = this.recipes[recipesKeys[focused]]; // Craft

        if (recipe.canCraft(this.storage)) {
          recipe.onCraft(this.game, this.storage, this.position, recipesKeys[focused]);
          this.ui.enabled = false;
          this.sound.play(this.game, "crafting");
          this.ui.focused.slot = 1;
          this.ui.focused.row = 10;
        } else {
          // Can't craft
          this.sound.play(this.game, "error");
          this.ui.spawnMessageText("Недостатачно ресурсов");
        }
      }
    }
  }, {
    key: "renderUI",
    value: function renderUI() {
      _get(_getPrototypeOf(Recycler.prototype), "renderUI", this).call(this);

      var recipesKeys = this.getRecipesKeys();
      if (recipesKeys.length == 0) return;
      this.actionButtonAssetName = this.ui.focused.row == 0 && this.ui.focused.slot == 0 ? "close" : "craft";
      this.tipText = this.actionButtonAssetName == "close" ? "закрыть" : "изготовить";
      this.ui.updateTemplate([1, (0, _math.clamp)(recipesKeys.length, 0, this.maxRowItemsCount), recipesKeys.length > this.maxRowItemsCount ? recipesKeys.length - this.maxRowItemsCount : 0]);
      if (!this.ui.enabled) return;
      this.renderRecipesUI(recipesKeys);
      this.renderDescriptionUI(recipesKeys);
    }
  }, {
    key: "renderRecipesUI",
    value: function renderRecipesUI(recipes) {
      var _this2 = this;

      var size = _config.Config.SPRITE_SIZE;
      var windowCenter = new _math.Vector2(innerWidth / 2, innerHeight / 2).apply(Math.floor);
      recipes.map(function (recipeName, index) {
        // Render recipe
        var pos = new _math.Vector2(index % _this2.maxRowItemsCount * size - size * 2, -size + Math.floor(index / _this2.maxRowItemsCount) * size).add(windowCenter);

        _this2.ui.renderFocusable(pos, // Row
        Math.floor(index / _this2.maxRowItemsCount) + 1, // Slot
        index % _this2.maxRowItemsCount, // Render icon
        function () {
          var currentRecipe = _this2.recipes[recipeName]; // Background

          _this2.game.renderer.drawRect({
            position: pos,
            color: _config.Color.STONE_LAYER_COLOR,
            layer: "ui",
            width: .5,
            height: .5
          }); // Render recipe icon


          _this2.renderRecipeIcon(recipeName, currentRecipe, pos);
        }, 1, 1, true);
      });
    }
  }, {
    key: "renderDescriptionUI",
    value: function renderDescriptionUI(recipesKeys) {
      var _this3 = this;

      var size = _config.Config.SPRITE_SIZE;
      var windowCenter = new _math.Vector2(innerWidth / 2, innerHeight / 2).apply(Math.floor); // Get recipe by focused slot

      var selectedSlot = this.ui.ghostFocused.slot + (this.ui.ghostFocused.row - 1) * this.maxRowItemsCount;
      var recipeName = recipesKeys[selectedSlot];
      var currentRecipe = this.recipes[recipeName];
      var recipeDescription = _names.ObjectNames[recipeName];
      if (!recipeDescription) return;

      var isInStockCount = function isInStockCount(slotName) {
        return (0, _math.safeSlot)(_this3.storage.contains.slots[slotName]).count;
      };

      this.ui.renderDescriptionUI({
        title: recipeDescription.name,
        titleColor: currentRecipe.canCraft(this.storage) ? "#fff" : _config.Color.RED,
        specials: ["", ""],
        description: recipeDescription.desc,
        renderIcon: function renderIcon(pos) {
          _this3.renderRecipeIcon(recipeName, currentRecipe, pos);
        }
      }); //

      var selectedRecipeKeys = Object.keys(currentRecipe.recipe());
      selectedRecipeKeys.map(function (slotName, index) {
        var pos = new _math.Vector2(index * _config.Config.SPRITE_SIZE - size, size * 2 + 5).add(windowCenter);
        var count = isInStockCount(slotName);
        var needCount = currentRecipe.recipe()[slotName].count; // Sprite

        _this3.game.renderer.drawSprite({
          texture: (0, _math.asImage)(_this3.game.getAssetByName(slotName)),
          position: pos,
          layer: "ui"
        }); // Count


        _this3.game.renderer.drawText({
          text: "".concat(count, "/").concat(needCount),
          color: count >= needCount ? "#fff" : _config.Color.RED,
          position: pos.add(_math.Vector2.all(_config.Config.SPRITE_SIZE * .2)),
          layer: "ui"
        }); // Plus


        if (index < selectedRecipeKeys.length - 1) _this3.game.renderer.drawText({
          text: "+",
          font: "22px Pixel",
          position: pos.add(new _math.Vector2(size / 2)),
          layer: "ui"
        });
      });
    }
  }, {
    key: "renderRecipeIcon",
    value: function renderRecipeIcon(recipeName, currentRecipe, pos) {
      var renderIcon = currentRecipe.icon;
      if (renderIcon) renderIcon(this.game, pos, currentRecipe.canCraft(this.storage) ? 1 : .5);else {
        this.game.renderer.drawSprite({
          texture: (0, _math.asImage)(this.game.getAssetByName(recipeName)),
          width: currentRecipe.iconSize,
          height: currentRecipe.iconSize,
          framed: false,
          position: pos,
          opacity: currentRecipe.canCraft(this.storage) ? 1 : .5,
          layer: "ui"
        });
        if (currentRecipe.type == "upgrade") this.game.renderer.drawText({
          text: "".concat(currentRecipe.upgradeLevel, "\u0443\u0440."),
          position: pos.add(_math.Vector2.all(_config.Config.SPRITE_SIZE * .3)),
          layer: "ui"
        });
      }
    }
  }, {
    key: "getRecipesKeys",
    value: function getRecipesKeys() {
      var _this4 = this;

      return Object.keys(this.recipes).filter(function (name) {
        return !_this4.recipes[name].isRemoved();
      });
    }
  }]);

  return Recycler;
}(_Gear2.Gear);

exports.Recycler = Recycler;

var Recipe = /*#__PURE__*/function () {
  function Recipe(props) {
    _classCallCheck(this, Recipe);

    this.recipe = props.recipe;
    this._onCraft = props.onCraft;
    this.icon = props.icon || null;

    this.isRemoved = props.isRemoved || function () {
      return false;
    };

    this.type = props.type || "craft";
    this.upgradeLevel = props.upgradeLevel || 0;
    this.iconSize = props.iconSize || 1;
  }

  _createClass(Recipe, [{
    key: "canCraft",
    value: function canCraft(storage) {
      var recipes = Object.keys(this.recipe()); // let can = false;

      var hasCount = 0;

      for (var i = 0; i < recipes.length; i++) {
        if ((0, _math.safeSlot)(storage.contains.slots[recipes[i]]).count >= (0, _math.safeSlot)(this.recipe()[recipes[i]]).count) hasCount++;
      }

      return hasCount >= recipes.length; // return can;
    }
  }, {
    key: "onCraft",
    value: function onCraft(game, storage, position, name) {
      var recipes = Object.keys(this.recipe());

      for (var i = 0; i < recipes.length; i++) {
        storage.contains.slots[recipes[i]].count -= this.recipe()[recipes[i]].count;
      }

      storage.calculateTotalCount();
      if (this._onCraft) this._onCraft(game);else {
        game.add(new _objects.Items[name](position));
        game.initChildren();
      }
    }
  }]);

  return Recipe;
}();

exports.Recipe = Recipe;
},{"../../config":"FxBD","../../engine/utils/math":"NgPq","../../names":"dSHS","../../objects":"xA36","./Gear":"IWn5","./recipes":"kJJZ"}],"om7z":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Storage = void 0;

var _config = require("../../config");

var _math = require("../../engine/utils/math");

var _names = require("../../names");

var _objects = require("../../objects");

var _Gear2 = require("./Gear");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var MaxStorageTotalCount;

(function (MaxStorageTotalCount) {
  MaxStorageTotalCount[MaxStorageTotalCount["1-level"] = 18] = "1-level";
  MaxStorageTotalCount[MaxStorageTotalCount["2-level"] = 28] = "2-level";
  MaxStorageTotalCount[MaxStorageTotalCount["3-level"] = 42] = "3-level";
})(MaxStorageTotalCount || (MaxStorageTotalCount = {}));

var Storage = /*#__PURE__*/function (_Gear) {
  _inherits(Storage, _Gear);

  var _super = _createSuper(Storage);

  function Storage(props) {
    var _this;

    _classCallCheck(this, Storage);

    _this = _super.call(this, "gear-storage", 1, props);
    _this.contains = {
      totalCount: 0,
      slots: {}
    };
    _this.interactType = "view";
    _this.maxTotalCount = MaxStorageTotalCount["".concat(_this.level, "-level")];

    _this.headerOffset.set(0, -_config.Config.SPRITE_SIZE);

    _this.changeMaxTotalCount();

    return _this;
  }

  _createClass(Storage, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(Storage.prototype), "init", this).call(this);

      if (!_config.Config.TEST_GEARS) {
        this.level = this.game.loadKey("storage-level", 1);
        this.contains = this.game.loadKey("storage-contains", {
          totalCount: 0,
          slots: {}
        });
      }

      this.changeMaxTotalCount();
      this.calculateTotalCount();
    }
  }, {
    key: "update",
    value: function update() {
      var _this2 = this;

      _get(_getPrototypeOf(Storage.prototype), "update", this).call(this);

      if (!this.player) return;
      if (!this.playerIsNear) return; // Change interact type

      this.interactType = this.player.inventory.totalCount == 0 || this.contains.totalCount >= this.maxTotalCount || this.filterItems(this.player.inventory.slots).length == this.filterItems(this.player.inventory.slots).filter(function (name) {
        return (0, _math.safeValue)(_config.ItemSettings[name], {
          lineColor: "#fff",
          storage: 1
        }).storage > _this2.level;
      }).length ? "view" : "store";
      this.actionButtonAssetName = this.ui.focused.row == 0 ? "close" : "drop";
      this.interactText = this.interactType == "view" ? "Содержимое" : "Сложить";
      this.tipText = this.actionButtonAssetName == "close" ? "закрыть" : "выбросить x1";
    }
  }, {
    key: "upgrade",
    value: function upgrade(levelUp) {
      _get(_getPrototypeOf(Storage.prototype), "upgrade", this).call(this, levelUp);

      this.maxTotalCount = MaxStorageTotalCount["".concat(this.level, "-level")];
    }
  }, {
    key: "store",
    value: function store() {
      var _this3 = this;

      if (this.contains.totalCount >= this.maxTotalCount || !this.player) return;
      var storedCount = 0;
      var totalStoredCount = 0;
      var slotNames = this.filterItems(this.player.inventory.slots).filter(function (name) {
        return (0, _math.safeValue)(_config.ItemSettings[name], {
          lineColor: "#fff",
          storage: 1
        }).storage <= _this3.level;
      }); // Storage level less then need

      if (this.filterItems(this.player.inventory.slots).filter(function (name) {
        return (0, _math.safeValue)(_config.ItemSettings[name], {
          lineColor: "#fff",
          storage: 1
        }).storage > _this3.level;
      }).length > 0) this.player.spawnText("Низкий уровень\nхранилища", new _math.Vector2(0, -90));
      slotNames.map(function (slotName) {
        if (!_this3.player) return;
        _this3.contains.slots[slotName] = _this3.contains.slots[slotName] || {
          count: 0
        }; // Add items

        if (_this3.contains.totalCount >= _this3.maxTotalCount) {
          _this3.player.spawnText("Хранилище перепольнено", new _math.Vector2(0, -50));

          return;
        }

        storedCount = _this3.player.inventory.slots[slotName].count + _this3.contains.totalCount <= _this3.maxTotalCount ? _this3.player.inventory.slots[slotName].count : _this3.maxTotalCount - _this3.contains.totalCount;
        _this3.contains.slots[slotName].count += storedCount;
        totalStoredCount += storedCount;

        _this3.player.foldItemsTo(slotName, storedCount, _this3.position);

        _this3.calculateTotalCount();

        _this3.player.calculateTotalCount();
      });
      if (slotNames.length <= 0) return; // Play store audio

      this.sound.play(this.game, "store");
      this.player.spawnText(totalStoredCount.toString());
      this.saveData();
    }
  }, {
    key: "drop",
    value: function drop(slotName, count) {
      if (!this.contains.slots[slotName]) return;
      this.contains.slots[slotName].count -= count;
      this.game.add(new _objects.Items[slotName](this.position));
      this.game.initChildren();
      this.sound.play(this.game, "store");
      this.calculateTotalCount();
    }
  }, {
    key: "calculateTotalCount",
    value: function calculateTotalCount() {
      var _this4 = this;

      this.contains.totalCount = 0;
      Object.keys(this.contains.slots).map(function (slotName) {
        _this4.contains.totalCount += _this4.contains.slots[slotName].count;
      });
      this.saveData();
    }
  }, {
    key: "renderUI",
    value: function renderUI() {
      var _this5 = this;

      _get(_getPrototypeOf(Storage.prototype), "renderUI", this).call(this);

      if (!this.ui.enabled) return;
      var slotNames = this.filterItems(this.contains.slots);
      this.ui.updateTemplate([1, (0, _math.clamp)(slotNames.length, 0, this.maxRowItemsCount), slotNames.length > this.maxRowItemsCount ? slotNames.length - this.maxRowItemsCount : 0]);

      if (!this.ui.template[0]) {
        this.ui.focused.row = 1;
        this.ui.focused.slot = 0;
      }

      this.renderInventoryUI(slotNames);
      var name = slotNames[this.ui.ghostFocused.slot + (this.ui.ghostFocused.row - 1) * this.maxRowItemsCount];
      var item = _names.ObjectNames[name];
      if (!item) return;

      var oreSettings = _config.OreSettings[name.replace("raw-", "")];

      var special = [oreSettings ? "> \u041D\u0443\u0436\u0435\u043D \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442 ".concat(oreSettings.tool || 1, "\u0443\u0440. \u0438 \u0432\u044B\u0448\u0435") : "> Можно найти"].concat(_toConsumableArray(item.special || "")).filter(function (t) {
        return t != "";
      }); // Render description

      this.ui.renderDescriptionUI({
        title: item.name,
        specials: special,
        description: item.desc,
        renderIcon: function renderIcon(pos) {
          _this5.game.renderer.drawSprite({
            texture: (0, _math.asImage)(_this5.game.getAssetByName(name)),
            position: pos,
            layer: "ui"
          });
        }
      });
    }
  }, {
    key: "renderInventoryUI",
    value: function renderInventoryUI(slots) {
      var _this6 = this;

      var size = _config.Config.SPRITE_SIZE;
      var windowCenter = new _math.Vector2(innerWidth / 2, innerHeight / 2).apply(Math.floor); // Close button

      if (slots.length == 0) {
        this.ui.focused.row = 0;
        this.ui.bounds();
      } // Draw count text


      this.game.renderer.drawText({
        text: "".concat(this.contains.totalCount, "/").concat(this.maxTotalCount),
        position: new _math.Vector2(-size * 2.25, -size * 2 + 10).add(windowCenter),
        color: this.contains.totalCount >= this.maxTotalCount ? _config.Color.RED : "#fff",
        align: "left",
        layer: "ui"
      });
      slots.map(function (slot, index) {
        var pos = new _math.Vector2(index % _this6.maxRowItemsCount * size - size * Math.floor(_this6.maxRowItemsCount / 2), Math.floor(index / _this6.maxRowItemsCount) * size).add(windowCenter).add(new _math.Vector2(0, -size));

        _this6.ui.renderFocusable(pos, Math.floor(index / _this6.maxRowItemsCount) + 1, index % _this6.maxRowItemsCount, function () {
          var count = _this6.contains.slots[slot].count; // Draw item sprite

          _this6.game.renderer.drawSprite({
            texture: (0, _math.asImage)(_this6.game.getAssetByName(slot)),
            position: pos,
            layer: "ui"
          }); // Draw item count text


          if (count > 1) _this6.game.renderer.drawText({
            text: count.toString(),
            position: pos.add(_math.Vector2.all(_config.Config.SPRITE_SIZE * .3)),
            layer: "ui"
          });
        }, 1, 1, true);
      });
    }
  }, {
    key: "onInteract",
    value: function onInteract() {
      _get(_getPrototypeOf(Storage.prototype), "onInteract", this).call(this);

      if (this.ui.enabled && this.ui.focused.row == 0 && this.ui.focused.slot == 0) {
        this.ui.enabled = false;
        return;
      }

      if (this.ui.enabled && this.ui.focused.row != 0) {
        var slotName = this.filterItems(this.contains.slots)[this.ui.ghostFocused.slot + (this.ui.ghostFocused.row - 1) * this.maxRowItemsCount];
        this.drop(slotName, 1);
        return;
      }

      if (this.interactType == "store") {
        this.ui.enabled = false;
        this.store();
      } else if (this.interactType == "view") {
        if (!this.ui.enabled) {
          this.ui.focused.row = 0;
          this.ui.focused.slot = 0;
        }

        this.ui.enabled = true;
        if (this.ui.enabled) this.sound.play(this.game, "storage");
      }
    }
  }, {
    key: "filterItems",
    value: function filterItems(slots) {
      return Object.keys(slots).filter(function (name) {
        return slots[name].count > 0;
      }); // return Object.keys(slots).filter(name=> name.indexOf("raw") >= 0 && ((slots[name] as any).count ? (slots[name] as any).count > 0 : slots[name] > 0));
    }
  }, {
    key: "saveData",
    value: function saveData() {
      _get(_getPrototypeOf(Storage.prototype), "saveData", this).call(this);

      this.game.saveKey("storage-contains", JSON.stringify(this.contains));
      this.game.saveKey("storage-level", this.level.toString());
    }
  }, {
    key: "changeMaxTotalCount",
    value: function changeMaxTotalCount() {
      this.maxTotalCount = MaxStorageTotalCount["".concat(this.level, "-level")];
    }
  }, {
    key: "reset",
    value: function reset() {
      this.contains.totalCount = 0;
      this.contains.slots = {};

      _get(_getPrototypeOf(Storage.prototype), "reset", this).call(this);
    }
  }]);

  return Storage;
}(_Gear2.Gear);

exports.Storage = Storage;
},{"../../config":"FxBD","../../engine/utils/math":"NgPq","../../names":"dSHS","../../objects":"xA36","./Gear":"IWn5"}],"ZpfZ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initDome = initDome;

var _config = require("../config");

var _engine = require("../engine");

var _math = require("../engine/utils/math");

var _Documentation = require("../objects/gear/Documentation");

var _OxygenGenerator = require("../objects/gear/OxygenGenerator");

var _Recycler = require("../objects/gear/Recycler");

var _Storage = require("../objects/gear/Storage");

function initDome(game) {
  var domePosition = new _math.Vector2(_config.Config.HOME_POSITION_X, _config.Config.HOME_POSITION_Y);
  game.add(new _OxygenGenerator.OxygenGenerator({
    position: domePosition.add(new _math.Vector2(-60, -100))
  }));
  game.add(new _Documentation.Documentation({
    position: domePosition.add(new _math.Vector2(60, -100))
  }));
  var storage = game.add(new _Storage.Storage({
    position: domePosition.add(new _math.Vector2(-140, -10))
  }));
  game.add(new _Recycler.Recycler(storage, {
    flip: {
      x: true,
      y: false
    },
    position: domePosition.add(new _math.Vector2(140, 0))
  })); // Dome

  game.add(new _engine.Sprite("dome", "dome", {
    width: 8,
    height: 8,
    position: domePosition,
    layer: "particles",
    colliderType: "none"
  }));
}
},{"../config":"FxBD","../engine":"XaJu","../engine/utils/math":"NgPq","../objects/gear/Documentation":"o403","../objects/gear/OxygenGenerator":"z3f7","../objects/gear/Recycler":"m2sq","../objects/gear/Storage":"om7z"}],"ndDT":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Block = void 0;

var _config = require("../config");

var _engine = require("../engine");

var _Sound = require("../engine/components/Sound");

var _math = require("../engine/utils/math");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Block = /*#__PURE__*/function (_Sprite) {
  _inherits(Block, _Sprite);

  var _super = _createSuper(Block);

  function Block(name, assetName, position, props) {
    var _this;

    _classCallCheck(this, Block);

    _this = _super.call(this, name, assetName, Object.assign(Object.assign({
      colliderType: "none"
    }, props), {
      position: position.add(new _math.Vector2(0, 0)).mul(_config.Config.SPRITE_PIXEL_SIZE * _config.Config.SPRITE_SCALE)
    }));
    _this.inChunkId = "";
    _this.sound = new _Sound.Sound();
    _this.animatedScale = 1;
    _this.animateScaleTo = 1;
    _this.darkenFactor = 1;
    _this.randomRotate = true;
    _this.randomFlipX = true;
    _this.customColliderType = "solid";
    return _this;
  }

  _createClass(Block, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(Block.prototype), "init", this).call(this);

      if (this.randomRotate) this.rotation = Math.floor((0, _math.random)(1, 5)) * Math.PI;
      if (this.randomFlipX) this.flip.x = Boolean(Math.floor((0, _math.random)(0, 2)));
      if (_config.Config.ALLOW_DARK) this.visible = false;
    }
  }, {
    key: "render",
    value: function render() {
      _get(_getPrototypeOf(Block.prototype), "render", this).call(this);

      if (_config.Config.ALLOW_DARK) this.darken();
    }
  }, {
    key: "update",
    value: function update() {
      var _this2 = this;

      _get(_getPrototypeOf(Block.prototype), "update", this).call(this); // this.sound.update3D(this.game, this.position);


      this.animatedScale = (0, _math.lerp)(this.animatedScale, this.animateScaleTo, .2);
      this.scale.set(this.animatedScale, this.animatedScale);
      if (this.game.children.find(function (child) {
        return child.collider.type == "dynamic" && child.position.distance(_this2.position) < 300;
      })) this.collider.type = (0, _math.safeValue)(this.customColliderType, "solid");else this.collider.type = "none";
    }
  }, {
    key: "darken",
    value: function darken() {
      var t = 1 - this.game.camera.position.y / 200;
      var d = this.game.camera.position.distance(this.position) - 200;
      this.darkenFactor = (d > 96 ? 1 : d / 96) + (t > 0 ? t : 0);
      if (this.darkenFactor < 1) this.opacity = 1 - this.darkenFactor;
      this.visible = this.darkenFactor < 1;
    }
  }, {
    key: "checkBlockIn",
    value: function checkBlockIn(offset, checkChunkBorders, findName) {
      var size = _config.Config.SPRITE_SIZE;
      var blocks = this.game.getChildrenByName(findName || "ore");
      var thisPos = this.position.div(size).apply(Math.floor);
      var top = +this.inChunkId.split("-")[1] <= 0 && offset.y < 0;
      var bottom = +this.inChunkId.split("-")[1] >= 3 && offset.y > 0;
      var vertical = bottom || top;
      return vertical && (0, _math.safeValue)(checkChunkBorders, true) || blocks.filter(function (block) {
        return block.name.indexOf("plant") < 0;
      }).findIndex(function (block) {
        var orePos = block.position.div(size).apply(Math.floor);
        return _math.Vector2.compare(orePos, thisPos.add(offset));
      }) >= 0;
    }
  }, {
    key: "dropItem",
    value: function dropItem(item, chancePercent, offset) {
      var drop = true;
      if (chancePercent) drop = (0, _math.chance)(chancePercent);
      if (!drop) return;
      this.game.add(new item(this.position.add(offset || _math.Vector2.zero()).add(new _math.Vector2((0, _math.random)(-10, 10), (0, _math.random)(-10, 10)))));
      this.game.initChildren();
    }
  }], [{
    key: "rules",
    value: function rules(x, y) {
      return false;
    }
  }]);

  return Block;
}(_engine.Sprite);

exports.Block = Block;
},{"../config":"FxBD","../engine":"XaJu","../engine/components/Sound":"imsH","../engine/utils/math":"NgPq"}],"ze6F":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ore = void 0;

var _math = require("../../engine/utils/math");

var _config = require("../../config");

var _Particles = require("../../engine/components/Particles");

var _Block2 = require("../Block");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Ore = /*#__PURE__*/function (_Block) {
  _inherits(Ore, _Block);

  var _super = _createSuper(Ore);

  function Ore(type, position, props) {
    var _this;

    _classCallCheck(this, Ore);

    var _a;

    _this = _super.call(this, "ore-".concat(type), type, position, props);
    _this.oreType = type;
    _this.tilePosition = position;
    var settings = _config.OreSettings[type];
    _this.hp = settings ? settings.hp : _config.OreSettings["stone"].hp;
    _this.needToolLevel = ((_a = _config.OreSettings[type]) === null || _a === void 0 ? void 0 : _a.tool) || 1;
    _this.unbreakable = false;
    _this.particlesColors = [_config.Color.BLACK];
    _this.hitAudioName = "stone-hit";
    _this.breakAudioNames = ["stone-break-1", "stone-break-2", "stone-break-3"];
    _this.allowDecorations = false;
    _this.allowBottomDecorations = false;
    _this.bottomDecorationsCount = 8;
    _this.currentBottomDecorationFrame = null;
    _this.allowTopDecorations = false;
    _this.topDecorationsCount = 10;
    _this.currentTopDecorationFrame = null;
    return _this;
  }

  _createClass(Ore, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(Ore.prototype), "init", this).call(this);

      if (!this.allowDecorations) return; // Top

      if (!this.checkBlockIn(new _math.Vector2(0, -1))) this.allowTopDecorations = true; // Bottom

      if (!this.checkBlockIn(new _math.Vector2(0, 1))) this.allowBottomDecorations = true;

      if (this.allowTopDecorations) {
        if ((0, _math.chance)(50)) this.currentTopDecorationFrame = (0, _math.randomInt)(0, this.topDecorationsCount);else this.currentTopDecorationFrame = null;
      }

      if (this.allowBottomDecorations) {
        if ((0, _math.chance)(50)) this.currentBottomDecorationFrame = (0, _math.randomInt)(0, this.bottomDecorationsCount);else this.currentBottomDecorationFrame = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      _get(_getPrototypeOf(Ore.prototype), "render", this).call(this);

      this.renderDecorations();
    }
  }, {
    key: "renderDecorations",
    value: function renderDecorations() {
      if (!this.visible) return;
      if (this.currentTopDecorationFrame) this.game.renderer.drawSprite({
        texture: (0, _math.asImage)(this.game.getAssetByName("plants")),
        flip: this.flip,
        frame: new _math.Vector2(this.currentTopDecorationFrame, 0),
        position: this.position.add(new _math.Vector2(0, -_config.Config.SPRITE_SIZE + (1 - this.scale.y) * _config.Config.SPRITE_SIZE)),
        opacity: this.opacity,
        scale: this.scale
      });
      if (this.currentBottomDecorationFrame) this.game.renderer.drawSprite({
        texture: (0, _math.asImage)(this.game.getAssetByName("under-stone")),
        flip: this.flip,
        frame: new _math.Vector2(this.currentBottomDecorationFrame, 0),
        position: this.position.add(new _math.Vector2(0, _config.Config.SPRITE_SIZE - (1 - this.scale.y) * _config.Config.SPRITE_SIZE)),
        opacity: this.opacity,
        scale: this.scale
      });
    }
  }, {
    key: "hit",
    value: function hit(damage, toolLevel) {
      if (!this.unbreakable && toolLevel >= this.needToolLevel) {
        this.hp -= damage;
        this.animatedScale = .8;
        (0, _Particles.SpawnParticles)(this.game, this.position, {
          colors: this.particlesColors,
          size: [.2, .5],
          count: 6,
          box: function box() {
            return new _math.Vector2((0, _math.random)(-_config.Config.SPRITE_SIZE / 2, _config.Config.SPRITE_SIZE / 2), (0, _math.random)(-_config.Config.SPRITE_SIZE / 2, _config.Config.SPRITE_SIZE / 2));
          }
        });

        if (this.hp <= 0) {
          // Break audio
          this.sound.play(this.game, this.breakAudioNames[(0, _math.randomInt)(0, this.breakAudioNames.length - 1)]);
          this.onBreak();
        }
      } // Hit audio


      if (this.hp > 0) this.sound.play(this.game, this.hitAudioName);
    }
  }, {
    key: "onBreak",
    value: function onBreak() {
      (0, _Particles.SpawnParticles)(this.game, this.position, {
        colors: this.particlesColors
      });
      this.game.removeChildById(this.id);
      this.game.generator.destroyOre(this.inChunkId);
    }
  }]);

  return Ore;
}(_Block2.Block);

exports.Ore = Ore;
},{"../../engine/utils/math":"NgPq","../../config":"FxBD","../../engine/components/Particles":"zRqz","../Block":"ndDT"}],"P2Ir":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Antin = void 0;

var _config = require("../../config");

var _Generator = require("../../engine/Generator");

var _math = require("../../engine/utils/math");

var _RawAntin = require("../raws/RawAntin");

var _Ore2 = require("./Ore");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Antin = /*#__PURE__*/function (_Ore) {
  _inherits(Antin, _Ore);

  var _super = _createSuper(Antin);

  function Antin(position) {
    var _this;

    _classCallCheck(this, Antin);

    _this = _super.call(this, "antin", position);
    _this.particlesColors = [_config.Color.GREY, _config.Color.RED];
    return _this;
  }

  _createClass(Antin, [{
    key: "onBreak",
    value: function onBreak() {
      _get(_getPrototypeOf(Antin.prototype), "onBreak", this).call(this);

      this.dropItem(_RawAntin.RawAntin);
    }
  }], [{
    key: "rules",
    value: function rules(x, y) {
      var res = (0, _Generator.noise)(x / 2, y / 2, 4, 3);
      var mask = (0, _Generator.noise)(x / 8 - 2, y / 8 + 10);
      return (0, _math.inRange)(res + mask / 4, 0, .6);
    }
  }]);

  return Antin;
}(_Ore2.Ore);

exports.Antin = Antin;
},{"../../config":"FxBD","../../engine/Generator":"KT6z","../../engine/utils/math":"NgPq","../raws/RawAntin":"A77P","./Ore":"ze6F"}],"S9NJ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Basalt = void 0;

var _config = require("../../config");

var _Ore2 = require("./Ore");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Basalt = /*#__PURE__*/function (_Ore) {
  _inherits(Basalt, _Ore);

  var _super = _createSuper(Basalt);

  function Basalt(position, data) {
    var _this;

    _classCallCheck(this, Basalt);

    _this = _super.call(this, "basalt", position, data);
    _this.particlesColors = [_config.Color.GREY];
    return _this;
  }

  return _createClass(Basalt);
}(_Ore2.Ore);

exports.Basalt = Basalt;
},{"../../config":"FxBD","./Ore":"ze6F"}],"G4HC":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BurntBasalt = void 0;

var _config = require("../../config");

var _Ore2 = require("./Ore");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var BurntBasalt = /*#__PURE__*/function (_Ore) {
  _inherits(BurntBasalt, _Ore);

  var _super = _createSuper(BurntBasalt);

  function BurntBasalt(position) {
    var _this;

    _classCallCheck(this, BurntBasalt);

    _this = _super.call(this, "burnt-basalt", position); // this.needToolLevel = 4;
    // this.hp = 80;

    _this.particlesColors = [_config.Color.DARK_GREY];
    return _this;
  }

  return _createClass(BurntBasalt);
}(_Ore2.Ore);

exports.BurntBasalt = BurntBasalt;
},{"../../config":"FxBD","./Ore":"ze6F"}],"zVgn":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cidium = void 0;

var _config = require("../../config");

var _Generator = require("../../engine/Generator");

var _math = require("../../engine/utils/math");

var _RawCidium = require("../raws/RawCidium");

var _Ore2 = require("./Ore");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Cidium = /*#__PURE__*/function (_Ore) {
  _inherits(Cidium, _Ore);

  var _super = _createSuper(Cidium);

  function Cidium(position) {
    var _this;

    _classCallCheck(this, Cidium);

    _this = _super.call(this, "cidium", position); // this.hp = 20;

    _this.particlesColors = [_config.Color.BLACK, _config.Color.YELLOW];
    _this.allowDecorations = true;
    return _this;
  }

  _createClass(Cidium, [{
    key: "onBreak",
    value: function onBreak() {
      _get(_getPrototypeOf(Cidium.prototype), "onBreak", this).call(this);

      this.dropItem(_RawCidium.RawCidium);
    }
  }], [{
    key: "rules",
    value: function rules(x, y) {
      var res = (0, _Generator.noise)(x / 5, y / 5, 4, 4);
      var mask = (0, _Generator.noise)(x, y + 4);
      return (0, _math.inRange)(res - mask / 4, .7, 1);
    }
  }]);

  return Cidium;
}(_Ore2.Ore);

exports.Cidium = Cidium;
},{"../../config":"FxBD","../../engine/Generator":"KT6z","../../engine/utils/math":"NgPq","../raws/RawCidium":"lOfT","./Ore":"ze6F"}],"VBKr":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FallingOre = void 0;

var _config = require("../../config");

var _Particles = require("../../engine/components/Particles");

var _math = require("../../engine/utils/math");

var _Ore2 = require("./Ore");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var FallingOre = /*#__PURE__*/function (_Ore) {
  _inherits(FallingOre, _Ore);

  var _super = _createSuper(FallingOre);

  function FallingOre(type, position) {
    var _this;

    _classCallCheck(this, FallingOre);

    _this = _super.call(this, type, position);
    _this.damage = [2, 5];
    _this.elapsedBeforeFall = 0;
    _this.allowDecorations = true;
    _this.allowFall = false;
    _this.willFall = false;
    _this.customColliderType = "solid";
    return _this;
  }

  _createClass(FallingOre, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(FallingOre.prototype), "init", this).call(this);

      this.acceleration.y = .98;
    }
  }, {
    key: "update",
    value: function update() {
      _get(_getPrototypeOf(FallingOre.prototype), "update", this).call(this);

      this.gravity();
    }
  }, {
    key: "gravity",
    value: function gravity() {
      var _a;

      if (!this.willFall) {
        this.elapsedBeforeFall = this.game.clock.elapsed;
        return;
      }

      if (this.game.generator.checkIsInLoadedChunk(this.position)) {
        if ((this.game.clock.elapsed - this.elapsedBeforeFall) % _config.Config.ORE_FALL_DELAY == 0 && !this.allowFall) this.allowFall = true;

        if (this.allowFall) {
          if ((_a = this.collider.collidesWith) === null || _a === void 0 ? void 0 : _a.bottom) {
            this.fallBreak();
          }

          this.customColliderType = "dynamic";
          this.velocity.y++;
          this.hitEntity();
        }
      } else {
        if (this.allowFall) this.fallBreak();
      }

      this.collider.collidesWith = null;
    }
  }, {
    key: "fall",
    value: function fall() {
      this.willFall = true;
      (0, _Particles.SpawnCrumbleParticles)(this.game, this.position.add(new _math.Vector2(0, 40)), this.particlesColors);
    }
  }, {
    key: "fallBreak",
    value: function fallBreak() {
      (0, _Particles.SpawnParticles)(this.game, this.position, {
        colors: this.particlesColors
      });
      this.sound.play(this.game, "fall-stone-break");
      this.game.removeChildById(this.id);
      this.game.generator.destroyOre(this.inChunkId);
    }
  }, {
    key: "hitEntity",
    value: function hitEntity() {
      var _this2 = this;

      var entity = this.game.getChildrenByGroupName("entity").find(function (child) {
        return _this2.game.physics.collide(_this2, child).any;
      });
      if (!entity) return;
      entity.hit((0, _math.randomInt)(this.damage[0], this.damage[0]));
    }
  }]);

  return FallingOre;
}(_Ore2.Ore);

exports.FallingOre = FallingOre;
},{"../../config":"FxBD","../../engine/components/Particles":"zRqz","../../engine/utils/math":"NgPq","./Ore":"ze6F"}],"nAsK":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CrackedStone = void 0;

var _math = require("../../engine/utils/math");

var _FallingORe = require("./FallingORe");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var CrackedStone = /*#__PURE__*/function (_FallingOre) {
  _inherits(CrackedStone, _FallingOre);

  var _super = _createSuper(CrackedStone);

  function CrackedStone(position) {
    _classCallCheck(this, CrackedStone);

    return _super.call(this, "cracked-stone", position);
  }

  _createClass(CrackedStone, [{
    key: "init",
    value: function init() {
      var _this = this;

      _get(_getPrototypeOf(CrackedStone.prototype), "init", this).call(this);

      this.game.generator.onWorldChange(this.id, this.position, function () {
        if (!_this.checkBlockIn(new _math.Vector2(0, 1), false)) {
          _this.animateScaleTo = .7;

          _this.fall();
        }
      });
    }
  }]);

  return CrackedStone;
}(_FallingORe.FallingOre);

exports.CrackedStone = CrackedStone;
},{"../../engine/utils/math":"NgPq","./FallingORe":"VBKr"}],"KiAu":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InfectedOre = void 0;

var _config = require("../../config");

var _math = require("../../engine/utils/math");

var _noise = require("../../engine/utils/noise");

var _Ore2 = require("./Ore");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var InfectedOre = /*#__PURE__*/function (_Ore) {
  _inherits(InfectedOre, _Ore);

  var _super = _createSuper(InfectedOre);

  function InfectedOre(type, position, data, props) {
    var _this;

    _classCallCheck(this, InfectedOre);

    _this = _super.call(this, type, position, props);
    _this.allowInfect = false;
    _this.allowGrow = true;
    _this.infectionStage = data ? data.infectionStage || 0 : 0;
    _this.target = undefined;
    _this.isEating = false;
    _this.daturaPosition = _math.Vector2.zero();
    _this.daturaRotation = 0;
    _this.tonguePosition = _math.Vector2.zero();
    _this.tongueVelocity = _math.Vector2.zero();
    _this.startTonguePosition = _math.Vector2.zero();
    return _this;
  }

  _createClass(InfectedOre, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(InfectedOre.prototype), "init", this).call(this);

      this.checkEmptySpace();
      this.daturaPosition = this.position.add(new _math.Vector2(0, _config.Config.SPRITE_SIZE - 10));
      this.tonguePosition.copy(this.daturaPosition.add(new _math.Vector2(0, 20)));
      this.startTonguePosition = this.position.add(new _math.Vector2(0, _config.Config.SPRITE_SIZE + 100));
      this.infect(); // Height clamp

      if (Math.floor(this.position.x / _config.Config.SPRITE_SIZE) <= 10) this.allowInfect = false;
    }
  }, {
    key: "update",
    value: function update() {
      _get(_getPrototypeOf(InfectedOre.prototype), "update", this).call(this);

      this.tonguePosition.x += this.tongueVelocity.x;
      this.tonguePosition.y += this.tongueVelocity.y;
      this.tongueVelocity.x *= .9;
      this.tongueVelocity.y *= .9;
      this.isEating = !!this.target && this.target.position.distance(this.daturaPosition) < 120;
      this.hitEntity();
      this.growInfection();
      this.sticking();
    }
  }, {
    key: "sticking",
    value: function sticking() {
      var _this2 = this;

      if (this.infectionStage < 3 || !this.allowInfect) return;
      var body = this.game.children.find(function (child) {
        return child.collider.type == "dynamic" && (0, _math.safeValue)(child.interest, true) && (child.position.distance(_this2.daturaPosition) < 100 || child.position.distance(_this2.startTonguePosition) < 100);
      });
      this.target = body;

      if (!this.target) {
        this.tongueTo(this.startTonguePosition.add(new _math.Vector2(Math.sin(this.game.clock.elapsed / 40 + this.position.x / 10) * 5)));
        this.tongueVelocity.copy(this.tongueVelocity.mul(.97));
      } else {
        this.tongueVelocity.copy(this.tongueVelocity.mul(0));
        if (this.target.eating !== undefined) this.target.eating = true; // Tongue to target

        if (this.tonguePosition.distance(this.target.position) < 20) this.tonguePosition = this.target.position.expand();else this.tonguePosition.lerp(this.target.position, .5); // Move entity to datura

        if (body) if (body.position.distance(this.daturaPosition) > 10) body.velocity.copy(body.velocity.add(body.position.sub(this.daturaPosition).normalize().mul(-4)));
      }
    }
  }, {
    key: "hitEntity",
    value: function hitEntity() {
      var tar = this.target;

      if (this.target) {
        // If player - hit
        if (tar.hit) {
          if (this.game.tick(60) && this.isEating) tar.hit((0, _math.clamp)((0, _math.randomInt)(-1, 3), 1, 3), 6);
        } else {
          // If item - eat :D
          if (tar.position.distance(this.daturaPosition) < 80) {
            tar.picked = tar.allowPickup = false;
            tar.foldToPosition = this.daturaPosition;
          }
        }
      }
    }
  }, {
    key: "tongueTo",
    value: function tongueTo(position) {
      var to = position.sub(this.tonguePosition).mul(.04);
      this.tongueVelocity.copy(this.tongueVelocity.add(to));
    }
  }, {
    key: "infect",
    value: function infect() {
      if (((0, _noise.simplex2)(this.position.x / 2, this.position.y / 2) + 1) / 2 > (this.allowGrow ? .7 : .9)) {
        this.allowInfect = true;
      }
    }
  }, {
    key: "growInfection",
    value: function growInfection() {
      if (!this.allowInfect) return;

      if (this.game.tick(_config.Config.INFECTION_GROW_TICK) && this.infectionStage < 3) {
        this.checkEmptySpace();

        if (this.allowGrow && (0, _math.chance)(_config.Config.INFECTION_GROW_CHANCE)) {
          var needStage = this.infectionStage + 1;
          this.infectionStage = needStage;
          this.saveData();
        }
      }
    }
  }, {
    key: "onBreak",
    value: function onBreak() {
      if (this.infectionStage >= 2 && this.allowInfect) this.particlesColors = [_config.Color.ORANGE, _config.Color.BLACK];

      _get(_getPrototypeOf(InfectedOre.prototype), "onBreak", this).call(this);
    }
  }, {
    key: "render",
    value: function render() {
      _get(_getPrototypeOf(InfectedOre.prototype), "render", this).call(this);

      if (!this.allowInfect) return;
      this.daturaRotation = (0, _math.lerp)(this.daturaRotation, (0, _math.clamp)(new _math.Vector2().copy(this.position.sub(this.tonguePosition.add(new _math.Vector2(-4)))).angle() - Math.PI * 1.5, -Math.PI / 5, Math.PI / 5), .1); // Render infection
      // Infection roots

      if (this.infectionStage >= 1 && this.visible) this.game.renderer.drawSprite({
        texture: (0, _math.asImage)(this.game.getAssetByName("infection")),
        position: this.position,
        flip: this.flip,
        scale: this.scale,
        opacity: this.opacity,
        layer: "plants"
      });
      var frame = this.target ? 1 + (this.isEating ? Math.floor(this.game.clock.elapsed / 20) % 2 : 0) : 0; // Datura

      if (this.infectionStage >= 2 && this.visible) this.game.renderer.drawSprite({
        texture: (0, _math.asImage)(this.game.getAssetByName("datura")),
        frame: new _math.Vector2(this.infectionStage - 2 + frame, 0),
        width: 2,
        height: 2,
        position: this.daturaPosition.add(new _math.Vector2(0, 30)),
        opacity: this.opacity,
        layer: "plants",
        origin: new _math.Vector2(4, -40),
        // Rotate
        rotation: this.daturaRotation
      });
      this.renderTongue();
    }
  }, {
    key: "renderTongue",
    value: function renderTongue() {
      if (this.infectionStage < 3) return;
      var sin = this.isEating ? (Math.sin(this.game.clock.elapsed / 4) + 1) / 2 : 0;
      if (this.visible) // Tongue line
        this.game.renderer.drawLine({
          color: "#fbc67e",
          width: 4 + sin * 4,
          points: [this.position.add(new _math.Vector2(4, _config.Config.SPRITE_SIZE - 22)), this.tonguePosition.add(new _math.Vector2(4))],
          opacity: this.opacity,
          layer: "plants"
        }); // Tongue point

      this.game.renderer.drawSprite({
        texture: (0, _math.asImage)(this.game.getAssetByName("datura-tongue")),
        scale: _math.Vector2.all(1 + sin / 4),
        position: this.tonguePosition.add(new _math.Vector2(6)),
        layer: "plants"
      });
    }
  }, {
    key: "checkEmptySpace",
    value: function checkEmptySpace() {
      if (this.checkBlockIn(new _math.Vector2(0, 1))) this.allowGrow = false;
    }
  }, {
    key: "saveData",
    value: function saveData() {
      this.game.generator.modifyOre(this.inChunkId, {
        infectionStage: this.infectionStage
      });
    }
  }]);

  return InfectedOre;
}(_Ore2.Ore);

exports.InfectedOre = InfectedOre;
},{"../../config":"FxBD","../../engine/utils/math":"NgPq","../../engine/utils/noise":"xNw6","./Ore":"ze6F"}],"IUuf":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeepStone = void 0;

var _InfectedOre2 = require("./InfectedOre");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DeepStone = /*#__PURE__*/function (_InfectedOre) {
  _inherits(DeepStone, _InfectedOre);

  var _super = _createSuper(DeepStone);

  function DeepStone(position, data) {
    var _this;

    _classCallCheck(this, DeepStone);

    _this = _super.call(this, "deep-stone", position, data);
    _this.randomRotate = false;
    _this.allowDecorations = true;
    return _this;
  }

  return _createClass(DeepStone);
}(_InfectedOre2.InfectedOre);

exports.DeepStone = DeepStone;
},{"./InfectedOre":"KiAu"}],"jc3R":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Destrony = void 0;

var _Ore2 = require("./Ore");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Destrony = /*#__PURE__*/function (_Ore) {
  _inherits(Destrony, _Ore);

  var _super = _createSuper(Destrony);

  function Destrony(position) {
    var _this;

    _classCallCheck(this, Destrony);

    _this = _super.call(this, "destrony", position);
    _this.unbreakable = true;
    _this.randomRotate = false;
    return _this;
  }

  return _createClass(Destrony);
}(_Ore2.Ore);

exports.Destrony = Destrony;
},{"./Ore":"ze6F"}],"EgHC":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FetusStone = void 0;

var _config = require("../../config");

var _Particles = require("../../engine/components/Particles");

var _Generator = require("../../engine/Generator");

var _math = require("../../engine/utils/math");

var _generator = require("../../managers/generator");

var _HealingFetus = require("../food/HealingFetus");

var _Ore2 = require("./Ore");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var FetusStone = /*#__PURE__*/function (_Ore) {
  _inherits(FetusStone, _Ore);

  var _super = _createSuper(FetusStone);

  function FetusStone(position, data) {
    var _this;

    _classCallCheck(this, FetusStone);

    _this = _super.call(this, "fetus-stone", position);
    _this.randomRotate = false;
    _this.playerIsNear = false;
    _this.vineLength = data ? (data === null || data === void 0 ? void 0 : data.length) || null : null;
    _this.maxVineLength = data ? (data === null || data === void 0 ? void 0 : data.maxLength) || 1 : 1;
    _this.allowGrow = true;
    _this.grabbedCount = data ? (data === null || data === void 0 ? void 0 : data.grabbedCount) || null : null;
    _this.canGrab = false; // this.cutOff = false;

    _this.cutOff = data ? (data === null || data === void 0 ? void 0 : data.cutOff) || false : false;
    _this.breakAudioNames = ["plant-break"];
    _this.hitAudioName = "plant-hit";
    return _this;
  }

  _createClass(FetusStone, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      _get(_getPrototypeOf(FetusStone.prototype), "init", this).call(this);

      this.player = this.game.getChildById("player");

      if (this.vineLength === null) {
        this.maxVineLength = (0, _math.randomInt)(_config.Config.VINE_MIN_LENGTH, _config.Config.VINE_MAX_LENGTH);
        this.vineLength = (0, _math.clamp)((0, _math.randomInt)(1, 4), 0, this.maxVineLength);
        this.saveData();
      }

      if (this.grabbedCount == null) {
        this.grabbedCount = (0, _math.clamp)((0, _math.randomInt)(-2, 4), 0, 4);
        this.saveData();
      }

      if (!this.cutOff) for (var i = 0; i < this.vineLength; i++) {
        if (!(0, _generator.caveRules)(this.tilePosition.x, this.tilePosition.y, 0, i + 1)) {
          this.vineLength = i;
          this.cutOff = true;
          this.saveData();
          break;
        }
      } // this.checkEmptySpace();

      if (!this.allowGrow) this.vineLength = 0; // Trigger

      this.game.gamepad.onKeyDown(this.id, "enter", function () {
        if (!_this2.canGrab || (_this2.grabbedCount || 0) >= (_this2.vineLength || 0)) return;

        _this2.grab();
      });
    }
  }, {
    key: "update",
    value: function update() {
      _get(_getPrototypeOf(FetusStone.prototype), "update", this).call(this);

      this.tryGrab();
      if (!this.allowGrow) return; // if ((this.vineLength || 0) < this.maxVineLength && this.allowGrow && this.game.tick(Config.VINE_GROW_TICK))
      //     if (chance(Config.VINE_GROW_CHANCE))
      //         this.grow();

      if (this.game.tick(_config.Config.VINE_GROW_TICK * 2)) if ((0, _math.chance)(_config.Config.VINE_GROW_CHANCE * .3) && this.grabbedCount != null) {
        this.grabbedCount--;
        this.grabbedCount = (0, _math.clamp)(this.grabbedCount, 0, this.vineLength || 0);
      } // if (!this.cutOff && this.game.tick(100))
      //     this.checkEmptySpaceToGrow();
    }
  }, {
    key: "render",
    value: function render() {
      _get(_getPrototypeOf(FetusStone.prototype), "render", this).call(this);

      this.renderVine();
    }
  }, {
    key: "tryGrab",
    value: function tryGrab() {
      var vineHeight = (this.vineLength || 0) * _config.Config.SPRITE_SIZE;
      var collides = (this.vineLength || 0) > 0 && (this.grabbedCount || 0) < (this.vineLength || 0) && this.game.physics.collideWithRect({
        id: this.player.id,
        position: this.player.position,
        width: this.player.collider.width,
        height: this.player.collider.height
      }, {
        id: this.id,
        position: this.position.add(new _math.Vector2(0, vineHeight / 2)),
        width: this.collider.width / 2,
        height: this.collider.height + vineHeight
      }).any;
      this.canGrab = collides;

      if (collides) {
        this.player.expectedActionType = {
          name: "grab",
          priority: 2
        };
      }
    }
  }, {
    key: "grab",
    value: function grab() {
      if (this.grabbedCount == null || this.grabbedCount >= (this.vineLength || 0)) return;
      this.grabbedCount++;
      this.grabbedCount = (0, _math.clamp)(this.grabbedCount, 0, this.vineLength || 0);
      this.dropItem(_HealingFetus.HealingFetus, 100, new _math.Vector2(0, _config.Config.SPRITE_SIZE * this.grabbedCount));
    }
  }, {
    key: "onBreak",
    value: function onBreak() {
      var _this3 = this;

      _get(_getPrototypeOf(FetusStone.prototype), "onBreak", this).call(this);

      if (!this.vineLength) return;
      var size = _config.Config.SPRITE_SIZE;
      (0, _Particles.SpawnParticles)(this.game, this.position, {
        count: 4,
        colors: [_config.Color.ORANGE],
        velocity: function velocity() {
          return new _math.Vector2((0, _math.random)(1, 1.5));
        },
        gravity: .01,
        opacity: 0,
        downOpacity: -.01,
        downSize: .008,
        rotationVelocity: function rotationVelocity() {
          return (0, _math.random)(-.01, .01);
        },
        box: function box() {
          return new _math.Vector2((0, _math.random)(-size * .4, size * .4), (0, _math.random)(0, size * (_this3.vineLength || 1)));
        }
      });
    }
  }, {
    key: "renderVine",
    value: function renderVine() {
      var _this4 = this;

      if (!this.vineLength || !this.allowGrow) return;
      var size = _config.Config.SPRITE_SIZE;

      for (var i = 0; i < this.vineLength; i++) {
        var frame = 0;
        if (i == 0) frame = 0;
        if (i > 0) frame = 1;
        if (i == this.vineLength - 1) frame = 2;
        var pos = this.position.add(new _math.Vector2(0, size + i * size));
        var t = 1 - this.game.camera.position.y / 200;
        var d = this.game.camera.position.distance(pos) - 200;
        var darkenFactor = (d > 96 ? 1 : d / 96) + (t > 0 ? t : 0);
        if (darkenFactor < 1 || !_config.Config.ALLOW_DARK) this.game.renderer.drawSprite({
          texture: (0, _math.asImage)(this.game.getAssetByName("fetus-vine")),
          position: pos.add(new _math.Vector2(Math.sin(this.game.clock.elapsed / 60 + this.position.x / _config.Config.SPRITE_SIZE) * i * 1.5)),
          frame: new _math.Vector2(+(i < (this.grabbedCount || 0)), frame),
          flip: {
            x: i % 2 == 0 || i % 3 == 0,
            y: false
          },
          opacity: _config.Config.ALLOW_DARK ? 1 - darkenFactor : 1
        });
      } // Spawn particles


      if (this.game.tick(40) || this.game.tick(120)) (0, _Particles.SpawnParticles)(this.game, this.position, {
        count: 1,
        colors: [_config.Color.ORANGE],
        velocity: function velocity() {
          return new _math.Vector2((0, _math.random)(.2, .5));
        },
        gravity: .01,
        opacity: 0,
        downOpacity: -.01,
        downSize: .008,
        rotationVelocity: function rotationVelocity() {
          return (0, _math.random)(-.01, .01);
        },
        box: function box() {
          return new _math.Vector2((0, _math.random)(-size * .4, size * .4), (0, _math.random)(0, size * (_this4.vineLength || 1)));
        }
      });
    }
  }, {
    key: "grow",
    value: function grow() {
      if (this.vineLength === null || !this.allowGrow || this.vineLength >= this.maxVineLength) return;
      var needLength = this.vineLength;
      if (needLength < this.maxVineLength) needLength++;
      this.vineLength = needLength;
      this.checkEmptySpaceToGrow();
      this.saveData();
    }
  }, {
    key: "checkEmptySpaceToGrow",
    value: function checkEmptySpaceToGrow() {
      if (this.vineLength === null || !this.allowGrow) return;
      var height = 0;

      for (var i = 1; i < 8; i++) {
        if (this.checkBlockIn(new _math.Vector2(0, i), false)) {
          this.cutOff = true;
          break;
        } else height++;
      }

      this.vineLength = (0, _math.clamp)(this.vineLength, 0, height);
      this.saveData();
    }
  }, {
    key: "saveData",
    value: function saveData() {
      this.game.generator.modifyOre(this.inChunkId, {
        length: this.vineLength,
        grabbedCount: this.grabbedCount,
        maxLength: this.maxVineLength,
        cutOff: this.cutOff
      });
    }
  }, {
    key: "checkEmptySpace",
    value: function checkEmptySpace() {
      this.allowGrow = !this.checkBlockIn(new _math.Vector2(0, 1), false);
    }
  }], [{
    key: "rules",
    value: function rules(x, y) {
      var res = (0, _Generator.noise)(x / 8, y / 8);
      var haveEmptySpace = (0, _generator.caveRules)(x, y, 0, 1);
      return (0, _math.inRange)(res, 0, .8) && haveEmptySpace;
    }
  }]);

  return FetusStone;
}(_Ore2.Ore);

exports.FetusStone = FetusStone;
},{"../../config":"FxBD","../../engine/components/Particles":"zRqz","../../engine/Generator":"KT6z","../../engine/utils/math":"NgPq","../../managers/generator":"v9dU","../food/HealingFetus":"nfcA","./Ore":"ze6F"}],"vVYW":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DangerOre = void 0;

var _Ore2 = require("./Ore");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DangerOre = /*#__PURE__*/function (_Ore) {
  _inherits(DangerOre, _Ore);

  var _super = _createSuper(DangerOre);

  function DangerOre(type, position) {
    _classCallCheck(this, DangerOre);

    return _super.call(this, type, position);
  }

  _createClass(DangerOre, [{
    key: "hit",
    value: function hit(damage, level) {
      _get(_getPrototypeOf(DangerOre.prototype), "hit", this).call(this, damage, level);

      var player = this.game.getChildById("player");
      if (!player) return;
      if (!player.hasBottle) player.hit(1);
    }
  }]);

  return DangerOre;
}(_Ore2.Ore);

exports.DangerOre = DangerOre;
},{"./Ore":"ze6F"}],"Ms1e":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Manty = void 0;

var _config = require("../../config");

var _Generator = require("../../engine/Generator");

var _math = require("../../engine/utils/math");

var _RawManty = require("../raws/RawManty");

var _DangerOre2 = require("./DangerOre");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Manty = /*#__PURE__*/function (_DangerOre) {
  _inherits(Manty, _DangerOre);

  var _super = _createSuper(Manty);

  function Manty(position) {
    var _this;

    _classCallCheck(this, Manty);

    _this = _super.call(this, "manty", position);
    _this.randomRotate = false;
    _this.particlesColors = [_config.Color.RED, _config.Color.DARK_GREY];
    return _this;
  }

  _createClass(Manty, [{
    key: "onBreak",
    value: function onBreak() {
      _get(_getPrototypeOf(Manty.prototype), "onBreak", this).call(this);

      this.dropItem(_RawManty.RawManty);
    }
  }], [{
    key: "rules",
    value: function rules(x, y) {
      var res = (0, _Generator.noise)(x / 2, y / 2, 2);
      return (0, _math.inRange)(res, 0, .5);
    }
  }]);

  return Manty;
}(_DangerOre2.DangerOre);

exports.Manty = Manty;
},{"../../config":"FxBD","../../engine/Generator":"KT6z","../../engine/utils/math":"NgPq","../raws/RawManty":"GaRh","./DangerOre":"vVYW"}],"IZVu":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MushroomStone = void 0;

var _config = require("../../config");

var _Particles = require("../../engine/components/Particles");

var _Generator = require("../../engine/Generator");

var _math = require("../../engine/utils/math");

var _generator = require("../../managers/generator");

var _Ore2 = require("./Ore");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var MushroomStone = /*#__PURE__*/function (_Ore) {
  _inherits(MushroomStone, _Ore);

  var _super = _createSuper(MushroomStone);

  function MushroomStone(position) {
    var _this;

    _classCallCheck(this, MushroomStone);

    _this = _super.call(this, "mushroom-stone", position);
    _this.allowGrow = true;
    _this.growed = true;
    _this.randomRotate = false;
    _this.particlesColors = [_config.Color.GREY, _config.Color.RED];
    _this.currentFrame = (0, _math.randomInt)(0, 4);
    return _this;
  }

  _createClass(MushroomStone, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(MushroomStone.prototype), "init", this).call(this);

      if (this.checkBlockIn(new _math.Vector2(0, -1))) this.allowGrow = false;
    }
  }, {
    key: "render",
    value: function render() {
      _get(_getPrototypeOf(MushroomStone.prototype), "render", this).call(this);

      if (this.allowGrow) this.renderMushroom();
    }
  }, {
    key: "hit",
    value: function hit(damage, toolLevel) {
      _get(_getPrototypeOf(MushroomStone.prototype), "hit", this).call(this, damage, toolLevel);

      (0, _Particles.SpawnDisputesParticles)(this.game, this.position.add(new _math.Vector2(0, -_config.Config.SPRITE_SIZE / 2 - 10)), .4);
    }
  }, {
    key: "onBreak",
    value: function onBreak() {
      _get(_getPrototypeOf(MushroomStone.prototype), "onBreak", this).call(this);

      (0, _Particles.SpawnDisputesParticles)(this.game, this.position, 1);
      var player = this.game.getChildById("player");
      if (player && this.position.distance(player.position) < 200 && player.position.y < this.position.y + _config.Config.SPRITE_SIZE / 2) player.hit((0, _math.randomInt)(4, 6));
    }
  }, {
    key: "renderMushroom",
    value: function renderMushroom() {
      if (!this.growed || !this.visible) return;
      var offset = (Math.sin(this.game.clock.elapsed / 60 + this.position.x) + 1) / 2 * .1;
      this.game.renderer.drawSprite({
        texture: (0, _math.asImage)(this.game.getAssetByName("mushroom")),
        frame: new _math.Vector2(this.currentFrame),
        scale: new _math.Vector2(1, 1 - offset),
        position: this.position.add(new _math.Vector2(0, -_config.Config.SPRITE_SIZE + offset * _config.Config.SPRITE_SIZE / 2)),
        opacity: this.opacity
      });
    }
  }], [{
    key: "rules",
    value: function rules(x, y) {
      var res = (0, _Generator.noise)(x / 8, y / 8);
      var haveEmptySpace = (0, _generator.caveRules)(x, y, 0, -1);
      return (0, _math.inRange)(res, 0, .5) && haveEmptySpace;
    }
  }]);

  return MushroomStone;
}(_Ore2.Ore);

exports.MushroomStone = MushroomStone;
},{"../../config":"FxBD","../../engine/components/Particles":"zRqz","../../engine/Generator":"KT6z","../../engine/utils/math":"NgPq","../../managers/generator":"v9dU","./Ore":"ze6F"}],"rOTL":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Nerius = void 0;

var _config = require("../../config");

var _Generator = require("../../engine/Generator");

var _math = require("../../engine/utils/math");

var _RawNerius = require("../raws/RawNerius");

var _Ore2 = require("./Ore");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Nerius = /*#__PURE__*/function (_Ore) {
  _inherits(Nerius, _Ore);

  var _super = _createSuper(Nerius);

  function Nerius(position) {
    var _this;

    _classCallCheck(this, Nerius);

    _this = _super.call(this, "nerius", position);
    _this.randomRotate = false;
    _this.particlesColors = [_config.Color.BLACK, "#fff"];
    return _this;
  }

  _createClass(Nerius, [{
    key: "onBreak",
    value: function onBreak() {
      _get(_getPrototypeOf(Nerius.prototype), "onBreak", this).call(this);

      this.dropItem(_RawNerius.RawNerius);
    }
  }], [{
    key: "rules",
    value: function rules(x, y) {
      var res = (0, _Generator.noise)(x / 6, y / 6, 5, 4);
      var mask = (0, _Generator.noise)(x + 5, y + 3);
      return (0, _math.inRange)(res - mask / 4, .7, 1);
    }
  }]);

  return Nerius;
}(_Ore2.Ore);

exports.Nerius = Nerius;
},{"../../config":"FxBD","../../engine/Generator":"KT6z","../../engine/utils/math":"NgPq","../raws/RawNerius":"i9gv","./Ore":"ze6F"}],"Fgu4":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Osmy = void 0;

var _config = require("../../config");

var _Generator = require("../../engine/Generator");

var _math = require("../../engine/utils/math");

var _RawGradeCidium = require("../raws/RawGradeCidium");

var _RawOsmy = require("../raws/RawOsmy");

var _Ore2 = require("./Ore");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Osmy = /*#__PURE__*/function (_Ore) {
  _inherits(Osmy, _Ore);

  var _super = _createSuper(Osmy);

  function Osmy(position) {
    var _this;

    _classCallCheck(this, Osmy);

    _this = _super.call(this, "osmy", position);
    _this.randomRotate = false;
    _this.particlesColors = [_config.Color.BLACK, _config.Color.BLUE];
    _this.allowDecorations = true;
    return _this;
  }

  _createClass(Osmy, [{
    key: "onBreak",
    value: function onBreak() {
      _get(_getPrototypeOf(Osmy.prototype), "onBreak", this).call(this);

      this.dropItem(_RawOsmy.RawOsmy);
      this.dropItem(_RawGradeCidium.RawGradeCidium, 30);
    }
  }], [{
    key: "rules",
    value: function rules(x, y) {
      var res = (0, _Generator.noise)(x / 3, y / 3, 5, 4);
      var mask = (0, _Generator.noise)(x / 2, y / 5 + 4);
      return (0, _math.inRange)(res - mask / 3, .65, 1);
    }
  }]);

  return Osmy;
}(_Ore2.Ore);

exports.Osmy = Osmy;
},{"../../config":"FxBD","../../engine/Generator":"KT6z","../../engine/utils/math":"NgPq","../raws/RawGradeCidium":"QB2i","../raws/RawOsmy":"j943","./Ore":"ze6F"}],"vPcC":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rady = void 0;

var _config = require("../../config");

var _Generator = require("../../engine/Generator");

var _math = require("../../engine/utils/math");

var _RawRady = require("../raws/RawRady");

var _DangerOre2 = require("./DangerOre");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Rady = /*#__PURE__*/function (_DangerOre) {
  _inherits(Rady, _DangerOre);

  var _super = _createSuper(Rady);

  function Rady(position) {
    var _this;

    _classCallCheck(this, Rady);

    _this = _super.call(this, "rady", position);
    _this.particlesColors = [_config.Color.GREY, _config.Color.GREEN];
    return _this;
  }

  _createClass(Rady, [{
    key: "onBreak",
    value: function onBreak() {
      _get(_getPrototypeOf(Rady.prototype), "onBreak", this).call(this);

      this.dropItem(_RawRady.RawRady);
    }
  }], [{
    key: "rules",
    value: function rules(x, y) {
      var res = (0, _Generator.noise)(x / 2, y / 2, 5, 3);
      var mask = (0, _Generator.noise)(x / 6 - 5, y / 6 + 10);
      return (0, _math.inRange)(res - mask / 4, .85, 1);
    }
  }]);

  return Rady;
}(_DangerOre2.DangerOre);

exports.Rady = Rady;
},{"../../config":"FxBD","../../engine/Generator":"KT6z","../../engine/utils/math":"NgPq","../raws/RawRady":"yZ9h","./DangerOre":"vVYW"}],"uE1e":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.child_of = void 0;
var child_of = "child-of-";
exports.child_of = child_of;
},{}],"nq2L":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Stalactite = void 0;

var _config = require("../../config");

var _Particles = require("../../engine/components/Particles");

var _math = require("../../engine/utils/math");

var _types = require("../../types");

var _FallingORe = require("../ores/FallingORe");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Stalactite = /*#__PURE__*/function (_FallingOre) {
  _inherits(Stalactite, _FallingOre);

  var _super = _createSuper(Stalactite);

  function Stalactite(length, parentGroup, parentInChunkId, position) {
    var _this;

    _classCallCheck(this, Stalactite);

    _this = _super.call(this, "stalactite", position.div(_config.Config.SPRITE_SIZE).apply(Math.floor));
    _this.length = length;
    _this.inChunkId = _types.child_of + parentInChunkId;
    _this.group = parentGroup;
    _this.damage = [4, 6];
    _this.particlesColors = [_config.Color.GREY];

    _this.acceleration.set(0, .98);

    _this.collider.width = _config.Config.SPRITE_SIZE * .7;
    return _this;
  }

  _createClass(Stalactite, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(Stalactite.prototype), "init", this).call(this);

      this.damage[0] = this.length + 4;
      this.damage[1] = this.length + 6;
      this.saveData();
    }
  }, {
    key: "update",
    value: function update() {
      _get(_getPrototypeOf(Stalactite.prototype), "update", this).call(this);

      if (this.length <= 0) return;

      if (this.allowFall) {
        this.collider.width = _config.Config.SPRITE_SIZE * .5;
      }

      this.tryFall();
      this.particles();
    }
  }, {
    key: "render",
    value: function render() {
      var size = _config.Config.SPRITE_SIZE;

      for (var i = 0; i < this.length; i++) {
        var pos = this.position.add(new _math.Vector2(0, i * size));
        var frame = 0;
        if (i == 0) frame = this.allowFall ? 3 : 0;
        if (i > 0) frame = 1;

        if (i == this.length - 1) {
          frame = 2;
          if (this.length == 1 && this.allowFall) frame = 4;
        }

        var t = 1 - this.game.camera.position.y / 200;
        var d = this.game.camera.position.distance(pos) - 200;
        var darkenFactor = (d > 96 ? 1 : d / 96) + (t > 0 ? t : 0);
        if (darkenFactor < 1) this.game.renderer.drawSprite({
          texture: (0, _math.asImage)(this.game.getAssetByName("stalactite")),
          frame: new _math.Vector2(0, frame),
          position: pos,
          opacity: 1 - darkenFactor
        });
      }
    }
  }, {
    key: "darken",
    value: function darken() {}
  }, {
    key: "growing",
    value: function growing() {
      if (this.game.tick(_config.Config.STALACTITE_GROW_TICK) && (0, _math.chance)(_config.Config.STALACTITE_GROW_CHANCE)) this.grow();
    }
  }, {
    key: "grow",
    value: function grow() {
      if (this.length >= _config.Config.MAX_STALACTITE_LENGTH) return;
      this.length++;
      this.damage[0] = this.length + 4;
      this.saveData();
    }
  }, {
    key: "tryFall",
    value: function tryFall() {
      var _this2 = this;

      if (!(0, _math.chance)(40)) return;

      if (this.game.tick(60)) {
        var entity = this.game.getChildrenByGroupName("entity").find(function (child) {
          var height = _config.Config.SPRITE_SIZE * _this2.length + 5 * _config.Config.SPRITE_SIZE;
          return _this2.game.physics.collideWithRect({
            id: _this2.id,
            position: _this2.position.add(new _math.Vector2(0, height / 2)),
            width: _config.Config.SPRITE_SIZE * .7,
            height: height
          }, {
            id: child.id,
            position: child.position,
            width: child.collider.width,
            height: child.collider.height
          }).any;
        });
        if (!entity) return;
        this.fall();
      }
    }
  }, {
    key: "fallBreak",
    value: function fallBreak() {
      _get(_getPrototypeOf(Stalactite.prototype), "fallBreak", this).call(this);

      this.length = 0;
      this.saveData();
    }
  }, {
    key: "onBreak",
    value: function onBreak() {
      _get(_getPrototypeOf(Stalactite.prototype), "onBreak", this).call(this);

      this.length = 0;
      this.saveData();
    }
  }, {
    key: "particles",
    value: function particles() {
      if (this.game.tick((0, _math.randomInt)(100, 150)) && (0, _math.chance)(60)) (0, _Particles.SpawnParticles)(this.game, this.position.add(new _math.Vector2(0, this.length * _config.Config.SPRITE_SIZE - _config.Config.SPRITE_SIZE * .8)), {
        count: 1,
        colors: [_config.Color.BLUE],
        gravity: .08,
        velocity: function velocity() {
          return new _math.Vector2(0, 0);
        },
        size: [.6, .6]
      });
    }
  }, {
    key: "saveData",
    value: function saveData() {
      this.game.generator.modifyOre(this.inChunkId.replace(_types.child_of, ""), {
        length: this.length
      });
    }
  }]);

  return Stalactite;
}(_FallingORe.FallingOre);

exports.Stalactite = Stalactite;
},{"../../config":"FxBD","../../engine/components/Particles":"zRqz","../../engine/utils/math":"NgPq","../../types":"uE1e","../ores/FallingORe":"VBKr"}],"WUWB":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StalactiteStone = void 0;

var _config = require("../../config");

var _Generator = require("../../engine/Generator");

var _math = require("../../engine/utils/math");

var _generator = require("../../managers/generator");

var _Stalactite = require("../environment/Stalactite");

var _Ore2 = require("./Ore");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var StalactiteStone = /*#__PURE__*/function (_Ore) {
  _inherits(StalactiteStone, _Ore);

  var _super = _createSuper(StalactiteStone);

  function StalactiteStone(position, data, props) {
    var _this;

    _classCallCheck(this, StalactiteStone);

    _this = _super.call(this, "basalt", position, props);
    _this.stalactiteLength = (data === null || data === void 0 ? void 0 : data.length) === undefined ? -1 : data === null || data === void 0 ? void 0 : data.length;
    _this.allowGrow = true;
    _this.stalactiteSpawned = false;
    return _this;
  }

  _createClass(StalactiteStone, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(StalactiteStone.prototype), "init", this).call(this);

      if (!this.allowGrow) return;

      if (this.stalactiteLength < 0) {
        var variants = [1, 1, 2, 2, 2, 3, 3];
        this.stalactiteLength = variants[(0, _math.randomInt)(0, variants.length - 1)];
      }

      for (var i = 0; i < this.stalactiteLength; i++) {
        if (!(0, _generator.caveRules)(this.tilePosition.x, this.tilePosition.y, 0, i + 1)) {
          this.stalactiteLength = i;
          break;
        }
      }

      if (!this.stalactiteSpawned && this.stalactiteLength > 0) {
        this.game.add(new _Stalactite.Stalactite(this.stalactiteLength, this.group, this.inChunkId, this.position.add(new _math.Vector2(0, _config.Config.SPRITE_SIZE))));
        this.game.initChildren();
        this.stalactiteSpawned = true;
      }
    }
  }, {
    key: "render",
    value: function render() {
      _get(_getPrototypeOf(StalactiteStone.prototype), "render", this).call(this);

      if (_config.Config.IS_DEV) this.game.renderer.drawText({
        text: this.stalactiteLength.toString(),
        position: this.position.expand(),
        layer: "particles"
      });
    }
  }], [{
    key: "rules",
    value: function rules(x, y) {
      var res = (0, _Generator.noise)(x / 6, y / 6);
      var haveEmptySpace = (0, _generator.caveRules)(x, y, 0, 1);
      return (0, _math.inRange)(res, 0, .5) && haveEmptySpace;
    }
  }]);

  return StalactiteStone;
}(_Ore2.Ore);

exports.StalactiteStone = StalactiteStone;
},{"../../config":"FxBD","../../engine/Generator":"KT6z","../../engine/utils/math":"NgPq","../../managers/generator":"v9dU","../environment/Stalactite":"nq2L","./Ore":"ze6F"}],"e9U2":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Stone = void 0;

var _InfectedOre2 = require("./InfectedOre");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Stone = /*#__PURE__*/function (_InfectedOre) {
  _inherits(Stone, _InfectedOre);

  var _super = _createSuper(Stone);

  function Stone(position, data) {
    var _this;

    _classCallCheck(this, Stone);

    _this = _super.call(this, "stone", position, data);
    _this.allowDecorations = true;
    return _this;
  }

  return _createClass(Stone);
}(_InfectedOre2.InfectedOre);

exports.Stone = Stone;
},{"./InfectedOre":"KiAu"}],"KTUq":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StonyGround = void 0;

var _Ore2 = require("./Ore");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var StonyGround = /*#__PURE__*/function (_Ore) {
  _inherits(StonyGround, _Ore);

  var _super = _createSuper(StonyGround);

  function StonyGround(position) {
    var _this;

    _classCallCheck(this, StonyGround);

    _this = _super.call(this, "stony-ground", position);
    _this.allowDecorations = true;
    return _this;
  }

  return _createClass(StonyGround);
}(_Ore2.Ore);

exports.StonyGround = StonyGround;
},{"./Ore":"ze6F"}],"v9dU":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.caveRules = caveRules;
exports.initGenerator = initGenerator;

var _config = require("../config");

var _Generator = require("../engine/Generator");

var _math = require("../engine/utils/math");

var _Antin = require("../objects/ores/Antin");

var _Basalt = require("../objects/ores/Basalt");

var _BurntBasalt = require("../objects/ores/BurntBasalt");

var _Cidium = require("../objects/ores/Cidium");

var _CrackedStone = require("../objects/ores/CrackedStone");

var _DeepStone = require("../objects/ores/DeepStone");

var _Destrony = require("../objects/ores/Destrony");

var _FetusStone = require("../objects/ores/FetusStone");

var _Manty = require("../objects/ores/Manty");

var _MushroomStone = require("../objects/ores/MushroomStone");

var _Nerius = require("../objects/ores/Nerius");

var _Osmy = require("../objects/ores/Osmy");

var _Rady = require("../objects/ores/Rady");

var _StalactiteStone = require("../objects/ores/StalactiteStone");

var _Stone = require("../objects/ores/Stone");

var _StonyGround = require("../objects/ores/StonyGround");

function caveRules(x, y, offsetX, offsetY) {
  var ox = offsetX || 0;
  var oy = offsetY || 0;
  var caves = (0, _Generator.noise)((x + ox) / 20, (y + oy) / 10, 4, 3);
  var smallCaves = (0, _Generator.noise)((x + ox) / 10, (y + oy) / 10, 3, 2);
  var largeCaves = (0, _Generator.noise)((x + ox) / 30, (y + oy) / 18, 3, 2);
  var sharpness = (0, _Generator.noise)((x + ox) / 10, (y + oy) / 10);
  var smallCavesMask = (0, _Generator.noise)((x + ox) / 40, (y + oy) / 40);
  var largeCavesMask = (0, _Generator.noise)((x + ox) / 20, (y + oy) / 20);
  return ((0, _math.inRange)(caves, 0, .5) || (0, _math.inRange)(smallCaves, 0, .5) || (0, _math.inRange)(largeCaves, 0, .6)) && !(0, _math.inRange)(sharpness, 0, .4) // (inRange(largeCaves, 0, .6) || (inRange(largeCaves, 0, .7) && inRange(sharpness, 0, .4)))
  ;
}

function initGenerator(game) {
  game.generator.settings = [// > Stones
  {
    value: [0, 1],
    height: [0, _config.GeneratorConfig.DEEP_STONE_LAYER_HEIGHT],
    block: _Stone.Stone
  }, {
    value: [.5, .6],
    height: [5, 90],
    divider: 5,
    block: _CrackedStone.CrackedStone
  }, {
    value: [.5, .6],
    height: [0, 14],
    divider: 5,
    block: _StonyGround.StonyGround
  }, // > Deepest stones
  // Deep stone blend layer
  {
    value: [.8, 1],
    height: [_config.GeneratorConfig.DEEP_STONE_LAYER_HEIGHT - _config.GeneratorConfig.LAYERS_BLEND_HEIGHT, _config.GeneratorConfig.DEEP_STONE_LAYER_HEIGHT],
    divider: 2,
    block: _DeepStone.DeepStone
  }, // Deep stone layer
  {
    value: [0, 1],
    height: [_config.GeneratorConfig.DEEP_STONE_LAYER_HEIGHT, _config.GeneratorConfig.BASALT_LAYER_HEIGHT],
    block: _DeepStone.DeepStone
  }, // Basalt blend layer
  {
    value: [.7, 1],
    height: [_config.GeneratorConfig.BASALT_LAYER_HEIGHT - _config.GeneratorConfig.LAYERS_BLEND_HEIGHT, _config.GeneratorConfig.BASALT_LAYER_HEIGHT],
    divider: 3,
    block: _Basalt.Basalt
  }, // Basalt layer
  {
    value: [0, 1],
    height: [_config.GeneratorConfig.BASALT_LAYER_HEIGHT, _config.GeneratorConfig.BURNT_BASALT_LAYER_HEIGHT],
    block: _Basalt.Basalt
  }, // Burnt basalt blend layer
  {
    value: [.8, 1],
    height: [_config.GeneratorConfig.BURNT_BASALT_LAYER_HEIGHT - _config.GeneratorConfig.LAYERS_BLEND_HEIGHT, _config.GeneratorConfig.BURNT_BASALT_LAYER_HEIGHT],
    divider: 3,
    block: _BurntBasalt.BurntBasalt
  }, // Burnt basalt layer
  {
    value: [0, 1],
    height: [_config.GeneratorConfig.BURNT_BASALT_LAYER_HEIGHT, _config.Config.WORLD_HEIGHT],
    block: _BurntBasalt.BurntBasalt
  }, // > Destrony layer
  {
    value: [0, 1],
    height: [_config.Config.WORLD_HEIGHT, _config.Config.WORLD_HEIGHT],
    block: _Destrony.Destrony
  }, // > Other
  // Fetus stone
  {
    height: [30, _config.GeneratorConfig.BASALT_LAYER_HEIGHT - 20],
    block: _FetusStone.FetusStone,
    rules: _FetusStone.FetusStone.rules
  }, // Mushroom stone
  {
    height: [_config.GeneratorConfig.BASALT_LAYER_HEIGHT, _config.GeneratorConfig.BURNT_BASALT_LAYER_HEIGHT - 15],
    block: _MushroomStone.MushroomStone,
    rules: _MushroomStone.MushroomStone.rules
  }, // Stalactite stone
  {
    height: [_config.GeneratorConfig.BASALT_LAYER_HEIGHT, _config.GeneratorConfig.BURNT_BASALT_LAYER_HEIGHT - 15],
    block: _StalactiteStone.StalactiteStone,
    rules: _StalactiteStone.StalactiteStone.rules
  }, // > Ores
  // Cidium
  {
    height: [12, _config.GeneratorConfig.BASALT_LAYER_HEIGHT / 2],
    block: _Cidium.Cidium,
    rules: _Cidium.Cidium.rules
  }, // Osmy - deep stone layer
  {
    height: [_config.GeneratorConfig.DEEP_STONE_LAYER_HEIGHT + 6, _config.GeneratorConfig.BASALT_LAYER_HEIGHT - _config.GeneratorConfig.LAYERS_BLEND_HEIGHT],
    block: _Osmy.Osmy,
    rules: _Osmy.Osmy.rules
  }, {
    height: [_config.GeneratorConfig.BASALT_LAYER_HEIGHT - 60, _config.GeneratorConfig.BASALT_LAYER_HEIGHT - _config.GeneratorConfig.LAYERS_BLEND_HEIGHT],
    block: _Nerius.Nerius,
    rules: _Nerius.Nerius.rules
  }, // Antin - basalt layer
  {
    height: [_config.GeneratorConfig.BASALT_LAYER_HEIGHT + 10, _config.Config.WORLD_HEIGHT - 22],
    block: _Antin.Antin,
    rules: _Antin.Antin.rules
  }, // Rady - basalt layer
  {
    height: [200, _config.Config.WORLD_HEIGHT - 5],
    block: _Rady.Rady,
    rules: _Rady.Rady.rules
  }, // > Manty layer
  {
    height: [_config.Config.WORLD_HEIGHT - 5, _config.Config.WORLD_HEIGHT - 1],
    block: _Manty.Manty,
    rules: _Manty.Manty.rules
  }, {
    value: [0, .5],
    height: [_config.Config.WORLD_HEIGHT - 1, _config.Config.WORLD_HEIGHT - 1],
    divider: 2,
    block: _Manty.Manty
  }, // > Caves
  {
    height: [5, _config.GeneratorConfig.BURNT_BASALT_LAYER_HEIGHT],
    block: null,
    rules: caveRules
  }];
}
},{"../config":"FxBD","../engine/Generator":"KT6z","../engine/utils/math":"NgPq","../objects/ores/Antin":"P2Ir","../objects/ores/Basalt":"S9NJ","../objects/ores/BurntBasalt":"G4HC","../objects/ores/Cidium":"zVgn","../objects/ores/CrackedStone":"nAsK","../objects/ores/DeepStone":"IUuf","../objects/ores/Destrony":"jc3R","../objects/ores/FetusStone":"EgHC","../objects/ores/Manty":"Ms1e","../objects/ores/MushroomStone":"IZVu","../objects/ores/Nerius":"rOTL","../objects/ores/Osmy":"Fgu4","../objects/ores/Rady":"vPcC","../objects/ores/StalactiteStone":"WUWB","../objects/ores/Stone":"e9U2","../objects/ores/StonyGround":"KTUq"}],"Hvfx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initMenu = initMenu;

var _config = require("../config");

var _UI = require("../engine/components/UI");

var _math = require("../engine/utils/math");

function initMenu(game, player) {
  var ui = new _UI.UI();
  var menuUi = new _UI.UI();
  var aboutUi = new _UI.UI();
  var buttons = [{
    text: "Иследовать"
  }, {
    text: "Заново"
  }, {
    text: "Об игре"
  }];
  menuUi.updateTemplate(buttons.map(function () {
    return 1;
  }));

  function init() {
    ui.init(game);
    menuUi.init(game);
    aboutUi.enabled = false;
    aboutUi.init(game); // UI actions

    game.gamepad.onKeyDown("menu-ui", "enter", function () {
      if (!ui.enabled) return;

      if (aboutUi.enabled) {
        menuUi.enabled = true;
        aboutUi.enabled = false;
        return;
      } // Play button


      if (menuUi.focused.row == 0) game.paused = false; // Retry button
      else if (menuUi.focused.row == 1) {
        game.clearAllKeys();
        location.reload();
      } // About button
      else if (menuUi.focused.row == 2) {
        menuUi.enabled = false;
        aboutUi.enabled = true;
      }
    });
  }

  function update() {
    ui.enabled = game.paused && !player.dead;
    menuUi.allowSelectSlots = ui.enabled;
  }

  function render() {
    if (!ui.enabled) return;
    var size = _config.Config.SPRITE_SIZE;
    var windowCenter = new _math.Vector2(innerWidth / 2, innerHeight / 2);
    ui.rect({
      position: windowCenter,
      width: innerWidth / size,
      height: innerHeight / size,
      color: "rgba(0, 0, 0, .5)"
    });
    ui.sprite("logo", {
      width: 6,
      height: 2,
      position: new _math.Vector2(windowCenter.x, 160)
    }); // Version

    ui.text("\u0412\u0435\u0440\u0441\u0438\u044F ".concat(_config.VERSION), {
      font: "16px Pixel",
      position: new _math.Vector2(innerWidth - size / 2, innerHeight - size / 2),
      align: "right"
    }); // Render menu

    if (menuUi.enabled && !aboutUi.enabled) renderMenu(size, windowCenter);
    if (aboutUi.enabled) renderAbout(size, windowCenter);
  }

  function renderMenu(size, windowCenter) {
    // Buttons
    var buttonsPos = new _math.Vector2().add(windowCenter);

    var _loop = function _loop(i) {
      var pos = new _math.Vector2(0, i * size).add(buttonsPos);
      menuUi.renderFocusable(pos, i, 0, function () {
        menuUi.text(buttons[i].text, {
          font: "22px Pixel",
          position: pos,
          layer: "ui"
        });
      }, 2.5, .8);
    };

    for (var i = 0; i < buttons.length; i++) {
      _loop(i);
    }
  }

  function renderAbout(size, windowCenter) {
    var aboutText = ["Я Богдан, мне 15 лет. Я разрабатываю эту игру в свободное от школы время,", "потому что мне это просто нравится. Каждый может привнести что-то в своё в эту игру.", "Есть идеи? Отлично! Напиши мне, и мы их обсудим!", "Игра была создана для турнира от Сбера на Sber Box.", "@ Bogdanov :D", "", "[OK] - назад"];
    var contactsTexts = ["Telegram: @bbogdan_ov", "Email: bbogdanov_bog908@mail.ru", "Vk: bbog908"];
    aboutUi.text("Приветсвую в Deep Strange Planet!", {
      position: new _math.Vector2().add(windowCenter),
      font: "22px Pixel",
      align: "center"
    });
    aboutUi.text(aboutText.join("\n"), {
      position: new _math.Vector2(0, 46).add(windowCenter),
      font: "18px Pixel",
      lineHeight: 26,
      align: "center"
    });
    contactsTexts.map(function (contact, index) {
      aboutUi.text(contact, {
        position: new _math.Vector2(size / 2, index * 26 + size),
        font: "18px Pixel",
        align: "left"
      });
    });
    /*
    const about1 = [
        `> Идея: Bogdanov`,
        `> Худоник: Bogdanov`,
        `> Программист: Bogdanov`,
        `> Саунд-дизайнер: Bogdanov`,
        `> Оператор: Bogdanov`,
        `> Бариста: Bogdanov`,
        `> Псих-поддержка: Bogdanov`,
    ].join("\n");
    const about2 = `
        Deep strange planet - игра в жанре\n
        приключения, где вы выступайте в роли\n
        добровольца, который хочет исследовать новую\n
        и опасную для человечества планету ради науки.\n
        Предположительно, на ней есть жизнь в виде\n
        бактерий. Исследуй планету, пробираясь всё\n
        ниже, вплоть до самого ядра, собирая ценные\n
        для науки ресурсы, но будьте внимательней,\n
        следите за своим запасом кислорода,\n
        уворачивайтесь от обвалов и сталакитов.\n
        Кто знает, что там ещё может быть
    `
    */
  }

  return {
    init: init,
    update: update,
    render: render
  };
}
},{"../config":"FxBD","../engine/components/UI":"gi9E","../engine/utils/math":"NgPq"}],"g7hl":[function(require,module,exports) {
"use strict";

var _assets = require("./managers/assets");

var _engine = require("./engine");

var _Player = require("./objects/entities/Player");

var _level = require("./managers/level");

var _config = require("./config");

var _dome = require("./managers/dome");

var _math = require("./engine/utils/math");

var _generator = require("./managers/generator");

var _menu = require("./stages/menu");

var game = new _engine.Game();
var player = game.add(new _Player.Player());
var level = (0, _level.initLevel)(game);
var menu = (0, _menu.initMenu)(game, player);
game.addInit(function () {
  (0, _assets.initAssets)(game);
  (0, _dome.initDome)(game);
  (0, _generator.initGenerator)(game);
  menu.init();
  game.camera.follow(player.position);
});
game.addUpdate(function () {
  if (!game.paused) game.camera.follow(player.position, .1);else game.camera.follow(new _math.Vector2(-300, -50).add(player.position), 1);
  game.generator.generateChunksAt(game.camera.position);
  menu.update();
});
game.addRender(function (renderer) {
  level.render();
  menu.render();
  renderer.drawText({
    text: "".concat(game.clock.fps, " fps"),
    font: "18px Pixel",
    position: new _math.Vector2(15, innerHeight - 30),
    align: "left",
    layer: "ui"
  });
  if (_config.Config.IS_DEV || player.god) renderDebug(renderer);
});

function renderDebug(renderer) {
  renderer.drawText({
    text: ["Delta: ".concat(game.clock.delta), "Height: ".concat(Math.floor(player.position.y / _config.Config.SPRITE_SIZE + 1)), "Pos: ".concat(Math.floor(player.position.x / _config.Config.SPRITE_SIZE), ", ").concat(Math.floor(player.position.y / _config.Config.SPRITE_SIZE + 1))].join("\n"),
    font: "20px Pixel",
    lineHeight: 30,
    position: new _math.Vector2(innerWidth - 30, innerHeight - 140),
    align: "right",
    layer: "ui"
  }); // renderChunks(renderer);
}

function renderChunks(renderer) {
  for (var y = 0; y < _config.Config.WORLD_HEIGHT / _config.Config.CHUNK_SIZE; y++) {
    for (var x = 0; x < _config.Config.WORLD_WIDTH / _config.Config.CHUNK_SIZE; x++) {
      renderer.drawRect({
        position: new _math.Vector2(x * _config.Config.CHUNK_SIZE * _config.Config.SPRITE_SIZE, y * _config.Config.CHUNK_SIZE * _config.Config.SPRITE_SIZE).add(_math.Vector2.all(_config.Config.SPRITE_SIZE * 1.5)),
        width: _config.Config.CHUNK_SIZE,
        height: _config.Config.CHUNK_SIZE,
        color: "rgba(0, 0, 0, 0)",
        stroke: {
          width: 2,
          color: _config.Color.RED
        }
      });
    }
  }
}

game.init(); // ! Debug

if (_config.Config.IS_DEV) window.addEventListener("keydown", function (e) {
  if (e.code == "KeyG") console.log(game);
  if (e.code == "KeyP") console.log(player);
  if (e.code == "KeyI") console.log(player.inventory);
});
},{"./managers/assets":"ibCN","./engine":"XaJu","./objects/entities/Player":"p1IV","./managers/level":"ZerP","./config":"FxBD","./managers/dome":"ZpfZ","./engine/utils/math":"NgPq","./managers/generator":"v9dU","./stages/menu":"Hvfx"}]},{},["g7hl"], null)
//# sourceMappingURL=/main.498270ca.js.map
