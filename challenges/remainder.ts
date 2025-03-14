/**
 * Remainder - Task #2
 * 
 * Menghitung sisa bagi dari dua bilangan bulat
 * 
 * Pendekatan:
 * 1. Menentukan bilangan yang lebih besar dan lebih kecil
 * 2. Menggunakan operator modulo (%) untuk efisiensi
 * 3. Menangani kasus pembagian dengan nol
 * 
 */
export function remainder(n: number, m: number): number | string {
    // Validasi input
    if (isNaN(n) || isNaN(m)) return 'NaN';
    
    // Jika salah satu angka adalah 0
    if (n === 0 && m === 0) return 'NaN';
    if (m === 0) return 'NaN'; // Pembagian dengan nol
    if (n === 0) return 0; // 0 % m = 0
    
    // Menentukan nilai yang lebih besar dan lebih kecil
    const larger = Math.abs(n) >= Math.abs(m) ? n : m;
    const smaller = Math.abs(n) < Math.abs(m) ? n : m;
    
    // Menggunakan operator modulo untuk menghitung sisa pembagian
    const absoluteLarger = Math.abs(larger);
    const absoluteSmaller = Math.abs(smaller);
    
    return absoluteLarger % absoluteSmaller;
}
