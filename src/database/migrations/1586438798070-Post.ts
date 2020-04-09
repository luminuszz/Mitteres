import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableColumn
} from 'typeorm';

export class Post1586438798070 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
           await queryRunner.createTable(
             new Table({
               name: 'post',
               columns: [
                 {
                   name: 'id',
                   type: 'int',
                   isPrimary: true,
                   isNullable: false,
                 },
                 {
                   name: 'title',
                   type: 'varchar',
                   isNullable: false,
                 },

                 {
                   name: 'description',
                   type: 'varchar',
                   isNullable: false,
                 },
                 
                 
                 

                
               ],

              

               
             }),
            
           true);
           await queryRunner.addColumn(
             'post',
             new TableColumn({
               name: 'userid',
               type: 'int',
             }),
           );

           await queryRunner.createForeignKey('post', new TableForeignKey({
             columnNames:['userid'],
             referencedColumnNames:['id'],
             referencedTableName: 'user',
             onDelete:'CASCADE'
           }))


    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropTable('post')
    }

}
