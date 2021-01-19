function getColor_livefloodingevents(d) {
    switch  (d) {   case 'Blocked grid or drain'    :
                        return '#e41a1c'    
                    case 'Flooding'    :
                        return '#377eb8'
                    case 'Blocked gully'    :
                        return '#e41a1c' 
                }
    }
function livefloodingincidentsStyle (feature) {
    return {
        color: '#000',
        weight: 2,
        opacity: 1,
        fillColor: getColor_livefloodingevents (feature.properties.flood_type),
        fillOpacity: 0.5,
        radius: 8,
    }
}

export {
    livefloodingincidentsStyle
}