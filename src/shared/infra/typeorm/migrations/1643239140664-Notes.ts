import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Client1643239140664 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable (
            new Table({
                name: 'notes',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'title',
                        type: 'varchar',
                        length: '100',
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ],
            }),                        
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('clients');
    }

}
