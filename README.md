# bem-classnames

A tiny utility for generating CSS class names following the [BEM (Block Element Modifier)](http://getbem.com/introduction/) convention.

This library is designed to make your CSS class naming clean, predictable, and compatible with **CSS Modules**, making it a great choice for modern front‑end development.

---

## ✨ Features

- Simple API with TypeScript support.
- Works seamlessly with **CSS Modules** (no collisions).
- Handles elements, modifiers, and extra classes.
- Lightweight, no dependencies.

---

## 📦 Installation

```bash
npm install bem-classnames
# or
yarn add bem-classnames
```

---

## 🚀 Usage

### Basic Block

```ts
import { bem } from "bem-classnames";

bem("card");
// → "card"
```

### Block with Element

```ts
bem("card", "title");
// → "card__title"
```

### Block with Element + Modifiers + Extra

```ts
bem("card", "title", ["fancy"], "inside-card");
// → "card__title card__title--fancy inside-card"
```

### Block with Modifier Only

```ts
bem("heading", undefined, "subheading");
// → "heading heading--subheading"
```

### Block with Multiple Modifiers + Multiple Extras

```ts
bem("heading", "subtitle", ["large", "bold"], ["extra", "highlight"]);
// → "heading__subtitle heading__subtitle--large heading__subtitle--bold extra highlight"
```

---

## 💡 Why use this?

- **BEM made easy**: No more manual string concatenation.
- **CSS Modules friendly**: Keeps classes predictable, no naming conflicts.
- **Lightweight**: Zero dependencies, minimal footprint.

---

## 📘 API

```ts
bem(block: string, element?: string, modifiers?: string | string[], extra?: string | string[]): string
```

- **block** (required) – The base block name (e.g. `"card"`).
- **element** (optional) – An element name (e.g. `"title"`). Appended as `block__element`.
- **modifiers** (optional) – A string or array of modifiers. Appended as `--modifier` (e.g. `"block--large"`).
- **extra** (optional) – A string or array of extra class names outside of the BEM scope.

---

## 🛠 Development

Clone the repo and install dependencies:

```bash
git clone https://github.com/yourusername/bem-classnames.git
cd bem-classnames
npm install
```

Build:

```bash
npm run build
```

Run tests:

```bash
npm test
```

---

## 📄 License

MIT © [Your Name]
