---
title: 
description:
---
# CSS Basics

## Prerequisite
- [[HTML Basic]] (CSS is used to style HTML elements).

## Syntax
```css
selector {
    property: value;
}
```
- **Selector**: Targets HTML elements (e.g., `h1`, `.class`, `#id`).
- **Property**: The style attribute to change (e.g., `color`, `font-size`).
- **Value**: The value assigned to the property (e.g., `red`, `16px`).

---

## Adding CSS to HTML
### Inline CSS
```html
<p style="color: red;">This is a red paragraph.</p>
```

### Internal CSS
```html
<style>
    p {
        color: red;
    }
</style>
```

### External CSS
```html
<link rel="stylesheet" href="styles.css">
```

---

## Selectors
### Basic Selectors
- **Element Selector**: `p { ... }` (targets all `<p>` elements).
- **Class Selector**: `.class { ... }` (targets elements with `class="class"`).
- **ID Selector**: `#id { ... }` (targets the element with `id="id"`).

### Combinators
- **Descendant**: `div p { ... }` (targets `<p>` inside `<div>`).
- **Child**: `div > p { ... }` (targets `<p>` directly inside `<div>`).
- **Adjacent Sibling**: `h1 + p { ... }` (targets `<p>` immediately after `<h1>`).
- **General Sibling**: `h1 ~ p { ... }` (targets all `<p>` after `<h1>`).

### Pseudo-Classes
- `:hover`: Styles when the element is hovered.
- `:focus`: Styles when the element is focused.
- `:nth-child(n)`: Targets the nth child element.

### Pseudo-Elements
- `::before`: Inserts content before the element.
- `::after`: Inserts content after the element.

---
## Box Model
Every element is a box with:
- **Content**: The actual content (text, image, etc.).
- **Padding**: Space between content and border.
- **Border**: Surrounds padding and content.
- **Margin**: Space outside the border.

```css
div {
    width: 200px;
    padding: 10px;
    border: 2px solid black;
    margin: 20px;
}
```

---

## Common Properties
### Text Styling
- `color`: Sets text color.
- `font-size`: Sets text size.
- `font-family`: Sets font type.
- `text-align`: Aligns text (`left`, `right`, `center`, `justify`).
- `text-decoration`: Adds underline, overline, etc.

### Background
- `background-color`: Sets background color.
- `background-image`: Sets background image.
- `background-size`: Controls image size (`cover`, `contain`).

### Layout
- `display`: Controls layout (`block`, `inline`, `inline-block`, `flex`, `grid`).
- `position`: Sets positioning (`static`, `relative`, `absolute`, `fixed`, `sticky`).
- `float`: Aligns elements (`left`, `right`).

### Flexbox
```css
.container {
    display: flex;
    justify-content: center; /* Horizontal alignment */
    align-items: center; /* Vertical alignment */
}
```

### Grid
```css
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; /* 3 equal columns */
    gap: 10px; /* Space between items */
}
```

---

## Units
- **Absolute**: `px` (pixels), `pt` (points).
- **Relative**: `%` (percentage), `em` (relative to font size), `rem` (relative to root font size), `vh` (viewport height), `vw` (viewport width).

---

## Media Queries
Used for responsive design:
```css
@media (max-width: 768px) {
    body {
        background-color: lightblue;
    }
}
```

---

## Specificity
Order of priority (highest to lowest):
1. Inline styles (`style="..."`).
2. IDs (`#id`).
3. Classes (`.class`), attributes (`[type="text"]`), and pseudo-classes (`:hover`).
4. Elements (`p`, `div`) and pseudo-elements (`::before`).

---

## Shorthand Properties
- **Margin/Padding**: `margin: 10px 20px 30px 40px;` (top, right, bottom, left).
- **Border**: `border: 2px solid black;`.
- **Background**: `background: #fff url('image.jpg') no-repeat center;`.

---

## Transitions and Animations
### Transitions
```css
button {
    transition: background-color 0.5s ease;
}
button:hover {
    background-color: blue;
}
```

### Animations
```css
@keyframes slide {
    from { transform: translateX(0); }
    to { transform: translateX(100px); }
}

div {
    animation: slide 2s infinite;
}
```

---

## Best Practices
- Use external stylesheets for better maintainability.
- Use semantic class names (e.g., `.btn-primary` instead of `.blue-button`).
- Avoid inline styles.
- Use CSS variables for reusable values:
```css
:root {
    --primary-color: #3498db;
}
button {
    background-color: var(--primary-color);
}
```

---

## Debugging Tips
- Use browser developer tools (F12) to inspect and debug styles.
- Check for specificity conflicts.
- Validate CSS using tools like [W3C CSS Validator](https://jigsaw.w3.org/css-validator/).