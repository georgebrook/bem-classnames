/**
 * BEM (Block Element Modifier) utility.
 */

export type Modifiers = string | string[] | Record<string, boolean | null | undefined>;
export type Extra = string | string[];

export interface Block {
  name: string;
  modifiers?: string[];
}

/**
 * Build a BEM-compliant class string.
 *
 * @param block - The base block name or a Block object.
 * @param element - Optional element name.
 * @param modifiers - Optional modifier(s) (string, array, or object).
 * @param extra - Optional extra class(es) outside BEM scope.
 */
export function bem(
  block: string | Block,
  element?: string,
  modifiers?: Modifiers,
  extra?: Extra
): string {
  // 1. Extract the block name
  const blockName = typeof block === 'string' ? block : block.name;
  const base = element ? `${blockName}__${element}` : blockName;

  // 2. Parse Modifiers
  let mods: string[] = [];
  if (Array.isArray(modifiers)) {
    mods = modifiers;
  } else if (typeof modifiers === 'string') {
    mods = [modifiers];
  } else if (modifiers && typeof modifiers === 'object') {
    // Handle the { 'modifier-name': true } pattern
    mods = Object.keys(modifiers).filter((key) => !!(modifiers as any)[key]);
  }

  const modClasses = mods.map((m) => `${base}--${m}`);

  // 3. Parse Extra classes
  const extras = Array.isArray(extra) ? extra : extra ? [extra] : [];

  return [base, ...modClasses, ...extras].join(" ");
}
