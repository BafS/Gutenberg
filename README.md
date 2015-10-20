
![Gutenberg](http://i.imgur.com/NlGJI3v.png)

> Modern framework to print correctly

# How to use

Simply include the right stylesheet(s) in your html.
Gutenberg.css is the base stylesheet but there is themes available in the `themes` folder.

Example with Gutenberg and "old style" theme :

```HTML
<link rel="stylesheet" href="dist/gutenberg.css" media="print" charset="utf-8">
<link rel="stylesheet" href="dist/themes/oldstyle.css" media="print" charset="utf-8">
```

![comparison](https://i.imgur.com/tL5cHhn.png)

> Comparison between standard print (left) and Gutenberg (middle, Modern style and right, Old style)

### Force to print background

To force backgrounds to be printed (can be useful when you "print" a pdf), add this CSS (compatible with Safari and Chrome) :

```CSS
-webkit-print-color-adjust: exact;
        print-color-adjust: exact;
```

### Hide elements

To hide elements to be printed you can simply add the class `no-print`.

### Force break page

Gutenberg provide to way break page, the class `page-break` will for to break before and `page-break-after` to break after.

Example:

```HTML
<!-- The title will be on a new page -->
<h1 class="page-break">My title</h1>
```

## Dev

 1. `npm install` to install dependencies
 2. `gulp watch` to "watch" the scss folder and compile to css
