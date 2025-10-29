# PyWebView + React Vite

A lightweight boilerplate for building **desktop applications** with **Python** and **React (Vite)**.

Based on the original [PyWebView React boilerplate](https://github.com/r0x0r/pywebview-react-boilerplate).

## 🛠️ Stack

- 🪟 **PyWebView** – Native desktop window with a Python ↔ JavaScript bridge.
- 🐍 **Python** – Backend language for application logic.
- ⚡ **React + Vite** – Frontend framework and build tooling.
- 📦 **PyInstaller / Py2App** – Create binaries for Windows, Linux, and macOS.

---

## 🧩 Requirements

- **Python 3**
- **Node.js**
- **pnpm**

---

## 📝 Commands

> [!NOTE]
>
> - Scripts prefixed with `_` are internal helpers and should not be run directly.
> - To change the React dev server port, update `vite.config.ts` and `entrypoint.py`.

| Action                  | Command             | Description                                                                      |
| ----------------------- | ------------------- | -------------------------------------------------------------------------------- |
| ⚙️ Setup                | `pnpm initialize`   | Install dependencies and create Python virtual environment.                      |
| ⚛️ Run Frontend         | `pnpm dev:frontend` | Start React dev server. Can run as a standalone (e.g., `http://localhost:3000`). |
| 🔄 Run App (Hot Reload) | `pnpm dev:backend`  | Run PyWebView with hot reload. Requires `dev:frontend` running.                  |
| 🐍 Run App (Bundled)    | `pnpm start`        | Run PyWebView with a bundled React build (e.g., `frontend_dist/index.html`).     |
| 📦 Build                | `pnpm build`        | Generate full application binary.                                                |
| 🧹 Clean                | `pnpm clean`        | Remove build artifacts.                                                          |
