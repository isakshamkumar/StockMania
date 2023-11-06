export const stocksApi=(ticker)=>`https://twelve-data1.p.rapidapi.com/time_series?symbol=${ticker}&interval=1day&outputsize=20&format=json`

export const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c2ce6d1dbemshe64dd5a324fdc6cp13fc0djsnf0da66f90662',
      'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com',
    },
  };