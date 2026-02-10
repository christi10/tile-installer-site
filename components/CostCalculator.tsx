"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";

const tileTypes = [
  { label: "Ceramic", multiplier: 1 },
  { label: "Porcelain", multiplier: 1.3 },
  { label: "Natural Stone", multiplier: 1.8 },
  { label: "Mosaic", multiplier: 2.2 },
  { label: "Large Format", multiplier: 1.5 },
];

const roomTypes = [
  { label: "Bathroom", multiplier: 1.2 },
  { label: "Kitchen", multiplier: 1 },
  { label: "Living Area", multiplier: 0.9 },
  { label: "Hallway", multiplier: 0.85 },
  { label: "Commercial Space", multiplier: 1.1 },
];

const extras = [
  { label: "Underfloor Heating", cost: 15 },
  { label: "Waterproofing", cost: 12 },
  { label: "Old Tile Removal", cost: 10 },
  { label: "Substrate Levelling", cost: 8 },
];

const BASE_RATE = 45; // £ per sqm labour

export default function CostCalculator() {
  const [area, setArea] = useState(10);
  const [tileType, setTileType] = useState(0);
  const [roomType, setRoomType] = useState(0);
  const [selectedExtras, setSelectedExtras] = useState<number[]>([]);

  function toggleExtra(index: number) {
    setSelectedExtras((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  }

  const extrasCost = selectedExtras.reduce(
    (sum, i) => sum + extras[i].cost * area,
    0
  );
  const labourCost =
    area * BASE_RATE * tileTypes[tileType].multiplier * roomTypes[roomType].multiplier;
  const totalLow = Math.round(labourCost + extrasCost);
  const totalHigh = Math.round(totalLow * 1.3);

  return (
    <ScrollReveal>
      <div className="max-w-2xl mx-auto">
        <div className="bg-surface-dark border border-white/5 p-6 sm:p-8 space-y-6">
          {/* Area */}
          <div>
            <label
              htmlFor="area"
              className="block text-text-light text-sm font-heading font-semibold mb-2"
            >
              Area (sqm): {area}
            </label>
            <input
              type="range"
              id="area"
              min={1}
              max={200}
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="w-full accent-accent"
            />
            <div className="flex justify-between text-text-muted text-xs mt-1">
              <span>1 sqm</span>
              <span>200 sqm</span>
            </div>
          </div>

          {/* Tile Type */}
          <div>
            <label className="block text-text-light text-sm font-heading font-semibold mb-2">
              Tile Type
            </label>
            <div className="flex flex-wrap gap-2">
              {tileTypes.map((t, i) => (
                <button
                  key={t.label}
                  onClick={() => setTileType(i)}
                  className={`px-4 py-2 text-sm font-heading transition-all duration-200 cursor-pointer ${
                    tileType === i
                      ? "bg-accent text-white"
                      : "bg-primary border border-white/10 text-text-muted hover:text-white"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Room Type */}
          <div>
            <label className="block text-text-light text-sm font-heading font-semibold mb-2">
              Room Type
            </label>
            <div className="flex flex-wrap gap-2">
              {roomTypes.map((r, i) => (
                <button
                  key={r.label}
                  onClick={() => setRoomType(i)}
                  className={`px-4 py-2 text-sm font-heading transition-all duration-200 cursor-pointer ${
                    roomType === i
                      ? "bg-accent text-white"
                      : "bg-primary border border-white/10 text-text-muted hover:text-white"
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>

          {/* Extras */}
          <div>
            <label className="block text-text-light text-sm font-heading font-semibold mb-2">
              Additional Services
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {extras.map((extra, i) => (
                <button
                  key={extra.label}
                  onClick={() => toggleExtra(i)}
                  className={`flex items-center gap-3 px-4 py-3 text-sm text-left transition-all duration-200 cursor-pointer ${
                    selectedExtras.includes(i)
                      ? "bg-accent/10 border border-accent/30 text-white"
                      : "bg-primary border border-white/10 text-text-muted hover:text-white"
                  }`}
                >
                  <div
                    className={`w-4 h-4 border-2 flex items-center justify-center shrink-0 ${
                      selectedExtras.includes(i)
                        ? "border-accent bg-accent"
                        : "border-white/30"
                    }`}
                  >
                    {selectedExtras.includes(i) && (
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                  <span>{extra.label}</span>
                  <span className="ml-auto text-text-muted text-xs">
                    +£{extra.cost}/sqm
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Result */}
          <div className="pt-6 border-t border-white/10">
            <div className="flex items-center justify-between mb-2">
              <span className="text-text-muted text-sm">
                Estimated Cost Range
              </span>
              <span className="font-heading text-2xl font-bold text-accent">
                £{totalLow.toLocaleString()} – £{totalHigh.toLocaleString()}
              </span>
            </div>
            <p className="text-text-muted text-xs mb-6">
              This is a rough guide only. Labour only — tile materials not
              included. Contact us for an accurate, personalised quote.
            </p>
            <Button href="/contact" variant="primary" className="w-full">
              Get an Accurate Quote
            </Button>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
