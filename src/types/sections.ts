export interface Button {
  id: number;
  appearance: 'solid' | 'ghost';
  size: 'sm' | 'md' | 'lg';
  color: string;
  url: string;
  text: string;
  subText?: string | null;
  fluid: boolean;
  newTab: boolean;
  startIcon?: string | null;
  endIcon?: string | null;
}

export interface Demo {
  id: number;
  title: string;
  url: string;
  format: string;
}

export interface Background {
  id: number;
  alternativeText?: string | null;
  width: number;
  height: number;
  url: string;
}

export interface Brand {
  id: number;
  alternativeText?: string | null;
  title: string;
  url: string;
}

export interface Card {
  id: number;
  title: string;
  description: string;
  icon?: string;
  button?: {
    id: number;
    url: string;
    text: string;
  };
}

export interface Section {
  id: number;
  __component: string;
  theme: 'dark' | 'light';
  full?: boolean;
  preTitle?: string | null;
  title?: string;
  description?: string;
  buttons?: Button[];
  demo?: Demo;
  background?: Background;
  brands?: Brand[];
  cards?: Card[];
}