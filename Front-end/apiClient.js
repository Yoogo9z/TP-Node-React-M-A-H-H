

const API_BASE_URL = 'http://localhost:5000';

export async function festchBieres() {
  const response = await fetch(`${API_BASE_URL}/bieres`);
  return response.json();
}
export async function festchBieres(id) {
  const response = await fetch(`${API_BASE_URL}/bieres/${id}`);
  return response.json();
}

export async function addBiere(movie) {
  const response = await fetch(`${API_BASE_URL}/bieres`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(movie)
  });
  return response.json();
}

export async function updateBiere(id, movie) {
  const response = await fetch(`${API_BASE_URL}/bieres/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(movie)
  });
  return response.json();
}

export async function deleteBiere(id) {
  await fetch(`${API_BASE_URL}/bieres/${id}`, { method: 'DELETE' });
}
