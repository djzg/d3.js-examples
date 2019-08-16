function svgExample() {
  var canvas = d3.select("body")
    .append("svg")
    .attr("width", 700)
    .attr("height", 700);

  var circle = canvas.append("circle")
    .attr("cx", 350)
    .attr("cy", 350)
    .attr("r", 30)
    .attr("fill", "blue");

  var rectangle = canvas.append("rect")
    .attr("width", 100)
    .attr("height", 300);

  var line = canvas.append("line")
    .attr("x1", 550)
    .attr("x2", 350)
    .attr("y1", 550)
    .attr("y2", 250)
    .attr("stroke", "grey")
    .attr("stroke-width", 4);

}
