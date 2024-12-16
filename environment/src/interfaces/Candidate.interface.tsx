// TODO: Create an interface for the Candidate objects returned by the API
interface Candidate {
    login: string;
    avatar_url: string;
    html_url: string;
    company: string | null;
    location: string | null;
    email: string | null;
  }
