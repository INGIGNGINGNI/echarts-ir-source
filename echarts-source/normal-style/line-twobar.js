///////////////////////////////////////// chart แบบปกติ ไม่ได้ใส่ style ///////////////////////////////////////
var line_two_bars = echarts.init(document.getElementById('line_two_bars'));
function getLine_Two_BarsOption() {
    return {
        title: {
            text: 'Line and Two Bars',
        },
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            type: 'scroll',
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
            data: ['2563', '2564', '2565', '2566'],
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
                data: [18000, 30000, 33000, 18000],
                itemStyle: {
                    color: '#F7906D'
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
                barWidth: window.innerWidth < 767 ? 30 : 40,
                yAxisIndex: 1,
                color: '#F7906D'
            },
            {
                name: 'Lorem Ipsum 2',
                type: 'bar',
                data: [8000, 24000, 20500, 20500],
                itemStyle: {
                    color: '#FFD461'
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
                barWidth: window.innerWidth < 767 ? 30 : 40,
                yAxisIndex: 1,
                color: '#FFD461'
            },
            {
                name: 'Lorem Ipsum 3',
                type: 'line',
                data: [42, 33, 50, 46],
                itemStyle: {
                    color: '#A76CF4'
                }
            }
        ]
    }
}

function resizeLine_Two_BarsChart() {
    var newOption = getLine_Two_BarsOption();
    line_two_bars.setOption(newOption);
    line_two_bars.resize();
}
line_two_bars.setOption(getLine_Two_BarsOption());
window.addEventListener('resize', resizeLine_Two_BarsChart);