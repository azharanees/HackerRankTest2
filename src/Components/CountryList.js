import React, { useEffect, useState } from "react";
import { response } from "../response";
function CountryList({ searchText }) {
  var countryList = response;
  var filteredList = response;
  filteredList = countryList.filter((country) =>
    country.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <section>
      <ul className="card country-list" data-testid="countryList">
        {filteredList.map((country) => (
          <li key={country} className="pa-10 pl-20">
            {country}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CountryList;
