/*
CPSC 329 Final Project
Group 63: William Zhou and Samuel Wong

Interactive infographic of data breaches in the past two decades

 */

window.onload = function(){
    setUp();
};

var _data;
var svgContainer;
var WIDTH = 2000;
var HEIGHT = 1300;
var rightXPad = 200;
var yPad = 30;
var textWidth;

function setUp() {
    d3.csv("data.csv").then(function (data) {
        _data = data;
        main();
    });
}


function main(){

    //color scale for organizations
    var colorScale = d3.scaleOrdinal()
        .domain(["healthcare", "tech", "transportation", "financial", "web", "telecoms", "gaming", "academic", "retail", "social media", "government", "hotel"])
        .range(["#ff4545", "#00d612", "#7e9c8f", "#1eb8d4",
            "#0063ff", "#a9c221", "#4bf2af", "#ffdc7a","#c46f00","#db4691",
            "#ad0101", "#c089e0"]);

    //create x-axis scale
    var xScale = d3.scaleLinear()
        .domain([2004,2020])
        .range([0, 1200]);


    svgContainer = d3.select("body")
        .append("svg")
        .attr("id", "vis")
        .attr("width", WIDTH)
        .attr("height", HEIGHT);


    //setup x-axis
    var xAxis = d3.axisBottom(xScale)
        .tickFormat(d3.format("d"));

    svgContainer.append("g")
        .attr("class", "xAxis")
        .attr("transform", "translate(" + 100 + "," + (200) + ")")
        .call(xAxis);

    //keep track of index on when to reset inc so that it starts at current position
    var index = [0,1,7,10,14,20,26,32,47,57,74,86,99,107,111,123,136];


    var yFour = [];
    var yFive = [];
    var ySix = [];
    var ySeven = [];
    var yEight = [];
    var yNine = [];
    var yTen = [];
    var yEleven = [];
    var yTwelve = [];
    var yThirteen = [];
    var yFourteen = [];
    var yFifthteen = [];
    var ySixteen = [];
    var ySeventeen = [];
    var yEighteen = [];
    var yNineteen = [];
    var yTwenty = [];

    //seperate data by year
    for(var i = 0; i < _data.length; i++){
        if(_data[i].Year == 2004){
            yFour.push(_data[i]);
        }
        if(_data[i].Year == 2005){
            yFive.push(_data[i]);
        }
        if(_data[i].Year == 2006){
            ySix.push(_data[i]);
        }
        if(_data[i].Year == 2007){
            ySeven.push(_data[i]);
        }
        if(_data[i].Year == 2008){
            yEight.push(_data[i]);
        }
        if(_data[i].Year == 2009){
            yNine.push(_data[i]);
        }
        if(_data[i].Year == 2010){
            yTen.push(_data[i]);
        }
        if(_data[i].Year == 2011){
            yEleven.push(_data[i]);
        }
        if(_data[i].Year == 2012){
            yTwelve.push(_data[i]);
        }
        if(_data[i].Year == 2013){
            yThirteen.push(_data[i]);
        }
        if(_data[i].Year == 2014){
            yFourteen.push(_data[i]);
        }
        if(_data[i].Year == 2015){
            yFifthteen.push(_data[i]);
        }
        if(_data[i].Year == 2016){
            ySixteen.push(_data[i]);
        }
        if(_data[i].Year == 2017){
            ySeventeen.push(_data[i]);
        }

        if(_data[i].Year == 2018){
            yEighteen.push(_data[i]);
        }

        if(_data[i].Year == 2019){
            yNineteen.push(_data[i]);
        }

        if(_data[i].Year == 2020){
            yTwenty.push(_data[i]);
        }


    }
    //sort all lists by organization
    yFour.sort((a,b) => (a.Organization > b.Organization) ? 1: -1);
    yFive.sort((a,b) => (a.Organization > b.Organization) ? 1: -1);
    ySix.sort((a,b) => (a.Organization > b.Organization) ? 1: -1);
    ySeven.sort((a,b) => (a.Organization > b.Organization) ? 1: -1);
    yEight.sort((a,b) => (a.Organization > b.Organization) ? 1: -1);
    yNine.sort((a,b) => (a.Organization > b.Organization) ? 1: -1);
    yTen.sort((a,b) => (a.Organization > b.Organization) ? 1: -1);
    yEleven.sort((a,b) => (a.Organization > b.Organization) ? 1: -1);
    yTwelve.sort((a,b) => (a.Organization > b.Organization) ? 1: -1);
    yThirteen.sort((a,b) => (a.Organization > b.Organization) ? 1: -1);
    yFourteen.sort((a,b) => (a.Organization > b.Organization) ? 1: -1);
    yFifthteen.sort((a,b) => (a.Organization > b.Organization) ? 1: -1);
    ySixteen.sort((a,b) => (a.Organization > b.Organization) ? 1: -1);
    ySeventeen.sort((a,b) => (a.Organization > b.Organization) ? 1: -1);
    yEighteen.sort((a,b) => (a.Organization > b.Organization) ? 1: -1);
    yNineteen.sort((a,b) => (a.Organization > b.Organization) ? 1: -1);
    yTwenty.sort((a,b) => (a.Organization > b.Organization) ? 1: -1);

    //add border to legend
    svgContainer.append("g")
        .append("rect")
        .attr("rx", 10)
        .attr("ry", 10)
        .attr("x", 1420)
        .attr("y", 200)
        .attr("width", 385)
        .attr("height", 600)
        .style("opacity", 1)
        .attr("stroke", "black")
        .attr("stroke-width", "3px")
        .attr("fill", "white");


    var positionToSet;
    var inc = 0;
    //draw the data points as circles
    svgContainer.append("g")
        .attr("class", "circleHover")
        .selectAll("circle")
        .data(_data)
        .enter()
        .append("circle")
        .attr("class", "circleHeight")
        .attr("r", function (d) {
            return Math.sqrt(Math.sqrt(d.Records))/6
        })
        .attr("cy", function (d, i) {
            if(index.includes(i)){
                inc = 0;
            }

            if(d.Year == 2004){
                for(var k = 0; k < yFour.length; k++){
                    if(yFour[k].Company.includes(d.Company)){
                        positionToSet = yFour.indexOf(d);
                    }
                }
            }
            if(d.Year == 2005){
                for(var k = 0; k < yFive.length; k++){
                    if(yFive[k].Company.includes(d.Company)){
                        positionToSet = yFive.indexOf(d);
                    }
                }
            }
            if(d.Year == 2006){
                for(var k = 0; k < ySix.length; k++){
                    if(ySix[k].Company.includes(d.Company)){
                        positionToSet = ySix.indexOf(d);
                    }
                }
            }
            if(d.Year == 2007){
                for(var k = 0; k < ySeven.length; k++){
                    if(ySeven[k].Company.includes(d.Company)){
                        positionToSet = ySeven.indexOf(d);
                    }
                }
            }
            if(d.Year == 2008){
                for(var k = 0; k < yEight.length; k++){
                    if(yEight[k].Company.includes(d.Company)){
                        positionToSet = yEight.indexOf(d);
                    }
                }
            }
            if(d.Year == 2009){
                for(var k = 0; k < yNine.length; k++){
                    if(yNine[k].Company.includes(d.Company)){
                        positionToSet = yNine.indexOf(d);
                    }
                }
            }
            if(d.Year == 2010){
                for(var k = 0; k < yTen.length; k++){
                    if(yTen[k].Company.includes(d.Company)){
                        positionToSet = yTen.indexOf(d);
                    }
                }
            }
            if(d.Year == 2011){
                for(var k = 0; k < yEleven.length; k++){
                    if(yEleven[k].Company.includes(d.Company)){
                        positionToSet = yEleven.indexOf(d);
                    }
                }
            }
            if(d.Year == 2012){
                for(var k = 0; k < yTwelve.length; k++){
                    if(yTwelve[k].Company.includes(d.Company)){
                        positionToSet = yTwelve.indexOf(d);
                    }
                }
            }
            if(d.Year == 2013){
                for(var k = 0; k < yThirteen.length; k++){
                    if(yThirteen[k].Company.includes(d.Company)){
                        positionToSet = yThirteen.indexOf(d);
                    }
                }
            }
            if(d.Year == 2014){
                for(var k = 0; k < yFourteen.length; k++){
                    if(yFourteen[k].Company.includes(d.Company)){
                        positionToSet = yFourteen.indexOf(d);
                    }
                }
            }
            if(d.Year == 2015){
                for(var k = 0; k < yFifthteen.length; k++){
                    if(yFifthteen[k].Company.includes(d.Company)){
                        positionToSet = yFifthteen.indexOf(d);
                    }
                }
            }
            if(d.Year == 2016){
                for(var k = 0; k < ySixteen.length; k++){
                    if(ySixteen[k].Company.includes(d.Company)){
                        positionToSet = ySixteen.indexOf(d);
                    }
                }
            }
            if(d.Year == 2017){
                for(var k = 0; k < ySeventeen.length; k++){
                    if(ySeventeen[k].Company.includes(d.Company)){
                        positionToSet = ySeventeen.indexOf(d);
                    }
                }
            }
            if(d.Year == 2018){
                for(var k = 0; k < yEighteen.length; k++){
                    if(yEighteen[k].Company.includes(d.Company)){
                        positionToSet = yEighteen.indexOf(d);
                    }
                }
            }
            if(d.Year == 2019){
                for(var k = 0; k < yNineteen.length; k++){
                    if(yNineteen[k].Company.includes(d.Company)){
                        positionToSet = yNineteen.indexOf(d);
                    }
                }
            }
            if(d.Year == 2020){
                for(var k = 0; k < yTwenty.length; k++){
                    if(yTwenty[k].Company.includes(d.Company)){
                        positionToSet = yTwenty.indexOf(d);
                    }
                }
            }
            return (positionToSet * 55 + 80)


        })
        .attr("cx", function (d) {
            return xScale(d.Year);
            })
        .style("fill", function (d) {
            return colorScale(d.Organization)
        })
        .style("stroke-width", 1).style("stroke", "black")
        .attr("transform", "translate(" + 100 + "," + (200) + ")")
        .on("click", function (d, i) {
        })
        .on("mouseover", function (d) {
            tooltip.style("display", null)
            tooltipTwo.style("display", null)
        })
        .on("mouseout", function (d) {
            tooltip.style("display", "none")
            tooltipTwo.style("display", "none")
        })
        .on("mousemove", function (d) {
            var x = d3.mouse(this)[0] + 85;
            var y = d3.mouse(this)[1] + 160;
            tooltip.attr("transform", "translate(" + x + "," + y + ")");
            tooltip.select("rect").attr("width", function (d) {
                return 414  ;
            })
            tooltip.select("text").text(d.Company);
            tooltipTwo.attr("transform", "translate(" + x + "," + y + ")");
            tooltipTwo.select("text").text("Records: " + numberWithCommas(d.Records))
        });



    var legendList = ["healthcare", "tech", "transportation", "financial", "web", "telecoms",
                    "gaming", "academic", "retail", "social media", "government", "hotel"];

    var positionTracker;
    var legendY = 200;
    var legendX = 1400
    var k = 0;
    var j = 0;
    var notChange;
    var movement = 100;
    var index;
    var flag = false;
    //draw legend showing organizations
    svgContainer.append("g")
        .selectAll("rects")
        .data(legendList)
        .enter()
        .append("rect")
        .attr("rx", 10)
        .attr("ry", 10)
        .attr("x", function (d) {
            k++;
            if(k == 7){
                legendX = 1570;
            }
            return legendX;
        })
        .attr("y", function (d) {
            j++;
            if(j == 7){
                legendY = 200;
            }
            return legendY += 65
        })
        .attr("height", 50)
        .attr("width", 150)
        .style("fill", function (d) {
            return colorScale(d);
        })
        .attr("transform", "translate(" + 50 + "," + (0) + ")")
        .on("click", function (d) {
            flag = true;

            d3.select(this).style("stroke-width", 2).style("stroke", "black")

            d3.selectAll("circle")
                .transition()
                .duration(201)
                .attr("cy", function (d, i) {
                    if(notChange == d.Organization){

                        if(d.Year == 2004){
                            index = yFour.map(item => item.Organization).indexOf(notChange);
                            positionToSet = yFour.indexOf(d) - index;
                        }
                        if(d.Year == 2005){
                            index = yFive.map(item => item.Organization).indexOf(notChange);
                            positionToSet = yFive.indexOf(d) - index;
                        }
                        if(d.Year == 2006){
                            index = ySix.map(item => item.Organization).indexOf(notChange);
                            positionToSet = ySix.indexOf(d) - index;
                        }
                        if(d.Year == 2007){
                            index = ySeven.map(item => item.Organization).indexOf(notChange);
                            positionToSet = ySeven.indexOf(d) - index;
                        }
                        if(d.Year == 2008){
                            index = yEight.map(item => item.Organization).indexOf(notChange);
                            positionToSet = yEight.indexOf(d) - index;
                        }
                        if(d.Year == 2009){
                            index = yNine.map(item => item.Organization).indexOf(notChange);
                            positionToSet = yNine.indexOf(d) - index;
                        }
                        if(d.Year == 2010){
                            index = yTen.map(item => item.Organization).indexOf(notChange);
                            positionToSet = yTen.indexOf(d) - index;
                        }
                        if(d.Year == 2011){
                            index = yEleven.map(item => item.Organization).indexOf(notChange);
                            positionToSet = yEleven.indexOf(d) - index;
                        }
                        if(d.Year == 2012){
                            index = yTwelve.map(item => item.Organization).indexOf(notChange);
                            positionToSet = yTwelve.indexOf(d) - index;
                        }
                        if(d.Year == 2013){
                            index = yThirteen.map(item => item.Organization).indexOf(notChange);
                            positionToSet = yThirteen.indexOf(d) - index;
                        }
                        if(d.Year == 2014){
                            index = yFourteen.map(item => item.Organization).indexOf(notChange);
                            positionToSet = yFourteen.indexOf(d) - index;
                        }
                        if(d.Year == 2015){
                            index = yFifthteen.map(item => item.Organization).indexOf(notChange);
                            positionToSet = yFifthteen.indexOf(d) - index;
                        }
                        if(d.Year == 2016){
                            index = ySixteen.map(item => item.Organization).indexOf(notChange);
                            positionToSet = ySixteen.indexOf(d) - index;
                        }
                        if(d.Year == 2017){
                            index = ySeventeen.map(item => item.Organization).indexOf(notChange);
                            positionToSet = ySeventeen.indexOf(d) - index;
                        }
                        if(d.Year == 2018){
                            index = yEighteen.map(item => item.Organization).indexOf(notChange);
                            positionToSet = yEighteen.indexOf(d) - index;
                        }
                        if(d.Year == 2019){
                            index = yNineteen.map(item => item.Organization).indexOf(notChange);
                            positionToSet = yNineteen.indexOf(d) - index;
                        }
                        if(d.Year == 2020){
                            index = yTwenty.map(item => item.Organization).indexOf(notChange);
                            positionToSet = yTwenty.indexOf(d) - index;
                        }
                        return (positionToSet * 55 + 80);
                    }
                    else{
                        return -1000;
                    }
                });
        })
        .on("mouseover", function (d) {
            d3.select(this).style("stroke-width", 2).style("stroke", "black")
            notChange = d;
            d3.selectAll("circle")
                .transition()
                .duration(100)
                .ease(d3.easeLinear)
                .attr("opacity", function (d, i) {
                    if(notChange != d.Organization && flag == false){
                        return 0.2;
                    }
                    else{
                        return 1;
                    }
                })
        })
        .on("mouseout", function () {
            d3.select(this).style("stroke", "none");
            d3.selectAll("circle")
                .transition()
                .duration(1200)
                .attr("opacity", 1);

        })


    legendY = 231;
    k = 0;
    j = 0;
    legendX = 1410;
    //draw the legend labels
    svgContainer.append("g")
        .attr("class", "legend")
        .selectAll("texts")
        .data(legendList)
        .enter()
        .append("text")
        .attr("x", function (d) {
            k++;
            if(k == 7){
                legendX = 1580;
            }
            return legendX;
        })
        .attr("y", function (d) {
            j++;
            if(j == 7){
                legendY = 296.5;
                return legendY;
            }
            return legendY += 65.5;
        })
        .text(function (d) {
            return d;
        })
        .attr("transform", "translate(" + 50 + "," + (0) + ")")


    //add reset button
    svgContainer.append("g")
        .selectAll("rects")
        .data(_data)
        .enter()
        .append("rect")
        .attr("rx", 10)
        .attr("ry", 10)
        .attr("x", 1540)
        .attr("y", 688)
        .attr("height", 50)
        .attr("width", 150)
        .style("fill", "c9c9c9")
        .on("click", function (d) {
            //delete all inner body elements
            document.body.innerHTML ="";
            main();
        })
        .on("mouseover", function (d) {
            d3.select(this).style("stroke-width", 2).style("stroke", "black");
        })
        .on("mouseout", function (d) {
            d3.select(this).style("stroke", "none");
        })

    //add text to reset button
    svgContainer.append("g")
        .attr("class", "resetButton")
        .append("text")
        .attr("x", 1580)
        .attr("y", 720)
        .text("Reset")

    //add hover tool tip
    var tooltip = svgContainer.append("g")
        .attr("class", "tooltip")
        .style("display", "none")
        .style("opacity", 1)
        .style("font-size", "1.9em");

    tooltip.append("rect")
        .attr("rx", 10)
        .attr("ry", 10)
        .attr("x", 36)
        .attr("height", 80)
        .style("opacity", 1)
        .attr("fill", "#f0e9d5")
        .attr("stroke", "black")
        .style("stroke-width", 1);
    tooltip.append("text")
        .attr("class", "tooltipText")
        .attr("x", 43)
        .attr("dy", "1.1em");


    var tooltipTwo = svgContainer.append("g")
        .attr("class", "tooltip")
        .style("display", "none");
    tooltipTwo.append("text")
        .attr("x", 43)
        .attr("dy", "2.5em")
        .style("font-size", "1.7em");


    //add first line of title
    svgContainer.append("g")
        .attr("class", "title")
        .append("text")
        .text("Data Breaches of The Past Two Decades")
        .attr("transform", "translate(" + 700 + "," + (60) + ")");

    //add second line of title
    svgContainer.append("g")
        .attr("class", "titleTwo")
        .append("text")
        .text("Information based on company name/institution and confirmed cases")
        .attr("transform", "translate(" + 645 + "," + (100) + ")");


    svgContainer.append("g")
        .attr("class", "cc")
        .append("text")
        .text("This work is licensed under a Creative Commons Attribution 4.0 International License.")
        .attr("transform", "translate(" + 645 + "," + (1290) + ")");


}

//Code used from
//https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");


}

