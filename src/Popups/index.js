const livefloodingincidentsPopup = (feature, layer) => {
  const content = `<div class="item"><i class="fa fa-tint" aria-hidden="true"></i><p class="title">${feature.properties.name}</p>
    <p></p>
    <p class="info">Enquiry Time: ${feature.enquiry_time}</p>

    </div>`
  layer.bindPopup(content)
}

export {
  livefloodingincidentsPopup
}