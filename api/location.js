let latest_location = {
  device_id: null,
  lat: null,
  lng: null,
  time: null,
};

export default function handler(req, res) {
  if (req.method === "POST") {
    const { device_id, lat, lng } = req.body;

    latest_location = {
      device_id,
      lat,
      lng,
      time: new Date().toISOString()
    };

    return res.status(200).json({ status: "ok" });
  }

  if (req.method === "GET") {
    return res.status(200).json(latest_location);
  }

  res.status(405).json({ error: "Method Not Allowed" });
}
