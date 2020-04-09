import {
  MigrationInterface,
  QueryRunner,
  Table,
 
  
  

} from 'typeorm';


export class User1586438219131 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.createTable( new Table({
        name: 'user',
        columns:[
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isNullable: false
            
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false


          },

          {
            name: 'lastname',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'passwordhash',
            type: 'varchar',
            isNullable: false
          }

        ]
      }))

    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropTable('user');
    }

}
