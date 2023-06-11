export interface Vehicle {
  id: string;
  vehicleName: string;
  category: string;
  driver: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  phone: string;
}

export interface Data {
  [key: string]: Vehicle[];
}

function getRandomCoordinatesNearby(
  latitude: number,
  longitude: number,
  radius: number,
): { latitude: number; longitude: number } {
  // Преобразование градусов в радианы
  const latRadians = latitude * (Math.PI / 180);

  // Генерация случайного смещения в метрах
  const randomOffset = radius * Math.sqrt(Math.random());
  const randomAngle = 2 * Math.PI * Math.random();

  // Вычисление новых координат
  const latOffset = (randomOffset * Math.cos(randomAngle)) / 111111;
  const lonOffset = (randomOffset * Math.sin(randomAngle)) / (111111 * Math.cos(latRadians));

  // Вычисление новых координат поблизости исходных координат
  const newLatitude = latitude + latOffset * (180 / Math.PI);
  const newLongitude = longitude + lonOffset * (180 / Math.PI);

  return { latitude: newLatitude, longitude: newLongitude };
}

// Пример использования функции
const latitude = 49.8554;
const longitude = 89;
const radius = 45000; // Радиус в метрах

export const data: Data = {
  cargo: [
    {
      id: 'cRA7b',
      vehicleName: 'Megaliner #12345',
      category: 'cargo',
      driver: 'Ivan Petrov',
      coordinates: getRandomCoordinatesNearby(latitude, longitude, radius),
      phone: '996707816490',
    },
    {
      id: 'c5xY9',
      vehicleName: 'Truck #67890',
      category: 'cargo',
      driver: 'Alexey Smirnov',
      coordinates: getRandomCoordinatesNearby(latitude, longitude, radius),
      phone: '79850872575',
    },
    {
      id: 'cJk3D',
      vehicleName: 'Tractor #24680',
      category: 'cargo',
      driver: 'Sergei Ivanov',
      coordinates: getRandomCoordinatesNearby(latitude, longitude, radius),
      phone: '79850872575',
    },
    {
      id: 'cX2zW',
      vehicleName: 'Container Carrier #13579',
      category: 'cargo',
      driver: 'Elena Kozlova',
      coordinates: getRandomCoordinatesNearby(latitude, longitude, radius),
      phone: '79850872575',
    },
    {
      id: 'c9q8P',
      vehicleName: 'Van #54321',
      category: 'cargo',
      driver: 'Dmitry Morozov',
      coordinates: getRandomCoordinatesNearby(latitude, longitude, radius),
      phone: '79850872575',
    },
  ],
  passenger: [
    {
      id: 'pGz6W',
      vehicleName: 'Megabus #12345',
      category: 'passenger',
      driver: 'Anna Ivanova',
      coordinates: getRandomCoordinatesNearby(latitude, longitude, radius),
      phone: '79850872575',
    },
    {
      id: 'pL0tK',
      vehicleName: 'Limousine #67890',
      category: 'passenger',
      driver: 'Michael Petrov',
      coordinates: getRandomCoordinatesNearby(latitude, longitude, radius),
      phone: '79850872575',
    },
    {
      id: 'pQ7yN',
      vehicleName: 'Bus #24680',
      category: 'passenger',
      driver: 'Ekaterina Smirnova',
      coordinates: getRandomCoordinatesNearby(latitude, longitude, radius),
      phone: '79850872575',
    },
    {
      id: 'pD1jT',
      vehicleName: 'Minibus #13579',
      category: 'passenger',
      driver: 'Alexey Ivanov',
      coordinates: getRandomCoordinatesNearby(latitude, longitude, radius),
      phone: '79850872575',
    },
    {
      id: 'pV4rM',
      vehicleName: 'Taxi #54321',
      category: 'passenger',
      driver: 'Olga Kozlova',
      coordinates: getRandomCoordinatesNearby(latitude, longitude, radius),
      phone: '79850872575',
    },
  ],
  specialTransport: [
    {
      id: 'sF3uQ',
      vehicleName: 'Firetruck #12345',
      category: 'specialTransport',
      driver: 'John Smith',
      coordinates: getRandomCoordinatesNearby(latitude, longitude, radius),
      phone: '79850872575',
    },
    {
      id: 'sI1xR',
      vehicleName: 'Ambulance #67890',
      category: 'specialTransport',
      driver: 'Emily Johnson',
      coordinates: getRandomCoordinatesNearby(latitude, longitude, radius),
      phone: '79850872575',
    },
    {
      id: 'sT9oP',
      vehicleName: 'Crane #24680',
      category: 'specialTransport',
      driver: 'David Thompson',
      coordinates: getRandomCoordinatesNearby(latitude, longitude, radius),
      phone: '79850872575',
    },
    {
      id: 'sZ6vN',
      vehicleName: 'Utility Van #13579',
      category: 'specialTransport',
      driver: 'Sarah Davis',
      coordinates: getRandomCoordinatesNearby(latitude, longitude, radius),
      phone: '79850872575',
    },
    {
      id: 'sM5cK',
      vehicleName: 'Tow Truck #54321',
      category: 'specialTransport',
      driver: 'Michael Anderson',
      coordinates: getRandomCoordinatesNearby(latitude, longitude, radius),
      phone: '79850872575',
    },
  ],
};
