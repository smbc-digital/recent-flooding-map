const livefloodingincidentsPopup = (feature, layer) => {
  const content = `<div class="item"><i class="fa fa-tint" aria-hidden="true"></i><p class="title">${feature.properties.flood_type}</p>
    <p></p>
    <p class="info">Enquiry Time: ${feature.properties.enquiry_time}</p>

    </div>`
  layer.bindPopup(content)
}

export {
  livefloodingincidentsPopup
}