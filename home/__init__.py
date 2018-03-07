__version__ = "2.5.1-dev"
from googlemaps.client import Client
import googlemaps.exceptions

# Allow sphinx to pick up these symbols for the documentation.
__all__ = ["Client"]