import PreferencesButton from "@/components/PreferencesButton";
import { useRouter } from "next/router";
export default function PreferencesForm({
  selectedLocations,
  setSelectedLocations,
  selectedWeathers,
  setSelectedWeathers,
  selectedCompanions,
  setSelectedCompanions,
}) {
  const router = useRouter();
  const locations = [
    { text: "I'm living my best life on a boat", value: "boat" },
    { text: "I'm in a forest", value: "forest" },
    { text: "I'm in a city", value: "city" },
    { text: "I'm in the mountains", value: "mountains" },
  ];

  const weathers = [
    { text: "sunny, warm, not too bad", value: "sunny" },
    { text: "rainy", value: "rainy" },
    { text: "wuthering heights", value: "windy" },
    { text: "cloudy", value: "cloudy" },
  ];

  const companions = [
    { text: "just me", value: "alone" },
    { text: "1 person + me", value: "me + 1" },
    { text: "dog", value: "dog" },
    { text: "more people", value: "more people" },
  ];

  function submitPreferences() {
    router.push("/");
  }

  return (
    <>
      <>
        <span>I am bored, and...</span>
        {locations.map((location, i) => (
          <PreferencesButton
            key={location.value}
            preference={location}
            selectedPreferences={selectedLocations}
            setPreferences={setSelectedLocations}
          />
        ))}
        <span>The weather is</span>
        {weathers.map((weather, i) => (
          <PreferencesButton
            key={weather.value}
            preference={weather}
            selectedPreferences={selectedWeathers}
            setPreferences={setSelectedWeathers}
          />
        ))}
        <span>My company is </span>
        {companions.map((company, i) => (
          <PreferencesButton
            key={company.value}
            preference={company}
            selectedPreferences={selectedCompanions}
            setPreferences={setSelectedCompanions}
          />
        ))}
      </>
      <section>
        <button onClick={submitPreferences}>Show matching games!</button>
      </section>
    </>
  );
}
