const table = document.getElementById('table')
const force = document.getElementById('force')
const lightsaber = document.getElementById('lightsaber')

function addRow () {
  const row = document.createElement('tr')
  const forceCell = document.createElement('td')
  const lightsaberCell = document.createElement('td')
  forceCell.textContent = name.value
  lightsaberCell.textContent = email.value
  row.appendChild(forceCell)
  row.appendChild(lightsaberCell)
  table.appendChild(row)
}