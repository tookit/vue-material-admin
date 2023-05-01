import type { ThemeInstance } from 'vuetify';
import { hexToRgb } from '@/utils';

// 👉 Colors variables
const colorVariables = (themeColors: ThemeInstance['themes']['value']['colors']) => {
  const themeSecondaryTextColor = `rgba(${hexToRgb(themeColors.colors['on-surface'])},${
    themeColors.variables['medium-emphasis-opacity']
  })`;
  const themeDisabledTextColor = `rgba(${hexToRgb(themeColors.colors['on-surface'])},${
    themeColors.variables['disabled-opacity']
  })`;
  const themeBorderColor = `rgba(${hexToRgb(String(themeColors.variables['border-color']))},${
    themeColors.variables['border-opacity']
  })`;
  const themePrimaryTextColor = `rgba(${hexToRgb(themeColors.colors['on-surface'])},${
    themeColors.variables['high-emphasis-opacity']
  })`;

  return { themeSecondaryTextColor, themeDisabledTextColor, themeBorderColor, themePrimaryTextColor };
};

export const getScatterChartConfig = (themeColors: ThemeInstance['themes']['value']['colors']) => {
  const scatterColors = {
    series1: '#ff9f43',
    series2: '#7367f0',
    series3: '#28c76f'
  };

  const { themeSecondaryTextColor, themeBorderColor, themeDisabledTextColor } = colorVariables(themeColors);

  return {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      zoom: {
        type: 'xy',
        enabled: true
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      markers: { offsetX: -3 },

      labels: { colors: themeSecondaryTextColor },
      itemMargin: {
        vertical: 3,
        horizontal: 10
      }
    },
    colors: [scatterColors.series1, scatterColors.series2, scatterColors.series3],
    grid: {
      borderColor: themeBorderColor,
      xaxis: {
        lines: { show: true }
      }
    },
    yaxis: {
      labels: {
        style: { colors: themeDisabledTextColor }
      }
    },
    xaxis: {
      tickAmount: 10,
      axisBorder: { show: false },

      axisTicks: { color: themeBorderColor },
      crosshairs: {
        stroke: { color: themeBorderColor }
      },
      labels: {
        style: { colors: themeDisabledTextColor },
        formatter: (val: string) => parseFloat(val).toFixed(1)
      }
    }
  };
};
export const getLineChartSimpleConfig = (themeColors: ThemeInstance['themes']['value']['colors']) => {
  const { themeBorderColor, themeDisabledTextColor } = colorVariables(themeColors);

  return {
    chart: {
      parentHeightOffset: 0,
      zoom: { enabled: false },
      toolbar: { show: false }
    },
    colors: ['#ff9f43'],
    stroke: { curve: 'straight' },
    dataLabels: { enabled: false },
    markers: {
      strokeWidth: 7,
      strokeOpacity: 1,
      colors: ['#ff9f43'],
      strokeColors: ['#fff']
    },
    grid: {
      padding: { top: -10 },

      borderColor: themeBorderColor,
      xaxis: {
        lines: { show: true }
      }
    },
    tooltip: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      custom(data: any) {
        return `<div class='bar-chart pa-2'>
          <span>${data.series[data.seriesIndex][data.dataPointIndex]}%</span>
        </div>`;
      }
    },
    yaxis: {
      labels: {
        style: { colors: themeDisabledTextColor }
      }
    },
    xaxis: {
      axisBorder: { show: false },

      axisTicks: { color: themeBorderColor },
      crosshairs: {
        stroke: { color: themeBorderColor }
      },
      labels: {
        style: { colors: themeDisabledTextColor }
      },
      categories: [
        '7/12',
        '8/12',
        '9/12',
        '10/12',
        '11/12',
        '12/12',
        '13/12',
        '14/12',
        '15/12',
        '16/12',
        '17/12',
        '18/12',
        '19/12',
        '20/12',
        '21/12'
      ]
    }
  };
};

export const getBarChartConfig = (themeColors: ThemeInstance['themes']['value']['colors']) => {
  const { themeBorderColor, themeDisabledTextColor } = colorVariables(themeColors);

  return {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    colors: ['#00cfe8'],
    dataLabels: { enabled: false },
    plotOptions: {
      bar: {
        borderRadius: 8,
        barHeight: '30%',
        horizontal: true,
        startingShape: 'rounded'
      }
    },
    grid: {
      borderColor: themeBorderColor,
      xaxis: {
        lines: { show: false }
      },
      padding: {
        top: -10
      }
    },
    yaxis: {
      labels: {
        style: { colors: themeDisabledTextColor }
      }
    },
    xaxis: {
      axisBorder: { show: false },
      axisTicks: { color: themeBorderColor },
      categories: ['MON, 11', 'THU, 14', 'FRI, 15', 'MON, 18', 'WED, 20', 'FRI, 21', 'MON, 23'],
      labels: {
        style: { colors: themeDisabledTextColor }
      }
    }
  };
};

export const getCandlestickChartConfig = (themeColors: ThemeInstance['themes']['value']['colors']) => {
  const candlestickColors = {
    series1: '#28c76f',
    series2: '#ea5455'
  };

  const { themeBorderColor, themeDisabledTextColor } = colorVariables(themeColors);

  return {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: { columnWidth: '40%' },
      candlestick: {
        colors: {
          upward: candlestickColors.series1,
          downward: candlestickColors.series2
        }
      }
    },
    grid: {
      padding: { top: -10 },
      borderColor: themeBorderColor,
      xaxis: {
        lines: { show: true }
      }
    },
    yaxis: {
      tooltip: { enabled: true },
      crosshairs: {
        stroke: { color: themeBorderColor }
      },
      labels: {
        style: { colors: themeDisabledTextColor }
      }
    },
    xaxis: {
      type: 'datetime',
      axisBorder: { show: false },
      axisTicks: { color: themeBorderColor },
      crosshairs: {
        stroke: { color: themeBorderColor }
      },
      labels: {
        style: { colors: themeDisabledTextColor }
      }
    }
  };
};
export const getRadialBarChartConfig = (themeColors: ThemeInstance['themes']['value']['colors']) => {
  const radialBarColors = {
    series1: '#fdd835',
    series2: '#32baff',
    series3: '#00d4bd',
    series4: '#7367f0',
    series5: '#FFA1A1'
  };

  const { themeSecondaryTextColor, themePrimaryTextColor } = colorVariables(themeColors);

  return {
    stroke: { lineCap: 'round' },
    labels: ['Comments', 'Replies', 'Shares'],
    legend: {
      show: true,
      position: 'bottom',
      labels: {
        colors: themeSecondaryTextColor
      },
      markers: {
        offsetX: -3
      },
      itemMargin: {
        vertical: 3,
        horizontal: 10
      }
    },
    colors: [radialBarColors.series1, radialBarColors.series2, radialBarColors.series4],
    plotOptions: {
      radialBar: {
        hollow: { size: '30%' },
        track: {
          margin: 15,
          background: themeColors.colors['grey-100']
        },
        dataLabels: {
          name: {
            fontSize: '2rem'
          },
          value: {
            fontSize: '1rem',
            color: themeSecondaryTextColor
          },
          total: {
            show: true,
            fontWeight: 400,
            label: 'Comments',
            fontSize: '1.125rem',

            color: themePrimaryTextColor,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            formatter(w: { globals: { seriesTotals: any[]; series: string | any[] } }) {
              const totalValue =
                w.globals.seriesTotals.reduce((a: number, b: number) => {
                  return a + b;
                }, 0) / w.globals.series.length;

              if (totalValue % 1 === 0) return `${totalValue}%`;
              else return `${totalValue.toFixed(2)}%`;
            }
          }
        }
      }
    },
    grid: {
      padding: {
        top: -35,
        bottom: -30
      }
    }
  };
};

export const getDonutChartConfig = (themeColors: ThemeInstance['themes']['value']['colors']) => {
  const donutColors = {
    series1: '#fdd835',
    series2: '#00d4bd',
    series3: '#826bf8',
    series4: '#32baff',
    series5: '#ffa1a1'
  };

  const { themeSecondaryTextColor, themePrimaryTextColor } = colorVariables(themeColors);

  return {
    stroke: { width: 0 },
    labels: ['Operational', 'Networking', 'Hiring', 'R&D'],
    colors: [donutColors.series1, donutColors.series5, donutColors.series3, donutColors.series2],
    dataLabels: {
      enabled: true,
      formatter: (val: string) => `${parseInt(val, 10)}%`
    },
    legend: {
      position: 'bottom',
      markers: { offsetX: -3 },
      labels: { colors: themeSecondaryTextColor },
      itemMargin: {
        vertical: 3,
        horizontal: 10
      }
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              fontSize: '1.5rem'
            },
            value: {
              fontSize: '1.5rem',
              color: themeSecondaryTextColor,
              formatter: (val: string) => `${parseInt(val, 10)}`
            },
            total: {
              show: true,
              fontSize: '1.5rem',
              label: 'Operational',
              formatter: () => '31%',
              color: themePrimaryTextColor
            }
          }
        }
      }
    },
    responsive: [
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 380
          },
          legend: {
            position: 'bottom'
          }
        }
      },
      {
        breakpoint: 576,
        options: {
          chart: {
            height: 320
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  name: {
                    fontSize: '1rem'
                  },
                  value: {
                    fontSize: '1rem'
                  },
                  total: {
                    fontSize: '1rem'
                  }
                }
              }
            }
          }
        }
      }
    ]
  };
};

export const getAreaChartSplineConfig = (themeColors: ThemeInstance['themes']['value']['colors']) => {
  const areaColors = {
    series3: '#e0cffe',
    series2: '#b992fe',
    series1: '#ab7efd'
  };

  const { themeSecondaryTextColor, themeBorderColor, themeDisabledTextColor } = colorVariables(themeColors);

  return {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    tooltip: { shared: false },
    dataLabels: { enabled: false },
    stroke: {
      show: false,
      curve: 'straight'
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',

      labels: { colors: themeSecondaryTextColor },
      markers: {
        offsetY: 1,
        offsetX: -3
      },
      itemMargin: {
        vertical: 3,
        horizontal: 10
      }
    },

    colors: [areaColors.series3, areaColors.series2, areaColors.series1],
    fill: {
      opacity: 1,
      type: 'solid'
    },
    grid: {
      show: true,
      borderColor: themeBorderColor,
      xaxis: {
        lines: { show: true }
      }
    },
    yaxis: {
      labels: {
        style: { colors: themeDisabledTextColor }
      }
    },
    xaxis: {
      axisBorder: { show: false },

      axisTicks: { color: themeBorderColor },
      crosshairs: {
        stroke: { color: themeBorderColor }
      },
      labels: {
        style: { colors: themeDisabledTextColor }
      },
      categories: [
        '7/12',
        '8/12',
        '9/12',
        '10/12',
        '11/12',
        '12/12',
        '13/12',
        '14/12',
        '15/12',
        '16/12',
        '17/12',
        '18/12',
        '19/12'
      ]
    }
  };
};

export const getColumnChartConfig = (themeColors: ThemeInstance['themes']['value']['colors']) => {
  const columnColors = {
    series1: '#826af9',
    series2: '#d2b0ff',
    bg: '#f8d3ff'
  };

  const { themeSecondaryTextColor, themeBorderColor, themeDisabledTextColor } = colorVariables(themeColors);

  return {
    chart: {
      offsetX: -10,
      stacked: true,
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    fill: { opacity: 1 },
    dataLabels: { enabled: false },

    colors: [columnColors.series1, columnColors.series2],
    legend: {
      position: 'top',
      horizontalAlign: 'left',

      labels: { colors: themeSecondaryTextColor },
      markers: {
        offsetY: 1,
        offsetX: -3
      },
      itemMargin: {
        vertical: 3,
        horizontal: 10
      }
    },
    stroke: {
      show: true,
      colors: ['transparent']
    },
    plotOptions: {
      bar: {
        columnWidth: '15%',
        colors: {
          backgroundBarRadius: 10,

          backgroundBarColors: [columnColors.bg, columnColors.bg, columnColors.bg, columnColors.bg, columnColors.bg]
        }
      }
    },
    grid: {
      borderColor: themeBorderColor,
      xaxis: {
        lines: { show: true }
      }
    },
    yaxis: {
      labels: {
        style: { colors: themeDisabledTextColor }
      }
    },
    xaxis: {
      axisBorder: { show: false },

      axisTicks: { color: themeBorderColor },
      categories: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12'],
      crosshairs: {
        stroke: { color: themeBorderColor }
      },
      labels: {
        style: { colors: themeDisabledTextColor }
      }
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '35%'
            }
          }
        }
      }
    ]
  };
};

export const getHeatMapChartConfig = (themeColors: ThemeInstance['themes']['value']['colors']) => {
  const { themeSecondaryTextColor, themeDisabledTextColor } = colorVariables(themeColors);

  return {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    dataLabels: { enabled: false },
    stroke: {
      colors: [themeColors.colors.surface]
    },
    legend: {
      position: 'bottom',
      labels: {
        colors: themeSecondaryTextColor
      },
      markers: {
        offsetY: 0,
        offsetX: -3
      },
      itemMargin: {
        vertical: 3,
        horizontal: 10
      }
    },
    plotOptions: {
      heatmap: {
        enableShades: false,
        colorScale: {
          ranges: [
            { to: 10, from: 0, name: '0-10', color: '#b9b3f8' },
            { to: 20, from: 11, name: '10-20', color: '#aba4f6' },
            { to: 30, from: 21, name: '20-30', color: '#9d95f5' },
            { to: 40, from: 31, name: '30-40', color: '#8f85f3' },
            { to: 50, from: 41, name: '40-50', color: '#8176f2' },
            { to: 60, from: 51, name: '50-60', color: '#7367f0' }
          ]
        }
      }
    },
    grid: {
      padding: { top: -20 }
    },
    yaxis: {
      labels: {
        style: {
          colors: themeDisabledTextColor
        }
      }
    },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false }
    }
  };
};

export const getRadarChartConfig = (themeColors: ThemeInstance['themes']['value']['colors']) => {
  const radarColors = {
    series1: '#9b88fa',
    series2: '#ffa1a1'
  };

  const { themeSecondaryTextColor, themeBorderColor, themeDisabledTextColor } = colorVariables(themeColors);

  return {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      dropShadow: {
        top: 1,
        blur: 8,
        left: 1,
        opacity: 0.2,
        enabled: false
      }
    },
    markers: { size: 0 },
    fill: { opacity: [1, 0.8] },
    colors: [radarColors.series1, radarColors.series2],
    stroke: {
      width: 0,
      show: false
    },
    legend: {
      labels: {
        colors: themeSecondaryTextColor
      },
      markers: {
        offsetX: -3
      },
      itemMargin: {
        vertical: 3,
        horizontal: 10
      }
    },
    plotOptions: {
      radar: {
        polygons: {
          strokeColors: themeBorderColor,
          connectorColors: themeBorderColor
        }
      }
    },
    grid: {
      show: false,
      padding: {
        top: -20,
        bottom: -20
      }
    },
    yaxis: { show: false },
    xaxis: {
      categories: ['Battery', 'Brand', 'Camera', 'Memory', 'Storage', 'Display', 'OS', 'Price'],
      labels: {
        style: {
          colors: [
            themeDisabledTextColor,
            themeDisabledTextColor,
            themeDisabledTextColor,
            themeDisabledTextColor,
            themeDisabledTextColor,
            themeDisabledTextColor,
            themeDisabledTextColor,
            themeDisabledTextColor
          ]
        }
      }
    }
  };
};
