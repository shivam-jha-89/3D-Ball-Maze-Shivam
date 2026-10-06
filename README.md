# 🎮 3D-Ball-Maze

A 3D ball maze with realistic physics, procedurally generated levels, and dynamic lighting. Roll your ball through increasingly challenging mazes, avoid obstacles, and reach the exit!

**[Play now!](https://isaacolmstead.github.io/3D-Ball-Maze/)**

---

## ✨ Features

- **Procedurally Generated Mazes** – Each level creates a unique, randomized maze
- **Realistic Physics** – Ball responds naturally to gravity, friction, and collisions
- **Progressive Difficulty** – Mazes grow bigger and more complex with each victory
- **Dynamic Lighting** – Lights follow your position for immersive 3D gameplay
- **Victory Effects** – Celebratory fireworks when you reach the exit
- **Fullscreen Mode** – Play immersively with fullscreen toggle
- **Responsive Controls** – Arrow keys, WASD, or Vim-style (hjkl) movement
- **Cross-Browser** – Built with Three.js and WebGL for broad compatibility

---

## 🎮 How to Play

1. Use **Arrow Keys**, **WASD**, or **hjkl** (Vim) to roll the ball
2. Navigate through the maze to find the exit
3. Avoid hitting the walls—physics can be tricky!
4. Reach the exit to advance to the next level
5. With each level, the maze grows larger and more challenging
6. Press **I** for in-game instructions anytime
7. Press **F** or click the fullscreen icon for fullscreen mode

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser with WebGL support
- Python (for the simple HTTP server, or use any local HTTP server)

### Quick Launch

**Option 1: Python SimpleHTTPServer (Recommended)**
```bash
# Clone the repository
git clone https://github.com/wwwtyro/Astray.git
cd Astray

# Python 2
python -m SimpleHTTPServer 8000

# Python 3
python -m http.server 8000

# Open in browser
# http://localhost:8000
```

**Option 2: Node.js HTTP Server**
```bash
# If you have Node.js installed
npx http-server

# Then open localhost in your browser
```

**Option 3: Direct File**
- Simply open `index.html` in your web browser (may have CORS limitations with some assets)

---

## 🎮 Controls

| Action | Keys |
|--------|------|
| Move Left | `←` / `A` / `H` |
| Move Right | `→` / `D` / `L` |
| Move Down | `↓` / `S` / `J` |
| Move Up | `↑` / `W` / `K` |
| Instructions | `I` |
| Fullscreen | `F` or click icon |
| Exit Fullscreen | `Esc` |

---

## 🛠️ Built With

- **[Three.js](https://threejs.org/)** – 3D graphics and rendering
- **[Box2D Web](https://box2d-js.sourceforge.net/)** – Physics simulation
- **[jQuery](https://jquery.com/)** – DOM manipulation and utilities

---

## 📋 Project Structure

```
Astray/
├── index.html              # Main game file
├── server.js               # Node.js server (optional)
├── package.json            # Node dependencies
├── js/
│   ├── maze.js             # Maze generation algorithm
│   ├── keyboard.js         # Keyboard input handling
│   ├── Three.js            # Three.js library
│   ├── Box2dWeb.min.js     # Physics engine
│   └── jquery.js           # jQuery library
├── assets/                 # Game assets
└── README.md               # This file
```

---

## 📜 License

This project is provided as-is. See [License.md](License.md) for details.

---

## 🤝 Contributing

Feel free to fork, modify, and improve! Suggestions for enhancements:
- Sound effects and music
- Multiple game modes
- Leaderboard/scoring system
- Mobile touch controls + tilt to move features
- Custom maze sizes
- Using modern Three.js

---

## 👨‍💻 Original Creator

**wwwtyro** – [GitHub](https://github.com/wwwtyro)

---

## 🐛 Troubleshooting

**Game won't load:**
- Check that you're running a local HTTP server (not opening the file directly)
- Ensure your browser supports WebGL

**White flickers during gameplay:**
- This has been fixed in the latest version! Update your code.

**Controls not responding:**
- Try pressing `I` to confirm the page is focused
- Ensure you're using arrow keys or WASD

---

Enjoy the maze! 🎉
=======
