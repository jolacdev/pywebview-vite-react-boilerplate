import os

def get_frontend_entrypoint():
    """Return the path to the frontend index.html depending on the running context."""

    backend_dir_path = os.path.dirname(__file__)
    
    paths = (
        "../gui/index.html", # Unfrozen (development)
        "../Resources/gui/index.html", # Frozen macOS (py2app)
        "./gui/index.html") # Frozen Windows (pyinstaller)
    
    for rel_path in paths:
        frontend_entrypoint_path = os.path.join(backend_dir_path, rel_path)
        if (os.path.exists(frontend_entrypoint_path)):
            return rel_path
    
    raise Exception("No index.html found")