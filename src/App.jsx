import TeamMemberCard from "./components/TeamMemberCard";

const teamMembers = [
  { name: "Ravi Sharma", title: "Full Stack Developer", experience: "3 Years" },
  { name: "Ananya Singh", title: "Software Architect", experience: "7 Years" },
  { name: "Kunal Joshi", title: "Cloud Engineer", experience: "5 Years" }
];

const App = () => (
  <main>
    {teamMembers.map((member, index) => (
      <TeamMemberCard key={index} {...member} />
    ))}
  </main>
);

export default App;