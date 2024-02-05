const { getDefaultConfig } = require("expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

// Extend the default configuration as needed
// For example, to add new asset file types:
defaultConfig.resolver.assetExts.push("gltf", "glb");

module.exports = defaultConfig;
