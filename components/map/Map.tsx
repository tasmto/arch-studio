import React, { useEffect, useRef, useState } from 'react';
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  useMapEvent,
} from 'react-leaflet';

type Props = {
  locations: Array<{ location: [number, number]; name: string }>;
  focus: [number, number];
};

const Map = ({ locations, focus }: Props) => {
  const mapRef = useRef();

  function handleSetView(coordinates: [number, number]) {
    const { current = {} }: any = mapRef;
    if (!current) return false;

    current.setView(coordinates, 13, {
      animate: true,
      pan: {
        duration: 1,
      },
    });
  }

  useEffect(() => {
    handleSetView(focus);
  }, [focus]);

  return (
    <>
      <MapContainer
        // @ts-ignore
        ref={mapRef}
        // @ts-ignore
        center={focus}
        zoom={10}
        scrollWheelZoom={true}
        className='w-full h-full block'
      >
        <TileLayer
          // @ts-ignore
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          url='https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png'
        />

        {locations.map((office, i) => (
          <Marker key={i} position={office.location}>
            <Popup>{office.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
      <style jsx>{`
        @import url('https://unpkg.com/leaflet@1.6.0/dist/leaflet.css');
      `}</style>
    </>
  );
};

export default Map;
