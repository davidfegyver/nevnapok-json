const axios = require("axios");
const {JSDOM} = require("jsdom");
const fs = require("fs")
var namedays ={};

async function main() {
    
    const response = await axios.get('https://mek.oszk.hu/00000/00056/html/196.htm',{responseType: 'arraybuffer', responseEncoding: 'binary'});
    const {window} = new JSDOM(response.data);
    const preData = window.document.getElementsByTagName("pre")[0].textContent.replace(/  +/g, ' ').split('\n').slice(4);
    preData.forEach(line => {
        [name,dates] = line.split(" ");
        if(!dates) return;
        dates.split(",").forEach(date => {
            if(!date) return;
            var month, day,isCsillag;
            [month,day,isCsillag] = date.split(".");
            let otherOrMain = isCsillag.includes('*') ? 'main' : 'other';
            date.replace('*','')

            namedays[month] = namedays[month] || {};
            namedays[month][day] = namedays[month][day] ||{};
            namedays[month][day][otherOrMain] = namedays[month][day][otherOrMain] || [];
            namedays[month][day][otherOrMain].push(name)

        });
    });

    fs.writeFileSync('namedays.json', JSON.stringify(namedays));
}

main()

