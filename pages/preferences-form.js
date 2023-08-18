import PreferencesButton from "@/components/PreferencesButton";
import { useRouter } from "next/router";
export default function PreferencesForm({
  selectedLocations,
  setSelectedLocations,
}) {
  const router = useRouter();
  const location = [
    "I'm living my best life on a boat",
    "I'm in a forest",
    "I'm in a city",
    "I'm in the mountains",
  ];

  function submitPreferences() {
    router.push("/");
  }

  return (
    <>
      <h3>I am bored, and...</h3>
      {location.map((location, i) => (
        <PreferencesButton
          key={location}
          value={location}
          selectedPreferences={selectedLocations}
          setPreferences={setSelectedLocations}
        />
      ))}
      <button onClick={submitPreferences}>Show matching games!</button>
    </>
  );
}
