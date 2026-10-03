import { validateState } from './state.js';
export const SAVE_KEY = 'golden-semester/save/v1', ARCHIVE_KEY = 'golden-semester/archive/v1';
export function checksum(text) { let h = 2166136261; for (let i = 0; i < text.length; i++) h = Math.imul(h ^ text.charCodeAt(i), 16777619); return (h >>> 0).toString(16); }
export function encode(s) { const payload = JSON.stringify(s); return JSON.stringify({ format: 'golden-semester', checksum: checksum(payload), payload }); }
export function decode(raw, graph) {
  let outer; try { outer = JSON.parse(raw); } catch { throw new Error('The save is not valid JSON. You can export it before starting again.'); }
  if (outer.format !== 'golden-semester' || typeof outer.payload !== 'string' || checksum(outer.payload) !== outer.checksum) throw new Error('The save is incomplete or has changed outside the game. It has been kept intact.');
  const s = JSON.parse(outer.payload), errors = validateState(s, graph);
  if (errors.length) throw new Error(errors.join(' '));
  return s;
}
export function save(s, storage) { try { storage ??= globalThis.localStorage; s.updatedAt = new Date().toISOString(); storage.setItem(SAVE_KEY, encode(s)); return { ok: true }; } catch { return { ok: false, message: 'Local saving unavailable · Export from Menu' }; } }
export function load(graph, storage) { let raw; try { storage ??= globalThis.localStorage; raw = storage.getItem(SAVE_KEY); return raw ? { state: decode(raw, graph), raw } : {}; } catch (e) { return { error: e.message, raw }; } }
export function archiveRead(storage) { try { storage ??= globalThis.localStorage; const a = JSON.parse(storage.getItem(ARCHIVE_KEY) || '[]'); return Array.isArray(a) ? a.filter(x => typeof x.id === 'string') : []; } catch { return []; } }
export function archiveAdd(entry, storage) { try { storage ??= globalThis.localStorage; const a = archiveRead(storage); if (!a.some(x => x.id === entry.id)) a.push(entry); storage.setItem(ARCHIVE_KEY, JSON.stringify(a)); return true; } catch { return false; } }
