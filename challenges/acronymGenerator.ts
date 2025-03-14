/**
 * Acronym Generator - Task #4
 * 
 * Pendekatan:
 * - Normalisasi input (trim, lowercase) untuk konsistensi
 * - Penanganan khusus untuk nama dengan karakter khusus seperti '-' dan kata 'von'
 * - Penggunaan fungsi pembantu untuk memisahkan logika dan meningkatkan keterbacaan
 * 
 */
export function generateAcronym(fullName: string): string {
    // Handle edge cases
    if (!fullName || typeof fullName !== 'string') {
        return '';
    }

    const nameParts = fullName.trim().split(/\s+/);

    if (nameParts.length === 0) {
        return '';
    }

    let firstNameInitials = '';
    let lastNameInitials = '';

    // Check if "von" is present
    const vonIndex = nameParts.findIndex(part => part.toLowerCase() === 'von');
    const hasVon = vonIndex !== -1;

    // Extract first names (excluding "von" if present)
    const firstNameParts = hasVon
        ? nameParts.slice(0, vonIndex)
        : nameParts.slice(0, -1);

    firstNameInitials = firstNameParts
        .flatMap(name => name.split('-'))
        .map(name => name.charAt(0).toUpperCase())
        .join('');

    // Extract last name
    const lastName = nameParts[nameParts.length - 1];
    lastNameInitials = lastName
        .split('-')
        .map(name => name.charAt(0).toUpperCase())
        .join('');

    // Add 'v' for "von" if present
    if (hasVon) {
        return firstNameInitials + 'v' + lastNameInitials;
    }

    return firstNameInitials + lastNameInitials;
}
