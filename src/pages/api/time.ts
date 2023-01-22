import type { NextApiRequest, NextApiResponse } from 'next';

const TIME_API = 'http://worldtimeapi.org/api/timezone/Europe/Warsaw';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await fetch(TIME_API);

    if (!response.ok) {
      throw new Error('Failed to fetch API providing current time');
    }

    const data = await response.json();

    if (data.error) {
      throw new Error(data.error);
    }

    if (!data.utc_datetime) {
      throw new Error("UTC datetime wasn't found");
    }

    res.status(200).json({
      time: data.utc_datetime,
    });
  } catch (error) {
    let message = 'Something went wrong';

    if (error instanceof Error) {
      message = error.message;
    }

    res.status(500).json({
      error: message,
    });
  }
}
