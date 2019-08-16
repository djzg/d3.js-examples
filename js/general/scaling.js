function scaling() {
  var graphData = [10, 500],
      w         = 800,
      h         = 800;

  var scaling = d3.scaleLinear()
    .domain([0, 1200])
    .range([0, w]);

  var canvas = d3.select(".graphContainer")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

  var graphBars = canvas.selectAll("rect")
    .data(graphData)
      .enter()
        .append("rect")
          .attr("fill", "pink")
          .attr("width", function (d) {
              return scaling(d);
          })
          .attr("height", 20)
          .attr("y", function (d, i) {
            return i * 50;
          })



}
