/**
 * Live weather-curve preview for the boiler auto-mode setpoint.
 *
 * Mirrors the firmware formula in `src/boiler/boiler.cpp` (`updateAutoMode`)
 * exactly, with the room trim fixed at 0:
 *
 *   a = -0.21*K - 0.06; b = 6.04*K + 1.98; c = -5.06*K + 18.06
 *   x = -0.2*Tout + 5; base = a*x*x + b*x + c + B
 *   setPoint = clamp(base, minSetPoint, 80)
 *
 * Pure inline SVG, no dependencies. Non-finite props fall back to the firmware
 * defaults (K=1, B=7.2, minSetPoint=50) so a transiently empty form field never
 * breaks the render.
 */

export interface WeatherCurveChartProps {
  k: number;
  b: number;
  minSetPoint: number;
}

const VIEW_W = 640;
const VIEW_H = 360;

// Plot area inside the viewBox, leaving room for tick labels and axis titles.
const PLOT_LEFT = 56;
const PLOT_RIGHT = 624;
const PLOT_TOP = 16;
const PLOT_BOTTOM = 312;
const PLOT_W = PLOT_RIGHT - PLOT_LEFT;
const PLOT_H = PLOT_BOTTOM - PLOT_TOP;

// Outdoor temperature runs +20 (left) to -30 (right).
const TOUT_LEFT = 20;
const TOUT_RIGHT = -30;
// Setpoint axis runs 20 (bottom) to 85 (top); the firmware clamps at 80.
const SP_MIN = 20;
const SP_MAX = 85;
const MAX_SET_POINT = 80;

const OUTDOOR_TICKS = [20, 10, 0, -10, -20, -30];
const SETPOINT_TICKS = [20, 30, 40, 50, 60, 70, 80];

const FALLBACK_K = 1;
const FALLBACK_B = 7.2;
const FALLBACK_MIN = 50;

function finiteOr(value: number, fallback: number): number {
  return Number.isFinite(value) ? value : fallback;
}

function toX(tout: number): number {
  return PLOT_LEFT + ((TOUT_LEFT - tout) / (TOUT_LEFT - TOUT_RIGHT)) * PLOT_W;
}

function toY(setPoint: number): number {
  return PLOT_BOTTOM - ((setPoint - SP_MIN) / (SP_MAX - SP_MIN)) * PLOT_H;
}

function outdoorLabel(value: number): string {
  return value > 0 ? `+${value}` : String(value);
}

export function WeatherCurveChart({ k, b, minSetPoint }: WeatherCurveChartProps) {
  const safeK = finiteOr(k, FALLBACK_K);
  const safeB = finiteOr(b, FALLBACK_B);
  const safeMin = finiteOr(minSetPoint, FALLBACK_MIN);

  const coeffA = -0.21 * safeK - 0.06;
  const coeffB = 6.04 * safeK + 1.98;
  const coeffC = -5.06 * safeK + 18.06;

  const points: string[] = [];
  for (let tout = TOUT_LEFT; tout >= TOUT_RIGHT; tout -= 1) {
    const x = -0.2 * tout + 5;
    const base = coeffA * x * x + coeffB * x + coeffC + safeB;
    const setPoint = Math.min(MAX_SET_POINT, Math.max(safeMin, base));
    points.push(`${toX(tout).toFixed(2)},${toY(setPoint).toFixed(2)}`);
  }

  // Keep the reference lines inside the plot even if a field is mid-edit.
  const minLineY = toY(Math.min(SP_MAX, Math.max(SP_MIN, safeMin)));
  const maxLineY = toY(MAX_SET_POINT);

  return (
    <svg
      class="weather-curve"
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="Weather curve: computed boiler setpoint versus outdoor temperature"
    >
      <rect
        class="wc-plot"
        x={PLOT_LEFT}
        y={PLOT_TOP}
        width={PLOT_W}
        height={PLOT_H}
      />

      {SETPOINT_TICKS.map((value) => {
        const y = toY(value);
        return (
          <g key={`sp-${value}`}>
            <line
              class="wc-grid"
              x1={PLOT_LEFT}
              y1={y}
              x2={PLOT_RIGHT}
              y2={y}
            />
            <text class="wc-tick" x={PLOT_LEFT - 8} y={y + 4} text-anchor="end">
              {value}
            </text>
          </g>
        );
      })}

      {OUTDOOR_TICKS.map((value) => {
        const x = toX(value);
        return (
          <g key={`out-${value}`}>
            <line
              class="wc-grid"
              x1={x}
              y1={PLOT_TOP}
              x2={x}
              y2={PLOT_BOTTOM}
            />
            <text
              class="wc-tick"
              x={x}
              y={PLOT_BOTTOM + 18}
              text-anchor="middle"
            >
              {outdoorLabel(value)}
            </text>
          </g>
        );
      })}

      <line
        class="wc-max"
        x1={PLOT_LEFT}
        y1={maxLineY}
        x2={PLOT_RIGHT}
        y2={maxLineY}
      />
      <text
        class="wc-max-label"
        x={PLOT_RIGHT - 4}
        y={maxLineY - 5}
        text-anchor="end"
      >
        max 80
      </text>

      <polyline class="wc-curve" points={points.join(' ')} />

      <line
        class="wc-min"
        x1={PLOT_LEFT}
        y1={minLineY}
        x2={PLOT_RIGHT}
        y2={minLineY}
      />
      <text
        class="wc-min-label"
        x={PLOT_LEFT + 4}
        y={minLineY - 5}
        text-anchor="start"
      >
        min
      </text>

      <text
        class="wc-axis-title"
        x={(PLOT_LEFT + PLOT_RIGHT) / 2}
        y={VIEW_H - 8}
        text-anchor="middle"
      >
        Outdoor, °C
      </text>
      <text
        class="wc-axis-title"
        x={16}
        y={(PLOT_TOP + PLOT_BOTTOM) / 2}
        text-anchor="middle"
        transform={`rotate(-90 16 ${(PLOT_TOP + PLOT_BOTTOM) / 2})`}
      >
        Setpoint, °C
      </text>
    </svg>
  );
}
