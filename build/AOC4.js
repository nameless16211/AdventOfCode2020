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
var AOC4 = /** @class */ (function () {
    function AOC4() {
    }
    AOC4.validatePassPorts = function () {
        var e_1, _a;
        return __awaiter(this, void 0, void 0, function () {
            var map, fileStream, rl, passports, passport, rl_1, rl_1_1, line, e_1_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        map = [];
                        fileStream = fs_1.default.createReadStream("passports.txt");
                        rl = readline.createInterface({
                            input: fileStream,
                            crlfDelay: Infinity
                        });
                        passports = [];
                        passport = "";
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, 7, 12]);
                        rl_1 = __asyncValues(rl);
                        _b.label = 2;
                    case 2: return [4 /*yield*/, rl_1.next()];
                    case 3:
                        if (!(rl_1_1 = _b.sent(), !rl_1_1.done)) return [3 /*break*/, 5];
                        line = rl_1_1.value;
                        passport += " " + line;
                        if (line === "") {
                            passports.push(passport);
                            passport = "";
                        }
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
                        passports.push(passport);
                        console.log(this.loopPassports(passports));
                        return [2 /*return*/];
                }
            });
        });
    };
    AOC4.loopPassports = function (passports) {
        if (!passports[0]) {
            console.log(this.counter);
            return this.counter;
        }
        if (this.validatePassport(passports[0]))
            this.counter++;
        passports.shift();
        this.loopPassports(passports);
    };
    AOC4.validatePassport = function (passport) {
        var data = passport.trim().split(" ");
        var fields = [];
        var values = [];
        for (var i = 0; i < data.length; i++) {
            fields.push(data[i].split(":")[0]);
            values.push(data[i].split(":")[1]);
        }
        for (var i = 0; i < this.requiredFields.length; i++) {
            if (!fields.includes(this.requiredFields[i]))
                return false;
        }
        for (var i = 0; i < fields.length; i++) {
            switch (fields[i]) {
                case "byr":
                    console.log("byr", fields[i], values[i], Number.parseInt(values[i]) >= 1920 && Number.parseInt(values[i]) <= 2002);
                    if (!(Number.parseInt(values[i]) >= 1920 && Number.parseInt(values[i]) <= 2002))
                        return false;
                    break;
                case "iyr":
                    console.log("iyr", fields[i], values[i], (Number.parseInt(values[i]) >= 2010 && Number.parseInt(values[i]) <= 2020));
                    if (!(Number.parseInt(values[i]) >= 2010 && Number.parseInt(values[i]) <= 2020))
                        return false;
                    break;
                case "eyr":
                    console.log("eyr", fields[i], values[i], (Number.parseInt(values[i]) >= 2020 && Number.parseInt(values[i]) <= 2030));
                    if (!(Number.parseInt(values[i]) >= 2020 && Number.parseInt(values[i]) <= 2030))
                        return false;
                    break;
                case "hgt":
                    console.log("hgt", fields[i], values[i]);
                    var x = Number.parseInt(values[i].substring(0, values[i].length - 2));
                    var y = values[i].substring(values[i].length - 2);
                    if (y !== "in" && y !== "cm") {
                        return false;
                    }
                    if (y === "in") {
                        console.log(x, (x >= 59 && x <= 76));
                        if (!(x >= 59 && x <= 76))
                            return false;
                    }
                    if (y === "cm") {
                        console.log(x, (x >= 150 && x <= 193));
                        if (!(x >= 150 && x <= 193))
                            return false;
                    }
                    break;
                case "hcl":
                    console.log("hcl", fields[i], values[i], values[i].match(/^#[a-f0-9]{6}$/i) !== null);
                    if (!values[i].match(/^#[a-f0-9]{6}$/i))
                        return false;
                    //let hex = values[i]
                    break;
                case "ecl":
                    console.log("ecl", fields[i], values[i], this.validEcl.includes(values[i]));
                    if (!this.validEcl.includes(values[i]))
                        return false;
                    break;
                case "pid":
                    console.log("pid", fields[i], values[i], values[i].length !== 9);
                    // if(!values[i].match(/^0{1}([0-9]{8})$/g))
                    if (values[i].length !== 9)
                        return false;
                    break;
            }
        }
        console.log("");
        console.log("");
        return true;
        //console.log(fields);
    };
    AOC4.counter = 0;
    AOC4.requiredFields = [
        "byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"
    ];
    AOC4.validEcl = [
        "amb", "blu", "brn", "gry", "grn", "hzl", "oth"
    ];
    return AOC4;
}());
console.clear();
AOC4.validatePassPorts();
