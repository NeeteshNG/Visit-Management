"use client"
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
    { name: 'Biratnagar', value: 400 },
    { name: 'Pokhara', value: 300 },
    { name: 'Chitwan', value: 300 },
    { name: 'Kathmandu', value: 200 },
    { name: 'Inaruwa', value: 600 },
];

const COLORS = [
    '#636B2F', '#3D4127', '#BAC095', '#D4DE95', '#8B9A3E', '#4E5523',
    '#A3AE6B', '#C8D4A0', '#7A8435', '#2C3018', '#9DAA5E', '#E0E8C4',
    '#556028', '#6E7A32', '#B5C27A', '#485218', '#8F9C52', '#D0D9AC',
    '#3A4020', '#A8B570'
];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

function VisitorByBranch() {
    return (
        <section className="p-2 text-black h-[20rem] bg-[#f5f6ee] shadow">
            <h1 className="py-3 font-semibold text-center text-gray-700">Visitor By Branch</h1>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={115}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </section>
    );
}

export default VisitorByBranch;
