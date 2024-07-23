// -------------------------------------------------------------------------------------------------------------------------------------------- //
///////////////////////// รายละเอียดของ option พื้นฐานที่ใช้ในการสร้างกราฟใน ECharts /////////////////////////
// -------------------------------------------------------------------------------------------------------------------------------------------- //

'1. Title (title) การตั้งค่าหัวข้อของ chart'

var title = {
    title: {
        text: 'Main Title',   // ข้อความของหัวข้อหลัก
        subtext: 'Sub Title', // ข้อความของหัวข้อย่อย
        left: 'center',       // ตำแหน่งของหัวข้อ (เช่น 'center', 'left', 'right')
        top: 'top',           // ตำแหน่งในแนวตั้ง (เช่น 'top', 'middle', 'bottom')
        textStyle: {          // การตั้งค่าสไตล์ของข้อความหัวข้อ
            color: '#333',    // สีของข้อความ
            fontStyle: 'normal', // รูปแบบฟอนต์ (เช่น 'normal', 'italic', 'oblique')
            fontWeight: 'bold', // น้ำหนักฟอนต์ (เช่น 'normal', 'bold', 'bolder', 'lighter')
            fontFamily: 'sans-serif', // ชื่อฟอนต์
            fontSize: 18     // ขนาดฟอนต์
        },
        subtextStyle: {      // การตั้งค่าสไตล์ของข้อความหัวข้อย่อย
            color: '#aaa',   // สีของข้อความ
            fontSize: 12    // ขนาดฟอนต์
        }
    }
}

// ////////////////////////////////////////////////////////////////////////////////////////////

'2. Tooltip (tooltip) การตั้งค่าข้อมูลแสดงเมื่อ hover ที่ข้อมูล'

var tooltip = {
    tooltip: {
        trigger: 'axis',      // กำหนดการทำงาน (เช่น 'item', 'axis', 'none')
        backgroundColor: 'transparent', // สีพื้นหลังของ tooltip
        borderWidth: 0,       // ความกว้างของเส้นขอบ
        shadowBlur: 0,        // ความเบลอของเงา
        shadowColor: 'transparent', // สีของเงา
        formatter: function (params) {  // ฟังก์ชันสำหรับการกำหนดรูปแบบของข้อมูลที่จะแสดง
            // การจัดการข้อมูลที่จะแสดง
        }
    }
}

// ////////////////////////////////////////////////////////////////////////////////////////////

'3. Grid (grid) การตั้งค่าขอบเขตการแสดงผลของ chart'

var grid  = {
    grid: {
        left: '2%',    // ระยะห่างจากขอบด้านซ้าย
        right: '2%',   // ระยะห่างจากขอบด้านขวา
        bottom: '5%',  // ระยะห่างจากขอบด้านล่าง
        containLabel: true // ปรับขนาดให้พอดีกับป้ายข้อมูล
    }
}

// ////////////////////////////////////////////////////////////////////////////////////////////

'4. XAxis (xAxis) การตั้งค่าการแสดงผลของแกน x'

var xaxis = {
    xAxis: {
        type: 'category', // ประเภทของแกน (เช่น 'category', 'value', 'time', 'log')
        boundaryGap: false, // ช่องว่างระหว่างข้อมูล
        data: date,        // ข้อมูลที่จะแสดงบนแกน x
        axisLabel: {       // การตั้งค่าป้ายข้อมูลของแกน
            formatter: function (value) {
                const date = new Date(value);
                const day = date.getDate();
                const month = date.toLocaleString('th-TH', { month: 'short' });
                return `${day} ${month}`;
            },
            textStyle: {
                fontSize: 12,
                fontFamily: 'FC Minimal, sans-serif'
            }
        }
    }
}

// ////////////////////////////////////////////////////////////////////////////////////////////

'5. YAxis (yAxis) การตั้งค่าการแสดงผลของแกน y'

var yaxis = {
    yAxis: {
        type: 'value',   // ประเภทของแกน
        position: 'right', // ตำแหน่งของแกน
        axisLabel: {     // การตั้งค่าป้ายข้อมูลของแกน
            formatter: '{value}%',  // รูปแบบการแสดงผล
            fontSize: 10,
            fontFamily: 'FC Minimal, sans-serif',
            color: '#A3A4A6'
        }
    }
}

// ////////////////////////////////////////////////////////////////////////////////////////////

'6. Legend (legend) การตั้งค่าการแสดงผลของ legend (คำอธิบายของชุดข้อมูล)'

var legend = {
    legend: {
        left: 'left',     // ตำแหน่งของ legend
        top: 'top',       // ตำแหน่งในแนวตั้ง
        itemWidth: 12,    // ความกว้างของสัญลักษณ์
        itemHeight: 12,   // ความสูงของสัญลักษณ์
        textStyle: {      // การตั้งค่าสไตล์ของข้อความ
            fontSize: 10,
            fontFamily: 'FC Minimal, sans-serif'
        }
    }
}

// ////////////////////////////////////////////////////////////////////////////////////////////

'7. Data Zoom (dataZoom) การตั้งค่าการซูมข้อมูลใน chart'

var datazoom = {
    dataZoom: [
        {
            type: 'inside', // ประเภทของการซูม (เช่น 'inside', 'slider')
            start: 0,       // จุดเริ่มต้นของการซูม (เป็นเปอร์เซ็นต์)
            end: 0.5        // จุดสิ้นสุดของการซูม (เป็นเปอร์เซ็นต์)
        }
    ]
}

// ////////////////////////////////////////////////////////////////////////////////////////////

'8. Series (series) การตั้งค่าชุดข้อมูลที่จะแสดงผลใน chart'

var series = {
    series: [
        {
            name: 'EA',          // ชื่อของชุดข้อมูล
            type: 'line',        // ประเภทของกราฟ (เช่น 'line', 'bar', 'pie')
            showSymbol: false,   // การแสดงสัญลักษณ์ที่จุดข้อมูล
            itemStyle: {         // การตั้งค่าสไตล์ของจุดข้อมูล
                color: '#A76CF4' // สีของเส้นกราฟ
            },
            data: [120, 200, 150, 80, 70, 110, 130],          // ข้อมูลที่จะแสดงในชุดข้อมูลนี้
        },
    ]
}

// ////////////////////////////////////////////////////////////////////////////////////////////

'text style สามารถใช้งานร่วมกันได้กับทุกๆ option เพื่อใช้ในการปรับ style ต่างๆ ของฟอนต์'
var textstyle = {
    textStyle: {          // การตั้งค่าสไตล์ของข้อความหัวข้อ
        color: '#333',    // สีของข้อความ
        fontStyle: 'normal', // รูปแบบฟอนต์ (เช่น 'normal', 'italic', 'oblique')
        fontWeight: 'bold', // น้ำหนักฟอนต์ (เช่น 'normal', 'bold', 'bolder', 'lighter')
        fontFamily: 'sans-serif', // ชื่อฟอนต์
        fontSize: 18     // ขนาดฟอนต์
    },
}

'หากต้องการกำหนดค่าของ option ให้รองรับ responsive สามารถใช้ฟังก์ชันในการตรวจสอบขนาดหน้าจอได้ตามตัวอย่าง ดังนี้'
var responsive = {
    barWidth: window.innerWidth < 767 ? 20 : 40,
    // กำหนด barWidth = 40 แต่ถ้าหากขนาดหหน้าจอน้อยกว่า 767px barWidth = 20
}
