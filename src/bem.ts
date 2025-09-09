/**
 * BEM (Block Element Modifier) utility.
 *
 * Generates CSS class names following the BEM convention.
 *
 * @example
 * bem("card");
 * // → "card"
 *
 * bem("card", "title", ["fancy"], "inside-card");
 * // → "card__title card__title--fancy inside-card"
 *
 * bem("heading", undefined, "subheading");
 * // → "heading heading--subheading"
 *
 * bem("heading", "subtitle", ["large", "bold"], ["extra", "highlight"]);
 * // → "heading__subtitle heading__subtitle--large heading__subtitle--bold extra highlight"
 */

export type Modifiers = string | string[];
export type Extra = string | string[];

/**
 * Build a BEM-compliant class string.
 *
 * @param block - The base block name (e.g. `"card"`).
 * @param element - Optional element name (e.g. `"title"`). Appended as `block__element`.
 * @param modifiers - Optional modifier(s). Appended as `--modifier` (e.g. `"block--large"`).
 * @param extra - Optional extra class(es) outside the BEM scope.
 *
 * @returns A space-delimited string of class names.
 */
export function bem(
  block: string,
  element?: string,
  modifiers?: Modifiers,
  extra?: Extra
): string {
  // Base class: either the block or block__element
  const base = element ? `${block}__${element}` : block;

  // Normalize modifiers to an array of strings
  const mods = Array.isArray(modifiers)
    ? modifiers
    : modifiers
      ? [modifiers]
      : [];
  const modClasses = mods.map((m) => `${base}--${m}`);

  // Normalize extras to an array of strings
  const extras = Array.isArray(extra) ? extra : extra ? [extra] : [];

  // Merge all class names into a single string
  return [base, ...modClasses, ...extras].join(" ");
}
