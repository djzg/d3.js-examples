function axisGroups() {
  var graphData = [10, 500],
      w         = 800,
      h         = 800;

  var scaling = d3.scaleLinear()
    .domain([0, 1200])
    .range([0, w]);

    //adding bottom axis with 20 ticks and applied scaling
  var axisBottom = d3.axisBottom()
    .ticks(20)
    .scale(scaling);

  var axisLeft = d3.axisLeft()
    .ticks(20)
    .scale(scaling);

  var canvas = d3.select(".graphContainer")
    .append("svg")
    .attr("width", w)
    .attr("height", h)
    // appending group of two rectangles
    .append("g")
    // transforming the create
    .attr("transform", "translate(20, 50)");

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

    canvas.append("g")
      .attr("transform", "translate(0, 730)")
      .call(axisBottom);

    canvas.append("g")
      .attr("transform", "translate(0, 0)")
      .call(axisLeft);

}
