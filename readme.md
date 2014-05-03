Some utils for handling font sizing when working with vector fonts.

Useful alongside the [fontpath](https://github.com/mattdesl/fontpath) generator.

```js
	var fnt = require('fontpath-util');

	//convert point size to pixel size
	//Resolution defaults to 72
	var pxSize = fnt.pointsToPixels(ptSize, resolution);

	//convert grid coordinates (within EM square) to px coordinates
	//expects pixelSize of font face
	//em defaults to 2048
	var pxCoord = fnt.coordToPixel(gridCoord, pixelSize, emSize);
```