import { useState, useEffect } from 'react'; // Ensure React is imported for JSX
import { searchGithub, searchGithubUser } from '../api/API'; 
import { Candidate } from '../interfaces/Candidate.interface'; // Import the Candidate interface

// const CandidateSearch = () => {
//   return <h1>CandidateSearch</h1>;
// };

const CandidateSearch: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentCandidate, setCurrentCandidate] = useState<Candidate | null>(null);
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      const data = await searchGithub();
      setCandidates(data);
    };

    fetchCandidates();
  }, []);

  useEffect(() => {
    if (candidates.length > 0) {
      const fetchCandidateDetails = async () => {
        const details = await searchGithubUser(candidates[0].login);
        setCurrentCandidate(details);
      };
      fetchCandidateDetails();
    } else {
      setCurrentCandidate(null);
    }
  }, [candidates]);

  const saveCandidate = () => {
    if (currentCandidate) {
      setSavedCandidates([...savedCandidates, currentCandidate]);
      localStorage.setItem('savedCandidates', JSON.stringify([...savedCandidates, currentCandidate]));
    }
    skipCandidate();
  };

  const skipCandidate = () => {
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

export default CandidateSearch;
