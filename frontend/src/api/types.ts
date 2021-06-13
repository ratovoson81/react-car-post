export type UserType = {
  name: string;
  password: string;
};

export type CarType = {
  title: string;
  description: string;
  file: File | null;
  user: string;
};

export type ItemCarType = CarType & {
  _id: string;
  imageUrl: string;
  date: string;
  comments: [];
  user: {
    _id: string;
    name: string;
  };
};

export type CommentType = {
  content: string;
  user: string;
};
