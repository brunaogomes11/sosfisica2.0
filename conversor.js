function conversorCoulomb(from, to, value) {
    if (from === 'C' && to === 'mC') { convertedValue = parseFloat(value) * (Math.pow(10, (-3))); }
    if (from === 'C' && to === 'µC') { convertedValue = parseFloat(value) * (Math.pow(10, (-6))); }
    if (from === 'C' && to === 'nC') { convertedValue = parseFloat(value) * (Math.pow(10, (-9))); }
    if (from === 'C' && to === 'pC') { convertedValue = parseFloat(value) * (Math.pow(10, (-12))); }
    if (from === 'mC' && to === 'C') { convertedValue = parseFloat(value) / (Math.pow(10, (-3))); }
    if (from === 'mC' && to === 'µC') { convertedValue = parseFloat(value) * (Math.pow(10, (-3))); }
    if (from === 'mC' && to === 'nC') { convertedValue = parseFloat(value) * (Math.pow(10, (-6))); }
    if (from === 'mC' && to === 'pC') { convertedValue = parseFloat(value) * (Math.pow(10, (-9))); }
    if (from === 'µC' && to === 'C') { convertedValue = parseFloat(value) / (Math.pow(10, (-6))); }
    if (from === 'µC' && to === 'mC') { convertedValue = parseFloat(value) / (Math.pow(10, (-3))); }
    if (from === 'µC' && to === 'nC') { convertedValue = parseFloat(value) * (Math.pow(10, (-3))); }
    if (from === 'µC' && to === 'pC') { convertedValue = parseFloat(value) * (Math.pow(10, (-6))); }
    if (from === 'nC' && to === 'C') { convertedValue = parseFloat(value) / (Math.pow(10, (-9))); }
    if (from === 'nC' && to === 'mC') { convertedValue = parseFloat(value) / (Math.pow(10, (-6))); }
    if (from === 'nC' && to === 'µC') { convertedValue = parseFloat(value) / (Math.pow(10, (-3))); }
    if (from === 'nC' && to === 'pC') { convertedValue = parseFloat(value) * (Math.pow(10, (-3))); }
    if (from === 'pC' && to === 'C') { convertedValue = parseFloat(value) / (Math.pow(10, (-12))); }
    if (from === 'pC' && to === 'mC') { convertedValue = parseFloat(value) / (Math.pow(10, (-9))); }
    if (from === 'pC' && to === 'µC') { convertedValue = parseFloat(value) / (Math.pow(10, (-6))); }
    if (from === 'pC' && to === 'nC') { convertedValue = parseFloat(value) / (Math.pow(10, (-3))); }
    return convertedValue
}

function conversorDistancia(from, to, value) {
    if (from === 'm' && to === 'cm') { return parseFloat(value) / 100; }
    if (from === 'm' && to === 'mm') { return parseFloat(value) / 1000; }
    if (from === 'cm' && to === 'm') { return parseFloat(value) * 100; }
    if (from === 'cm' && to === 'mm') { return parseFloat(value) / 100; }
    if (from === 'mm' && to === 'm') { return parseFloat(value) * 1000; }
    if (from === 'mm' && to === 'cm') { return parseFloat(value) * 100; }
}