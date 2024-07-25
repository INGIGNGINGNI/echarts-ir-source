///////////////////////////////////////// chart แบบปกติ ไม่ได้ใส่ style ///////////////////////////////////////
var line_bar = echarts.init(document.getElementById('line_bar'));
function getLine_BarOption() {
    return {
        title: {
            text: 'Line and Bar',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
        },
        legend: {
            left: -5,
            top: 30,
            textStyle: {
                fontFamily: 'FC Minimal, sans-serif'
            }
        },
        grid: {
            left: '2%',
            right: '2%',
            top: '25%',
            bottom: 0,
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['2562', '2563', '2564', '2565', '2566'],
            axisLabel: {
                fontSize: 10,
                fontFamily: 'FC Minimal, sans-serif'
            },
            crosshair: true,
        },
        yAxis: [
            {
                type: 'value',
                min: 0,
                max: 0.8,
                axisLabel: {
                    formatter: '{value}%',
                    fontSize: 10,
                    fontFamily: 'FC Minimal, sans-serif',
                },
                splitLine: {
                    lineStyle: {
                        width: 0.5
                    }
                }
            },
            {
                type: 'value',
                min: 0,
                max: 0.8,
                axisLabel: {
                    formatter: '{value} บ.',
                    fontSize: 10,
                    fontFamily: 'FC Minimal, sans-serif',
                },
                splitLine: {
                    lineStyle: {
                        width: 0.5
                    }
                },
                position: 'right'
            }
        ],
        series: [
            {
                name: 'Lorem Ipsum 1',
                type: 'bar',
                data: [0.18, 0.29, 0.25, 0.35, 0.12],
                itemStyle: {
                    color: '#00D2FF'
                },
                label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        fontSize: window.innerWidth < 425 ? 8 : 10,
                        fontFamily: 'FC Minimal, sans-serif',
                        color: '#333'
                    }
                },
                yAxisIndex: 1,
                barWidth: window.innerWidth < 767 ? 30 : 40,
                tooltip: {
                    valueFormatter: function (value) {
                        return value + ' บาท';
                    }
                },
                markLine: {
                    symbol: 'none',
                    data: [
                        [
                            {
                                y: '25%',
                                x: '75.6%'
                            },
                            {
                                y: '94%',
                                x: '75.6%'
                            },
                        ]
                    ],
                    label: {
                        show: false
                    },
                    lineStyle: {
                        color: '#333',
                        type: 'dashed',
                    },
                    emphasis: {
                        lineStyle: {
                            width: 1
                        }
                    }
                },
            },
            {
                name: 'Lorem Ipsum 2',
                type: 'line',
                data: [0.6, 0.46, 0.45, 0.54, 0.49],
                itemStyle: {
                    color: '#A76CF4'
                },
                tooltip: {
                    valueFormatter: function (value) {
                        return value + '%';
                    }
                }
            }
        ]
    }
}

function resizeLine_BarChart() {
    var newOption = getLine_BarOption();
    line_bar.setOption(newOption);
    line_bar.resize();
}
line_bar.setOption(getLine_BarOption());
window.addEventListener('resize', resizeLine_BarChart);