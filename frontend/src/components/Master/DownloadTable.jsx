export const downloadCSV = (data) => {
    const filteredData = data.map(({ userId, ...rest }) => rest);
    const csvData = filteredData.map(row => Object.values(row).join(',')).join('\n');
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `data.csv`);
    link.click();
  };