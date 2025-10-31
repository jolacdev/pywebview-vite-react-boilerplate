import os


def get_frontend_entrypoint():
    """
    Return the frontend entrypoint depending on context:

    - dev_server=True: return localhost:3000 for hot reloading
    - dev_server=False: return local index.html depending on running context
    """

    live_server = os.getenv("LIVE_SERVER", "0") == "1"
    if live_server:
        return "http://localhost:3000"

    backend_dir_path = os.path.dirname(__file__)

    paths = (
        "../frontend_dist/index.html",  # Unfrozen (development)
        "../Resources/frontend_dist/index.html",  # Frozen macOS (py2app)
        "./frontend_dist/index.html",  # Frozen Windows (pyinstaller)
    )

    for rel_path in paths:
        frontend_entrypoint_path = os.path.join(backend_dir_path, rel_path)
        if os.path.exists(frontend_entrypoint_path):
            return rel_path

    raise Exception("No index.html found")
