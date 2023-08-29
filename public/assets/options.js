export const locations = [
  {
    text: "I'm living my best life on a boat",
    value: "boat",
    desc: "Can be played on a boat",
  },
  {
    text: "I'm in a forest",
    value: "forest",
    desc: "Can be played in a forest",
  },
  {
    text: "I'm in a city",
    value: "city",
    desc: "Can be played in a concrete jungle",
  },
  {
    text: "I'm in the mountains",
    value: "mountains",
    desc: "Steep slopes and sharp rocks are okay",
  },
];

export const weathers = [
  {
    text: "sunny, warm, not too bad",
    value: "sunny",
    desc: "It has to be warm and sunny",
  },
  {
    text: "it's pouring",
    value: "rainy",
    desc: "Typical Hamburg i.e. rain",
  },
  {
    text: "wuthering heights",
    value: "windy",
    desc: "Wind is not an obstacle",
  },
  { text: "cloudy", value: "cloudy", desc: "Overcast is fine" },
];

export const companions = [
  { text: "just me", value: "alone", desc: "Nope, it is fun also alone" },
  { text: "1 person + me", value: "me + 1", desc: "One other person" },
  {
    text: "dog",
    value: "dog",
    desc: "Playable with a child or a very smart dog",
  },
  { text: "more people", value: "more people", desc: "Three or more people" },
];

export default {
  companions,
  locations,
  weathers,
};
