import { TIMEOUT } from 'dns';
import fs from 'fs';
const readline = require('readline');
var colors = require('colors');

class AOC3
{
    static async checkTrees()
    {
        let map = [];
        const fileStream = fs.createReadStream('map.txt');

        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity
        });
        
        for await (const line of rl) {
            let lineArr = [];
            for(let i = 0; i < line.length; i++)
            {
                lineArr.push(line[i] === "." ? line[i]: line[i].green);
            }
            map.push(lineArr);

        }

        let posX = 0;
        let posY = 0;

        let treeCounter = 0;

        let counters = {
            "r1d1": 0,
            "r3d1": 0,
            "r5d1": 0,
            "r7d1": 0,
            "r1d2": 0
        };

        
        //AOC3.CountTrees(map, 1, 1).then((val)=>counters["r1d1"]=val);
        
        AOC3.CountTrees(map, 3, 1).then((val)=>counters["r3d1"]=val);

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
        return counters;
    }

    static async CountTrees(map: any[][], right: number, down: number)
    {
        let posX = 0;
        let posY = 0;
        
        let treeCounter = 0;
        this.printMap(map);
        while(posY < map.length - 1)
        {
            posX += right;
            posY += down;

            if(posX > map[posY].length - 1)
            {
                let diff = (posX) - (map[posY].length);
                posX = diff;
            } 

            if(map[posY][posX] === colors.green("#"))
                treeCounter++;  

            let letter = map[posY][posX] === "." ? "X" : colors.green("0");
            map[posY][posX] = letter;

            process.stdout.cursorTo(posX, posY);
            process.stdout.write(letter);
            
            var [] = await Promise.all([
                AOC3.timeout(100)
            ]);
        }
        process.stdout.cursorTo(0,posY +1);
        console.log(`Total trees found ${treeCounter}`);

        

        return treeCounter;
    }

    static printMap(map: any[][])
    {
        console.clear();
        for(let i = 0; i < map.length; i++)
        {
            let l = "";
            for(let j = 0; j < map[i].length; j++)
            {
                l += map[i][j];
            }
            console.log(l);
        }
    }

    static timeout(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
AOC3.checkTrees().then((response)=>{
    //console.log(response["r1d1"] * response["r1d2"] * response["r3d1"] * response["r5d1"] * response["r7d1"]);
});