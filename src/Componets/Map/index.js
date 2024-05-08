import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const MyMap = () => (
  <YMaps>
    <div>
      <Map defaultState={{ center: [45.045123, 78.420866], zoom: 16.57 }}>
        <Placemark geometry={[45.045123, 78.420866]} />
      </Map>
    </div>
  </YMaps>
);

export default MyMap;
