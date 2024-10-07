import React from 'react';
import { useParams } from 'react-router-dom';  // Importar o useParams
import fireSpotsData from '../../../utils/fireSpotsData';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Container, Text } from './styles';  // Certifique-se de que os estilos estão corretos

const FireSpot = () => {
  const { id } = useParams();  // Obtém o ID da rota
  const fireSpot = fireSpotsData.find(spot => spot.id === parseInt(id));  // Busca os dados pelo ID

  if (!fireSpot) return <Text>Fire Spot not found.</Text>;  // Mensagem se não encontrar

  const position = [fireSpot.location.lat, fireSpot.location.lng];  // Posição no mapa

  return (
    <Container>
      <Text>Fire Spot - ID: {fireSpot.id}</Text>
      <MapContainer center={position} zoom={13} style={{ height: '400px' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
          Location: {fireSpot.location.lat}, {fireSpot.location.lng}
          </Popup>
        </Marker>
      </MapContainer>
    </Container>
  );
};

export default FireSpot;
