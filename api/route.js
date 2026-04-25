import searoute from 'searoute';

export default function handler(req, res) {

  const { from, to } = req.query;

  const ports = {
    antwerp: [4.40, 51.26],
    rotterdam: [4.14, 51.95],
    hamburg: [9.99, 53.55],
    houston: [-95.27, 29.73],
    neworleans: [-90.07, 29.95],
    veracruz: [-96.14, 19.20],
    baltimore: [-76.61, 39.27],
    callao: [-77.0, -12.0]
  };

  const route = searoute(ports[from], ports[to]);

  res.status(200).json(route.geometry.coordinates);
}
