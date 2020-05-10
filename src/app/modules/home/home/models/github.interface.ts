export interface gitHub {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  created_at: string;
  owner: {
    login: string;
    id: number;
    node_id: string;
  };
}
export interface ResponseGitHub {
  items: gitHub[];
}
