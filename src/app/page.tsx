"use client";

import { useState, useEffect } from "react";

type Country = {
  name: { common: string };
  capital?: string[];
  region: string;
  population: number;
  flags: { svg: string };
};

export default function Home() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
        "https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags"
    )
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data)) {
            setCountries(data);
          }
          setLoading(false);
        })
        .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="p-6 text-lg">⏳ Loading countries...</p>;
  }

  // 🔍filtra países pelo texto digitado
  const filteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-6">🌍 Country Info</h1>

        {/* Campo de busca */}
        <input
            type="text"
            placeholder="🔍 Search for a country..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mb-6 w-full max-w-md p-2 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredCountries.map((country) => (
              <div
                  key={country.name.common}
                  className="p-4 border rounded-xl shadow hover:shadow-lg transition"
              >
                <img
                    src={country.flags.svg}
                    alt={country.name.common}
                    className="w-full h-32 object-cover rounded"
                />
                <h2 className="text-xl font-semibold mt-2">
                  {country.name.common}
                </h2>
                <p>Capital: {country.capital?.[0] || "N/A"}</p>
                <p>Region: {country.region}</p>
                <p>Population: {country.population.toLocaleString()}</p>
              </div>
          ))}
        </div>
      </main>
  );
}




