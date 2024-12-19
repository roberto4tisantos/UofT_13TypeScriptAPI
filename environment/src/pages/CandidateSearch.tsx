import { useState, useEffect } from 'react'; // Ensure React is imported for JSX
import { searchGithub, searchGithubUser } from '../api/API'; //Import searchGithub, searchGithubUser
import { Candidate } from '../interfaces/Candidate.interface'; // Import the Candidate interface

// const CandidateSearch = () => {
//   return <h1>CandidateSearch</h1>;
// };

//Invoke React.FC
const CandidateSearch: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentCandidate, setCurrentCandidate] = useState<Candidate | null>(null);
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  //Invoke useEffect
  useEffect(() => {
    //Invoke fetchCandidates
    const fetchCandidates = async () => {
      //Invoke searchGithub
      const data = await searchGithub();
      //Invoke setCandidates
      setCandidates(data);
    };
    //Invoke fetchCandidates
    fetchCandidates();
  }, []);

  //Invoke useEffect
  useEffect(() => {
    if (candidates.length > 0) {
      //Invoke fetchCandidateDetails
      const fetchCandidateDetails = async () => {
        //Invoke searchGithubUser
        const details = await searchGithubUser(candidates[0].login);
        //Invoke setCurrentCandidate
        setCurrentCandidate(details);
      };
      //Invoke fetchCandidateDetails
      fetchCandidateDetails();
    } else {
      //Invoke setCurrentCandidate
      setCurrentCandidate(null);
    }
  }, [candidates]);

  //Invoke saveCandidate
  const saveCandidate = () => {
    if (currentCandidate) {
      //Invoke setSavedCandidates
      setSavedCandidates([...savedCandidates, currentCandidate]);
      //localStorage
      localStorage.setItem('savedCandidates', JSON.stringify([...savedCandidates, currentCandidate]));
    }
    //Invoke skipCandidate
    skipCandidate();
  };

  //skipCandidate
  const skipCandidate = () => {
    //Invoke setCandidates
    setCandidates(candidates.slice(1));
  };

  return (
    <section>
      <h1>Candidate Search</h1>
      {currentCandidate ? (
        <div>
          <img src={currentCandidate.avatar_url} alt={`${currentCandidate.login}'s avatar`} />
          <h2>{currentCandidate.login}</h2>
          <p>Location: {currentCandidate.location || 'N/A'}</p>
          <p>Company: {currentCandidate.company || 'N/A'}</p>
          <p>Email: {currentCandidate.email || 'N/A'}</p>
          <a href={currentCandidate.html_url} target="_blank" rel="noopener noreferrer">
            GitHub Profile
          </a>
          <div>
            <button onClick={saveCandidate}>+ Save</button>
            <button onClick={skipCandidate}>- Skip</button>
          </div>
        </div>
      ) : (
        <p>No more candidates to review.</p>
      )}
    </section>
  );
};

//Export CandidateSearch
export default CandidateSearch;
