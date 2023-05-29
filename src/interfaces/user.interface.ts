import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'name', nulable: false })
  name: string;

  @Column({ name: 'email', nulable: false })
  email: string;

  @Column({ name: 'phone' })
  phone: string;

  @Column({ name: 'cpf', nulable: false })
  cpf: string;

  @Column({ name: 'password', nulable: false })
  password: string;
}
