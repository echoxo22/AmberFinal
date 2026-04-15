import { query } from './db';

export async function getAllCigarettes() {
    const res = await query('SELECT * FROM cigarettes ORDER BY id DESC');
    return res.rows;
}

export async function getCigaretteById(id: string) {
    const numericId = parseInt(id, 10);
    const res = await query('SELECT * FROM cigarettes WHERE id = $1', [numericId]);
    return res.rows[0];
}