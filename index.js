module.exports.pointsToPixels = function(pointSize, resolution) {
	resolution = typeof resolution === "number" ? resolution : 72;
	return pointSize * resolution / 72;
};

module.exports.coordToPixel = function(coord, pixelSize, emSize) {
	emSize = typeof emSize === "number" ? emSize : 2048;
	return coord * pixelSize / emSize;
};