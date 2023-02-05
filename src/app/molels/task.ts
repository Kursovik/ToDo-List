export interface ITask {
   id: number;
    title: string;
    createdAt: string;
    completed: boolean;
    children: {
        id: number;
        parentId: number;
        title: string;
        createdAt: string;
        completed: boolean;
    }[];
}[]