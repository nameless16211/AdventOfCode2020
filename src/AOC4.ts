import fs from 'fs';
const readline = require('readline');

class AOC4
{

    static counter = 0;
    static requiredFields: Array<string> = [
        "byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"
    ];
    static validEcl = [
        "amb", "blu", "brn", "gry", "grn", "hzl", "oth"
    ];

    static async validatePassPorts()
    {
        let map = [];
        const fileStream = fs.createReadStream("passports.txt");

        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity
        });

        let passports: Array<string> = [];
        let passport = "";
        for await(const line of rl)
        {
            passport += " " + line;
            if(line === "")
            {
                passports.push(passport);
                passport = "";
            }
        }
        passports.push(passport);
        
        console.log(this.loopPassports(passports));
        
    }

    private static loopPassports(passports: Array<string>)
    {
        if(!passports[0])
        {
            console.log(this.counter);
            return this.counter;
        }
            
        if(this.validatePassport(passports[0]))
            this.counter++;
        passports.shift();
        this.loopPassports(passports);
    }

    static validatePassport(passport: string)
    {
        let data = passport.trim().split(" ");
        let fields = [];
        let values = [];

        for(let i = 0; i < data.length; i++)
        {
            fields.push(data[i].split(":")[0]);
            values.push(data[i].split(":")[1]);
        }

        for(let i = 0; i < this.requiredFields.length; i++)
        {
            if(!fields.includes(this.requiredFields[i]))
                return false;
        }

        for(let i = 0; i < fields.length; i++)
        {
            switch(fields[i])
            {
                case "byr":
                    console.log("byr", fields[i], values[i], Number.parseInt(values[i]) >= 1920 && Number.parseInt(values[i]) <= 2002);
                    if(!(Number.parseInt(values[i]) >= 1920 && Number.parseInt(values[i]) <= 2002))
                        return false;
                    break;
                case "iyr":
                    console.log("iyr", fields[i], values[i], (Number.parseInt(values[i]) >= 2010 && Number.parseInt(values[i]) <= 2020));
                    if(!(Number.parseInt(values[i]) >= 2010 && Number.parseInt(values[i]) <= 2020))
                        return false;
                    break;
                case "eyr":
                    console.log("eyr", fields[i], values[i], (Number.parseInt(values[i]) >= 2020 && Number.parseInt(values[i]) <= 2030));
                    if(!(Number.parseInt(values[i]) >= 2020 && Number.parseInt(values[i]) <= 2030))
                        return false;
                    break;
                case "hgt":
                    console.log("hgt", fields[i], values[i]);
                    let x = Number.parseInt(values[i].substring(0, values[i].length-2));
                    let y = values[i].substring(values[i].length-2);
                    if(y !== "in" && y !== "cm")
                    {
                        return false;
                    }
                    if(y === "in")
                    {
                        console.log(x, (x >= 59 && x <= 76));
                        if(!(x >= 59 && x <= 76))
                            return false;
                    }
                    if(y === "cm")
                    {
                        console.log(x, (x >= 150 && x <= 193));
                        if(!(x >= 150 && x <= 193))
                            return false;
                    }
                    break;
                case "hcl":
                    console.log("hcl", fields[i], values[i], values[i].match(/^#[a-f0-9]{6}$/i) !== null);
                    if(!values[i].match(/^#[a-f0-9]{6}$/i))
                        return false;
                    //let hex = values[i]
                    break;
                case "ecl":
                    console.log("ecl", fields[i], values[i], this.validEcl.includes(values[i]));
                    if(!this.validEcl.includes(values[i]))
                        return false;
                    break;
                case "pid":
                    console.log("pid", fields[i], values[i], values[i].length !== 9);
                    // if(!values[i].match(/^0{1}([0-9]{8})$/g))
                    if(values[i].length !== 9)
                        return false;
                    break;
            }
        }
        console.log("");
        console.log("");
        return true;
        //console.log(fields);
    }
}

console.clear();
AOC4.validatePassPorts();