---
title: HTML Basic
description:
---
# HTML Basics

## Prerequisite
- None (HTML is the foundation of web development).

## Basic Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- Content goes here -->
</body>
</html>
```

## Tags and Elements
### Common Tags
- `<h1>` to `<h6>`: Headings (h1 is the largest, h6 is the smallest).
- `<p>`: Paragraph.
- `<a>`: Anchor (used for links).
- `<img>`: Image.
- `<ul>`, `<ol>`, `<li>`: Unordered list, ordered list, and list items.
- `<div>`: Block-level container.
- `<span>`: Inline container.

### Self-Closing Tags
- `<img src="image.jpg" alt="Description">`
- `<br>`: Line break.
- `<hr>`: Horizontal rule.
- `<input type="text">`

## Attributes
- **Global Attributes**: Apply to all elements (e.g., `id`, `class`, `style`, `title`).
- **Specific Attributes**:
  - `<a href="url">`: Hyperlink.
  - `<img src="image.jpg" alt="Description">`: Image source and alternative text.
  - `<input type="text" placeholder="Enter text">`: Input field.

## Forms
### Basic Form Structure
```html
<form action="/submit" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name"><br>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email"><br>
    <input type="submit" value="Submit">
</form>
```

### Input Types
- `text`: Single-line text input.
- `password`: Password input (hidden characters).
- `email`: Email input (validates email format).
- `number`: Numeric input.
- `checkbox`: Checkbox.
- `radio`: Radio button.
- `file`: File upload.
- `submit`: Submit button.

### Form Attributes
- `action`: Specifies where to send form data.
- `method`: HTTP method (`GET` or `POST`).
- `name`: Name of the input field (used for form submission).
- `placeholder`: Hint text inside the input field.

## Semantic HTML
- `<header>`: Header section.
- `<nav>`: Navigation links.
- `<main>`: Main content.
- `<section>`: Section of content.
- `<article>`: Independent content (e.g., blog post).
- `<aside>`: Sidebar or secondary content.
- `<footer>`: Footer section.

## Multimedia
### Images
```html
<img src="image.jpg" alt="Description" width="300" height="200">
```

### Audio
```html
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>
```

### Video
```html
<video controls width="320" height="240">
    <source src="video.mp4" type="video/mp4">
    Your browser does not support the video element.
</video>
```

## Links
### External Links
```html
<a href="https://example.com" target="_blank">Visit Example</a>
```

### Internal Links (Anchor Links)
```html
<a href="#section1">Jump to Section 1</a>
<h2 id="section1">Section 1</h2>
```

## Tables
### Basic Table
```html
<table border="1">
    <tr>
        <th>Header 1</th>
        <th>Header 2</th>
    </tr>
    <tr>
        <td>Row 1, Cell 1</td>
        <td>Row 1, Cell 2</td>
    </tr>
</table>
```

### Table Attributes
- `border`: Adds a border to the table.
- `colspan`: Merges columns.
- `rowspan`: Merges rows.

## Comments
```html
<!-- This is a comment -->
```

## Meta Tags
- **Charset**: `<meta charset="UTF-8">`
- **Viewport**: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- **Description**: `<meta name="description" content="Page description">`
- **Keywords**: `<meta name="keywords" content="HTML, CSS, JavaScript">`

## Inline vs Block Elements
- **Block Elements**: `<div>`, `<p>`, `<h1>` to `<h6>`, `<ul>`, `<ol>`, `<li>`, `<table>`.
- **Inline Elements**: `<span>`, `<a>`, `<img>`, `<strong>`, `<em>`, `<input>`.

## Special Characters
- `&lt;`: `<`
- `&gt;`: `>`
- `&amp;`: `&`
- `&nbsp;`: Non-breaking space.

## Accessibility
- Use `alt` attribute for images.
- Use `aria-*` attributes for screen readers.
- Use semantic HTML elements (`<header>`, `<nav>`, `<main>`, etc.).

## Best Practices
- Always close tags.
- Use lowercase for tags and attributes.
- Use semantic HTML for better SEO and accessibility.
- Validate your HTML using tools like [W3C Validator](https://validator.w3.org/).