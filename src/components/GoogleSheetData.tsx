import React, { useState, useEffect } from 'react';
import './GoogleSheetData.css';

interface SheetRow {
  [key: string]: string | number;
}

const GoogleSheetData: React.FC = () => {
  const [data, setData] = useState<SheetRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Replace this URL with your Google Sheet's JSON feed URL
    const SHEET_URL = 'YOUR_GOOGLE_SHEET_JSON_FEED_URL';

    const fetchData = async () => {
      try {
        const response = await fetch(SHEET_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="sheet-loading">Loading data...</div>;
  if (error) return <div className="sheet-error">Error: {error}</div>;

  return (
    <div className="sheet-container">
      <h2>Data from Google Sheet</h2>
      <div className="sheet-data">
        {data.map((row, index) => (
          <div key={index} className="sheet-row">
            {Object.values(row).map((value, i) => (
              <div key={i} className="sheet-cell">
                {value}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoogleSheetData; 