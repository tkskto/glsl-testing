import React from 'react';

/**
 * @typedef {Object} LatexPlotProps
 * @property {(x:number)=>number} plotFunction プロットする関数
 * @property {number} [width=480] SVG の幅（px）
 * @property {number} [height=300] SVG の高さ（px）
 * @property {number} [xMin=-1] X 軸の最小値
 * @property {number} [xMax=1] X 軸の最大値
 * @property {number} [yMin] Y 軸の最小値（未指定なら自動計算）
 * @property {number} [yMax] Y 軸の最大値（未指定なら自動計算）
 * @property {number} [samples=400] サンプル点の数
 * @property {React.ReactNode} [children] KaTeX 表示されるキャプション
 */

/**
 * 関数のグラフを描画し、下部に LaTeX をキャプション表示します。
 * @param {LatexPlotProps} props
 * @returns {JSX.Element}
 */
export default function LatexPlot({
    plotFunction,
    width = 480,
    height = 300,
    xMin = -1,
    xMax = 1,
    yMin,
    yMax,
    samples = 400,
    children,
}) {
    const xValues = [];
    const yValues = [];
    const xStep = (xMax - xMin) / Math.max(1, samples - 1);

    for (let i = 0; i < samples; i++) {
        const x = xMin + i * xStep;
        let y;

        try {
            y = plotFunction(x);
        } catch {
            y = NaN;
        }
        
        if (!Number.isFinite(y)) {
            y = NaN
        }

        xValues.push(x);
        yValues.push(y);
    }

    let yMinComputed = yMin;
    let yMaxComputed = yMax;
    if (yMinComputed === undefined || yMaxComputed === undefined) {
        const finite = yValues.filter((v) => Number.isFinite(v));

        if (finite.length > 0) {
            const min = Math.min(...finite);
            const max = Math.max(...finite);
            const pad = 0.1 * (max - min || 1);

            yMinComputed = yMinComputed ?? min - pad;
            yMaxComputed = yMaxComputed ?? max + pad;
        } else {
            yMinComputed = -1;
            yMaxComputed = 1;
        }
    }

    const chartPadding = 36;
    const innerWidth = width - chartPadding * 2;
    const innerHeight = height - chartPadding * 2;
    const scaleX = (x) => chartPadding + ((x - xMin) / (xMax - xMin)) * innerWidth;
    const scaleY = (y) => height - chartPadding - ((y - yMinComputed) / (yMaxComputed - yMinComputed)) * innerHeight;

    let pathData = '';
    let isDrawing = false;

    for (let i = 0; i < xValues.length; i++) {
        const x = xValues[i];
        const y = yValues[i];

        if (!Number.isFinite(y)) {
            isDrawing = false;

            continue;
        }

        const svgX = scaleX(x);
        const svgY = scaleY(y);

        if (!isDrawing) {
            pathData += `M ${svgX} ${svgY}`;
            isDrawing = true;
        } else {
            pathData += ` L ${svgX} ${svgY}`;
        }
    }

    const yAxisSvgX = xMin < 0 && 0 <= xMax ? scaleX(0) : null;
    const xAxisSvgY = yMinComputed < 0 && 0 <= yMaxComputed ? scaleY(0) : null;

    function computeNiceStep(x) {
        const pow = Math.pow(10, Math.floor(Math.log10(x)));
        const norm = x / pow;

        let f = 1;

        if (norm > 5) {
            f = 10;
        } else if (norm > 2) {
            f = 5;
        } else if (norm > 1) {
            f = 2;
        }

        return f * pow;
    }

    function generateTicks(min, max, count = 5) {
        const span = max - min;

        if (!Number.isFinite(span) || span <= 0) {
            return [];
        }

        const step = computeNiceStep(span / count);
        const start = Math.ceil(min / step) * step;
        const arr = [];

        for (let v = start; v <= max + 1e-12; v += step) {
            arr.push(+v.toFixed(10));
        }

        return arr;
    }

    const xTickValues = generateTicks(xMin, xMax, 6);
    const yTickValues = generateTicks(yMinComputed, yMaxComputed, 4);

    return (
        <figure style={{ textAlign: 'center', margin: '2rem 0' }}>
            <svg width={width} height={height}>
                <rect x="0" y="0" width={width} height={height} fill="#fff" stroke="#e5e7eb" />

                {/* 罫線 */}
                {xTickValues.map((tx) => (
                    <line key={`vx-${tx}`} x1={scaleX(tx)} y1={chartPadding} x2={scaleX(tx)} y2={height - chartPadding} stroke="#f3f4f6" />
                ))}
                {yTickValues.map((ty) => (
                    <line key={`hy-${ty}`} x1={chartPadding} y1={scaleY(ty)} x2={width - chartPadding} y2={scaleY(ty)} stroke="#f3f4f6" />
                ))}

                {/* 軸 */}
                {xAxisSvgY !== null && (
                    <line x1={chartPadding} y1={xAxisSvgY} x2={width - chartPadding} y2={xAxisSvgY} stroke="#9ca3af" />
                )}
                {yAxisSvgX !== null && (
                    <line x1={yAxisSvgX} y1={chartPadding} x2={yAxisSvgX} y2={height - chartPadding} stroke="#9ca3af" />
                )}

                {/* 目盛り */}
                {xTickValues.map((tx) => (
                    <g key={`xt-${tx}`} transform={`translate(${scaleX(tx)}, ${height - chartPadding + 16})`}>
                        <text textAnchor="middle" fontSize="10" fill="#6b7280">{tx}</text>
                    </g>
                ))}
                {yTickValues.map((ty) => (
                    <g key={`yt-${ty}`} transform={`translate(${chartPadding - 8}, ${scaleY(ty) + 3})`}>
                        <text textAnchor="end" fontSize="10" fill="#6b7280">{ty}</text>
                    </g>
                ))}

                {/* グラフ */}
                <path d={pathData} fill="none" stroke="#2563eb" strokeWidth="2" />
            </svg>

            {/* 関数式 */}
            <figcaption style={{ textAlign: 'center', marginTop: '0.5rem' }}>
                {children}
            </figcaption>
        </figure>
    );
}
