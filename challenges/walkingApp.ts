/**
 * Walking App - Task #1
 * 
 * Pendekatan:
 * 1. Menggunakan sistem koordinat kartesian untuk melacak posisi
 * 2. Memeriksa apakah jumlah langkah tepat 10 (untuk waktu 10 menit)
 * 3. Menggunakan bitwise operation untuk efisiensi performa
 * 
 */

type Direction = 'n' | 's' | 'w' | 'e';

export function isValidWalk(walk: Direction[]): boolean {
    // Cek dulu apakah panjang walknya tepat 10
    if (walk.length !== 10) return false;
    
    // Gunakan koordinat x,y (0,0) sebagai titik awal
    let x = 0;
    let y = 0;
    
    // Mapping arah ke perubahan koordinat
    const directions = {
        'n': () => y++,
        's': () => y--,
        'e': () => x++,
        'w': () => x--
    };
    
    // Update koordinat berdasarkan setiap langkah
    walk.forEach(dir => directions[dir]());
    
    // Pakai bitwise OR untuk cek apakah posisi final kembali ke (0,0)
    // Jika x = 0 dan y = 0, maka x|y = 0, dan !(0) = true
    return !(x|y);
}