export const prose = text => text.trim().split(/\n\s*\n/).map(text => {
  const m = text.match(/^([A-Za-z .]+): (.*)$/s);
  return m ? { type: 'dialogue', speaker: m[1], text: m[2] } : { type: 'narration', text };
});
export const option = (label, effects, response, extra = {}) => ({ label, effects, response: prose(response), ...extra });
export const scene = (id, title, location, text, choices, extra = {}) => ({ id, title, location, narrativeBlocks: prose(text), choices, ...extra });
export const variant = (when, text) => ({ when, blocks: prose(text) });
export const flag = (path, eq = true) => ({ path: `flags.${path}`, eq });
export function chapter(number, title, scenes) {
  return scenes.map((n, i) => ({ chapter: number, chapterTitle: title, timeSlot: ['Morning', 'Afternoon', 'Evening'][i % 3], day: number === 0 ? 'Sunday' : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][Math.min(i, 6)], ...n,
    choices: n.choices.map((c, j) => ({ id: `${n.id}-${j + 1}`, target: scenes[i + 1]?.id || `w${String(number + 1).padStart(2, '0')}01`, ...c })) }));
}
