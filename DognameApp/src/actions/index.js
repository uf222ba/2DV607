export function selectLitter(litter) {
    //console.log('A litter has been selected:', litter.litter);
    return {
        type: 'LITTER_SELECTED',
        payload: litter
    };
}

