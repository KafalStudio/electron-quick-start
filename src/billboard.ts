var billboard = require("billboard-top-100")

var getCharts = billboard.getCharts;
var listCharts = billboard.listCharts;

export class Billboard {
    execute() {
        listCharts(function (data) {
            let test = document.getElementById('test');
            let div = document.createElement('div');
            div.setAttribute("id", 'billboard');
            div.setAttribute("class", 'billboard');
            
            data['Overall Popularity'].forEach(chart => {
                let cElement = document.createElement('div');
                cElement.setAttribute('class', 'card');
                cElement.innerHTML = `<p class='title'> ${chart.title} </p>`;
                cElement.setAttribute('data-name', chart.name);
                if (chart.cover) {
                    cElement.innerHTML += `<img src=${chart.cover} alt=${chart.coveralt} />`;
                }
                div.appendChild(cElement);
            }); //prints larray of charts in 'Overall Popularity' category 
            test.appendChild(div);
        });
    }
}