#!/bin/bash
set -e

echo "Building Vue 3 Design System..."

# Clean previous builds
rm -rf dist/
rm -rf storybook-static/

# Build the library
echo "Building library..."
npm run build:lib

# Build Storybook
echo "Building Storybook..."
npm run build-storybook

echo "Build completed successfully!"
echo "Library: ./dist/"
echo "Storybook: ./storybook-static/"

if [ -d "dist" ]; then
    echo ""
    echo "Built files:"
    ls -la dist/
fi
