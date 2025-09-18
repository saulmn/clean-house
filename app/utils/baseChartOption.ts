export function baseChartOption() {
  return {
    chart: {
      foreColor: "#798998",
      toolbar: { show: false },
      zoom: { enabled: false },
    },

    dataLabels: {
      enabled: false,
    },

    fill: {
      opacity: 1,
      gradient: {
        type: "vertical",
        shadeIntensity: 0,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 100],
      },
    },

    stroke: {
      curve: "smooth",
      width: 3,
      lineCap: "round",
    },

    xaxis: {
      axisBorder: { show: false },
      axisTicks: { show: false },
    },

    markers: {
      size: 0,
    },

    states: {
      hover: {
        filter: {
          type: "lighten",
          value: 0.04,
        },
      },
      active: {
        filter: {
          type: "darken",
          value: 0.88,
        },
      },
    },

    tooltip: {
      x: {
        show: false,
      },
    },

    legend: {
      show: true,
      fontSize: String(13),
      position: "top",
      horizontalAlign: "right",
      markers: {
        radius: 2,
      },
      fontWeight: 500,
      itemMargin: { horizontal: 10 },
    },

    grid: {
      strokeDashArray: 3,
      borderColor: "#798998",
    },

    plotOptions: {
      bar: {
        columnWidth: "28%",
      },
    },

    responsive: [
      {
        breakpoint: 600,
        options: {
          plotOptions: { bar: { columnWidth: "40%" } },
        },
      },
      {
        breakpoint: 900,
        options: {
          plotOptions: { bar: { columnWidth: "32%" } },
        },
      },
    ],
  };
}
