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
v0.1b - even more minor improvements;
> v0.1c - getting close to a major release;

```

## Manual
```ini
0. [ New / N ] = canvas setup;
1. [ Input ] = pen size;
2. [ Mouse 0 / Left Button / B ] = draw colour 1;
3. [ Mouse 1 / Right Mouse / E ] = erase;
4. [ Mouse 2 / Middle Button / B ] = draw colour 2;
5. [ I / Mouse 0 + Alt ] = eyedropper;
5. [ - / + ] = canvas zoom;
6. [ Save / S ] = save image as png;
```

## Roadmap
```ini
v0.2 :
    1. custom colour input; - in progress;
    2. custom pen size; - done;
    3. undo / redo;
    4. save; - in progress;
    5. tool icons; - done;
    6. canvas setup; - in progress;
    7. swatch list; - in progress;
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
    4. Changed canvas background; - made it a little easier to see white pixels on the canvas.
v0.1c :
    1. Complete Ui redesign; - looking good :) .
    2. Added navigation menu; - in progress.
    3. Added tools bar; - non functional, in progress.
    4. Canvas background set to checkboard by default; - functional but not perfect.
    5. Fixed switching between colours; - no more clicking twice to get the other colour.
    6. Added info panel tool indicator, key shortcut and name; - in progress;
v0.1d:
    1. Added swatch list; - currently only one available list, more will be added.
    2. Colour selection; - left click and right click to set primary and secondary colour.
    3. Small Ui changes; - more pixelated to maintain emersion;
    4. Tool selection;  - click the icons in the left toolbar to select.
    5. Keyboard Shortcuts; - you can also use shortcuts to select tools.
v0.1e:
    1. All the tools work as intended; - or at least better than before.
    2. Using shortcuts will overwrite the current selected tool, but will revert to it after the action has ended; - lets hope this doesn't break.
    3. The menu has changed a little with the introduction of 'file'; - still a work in progress.
    4. Saving a drawing will not clear the canvas anymore; - saved the day :) .
    5. Added icon; - grouchy :[ .
```

## Known Issues
```ini
1. Canvas scaling requires browser zoom; - fixed;
2. Pen size not acurrate to input; - fixed;
3. Pen Overlap and Eraser some time creates new line; - fixed;
4. Pen position to pixel position missalignment; - fixed;
5. Canvas checkboard pattern does not align with pixels; - fixed;
6. When zooming in, the canvas gets cut out at the top with no way to scroll the section back in view;
7. Dropdown menus do not close on focus lost;
```
