export type jobType = {
  id: string;
  date: Date;
  title: string;
  tags: string[];
  description: string;
  company: string;
  apply_url: string;
  location: string;
};

export type briteEventType = {
  logo: {
    original: { url: string };
    crop_mask: { height: number; width: number };
  };
  start: { utc: string };
  end: { utc: string };
  description: { text: string };
  name: { text: string };
  url: string;
  is_free: boolean;
};
