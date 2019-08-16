 function transitions() {
  var w = 800;
  var h = 600;

  var canvas = d3.select(".transitionsContainer")
    .append("svg")
    .attr("width", w)
    .attr("height", h)

  var rect = canvas.append("rect")
    .attr("width", 100)
    .attr("height", 100)
    .attr("fill", "red")

  var circle = canvas.append("circle")
    .attr("cx", 50)
    .attr("cy", 200)
    .attr("r", 50)
    .attr("fill", "blue")

  rect.transition()
    .attr("width", 800)
    .attr("height", 50)
    .attr("transform", "translate(200, 0)")
    .attr("fill", "orange")
    .duration(2000)
    .delay(1000)
    .transition()
    .attr("transform", "translate(200, 200)")
    .on("start", function(){
      d3.select(this)
      .attr("fill", "green")
    });

  circle.transition()
    .duration(2000)
    .delay(2000)
    .attr("cx", 400)
    .attr("cy", 400)
    .attr("r", 100)
    .on("end", function() {
      d3.select(this)
        .attr("fill", "orange")
    });
 }
