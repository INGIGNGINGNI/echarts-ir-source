///////////////////////////////////////// chart แบบปกติ ไม่ได้ใส่ style ///////////////////////////////////////
var stack_bar = echarts.init(document.getElementById('stack_bar'));
var stack_baroption = {
    title: {
        text: 'Stack Bars',
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
            position: 'right'
        }
    ],
    series: [
        {
            name: '2565',
            type: 'bar',
            data: [
                {
                    value: 882,
                    itemStyle: {
                        color: '#3BDC93'
                    }
                },
                {
                    value: 891,
                    itemStyle: {
                        color: '#3BDC93'
                    }
                },
                { 
                    value: 1039,
                    itemStyle: {
                        color: '#3BDC93'
                    }
                },
                { 
                    value: 1031,
                    itemStyle: {
                        color: '#3BDC93'
                    }
                },
            ],
            stack: 'a',
            name: 'Lorem Ipsum 1',
            barWidth: 40,
            color: '#3BDC93'
        },
        {
            name: '2566',
            type: 'bar',
            data: [
                {   value: 201,
                    itemStyle: {
                        color: '#00D2FF'
                    }
                },
                {   value: 222,
                    itemStyle: {
                        color: '#00D2FF'
                    }
                },
                {   value: 242,
                    itemStyle: {
                        color: '#00D2FF'
                    }
                },
                {   value: 204,
                    itemStyle: {
                        color: '#00D2FF'
                    }
                },
            ],
            stack: 'b',
            name: 'Lorem Ipsum 2',
            barWidth: 40,
            color: '#00D2FF'
        },
        {
            name: 'YTD',
            type: 'bar',
            data: [
                {
                    value: 681,
                    itemStyle: {
                        color: '#A76CF4'
                    }
                },
                {
                    value: 669,
                    itemStyle: {
                        color: '#A76CF4'
                    }
                },
                {
                    value: 797,
                    itemStyle: {
                        color: '#A76CF4'
                    }
                },
                {
                    value: 827,
                    itemStyle: {
                        color: '#A76CF4'
                    }
                },
            ],
            stack: 'b',
            name: 'Lorem Ipsum 3',
            barWidth: 40,
            color: '#A76CF4'
        }
    ],
};
stack_bar.setOption(stack_baroption);
window.addEventListener('resize', function () {
    stack_bar.resize();
});