import threading
from time import time

import webview

from api import Api
from webview_helpers import get_frontend_entrypoint, wait_for_js


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

    if wait_for_js(webview.windows[0], "window.pywebview.state.setTicker"):
        webview.windows[0].evaluate_js(f'window.pywebview.state.setTicker("{int(time())}")')


if __name__ == "__main__":
    frontend_entrypoint = get_frontend_entrypoint()
    # NOTE: https://pywebview.flowrl.com/api/#webview-create-window
    window = webview.create_window(title="PyWebView App", url=frontend_entrypoint, js_api=Api())
    webview.start(update_ticker, debug=True)
