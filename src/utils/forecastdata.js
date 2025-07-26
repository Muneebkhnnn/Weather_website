export default function forecast(data) {
  if (!data?.list) return [];

  let groupbyDate = {};

  data.list.forEach((data) => {
    let date = data.dt_txt.split(" ")[0]; // "2025-07-25 06:00:00" =>['2025-07-25' , '06:00:00']
    if (!groupbyDate[date]) {
      groupbyDate[date] = [];
    }
    groupbyDate[date].push(data);
  });

  const allDates = Object.keys(groupbyDate).sort()
 
  const futureDates = allDates.slice(1, 6)
  
  const forcastDays = [];

  futureDates.forEach((date) => {
    const dayforecasts = groupbyDate[date]; // storing all 8 timestamps of one day in dayforecasts
    
    const day = new Date(dayforecasts[0].dt * 1000).toLocaleDateString(
      "en-IN",
      {
        weekday: "long",
        day: "numeric",
        month: "long",
      }
    );

    const temp = dayforecasts.map((temperature) => temperature.main.temp);
    const max_temp = Math.max(...temp);
    const min_temp = Math.min(...temp);
    const icons = dayforecasts.map((icons) => icons.weather[0].icon);
    const count = {};

    for (const icon of icons) {
      count[icon] = (count[icon] || 0) + 1;
    }

    const maxFrequencyIcon = Object.keys(count).reduce((a, b) =>
      count[a] > count[b] ? a : b
    );
   

    const description = dayforecasts
      .filter((w) => w.weather[0].icon === maxFrequencyIcon)
      .map((d) => d.weather[0].description);
   
    const descriptionCount = {};

    for (const desc of description) {
      descriptionCount[desc] = (descriptionCount[desc] || 0) + 1;
    }

    const maxFrequencyDescription = Object.keys(descriptionCount).reduce(
      (a, b) => (descriptionCount[a] > descriptionCount[b] ? a : b)
    );

    const forecsat = {
      date:date,
      day: day, 
      max_temp: max_temp, 
      min_temp: min_temp, 
      maxFrequencyIcon: maxFrequencyIcon, 
      maxFrequencyDescription: maxFrequencyDescription, 
    };

    forcastDays.push(forecsat);
  });
  return forcastDays;
}
