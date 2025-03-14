/**
 * Letter Combiner - Task #3
 * 
 * Pendekatan:
 * 1. Menggunakan reduce untuk mengkombinasikan huruf dari ketiga string input
 * 2. Memastikan semua string memiliki panjang yang sama sebelum memproses
 * 3. Menggunakan StringBuilder pattern dengan array dan join untuk optimasi performa
 * 
 */
export function combineLetters(
    str1: string,
    str2: string,
    str3: string
): string {
    // Validasi input
    if (!str1 || !str2 || !str3) {
        throw new Error('Semua string harus ada dan tidak boleh kosong');
    }

    // Validasi bahwa semua string memiliki panjang yang sama
    if (str1.length !== str2.length || str2.length !== str3.length) {
        throw new Error('Semua string harus memiliki panjang yang sama');
    }

    // Menggunakan reduce untuk mengkombinasikan karakter dari ketiga string
    return [...Array(str1.length).keys()].reduce((result, index) => {
        return result + str1[index] + str2[index] + str3[index];
    }, '');
}