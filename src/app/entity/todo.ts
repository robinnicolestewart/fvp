export class Todo {
  id?: string;
  createdTime?: string;
  fields: {
    Title?: string;
    isStarred?: boolean;
    isCompleted?: boolean;
    dueDate?: string;
  };

  constructor(title: string) {
    this.fields = {};
    this.fields.Title = title;
  }
}
