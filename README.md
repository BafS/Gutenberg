<p align="center">
	<img width="470" alt="Gutenberg" src="http://i.imgur.com/NlGJI3v.png">
</p>

> Modern framework to print web pages correctly

[![npm (scoped)](https://img.shields.io/npm/v/gutenberg-css.svg?style=flat-square)](https://www.npmjs.com/package/gutenberg-css)
[![Build Status](https://travis-ci.org/BafS/Gutenberg.svg?branch=master)](https://travis-ci.org/BafS/Gutenberg)
[![Maintainability](https://api.codeclimate.com/v1/badges/cd58cc2133d461631f7f/maintainability)](https://codeclimate.com/github/BafS/Gutenberg/maintainability)
[![license](https://img.shields.io/npm/l/gutenberg-css.svg?style=flat-square)]()
[![download](https://img.shields.io/npm/dm/gutenberg-css.svg?style=flat-square)]()

# How to use

Simply include the right stylesheet(s) in your html and load it only for a printer.
Gutenberg.css is the base stylesheet but there are themes available in the `themes` folder.

Example with Gutenberg and "old style" theme :

```html
<link rel="stylesheet" href="dist/gutenberg.css" media="print">
<link rel="stylesheet" href="dist/themes/oldstyle.css" media="print"> <!-- optional -->
```

![comparison](https://i.imgur.com/tL5cHhn.png)

> Comparison between standard print (left) and Gutenberg (middle, Modern style and right, Old style)

## npm

Gutenberg is available on npm

```
npm install gutenberg-css
```

(or `yarn add gutenberg-css` for yarn users)

## CDN

You can also use the unpkg service as a *CDN*.

```html
<link rel="stylesheet" href="https://unpkg.com/gutenberg-css@0.7" media="print">
<link rel="stylesheet" href="https://unpkg.com/gutenberg-css@0.7/dist/themes/oldstyle.min.css" media="print">
```


# What does the framework do ?

### Hide elements

To hide elements to be printed you can simply add the class `no-print`.

### Force break page

Gutenberg provides two ways to break a page, the class `break-before` will to break before and `break-after` to break after.

Example:

```html
<!-- The title will be on a new page -->
<h1 class="break-before">My title</h1>

<p class="break-after">I will break after this paragraph</p>
<!-- Break here, the next paragraph will be on a new page -->
<p>I am on a new page</p>
```

### Avoid break inside

To avoid the page to break "inside" an element, you can use the `avoid-break-inside` class.

Example:

```html
<div class="avoid-break-inside">
  <img src="gutenberg.png" />

  <p>I really don't want this part to be cut</p>
</div>
```

### Not reformat links or acronym

If you do not want to reformat the links, acronym or abbreviation to show the full url or title, you can use the class `no-reformat`.

### Force to print background

To force backgrounds to be printed (can be useful when you "print" a pdf), add this CSS (compatible with Safari and Chrome):

```css
-webkit-print-color-adjust: exact;
        print-color-adjust: exact;
```

## Dev

 - `npm i` to install the dependencies
 - `npm run watch` to "watch" the scss folder and compile to css
 - `npm run build` to compile gutenberg to css
