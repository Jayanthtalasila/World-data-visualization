
let show = document.getElementById('bottom-head');

function displayCountries(countryList) {
  show.innerHTML = ''; // Clear previous display
  
  for (let i = 0; i < countryList.length; i++) {
    let div = document.createElement('div');
    div.textContent = countryList[i];
    show.appendChild(div);
    
    div.style.border = '2px solid black';
    div.style.padding = '30px';
    div.style.backgroundImage = "url('./images/map_image.jpg')";
    div.style.backgroundSize = "cover";
  }

  // Apply styles only once
  show.style.padding = '5px';
  show.style.textAlign = 'center';
  show.style.display = 'grid';
  show.style.gridTemplateColumns = 'repeat(6, 1fr)';
  show.style.gap = '10px';
  show.style.padding = '30px';
}

// Initial display of all countries
displayCountries(countries);

const search = document.getElementById('searchbar');

search.addEventListener('input', () => {
  const filter = search.value.toLowerCase();
  const filteredCountries = countries.filter(country => 
    country.toLowerCase().includes(filter)
  );
  displayCountries(filteredCountries);
});