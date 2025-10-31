import threading
from time import time

import webview

from api import Api
from entrypoint import get_frontend_entrypoint


def set_interval(interval):
    def decorator(function):
        def wrapper(*args, **kwargs):
            stopped = threading.Event()

            def loop():  # executed in another thread
                while not stopped.wait(interval):  # until stopped
                    function(*args, **kwargs)

            t = threading.Thread(target=loop)
            t.daemon = True  # stop if the program exits
            t.start()
            return stopped

        return wrapper

    return decorator


@set_interval(1)
def update_ticker():
    if len(webview.windows) > 0:
        webview.windows[0].evaluate_js(f'window.pywebview.state.setTicker("{int(time())}")')


if __name__ == "__main__":
    frontend_entrypoint = get_frontend_entrypoint()
    window = webview.create_window("pywebview-react boilerplate", frontend_entrypoint, js_api=Api())
    webview.start(update_ticker, debug=True)
