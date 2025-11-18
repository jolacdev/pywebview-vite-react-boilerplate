import platform
from typing import TypedDict

import numpy as np
import webview
from pyflow import extensity  # type: ignore


@extensity
class SystemInfo(TypedDict):
    os: str
    version: str
    hostname: str


@extensity
class PyWebViewApi:
    """Python API functions exposed to JavaScript."""

    def generate_random_number_array(self, length: int = 4) -> list[float]:
        return np.random.rand(length).tolist()

    def save_content(self, content: str) -> None:
        if not (
            result := webview.windows[0].create_file_dialog(
                webview.FileDialog.SAVE,
                save_filename="example.txt",
            )
        ):
            return

        filename = str(result) if not isinstance(result, (tuple, list)) else str(result[0])

        with open(filename, "w") as f:
            f.write(content)

    def get_system_info(self) -> SystemInfo:
        return SystemInfo(
            os=platform.system(),
            version=platform.version(),
            hostname=platform.node(),
        )
