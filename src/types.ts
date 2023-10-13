export interface Task {
  title: string;
  id: string;
  completed: boolean;
}

export type FilterBy = "all" | "completed" | "uncompleted";