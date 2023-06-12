import { useQuery } from "@tanstack/react-query";
import { useRef, useEffect } from "react";
import * as d3 from "d3";

const LineChart = () => {
  const svgRef = useRef<null | SVGSVGElement>(null);
  const { isLoading, error, data } = useQuery({
    queryKey: ["cases", "deaths", "recovered"],
    queryFn: () =>
      fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all").then(
        (res) => res.json()
      ),
  });

  useEffect(() => {
    const svg = d3
      .select(svgRef.current)
      .attr("width", 800)
      .attr("height", 800)
      .style("margin", 50)
      .style("overflow", "visible");

    if (!isLoading) {
      const { cases, deaths, recovered } = data;
    }
  }, []);

  if (isLoading) return <h1>"Loading..."</h1>;

  if (error) return <h1>An error has occurred</h1>;

  return (
    <div>
      <svg ref={svgRef} />
    </div>
  );
};

export default LineChart;
