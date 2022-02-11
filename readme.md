# Grouchy

## Description

```
Open source, web based, pixel editor.
```

Link to [Grouchy](https://ionutrogojan.github.io/grouchy/) <--

## Version
```ini
v0.1 - initial release;
v0.1a - minor improvements;
> v0.1b - even more minor improvements;

```

## Manual
```ini
1. [ Mouse 1 / Left Button ] = draw colour 1;
2. [ Mouse 2 / Middle Button ] = draw colour 2;
3. [ Mouse 3 / Right Mouse ] = erase;
4. [ - / + ] = canvas zoom;
5. [ Save ] = save image as png;
```

## Roadmap
```ini
v0.2 :
    1. custom colour input;
    2. custom pen size;
    3. undo / redo;
    4. save; - in progress;
    5. tool icons; - done;
    6. canvas setup;
    7. swatch list;
```

## Release Notes
```ini
v0.1a :
    1. Re-wrote pen / eraser tool; - replaced ctx.stroke() method with ctx.createImageData().
    2. Added canvas zoom; - still use the browser zoom for now. There is no way of setting the zoom value.
    3. Added tool icons; - tools now have custom indicator icons;
    4. Added Save option; - do not cancel the save dialog. If you do reload the page but your drawing will be gone.
v0.1b :
    1. Added zoom buttons;
    2. Added coordonate indicators; - made it easier to count pixels and navigate the canvas.
    3. Added tool name indicator; - not functional, just a placeholder for now.
    4. Changed canvas background; - made it a little easier to see white pixels on the canvas;
```

## Known Issues
```ini
1. Canvas scaling requires browser zoom; - fixed;
2. Pen size not acurrate to input; - fixed;
3. Pen Overlap and Eraser some time creates new line; - fixed;
4. Pen position to pixel position missalignment;
