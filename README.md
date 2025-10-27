# PyWebView with Vite React

Simple boilerplate for _PyWebView_, and _Vite React_.

Stack based on PyWebView, Vite React, PyInstaller (Windows/Linux) and Py2App (macOS).

## Requirements

- Python 3
- Node
- Pnpm

## Initialization

### Windows

```shell
pnpm init
python -m venv venv
.\venv\Scripts\activate
pip install -r requirements.txt
```

### Mac OS

```shell
pnpm init
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### Linux

- For Linux support check the [original boiler plate](https://github.com/r0x0r/pywebview-react-boilerplate).

## Dev

### Only Frontend

```shell
pnpm dev
```

### Frontend + Backend

```shell
pnpm start
```

## Build

```shell
pnpm build
```
