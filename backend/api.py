import webview
import numpy as np

class Api:
    """Pythion API functions exposed to JavaScript."""

    # Data generation
    def rand_arr(self):
        return np.random.rand(4).tolist()

    # Window actions
    def toggle_fullscreen(self):
        webview.windows[0].toggle_fullscreen()

    # File operations
    def save_content(self, content):
        filename = webview.windows[0].create_file_dialog(webview.FileDialog.SAVE)
        if not filename:
            return
        with open(filename, "w") as f:
            f.write(content)