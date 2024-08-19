export const fetchProjects = async () => {
  const response = await fetch(
    "https://portfolio-api-eta-nine.vercel.app/api/projects"
  );
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
};
