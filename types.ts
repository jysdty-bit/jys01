import type React from 'react';

export interface Question {
  id: number;
  text: string;
}

export interface ResultLevel {
  title: string;
  description: string;
  color: string;
  bgColor: string;
  icon: React.ComponentType<{ className?: string }>;
}

export type Answers = Record<number, number>;

export type ScoreOption = {
  label: string;
  value: number;
};
