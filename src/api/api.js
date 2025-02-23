export const getAllDepartments = async () => {
  const response = await fetch(`http://localhost:5000/departments`);
  return response.json();
};
