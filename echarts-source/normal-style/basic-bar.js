var basic_bar = echarts.init(document.getElementById('basic_bar'));
function getBasic_BarOption() {
    return {
        title: {
            text: 'Basic Bar',
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
            }
        },
        yAxis: [
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
                data: [8000, 24000, 20500, 20500, 15000],
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
            },
        ]
    }
}

function resizeBasic_BarChart() {
    var newOption = getBasic_BarOption();
    basic_bar.setOption(newOption);
    basic_bar.resize();
}
basic_bar.setOption(getBasic_BarOption());
window.addEventListener('resize', resizeBasic_BarChart);