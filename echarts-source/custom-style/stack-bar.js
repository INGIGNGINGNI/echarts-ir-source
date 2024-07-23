///////////////////////////////////////// chart แบบ custom style ///////////////////////////////////////
var stack_bar = echarts.init(document.getElementById('stack_bar'));
var stack_baroption = {
    title: {
        text: 'Stack Bars',
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
            name: '2565',
            type: 'bar',
            data: [
                { value: 882, itemStyle: { borderRadius: [15, 15, 0, 0], color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#C2F4DE' }, { offset: 0.9, color: '#3BDC93' }, { offset: 1, color: '#3BDC93' }] } } },
                { value: 891, itemStyle: { borderRadius: [15, 15, 0, 0], color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#C2F4DE' }, { offset: 0.9, color: '#3BDC93' }, { offset: 1, color: '#3BDC93' }] } } },
                { value: 1039, itemStyle: { borderRadius: [15, 15, 0, 0], color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#C2F4DE' }, { offset: 0.9, color: '#3BDC93' }, { offset: 1, color: '#3BDC93' }] } } },
                { value: 1031, itemStyle: { borderRadius: [15, 15, 0, 0], color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#C2F4DE' }, { offset: 0.9, color: '#3BDC93' }, { offset: 1, color: '#3BDC93' }] } } },
            ],
            stack: 'a',
            name: 'Lorem Ipsum 1',
            barWidth: 20,
            color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#C2F4DE' }, { offset: 0.9, color: '#3BDC93' }, { offset: 1, color: '#3BDC93' }] }
        },
        {
            name: '2566',
            type: 'bar',
            data: [
                { value: 201, itemStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#B0F1FF' }, { offset: 1, color: '#00D2FF' }] } } },
                { value: 222, itemStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#B0F1FF' }, { offset: 1, color: '#00D2FF' }] } } },
                { value: 242, itemStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#B0F1FF' }, { offset: 1, color: '#00D2FF' }] } } },
                { value: 204, itemStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#B0F1FF' }, { offset: 1, color: '#00D2FF' }] } } },
            ],
            stack: 'b',
            name: 'Lorem Ipsum 2',
            barWidth: 20,
            color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#B0F1FF' }, { offset: 1, color: '#00D2FF' }] }
        },
        {
            name: 'YTD',
            type: 'bar',
            data: [
                { value: 681, itemStyle: { borderRadius: [15, 15, 0, 0], color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#E4D1FC' }, { offset: 1, color: '#A76CF4' }] } } },
                { value: 669, itemStyle: { borderRadius: [15, 15, 0, 0], color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#E4D1FC' }, { offset: 1, color: '#A76CF4' }] } } },
                { value: 797, itemStyle: { borderRadius: [15, 15, 0, 0], color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#E4D1FC' }, { offset: 1, color: '#A76CF4' }] } } },
                { value: 827, itemStyle: { borderRadius: [15, 15, 0, 0], color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#E4D1FC' }, { offset: 1, color: '#A76CF4' }] } } },
            ],
            stack: 'b',
            name: 'Lorem Ipsum 3',
            barWidth: 20,
            color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#E4D1FC' }, { offset: 1, color: '#A76CF4' }] }
        }
    ],
};
stack_bar.setOption(stack_baroption);
window.addEventListener('resize', function () {
    stack_bar.resize();
});