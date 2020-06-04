from src.services.facescan.scanner.facenet.facenet import Facenet2018
from src.services.facescan.scanner.facescanner import MockScanner
from src.services.facescan.scanner.insightface.insightface import InsightFace


class FaceScanners:
    """ Increases package usability """
    MockScanner = MockScanner  # NOSONAR
    Facenet2018 = Facenet2018  # NOSONAR
    InsightFace = InsightFace  # NOSONAR


ALL_SCANNERS = MockScanner, Facenet2018, InsightFace
TESTED_SCANNERS = Facenet2018, InsightFace
id_2_face_scanner_cls = {backend.ID: backend for backend in ALL_SCANNERS}