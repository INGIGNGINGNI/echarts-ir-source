///////////////////////////////////////// chart แบบปกติ ไม่ได้ใส่ style ///////////////////////////////////////
var line_bar = echarts.init(document.getElementById('line_bar'));
var line_baroption = {
    title: {
        text: 'Line and Bar',
    },
    tooltip: {
        trigger: 'axis',
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
        crosshair: true
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
            data: [
                {
                    value: 0.18,
                    itemStyle: {
                        color: '#00D2FF'
                    }
                },
                {
                    value: 0.29,
                    itemStyle: {
                        color: '#00D2FF'
                    }
                },
                {
                    value: 0.25,
                    itemStyle: {
                        color: '#00D2FF'
                    }
                },
                {
                    value: 0.35,
                    itemStyle: {
                        color: '#00D2FF'
                    }
                },
                {
                    value: 0.12,
                    itemStyle: {
                        color: '#00D2FF'
                    }
                }
            ],
            yAxisIndex: 1,
            barWidth: 40,
            tooltip: {
                valueFormatter: function (value) {
                    return value + ' บาท';
                }
            },
            color: '#00D2FF'
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
};
line_bar.setOption(line_baroption);
window.addEventListener('resize', function () {
    line_bar.resize();
});