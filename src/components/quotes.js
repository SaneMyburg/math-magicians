import { useEffect, useState } from 'react';

function QuoteDisplay() {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchQuote() {
      try {
        const response = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=inspirational',
          {
            method: 'GET',
            headers: { 'X-Api-Key': 'Ts3DsEKJEWz1h/mZb5Vq1w==fLTigDUcx1O7ndJT' },
          },
        );
        if (!response.ok) {
          throw new Error('Failed to fetch quote');
        }
        const data = await response.json();
        setQuote(data);
        if (data.length === 0) {
          throw new Error('No quotes found');
        }
      } catch (error) {
        setError('Failed to fetch quote');
      }
      setLoading(false);
    }
    fetchQuote();
  }, []);
  if (error) return <div className="loading">Something went wrong!</div>;

  if (loading) return <div className="loading">Loading...</div>;
  return (
    quote.map((data) => <p className="quote" key={0}>{data.quote}</p>)
  );
}

export default QuoteDisplay;
