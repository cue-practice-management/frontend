export class ChartOptionsBuilder {
    private options: any = {};

    barVertical(): this {
        this.options = {
            tooltip: {
                trigger: 'axis',
                axisPointer: { type: 'shadow' }
            },
            grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
            xAxis: {
                type: 'category',
                data: [],
                axisTick: { alignWithLabel: true },
                axisLabel: { rotate: 20 }
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    type: 'bar',
                    barWidth: '60%',
                    data: [],
                    itemStyle: {
                        borderRadius: [4, 4, 0, 0]
                    },
                    emphasis: {
                        itemStyle: {}
                    }
                }
            ]
        };
        return this;
    }

    barHorizontal(): this {
        this.barVertical();
        this.options.xAxis = { type: 'value' };
        this.options.yAxis = {
            type: 'category',
            data: [],
            axisTick: { alignWithLabel: true }
        };
        return this;
    }

    setLabels(labels: string[]): this {
        if (this.options.xAxis?.data) this.options.xAxis.data = labels;
        if (this.options.yAxis?.data) this.options.yAxis.data = labels;
        return this;
    }

    setValues(values: number[]): this {
        this.options.series[0].data = values;
        return this;
    }

    setColor(color: string): this {
        this.options.series[0].itemStyle.color = color;
        this.options.series[0].emphasis.itemStyle.color = color;
        return this;
    }

    setName(name: string): this {
        this.options.series[0].name = name;
        return this;
    }

    setBarWidth(width: string): this {
        if (this.options.series[0]) {
            this.options.series[0].barWidth = width;
        }
        return this;
    }

    build(): any {
        return this.options;
    }

    pieDonut(): this {
        this.options = {
            textStyle: {
                fontFamily: 'Poppins, sans-serif',
                fontSize: 14,
                color: '#333'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'horizontal',
                bottom: 0
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '{d}%',
                        fontSize: 14,
                    },
                    labelLine: { show: false },
                    data: [],
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    }
                }
            ]
        };
        return this;
    }

    setPieData(data: { name: string; value: number }[]): this {
        this.options.series[0].data = data;
        return this;
    }

    setPieColors(colors: string[]): this {
        this.options.series[0].itemStyle.color = undefined;
        this.options.color = colors;
        return this;
    }

}
