///////////////////////////////////////// chart แบบปกติ ไม่ได้ใส่ style ///////////////////////////////////////
var stack_bar = echarts.init(document.getElementById('stack_bar'));
function getStack_BarOption() {
    return {
        title: {
            text: 'Stack Bars',
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
            data: ['2563', '2564', '2565', '6M2566'],
            axisLabel: {
                fontSize: 10,
                fontFamily: 'FC Minimal, sans-serif'
            }
        },
        yAxis: [
            {
                type: 'value',
                min: 0,
                max: 1200,
                interval: 200,
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
                position: 'right',
            },
        ],
        series: [
            {
                name: '2565',
                type: 'bar',
                data: [882, 891, 1039, 1031],
                itemStyle: {
                    color: '#3BDC93'
                },
                name: 'Lorem Ipsum 1',
                stack: 'a',
                label: {
                    show: true,
                    position: 'inside',
                    textStyle: {
                        fontSize: window.innerWidth < 425 ? 8 : 10,
                        fontFamily: 'FC Minimal, sans-serif',
                        color: '#FFF'
                    }
                },
                barWidth: window.innerWidth < 767 ? 30 : 40,
                color: '#3BDC93'
            },
            {
                name: '2566',
                type: 'bar',
                data: [201, 222, 242, 204],
                itemStyle: {
                    color: '#00D2FF'
                },
                name: 'Lorem Ipsum 2',
                stack: 'b',
                label: {
                    show: true,
                    position: 'inside',
                    textStyle: {
                        fontSize: window.innerWidth < 425 ? 8 : 10,
                        fontFamily: 'FC Minimal, sans-serif',
                        color: '#FFF'
                    }
                },
                barWidth: window.innerWidth < 767 ? 30 : 40,
                color: '#00D2FF'
            },
            {
                name: 'YTD',
                type: 'bar',
                data: [681, 669, 797, 827],
                itemStyle: {
                    color: '#A76CF4'
                },
                name: 'Lorem Ipsum 3',
                stack: 'b',
                label: {
                    show: true,
                    position: 'inside',
                    textStyle: {
                        fontSize: window.innerWidth < 425 ? 8 : 10,
                        fontFamily: 'FC Minimal, sans-serif',
                        color: '#FFF'
                    }
                },
                barWidth: window.innerWidth < 767 ? 30 : 40,
                color: '#A76CF4'
            }
        ],
    }
}

function resizeStack_BarChart() {
    var newOption = getStack_BarOption();
    stack_bar.setOption(newOption);
    stack_bar.resize();
}
stack_bar.setOption(getStack_BarOption());
window.addEventListener('resize', resizeStack_BarChart);