export const saveData = (data) => {
  localStorage.setItem('scheduleData', JSON.stringify(data));
};

export const loadData = () => {
  const data = localStorage.getItem('scheduleData');
  return data ? JSON.parse(data) : [];
};
