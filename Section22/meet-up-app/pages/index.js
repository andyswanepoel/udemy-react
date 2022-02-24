import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "Nathan Phillips Square",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Nathan_Phillips_Square_%2833343114810%29.jpg/1280px-Nathan_Phillips_Square_%2833343114810%29.jpg",
    address: "123 Bay Street, Toronto, ON",
    description: "Meeting at Nathan Phillips Square!"
  },
  {
    id: "m2",
    title: "Humber Bay Bridge",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Toronto_-_ON_-_Humber_Bay_und_Humber_Bay_Arch_Bridge.jpg/1280px-Toronto_-_ON_-_Humber_Bay_und_Humber_Bay_Arch_Bridge.jpg",
    address: "123 Humber Street, Toronto, ON",
    description: "Meeting at the bridge!"
  }
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
