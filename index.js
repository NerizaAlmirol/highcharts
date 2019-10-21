document.addEventListener('DOMContentLoaded', () => {
    Highcharts.chart('container', {
        chart: {
            type: 'line',
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
                let s= `<strong> X is: </strong> ${this.x}`;
                this.points.forEach(function(point) {
                    console.log(point);
                    s += `<br>Y is: ${point.y}`;
                });
                return s;
            },
            shared: true
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
            name: 'Maria',
            data: [4, 1, 2, 0, 9, 15, 20, 4, 5]
        }
    ]
    })
});