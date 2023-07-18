export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '10429bcea3msh2e118be9b69f5e6p1f465ajsn64e8813f0489',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) =>{
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}