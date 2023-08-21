import PreferencesButton from "@/components/PreferencesButton";
import { useRouter } from "next/router";
export default function PreferencesForm({
  selectedLocations,
  setSelectedLocations,
}) {
  const router = useRouter();
  const location = [
    { text: "I'm living my best life on a boat", value: "boat" },
    { text: "I'm in a forest", value: "forest" },
    { text: "I'm in a city", value: "city" },
    { text: "I'm in the mountains", value: "mountains" },
  ];

  function submitPreferences() {
    router.push("/");
  }

  return (
    <>
      <h3>I am bored, and...</h3>
      {location.map((location, i) => (
        <PreferencesButton
          key={location.value}
          preference={location}
          selectedPreferences={selectedLocations}
          setPreferences={setSelectedLocations}
        />
      ))}
      <button onClick={submitPreferences}>Show matching games!</button>
    </>
  );
}
