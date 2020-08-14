export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  Product: undefined;
};

export interface ProductObj {
  id: string;
  name: string;
  images: Array<{
    id: string;
    source: string;
    color?: string;
  }>;
  price: number;
  description?: string;
}
