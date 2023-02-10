from fastapi import FastAPI

from .v1.app import create_app as create_v1

# from gen.docmatcher.v1 import docmatcher_pb2
# e = docmatcher_pb2.DocumentModificationEvent()
# e.document_id = "hoge"

V1_ROOT_PATH = "/api/v1"


def create_app() -> FastAPI:
    app = FastAPI()
    v1 = create_v1(root_path=V1_ROOT_PATH)
    app.mount(V1_ROOT_PATH, v1)

    return app
