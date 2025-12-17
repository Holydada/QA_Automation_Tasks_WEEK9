export async function fetchUser(userId){const res=await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`); if(!res.ok) throw new Error('Network error'); return res.json();}
