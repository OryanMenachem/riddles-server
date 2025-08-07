

export class Player {
  id: string;
  name: string;
  role: 'player' | 'admin';
  best_time: number;
  hashed_password: string;
}
