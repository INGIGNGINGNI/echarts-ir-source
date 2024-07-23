///////////////////////////////////////// chart แบบปกติ ไม่ได้ใส่ style ///////////////////////////////////////
var line_two_bars = echarts.init(document.getElementById('line_two_bars'));
var line_two_barsoption = {
    title: {
        text: 'Line and Two Bars',
    },
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        left: -5,
        top: 30,
        textStyle: {
            fontFamily: 'FC Minimal, sans-serif'
        },
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
    },
    yAxis: [
        {
            type: 'value',
            min: 0,
            max: 80,
            interval: 20,
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
            max: 40000,
            interval: 10000,
            axisLabel: {
                formatter: '{value} ลบ',
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
                {   value: 18000,
                    itemStyle: {
                        color: '#F7906D'
                    }
                },
                {   value: 30000,
                    itemStyle: {
                        color: '#F7906D'
                    }
                },
                {   value: 33000,
                    itemStyle: {
                        color: '#F7906D'
                    }
                },
                {   value: 18000,
                    itemStyle: {
                        color: '#F7906D'
                    }
                },
                {   value: 12000,
                    itemStyle: {
                        color: '#F7906D'
                    }
                }
            ],
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    fontSize: 10,
                    fontFamily: 'FC Minimal, sans-serif',
                    color: '#333'
                }
            },
            barWidth: 40,
            yAxisIndex: 1,
            color: '#F7906D'
        },
        {
            name: 'Lorem Ipsum 2',
            type: 'bar',
            data: [
                {   
                     value: 8000,
                    itemStyle: {
                        color: '#FFD461'
                    }
                },
                {   
                    value: 24000,
                    itemStyle: {
                        color: '#FFD461'
                    }
                },
                {   
                    value: 20500,
                    itemStyle: {
                        color: '#FFD461'
                    }
                },
                {   
                    value: 20500,
                    itemStyle: {
                        color: '#FFD461'
                    }
                },
                {   
                    value: 15000,
                    itemStyle: {
                        color: '#FFD461'
                    }
                }
            ],
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    fontSize: 10,
                    fontFamily: 'FC Minimal, sans-serif',
                    color: '#333'
                }
            },
            barWidth: 40,
            yAxisIndex: 1,
            color: '#FFD461'
        },
        {
            name: 'Lorem Ipsum 3',
            type: 'line',
            data: [42, 33, 50, 46, 17],
            itemStyle: {
                color: '#A76CF4'
            }
        }
    ]
};
line_two_bars.setOption(line_two_barsoption);
window.addEventListener('resize', function () {
    line_two_bars.resize();
});