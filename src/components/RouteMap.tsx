import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { kml } from "@tmcw/togeojson";
import { X, Map } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface RouteMapProps {
  routeName: string;
  kmlPath: string;
  color?: string;
  onClose: () => void;
}

const RouteMap = ({ routeName, kmlPath, color = "#FFD700", onClose }: RouteMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = "pk.eyJ1IjoiZ2FicmlpZWxsZHVhcnRlIiwiYSI6ImNpaXp0c3N1bjAwNjB1YWx6NTk5cjF4cWIifQ.BGZWPZN6eH9C1S-CZApS7A";

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-37.75, -4.54],
      zoom: 12,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    map.current.on("load", async () => {
      try {
        const response = await fetch(kmlPath);
        const kmlText = await response.text();
        const parser = new DOMParser();
        const kmlDoc = parser.parseFromString(kmlText, "text/xml");
        const geojson = kml(kmlDoc);

        if (map.current && geojson.features.length > 0) {
          map.current.addSource("route", {
            type: "geojson",
            data: geojson as GeoJSON.FeatureCollection,
          });

          map.current.addLayer({
            id: "route-line",
            type: "line",
            source: "route",
            layout: {
              "line-join": "round",
              "line-cap": "round",
            },
            paint: {
              "line-color": color,
              "line-width": 5,
              "line-opacity": 0.9,
            },
          });

          // Fit map to route bounds
          const coordinates: [number, number][] = [];
          geojson.features.forEach((feature) => {
            if (feature.geometry.type === "LineString") {
              (feature.geometry.coordinates as [number, number][]).forEach((coord) => {
                coordinates.push(coord);
              });
            }
          });

          if (coordinates.length > 0) {
            const bounds = coordinates.reduce(
              (bounds, coord) => bounds.extend(coord as [number, number]),
              new mapboxgl.LngLatBounds(coordinates[0], coordinates[0])
            );
            map.current.fitBounds(bounds, { padding: 50 });
          }
        }
      } catch (error) {
        console.error("Error loading KML:", error);
      } finally {
        setLoading(false);
      }
    });

    return () => {
      map.current?.remove();
    };
  }, [kmlPath, color]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full max-w-4xl h-[70vh] rounded-2xl overflow-hidden border border-primary/20 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-background/90 to-transparent p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Map className="w-5 h-5 text-primary" />
              <h3 className="font-serif text-lg font-medium text-foreground">{routeName}</h3>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-background/80 border border-border flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>
          </div>

          {loading && (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-background/50">
              <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          <div ref={mapContainer} className="w-full h-full" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default RouteMap;
