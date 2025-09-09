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

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
