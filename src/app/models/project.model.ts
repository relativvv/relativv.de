export interface ProgrammingLanguage {
  displayName: string;
  colorHex: string;
}

export interface Project {
    displayName: string;
    description: string;
    programmingLanguages: ProgrammingLanguage[];
    gitHubLink: string;
}

export interface GitHubRepository {
  name: string;
  description: string;
  html_url: string;
}
