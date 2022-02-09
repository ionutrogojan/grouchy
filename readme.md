# Grouchy

## Description

```
Open source, web based, pixel editor.
```

Link to [Grouchy](https://ionutrogojan.github.io/grouchy/) <--

## Version
```ini
v0.1 - initial release;
> v0.1a - minor improvements;

```

## Manual
```ini
1. [ Mouse 1 / Left Button ] = draw colour 1;
2. [ Mouse 2 / Middle Button ] = draw colour 2;
3. [ Mouse 3 / Right Mouse ] = erase;
```

## Roadmap
```ini
v0.2 :
    1. custom colour input;
    2. undo / redo;
    3. save;
    4. tool icons;
    4. canvas setup;
    5. swatch list;
```

## Release Notes
```ini
v0.1a :
    1. Re-wrote pen / eraser tool; - replaced ctx.stroke() method with ctx.createImageData().
    2. Added canvas zoom; - still use the browser zoom for now. There is no way of setting the zoom value.
    3. Added tool icons; - tools now have custom indicator icons;
    4. Added Save option; - do not cancel the save dialog. If you do reload the page but your drawing will be gone.
```

## Known Issues
```ini
1. Canvas scaling requires browser zoom; - fixed;
2. Pen size not acurrate to input; - fixed;
3. Pen Overlap and Eraser some time creates new line; - fixed;
4. Pen position to pixel position gap;
