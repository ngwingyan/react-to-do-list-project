import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DateDisplay = () => {
  const [dateData, setDateData] = useState(null);

  useEffect(() => {
    fetchDateData();
  }, []);

  const fetchDateData = async () => {
    try {
      const response = await axios.get('http://worldtimeapi.org/api/ip');
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      const date = new Date(response.data.datetime);
      // no set format, according to your IP
      const formattedDate = date.toLocaleDateString('en-uk', options);
      setDateData(formattedDate);
    } catch (error) {
      console.log("Error fetching quote:", error);
    }
  };
  return (
    <div className="currentDate">
      {dateData}
    </div>
  )
};

export default DateDisplay;
