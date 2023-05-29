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
