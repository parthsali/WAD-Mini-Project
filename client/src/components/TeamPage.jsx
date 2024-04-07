// src/components/TeamPage.js

const team = [
  {
    name: "Riddhi Sabane",
    rollNo: "33165",
    image: "https://avatars.githubusercontent.com/u/103882818?v=4",
    github: "",
    linkedin: "",
  },
  {
    name: "Parth Sali",
    rollNo: "33166",
    image: "https://avatars.githubusercontent.com/u/108068631?v=4",
    github: "",
    linkedin: "",
  },
  {
    name: "Gopal Saraf",
    rollNo: "33167",
    image: "https://avatars.githubusercontent.com/u/83419951?v=4",
    github: "",
    linkedin: "",
  },
  {
    name: "Vaishnavi Shinde",
    rollNo: "33170",
    image: "https://avatars.githubusercontent.com/u/113288802?v=4",
    github: "",
    linkedin: "",
  },
];

function TeamPage() {
  return (
    <div className=" h-screen mt-6 flex flex-col items-center">
      <div className="w-[90%] flex flex-col items-center justify-center border border-gray-300 p-4 rounded-lg mt-4">
        <h2 className="text-2xl font-bold mb-4">Team Members</h2>
        {team.map((member) => (
          <>
            <div className="w-[90%] flex items-center justify-between border-b border-gray-300 p-4">
              <div className="flex items-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-20 w-20 rounded-full"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-gray-500">{member.rollNo}</p>
                </div>
              </div>
              <div className="flex items-center">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Github
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-4 text-blue-500 hover:underline"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default TeamPage;
