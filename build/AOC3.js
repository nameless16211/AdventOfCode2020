"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var readline = require('readline');
var colors = require('colors');
var AOC3 = /** @class */ (function () {
    function AOC3() {
    }
    AOC3.checkTrees = function () {
        var e_1, _a;
        return __awaiter(this, void 0, void 0, function () {
            var map, fileStream, rl, rl_1, rl_1_1, line, lineArr, i, e_1_1, posX, posY, treeCounter, counters;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        map = [];
                        fileStream = fs_1.default.createReadStream('map.txt');
                        rl = readline.createInterface({
                            input: fileStream,
                            crlfDelay: Infinity
                        });
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, 7, 12]);
                        rl_1 = __asyncValues(rl);
                        _b.label = 2;
                    case 2: return [4 /*yield*/, rl_1.next()];
                    case 3:
                        if (!(rl_1_1 = _b.sent(), !rl_1_1.done)) return [3 /*break*/, 5];
                        line = rl_1_1.value;
                        lineArr = [];
                        for (i = 0; i < line.length; i++) {
                            lineArr.push(line[i] === "." ? line[i] : line[i].green);
                        }
                        map.push(lineArr);
                        _b.label = 4;
                    case 4: return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 12];
                    case 6:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 12];
                    case 7:
                        _b.trys.push([7, , 10, 11]);
                        if (!(rl_1_1 && !rl_1_1.done && (_a = rl_1.return))) return [3 /*break*/, 9];
                        return [4 /*yield*/, _a.call(rl_1)];
                    case 8:
                        _b.sent();
                        _b.label = 9;
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 11: return [7 /*endfinally*/];
                    case 12:
                        posX = 0;
                        posY = 0;
                        treeCounter = 0;
                        counters = {
                            "r1d1": 0,
                            "r3d1": 0,
                            "r5d1": 0,
                            "r7d1": 0,
                            "r1d2": 0
                        };
                        //AOC3.CountTrees(map, 1, 1).then((val)=>counters["r1d1"]=val);
                        AOC3.CountTrees(map, 3, 1).then(function (val) { return counters["r3d1"] = val; });
                        // AOC3.CountTrees(map, 5, 1).then((val)=>counters["r5d1"]=val);
                        //AOC3.CountTrees(map, 7, 1).then((val)=>counters["r7d1"]=val);
                        // AOC3.CountTrees(map, 1, 2).then((val)=>counters["r1d2"]=val);
                        // while(posY < map.length - 1)
                        // {
                        //     posX += 3;
                        //     posY += 1;
                        //     if(posX > map[posY].length - 1)
                        //     {
                        //         let diff = (posX) - (map[posY].length);
                        //         posX = diff;
                        //     } 
                        //     if(map[posY][posX] === "#")
                        //         treeCounter++;  
                        //     map[posY][posX] = map[posY][posX] === "." ? "X" : colors.green("0");
                        // }
                        // counters["r3d1"] = treeCounter;
                        return [2 /*return*/, counters];
                }
            });
        });
    };
    AOC3.CountTrees = function (map, right, down) {
        return __awaiter(this, void 0, void 0, function () {
            var posX, posY, treeCounter, diff, letter, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        posX = 0;
                        posY = 0;
                        treeCounter = 0;
                        this.printMap(map);
                        _b.label = 1;
                    case 1:
                        if (!(posY < map.length - 1)) return [3 /*break*/, 3];
                        posX += right;
                        posY += down;
                        if (posX > map[posY].length - 1) {
                            diff = (posX) - (map[posY].length);
                            posX = diff;
                        }
                        if (map[posY][posX] === colors.green("#"))
                            treeCounter++;
                        letter = map[posY][posX] === "." ? "X" : colors.green("0");
                        map[posY][posX] = letter;
                        process.stdout.cursorTo(posX, posY);
                        process.stdout.write(letter);
                        return [4 /*yield*/, Promise.all([
                                AOC3.timeout(100)
                            ])];
                    case 2:
                        _a = _b.sent();
                        return [3 /*break*/, 1];
                    case 3:
                        process.stdout.cursorTo(0, posY + 1);
                        console.log("Total trees found " + treeCounter);
                        return [2 /*return*/, treeCounter];
                }
            });
        });
    };
    AOC3.printMap = function (map) {
        console.clear();
        for (var i = 0; i < map.length; i++) {
            var l = "";
            for (var j = 0; j < map[i].length; j++) {
                l += map[i][j];
            }
            console.log(l);
        }
    };
    AOC3.timeout = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    return AOC3;
}());
AOC3.checkTrees().then(function (response) {
    //console.log(response["r1d1"] * response["r1d2"] * response["r3d1"] * response["r5d1"] * response["r7d1"]);
});
