import React from 'react';
import { useState } from "react";
import { XYPlot, VerticalBarSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines } from 'react-vis';
import amdData from '../src/data/AMDTableReport.json';

export default function DataComparison() {
    
    const data = [
        {x: "AMD Ryzen™ 5 3600", y: 6},
        {x: "AMD Ryzen™ 5 3600X", y: 6},
        {x: "AMD Ryzen™ 7 3700X", y: 8},
        {x: "AMD Ryzen™ 7 3800X", y: 8},
        {x: "AMD Ryzen™ 9 3900X", y: 12},
    ]
    

    return (
        <div className='container'>
            <div className="text-center">
                <h1 className="section-heading text-uppercase">AMD Ryzen™ Processors Core Comparison</h1>
                <h2 className="section-subheading text-muted">The # of cores for a CPU is very important for the product's performance power. Let's compare AMD Ryzen's lineup of products.</h2>
            </div>
            <div className='container'>
                <div className='display-7 text-center'>Ryzen CPU Model to # of CPU Cores</div>
                <XYPlot xType="ordinal" width={1000} height={500} xDistance={100} >
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis position = 'end' title='# of CPU Cores' className='chart-ylabel' />
                    <VerticalBarSeries className="vertical-bar-series-example" data={data} />
                </XYPlot>
                <p className='chart-xlabel'>CPU Models</p>
            </div>
            
        </div>
    )
    

}

