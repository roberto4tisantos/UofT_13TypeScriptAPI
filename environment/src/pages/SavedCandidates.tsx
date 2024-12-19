import { useEffect, useState } from 'react';
import { Candidate } from '../interfaces/Candidate.interface'; // Import the Candidate interface

// const SavedCandidates = () => {
//   return (
//     <>
//       <h1>Potential Candidates</h1>
//     </>
//   );
// };

//Invoke SavedCandidates
const SavedCandidates: React.FC = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);
  //Invoke useEffect
  useEffect(() => {
    const saved = localStorage.getItem('savedCandidates');
    if (saved) {
      //Invoke setSavedCandidates
      setSavedCandidates(JSON.parse(saved));
    }
  }, []);

  return (
    <section>
      <h1>Potential Candidates</h1>
      {savedCandidates.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Name</th>
              <th>Location</th>
              <th>Company</th>
              <th>Email</th>
              <th>GitHub</th>
            </tr>
          </thead>
          <tbody>
            {savedCandidates.map((candidate) => (
              <tr key={candidate.login}>
                <td>
                  <img src={candidate.avatar_url} alt={`${candidate.login}'s avatar`} style={{ width: '50px' }} />
                </td>
                <td>{candidate.login}</td>
                <td>{candidate.location || 'N/A'}</td>
                <td>{candidate.company || 'N/A'}</td>
                <td>{candidate.email || 'N/A'}</td>
                <td>
                  <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
                    Profile
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No candidates have been saved yet.</p>
      )}
    </section>
  );
};

//Export SavedCandidates
export default SavedCandidates;
