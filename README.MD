# Introduction to Three.js: A Beginner's Guide
This readme serves as a summary of key concepts learned from the tutorial video [Three.js Tutorial For Absolute Beginners](https://www.youtube.com/watch?v=xJAfLdUgdc4&list=PLjcjAqAnHd1EIxV4FSZIiJZvsdrBc1Xho) and supplementary resources on Three.js, a popular JavaScript library for creating 3D graphics in web applications.

## Instructions
To run the project locally, follow these steps:

1. Clone or download the project repository.
2. Navigate to the project directory in your terminal.
3. Install dependencies:

```bash
$ npm install
```
4. Start the project:
```bash
$ npm start
```

## Understanding 3D Space
In the realm of computer graphics, "3D" or "three-dimensional" refers to the representation of objects in three spatial dimensions: width, height, and depth. Unlike traditional two-dimensional (2D) graphics, 3D graphics aim to simulate the depth and realism of the physical world.

## Key Points:
- Coordinate System: 3D space is typically represented using a coordinate system with three axes: X (horizontal), Y (vertical), and Z (depth). These axes define the position of objects within the 3D environment.

- Depth Perception: In computer-generated imagery (CGI), depth perception is achieved through techniques such as perspective projection, which simulates the way objects appear smaller as they recede into the distance.


## Essential Elements in Three.js Projects
Building a 3D scene in Three.js involves several fundamental components:

- Scene: The virtual environment where all objects and entities are placed and rendered.
- Camera: Determines the perspective through which the scene is viewed. Two common types of cameras are perspective and orthographic cameras.
- Lighting: Illuminates the scene to create realistic lighting effects and shadows.
- Objects: 3D models, geometries, and other entities that populate the scene.
- Actors: Dynamic elements within the scene, such as animated characters or interactive objects.

## Camera Types in Three.js
### Perspective Camera: Simulates a real-life camera. To create a perspective camera in Three.js, we need four values:

- Field of View
- Aspect Ratio: Width and Height
- Far Clipping Plane

### Orthographic Camera: Used when depth isn't a concern. Composed of six values:
- Top Edge: The distance from the center of the camera's view to the top edge of the viewing volume.
- Left Edge: The distance from the center of the camera's view to the left edge of the viewing volume.
- Bottom Edge: The distance from the center of the camera's view to the bottom edge of the viewing volume.
- Right Edge: The distance from the center of the camera's view to the right edge of the viewing volume.
- Near Clipping Plane: The distance from the camera to the nearest visible objects in the scene. Objects closer than this distance will not be rendered.
- Far Clipping Plane: The distance from the camera to the farthest visible objects in the scene. Objects farther than this distance will not be rendered.




Fonts: https://www.techtarget.com/whatis/definition/3-D-three-dimensions-or-three-dimensional
