export default async function handler(req, res) {
  const endpoint = 'http://worldtimeapi.org/api/timezone/Europe/Warsaw';

  try {
    const data = await fetch(endpoint);

    if (!data.ok) throw new Error(data.error);

    const { utc_datetime } = await data.json();

    res.status(200).json({ time: utc_datetime });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
