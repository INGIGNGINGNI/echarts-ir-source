///////////////////////////////////////// chart แบบ custom style ///////////////////////////////////////
var basic_bar = echarts.init(document.getElementById('basic_bar'));
var basic_baroption = {
    title: {
        text: 'Basic Bar',
        textStyle: {
            fontSize: 16,
            fontFamily: 'FC Minimal, sans-serif'
        },
    },
    tooltip: {
        trigger: 'axis',
        backgroundColor: '#222526',
        borderColor: 'transparent',
        textStyle: {
            color: '#FFF',
            fontSize: 10,
            fontFamily: 'FC Minimal, sans-serif'
        },
        formatter: function (params) {
            let html = '';
            params.forEach(param => {
                let colorStyle = `color: ${param.color};`;
                if (param.color.colorStops) {
                    const stops = param.color.colorStops.map(stop => `${stop.color} ${stop.offset * 100}%`).join(', ');
                    colorStyle = `background: linear-gradient(180deg, ${stops}); -webkit-background-clip: text; color: transparent;`;
                }
                html += `
                            <div>
                                <span style="${colorStyle}">\u25CF</span> ${param.seriesName}: ${param.value}
                            </div>
                        `;
            });
            return `
                        <div style="
                            border-radius: 10px;
                            padding: 0px;
                            font-size: 10px;
                            font-weight: 300;
                            line-height: 18px;
                        ">
                            ${html}
                        </div>
                    `;
        },
        position: function (point, params, dom, rect, size) {
            const chartWidth = size.viewSize[0];
            const x = (point[0] + size.contentSize[0] > chartWidth) ? (chartWidth - size.contentSize[0]) : point[0] + 10;
            return [x, point[1] - size.contentSize[1] - 10];
        }
    },
    legend: {
        left: -5,
        top: 30,
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
            fontSize: 10,
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
                color: '#A3A4A6'
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
                { value: 8000, itemStyle: { borderRadius: [15, 15, 0, 0], color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#FFF2CE' }, { offset: 1, color: '#FFD461' }] } } },
                { value: 24000, itemStyle: { borderRadius: [15, 15, 0, 0], color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#FFF2CE' }, { offset: 1, color: '#FFD461' }] } } },
                { value: 20500, itemStyle: { borderRadius: [15, 15, 0, 0], color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#FFF2CE' }, { offset: 1, color: '#FFD461' }] } } },
                { value: 20500, itemStyle: { borderRadius: [15, 15, 0, 0], color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#FFF2CE' }, { offset: 1, color: '#FFD461' }] } } },
                { value: 15000, itemStyle: { borderRadius: [15, 15, 0, 0], color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#FFF2CE' }, { offset: 1, color: '#FFD461' }] } } }
            ],
            barWidth: 20,
            color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#FFF2CE' }, { offset: 1, color: '#FFD461' }] }           
        },
    ]
};
basic_bar.setOption(basic_baroption);
window.addEventListener('resize', function () {
    basic_bar.resize();
});