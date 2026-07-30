import React, { useState } from 'react';
import { CrewMember } from '@/types/crew';

interface CrewCardProps {
  crew: CrewMember;
  isSelected?: boolean;
  onToggleSelect?: (id: string) => void;
  onDirectMessage?: (crew: CrewMember) => void;
}

export const CrewCard: React.FC<CrewCardProps> = ({
  crew,
  isSelected = false,
  onToggleSelect,
  onDirectMessage,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`bg-slate-900 border rounded-2xl overflow-hidden transition-all duration-200 ${
        isSelected
          ? 'border-amber-500 shadow-lg shadow-amber-500/10'
          : 'border-slate-800 hover:border-slate-700'
      }`}
    >
      <div className="p-5 flex items-start gap-4">
        <img
          src={crew.imageUrl}
          alt={crew.name}
          className="w-16 h-16 rounded-xl object-cover border border-slate-700 shrink-0"
        />

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-white font-semibold text-lg truncate">{crew.name}</h3>
            {crew.badge && (
              <span className="text-[10px] uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded-full font-medium">
                {crew.badge}
              </span>
            )}
          </div>

          <p className="text-slate-400 text-sm mt-0.5">
            {crew.role} <span className="text-slate-600">•</span> {crew.experience}
          </p>

          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
              📍 {crew.location}
            </span>
            <span className="text-xs text-emerald-400 font-medium">
              {crew.rate}
            </span>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full bg-slate-950/60 hover:bg-slate-950 border-t border-b border-slate-800/80 px-5 py-2.5 flex items-center justify-between text-xs text-slate-300 transition"
      >
        <span>Education & Background</span>
        <span className="text-slate-400">{isExpanded ? '▲ Hide' : '▼ View Details'}</span>
      </button>

      {isExpanded && (
        <div className="p-5 bg-slate-950/40 text-xs space-y-3 border-b border-slate-800/80">
          <div>
            <span className="text-slate-500 font-medium block mb-0.5">Education</span>
            <p className="text-slate-300">{crew.education}</p>
          </div>

          <div>
            <span className="text-slate-500 font-medium block mb-1">Key Experience</span>
            <ul className="space-y-1 list-disc list-inside text-slate-300">
              {crew.workExperience.map((exp, idx) => (
                <li key={idx} className="truncate">
                  {exp}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className="p-4 bg-slate-900 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => onToggleSelect?.(crew.id)}
          className={`flex-1 py-2 rounded-xl text-xs font-semibold border transition ${
            isSelected
              ? 'bg-amber-500 text-slate-950 border-amber-500'
              : 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700'
          }`}
        >
          {isSelected ? '✓ Selected' : '+ Add to Roster'}
        </button>

        {crew.isFinalized && (
          <button
            type="button"
            onClick={() => onDirectMessage?.(crew)}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 transition"
            title="Direct Message / Book"
          >
            ✈️
          </button>
        )}
      </div>
    </div>
  );
};