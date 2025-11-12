import os
from time import sleep, time


def get_frontend_entrypoint(backend_dir_path: str):
    """Return the frontend entrypoint depending on context."""

    live_server = os.getenv("LIVE_SERVER", "0") == "1"
    if live_server:
        return "http://localhost:3000"

    paths = (
        "../frontend_dist/index.html",  # Development build (not frozen): Compiled but not bundled.
        "../Resources/frontend_dist/index.html",  # macOS executable (frozen): Bundled via py2app.
        "./frontend_dist/index.html",  # Windows executable (frozen): Bundled via PyInstaller (e.g., ..\AppData\Local\Temp\_MEIXXXXX\frontend_dist\index.html).
    )

    for rel_path in paths:
        frontend_entrypoint_path = os.path.join(backend_dir_path, rel_path)
        if os.path.exists(frontend_entrypoint_path):
            return rel_path

    raise Exception("No index.html found")


def wait_for_js(window, func_path: str, timeout: float = 5) -> bool:
    """
    Wait until a specific JS function (e.g., window.pywebview.state.setValue) exists.
    Returns True if found within the timeout (seconds), otherwise False.
    """
    start = time()
    while time() - start < timeout:
        if window.evaluate_js(f'typeof {func_path} === "function"'):
            return True
        sleep(0.1)
    print(f"⚠️ Timed out waiting for JS function: {func_path}")
    return False
