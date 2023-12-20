import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  @Entity('billingGroup')
  export class BillingGroup {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
  
    @Column()
    firstName: string;

    @Column()
    Monthinadvance : number;

    @Column()
    Daytoexpiry : number;

    @Column()
    TransmitterCode : number;

    @Column()
    Name : string;

    @Column()
    Address : string;

    @Column()
    PostalCode : number;

    @Column()
    Common : string;

    @Column()
    Province : string;

    @Column()
    Telephone : number;


    @Column()
    CrimeCode : string;

    @Column()
    Bank : string;

    @Column()
    IBAN : string;


    @Column()
    PostalAccount : number;


    @Column()
    Email : string;

    @Column()
    VATNumber : number;

    @Column()
    TaxIDCode : number;

    @Column()
    SepaCodeCUC : string;


    @Column()
    SepaCreditorCode : number;


    @Column()
    DD1stUnpaidNotice : number;


    @Column()
    DD2stUnpaidNotice : number;

    @Column()
    GGServicesBlock : number;


    @Column()
    Nation : string;


    @CreateDateColumn({ type: 'timestamp' })
    activationDate: Date;
  }
  