import type { NextPage } from "next";
import AddChallenges from "./components/add-challenges";
import Challenges from "./challenges";

const ChallengesPage: NextPage = () => {
  return (
    <main className="mx-10">
      <div className="max-w-screen-xl mx-auto py-3">
        <h1>Challenges</h1>
        <AddChallenges />
        <Challenges/>
      </div>
    </main>
  );
};

export default ChallengesPage;
