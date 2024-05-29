const API_BASE_URL = 'http://localhost:3000';


export async function fetchBars() {
  const response = await fetch(`${API_BASE_URL}/bars`);
  return response.json();
}

export async function fetchBar(id) {
  const response = await fetch(`${API_BASE_URL}/bars/${id}`);
  return response.json();
}

export async function addBars(bar) {
  const response = await fetch(`${API_BASE_URL}/bars`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bar)
  });
  return response.json();
}

export async function updateBar(id, bar) {
  const response = await fetch(`${API_BASE_URL}/bars/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bar)
  });
  return response.json();
}

export async function deleteBar(id) {
  await fetch(`${API_BASE_URL}/bars/${id}`, { method: 'DELETE' });
}
//********************* */
export async function fetchBieres() {
  const response = await fetch(`${API_BASE_URL}/bieres`);
  return response.json();
}

export async function addBiere(biere) {
  const response = await fetch(`${API_BASE_URL}/bieres`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(biere)
  });
  return response.json();
}

export async function updateBiere(id, biere) {
  const response = await fetch(`${API_BASE_URL}/bieres/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(biere)
  });
  return response.json();
}

export async function deleteBiere(id) {
  await fetch(`${API_BASE_URL}/bieres/${id}`, { method: 'DELETE' });
}


//****************** */
export async function fetchCommandes() {
  const response = await fetch(`${API_BASE_URL}/commandes`);
  return response.json();
}

export async function addCommande(commande) {
  const response = await fetch(`${API_BASE_URL}/commandes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(commande)
  });
  return response.json();
}

export async function updateCommande(id, commande) {
  const response = await fetch(`${API_BASE_URL}/commandes/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(commande)
  });
  return response.json();
}

export async function deleteCommandes(id) {
  await fetch(`${API_BASE_URL}/commandes/${id}`, { method: 'DELETE' });
}
//***************************** */