document.addEventListener('DOMContentLoaded', () => {
    Highcharts.chart('container', {
        chart: {
            type: 'areaspline',
            zoomType: 'xy',
        },
        credits: {
            //enabled: false,

            //custom credit
            text: 'My Custom Credit',
            href: 'https://www.nerizaalmirol.com',
            position: {
                align: 'left',
                x: 10
            },
            style: {
                fontSize: "16px",
                color: "red",
            },  
        },
        tooltip: {
            formatter(){
                return `<strong>X value</strong> - ${this.x}. Y value - ${this.y}`;
            },
            animation: true,
            backgroundColor: '#333333',
            borderColor: 'red',
            followPointer: false,
            style: {
                color: '#ffffff'
            }
        },
        title: {
            text: 'Our First Chart',
        },
        colors: ['#757780', '#D2CCA1', '#387780', '#DBD4D3', '#E83151'],
        yAxis: {
           title: {
               text: 'Our Fruits Eaten',
           }
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        series: [
        {
            name: 'John',
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        },
        {
            name: 'Jane',
            data: [2, 3, 1, 9, 8, 7, 6, 5, 4]
        },
        {
            name: 'Dokota',
            data: [3, 2, 2, 4, 6, 8, 10, 12, 14]
        },
        {
            name: 'Jose',
            data: [2, 2, 3, 0, 1, 2, 3, 4, 5]
        },
        {
            name: 'Maria',
            data: [4, 1, 2, 0, 1, 2, 3, 4, 5]
        }
    ]
    })
});