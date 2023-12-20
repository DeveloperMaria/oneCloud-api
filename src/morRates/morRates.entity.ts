import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  @Entity('morRates')
  export class MorRates {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    BackendDescription: string;

    @Column()
    Descriptioninvoice : string;

    @Column()
    MORID : number;

    @Column()
    Service : string;

    @Column()
    CommunicationCode : string;

    @Column()
    Isnap : number;

    @Column()
    ITfixed : number;

     @Column()
     ITfurniture : number;

    @Column()
    FixedEU : number;

    @Column()
    EUfurniture : number;

    @Column()
    FixedWorld : number;

     @Column()
     WorldFurniture : number;



    @CreateDateColumn({ type: 'timestamp' })
    activationDate: Date;
  }
  