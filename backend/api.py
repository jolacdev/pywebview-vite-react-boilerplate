import numpy as np
import webview
from pyflow import extensity


@extensity
class PyWebViewApi:
    """Python API functions exposed to JavaScript."""

    def generate_random_number_array(self, length: int = 4):
        return np.random.rand(length).tolist()

    def toggle_fullscreen(self):
        webview.windows[0].toggle_fullscreen()

    def save_content(self, content):
        if not (filename := webview.windows[0].create_file_dialog(webview.FileDialog.SAVE)):
            return
        with open(filename, "w") as f:
            f.write(content)
