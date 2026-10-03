/**
 * Validador y normalizador de números telefónicos para Argentina.
 * Acepta formatos de cualquier provincia:
 * - AMBA/CABA (11): ej. 11 2345-6789, 011 15 2345-6789
 * - Provincias con código de área de 3 dígitos (ej: 261 Mendoza, 351 Córdoba, 341 Rosario): 261 251-5756
 * - Provincias con código de área de 4 dígitos (ej: 2944 Bariloche, 3873 Tartagal): 2944 12-3456
 * - Formato internacional: +54 9 261 251-5756, 5491123456789
 */
export function validateArgentinePhone(phone) {
  if (!phone || typeof phone !== 'string' || !phone.trim()) {
    return { isValid: false, message: 'Por favor, ingresá un número de teléfono.' }
  }

  // Eliminar espacios, guiones, paréntesis y símbolos
  let digits = phone.replace(/\D/g, '')

  // Quitar prefijo internacional de Argentina si está presente
  if (digits.startsWith('549')) {
    digits = digits.slice(3)
  } else if (digits.startsWith('54')) {
    digits = digits.slice(2)
  }

  // Quitar prefijo interurbano nacional '0'
  if (digits.startsWith('0')) {
    digits = digits.slice(1)
  }

  // Quitar prefijo de celular '15' según longitud y código de área:
  // 1) CABA/AMBA (11): 11 + 15 + 8 dígitos (longitud 12)
  if (digits.startsWith('1115') && digits.length === 12) {
    digits = '11' + digits.slice(4)
  }
  // 2) Códigos de área de 3 dígitos (ej: 261, 351, 341): 3 dígitos + 15 + 7 dígitos (longitud 12)
  else if (/^(2\d{2}|3\d{2})15\d{7}$/.test(digits)) {
    digits = digits.slice(0, 3) + digits.slice(5)
  }
  // 3) Códigos de área de 4 dígitos (ej: 2944, 3873): 4 dígitos + 15 + 6 dígitos (longitud 12)
  else if (/^(2\d{3}|3\d{3})15\d{6}$/.test(digits)) {
    digits = digits.slice(0, 4) + digits.slice(6)
  }

  // El número normalizado (código de área + abonado) debe tener exactamente 10 dígitos
  if (digits.length !== 10) {
    return {
      isValid: false,
      message: 'Ingresá un número con código de área (ej: 261 251-5756 o 11 2345-6789).',
    }
  }

  // Los códigos de área en Argentina comienzan con 11, o con 2 (2xx/2xxx) o con 3 (3xx/3xxx)
  if (!/^(11|[23]\d{1,3})\d+$/.test(digits)) {
    return {
      isValid: false,
      message: 'El código de área no corresponde a una provincia de Argentina.',
    }
  }

  return { isValid: true, normalized: digits }
}

/**
 * Formatea un número de 10 dígitos a una presentación amigable:
 * Ej: 2612515756 -> +54 9 261 251-5756
 * Ej: 1123456789 -> +54 9 11 2345-6789
 */
export function formatArgentinePhoneDisplay(normalizedDigits) {
  if (!normalizedDigits || normalizedDigits.length !== 10) return normalizedDigits
  if (normalizedDigits.startsWith('11')) {
    return `+54 9 11 ${normalizedDigits.slice(2, 6)}-${normalizedDigits.slice(6)}`
  }
  if (/^[23]\d{2}/.test(normalizedDigits)) {
    return `+54 9 ${normalizedDigits.slice(0, 3)} ${normalizedDigits.slice(3, 6)}-${normalizedDigits.slice(6)}`
  }
  return `+54 9 ${normalizedDigits.slice(0, 4)} ${normalizedDigits.slice(4, 7)}-${normalizedDigits.slice(7)}`
}
