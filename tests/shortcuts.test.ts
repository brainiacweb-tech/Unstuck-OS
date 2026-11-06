import {it,expect} from 'vitest';
import {shortcuts} from '../src/data/shortcuts';
import {actions} from '../src/data/actions';
it('provides a comprehensive, bounded and uniquely named shortcut catalogue',()=>{expect(shortcuts.length).toBeGreaterThanOrEqual(60);expect(new Set(shortcuts.map(s=>s[1])).size).toBe(shortcuts.length);for(const [category,title,chord] of shortcuts){expect(category).toBeTruthy();expect(title).toBeTruthy();expect(chord.length).toBeLessThan(80);expect(chord).not.toMatch(/[\r\n]/)}});
it('restricted actions are instructions rather than executable repairs',()=>{const restricted=actions.filter(a=>a.level===3);expect(restricted.length).toBeGreaterThan(0);expect(restricted.every(a=>a.handler==='guide'&&a.risk==='restricted')).toBe(true)});
