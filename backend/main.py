import os
import threading
from time import time

import webview

from api.api import PyWebViewApi
from helpers.webview_helpers import get_frontend_entrypoint, is_running_bundled


def interval(interval):
    def decorator(function):
        def wrapper(*args, **kwargs):
            stopped = threading.Event()

            def loop():
                while not stopped.wait(interval):
                    function(*args, **kwargs)

            thread = threading.Thread(target=loop, daemon=True)
            thread.start()
            return stopped

        return wrapper

    return decorator


@interval(1)
def update_ticker():
    if not webview.windows:
        return

    if not hasattr(current_window := webview.windows[0], "state"):
        return

    # Run JS code from Python.
    # current_window.evaluate_js("console.log('Logged from Python!')")

    # Update shared state object, which automatically fires change event.
    current_window.state.timestamp = int(time() * 1000)


if __name__ == "__main__":
    frontend_entrypoint = get_frontend_entrypoint(os.path.dirname(__file__))
    # NOTE: https://pywebview.flowrl.com/api/#webview-create-window
    window = webview.create_window(
        title="PyWebView App", url=frontend_entrypoint, js_api=PyWebViewApi(), width=950, height=700
    )

    is_devtools_enabled = not is_running_bundled()
    webview.start(update_ticker, debug=is_devtools_enabled)
