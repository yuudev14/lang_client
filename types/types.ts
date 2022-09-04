export type authInputType = {
  name: string;
  type: string;
  placeholder?: string;
};
export type userType = {
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  verified?: string | null;
  _id?: string;
  fluent_language?: string[];
  language_to_study?: string[];
};
