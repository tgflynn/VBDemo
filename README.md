This is a demo that attempts to show an issue occurring with 
canvas element size determination.  It uses VBCanvas 
(https://github.com/georgedoescode/VBCanvas), but is probably not
specific to that package.

Basically the problem is this:

One would like to use CSS layout methods, such as grid layouts, to
create a web page that may contain canvas elements.  We want
the layout to be responsive in the sense that it should allocate
space proportionally to the available viewport size.  The canvas 
should use all space available in its container (in other words its
 CSS width and height properties should be set to 100%).

 The only way I know of achieving this type of behavior is by setting
 the internal width and height properties of the canvas element in
 Javascript.  This demo uses VBCanvas, which is a small library which
 deals with this.

 However, if one attempts to do this in many cases the canvas will 
 overflow its container in one or more dimensions (ie. height and/or width)
 resulting in unwanted scrollbars.  I suspect this is due to CSS
 attempting to preserve the initial aspect ratio of the canvas's internal
 width and height settings.  There does not appear to be a CSS setting
 that allows deactivating this behavior.

 This demo includes two main examples:
index.html and html/demo2.html.

The first is a very slight modification of the simple demo included with
VBCanvas.  It has a very simple layout with the canvas filling the entire
window.  This example works properly and does not show scrollbars, no matter 
how we resize the window.

The second example, demo2.html, uses a more complex grid based layout that 
is more representative of how we might want to use a canvas in a real web
app.  It shows a vertical scrollbar.  Note that if one comments out the 
canvas-wrapper div the layout is as intended with no scroll bars, so the problem
appears to be with the way the canvas is being handled rather than with the
CSS layout code.

Live page at: https://tgflynn.github.io/VBDemo/

