import { bem } from "./bem";

// Export types and interfaces
export { Modifiers, Extra, Block } from "./bem";

// Named export: import { bem } from '...'
export { bem };

// Default export: import bem from '...'
// This is what fixes the "bem is not a function" error in ESM/Vite
export default bem;
